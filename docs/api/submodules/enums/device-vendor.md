# [enums](/api/submodules/enums/overview) : DeviceVendor

```csv:no-line-numbers
ACER, ADVAN, ALCATEL, AMAZON, ANBERNIC, APPLE, ARCHOS, ASUS, ATT, BENQ, 
BLACKBERRY, BLACKVIEW, BLU, CAT, COOLPAD, CUBOT, DELL, ENERGIZER, 
ESSENTIAL, FACEBOOK, FAIRPHONE, GEEKSPHONE, GENERIC, GOOGLE, HISENSE, HMD, 
HP, HTC, HUAWEI, IMO, INFINIX, ITEL, JOLLA, KOBO, LAVA, LENOVO, LG, 
LOGITECH, MEIZU, MICROMAX, MICROSOFT, MOTOROLA, NEXIAN, NINTENDO, NOKIA, 
NOTHING, NVIDIA, ONEPLUS, OPPO, OUYA, PALM, PANASONIC, PEBBLE, PHILIPS, 
PICO, POLYTRON, REALME, RETROID, RIM, ROKU, SAMSUNG, SHARP, SIEMENS, 
SMARTFREN, SONY, SPRINT, TCL, TECHNISAT, TECNO, TESLA, T_MOBILE, ULEFONE, 
VALVE, VIVO, VIZIO, VODAFONE, WIKO, XBOX, XIAOMI, ZEBRA, ZTE
```
::: info
See list of possible device vendor [here](/info/device/vendor).
:::

## Code Example

```js [greet.js]
import { UAParser } from 'ua-parser-js'; 
import { DeviceVendor } from 'ua-parser-js/enums';

if (UAParser().device.is(DeviceVendor.MOTOROLA)) {
    console.log('Hello, Moto!');
}
```