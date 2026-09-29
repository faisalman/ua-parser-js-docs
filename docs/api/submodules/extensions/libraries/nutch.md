<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Apache Nutch`*</sup>

# Apache Nutch

- **Developer:** Apache Software Foundation
- **BrowserType:** [`library`](/info/browser/type/library)

Apache Nutch is an extensible and scalable web crawler written in Java.

## User-Agent Examples

```sh
AliyunSecBot/Nutch-1.21-SNAPSHOT
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('AliyunSecBot/Nutch-1.21-SNAPSHOT').getBrowser();

console.log(browser);
// {name: "Nutch", version: "1.21-SNAPSHOT", major: "1", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.NUTCH));
// true
```

## References

- [Apache Nutch🡥](https://nutch.apache.org/)
