[`← Libraries`](../libraries.md)

# Apache HttpClient

Apache HttpClient is a Java library for sending HTTP requests.

## User-Agent Examples

```sh
Apache-HttpClient/4.5.14 (Java/17.0.12)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('Apache-HttpClient/4.5.14 (Java/17.0.12)').getBrowser());
// {name: "Apache-HttpClient", version: "4.5.14", major: "4", type: "library"}
```

## References

- [Apache HttpClient🡥](https://hc.apache.org/httpcomponents-client-5.5.x/)
