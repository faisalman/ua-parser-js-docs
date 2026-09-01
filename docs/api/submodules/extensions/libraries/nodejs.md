[`← Libraries`](../libraries.md)

# Node.js

Node.js is a JavaScript runtime with built-in networking and web APIs.

## User-Agent Examples

```sh
Node.js/22
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('Node.js/22').getBrowser());
// {name: "Node.js", version: "22", major: "22", type: "library"}
```

## References

- [Node.js🡥](https://nodejs.org/)
