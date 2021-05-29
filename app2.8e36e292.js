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
})({"assets/js/app2.js":[function(require,module,exports) {
var sortButtons = document.querySelectorAll('.mix-li');
var sortItems = document.querySelectorAll('.item');
sortButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    removeActiveClass();
    btn.classList.add('active');
    var targetData = btn.getAttribute('data-target');
    sortItems.forEach(function (item) {
      item.classList.remove('activated');
      item.classList.add('deleted');

      if (item.getAttribute('data-item') == targetData || targetData == 'all') {
        item.classList.remove('deleted');
        item.classList.add('activated');
      }
    });
  });
});

var removeActiveClass = function removeActiveClass() {
  sortButtons.forEach(function (btn) {
    btn.classList.remove('active');
  });
}; // relief tabs


var tabBtns = document.querySelectorAll('.relief__wrapper-btns-btn');
var tabItems = document.querySelectorAll('.relief__wrapper-content-img');

function selectTabContents(e) {
  removeActiveTabClass();
  removeActiveTabItemClass();
  this.classList.add('active');
  var tabContentItems = document.querySelector("#".concat(this.id, "-content"));
  tabContentItems.classList.add('active');
}

tabBtns.forEach(function (tab) {
  return tab.addEventListener('click', selectTabContents);
});

var removeActiveTabClass = function removeActiveTabClass() {
  tabBtns.forEach(function (tab) {
    tab.classList.remove('active');
  });
};

var removeActiveTabItemClass = function removeActiveTabItemClass() {
  tabItems.forEach(function (tabItem) {
    tabItem.classList.remove('active');
  });
}; // pusle tabs


var pulseBtns = document.querySelectorAll('.posture__figure-circle');
var pulseItems = document.querySelectorAll('.posture__content-item');

function selectPulseContents(e) {
  removeActivePulseClass();
  removeActivePulseItemClass();
  this.classList.add('show');
  console.log(this.id);
  var pulseContentItems = document.querySelector("#".concat(this.id, "-content"));
  pulseContentItems.classList.add('show');
}

pulseBtns.forEach(function (pb) {
  return pb.addEventListener('click', selectPulseContents);
});

var removeActivePulseClass = function removeActivePulseClass() {
  pulseBtns.forEach(function (pulse) {
    pulse.classList.remove('show');
  });
};

var removeActivePulseItemClass = function removeActivePulseItemClass() {
  pulseItems.forEach(function (pulseItem) {
    pulseItem.classList.remove('show');
  });
};

var productSlider = document.querySelector('.glider');
var dotsId = '#dots';
var productPrev = '.glider-prev';
var productNext = '.glider-next';
var blockQuoteSlider = document.querySelector('.trustpilot');
var trustpilotDotsId = '#trustpilot-dots';
var trustpilotPrev = '.trustpilot-prev';
var trustpilotNext = '.trustpilot-next';

var featureProducts = function featureProducts(params, slidesNumber, dots, prev, next, media) {
  new Glider(params, {
    slidesToShow: slidesNumber,
    draggable: true,
    dots: dots,
    arrows: {
      prev: prev,
      next: next
    },
    responsive: [{
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25
      }
    }, {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: media,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }]
  });
};

