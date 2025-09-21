# [Quickstarts](/intro/quick-start/quick-start) : Using jQuery (`$.ua`)

Although written in vanilla JavaScript, UAParser.js automatically detects the presence of [jQuery🡭](https://jquery.com/) (or [Zepto🡭](https://zeptojs.com/)) and creates a `$.ua` object in addition to the `window.UAParser` constructor. 

## Properties

The result of detected user-agent

- `$.ua.browser`
- `$.ua.cpu`
- `$.ua.device`
- `$.ua.engine`
- `$.ua.os`

## Methods

To get or set the user-agent

- `$.ua.get()`
- `$.ua.set(ua)`

## Code Example

```js [client.js]
// Say we are in a browser where jQuery is present
// with user-agent: "Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Sprint APA7373KT Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0"

// Get the details
console.log($.ua.device);           // {vendor: "HTC", model: "Evo Shift 4G", type: "mobile"}
console.log($.ua.os);               // {name: "Android", version: "2.3.4"}
console.log($.ua.os.name);          // "Android"
console.log($.ua.get());            // "Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Sprint APA7373KT Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0"

if($.ua.browser.is("IE")) {
    alert("Please upgrade!");
}

// Now let's try another custom user-agent
$.ua.set('Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; Xoom Build/HWI69) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13');

// Test again
console.log($.ua.browser.name);     // "Safari"
console.log($.ua.engine.name);      // "Webkit"
console.log($.ua.device);           // {vendor: "Motorola", model: "Xoom", type: "tablet"}
console.log($.ua.browser.version);  // "4.0"
console.log($.ua.browser.major);    // "4"

// Add class to <body> tag
// <body class="ua-browser-safari ua-devicetype-tablet">
$('body')
    .addClass(
        'ua-browser-' + 
        $.ua.browser.name + 
        ' ua-devicetype-' + 
        $.ua.device.type);
```