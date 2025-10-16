# [Quickstarts](/intro/quick-start/quick-start) : Using jQuery (`$.ua`)

Even though UAParser.js is written in plain JavaScript, it automatically detects the presence of [jQuery🡥](https://jquery.com/) (or [Zepto🡥](https://zeptojs.com/)) and creates a new shortcut `$.ua`, in addition to the usual global `window.UAParser` constructor if you want to create an instance manually. 

## Properties

UAParser.js stores the detected user-agent results as properties of `$.ua` object:

- `$.ua.browser`
- `$.ua.cpu`
- `$.ua.device`
- `$.ua.engine`
- `$.ua.os`

## Methods

Use these helper methods to get or set the current user-agent string:

- `$.ua.get()`
- `$.ua.set(ua)`

## Code Example

```js [client.js]
// Suppose jQuery is already loaded, and the browser user-agent is:
//
// "Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; 
// Sprint APA7373KT Build/GRJ22) AppleWebKit/533.1 
// (KHTML, like Gecko) Version/4.0"

// Get the details
console.log($.ua.device);   // {vendor: "HTC", model: "Evo Shift 4G", type: "mobile"}
console.log($.ua.os);       // {name: "Android", version: "2.3.4"}
console.log($.ua.os.name);  // "Android"
console.log($.ua.get());    // "Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Sprint APA7373KT Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0"

// Now let's test a different user-agent
$.ua.set('Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; Xoom Build/HWI69) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13');

// Test again
console.log($.ua.browser.name);     // "Safari"
console.log($.ua.engine.name);      // "Webkit"
console.log($.ua.device);           // {vendor: "Motorola", model: "Xoom", type: "tablet"}
console.log($.ua.browser.version);  // "4.0"
console.log($.ua.browser.major);    // "4"

// Let's test for unsupported browser
if($.ua.browser.is("IE") && 
    parseInt($.ua.browser.major, 10) < 11) {
        alert("Too old! Please upgrade!");
}

// Let's style your page dynamically:
$('body')
    .addClass(
        'ua-browser-' + $.ua.browser.name + 
        ' ua-devicetype-' + $.ua.device.type);

// Result:
// <body class="ua-browser-safari ua-devicetype-tablet">
```