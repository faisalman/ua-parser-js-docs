# Version 0.7.x / 1.x Documentation

### `UAParser(userAgent?: string, extensions?: array)`

## Constructor

### Using `new UAParser()`

In browser environment, `UAParser` automatically reads the user-agent string from browser's `window.navigator.userAgent`. Whereas in Node.js environment, you must provide the user-agent string manually, usually from `request.headers["user-agent"]`.

```js
const parser = new UAParser(); 
// In node.js: new UAParser(req.headers["user-agent"]);

const result = parser.getResult();
console.log(result);
/** 
  {
    "ua": "",
    "browser": {},
    "engine": {},
    "os": {},
    "device": {},
    "cpu": {}
  } 
*/
```

### Using `UAParser()`

When `UAParser` is called without the `new` keyword, it automatically runs `getResult()` and returns the parsed result directly.

```js
const result = UAParser();
// In node.js: UAParser(req.headers["user-agent"]);

console.log(result);
/** 
  {
    "ua": "",
    "browser": {},
    "engine": {},
    "os": {},
    "device": {},
    "cpu": {}
  } 
*/
```

## Methods

| Method | Description |
| - | - |
| `getResult()` | returns the user-agent string, browser, CPU, device, engine, and OS. |
| `getBrowser()` | returns the browser name and version. |
| `getDevice()` | returns the device model, type, vendor. |
| `getEngine()` | returns the browser engine name and version. |
| `getOS()` | returns the operating system name and version. |
| `getCPU()` | returns the CPU architectural design name. |
| `getUA()` | returns the user-agent string. |
| `setUA(user-agent)` | set a custom user-agent string to be parsed. |


---

* `getResult()`
    * returns `{ ua: '', browser: {}, cpu: {}, device: {}, engine: {}, os: {} }`

* `getBrowser()`
    * returns `{ name: '', version: '' }`

```sh
# Possible 'browser.name':
115 Browser, 2345Explorer, 360 Browser, Alipay, Amaya, Android Browser, Arora, 
Avant, Avast, AVG, Baidu, Basilisk, Blazer, Bolt, Brave, Bowser, Camino, Chimera,
Chrome Headless, Chrome WebView, Chrome, Chromium, Cobalt, Comodo Dragon, Daum,
Dillo, Dolphin, Doris, DuckDuckGo, Edge, Electron, Epiphany, Facebook, Falkon, 
Fennec, Firebird, Firefox [Focus/Reality], Flock, Flow, GSA, GoBrowser, Helio, 
Heytap, Huawei Browser, iCab, ICE Browser, IE, IEMobile, IceApe, IceCat, 
IceDragon, Iceweasel, Instagram, Iridium, Iron, Jasmine, Kakao[Story/Talk], 
K-Meleon, Kindle, Klar, Klarna, Konqueror, Ladybird, LBBROWSER, LibreWolf, Line, 
LinkedIn, Links, Lunascape, Lynx, MIUI Browser, Maemo, Maxthon, Midori, Minimo, 
Mobile Safari, Mosaic, Mozilla, NetFront, NetSurf, Netfront, Netscape, 
NokiaBrowser, Obigo, Oculus Browser, OmniWeb, Opera Coast, 
Opera [GX/Mini/Mobi/Tablet], PaleMoon, PhantomJS, Phoenix, Pico Browser, Polaris, 
Puffin, QQ, QQBrowser, QQBrowserLite, Quark, QupZilla, RockMelt, Safari, 
Sailfish Browser, Samsung Internet, SeaMonkey, Silk, Skyfire, Sleipnir, 
Slim[Browser/Boat/Jet], Smart Lenovo Browser, Snapchat, Sogou [Explorer/Mobile], 
Swiftfox, Tesla, TikTok, Tizen Browser, Twitter, UCBrowser, UP.Browser, Vivaldi, 
Vivo Browser, w3m, Waterfox, WeChat, Weibo, Whale Browser, Wolvic, Yandex, ...

# 'browser.version' determined dynamically
```

* `getDevice()`
    * returns `{ model: '', type: '', vendor: '' }`

