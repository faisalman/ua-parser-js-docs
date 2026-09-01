[`← Libraries`](../libraries.md)

# Python urllib

urllib is Python's standard-library package for working with URLs.

## User-Agent Examples

```sh
Python-urllib/2.6
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('Python-urllib/2.6').getBrowser());
// {name: "Python-urllib", version: "2.6", major: "2", type: "library"}
```

## References

- [Python urllib🡥](https://docs.python.org/3/library/urllib.html)
