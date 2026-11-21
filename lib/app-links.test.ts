import { describe, expect, test } from "bun:test"
import {
  ANDROID_PACKAGE,
  appSchemeUrl,
  appleAppSiteAssociation,
  assetLinks,
  isCertFingerprint,
} from "./app-links"
import { PLAY_STORE_URL } from "./links"

const FINGERPRINT = Array.from({ length: 32 }, () => "AB").join(":")

describe("apple-app-site-association", () => {
  test("opens only /lantern/* in the production app", () => {
    expect(appleAppSiteAssociation()).toEqual({
      applinks: {
        details: [
          {
            appIDs: ["KH72W5N8KJ.com.xolaceincorg.xolace"],
            components: [{ "/": "/lantern/*" }],
          },
        ],
      },
    })
  })
})

describe("assetlinks.json", () => {
  test("lists no app while the fingerprint is a placeholder", () => {
    expect(assetLinks("REPLACE_WITH_PLAY_APP_SIGNING_SHA256")).toEqual([])
    expect(assetLinks("ab:cd")).toEqual([])
  })

  test("declares the package once a real fingerprint is set", () => {
    expect(assetLinks(FINGERPRINT)).toEqual([
      {
        relation: ["delegate_permission/common.handle_all_urls"],
        target: {
          namespace: "android_app",
          package_name: "com.xolaceincorg.xolace",
          sha256_cert_fingerprints: [FINGERPRINT],
        },
      },
    ])
  })

  test("uses the package the Play Store link points at", () => {
    expect(PLAY_STORE_URL).toEndWith(`id=${ANDROID_PACKAGE}`)
  })

  test("accepts only colon-separated uppercase SHA-256", () => {
    expect(isCertFingerprint(FINGERPRINT)).toBe(true)
    expect(isCertFingerprint(FINGERPRINT.toLowerCase())).toBe(false)
    expect(isCertFingerprint(FINGERPRINT.replaceAll(":", ""))).toBe(false)
  })
})

describe("appSchemeUrl", () => {
  test("opens the entry through the app's own scheme", () => {
    expect(appSchemeUrl("loud-at-night")).toBe("xolace://library/loud-at-night")
  })
})
