# `isElectron(): boolean`

Check whether current window is running inside Electron

## Code Example

```js
import { isElectron } from 'ua-parser-js/helpers';

if(isElectron()) {
    console.log("Smile! you're on an Electron-based browser ^_^");
}
```