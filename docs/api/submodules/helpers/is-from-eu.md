# `isFromEU(): boolean`

Check whether current window is likely from an EU country

## Code Example

```js
import { isFromEU } from 'ua-parser-js/helpers';

if(isFromEU()) {
    console.log('Hello, please accept our cookies!');
}
```