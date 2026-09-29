<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Requests`*</sup>

# Requests

- **Developer:** Kenneth Reitz
- **BrowserType:** [`library`](/info/browser/type/library)

Requests is a simple HTTP library for Python.

## User-Agent Examples

```sh
python-requests/2.32
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('python-requests/2.32').getBrowser();

console.log(browser);
// {name: "python-requests", version: "2.32", major: "2", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.PYTHON_REQUESTS));
// true
```

## References

- [Requests🡥](https://requests.readthedocs.io/)
