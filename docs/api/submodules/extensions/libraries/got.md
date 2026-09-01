[`← Libraries`](../libraries.md)

# got

got is a human-friendly and powerful HTTP request library for Node.js.

## User-Agent Examples

```sh
got/9.6.0 (https://github.com/sindresorhus/got)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);
const ua = 'got/9.6.0 (https://github.com/sindresorhus/got)';

console.log(libParser.setUA(ua).getBrowser());
// {name: "got", version: "9.6.0", major: "9", type: "library"}
```

## References

- [got🡥](https://github.com/sindresorhus/got)
