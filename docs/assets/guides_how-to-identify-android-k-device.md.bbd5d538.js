import{_ as s,c as n,o as a,N as e}from"./chunks/framework.2ea5d489.js";const F=JSON.parse('{"title":"How to Identify The Real Device of (Linux; Android 10; K)","description":"","frontmatter":{},"headers":[],"relativePath":"guides/how-to-identify-android-k-device.md","lastUpdated":1727965726000}'),o={name:"guides/how-to-identify-android-k-device.md"},l=e(`<h1 id="how-to-identify-the-real-device-of-linux-android-10-k" tabindex="-1">How to Identify The Real Device of <code>(Linux; Android 10; K)</code> <a class="header-anchor" href="#how-to-identify-the-real-device-of-linux-android-10-k" aria-label="Permalink to &quot;How to Identify The Real Device of \`(Linux; Android 10; K)\`&quot;">​</a></h1><p>Since Chrome 110, Google changes it&#39;s user-agent format into a fixed value. That is, instead of seeing something like <code>Android 13; Pixel 7</code> the default value will always be <code>Android 10; K</code>. Therefore it&#39;s currently impossible to identify the real Android version and device model only from user-agent data. Luckily, there is a kind of workaround by utilizing client hints feature:</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> uap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> device</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> os </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> uap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getResult</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Based on user agent: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> os</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> device)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// { name: &quot;Android&quot;, version: &quot;10&quot; }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// { type: &quot;mobile&quot;, model: &quot;K&quot; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">uap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getResult</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">withClientHints</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Based on client hints</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">device</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// { name: &quot;Android&quot;, version: &quot;13.0.0&quot; }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// { type: &quot;mobile&quot;, model: &quot;Pixel 7&quot; }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>References:</p><ul><li><a href="/api/ua-parser-js/idata/with-client-hints.html"><code>withClientHints()</code></a></li><li><a href="https://mobiforge.com/research-analysis/the-mysterious-model-k" target="_blank" rel="noreferrer">https://mobiforge.com/research-analysis/the-mysterious-model-k</a></li><li><a href="https://developers.google.com/privacy-sandbox/blog/user-agent-reduction-android-model-and-version" target="_blank" rel="noreferrer">https://developers.google.com/privacy-sandbox/blog/user-agent-reduction-android-model-and-version</a></li></ul>`,5),p=[l];function t(r,c,i,y,d,D){return a(),n("div",null,p)}const u=s(o,[["render",t]]);export{F as __pageData,u as default};
