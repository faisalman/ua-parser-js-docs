<sup>*[`Quickstarts`](./quick-start.md) > `Using Edge Runtimes`*</sup>

# Using Edge Runtimes

Edge runtimes are lightweight server environments distributed close to users, such as Cloudflare Workers, Vercel Edge Functions, and Deno Deploy. UAParser.js supports these environments without Node.js-specific APIs and allows detection with less latency.

## Installation

For Cloudflare Workers or Vercel Edge Functions:

```sh [npm]
$ npm install ua-parser-js
```

## Usage

Pass the incoming request headers to UAParser.js using the entry point for your runtime:

::: code-group

```js [Cloudflare Workers ~simple-icons:cloudflareworkers~]
import { UAParser } from 'ua-parser-js';

export default {
    fetch(request) {
        const { browser, device } = UAParser(request.headers);

        return Response.json({
            browser: browser.name,
            mobile: device.is('mobile'),
        });
    },
};
```

```js [Vercel Edge Functions ~simple-icons:vercel~]
import { UAParser } from 'ua-parser-js';

export const config = {
    runtime: 'edge',
};

export default function handler(request) {
    const { browser, device } = UAParser(request.headers);

    return Response.json({
        browser: browser.name,
        mobile: device.is('mobile'),
    });
}
```

```ts [Deno Deploy]
import { UAParser } from 'npm:ua-parser-js';

Deno.serve((request) => {
    const { browser, device } = UAParser(request.headers);

    return Response.json({
        browser: browser.name,
        mobile: device.is('mobile'),
    });
});
```

:::

::: tip
UAParser.js reads the `User-Agent` and available `Sec-CH-UA-*` headers from `request.headers`.
:::

## References

- [Cloudflare Workers🡥](https://developers.cloudflare.com/workers/)
- [Vercel Edge Runtime🡥](https://vercel.com/docs/functions/runtimes/edge)
- [Deno Deploy🡥](https://docs.deno.com/deploy/)
