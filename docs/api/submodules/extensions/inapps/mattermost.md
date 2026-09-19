[`← InApps`](../inapps.md)

# Mattermost

## User-Agent Examples

```sh
# Mattermost on Mac
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Mattermost/4.4.0 Chrome/76.0.3809.146 Electron/6.1.7 Safari/537.36

# Mattermost on iPad
Mattermost/1.49.1 (iPad; iOS 15.3.1; Scale/2.00)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Mattermost/4.4.0 Chrome/76.0.3809.146 Electron/6.1.7 Safari/537.36').getBrowser());
// {name: "Mattermost", version: "4.4.0", type: "inapp"}

console.log(appParser.setUA('Mattermost/1.49.1 (iPad; iOS 15.3.1; Scale/2.00)').getBrowser());
// {name: "Mattermost", version: "1.49.1", type: "inapp"}
```

## References

- [Mattermost🡥](https://mattermost.com/)
