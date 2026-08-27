[`← CLIs`](../clis.md)

# ELinks

ELinks is a feature-rich text-mode web browser for terminals.

## User-Agent Examples

```sh
ELinks/0.11.4-3-lite (textmode; Debian; Linux 2.6.26-1-686 i686;
ELinks (0.11.3; Linux 2.6.23-hardened-r4 i686; 166x55)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { CLIs } from 'ua-parser-js/extensions';

const cliParser = new UAParser(CLIs);
const ua = 'ELinks (0.11.3; Linux 2.6.23-hardened-r4 i686; 166x55)';

console.log(cliParser.setUA(ua).getBrowser());
// {name: "ELinks", version: "0.11.3", major: "0", type: "cli"}
```

## References

- [The history and evolution of the Links browsers🡥](http://elinks.cz/history.html)
