[`← Libraries`](../libraries.md)

# phpcrawl

phpcrawl is a configurable web crawler library for PHP.

## User-Agent Examples

```sh
phpcrawl
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('phpcrawl').getBrowser());
// {name: "phpcrawl", type: "library"}
```

## References

- [phpcrawl🡥](https://github.com/mmerian/phpcrawl)
