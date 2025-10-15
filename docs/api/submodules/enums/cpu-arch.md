# [enums](/api/submodules/enums/overview) : CPUArch

```csv:no-line-numbers
68K, ALPHA, ARM, ARM_64, ARM_HF, AVR, AVR_32, IA64, IRIX, IRIX_64, MIPS, 
MIPS_64, PA_RISC, PPC, SPARC, SPARC_64, X86, X86_64
```
::: info
See list of possible cpu architecture [here](/info/cpu/arch).
:::

## Code Example

```js [arm-detect.js]
import { UAParser } from 'ua-parser-js'; 
import { CPUArch } from 'ua-parser-js/enums';

if (UAParser().cpu.is(CPUArch.ARM)) {
    console.log('Download the ARM build of this amazing software');
}
```