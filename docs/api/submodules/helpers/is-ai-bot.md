# [Helpers](/api/submodules/helpers/overview) : isAIBot()

`isAIBot(res: IResult | string): boolean`

Check whether user-agent is an AI crawlers

| **Provider**  | **UA Token**                                                                                        |
| ------------- | --------------------------------------------------------------------------------------------------- |
| AI2           | `AI2Bot`                                                                                            |
| Amazon        | `Amazonbot`                                                                                         |
| Anthropic     | `anthropic-ai`, `ClaudeBot`, `Claude-SearchBot`, `Claude-Web`                                       |
| Apple         | `Applebot`, `Applebot-Extended`                                                                     |
| Brave         | `Bravebot`                                                                                          |
| ByteDance     | `Bytespider`, `TikTokSpider`                                                                        |
| Cohere        | `cohere-training-data-crawler`                                                                      |
| Common Crawl  | `CCBot`                                                                                             |
| Coveo         | `Coveobot`                                                                                          |
| DataForSEO    | `DataForSeoBot`                                                                                     |
| DeepSeek      | `DeepSeekBot`                                                                                       |
| Diffbot       | `Diffbot`                                                                                           |
| Google        | `Google-Extended`, `GoogleOther`, `GoogleOther-Image`, `GoogleOther-Video`, `Google-CloudVertexBot` |
| Hive AI       | `ImagesiftBot`                                                                                      |
| Huawei        | `PanguBot`, `PetalBot`                                                                              |
| Hugging Face  | `HuggingFace-Bot`                                                                                   |
| Kangaroo      | `Kangaroo Bot`                                                                                      |
| Mendable.ai   | `FirecrawlAgent`                                                                                    |
| Meta          | `FacebookBot`, `meta-externalagent`                                                                 |
| OpenAI        | `GPTBot`, `OAI-SearchBot`                                                                           |
| Perplexity    | `PerplexityBot`                                                                                     |
| Replicate     | `Replicate-Bot`                                                                                     |
| RunPod        | `RunPod-Bot`                                                                                        |
| SB Intuitions | `SBIntuitionsBot`                                                                                   |
| SEMrush       | `SemrushBot-OCOB`                                                                                   |
| Timpi         | `Timpibot`                                                                                          |
| Together AI   | `Together-Bot`                                                                                      |
| Hunter.io     | `VelenPublicWebCrawler`                                                                             |
| Vercel        | `v0bot`                                                                                             |
| Webz.io       | `omgili`, `omgilibot`, `Webzio-Extended`                                                            |
| xAI           | `xAI-Bot`                                                                                           |
| You.com       | `YouBot`                                                                                            |
| Zhipu AI      | `ChatGLM-Spider`                                                                                    |


::: tip
See list of all possible values for `Crawler` [here](/api/submodules/extensions/crawlers).
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