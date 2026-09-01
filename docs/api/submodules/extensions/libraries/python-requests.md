[`← Libraries`](../libraries.md)

# Requests

Requests is a simple HTTP library for Python.

## User-Agent Examples

```sh
python-requests/2.32
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('python-requests/2.32').getBrowser());
// {name: "python-requests", version: "2.32", major: "2", type: "library"}
```

## References

- [Requests🡥](https://requests.readthedocs.io/)
