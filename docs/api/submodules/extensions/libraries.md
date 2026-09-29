<sup>*[`Extensions Submodule`](./overview.md) > `Libraries`*</sup>

# `Libraries`

Extends [`browser`](/info/browser/name) detection to include tools used in programs to interact with web content or automate browsing tasks.

## List of Detected Libraries

- [`Adobe AIR`](./libraries/adobe-air.md)
- [`aiohttp`](./libraries/aiohttp.md)
- [`Apache HttpClient`](./libraries/apache-httpclient.md)
- [`Apache Nutch`](./libraries/nutch.md)
- [`Axios`](./libraries/axios.md)
- [`Bun`](./libraries/bun.md)
- [`Cohttp`](./libraries/ocaml-cohttp.md)
- [`Dart`](./libraries/dart.md)
- [`Deno`](./libraries/deno.md)
- [`Go HTTP Client`](./libraries/go-http-client.md)
- [`Got`](./libraries/got.md)
- [`Guzzle`](./libraries/guzzlehttp.md)
- [`hackney`](./libraries/hackney.md)
- [`HTTP.rb`](./libraries/http-rb.md)
- [`HTTPX`](./libraries/python-httpx.md)
- [`Java`](./libraries/java.md)
- [`Java HTTP Client`](./libraries/java-http-client.md)
- [`Jetty`](./libraries/jetty.md)
- [`jsdom`](./libraries/jsdom.md)
- [`libwww-perl`](./libraries/libwww-perl.md)
- [`lua-resty-http`](./libraries/lua-resty-http.md)
- [`Needle`](./libraries/needle.md)
- [`node-fetch`](./libraries/node-fetch.md)
- [`Node.js`](./libraries/nodejs.md)
- [`OkHttp`](./libraries/okhttp.md)
- [`PHP SOAP`](./libraries/php-soap.md)
- [`PHPCrawl`](./libraries/phpcrawl.md)
- [`Postman Runtime`](./libraries/postman-runtime.md)
- [`Requests`](./libraries/python-requests.md)
- [`REST Client`](./libraries/rest-client.md)
- [`Scrapy`](./libraries/scrapy.md)
- [`SuperAgent`](./libraries/node-superagent.md)
- [`Undici`](./libraries/undici.md)
- [`urllib`](./libraries/python-urllib.md)
- [`urllib3`](./libraries/python-urllib3.md)

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
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