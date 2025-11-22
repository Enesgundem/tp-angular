
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/data-binding"
  },
  {
    "renderMode": 2,
    "route": "/structural-directive-ngif-vs-if"
  },
  {
    "renderMode": 2,
    "route": "/structural-directive-ngfor-vs-for"
  },
  {
    "renderMode": 2,
    "route": "/structural-directives-ng-switch-vs-switch"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 435, hash: '983d2d01024ad9cc8eb9ec10a5700a320c8d7cb69246072bfdb923b6d728e85e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 975, hash: '24e0a168d41f4d1d5347b7b935aa62a36c1ed64181dc43cf626a2cc6af1cd280', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'data-binding/index.html': {size: 542903, hash: '6fc4c9497b8aaf9280b5a923ad1096501b7770b8985142138739d9eecf94c452', text: () => import('./assets-chunks/data-binding_index_html.mjs').then(m => m.default)},
    'structural-directive-ngif-vs-if/index.html': {size: 541853, hash: '776382b1f9af10f61b141003c12ff596ff2854b5e3cfc0a164bd9d1670d1b15d', text: () => import('./assets-chunks/structural-directive-ngif-vs-if_index_html.mjs').then(m => m.default)},
    'structural-directives-ng-switch-vs-switch/index.html': {size: 542176, hash: 'bec0c30f8f41fa9e0f89d8be81dc2d9418aef58191012ec7ad9b2202473bd8bc', text: () => import('./assets-chunks/structural-directives-ng-switch-vs-switch_index_html.mjs').then(m => m.default)},
    'structural-directive-ngfor-vs-for/index.html': {size: 542033, hash: '47376db8c95562d6596f51c47e1d5f379d512a74c4809b54a53ccc7f38c1a0e9', text: () => import('./assets-chunks/structural-directive-ngfor-vs-for_index_html.mjs').then(m => m.default)}
  },
};