featureProducts(productSlider, 2, dotsId, productPrev, productNext, 4);
featureProducts(blockQuoteSlider, 1, trustpilotDotsId, trustpilotPrev, trustpilotNext, 3); // // youtube custome player with image cover
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// //Make ready for morethan one video
// var playerInfoList = [
// {id:'player',height:'675',width:'1200',videoId:'A2rIGlsISZE', playerVars: { 'rel':0, 'controls': 0, 'showinfo': 0, 'theme': 'light', 'autohide': 1 }},
// {id:'playerFR',height:'675',width:'1200',videoId:'6awrdupRbEE', playerVars: { 'rel':0, 'controls': 0, 'showinfo': 0, 'theme': 'light', 'autohide': 1 }}, 
// {id:'playerUK',height:'675',width:'1200',videoId:'yAV5_mcwQ4I', playerVars: { 'rel':0, 'controls': 0, 'showinfo': 0, 'theme': 'light', 'autohide': 1 }}
// ];
// function onYouTubeIframeAPIReady() {
// if(typeof playerInfoList === 'undefined')
// return; 
// for(var i = 0; i < playerInfoList.length;i++) {
// var curplayer = createPlayer(playerInfoList[i]);
// }   
// }
// function createPlayer(playerInfo) {
// return new YT.Player(playerInfo.id, {
// height: playerInfo.height,
// width: playerInfo.width,
// videoId: playerInfo.videoId,
// playerVars:playerInfo.playerVars,
// events: {
// 'onReady': onPlayerReady, // on ready event below callback function "onPlayerReady" will be called.
// }
// });
// }
// youtube custome player with image cover

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    // "player" id of youtube player container where video comes using youtube iframe api.
    height: '675',
    width: '1200',
    videoId: 'A2rIGlsISZE',
    playerVars: {
      'controls': 0,
      'showinfo': 0,
      'theme': 'light',
      'rel': 0
    },
    events: {
      'onReady': onPlayerReady // on ready event below callback function "onPlayerReady" will be called.

    }
  });
}

var playVid = document.getElementById('play_vid');
var vidId = document.getElementById('player');
var pulseVidBtn = document.getElementById('span-btn');

function onPlayerReady(event) {
  playVid.addEventListener('click', function () {
    event.target.playVideo();
  });
}

window.addEventListener('load', function () {
  vidId.style.display = 'none';
});
pulseVidBtn.addEventListener('click', function (e) {
  vidId.style.display = '';
  playVid.style.display = 'none';
  pulseVidBtn.style.display = 'none';
});
var counterNew = document.getElementById('counterNew');
var settings = {
  'Title': 'Spring sale - save 25% on all - sale ends in: ',
  'End_time': 'May 19, 2021 10:23:59',
  'Days': 'Days',
  'Hours': 'Hours',
  'Minutes': 'Minutes',
  'Seconds': 'Seconds',
  'Link': 'https://anodyne.dk/'
}; //add zero

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

var template = document.createElement('section');
template.classList = 'new-counter wrapper';
template.innerHTML = "<h4 id=\"head\">".concat(settings['Title'], "</h4>\n        <ul class=\"counter__wrapper\">\n        <li><span id=\"days\"></span>").concat(settings['Days'], "</li>\n        <li><span id=\"hours\"></span>").concat(settings['Hours'], "</li>\n        <li><span id=\"minutes\"></span>").concat(settings['Minutes'], "</li>\n        <li><span id=\"seconds\"></span>").concat(settings['Seconds'], "</li>\n        </ul>\n\t\t\t\t<a class=\"new-counter-btn\" href=\"").concat(settings['Link'], "\">See discount here</a>\n\t\t\t\t");
var second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

if (isValidDate(new Date(settings['End_time']))) {
  var countDown = new Date(settings['End_time']).getTime();
  var x = setInterval(function () {
    var now = new Date().getTime(),
        distance = countDown - now;

    if (distance > 0) {
      counterNew.prepend(template);
    }

    document.querySelector('.new-counter #days').innerText = Math.floor(distance / day), document.querySelector('.new-counter #hours').innerText = addZero(Math.floor(distance % day / hour)), document.querySelector('.new-counter #minutes').innerText = addZero(Math.floor(distance % hour / minute)), document.querySelector('.new-counter #seconds').innerText = addZero(Math.floor(distance % minute / second)); // Hide when date is reached

    if (distance < 0) {
      clearInterval(x);
      document.querySelector('.new-counter.wrapper').style.display = 'none';
    }
  }, second);
} else {
  console.error('End date is invalid');
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}
},{}],"../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49935" + '/');

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
},{}]},{},["../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/app2.js"], null)
//# sourceMappingURL=/app2.8e36e292.js.map