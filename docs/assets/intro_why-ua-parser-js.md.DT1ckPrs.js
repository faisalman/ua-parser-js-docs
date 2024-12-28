import{_ as a,c as n,a2 as i,o as e}from"./chunks/framework.Cv6Grnpd.js";const l="/images/uap-illustrations.png",u=JSON.parse('{"title":"Why UAParser.js?","description":"","frontmatter":{},"headers":[],"relativePath":"intro/why-ua-parser-js.md","filePath":"intro/why-ua-parser-js.md","lastUpdated":1734097810000}'),p={name:"intro/why-ua-parser-js.md"};function r(t,s,h,k,o,c){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="why-uaparser-js" tabindex="-1">Why UAParser.js? <a class="header-anchor" href="#why-uaparser-js" aria-label="Permalink to &quot;Why UAParser.js?&quot;">​</a></h1><p>UAParser.js simplifies user-agent detection by providing a <ins><strong>structured approach</strong></ins>, offering a clean alternative to the unstructured mess of real-world user-agent strings.</p><h2 id="user-agent-detection-is-hard" tabindex="-1">User-agent detection is hard <a class="header-anchor" href="#user-agent-detection-is-hard" aria-label="Permalink to &quot;User-agent detection is hard&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Problem: </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Consider we got this user-agent from a visitor:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ua</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`Mozilla/5.0 (Linux; Android 10; STK-LX1 </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build/HONORSTK-LX1; wv) AppleWebKit/537.36 (KHTML, </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">like Gecko) Version/4.0 Chrome/110.0.5481.153 Mobile </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Safari/537.36 musical_ly_2022803040 JsSdk/1.0 </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NetType/WIFI Channel/huaweiadsglobal_int </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">AppName/musical_ly app_version/28.3.4 ByteLocale/en </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ByteFullLocale/en Region/IQ Spark/1.2.7-alpha.8 </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">AppVersion/28.3.4 PIA/1.5.11 BytedanceWebview/d8a21c6\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// yes, this is a real user-agent (what???)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>No worries, let&#39;s just use UAParser.js now</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Solution:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Just pass the complex user-agent string to \`UAParser\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> parser</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UAParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ua);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Result:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// And voila!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(parser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBrowser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { name : &quot;TikTok&quot;, version : &quot;28.3.4&quot;, major : &quot;28&quot; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(parser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getEngine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { name : &quot;Blink&quot;, version : &quot;110.0.5481.153&quot; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(parser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getDevice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { type : &quot;mobile&quot;, vendor : &quot;Huawei&quot;, model : &quot;STK-LX1&quot; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(parser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getOS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { name : &quot;Android&quot;, version : &quot;10&quot; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Conclusion:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The visitor is browsing from TikTok app using a Huawei device</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Phew! Thanks, UAParser.js!</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="illustration" tabindex="-1">Illustration <a class="header-anchor" href="#illustration" aria-label="Permalink to &quot;Illustration&quot;">​</a></h2><p>UAParser.js <em>automagically</em> breaks down a complicated user-agent string into a <ins><strong>well-structured</strong></ins> data:</p><p><img src="`+l+'" alt="Illustration"></p>',9)]))}const g=a(p,[["render",r]]);export{u as __pageData,g as default};