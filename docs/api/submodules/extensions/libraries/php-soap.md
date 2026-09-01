[`← Libraries`](../libraries.md)

# PHP SOAP

PHP SOAP is an extension for creating SOAP clients and servers.

## User-Agent Examples

```sh
PHP-SOAP/7.4.33
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('PHP-SOAP/7.4.33').getBrowser());
// {name: "PHP-SOAP", version: "7.4.33", major: "7", type: "library"}
```

## References

- [PHP SOAP🡥](https://www.php.net/manual/en/book.soap.php)
