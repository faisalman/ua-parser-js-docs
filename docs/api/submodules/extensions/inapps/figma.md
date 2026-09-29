<sup>*[`Extensions Submodule`](../overview.md) > [`InApps`](../inapps.md) > `Figma`*</sup>

# Figma

- **Developer:** Figma, Inc.
- **BrowserType:** [`inapp`](/info/browser/type/inapp)

## User-Agent Examples

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4_0) AppleWebKit/537.36 (KHTML, like Gecko) Figma/99.0.0 Chrome/89.0.4389.128 Electron/12.0.9 Safari/537.36
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { InApps }    from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const appParser = new UAParser(InApps);
const browser = appParser.setUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4_0) AppleWebKit/537.36 (KHTML, like Gecko) Figma/99.0.0 Chrome/89.0.4389.128 Electron/12.0.9 Safari/537.36').getBrowser();

console.log(browser);
// {name: "Figma", version: "99.0.0", type: "inapp"}

// Compare using the built-in enum
const { InApp } = Extension.BrowserName;
console.log(browser.is(InApp.FIGMA));
// true
```

## References

- [Figma🡥](https://www.figma.com/)
