<sup>*[`Device Types`](../type.md) > `console`*</sup>

# `console`

Gaming consoles and similar devices designed primarily for playing games.

## User-Agent Example

```sh
# Sony PlayStation 4
Mozilla/5.0 (PlayStation 4 3.00) AppleWebKit/537.73 (KHTML, like Gecko)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { DeviceType } from 'ua-parser-js/enums';

const ua = 'Mozilla/5.0 (PlayStation 4 3.00) AppleWebKit/537.73 (KHTML, like Gecko)';
const parser = new UAParser(ua);
const device = parser.getDevice();

console.log(device);
// {type: "console", model: "PlayStation 4", vendor: "Sony"}

console.log(device.is(DeviceType.CONSOLE));
// true
```
