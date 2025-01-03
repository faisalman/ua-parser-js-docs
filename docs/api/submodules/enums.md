# Enums Submodule

### `'ua-parser-js/enums'`

## `Browser`
```csv:no-line-numbers
"115", "2345", "360", ALIPAY, AMAYA, ANDROID, ARORA, AVANT, AVAST, AVG, 
BAIDU, BASILISK, BLAZER, BOLT, BOWSER, BRAVE, CAMINO, CHIMERA, CHROME, 
CHROME_HEADLESS, CHROME_MOBILE, CHROME_WEBVIEW, CHROMIUM, COBALT, 
COC_COC, CONKEROR, DAUM, DILLO, DOLPHIN, DORIS, DRAGON, DUCKDUCKGO, 
EDGE, EPIPHANY, FACEBOOK, FALKON, FIREBIRD, FIREFOX, FIREFOX_FOCUS, 
FIREFOX_MOBILE, FIREFOX_REALITY, FENNEC, FLOCK, FLOW, GO, 
GOOGLE_SEARCH, HELIO, HEYTAP, HONOR, HUAWEI, ICAB, ICE, ICEAPE, 
ICECAT, ICEDRAGON, ICEWEASEL, IE, INSTAGRAM, IRIDIUM, IRON, JASMINE, 
KONQUEROR, KAKAO, KHTML, K_MELEON, KLAR, KLARNA, KINDLE, LENOVO, 
LADYBIRD, LIBREWOLF, LIEBAO, LINE, LINKEDIN, LINKS, LUNASCAPE, LYNX, 
MAEMO, MAXTHON, MIDORI, MINIMO, MIUI, MOZILLA, MOSAIC, NAVER, 
NETFRONT, NETSCAPE, NETSURF, NOKIA, OBIGO, OCULUS, OMNIWEB, OPERA, 
OPERA_COAST, OPERA_MINI, OPERA_MOBI, OPERA_TABLET, OPERA_TOUCH, OVI, 
PALEMOON, PHANTOMJS, PHOENIX, PICOBROWSER, POLARIS, PUFFIN, QQ, 
QQ_LITE, QUARK, QUPZILLA, REKONQ, ROCKMELT, SAFARI, SAFARI_MOBILE, 
SAILFISH, SAMSUNG, SEAMONKEY, SILK, SKYFIRE, SLEIPNIR, SLIMBOAT, 
SLIMBROWSER, SLIMJET, SNAPCHAT, SOGOU_EXPLORER, SOGOU_MOBILE, 
SWIFTFOX, TESLA, TIKTOK, TIZEN, TWITTER, UC, UP, VIVALDI, VIVO, 
W3M, WATERFOX, WEBKIT, WECHAT, WEIBO, WHALE, WOLVIC, YANDEX
```
::: info
See list of possible browser name [here](/info/browser/name).
:::

## `BrowserType`
```csv:no-line-numbers
CRAWLER, CLI, EMAIL, FETCHER, INAPP, MEDIAPLAYER, LIBRARY
```
::: info
Find the example of various browser types in [**ua-parser-js/extensions**](/api/submodules/extensions/overview) submodule.
:::

## `CPU`
```csv:no-line-numbers
"68K", ARM, ARM_64, ARM_HF, AVR, AVR_32, IA64, IRIX, IRIX_64, MIPS, 
MIPS_64, PA_RISC, PPC, SPARC, SPARC_64, X86, X86_64
```
::: info
See list of possible cpu architecture [here](/info/cpu/arch).
:::

## `Device`
```csv:no-line-numbers
CONSOLE, DESKTOP, EMBEDDED, MOBILE, SMARTTV, TABLET, WEARABLE, XR
```
::: info
See list of possible device type [here](/info/device/type).
:::

