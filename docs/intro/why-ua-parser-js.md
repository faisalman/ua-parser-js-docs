# Why UAParser.js?

UAParser.js simplifies user-agent detection by providing a <ins>**structured approach**</ins>. It's a clean and reliable alternative to the messy reality of real-world user-agent strings.

## Real-World User-Agents Are Full of Surprises

Parsing user-agents looks simple... until you actually try it. Every different browsers, devices, and apps each have their own quirks, and they *really* love to surprise you. 

Let's run through a quick example. Suppose we receive this user-agent from a visitor:

```js [problem.js]
const ua = `Mozilla/5.0 (Linux; Android 10; STK-LX1 
Build/HONORSTK-LX1; wv) AppleWebKit/537.36 (KHTML, 
like Gecko) Version/4.0 Chrome/110.0.5481.153 Mobile 
Safari/537.36 musical_ly_2022803040 JsSdk/1.0 
NetType/WIFI Channel/huaweiadsglobal_int 
AppName/musical_ly app_version/28.3.4 ByteLocale/en 
ByteFullLocale/en Region/IQ Spark/1.2.7-alpha.8 
AppVersion/28.3.4 PIA/1.5.11 BytedanceWebview/d8a21c6`;
```

Yep, this is a real user-agent (what???), and it shows up more often than you'd think. But hey, no worries, let's just use UAParser.js:

```js [solution.js]
// Just pass that complex user-agent string to UAParser
const parser = new UAParser(ua);

// And voila!

console.log(parser.getBrowser());
/* 
    {    
        name : "TikTok", 
        version : "28.3.4", 
        major : "28", 
        type: "inapp"
    }
*/

console.log(parser.getEngine());
/*
    {
        name : "Blink", 
        version : "110.0.5481.153"
    }
*/

console.log(parser.getDevice());
/*
    {
        type : "mobile", 
        vendor : "Honor", 
        model : "STK-LX1" 
    }
*/

console.log(parser.getOS());
/*
    { 
        name : "Android", 
        version : "10" 
    }
*/
```

So, in summary, our visitor is browsing from a TikTok app on an Honor device running Android. 

Phew! Thanks, UAParser.js!

## UAParser.js Turns Chaos Into Schema

Say no more to complicated user-agent strings. UAParser.js <em>automagically</em> turns them into <ins>well-structured</ins> data:

![Illustration](/images/illustration.png)