```sh
# Possible 'device.type':
console, mobile, tablet, smarttv, wearable, embedded

##########
# NOTE: 'desktop' is not a possible device type. 
# UAParser only reports info directly available from the UA string, which is not the case for 'desktop' device type.
# If you wish to detect desktop devices, you must handle the needed logic yourself.
# You can read more about it in this issue: https://github.com/faisalman/ua-parser-js/issues/182
##########

# Possible 'device.vendor':
Acer, Advan, Alcatel, Amazon, Apple, Archos, ASUS, AT&T, BenQ, BlackBerry, Cat, 
Dell, Energizer, Essential, Facebook, Fairphone, GeeksPhone, Google, HP, HMD, 
HTC, Huawei, IMO, Infinix, itel, Jolla, Kobo, Lenovo, LG, Meizu, Micromax, 
Microsoft, Motorola, Nexian, Nintendo, Nokia, Nothing, Nvidia, OnePlus, OPPO, 
Ouya, Palm, Panasonic, Pebble, Polytron, Realme, RIM, Roku, Samsung, Sharp, 
Siemens, Smartfren, Sony[Ericsson], Sprint, TCL, Tecno, Tesla, Ulefone, Vivo, 
Vodafone, Xbox, Xiaomi, Zebra, ZTE, ...

# 'device.model' determined dynamically
```

* `getEngine()`
    * returns `{ name: '', version: '' }`

```sh
# Possible 'engine.name'
Amaya, ArkWeb, Blink, EdgeHTML, Flow, Gecko, Goanna, iCab, KHTML, LibWeb, Links, 
Lynx, NetFront, NetSurf, Presto, Servo, Tasman, Trident, w3m, WebKit

# 'engine.version' determined dynamically
```

* `getOS()`
    * returns `{ name: '', version: '' }`

```sh
# Possible 'os.name'
AIX, Amiga OS, Android[-x86], Arch, Bada, BeOS, BlackBerry, CentOS, Chromium OS,
Contiki, Fedora, Firefox OS, FreeBSD, Debian, Deepin, DragonFly, elementary OS, 
Fuchsia, Gentoo, GhostBSD, GNU, Haiku, HarmonyOS, HP-UX, Hurd, iOS, Joli, KaiOS, 
Linpus, Linspire,Linux, Mac OS, Maemo, Mageia, Mandriva, Manjaro, MeeGo, Minix, 
Mint, Morph OS, NetBSD, NetRange, NetTV, Nintendo, OpenBSD, OpenHarmony, OpenVMS, 
OS/2, Palm, PC-BSD, PCLinuxOS, Plan9, PlayStation, QNX, Raspbian, RedHat, 
RIM Tablet OS, RISC OS, Sabayon, Sailfish, SerenityOS, Series40, Slackware, 
Solaris, SUSE, Symbian, Tizen, Ubuntu [Touch], Unix, VectorLinux, Viera, watchOS, 
WebOS, Windows [Phone/Mobile/IoT], Zenwalk, ...

# 'os.version' determined dynamically
```

* `getCPU()`
    * returns `{ architecture: '' }`

```sh
# Possible 'cpu.architecture'
68k, amd64, arm[64/hf], avr, ia[32/64], irix[64], mips[64], pa-risc, ppc, 
sparc[64]
```

* `getUA()`
    * returns UA string of current instance

* `setUA(uastring)`
    * set UA string to be parsed
    * returns current instance

## Usage

### Using HTML

