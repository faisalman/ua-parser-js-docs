[`← Libraries`](../libraries.md)

# Deno

Deno is a secure JavaScript and TypeScript runtime with built-in web APIs.

## User-Agent Examples

```sh
Deno/2.1.7
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('Deno/2.1.7').getBrowser());
// {name: "Deno", version: "2.1.7", major: "2", type: "library"}
```

## References

- [Deno🡥](https://deno.com/)
