[`← Libraries`](../libraries.md)

# Go HTTP Client

Go's HTTP client provides standard-library support for sending HTTP requests.

## User-Agent Examples

```sh
go-http-client/1.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('go-http-client/1.1').getBrowser());
// {name: "go-http-client", version: "1.1", major: "1", type: "library"}
```

## References

- [Go HTTP client🡥](https://pkg.go.dev/net/http)
