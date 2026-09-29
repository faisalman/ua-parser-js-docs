<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `HTTPX`*</sup>

# HTTPX

- **Developer:** Encode
- **BrowserType:** [`library`](/info/browser/type/library)

HTTPX is a fully featured HTTP client for Python.

## User-Agent Examples

```sh
python-httpx/0.27.2
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('python-httpx/0.27.2').getBrowser();

console.log(browser);
// {name: "python-httpx", version: "0.27.2", major: "0", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.PYTHON_HTTPX));
// true
```

## References

- [HTTPX🡥](https://www.python-httpx.org/)
