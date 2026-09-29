<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Undici`*</sup>

# Undici

- **Developer:** Node.js
- **BrowserType:** [`library`](/info/browser/type/library)

undici is an HTTP client for Node.js that powers its built-in Fetch API.

## User-Agent Examples

```sh
undici
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('undici').getBrowser();

console.log(browser);
// {name: "undici", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.UNDICI));
// true
```

## References

- [undici🡥](https://github.com/nodejs/undici)