```html
<!doctype html>
<html>
<head>
<script src="ua-parser.min.js"></script>
<script>

    var parser = new UAParser();
    console.log(parser.getResult());
    /*
        /// This will print an object structured like this:
        {
            ua: "",
            browser: {
                name: "",
                version: "",
                major: ""
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
    // Default result depends on current window.navigator.userAgent value

    // Now let's try a custom user-agent string as an example
    var uastring1 = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2";
    parser.setUA(uastring1);
    var result = parser.getResult();
    // You can also use UAParser constructor directly without having to create an instance:
    // var result = UAParser(uastring1);

    console.log(result.browser);        // {name: "Chromium", version: "15.0.874.106"}
    console.log(result.device);         // {model: undefined, type: undefined, vendor: undefined}
    console.log(result.os);             // {name: "Ubuntu", version: "11.10"}
    console.log(result.os.version);     // "11.10"
    console.log(result.engine.name);    // "WebKit"
    console.log(result.cpu.architecture);   // "amd64"

    // Do some other tests
    var uastring2 = "Mozilla/5.0 (compatible; Konqueror/4.1; OpenBSD) KHTML/4.1.4 (like Gecko)";
    console.log(parser.setUA(uastring2).getBrowser().name); // "Konqueror"
    console.log(parser.getOS());                            // {name: "OpenBSD", version: undefined}
    console.log(parser.getEngine());                        // {name: "KHTML", version: "4.1.4"}

    var uastring3 = 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.11 (KHTML, like Gecko) Version/7.1.0.7 Safari/534.11';
    console.log(parser.setUA(uastring3).getDevice().model); // "PlayBook"
    console.log(parser.getOS())                             // {name: "RIM Tablet OS", version: "1.0.0"}
    console.log(parser.getBrowser().name);                  // "Safari"

</script>
</head>
<body>
</body>
</html>
```

### Using node.js

Note: Device information is not available in the NodeJS environment.

```sh
$ npm install ua-parser-js
```

```js
var http = require('http');
var parser = require('ua-parser-js');

http.createServer(function (req, res) {
    // get user-agent header
    var ua = parser(req.headers['user-agent']);
    // write the result as response
    res.end(JSON.stringify(ua, null, '  '));
})
.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
```

### Using TypeScript

```sh
$ npm install --save @types/ua-parser-js
# Download TS type definition from DefinitelyTyped repository:
# https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/ua-parser-js
```

### Using jQuery/Zepto ($.ua)

Although written in vanilla js, this library will automatically detect if jQuery/Zepto is present and create `$.ua` object (with values based on its User-Agent) along with `window.UAParser` constructor. To get/set user-agent you can use: `$.ua.get()` / `$.ua.set(uastring)`.

```js
// Say we are in a browser with default user-agent: 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Sprint APA7373KT Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0':

// Get the details
console.log($.ua.device);           // {vendor: "HTC", model: "Evo Shift 4G", type: "mobile"}
console.log($.ua.os);               // {name: "Android", version: "2.3.4"}
console.log($.ua.os.name);          // "Android"
console.log($.ua.get());            // "Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Sprint APA7373KT Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0"

// Now lets try to reset to another custom user-agent
$.ua.set('Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; Xoom Build/HWI69) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13');

// Test again
console.log($.ua.browser.name);     // "Safari"
console.log($.ua.engine.name);      // "Webkit"
console.log($.ua.device);           // {vendor: "Motorola", model: "Xoom", type: "tablet"}
console.log(parseInt($.ua.browser.version.split('.')[0], 10));  // 4

// Add class to <body> tag
// <body class="ua-browser-safari ua-devicetype-tablet">
$('body').addClass('ua-browser-' + $.ua.browser.name + ' ua-devicetype-' + $.ua.device.type);
```

### Using npx

UAParser.js can be executed as a command that returns the parsed data in JSON format:

```sh
$ npx ua-parser-js "[INSERT-UA-HERE]"
```

## Custom Extension

You can create custom extensions to add your own detection rules or override existing ones:

```js
// Example:
var myOwnListOfBrowsers = [
    [/(mybrowser)\/([\w\.]+)/i], [UAParser.BROWSER.NAME, UAParser.BROWSER.VERSION]
];
var myParser = new UAParser({ browser: myOwnListOfBrowsers });
var myUA = 'Mozilla/5.0 MyBrowser/1.3';
console.log(myParser.setUA(myUA).getBrowser());  // {name: "MyBrowser", version: "1.3"}
```

## Upgrade to v2.x

For highly improved detection and many powerful new features, consider upgrading UAParser.js to latest version 2.x. See the [migration guide](/intro/whats-new) for details on how to upgrade.