<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Axios`*</sup>

# Axios

- **Developer:** Axios
- **BrowserType:** [`library`](/info/browser/type/library)

Axios is a promise-based HTTP client for browsers and Node.js.

## User-Agent Examples

```sh
axios/1.7.2
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('axios/1.7.2').getBrowser();

console.log(browser);
// {name: "axios", version: "1.7.2", major: "1", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.AXIOS));
// true
```

## References

- [Axios🡥](https://axios-http.com/)
