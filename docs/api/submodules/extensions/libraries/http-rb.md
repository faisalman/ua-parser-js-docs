<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `HTTP.rb`*</sup>

# HTTP.rb

- **Developer:** HTTP.rb
- **BrowserType:** [`library`](/info/browser/type/library)

HTTP.rb is a Ruby HTTP client with a chainable API.

## User-Agent Examples

```sh
http.rb/4.2.0
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('http.rb/4.2.0').getBrowser();

console.log(browser);
// {name: "http.rb", version: "4.2.0", major: "4", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.HTTP_RB));
// true
```

## References

- [HTTP.rb🡥](https://httprb.com/)
