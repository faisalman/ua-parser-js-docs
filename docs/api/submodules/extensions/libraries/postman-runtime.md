<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Postman Runtime`*</sup>

# Postman Runtime

- **Developer:** Postman, Inc.
- **BrowserType:** [`library`](/info/browser/type/library)

Postman Runtime is the request execution engine used by Postman.

## User-Agent Examples

```sh
PostmanRuntime/7.26.5
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('PostmanRuntime/7.26.5').getBrowser();

console.log(browser);
// {name: "PostmanRuntime", version: "7.26.5", major: "7", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.POSTMAN_RUNTIME));
// true
```

## References

- [Postman Runtime🡥](https://github.com/postmanlabs/postman-runtime)
