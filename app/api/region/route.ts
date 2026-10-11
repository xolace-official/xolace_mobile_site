import { regionFromCountry } from "@/lib/region"

// Vercel sets this header from the visitor's IP. Locally it is absent, so the region is `global`.
export function GET(request: Request) {
  const region = regionFromCountry(request.headers.get("x-vercel-ip-country"))
  return Response.json(
    { region },
    { headers: { "Cache-Control": "private, no-store" } }
  )
}