## `Vendor`
```csv:no-line-numbers
ACER, ADVAN, ALCATEL, APPLE, AMAZON, ARCHOS, ASUS, ATT, BENQ, 
BLACKBERRY, CAT, DELL, ENERGIZER, ESSENTIAL, FACEBOOK, FAIRPHONE, 
GEEKSPHONE, GENERIC, GOOGLE, HMD, HP, HTC, HUAWEI, IMO, INFINIX, 
ITEL, JOLLA, KOBO, LENOVO, LG, MEIZU, MICROMAX, MICROSOFT, MOTOROLA, 
NEXIAN, NINTENDO, NOKIA, NOTHING, NVIDIA, ONEPLUS, OPPO, OUYA, PALM, 
PANASONIC, PEBBLE, PICO, POLYTRON, REALME, RIM, ROKU, SAMSUNG, SHARP, 
SIEMENS, SMARTFREN, SONY, SPRINT, TCL, TECHNISAT, TECNO, TESLA, 
ULEFONE, VIVO, VODAFONE, XBOX, XIAOMI, ZEBRA, ZTE
```
::: info
See list of possible device vendor [here](/info/device/vendor).
:::

## `Engine`
```csv:no-line-numbers
AMAYA, ARKWEB, BLINK, EDGEHTML, FLOW, GECKO, GOANNA, ICAB, KHTML, 
LIBWEB, LINKS, LYNX, NETFRONT, NETSURF, PRESTO, SERVO, TASMAN, 
TRIDENT, W3M, WEBKIT
```
::: info
See list of possible engine name [here](/info/engine/name).
:::

## `OS`
```csv:no-line-numbers
AIX, AMIGA_OS, ANDROID, ANDROID_X86, ARCH, BADA, BEOS, BLACKBERRY, 
CENTOS, CHROME_OS, CHROMECAST, CHROMECAST_ANDROID, CHROMECAST_FUCHSIA, 
CHROMECAST_LINUX, CHROMECAST_SMARTSPEAKER, CONTIKI, DEBIAN, DEEPIN, 
DRAGONFLY, ELEMENTARY_OS, FEDORA, FIREFOX_OS, FREEBSD, FUCHSIA, 
GENTOO, GHOSTBSD, GNU, HAIKU, HARMONYOS, HP_UX, HURD, IOS, JOLI, 
KAIOS, KUBUNTU, LINPUS, LINSPIRE, LINUX, MACOS, MAEMO, MAGEIA, 
MANDRIVA, MANJARO, MEEGO, MINIX, MINT, MORPH_OS, NETBSD, NETRANGE, 
NETTV, NINTENDO, OPENHARMONY, OPENBSD, OPENVMS, OS2, PALM, PC_BSD, 
PCLINUXOS, PICO, PLAN9, PLAYSTATION, QNX, RASPBIAN, REDHAT, 
RIM_TABLET_OS, RISC_OS, SABAYON, SAILFISH, SERENITYOS, SERIES40, 
SLACKWARE, SOLARIS, SUSE, SYMBIAN, TIZEN, UBUNTU, UBUNTU_TOUCH, 
UNIX, VECTORLINUX, WATCHOS, WEBOS, WINDOWS, WINDOWS_IOT, 
WINDOWS_MOBILE, WINDOWS_PHONE, XBOX, ZENWALK
```
::: info
See list of possible os name [here](/info/os/name).
:::


## Code Example

- Match for a specific `os.name`:

```js
import { UAParser } from 'ua-parser-js';
import { OS } from 'ua-parser-js/enums';

if (UAParser().os.name == OS.RIM_TABLET_OS) {
    console.log('Are you for real?');
}
```

- Match for a specific `browser.type`:

```js
import { UAParser } from 'ua-parser-js';
import { Bots } from 'ua-parser-js/extensions';
import { BrowserType } from 'ua-parser-js/enums';

const botParser = new UAParser(Bots);
const typeofBrowser = botParser
                        .setUA(req.headers['user-agent'])
                        .getBrowser()
                        .type;
if (typeofBrowser == BrowserType.CRAWLER) {
    console.log('Hi, hello there Spidey!');
}
```