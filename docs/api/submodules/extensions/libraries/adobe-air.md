<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Adobe AIR`*</sup>

# Adobe AIR

- **Developer:** HARMAN
- **BrowserType:** [`library`](/info/browser/type/library)

Adobe AIR is a cross-platform runtime for building desktop and mobile applications.

## User-Agent Examples

```sh
Mozilla/5.0 (Windows; U; en-US) AppleWebKit/533.19.4 (KHTML, like Gecko) AdobeAIR/3.1
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const ua = 'Mozilla/5.0 (Windows; U; en-US) AppleWebKit/533.19.4 (KHTML, like Gecko) AdobeAIR/3.1';
const browser = libParser.setUA(ua).getBrowser();

console.log(browser);
// {name: "AdobeAIR", version: "3.1", major: "3", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.ADOBE_AIR));
// true
```

## References

- [Adobe AIR🡥](https://airsdk.harman.com/)
