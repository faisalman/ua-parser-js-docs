# `isAppleSilicon(res: IResult): boolean`

Check for an Apple Silicon Mac device properties

## Code Example

```js
import { isAppleSilicon } from 'ua-parser-js/helpers';

const uap = new UAParser();
const result = uap.getResult();
if (isAppleSilicon(result)) {
    console.log('This is an Apple Silicon Mac device');    
}
```