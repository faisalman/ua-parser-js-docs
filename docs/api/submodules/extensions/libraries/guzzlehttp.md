[`← Libraries`](../libraries.md)

# Guzzle

Guzzle is a PHP HTTP client for sending requests and integrating with web services.

## User-Agent Examples

```sh
GuzzleHttp/6.5.5 curl/7.70.0 PHP/7.4.22
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('GuzzleHttp/6.5.5 curl/7.70.0 PHP/7.4.22').getBrowser());
// {name: "GuzzleHttp", version: "6.5.5", major: "6", type: "library"}
```

## References

- [Guzzle🡥](https://docs.guzzlephp.org/)
