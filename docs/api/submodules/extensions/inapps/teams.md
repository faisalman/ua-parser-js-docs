[`← InApps`](../inapps.md)

# Microsoft Teams

## User-Agent Examples

```sh
# Microsoft Teams on Mac
Mozilla/5.0 (Macintosh; Intel Mac OS X 11_3_1) AppleWebKit/537.36 (KHTML, like Gecko) Teams/1.8.00.3758 Chrome/126.0.6478.261 Electron/31.7.7 Safari/537.36

# Microsoft Teams on iPad
Mozilla/5.0 (iPad; CPU OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TeamsMobile-iOS

# Microsoft Teams on iPhone
Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TeamsMobile-iOS

# Microsoft Teams on Android
Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F Build/M1AJQ; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36 TeamsMobile-Android
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 11_3_1) AppleWebKit/537.36 (KHTML, like Gecko) Teams/1.8.00.3758 Chrome/126.0.6478.261 Electron/31.7.7 Safari/537.36').getBrowser());
// {name: "Teams", version: "1.8.00.3758", type: "inapp"}

console.log(appParser.setUA('Mozilla/5.0 (iPad; CPU OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TeamsMobile-iOS').getBrowser());
// {name: "Teams", type: "inapp"}
```

## References

- [Microsoft Teams🡥](https://www.microsoft.com/microsoft-teams/)
