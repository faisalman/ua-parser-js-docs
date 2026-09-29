<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Go HTTP Client`*</sup>

# Go HTTP Client

- **Developer:** The Go Authors
- **BrowserType:** [`library`](/info/browser/type/library)

Go's HTTP client provides standard-library support for sending HTTP requests.

## User-Agent Examples

```sh
go-http-client/1.1
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('go-http-client/1.1').getBrowser();

console.log(browser);
// {name: "go-http-client", version: "1.1", major: "1", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.GO_HTTP_CLIENT));
// true
```

## References

- [Go HTTP client🡥](https://pkg.go.dev/net/http)
