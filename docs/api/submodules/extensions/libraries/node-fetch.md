[`← Libraries`](../libraries.md)

# node-fetch

node-fetch provides the Fetch API for Node.js.

## User-Agent Examples

```sh
node-fetch/1.0 (+https://github.com/bitinn/node-fetch)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);
const ua = 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)';

console.log(libParser.setUA(ua).getBrowser());
// {name: "node-fetch", version: "1.0", major: "1", type: "library"}
```

## References

- [node-fetch🡥](https://github.com/node-fetch/node-fetch)
