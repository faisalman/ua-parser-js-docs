<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Got`*</sup>

# Got

- **Developer:** Sindre Sorhus
- **BrowserType:** [`library`](/info/browser/type/library)

got is a human-friendly and powerful HTTP request library for Node.js.

## User-Agent Examples

```sh
got/9.6.0 (https://github.com/sindresorhus/got)
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const ua = 'got/9.6.0 (https://github.com/sindresorhus/got)';
const browser = libParser.setUA(ua).getBrowser();

console.log(browser);
// {name: "got", version: "9.6.0", major: "9", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.GOT));
// true
```

## References

- [got🡥](https://github.com/sindresorhus/got)
