import{_ as s,c as n,o as a,N as e}from"./chunks/framework.2ea5d489.js";const d=JSON.parse('{"title":"getDeviceVendor(model: string): string | undefined","description":"","frontmatter":{},"headers":[],"relativePath":"api/submodules/helpers/get-device-vendor.md","lastUpdated":1722095968000}'),o={name:"api/submodules/helpers/get-device-vendor.md"},l=e(`<h1 id="getdevicevendor-model-string-string-undefined" tabindex="-1"><code>getDeviceVendor(model: string): string | undefined</code> <a class="header-anchor" href="#getdevicevendor-model-string-string-undefined" aria-label="Permalink to &quot;\`getDeviceVendor(model: string): string | undefined\`&quot;">​</a></h1><p>Guess for the device vendor from a device model name</p><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getDeviceVendor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ua-parser-js/helpers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">getDeviceVendor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SM-A605G</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">// Samsung</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">getDeviceVendor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Redmi Note 8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// Xiaomi</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">getDeviceVendor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Nexus 6P</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">// Huawei</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">getDeviceVendor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Quest 3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// Facebook</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">getDeviceVendor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">AQUOS-TVX19B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// Sharp</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,4),p=[l];function t(r,c,D,i,y,A){return a(),n("div",null,p)}const C=s(o,[["render",t]]);export{d as __pageData,C as default};
