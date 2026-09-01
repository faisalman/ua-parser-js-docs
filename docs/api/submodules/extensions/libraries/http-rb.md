[`← Libraries`](../libraries.md)

# HTTP.rb

HTTP.rb is a Ruby HTTP client with a chainable API.

## User-Agent Examples

```sh
http.rb/4.2.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('http.rb/4.2.0').getBrowser());
// {name: "http.rb", version: "4.2.0", major: "4", type: "library"}
```

## References

- [HTTP.rb🡥](https://httprb.com/)
