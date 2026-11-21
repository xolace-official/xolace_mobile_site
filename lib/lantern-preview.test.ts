import { describe, expect, mock, test } from "bun:test"
import {
  fetchLanternPreview,
  isLanternSlug,
  previewUrl,
  readTimeLabel,
} from "./lantern-preview"

const BASE = "https://example.convex.site"

const STORY = {
  slug: "loud-at-night",
  kind: "story",
  title: "Loud at night",
  dek: "Why everything gets louder after dark.",
  storyDescriptor: "Ama, 24, after a breakup",
  coverUrl: "https://cdn.example.com/covers/loud.jpg",
  readMin: 4,
}

type Fetcher = (url: URL | RequestInfo, init?: RequestInit) => Promise<Response>

function respond(status: number, body: unknown) {
  return mock<Fetcher>(
    async () =>
      new Response(typeof body === "string" ? body : JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json" },
      })
  )
}

function asFetch(fn: Fetcher) {
  return fn as unknown as typeof fetch
}

describe("isLanternSlug", () => {
  test("accepts kebab-case slugs", () => {
    for (const slug of ["loud-at-night", "m1", "a-2-b"])
      expect(isLanternSlug(slug)).toBe(true)
  })

  test("rejects anything else before a request is made", () => {
    for (const slug of [
      "",
      "Loud-At-Night",
      "loud_at_night",
      "-loud",
      "loud-",
      "loud--night",
      "../etc",
      "loud%20night",
      "a".repeat(121),
    ])
      expect(isLanternSlug(slug)).toBe(false)
  })
})

describe("previewUrl", () => {
  test("puts the slug in the query", () => {
    expect(previewUrl(BASE, "loud-at-night")?.toString()).toBe(
      `${BASE}/lantern/preview?slug=loud-at-night`
    )
  })

  test("refuses a base that isn't http(s)", () => {
    expect(previewUrl("not a url", "x")).toBeNull()
    expect(previewUrl("ftp://example.com", "x")).toBeNull()
  })
})

describe("fetchLanternPreview", () => {
  test("returns the parsed preview", async () => {
    const fetcher = respond(200, STORY)
    const result = await fetchLanternPreview("loud-at-night", {
      baseUrl: BASE,
      fetcher: asFetch(fetcher),
    })
    expect(result).toEqual({ status: "ok", preview: STORY })

    const [url, init] = fetcher.mock.calls[0]
    expect(String(url)).toBe(`${BASE}/lantern/preview?slug=loud-at-night`)
    expect(init?.next).toEqual({ revalidate: 3600 })
    expect(init?.signal).toBeInstanceOf(AbortSignal)
  })

  test("treats missing, null and blank optional fields as absent", async () => {
    const result = await fetchLanternPreview("plain", {
      baseUrl: BASE,
      fetcher: asFetch(
        respond(200, {
          ...STORY,
          kind: "explainer",
          storyDescriptor: null,
          coverUrl: undefined,
        })
      ),
    })
    expect(result.status).toBe("ok")
    if (result.status !== "ok") return
    expect(result.preview.storyDescriptor).toBeUndefined()
    expect(result.preview.coverUrl).toBeUndefined()
  })

  test("drops a non-https cover", async () => {
    const result = await fetchLanternPreview("loud-at-night", {
      baseUrl: BASE,
      fetcher: asFetch(
        respond(200, { ...STORY, coverUrl: "http://cdn.example.com/a.jpg" })
      ),
    })
    expect(result.status === "ok" && result.preview.coverUrl).toBeUndefined()
  })

  test("rounds the read time to a whole minute, at least one", async () => {
    const result = await fetchLanternPreview("loud-at-night", {
      baseUrl: BASE,
      fetcher: asFetch(respond(200, { ...STORY, readMin: 0.4 })),
    })
    expect(result.status === "ok" && result.preview.readMin).toBe(1)
  })

  test("maps 404 and 400 to not_found", async () => {
    for (const status of [404, 400]) {
      const result = await fetchLanternPreview("gone", {
        baseUrl: BASE,
        fetcher: asFetch(respond(status, { error: "not_found" })),
      })
      expect(result).toEqual({ status: "not_found" })
    }
  })

  test("never fetches for a malformed slug", async () => {
    const fetcher = respond(200, STORY)
    const result = await fetchLanternPreview("../admin", {
      baseUrl: BASE,
      fetcher: asFetch(fetcher),
    })
    expect(result).toEqual({ status: "not_found" })
    expect(fetcher).not.toHaveBeenCalled()
  })

  test("is unavailable without a configured endpoint", async () => {
    const fetcher = respond(200, STORY)
    for (const baseUrl of ["", "not a url"]) {
      const result = await fetchLanternPreview("loud-at-night", {
        baseUrl,
        fetcher: asFetch(fetcher),
      })
      expect(result).toEqual({ status: "unavailable" })
    }
    expect(fetcher).not.toHaveBeenCalled()
  })

  test("is unavailable on a server error", async () => {
    const result = await fetchLanternPreview("loud-at-night", {
      baseUrl: BASE,
      fetcher: asFetch(respond(500, { error: "boom" })),
    })
    expect(result).toEqual({ status: "unavailable" })
  })

  test("is unavailable when the body isn't JSON or breaks the contract", async () => {
    for (const body of [
      "<html>",
      { ...STORY, kind: "poem" },
      { ...STORY, title: "" },
      { ...STORY, readMin: "4" },
      { slug: "loud-at-night" },
    ]) {
      const result = await fetchLanternPreview("loud-at-night", {
        baseUrl: BASE,
        fetcher: asFetch(respond(200, body)),
      })
      expect(result).toEqual({ status: "unavailable" })
    }
  })

  test("is unavailable when the network fails", async () => {
    const result = await fetchLanternPreview("loud-at-night", {
      baseUrl: BASE,
      fetcher: asFetch(
        mock<Fetcher>(async () => {
          throw new TypeError("fetch failed")
        })
      ),
    })
    expect(result).toEqual({ status: "unavailable" })
  })

  test("gives up after the timeout", async () => {
    const hang = mock<Fetcher>(
      (_url, init) =>
        new Promise<Response>((_resolve, reject) => {
          init?.signal?.addEventListener("abort", () =>
            reject(init.signal?.reason)
          )
        })
    )
    const started = Date.now()
    const result = await fetchLanternPreview("loud-at-night", {
      baseUrl: BASE,
      fetcher: asFetch(hang),
      timeoutMs: 50,
    })
    expect(result).toEqual({ status: "unavailable" })
    expect(Date.now() - started).toBeLessThan(1000)
  })
})

describe("readTimeLabel", () => {
  test("reads as minutes", () => {
    expect(readTimeLabel(4)).toBe("4 min read")
  })
})
