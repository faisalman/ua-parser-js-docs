[`← Browser Type`](../type.md)

# `inapp`

WebView/embedded browsers within apps to open web content without leaving the app, typically with minimal controls.

::: tip
See the full list of detected values in the [`InApps`](/api/submodules/extensions/inapps) extension.
:::

## User-Agent Examples

```sh
# Slack
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Slack/4.39.90 Chrome/127.0.6533.72 Electron/13.1.9 Safari/537.36

# Discord
Discord/52.0 (iPad; iOS 14.4; Scale/2.00)

# Microsoft Teams
Mozilla/5.0 (Macintosh; Intel Mac OS X 11_3_1) AppleWebKit/537.36 (KHTML, like Gecko) Teams/1.8.00.3758 Chrome/126.0.6478.261 Electron/31.7.7 Safari/537.36

# Notion
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Notion/2.0.23 Chrome/91.0.4472.164 Electron/13.6.9 Safari/537.36

# VS Code
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.85.1 Chrome/114.0.5735.289 Electron/25.9.7 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';
import { BrowserType } from 'ua-parser-js/enums';

const parser = new UAParser(InApps);

console.log(parser.setUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Slack/4.39.90 Chrome/127.0.6533.72 Electron/13.1.9 Safari/537.36').getBrowser());
// {name: "Slack", version: "4.39.90", major: "4", type: "inapp"}

console.log(parser.browser.is(BrowserType.INAPP));
// true
```
