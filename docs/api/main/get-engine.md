# `getEngine(): IEngine`

Get layout rendering engine name & version from user-agent string.

## Properties of `IEngine`:

```js
// Engine object is structured as follow:
{ 
    name: "", 
    version: ""
}
```

### `name?: string`

::: info
See list of possible engine name [here](/info/engine/name).
:::

---
### `version?: string`

Determined dynamically.

## Methods of `IEngine`

Inherited from `IData`:

- [`is(value: string): boolean`](/api/main/idata/is)
- [`toString(): string`](/api/main/idata/to-string)
- [`withClientHints<IEngine>(): PromiseLike<IEngine> | IEngine`](/api/main/idata/with-client-hints)
- [`withFeatureCheck<IEngine>(): PromiseLike<IEngine> | IEngine`](/api/main/idata/with-feature-check)

## Code Example

```js
const operamini = 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25'
const parser = new UAParser(operamini);

console.log(parser.getEngine());
// { name : "Presto", version : "2.5.25" }
```