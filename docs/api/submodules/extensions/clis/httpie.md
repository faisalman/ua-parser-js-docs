[`← CLIs`](../clis.md)

# HTTPie

HTTPie is a command-line HTTP client designed for human-friendly interaction.

## User-Agent Examples

```sh
HTTPie/0.9.9
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { CLIs } from 'ua-parser-js/extensions';

const cliParser = new UAParser(CLIs);

console.log(cliParser.setUA('HTTPie/0.9.9').getBrowser());
// {name: "HTTPie", version: "0.9.9", major: "0", type: "cli"}
```

## References

- [HTTPie🡥](https://httpie.io/)
