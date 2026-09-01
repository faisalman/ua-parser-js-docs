[`← Libraries`](../libraries.md)

# SuperAgent

SuperAgent is a lightweight HTTP client for browsers and Node.js.

## User-Agent Examples

```sh
node-superagent/5.0.2
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('node-superagent/5.0.2').getBrowser());
// {name: "node-superagent", version: "5.0.2", major: "5", type: "library"}
```

## References

- [SuperAgent🡥](https://github.com/forwardemail/superagent)
