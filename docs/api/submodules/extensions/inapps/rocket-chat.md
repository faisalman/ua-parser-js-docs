<sup>*[`Extensions Submodule`](../overview.md) > [`InApps`](../inapps.md) > `Rocket.Chat`*</sup>

# Rocket.Chat

- **Developer:** Rocket.Chat Technologies Corp.
- **BrowserType:** [`inapp`](/info/browser/type/inapp)

## User-Agent Examples

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Rocket.Chat/3.8.16 Chrome/106.0.5249.199 Electron/21.3.3 Safari/537.36
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { InApps }    from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const appParser = new UAParser(InApps);
const browser = appParser.setUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Rocket.Chat/3.8.16 Chrome/106.0.5249.199 Electron/21.3.3 Safari/537.36').getBrowser();

console.log(browser);
// {name: "Rocket.Chat", version: "3.8.16", type: "inapp"}

// Compare using the built-in enum
const { InApp } = Extension.BrowserName;
console.log(browser.is(InApp.ROCKETCHAT));
// true
```

## References

- [Rocket.Chat🡥](https://www.rocket.chat/)
