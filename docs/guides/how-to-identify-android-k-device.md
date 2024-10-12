# How to Identify The Real Device of `(Linux; Android 10; K)`

Since Chrome 110, Google changes it's user-agent format into a fixed value. That is, instead of seeing something like `Android 13; Pixel 7` the default value will always be `Android 10; K`. Therefore it's currently impossible to identify the real Android version and device model only from user-agent data. Luckily, there is a kind of workaround by utilizing client hints feature:

```js
const uap = new UAParser();

let { device, os } = uap.getResult();
console.log('Based on user agent: ', os, device); 
// { name: "Android", version: "10" }
// { type: "mobile", model: "K" }

uap.getResult().withClientHints().then(res => {
    console.log('Based on client hints', res.os, res.device); 
    // { name: "Android", version: "13.0.0" }
    // { type: "mobile", model: "Pixel 7" }
});
```

References:

- [`withClientHints()`](/api/main/idata/with-client-hints)
- https://mobiforge.com/research-analysis/the-mysterious-model-k
- https://developers.google.com/privacy-sandbox/blog/user-agent-reduction-android-model-and-version