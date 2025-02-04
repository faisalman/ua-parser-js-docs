import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/",
    title: "UAParser.js",
    titleTemplate: 'How to detect Browser, OS, CPU, & Device with JavaScript using UAParser.js',
    description: "UAParser.js is a JavaScript library to detect user's Browser, Engine, OS, CPU, and Device type/model, either in browser (client-side) or node.js (server-side).",
    head: [
        ['meta', { name: 'msvalidate.01', content: 'F4D861C3287B312C6D147ECEC9B85E5E' }],
        ['meta', { name: 'google-site-verification', content: 'lJpOPhia4HtRabTKEdpgyB_MWRKamHC6pfjFqekWiH0' }],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/uap-logo-transparent.png" }],
        ['script', {}, 'window?.localStorage?.setItem("vitepress-theme-appearance", window?.localStorage?.getItem("vitepress-theme-appearance") ?? "dark")'],
        ['script', { async: '', src: "https://analytics.umami.is/script.js", "data-website-id": "8d8f3cb0-d161-4a3c-891e-eb042af6d3a3" }],
        ['script', { src: "//code.tidio.co/hu6mx7fw2r6llmfzxj5llesd5l51q5dv.js", async: ''}]
    ],
    appearance: 'dark',
    lastUpdated: true,
    sitemap: {
        hostname: 'https://docs.uaparser.dev'
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        logo: '/images/logo.png',

        nav: [
            { text: 'Home', link: '/' },
            {
                text: '2.0.0',
                items: [
                    {
                        text: 'Changelog',
                        link: '/intro/changelog'
                    },
                    {
                        text: 'Contributing',
                        link: 'https://github.com/faisalman/ua-parser-js#development'
                    }
                ]
            }
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'Why UAParser.js', link: '/intro/why-ua-parser-js' },
                    {
                        text: 'Quick Start',
                        link: '/intro/quick-start/quick-start',
                        collapsed: true,
                        items: [
                            { text: 'Using HTML', link: '/intro/quick-start/using-html' },
                            { text: 'Using Node.js', link: '/intro/quick-start/using-node-js' },
                            { text: 'Using ESM / TypeScript', link: '/intro/quick-start/using-es-modules-typescript' },
                            { text: 'Using jQuery', link: '/intro/quick-start/using-jquery' },
                            { text: 'Using Command Line', link: '/intro/quick-start/using-cli' },
                        ]
                    },
                    { text: 'Extending Regex', link: '/intro/extending-regex' },
                    { text: 'Migrating from v1 to v2', link: '/intro/whats-new' },
                    { text: 'Changelog', link: '/intro/changelog' }
                ]
            },
            {
                text: 'API Reference',
                items: [
                    {
                        text: 'UAParser',
                        collapsed: false,
                        link: '/api/main/overview',
                        items: [
                            { text: 'Overview', link: '/api/main/overview' },
                            { text: 'getBrowser()', link: '/api/main/get-browser' },
                            { text: 'getCPU()', link: '/api/main/get-cpu' },
                            { text: 'getDevice()', link: '/api/main/get-device' },
                            { text: 'getEngine()', link: '/api/main/get-engine' },
                            { text: 'getOS()', link: '/api/main/get-os' },
                            { text: 'getResult()', link: '/api/main/get-result' },
                            { text: 'getUA()', link: '/api/main/get-ua' },
                            { text: 'setUA()', link: '/api/main/set-ua' }
                        ]
                    },
                    {
                        text: 'IData',
                        collapsed: false,
                        items: [
                            { text: 'is()', link: '/api/main/idata/is' },
                            { text: 'toString()', link: '/api/main/idata/to-string' },
                            { text: 'withClientHints()', link: '/api/main/idata/with-client-hints' },
                            { text: 'withFeatureCheck()', link: '/api/main/idata/with-feature-check' }
                        ]
                    },
                    {
                        text: 'IBrowser',
                        collapsed: true,
                        items: [
                            { text: 'name', link: '/info/browser/name' },
                            { text: 'version', link: '/info/browser/version' },
                            { text: 'major', link: '/info/browser/major' },
                            { text: 'type', link: '/info/browser/type' }
                        ]
                    },
                    {
                        text: 'ICPU',
                        collapsed: true,
                        items: [
                            { text: 'architecture', link: '/info/cpu/arch' }
                        ]
                    },
                    {
                        text: 'IDevice',
                        collapsed: true,
                        items: [
                            { text: 'type', link: '/info/device/type' },
                            { text: 'model', link: '/info/device/model' },
                            { text: 'vendor', link: '/info/device/vendor' }
                        ]
                    },
                    {
                        text: 'IEngine',
                        collapsed: true,
                        items: [
                            { text: 'name', link: '/info/engine/name' },
                            { text: 'version', link: '/info/engine/version' }
                        ]
                    },
                    {
                        text: 'IOS',
                        collapsed: true,
                        items: [
                            { text: 'name', link: '/info/os/name' },
                            { text: 'version', link: '/info/os/version' }
                        ]
                    }
                ]
            },
            {
                text: 'Submodules',
                items: [
                    { 
                        text: 'Enums',
                        link: '/api/submodules/enums',
                    },
                    {
                        text: 'Extensions', 
                        link: '/api/submodules/extensions/overview',
                        collapsed: false,
                        items: [
                            { text: 'CLIs', link: '/api/submodules/extensions/clis' },
                            { text: 'Crawlers', link: '/api/submodules/extensions/crawlers' },
                            { text: 'ExtraDevices', link: '/api/submodules/extensions/extra-devices' },
                            { text: 'Emails', link: '/api/submodules/extensions/emails' },
                            { text: 'Fetchers', link: '/api/submodules/extensions/fetchers' },
                            { text: 'InApps', link: '/api/submodules/extensions/inapps' },
                            { text: 'Libraries', link: '/api/submodules/extensions/libraries' },
                            { text: 'MediaPlayers', link: '/api/submodules/extensions/media-players' },
                            { text: 'Vehicles', link: '/api/submodules/extensions/vehicles' }
                        ]
                    },
                    {
                        text: 'Helpers',
                        link: '/api/submodules/helpers/overview',
                        collapsed: false,
                        items: [
                            { text: 'getDeviceVendor()', link: '/api/submodules/helpers/get-device-vendor' },
                            { text: 'isAppleSilicon()', link: '/api/submodules/helpers/is-apple-silicon' },
                            { text: 'isAIBot()', link: '/api/submodules/helpers/is-ai-bot' },
                            { text: 'isBot()', link: '/api/submodules/helpers/is-bot' },
                            { text: 'isChromeFamily()', link: '/api/submodules/helpers/is-chrome-family' },
                            { text: 'isElectron()', link: '/api/submodules/helpers/is-electron' },
                            { text: 'isFromEU()', link: '/api/submodules/helpers/is-from-eu' },
                            { text: 'isFrozenUA()', link: '/api/submodules/helpers/is-frozen-ua' },
                            { text: 'isStandalonePWA()', link: '/api/submodules/helpers/is-standalone-pwa' }
                        ]
                    }
                ]
            },
            {
                text: 'Guides',
                collapsed: false,
                items: [
                    { text: 'How to Detect macOS >10', link: '/guides/how-to-detect-macos-10157-using-javascript' },
                    { text: 'How to Detect Windows 11', link: '/guides/how-to-detect-windows-11-using-javascript' },
                    { text: 'How to Identify Android K', link: '/guides/how-to-identify-android-k-device' },
                    { text: 'Articles & References', link: '/guides/articles-references' }
                ]
            }
        ],

        socialLinks: [
            {
                icon: {
                    svg: '<svg color="#fff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
                }, link: 'https://github.com/faisalman/ua-parser-js'
            },
            {
                icon: {
                    svg: '<svg color="#CB3837" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>npm</title><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/></svg>'
                },
                link: 'https://www.npmjs.com/package/ua-parser-js'
            },
            {
                icon: {
                    svg: '<svg color="#7FADF2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Open Collective</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.54 0 4.894-.79 6.834-2.135l-3.107-3.109a7.715 7.715 0 1 1 0-13.512l3.107-3.109A11.943 11.943 0 0 0 12 0zm9.865 5.166l-3.109 3.107A7.67 7.67 0 0 1 19.715 12a7.682 7.682 0 0 1-.959 3.727l3.109 3.107A11.943 11.943 0 0 0 24 12c0-2.54-.79-4.894-2.135-6.834z"/></svg>'
                },
                link: 'https://opencollective.com/ua-parser-js'
            },
            {
                icon: {
                    svg: '<svg color="#5B0BB5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Demo</title><path d="M12 0a1.44 1.44 0 0 0-.947.399L.547 10.762a1.26 1.26 0 0 0-.342.808v11.138c0 .768.53 1.292 1.311 1.292h20.968c.78 0 1.311-.522 1.311-1.292V11.57a1.25 1.25 0 0 0-.34-.804L15.68 3.097h-.001L12.947.4A1.454 1.454 0 0 0 12 0Zm0 6.727 6.552 6.456v5.65H5.446v-5.65z"/></svg>'
                },
                link: 'https://uaparser.dev'
            },
        ],
        carbonAds: {
            code: 'your-carbon-code',
            placement: 'your-carbon-placement'
        },
        footer: {
            message: 'UAParser.js v2 is licensed under AGPLv3 or PRO licenses.',
            copyright: 'Copyright (c) 2012-2024 Faisal Salman.'
        },
        lastUpdatedText: 'Updated Date',
        editLink: {
            pattern: 'https://github.com/faisalman/ua-parser-js-docs/tree/main/docs/:path',
            text: 'Edit this page on GitHub'
        }
    },

    markdown: {
        lineNumbers: true,

        // adjust how header anchors are generated,
        // useful for integrating with tools that use different conventions
        anchors: {
            slugify(str) {
                return encodeURIComponent(str)
            }
        }
    }
});
