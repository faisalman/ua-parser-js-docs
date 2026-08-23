[`← UAParser`](/api/main/overview)

# `getOS(): IOS`

Returns the operating system `name` and `version` as an [`IOS`](/api/main/ios) object.

## Code Example

```js

const galaxytabs8 = 'Mozilla/5.0 (Linux; Android 12; SM-X706B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36'
const parser = new UAParser(galaxytabs8);

console.log(parser.getOS());
// { name : "Android", version : "12" }
```
