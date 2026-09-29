<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Deno`*</sup>

# Deno

- **Developer:** Deno Land Inc.
- **BrowserType:** [`library`](/info/browser/type/library)

Deno is a secure JavaScript and TypeScript runtime with built-in web APIs.

## User-Agent Examples

```sh
Deno/2.1.7
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('Deno/2.1.7').getBrowser();

console.log(browser);
// {name: "Deno", version: "2.1.7", major: "2", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.DENO));
// true
```

## References

- [Deno🡥](https://deno.com/)
