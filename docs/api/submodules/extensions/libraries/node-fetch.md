<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `node-fetch`*</sup>

# node-fetch

- **Developer:** node-fetch
- **BrowserType:** [`library`](/info/browser/type/library)

node-fetch provides the Fetch API for Node.js.

## User-Agent Examples

```sh
node-fetch/1.0 (+https://github.com/bitinn/node-fetch)
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const ua = 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)';
const browser = libParser.setUA(ua).getBrowser();

console.log(browser);
// {name: "node-fetch", version: "1.0", major: "1", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.NODE_FETCH));
// true
```

## References

- [node-fetch🡥](https://github.com/node-fetch/node-fetch)
