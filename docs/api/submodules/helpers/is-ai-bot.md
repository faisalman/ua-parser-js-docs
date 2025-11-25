# [helpers](/api/submodules/helpers/overview) : isAIBot()

### `isAIBot(ua: string): boolean`

Check whether user-agent is an AI crawler (an AI bot that browses websites by itself to collect data).

| **Operator**  | **User-Agent**                                                                                      |
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
See list of all possible values for `Crawler` (including non-AI crawlers) [here](/api/submodules/extensions/crawlers).
:::

## Code Example

:::code-group

```js [example.js]
import { isAIBot } from 'ua-parser-js/helpers';

const ahref = 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)';
const firefox = 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0';
const searchGPT = 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot';

console.log(isAIBot(ahref)); // false
console.log(isAIBot(firefox)); // false
console.log(isAIBot(searchGPT)); // true
```

```js [example-server.js]
import { isAIBot } from 'ua-parser-js/helpers';

console.log(isAIBot(req.headers['user-agent']));
```
:::

---

#### References

* [The rise of the AI crawler 🡥](https://vercel.com/blog/the-rise-of-the-ai-crawler) *—Vercel*