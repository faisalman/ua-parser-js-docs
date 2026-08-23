[`← UAParser`](/api/main/overview)

# `getDevice(): IDevice`

Returns the device `type`, `vendor`, and `model` as an [`IDevice`](/api/main/idevice) object.

## Code Example

```js

const galaxytabs8 = 'Mozilla/5.0 (Linux; Android 12; SM-X706B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36'
const parser = new UAParser(galaxytabs8);

console.log(parser.getDevice());
// { type : "tablet", vendor : "Samsung", model : "SM-X706B" }
```