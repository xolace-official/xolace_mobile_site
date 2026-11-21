import { appleAppSiteAssociation } from "@/lib/app-links"

// Apple fetches this without following redirects and wants application/json despite the missing extension
export const dynamic = "force-static"

export function GET() {
  return Response.json(appleAppSiteAssociation())
}
