[`← Libraries`](../libraries.md)

# Postman Runtime

Postman Runtime is the request execution engine used by Postman.

## User-Agent Examples

```sh
PostmanRuntime/7.26.5
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('PostmanRuntime/7.26.5').getBrowser());
// {name: "PostmanRuntime", version: "7.26.5", major: "7", type: "library"}
```

## References

- [Postman Runtime🡥](https://github.com/postmanlabs/postman-runtime)
