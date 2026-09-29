<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Bun`*</sup>

# Bun

- **Developer:** Oven
- **BrowserType:** [`library`](/info/browser/type/library)

Bun is an all-in-one JavaScript runtime, toolkit, and package manager.

## User-Agent Examples

```sh
Bun/1.0.6
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('Bun/1.0.6').getBrowser();

console.log(browser);
// {name: "Bun", version: "1.0.6", major: "1", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.BUN));
// true
```

## References

- [Bun🡥](https://bun.sh/)
