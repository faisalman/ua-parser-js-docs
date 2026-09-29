<sup>*[`Extensions Submodule`](../overview.md) > [`InApps`](../inapps.md) > `Discord`*</sup>

# Discord

- **Developer:** Discord Inc.
- **BrowserType:** [`inapp`](/info/browser/type/inapp)

## User-Agent Examples

```sh
# Discord on Linux
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.26 Chrome/108.0.5359.215 Electron/22.3.2 Safari/537.36

# Discord on iPad
Discord/52.0 (iPad; iOS 14.4; Scale/2.00)
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { InApps }    from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const ua_linux = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.26 Chrome/108.0.5359.215 Electron/22.3.2 Safari/537.36';
const ua_ipad = 'Discord/52.0 (iPad; iOS 14.4; Scale/2.00)';

const appParser = new UAParser(InApps);

const browser1 = appParser.setUA(ua_linux).getBrowser();
const browser2 = appParser.setUA(ua_ipad).getBrowser();

// Compare using the built-in enum
const { InApp } = Extension.BrowserName;
console.log(browser1.is(InApp.DISCORD)); // true
console.log(browser2.is(InApp.DISCORD)); // true
```

## References

- [Discord🡥](https://discord.com/)
