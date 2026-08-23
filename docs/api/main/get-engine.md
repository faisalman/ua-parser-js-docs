[`← UAParser`](/api/main/overview)

# `getEngine(): IEngine`

Returns the browser engine `name` and `version` as an [`IEngine`](/api/main/iengine) object.

## Code Example

```js
const operamini = 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25'
const parser = new UAParser(operamini);

console.log(parser.getEngine());
// { name : "Presto", version : "2.5.25" }
```