# Migrating UAParser.js from v1 to v2

## Breaking Changes

### Licensing Changes

UAParser.js v2 is available under AGPLv3, with [PRO licenses](/intro/upgrade-to-pro) (Personal, Business, and Enterprise) available for proprietary commercial use.

### Detection Changes

- Some browser names now explicitly indicate mobile variants:
  - `Chrome` on a `mobile` device → `Mobile Chrome`
  - `Firefox` on a `mobile` device → `Mobile Firefox`

- Some operating system names have been normalized:
  - `Mac OS` → `macOS`
  - `Chromium OS` → `Chrome OS`

## What's New

### ES Modules & TypeScript Support

UAParser.js now provides first-class ES module and TypeScript support:
  
```ts
import { UAParser } from 'ua-parser-js';
```

### Web Headers Support

Parse the `User-Agent` and Client Hints directly from a Web-standard `Headers` object:

```js
import { UAParser } from 'ua-parser-js';

const result = UAParser(request.headers);
```

### Custom & Predefined Extensions

Add custom regular expressions or predefined extension packs at runtime with `useExtension()`. Pass an array to use multiple extensions:
  
```js
import { UAParser } from 'ua-parser-js';
import { Crawlers, Fetchers, Libraries } from 'ua-parser-js/extensions';

const parser = new UAParser();
parser.useExtension([Crawlers, Fetchers, Libraries]);
```

### Command Line Support

Parse a User-Agent directly from the command line, or process multiple User-Agent strings from a file:

```sh
# direct parsing
npx ua-parser-js "Your User-Agent"

# batch processing
npx ua-parser-js --input-file log.txt --output-file log-result.json
```

### Client Hints Support

Improve detection accuracy using User-Agent Client Hints when available:

```js
const os = await parser.getOS().withClientHints();
```

### Feature Detection Enhancements

Refine device detection using features available in the browser environment:

```js
const device = await parser.getDevice().withFeatureCheck();
```

### Result Comparison Helper

Compare parsed results using predefined enum values:

```js
import { EngineName } from 'ua-parser-js/enums';

const engine = parser.getEngine();

if (engine.is(EngineName.BLINK)) {
    // Chrome-based browser
}
```

### Support for Full-String Output

Return a formatted string representing the parsed result:

```js
parser.getBrowser().toString();
// Firefox 148.0
```

### Identify AR/VR Devices

Detect extended reality (XR) devices, including AR and VR headsets:

```js
import { DeviceType } from 'ua-parser-js/enums';

const device = parser.getDevice();

if (device.is(DeviceType.XR)) {
    // XR device
}
```

### Identify User-Agent Type

Browser detection can also identify nother User-Agent types such as cli tools, crawlers, or embedded apps:

```js
parser.getBrowser().type;
// crawler, cli, email, fetcher, inapp, library, mediaplayer, or undefined
```

### New Submodules

#### `ua-parser-js/enums`

Provides standardized constants for UAParser.js properties:

```csv
BrowserName, BrowserType, CPUArch, DeviceType, DeviceVendor, EngineName, 
OSName, Extension
```

#### `ua-parser-js/extensions`

Provides predefined extension packs to expand detection capabilities:

```csv
Bots, CLIs, Crawlers, Emails, ExtraDevices, Fetchers, InApps, Libraries,
MediaPlayers, Vehicles
```

#### `ua-parser-js/helpers`

Provides utility helpers for advanced detection logic:
  
```js
isFrozenUA(); // Checks if the user-agent matches a frozen/reduced user-agent pattern
```

#### `ua-parser-js/bot-detection`

Provides utilities for identifying automated traffic:

```js
isAIAssistant();  // Checks if the browser is an AI assistant
isAICrawler();    // Checks if the browser is an AI crawler
isBot();          // Checks if the browser is a bot
```

#### `ua-parser-js/browser-detection`

Provides utilities to enhance browser identification:

```js
isChromeFamily(); // Checks if the browser is Chrome-based (uses Blink engine) 
                  // e.g. Opera, Edge, Vivaldi, Brave, and Arc
isElectron();     // Detects if current window is running within Electron
isFromEU();       // Detects if current browser's timezone is from an EU country
isStandalonePWA(); // Detects if current window is a standalone PWA
```

#### `ua-parser-js/device-detection`

Provides utilities to enhance device identification:

```js
getDeviceVendor();  // Guess the device vendor based on its model name
isAppleSilicon();   // Detects Apple Silicon device properties
```

## How to Upgrade

Install the latest version of UAParser.js from npm:

```sh
npm install ua-parser-js@latest
```