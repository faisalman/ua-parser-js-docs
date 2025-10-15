# [extensions](/api/submodules/extensions/overview) : Vehicles

Extends [`device`](/api/main/get-device) detection to include some vehicles.

```csv:no-line-numbers
# List of known vehicles
BMW, BYD, Jeep, Rivian, Volvo
```

## Code Example

```js
import { Vehicles } from 'ua-parser-js/extensions';

const vehicleParser = new UAParser(Vehicles);

const byd_ua = "Mozilla/5.0 (Linux; Android 10; DiLink3.0 For BYD AUTO Build/QKQ1.200816.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.186 Safari/537.36";
const jeep_ua = "Mozilla/5.0 (Linux; Android 9; AFTLFT962X3) AppleWebKit/537.36 (KHTML, like Gecko) Silk/124.5.2 like Chrome/124.0.6367.248 Safari/537.36";

let vehicle = vehicleParser.setUA(jeep_ua).getDevice();
console.log(vehicle); // { vendor: "Jeep", model: "Wagooner" }

vehicle = vehicleParser.setUA(byd_ua).getDevice();
console.log(vehicle); // { vendor: "BYD" }
```