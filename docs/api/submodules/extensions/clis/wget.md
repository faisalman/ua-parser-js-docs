[`← CLIs`](../clis.md)

# Wget

Wget is a command-line utility for downloading files over common internet protocols.

## User-Agent Examples

```sh
Wget/1.21.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { CLIs } from 'ua-parser-js/extensions';

const cliParser = new UAParser(CLIs);

console.log(cliParser.setUA('Wget/1.21.1').getBrowser());
// {name: "Wget", version: "1.21.1", major: "1", type: "cli"}
```

## References

- [Wget🡥](https://www.gnu.org/software/wget/)
