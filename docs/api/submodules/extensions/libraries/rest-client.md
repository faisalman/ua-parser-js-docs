<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `REST Client`*</sup>

# REST Client

- **Developer:** REST Client
- **BrowserType:** [`library`](/info/browser/type/library)

REST Client is a Ruby library for making HTTP and REST requests.

## User-Agent Examples

```sh
rest-client/2.1.0 (linux-gnu x86_64) ruby/2.7.2p137
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const ua = 'rest-client/2.1.0 (linux-gnu x86_64) ruby/2.7.2p137';
const browser = libParser.setUA(ua).getBrowser();

console.log(browser);
// {name: "rest-client", version: "2.1.0", major: "2", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.REST_CLIENT));
// true
```

## References

- [REST Client🡥](https://github.com/rest-client/rest-client)
