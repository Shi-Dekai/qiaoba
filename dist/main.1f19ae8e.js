// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n<style>\n.skin * {box-sizing: border-box; margin: 0; padding: 0;}\nul, ol {list-style: none;}\n\n.chopper-container {\n  position: relative;\n  margin-top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 700px;\n  height: 500px;\n}\n\n.antlers-left {\n  border: 6px solid #000;\n  border-top: none;\n  position: absolute;\n  width: 21%;\n  height: 16%;\n  top: 5%;\n  left: 7%;\n  border-top-left-radius: 50% 20%;\n  border-top-right-radius: 50% 20%;\n  border-bottom-right-radius: 50% 80%;\n  border-bottom-left-radius: 50% 62%;\n  background: rgb(130, 96, 59);\n}\n\n.antlers-left li {\n  position: absolute;\n  width: 25%;\n  height: 120%;\n  display: inline-block;\n  box-shadow: 6px 0 0 0 #000 inset,\n  -6px 0 0 0 #000 inset,\n  0 6px 0 0 #000 inset;\n  background: rgb(130, 96, 59);\n  z-index: 2;\n}\n\n.antlers-left li:first-child {\n  top: -58%;\n  left: -7%;\n  border-radius: 50% 10% 0 40%;\n}\n\n.antlers-left li:nth-child(2) {\n  top: -69%;\n  left: 10%;\n  border-radius: 50% 10% 0 40%;\n  box-shadow: 6px 0 0 0 #000 inset,\n  0 6px 0 0 #000 inset,\n  -5px 8px 0 0 rgba(0, 0, 0, .2);\n}\n\n.antlers-left li:nth-child(3) {\n  top: -76%;\n  left: 27%;\n  border-radius: 50% 15% 10% 40%;\n  box-shadow: 6px 0 0 0 #000 inset,\n  -6px 0 0 0 #000 inset,\n  0 6px 0 0 #000 inset,\n  -5px 8px 0 0 rgba(0, 0, 0, .2);\n}\n\n.antlers-left li:nth-child(4) {\n  top: -72%;\n  left: 67%;\n  height: 110%;\n  border-radius: 30% 40% 40% 10%;\n}\n\n.antlers-left li:nth-child(5) {\n  top: -64%;\n  left: 85%;\n  height: 125%;\n  border-radius: 30% 40% 45% 30%;\n  -webkit-transform: rotate(5deg);\n  box-shadow: 6px 0 0 0 #000 inset,\n  -6px 0 0 0 #000 inset,\n  0 6px 0 0 #000 inset,\n  -5px 8px 0 0 rgba(0, 0, 0, .2);\n}\n\n.antlers-left li:nth-child(6) {\n  border: 6px solid #000;\n  box-shadow: none;\n  border-top: none;\n  position: absolute;\n  width: 25%;\n  height: 67%;\n  top: 74%;\n  left: 80%;\n  transform: rotate(-33deg) skew(0, -5deg);\n  background: rgb(130, 96, 59);\n  z-index: 0;\n}\n\n.antlers-left::before {\n  content: '';\n  position: absolute;\n  transform: rotate(-5deg);\n  top: 30%;\n  left: 3.5%;\n  border-radius: 65%;\n  border-bottom-right-radius: 42% 67%;\n  width: 95%;\n  height: 50%;\n  background: rgb(130, 96, 59);\n  z-index: 3;\n}\n\n.antlers-left::after {\n  position: absolute;\n  top: -5%;\n  left: 47.6%;\n  width: 15%;\n  height: 47%;\n  border: 6px solid #000;\n  border-top: 0;\n  border-radius: 0 0 46% 45%;\n  background: #FFF;\n  z-index: 99;\n  content: '';\n}\n\n\n.antlers-right {\n  border: 6px solid #000;\n  border-top: none;\n  position: absolute;\n  width: 21%;\n  height: 16%;\n  top: 5%;\n  right: 7%;\n  border-top-left-radius: 50% 20%;\n  border-top-right-radius: 50% 20%;\n  border-bottom-left-radius: 50% 80%;\n  border-bottom-right-radius: 50% 62%;\n  background: rgb(130, 96, 59);\n}\n\n.antlers-right li {\n  position: absolute;\n  width: 25%;\n  height: 120%;\n  display: inline-block;\n  box-shadow: 6px 0 0 0 #000 inset,\n  -6px 0 0 0 #000 inset,\n  0 6px 0 0 #000 inset,\n  -10px 1px 0 0 rgba(0, 0, 0, .2) inset;\n  background: rgb(130, 96, 59);\n  z-index: 2;\n}\n\n.antlers-right li:first-child {\n  top: -58%;\n  right: -7%;\n  border-radius: 10% 50% 40% 0;\n}\n\n.antlers-right li:nth-child(2) {\n  top: -69%;\n  right: 10%;\n  border-radius: 10% 50% 40% 0;\n}\n\n.antlers-right li:nth-child(3) {\n  top: -76%;\n  right: 27%;\n  border-radius: 10% 50% 40% 10%;\n}\n\n.antlers-right li:nth-child(4) {\n  top: -72%;\n  right: 67%;\n  height: 110%;\n  border-radius: 40% 30% 10% 40%;\n}\n\n.antlers-right li:nth-child(5) {\n  top: -64%;\n  right: 85%;\n  height: 125%;\n  border-radius: 40% 30% 30% 45%;\n  transform: rotate(-5deg);\n}\n\n.antlers-right li:nth-child(6) {\n  border: 6px solid #000;\n  box-shadow: none;\n  border-top: none;\n  position: absolute;\n  width: 25%;\n  height: 67%;\n  top: 74%;\n  right: 80%;\n  transform: rotate(33deg) skew(0, 5deg);\n  background: rgb(130, 96, 59);\n  z-index: 0;\n}\n\n.antlers-right::before {\n  content: '';\n  position: absolute;\n  transform: rotate(5deg);\n  top: 30%;\n  right: 3.5%;\n  border-radius: 65%;\n  border-bottom-left-radius: 42% 67%;\n  width: 95%;\n  height: 50%;\n  background: rgb(130, 96, 59);\n  z-index: 3;\n}\n\n.antlers-right::after {\n  position: absolute;\n  top: -5%;\n  right: 47.6%;\n  width: 15%;\n  height: 47%;\n  border: 6px solid #000;\n  border-top: 0;\n  border-radius: 0 0 45% 46%;\n  background: #FFF;\n  z-index: 99;\n  content: '';\n}\n\n\n.hat {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 50%;\n}\n\n.hat .hat-top {\n  border: 5px solid #000;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 320px;\n  height: 115px;\n  background-color: rgb(233, 116, 109);\n}\n\n.hat .hat-top::before {\n  content: '';\n  position: absolute;\n  border: 5px solid #000;\n  border-bottom: none;\n  top: -65%;\n  left: -5px;\n  width: 100%;\n  height: 65%;\n  border-radius: 50% / 80% 80% 0 0;\n  background: rgb(233, 116, 109);\n}\n\n.hat-top-shadow {\n  position: absolute;\n  top: 4%;\n  left: -1%;\n  width: 56%;\n  height: 82%;\n  z-index: 1;\n  transform: skew(0, -15deg) scale(1, 2.5);\n  border-top-right-radius: 69%;\n  border-top-left-radius: 20%;\n  background: rgba(0, 0, 0, .2);\n}\n\n.hat-top-x {\n  margin: auto;\n  transform: rotate(45deg);\n  width: 36%;\n  height: 36%;\n  background: #fff;\n  box-shadow: 0 0 0 6px #000 inset;\n}\n\n.hat-top-x::before {\n  content: '';\n  position: absolute;\n  transform: rotate(90deg);\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  box-shadow: 0 0 0 6px #000 inset;\n}\n\n.hat-top-x::after {\n  content: '';\n  position: absolute;\n  width: 23.1%;\n  height: 105%;\n  transform: rotate(90deg) translateY(-43px) translateX(-0.8px);\n  background: #fff;\n}\n\n.hat-brim {\n  border: 6px solid #000;\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 550px;\n  height: 220px;\n  background: rgb(233, 116, 109);\n  border-radius: 50% / 50% 50% 35% 35%;\n  overflow: hidden;\n}\n\n.hat-brim::before {\n  position: absolute;\n  top: 14%;\n  left: -6px;\n  border: 6px solid #000;\n  content: '';\n  width: 100%;\n  height: 90%;\n  background: rgb(148, 71, 77);\n  border-radius: 50% / 60% 60% 40% 40%;\n  z-index: 1;\n}\n\n.hat-brim-shadow {\n  position: absolute;\n  width: 35%;\n  height: 63%;\n  border-radius: 0 30% 0 0;\n  background: rgba(0, 0, 0, .3);\n}\n\n.face {\n  position: absolute;\n  border: 6px solid #000;\n  top: 160px;\n  transform: translateX(-50%);\n  left: 50%;\n  width: 310px;\n  height: 150px;\n  border-radius: 60% /60% 60% 0 0;\n  border-bottom-right-radius: 25px 50px;\n  border-bottom-left-radius: 25px 50px;\n  background: rgb(223, 180, 125);\n  box-shadow: 0 20px 0 rgba(0, 0, 0, .2) inset;\n}\n\n.face-shadow {\n}\n\n.face::before {\n  content: '';\n  position: absolute;\n  border: 6px solid #000;\n  width: 100%;\n  height: 35%;\n  top: 48%;\n  left: -6px;\n  background: rgb(223, 180, 125);\n  z-index: 1;\n  border-top: none;\n  border-bottom: none;\n}\n\n.face::after {\n  content: '';\n  position: absolute;\n  left: -6px;\n  border: 6px solid #000;\n  width: 100%;\n  height: 83%;\n  top: 77%;\n  background: rgb(223, 180, 125);\n  border-radius: 45% / 0 0 95% 95%;\n}\n\n.eye {\n  border: 6px solid #000;\n  position: absolute;\n  display: inline-block;\n  width: 73px;\n  height: 73px;\n  border-radius: 50%;\n  z-index: 3;\n  background: #fff;\n}\n\n.eyeball {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  border-radius: 50%;\n  width: 80%;\n  height: 80%;\n  background: #000;\n}\n\n.eye-left {\n  left: 32px;\n  top: 45px;\n}\n\n.eye-right {\n  right: 32px;\n  top: 45px;\n}\n\n.nose {\n  position: absolute;\n  left: 50%;\n  top: 70%;\n  transform: translateX(-50%);\n  width: 42px;\n  height: 30px;\n  border: 6px solid #000;\n  border-radius: 60% / 40% 40% 100% 100%;\n  background: rgb(65, 88, 140);\n  z-index: 3;\n}\n\n.nose::after {\n  content: '';\n  position: absolute;\n  border-radius: 45%;\n  background: rgb(255, 255, 255);\n  width: 35%;\n  height: 40%;\n}\n\n.lip {\n  position: absolute;\n  width: 63px;\n  height: 63px;\n  border-radius: 50%;\n  z-index: 2;\n  background: rgb(223, 180, 125);\n}\n\n.lip-left {\n  border-bottom: 6px solid #000;\n  border-right: 6px solid #000;\n  top: 70%;\n  left: 50%;\n  transform: rotate(55deg);\n}\n\n.lip-left::before {\n  content: '';\n  position: absolute;\n  left: -13px;\n  top: 0;\n  width: 63px;\n  height: 29px;\n  transform: rotate(-35deg);\n  background: rgb(223, 180, 125);\n}\n\n.lip-right {\n  border-bottom: 6px solid #000;\n  border-left: 5px solid #000;\n  top: 70%;\n  left: 30%;\n  transform: rotate(-55deg);\n}\n\n.lip-right::before {\n  content: '';\n  position: absolute;\n  left: 1px;\n  top: -2px;\n  width: 63px;\n  height: 29px;\n  transform: rotate(35deg);\n  background: rgb(223, 180, 125);\n}\n\n.mouth {\n  position: absolute;\n  border: 6px solid #000;\n  top: 80%;\n  left: 51%;\n  width: 20%;\n  height: 85%;\n  border-radius: 50%;\n  background: rgb(126, 64, 49);\n  z-index: 1;\n  overflow: hidden;\n  margin-left: -28px;\n  animation: blink forwards infinite 4s ease-in-out;\n}\n\n.mouth::after {\n  position: absolute;\n  top: 47%;\n  left: -11px;\n  content: '';\n  border: 6px solid #000;\n  width: 120%;\n  height: 80%;\n  border-radius: 45%;\n  background: rgb(223, 137, 104);\n}\n\n@keyframes blink {\n  0%, 6%, 60%, 66%, 100% {\n    transform: scale(1, 1) ;\n\n  }\n  1%, 61% {\n    transform: scale(1.5, 0.1);\n  }\n}\n</style>\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 15,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  n: 1,
  init: function init() {
    player.play();
    player.bindEvents();
  },
  events: {
    '#pausePlay': 'pause',
    '#playCode': 'play',
    '#slowPlay': 'slow',
    '#normalPlay': 'normal',
    '#fastPlay': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      var value = player.events[key];
      document.querySelector(key).onclick = player[value];
    }
  },
  run: function run() {
    if (player.n < _css.default.length) {
      player.n += 1;
      player.ui.demo.innerText = _css.default.substring(0, player.n);
      player.ui.demo2.innerHTML = _css.default.substring(0, player.n);
      player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    } else {
      window.clearInterval(player.id);
    }
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 40;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 10;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css":"css.js"}],"C:/Users/sdk/AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53635" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/sdk/AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map