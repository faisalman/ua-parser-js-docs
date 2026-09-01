[`← Libraries`](../libraries.md)

# jsdom

jsdom is a JavaScript implementation of web standards for use with Node.js.

## User-Agent Examples

```sh
Mozilla/5.0 (unknown OS) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/11.12.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);
const ua = 'Mozilla/5.0 (unknown OS) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/11.12.0';

console.log(libParser.setUA(ua).getBrowser());
// {name: "jsdom", version: "11.12.0", major: "11", type: "library"}
```

## References

- [jsdom🡥](https://github.com/jsdom/jsdom)
