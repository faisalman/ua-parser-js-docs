# [helpers](/api/submodules/helpers/overview) : isElectron()

::: warning
This method is only applicable in a client-side browser environment
:::

### `isElectron(): boolean`

Check whether current window is running inside Electron

## Code Example

```js [example-client.js]
import { isElectron } from 'ua-parser-js/helpers';

if(isElectron()) {
    console.log("Smile! you're on an Electron-based browser ^_^");
}
```