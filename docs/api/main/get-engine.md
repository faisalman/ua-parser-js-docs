# [UAParser](/api/main/overview#methods) : getEngine()

`getEngine(): IEngine`

Returns the browser's layout (rendering) engine name and version.

## `IEngine`

### Properties

```js
{ 
    name: "", 
    version: ""
}
```

#### name?: string

The name of the rendering engine

::: info
See list of possible engine names [here](/info/engine/name).
:::

#### version?: string

The detected engine version, determined dynamically from the user-agent string.

### Methods

#### Inherited from `IData`:

- [`is(value: string): boolean`](/api/main/idata/is)
- [`toString(): string`](/api/main/idata/to-string)
- [`withClientHints<IEngine>(): PromiseLike<IEngine> | IEngine`](/api/main/idata/with-client-hints)
- [`withFeatureCheck<IEngine>(): PromiseLike<IEngine> | IEngine`](/api/main/idata/with-feature-check)

### Code Example

```js
const operamini = 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25'
const parser = new UAParser(operamini);

console.log(parser.getEngine());
// { name : "Presto", version : "2.5.25" }
```