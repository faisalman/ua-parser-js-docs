[`← InApps`](../inapps.md)

# Flipboard

## User-Agent Examples

```sh
Mozilla/5.0 (Linux; Android 8.0.0; SM-A720F Build/R16NW; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36 Flipboard/4.1.13/4342,4.1.13.4342
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Mozilla/5.0 (Linux; Android 8.0.0; SM-A720F Build/R16NW; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36 Flipboard/4.1.13/4342,4.1.13.4342').getBrowser());
// {name: "Flipboard", version: "4.1.13", type: "inapp"}
```

## References

- [Flipboard🡥](https://flipboard.com/)
