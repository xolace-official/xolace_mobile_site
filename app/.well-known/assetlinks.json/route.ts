import { assetLinks } from "@/lib/app-links"

export const dynamic = "force-static"

export function GET() {
  return Response.json(assetLinks())
}
