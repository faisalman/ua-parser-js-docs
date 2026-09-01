[`← Libraries`](../libraries.md)

# aiohttp

aiohttp is an asynchronous HTTP client and server framework for Python.

## User-Agent Examples

```sh
Python/3.9 aiohttp/3.8.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('Python/3.9 aiohttp/3.8.1').getBrowser());
// {name: "aiohttp", version: "3.8.1", major: "3", type: "library"}
```

## References

- [aiohttp🡥](https://docs.aiohttp.org/)
