<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Jetty`*</sup>

# Jetty

- **Developer:** Eclipse Foundation
- **BrowserType:** [`library`](/info/browser/type/library)

Jetty is a Java web server and servlet container with HTTP client support.

## User-Agent Examples

```sh
Jetty/11.0.13
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('Jetty/11.0.13').getBrowser();

console.log(browser);
// {name: "Jetty", version: "11.0.13", major: "11", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.JETTY));
// true
```

## References

- [Jetty🡥](https://jetty.org/)
