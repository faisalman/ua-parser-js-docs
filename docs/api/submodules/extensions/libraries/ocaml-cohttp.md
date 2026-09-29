<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Cohttp`*</sup>

# Cohttp

- **Developer:** MirageOS
- **BrowserType:** [`library`](/info/browser/type/library)

ocaml-cohttp is an OCaml library for HTTP clients and servers.

## User-Agent Examples

```sh
ocaml-cohttp/1.2.00
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('ocaml-cohttp/1.2.00').getBrowser();

console.log(browser);
// {name: "ocaml-cohttp", version: "1.2.00", major: "1", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.OCAML_COHTTP));
// true
```

## References

- [ocaml-cohttp🡥](https://github.com/mirage/ocaml-cohttp)
