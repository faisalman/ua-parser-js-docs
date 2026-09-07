[`← extensions`](/api/submodules/extensions/overview)

# `Libraries`

Extends [`browser`](/info/browser/name) detection to include tools used in programs to interact with web content or automate browsing tasks.

## List of Detected Libraries

- [`AdobeAIR`](./libraries/adobe-air.md)
- [`aiohttp`](./libraries/aiohttp.md)
- [`Apache-HttpClient`](./libraries/apache-httpclient.md)
- [`Axios`](./libraries/axios.md)
- [`Bun`](./libraries/bun.md)
- [`Dart`](./libraries/dart.md)
- [`Deno`](./libraries/deno.md)
- [`go-http-client`](./libraries/go-http-client.md)
- [`got`](./libraries/got.md)
- [`GuzzleHttp`](./libraries/guzzlehttp.md)
- [`hackney`](./libraries/hackney.md)
- [`http.rb`](./libraries/http-rb.md)
- [`Java`](./libraries/java.md)
- [`Java-http-client`](./libraries/java-http-client.md)
- [`Jetty`](./libraries/jetty.md)
- [`jsdom`](./libraries/jsdom.md)
- [`libwww-perl`](./libraries/libwww-perl.md)
- [`lua-resty-http`](./libraries/lua-resty-http.md)
- [`ocaml-cohttp`](./libraries/ocaml-cohttp.md)
- [`Needle`](./libraries/needle.md)
- [`node-fetch`](./libraries/node-fetch.md)
- [`node-superagent`](./libraries/node-superagent.md)
- [`Node.js`](./libraries/nodejs.md)
- [`Nutch`](./libraries/nutch.md)
- [`okhttp`](./libraries/okhttp.md)
- [`PHP-SOAP`](./libraries/php-soap.md)
- [`phpcrawl`](./libraries/phpcrawl.md)
- [`PostmanRuntime`](./libraries/postman-runtime.md)
- [`python-httpx`](./libraries/python-httpx.md)
- [`python-requests`](./libraries/python-requests.md)
- [`python-urllib`](./libraries/python-urllib.md)
- [`python-urllib3`](./libraries/python-urllib3.md)
- [`rest-client`](./libraries/rest-client.md)
- [`Scrapy`](./libraries/scrapy.md)
- [`undici`](./libraries/undici.md)

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const axios = 'axios/1.7.2';
const pythonRequests = 'python-requests/2.32';
const scrapy = 'Scrapy/1.5.0 (+https://scrapy.org)';
const libParser = new UAParser(Libraries);

console.log(libParser.setUA(axios).getBrowser());
// {name: "axios", version: "1.7.2", major: "1", type: "library"}

console.log(libParser.setUA(pythonRequests).getBrowser());
// {name: "python-requests", version: "2.32", major: "2", type: "library"}

console.log(libParser.setUA(scrapy).getBrowser());
// {name: "Scrapy", version: "1.5.0", major: "1", type: "library"}
```