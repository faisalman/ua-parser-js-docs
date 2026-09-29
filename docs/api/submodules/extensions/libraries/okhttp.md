<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `OkHttp`*</sup>

# OkHttp

- **Developer:** Square
- **BrowserType:** [`library`](/info/browser/type/library)

OkHttp is an HTTP client for Java and Kotlin applications.

## User-Agent Examples

```sh
okhttp/3.2.0
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('okhttp/3.2.0').getBrowser();

console.log(browser);
// {name: "okhttp", version: "3.2.0", major: "3", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.OKHTTP));
// true
```

## References

- [OkHttp🡥](https://square.github.io/okhttp/)
