# [`IDevice`](/api/main/get-device.md) : type

Here is a list of possible values for `device.type`:

| `device.type` | Description | Examples  |
|-|-|-|
| `console` | Gaming consoles or similar dedicated gaming devices. | `Sony PlayStation`, `Microsoft Xbox` |
| `embedded` | Devices integrated into other systems like smart home appliances, car head units, or dedicated kiosk machines. | `Amazon Echo Dot`, `Tesla` |
| `mobile` | Mobile phones / smartphones designed for portable use. | `Apple iPhone`, `Samsung Galaxy`  |
| `smarttv` | Smart TVs or similar devices. | `LG Smart TV`, `Samsung Smart TV` |
| `tablet` | Portable touchscreen devices larger than smartphones but smaller than laptops. | `Apple iPad`, `Samsung Galaxy Tab` |
| `wearable` | Devices worn on the body, such as smartwatches or fitness trackers. | `Pebble`, `Apple Watch` |
| `xr` | Extended reality (XR) devices, encompassing virtual reality (VR) and augmented reality (AR) headsets. | `Google Glass`, `Oculus Quest` |


::: tip
If you wish to detect **desktop** devices, you must handle the logic yourself, since UAParser only reports info that is directly available from user-agent string (read more about this issue [here🡭](https://github.com/faisalman/ua-parser-js/issues/182)).
:::
