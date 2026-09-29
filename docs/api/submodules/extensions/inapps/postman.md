<sup>*[`Extensions Submodule`](../overview.md) > [`InApps`](../inapps.md) > `Postman`*</sup>

# Postman

- **Developer:** Postman, Inc.
- **BrowserType:** [`inapp`](/info/browser/type/inapp)

## User-Agent Examples

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Postman/9.29.0 Chrome/94.0.4606.81 Electron/15.5.7 Safari/537.36
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { InApps }    from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const appParser = new UAParser(InApps);
const browser = appParser.setUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Postman/9.29.0 Chrome/94.0.4606.81 Electron/15.5.7 Safari/537.36').getBrowser();

console.log(browser);
// {name: "Postman", version: "9.29.0", type: "inapp"}

// Compare using the built-in enum
const { InApp } = Extension.BrowserName;
console.log(browser.is(InApp.POSTMAN));
// true
```

## References

- [Postman🡥](https://www.postman.com/)
