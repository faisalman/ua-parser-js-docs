<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `urllib3`*</sup>

# urllib3

- **Developer:** urllib3
- **BrowserType:** [`library`](/info/browser/type/library)

urllib3 is a Python HTTP client with connection pooling and request helpers.

## User-Agent Examples

```sh
python-urllib3/1.26.18
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('python-urllib3/1.26.18').getBrowser();

console.log(browser);
// {name: "python-urllib3", version: "1.26.18", major: "1", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.PYTHON_URLLIB3));
// true
```

## References

- [urllib3🡥](https://urllib3.readthedocs.io/)
