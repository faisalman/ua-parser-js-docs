<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `SuperAgent`*</sup>

# SuperAgent

- **Developer:** TJ Holowaychuk
- **BrowserType:** [`library`](/info/browser/type/library)

SuperAgent is a lightweight HTTP client for browsers and Node.js.

## User-Agent Examples

```sh
node-superagent/5.0.2
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('node-superagent/5.0.2').getBrowser();

console.log(browser);
// {name: "node-superagent", version: "5.0.2", major: "5", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.NODE_SUPERAGENT));
// true
```

## References

- [SuperAgent🡥](https://github.com/forwardemail/superagent)
