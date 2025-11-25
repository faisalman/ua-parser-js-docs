# [helpers](/api/submodules/helpers/overview) : isFromEU()

::: warning
This method is only applicable in a client-side browser environment
:::

### `isFromEU(): boolean`

Check whether current browser timezone is from an EU country

## Code Example

```js [example-client.js]
import { isFromEU } from 'ua-parser-js/helpers';

if(isFromEU()) {
    console.log('Hello, please accept our cookies!');
}
```