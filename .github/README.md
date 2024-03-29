# Phish-Scanner

[![npm (scoped)](https://img.shields.io/npm/v/phish-scanner.svg)](https://www.npmjs.com/package/phish-scanner)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/phish-scanner.svg)](https://www.npmjs.com/package/phish-scanner)

For security information on this package, please refer to the SECURITY.md file.

---

This package supports both ESM and CommonJS.

To use this package with ESM, please refer to the snippet below:

```typescript
import { scan } from "phish-scanner";

const keys {}

const phishScanner = PhishScanner(link, keys);

// this returns a promise, so you can use async/await or .then()

if (phishscanner) {
  // this is a phish link, do something
}
```

To use this package with CommonJS, please refer to the snippet below:

```javascript
const { scan } = require("phish-scanner");

const keys {}

const phishScanner = PhishScanner(link, keys);

// this returns a promise, so you can use async/await or .then()

if (phishscanner) {
  // this is a phish link, do something
}
```

---

This is the bare minimum with this package, and will call **several** APIs that have open endpoints. However, for the most accurate results, you should use your own API keys for some services we use.

We use the following services as our bare minimum:
- [1st Party It's Phishy API](https://api.itsphishy.xyz)
- [Walshy](https://bad-domains.walshy.dev)
- [SinkingYahts](https://sinking.yachts)
- More being discovered every day!

You can get these keys from the following services:
- [Phisherman](https://phisherman.gg)
- [Google Safe Browsing](https://developers.google.com/safe-browsing/v4/get-started)
- [urlscan.io](https://urlscan.io/about-api/)
- [VirusTotal](https://developers.virustotal.com/reference#url-scan)
- [CheckPhish](https://checkphish.ai/)
- [IpQualityScore](https://www.ipqualityscore.com/)
- More to come soon!

To provide your own keys, add them to the keys object like so:

```typescript
const keys = {
  googleSafeBrowsing: "Your Google Safe Browsing key here",
  phisherman: "Your Phisherman key here",
  urlScan: "Your urlscan.io key here",
  virusTotal: "Your VirusTotal key here",
  checkPhish: "Your CheckPhish key here",
  ipQualityScore: "Your IpQualityScore key here",
};
```

this will then automaticaly enable these services during the scan.

---