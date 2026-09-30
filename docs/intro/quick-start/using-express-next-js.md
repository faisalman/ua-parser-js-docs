<sup>*[`Quickstarts`](./quick-start.md) > `Using Express / Next.js`*</sup>

# Using Express / Next.js

Express and Next.js provide access to incoming request headers on the server. UAParser.js can parse these headers to identify the browser, OS, device, and other client details.

## Installation

Install the required packages using npm:

::: code-group

```sh [Express ~simple-icons:express~]
$ npm install express ua-parser-js
```

```sh [Next.js]
$ npm install ua-parser-js
```

:::

## Usage

Pass the incoming request headers to UAParser.js:

::: code-group

```js [Express ~simple-icons:express~]
import express from 'express';
import { UAParser } from 'ua-parser-js';

const app = express();

app.get('/', (req, res) => {
    const { browser, device } = UAParser(req.headers);
    const isMobile = device.is('mobile');

    res.send(
        `${isMobile ? 'Mobile' : 'Desktop'} visitor using ${browser.name}`
    );
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
```

```tsx [Next.js]
import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

export default async function Page() {
    const requestHeaders = await headers();
    const { browser, device } = UAParser(requestHeaders);
    const isMobile = device.is('mobile');

    return (
        <p>
            {isMobile ? 'Mobile' : 'Desktop'} visitor using {browser.name}
        </p>
    );
}
```

:::


::: tip
UAParser.js reads the `User-Agent` and available `Sec-CH-UA-*` headers from the request headers.
:::

::: warning
`headers()` is asynchronous in Next.js 15 and later. In Next.js 14 and earlier, omit `async` and `await`. Reading headers makes the page dynamically rendered.
:::

## References

- [Express request API🡥](https://expressjs.com/en/5x/api.html#req)
- [Next.js `headers()` API🡥](https://nextjs.org/docs/app/api-reference/functions/headers)
