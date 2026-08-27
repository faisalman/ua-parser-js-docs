[`← CLIs`](../clis.md)

# Lynx

Lynx is a text-based web browser designed for terminal use.

## User-Agent Examples

```sh
Lynx 2.8.8dev.3
Lynx/2.6
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { CLIs } from 'ua-parser-js/extensions';

const cliParser = new UAParser(CLIs);

console.log(cliParser.setUA('Lynx/2.6').getBrowser());
// {name: "Lynx", version: "2.6", major: "2", type: "cli"}
```

## References

- [Lynx🡥](https://lynx.invisible-island.net/)
