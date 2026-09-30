<sup>*[`Quickstarts`](./quick-start.md) > `Using Bun / Deno`*</sup>

# Using Bun / Deno

## Installation

Install UAParser.js using your runtime's package manager:

::: code-group

```sh [Bun]
$ bun add ua-parser-js
```

```sh [Deno]
$ deno add npm:ua-parser-js
```

:::

## Usage

Pass the incoming request headers to UAParser.js:

::: code-group

```js [Bun]
import { UAParser } from 'ua-parser-js';

Bun.serve({
    port: 3000,
    fetch(request) {
        const { browser, device } = UAParser(request.headers);

        return Response.json({
            browser: browser.name,
            mobile: device.is('mobile'),
        });
    },
});
```

```ts [Deno]
import { UAParser } from 'ua-parser-js';

Deno.serve({ port: 3000 }, (request) => {
    const { browser, device } = UAParser(request.headers);

    return Response.json({
        browser: browser.name,
        mobile: device.is('mobile'),
    });
});
```

:::

Run the server with `bun run server.js` or `deno run --allow-net server.ts`, then open `http://localhost:3000`.

## References

- [Bun HTTP server🡥](https://bun.com/docs/runtime/http/server)
- [Deno HTTP server🡥](https://docs.deno.com/runtime/fundamentals/http_server/)
