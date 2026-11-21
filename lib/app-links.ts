// What lets a shared https://www.xolaceinc.com/lantern/<slug> link open the installed app
// (iOS Universal Links, Android App Links). Ids come from the app repo's apps/mobile config;
// the Team ID from its Xcode project (DEVELOPMENT_TEAM).

export const APPLE_TEAM_ID = "KH72W5N8KJ"
export const IOS_BUNDLE_ID = "com.xolaceincorg.xolace"
export const ANDROID_PACKAGE = "com.xolaceincorg.xolace"

// Google's app signing key, not the EAS upload key: Play re-signs every build it ships.
// Play Console → Test and release → App integrity → App signing key certificate → SHA-256.
// If it doesn't match a real fingerprint, assetlinks.json lists no app and Android links open the web page.
export const ANDROID_SHA256_CERT_FINGERPRINT =
  "E6:B3:1E:44:DB:89:2F:47:F4:B2:21:31:E0:C9:7B:74:E6:1C:32:4F:13:81:D6:8D:EF:66:42:F9:4F:C2:DF:0E"

// Only these paths open the app; the rest of the site stays in the browser
export const APP_LINK_PATHS = ["/lantern/*"] as const

// The app's own scheme; shipped builds open library/<slug> (apps/mobile/src/features/lantern/lantern-links.ts)
export function appSchemeUrl(slug: string): string {
  return `xolace://library/${encodeURIComponent(slug)}`
}

const FINGERPRINT = /^([0-9A-F]{2}:){31}[0-9A-F]{2}$/

export function isCertFingerprint(value: string): boolean {
  return FINGERPRINT.test(value)
}

export function appleAppSiteAssociation() {
  return {
    applinks: {
      details: [
        {
          appIDs: [`${APPLE_TEAM_ID}.${IOS_BUNDLE_ID}`],
          components: APP_LINK_PATHS.map((path) => ({ "/": path })),
        },
      ],
    },
  }
}

export function assetLinks(fingerprint = ANDROID_SHA256_CERT_FINGERPRINT) {
  if (!isCertFingerprint(fingerprint)) return []
  return [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: ANDROID_PACKAGE,
        sha256_cert_fingerprints: [fingerprint],
      },
    },
  ]
}
