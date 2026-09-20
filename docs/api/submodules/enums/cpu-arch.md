[`← enums`](/api/submodules/enums/overview)

# `CPUArch` enum

```csv:no-line-numbers
68K, ALPHA, ARM, ARM_64, ARM_HF, AVR, AVR_32, IA64, IRIX, IRIX_64, MIPS, 
MIPS_64, PA_RISC, PPC, SPARC, SPARC_64, X86, X86_64
```
::: info
See list of possible cpu architecture [here](/info/cpu/arch).
:::

## Values

| Enum | Value |
|-|-|
| `CPUArch.68K` | `"68k"` |
| `CPUArch.ALPHA` | `"alpha"` |
| `CPUArch.ARM` | `"arm"` |
| `CPUArch.ARM_64` | `"arm64"` |
| `CPUArch.ARM_HF` | `"armhf"` |
| `CPUArch.AVR` | `"avr"` |
| `CPUArch.AVR_32` | `"avr32"` |
| `CPUArch.IA64` | `"ia64"` |
| `CPUArch.IRIX` | `"irix"` |
| `CPUArch.IRIX_64` | `"irix64"` |
| `CPUArch.MIPS` | `"mips"` |
| `CPUArch.MIPS_64` | `"mips64"` |
| `CPUArch.PA_RISC` | `"pa-risc"` |
| `CPUArch.PPC` | `"ppc"` |
| `CPUArch.SPARC` | `"sparc"` |
| `CPUArch.SPARC_64` | `"sparc64"` |
| `CPUArch.X86` | `"ia32"` |
| `CPUArch.X86_64` | `"amd64"` |

## Code Example

```js [arm-detect.js]
import { UAParser } from 'ua-parser-js'; 
import { CPUArch } from 'ua-parser-js/enums';

if (UAParser().cpu.is(CPUArch.ARM)) {
    console.log('Download the ARM build of this amazing software');
}
```