<sup>*[`Extensions Submodule`](./overview.md) > `Libraries`*</sup>

# `Libraries`

Extends [`browser`](/info/browser/name) detection to include tools used in programs to interact with web content or automate browsing tasks.

## List of Detected Libraries

| **Library** |  |  |
| --- | --- | --- |
| [`Adobe AIR`](./libraries/adobe-air.md) | [`hackney`](./libraries/hackney.md) | [`OkHttp`](./libraries/okhttp.md) |
| [`aiohttp`](./libraries/aiohttp.md) | [`HTTP.rb`](./libraries/http-rb.md) | [`PHP SOAP`](./libraries/php-soap.md) |
| [`Apache HttpClient`](./libraries/apache-httpclient.md) | [`HTTPX`](./libraries/python-httpx.md) | [`PHPCrawl`](./libraries/phpcrawl.md) |
| [`Apache Nutch`](./libraries/nutch.md) | [`Java`](./libraries/java.md) | [`Postman Runtime`](./libraries/postman-runtime.md) |
| [`Axios`](./libraries/axios.md) | [`Java HTTP Client`](./libraries/java-http-client.md) | [`Requests`](./libraries/python-requests.md) |
| [`Bun`](./libraries/bun.md) | [`Jetty`](./libraries/jetty.md) | [`REST Client`](./libraries/rest-client.md) |
| [`Cohttp`](./libraries/ocaml-cohttp.md) | [`jsdom`](./libraries/jsdom.md) | [`Scrapy`](./libraries/scrapy.md) |
| [`Dart`](./libraries/dart.md) | [`libwww-perl`](./libraries/libwww-perl.md) | [`SuperAgent`](./libraries/node-superagent.md) |
| [`Deno`](./libraries/deno.md) | [`lua-resty-http`](./libraries/lua-resty-http.md) | [`Undici`](./libraries/undici.md) |
| [`Go HTTP Client`](./libraries/go-http-client.md) | [`Needle`](./libraries/needle.md) | [`urllib`](./libraries/python-urllib.md) |
| [`Got`](./libraries/got.md) | [`node-fetch`](./libraries/node-fetch.md) | [`urllib3`](./libraries/python-urllib3.md) |
| [`Guzzle`](./libraries/guzzlehttp.md) | [`Node.js`](./libraries/nodejs.md) |  |

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