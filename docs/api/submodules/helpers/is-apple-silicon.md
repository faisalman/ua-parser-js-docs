# `isAppleSilicon(res: IResult): boolean`

Check whether current device has Apple Silicon Mac device properties.

## Code Example

```js
import { isAppleSilicon } from 'ua-parser-js/helpers';

const uap = new UAParser();
const result = await uap.getResult().withClientHints();
if (isAppleSilicon(result)) {
    console.log('Hi Apple Silicon!');    
}
```