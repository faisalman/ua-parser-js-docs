<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `aiohttp`*</sup>

# aiohttp

- **Developer:** aio-libs
- **BrowserType:** [`library`](/info/browser/type/library)

aiohttp is an asynchronous HTTP client and server framework for Python.

## User-Agent Examples

```sh
Python/3.9 aiohttp/3.8.1
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('Python/3.9 aiohttp/3.8.1').getBrowser();

console.log(browser);
// {name: "aiohttp", version: "3.8.1", major: "3", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.AIOHTTP));
// true
```

## References

- [aiohttp🡥](https://docs.aiohttp.org/)
