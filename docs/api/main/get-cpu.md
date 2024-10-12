# `getCPU(): ICPU`

Get type of CPU architecture from user-agent string.

```js
// Result object is structured as follow:
{ architecture: '' }
```

## `architecture?: string`

- [List of possible `cpu.architecture`](/infocpu/arch)

## Code Example

```js
const powerpc = 'Mozilla/4.0 (compatible; MSIE 5.17; Mac_PowerPC Mac OS; en)'
const parser = new UAParser(powerpc);

console.log(parser.getCPU());
// { architecture : "ppc" }
```