# [UAParser](/api/main/overview#methods) : getUA()

`getUA(): string`

Returns the user-agent string of current `UAParser` instance

## Code Example

Try this code on a browser console:

```js
const parser = new UAParser();

// Prints the current browser's user-agent
console.log(parser.getUA());

// Replace it with a custom user-agent string
parser.setUA('Mozilla/5.0 MyBrowser/1.0');

// Now it uses the new value we set before
parser.getUA();
// "Mozilla/5.0 MyBrowser/1.0"
```