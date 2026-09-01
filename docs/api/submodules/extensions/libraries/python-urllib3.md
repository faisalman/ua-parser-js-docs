[`← Libraries`](../libraries.md)

# urllib3

urllib3 is a Python HTTP client with connection pooling and request helpers.

## User-Agent Examples

```sh
python-urllib3/1.26.18
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('python-urllib3/1.26.18').getBrowser());
// {name: "python-urllib3", version: "1.26.18", major: "1", type: "library"}
```

## References

- [urllib3🡥](https://urllib3.readthedocs.io/)
