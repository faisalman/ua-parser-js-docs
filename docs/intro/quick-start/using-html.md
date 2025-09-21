# [Quickstarts](/intro/quick-start/quick-start) : Using HTML
---

Download UAParser.js from the official GitHub repository: [ua-parser-js🡭](https://github.com/faisalman/ua-parser-js/raw/refs/heads/master/dist/ua-parser.pack.js), then place the following script tag in your HTML file to include the library:

```html
<script src="ua-parser.min.js"></script>
```
Alternatively, you can use a CDN like [jsDelivr🡭](https://cdn.jsdelivr.net/npm/ua-parser-js/src/ua-parser.min.js) or [cdnjs🡭](https://cdnjs.com/libraries/UAParser.js) in your script tag:

```html
<script src="https://cdn.jsdelivr.net/npm/ua-parser-js/dist/ua-parser.min.js"></script>
```

## Code Example

::: code-group

```html [index.html]
<!doctype html>
<html>
<head>
<script src="ua-parser.pack.js"></script>
<script>

const uap = new UAParser();
console.log(uap.getResult());
/*
    /// This will print an object structured like this:
    {
        ua: "",
        browser: {
            name: "",
            version: "",
            major: "",
            type: ""
        },
        engine: {
            name: "",
            version: ""
        },
        os: {
            name: "",
            version: ""
        },
        device: {
            model: "",
            type: "",
            vendor: ""
        },
        cpu: {
            architecture: ""
        }
    }
*/
// The result depends on current window.navigator.userAgent value

// Now let's try a custom user-agent string as an example
const uastring1 = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2";
uap.setUA(uastring1);
const result = uap.getResult();

console.log(result.browser); // {name: "Chromium", version: "15.0.874.106", major: "15", type: undefined}
console.log(result.device); // {model: undefined, type: undefined, vendor: undefined}
console.log(result.os); // {name: "Ubuntu", version: "11.10"}
console.log(result.os.version); // "11.10"
console.log(result.engine.name); // "WebKit"
console.log(result.cpu.architecture); // "amd64"

// Do some other tests
const uastring2 = "Mozilla/5.0 (compatible; Konqueror/4.1; OpenBSD) KHTML/4.1.4 (like Gecko)";
console.log(uap.setUA(uastring2).getBrowser().name); // "Konqueror"
console.log(uap.getOS()); // {name: "OpenBSD", version: undefined}
console.log(uap.getEngine()); // {name: "KHTML", version: "4.1.4"}

const uastring3 = 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.11 (KHTML, like Gecko) Version/7.1.0.7 Safari/534.11';
console.log(uap.setUA(uastring3).getDevice().model); // "PlayBook"
console.log(uap.getOS()); // {name: "RIM Tablet OS", version: "1.0.0"}
console.log(uap.getBrowser().name); // "Safari"

</script>
</head>
<body>
</body>
</html>
```

:::