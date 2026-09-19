[`← InApps`](../inapps.md)

# Rocket.Chat

## User-Agent Examples

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Rocket.Chat/3.8.16 Chrome/106.0.5249.199 Electron/21.3.3 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Rocket.Chat/3.8.16 Chrome/106.0.5249.199 Electron/21.3.3 Safari/537.36').getBrowser());
// {name: "Rocket.Chat", version: "3.8.16", type: "inapp"}
```

## References

- [Rocket.Chat🡥](https://www.rocket.chat/)
