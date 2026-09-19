[`← InApps`](../inapps.md)

# Slack

## User-Agent Examples

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Slack/4.39.90 Chrome/127.0.6533.72 Electron/13.1.9 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Slack/4.39.90 Chrome/127.0.6533.72 Electron/13.1.9 Safari/537.36').getBrowser());
// {name: "Slack", version: "4.39.90", type: "inapp"}
```

## References

- [Slack🡥](https://slack.com/)
