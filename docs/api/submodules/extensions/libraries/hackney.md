<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `hackney`*</sup>

# hackney

- **Developer:** Benoit Chesneau
- **BrowserType:** [`library`](/info/browser/type/library)

hackney is an HTTP client library for Erlang.

## User-Agent Examples

```sh
hackney/1.20.1
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('hackney/1.20.1').getBrowser();

console.log(browser);
// {name: "hackney", version: "1.20.1", major: "1", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.HACKNEY));
// true
```

## References

- [hackney🡥](https://github.com/benoitc/hackney)
