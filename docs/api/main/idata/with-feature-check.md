# [IData](/api/main/overview#methods) : withFeatureCheck()

`withFeatureCheck<T>(): PromiseLike<T> | T`

Checks extra browser features to improve detection accuracy beyond the user-agent string:

- browser : 
    - Brave (checks for `navigator.isBrave`)
- device  : 
    - iPad (checks for `navigator.standalone` & `navigator.maxTouchPoints`)

## Code Example

```js
// suppose this code runs on iPad
const withoutFeatureCheck = UAParser();
const withFeatureCheck = UAParser().withFeatureCheck();

console.log(withoutFeatureCheck.device); 
// { vendor : "Apple", model : "Macintosh", type : undefined }
console.log(withFeatureCheck.device);    
// { vendor : "Apple", model : "iPad", type : "tablet" }
```