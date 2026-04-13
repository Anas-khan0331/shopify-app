(function() {
  "use strict";
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  var react = { exports: {} };
  var react_production_min = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReact_production_min;
  function requireReact_production_min() {
    if (hasRequiredReact_production_min) return react_production_min;
    hasRequiredReact_production_min = 1;
    var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, C = Object.assign, D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = { current: null }, L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
      else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null }, V = { transition: null }, W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    function X() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    react_production_min.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    react_production_min.Component = E;
    react_production_min.Fragment = p;
    react_production_min.Profiler = r;
    react_production_min.PureComponent = G;
    react_production_min.StrictMode = q;
    react_production_min.Suspense = w;
    react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    react_production_min.act = X;
    react_production_min.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    react_production_min.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    react_production_min.createElement = M;
    react_production_min.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    react_production_min.createRef = function() {
      return { current: null };
    };
    react_production_min.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    react_production_min.isValidElement = O;
    react_production_min.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    react_production_min.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    react_production_min.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    react_production_min.unstable_act = X;
    react_production_min.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    react_production_min.useContext = function(a) {
      return U.current.useContext(a);
    };
    react_production_min.useDebugValue = function() {
    };
    react_production_min.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    react_production_min.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    react_production_min.useId = function() {
      return U.current.useId();
    };
    react_production_min.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    react_production_min.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    react_production_min.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    react_production_min.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    react_production_min.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    react_production_min.useRef = function(a) {
      return U.current.useRef(a);
    };
    react_production_min.useState = function(a) {
      return U.current.useState(a);
    };
    react_production_min.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    react_production_min.useTransition = function() {
      return U.current.useTransition();
    };
    react_production_min.version = "18.3.1";
    return react_production_min;
  }
  var hasRequiredReact;
  function requireReact() {
    if (hasRequiredReact) return react.exports;
    hasRequiredReact = 1;
    {
      react.exports = requireReact_production_min();
    }
    return react.exports;
  }
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_production_min;
  function requireReactJsxRuntime_production_min() {
    if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
    hasRequiredReactJsxRuntime_production_min = 1;
    var f = requireReact(), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    reactJsxRuntime_production_min.Fragment = l;
    reactJsxRuntime_production_min.jsx = q;
    reactJsxRuntime_production_min.jsxs = q;
    return reactJsxRuntime_production_min;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    {
      jsxRuntime.exports = requireReactJsxRuntime_production_min();
    }
    return jsxRuntime.exports;
  }
  var jsxRuntimeExports = requireJsxRuntime();
  var client = {};
  var reactDom = { exports: {} };
  var reactDom_production_min = {};
  var scheduler = { exports: {} };
  var scheduler_production_min = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredScheduler_production_min;
  function requireScheduler_production_min() {
    if (hasRequiredScheduler_production_min) return scheduler_production_min;
    hasRequiredScheduler_production_min = 1;
    (function(exports$1) {
      function f(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e = a[d];
          if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
            if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
          }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var l = performance;
        exports$1.unstable_now = function() {
          return l.now();
        };
      } else {
        var p = Date, q = p.now();
        exports$1.unstable_now = function() {
          return p.now() - q;
        };
      }
      var r = [], t = [], u = 1, v = null, y = 3, z = false, A = false, B = false, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a) {
        for (var b = h(t); null !== b; ) {
          if (null === b.callback) k(t);
          else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
          else break;
          b = h(t);
        }
      }
      function H(a) {
        B = false;
        G(a);
        if (!A) if (null !== h(r)) A = true, I(J);
        else {
          var b = h(t);
          null !== b && K(H, b.startTime - a);
        }
      }
      function J(a, b) {
        A = false;
        B && (B = false, E(L), L = -1);
        z = true;
        var c = y;
        try {
          G(b);
          for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e = d(v.expirationTime <= b);
              b = exports$1.unstable_now();
              "function" === typeof e ? v.callback = e : v === h(r) && k(r);
              G(b);
            } else k(r);
            v = h(r);
          }
          if (null !== v) var w = true;
          else {
            var m = h(t);
            null !== m && K(H, m.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v = null, y = c, z = false;
        }
      }
      var N = false, O = null, L = -1, P = 5, Q = -1;
      function M() {
        return exports$1.unstable_now() - Q < P ? false : true;
      }
      function R() {
        if (null !== O) {
          var a = exports$1.unstable_now();
          Q = a;
          var b = true;
          try {
            b = O(true, a);
          } finally {
            b ? S() : (N = false, O = null);
          }
        } else N = false;
      }
      var S;
      if ("function" === typeof F) S = function() {
        F(R);
      };
      else if ("undefined" !== typeof MessageChannel) {
        var T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S = function() {
          U.postMessage(null);
        };
      } else S = function() {
        D(R, 0);
      };
      function I(a) {
        O = a;
        N || (N = true, S());
      }
      function K(a, b) {
        L = D(function() {
          a(exports$1.unstable_now());
        }, b);
      }
      exports$1.unstable_IdlePriority = 5;
      exports$1.unstable_ImmediatePriority = 1;
      exports$1.unstable_LowPriority = 4;
      exports$1.unstable_NormalPriority = 3;
      exports$1.unstable_Profiling = null;
      exports$1.unstable_UserBlockingPriority = 2;
      exports$1.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports$1.unstable_continueExecution = function() {
        A || z || (A = true, I(J));
      };
      exports$1.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports$1.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports$1.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports$1.unstable_next = function(a) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c = y;
        y = b;
        try {
          return a();
        } finally {
          y = c;
        }
      };
      exports$1.unstable_pauseExecution = function() {
      };
      exports$1.unstable_requestPaint = function() {
      };
      exports$1.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y;
        y = a;
        try {
          return b();
        } finally {
          y = c;
        }
      };
      exports$1.unstable_scheduleCallback = function(a, b, c) {
        var d = exports$1.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
        return a;
      };
      exports$1.unstable_shouldYield = M;
      exports$1.unstable_wrapCallback = function(a) {
        var b = y;
        return function() {
          var c = y;
          y = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y = c;
          }
        };
      };
    })(scheduler_production_min);
    return scheduler_production_min;
  }
  var hasRequiredScheduler;
  function requireScheduler() {
    if (hasRequiredScheduler) return scheduler.exports;
    hasRequiredScheduler = 1;
    {
      scheduler.exports = requireScheduler_production_min();
    }
    return scheduler.exports;
  }
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactDom_production_min;
  function requireReactDom_production_min() {
    if (hasRequiredReactDom_production_min) return reactDom_production_min;
    hasRequiredReactDom_production_min = 1;
    var aa = requireReact(), ca = requireScheduler();
    function p(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set(), ea = {};
    function fa(a, b) {
      ha(a, b);
      ha(a + "Capture", b);
    }
    function ha(a, b) {
      ea[a] = b;
      for (a = 0; a < b.length; a++) da.add(b[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
    function oa(a) {
      if (ja.call(ma, a)) return true;
      if (ja.call(la, a)) return false;
      if (ka.test(a)) return ma[a] = true;
      la[a] = true;
      return false;
    }
    function pa(a, b, c, d) {
      if (null !== c && 0 === c.type) return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d) return false;
          if (null !== c) return !c.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function qa(a, b, c, d) {
      if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
      if (d) return false;
      if (null !== c) switch (c.type) {
        case 3:
          return !b;
        case 4:
          return false === b;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
      return false;
    }
    function v(a, b, c, d, e, f, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = e;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = f;
      this.removeEmptyString = g;
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      z[a] = new v(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      z[b] = new v(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      z[a] = new v(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      z[a] = new v(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      z[a] = new v(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      z[a] = new v(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function sa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        ra,
        sa
      );
      z[b] = new v(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function ta(a, b, c, d) {
      var e = z.hasOwnProperty(b) ? z[b] : null;
      if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
    var Ia = Symbol.for("react.offscreen");
    var Ja = Symbol.iterator;
    function Ka(a) {
      if (null === a || "object" !== typeof a) return null;
      a = Ja && a[Ja] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var A = Object.assign, La;
    function Ma(a) {
      if (void 0 === La) try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = b && b[1] || "";
      }
      return "\n" + La + a;
    }
    var Na = false;
    function Oa(a, b) {
      if (!a || Na) return "";
      Na = true;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b) if (b = function() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", { set: function() {
          throw Error();
        } }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l) {
            var d = l;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l) {
            d = l;
          }
          a.call(b.prototype);
        }
        else {
          try {
            throw Error();
          } catch (l) {
            d = l;
          }
          a();
        }
      } catch (l) {
        if (l && d && "string" === typeof l.stack) {
          for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
          for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
            if (1 !== g || 1 !== h) {
              do
                if (g--, h--, 0 > h || e[g] !== f[h]) {
                  var k = "\n" + e[g].replace(" at new ", " at ");
                  a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                  return k;
                }
              while (1 <= g && 0 <= h);
            }
            break;
          }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c;
      }
      return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
    }
    function Pa(a) {
      switch (a.tag) {
        case 5:
          return Ma(a.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Oa(a.type, false), a;
        case 11:
          return a = Oa(a.type.render, false), a;
        case 1:
          return a = Oa(a.type, true), a;
        default:
          return "";
      }
    }
    function Qa(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case ya:
          return "Fragment";
        case wa:
          return "Portal";
        case Aa:
          return "Profiler";
        case za:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Ca:
          return (a.displayName || "Context") + ".Consumer";
        case Ba:
          return (a._context.displayName || "Context") + ".Provider";
        case Da:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Ga:
          return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
        case Ha:
          b = a._payload;
          a = a._init;
          try {
            return Qa(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    function Ra(a) {
      var b = a.type;
      switch (a.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b.displayName || "Context") + ".Consumer";
        case 10:
          return (b._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b);
        case 8:
          return b === za ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" === typeof b) return b.displayName || b.name || null;
          if ("string" === typeof b) return b;
      }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b = a.type;
      return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
    }
    function Ua(a) {
      var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
      if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, { configurable: true, get: function() {
          return e.call(this);
        }, set: function(a2) {
          d = "" + a2;
          f.call(this, a2);
        } });
        Object.defineProperty(a, b, { enumerable: c.enumerable });
        return { getValue: function() {
          return d;
        }, setValue: function(a2) {
          d = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b];
        } };
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a) return false;
      var b = a._valueTracker;
      if (!b) return true;
      var c = b.getValue();
      var d = "";
      a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d;
      return a !== c ? (b.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a) return null;
      try {
        return a.activeElement || a.body;
      } catch (b) {
        return a.body;
      }
    }
    function Ya(a, b) {
      var c = b.checked;
      return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
    }
    function Za(a, b) {
      var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
      c = Sa(null != b.value ? b.value : c);
      a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
    }
    function ab(a, b) {
      b = b.checked;
      null != b && ta(a, "checked", b, false);
    }
    function bb(a, b) {
      ab(a, b);
      var c = Sa(b.value), d = b.type;
      if (null != c) if ("number" === d) {
        if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
      } else a.value !== "" + c && (a.value = "" + c);
      else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
      }
      b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
      null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
    }
    function db(a, b, c) {
      if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
      }
      c = a.name;
      "" !== c && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      "" !== c && (a.name = c);
    }
    function cb(a, b, c) {
      if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
    }
    var eb = Array.isArray;
    function fb(a, b, c, d) {
      a = a.options;
      if (b) {
        b = {};
        for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
        for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
      } else {
        c = "" + Sa(c);
        b = null;
        for (e = 0; e < a.length; e++) {
          if (a[e].value === c) {
            a[e].selected = true;
            d && (a[e].defaultSelected = true);
            return;
          }
          null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = true);
      }
    }
    function gb(a, b) {
      if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
      return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function hb(a, b) {
      var c = b.value;
      if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
          if (null != b) throw Error(p(92));
          if (eb(c)) {
            if (1 < c.length) throw Error(p(93));
            c = c[0];
          }
          b = c;
        }
        null == b && (b = "");
        c = b;
      }
      a._wrapperState = { initialValue: Sa(c) };
    }
    function ib(a, b) {
      var c = Sa(b.value), d = Sa(b.defaultValue);
      null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
      null != d && (a.defaultValue = "" + d);
    }
    function jb(a) {
      var b = a.textContent;
      b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
    }
    function kb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function lb(a, b) {
      return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
    }
    var mb, nb = (function(a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b, c, d, e);
        });
      } : a;
    })(function(a, b) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
        for (; b.firstChild; ) a.appendChild(b.firstChild);
      }
    });
    function ob(a, b) {
      if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
          c.nodeValue = b;
          return;
        }
      }
      a.textContent = b;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    }, qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function(a) {
      qb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b] = pb[a];
      });
    });
    function rb(a, b, c) {
      return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
    }
    function sb(a, b) {
      a = a.style;
      for (var c in b) if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
      }
    }
    var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a, b) {
      if (b) {
        if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
          if (null != b.children) throw Error(p(60));
          if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
      }
    }
    function vb(a, b) {
      if (-1 === a.indexOf("-")) return "string" === typeof b.is;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return 3 === a.nodeType ? a.parentNode : a;
    }
    var yb = null, zb = null, Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if ("function" !== typeof yb) throw Error(p(280));
        var b = a.stateNode;
        b && (b = Db(b), yb(a.stateNode, a.type, b));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b = Ab;
        Ab = zb = null;
        Bb(a);
        if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
      }
    }
    function Gb(a, b) {
      return a(b);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a, b, c) {
      if (Ib) return a(b, c);
      Ib = true;
      try {
        return Gb(a, b, c);
      } finally {
        if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
      }
    }
    function Kb(a, b) {
      var c = a.stateNode;
      if (null === c) return null;
      var d = Db(c);
      if (null === d) return null;
      c = d[b];
      a: switch (b) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
          a = !d;
          break a;
        default:
          a = false;
      }
      if (a) return null;
      if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
      return c;
    }
    var Lb = false;
    if (ia) try {
      var Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a) {
      Lb = false;
    }
    function Nb(a, b, c, d, e, f, g, h, k) {
      var l = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c, l);
      } catch (m) {
        this.onError(m);
      }
    }
    var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
      Ob = true;
      Pb = a;
    } };
    function Tb(a, b, c, d, e, f, g, h, k) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a, b, c, d, e, f, g, h, k) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l = Pb;
          Ob = false;
          Pb = null;
        } else throw Error(p(198));
        Qb || (Qb = true, Rb = l);
      }
    }
    function Vb(a) {
      var b = a, c = a;
      if (a.alternate) for (; b.return; ) b = b.return;
      else {
        a = b;
        do
          b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
      }
      return 3 === b.tag ? c : null;
    }
    function Wb(a) {
      if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
      }
      return null;
    }
    function Xb(a) {
      if (Vb(a) !== a) throw Error(p(188));
    }
    function Yb(a) {
      var b = a.alternate;
      if (!b) {
        b = Vb(a);
        if (null === b) throw Error(p(188));
        return b !== a ? null : a;
      }
      for (var c = a, d = b; ; ) {
        var e = c.return;
        if (null === e) break;
        var f = e.alternate;
        if (null === f) {
          d = e.return;
          if (null !== d) {
            c = d;
            continue;
          }
          break;
        }
        if (e.child === f.child) {
          for (f = e.child; f; ) {
            if (f === c) return Xb(e), a;
            if (f === d) return Xb(e), b;
            f = f.sibling;
          }
          throw Error(p(188));
        }
        if (c.return !== d.return) c = e, d = f;
        else {
          for (var g = false, h = e.child; h; ) {
            if (h === c) {
              g = true;
              c = e;
              d = f;
              break;
            }
            if (h === d) {
              g = true;
              d = e;
              c = f;
              break;
            }
            h = h.sibling;
          }
          if (!g) {
            for (h = f.child; h; ) {
              if (h === c) {
                g = true;
                c = f;
                d = e;
                break;
              }
              if (h === d) {
                g = true;
                d = f;
                c = e;
                break;
              }
              h = h.sibling;
            }
            if (!g) throw Error(p(189));
          }
        }
        if (c.alternate !== d) throw Error(p(190));
      }
      if (3 !== c.tag) throw Error(p(188));
      return c.stateNode.current === c ? a : b;
    }
    function Zb(a) {
      a = Yb(a);
      return null !== a ? $b(a) : null;
    }
    function $b(a) {
      if (5 === a.tag || 6 === a.tag) return a;
      for (a = a.child; null !== a; ) {
        var b = $b(a);
        if (null !== b) return b;
        a = a.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
    function mc(a) {
      if (lc && "function" === typeof lc.onCommitFiberRoot) try {
        lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
      } catch (b) {
      }
    }
    var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
    function nc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
    }
    var rc = 64, sc = 4194304;
    function tc(a) {
      switch (a & -a) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a;
      }
    }
    function uc(a, b) {
      var c = a.pendingLanes;
      if (0 === c) return 0;
      var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
      if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
      } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
      if (0 === d) return 0;
      if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
      0 !== (d & 4) && (d |= c & 16);
      b = a.entangledLanes;
      if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
      return d;
    }
    function vc(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 4:
          return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return b + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function wc(a, b) {
      for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
        var g = 31 - oc(f), h = 1 << g, k = e[g];
        if (-1 === k) {
          if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
        } else k <= b && (a.expiredLanes |= h);
        f &= ~h;
      }
    }
    function xc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function yc() {
      var a = rc;
      rc <<= 1;
      0 === (rc & 4194240) && (rc = 64);
      return a;
    }
    function zc(a) {
      for (var b = [], c = 0; 31 > c; c++) b.push(a);
      return b;
    }
    function Ac(a, b, c) {
      a.pendingLanes |= b;
      536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
      a = a.eventTimes;
      b = 31 - oc(b);
      a[b] = c;
    }
    function Bc(a, b) {
      var c = a.pendingLanes & ~b;
      a.pendingLanes = b;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= b;
      a.mutableReadLanes &= b;
      a.entangledLanes &= b;
      b = a.entanglements;
      var d = a.eventTimes;
      for (a = a.expirationTimes; 0 < c; ) {
        var e = 31 - oc(c), f = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f;
      }
    }
    function Cc(a, b) {
      var c = a.entangledLanes |= b;
      for (a = a.entanglements; c; ) {
        var d = 31 - oc(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
      }
    }
    var C = 0;
    function Dc(a) {
      a &= -a;
      return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Sc(a, b) {
      switch (a) {
        case "focusin":
        case "focusout":
          Lc = null;
          break;
        case "dragenter":
        case "dragleave":
          Mc = null;
          break;
        case "mouseover":
        case "mouseout":
          Nc = null;
          break;
        case "pointerover":
        case "pointerout":
          Oc.delete(b.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pc.delete(b.pointerId);
      }
    }
    function Tc(a, b, c, d, e, f) {
      if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
      a.eventSystemFlags |= d;
      b = a.targetContainers;
      null !== e && -1 === b.indexOf(e) && b.push(e);
      return a;
    }
    function Uc(a, b, c, d, e) {
      switch (b) {
        case "focusin":
          return Lc = Tc(Lc, a, b, c, d, e), true;
        case "dragenter":
          return Mc = Tc(Mc, a, b, c, d, e), true;
        case "mouseover":
          return Nc = Tc(Nc, a, b, c, d, e), true;
        case "pointerover":
          var f = e.pointerId;
          Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
          return true;
        case "gotpointercapture":
          return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
      }
      return false;
    }
    function Vc(a) {
      var b = Wc(a.target);
      if (null !== b) {
        var c = Vb(b);
        if (null !== c) {
          if (b = c.tag, 13 === b) {
            if (b = Wb(c), null !== b) {
              a.blockedOn = b;
              Ic(a.priority, function() {
                Gc(c);
              });
              return;
            }
          } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Xc(a) {
      if (null !== a.blockedOn) return false;
      for (var b = a.targetContainers; 0 < b.length; ) {
        var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
          c = a.nativeEvent;
          var d = new c.constructor(c.type, c);
          wb = d;
          c.target.dispatchEvent(d);
          wb = null;
        } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
        b.shift();
      }
      return true;
    }
    function Zc(a, b, c) {
      Xc(a) && c.delete(b);
    }
    function $c() {
      Jc = false;
      null !== Lc && Xc(Lc) && (Lc = null);
      null !== Mc && Xc(Mc) && (Mc = null);
      null !== Nc && Xc(Nc) && (Nc = null);
      Oc.forEach(Zc);
      Pc.forEach(Zc);
    }
    function ad(a, b) {
      a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
    }
    function bd(a) {
      function b(b2) {
        return ad(b2, a);
      }
      if (0 < Kc.length) {
        ad(Kc[0], a);
        for (var c = 1; c < Kc.length; c++) {
          var d = Kc[c];
          d.blockedOn === a && (d.blockedOn = null);
        }
      }
      null !== Lc && ad(Lc, a);
      null !== Mc && ad(Mc, a);
      null !== Nc && ad(Nc, a);
      Oc.forEach(b);
      Pc.forEach(b);
      for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
      for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig, dd = true;
    function ed(a, b, c, d) {
      var e = C, f = cd.transition;
      cd.transition = null;
      try {
        C = 1, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f;
      }
    }
    function gd(a, b, c, d) {
      var e = C, f = cd.transition;
      cd.transition = null;
      try {
        C = 4, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f;
      }
    }
    function fd(a, b, c, d) {
      if (dd) {
        var e = Yc(a, b, c, d);
        if (null === e) hd(a, b, d, id, c), Sc(a, d);
        else if (Uc(e, a, b, c, d)) d.stopPropagation();
        else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
          for (; null !== e; ) {
            var f = Cb(e);
            null !== f && Ec(f);
            f = Yc(a, b, c, d);
            null === f && hd(a, b, d, id, c);
            if (f === e) break;
            e = f;
          }
          null !== e && d.stopPropagation();
        } else hd(a, b, d, null, c);
      }
    }
    var id = null;
    function Yc(a, b, c, d) {
      id = null;
      a = xb(d);
      a = Wc(a);
      if (null !== a) if (b = Vb(a), null === b) a = null;
      else if (c = b.tag, 13 === c) {
        a = Wb(b);
        if (null !== a) return a;
        a = null;
      } else if (3 === c) {
        if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
        a = null;
      } else b !== a && (a = null);
      id = a;
      return null;
    }
    function jd(a) {
      switch (a) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ec()) {
            case fc:
              return 1;
            case gc:
              return 4;
            case hc:
            case ic:
              return 16;
            case jc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kd = null, ld = null, md = null;
    function nd() {
      if (md) return md;
      var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
      for (a = 0; a < c && b[a] === e[a]; a++) ;
      var g = c - a;
      for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
      return md = e.slice(a, 1 < d ? 1 - d : void 0);
    }
    function od(a) {
      var b = a.keyCode;
      "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
      10 === a && (a = 13);
      return 32 <= a || 13 === a ? a : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a) {
      function b(b2, d, e, f, g) {
        this._reactName = b2;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f;
        this.target = g;
        this.currentTarget = null;
        for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
        this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      A(b.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a) return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : xd;
    } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Nd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a) {
      var b = this.nativeEvent;
      return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = A({}, ud, { key: function(a) {
      if (a.key) {
        var b = Md[a.key] || a.key;
        if ("Unidentified" !== b) return b;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
      return "keypress" === a.type ? od(a) : 0;
    }, keyCode: function(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function(a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
    ia && "documentMode" in document && (be = document.documentMode);
    var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
    function ge(a, b) {
      switch (a) {
        case "keyup":
          return -1 !== $d.indexOf(b.keyCode);
        case "keydown":
          return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he(a) {
      a = a.detail;
      return "object" === typeof a && "data" in a ? a.data : null;
    }
    var ie = false;
    function je(a, b) {
      switch (a) {
        case "compositionend":
          return he(b);
        case "keypress":
          if (32 !== b.which) return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke(a, b) {
      if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
            if (b.char && 1 < b.char.length) return b.char;
            if (b.which) return String.fromCharCode(b.which);
          }
          return null;
        case "compositionend":
          return de && "ko" !== b.locale ? null : b.data;
        default:
          return null;
      }
    }
    var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
    }
    function ne(a, b, c, d) {
      Eb(d);
      b = oe(b, "onChange");
      0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
    }
    var pe = null, qe = null;
    function re(a) {
      se(a, 0);
    }
    function te(a) {
      var b = ue(a);
      if (Wa(b)) return a;
    }
    function ve(a, b) {
      if ("change" === a) return b;
    }
    var we = false;
    if (ia) {
      var xe;
      if (ia) {
        var ye = "oninput" in document;
        if (!ye) {
          var ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = "function" === typeof ze.oninput;
        }
        xe = ye;
      } else xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
    function Ae() {
      pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
    }
    function Be(a) {
      if ("value" === a.propertyName && te(qe)) {
        var b = [];
        ne(b, qe, a, xb(a));
        Jb(re, b);
      }
    }
    function Ce(a, b, c) {
      "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
    }
    function De(a) {
      if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
    }
    function Ee(a, b) {
      if ("click" === a) return te(b);
    }
    function Fe(a, b) {
      if ("input" === a || "change" === a) return te(b);
    }
    function Ge(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var He = "function" === typeof Object.is ? Object.is : Ge;
    function Ie(a, b) {
      if (He(a, b)) return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
      var c = Object.keys(a), d = Object.keys(b);
      if (c.length !== d.length) return false;
      for (d = 0; d < c.length; d++) {
        var e = c[d];
        if (!ja.call(b, e) || !He(a[e], b[e])) return false;
      }
      return true;
    }
    function Je(a) {
      for (; a && a.firstChild; ) a = a.firstChild;
      return a;
    }
    function Ke(a, b) {
      var c = Je(a);
      a = 0;
      for (var d; c; ) {
        if (3 === c.nodeType) {
          d = a + c.textContent.length;
          if (a <= b && d >= b) return { node: c, offset: b - a };
          a = d;
        }
        a: {
          for (; c; ) {
            if (c.nextSibling) {
              c = c.nextSibling;
              break a;
            }
            c = c.parentNode;
          }
          c = void 0;
        }
        c = Je(c);
      }
    }
    function Le(a, b) {
      return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
    }
    function Me() {
      for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
        try {
          var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
          c = false;
        }
        if (c) a = b.contentWindow;
        else break;
        b = Xa(a.document);
      }
      return b;
    }
    function Ne(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
    }
    function Oe(a) {
      var b = Me(), c = a.focusedElem, d = a.selectionRange;
      if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
        if (null !== d && Ne(c)) {
          if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
          else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e = c.textContent.length, f = Math.min(d.start, e);
            d = void 0 === d.end ? f : Math.min(d.end, e);
            !a.extend && f > d && (e = d, d = f, f = e);
            e = Ke(c, f);
            var g = Ke(
              c,
              d
            );
            e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
          }
        }
        b = [];
        for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c.focus && c.focus();
        for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
    function Ue(a, b, c) {
      var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
      Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
    }
    function Ve(a, b) {
      var c = {};
      c[a.toLowerCase()] = b.toLowerCase();
      c["Webkit" + a] = "webkit" + b;
      c["Moz" + a] = "moz" + b;
      return c;
    }
    var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
    ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    function Ze(a) {
      if (Xe[a]) return Xe[a];
      if (!We[a]) return a;
      var b = We[a], c;
      for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
      return a;
    }
    var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a, b) {
      df.set(a, b);
      fa(b, [a]);
    }
    for (var gf = 0; gf < ef.length; gf++) {
      var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
      ff(jf, "on" + kf);
    }
    ff($e, "onAnimationEnd");
    ff(af, "onAnimationIteration");
    ff(bf, "onAnimationStart");
    ff("dblclick", "onDoubleClick");
    ff("focusin", "onFocus");
    ff("focusout", "onBlur");
    ff(cf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
    function nf(a, b, c) {
      var d = a.type || "unknown-event";
      a.currentTarget = c;
      Ub(d, b, void 0, a);
      a.currentTarget = null;
    }
    function se(a, b) {
      b = 0 !== (b & 4);
      for (var c = 0; c < a.length; c++) {
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
          var f = void 0;
          if (b) for (var g = d.length - 1; 0 <= g; g--) {
            var h = d[g], k = h.instance, l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            nf(e, h, l);
            f = k;
          }
          else for (g = 0; g < d.length; g++) {
            h = d[g];
            k = h.instance;
            l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            nf(e, h, l);
            f = k;
          }
        }
      }
      if (Qb) throw a = Rb, Qb = false, Rb = null, a;
    }
    function D(a, b) {
      var c = b[of];
      void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
      var d = a + "__bubble";
      c.has(d) || (pf(b, a, 2, false), c.add(d));
    }
    function qf(a, b, c) {
      var d = 0;
      b && (d |= 4);
      pf(c, a, d, b);
    }
    var rf = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(a) {
      if (!a[rf]) {
        a[rf] = true;
        da.forEach(function(b2) {
          "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
      }
    }
    function pf(a, b, c, d) {
      switch (jd(b)) {
        case 1:
          var e = ed;
          break;
        case 4:
          e = gd;
          break;
        default:
          e = fd;
      }
      c = e.bind(null, b, c, a);
      e = void 0;
      !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
      d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
    }
    function hd(a, b, c, d, e) {
      var f = d;
      if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e) break;
          if (4 === g) for (g = d.return; null !== g; ) {
            var k = g.tag;
            if (3 === k || 4 === k) {
              if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
            }
            g = g.return;
          }
          for (; null !== h; ) {
            g = Wc(h);
            if (null === g) return;
            k = g.tag;
            if (5 === k || 6 === k) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
      Jb(function() {
        var d2 = f, e2 = xb(c), g2 = [];
        a: {
          var h2 = df.get(a);
          if (void 0 !== h2) {
            var k2 = td, n = a;
            switch (a) {
              case "keypress":
                if (0 === od(c)) break a;
              case "keydown":
              case "keyup":
                k2 = Rd;
                break;
              case "focusin":
                n = "focus";
                k2 = Fd;
                break;
              case "focusout":
                n = "blur";
                k2 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k2 = Fd;
                break;
              case "click":
                if (2 === c.button) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k2 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k2 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k2 = Vd;
                break;
              case $e:
              case af:
              case bf:
                k2 = Hd;
                break;
              case cf:
                k2 = Xd;
                break;
              case "scroll":
                k2 = vd;
                break;
              case "wheel":
                k2 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k2 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k2 = Td;
            }
            var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
            t = [];
            for (var w = d2, u; null !== w; ) {
              u = w;
              var F = u.stateNode;
              5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
              if (J) break;
              w = w.return;
            }
            0 < t.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t }));
          }
        }
        if (0 === (b & 7)) {
          a: {
            h2 = "mouseover" === a || "pointerover" === a;
            k2 = "mouseout" === a || "pointerout" === a;
            if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
            if (k2 || h2) {
              h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
              if (k2) {
                if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
              } else k2 = null, n = d2;
              if (k2 !== n) {
                t = Bd;
                F = "onMouseLeave";
                x = "onMouseEnter";
                w = "mouse";
                if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                J = null == k2 ? h2 : ue(k2);
                u = null == n ? h2 : ue(n);
                h2 = new t(F, w + "leave", k2, c, e2);
                h2.target = J;
                h2.relatedTarget = u;
                F = null;
                Wc(e2) === d2 && (t = new t(x, w + "enter", n, c, e2), t.target = u, t.relatedTarget = J, F = t);
                J = F;
                if (k2 && n) b: {
                  t = k2;
                  x = n;
                  w = 0;
                  for (u = t; u; u = vf(u)) w++;
                  u = 0;
                  for (F = x; F; F = vf(F)) u++;
                  for (; 0 < w - u; ) t = vf(t), w--;
                  for (; 0 < u - w; ) x = vf(x), u--;
                  for (; w--; ) {
                    if (t === x || null !== x && t === x.alternate) break b;
                    t = vf(t);
                    x = vf(x);
                  }
                  t = null;
                }
                else t = null;
                null !== k2 && wf(g2, h2, k2, t, false);
                null !== n && null !== J && wf(g2, J, n, t, true);
              }
            }
          }
          a: {
            h2 = d2 ? ue(d2) : window;
            k2 = h2.nodeName && h2.nodeName.toLowerCase();
            if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
            else if (me(h2)) if (we) na = Fe;
            else {
              na = De;
              var xa = Ce;
            }
            else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
            if (na && (na = na(a, d2))) {
              ne(g2, na, c, e2);
              break a;
            }
            xa && xa(a, h2, d2);
            "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
          }
          xa = d2 ? ue(d2) : window;
          switch (a) {
            case "focusin":
              if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
              break;
            case "focusout":
              Se = Re = Qe = null;
              break;
            case "mousedown":
              Te = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te = false;
              Ue(g2, c, e2);
              break;
            case "selectionchange":
              if (Pe) break;
            case "keydown":
            case "keyup":
              Ue(g2, c, e2);
          }
          var $a;
          if (ae) b: {
            switch (a) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = void 0;
          }
          else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
          ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
          if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
        }
        se(g2, b);
      });
    }
    function tf(a, b, c) {
      return { instance: a, listener: b, currentTarget: c };
    }
    function oe(a, b) {
      for (var c = b + "Capture", d = []; null !== a; ) {
        var e = a, f = e.stateNode;
        5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
        a = a.return;
      }
      return d;
    }
    function vf(a) {
      if (null === a) return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function wf(a, b, c, d, e) {
      for (var f = b._reactName, g = []; null !== c && c !== d; ) {
        var h = c, k = h.alternate, l = h.stateNode;
        if (null !== k && k === d) break;
        5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
        c = c.return;
      }
      0 !== g.length && a.push({ event: b, listeners: g });
    }
    var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
    function zf(a) {
      return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
    }
    function Af(a, b, c) {
      b = zf(b);
      if (zf(a) !== b && c) throw Error(p(425));
    }
    function Bf() {
    }
    var Cf = null, Df = null;
    function Ef(a, b) {
      return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
      return Hf.resolve(null).then(a).catch(If);
    } : Ff;
    function If(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Kf(a, b) {
      var c = b, d = 0;
      do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
          if (0 === d) {
            a.removeChild(e);
            bd(b);
            return;
          }
          d--;
        } else "$" !== c && "$?" !== c && "$!" !== c || d++;
        c = e;
      } while (c);
      bd(b);
    }
    function Lf(a) {
      for (; null != a; a = a.nextSibling) {
        var b = a.nodeType;
        if (1 === b || 3 === b) break;
        if (8 === b) {
          b = a.data;
          if ("$" === b || "$!" === b || "$?" === b) break;
          if ("/$" === b) return null;
        }
      }
      return a;
    }
    function Mf(a) {
      a = a.previousSibling;
      for (var b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("$" === c || "$!" === c || "$?" === c) {
            if (0 === b) return a;
            b--;
          } else "/$" === c && b++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
    function Wc(a) {
      var b = a[Of];
      if (b) return b;
      for (var c = a.parentNode; c; ) {
        if (b = c[uf] || c[Of]) {
          c = b.alternate;
          if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
            if (c = a[Of]) return c;
            a = Mf(a);
          }
          return b;
        }
        a = c;
        c = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[Of] || a[uf];
      return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
    }
    function ue(a) {
      if (5 === a.tag || 6 === a.tag) return a.stateNode;
      throw Error(p(33));
    }
    function Db(a) {
      return a[Pf] || null;
    }
    var Sf = [], Tf = -1;
    function Uf(a) {
      return { current: a };
    }
    function E(a) {
      0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
    }
    function G(a, b) {
      Tf++;
      Sf[Tf] = a.current;
      a.current = b;
    }
    var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
    function Yf(a, b) {
      var c = a.type.contextTypes;
      if (!c) return Vf;
      var d = a.stateNode;
      if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
      var e = {}, f;
      for (f in c) e[f] = b[f];
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
      return e;
    }
    function Zf(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function $f() {
      E(Wf);
      E(H);
    }
    function ag(a, b, c) {
      if (H.current !== Vf) throw Error(p(168));
      G(H, b);
      G(Wf, c);
    }
    function bg(a, b, c) {
      var d = a.stateNode;
      b = b.childContextTypes;
      if ("function" !== typeof d.getChildContext) return c;
      d = d.getChildContext();
      for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
      return A({}, c, d);
    }
    function cg(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
      Xf = H.current;
      G(H, a);
      G(Wf, Wf.current);
      return true;
    }
    function dg(a, b, c) {
      var d = a.stateNode;
      if (!d) throw Error(p(169));
      c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
      G(Wf, c);
    }
    var eg = null, fg = false, gg = false;
    function hg(a) {
      null === eg ? eg = [a] : eg.push(a);
    }
    function ig(a) {
      fg = true;
      hg(a);
    }
    function jg() {
      if (!gg && null !== eg) {
        gg = true;
        var a = 0, b = C;
        try {
          var c = eg;
          for (C = 1; a < c.length; a++) {
            var d = c[a];
            do
              d = d(true);
            while (null !== d);
          }
          eg = null;
          fg = false;
        } catch (e) {
          throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
        } finally {
          C = b, gg = false;
        }
      }
      return null;
    }
    var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
    function tg(a, b) {
      kg[lg++] = ng;
      kg[lg++] = mg;
      mg = a;
      ng = b;
    }
    function ug(a, b, c) {
      og[pg++] = rg;
      og[pg++] = sg;
      og[pg++] = qg;
      qg = a;
      var d = rg;
      a = sg;
      var e = 32 - oc(d) - 1;
      d &= ~(1 << e);
      c += 1;
      var f = 32 - oc(b) + e;
      if (30 < f) {
        var g = e - e % 5;
        f = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        rg = 1 << 32 - oc(b) + e | c << e | d;
        sg = f + a;
      } else rg = 1 << f | c << e | d, sg = a;
    }
    function vg(a) {
      null !== a.return && (tg(a, 1), ug(a, 1, 0));
    }
    function wg(a) {
      for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null, yg = null, I = false, zg = null;
    function Ag(a, b) {
      var c = Bg(5, null, null, 0);
      c.elementType = "DELETED";
      c.stateNode = b;
      c.return = a;
      b = a.deletions;
      null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
    }
    function Cg(a, b) {
      switch (a.tag) {
        case 5:
          var c = a.type;
          b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
          return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
        case 6:
          return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
        case 13:
          return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
        default:
          return false;
      }
    }
    function Dg(a) {
      return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
    }
    function Eg(a) {
      if (I) {
        var b = yg;
        if (b) {
          var c = b;
          if (!Cg(a, b)) {
            if (Dg(a)) throw Error(p(418));
            b = Lf(c.nextSibling);
            var d = xg;
            b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
          }
        } else {
          if (Dg(a)) throw Error(p(418));
          a.flags = a.flags & -4097 | 2;
          I = false;
          xg = a;
        }
      }
    }
    function Fg(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
      xg = a;
    }
    function Gg(a) {
      if (a !== xg) return false;
      if (!I) return Fg(a), I = true, false;
      var b;
      (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
      if (b && (b = yg)) {
        if (Dg(a)) throw Hg(), Error(p(418));
        for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
      }
      Fg(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error(p(317));
        a: {
          a = a.nextSibling;
          for (b = 0; a; ) {
            if (8 === a.nodeType) {
              var c = a.data;
              if ("/$" === c) {
                if (0 === b) {
                  yg = Lf(a.nextSibling);
                  break a;
                }
                b--;
              } else "$" !== c && "$!" !== c && "$?" !== c || b++;
            }
            a = a.nextSibling;
          }
          yg = null;
        }
      } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a = yg; a; ) a = Lf(a.nextSibling);
    }
    function Ig() {
      yg = xg = null;
      I = false;
    }
    function Jg(a) {
      null === zg ? zg = [a] : zg.push(a);
    }
    var Kg = ua.ReactCurrentBatchConfig;
    function Lg(a, b, c) {
      a = c.ref;
      if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
          c = c._owner;
          if (c) {
            if (1 !== c.tag) throw Error(p(309));
            var d = c.stateNode;
          }
          if (!d) throw Error(p(147, a));
          var e = d, f = "" + a;
          if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
          b = function(a2) {
            var b2 = e.refs;
            null === a2 ? delete b2[f] : b2[f] = a2;
          };
          b._stringRef = f;
          return b;
        }
        if ("string" !== typeof a) throw Error(p(284));
        if (!c._owner) throw Error(p(290, a));
      }
      return a;
    }
    function Mg(a, b) {
      a = Object.prototype.toString.call(b);
      throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
    }
    function Ng(a) {
      var b = a._init;
      return b(a._payload);
    }
    function Og(a) {
      function b(b2, c2) {
        if (a) {
          var d2 = b2.deletions;
          null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
        }
      }
      function c(c2, d2) {
        if (!a) return null;
        for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
        return null;
      }
      function d(a2, b2) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
        return a2;
      }
      function e(a2, b2) {
        a2 = Pg(a2, b2);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f(b2, c2, d2) {
        b2.index = d2;
        if (!a) return b2.flags |= 1048576, c2;
        d2 = b2.alternate;
        if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
        b2.flags |= 2;
        return c2;
      }
      function g(b2) {
        a && null === b2.alternate && (b2.flags |= 2);
        return b2;
      }
      function h(a2, b2, c2, d2) {
        if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function k(a2, b2, c2, d2) {
        var f2 = c2.type;
        if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
        if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
        d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
        d2.ref = Lg(a2, b2, c2);
        d2.return = a2;
        return d2;
      }
      function l(a2, b2, c2, d2) {
        if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2.children || []);
        b2.return = a2;
        return b2;
      }
      function m(a2, b2, c2, d2, f2) {
        if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function q(a2, b2, c2) {
        if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
        if ("object" === typeof b2 && null !== b2) {
          switch (b2.$$typeof) {
            case va:
              return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
            case wa:
              return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
            case Ha:
              var d2 = b2._init;
              return q(a2, d2(b2._payload), c2);
          }
          if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
          Mg(a2, b2);
        }
        return null;
      }
      function r(a2, b2, c2, d2) {
        var e2 = null !== b2 ? b2.key : null;
        if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
        if ("object" === typeof c2 && null !== c2) {
          switch (c2.$$typeof) {
            case va:
              return c2.key === e2 ? k(a2, b2, c2, d2) : null;
            case wa:
              return c2.key === e2 ? l(a2, b2, c2, d2) : null;
            case Ha:
              return e2 = c2._init, r(
                a2,
                b2,
                e2(c2._payload),
                d2
              );
          }
          if (eb(c2) || Ka(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
          Mg(a2, c2);
        }
        return null;
      }
      function y(a2, b2, c2, d2, e2) {
        if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
        if ("object" === typeof d2 && null !== d2) {
          switch (d2.$$typeof) {
            case va:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
            case wa:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
            case Ha:
              var f2 = d2._init;
              return y(a2, b2, c2, f2(d2._payload), e2);
          }
          if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
          Mg(b2, d2);
        }
        return null;
      }
      function n(e2, g2, h2, k2) {
        for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
          u.index > w ? (x = u, u = null) : x = u.sibling;
          var n2 = r(e2, u, h2[w], k2);
          if (null === n2) {
            null === u && (u = x);
            break;
          }
          a && u && null === n2.alternate && b(e2, u);
          g2 = f(n2, g2, w);
          null === m2 ? l2 = n2 : m2.sibling = n2;
          m2 = n2;
          u = x;
        }
        if (w === h2.length) return c(e2, u), I && tg(e2, w), l2;
        if (null === u) {
          for (; w < h2.length; w++) u = q(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
          I && tg(e2, w);
          return l2;
        }
        for (u = d(e2, u); w < h2.length; w++) x = y(u, e2, w, h2[w], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
        a && u.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w);
        return l2;
      }
      function t(e2, g2, h2, k2) {
        var l2 = Ka(h2);
        if ("function" !== typeof l2) throw Error(p(150));
        h2 = l2.call(h2);
        if (null == h2) throw Error(p(151));
        for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
          m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
          var t2 = r(e2, m2, n2.value, k2);
          if (null === t2) {
            null === m2 && (m2 = x);
            break;
          }
          a && m2 && null === t2.alternate && b(e2, m2);
          g2 = f(t2, g2, w);
          null === u ? l2 = t2 : u.sibling = t2;
          u = t2;
          m2 = x;
        }
        if (n2.done) return c(
          e2,
          m2
        ), I && tg(e2, w), l2;
        if (null === m2) {
          for (; !n2.done; w++, n2 = h2.next()) n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
          I && tg(e2, w);
          return l2;
        }
        for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next()) n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
        a && m2.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w);
        return l2;
      }
      function J(a2, d2, f2, h2) {
        "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
        if ("object" === typeof f2 && null !== f2) {
          switch (f2.$$typeof) {
            case va:
              a: {
                for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                  if (l2.key === k2) {
                    k2 = f2.type;
                    if (k2 === ya) {
                      if (7 === l2.tag) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props.children);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                    } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                      c(a2, l2.sibling);
                      d2 = e(l2, f2.props);
                      d2.ref = Lg(a2, l2, f2);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    c(a2, l2);
                    break;
                  } else b(a2, l2);
                  l2 = l2.sibling;
                }
                f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
              }
              return g(a2);
            case wa:
              a: {
                for (l2 = f2.key; null !== d2; ) {
                  if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                    c(a2, d2.sibling);
                    d2 = e(d2, f2.children || []);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  } else {
                    c(a2, d2);
                    break;
                  }
                  else b(a2, d2);
                  d2 = d2.sibling;
                }
                d2 = Sg(f2, a2.mode, h2);
                d2.return = a2;
                a2 = d2;
              }
              return g(a2);
            case Ha:
              return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
          }
          if (eb(f2)) return n(a2, d2, f2, h2);
          if (Ka(f2)) return t(a2, d2, f2, h2);
          Mg(a2, f2);
        }
        return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
      }
      return J;
    }
    var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
    function $g() {
      Zg = Yg = Xg = null;
    }
    function ah(a) {
      var b = Wg.current;
      E(Wg);
      a._currentValue = b;
    }
    function bh(a, b, c) {
      for (; null !== a; ) {
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c) break;
        a = a.return;
      }
    }
    function ch(a, b) {
      Xg = a;
      Zg = Yg = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
    }
    function eh(a) {
      var b = a._currentValue;
      if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
        if (null === Xg) throw Error(p(308));
        Yg = a;
        Xg.dependencies = { lanes: 0, firstContext: a };
      } else Yg = Yg.next = a;
      return b;
    }
    var fh = null;
    function gh(a) {
      null === fh ? fh = [a] : fh.push(a);
    }
    function hh(a, b, c, d) {
      var e = b.interleaved;
      null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
      b.interleaved = c;
      return ih(a, d);
    }
    function ih(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      null !== c && (c.lanes |= b);
      c = a;
      for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
      return 3 === c.tag ? c.stateNode : null;
    }
    var jh = false;
    function kh(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function lh(a, b) {
      a = a.updateQueue;
      b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function mh(a, b) {
      return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
    }
    function nh(a, b, c) {
      var d = a.updateQueue;
      if (null === d) return null;
      d = d.shared;
      if (0 !== (K & 2)) {
        var e = d.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d.pending = b;
        return ih(a, c);
      }
      e = d.interleaved;
      null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
      d.interleaved = b;
      return ih(a, c);
    }
    function oh(a, b, c) {
      b = b.updateQueue;
      if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
      }
    }
    function ph(a, b) {
      var c = a.updateQueue, d = a.alternate;
      if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null, f = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
          do {
            var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
            null === f ? e = f = g : f = f.next = g;
            c = c.next;
          } while (null !== c);
          null === f ? e = f = b : f = f.next = b;
        } else e = f = b;
        c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
        a.updateQueue = c;
        return;
      }
      a = c.lastBaseUpdate;
      null === a ? c.firstBaseUpdate = b : a.next = b;
      c.lastBaseUpdate = b;
    }
    function qh(a, b, c, d) {
      var e = a.updateQueue;
      jh = false;
      var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
      if (null !== h) {
        e.shared.pending = null;
        var k = h, l = k.next;
        k.next = null;
        null === g ? f = l : g.next = l;
        g = k;
        var m = a.alternate;
        null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
      }
      if (null !== f) {
        var q = e.baseState;
        g = 0;
        m = l = k = null;
        h = f;
        do {
          var r = h.lane, y = h.eventTime;
          if ((d & r) === r) {
            null !== m && (m = m.next = {
              eventTime: y,
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            });
            a: {
              var n = a, t = h;
              r = b;
              y = c;
              switch (t.tag) {
                case 1:
                  n = t.payload;
                  if ("function" === typeof n) {
                    q = n.call(y, q, r);
                    break a;
                  }
                  q = n;
                  break a;
                case 3:
                  n.flags = n.flags & -65537 | 128;
                case 0:
                  n = t.payload;
                  r = "function" === typeof n ? n.call(y, q, r) : n;
                  if (null === r || void 0 === r) break a;
                  q = A({}, q, r);
                  break a;
                case 2:
                  jh = true;
              }
            }
            null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
          } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
          h = h.next;
          if (null === h) if (h = e.shared.pending, null === h) break;
          else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
        } while (1);
        null === m && (k = q);
        e.baseState = k;
        e.firstBaseUpdate = l;
        e.lastBaseUpdate = m;
        b = e.shared.interleaved;
        if (null !== b) {
          e = b;
          do
            g |= e.lane, e = e.next;
          while (e !== b);
        } else null === f && (e.shared.lanes = 0);
        rh |= g;
        a.lanes = g;
        a.memoizedState = q;
      }
    }
    function sh(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (null !== a) for (b = 0; b < a.length; b++) {
        var d = a[b], e = d.callback;
        if (null !== e) {
          d.callback = null;
          d = c;
          if ("function" !== typeof e) throw Error(p(191, e));
          e.call(d);
        }
      }
    }
    var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
    function xh(a) {
      if (a === th) throw Error(p(174));
      return a;
    }
    function yh(a, b) {
      G(wh, b);
      G(vh, a);
      G(uh, th);
      a = b.nodeType;
      switch (a) {
        case 9:
        case 11:
          b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
          break;
        default:
          a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
      }
      E(uh);
      G(uh, b);
    }
    function zh() {
      E(uh);
      E(vh);
      E(wh);
    }
    function Ah(a) {
      xh(wh.current);
      var b = xh(uh.current);
      var c = lb(b, a.type);
      b !== c && (G(vh, a), G(uh, c));
    }
    function Bh(a) {
      vh.current === a && (E(uh), E(vh));
    }
    var L = Uf(0);
    function Ch(a) {
      for (var b = a; null !== b; ) {
        if (13 === b.tag) {
          var c = b.memoizedState;
          if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
          if (0 !== (b.flags & 128)) return b;
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    var Dh = [];
    function Eh() {
      for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
      Dh.length = 0;
    }
    var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
    function P() {
      throw Error(p(321));
    }
    function Mh(a, b) {
      if (null === b) return false;
      for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
      return true;
    }
    function Nh(a, b, c, d, e, f) {
      Hh = f;
      M = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
      a = c(d, e);
      if (Jh) {
        f = 0;
        do {
          Jh = false;
          Kh = 0;
          if (25 <= f) throw Error(p(301));
          f += 1;
          O = N = null;
          b.updateQueue = null;
          Fh.current = Qh;
          a = c(d, e);
        } while (Jh);
      }
      Fh.current = Rh;
      b = null !== N && null !== N.next;
      Hh = 0;
      O = N = M = null;
      Ih = false;
      if (b) throw Error(p(300));
      return a;
    }
    function Sh() {
      var a = 0 !== Kh;
      Kh = 0;
      return a;
    }
    function Th() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
      return O;
    }
    function Uh() {
      if (null === N) {
        var a = M.alternate;
        a = null !== a ? a.memoizedState : null;
      } else a = N.next;
      var b = null === O ? M.memoizedState : O.next;
      if (null !== b) O = b, N = a;
      else {
        if (null === a) throw Error(p(310));
        N = a;
        a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
      }
      return O;
    }
    function Vh(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function Wh(a) {
      var b = Uh(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = N, e = d.baseQueue, f = c.pending;
      if (null !== f) {
        if (null !== e) {
          var g = e.next;
          e.next = f.next;
          f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
      }
      if (null !== e) {
        f = e.next;
        d = d.baseState;
        var h = g = null, k = null, l = f;
        do {
          var m = l.lane;
          if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
          else {
            var q = {
              lane: m,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null
            };
            null === k ? (h = k = q, g = d) : k = k.next = q;
            M.lanes |= m;
            rh |= m;
          }
          l = l.next;
        } while (null !== l && l !== f);
        null === k ? g = d : k.next = h;
        He(d, b.memoizedState) || (dh = true);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k;
        c.lastRenderedState = d;
      }
      a = c.interleaved;
      if (null !== a) {
        e = a;
        do
          f = e.lane, M.lanes |= f, rh |= f, e = e.next;
        while (e !== a);
      } else null === e && (c.lanes = 0);
      return [b.memoizedState, c.dispatch];
    }
    function Xh(a) {
      var b = Uh(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = c.dispatch, e = c.pending, f = b.memoizedState;
      if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do
          f = a(f, g.action), g = g.next;
        while (g !== e);
        He(f, b.memoizedState) || (dh = true);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
      }
      return [f, d];
    }
    function Yh() {
    }
    function Zh(a, b) {
      var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
      f && (d.memoizedState = e, dh = true);
      d = d.queue;
      $h(ai.bind(null, c, d, a), [a]);
      if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
        c.flags |= 2048;
        bi(9, ci.bind(null, c, d, e, b), void 0, null);
        if (null === Q) throw Error(p(349));
        0 !== (Hh & 30) || di(c, b, e);
      }
      return e;
    }
    function di(a, b, c) {
      a.flags |= 16384;
      a = { getSnapshot: b, value: c };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
    }
    function ci(a, b, c, d) {
      b.value = c;
      b.getSnapshot = d;
      ei(b) && fi(a);
    }
    function ai(a, b, c) {
      return c(function() {
        ei(b) && fi(a);
      });
    }
    function ei(a) {
      var b = a.getSnapshot;
      a = a.value;
      try {
        var c = b();
        return !He(a, c);
      } catch (d) {
        return true;
      }
    }
    function fi(a) {
      var b = ih(a, 1);
      null !== b && gi(b, a, 1, -1);
    }
    function hi(a) {
      var b = Th();
      "function" === typeof a && (a = a());
      b.memoizedState = b.baseState = a;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
      b.queue = a;
      a = a.dispatch = ii.bind(null, M, a);
      return [b.memoizedState, a];
    }
    function bi(a, b, c, d) {
      a = { tag: a, create: b, destroy: c, deps: d, next: null };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
      return a;
    }
    function ji() {
      return Uh().memoizedState;
    }
    function ki(a, b, c, d) {
      var e = Th();
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
    }
    function li(a, b, c, d) {
      var e = Uh();
      d = void 0 === d ? null : d;
      var f = void 0;
      if (null !== N) {
        var g = N.memoizedState;
        f = g.destroy;
        if (null !== d && Mh(d, g.deps)) {
          e.memoizedState = bi(b, c, f, d);
          return;
        }
      }
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, f, d);
    }
    function mi(a, b) {
      return ki(8390656, 8, a, b);
    }
    function $h(a, b) {
      return li(2048, 8, a, b);
    }
    function ni(a, b) {
      return li(4, 2, a, b);
    }
    function oi(a, b) {
      return li(4, 4, a, b);
    }
    function pi(a, b) {
      if ("function" === typeof b) return a = a(), b(a), function() {
        b(null);
      };
      if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
        b.current = null;
      };
    }
    function qi(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return li(4, 4, pi.bind(null, b, a), c);
    }
    function ri() {
    }
    function si(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1])) return d[0];
      c.memoizedState = [a, b];
      return a;
    }
    function ti(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1])) return d[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    }
    function ui(a, b, c) {
      if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
      He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
      return b;
    }
    function vi(a, b) {
      var c = C;
      C = 0 !== c && 4 > c ? c : 4;
      a(true);
      var d = Gh.transition;
      Gh.transition = {};
      try {
        a(false), b();
      } finally {
        C = c, Gh.transition = d;
      }
    }
    function wi() {
      return Uh().memoizedState;
    }
    function xi(a, b, c) {
      var d = yi(a);
      c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b, c);
      else if (c = hh(a, b, c, d), null !== c) {
        var e = R();
        gi(c, a, d, e);
        Bi(c, b, d);
      }
    }
    function ii(a, b, c) {
      var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b, e);
      else {
        var f = a.alternate;
        if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
          var g = b.lastRenderedState, h = f(g, c);
          e.hasEagerState = true;
          e.eagerState = h;
          if (He(h, g)) {
            var k = b.interleaved;
            null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
            b.interleaved = e;
            return;
          }
        } catch (l) {
        } finally {
        }
        c = hh(a, b, e, d);
        null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
      }
    }
    function zi(a) {
      var b = a.alternate;
      return a === M || null !== b && b === M;
    }
    function Ai(a, b) {
      Jh = Ih = true;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
    function Bi(a, b, c) {
      if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
      }
    }
    var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
      Th().memoizedState = [a, void 0 === b ? null : b];
      return a;
    }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return ki(
        4194308,
        4,
        pi.bind(null, b, a),
        c
      );
    }, useLayoutEffect: function(a, b) {
      return ki(4194308, 4, a, b);
    }, useInsertionEffect: function(a, b) {
      return ki(4, 2, a, b);
    }, useMemo: function(a, b) {
      var c = Th();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    }, useReducer: function(a, b, c) {
      var d = Th();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
      d.queue = a;
      a = a.dispatch = xi.bind(null, M, a);
      return [d.memoizedState, a];
    }, useRef: function(a) {
      var b = Th();
      a = { current: a };
      return b.memoizedState = a;
    }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
      return Th().memoizedState = a;
    }, useTransition: function() {
      var a = hi(false), b = a[0];
      a = vi.bind(null, a[1]);
      Th().memoizedState = a;
      return [b, a];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a, b, c) {
      var d = M, e = Th();
      if (I) {
        if (void 0 === c) throw Error(p(407));
        c = c();
      } else {
        c = b();
        if (null === Q) throw Error(p(349));
        0 !== (Hh & 30) || di(d, b, c);
      }
      e.memoizedState = c;
      var f = { value: c, getSnapshot: b };
      e.queue = f;
      mi(ai.bind(
        null,
        d,
        f,
        a
      ), [a]);
      d.flags |= 2048;
      bi(9, ci.bind(null, d, f, c, b), void 0, null);
      return c;
    }, useId: function() {
      var a = Th(), b = Q.identifierPrefix;
      if (I) {
        var c = sg;
        var d = rg;
        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
        b = ":" + b + "R" + c;
        c = Kh++;
        0 < c && (b += "H" + c.toString(32));
        b += ":";
      } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
      return a.memoizedState = b;
    }, unstable_isNewReconciler: false }, Ph = {
      readContext: eh,
      useCallback: si,
      useContext: eh,
      useEffect: $h,
      useImperativeHandle: qi,
      useInsertionEffect: ni,
      useLayoutEffect: oi,
      useMemo: ti,
      useReducer: Wh,
      useRef: ji,
      useState: function() {
        return Wh(Vh);
      },
      useDebugValue: ri,
      useDeferredValue: function(a) {
        var b = Uh();
        return ui(b, N.memoizedState, a);
      },
      useTransition: function() {
        var a = Wh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      },
      useMutableSource: Yh,
      useSyncExternalStore: Zh,
      useId: wi,
      unstable_isNewReconciler: false
    }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
      return Xh(Vh);
    }, useDebugValue: ri, useDeferredValue: function(a) {
      var b = Uh();
      return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
    }, useTransition: function() {
      var a = Xh(Vh)[0], b = Uh().memoizedState;
      return [a, b];
    }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
    function Ci(a, b) {
      if (a && a.defaultProps) {
        b = A({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Di(a, b, c, d) {
      b = a.memoizedState;
      c = c(d, b);
      c = null === c || void 0 === c ? b : A({}, b, c);
      a.memoizedState = c;
      0 === a.lanes && (a.updateQueue.baseState = c);
    }
    var Ei = { isMounted: function(a) {
      return (a = a._reactInternals) ? Vb(a) === a : false;
    }, enqueueSetState: function(a, b, c) {
      a = a._reactInternals;
      var d = R(), e = yi(a), f = mh(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = nh(a, f, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    }, enqueueReplaceState: function(a, b, c) {
      a = a._reactInternals;
      var d = R(), e = yi(a), f = mh(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = nh(a, f, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    }, enqueueForceUpdate: function(a, b) {
      a = a._reactInternals;
      var c = R(), d = yi(a), e = mh(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      b = nh(a, e, d);
      null !== b && (gi(b, a, d, c), oh(b, a, d));
    } };
    function Fi(a, b, c, d, e, f, g) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
    }
    function Gi(a, b, c) {
      var d = false, e = Vf;
      var f = b.contextType;
      "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
      b = new b(c, f);
      a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
      b.updater = Ei;
      a.stateNode = b;
      b._reactInternals = a;
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
      return b;
    }
    function Hi(a, b, c, d) {
      a = b.state;
      "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
      "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
      b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
    }
    function Ii(a, b, c, d) {
      var e = a.stateNode;
      e.props = c;
      e.state = a.memoizedState;
      e.refs = {};
      kh(a);
      var f = b.contextType;
      "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
      e.state = a.memoizedState;
      f = b.getDerivedStateFromProps;
      "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
      "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
      "function" === typeof e.componentDidMount && (a.flags |= 4194308);
    }
    function Ji(a, b) {
      try {
        var c = "", d = b;
        do
          c += Pa(d), d = d.return;
        while (d);
        var e = c;
      } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
      }
      return { value: a, source: b, stack: e, digest: null };
    }
    function Ki(a, b, c) {
      return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
    }
    function Li(a, b) {
      try {
        console.error(b.value);
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    var Mi = "function" === typeof WeakMap ? WeakMap : Map;
    function Ni(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      c.payload = { element: null };
      var d = b.value;
      c.callback = function() {
        Oi || (Oi = true, Pi = d);
        Li(a, b);
      };
      return c;
    }
    function Qi(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      var d = a.type.getDerivedStateFromError;
      if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
          return d(e);
        };
        c.callback = function() {
          Li(a, b);
        };
      }
      var f = a.stateNode;
      null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
        Li(a, b);
        "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
        var c2 = b.stack;
        this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
      });
      return c;
    }
    function Si(a, b, c) {
      var d = a.pingCache;
      if (null === d) {
        d = a.pingCache = new Mi();
        var e = /* @__PURE__ */ new Set();
        d.set(b, e);
      } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
      e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
    }
    function Ui(a) {
      do {
        var b;
        if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
        if (b) return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function Vi(a, b, c, d, e) {
      if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e;
      return a;
    }
    var Wi = ua.ReactCurrentOwner, dh = false;
    function Xi(a, b, c, d) {
      b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
    }
    function Yi(a, b, c, d, e) {
      c = c.render;
      var f = b.ref;
      ch(b, e);
      d = Nh(a, b, c, d, f, e);
      c = Sh();
      if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && c && vg(b);
      b.flags |= 1;
      Xi(a, b, d, e);
      return b.child;
    }
    function $i(a, b, c, d, e) {
      if (null === a) {
        var f = c.type;
        if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
        a = Rg(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      f = a.child;
      if (0 === (a.lanes & e)) {
        var g = f.memoizedProps;
        c = c.compare;
        c = null !== c ? c : Ie;
        if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
      }
      b.flags |= 1;
      a = Pg(f, d);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    function bj(a, b, c, d, e) {
      if (null !== a) {
        var f = a.memoizedProps;
        if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
        else return b.lanes = a.lanes, Zi(a, b, e);
      }
      return cj(a, b, c, d, e);
    }
    function dj(a, b, c) {
      var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
      if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
      else {
        if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d = null !== f ? f.baseLanes : c;
        G(ej, fj);
        fj |= d;
      }
      else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
      Xi(a, b, e, c);
      return b.child;
    }
    function gj(a, b) {
      var c = b.ref;
      if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
    }
    function cj(a, b, c, d, e) {
      var f = Zf(c) ? Xf : H.current;
      f = Yf(b, f);
      ch(b, e);
      c = Nh(a, b, c, d, f, e);
      d = Sh();
      if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && d && vg(b);
      b.flags |= 1;
      Xi(a, b, c, e);
      return b.child;
    }
    function hj(a, b, c, d, e) {
      if (Zf(c)) {
        var f = true;
        cg(b);
      } else f = false;
      ch(b, e);
      if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
      else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
        var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
        q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
        jh = false;
        var r = b.memoizedState;
        g.state = r;
        qh(b, d, g, e);
        k = b.memoizedState;
        h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
      } else {
        g = b.stateNode;
        lh(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : Ci(b.type, h);
        g.props = l;
        q = b.pendingProps;
        r = g.context;
        k = c.contextType;
        "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
        var y = c.getDerivedStateFromProps;
        (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
        jh = false;
        r = b.memoizedState;
        g.state = r;
        qh(b, d, g, e);
        var n = b.memoizedState;
        h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
      }
      return jj(a, b, c, d, f, e);
    }
    function jj(a, b, c, d, e, f) {
      gj(a, b);
      var g = 0 !== (b.flags & 128);
      if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
      d = b.stateNode;
      Wi.current = b;
      var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
      b.flags |= 1;
      null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
      b.memoizedState = d.state;
      e && dg(b, c, true);
      return b.child;
    }
    function kj(a) {
      var b = a.stateNode;
      b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
      yh(a, b.containerInfo);
    }
    function lj(a, b, c, d, e) {
      Ig();
      Jg(e);
      b.flags |= 256;
      Xi(a, b, c, d);
      return b.child;
    }
    var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function nj(a) {
      return { baseLanes: a, cachePool: null, transitions: null };
    }
    function oj(a, b, c) {
      var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
      (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
      if (h) f = true, b.flags &= -129;
      else if (null === a || null !== a.memoizedState) e |= 1;
      G(L, e & 1);
      if (null === a) {
        Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
      }
      e = a.memoizedState;
      if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
      if (f) {
        f = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k = { mode: "hidden", children: d.children };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
        f.return = b;
        d.return = b;
        d.sibling = f;
        b.child = d;
        d = f;
        f = b.child;
        g = a.child.memoizedState;
        g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
        f.memoizedState = g;
        f.childLanes = a.childLanes & ~c;
        b.memoizedState = mj;
        return d;
      }
      f = a.child;
      a = f.sibling;
      d = Pg(f, { mode: "visible", children: d.children });
      0 === (b.mode & 1) && (d.lanes = c);
      d.return = b;
      d.sibling = null;
      null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
      b.child = d;
      b.memoizedState = null;
      return d;
    }
    function qj(a, b) {
      b = pj({ mode: "visible", children: b }, a.mode, 0, null);
      b.return = a;
      return a.child = b;
    }
    function sj(a, b, c, d) {
      null !== d && Jg(d);
      Ug(b, a.child, null, c);
      a = qj(b, b.pendingProps.children);
      a.flags |= 2;
      b.memoizedState = null;
      return a;
    }
    function rj(a, b, c, d, e, f, g) {
      if (c) {
        if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
        if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
        f = d.fallback;
        e = b.mode;
        d = pj({ mode: "visible", children: d.children }, e, 0, null);
        f = Tg(f, e, g, null);
        f.flags |= 2;
        d.return = b;
        f.return = b;
        d.sibling = f;
        b.child = d;
        0 !== (b.mode & 1) && Ug(b, a.child, null, g);
        b.child.memoizedState = nj(g);
        b.memoizedState = mj;
        return f;
      }
      if (0 === (b.mode & 1)) return sj(a, b, g, null);
      if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d) var h = d.dgst;
        d = h;
        f = Error(p(419));
        d = Ki(f, d, void 0);
        return sj(a, b, g, d);
      }
      h = 0 !== (g & a.childLanes);
      if (dh || h) {
        d = Q;
        if (null !== d) {
          switch (g & -g) {
            case 4:
              e = 2;
              break;
            case 16:
              e = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              e = 32;
              break;
            case 536870912:
              e = 268435456;
              break;
            default:
              e = 0;
          }
          e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
          0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
        }
        tj();
        d = Ki(Error(p(421)));
        return sj(a, b, g, d);
      }
      if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
      a = f.treeContext;
      yg = Lf(e.nextSibling);
      xg = b;
      I = true;
      zg = null;
      null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
      b = qj(b, d.children);
      b.flags |= 4096;
      return b;
    }
    function vj(a, b, c) {
      a.lanes |= b;
      var d = a.alternate;
      null !== d && (d.lanes |= b);
      bh(a.return, b, c);
    }
    function wj(a, b, c, d, e) {
      var f = a.memoizedState;
      null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
    }
    function xj(a, b, c) {
      var d = b.pendingProps, e = d.revealOrder, f = d.tail;
      Xi(a, b, d.children, c);
      d = L.current;
      if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
          if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
          else if (19 === a.tag) vj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b) break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b) break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
        d &= 1;
      }
      G(L, d);
      if (0 === (b.mode & 1)) b.memoizedState = null;
      else switch (e) {
        case "forwards":
          c = b.child;
          for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
          c = e;
          null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          wj(b, false, e, c, f);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null; null !== e; ) {
            a = e.alternate;
            if (null !== a && null === Ch(a)) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          wj(b, true, c, null, f);
          break;
        case "together":
          wj(b, false, null, null, void 0);
          break;
        default:
          b.memoizedState = null;
      }
      return b.child;
    }
    function ij(a, b) {
      0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
    }
    function Zi(a, b, c) {
      null !== a && (b.dependencies = a.dependencies);
      rh |= b.lanes;
      if (0 === (c & b.childLanes)) return null;
      if (null !== a && b.child !== a.child) throw Error(p(153));
      if (null !== b.child) {
        a = b.child;
        c = Pg(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
        c.sibling = null;
      }
      return b.child;
    }
    function yj(a, b, c) {
      switch (b.tag) {
        case 3:
          kj(b);
          Ig();
          break;
        case 5:
          Ah(b);
          break;
        case 1:
          Zf(b.type) && cg(b);
          break;
        case 4:
          yh(b, b.stateNode.containerInfo);
          break;
        case 10:
          var d = b.type._context, e = b.memoizedProps.value;
          G(Wg, d._currentValue);
          d._currentValue = e;
          break;
        case 13:
          d = b.memoizedState;
          if (null !== d) {
            if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
            if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
            G(L, L.current & 1);
            a = Zi(a, b, c);
            return null !== a ? a.sibling : null;
          }
          G(L, L.current & 1);
          break;
        case 19:
          d = 0 !== (c & b.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d) return xj(a, b, c);
            b.flags |= 128;
          }
          e = b.memoizedState;
          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
          G(L, L.current);
          if (d) break;
          else return null;
        case 22:
        case 23:
          return b.lanes = 0, dj(a, b, c);
      }
      return Zi(a, b, c);
    }
    var zj, Aj, Bj, Cj;
    zj = function(a, b) {
      for (var c = b.child; null !== c; ) {
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b) break;
        for (; null === c.sibling; ) {
          if (null === c.return || c.return === b) return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    };
    Aj = function() {
    };
    Bj = function(a, b, c, d) {
      var e = a.memoizedProps;
      if (e !== d) {
        a = b.stateNode;
        xh(uh.current);
        var f = null;
        switch (c) {
          case "input":
            e = Ya(a, e);
            d = Ya(a, d);
            f = [];
            break;
          case "select":
            e = A({}, e, { value: void 0 });
            d = A({}, d, { value: void 0 });
            f = [];
            break;
          case "textarea":
            e = gb(a, e);
            d = gb(a, d);
            f = [];
            break;
          default:
            "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
        }
        ub(c, d);
        var g;
        c = null;
        for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
          var h = e[l];
          for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
        for (l in d) {
          var k = d[l];
          h = null != e ? e[l] : void 0;
          if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
            for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else c || (f || (f = []), f.push(
            l,
            c
          )), c = k;
          else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l) b.flags |= 4;
      }
    };
    Cj = function(a, b, c, d) {
      c !== d && (b.flags |= 4);
    };
    function Dj(a, b) {
      if (!I) switch (a.tailMode) {
        case "hidden":
          b = a.tail;
          for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
          null === c ? a.tail = null : c.sibling = null;
          break;
        case "collapsed":
          c = a.tail;
          for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
          null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
      }
    }
    function S(a) {
      var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
      if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
      else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
      a.subtreeFlags |= d;
      a.childLanes = c;
      return b;
    }
    function Ej(a, b, c) {
      var d = b.pendingProps;
      wg(b);
      switch (b.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return S(b), null;
        case 1:
          return Zf(b.type) && $f(), S(b), null;
        case 3:
          d = b.stateNode;
          zh();
          E(Wf);
          E(H);
          Eh();
          d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
          if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
          Aj(a, b);
          S(b);
          return null;
        case 5:
          Bh(b);
          var e = xh(wh.current);
          c = b.type;
          if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          else {
            if (!d) {
              if (null === b.stateNode) throw Error(p(166));
              S(b);
              return null;
            }
            a = xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.type;
              var f = b.memoizedProps;
              d[Of] = b;
              d[Pf] = f;
              a = 0 !== (b.mode & 1);
              switch (c) {
                case "dialog":
                  D("cancel", d);
                  D("close", d);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", d);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D(lf[e], d);
                  break;
                case "source":
                  D("error", d);
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    d
                  );
                  D("load", d);
                  break;
                case "details":
                  D("toggle", d);
                  break;
                case "input":
                  Za(d, f);
                  D("invalid", d);
                  break;
                case "select":
                  d._wrapperState = { wasMultiple: !!f.multiple };
                  D("invalid", d);
                  break;
                case "textarea":
                  hb(d, f), D("invalid", d);
              }
              ub(c, f);
              e = null;
              for (var g in f) if (f.hasOwnProperty(g)) {
                var h = f[g];
                "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                  d.textContent,
                  h,
                  a
                ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
              }
              switch (c) {
                case "input":
                  Va(d);
                  db(d, f, true);
                  break;
                case "textarea":
                  Va(d);
                  jb(d);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f.onClick && (d.onclick = Bf);
              }
              d = e;
              b.updateQueue = d;
              null !== d && (b.flags |= 4);
            } else {
              g = 9 === e.nodeType ? e : e.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
              "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
              a[Of] = b;
              a[Pf] = d;
              zj(a, b, false, false);
              b.stateNode = a;
              a: {
                g = vb(c, d);
                switch (c) {
                  case "dialog":
                    D("cancel", a);
                    D("close", a);
                    e = d;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", a);
                    e = d;
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++) D(lf[e], a);
                    e = d;
                    break;
                  case "source":
                    D("error", a);
                    e = d;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      a
                    );
                    D("load", a);
                    e = d;
                    break;
                  case "details":
                    D("toggle", a);
                    e = d;
                    break;
                  case "input":
                    Za(a, d);
                    e = Ya(a, d);
                    D("invalid", a);
                    break;
                  case "option":
                    e = d;
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d.multiple };
                    e = A({}, d, { value: void 0 });
                    D("invalid", a);
                    break;
                  case "textarea":
                    hb(a, d);
                    e = gb(a, d);
                    D("invalid", a);
                    break;
                  default:
                    e = d;
                }
                ub(c, e);
                h = e;
                for (f in h) if (h.hasOwnProperty(f)) {
                  var k = h[f];
                  "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                }
                switch (c) {
                  case "input":
                    Va(a);
                    db(a, d, false);
                    break;
                  case "textarea":
                    Va(a);
                    jb(a);
                    break;
                  case "option":
                    null != d.value && a.setAttribute("value", "" + Sa(d.value));
                    break;
                  case "select":
                    a.multiple = !!d.multiple;
                    f = d.value;
                    null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                      a,
                      !!d.multiple,
                      d.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e.onClick && (a.onclick = Bf);
                }
                switch (c) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d = !!d.autoFocus;
                    break a;
                  case "img":
                    d = true;
                    break a;
                  default:
                    d = false;
                }
              }
              d && (b.flags |= 4);
            }
            null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          }
          S(b);
          return null;
        case 6:
          if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
          else {
            if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
            c = xh(wh.current);
            xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.memoizedProps;
              d[Of] = b;
              if (f = d.nodeValue !== c) {
                if (a = xg, null !== a) switch (a.tag) {
                  case 3:
                    Af(d.nodeValue, c, 0 !== (a.mode & 1));
                    break;
                  case 5:
                    true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                }
              }
              f && (b.flags |= 4);
            } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
          }
          S(b);
          return null;
        case 13:
          E(L);
          d = b.memoizedState;
          if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
            if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
            else if (f = Gg(b), null !== d && null !== d.dehydrated) {
              if (null === a) {
                if (!f) throw Error(p(318));
                f = b.memoizedState;
                f = null !== f ? f.dehydrated : null;
                if (!f) throw Error(p(317));
                f[Of] = b;
              } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
              S(b);
              f = false;
            } else null !== zg && (Fj(zg), zg = null), f = true;
            if (!f) return b.flags & 65536 ? b : null;
          }
          if (0 !== (b.flags & 128)) return b.lanes = c, b;
          d = null !== d;
          d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
          null !== b.updateQueue && (b.flags |= 4);
          S(b);
          return null;
        case 4:
          return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
        case 10:
          return ah(b.type._context), S(b), null;
        case 17:
          return Zf(b.type) && $f(), S(b), null;
        case 19:
          E(L);
          f = b.memoizedState;
          if (null === f) return S(b), null;
          d = 0 !== (b.flags & 128);
          g = f.rendering;
          if (null === g) if (d) Dj(f, false);
          else {
            if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
              g = Ch(a);
              if (null !== g) {
                b.flags |= 128;
                Dj(f, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(L, L.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
            null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
          }
          else {
            if (!d) if (a = Ch(g), null !== a) {
              if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
            } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
            f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
          }
          if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
          S(b);
          return null;
        case 22:
        case 23:
          return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p(156, b.tag));
    }
    function Ij(a, b) {
      wg(b);
      switch (b.tag) {
        case 1:
          return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
          return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
          return Bh(b), null;
        case 13:
          E(L);
          a = b.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            if (null === b.alternate) throw Error(p(340));
            Ig();
          }
          a = b.flags;
          return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
          return E(L), null;
        case 4:
          return zh(), null;
        case 10:
          return ah(b.type._context), null;
        case 22:
        case 23:
          return Hj(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
    function Lj(a, b) {
      var c = a.ref;
      if (null !== c) if ("function" === typeof c) try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
      else c.current = null;
    }
    function Mj(a, b, c) {
      try {
        c();
      } catch (d) {
        W(a, b, d);
      }
    }
    var Nj = false;
    function Oj(a, b) {
      Cf = dd;
      a = Me();
      if (Ne(a)) {
        if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
        else a: {
          c = (c = a.ownerDocument) && c.defaultView || window;
          var d = c.getSelection && c.getSelection();
          if (d && 0 !== d.rangeCount) {
            c = d.anchorNode;
            var e = d.anchorOffset, f = d.focusNode;
            d = d.focusOffset;
            try {
              c.nodeType, f.nodeType;
            } catch (F) {
              c = null;
              break a;
            }
            var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
            b: for (; ; ) {
              for (var y; ; ) {
                q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                3 === q.nodeType && (g += q.nodeValue.length);
                if (null === (y = q.firstChild)) break;
                r = q;
                q = y;
              }
              for (; ; ) {
                if (q === a) break b;
                r === c && ++l === e && (h = g);
                r === f && ++m === d && (k = g);
                if (null !== (y = q.nextSibling)) break;
                q = r;
                r = q.parentNode;
              }
              q = y;
            }
            c = -1 === h || -1 === k ? null : { start: h, end: k };
          } else c = null;
        }
        c = c || { start: 0, end: 0 };
      } else c = null;
      Df = { focusedElem: a, selectionRange: c };
      dd = false;
      for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
      else for (; null !== V; ) {
        b = V;
        try {
          var n = b.alternate;
          if (0 !== (b.flags & 1024)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (null !== n) {
                var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
                x.__reactInternalSnapshotBeforeUpdate = w;
              }
              break;
            case 3:
              var u = b.stateNode.containerInfo;
              1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(p(163));
          }
        } catch (F) {
          W(b, b.return, F);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
      n = Nj;
      Nj = false;
      return n;
    }
    function Pj(a, b, c) {
      var d = b.updateQueue;
      d = null !== d ? d.lastEffect : null;
      if (null !== d) {
        var e = d = d.next;
        do {
          if ((e.tag & a) === a) {
            var f = e.destroy;
            e.destroy = void 0;
            void 0 !== f && Mj(b, c, f);
          }
          e = e.next;
        } while (e !== d);
      }
    }
    function Qj(a, b) {
      b = b.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        var c = b = b.next;
        do {
          if ((c.tag & a) === a) {
            var d = c.create;
            c.destroy = d();
          }
          c = c.next;
        } while (c !== b);
      }
    }
    function Rj(a) {
      var b = a.ref;
      if (null !== b) {
        var c = a.stateNode;
        switch (a.tag) {
          case 5:
            a = c;
            break;
          default:
            a = c;
        }
        "function" === typeof b ? b(a) : b.current = a;
      }
    }
    function Sj(a) {
      var b = a.alternate;
      null !== b && (a.alternate = null, Sj(b));
      a.child = null;
      a.deletions = null;
      a.sibling = null;
      5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
      a.stateNode = null;
      a.return = null;
      a.dependencies = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.stateNode = null;
      a.updateQueue = null;
    }
    function Tj(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Uj(a) {
      a: for (; ; ) {
        for (; null === a.sibling; ) {
          if (null === a.return || Tj(a.return)) return null;
          a = a.return;
        }
        a.sibling.return = a.return;
        for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
          if (a.flags & 2) continue a;
          if (null === a.child || 4 === a.tag) continue a;
          else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
      }
    }
    function Vj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
      else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
    }
    function Wj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
      else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
    }
    var X = null, Xj = false;
    function Yj(a, b, c) {
      for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
    }
    function Zj(a, b, c) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
        lc.onCommitFiberUnmount(kc, c);
      } catch (h) {
      }
      switch (c.tag) {
        case 5:
          U || Lj(c, b);
        case 6:
          var d = X, e = Xj;
          X = null;
          Yj(a, b, c);
          X = d;
          Xj = e;
          null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
          break;
        case 18:
          null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
          break;
        case 4:
          d = X;
          e = Xj;
          X = c.stateNode.containerInfo;
          Xj = true;
          Yj(a, b, c);
          X = d;
          Xj = e;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
            e = d = d.next;
            do {
              var f = e, g = f.destroy;
              f = f.tag;
              void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
              e = e.next;
            } while (e !== d);
          }
          Yj(a, b, c);
          break;
        case 1:
          if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
            d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
          } catch (h) {
            W(c, b, h);
          }
          Yj(a, b, c);
          break;
        case 21:
          Yj(a, b, c);
          break;
        case 22:
          c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
          break;
        default:
          Yj(a, b, c);
      }
    }
    function ak(a) {
      var b = a.updateQueue;
      if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new Kj());
        b.forEach(function(b2) {
          var d = bk.bind(null, a, b2);
          c.has(b2) || (c.add(b2), b2.then(d, d));
        });
      }
    }
    function ck(a, b) {
      var c = b.deletions;
      if (null !== c) for (var d = 0; d < c.length; d++) {
        var e = c[d];
        try {
          var f = a, g = b, h = g;
          a: for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X = h.stateNode;
                Xj = false;
                break a;
              case 3:
                X = h.stateNode.containerInfo;
                Xj = true;
                break a;
              case 4:
                X = h.stateNode.containerInfo;
                Xj = true;
                break a;
            }
            h = h.return;
          }
          if (null === X) throw Error(p(160));
          Zj(f, g, e);
          X = null;
          Xj = false;
          var k = e.alternate;
          null !== k && (k.return = null);
          e.return = null;
        } catch (l) {
          W(e, b, l);
        }
      }
      if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
    }
    function dk(a, b) {
      var c = a.alternate, d = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ck(b, a);
          ek(a);
          if (d & 4) {
            try {
              Pj(3, a, a.return), Qj(3, a);
            } catch (t) {
              W(a, a.return, t);
            }
            try {
              Pj(5, a, a.return);
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 1:
          ck(b, a);
          ek(a);
          d & 512 && null !== c && Lj(c, c.return);
          break;
        case 5:
          ck(b, a);
          ek(a);
          d & 512 && null !== c && Lj(c, c.return);
          if (a.flags & 32) {
            var e = a.stateNode;
            try {
              ob(e, "");
            } catch (t) {
              W(a, a.return, t);
            }
          }
          if (d & 4 && (e = a.stateNode, null != e)) {
            var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
            a.updateQueue = null;
            if (null !== k) try {
              "input" === h && "radio" === f.type && null != f.name && ab(e, f);
              vb(h, g);
              var l = vb(h, f);
              for (g = 0; g < k.length; g += 2) {
                var m = k[g], q = k[g + 1];
                "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
              }
              switch (h) {
                case "input":
                  bb(e, f);
                  break;
                case "textarea":
                  ib(e, f);
                  break;
                case "select":
                  var r = e._wrapperState.wasMultiple;
                  e._wrapperState.wasMultiple = !!f.multiple;
                  var y = f.value;
                  null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                    e,
                    !!f.multiple,
                    f.defaultValue,
                    true
                  ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
              }
              e[Pf] = f;
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 6:
          ck(b, a);
          ek(a);
          if (d & 4) {
            if (null === a.stateNode) throw Error(p(162));
            e = a.stateNode;
            f = a.memoizedProps;
            try {
              e.nodeValue = f;
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 3:
          ck(b, a);
          ek(a);
          if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
            bd(b.containerInfo);
          } catch (t) {
            W(a, a.return, t);
          }
          break;
        case 4:
          ck(b, a);
          ek(a);
          break;
        case 13:
          ck(b, a);
          ek(a);
          e = a.child;
          e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
          d & 4 && ak(a);
          break;
        case 22:
          m = null !== c && null !== c.memoizedState;
          a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
          ek(a);
          if (d & 8192) {
            l = null !== a.memoizedState;
            if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
              for (q = V = m; null !== V; ) {
                r = V;
                y = r.child;
                switch (r.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pj(4, r, r.return);
                    break;
                  case 1:
                    Lj(r, r.return);
                    var n = r.stateNode;
                    if ("function" === typeof n.componentWillUnmount) {
                      d = r;
                      c = r.return;
                      try {
                        b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                      } catch (t) {
                        W(d, c, t);
                      }
                    }
                    break;
                  case 5:
                    Lj(r, r.return);
                    break;
                  case 22:
                    if (null !== r.memoizedState) {
                      gk(q);
                      continue;
                    }
                }
                null !== y ? (y.return = r, V = y) : gk(q);
              }
              m = m.sibling;
            }
            a: for (m = null, q = a; ; ) {
              if (5 === q.tag) {
                if (null === m) {
                  m = q;
                  try {
                    e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                  } catch (t) {
                    W(a, a.return, t);
                  }
                }
              } else if (6 === q.tag) {
                if (null === m) try {
                  q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                } catch (t) {
                  W(a, a.return, t);
                }
              } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                q.child.return = q;
                q = q.child;
                continue;
              }
              if (q === a) break a;
              for (; null === q.sibling; ) {
                if (null === q.return || q.return === a) break a;
                m === q && (m = null);
                q = q.return;
              }
              m === q && (m = null);
              q.sibling.return = q.return;
              q = q.sibling;
            }
          }
          break;
        case 19:
          ck(b, a);
          ek(a);
          d & 4 && ak(a);
          break;
        case 21:
          break;
        default:
          ck(
            b,
            a
          ), ek(a);
      }
    }
    function ek(a) {
      var b = a.flags;
      if (b & 2) {
        try {
          a: {
            for (var c = a.return; null !== c; ) {
              if (Tj(c)) {
                var d = c;
                break a;
              }
              c = c.return;
            }
            throw Error(p(160));
          }
          switch (d.tag) {
            case 5:
              var e = d.stateNode;
              d.flags & 32 && (ob(e, ""), d.flags &= -33);
              var f = Uj(a);
              Wj(a, f, e);
              break;
            case 3:
            case 4:
              var g = d.stateNode.containerInfo, h = Uj(a);
              Vj(a, h, g);
              break;
            default:
              throw Error(p(161));
          }
        } catch (k) {
          W(a, a.return, k);
        }
        a.flags &= -3;
      }
      b & 4096 && (a.flags &= -4097);
    }
    function hk(a, b, c) {
      V = a;
      ik(a);
    }
    function ik(a, b, c) {
      for (var d = 0 !== (a.mode & 1); null !== V; ) {
        var e = V, f = e.child;
        if (22 === e.tag && d) {
          var g = null !== e.memoizedState || Jj;
          if (!g) {
            var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
            h = Jj;
            var l = U;
            Jj = g;
            if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
            for (; null !== f; ) V = f, ik(f), f = f.sibling;
            V = e;
            Jj = h;
            U = l;
          }
          kk(a);
        } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a);
      }
    }
    function kk(a) {
      for (; null !== V; ) {
        var b = V;
        if (0 !== (b.flags & 8772)) {
          var c = b.alternate;
          try {
            if (0 !== (b.flags & 8772)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                U || Qj(5, b);
                break;
              case 1:
                var d = b.stateNode;
                if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
                var f = b.updateQueue;
                null !== f && sh(b, f, d);
                break;
              case 3:
                var g = b.updateQueue;
                if (null !== g) {
                  c = null;
                  if (null !== b.child) switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                  sh(b, g, c);
                }
                break;
              case 5:
                var h = b.stateNode;
                if (null === c && b.flags & 4) {
                  c = h;
                  var k = b.memoizedProps;
                  switch (b.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && c.focus();
                      break;
                    case "img":
                      k.src && (c.src = k.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (null === b.memoizedState) {
                  var l = b.alternate;
                  if (null !== l) {
                    var m = l.memoizedState;
                    if (null !== m) {
                      var q = m.dehydrated;
                      null !== q && bd(q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
            U || b.flags & 512 && Rj(b);
          } catch (r) {
            W(b, b.return, r);
          }
        }
        if (b === a) {
          V = null;
          break;
        }
        c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V = c;
          break;
        }
        V = b.return;
      }
    }
    function gk(a) {
      for (; null !== V; ) {
        var b = V;
        if (b === a) {
          V = null;
          break;
        }
        var c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V = c;
          break;
        }
        V = b.return;
      }
    }
    function jk(a) {
      for (; null !== V; ) {
        var b = V;
        try {
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              var c = b.return;
              try {
                Qj(4, b);
              } catch (k) {
                W(b, c, k);
              }
              break;
            case 1:
              var d = b.stateNode;
              if ("function" === typeof d.componentDidMount) {
                var e = b.return;
                try {
                  d.componentDidMount();
                } catch (k) {
                  W(b, e, k);
                }
              }
              var f = b.return;
              try {
                Rj(b);
              } catch (k) {
                W(b, f, k);
              }
              break;
            case 5:
              var g = b.return;
              try {
                Rj(b);
              } catch (k) {
                W(b, g, k);
              }
          }
        } catch (k) {
          W(b, b.return, k);
        }
        if (b === a) {
          V = null;
          break;
        }
        var h = b.sibling;
        if (null !== h) {
          h.return = b.return;
          V = h;
          break;
        }
        V = b.return;
      }
    }
    var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
    function R() {
      return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
    }
    function yi(a) {
      if (0 === (a.mode & 1)) return 1;
      if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
      if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
      a = C;
      if (0 !== a) return a;
      a = window.event;
      a = void 0 === a ? 16 : jd(a.type);
      return a;
    }
    function gi(a, b, c, d) {
      if (50 < yk) throw yk = 0, zk = null, Error(p(185));
      Ac(a, c, d);
      if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
    }
    function Dk(a, b) {
      var c = a.callbackNode;
      wc(a, b);
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
      else if (b = d & -d, a.callbackPriority !== b) {
        null != c && bc(c);
        if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
          0 === (K & 6) && jg();
        }), c = null;
        else {
          switch (Dc(d)) {
            case 1:
              c = fc;
              break;
            case 4:
              c = gc;
              break;
            case 16:
              c = hc;
              break;
            case 536870912:
              c = jc;
              break;
            default:
              c = hc;
          }
          c = Fk(c, Gk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
      }
    }
    function Gk(a, b) {
      Ak = -1;
      Bk = 0;
      if (0 !== (K & 6)) throw Error(p(327));
      var c = a.callbackNode;
      if (Hk() && a.callbackNode !== c) return null;
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d) return null;
      if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
      else {
        b = d;
        var e = K;
        K |= 2;
        var f = Jk();
        if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
        do
          try {
            Lk();
            break;
          } catch (h) {
            Mk(a, h);
          }
        while (1);
        $g();
        mk.current = f;
        K = e;
        null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
      }
      if (0 !== b) {
        2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
        if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
        if (6 === b) Ck(a, d);
        else {
          e = a.current.alternate;
          if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
          a.finishedWork = e;
          a.finishedLanes = d;
          switch (b) {
            case 0:
            case 1:
              throw Error(p(345));
            case 2:
              Pk(a, tk, uk);
              break;
            case 3:
              Ck(a, d);
              if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                if (0 !== uc(a, 0)) break;
                e = a.suspendedLanes;
                if ((e & d) !== d) {
                  R();
                  a.pingedLanes |= a.suspendedLanes & e;
                  break;
                }
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 4:
              Ck(a, d);
              if ((d & 4194240) === d) break;
              b = a.eventTimes;
              for (e = -1; 0 < d; ) {
                var g = 31 - oc(d);
                f = 1 << g;
                g = b[g];
                g > e && (e = g);
                d &= ~f;
              }
              d = e;
              d = B() - d;
              d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
              if (10 < d) {
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 5:
              Pk(a, tk, uk);
              break;
            default:
              throw Error(p(329));
          }
        }
      }
      Dk(a, B());
      return a.callbackNode === c ? Gk.bind(null, a) : null;
    }
    function Nk(a, b) {
      var c = sk;
      a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
      a = Ik(a, b);
      2 !== a && (b = tk, tk = c, null !== b && Fj(b));
      return a;
    }
    function Fj(a) {
      null === tk ? tk = a : tk.push.apply(tk, a);
    }
    function Ok(a) {
      for (var b = a; ; ) {
        if (b.flags & 16384) {
          var c = b.updateQueue;
          if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
            var e = c[d], f = e.getSnapshot;
            e = e.value;
            try {
              if (!He(f(), e)) return false;
            } catch (g) {
              return false;
            }
          }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
        else {
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return true;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return true;
    }
    function Ck(a, b) {
      b &= ~rk;
      b &= ~qk;
      a.suspendedLanes |= b;
      a.pingedLanes &= ~b;
      for (a = a.expirationTimes; 0 < b; ) {
        var c = 31 - oc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
      }
    }
    function Ek(a) {
      if (0 !== (K & 6)) throw Error(p(327));
      Hk();
      var b = uc(a, 0);
      if (0 === (b & 1)) return Dk(a, B()), null;
      var c = Ik(a, b);
      if (0 !== a.tag && 2 === c) {
        var d = xc(a);
        0 !== d && (b = d, c = Nk(a, d));
      }
      if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
      if (6 === c) throw Error(p(345));
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b;
      Pk(a, tk, uk);
      Dk(a, B());
      return null;
    }
    function Qk(a, b) {
      var c = K;
      K |= 1;
      try {
        return a(b);
      } finally {
        K = c, 0 === K && (Gj = B() + 500, fg && jg());
      }
    }
    function Rk(a) {
      null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
      var b = K;
      K |= 1;
      var c = ok.transition, d = C;
      try {
        if (ok.transition = null, C = 1, a) return a();
      } finally {
        C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
      }
    }
    function Hj() {
      fj = ej.current;
      E(ej);
    }
    function Kk(a, b) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c = a.timeoutHandle;
      -1 !== c && (a.timeoutHandle = -1, Gf(c));
      if (null !== Y) for (c = Y.return; null !== c; ) {
        var d = c;
        wg(d);
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            null !== d && void 0 !== d && $f();
            break;
          case 3:
            zh();
            E(Wf);
            E(H);
            Eh();
            break;
          case 5:
            Bh(d);
            break;
          case 4:
            zh();
            break;
          case 13:
            E(L);
            break;
          case 19:
            E(L);
            break;
          case 10:
            ah(d.type._context);
            break;
          case 22:
          case 23:
            Hj();
        }
        c = c.return;
      }
      Q = a;
      Y = a = Pg(a.current, null);
      Z = fj = b;
      T = 0;
      pk = null;
      rk = qk = rh = 0;
      tk = sk = null;
      if (null !== fh) {
        for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
          c.interleaved = null;
          var e = d.next, f = c.pending;
          if (null !== f) {
            var g = f.next;
            f.next = e;
            d.next = g;
          }
          c.pending = d;
        }
        fh = null;
      }
      return a;
    }
    function Mk(a, b) {
      do {
        var c = Y;
        try {
          $g();
          Fh.current = Rh;
          if (Ih) {
            for (var d = M.memoizedState; null !== d; ) {
              var e = d.queue;
              null !== e && (e.pending = null);
              d = d.next;
            }
            Ih = false;
          }
          Hh = 0;
          O = N = M = null;
          Jh = false;
          Kh = 0;
          nk.current = null;
          if (null === c || null === c.return) {
            T = 1;
            pk = b;
            Y = null;
            break;
          }
          a: {
            var f = a, g = c.return, h = c, k = b;
            b = Z;
            h.flags |= 32768;
            if (null !== k && "object" === typeof k && "function" === typeof k.then) {
              var l = k, m = h, q = m.tag;
              if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                var r = m.alternate;
                r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
              }
              var y = Ui(g);
              if (null !== y) {
                y.flags &= -257;
                Vi(y, g, h, f, b);
                y.mode & 1 && Si(f, l, b);
                b = y;
                k = l;
                var n = b.updateQueue;
                if (null === n) {
                  var t = /* @__PURE__ */ new Set();
                  t.add(k);
                  b.updateQueue = t;
                } else n.add(k);
                break a;
              } else {
                if (0 === (b & 1)) {
                  Si(f, l, b);
                  tj();
                  break a;
                }
                k = Error(p(426));
              }
            } else if (I && h.mode & 1) {
              var J = Ui(g);
              if (null !== J) {
                0 === (J.flags & 65536) && (J.flags |= 256);
                Vi(J, g, h, f, b);
                Jg(Ji(k, h));
                break a;
              }
            }
            f = k = Ji(k, h);
            4 !== T && (T = 2);
            null === sk ? sk = [f] : sk.push(f);
            f = g;
            do {
              switch (f.tag) {
                case 3:
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var x = Ni(f, k, b);
                  ph(f, x);
                  break a;
                case 1:
                  h = k;
                  var w = f.type, u = f.stateNode;
                  if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                    f.flags |= 65536;
                    b &= -b;
                    f.lanes |= b;
                    var F = Qi(f, h, b);
                    ph(f, F);
                    break a;
                  }
              }
              f = f.return;
            } while (null !== f);
          }
          Sk(c);
        } catch (na) {
          b = na;
          Y === c && null !== c && (Y = c = c.return);
          continue;
        }
        break;
      } while (1);
    }
    function Jk() {
      var a = mk.current;
      mk.current = Rh;
      return null === a ? Rh : a;
    }
    function tj() {
      if (0 === T || 3 === T || 2 === T) T = 4;
      null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
    }
    function Ik(a, b) {
      var c = K;
      K |= 2;
      var d = Jk();
      if (Q !== a || Z !== b) uk = null, Kk(a, b);
      do
        try {
          Tk();
          break;
        } catch (e) {
          Mk(a, e);
        }
      while (1);
      $g();
      K = c;
      mk.current = d;
      if (null !== Y) throw Error(p(261));
      Q = null;
      Z = 0;
      return T;
    }
    function Tk() {
      for (; null !== Y; ) Uk(Y);
    }
    function Lk() {
      for (; null !== Y && !cc(); ) Uk(Y);
    }
    function Uk(a) {
      var b = Vk(a.alternate, a, fj);
      a.memoizedProps = a.pendingProps;
      null === b ? Sk(a) : Y = b;
      nk.current = null;
    }
    function Sk(a) {
      var b = a;
      do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
          if (c = Ej(c, b, fj), null !== c) {
            Y = c;
            return;
          }
        } else {
          c = Ij(c, b);
          if (null !== c) {
            c.flags &= 32767;
            Y = c;
            return;
          }
          if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
          else {
            T = 6;
            Y = null;
            return;
          }
        }
        b = b.sibling;
        if (null !== b) {
          Y = b;
          return;
        }
        Y = b = a;
      } while (null !== b);
      0 === T && (T = 5);
    }
    function Pk(a, b, c) {
      var d = C, e = ok.transition;
      try {
        ok.transition = null, C = 1, Wk(a, b, c, d);
      } finally {
        ok.transition = e, C = d;
      }
      return null;
    }
    function Wk(a, b, c, d) {
      do
        Hk();
      while (null !== wk);
      if (0 !== (K & 6)) throw Error(p(327));
      c = a.finishedWork;
      var e = a.finishedLanes;
      if (null === c) return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c === a.current) throw Error(p(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f = c.lanes | c.childLanes;
      Bc(a, f);
      a === Q && (Y = Q = null, Z = 0);
      0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
        Hk();
        return null;
      }));
      f = 0 !== (c.flags & 15990);
      if (0 !== (c.subtreeFlags & 15990) || f) {
        f = ok.transition;
        ok.transition = null;
        var g = C;
        C = 1;
        var h = K;
        K |= 4;
        nk.current = null;
        Oj(a, c);
        dk(c, a);
        Oe(Df);
        dd = !!Cf;
        Df = Cf = null;
        a.current = c;
        hk(c);
        dc();
        K = h;
        C = g;
        ok.transition = f;
      } else a.current = c;
      vk && (vk = false, wk = a, xk = e);
      f = a.pendingLanes;
      0 === f && (Ri = null);
      mc(c.stateNode);
      Dk(a, B());
      if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
      if (Oi) throw Oi = false, a = Pi, Pi = null, a;
      0 !== (xk & 1) && 0 !== a.tag && Hk();
      f = a.pendingLanes;
      0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
      jg();
      return null;
    }
    function Hk() {
      if (null !== wk) {
        var a = Dc(xk), b = ok.transition, c = C;
        try {
          ok.transition = null;
          C = 16 > a ? 16 : a;
          if (null === wk) var d = false;
          else {
            a = wk;
            wk = null;
            xk = 0;
            if (0 !== (K & 6)) throw Error(p(331));
            var e = K;
            K |= 4;
            for (V = a.current; null !== V; ) {
              var f = V, g = f.child;
              if (0 !== (V.flags & 16)) {
                var h = f.deletions;
                if (null !== h) {
                  for (var k = 0; k < h.length; k++) {
                    var l = h[k];
                    for (V = l; null !== V; ) {
                      var m = V;
                      switch (m.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pj(8, m, f);
                      }
                      var q = m.child;
                      if (null !== q) q.return = m, V = q;
                      else for (; null !== V; ) {
                        m = V;
                        var r = m.sibling, y = m.return;
                        Sj(m);
                        if (m === l) {
                          V = null;
                          break;
                        }
                        if (null !== r) {
                          r.return = y;
                          V = r;
                          break;
                        }
                        V = y;
                      }
                    }
                  }
                  var n = f.alternate;
                  if (null !== n) {
                    var t = n.child;
                    if (null !== t) {
                      n.child = null;
                      do {
                        var J = t.sibling;
                        t.sibling = null;
                        t = J;
                      } while (null !== t);
                    }
                  }
                  V = f;
                }
              }
              if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
              else b: for (; null !== V; ) {
                f = V;
                if (0 !== (f.flags & 2048)) switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pj(9, f, f.return);
                }
                var x = f.sibling;
                if (null !== x) {
                  x.return = f.return;
                  V = x;
                  break b;
                }
                V = f.return;
              }
            }
            var w = a.current;
            for (V = w; null !== V; ) {
              g = V;
              var u = g.child;
              if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
              else b: for (g = w; null !== V; ) {
                h = V;
                if (0 !== (h.flags & 2048)) try {
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, h);
                  }
                } catch (na) {
                  W(h, h.return, na);
                }
                if (h === g) {
                  V = null;
                  break b;
                }
                var F = h.sibling;
                if (null !== F) {
                  F.return = h.return;
                  V = F;
                  break b;
                }
                V = h.return;
              }
            }
            K = e;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (na) {
            }
            d = true;
          }
          return d;
        } finally {
          C = c, ok.transition = b;
        }
      }
      return false;
    }
    function Xk(a, b, c) {
      b = Ji(c, b);
      b = Ni(a, b, 1);
      a = nh(a, b, 1);
      b = R();
      null !== a && (Ac(a, 1, b), Dk(a, b));
    }
    function W(a, b, c) {
      if (3 === a.tag) Xk(a, a, c);
      else for (; null !== b; ) {
        if (3 === b.tag) {
          Xk(b, a, c);
          break;
        } else if (1 === b.tag) {
          var d = b.stateNode;
          if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
            a = Ji(c, a);
            a = Qi(b, a, 1);
            b = nh(b, a, 1);
            a = R();
            null !== b && (Ac(b, 1, a), Dk(b, a));
            break;
          }
        }
        b = b.return;
      }
    }
    function Ti(a, b, c) {
      var d = a.pingCache;
      null !== d && d.delete(b);
      b = R();
      a.pingedLanes |= a.suspendedLanes & c;
      Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
      Dk(a, b);
    }
    function Yk(a, b) {
      0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
      var c = R();
      a = ih(a, b);
      null !== a && (Ac(a, b, c), Dk(a, c));
    }
    function uj(a) {
      var b = a.memoizedState, c = 0;
      null !== b && (c = b.retryLane);
      Yk(a, c);
    }
    function bk(a, b) {
      var c = 0;
      switch (a.tag) {
        case 13:
          var d = a.stateNode;
          var e = a.memoizedState;
          null !== e && (c = e.retryLane);
          break;
        case 19:
          d = a.stateNode;
          break;
        default:
          throw Error(p(314));
      }
      null !== d && d.delete(b);
      Yk(a, c);
    }
    var Vk;
    Vk = function(a, b, c) {
      if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
      else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
        dh = 0 !== (a.flags & 131072) ? true : false;
      }
      else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          var d = b.type;
          ij(a, b);
          a = b.pendingProps;
          var e = Yf(b, H.current);
          ch(b, c);
          e = Nh(null, b, d, a, e, c);
          var f = Sh();
          b.flags |= 1;
          "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
          return b;
        case 16:
          d = b.elementType;
          a: {
            ij(a, b);
            a = b.pendingProps;
            e = d._init;
            d = e(d._payload);
            b.type = d;
            e = b.tag = Zk(d);
            a = Ci(d, a);
            switch (e) {
              case 0:
                b = cj(null, b, d, a, c);
                break a;
              case 1:
                b = hj(null, b, d, a, c);
                break a;
              case 11:
                b = Yi(null, b, d, a, c);
                break a;
              case 14:
                b = $i(null, b, d, Ci(d.type, a), c);
                break a;
            }
            throw Error(p(
              306,
              d,
              ""
            ));
          }
          return b;
        case 0:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
        case 1:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
        case 3:
          a: {
            kj(b);
            if (null === a) throw Error(p(387));
            d = b.pendingProps;
            f = b.memoizedState;
            e = f.element;
            lh(a, b);
            qh(b, d, null, c);
            var g = b.memoizedState;
            d = g.element;
            if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
              e = Ji(Error(p(423)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ji(Error(p(424)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
            else {
              Ig();
              if (d === e) {
                b = Zi(a, b, c);
                break a;
              }
              Xi(a, b, d, c);
            }
            b = b.child;
          }
          return b;
        case 5:
          return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
        case 6:
          return null === a && Eg(b), null;
        case 13:
          return oj(a, b, c);
        case 4:
          return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
        case 11:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
        case 7:
          return Xi(a, b, b.pendingProps, c), b.child;
        case 8:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 12:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 10:
          a: {
            d = b.type._context;
            e = b.pendingProps;
            f = b.memoizedProps;
            g = e.value;
            G(Wg, d._currentValue);
            d._currentValue = g;
            if (null !== f) if (He(f.value, g)) {
              if (f.children === e.children && !Wf.current) {
                b = Zi(a, b, c);
                break a;
              }
            } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
              var h = f.dependencies;
              if (null !== h) {
                g = f.child;
                for (var k = h.firstContext; null !== k; ) {
                  if (k.context === d) {
                    if (1 === f.tag) {
                      k = mh(-1, c & -c);
                      k.tag = 2;
                      var l = f.updateQueue;
                      if (null !== l) {
                        l = l.shared;
                        var m = l.pending;
                        null === m ? k.next = k : (k.next = m.next, m.next = k);
                        l.pending = k;
                      }
                    }
                    f.lanes |= c;
                    k = f.alternate;
                    null !== k && (k.lanes |= c);
                    bh(
                      f.return,
                      c,
                      b
                    );
                    h.lanes |= c;
                    break;
                  }
                  k = k.next;
                }
              } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
              else if (18 === f.tag) {
                g = f.return;
                if (null === g) throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                bh(g, c, b);
                g = f.sibling;
              } else g = f.child;
              if (null !== g) g.return = f;
              else for (g = f; null !== g; ) {
                if (g === b) {
                  g = null;
                  break;
                }
                f = g.sibling;
                if (null !== f) {
                  f.return = g.return;
                  g = f;
                  break;
                }
                g = g.return;
              }
              f = g;
            }
            Xi(a, b, e.children, c);
            b = b.child;
          }
          return b;
        case 9:
          return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
        case 14:
          return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
        case 15:
          return bj(a, b, b.type, b.pendingProps, c);
        case 17:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
        case 19:
          return xj(a, b, c);
        case 22:
          return dj(a, b, c);
      }
      throw Error(p(156, b.tag));
    };
    function Fk(a, b) {
      return ac(a, b);
    }
    function $k(a, b, c, d) {
      this.tag = a;
      this.key = c;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function Bg(a, b, c, d) {
      return new $k(a, b, c, d);
    }
    function aj(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function Zk(a) {
      if ("function" === typeof a) return aj(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da) return 11;
        if (a === Ga) return 14;
      }
      return 2;
    }
    function Pg(a, b) {
      var c = a.alternate;
      null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
      c.flags = a.flags & 14680064;
      c.childLanes = a.childLanes;
      c.lanes = a.lanes;
      c.child = a.child;
      c.memoizedProps = a.memoizedProps;
      c.memoizedState = a.memoizedState;
      c.updateQueue = a.updateQueue;
      b = a.dependencies;
      c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
      c.sibling = a.sibling;
      c.index = a.index;
      c.ref = a.ref;
      return c;
    }
    function Rg(a, b, c, d, e, f) {
      var g = 2;
      d = a;
      if ("function" === typeof a) aj(a) && (g = 1);
      else if ("string" === typeof a) g = 5;
      else a: switch (a) {
        case ya:
          return Tg(c.children, e, f, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
        case Ia:
          return pj(c, e, f, b);
        default:
          if ("object" === typeof a && null !== a) switch (a.$$typeof) {
            case Ba:
              g = 10;
              break a;
            case Ca:
              g = 9;
              break a;
            case Da:
              g = 11;
              break a;
            case Ga:
              g = 14;
              break a;
            case Ha:
              g = 16;
              d = null;
              break a;
          }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
      b = Bg(g, c, b, e);
      b.elementType = a;
      b.type = d;
      b.lanes = f;
      return b;
    }
    function Tg(a, b, c, d) {
      a = Bg(7, a, d, b);
      a.lanes = c;
      return a;
    }
    function pj(a, b, c, d) {
      a = Bg(22, a, d, b);
      a.elementType = Ia;
      a.lanes = c;
      a.stateNode = { isHidden: false };
      return a;
    }
    function Qg(a, b, c) {
      a = Bg(6, a, null, b);
      a.lanes = c;
      return a;
    }
    function Sg(a, b, c) {
      b = Bg(4, null !== a.children ? a.children : [], a.key, b);
      b.lanes = c;
      b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b;
    }
    function al(a, b, c, d, e) {
      this.tag = b;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = zc(0);
      this.expirationTimes = zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = zc(0);
      this.identifierPrefix = d;
      this.onRecoverableError = e;
      this.mutableSourceEagerHydrationData = null;
    }
    function bl(a, b, c, d, e, f, g, h, k) {
      a = new al(a, b, c, h, k);
      1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
      f = Bg(3, null, null, b);
      a.current = f;
      f.stateNode = a;
      f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      kh(f);
      return a;
    }
    function cl(a, b, c) {
      var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
    }
    function dl(a) {
      if (!a) return Vf;
      a = a._reactInternals;
      a: {
        if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
        var b = a;
        do {
          switch (b.tag) {
            case 3:
              b = b.stateNode.context;
              break a;
            case 1:
              if (Zf(b.type)) {
                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b = b.return;
        } while (null !== b);
        throw Error(p(171));
      }
      if (1 === a.tag) {
        var c = a.type;
        if (Zf(c)) return bg(a, c, b);
      }
      return b;
    }
    function el(a, b, c, d, e, f, g, h, k) {
      a = bl(c, d, true, a, e, f, g, h, k);
      a.context = dl(null);
      c = a.current;
      d = R();
      e = yi(c);
      f = mh(d, e);
      f.callback = void 0 !== b && null !== b ? b : null;
      nh(c, f, e);
      a.current.lanes = e;
      Ac(a, e, d);
      Dk(a, d);
      return a;
    }
    function fl(a, b, c, d) {
      var e = b.current, f = R(), g = yi(e);
      c = dl(c);
      null === b.context ? b.context = c : b.pendingContext = c;
      b = mh(f, g);
      b.payload = { element: a };
      d = void 0 === d ? null : d;
      null !== d && (b.callback = d);
      a = nh(e, b, g);
      null !== a && (gi(a, e, g, f), oh(a, e, g));
      return g;
    }
    function gl(a) {
      a = a.current;
      if (!a.child) return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function hl(a, b) {
      a = a.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
      }
    }
    function il(a, b) {
      hl(a, b);
      (a = a.alternate) && hl(a, b);
    }
    function jl() {
      return null;
    }
    var kl = "function" === typeof reportError ? reportError : function(a) {
      console.error(a);
    };
    function ll(a) {
      this._internalRoot = a;
    }
    ml.prototype.render = ll.prototype.render = function(a) {
      var b = this._internalRoot;
      if (null === b) throw Error(p(409));
      fl(a, b, null, null);
    };
    ml.prototype.unmount = ll.prototype.unmount = function() {
      var a = this._internalRoot;
      if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        Rk(function() {
          fl(null, a, null, null);
        });
        b[uf] = null;
      }
    };
    function ml(a) {
      this._internalRoot = a;
    }
    ml.prototype.unstable_scheduleHydration = function(a) {
      if (a) {
        var b = Hc();
        a = { blockedOn: null, target: a, priority: b };
        for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
        Qc.splice(c, 0, a);
        0 === c && Vc(a);
      }
    };
    function nl(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
    }
    function ol(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
    }
    function pl() {
    }
    function ql(a, b, c, d, e) {
      if (e) {
        if ("function" === typeof d) {
          var f = d;
          d = function() {
            var a2 = gl(g);
            f.call(a2);
          };
        }
        var g = el(b, d, a, 0, null, false, false, "", pl);
        a._reactRootContainer = g;
        a[uf] = g.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk();
        return g;
      }
      for (; e = a.lastChild; ) a.removeChild(e);
      if ("function" === typeof d) {
        var h = d;
        d = function() {
          var a2 = gl(k);
          h.call(a2);
        };
      }
      var k = bl(a, 0, false, null, null, false, false, "", pl);
      a._reactRootContainer = k;
      a[uf] = k.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk(function() {
        fl(b, k, c, d);
      });
      return k;
    }
    function rl(a, b, c, d, e) {
      var f = c._reactRootContainer;
      if (f) {
        var g = f;
        if ("function" === typeof e) {
          var h = e;
          e = function() {
            var a2 = gl(g);
            h.call(a2);
          };
        }
        fl(b, g, a, e);
      } else g = ql(c, b, a, e, d);
      return gl(g);
    }
    Ec = function(a) {
      switch (a.tag) {
        case 3:
          var b = a.stateNode;
          if (b.current.memoizedState.isDehydrated) {
            var c = tc(b.pendingLanes);
            0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
          }
          break;
        case 13:
          Rk(function() {
            var b2 = ih(a, 1);
            if (null !== b2) {
              var c2 = R();
              gi(b2, a, 1, c2);
            }
          }), il(a, 1);
      }
    };
    Fc = function(a) {
      if (13 === a.tag) {
        var b = ih(a, 134217728);
        if (null !== b) {
          var c = R();
          gi(b, a, 134217728, c);
        }
        il(a, 134217728);
      }
    };
    Gc = function(a) {
      if (13 === a.tag) {
        var b = yi(a), c = ih(a, b);
        if (null !== c) {
          var d = R();
          gi(c, a, b, d);
        }
        il(a, b);
      }
    };
    Hc = function() {
      return C;
    };
    Ic = function(a, b) {
      var c = C;
      try {
        return C = a, b();
      } finally {
        C = c;
      }
    };
    yb = function(a, b, c) {
      switch (b) {
        case "input":
          bb(a, c);
          b = c.name;
          if ("radio" === c.type && null != b) {
            for (c = a; c.parentNode; ) c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d = c[b];
              if (d !== a && d.form === a.form) {
                var e = Db(d);
                if (!e) throw Error(p(90));
                Wa(d);
                bb(d, e);
              }
            }
          }
          break;
        case "textarea":
          ib(a, c);
          break;
        case "select":
          b = c.value, null != b && fb(a, !!c.multiple, b, false);
      }
    };
    Gb = Qk;
    Hb = Rk;
    var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
    var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = Zb(a);
      return null === a ? null : a.stateNode;
    }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!vl.isDisabled && vl.supportsFiber) try {
        kc = vl.inject(ul), lc = vl;
      } catch (a) {
      }
    }
    reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
    reactDom_production_min.createPortal = function(a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!nl(b)) throw Error(p(200));
      return cl(a, b, null, c);
    };
    reactDom_production_min.createRoot = function(a, b) {
      if (!nl(a)) throw Error(p(299));
      var c = false, d = "", e = kl;
      null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
      b = bl(a, 1, false, null, null, c, false, d, e);
      a[uf] = b.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      return new ll(b);
    };
    reactDom_production_min.findDOMNode = function(a) {
      if (null == a) return null;
      if (1 === a.nodeType) return a;
      var b = a._reactInternals;
      if (void 0 === b) {
        if ("function" === typeof a.render) throw Error(p(188));
        a = Object.keys(a).join(",");
        throw Error(p(268, a));
      }
      a = Zb(b);
      a = null === a ? null : a.stateNode;
      return a;
    };
    reactDom_production_min.flushSync = function(a) {
      return Rk(a);
    };
    reactDom_production_min.hydrate = function(a, b, c) {
      if (!ol(b)) throw Error(p(200));
      return rl(null, a, b, true, c);
    };
    reactDom_production_min.hydrateRoot = function(a, b, c) {
      if (!nl(a)) throw Error(p(405));
      var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
      null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
      b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
      a[uf] = b.current;
      sf(a);
      if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
      return new ml(b);
    };
    reactDom_production_min.render = function(a, b, c) {
      if (!ol(b)) throw Error(p(200));
      return rl(null, a, b, false, c);
    };
    reactDom_production_min.unmountComponentAtNode = function(a) {
      if (!ol(a)) throw Error(p(40));
      return a._reactRootContainer ? (Rk(function() {
        rl(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[uf] = null;
        });
      }), true) : false;
    };
    reactDom_production_min.unstable_batchedUpdates = Qk;
    reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
      if (!ol(c)) throw Error(p(200));
      if (null == a || void 0 === a._reactInternals) throw Error(p(38));
      return rl(a, b, c, false, d);
    };
    reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
    return reactDom_production_min;
  }
  var hasRequiredReactDom;
  function requireReactDom() {
    if (hasRequiredReactDom) return reactDom.exports;
    hasRequiredReactDom = 1;
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      reactDom.exports = requireReactDom_production_min();
    }
    return reactDom.exports;
  }
  var hasRequiredClient;
  function requireClient() {
    if (hasRequiredClient) return client;
    hasRequiredClient = 1;
    var m = requireReactDom();
    {
      client.createRoot = m.createRoot;
      client.hydrateRoot = m.hydrateRoot;
    }
    return client;
  }
  var clientExports = requireClient();
  var reactExports = requireReact();
  function CloseIcon() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("g", { clipPath: "url(#clip0_12231_8567)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M9.41416 8.00023L15.7072 1.70783C16.0979 1.31719 16.0979 0.683841 15.7072 0.293232C15.3166 -0.0974083 14.6833 -0.0974083 14.2927 0.293232L8.00022 6.58629L1.70782 0.293232C1.31718 -0.0974083 0.683833 -0.0974083 0.293224 0.293232C-0.0973847 0.683872 -0.0974159 1.31722 0.293224 1.70783L6.58628 8.00023L0.293224 14.2927C-0.0974159 14.6833 -0.0974159 15.3166 0.293224 15.7073C0.683865 16.0979 1.31721 16.0979 1.70782 15.7073L8.00022 9.41417L14.2926 15.7073C14.6833 16.0979 15.3166 16.0979 15.7072 15.7073C16.0979 15.3166 16.0979 14.6833 15.7072 14.2927L9.41416 8.00023Z",
              fill: "black"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { className: "clip0_12231_8567", children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
        ]
      }
    );
  }
  function SearchIcon() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
        ]
      }
    );
  }
  function BackArrowIcon() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#1F1F1F",
        strokeWidth: "2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "19", y1: "12", x2: "5", y2: "12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "12 19 5 12 12 5" })
        ]
      }
    );
  }
  function ForwardArrowIcon() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("g", { clipPath: "url(#clip0_12260_19)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M4.05273 15C4.05297 14.7349 4.15848 14.4807 4.34607 14.2934L9.46073 9.1787C9.61555 9.02393 9.73835 8.84018 9.82214 8.63794C9.90592 8.4357 9.94905 8.21894 9.94905 8.00003C9.94905 7.78113 9.90592 7.56436 9.82214 7.36213C9.73835 7.15989 9.61555 6.97614 9.46073 6.82137L4.35273 1.71003C4.17058 1.52143 4.06978 1.26883 4.07206 1.00663C4.07434 0.744434 4.17951 0.493621 4.36492 0.308213C4.55032 0.122805 4.80114 0.017636 5.06333 0.0153576C5.32553 0.0130792 5.57813 0.113874 5.76673 0.296032L10.8747 5.40337C11.5616 6.09154 11.9473 7.0241 11.9473 7.99637C11.9473 8.96864 11.5616 9.90119 10.8747 10.5894L5.76007 15.704C5.62041 15.8438 5.4425 15.939 5.24877 15.9778C5.05503 16.0165 4.85417 15.997 4.67153 15.9216C4.48888 15.8463 4.33263 15.7186 4.22251 15.5546C4.11238 15.3906 4.0533 15.1976 4.05273 15V15Z",
              fill: "white"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { className: "clip0_12260_19", children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
        ]
      }
    );
  }
  function BankIcon({ width = 20, height = 20, ...props }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width,
        height,
        viewBox: "0 0 20 20",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("g", { clipPath: "url(#clip0_bank)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 8.33333V6.59083C20.0001 6.1417 19.8792 5.70083 19.65 5.31459C19.4208 4.92834 19.0918 4.61096 18.6975 4.39583L11.1975 0.304995C10.8304 0.104045 10.4185 -0.00128174 10 -0.00128174C9.58146 -0.00128174 9.16965 0.104045 8.8025 0.304995L1.3025 4.39583C0.908244 4.61096 0.579225 4.92834 0.350027 5.31459C0.120829 5.70083 -8.30872e-05 6.1417 4.28364e-08 6.59083V8.33333H2.5V15.8333H0.833333V18.3333H4.28364e-08V20H20V18.3333H19.1667V15.8333H17.5V8.33333H20ZM11.6667 8.33333V15.8333H8.33333V8.33333H11.6667ZM4.16667 8.33333H6.66667V15.8333H4.16667V8.33333ZM15.8333 15.8333H13.3333V8.33333H15.8333V15.8333Z" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { className: "clip0_bank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
        ]
      }
    );
  }
  function PaypalIcon({ width = 20, height = 20, ...props }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width,
        height,
        viewBox: "0 0 20 20",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16.7532 5.16719C16.7871 4.89199 16.8048 4.6118 16.8048 4.32746C16.8048 1.9375 14.8673 0 12.4773 0H5.24522C4.7903 0 4.4019 0.328516 4.32643 0.777109L1.66159 16.616C1.56596 17.1843 2.00409 17.7023 2.58038 17.7023H5.22534C5.68026 17.7023 6.07596 17.374 6.15139 16.9254C6.15139 16.9254 6.1558 16.8991 6.16377 16.8517H6.16381L5.79522 19.0426C5.711 19.5435 6.09713 20 6.60506 20H8.91901C9.31998 20 9.66233 19.7104 9.72881 19.315L10.3862 15.408C10.4995 14.7345 11.0826 14.2413 11.7655 14.2413H12.3734C15.6754 14.2413 18.3521 11.5646 18.3521 8.26266C18.3521 6.98496 17.7205 5.85555 16.7532 5.16719Z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16.753 5.16718C16.3392 8.53354 13.47 11.1402 9.99183 11.1402H7.97366C7.51816 11.1402 7.12476 11.4436 7.00136 11.8726L5.79503 19.0425C5.71077 19.5434 6.0969 20 6.60483 20H8.91878C9.31976 20 9.6621 19.7104 9.72858 19.315L10.386 15.408C10.4993 14.7345 11.0824 14.2413 11.7653 14.2413H12.3732C15.6751 14.2413 18.3519 11.5646 18.3519 8.26264C18.3519 6.98495 17.7203 5.85553 16.753 5.16718Z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7.97332 11.1401H9.99148C13.4697 11.1401 16.3389 8.53344 16.7527 5.16711C16.132 4.72547 15.3736 4.46484 14.5538 4.46484H9.28625C8.68652 4.46484 8.17445 4.89793 8.07492 5.48934L7.00098 11.8725C7.12438 11.4435 7.51781 11.1401 7.97332 11.1401Z" })
        ]
      }
    );
  }
  function RoyalMailIcon({ width = 22, height = 20, ...props }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "22",
        height: "20",
        viewBox: "0 0 22 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M3.32296 19.6887C2.96186 19.3128 2.93239 18.8331 3.24927 18.4955C3.48508 18.2474 3.65457 18.2474 10.9568 18.2474H18.419L18.6695 18.5782C19.0012 19.0143 18.9864 19.315 18.5958 19.6917L18.2937 20H10.934H3.57425L3.27211 19.6917L3.32296 19.6887ZM3.55141 17.6068C3.30085 17.3511 3.30085 17.3135 3.47771 17.0429C3.63984 16.7947 3.76512 16.7496 4.33329 16.7496H4.99653L4.92284 17.2835L4.84914 17.8173H4.29644C3.86166 17.8173 3.69216 17.8173 3.47845 17.5767L3.55141 17.6068ZM6.45123 17.712C5.79536 17.3737 6.27436 16.7526 7.18815 16.7526C7.71138 16.7526 8.21323 16.9932 8.26629 17.2789C8.35472 17.7451 7.09752 18.0459 6.45123 17.712ZM9.63624 17.3135V16.7496H10.9833H12.3305V17.3135V17.8774H10.9833H9.63624V17.3135ZM14.0453 17.712C13.3084 17.3361 13.9274 16.7023 14.9429 16.7887C15.2671 16.7887 15.6135 16.9241 15.7122 17.0218C16.2502 17.5707 14.8751 18.1391 14.0453 17.712ZM16.9849 17.3135V16.7496H17.6113C18.1124 16.7496 18.2819 16.8248 18.4595 17.0278C18.6806 17.2985 18.6806 17.3135 18.4595 17.5917C18.2605 17.8098 18.0689 17.8699 17.6113 17.8699H17.0218V17.306L16.9849 17.3135ZM3.63468 15.8038C3.63468 15.3902 3.70837 15.2474 3.78944 15.2925C4.8683 15.7511 5.50427 15.6459 6.36206 14.879L6.91476 14.3827L7.22427 14.8038C7.64432 15.3677 8.23902 15.6316 9.07765 15.6316C9.83595 15.6316 10.1315 15.5188 10.6451 15.0301L10.9841 14.7068L11.1609 14.9624C11.441 15.3684 12.1123 15.6316 12.8721 15.6316C13.6702 15.6316 14.0571 15.4586 14.6481 14.8293L15.0682 14.3782L15.5029 14.8068C15.9672 15.2729 16.6747 15.6256 17.1323 15.6256C17.2871 15.6256 17.6187 15.5203 17.8707 15.3925L18.3276 15.1519V15.5654C18.3276 16.4421 18.954 16.3744 10.9045 16.3744H3.63026L3.63468 15.8038ZM8.55443 15.0368C8.39967 15.0368 8.05331 14.7586 7.78876 14.4955C7.13289 13.8263 6.62293 13.8188 6.05108 14.4203C5.72683 14.7812 5.53522 14.8865 5.07169 14.9391C4.74007 14.9391 4.34213 14.9398 4.13505 14.8489C3.50129 14.5782 3.5013 14.0173 4.13211 14.1571L4.48583 14.2323L4.29423 13.5782C4.19106 13.2173 4.04367 12.7782 3.97735 12.6L3.85208 12.2767L3.7268 12.5549C3.59415 12.8481 3.14462 12.9459 3.14462 12.6827C3.14536 12.6 3.22568 12.2541 3.32885 11.9203L3.50572 11.3113L3.1741 11.394C2.98987 11.4692 2.73931 11.5068 2.6214 11.5368C2.3561 11.6196 1.87637 10.6391 1.66266 9.59173C1.45631 8.5624 1.57422 6.88872 1.89847 6.2406C2.24483 5.55639 2.98765 5.01203 3.82039 4.83534C4.64796 4.66241 5.4549 4.83534 7.23459 5.64136C7.91256 5.94211 8.6377 6.22782 8.83889 6.27293C9.62445 6.45338 9.6333 6.4609 9.6333 6.90451C9.6333 7.23534 9.5596 7.33308 9.41221 7.33308C9.13218 7.33308 7.89119 6.96466 6.5065 6.46165C5.59049 6.13083 5.26477 6.07068 4.58311 6.10827C3.9125 6.10827 3.70174 6.21353 3.43792 6.46165C2.88522 6.98797 2.64793 7.61128 2.64793 8.53158C2.64793 9.33985 2.8469 10.3323 3.00903 10.3323C3.08272 10.3323 3.15641 10.0617 3.23747 9.73083C3.48066 8.75339 3.76806 8.38797 4.39887 8.22481C5.06948 8.05188 5.75335 8.04436 6.26994 8.22481C6.52787 8.3 6.85948 8.3 7.31049 8.14963C7.67158 8.05188 8.34293 7.9391 8.79761 7.89398C9.48296 7.8188 9.62445 7.7812 9.62445 7.59323C9.62445 7.47293 9.69814 7.33759 9.74973 7.29248C9.82342 7.21729 9.87501 7.05188 9.87501 6.84887C9.87501 6.64586 9.80131 6.48045 9.74973 6.48045C9.52865 6.48045 9.62445 5.99173 9.86027 5.86391C9.99292 5.78872 10.1256 5.73609 10.1698 5.73609C10.2435 5.73609 10.2435 6.8609 10.2435 8.23534V10.7346H10.9804H11.7173V8.2218C11.7173 5.98195 11.7173 5.71804 11.9089 5.78496C12.0121 5.86015 12.1521 5.86015 12.2184 5.86015C12.3806 5.86015 12.3585 6.45414 12.2184 6.51429C12.1153 6.51429 12.1226 6.72481 12.2184 7.1985L12.3806 7.83008L13.2494 7.90526C13.7284 7.98045 14.3828 8.06316 14.7063 8.1609C15.119 8.28872 15.4064 8.31128 15.685 8.23609C16.4926 8.00301 17.7992 8.1609 18.2517 8.58947C18.3696 8.69474 18.5612 9.10075 18.6717 9.48271C18.9444 10.4173 19.0328 10.4887 19.1876 9.9188C19.4087 9.09624 19.3571 7.77143 19.0697 7.16767C18.4875 5.9391 17.4455 5.81579 14.9768 6.68647C14.102 6.99474 13.1514 7.28045 12.864 7.32557L12.3408 7.40827V6.95714C12.3408 6.56617 12.4145 6.4985 12.6798 6.43835C13.1072 6.34812 14.2981 5.90451 15.7027 5.31053C16.5479 4.95714 16.9657 4.85188 17.5398 4.85188C19.3954 4.84737 20.4728 6.07444 20.4728 8.19248C20.4728 9.1421 20.237 10.2782 19.898 11.009C19.6253 11.588 19.5664 11.6105 18.87 11.4526L18.472 11.3624L18.6563 11.8887C18.7594 12.1744 18.8405 12.5203 18.8405 12.6474C18.8405 12.9632 18.531 12.9406 18.3025 12.6474C18.0888 12.3391 18.1183 12.294 17.7572 13.5188L17.5214 14.306L17.9046 14.2308C18.1846 14.2308 18.2952 14.2308 18.332 14.4038C18.4057 14.7496 17.6909 15.0429 16.968 14.9752C16.4521 14.9 16.2826 14.8399 15.9458 14.4639C15.6142 14.0955 15.4521 14.0128 15.0807 14.0128C14.7048 14.0128 14.5648 14.088 14.2841 14.4489C13.9009 14.9301 13.172 15.2053 12.5913 15.0729C11.8153 14.9 11.2184 13.8504 11.6466 13.4135C11.8529 13.203 11.9193 13.218 12.3467 13.5865L12.7225 13.9098V12.8278V11.7459L12.3688 12.0015C12.1772 12.1444 11.9266 12.2571 11.8161 12.2571C11.5434 12.2571 11.5729 11.8436 11.8898 11.5729C12.0224 11.4451 12.133 11.3023 12.133 11.2421C12.133 11.1669 11.6319 11.1368 11.0224 11.1368H9.91185L10.1624 11.4977C10.4498 11.9038 10.494 12.2594 10.2656 12.2586C10.1845 12.2586 9.93396 12.1459 9.71288 12.0105L9.31494 11.7624V12.8444V13.9263L9.5876 13.6707C10.1845 13.1218 10.5368 13.1744 10.5368 13.806C10.5368 14.3098 10.2862 14.6722 9.7571 14.9293C9.33705 15.1323 9.14545 15.1474 8.59791 15.0421L8.55443 15.0368ZM7.36502 13.0549C7.4903 12.8594 7.64506 12.7617 7.74823 12.8068C7.84403 12.882 8.00615 12.912 8.10932 12.9571C8.25671 13.0323 8.29355 12.882 8.29355 12.4158C8.29355 11.5496 7.91772 11.2466 7.41587 11.709C7.20216 11.9045 7.19479 11.8895 7.19479 11.2053C7.19479 10.4436 7.01793 9.96842 6.58314 9.56767L6.31047 9.31955L6.0157 9.69549C5.78725 9.9812 5.72093 10.2218 5.72093 10.7173C5.72093 11.0707 5.79462 11.5045 5.83884 11.6744C5.94938 11.9752 5.94201 11.9752 5.63987 11.8173C5.2493 11.6068 5.03558 11.6895 4.93978 12.0729C4.8145 12.5767 5.33036 13.4895 5.5367 13.1406C5.6546 12.9451 6.0894 12.9827 6.17046 13.2158C6.24415 13.3361 6.40628 13.4038 6.70105 13.4038C7.06215 13.4038 7.20953 13.3286 7.37165 13.0805L7.36502 13.0549ZM15.8382 13.1902C15.9193 12.9722 16.2657 12.9421 16.4499 13.115C16.6194 13.288 16.9584 12.8895 17.0542 12.4083C17.1279 12.1451 17.0542 11.9647 16.9289 11.8218C16.7447 11.6338 16.6931 11.6338 16.3541 11.8218C16.0077 12.0023 15.993 12.0023 16.1035 11.8218C16.4573 11.1226 16.3467 10.0241 15.8825 9.59474C15.6466 9.37669 15.6245 9.37669 15.3445 9.66993C14.9171 10.0835 14.755 10.5729 14.8065 11.3504L14.8802 12.0346L14.6297 11.794C14.1065 11.2902 13.7196 11.5759 13.7196 12.4481C13.7196 13.0872 13.7196 13.1173 14.088 12.9218C14.3828 12.7639 14.6628 12.8466 14.7365 13.1774C14.8102 13.3654 14.906 13.418 15.304 13.418C15.643 13.418 15.8346 13.3429 15.8788 13.2301L15.8382 13.1902ZM2.90364 14.0113C2.71941 13.6654 2.74889 13.2895 2.97734 13.209C3.19842 13.1188 3.53003 13.5774 3.53003 13.9684C3.53003 14.3293 3.10262 14.3594 2.92575 14.0436L2.90364 14.0113ZM18.5155 14.1241C18.3829 13.8985 18.5892 13.3947 18.825 13.2474C19.024 13.1421 19.083 13.1571 19.1493 13.3226C19.3335 13.8038 18.7587 14.5263 18.5155 14.1241ZM10.5707 13.0586C10.438 12.7053 10.4822 12.5098 10.7402 12.3744C11.116 12.1714 11.4992 12.4496 11.4476 12.8481C11.4476 13.1263 11.3371 13.194 11.0276 13.2241C10.7623 13.2241 10.6223 13.2241 10.5707 13.0586ZM0.764335 11.7083C0.50641 11.5203 0.469565 10.9639 0.690645 10.688C0.874877 10.4624 1.44084 10.4399 1.64644 10.6128C1.85278 10.8233 1.83068 11.409 1.57275 11.6414C1.33693 11.882 1.02742 11.8895 0.732646 11.6414L0.764335 11.7083ZM20.3718 11.6331C19.9665 11.1744 20.2466 10.4872 20.8435 10.4872C21.1309 10.4872 21.5141 10.8932 21.5141 11.2015C21.5141 11.4421 21.0572 11.8632 20.7993 11.8632C20.674 11.8632 20.4824 11.7534 20.3718 11.6331ZM10.6856 10.4158C10.5825 10.3105 10.494 10.1677 10.494 10.115C10.494 9.9797 10.8478 9.6188 10.9878 9.6188C11.0983 9.6188 11.4741 9.97218 11.4741 10.0699C11.4741 10.0699 11.4005 10.2429 11.3489 10.3707C11.1941 10.6639 10.9509 10.6789 10.6856 10.4459V10.4158ZM0.437139 10.0624C0.0244576 9.85188 0.0170862 9.11654 0.429767 8.90827C0.805602 8.71278 1.17923 8.82557 1.30893 9.17143C1.55212 9.81805 1.02152 10.3579 0.437139 10.0624ZM20.7145 9.80677C20.4934 9.45338 20.6187 9.08496 21.0388 8.85489C21.5915 8.55413 22.1928 9.49399 21.7389 9.96091C21.4809 10.2241 20.9282 10.1376 20.7145 9.80677ZM10.6252 9.13007C10.4704 8.82932 10.7284 8.44587 11.0379 8.50602C11.3842 8.58121 11.5537 8.92707 11.3548 9.16767C11.1337 9.43083 10.7726 9.41579 10.6178 9.16767L10.6252 9.13007ZM0.356812 8.34963C-0.15167 8.15414 -0.107452 7.22556 0.430507 7.08496C0.784234 6.98722 1.18144 7.20526 1.26324 7.53609C1.41062 8.1376 0.93899 8.56692 0.367132 8.35263L0.356812 8.34963ZM21.0609 8.35188C20.545 8.15639 20.5892 7.22632 21.1346 7.08496C21.503 6.98722 21.887 7.20527 21.9754 7.56617C22.1154 8.14511 21.6364 8.56616 21.0764 8.35338L21.0609 8.35188ZM10.6856 8.04361C10.5825 7.93835 10.494 7.79549 10.494 7.74286C10.494 7.60752 10.8478 7.24662 10.9878 7.24662C11.1204 7.24662 11.4741 7.60752 11.4741 7.74286C11.4741 7.88572 11.1204 8.24662 10.9878 8.24662C10.9141 8.24662 10.7962 8.15639 10.693 8.05113L10.6856 8.04361ZM10.6119 6.7579C10.4572 6.45714 10.7151 6.07368 11.0246 6.13383C11.371 6.20902 11.5405 6.55489 11.3415 6.79549C11.1204 7.06617 10.7593 7.04361 10.6046 6.79549L10.6119 6.7579ZM0.559466 6.48722C0.264694 6.18647 0.249957 6.00602 0.485775 5.6406C0.839502 5.12181 1.64202 5.4 1.64202 6.04662C1.64202 6.6782 0.986154 6.93835 0.540311 6.48271L0.559466 6.48722ZM20.4816 6.48722C20.0763 6.02857 20.3564 5.34135 20.9533 5.34135C21.2407 5.34135 21.6239 5.74737 21.6239 6.05564C21.6239 6.29624 21.167 6.71729 20.9091 6.71729C20.7838 6.71729 20.5922 6.60752 20.4816 6.48722ZM8.10048 5.77293C7.83518 5.50978 7.85729 5.14887 8.17417 4.84511C8.46894 4.54436 8.6458 4.52932 9.00469 4.76993C9.29946 4.98045 9.35105 5.32631 9.15207 5.70827C8.99732 6.00902 8.39746 6.03158 8.12406 5.78346L8.10048 5.77293ZM12.8773 5.77293C12.612 5.50978 12.6341 5.14887 12.951 4.84511C13.2457 4.54436 13.4226 4.52932 13.7815 4.76993C14.29 5.13835 14.0173 5.95038 13.3762 5.95038C13.2214 5.95038 13.0003 5.86015 12.8972 5.75489L12.8773 5.77293ZM10.2597 5.63759C9.9207 5.46466 9.50065 4.93083 9.50065 4.66541C9.50065 4.59023 10.1639 4.59023 10.9701 4.59023C11.7785 4.59023 12.4395 4.59023 12.4395 4.66541C12.4395 4.66541 12.3585 4.8985 12.2553 5.1015C11.9016 5.79323 11.0364 6.03083 10.2597 5.63759ZM1.66118 5.09624C1.52853 4.9609 1.41799 4.77293 1.41799 4.69023C1.41799 4.38196 1.80119 3.97594 2.0886 3.97594C2.70025 3.97594 2.98839 4.73008 2.53813 5.14286C2.24336 5.42106 1.95595 5.40602 1.6597 5.06767L1.66118 5.09624ZM6.56103 5.09624C6.26626 4.79549 6.25152 4.61504 6.48734 4.24963C6.69368 3.94135 7.25301 3.87368 7.49693 4.1218C7.74012 4.36992 7.6738 4.93759 7.37165 5.15188C7.01056 5.40752 6.83369 5.4 6.54187 5.07669L6.56103 5.09624ZM14.5221 5.09624C14.2494 4.81805 14.2126 4.56993 14.4042 4.21354C14.6621 3.7173 15.6245 4.02556 15.6245 4.60451C15.6245 4.89022 15.2119 5.34887 14.9539 5.34887C14.8508 5.34887 14.6547 5.23158 14.5221 5.09624ZM19.3792 5.09624C19.1139 4.79549 19.1213 4.41203 19.3792 4.15639C19.6887 3.87068 20.0866 3.90075 20.3114 4.23158C20.562 4.6 20.5546 4.78045 20.2377 5.0782C19.9356 5.38647 19.604 5.4015 19.3379 5.0782L19.3792 5.09624ZM4.92652 4.47218C4.66122 4.17143 4.66859 3.78797 4.92652 3.53233C5.22129 3.26165 5.59713 3.26917 5.84768 3.53233C6.12035 3.83308 6.10561 4.12632 5.77399 4.42857C5.47185 4.73684 5.14023 4.75188 4.87493 4.42857L4.92652 4.47218ZM16.1146 4.47218C15.9819 4.33684 15.8714 4.14887 15.8714 4.06616C15.8714 3.75789 16.2546 3.35188 16.542 3.35188C17.1537 3.35188 17.4418 4.10677 16.9915 4.51955C16.6968 4.79775 16.4094 4.78271 16.1131 4.44436L16.1146 4.47218ZM3.10925 4.28421C2.93975 3.90075 3.10925 3.41278 3.46298 3.3203C4.05989 3.16241 4.53373 3.77895 4.24044 4.33459C4.0341 4.73308 3.29569 4.70301 3.10998 4.2594L3.10925 4.28421ZM17.7005 4.3594C17.3615 3.71278 18.0468 3.03459 18.6415 3.43384C18.9584 3.64436 19.0395 4.21353 18.7815 4.47143C18.531 4.72707 17.856 4.65263 17.7005 4.3594ZM9.50065 3.93083C9.50065 3.54737 10.2833 2.75038 10.6576 2.75038C10.6576 2.75038 10.7313 3.02857 10.7313 3.37444V3.9985H10.1197C9.78068 3.9985 9.50801 3.9985 9.50801 3.92331L9.50065 3.93083ZM11.2147 3.37444C11.2147 3.02857 11.2147 2.75038 11.2884 2.75038C11.6643 2.75038 12.4454 3.54962 12.4454 3.93158C12.4454 4.00677 12.1728 4.00677 11.8338 4.00677H11.2221V3.38271L11.2147 3.37444ZM10.4557 2.34962C10.6252 2.17669 10.6473 1.79323 10.5294 1.69549C10.4557 1.6203 10.2788 1.77068 10.102 1.88346L9.7851 2.1391V1.24662V0.353383L10.1094 0.616542C10.5368 0.954888 10.7652 0.766918 10.4704 0.31579L10.2641 0H11.0821C11.8669 0 11.892 -9.41126e-08 11.6938 0.225564C11.48 0.466165 11.4211 0.87218 11.5979 0.87218C11.6716 0.87218 11.8485 0.759399 12.0254 0.616542L12.3496 0.360903V1.2406V2.1203L11.9222 1.86466C11.5537 1.64662 11.4874 1.63158 11.4211 1.78947C11.3474 1.89474 11.4211 2.09775 11.4948 2.2406C11.6274 2.48872 11.598 2.50376 10.9937 2.50376C10.4926 2.50376 10.382 2.50376 10.4999 2.35338L10.4557 2.34962Z",
            fill: "#000"
          }
        )
      }
    );
  }
  function DPDIcon({ width = 17, height = 20, ...props }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width,
        height,
        viewBox: "0 0 17 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("g", { clipPath: "url(#clip0_12235_10065)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M11.7997 8.93333C11.7205 8.98667 11.5885 8.98667 11.5093 8.93333L11.0606 8.66667C11.0342 8.64 10.9814 8.61333 10.955 8.56C10.9286 8.50667 10.9022 8.45333 10.9022 8.42667V7.89333C10.9022 7.81333 10.955 7.68 11.0342 7.65333L16.5512 4.4L8.79037 0.133333C8.71118 0.0266667 8.60559 0 8.5 0C8.39441 0 8.26242 0.0266667 8.18323 0.08L0.42236 4.34667L9.10714 9.46667C9.18633 9.52 9.23913 9.62667 9.23913 9.70667V17.1467C9.23913 17.2533 9.15994 17.36 9.08075 17.3867L8.60559 17.6533C8.57919 17.68 8.5264 17.68 8.4736 17.68C8.42081 17.68 8.36801 17.68 8.31522 17.6533L7.84006 17.3867C7.76087 17.3333 7.70807 17.2267 7.70807 17.1467V10.5067C7.70807 10.4533 7.68168 10.4 7.62888 10.3733L0 5.86667V14.6933C0 14.88 0.131988 15.1467 0.31677 15.2267L8.18323 19.92C8.26242 19.9733 8.36801 20 8.5 20C8.60559 20 8.71118 19.9733 8.81677 19.92L16.7096 15.2267C16.868 15.12 17.0264 14.88 17.0264 14.6933V5.86667L11.7997 8.93333Z",
              fill: "url(#paint0_linear_12235_10065)"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "linearGradient",
              {
                id: "paint0_linear_12235_10065",
                x1: "0.0821093",
                y1: "16.9732",
                x2: "8.75628",
                y2: "9.76821",
                gradientUnits: "userSpaceOnUse",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "#A90034" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0.2717", stopColor: "#BB0033" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0.7226", stopColor: "#D30032" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "#DC0032" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "clip0_12235_10065", children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "17", height: "20", fill: "white" }) })
          ] })
        ]
      }
    );
  }
  function LoadingSpinner({ size = 20 }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
          .spinner_Wezc {
            transform-origin: center;
            animation: spinner_Oiah .75s step-end infinite
          }

          @keyframes spinner_Oiah {
            8.3% { transform: rotate(30deg) }
            16.6% { transform: rotate(60deg) }
            25% { transform: rotate(90deg) }
            33.3% { transform: rotate(120deg) }
            41.6% { transform: rotate(150deg) }
            50% { transform: rotate(180deg) }
            58.3% { transform: rotate(210deg) }
            66.6% { transform: rotate(240deg) }
            75% { transform: rotate(270deg) }
            83.3% { transform: rotate(300deg) }
            91.6% { transform: rotate(330deg) }
            100% { transform: rotate(360deg) }
          }
        ` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "spinner_Wezc", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "2.5", r: "1.5", opacity: ".14" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16.75", cy: "3.77", r: "1.5", opacity: ".29" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20.23", cy: "7.25", r: "1.5", opacity: ".43" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "21.50", cy: "12.0", r: "1.5", opacity: ".57" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20.23", cy: "16.75", r: "1.5", opacity: ".71" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16.75", cy: "20.23", r: "1.5", opacity: ".86" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "21.5", r: "1.5" })
          ] })
        ]
      }
    );
  }
  function ResetDeviceIcon() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "56",
        height: "56",
        viewBox: "0 0 56 56",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "56", height: "56", rx: "16", fill: "#F4F4F4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("g", { clipPath: "url(#clip0_12235_10421)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M38.4422 27.988C37.6852 27.9947 37.0492 28.5586 36.9518 29.3093C36.2306 34.2367 31.6515 37.6465 26.7241 36.9253C21.7967 36.2041 18.3869 31.625 19.108 26.6976C19.8292 21.7702 24.4083 18.3604 29.3357 19.0816C31.0153 19.3274 32.5914 20.0424 33.8827 21.1442L32.7516 22.2753C32.3607 22.6663 32.3608 23.3001 32.7518 23.691C32.9402 23.8793 33.1959 23.9848 33.4623 23.984H38.0528C38.6056 23.984 39.0538 23.5359 39.0538 22.9831V18.3925C39.0537 17.8397 38.6054 17.3916 38.0526 17.3917C37.7872 17.3918 37.5327 17.4972 37.3451 17.6848L36.0118 19.0181C31.0513 14.6233 23.4673 15.0818 19.0724 20.0423C14.6775 25.0028 15.1361 32.5869 20.0966 36.9818C25.0571 41.3767 32.6411 40.9181 37.036 35.9576C38.5831 34.2113 39.5876 32.052 39.9267 29.7437C40.0594 28.9173 39.497 28.1398 38.6706 28.0071C38.5951 27.995 38.5188 27.9886 38.4422 27.988Z",
              fill: "black"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { className: "clip0_12235_10421", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              width: "24",
              height: "24",
              fill: "white",
              transform: "translate(16 16)"
            }
          ) }) })
        ]
      }
    );
  }
  function PackageIcon() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "56",
        height: "56",
        viewBox: "0 0 56 56",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "56", height: "56", rx: "16", fill: "#F4F4F4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { clipPath: "url(#clip0_12235_10427)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M35 16H21C19.6739 16 18.4021 16.5268 17.4645 17.4645C16.5268 18.4021 16 19.6739 16 21V21C16 21.7956 16.3161 22.5587 16.8787 23.1213C17.4413 23.6839 18.2044 24 19 24H37C37.7605 24.0093 38.4956 23.7264 39.0538 23.2098C39.612 22.6931 39.9506 21.982 40 21.223C40.0294 20.548 39.9219 19.8741 39.6839 19.2418C39.4459 18.6095 39.0823 18.032 38.6152 17.544C38.148 17.0559 37.5868 16.6675 36.9655 16.4022C36.3442 16.1368 35.6756 16 35 16V16Z",
                fill: "black"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M38 25.9999H18C17.7348 25.9999 17.4804 26.1053 17.2929 26.2928C17.1054 26.4804 17 26.7347 17 26.9999V34.9999C17.0016 36.3255 17.5289 37.5964 18.4662 38.5337C19.4036 39.4711 20.6744 39.9984 22 39.9999H34C35.3256 39.9984 36.5964 39.4711 37.5338 38.5337C38.4711 37.5964 38.9984 36.3255 39 34.9999V26.9999C39 26.7347 38.8946 26.4804 38.7071 26.2928C38.5196 26.1053 38.2652 25.9999 38 25.9999ZM31 30.9999H25C24.7348 30.9999 24.4804 30.8946 24.2929 30.707C24.1054 30.5195 24 30.2652 24 29.9999C24 29.7347 24.1054 29.4804 24.2929 29.2928C24.4804 29.1053 24.7348 28.9999 25 28.9999H31C31.2652 28.9999 31.5196 29.1053 31.7071 29.2928C31.8946 29.4804 32 29.7347 32 29.9999C32 30.2652 31.8946 30.5195 31.7071 30.707C31.5196 30.8946 31.2652 30.9999 31 30.9999Z",
                fill: "black"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { className: "clip0_12235_10427", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              width: "24",
              height: "24",
              fill: "white",
              transform: "translate(16 16)"
            }
          ) }) })
        ]
      }
    );
  }
  function DeliveryIcon() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "56",
        height: "56",
        viewBox: "0 0 56 56",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "56", height: "56", rx: "16", fill: "#F4F4F4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M31 33.9994H20C18.9391 33.9994 17.9217 33.578 17.1716 32.8278C16.4214 32.0777 16 31.0603 16 29.9994V21.9994C16 20.6733 16.5268 19.4015 17.4645 18.4639C18.4021 17.5262 19.6739 16.9994 21 16.9994H26C26.6566 16.9994 27.3068 17.1287 27.9134 17.38C28.52 17.6313 29.0712 17.9996 29.5355 18.4639C29.9998 18.9281 30.3681 19.4793 30.6194 20.086C30.8707 20.6926 31 21.3428 31 21.9994V33.9994ZM40 26.9994V25.9994C40 25.3428 39.8707 24.6926 39.6194 24.086C39.3681 23.4793 38.9998 22.9281 38.5355 22.4639C38.0712 21.9996 37.52 21.6313 36.9134 21.38C36.3068 21.1287 35.6566 20.9994 35 20.9994H33V26.9994H40ZM33 28.9994V33.9994H36C37.0609 33.9994 38.0783 33.578 38.8284 32.8278C39.5786 32.0777 40 31.0603 40 29.9994V28.9994H33ZM20.058 35.9994C20.0214 36.1636 20.0019 36.3312 20 36.4994C20 37.1624 20.2634 37.7983 20.7322 38.2672C21.2011 38.736 21.837 38.9994 22.5 38.9994C23.163 38.9994 23.7989 38.736 24.2678 38.2672C24.7366 37.7983 25 37.1624 25 36.4994C24.9981 36.3312 24.9786 36.1636 24.942 35.9994H20.058ZM31.058 35.9994C31.0214 36.1636 31.0019 36.3312 31 36.4994C31 37.1624 31.2634 37.7983 31.7322 38.2672C32.2011 38.736 32.837 38.9994 33.5 38.9994C34.163 38.9994 34.7989 38.736 35.2678 38.2672C35.7366 37.7983 36 37.1624 36 36.4994C35.9981 36.3312 35.9786 36.1636 35.942 35.9994H31.058Z",
              fill: "black"
            }
          )
        ]
      }
    );
  }
  function DownloadIcon() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M8 10.667L4.667 7.333L5.6 6.367L7.333 8.1V1.333H8.667V8.1L10.4 6.367L11.333 7.333L8 10.667ZM2.667 14.667C2.3 14.667 1.986 14.536 1.726 14.274C1.466 14.014 1.336 13.7 1.333 13.333V10.667H2.667V13.333H13.333V10.667H14.667V13.333C14.667 13.7 14.536 14.014 14.274 14.274C14.014 14.536 13.7 14.667 13.333 14.667H2.667Z",
            fill: "currentColor"
          }
        )
      }
    );
  }
  function PaymentIcon() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "56",
        height: "56",
        viewBox: "0 0 56 56",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "56", height: "56", rx: "16", fill: "#F4F4F4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M36.5 37H24.493C24.8474 36.0403 25.0193 35.0228 25 34V30H30.5C30.8978 30 31.2794 29.842 31.5607 29.5607C31.842 29.2794 32 28.8978 32 28.5C32 28.1022 31.842 27.7206 31.5607 27.4393C31.2794 27.158 30.8978 27 30.5 27H25V24C25.0025 22.7155 25.498 21.481 26.3842 20.5512C27.2704 19.6214 28.4798 19.0672 29.7627 19.0031C31.0455 18.9389 32.3041 19.3697 33.2787 20.2064C34.2532 21.0432 34.8694 22.2222 35 23.5C35 23.8978 35.158 24.2794 35.4393 24.5607C35.7206 24.842 36.1022 25 36.5 25C36.8978 25 37.2794 24.842 37.5607 24.5607C37.842 24.2794 38 23.8978 38 23.5C38 19.505 34.262 16 30 16C27.879 16.0024 25.8456 16.846 24.3458 18.3458C22.846 19.8456 22.0024 21.879 22 24V27H20.5C20.1022 27 19.7206 27.158 19.4393 27.4393C19.158 27.7206 19 28.1022 19 28.5C19 28.8978 19.158 29.2794 19.4393 29.5607C19.7206 29.842 20.1022 30 20.5 30H22V34C22 36.583 21.263 37 19.5 37C19.1022 37 18.7206 37.158 18.4393 37.4393C18.158 37.7206 18 38.1022 18 38.5C18 38.8978 18.158 39.2794 18.4393 39.5607C18.7206 39.842 19.1022 40 19.5 40H36.5C36.8978 40 37.2794 39.842 37.5607 39.5607C37.842 39.2794 38 38.8978 38 38.5C38 38.1022 37.842 37.7206 37.5607 37.4393C37.2794 37.158 36.8978 37 36.5 37Z",
              fill: "black"
            }
          )
        ]
      }
    );
  }
  function Drawer({
    title,
    canGoBack,
    onBack,
    onClose,
    children
  }) {
    const [isVisible, setIsVisible] = reactExports.useState(false);
    reactExports.useEffect(() => {
      requestAnimationFrame(() => setIsVisible(true));
    }, []);
    const handleOverlayClick = reactExports.useCallback(
      (e) => {
        if (e.target === e.currentTarget) onClose();
      },
      [onClose]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        id: "wishlist-modal-wrapper",
        className: `${isVisible ? "drawer-open" : "drawer-closing"}`,
        onClick: handleOverlayClick,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "wishlist-modal-content", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "wishlist-modal-header", children: [
            canGoBack ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: onBack,
                style: {
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: 0,
                  fontWeight: 500,
                  fontFamily: "Albert Sans",
                  fontStyle: "Medium",
                  fontSize: "16px",
                  lineHeight: "100%"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BackArrowIcon, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1F1F1F" }, children: "Back" })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                id: "wishlist-close",
                onClick: onClose,
                style: {
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0
                },
                "aria-label": "Close drawer",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseIcon, {})
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "wishlist-modal-body", children })
        ] })
      }
    );
  }
  function useDrawerNavigation(initialView = "search") {
    const [stack, setStack] = reactExports.useState([{ view: initialView, params: {} }]);
    const current = stack[stack.length - 1];
    const navigate = reactExports.useCallback((view, params = {}) => {
      setStack((prev) => [...prev, { view, params }]);
    }, []);
    const goBack = reactExports.useCallback(() => {
      setStack((prev) => prev.length > 1 ? prev.slice(0, -1) : prev);
    }, []);
    const reset = reactExports.useCallback(() => {
      setStack([{ view: initialView, params: {} }]);
    }, [initialView]);
    return {
      currentView: current.view,
      params: current.params,
      canGoBack: stack.length > 1,
      navigate,
      goBack,
      reset
    };
  }
  const API_BASE = "https://staging.mobiledirectonline.co.uk/api";
  const PRODUCT_VARIANT_API = `${API_BASE}/products/variant`;
  const OFFER_API = `${API_BASE}/offers`;
  const VARIANT_OFFER_API = `${API_BASE}/variants`;
  const TRADE_IN_OFFER_KEY = "tradeInOffer";
  const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' rx='8' fill='%23f0f0f0'/%3E%3Cpath d='M28 50l8-10 6 7 10-13 12 16H16z' fill='%23ccc'/%3E%3Ccircle cx='30' cy='30' r='5' fill='%23ccc'/%3E%3C/svg%3E";
  function removeFalsyKeys(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, v]) => Boolean(v)));
  }
  const StoreHelper = {
    get(key) {
      if (typeof window === "undefined") return null;
      return window.localStorage.getItem(key);
    },
    set(key, value) {
      if (typeof window === "undefined") return;
      try {
        window.localStorage.setItem(
          key,
          typeof value !== "string" ? JSON.stringify(value) : value
        );
      } catch {
      }
    },
    delete(key) {
      if (typeof window !== "undefined") window.localStorage.removeItem(key);
    },
    sessionGet: (key) => typeof window !== "undefined" ? window.sessionStorage.getItem(key) : null,
    sessionSet(key, value) {
      if (typeof window === "undefined") return;
      try {
        window.sessionStorage.setItem(
          key,
          typeof value !== "string" ? JSON.stringify(value) : value
        );
      } catch {
      }
    },
    sessionDelete(key) {
      if (typeof window !== "undefined") window.sessionStorage.removeItem(key);
    }
  };
  const VALIDATORS = {
    email: (v) => {
      if (!v) return "Please Enter Your Email!";
      if (!/^([A-Za-z\d._%+-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,8})(\.[A-Za-z]{2,8})?$/.test(
        v
      ))
        return "Please Enter Valid Email";
      if (v.length > 254) return "Email cannot exceed 254 characters";
      return "";
    },
    fname: (v) => {
      if (!v) return "First Name is Required!";
      if (!/^[a-zA-Z\s]+$/.test(v)) return "First Name must contain only letters";
      if (v.length > 50) return "First Name cannot exceed 50 characters";
      return "";
    },
    lname: (v) => {
      if (!v) return "Last Name is Required!";
      if (!/^[a-zA-Z\s]+$/.test(v)) return "Last Name must contain only letters";
      if (v.length > 50) return "Last Name cannot exceed 50 characters";
      return "";
    },
    phone: (v) => {
      if (!v) return "Phone number is required";
      if (!/^\d{10,11}$/.test(v))
        return "Enter a 10 or 11 digit phone number. Without spaces";
      return "";
    },
    addressLineOne: (v) => {
      if (!v) return "Address is Required!";
      return "";
    },
    paymentMethod: (v) => {
      if (!v) return "Payment Method is Required!";
      return "";
    },
    shippingMethod: (v) => {
      if (!v) return "Shipping Method is Required!";
      return "";
    },
    accountTitle: (v, form) => {
      if (form.paymentMethod !== "bank") return "";
      if (!v) return "Account Title is Required!";
      if (!/^[a-zA-Z\s]+$/.test(v))
        return "Account Title must contain only letters and spaces";
      if (v.length > 50) return "Account Title cannot exceed 50 characters";
      return "";
    },
    sortCode: (v, form) => {
      if (form.paymentMethod !== "bank") return "";
      if (!v) return "Sort Code is Required!";
      if (!/^\d{6}$/.test(v.replace(/-/g, "")))
        return "Sort Code must be exactly 6 digits";
      return "";
    },
    accountNumber: (v, form) => {
      if (form.paymentMethod !== "bank") return "";
      if (!v) return "Account Number is Required!";
      if (!/^\d{8}$/.test(v)) return "Account Number must be exactly 8 digits";
      return "";
    },
    paypalEmail: (v, form) => {
      if (form.paymentMethod !== "paypal") return "";
      if (!v) return "Paypal Email is Required!";
      return VALIDATORS.email(v);
    },
    imeiNumber: (v) => {
      if (!v) return "";
      if (!/^\d{15}$/.test(v)) return "IMEI must be exactly 15 digits";
      return "";
    }
  };
  const validateAll = (formValues) => {
    const errors = {};
    Object.keys(VALIDATORS).forEach((field) => {
      const error = VALIDATORS[field](formValues[field], formValues);
      if (error) errors[field] = error;
    });
    return errors;
  };
  var propTypes = { exports: {} };
  var ReactPropTypesSecret_1;
  var hasRequiredReactPropTypesSecret;
  function requireReactPropTypesSecret() {
    if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
    hasRequiredReactPropTypesSecret = 1;
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    ReactPropTypesSecret_1 = ReactPropTypesSecret;
    return ReactPropTypesSecret_1;
  }
  var factoryWithThrowingShims;
  var hasRequiredFactoryWithThrowingShims;
  function requireFactoryWithThrowingShims() {
    if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
    hasRequiredFactoryWithThrowingShims = 1;
    var ReactPropTypesSecret = /* @__PURE__ */ requireReactPropTypesSecret();
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    factoryWithThrowingShims = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
    return factoryWithThrowingShims;
  }
  var hasRequiredPropTypes;
  function requirePropTypes() {
    if (hasRequiredPropTypes) return propTypes.exports;
    hasRequiredPropTypes = 1;
    {
      propTypes.exports = /* @__PURE__ */ requireFactoryWithThrowingShims()();
    }
    return propTypes.exports;
  }
  var propTypesExports = /* @__PURE__ */ requirePropTypes();
  const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
  function CheckoutContactForm({
    formValues,
    setFormValue,
    saveSession,
    errors,
    clearError,
    handleBlur
  }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "checkout-section-label", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "checkout-input-wrapper",
            className: `${errors.email ? "has-error" : ""} ${formValues.email ? "has-value" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  name: "email",
                  id: "checkout-input",
                  value: formValues.email,
                  onChange: (e) => {
                    setFormValue("email", e.target.value);
                    if (errors.email) clearError("email");
                    saveSession({ name: "email", value: e.target.value });
                  },
                  onBlur: handleBlur,
                  placeholder: " ",
                  autoComplete: "email"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { id: "checkout-input-label", htmlFor: "checkout-input", children: "Email" })
            ]
          }
        ),
        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "checkout-error-text", children: errors.email })
      ] })
    ] });
  }
  CheckoutContactForm.propTypes = {
    formValues: PropTypes.object.isRequired,
    setFormValue: PropTypes.func.isRequired,
    saveSession: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };
  function SwatchGroup({ options, value, onChange, error }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swatch-group", children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: `swatch ${value === opt.value ? "selected" : ""}`,
          onClick: () => onChange(opt.value),
          disabled: opt.disabled,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swatch-item__body", children: [
              opt.icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "swatch-item__icon", children: opt.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "swatch-item__text", children: opt.label })
            ] }),
            opt.description && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "swatch-item__sub-text", children: opt.description })
          ]
        },
        opt.value
      )) }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "checkout-error-text", children: error })
    ] });
  }
  SwatchGroup.propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        icon: PropTypes.node,
        description: PropTypes.string,
        disabled: PropTypes.bool
      })
    ).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
  };
  const PAYMENT_OPTIONS = [
    {
      value: "bank",
      label: "Bank",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BankIcon, { width: 18, height: 18 })
    },
    {
      value: "paypal",
      label: "PayPal",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PaypalIcon, { width: 18, height: 18 })
    }
  ];
  const CheckoutPaymentDetails = ({
    formValues,
    setFormValue,
    errors,
    saveSession,
    clearError
  }) => {
    const handleBlur = (e) => {
      const { name, value } = e.target;
      saveSession({ name, value });
    };
    const handlePaymentMethod = (value) => {
      setFormValue("paymentMethod", value);
      saveSession({ name: "paymentMethod", value });
    };
    const handleAccountTitleChange = (e) => {
      setFormValue("accountTitle", e.target.value);
      if (errors.accountTitle) clearError("accountTitle");
      saveSession({ name: "accountTitle", value: e.target.value });
    };
    const handleSortCodeChange = (e) => {
      let val = e.target.value.replace(/\D/g, "").slice(0, 6);
      if (val.length > 4)
        val = `${val.slice(0, 2)}-${val.slice(2, 4)}-${val.slice(4)}`;
      else if (val.length > 2) val = `${val.slice(0, 2)}-${val.slice(2)}`;
      setFormValue("sortCode", val);
    };
    const handleAccountNumberChange = (e) => {
      const numericValue = e.target.value.replace(/[^0-9]/g, "");
      setFormValue("accountNumber", numericValue);
      if (errors.accountNumber) clearError("accountNumber");
      saveSession({ name: "accountNumber", value: numericValue });
    };
    const handlePaypalEmailChange = (e) => {
      setFormValue("paypalEmail", e.target.value);
      if (errors.paypalEmail) clearError("paypalEmail");
      saveSession({ name: "paypalEmail", value: e.target.value });
    };
    const isBank = formValues.paymentMethod === "bank";
    const isPaypal = formValues.paymentMethod === "paypal";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "checkout-section-label", children: "Payment Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwatchGroup,
        {
          options: PAYMENT_OPTIONS,
          value: formValues.paymentMethod,
          onChange: handlePaymentMethod,
          error: errors.paymentMethod
        }
      ),
      isBank && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-bank-fields", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              id: "checkout-input-wrapper",
              className: `${errors.accountTitle ? "has-error" : ""} ${formValues.accountTitle ? "has-value" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    name: "accountTitle",
                    id: "checkout-input",
                    value: formValues.accountTitle,
                    onChange: handleAccountTitleChange,
                    onBlur: handleBlur,
                    placeholder: " ",
                    autoComplete: "name"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { id: "checkout-input-label", htmlFor: "checkout-input", children: "Account Name" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "e.g Elon Musk" }),
          errors.accountTitle && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "checkout-error-text", children: errors.accountTitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-bank-full-width", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                id: "checkout-input-wrapper",
                className: `${errors.sortCode ? "has-error" : ""} ${formValues.sortCode ? "has-value" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      name: "sortCode",
                      id: "checkout-input",
                      value: formValues.sortCode,
                      onChange: handleSortCodeChange,
                      onBlur: handleBlur,
                      placeholder: " ",
                      inputMode: "numeric",
                      maxLength: 8
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { id: "checkout-input-label", htmlFor: "checkout-input", children: "Sort Code" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Example: 560036" }),
            errors.sortCode && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "checkout-error-text", children: errors.sortCode })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                id: "checkout-input-wrapper",
                className: `${errors.accountNumber ? "has-error" : ""} ${formValues.accountNumber ? "has-value" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      name: "accountNumber",
                      id: "checkout-input",
                      value: formValues.accountNumber,
                      onChange: handleAccountNumberChange,
                      onBlur: handleBlur,
                      placeholder: " ",
                      inputMode: "numeric",
                      maxLength: 8
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { id: "checkout-input-label", htmlFor: "checkout-input", children: "Account Number" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Example: 12345678" }),
            errors.accountNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "checkout-error-text", children: errors.accountNumber })
          ] })
        ] })
      ] }),
      isPaypal && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "checkout-input-wrapper",
            className: `${errors.paypalEmail ? "has-error" : ""} ${formValues.paypalEmail ? "has-value" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  name: "paypalEmail",
                  id: "checkout-input",
                  value: formValues.paypalEmail,
                  onChange: handlePaypalEmailChange,
                  onBlur: handleBlur,
                  placeholder: " ",
                  autoComplete: "email"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { id: "checkout-input-label", htmlFor: "checkout-input", children: "PayPal Email" })
            ]
          }
        ),
        errors.paypalEmail && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "checkout-error-text", children: errors.paypalEmail }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: "checkout-paypal-note", children: "You will receive a PayPal payment within 24 hours after we receive and inspect your device." })
      ] })
    ] });
  };
  CheckoutPaymentDetails.propTypes = {
    formValues: PropTypes.object.isRequired,
    setFormValue: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    saveSession: PropTypes.func.isRequired,
    clearError: PropTypes.func.isRequired
  };
  const BASE_API_URL$1 = "https://staging.mobiledirectonline.co.uk/api";
  const CheckoutPostCodeLookup = ({ onAddressSelected, formValues }) => {
    const { postCode, city } = formValues;
    const [query, setQuery] = reactExports.useState("");
    const [suggestions, setSuggestions] = reactExports.useState([]);
    const [isSearching, setIsSearching] = reactExports.useState(false);
    const debounceRef = reactExports.useRef(null);
    const containerRef = reactExports.useRef(null);
    const search = reactExports.useCallback(async (q) => {
      if (!q || q.length < 2) {
        setSuggestions([]);
        return;
      }
      setIsSearching(true);
      try {
        const res = await fetch(
          `${BASE_API_URL$1}/address/autocomplete?query=${encodeURIComponent(q)}`
        );
        const data = await res.json();
        setSuggestions((data == null ? void 0 : data.data) || []);
      } catch {
        setSuggestions([]);
      } finally {
        setIsSearching(false);
      }
    }, []);
    const handleChange = reactExports.useCallback(
      (e) => {
        const val = e.target.value;
        setQuery(val);
        clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => search(val), 300);
      },
      [search]
    );
    const handleSelect = reactExports.useCallback(
      async (item) => {
        var _a, _b;
        const displayText = item.address || item.suggestion || "";
        try {
          const res = await fetch(
            `${BASE_API_URL$1}/address/details/${item.udprn}`
          );
          const data = await res.json();
          if (data.success) {
            onAddressSelected({
              addressLineOne: displayText,
              city: ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.post_town) || "",
              postCode: ((_b = data == null ? void 0 : data.data) == null ? void 0 : _b.postcode) || ""
            });
          }
        } catch {
          onAddressSelected({
            addressLineOne: displayText,
            city: "",
            postCode: ""
          });
        }
        setSuggestions([]);
        setQuery(displayText);
      },
      [onAddressSelected]
    );
    reactExports.useEffect(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          setSuggestions([]);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "postcode-autocomplete", ref: containerRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "postcode-autocomplete__input-wrapper", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: "postcode-autocomplete__input",
            value: query,
            onChange: handleChange,
            placeholder: " ",
            autoComplete: "off"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "postcode-autocomplete__label", children: "Enter your postcode or address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "postcode-autocomplete__icon", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchIcon, { width: 20, height: 20 }) })
      ] }),
      suggestions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "postcode-autocomplete__dropdown", role: "listbox", children: suggestions.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "postcode-autocomplete__option",
          onClick: () => handleSelect(item),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "postcode-autocomplete__option-text", children: item.address || item.suggestion }),
            item.post_town && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "postcode-autocomplete__option-subtitle", children: item.post_town })
          ]
        }
      ) }, item.id || i)) }),
      isSearching && suggestions.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "postcode-autocomplete__loading-message", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "postcode-autocomplete__spinner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Searching..." })
      ] }),
      (postCode || city) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "postcode-autocomplete__readonly-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "postcode-autocomplete__readonly-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: postCode || "",
              readOnly: true,
              className: "postcode-autocomplete__readonly-input",
              placeholder: " "
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "postcode-autocomplete__label postcode-autocomplete__label--compact", children: "Postcode" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "postcode-autocomplete__readonly-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: city || "",
              readOnly: true,
              className: "postcode-autocomplete__readonly-input",
              placeholder: " "
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "postcode-autocomplete__label postcode-autocomplete__label--compact", children: "City" })
        ] })
      ] })
    ] });
  };
  const CheckoutPersonalInfo = ({
    formValues,
    setFormValue,
    errors,
    saveSession,
    clearError
  }) => {
    const handleBlur = (e) => {
      const { name, value } = e.target;
      saveSession({ name, value });
    };
    const handleAddressSelected = (address) => {
      if (address) {
        const addressFields = {
          addressLineOne: address.addressLineOne || "",
          city: address.city || "",
          postCode: address.postCode || "",
          country: "UK"
        };
        Object.entries(addressFields).forEach(([name, value]) => {
          setFormValue(name, value);
          saveSession({ name, value });
        });
      }
    };
    const handleImeiChange = (e) => {
      const value = e.target.value;
      if (!/^\d{0,15}$/.test(value)) return;
      setFormValue("imeiNumber", value);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "checkout-section-label", children: "Personal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              id: "checkout-input-wrapper",
              className: `${errors.fname ? "has-error" : ""} ${formValues.fname ? "has-value" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    name: "fname",
                    id: "checkout-input",
                    value: formValues.fname,
                    onChange: (e) => {
                      setFormValue("fname", e.target.value);
                      if (errors.fname) clearError("fname");
                      saveSession({ name: "fname", value: e.target.value });
                    },
                    onBlur: handleBlur,
                    placeholder: " ",
                    autoComplete: "given-name"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { id: "checkout-input-label", htmlFor: "checkout-input", children: "First Name" })
              ]
            }
          ),
          errors.fname && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "checkout-error-text", children: errors.fname })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              id: "checkout-input-wrapper",
              className: `${errors.lname ? "has-error" : ""} ${formValues.lname ? "has-value" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    name: "lname",
                    id: "checkout-input",
                    value: formValues.lname,
                    onChange: (e) => {
                      setFormValue("lname", e.target.value);
                      if (errors.lname) clearError("lname");
                      saveSession({ name: "lname", value: e.target.value });
                    },
                    onBlur: handleBlur,
                    placeholder: " ",
                    autoComplete: "family-name"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { id: "checkout-input-label", htmlFor: "checkout-input", children: "Last Name" })
              ]
            }
          ),
          errors.lname && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "checkout-error-text", children: errors.lname })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CheckoutPostCodeLookup,
        {
          formValues,
          onAddressSelected: handleAddressSelected,
          errors
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "checkout-input-wrapper",
            className: `${errors.phone ? "has-error" : ""} ${formValues.phone ? "has-value" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "checkout-input-prefix", children: "+44" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "checkout-input-divider", children: " " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  name: "phone",
                  id: "checkout-phone-input",
                  value: formValues.phone,
                  onChange: (e) => {
                    const numericValue = e.target.value.replace(/[^0-9]/g, "");
                    setFormValue("phone", numericValue);
                    if (errors.phone) clearError("phone");
                    saveSession({ name: "phone", value: numericValue });
                  },
                  onBlur: handleBlur,
                  placeholder: " ",
                  className: "checkout-phone-input",
                  inputMode: "numeric",
                  maxLength: 11,
                  autoComplete: "tel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { id: "checkout-input-label", htmlFor: "checkout-phone-input", children: "Phone Number" })
            ]
          }
        ),
        errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "checkout-error-text", children: errors.phone })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "checkout-input-wrapper",
            className: `${errors.imeiNumber ? "has-error" : ""} ${formValues.imeiNumber ? "has-value" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  name: "imeiNumber",
                  id: "checkout-input",
                  value: formValues.imeiNumber,
                  onChange: handleImeiChange,
                  onBlur: handleBlur,
                  placeholder: " ",
                  inputMode: "numeric",
                  maxLength: 15
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { id: "checkout-input-label", htmlFor: "checkout-input", children: "IMEI Number" })
            ]
          }
        ),
        errors.imeiNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: "checkout-error-text", children: errors.imeiNumber })
      ] })
    ] });
  };
  const SHIPPING_OPTIONS = [
    {
      value: "royal_mail",
      label: "Royal Mail",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RoyalMailIcon, { width: 18, height: 16 })
    },
    {
      value: "dpd",
      label: "DPD",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DPDIcon, { width: 18, height: 16 })
    }
  ];
  const COVERAGE_COPY = {
    royal_mail: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "flex-start", gap: "8px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RoyalMailIcon, { width: 16, height: 14 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Royal Mail includes ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#000" }, children: "£100" }),
        " ",
        "insurance coverage in case your package is lost."
      ] })
    ] }),
    dpd: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "flex-start", gap: "8px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DPDIcon, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "DPD includes ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#000" }, children: "£1000" }),
        " insurance coverage in case your package is lost."
      ] })
    ] })
  };
  const CheckoutShippingMethod = ({
    formValues,
    setFormValue,
    errors,
    saveSession
  }) => {
    const handleSelect = (value) => {
      setFormValue("shippingMethod", value);
      saveSession({ name: "shippingMethod", value });
    };
    const coverageNote = COVERAGE_COPY[formValues.shippingMethod];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "checkout-section-label", children: "How would you like to send the device to us?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwatchGroup,
        {
          options: SHIPPING_OPTIONS,
          value: formValues.shippingMethod,
          onChange: handleSelect,
          error: errors.shippingMethod
        }
      ),
      coverageNote && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "checkout-shipping-note", children: coverageNote })
    ] });
  };
  CheckoutShippingMethod.propTypes = {
    formValues: PropTypes.object.isRequired,
    setFormValue: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    saveSession: PropTypes.func.isRequired
  };
  const styles$3 = {
    wrapper: {
      display: "flex",
      gap: 16,
      textAlign: "start",
      alignItems: "center"
    },
    image: {
      objectFit: "contain",
      borderRadius: 8,
      flexShrink: 0
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      flex: 1
    },
    title: {
      color: "#000",
      fontFamily: "Albert Sans",
      fontWeight: 700,
      fontSize: 20,
      margin: 0,
      letterSpacing: 0
      // lineHeight: "100%",
    },
    subtitle: {
      fontFamily: "Albert Sans",
      fontWeight: 500,
      fontSize: 14,
      color: "#545454",
      margin: 0
    },
    price: {
      color: "#000",
      fontFamily: "Albert Sans",
      fontWeight: 800,
      fontSize: 24,
      margin: 0,
      lineHeight: 1.2
    }
  };
  function ProductHeader({
    image,
    imageAlt,
    onImageError,
    title,
    subtitle,
    price,
    pricePrefix,
    imageSize,
    contentGap
  }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { ...styles$3.wrapper, marginBottom: contentGap }, children: [
      image && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: image,
          alt: imageAlt || title || "Your Device",
          onError: onImageError,
          style: { ...styles$3.image, width: imageSize, height: imageSize }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: styles$3.content, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: styles$3.title, children: title || "Your Device" }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: styles$3.subtitle, children: subtitle }),
        price !== null && price !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: styles$3.price, children: [
          pricePrefix,
          price
        ] })
      ] })
    ] });
  }
  ProductHeader.propTypes = {
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    onImageError: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    pricePrefix: PropTypes.string,
    imageSize: PropTypes.number,
    contentGap: PropTypes.number
  };
  ProductHeader.defaultProps = {
    image: void 0,
    imageAlt: "",
    onImageError: void 0,
    title: "",
    subtitle: "",
    price: void 0,
    pricePrefix: "£",
    imageSize: 80,
    contentGap: 40
  };
  const BASE_API_URL = "https://staging.mobiledirectonline.co.uk/api";
  function CheckoutForm({
    offerId,
    sessionToken,
    product,
    variant,
    onSuccess
  }) {
    var _a;
    const [formValues, setFormValues] = reactExports.useState({
      countryCode: "+44",
      channel: "online",
      email: "",
      fname: "",
      lname: "",
      phone: "",
      addressLineOne: "",
      addressLineTwo: "",
      addressLineThree: "",
      city: "",
      postCode: "",
      imeiNumber: "",
      paymentMethod: "bank",
      accountTitle: "",
      sortCode: "",
      accountNumber: "",
      paypalEmail: "",
      shippingMethod: "royal_mail"
    });
    const [errors, setErrors] = reactExports.useState({});
    const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
    const [submitError, setSubmitError] = reactExports.useState(null);
    const [imageFailed, setImageFailed] = reactExports.useState(false);
    const USER_FIELDS = [
      "email",
      "fname",
      "lname",
      "phone",
      "addressLineOne",
      "city",
      "postCode",
      "imeiNumber",
      "accountTitle",
      "sortCode",
      "accountNumber",
      "paypalEmail"
    ];
    const hasAnyValue = USER_FIELDS.some((k) => {
      const value = formValues[k];
      return value && value.toString().trim() !== "" && value.toString().trim() !== "bank" && value.toString().trim() !== "royal_mail";
    });
    const formValuesRef = reactExports.useRef(formValues);
    formValuesRef.current = formValues;
    const setFormValue = reactExports.useCallback((name, value) => {
      setFormValues((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }, []);
    const saveSession = reactExports.useCallback(
      ({ name, value }) => {
        if (!offerId) return;
        const snapshot = { ...formValuesRef.current, [name]: value };
        const payload = removeFalsyKeys(snapshot);
        const offerPayload = removeFalsyKeys({
          productModel: (product == null ? void 0 : product.originalTitle) || (product == null ? void 0 : product.title),
          productBrand: product == null ? void 0 : product.brandName,
          productType: product == null ? void 0 : product.categoryName,
          media: product == null ? void 0 : product.media,
          priceAtOrder: variant == null ? void 0 : variant.price
        });
        StoreHelper.set(sessionToken, payload);
        fetch(`${BASE_API_URL}/checkout-session/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            offerId,
            data: {
              ...payload,
              offer: offerPayload
            }
          })
        }).catch(() => {
        });
      },
      [offerId, sessionToken, product, variant]
    );
    const handleSubmit = reactExports.useCallback(
      async (e) => {
        e.preventDefault();
        setSubmitError(null);
        const validationErrors = validateAll(formValues);
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
        setIsSubmitting(true);
        try {
          await fetch(`${BASE_API_URL}/offers/${offerId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "accepted" })
          });
          const payload = {
            email: formValues.email,
            fname: formValues.fname,
            lname: formValues.lname,
            phone: formValues.phone,
            countryCode: formValues.countryCode,
            postCode: formValues.postCode || "",
            city: formValues.city,
            addressLineOne: formValues.addressLineOne,
            ...formValues.addressLineTwo && {
              addressLineTwo: formValues.addressLineTwo
            },
            ...formValues.addressLineThree && {
              addressLineThree: formValues.addressLineThree
            },
            ...formValues.imeiNumber && { imeiNumber: formValues.imeiNumber },
            paymentMethod: formValues.paymentMethod,
            shippingMethod: formValues.shippingMethod,
            offerId,
            sessionToken,
            channel: "online"
          };
          if (formValues.paymentMethod === "bank") {
            payload.accountTitle = formValues.accountTitle;
            payload.sortCode = formValues.sortCode.replace(/-/g, "");
            payload.accountNumber = formValues.accountNumber;
          } else if (formValues.paymentMethod === "paypal") {
            payload.paypalEmail = formValues.paypalEmail;
          }
          const res = await fetch(`${BASE_API_URL}/orders/guest`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });
          const data = await res.json();
          if (data.success) {
            if (sessionToken) {
              StoreHelper.delete(sessionToken);
            }
            onSuccess == null ? void 0 : onSuccess(data);
          } else {
            setSubmitError(
              data.message || "Something went wrong. Please try again."
            );
          }
        } catch {
          setSubmitError("Network error. Please try again.");
        } finally {
          setIsSubmitting(false);
        }
      },
      [formValues, offerId, sessionToken, onSuccess]
    );
    const variantSummary = ((_a = variant == null ? void 0 : variant.attributes) == null ? void 0 : _a.map((attribute) => attribute.value).join(" | ")) || "";
    const displayPrice = (variant == null ? void 0 : variant.price) || "---";
    const headerImage = imageFailed ? FALLBACK_IMAGE : (product == null ? void 0 : product.media) || FALLBACK_IMAGE;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { id: "checkout-form", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ProductHeader,
        {
          image: headerImage,
          imageAlt: (product == null ? void 0 : product.title) || "Your Device",
          onImageError: () => setImageFailed(true),
          title: (product == null ? void 0 : product.originalTitle) || "Your Device",
          subtitle: variantSummary,
          price: displayPrice,
          pricePrefix: "£",
          imageSize: 87,
          contentGap: 40
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "32px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CheckoutContactForm,
          {
            formValues,
            setFormValue,
            errors,
            saveSession
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CheckoutPersonalInfo,
          {
            formValues,
            setFormValue,
            errors,
            saveSession
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CheckoutPaymentDetails,
          {
            formValues,
            setFormValue,
            errors,
            saveSession
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CheckoutShippingMethod,
          {
            formValues,
            setFormValue,
            errors,
            saveSession
          }
        )
      ] }),
      submitError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "checkout-submit-error", children: submitError }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "checkout-validation-separator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "checkout-btn-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "sell-now-button",
          disabled: isSubmitting || !hasAnyValue,
          children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: 18 }),
            " Processing..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Confirm Order" })
        }
      ) })
    ] }) });
  }
  function CheckoutPage({ navigation }) {
    const { offerId, sessionToken, product, variant } = navigation.params;
    const handleSuccess = reactExports.useCallback(
      (data) => {
        navigation.navigate("confirmation", {
          order: data == null ? void 0 : data.data,
          product,
          variant
        });
      },
      [navigation, product, variant]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CheckoutForm,
      {
        offerId,
        sessionToken,
        product,
        variant,
        onSuccess: handleSuccess
      }
    );
  }
  function createPdfUrlFromArrayBuffer(arrayBuffer) {
    const bytes = new Uint8Array(arrayBuffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return `data:application/pdf;base64,${btoa(binary)}`;
  }
  function downloadPdfFromArrayBuffer(arrayBuffer, fileName) {
    const blob = new Blob([arrayBuffer], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
  function useShippingLabel() {
    const [isLoading, setIsLoading] = reactExports.useState(false);
    const [error, setError] = reactExports.useState(null);
    const arrayBufferRef = reactExports.useRef(null);
    const urlRef = reactExports.useRef(null);
    const downloadShippingLabel = reactExports.useCallback(async (orderId) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${API_BASE}/orders/getlabel/${orderId}`,
          {
            method: "GET",
            headers: { Accept: "application/pdf" }
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        arrayBufferRef.current = arrayBuffer;
        const url = createPdfUrlFromArrayBuffer(arrayBuffer);
        urlRef.current = url;
        return {
          url,
          success: true,
          size: arrayBuffer.byteLength,
          timestamp: Date.now()
        };
      } catch (err) {
        console.error("Failed to download shipping label:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }, []);
    const downloadLabel = reactExports.useCallback((fileName = "shipping-label.pdf") => {
      if (!arrayBufferRef.current) return;
      downloadPdfFromArrayBuffer(arrayBufferRef.current, fileName);
    }, []);
    const getUrl = reactExports.useCallback(() => {
      return urlRef.current || "";
    }, []);
    const cleanup = reactExports.useCallback(() => {
      urlRef.current = null;
      arrayBufferRef.current = null;
    }, []);
    return {
      downloadShippingLabel,
      downloadLabel,
      getUrl,
      cleanup,
      isLoading,
      error
    };
  }
  const WHATS_NEXT = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ResetDeviceIcon, {}),
      title: "Reset Your Device",
      desc: "Make sure you're signed out of iCloud or Google, and remove your SIM card."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageIcon, {}),
      title: "Pack and Attach Label",
      desc: "Place your device in secure packaging. Paste the Royal Mail label on the package."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DeliveryIcon, {}),
      title: "Send via Royal Mail",
      desc: "Drop your package off at any Royal Mail Post Office or Book a Collection with Royal Mail."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentIcon, {}),
      title: "We Inspect & Pay You",
      desc: "Once we receive and inspect your device, your payment will be processed."
    }
  ];
  function ConfirmationPage({ navigation }) {
    var _a;
    const { order, product, variant } = navigation.params;
    const [imageFailed, setImageFailed] = reactExports.useState(false);
    const orderId = (order == null ? void 0 : order._id) || (order == null ? void 0 : order.id) || "";
    const { downloadShippingLabel, downloadLabel, cleanup, isLoading } = useShippingLabel();
    reactExports.useEffect(() => {
      const modalBody = document.getElementById("wishlist-modal-body");
      if (modalBody) modalBody.scrollTop = 0;
    }, []);
    reactExports.useEffect(() => {
      if (orderId) {
        downloadShippingLabel(orderId);
      }
      return () => cleanup();
    }, [orderId, downloadShippingLabel, cleanup]);
    const variantSummary = ((_a = variant == null ? void 0 : variant.attributes) == null ? void 0 : _a.map((attribute) => attribute.value).join(" | ")) || "";
    const displayPrice = (variant == null ? void 0 : variant.price) || (order == null ? void 0 : order.offerValue) || "---";
    const headerImage = imageFailed ? FALLBACK_IMAGE : (product == null ? void 0 : product.media) || FALLBACK_IMAGE;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "checkout-confirmation", style: styles$1.root, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ProductHeader,
        {
          image: headerImage,
          imageAlt: "Your Device",
          onImageError: () => setImageFailed(true),
          title: (product == null ? void 0 : product.originalTitle) || "Your Device",
          subtitle: variantSummary,
          price: displayPrice,
          pricePrefix: "£",
          imageSize: 87,
          contentGap: 32
        }
      ),
      orderId && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "shipping-label", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          id: "shipping-label-button",
          disabled: isLoading,
          onClick: () => downloadLabel("shipping-label.pdf"),
          children: [
            isLoading ? "Loading..." : "Download Shipping Label",
            /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadIcon, {})
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          id: "checkout-confirmation-detail",
          style: {
            padding: "20px",
            border: "1px solid #DCDCDC",
            borderRadius: "20px",
            textAlign: "start",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBottom: "24px"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "checkout-confirmation-title", style: styles$1.tradeHeading, children: "Your Trade-in is confirmed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                id: "checkout-confirmation-text",
                style: {
                  fontFamily: "Albert Sans",
                  fontWeight: 400,
                  fontSize: "16px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  color: "#8E8E8E",
                  lineHeight: "100%",
                  letterSpacing: "0%"
                },
                children: "You'll receive a confirmation email with your trade-in number shortly."
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: {
            padding: "20px",
            border: "1px solid #DCDCDC",
            borderRadius: "20px",
            textAlign: "start",
            display: "flex",
            flexDirection: "column",
            gap: "24px"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "checkout-confirmation-title", style: styles$1.tradeHeading, children: "What's Next?" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "24px" }, children: WHATS_NEXT.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  maxWidth: "309px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swatch-item__icon", children: item.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: { display: "flex", flexDirection: "column", gap: "6px" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h2",
                          {
                            id: "checkout-confirmation-title",
                            style: styles$1.tradeHeading2,
                            children: item.title
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            id: "checkout-confirmation-text",
                            style: {
                              fontFamily: "Albert Sans",
                              fontWeight: 400,
                              fontSize: "16px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              lineHeight: "140%",
                              color: "#8E8E8E",
                              letterSpacing: "0%"
                            },
                            children: item.desc
                          }
                        )
                      ]
                    }
                  )
                ]
              },
              index
            )) })
          ]
        }
      )
    ] });
  }
  const styles$1 = {
    root: {
      fontFamily: "Albert Sans, 'Albert Sans', sans-serif"
    },
    tradeHeading: {
      color: "#000",
      fontFamily: "Albert Sans",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "100%",
      letterSpacing: "0",
      margin: 0
    },
    tradeHeading2: {
      color: "#000",
      fontFamily: "Albert Sans",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "100%",
      letterSpacing: "0",
      margin: 0
    }
  };
  function useProductVariant(product) {
    const slug = reactExports.useMemo(() => {
      var _a;
      if (product.slug) return product.slug;
      return ((_a = product.title) == null ? void 0 : _a.toLowerCase().replace(/\s+/g, "-")) || "";
    }, [product.slug, product.title]);
    const fetchDetails = reactExports.useCallback(
      async (currentSelections, setDetailData, setLoading) => {
        setLoading(true);
        try {
          const res = await fetch(`${PRODUCT_VARIANT_API}/${slug}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ attributes: currentSelections })
          });
          const data = await res.json();
          setDetailData(data == null ? void 0 : data.data);
        } catch (err) {
          console.error("Fetch Error:", err);
        } finally {
          setLoading(false);
        }
      },
      [slug]
    );
    const buildOfferPayload = reactExports.useCallback((detail) => {
      var _a;
      if (!(detail == null ? void 0 : detail._id) || !((_a = detail == null ? void 0 : detail.variant) == null ? void 0 : _a._id)) return null;
      return {
        productId: detail._id,
        variantId: detail.variant._id
      };
    }, []);
    const updateOffer = reactExports.useCallback(async (offerId, payload) => {
      await fetch(`${OFFER_API}/${offerId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    }, []);
    const createOffer = reactExports.useCallback(async (payload) => {
      var _a;
      const res = await fetch(`${VARIANT_OFFER_API}/${payload.productId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await res.json();
      return result.success ? (_a = result.data) == null ? void 0 : _a._id : null;
    }, []);
    const syncOffer = reactExports.useCallback(
      async (detailData, isSyncing) => {
        var _a;
        if (!(detailData == null ? void 0 : detailData._id) || !((_a = detailData == null ? void 0 : detailData.variant) == null ? void 0 : _a._id) || isSyncing.current)
          return;
        isSyncing.current = true;
        let storedId = StoreHelper.sessionGet(TRADE_IN_OFFER_KEY);
        if (storedId) storedId = storedId.replace(/"/g, "");
        try {
          const payload = buildOfferPayload(detailData);
          if (!payload) return;
          if (storedId) {
            await updateOffer(storedId, payload);
          } else {
            const newId = await createOffer(payload);
            if (newId) StoreHelper.sessionSet(TRADE_IN_OFFER_KEY, newId);
          }
        } catch (err) {
          console.error("Sync Error:", err);
        } finally {
          isSyncing.current = false;
        }
      },
      [buildOfferPayload, createOffer, updateOffer]
    );
    const finalizeSellDevice = reactExports.useCallback(
      async (setIsSelling, onSellDevice, product2, detailData) => {
        let offerId = StoreHelper.sessionGet(TRADE_IN_OFFER_KEY);
        if (!offerId) return;
        offerId = offerId.replace(/"/g, "");
        setIsSelling(true);
        try {
          const res = await fetch(`${OFFER_API}/${offerId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "accepted" })
          });
          const data = await res.json();
          if (data == null ? void 0 : data.success) {
            StoreHelper.sessionDelete(TRADE_IN_OFFER_KEY);
            const payload = {
              offerId,
              sessionToken: data.data.sessionToken,
              product: product2,
              variant: detailData == null ? void 0 : detailData.variant,
              detailData
            };
            if (onSellDevice) {
              onSellDevice(payload);
            } else {
              window.location.replace(`/checkout/cn/${data.data.sessionToken}`);
            }
          }
        } catch (err) {
          console.error("Finalization Error:", err);
        } finally {
          setIsSelling(false);
        }
      },
      []
    );
    return {
      slug,
      fetchDetails,
      syncOffer,
      finalizeSellDevice
    };
  }
  function sanitizeHtml(html) {
    if (!html) return "";
    return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "").replace(/\son\w+="[^"]*"/gi, "").replace(/\son\w+='[^']*'/gi, "");
  }
  const AttributeDescription = ({ attribute, selectedValue }) => {
    if (!(attribute == null ? void 0 : attribute.values)) return null;
    const matchedAttr = attribute.values.find(
      (v) => v.name.toLowerCase() === (selectedValue == null ? void 0 : selectedValue.toLowerCase())
    );
    const apiDescription = matchedAttr == null ? void 0 : matchedAttr.description;
    if (!apiDescription || apiDescription.replace(/<[^>]*>?/gm, "").trim() === "")
      return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "attribute-description-box", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        id: "attribute-description-content",
        dangerouslySetInnerHTML: { __html: sanitizeHtml(apiDescription) }
      }
    ) });
  };
  function AttributeSwatch({
    attribute,
    selectedValue,
    isCondition,
    conditionSummary,
    onSelect
  }) {
    const { values, selectedValues } = attribute;
    const visibleValues = selectedValues ? values.filter((v) => selectedValues.includes(v.name)) : values;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "attribute-swatch", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "swatch-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: styles.fontLabel, children: [
            attribute.name,
            ":"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: styles.fontValue, children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedValue }) })
        ] }),
        isCondition && conditionSummary && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: styles.conditionBadge, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: styles.infoIcon, children: "i" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { textDecoration: "underline", cursor: "pointer" }, children: conditionSummary })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "swatch-group", children: visibleValues == null ? void 0 : visibleValues.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `swatch-btn ${val.name.toLowerCase() === (selectedValue == null ? void 0 : selectedValue.toLowerCase()) ? "active" : ""}`,
          onClick: () => onSelect(attribute.name, val.name),
          children: val.name
        },
        val.name
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AttributeDescription,
        {
          attribute,
          selectedValue
        }
      )
    ] });
  }
  const styles = {
    fontLabel: {
      color: "#000",
      fontFamily: "Albert Sans",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      margin: 0
    },
    fontValue: {
      color: "#000",
      fontFamily: "Albert Sans",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      margin: 0
    },
    conditionBadge: {
      fontSize: 13,
      color: "#666",
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    },
    infoIcon: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      border: "1px solid #999",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 10,
      fontWeight: "bold"
    }
  };
  function ProductDetails({ product, onSellDevice }) {
    var _a;
    const [detailData, setDetailData] = reactExports.useState(null);
    const [loading, setLoading] = reactExports.useState(true);
    const [isSelling, setIsSelling] = reactExports.useState(false);
    const [imgFailed, setImgFailed] = reactExports.useState(false);
    const isSyncing = reactExports.useRef(false);
    const { fetchDetails, syncOffer, finalizeSellDevice } = useProductVariant(product);
    const [selections, setSelections] = reactExports.useState({
      storage: (product.storage || "128GB").toLowerCase(),
      network: "unlocked",
      condition: "very good"
    });
    reactExports.useEffect(() => {
      fetchDetails(selections, setDetailData, setLoading);
    }, []);
    reactExports.useEffect(() => {
      syncOffer(detailData, isSyncing);
    }, [detailData, syncOffer]);
    const handleSelect = (name, value) => {
      const next = { ...selections, [name.toLowerCase()]: value.toLowerCase() };
      setSelections(next);
      fetchDetails(next, setDetailData, setLoading);
    };
    const handleSellDevice = () => {
      finalizeSellDevice(setIsSelling, onSellDevice, product, detailData);
    };
    const variant = (detailData == null ? void 0 : detailData.variant) || {};
    const attributes = (detailData == null ? void 0 : detailData.attributes) || [];
    const displayImage = imgFailed ? FALLBACK_IMAGE : (detailData == null ? void 0 : detailData.media) || product.media || FALLBACK_IMAGE;
    const variantSummary = (_a = variant.attributes) == null ? void 0 : _a.map((a) => a.value).join(" | ");
    if (loading && !detailData)
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "product-details-loading", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: 28 }) });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "product-details-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ProductHeader,
        {
          image: displayImage,
          imageAlt: (detailData == null ? void 0 : detailData.title) || product.title,
          onImageError: () => setImgFailed(true),
          title: (detailData == null ? void 0 : detailData.title) || product.title,
          subtitle: variantSummary,
          price: variant.price || "---",
          pricePrefix: "£",
          imageSize: 87,
          contentGap: 40
        }
      ),
      attributes == null ? void 0 : attributes.map((attr) => {
        var _a2, _b;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          AttributeSwatch,
          {
            attribute: attr,
            selectedValue: (_b = (_a2 = variant.attributes) == null ? void 0 : _a2.find((a) => a.name === attr.name)) == null ? void 0 : _b.value,
            isCondition: attr.name.toLowerCase() === "condition",
            conditionSummary: variant.conditionSummary,
            onSelect: handleSelect
          },
          attr.name
        );
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "product-details-spacer", children: " " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "product-details-sticky-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "sell-now-button",
          style: { width: "100%" },
          disabled: isSelling || !variant.price,
          onClick: handleSellDevice,
          children: isSelling ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Sell My Device ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardArrowIcon, {})
          ] })
        }
      ) })
    ] });
  }
  ProductDetails.propTypes = {
    product: PropTypes.shape({
      title: PropTypes.string,
      media: PropTypes.string,
      storage: PropTypes.string,
      slug: PropTypes.string
    }).isRequired,
    onSellDevice: PropTypes.func
  };
  ProductDetails.defaultProps = {
    onSellDevice: void 0
  };
  function ProductDetailPage({ navigation }) {
    const handleSellDevice = reactExports.useCallback(
      ({ offerId, sessionToken, product, variant, detailData }) => {
        navigation.navigate("checkout", {
          offerId,
          sessionToken,
          product,
          variant,
          detailData
        });
      },
      [navigation]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductDetails,
      {
        product: navigation.params.product,
        onBack: navigation.goBack,
        onSellDevice: handleSellDevice
      }
    );
  }
  const SEARCH_API_URL = "https://staging.mobiledirectonline.co.uk/api/products";
  function ProductSearch({ onProductSelect, autoFocus = false }) {
    const [query, setQuery] = reactExports.useState("");
    const [results, setResults] = reactExports.useState([]);
    const [isSearching, setIsSearching] = reactExports.useState(false);
    const [showResults, setShowResults] = reactExports.useState(false);
    const [searchError, setSearchError] = reactExports.useState(null);
    const debounceRef = reactExports.useRef(null);
    const formRef = reactExports.useRef(null);
    const inputRef = reactExports.useRef(null);
    reactExports.useEffect(() => {
      if (autoFocus && inputRef.current) {
        setTimeout(() => {
          inputRef.current.focus();
        }, 0);
      }
    }, [autoFocus]);
    const fetchProducts = reactExports.useCallback(async (searchQuery) => {
      var _a;
      setIsSearching(true);
      setShowResults(true);
      setSearchError(null);
      setResults([]);
      try {
        const response = await fetch(
          `${SEARCH_API_URL}?query=${encodeURIComponent(searchQuery)}`
        );
        const data = await response.json();
        const products = ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.data) || [];
        setResults(products);
      } catch (error) {
        console.error("API Error:", error);
        if (error.message === "Failed to fetch" || error.name === "TypeError") {
          setSearchError("connection");
        } else {
          setSearchError(error.message);
        }
      } finally {
        setIsSearching(false);
      }
    }, []);
    const handleInputChange = reactExports.useCallback(
      (e) => {
        const value = e.target.value;
        setQuery(value);
        clearTimeout(debounceRef.current);
        if (value.trim().length > 0) {
          debounceRef.current = setTimeout(() => {
            fetchProducts(value.trim());
          }, 200);
        } else {
          setShowResults(false);
        }
      },
      [fetchProducts]
    );
    reactExports.useEffect(() => {
      function handleClickOutside(e) {
        if (formRef.current && !formRef.current.contains(e.target)) {
          setShowResults(false);
        }
      }
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "product-search-container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        id: "product-search-form",
        ref: formRef,
        onSubmit: (e) => e.preventDefault(),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search",
              value: query,
              onChange: handleInputChange,
              ref: inputRef
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", id: "product-search-icon", children: isSearching ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(SearchIcon, {}) }),
          showResults && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "product-search-items", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "product-search-items-wrapper", children: [
            !isSearching && searchError === "connection" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                id: "product-search-item",
                style: {
                  color: "#ff9800",
                  padding: 20
                },
                children: "Connection error. Please check your internet."
              }
            ),
            !isSearching && searchError && searchError !== "connection" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "product-search-item", style: { color: "red" }, children: [
              "Error: ",
              searchError
            ] }),
            !isSearching && !searchError && results.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                id: "product-search-item",
                onClick: () => onProductSelect(item),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "left" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 500, display: "block" }, children: item.title }) })
              },
              item.productId || index
            )),
            !isSearching && !searchError && results.length === 0 && query.trim().length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "product-search-item", children: "No products found" })
          ] }) })
        ]
      }
    ) });
  }
  ProductSearch.propTypes = {
    onProductSelect: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool
  };
  function SearchPage({ navigation }) {
    const handleProductSelect = (product) => {
      navigation.navigate("product-detail", { product });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProductSearch, { onProductSelect: handleProductSelect, autoFocus: true });
  }
  const PAGES = {
    search: { component: SearchPage, title: "Sell Your Device" },
    "product-detail": { component: ProductDetailPage, title: "" },
    checkout: { component: CheckoutPage, title: "Checkout" },
    confirmation: { component: ConfirmationPage, title: "Trade Confirmed" }
  };
  function App() {
    const [isOpen, setIsOpen] = reactExports.useState(false);
    const navigation = useDrawerNavigation("search");
    const [config, setConfig] = reactExports.useState(() => {
      const root = document.getElementById("wishlist-root");
      if (!root) return { label: "Trade In", layout: {}, trigger: {} };
      let layout = {};
      let trigger = {};
      try {
        layout = root.dataset.layoutStyles ? JSON.parse(root.dataset.layoutStyles) : {};
        trigger = root.dataset.triggerStyles ? JSON.parse(root.dataset.triggerStyles) : {};
      } catch (e) {
        console.error("JSON Parse Error", e);
      }
      return {
        label: root.dataset.label || "Trade In Your Device",
        layout,
        trigger
      };
    });
    reactExports.useEffect(() => {
      const handleGlobalClick = (event) => {
        const target = event.target.closest(".swapproo-trigger");
        if (target) {
          event.preventDefault();
          setIsOpen(true);
          document.body.style.overflow = "hidden";
        }
      };
      document.addEventListener("click", handleGlobalClick);
      return () => document.removeEventListener("click", handleGlobalClick);
    }, []);
    reactExports.useEffect(() => {
      const root = document.getElementById("wishlist-root");
      if (root) {
        const observer = new MutationObserver(() => {
          try {
            setConfig({
              label: root.dataset.label || "Trade In Your Device",
              layout: JSON.parse(root.dataset.layoutStyles || "{}"),
              trigger: JSON.parse(root.dataset.triggerStyles || "{}")
            });
          } catch (e) {
            console.error("Mutation Sync Error", e);
          }
        });
        observer.observe(root, { attributes: true });
        return () => observer.disconnect();
      }
    }, []);
    const cssVariables = reactExports.useMemo(() => {
      const { layout, trigger } = config;
      const underlineValue = trigger.showUnderline ? "underline" : "none";
      return {
        "--display": layout.display || "inline-block",
        "--justify": layout.justifyContent || "flex-start",
        "--mt": `${layout.marginTop ?? 10}px`,
        "--mb": `${layout.marginBottom ?? 10}px`,
        "--btn-bg": trigger.bgColor || "#007ace",
        "--btn-color": trigger.color || "#ffffff",
        "--btn-border-width": `${trigger.borderWidth ?? 1}px`,
        "--btn-border-color": trigger.borderColor || "#005a9e",
        "--btn-radius": `${trigger.borderRadius ?? 8}px`,
        "--btn-size": `${trigger.fontSize ?? 16}px`,
        "--btn-pv": `${trigger.paddingV ?? 12}px`,
        "--btn-ph": `${trigger.paddingH ?? 24}px`,
        "--btn-width": trigger.widthStyle === "block" ? "100%" : "auto",
        "--text-decoration": underlineValue
      };
    }, [config]);
    const page = PAGES[navigation.currentView] || PAGES.search;
    const PageComponent = page.component;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wishlist-app", style: cssVariables, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "trade-in-parent-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "wishlist-btn swapproo-trigger",
          style: {
            width: "var(--btn-width)",
            textDecoration: "var(--text-decoration)"
          },
          children: config.label
        }
      ) }),
      isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Drawer,
        {
          title: page.title || "Sell Your Device",
          canGoBack: navigation.canGoBack,
          onBack: navigation.goBack,
          onClose: () => {
            setIsOpen(false);
            document.body.style.overflow = "auto";
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            PageComponent,
            {
              navigation: {
                ...navigation,
                navigate: navigation.navigate,
                goBack: navigation.goBack,
                reset: navigation.reset
              }
            }
          )
        }
      )
    ] });
  }
  function mount() {
    const container = document.getElementById("wishlist-root");
    if (container) {
      const root = clientExports.createRoot(container);
      root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
