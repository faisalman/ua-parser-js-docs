[`← InApps`](../inapps.md)

# Rambox

## User-Agent Examples

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Rambox/0.7.7 Chrome/78.0.3904.130 Electron/7.2.4 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Rambox/0.7.7 Chrome/78.0.3904.130 Electron/7.2.4 Safari/537.36').getBrowser());
// {name: "Rambox", version: "0.7.7", type: "inapp"}
```

## References

- [Rambox🡥](https://rambox.app/)
