# [Extensions](/api/submodules/extensions/overview) : ExtraDevices

Extends [`device`](/api/main/get-device) detection to include devices that are rarely encountered in the real world today, but still devices nonetheless.


## Code Example

```js
import { ExtraDevices } from 'ua-parser-js/extensions';

const parserWithExtraDevices = new UAParser([ExtraDevices]);
```