# Using Node.js

In a server-side environment like Node.js, UAParser.js can parse the `User-Agent` and `Sec-CH-UA-*` headers of incoming HTTP requests. 

To get started, install UAParser.js using npm:

```sh [npm]
$ npm install ua-parser-js
```
Then, require the library in your Node.js application:

::: code-group

```js [server.js]
const http = require('http');
const uap = require('ua-parser-js');

http.createServer(function (req, res) {
    // get user-agent header
    let ua = uap(req.headers['user-agent']);

    /* 
    // Since v2.0.0
    // you can also pass Client Hints data to UAParser
    // note: only works in a secure context (localhost or https://)
    // from any browsers that are based on Chrome 85+
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA

        const getHighEntropyValues = 'Sec-CH-UA-Full-Version-List, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version, Sec-CH-UA-Arch, Sec-CH-UA-Bitness';
        res.setHeader('Accept-CH', getHighEntropyValues);
        res.setHeader('Critical-CH', getHighEntropyValues);
        
        ua = uap(req.headers).withClientHints();
    */

    // write the result as response
    res.end(JSON.stringify(ua, null, '  '));
})
.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
```

:::

In this example, the server listens for incoming HTTP requests and uses UAParser.js to parse the `User-Agent` header from each request. The parsed user-agent information is then sent back as a JSON response to the browser.