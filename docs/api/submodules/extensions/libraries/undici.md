[`← Libraries`](../libraries.md)

# undici

undici is an HTTP client for Node.js that powers its built-in Fetch API.

## User-Agent Examples

```sh
undici
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('undici').getBrowser());
// {name: "undici", type: "library"}
```

## References

- [undici🡥](https://github.com/nodejs/undici)
