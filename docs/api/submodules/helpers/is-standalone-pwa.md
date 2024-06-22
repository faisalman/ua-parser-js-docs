# `isStandalonePWA(): boolean`

Check whether the current window is a standalone PWA

## Code Example

```js
import { isStandalonePWA } from 'ua-parser-js/helpers';

if(isStandalonePWA()) {
    console.log("Smile! you're on candid camera ^_^");
} else {
    console.log("Please install our App first! Thx");
}
```