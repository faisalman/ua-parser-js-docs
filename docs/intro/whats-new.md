# What's New in UAParser.js v2

## Migrating from v1 to v2

### What's Breaking:

- **Licensing Changes:**
  - UAParser.js is now licensed under AGPLv3 for open-source use, with PRO Licenses available for commercial/proprietary use

- **Browser Detection on Mobile Devices:**
    - `"Chrome"` => `"Mobile Chrome"`
    - `"Firefox"` => `"Mobile Firefox"`

- **OS Detection:**
    - `"Mac OS"` => `"macOS"`
    - `"Chromium OS"` => `"Chrome OS"`

### What's New:

- **Support for ES Modules & TypeScript:**
  - Import directly as an ES module with TypeScript support: `import { UAParser } from 'ua-parser-js'`

- **Support for Custom/Predefined Extensions:**
  - Pass custom regexes or predefined extensions as a list to `UAParser()`

- **Support for CLI Parsing:**
  - Parse a user-agent directly from the command line using `npx ua-parser-js "[User-Agent]"`

- **Enhanced Detection with Client Hints:**
  - `withClientHints()`: Improves detection accuracy by leveraging client hints

- **Enhanced Detection with Feature Detection:**
  - `withFeatureCheck()`: Refines detection results using feature detection

- **Simple Comparison for Detection Results:**
  - `is()`: Enables easy comparison checks against the detection result

- **Detailed Result Output:**
  - `toString()`: Returns the detection result in form of a full-name string

- **New Device Type:**
  - Added `xr` to identify AR/VR devices

- **New Browser Property:**
  - Added `browser.type` to identify additional browser types:
    - `crawler`, `cli`, `email`, `fetcher`, `inapp`, `library`, `mediaplayer`

- **New Submodules:**
  - **`'ua-parser-js/enums'`**: Provides constants for these specific properties:
    - `browser.name`, `browser.type`, `cpu.architecture`, `device.type`, `device.vendor`, `engine.name`, `os.name`

  - **`'ua-parser-js/extensions'`**: Predefined extensions for various use cases:
    - `Bots`, `Crawlers`, `CLIs`, `Emails`, `ExtraDevices`, `Fetchers`, `InApps`, `Libraries`, `Mediaplayers`

  - **`'ua-parser-js/helpers'`**: Provides utility methods to extend detection functionality:
    - `getDeviceVendor()`: Guesses the device vendor based on its model name
    - `isAppleSilicon()`: Detects Apple Silicon device properties
    - `isBot()`: Checks if the browser is a bot
    - `isChromeFamily()`: Checks if the browser is Chrome-based (uses Blink engine) — e.g., New Opera, New Edge, Vivaldi, Brave, Arc, etc.
    - `isElectron()`: Detects if current window is running within Electron
    - `isFromEU()`: Detects if current browser's timezone is from an EU country
    - `isFrozenUA()`: Checks if the user-agent matches a frozen/reduced user-agent pattern
    - `isStandalonePWA()`: Detects if current window is a standalone PWA