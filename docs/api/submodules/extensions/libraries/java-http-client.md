<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Java HTTP Client`*</sup>

# Java HTTP Client

- **Developer:** Oracle
- **BrowserType:** [`library`](/info/browser/type/library)

Java HTTP Client is the standard Java API for sending HTTP requests and receiving responses.

## User-Agent Examples

```sh
Java-http-client/11.0.6
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('Java-http-client/11.0.6').getBrowser();

console.log(browser);
// {name: "Java-http-client", version: "11.0.6", major: "11", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.JAVA_HTTPCLIENT));
// true
```

## References

- [Java HTTP Client🡥](https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html)
