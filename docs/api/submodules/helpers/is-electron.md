# [helpers](/api/submodules/helpers/overview) : isElectron()

`isElectron(): boolean`

Check whether current window is running inside Electron

::: warning
This method is only applicable in a client-side browser environment
:::

## Code Example

```js [example-client.js]
import { isElectron } from 'ua-parser-js/helpers';

if(isElectron()) {
    console.log("Smile! you're on an Electron-based browser ^_^");
}
```