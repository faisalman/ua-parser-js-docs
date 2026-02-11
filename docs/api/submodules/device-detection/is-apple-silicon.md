# [device-detection](/api/submodules/device-detection/overview) : isAppleSilicon()

### `isAppleSilicon(res: IResult | string): boolean`

Check whether device has Apple Silicon Mac device properties.

## Code Example

::: code-group

```js [example-client.js]
import { isAppleSilicon } from 'ua-parser-js/device-detection';

const uap = new UAParser();
const result = await uap.getResult().withClientHints();

if (isAppleSilicon(result)) {
    console.log('Hi Apple Silicon!');    
}
```

```js [example-server.js]
import { isAppleSilicon } from 'ua-parser-js/device-detection';

const result = UAParser(req.headers);

if (isAppleSilicon(result)) {
    console.log('Hi Apple Silicon!');    
}
```

:::