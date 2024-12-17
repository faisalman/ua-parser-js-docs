# `getDevice(): IDevice`

Get details of device information (type, vendor, model) from user-agent string.

## Properties of `IDevice`

```js
// Device object is structured as follow:
{ 
    type: "", 
    vendor: "", 
    model: "" 
}
```

### `type?: string`

::: info
See list of possible device type [here](/info/device/type).
:::

---
### `vendor?: string`

::: info
See list of possible device vendor [here](/info/device/vendor).
:::

---
### `model?: string`

Determined dynamically.

## Methods of `IDevice`

Inherited from `IData`:

- [`is(value: string): boolean`](/api/main/idata/is)
- [`toString(): string`](/api/main/idata/to-string)
- [`withClientHints<IDevice>(): PromiseLike<IDevice> | IDevice`](/api/main/idata/with-client-hints)
- [`withFeatureCheck<IDevice>(): PromiseLike<IDevice> | IDevice`](/api/main/idata/with-feature-check)

## Code Example

```js

const galaxytabs8 = 'Mozilla/5.0 (Linux; Android 12; SM-X706B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36'
const parser = new UAParser(galaxytabs8);

console.log(parser.getDevice());
// { type : "tablet", vendor : "Samsung", model : "SM-X706B" }
```