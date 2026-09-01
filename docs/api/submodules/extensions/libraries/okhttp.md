[`← Libraries`](../libraries.md)

# OkHttp

OkHttp is an HTTP client for Java and Kotlin applications.

## User-Agent Examples

```sh
okhttp/3.2.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('okhttp/3.2.0').getBrowser());
// {name: "okhttp", version: "3.2.0", major: "3", type: "library"}
```

## References

- [OkHttp🡥](https://square.github.io/okhttp/)
