[`← Libraries`](../libraries.md)

# Bun

Bun is an all-in-one JavaScript runtime, toolkit, and package manager.

## User-Agent Examples

```sh
Bun/1.0.6
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('Bun/1.0.6').getBrowser());
// {name: "Bun", version: "1.0.6", major: "1", type: "library"}
```

## References

- [Bun🡥](https://bun.sh/)
