import{_ as i,c as a,a2 as n,o as l}from"./chunks/framework.Cv6Grnpd.js";const E=JSON.parse('{"title":"isAIBot(res: IResult | string): boolean","description":"","frontmatter":{},"headers":[],"relativePath":"api/submodules/helpers/is-ai-bot.md","filePath":"api/submodules/helpers/is-ai-bot.md","lastUpdated":1731771345000}'),e={name:"api/submodules/helpers/is-ai-bot.md"};function t(p,s,h,k,r,d){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="isaibot-res-iresult-string-boolean" tabindex="-1"><code>isAIBot(res: IResult | string): boolean</code> <a class="header-anchor" href="#isaibot-res-iresult-string-boolean" aria-label="Permalink to &quot;\`isAIBot(res: IResult | string): boolean\`&quot;">​</a></h1><p>Check whether user-agent is an AI bot</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Current list of AI bots:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ai2bot,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> amazonbot,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> anthropic-ai,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> claude-web,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> claudebot,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">applebot,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> applebot-extended,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bytespider,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ccbot,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dataforseobot,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">diffbot,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> googleother,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> googleother-image,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> googleother-video,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">google-extended,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> imagesiftbot,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> petalbot,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> facebookbot,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">meta-externalagent,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gptbot,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oai-searchbot,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> perplexitybot,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timpibot,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> velenpublicwebcrawler,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> omgili,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> omgilibot,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">webzio-extended,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youbot,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scrapy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { UAParser } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ua-parser-js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Bots } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ua-parser-js/extensions&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { isAIBot } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ua-parser-js/helpers&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ahref</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> firefox</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> searchGPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> botParser</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UAParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ Bots });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isAIBot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(botParser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setUA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ahref).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isAIBot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(botParser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setUA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(firefox).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isAIBot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(botParser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setUA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(searchGPT).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Alternatively, with only user-agent data:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { isAIBot } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ua-parser-js/helpers&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isAIBot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(req.headers[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;user-agent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,7)]))}const F=i(e,[["render",t]]);export{E as __pageData,F as default};
