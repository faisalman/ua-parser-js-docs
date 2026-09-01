[`← Libraries`](../libraries.md)

# Scrapy

Scrapy is a Python framework for web crawling and data extraction.

## User-Agent Examples

```sh
Scrapy/1.5.0 (+https://scrapy.org)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('Scrapy/1.5.0 (+https://scrapy.org)').getBrowser());
// {name: "Scrapy", version: "1.5.0", major: "1", type: "library"}
```

## References

- [Scrapy🡥](https://scrapy.org/)
