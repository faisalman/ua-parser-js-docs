[`← enums`](/api/submodules/enums/overview)

# `BrowserType` enum

```csv:no-line-numbers
CRAWLER, CLI, EMAIL, FETCHER, INAPP, MEDIAPLAYER, LIBRARY
```

::: info
See list of possible browser type [here](/info/browser/type).
:::

## Values

| Enum | Value |
|-|-|
| `BrowserType.CLI` | `"cli"` |
| `BrowserType.CRAWLER` | `"crawler"` |
| `BrowserType.EMAIL` | `"email"` |
| `BrowserType.FETCHER` | `"fetcher"` |
| `BrowserType.INAPP` | `"inapp"` |
| `BrowserType.MEDIAPLAYER` | `"mediaplayer"` |
| `BrowserType.LIBRARY` | `"library"` |

## Code Example

```js [now-playing.js]
import { UAParser } from 'ua-parser-js'; 
import { BrowserType } from 'ua-parser-js/enums';

if (UAParser().browser.is(BrowserType.MEDIAPLAYER)) {
    console.log('La la la..');
}
```