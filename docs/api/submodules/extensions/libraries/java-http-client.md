[`← Libraries`](../libraries.md)

# Java HTTP Client

Java HTTP Client is the standard Java API for sending HTTP requests and receiving responses.

## User-Agent Examples

```sh
Java-http-client/11.0.6
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('Java-http-client/11.0.6').getBrowser());
// {name: "Java-http-client", version: "11.0.6", major: "11", type: "library"}
```

## References

- [Java HTTP Client🡥](https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html)
