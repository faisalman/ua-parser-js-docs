# [Helpers](/api/submodules/helpers/overview) : isFromEU()

`isFromEU(): boolean`

Check whether current browser timezone is from an EU country

::: warning
This method is only applicable in a client-side browser environment
:::

## Code Example

```js [example-client.js]
import { isFromEU } from 'ua-parser-js/helpers';

if(isFromEU()) {
    console.log('Hello, please accept our cookies!');
}
```