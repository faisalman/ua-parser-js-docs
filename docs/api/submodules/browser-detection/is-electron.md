[`← browser-detection`](/api/submodules/browser-detection/overview)

# `isElectron(): boolean`

::: warning
This method is only applicable in a client-side browser environment
:::

Check whether current window is running inside Electron

## Code Example

```js [example-client.js]
import { isElectron } from 'ua-parser-js/browser-detection';

if(isElectron()) {
    console.log("Smile! you're on an Electron-based browser ^_^");
}
```