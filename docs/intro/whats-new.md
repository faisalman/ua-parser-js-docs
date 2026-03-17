# Migrating UAParser.js from v1 to v2

## What's Breaking

### Licensing Changes

- UAParser.js v2 is licensed under AGPLv3 for open-source use.
- PRO Licenses also available for proprietary-commercial use.

### Detection Changes

- Some browser names now explicitly indicate mobile variants:
  - `Chrome` browser in `mobile` device => `Mobile Chrome` browser
  - `Firefox` browser in `mobile` device => `Mobile Firefox` browser

- Some operating system names have been normalized:
  - `Mac OS` => `macOS`
  - `Chromium OS` => `Chrome OS`

## What's New

### ES Modules & TypeScript Support

UAParser.js now provides first-class ESM and TypeScript support:
  
```ts
import { UAParser } from 'ua-parser-js';
```

### Custom & Predefined Extensions

Extend detection rules by passing custom regex definitions or use our predefined extension packs:
  
```js
import { UAParser } from 'ua-parser-js';
import { Crawlers, Fetchers, Libraries } from 'ua-parser-js/extensions';

const parser = new UAParser();
parser.useExtension([Crawlers, Fetchers, Libraries]);
```

### Command Line Support

Parse a user-agent directly from the command line, or process multiple user-agent strings from a file:

```sh
# direct parsing 
npx ua-parser-js "Your User-Agent"

# batch processing
npx ua-parser-js --input-file log.txt --output-file log-result.json
```

### Client Hints Support

Improves detection accuracy by using user-agent client hints when available:

```js
const os = await parser.getOS().withClientHints();
```

### Feature Detection Enhancements

Refines detection results by detecting available features in the runtime environment:

```js
const device = await parser.getDevice().withFeatureCheck();
```

### Result Comparison Helper

Provides a simple way to compare parsed result:

```js
import { DeviceType } from 'ua-parser-js/enums';
...
if (parser.getEngine().is(EngineName.BLINK)) {
  // Chrome-based browser
}
```

### Support for Full-String Output

Returns a formatted string representing the parsed result:

```js
parser.getBrowser().toString();
// Firefox 148.0
```

### Identify AR/VR Devices

Added support to detect XR (AR/VR) devices:

```js
import { DeviceType } from 'ua-parser-js/enums';
...
if (parser.getDevice().type == DeviceType.XR) {
  // XR device
}
```

### Identify User-Agent Type

Browser detection also provides the type of user-agent to distinguish standard browsers from other environments such as bots, CLI tools, or embedded apps:

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

Predefined extension packs to expand detection capabilities:

```csv
Bots, Crawlers, CLIs, Emails, ExtraDevices, Fetchers, InApps, Libraries, 
Mediaplayers, Vehicles
```

#### `ua-parser-js/helpers`

Provides utility helpers for advanced detection logic:
  
```js
isFrozenUA(); // Checks if the user-agent matches a frozen/reduced user-agent pattern
```

#### `ua-parser-js/bot-detection`

Provides utility methods for identifying automated traffic:

```js
isAIAssistant();  // Checks if the browser is an AI assistant
isAICrawler();    // Checks if the browser is an AI crawler
isBot();          // Checks if the browser is a bot
```

#### `ua-parser-js/browser-detection`

Provides utility methods to enhance browser identification:

```js
isChromeFamily(); // Checks if the browser is Chrome-based (uses Blink engine) 
                  // e.g: New Opera, New Edge, Vivaldi, Brave, Arc, etc.
isElectron();     // Detects if current window is running within Electron
isFromEU();       // Detects if current browser's timezone is from an EU country
isStandalonePWA();// Detects if current window is a standalone PWA
```

#### `ua-parser-js/device-detection`

Provides utility methods to enhance device identification:

```js
getDeviceVendor();  // Guess the device vendor based on its model name
isAppleSilicon();   // Detects Apple Silicon device properties
```

## How to Upgrade

Install the latest version of UAParser.js from npm:

```sh
npm install ua-parser-js@latest
```