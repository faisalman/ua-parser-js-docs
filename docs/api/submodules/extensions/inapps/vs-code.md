[`← InApps`](../inapps.md)

# VS Code

## User-Agent Examples

```sh
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.85.1 Chrome/114.0.5735.289 Electron/25.9.7 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.85.1 Chrome/114.0.5735.289 Electron/25.9.7 Safari/537.36').getBrowser());
// {name: "VS Code", version: "1.85.1", type: "inapp"}
```

## References

- [VS Code🡥](https://code.visualstudio.com/)
