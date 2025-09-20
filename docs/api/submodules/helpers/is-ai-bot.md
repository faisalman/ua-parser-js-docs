# [Helpers](/api/submodules/helpers/overview) : isAIBot()

`isAIBot(res: IResult | string): boolean`

Check whether user-agent is an AI crawlers

```csv:no-line-numbers
# Current list of AI Crawlers:
AI2_BOT, AMAZON_BOT, ANTHROPIC_AI, ANTHROPIC_CLAUDE_BOT, 
ANTHROPIC_CLAUDE_SEARCHBOT, ANTHROPIC_CLAUDE_WEB, APPLE_BOT, 
APPLE_BOT_EXTENDED, BRAVE_BOT, BYTEDANCE_BYTESPIDER, BYTEDANCE_TIKTOKSPIDER, 
COHERE_TRAINING_DATA_CRAWLER, COMMON_CRAWL_CCBOT, COVEO_BOT, DATAFORSEO_BOT, 
DEEPSEEK_BOT, DIFFBOT, GOOGLE_EXTENDED, GOOGLE_OTHER, GOOGLE_OTHER_IMAGE, 
GOOGLE_OTHER_VIDEO, GOOGLE_CLOUDVERTEXBOT, HIVE_IMAGESIFTBOT, 
HUAWEI_PETALBOT, HUAWEI_PANGUBOT, HUGGINGFACE_BOT, KANGAROO_BOT, 
FIRECRAWL_AGENT, META_FACEBOOKBOT, META_EXTERNALAGENT, OPENAI_GPTBOT, 
OPENAI_SEARCH_BOT, PERPLEXITY_BOT, REPLICATE_BOT, RUNPOD_BOT, 
SB_INTUITIONS_BOT, SEMRUSH_BOT_CONTENTSHAKE, TIMPI_BOT, TOGETHER_BOT, 
HUNTER_VELENPUBLICWEBCRAWLER, VERCEL_V0BOT, WEBZIO_OMGILI, 
WEBZIO_OMGILI_BOT, WEBZIO_EXTENDED, XAI_BOT, YOU_BOT, ZHIPU_CHATGLM_SPIDER
```
::: tip
See list of possible values for `Crawler` enum [here](/api/submodules/enums/extension#extension-browsername-crawler).
:::

## Code Example

```js [example.js]
import { UAParser } from 'ua-parser-js';
import { Bots } from 'ua-parser-js/extensions';
import { isAIBot } from 'ua-parser-js/helpers';

const ahref = 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)';
const firefox = 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0';
const searchGPT = 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot';

const botParser = new UAParser({ Bots });

console.log(isAIBot(botParser.setUA(ahref).getResult())); // false
console.log(isAIBot(botParser.setUA(firefox).getResult())); // false
console.log(isAIBot(botParser.setUA(searchGPT).getResult())); // true
```

Alternatively, with only user-agent data:

```js [example-server.js]
import { isAIBot } from 'ua-parser-js/helpers';

console.log(isAIBot(req.headers['user-agent']));
```