# `getDevice(): IDevice`

Get details of device information (type, vendor, model) from user-agent string.

```js
// Result object is structured as follow:
{ type: '', vendor: '', model: '' }
```

## Properties of `IDevice`:

### `type?: string`

- [List of possible `device.type`](/info/device/type)

::: info
If you wish to detect desktop devices, you must handle the logic yourself, since `UAParser` only reports info that is directly available from user-agent string. Read more about this issue [here↗](https://github.com/faisalman/ua-parser-js/issues/182)
:::

### `vendor?: string`

- [List of possible `device.vendor`](/info/device/vendor)

### `model?: string`

Determined dynamically

## Methods inherited from `IData`:

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