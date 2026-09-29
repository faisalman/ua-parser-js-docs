<sup>*[`Extensions Submodule`](../overview.md) > [`InApps`](../inapps.md) > `VS Code`*</sup>

# VS Code

- **Developer:** Microsoft
- **BrowserType:** [`inapp`](/info/browser/type/inapp)

## User-Agent Examples

```sh
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.85.1 Chrome/114.0.5735.289 Electron/25.9.7 Safari/537.36
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { InApps }    from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const appParser = new UAParser(InApps);
const browser = appParser.setUA('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.85.1 Chrome/114.0.5735.289 Electron/25.9.7 Safari/537.36').getBrowser();

console.log(browser);
// {name: "VS Code", version: "1.85.1", type: "inapp"}

// Compare using the built-in enum
const { InApp } = Extension.BrowserName;
console.log(browser.is(InApp.VSCODE));
// true
```

## References

- [VS Code🡥](https://code.visualstudio.com/)
