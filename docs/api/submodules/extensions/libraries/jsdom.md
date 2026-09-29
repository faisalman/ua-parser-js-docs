<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `jsdom`*</sup>

# jsdom

- **Developer:** jsdom
- **BrowserType:** [`library`](/info/browser/type/library)

jsdom is a JavaScript implementation of web standards for use with Node.js.

## User-Agent Examples

```sh
Mozilla/5.0 (unknown OS) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/11.12.0
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const ua = 'Mozilla/5.0 (unknown OS) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/11.12.0';
const browser = libParser.setUA(ua).getBrowser();

console.log(browser);
// {name: "jsdom", version: "11.12.0", major: "11", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.JSDOM));
// true
```

## References

- [jsdom🡥](https://github.com/jsdom/jsdom)
