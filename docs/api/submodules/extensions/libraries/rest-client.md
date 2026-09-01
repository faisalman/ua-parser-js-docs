[`← Libraries`](../libraries.md)

# REST Client

REST Client is a Ruby library for making HTTP and REST requests.

## User-Agent Examples

```sh
rest-client/2.1.0 (linux-gnu x86_64) ruby/2.7.2p137
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);
const ua = 'rest-client/2.1.0 (linux-gnu x86_64) ruby/2.7.2p137';

console.log(libParser.setUA(ua).getBrowser());
// {name: "rest-client", version: "2.1.0", major: "2", type: "library"}
```

## References

- [REST Client🡥](https://github.com/rest-client/rest-client)
