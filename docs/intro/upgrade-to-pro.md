# Upgrade to UAParser.js PRO

As your commercial-proprietary product grows, upgrading to UAParser.js PRO is the simplest way to use the familiar UAParser.js API under more permissive terms. Without the complexity and open-source obligations of the [AGPLv3🡥](https://fossa.com/blog/open-source-software-licenses-101-agpl-license/) license, you can just focus on developing your product with confidence.

## PRO Editions

Choose one that fits your project. Every PRO edition is available for a **one-time fee** (no subscription) that includes **lifetime updates** and 1 year of product support.

| Option | Best for | Price | License |
| --- | --- | ---: | --- |
| **PRO Personal** | Personal, non-commercial projects, unlimited deployments | **$14** | [Text🡥](https://raw.githubusercontent.com/faisalman/ua-parser-js/pro-personal/LICENSE.md) |
| **PRO Business** | 1 commercial product, 1 deliverable or 1 top-level domain | **$29** | [Text🡥](https://raw.githubusercontent.com/faisalman/ua-parser-js/pro-business/LICENSE.md) |
| **PRO Enterprise** | Unlimited commercial products, distributions, and deployments | **$599** | [Text🡥](https://raw.githubusercontent.com/faisalman/ua-parser-js/pro-enterprise/LICENSE.md) |

## Purchase

- [Purchase UAParser.js PRO via Lemon Squeezy🡥](https://uaparserjs.lemonsqueezy.com/buy/e236ea87-9b2b-400e-9683-24367f731b35)

After your purchase is complete, you'll receive a license confirming your authorization to use the UAParser.js PRO edition. 

::: tip

If you experience any issues or need a custom licensing solution, contact us: [support@uaparser.dev](support@uaparser.dev)

:::

## Migrating to PRO

Migration is designed to be straightforward because the PRO editions preserve the UAParser.js API. Simply replace the package dependency and update the package name in your imports.

Every PRO edition is distributed as an `@ua-parser-js`-scoped package. As an example, to install the PRO Personal edition, you can use:

```sh
npm install @ua-parser-js/pro-personal
```

Then replace the package import in your JS code:

```js
// Using the open-source edition
import { UAParser } from 'ua-parser-js';

// Using PRO Personal edition
import { UAParser } from '@ua-parser-js/pro-personal';
```

Submodule imports follow the same pattern:

```js
import { isFrozenUA } from '@ua-parser-js/pro-personal/helpers';
```

::: danger License Note
PRO packages are commercial software. Only people and organizations covered by a valid license may access, install, or use them, subject to the purchased license terms. Do not share the package, npm access, or source files with unlicensed parties. A third party may use the package only as part of a product created by a valid license holder and only when the applicable license permits it.
:::