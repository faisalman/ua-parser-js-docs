[`← Libraries`](../libraries.md)

# ocaml-cohttp

ocaml-cohttp is an OCaml library for HTTP clients and servers.

## User-Agent Examples

```sh
ocaml-cohttp/1.2.00
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('ocaml-cohttp/1.2.00').getBrowser());
// {name: "ocaml-cohttp", version: "1.2.00", major: "1", type: "library"}
```

## References

- [ocaml-cohttp🡥](https://github.com/mirage/ocaml-cohttp)
