# [helpers](/api/submodules/helpers/overview) : isAppleSilicon()

`isAppleSilicon(res: IResult | string): boolean`

Check whether device has Apple Silicon Mac device properties.

## Code Example

```js [example-client.js]
import { isAppleSilicon } from 'ua-parser-js/helpers';

const uap = new UAParser();
const result = await uap.getResult().withClientHints();
if (isAppleSilicon(result)) {
    console.log('Hi Apple Silicon!');    
}
```

Alternatively, with only user-agent data:

```js [example-server.js]
import { isAppleSilicon } from 'ua-parser-js/helpers';

if (isAppleSilicon(req.headers['user-agent'])) {
    console.log('Hi Apple Silicon!');    
}
```