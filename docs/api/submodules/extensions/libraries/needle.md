[`← Libraries`](../libraries.md)

# Needle

Needle is a lightweight HTTP client for Node.js.

## User-Agent Examples

```sh
Needle/3.2.0 (Node.js v18.14.2; win32 x64)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);
const ua = 'Needle/3.2.0 (Node.js v18.14.2; win32 x64)';

console.log(libParser.setUA(ua).getBrowser());
// {name: "Needle", version: "3.2.0", major: "3", type: "library"}
```

## References

- [Needle🡥](https://github.com/tomas/needle)
