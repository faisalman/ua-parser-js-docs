<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Node.js`*</sup>

# Node.js

- **Developer:** OpenJS Foundation
- **BrowserType:** [`library`](/info/browser/type/library)

Node.js is a JavaScript runtime with built-in networking and web APIs.

## User-Agent Examples

```sh
Node.js/22
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('Node.js/22').getBrowser();

console.log(browser);
// {name: "Node.js", version: "22", major: "22", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.NODE_JS));
// true
```

## References

- [Node.js🡥](https://nodejs.org/)
