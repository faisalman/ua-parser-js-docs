<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Guzzle`*</sup>

# Guzzle

- **Developer:** Guzzle
- **BrowserType:** [`library`](/info/browser/type/library)

Guzzle is a PHP HTTP client for sending requests and integrating with web services.

## User-Agent Examples

```sh
GuzzleHttp/6.5.5 curl/7.70.0 PHP/7.4.22
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('GuzzleHttp/6.5.5 curl/7.70.0 PHP/7.4.22').getBrowser();

console.log(browser);
// {name: "GuzzleHttp", version: "6.5.5", major: "6", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.GUZZLEHTTP));
// true
```

## References

- [Guzzle🡥](https://docs.guzzlephp.org/)
