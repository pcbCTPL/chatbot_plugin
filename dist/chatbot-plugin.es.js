import Pe, { useState as J, useRef as Ce, useEffect as Se } from "react";
import pr from "react-dom";
var B = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function hr() {
  if (je) return $;
  je = 1;
  var _ = Pe, E = Symbol.for("react.element"), x = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, w = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(R, d, y) {
    var c, g = {}, f = null, j = null;
    y !== void 0 && (f = "" + y), d.key !== void 0 && (f = "" + d.key), d.ref !== void 0 && (j = d.ref);
    for (c in d) T.call(d, c) && !C.hasOwnProperty(c) && (g[c] = d[c]);
    if (R && R.defaultProps) for (c in d = R.defaultProps, d) g[c] === void 0 && (g[c] = d[c]);
    return { $$typeof: E, type: R, key: f, ref: j, props: g, _owner: w.current };
  }
  return $.Fragment = x, $.jsx = S, $.jsxs = S, $;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function br() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var _ = Pe, E = Symbol.for("react.element"), x = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), R = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), N = Symbol.iterator, ke = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = N && e[N] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var D = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var n = D.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ae = !1, Ie = !1, We = !1, $e = !1, Ye = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === T || e === C || Ye || e === w || e === y || e === c || $e || e === j || Ae || Ie || We || typeof e == "object" && e !== null && (e.$$typeof === f || e.$$typeof === g || e.$$typeof === S || e.$$typeof === R || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case T:
          return "Fragment";
        case x:
          return "Portal";
        case C:
          return "Profiler";
        case w:
          return "StrictMode";
        case y:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return re(r) + ".Consumer";
          case S:
            var t = e;
            return re(t._context) + ".Provider";
          case d:
            return Me(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case f: {
            var i = e, s = i._payload, o = i._init;
            try {
              return O(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, I = 0, te, ne, ae, oe, ie, se, ue;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ve() {
      {
        if (I === 0) {
          te = console.log, ne = console.info, ae = console.warn, oe = console.error, ie = console.group, se = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Le() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: te
            }),
            info: P({}, e, {
              value: ne
            }),
            warn: P({}, e, {
              value: ae
            }),
            error: P({}, e, {
              value: oe
            }),
            group: P({}, e, {
              value: ie
            }),
            groupCollapsed: P({}, e, {
              value: se
            }),
            groupEnd: P({}, e, {
              value: ue
            })
          });
        }
        I < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = D.ReactCurrentDispatcher, K;
    function M(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var z = !1, V;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ue();
    }
    function le(e, r) {
      if (!e || z)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = q.current, q.current = null, Ve();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (b) {
              n = b;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var a = b.stack.split(`
`), p = n.stack.split(`
`), u = a.length - 1, l = p.length - 1; u >= 1 && l >= 0 && a[u] !== p[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== p[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== p[l]) {
                    var m = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, m), m;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        z = !1, q.current = s, Le(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", k = A ? M(A) : "";
      return typeof e == "function" && V.set(e, k), k;
    }
    function Je(e, r, t) {
      return le(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Be(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case y:
          return M("Suspense");
        case c:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Je(e.render);
          case g:
            return L(e.type, r, t);
          case f: {
            var n = e, i = n._payload, s = n._init;
            try {
              return L(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, fe = {}, de = D.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, i) {
      {
        var s = Function.call.bind(W);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (U(i), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, U(i), v("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Ke = Array.isArray;
    function G(e) {
      return Ke(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (Ge(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ve(e);
    }
    var he = D.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, ge;
    function Xe(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && he.current;
    }
    function er(e, r) {
      {
        var t = function() {
          be || (be = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, p = null;
        t !== void 0 && (pe(t), a = "" + t), Ze(r) && (pe(r.key), a = "" + r.key), Xe(r) && (p = r.ref, Qe(r, i));
        for (s in r)
          W.call(r, s) && !He.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(o, l), p && rr(o, l);
        }
        return tr(e, a, p, i, n, he.current, o);
      }
    }
    var H = D.ReactCurrentOwner, me = D.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function ye() {
      {
        if (H.current) {
          var e = O(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var Ee = {};
    function or(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + O(e._owner.type) + "."), F(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Re(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = De(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              Z(o.value) && Re(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = O(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var xe = {};
    function Te(e, r, t, n, i, s) {
      {
        var o = Ne(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = ar();
          p ? a += p : a += ye();
          var u;
          e === null ? u = "null" : G(e) ? u = "array" : e !== void 0 && e.$$typeof === E ? (u = "<" + (O(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = nr(e, r, t, i, s);
        if (l == null)
          return l;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (G(m)) {
                for (var A = 0; A < m.length; A++)
                  _e(m[A], e);
                Object.freeze && Object.freeze(m);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(m, e);
        }
        if (W.call(r, "key")) {
          var k = O(e), b = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), Q = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xe[k + Q]) {
            var dr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, k, dr, k), xe[k + Q] = !0;
          }
        }
        return e === T ? sr(l) : ir(l), l;
      }
    }
    function ur(e, r, t) {
      return Te(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var lr = cr, fr = ur;
    Y.Fragment = T, Y.jsx = lr, Y.jsxs = fr;
  }()), Y;
}
var we;
function gr() {
  return we || (we = 1, process.env.NODE_ENV === "production" ? B.exports = hr() : B.exports = br()), B.exports;
}
var h = gr();
const mr = ({ websocketUrl: _ = "wss://dt4wksj1d6.execute-api.us-east-1.amazonaws.com/dev_central/" }) => {
  const [E, x] = J(!1), [T, w] = J([{ text: "Welcome! How can I help you?", sender: "bot" }]), [C, S] = J(""), [R, d] = J(!1), y = Ce(null), c = Ce(null);
  Se(() => (c.current = new WebSocket(_), c.current.onopen = () => console.log("WebSocket connected"), c.current.onmessage = (f) => {
    const j = JSON.parse(f.data);
    w((N) => [...N, { text: j.text, sender: "bot" }]), d(!1);
  }, c.current.onclose = () => console.log("WebSocket disconnected"), () => c.current.close()), [_]);
  const g = () => {
    C.trim() && (w((f) => [...f, { text: C, sender: "user" }]), c.current.send(JSON.stringify({ text: C })), S(""), d(!0));
  };
  return Se(() => {
    y.current && (y.current.scrollTop = y.current.scrollHeight);
  }, [T, R]), /* @__PURE__ */ h.jsxs("div", { className: "chat-widget", children: [
    /* @__PURE__ */ h.jsx("div", { className: "chat-icon", onClick: () => x(!E), children: /* @__PURE__ */ h.jsx("img", { src: "chatbot.gif", alt: "Chatbot" }) }),
    E && /* @__PURE__ */ h.jsxs("div", { className: "chatbox", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "chatbox-header", children: [
        /* @__PURE__ */ h.jsx("h3", { children: "Chatbot" }),
        /* @__PURE__ */ h.jsx("button", { onClick: () => x(!1), children: "✖" })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "chatbox-body", ref: y, children: [
        T.map((f, j) => /* @__PURE__ */ h.jsxs("div", { className: `message ${f.sender}`, children: [
          /* @__PURE__ */ h.jsxs("strong", { children: [
            f.sender === "bot" ? "Bot" : "You",
            ":"
          ] }),
          " ",
          f.text
        ] }, j)),
        R && /* @__PURE__ */ h.jsx("div", { className: "message bot", children: "Typing..." })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "chatbox-footer", children: [
        /* @__PURE__ */ h.jsx(
          "input",
          {
            type: "text",
            value: C,
            onChange: (f) => S(f.target.value),
            onKeyPress: (f) => f.key === "Enter" && g(),
            placeholder: "Type a message..."
          }
        ),
        /* @__PURE__ */ h.jsx("button", { onClick: g, children: "Send" })
      ] })
    ] })
  ] });
};
function Rr(_, E = {}) {
  const x = document.getElementById(_);
  if (!x) {
    console.error(`Container with ID '${_}' not found.`);
    return;
  }
  pr.render(/* @__PURE__ */ h.jsx(mr, { ...E }), x);
}
export {
  Rr as initChatbot
};
