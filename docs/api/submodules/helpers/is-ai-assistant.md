# [helpers](/api/submodules/helpers/overview) : isAIAssistant()

### `isAIAssistant(ua: string): boolean`

Check whether user-agent is an AI assistant (an AI bot that browses or acts for a user).

| **Operator**  | **User-Agent**   |
| ------------- | -------------- |
| Anthropic     | `Claude-User` |
| Cohere        | `Cohere-AI` |
| DuckDuckGo    | `DuckAssistBot` |
| Google        | `Gemini-Deep-Research` |
| OpenAI        | `ChatGPT-User` |
| Perplexity    | `Perplexity-User` |

::: tip
See list of all possible values for `Fetchers` (including non-AI assistants) [here](/api/submodules/extensions/fetchers).
:::

## Code Example


```js [example.js]
import { isAIAssistant } from 'ua-parser-js/bot-detection';

const gpt_bot = 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.0; +https://openai.com/gptbot)';
const gpt_user = 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot';

console.log(isAIAssistant(gpt_bot)); // false
console.log(isAIAssistant(gpt_user)); // true
```