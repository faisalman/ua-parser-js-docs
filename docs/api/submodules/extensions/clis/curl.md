[`← CLIs`](../clis.md)

# cURL

cURL is a command-line tool for transferring data using URLs.

## User-Agent Examples

```sh
curl/7.38.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { CLIs } from 'ua-parser-js/extensions';

const cliParser = new UAParser(CLIs);

console.log(cliParser.setUA('curl/7.38.0').getBrowser());
// {name: "curl", version: "7.38.0", major: "7", type: "cli"}
```

## References

- [cURL🡥](https://curl.se/)
