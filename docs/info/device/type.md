<sup>*`Device Types`*</sup>

# List of Detected Device Types

| `device.type` | Description | Examples  |
|-|-|-|
| [`console`](./type/console.md) | Gaming consoles or similar dedicated gaming devices. | `Sony PlayStation`, `Microsoft Xbox` |
| [`embedded`](./type/embedded.md) | Devices integrated into other systems like smart home appliances, car head units, or dedicated kiosk machines. | `Amazon Echo Dot`, `Tesla` |
| [`mobile`](./type/mobile.md) | Mobile phones / smartphones designed for portable use. | `Apple iPhone`, `Samsung Galaxy`  |
| [`smarttv`](./type/smarttv.md) | Smart TVs or similar devices. | `LG Smart TV`, `Samsung Smart TV` |
| [`tablet`](./type/tablet.md) | Portable touchscreen devices larger than smartphones but smaller than laptops. | `Apple iPad`, `Samsung Galaxy Tab` |
| [`wearable`](./type/wearable.md) | Devices worn on the body, such as smartwatches or fitness trackers. | `Pebble`, `Apple Watch` |
| [`xr`](./type/xr.md) | Extended reality (XR) devices, encompassing virtual reality (VR) and augmented reality (AR) headsets. | `Google Glass`, `Oculus Quest` |


::: warning
If you wish to detect **desktop** devices, you must handle the logic yourself, since the info isn't directly available from user-agent string (read more about this issue [here🡥](https://github.com/faisalman/ua-parser-js/issues/182)).
:::

::: tip
Use the [`DeviceType`](/api/submodules/enums/device-type) enum from the `enums` submodule to reference device types in code.
:::
