<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Apache HttpClient`*</sup>

# Apache HttpClient

- **Developer:** Apache Software Foundation
- **BrowserType:** [`library`](/info/browser/type/library)

Apache HttpClient is a Java library for sending HTTP requests.

## User-Agent Examples

```sh
Apache-HttpClient/4.5.14 (Java/17.0.12)
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('Apache-HttpClient/4.5.14 (Java/17.0.12)').getBrowser();

console.log(browser);
// {name: "Apache-HttpClient", version: "4.5.14", major: "4", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.APACHE_HTTPCLIENT));
// true
```

## References

- [Apache HttpClient🡥](https://hc.apache.org/httpcomponents-client-5.5.x/)
