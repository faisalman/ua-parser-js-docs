[`← Libraries`](../libraries.md)

# Jetty

Jetty is a Java web server and servlet container with HTTP client support.

## User-Agent Examples

```sh
Jetty/11.0.13
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('Jetty/11.0.13').getBrowser());
// {name: "Jetty", version: "11.0.13", major: "11", type: "library"}
```

## References

- [Jetty🡥](https://jetty.org/)
