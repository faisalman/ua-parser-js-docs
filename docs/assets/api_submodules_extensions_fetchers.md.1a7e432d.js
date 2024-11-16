import{_ as s,c as e,o,N as a}from"./chunks/framework.2ea5d489.js";const A=JSON.parse('{"title":"Fetchers","description":"","frontmatter":{},"headers":[],"relativePath":"api/submodules/extensions/fetchers.md","lastUpdated":1731770506000}'),l={name:"api/submodules/extensions/fetchers.md"},n=a(`<h1 id="fetchers" tabindex="-1">Fetchers <a class="header-anchor" href="#fetchers" aria-label="Permalink to &quot;Fetchers&quot;">​</a></h1><p>Bots that retrieve content from <u><strong>specific</strong></u> URLs <u><strong>on demand</strong></u></p><ul><li><code>AhrefsSiteAudit</code></li><li><code>BingPreview</code></li><li><code>ChatGPT-User</code></li><li><code>cohere-ai</code></li><li><code>Discordbot</code></li><li><code>DuckAssistBot</code></li><li><code>FeedFetcher-Google</code></li><li><code>Google-Read-Aloud</code></li><li><code>LinkedInBot</code></li><li><code>Mastodon</code></li><li><code>Pinterestbot</code></li><li><code>Redditbot</code></li><li><code>Rogerbot</code></li><li><code>Slackbot</code></li><li><code>Slack-ImgProxy</code></li><li><code>Slack-LinkExpanding</code></li><li><code>Snapchat</code></li><li><code>Telegrambot</code></li><li><code>Twitterbot</code></li><li><code>Uptimerobot</code></li><li><code>Vercelbot</code></li><li><code>WhatsApp</code></li><li><code>YaDirectFetcher</code></li><li><code>YandexCalendar</code></li><li><code>YandexDirect</code></li><li><code>YandexDirectDyn</code></li><li><code>YandexSearchShop</code></li><li><code>YandexSitelinks</code></li><li><code>YandexUserProxy</code></li><li>... etc.</li></ul><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Fetchers</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ua-parser-js/extensions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> bingprev </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">KHTML</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> like Gecko) BingPreview</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">0b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fetcherParser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">(Fetchers)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(fetcherParser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setUA</span><span style="color:#A6ACCD;">(bingprev)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBrowser</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// {name: &quot;BingPreview&quot;, version: &quot;1.0&quot;, major: &quot;1.0b&#39;&quot;, type: &quot;fetcher&quot;});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,5),c=[n];function p(t,r,i,d,D,y){return o(),e("div",null,c)}const C=s(l,[["render",p]]);export{A as __pageData,C as default};
