[`← Libraries`](../libraries.md)

# hackney

hackney is an HTTP client library for Erlang.

## User-Agent Examples

```sh
hackney/1.20.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('hackney/1.20.1').getBrowser());
// {name: "hackney", version: "1.20.1", major: "1", type: "library"}
```

## References

- [hackney🡥](https://github.com/benoitc/hackney)
