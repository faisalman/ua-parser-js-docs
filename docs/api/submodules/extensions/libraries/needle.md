<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Needle`*</sup>

# Needle

- **Developer:** Tomas Pollak
- **BrowserType:** [`library`](/info/browser/type/library)

Needle is a lightweight HTTP client for Node.js.

## User-Agent Examples

```sh
Needle/3.2.0 (Node.js v18.14.2; win32 x64)
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const ua = 'Needle/3.2.0 (Node.js v18.14.2; win32 x64)';
const browser = libParser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Needle", version: "3.2.0", major: "3", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.NEEDLE));
// true
```

## References

- [Needle🡥](https://github.com/tomas/needle)
