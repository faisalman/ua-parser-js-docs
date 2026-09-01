[`← Libraries`](../libraries.md)

# HTTPX

HTTPX is a fully featured HTTP client for Python.

## User-Agent Examples

```sh
python-httpx/0.27.2
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('python-httpx/0.27.2').getBrowser());
// {name: "python-httpx", version: "0.27.2", major: "0", type: "library"}
```

## References

- [HTTPX🡥](https://www.python-httpx.org/)
