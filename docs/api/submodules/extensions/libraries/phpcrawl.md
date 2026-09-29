<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `PHPCrawl`*</sup>

# PHPCrawl

- **Developer:** Michael Merian
- **BrowserType:** [`library`](/info/browser/type/library)

phpcrawl is a configurable web crawler library for PHP.

## User-Agent Examples

```sh
phpcrawl
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('phpcrawl').getBrowser();

console.log(browser);
// {name: "phpcrawl", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.PHP_CRAWL));
// true
```

## References

- [phpcrawl🡥](https://github.com/mmerian/phpcrawl)
