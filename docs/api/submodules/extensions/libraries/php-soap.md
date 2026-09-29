<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `PHP SOAP`*</sup>

# PHP SOAP

- **Developer:** The PHP Group
- **BrowserType:** [`library`](/info/browser/type/library)

PHP SOAP is an extension for creating SOAP clients and servers.

## User-Agent Examples

```sh
PHP-SOAP/7.4.33
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('PHP-SOAP/7.4.33').getBrowser();

console.log(browser);
// {name: "PHP-SOAP", version: "7.4.33", major: "7", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.PHP_SOAP));
// true
```

## References

- [PHP SOAP🡥](https://www.php.net/manual/en/book.soap.php)
