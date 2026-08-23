[`← UAParser`](/api/main/overview)

# `getBrowser(): IBrowser`

Returns the browser `name`, `version`, `major`, and `type` as an [`IBrowser`](/api/main/ibrowser) object.

## Code Example

```js
const operamini = 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25'
const parser = new UAParser(operamini);

console.log(parser.getBrowser());
// { name: "Opera Mini", version: "5.1.21214", major: "5", type: undefined }
```