/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/1.html","013d9e4c70f2ed6112c35059a264d79d"],["/12/Game.js","97dcabc8af54aaa0dc8699cb63a8b007"],["/12/food.js","24b49b1caa0abde7b86c30c5786ff61b"],["/12/index.js","403bf53e4fec8dc9edf7cccaa018c1a3"],["/12/snake.js","e03c5f1ced91f2afab64365471709496"],["/12/tool.js","ef3408b5bd96eb6980d64ef0518d7123"],["/13/bootstrap.css","3b647926e70b205037311118c707e5fc"],["/13/index.css","51ef6cec9e050cc6bade8b0572d2669f"],["/2.html","bff9c6042ce1343081d41095e22dc228"],["/20.html","06f1ff16a6f6fc2ab18c548e861c083b"],["/2048.html","941df281c95842f9975ae23c7a8392b4"],["/4.html","888532700fd49d9266d33235c2ab01d6"],["/404.html","97b77b66eed2b0104016c909d720851f"],["/README.html","871a6ddc48457ccd280e469223408d31"],["/about/index.html","ef99782b3085e3585a9c9dbfce9925d3"],["/archives/2020/08/index.html","64a8f5d45015008eb239cb914f1e717d"],["/archives/2020/index.html","420b15c6b2e8b432759aa60fd5df9e5b"],["/archives/index.html","af142e618d635431575011cba64609b2"],["/assets/css/argon.min.css","49101fc619b28e3c54c2af569abe8ad1"],["/assets/img/logo.png","daa0849ff2edb912892c94852a11957f"],["/assets/js/argon.min.js","36bf08e9531aeef3758cc17917292201"],["/assets/vendor/bootstrap/bootstrap.min.js","9075742ee1fe2d0c1d47a431fda233e4"],["/assets/vendor/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/assets/vendor/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/assets/vendor/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/assets/vendor/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/assets/vendor/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/assets/vendor/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/assets/vendor/headroom/headroom.min.js","d64d9a66f39f6755d93ac2c3710a2b96"],["/assets/vendor/jquery/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/assets/vendor/popper/popper.min.js","3621381129597bf34d48a9e2623e05c9"],["/baidu.html","ec875b314172b232be2cba1f89324e32"],["/baidu_verify_MxmS15ExfY.html","262450f776e87d975753d9efdb8b91cb"],["/baidu_verify_rTgeGolZVw.html","a642d68fe98e5e63aed65692c58e52c2"],["/bangumis/index.html","1c0b4ec11bca3e841100b7e2fd402b53"],["/base.css","cae20e25419588e24326eec9b3c483a6"],["/bootstrap.css","3b647926e70b205037311118c707e5fc"],["/bootstrap.js","9cb0532955cf4d4fb43f792ce0f87227"],["/bootstrap/bootstrap.css","eb55bd09229c3f0609d47cf8801823ec"],["/bootstrap/bootstrap.min.js","2f34b630ffe30ba2ff2b91e3f3c322a1"],["/bv.html","d027f9e51b9a34f2ab5edda078d0f129"],["/categories/index.html","7ff2b45bc2de02b1d566578caa48002a"],["/categories/学习/index.html","45d5a2b48c947e8bf25d791dd7d661f2"],["/categories/学习/英语/index.html","25af0e0c5b3042c47e56ac54a779a96b"],["/categories/教程/Hexo/index.html","25f243f3945fff897a551968f5d05519"],["/categories/教程/index.html","46ccb105ae615f7f00a4b30331f11775"],["/chess.html","477ac2a6a5ae2843677d7027f1e3d985"],["/chinese.html","5f5b6d6f2cdd17a8dfb7f7a1bb1d0a7e"],["/choujiang.html","75058b48ccd88fa75456d9471140d052"],["/css/1.css","6132685f8d39826f8fe3c8c846e03095"],["/css/112.css","8c4844f4f029fdb62a121dfac6b7eba1"],["/css/1122.css","3af5d00edfb801e84569e877a807465a"],["/css/120.css","4b70f62e2385921565b4c51d8d4f7e5c"],["/css/121.css","6957523a2d135f4fd29137e65f9edede"],["/css/122.css","acc2eaf7c8dd37cecd62dc37c3919b8e"],["/css/124.css","042fb4a2542c239e859319283950207f"],["/css/125.css","beee9b9c4a063ed5dbb572f92015c4ff"],["/css/126.css","503caa8e5eb94101928b0b3f5384cdea"],["/css/127.css","ed5731055aebe67860ac0d58be5275b5"],["/css/128.css","9d7899e907b1632cdd20260357fde316"],["/css/131.css","95b2addd013d92e8102b1b6afb0175b1"],["/css/132.css","c1e4a58cb60de4669be57cb193ded80f"],["/css/2048.css","7be3721244ce36abce08481f51cdcbb2"],["/css/556.css","556b8c0d68551ed1d48a5f635f2d529f"],["/css/Chess.css","92a0db0278790497b63140a6353faa6f"],["/css/font-awesome.css","6e92e382aad3e2386f27c7cc35b56136"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/fonts/fontawesome-webfont.eot","32400f4e08932a94d8bfd2422702c446"],["/css/fonts/fontawesome-webfont.ttf","a3de2170e4e9df77161ea5d3f31b2668"],["/css/fonts/fontawesome-webfont.woff","a35720c2fed2c7f043bc7e4ffb45e073"],["/css/fonts/fontawesome-webfont.woff2","db812d8a70a4e88e888744c1c9a27e89"],["/css/hetongxue.css","052ce6e79f7e1c1533ee9a9743896a18"],["/css/index.css","8be5a1cd9bbc136ff1187e13333b8da1"],["/css/main.css","4490fc0ad4a1d1b2294a7ac4025f3e3b"],["/css/mikutap.css","730da431f5db698f78c661feb00caa49"],["/css/normalize.css","4141881bdf7a4efebd1d0abd8603fc52"],["/css/reset.css","414e3676da39f7d5de6918298021732a"],["/css/site.css","32d4ec21903a79e29ecddd22de56e237"],["/css/slideout.css","7d79cdb4d0983f7d72337d6b7336f2ba"],["/css/ss-social.css","b8145fd49ad7a708457bd97309d58e70"],["/css/style.css","9598ee35dc51fb1212e99f223f785f0b"],["/css/var.css","a822ca4f2429df6b2b589b4bc02e43bc"],["/dist/cjs/qrious.js","0760407e031e206ee3ab5067304eabd9"],["/dist/umd/qrious.js","d7f69df31119f5c741685badab4abb3d"],["/dist/umd/qrious.min.js","61ef1d497e398c5cf7e718e7d2c1e113"],["/document.css","7f503085c7186faebf4d276fbded640a"],["/dogpi.html","8370024192def35f9882e72c9158845d"],["/donghua.html","6b73fdac5a744b5993e323390b5536f7"],["/draw.html","02df7f74607d6219cc1303c1970e2db0"],["/drum.html","e0ed8c378e99f212afda8b120f181e6a"],["/easy.html","a9e85ba3b128806b2400d44e68833b2e"],["/eluosi.html","30927c479ce8a078f52f654c6a50a6bc"],["/eweima.html","f061a71fbc02f7ebcaa460203cfba55a"],["/five.html","cf111d6c02999f2dfcc7c0edd19c03d9"],["/flash.html","a41877d2bdef373241e53f2ba074afa3"],["/font/DINWeb.woff","f8df07a0857003759a5798eecfbd9324"],["/font/fontawesome-webfont.eot","455808250694e5760bd92b3ce1f070b6"],["/font/fontawesome-webfont.ttf","bb72c5142ae2ae4ca0f9c0653a09871c"],["/font/fontawesome-webfont.woff","21f212f94a9db6a0e3847c921842aa19"],["/fonts/font-awesome-4.3.0/css/font-awesome.css","761652184771c88df16541a084887be8"],["/fonts/font-awesome-4.3.0/css/font-awesome.min.css","04425bbdc6243fc6e54bf8984fe50330"],["/fonts/font-awesome-4.3.0/fonts/fontawesome-webfont.eot","f7c2b4b747b1a225eb8dee034134a1b0"],["/fonts/font-awesome-4.3.0/fonts/fontawesome-webfont.svg","2980083682e94d33a66eef2e7d612519"],["/fonts/font-awesome-4.3.0/fonts/fontawesome-webfont.ttf","706450d7bba6374ca02fe167d86685cb"],["/fonts/font-awesome-4.3.0/fonts/fontawesome-webfont.woff","d9ee23d59d0e0e727b51368b458a0bff"],["/fonts/font-awesome-4.3.0/fonts/fontawesome-webfont.woff2","97493d3f11c0a3bd5cbd959f5d19b699"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/girls.html","c760aa7b622c0d404b44ae31d5402a57"],["/girls_files/4311c9ad04554119.png","549d97362b6bbfabdd71d76dc698297b"],["/girls_files/5.jpg","742d1e6df132febc41ca87853556e53a"],["/girls_files/Head3.jpg","9522e391ad68cea70fb35e5a5e7f6d8c"],["/girls_files/Pio.png","214ccc1a59a1fd75ba9f9db1d7f03fb5"],["/girls_files/avatar.png","6757d82c14a9bee03ab34bc35935ed39"],["/girls_files/default_avatar.jpg","5c259c1e697dd7778e1471002f4e1402"],["/girls_files/email.svg","15f03e51e554c3664f0fda75c2fea1a8"],["/girls_files/fields.svg","c09dbbfda6c1cb492fd9a1c572e383ac"],["/girls_files/font.css","e13a977f45844fb7eba82a58f876b28c"],["/girls_files/github.png","5a637202a4a945502019acebf0261602"],["/girls_files/googlefont.css","625cd2ae2a1fd1ac7353bc0db83244e0"],["/girls_files/gymxlogo.png","d1e803af6fbd57376a7b3c0b756caa95"],["/girls_files/headImg.jpg","ce0f4642941a0e47fcd748b1c72bf9b6"],["/girls_files/insight.css","461f531e8ea9a0a11da8a1e55f5a4963"],["/girls_files/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/girls_files/lib.min.css","ec2d3593ff9203afe4f632e9a1708bb7"],["/girls_files/logo(1).jpg","d68fd7e4a4bf347cbc52552f3d7ad33b"],["/girls_files/logo.jpg","3d9ff78722451f428016ed673ca29030"],["/girls_files/next-b.svg","2dd613cbfcc40b0c16db1f3660db8666"],["/girls_files/qq.png","939cc000c37dcaa9ea390691141507ba"],["/girls_files/s.css","be97af34d2f00e6eb0efb9c5a5f2bc68"],["/girls_files/sharejs.css","a77b4cfa2303e50646a0ea2baaa24187"],["/girls_files/sina.png","b7809c01512d62f879f966c1141c2732"],["/girls_files/style.css","6039b206a8353c397fea80752f75fddb"],["/girls_files/twitter.png","47b7d4f3dd459185dfd788ffdb8a9e5a"],["/girls_files/wangyiyun.png","3c403d7769aab82c48bd2df1022c1c49"],["/girls_files/zhihu.png","b5f6deacb05ccc688f466f1bef5a2788"],["/girls_files/zoom.css","4e5727c8624ff9e3e8131c428445c329"],["/hanshu.html","a277dd916e59eab6800ea48f832265ec"],["/huaxue.html","c746977d9bd6e792680cc184d2a84b36"],["/icon.png","4b63179db3c45dfd9078a252b2575cd1"],["/icon/bilibili.png","9b5aedc2acdb877bba2d9aa4e8586e6c"],["/icon/btn.svg","37daf6b7860bbc3f889fc1789fc7c6c9"],["/icon/btn2.svg","1573a46c34b33cbea5c1a630d63292f3"],["/icon/doge_ico.png","1ccd513e9ab9a59778ba9a3cabb1f582"],["/icon/g.svg","85630baa4caa229f0f1e6015aedf8f7f"],["/icon/google_1.png","116d7abaea20868404cb366b611c69b7"],["/icon/mijisou.png","9fc6427da5259555ca9fa8828757ac45"],["/icon/right.svg","a0a3a492f62cc5fc6a3490fe090eb1f0"],["/icon/scp.png","83f1fdab6fea086f0f9dc4e79b24bab1"],["/icon/seeres.png","38471ebbe49937c6b93f1df967cc87d2"],["/icon/shlogo.png","828f37afdf108b79f31685809c603888"],["/icon/user.png","c4f74986221b77c039d88c815b0fa783"],["/icon/v2ex.png","48fc0df6c7cc9d0c41936a4331575b71"],["/img/1.jpg","93f6185ef2d8dc30e0a11bd4f48ebddf"],["/img/10.jpg","f5b39918847d1a0ab928347b0bd0196d"],["/img/2.jpg","174b56aa8fa67cb4e48b0a36d70948ee"],["/img/3.png","a503affd2766fb20028eb0e710c7248a"],["/img/4.jpg","cd8fc2c05136c9ed15fc4653f755696c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","aedc7b8a724e0544a0a3837116669f6d"],["/img/66625145ns.gif","ef233d25bbee75807791aa3835174d93"],["/img/7.png","70a814fb980d6f7c0c673f648f7226ec"],["/img/Trees-Landscape-Silhouette.png","e731663a07d1eea304c0e1e5ca35e252"],["/img/achieve/apkpure.png","3b84f1f75c2587ac57cc0a12a6dd10b8"],["/img/achieve/carrot.png","264f5de35db42906a0d768f71fcd4908"],["/img/achieve/folder.png","5ed2720f9f3a37bd02b0ccfde23fcd77"],["/img/achieve/logo.gif","de5e691e19c76159beffd7d74222644a"],["/img/achieve/org.png","70320e8f92b219ca99429c49fb4d4cea"],["/img/achieve/yunmeng.png","acc0deb5bf557afdf60bc344aed77eeb"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/announcement.png","1c3dc72d31cfd5b854f924418d3e6d7c"],["/img/announcement_hover.png","167067e8a585f3194025c56998de9774"],["/img/arrow_icon.png","f428f5705c97657942e30f8bfff9d4b4"],["/img/avatar.png","daa0849ff2edb912892c94852a11957f"],["/img/baidu-xs.png","4e330e81f9b1e1c73ad5740bb110a3da"],["/img/baidu.png","d46adc3ebc17017f9342f4899a43d751"],["/img/bd_logo1.png","37e594256d51a454bb654abb9ce2050f"],["/img/bearicon.png","a705cec018ba5b45078a0fa8f2d63f1b"],["/img/bg-night.jpg","feb2f2d45ded14205281827795e0b1d7"],["/img/bg-xs.jpg","fb7ffa9832e09ca010223b45b717a40e"],["/img/bg.jpg","d269023534a21e1fedbe1e2aa7f4e106"],["/img/bg.png","f0167db9f8c24b1aa04d9aa018b5a767"],["/img/bilibili-xs.png","33c6b839c6ad60c61eba2c8df799127b"],["/img/bilibili.png","7b8a2ceeab807562e8cad98f876cdef9"],["/img/bing-xs.png","21ca14e8bb2026647159ce900451095e"],["/img/bing.png","5d9992dde76933787846ac09a92fcf77"],["/img/clear.png","b701d6edf3e4ff54fee688a47f395647"],["/img/clear2.png","48306ec27a809f2b242f22889d7612e9"],["/img/coolapk.png","1c6c442182e3fe46437155f5446e8dd3"],["/img/crash.png","e57789543d832459e5ac733d410dc4d5"],["/img/ding.png","810fbaf9f8d1e405eecd8dc268b5860a"],["/img/doge-xs.png","08bd19601f8343ec59a8afcfc6ff208c"],["/img/doge.png","a7a95f99dfce2f28e67032a4d1c1d940"],["/img/draw_something.png","2bba0a135ab520595afa45a0c1d54fbf"],["/img/duckduckgo-xs.png","7c97550e6259bc3f710fab94c1f5286c"],["/img/duckduckgo.png","24e0e81a3dc642e67735c01b7a4ba2b8"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/floor-tom.png","29b1fbbb3778ee0ba770721b063a2bb7"],["/img/foreground.png","7cd960978271d8d35f59239553aac4c7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/github-xs.png","941733291302b1a37ad57b1e62971133"],["/img/github.png","6963083d1fbbae3c7f398ff01a6a70a0"],["/img/google-xs.png","98468812bd44c82ac137f2d33c1d7ea8"],["/img/google.png","904f2fad89de54b8ec23acfebfbe512b"],["/img/headline.png","9fd7b495a8f91e5a1b4d67138e9a467b"],["/img/hi-hat.png","6911a50fe8905dbf0e1b63c1bca7bc08"],["/img/history.png","da6bcb564d8697b1a9103f0477ad688a"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/jingdong-xs.png","3ff6074a685d9d035339d6b31116acc7"],["/img/jingdong.jpg","31e6c5a67fae2ab93fc169091939e905"],["/img/jingdong.png","c00e09bd2fa5df980d2c3ca0780dda7f"],["/img/kick.png","4da9b1eb9af5dcde633190229b4c125f"],["/img/kuaidi-xs.png","d2372fcdd0b281f26844ae5f29f1f05f"],["/img/kuaidi.png","90b8d39b91535f069ceaa43a6f3eecda"],["/img/left-tom.png","e72f2706ef148500c196c434c2bd08f7"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/log.png","268ccf12ac80734bc43e028275859f5b"],["/img/magi-xs.png","9cb648598e1b93f1381fb0e58afbc76d"],["/img/magi.png","ffdf7b7993cdf3c9561770039849877c"],["/img/menu.svg","ced842dc1f27cc858d6791cd9f633805"],["/img/mi.png","9b12e98e5595d324669c1e8ba1c6d776"],["/img/midground.png","cbbe07d8f44f3586f395bf312d2bb717"],["/img/miji-xs.png","1a93d982ac3b9ec2d6a52e1c72e52e4a"],["/img/miji.png","2736abbbc37682f2e753420a00b7c17f"],["/img/plus_logo_web.png","9bf7934c63c48a2d0372b1496e830408"],["/img/preview.jpg","f6b689caf5da9f30f224e74aad701c4d"],["/img/quark-xs.png","bc5716e1dbd0d07de06c82f645ada58d"],["/img/quark.png","a0f34943244b0594025a428e5aac1437"],["/img/right-tom.png","4bb221ece51afb96106c6bef312f985d"],["/img/search-change.svg","2ae7ab88194e52f4df85ead85aac7199"],["/img/search_icon.png","21574dc5d3c058151aee8c0578c404d5"],["/img/seeres-xs.png","05d9415ff6e738384528bbfba7d624c1"],["/img/seeres.png","bc7c44d45a2a509c510c521d0f086d12"],["/img/silk_text.png","d80648df552e931a949a355411ff43d9"],["/img/silk_thumb.png","aa967dd5c12cee435b37b820629e62cf"],["/img/snare.png","351eb733a14d8a77ed25cf1d67036849"],["/img/sougou-xs.png","2c940b7b7ed8a7048727d088a8df7157"],["/img/sougou.png","ded98ba02db0b27519aa845baf5c86e2"],["/img/sspai.png","fd9d509ed2bf974079b45673508aa708"],["/img/sugbg_1762fe7.png","ed5320df011c10e617723e53771c0e1e"],["/img/svg/apkpure.svg","00595bdc074ac6a93b4a01d528958f33"],["/img/svg/baidu-xs.svg","688753176dba1db233ef9c520b5ffe07"],["/img/svg/baidu.svg","63739a51a7b8e2f0032c3732ef731a60"],["/img/svg/bg.svg","5aaee30beab870cbad7404580bb3cd5e"],["/img/svg/bilibili.svg","d394dd4214a537fc2aa1bada94c4e10a"],["/img/svg/bing-xs.svg","f999c7a64f841deb04c8ef8876269806"],["/img/svg/bing.svg","5f4bbe2b91995aba6ad42bc5f6d38806"],["/img/svg/coolapk.svg","3d015ed7b9c92fb019cdb146de699ef2"],["/img/svg/ding.svg","a003b48f24f77d2b54326c8c8d219854"],["/img/svg/doge-xs.svg","be25f79277816cd38f31e2cacc701a3f"],["/img/svg/doge.svg","29b5128d59cb16e38bbcb5ecaedf8d77"],["/img/svg/duckduckgo-xs.svg","3e7f6431b037ce950b255b908c9e615d"],["/img/svg/duckduckgo.svg","9c58c3acd2c793b88c2396f11ce7744c"],["/img/svg/github.svg","6b14246a1ecc2664ac93553119b04ec9"],["/img/svg/google-xs.svg","b284653ba68cf855e5a15bca692f6c03"],["/img/svg/google.svg","fa02c305d58b1f246419e2c4756377fc"],["/img/svg/headline.svg","7c981eb3e559af0d55d2e19981e1fa7a"],["/img/svg/log.svg","751f456640a515a80a5c02ef5a089c01"],["/img/svg/magi-xs.svg","56155de9fbde6e12cd228ed4b88e4a04"],["/img/svg/magi.svg","846b75ce61819921b583a9aedda90817"],["/img/svg/mi.svg","4bc8cc68c3ba2789592a322fefd15948"],["/img/svg/quark.svg","68cdc11c83a9567766e6aa5203c14a61"],["/img/svg/seeres-xs.svg","b8c0a14eaba879f3c8e4896fb6b14ef8"],["/img/svg/seeres.svg","a0141b6284bcc0c1e7d9b24a62248474"],["/img/svg/sougou-xs.svg","5cd2a3f41a1d5f641e85efad081a513e"],["/img/svg/sougou.svg","94f718a08d6bb1925f390dcac3242e4e"],["/img/svg/sspai.svg","129de146563dbb1bcfbf4e31fb658042"],["/img/svg/toutiao.svg","5afb5603e9ac3cbe1c41240f50fc3306"],["/img/svg/true.svg","0fa23122b9d5da30e455cb6962aadd2d"],["/img/svg/unsplash.svg","d8a06bcd8b0fc58a32c635288c59e7c3"],["/img/svg/via.svg","53e66221ab3f0a7d41ea38d901cf7422"],["/img/svg/wechat-xs.svg","730e67334730ed1d41bcb5a2d133541c"],["/img/svg/wechat.svg","8a6e3252d9b6e26afa9affc8f4b67392"],["/img/svg/weibo.svg","1a24dcce9acd3d52730001196f06e0af"],["/img/svg/xda.svg","4be30f1f0d99ec19a6e7d07c62549dae"],["/img/svg/yahoo-xs.svg","6e4c8ffbe3db2e6bab32289bf44d9d02"],["/img/svg/yahoo.svg","eb3626e78cd82a1388e4e47be9ddce77"],["/img/svg/zhihu.svg","cd70e1fcf09793d2b29df61e2f4bf2c1"],["/img/taobao-xs.png","15f3108607049f75de06b36d25b14f6a"],["/img/taobao.png","4ccd5863633c3f7bd8b50e4de3d4a3fe"],["/img/toutiao-xs.png","ba3012f4614daad8f13a8a654325ed4a"],["/img/toutiao.png","75a8f2f4c0d71d979c772eab8cca420b"],["/img/true.png","cf478032b1a139d187a2e2dcc6394faf"],["/img/unsplash.png","ef22635ce3a06d53e3b234264a4e9ca5"],["/img/via.png","c3efdeff83f7a6fc072b4be192239677"],["/img/wechat-xs.png","19a878d5eba6a4ea04253050c70c5717"],["/img/wechat.png","cf0520e9494db96a58ac913741db6552"],["/img/weibo-xs.png","ddeee36e1081a4939ac8a77ed3b04a28"],["/img/weibo.png","4c0fa1e0f7ca7e77d7cab32235d19a7d"],["/img/xda.png","78d98099cde2512674f41557a5701004"],["/img/xkbg.png","aecdbe8a54ac519ebe9ce5a991c310e5"],["/img/yahoo-xs.png","f6216729e72bed87697d7bce86b67ee5"],["/img/yahoo.png","511232239b87f75e6aa6b4867d6369da"],["/img/zhihu-xs.png","38cc940bacb219fcdb3649cfddd7d70a"],["/img/zhihu.png","c1474ee3fb51f8d7a4a6e5e9ee79131f"],["/img/zhihulogo.png","3c66f8efe20baef8d15208b64af292f8"],["/index.html","8b2cb22124170b464e56338bedc903f9"],["/jiantou.html","95e39ef151d711424a25df4d9faf0e49"],["/jiexi.html","881cc9cd57df84e3ac454ac644dabe56"],["/jquery-1.10.2.min.js","db0eb3e080078a53626d846636fad24b"],["/js/1.js","56503828643de9b24f727b38e196b594"],["/js/120.js","e0e0559014b222245deb26b6ae8bd940"],["/js/121.js","eeefefc8188bb0cfd155e3a3f1decee2"],["/js/124.js","5691887b78ca7e644d9ca4a578c98595"],["/js/125.js","a4f351590a1701c939e2e7add4af82f6"],["/js/127.js","403bf53e4fec8dc9edf7cccaa018c1a3"],["/js/128.js","97dcabc8af54aaa0dc8699cb63a8b007"],["/js/131.js","6e52b7afbe6bba6efceaaba3ca64407c"],["/js/2048.js","cb1bd776c234830b14e21d485926f0bd"],["/js/555.js","e0e0559014b222245deb26b6ae8bd940"],["/js/666.js","15947e59f5810c453f17632804ca4885"],["/js/789.js","15aaf362d39469244b95d98124a85d79"],["/js/CChess.js","ea029c2fa23bf37708be4a0dd162b07a"],["/js/CMoveRule.js","a1d4bd6520b697c34683cb5fe0f3d561"],["/js/CPlants.js","ffe588b2ce2a3637caab0827e2c95217"],["/js/CZombie.js","04357982251d438ba4b6936d040cac7e"],["/js/Cfunction.js","442ed420c4653027c58ff6632f13485d"],["/js/Detector.js","724c456ff2d37fe1561484e1ebd85cbc"],["/js/GameFrame.js","22aa308dbfcc14ed29bb8f3439e8a71d"],["/js/MassGrave.js","0a3912d5b30789dfb88600042a2f3bbf"],["/js/OnDoing.js","f1332c2281a6f958ea4623167ea3028f"],["/js/PovertyOfTheSoil.js","db9f600975beb3e67aa7d434a49245f3"],["/js/Process.js","4ab0a01be8a8c0f9a7ab2be7428c521e"],["/js/StrongLevel.js","7e54005499de181c5313527da292b0af"],["/js/THREEx.KeyboardState.js","6a6f1ea9315825fbc11a25291a6f4afa"],["/js/THREEx.WindowResize.js","f1836a165c895768856034b6a6e6fabd"],["/js/TestUHeart.js","d7e845175c34b8cdc2d96ab4be052f8c"],["/js/TweenMax.min.js","1d4514e6131e1758432e33301e4bf1a4"],["/js/ZombieRun.js","ccf8298dc85751e90fdbb2726491433a"],["/js/botui.js","dc3d9b63a35ddd9a9da5e48539ec1d9f"],["/js/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/common.js","32f6c86fa0947f3c5463713ac0cefa39"],["/js/config.js","b5d40572ac7cd6b4a1a8c43f5758c603"],["/js/css3worldspace.js","37d73aab9aa8ccfe69f55f35274657c8"],["/js/d3.v3.min.js","41a7b0cda941dd41c36ba0989909084e"],["/js/dat.gui.min.js","e7d740aa4e056e7e7d012e54c5e66593"],["/js/detect.js","601babfa352aa32481dfe3a461a67b25"],["/js/director.js","2248b700ecda17c131b61526c88dc6b9"],["/js/dust.js","1125cc0feec2ea6a5e4a93b1111f8b8b"],["/js/element-ui@2.4.11/lib/index.js","c1e0782cc0bf38162ad40fc887d0a4a1"],["/js/element-ui@2.4.11/lib/theme-chalk/fonts/element-icons.ttf","6f0a76321d30f3c8120915e57f7bd77e"],["/js/element-ui@2.4.11/lib/theme-chalk/fonts/element-icons.woff","2fad952a20fbbcfd1bf2ebb210dccf7a"],["/js/element-ui@2.4.11/lib/theme-chalk/index.css","193cdaaef288e4bbc1dc1a7a0ed7a80b"],["/js/food.js","24b49b1caa0abde7b86c30c5786ff61b"],["/js/galaxy.js","d798a739da347c11f25bfe0bb2a13253"],["/js/game.js","4f9c7415527b7e5ffd9854748074f73e"],["/js/graph.js","5ef2a6d98e2e24e85b8d58a8dc80b4a3"],["/js/guides.js","b6b0e13bf80b235121db3bffda3f8326"],["/js/helphud.js","0c16a1c59c4241ecfca10e594f7bca3a"],["/js/hipparcos.js","53f9e83300042565d3883a96c2e2b6d4"],["/js/index.js","30d06bc3312214233511433a961ef55d"],["/js/infocallout.js","65676e21525c4e63e099626e9f7eaabf"],["/js/jQuery.js","a64bcb4bb519c1eb761ea4e9b8afea8f"],["/js/jQuery.rTabs.js","f3589be95e92b66e148f337fbf698cd2"],["/js/jquery-1.12.1.min.js","1d244cb043be8157f0050ce9e45c9ef2"],["/js/jquery-1.7.1.min.js","ddb84c1587287b2df08966081ef063bf"],["/js/jquery-1.8.1.min.js","1565a889b7d5dd1b79fd17d7dbf1466d"],["/js/jquery-3.4.1.min.js","220afd743d9e9643852e31a135a9f3ae"],["/js/jquery.fullscreen.js","e0d3fe467a257c96c67e1e43355074f4"],["/js/jquery.min.js","0652da382b6fceb033dfe2b6c06d4d11"],["/js/jquery.mousewheel.js","214ee334bd63ceb72b99b11a64799843"],["/js/jquery.preventMacBackScroll.js","90da7d05855d611f7fb06cb623b65451"],["/js/jquery.tooltip.js","663d34dbb0ab3ff9129386dd1a603139"],["/js/js.cookie.js","fa93e8894edb6245ab03883633b12b6e"],["/js/js.js","51b1f0419958c164834ba2faf6c00600"],["/js/keymaster.js","294cc5c00585b586dbd307f07a1e5a5b"],["/js/knockout-2.2.0.min.js","121b4e7739f647fb9f3a17e88c097a85"],["/js/legacymarkers.js","9bba21706b44547e79b3fe9d49d81abd"],["/js/lensflare.js","19e557c5f97f5e24093173983c003d32"],["/js/local.js","ff8bbb4baca3292fcd4477904c427990"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/marker.js","26caabd1eff374897ddb987193be85eb"],["/js/member.js","8d6c26bb3f627e4f83c334bc87468c37"],["/js/mikutap.min.js","c9c9e57bcfff0719038403667fff9694"],["/js/minimap.js","436f3568331273504a3593e7a0ba3474"],["/js/mousekeyboard.js","f41d98f91ba1927c227792f06f419db3"],["/js/noise.js","06f083ab4d1c26dc161689469a3f26e5"],["/js/plane.js","7f03591837d9c78f249c11a3d66b83d6"],["/js/polyfill.min.js","68006787135ad1c059bc99e29d9d1504"],["/js/script.js","0d8c99d75b2192e7c0a1ec9d1910f073"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/shaderlist.js","468423ee8b59428d394da1374d122902"],["/js/show.js","eb04cd7dd777fee775ebd14023078a3f"],["/js/site.js","8b5b383b4bce37725c6087456c8a8e40"],["/js/skybox.js","d7c156621c40a8116b9f794cf69d8dbe"],["/js/slideout.min.js","4bb5425e886f09bd7c3acf6757a9aa04"],["/js/snake.js","e03c5f1ced91f2afab64365471709496"],["/js/solarsystem.js","878fa81011103e010e45b196023065c1"],["/js/sou.js","d95adb9b9673ae1fc2b5898ae057fd4d"],["/js/spacehelpers.js","09d70256dbf5a3e738c7d41e79678cca"],["/js/square.js","57981e5e30386c7234c78f84e286e110"],["/js/squareFactory.js","6492bd606adfd926c9aa93a7e10331a2"],["/js/starmodel.js","26a066ebaf876203a41283088f064572"],["/js/starsystems.js","3b50ef07d606ec6610fc6ce0e52cd231"],["/js/sun.js","451d3557c38fc059cf2e7587627458d8"],["/js/support.js","bfd26813c3504501acf5b26280dd2db1"],["/js/tagcanvas.min.js","9bb30c63d7ac20ce6cffb1621f4e38ce"],["/js/test.js","02b95e114b746d2893dcd1961ace5468"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/three.min.js","0b36909160fc2331bedcfdf3e5f6d700"],["/js/tool.js","ef3408b5bd96eb6980d64ef0518d7123"],["/js/tour.js","12822b4f8ae637b277f6ec881f013fca"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/tween.js","9588ae6f81d011c6767c1eca1aabf6f4"],["/js/underscore.js","ad408491b825095e0d0871d7abb96992"],["/js/underscore.min.js","6dc59d3a72ad547168cf823c2fddc728"],["/js/urlArgs.js","0b2170ef37aa15037f5408ad2712d6d2"],["/js/util.js","16148058e140cfbf05f9eb05f790025a"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/vue.min.js","f15aee8488ab57c0e80c77a7d10db3cd"],["/level/0.js","f8fa9c276443a2935778362df5e6f3b2"],["/level/1.js","c9bbe63c59852bd8da9c3bceb6814f2e"],["/level/10.js","5d80742626fb60379f0202edb2b6e051"],["/level/11.js","85297e7add6f22eb15d9230266439361"],["/level/12.js","88f4a5f5037b87ee59221bb036951fbc"],["/level/2.js","0c8fff807e6996a6f1729a5c6dfb3f00"],["/level/3.js","c808008887348dd3884752c0837c47bb"],["/level/4.js","c4460d68b1731088425b13c726986d82"],["/level/5.js","f54e3206a5f508cd12607b580e3cba00"],["/level/6.js","c248c5edd9c85a2cab2e8d8014257fd7"],["/level/7.js","a2d3df201322f24c0906da2b639f8b9f"],["/level/8.js","8fd78cc063dd15fc0a26f928f3dba3a0"],["/level/9.js","e92a7b03fd05a5932ec1abe81a4ad934"],["/level/MassGrave.js","0a3912d5b30789dfb88600042a2f3bbf"],["/level/PovertyOfTheSoil.js","db9f600975beb3e67aa7d434a49245f3"],["/level/StrongLevel.js","7e54005499de181c5313527da292b0af"],["/level/TestUHeart.js","d7e845175c34b8cdc2d96ab4be052f8c"],["/level/ZombieRun.js","ccf8298dc85751e90fdbb2726491433a"],["/link/index.html","7133ea34ce965ea40c3aea5d50afc420"],["/links/index.html","7cfe392eb726dc12e224087ab67f71b7"],["/litongxue.html","4fce9aca11135d4b6d6b59de7cbebd6a"],["/luopan.html","6e5718f9481ef4dc053344de174f347e"],["/main.js","471cfe30c15be4adaebf58ede7ee6dd6"],["/media/static-cube.png","4305e37e7c0c3b2f93014311ea8b5bdd"],["/mima.html","e1908e0fdb0b4776f23b4cdc5465a881"],["/mobile/script.js","e6bee9d1727e197373f9012309e0af4b"],["/mobile/style.css","df735850e39d8aed1797f6692a37d852"],["/mofang.html","86d143299cabaf6f725812ca3e402b9f"],["/music.html","baf7cbba99fb910563070703bcdee009"],["/nbnhhsh.user.js","6e25657562d9234191926868480b6925"],["/pc/five.html","d14724b2fc5fb9b2a582324ccdb361c8"],["/pc/script.js","bb72b3f4f99409dc74f961d2f6c24755"],["/pc/style.css","997f87fb660178dbb344ca39531793ff"],["/picture/bak.jpg","7bd6093ff25cc2111f5e8219c44a3fb5"],["/picture/black.png","bd2b8d8e20eb99503c5798759489a869"],["/picture/white.png","4aab897ae028272d00d09a36ab4b1cfc"],["/railgun.html","d9c036a39697668e3130f35423d6d84b"],["/scripts/ResizeableTextBox.3.js","8964e5c04c0ef80228e08476371b2b4c"],["/scripts/certificate.js","fb55c10060b708d082644fd10aca5f53"],["/scripts/cuber.min.js","e077aac8122bac252bd6d1bc7ae4f704"],["/scripts/deviceMotion.js","33ef47c8d385fe68d9d9433ef2ef08dc"],["/scripts/divBox.js","572b9f9604c26f25a8cd12c0c436813f"],["/scripts/frames.js","1f92e36bf2a66aed3c3d235d1eda8e11"],["/scripts/iecss3d.js","2011abf8b5ef451b7ac273696824260a"],["/scripts/ierenderer.js","7e4a263456bc27dac8a4a16f2ed0b391"],["/scripts/locked.js","b59bead3c864d1582cf3ac73dec46ae1"],["/scripts/main3.js","de0715d0134e2623a2fd0e016868102d"],["/scripts/textBox.js","9d4c808b12d7f45c2802ba2ff70ba8ce"],["/scripts/three.js","34b26a83412691b52bd2efb3b1632dae"],["/scripts/tween.r12.js","743911cb2cb055fe64cdc37db611675c"],["/setting.html","7d85f22fdda0867dddce822bb96c9127"],["/shared/css/common-1.css","5e2627b0cc518ef50e9eb6a5923642ad"],["/shared/css/index-1.css","9367fd02f2365f13016ffc5d2ce3c020"],["/shared/js/common-2.min.js","43e49a61141c64bcf8d7981f7a6a26f5"],["/shared/sp/css/common.css","51f85b975f7a698e03deb4fd994f55df"],["/shuoshuo/index.html","f9e46b62442080160e5b2e91bb86451f"],["/skin/images/ParticleSmoke.png","bd4b0707cb845e4bd6b7692a3c021caf"],["/skin/images/xh.jpg","f7e040519336ad164996c8c5106ef462"],["/skin/js/snow.js","4970b3c77acf2242a8312c938d235494"],["/skin/js/threecanvas.js","ede050fb08f0ae5d51f6e7133312d3dd"],["/snake.html","c9b00e8b021ecf23a5cd2fad28f02913"],["/src/Alignment.js","73300b383a66b53253e1986830363f63"],["/src/ErrorCorrection.js","33e3a16f41744e10aa54777844ef4a79"],["/src/Frame.js","786321d5244b7078c5d8909d8bb2ee28"],["/src/Galois.js","8cd2db9966c72993f093c8a36c0bba81"],["/src/QRious.js","4a3e6f21e62d3b8c21323998c1670466"],["/src/Version.js","584f4bc57b26c7bea022a4eef8a05cdd"],["/src/renderer/CanvasRenderer.js","e242b913c30580e2dc7538b858e8f64f"],["/src/renderer/ImageRenderer.js","68e9737e8a0517451a87eba98fd85cb8"],["/src/renderer/Renderer.js","9c232c4795f507de1a543ff9dbc8c776"],["/src/runtime/browser.js","91d4be5387b6402f6a637d61b8362736"],["/src/runtime/node.js","18c09486a178fbf29586fa96205ade65"],["/src/service/Service.js","ddc51ef0adc09e837a1b62f8db67f3e9"],["/src/service/ServiceManager.js","7fcb6de5e231d24dac8ddf5b605aa7dc"],["/src/service/element/BrowserElementService.js","f6a21edd9c16c9b0921e8f0d55ffa292"],["/src/service/element/ElementService.js","9ff2c2e50ff7cf0c233baafd4d5718cb"],["/src/service/element/NodeElementService.js","53ab91cd7b27af380c40c26f3946abcf"],["/src/util/Utilities.js","3a37ea5fc14d32c3bf0d12622ff9e076"],["/star.html","6a741eb351985038be94482db282d754"],["/styles/certificate2.css","f221a7461600d21dddd2a3993779a94e"],["/styles/cube.css","b0bcb36f785b5ff41608db8379833db7"],["/styles/doodle2.css","e36579b5daeb524055e5f962d0e47f0d"],["/tags/Hexo/index.html","b6d7b7c4587ad9f2ce838568bb3c3569"],["/tags/index.html","f0a40b06d87058df89d7a8f9ed57c2f1"],["/tags/博客/index.html","6154c1b45401000f4861efde3fc6324c"],["/tags/学习/index.html","c47ab4530414001d9a1a756112c5e7f6"],["/tags/笔记/index.html","ee92bd976c23519db53c7cbd325533d6"],["/tags/网站/index.html","069170e3bc216f71a9431a15505f53a4"],["/tags/英语/index.html","06807e5a68f8eb459d7a3aedd3acb886"],["/wind.html","35a301f6674312b6c0e05f08afbac77c"],["/wyy.html","92f4a6a51854ab99c4c52dd36ae47b60"],["/yingxiaohao.html","4f592a2f7316179fac6f70264951ee21"],["/zhushi.html","0183a27759de70f3c48a72c7dd8b8870"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"http://domye.gitee.io"});




