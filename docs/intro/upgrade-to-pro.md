# Upgrade to UAParser.js PRO

As your proprietary commercial product grows, upgrading to UAParser.js PRO is the simplest way to use the familiar UAParser.js API under more permissive terms. Without the complexity and open-source obligations of [AGPLv3🡥](https://fossa.com/blog/open-source-software-licenses-101-agpl-license/), you can focus on developing your product with confidence.

::: info
The open-source package and PRO editions contain the same UAParser.js code and API, making PRO a drop-in replacement: no changes to your existing application logic are required, only the package dependency and import paths need to be updated.
:::

## Upgrade Steps

### 1. Choose a PRO Edition

Choose the edition that fits your project. Every PRO edition is available for a **one-time fee** (no subscription) that includes **lifetime updates** and one year of product support.

| Option | Best for | Price | License |
| --- | --- | ---: | --- |
| **PRO Personal** | Personal, non-commercial projects with unlimited deployments | **$14** | [Text🡥](https://raw.githubusercontent.com/faisalman/ua-parser-js/pro-personal/LICENSE.md) |
| **PRO Business** | 1 commercial product, 1 deliverable or 1 top-level domain | **$29** | [Text🡥](https://raw.githubusercontent.com/faisalman/ua-parser-js/pro-business/LICENSE.md) |
| **PRO Enterprise** | Unlimited commercial products, distributions, and deployments (best option for maximum flexibility) | **$599** | [Text🡥](https://raw.githubusercontent.com/faisalman/ua-parser-js/pro-enterprise/LICENSE.md) |

### 2. Purchase the License

Review the license terms for the selected edition, then [purchase UAParser.js PRO via Lemon Squeezy🡥](https://uaparserjs.lemonsqueezy.com/buy/e236ea87-9b2b-400e-9683-24367f731b35).

After the purchase is complete, you'll receive a license confirming your authorization to use the selected edition.

::: tip
If you experience any issues or need a custom licensing solution, contact us at [support@uaparser.dev](mailto:support@uaparser.dev).
:::

### 3. Install the PRO Package

Install the package that matches your purchased edition:

| Edition | Package |
| --- | --- |
| PRO Personal | `@ua-parser-js/pro-personal` |
| PRO Business | `@ua-parser-js/pro-business` |
| PRO Enterprise | `@ua-parser-js/pro-enterprise` |

For example:

```sh
npm install @ua-parser-js/pro-personal
```
::: danger License Note
PRO packages are commercial software. Only people and organizations covered by a valid license may access, install, or use them, subject to the purchased license terms. Do not share the package, npm access, or source files with unlicensed parties. A third party may use the package only as part of a product created by a valid license holder and only when the applicable license permits it.
:::

### 4. Update Package Imports

Replace the `ua-parser-js` package prefix in all static imports, dynamic imports, and `require()` calls:

```js
// Before
import { UAParser } from 'ua-parser-js';
import { isFrozenUA } from 'ua-parser-js/helpers';

// After
import { UAParser } from '@ua-parser-js/pro-personal';
import { isFrozenUA } from '@ua-parser-js/pro-personal/helpers';
```

The same pattern applies to every submodule:

```js
import { Crawlers } from '@ua-parser-js/pro-personal/extensions';
import { BrowserType } from '@ua-parser-js/pro-personal/enums';
```

### 5. Remove the OSS-Licensed Package

After updating all imports, remove the OSS-licensed package:

```sh
npm uninstall ua-parser-js
```