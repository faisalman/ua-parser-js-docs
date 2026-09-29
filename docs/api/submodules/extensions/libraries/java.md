<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Java`*</sup>

# Java

- **Developer:** Oracle
- **BrowserType:** [`library`](/info/browser/type/library)

Java is a programming platform whose standard library includes HTTP networking APIs.

## User-Agent Examples

```sh
Java/1.6.0_14
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('Java/1.6.0_14').getBrowser();

console.log(browser);
// {name: "Java", version: "1.6.0_14", major: "1", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.JAVA));
// true
```

## References

- [Java🡥](https://www.java.com/)
