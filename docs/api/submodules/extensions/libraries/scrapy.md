<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `Scrapy`*</sup>

# Scrapy

- **Developer:** Zyte
- **BrowserType:** [`library`](/info/browser/type/library)

Scrapy is a Python framework for web crawling and data extraction.

## User-Agent Examples

```sh
Scrapy/1.5.0 (+https://scrapy.org)
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('Scrapy/1.5.0 (+https://scrapy.org)').getBrowser();

console.log(browser);
// {name: "Scrapy", version: "1.5.0", major: "1", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.SCRAPY));
// true
```

## References

- [Scrapy🡥](https://scrapy.org/)
