<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `urllib`*</sup>

# urllib

- **Developer:** Python Software Foundation
- **BrowserType:** [`library`](/info/browser/type/library)

urllib is Python's standard-library package for working with URLs.

## User-Agent Examples

```sh
Python-urllib/2.6
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('Python-urllib/2.6').getBrowser();

console.log(browser);
// {name: "Python-urllib", version: "2.6", major: "2", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.PYTHON_URLLIB));
// true
```

## References

- [Python urllib🡥](https://docs.python.org/3/library/urllib.html)
