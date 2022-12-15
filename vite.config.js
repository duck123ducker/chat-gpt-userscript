import { defineConfig } from 'vite';
import { version } from './package.json'
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.js',
      userscript: {
        icon: 'https://github.com/zhengbangbo/oss/raw/main/logo/chat-gpt-userscript.png',
        name: {
          '': 'ChatGPT Search',
          "zh-CN": 'ChatGPT 搜索',
          "zh-TW": 'ChatGPT 搜索',
        },
        version,
        description: {
          '': 'ChatGPT answers displayed in sidebar after search (Google, Bing, Baidu, DuckDuckGo and DeepL)',
          'zh-CN': '搜索后侧栏显示 ChatGPT 回答（Google、Bing、百度、DuckDuckGo和DeepL）',
          'zh-TW': '搜索後側欄顯示 ChatGPT 回答（Google、Bing、百度、DuckDuckGo和DeepL）',
        },
        author: 'Zheng Bang-Bo(https://github.com/zhengbangbo)',
        match: [
          'https://*.google.com/search*',
          'https://*.google.ad/search*',
          'https://*.google.ae/search*',
          'https://*.google.com.af/search*',
          'https://*.google.com.ag/search*',
          'https://*.google.com.ai/search*',
          'https://*.google.al/search*',
          'https://*.google.am/search*',
          'https://*.google.co.ao/search*',
          'https://*.google.com.ar/search*',
          'https://*.google.as/search*',
          'https://*.google.at/search*',
          'https://*.google.com.au/search*',
          'https://*.google.az/search*',
          'https://*.google.ba/search*',
          'https://*.google.com.bd/search*',
          'https://*.google.be/search*',
          'https://*.google.bf/search*',
          'https://*.google.bg/search*',
          'https://*.google.com.bh/search*',
          'https://*.google.bi/search*',
          'https://*.google.bj/search*',
          'https://*.google.com.bn/search*',
          'https://*.google.com.bo/search*',
          'https://*.google.com.br/search*',
          'https://*.google.bs/search*',
          'https://*.google.bt/search*',
          'https://*.google.co.bw/search*',
          'https://*.google.by/search*',
          'https://*.google.com.bz/search*',
          'https://*.google.ca/search*',
          'https://*.google.cd/search*',
          'https://*.google.cf/search*',
          'https://*.google.cg/search*',
          'https://*.google.ch/search*',
          'https://*.google.ci/search*',
          'https://*.google.co.ck/search*',
          'https://*.google.cl/search*',
          'https://*.google.cm/search*',
          'https://*.google.cn/search*',
          'https://*.google.com.co/search*',
          'https://*.google.co.cr/search*',
          'https://*.google.com.cu/search*',
          'https://*.google.cv/search*',
          'https://*.google.com.cy/search*',
          'https://*.google.cz/search*',
          'https://*.google.de/search*',
          'https://*.google.dj/search*',
          'https://*.google.dk/search*',
          'https://*.google.dm/search*',
          'https://*.google.com.do/search*',
          'https://*.google.dz/search*',
          'https://*.google.com.ec/search*',
          'https://*.google.ee/search*',
          'https://*.google.com.eg/search*',
          'https://*.google.es/search*',
          'https://*.google.com.et/search*',
          'https://*.google.fi/search*',
          'https://*.google.com.fj/search*',
          'https://*.google.fm/search*',
          'https://*.google.fr/search*',
          'https://*.google.ga/search*',
          'https://*.google.ge/search*',
          'https://*.google.gg/search*',
          'https://*.google.com.gh/search*',
          'https://*.google.com.gi/search*',
          'https://*.google.gl/search*',
          'https://*.google.gm/search*',
          'https://*.google.gr/search*',
          'https://*.google.com.gt/search*',
          'https://*.google.gy/search*',
          'https://*.google.com.hk/search*',
          'https://*.google.hn/search*',
          'https://*.google.hr/search*',
          'https://*.google.ht/search*',
          'https://*.google.hu/search*',
          'https://*.google.co.id/search*',
          'https://*.google.ie/search*',
          'https://*.google.co.il/search*',
          'https://*.google.im/search*',
          'https://*.google.co.in/search*',
          'https://*.google.iq/search*',
          'https://*.google.is/search*',
          'https://*.google.it/search*',
          'https://*.google.je/search*',
          'https://*.google.com.jm/search*',
          'https://*.google.jo/search*',
          'https://*.google.co.jp/search*',
          'https://*.google.co.ke/search*',
          'https://*.google.com.kh/search*',
          'https://*.google.ki/search*',
          'https://*.google.kg/search*',
          'https://*.google.co.kr/search*',
          'https://*.google.com.kw/search*',
          'https://*.google.kz/search*',
          'https://*.google.la/search*',
          'https://*.google.com.lb/search*',
          'https://*.google.li/search*',
          'https://*.google.lk/search*',
          'https://*.google.co.ls/search*',
          'https://*.google.lt/search*',
          'https://*.google.lu/search*',
          'https://*.google.lv/search*',
          'https://*.google.com.ly/search*',
          'https://*.google.co.ma/search*',
          'https://*.google.md/search*',
          'https://*.google.me/search*',
          'https://*.google.mg/search*',
          'https://*.google.mk/search*',
          'https://*.google.ml/search*',
          'https://*.google.com.mm/search*',
          'https://*.google.mn/search*',
          'https://*.google.ms/search*',
          'https://*.google.com.mt/search*',
          'https://*.google.mu/search*',
          'https://*.google.mv/search*',
          'https://*.google.mw/search*',
          'https://*.google.com.mx/search*',
          'https://*.google.com.my/search*',
          'https://*.google.co.mz/search*',
          'https://*.google.com.na/search*',
          'https://*.google.com.ng/search*',
          'https://*.google.com.ni/search*',
          'https://*.google.ne/search*',
          'https://*.google.nl/search*',
          'https://*.google.no/search*',
          'https://*.google.com.np/search*',
          'https://*.google.nr/search*',
          'https://*.google.nu/search*',
          'https://*.google.co.nz/search*',
          'https://*.google.com.om/search*',
          'https://*.google.com.pa/search*',
          'https://*.google.com.pe/search*',
          'https://*.google.com.pg/search*',
          'https://*.google.com.ph/search*',
          'https://*.google.com.pk/search*',
          'https://*.google.pl/search*',
          'https://*.google.pn/search*',
          'https://*.google.com.pr/search*',
          'https://*.google.ps/search*',
          'https://*.google.pt/search*',
          'https://*.google.com.py/search*',
          'https://*.google.com.qa/search*',
          'https://*.google.ro/search*',
          'https://*.google.ru/search*',
          'https://*.google.rw/search*',
          'https://*.google.com.sa/search*',
          'https://*.google.com.sb/search*',
          'https://*.google.sc/search*',
          'https://*.google.se/search*',
          'https://*.google.com.sg/search*',
          'https://*.google.sh/search*',
          'https://*.google.si/search*',
          'https://*.google.sk/search*',
          'https://*.google.com.sl/search*',
          'https://*.google.sn/search*',
          'https://*.google.so/search*',
          'https://*.google.sm/search*',
          'https://*.google.sr/search*',
          'https://*.google.st/search*',
          'https://*.google.com.sv/search*',
          'https://*.google.td/search*',
          'https://*.google.tg/search*',
          'https://*.google.co.th/search*',
          'https://*.google.com.tj/search*',
          'https://*.google.tl/search*',
          'https://*.google.tm/search*',
          'https://*.google.tn/search*',
          'https://*.google.to/search*',
          'https://*.google.com.tr/search*',
          'https://*.google.tt/search*',
          'https://*.google.com.tw/search*',
          'https://*.google.co.tz/search*',
          'https://*.google.com.ua/search*',
          'https://*.google.co.ug/search*',
          'https://*.google.co.uk/search*',
          'https://*.google.com.uy/search*',
          'https://*.google.co.uz/search*',
          'https://*.google.com.vc/search*',
          'https://*.google.co.ve/search*',
          'https://*.google.vg/search*',
          'https://*.google.co.vi/search*',
          'https://*.google.com.vn/search*',
          'https://*.google.vu/search*',
          'https://*.google.ws/search*',
          'https://*.google.rs/search*',
          'https://*.google.co.za/search*',
          'https://*.google.co.zm/search*',
          'https://*.google.co.zw/search*',
          'https://*.google.cat/search*',
          'https://www.bing.com/search*',
          'https://cn.bing.com/search*',
          'https://www.baidu.com/*',
          'https://duckduckgo.com/*',
          'https://www.deepl.com/translator*',
        ],
        grant: [
          'GM_xmlhttpRequest',
          'GM_setValue',
          'GM_getValue',
          'GM_deleteValue',
          'GM_addStyle',
          'GM_registerMenuCommand',
          'GM_unregisterMenuCommand',
        ],
        namespace: 'https://greasyfork.org/scripts/456077',
        updateURL: 'https://greasyfork.org/scripts/456077-chat-gpt-search-sidebar/code/chat-gpt-search-sidebar.user.js',
        downloadURL: 'https://greasyfork.org/scripts/456077-chat-gpt-search-sidebar/code/chat-gpt-search-sidebar.user.js',
        connect: 'chat.openai.com',
        license: 'MIT'
      },
    }),
  ],
});
