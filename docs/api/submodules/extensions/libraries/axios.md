[`← Libraries`](../libraries.md)

# Axios

Axios is a promise-based HTTP client for browsers and Node.js.

## User-Agent Examples

```sh
axios/1.7.2
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('axios/1.7.2').getBrowser());
// {name: "axios", version: "1.7.2", major: "1", type: "library"}
```

## References

- [Axios🡥](https://axios-http.com/)
