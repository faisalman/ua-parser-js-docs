[`← UAParser`](/api/main/overview)

# `getCPU(): ICPU`

Returns the CPU `architecture` as an [`ICPU`](/api/main/icpu) object.

## Code Example

```js
const powerpc = 'Mozilla/4.0 (compatible; MSIE 5.17; Mac_PowerPC Mac OS; en)'
const parser = new UAParser(powerpc);

console.log(parser.getCPU());
// { architecture : "ppc" }
```