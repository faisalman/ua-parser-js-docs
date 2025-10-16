# [IData](/api/main/overview#methods) : is()

`is(value: string): boolean`

Checks if the given string matches any of the current object's property value.

Returns:
- `true` if the given value matches one of the properties of current object
- `false` otherwise

::: info
* **device**: properties are checked in this particular order: `type`, `model`, then `vendor`.
* **browser**: any `Browser` suffix will be ignored (e.g. `QQ Browser == QQ`).
* **os**: any `OS` suffix will be ignored (e.g. `Mac OS == Mac`).
* Comparisons are **case-insensitive**, so `firefox == FIREFOX`.
:::

## Code Example

```js
// is() is basically a shorthand for property comparison using `==`

const ua = UAParser();
const device = ua.device;
const os = ua.os;

// Using standard comparison
if (device.type == "mobile" && os.name != "iOS") {}
if (device.type == "smarttv" || device.vendor == "Samsung") {}

// Using is()
if (device.is("mobile") && !os.is("iOS")) {}
if (device.is("SmartTV") || device.is("SaMsUnG")) {}
```

```js
// Another examples:

const uap = new UAParser('Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537');

uap.getBrowser().name;              // "IEMobile"
uap.getBrowser().is("IEMobile");    // true
uap.getCPU().is("ARM");             // true

uap.getOS().name;                   // "Windows Phone"
uap.getOS().is("Windows Phone");    // true

uap.getDevice();                    // { vendor: "Nokia", model: "Lumia 635", type: "mobile" }
uap.getResult().device;             // { vendor: "Nokia", model: "Lumia 635", type: "mobile" }

const device = uap.getDevice();
device.is("mobile");                // true
device.is("Lumia 635");             // true
device.is("Nokia");                 // true
device.is("iPhone");                // false
uap.getResult().device.is("Nokia"); // true
uap.getResult().device.model;       // "Lumia 635"

uap.setUA("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36");

const browser = uap.getBrowser();
browser.is("IEMobile");             // false 
browser.is("Chrome");               // true

uap.getResult().browser.is("Edge"); // false
uap.getResult().os.name             // "Mac OS"
uap.getResult().os.is("Mac OS");    // true
uap.getResult().os.version;         // "10.6.8"

const engine = uap.getEngine();
engine.is("Blink");                 // true
```