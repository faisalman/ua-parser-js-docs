# [UAParser](/api/main/overview#methods) : getDevice()

`getDevice(): IDevice`

Returns the device details (type, vendor, model).

## `IDevice`

### Properties

```js
{ 
    type: "", 
    vendor: "", 
    model: "" 
}
```

#### type?: string

The detected device type (e.g. `mobile`, `tablet`, `smarttv`, `wearable`).

::: info
See list of possible device types [here](/info/device/type).
:::

---
#### vendor?: string

The device manufacturer (e.g. `Samsung`, `Apple`, `Huawei`).

::: info
See list of possible device vendors [here](/info/device/vendor).
:::

---
#### model?: string

The detected model name, determined dynamically from the user-agent string.

### Methods

#### Inherited from `IData`:

- [`is(value: string): boolean`](/api/main/idata/is)
- [`toString(): string`](/api/main/idata/to-string)
- [`withClientHints<IDevice>(): PromiseLike<IDevice> | IDevice`](/api/main/idata/with-client-hints)
- [`withFeatureCheck<IDevice>(): PromiseLike<IDevice> | IDevice`](/api/main/idata/with-feature-check)

### Code Example

```js

const galaxytabs8 = 'Mozilla/5.0 (Linux; Android 12; SM-X706B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36'
const parser = new UAParser(galaxytabs8);

console.log(parser.getDevice());
// { type : "tablet", vendor : "Samsung", model : "SM-X706B" }
```