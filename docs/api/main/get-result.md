[`← UAParser`](/api/main/overview)

# `getResult(): IResult`

Returns a full breakdown of the user-agent string, browser, CPU, device, engine, and OS data as an [`IResult`](/api/main/iresult) object.

## Code Example

```js
const galaxytabs8 = 'Mozilla/5.0 (Linux; Android 12; SM-X706B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36'
const parser = new UAParser(galaxytabs8);

console.log(parser.getResult());
/*
{ 
    ua: "Mozilla/5.0 (Linux; Android 12; SM-X706B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36", 
    browser: { 
        name: "Chrome", 
        version: "103.0.5060.53",
        major: "103",
        type: undefined
    }, 
    cpu: {
        architecture: undefined
    }, 
    device: {
        type: "mobile",
        vendor: "Huawei",
        model: "SM-X706B"
    },
    engine: {
        name: "Blink",
        version: "103.0.5060.53"
    }, 
    os: {
        name: "Android",
        version: "12"
    }
}
*/
```