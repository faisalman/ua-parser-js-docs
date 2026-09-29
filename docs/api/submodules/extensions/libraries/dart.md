<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Dart`*</sup>

# Dart

- **Developer:** Google
- **BrowserType:** [`library`](/info/browser/type/library)

Dart is a programming language for building multiplatform applications.

## User-Agent Examples

```sh
Dart/3.5 (dart:io)
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('Dart/3.5 (dart:io)').getBrowser();

console.log(browser);
// {name: "Dart", version: "3.5", major: "3", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.DART));
// true
```

## References

- [Dart🡥](https://dart.dev/)
