[`← InApps`](../inapps.md)

# Discord

## User-Agent Examples

```sh
# Discord on Linux
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.26 Chrome/108.0.5359.215 Electron/22.3.2 Safari/537.36

# Discord on iPad
Discord/52.0 (iPad; iOS 14.4; Scale/2.00)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.26 Chrome/108.0.5359.215 Electron/22.3.2 Safari/537.36').getBrowser());
// {name: "discord", version: "0.0.26", type: "inapp"}

console.log(appParser.setUA('Discord/52.0 (iPad; iOS 14.4; Scale/2.00)').getBrowser());
// {name: "Discord", version: "52.0", type: "inapp"}
```

## References

- [Discord🡥](https://discord.com/)
