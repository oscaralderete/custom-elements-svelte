const ue = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const c of i.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && r(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerpolicy && (i.referrerPolicy = s.referrerpolicy),
      s.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
};
ue();
function T() {}
function ie(t) {
  return t();
}
function ne() {
  return Object.create(null);
}
function j(t) {
  t.forEach(ie);
}
function de(t) {
  return typeof t == "function";
}
function z(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let P;
function fe(t, e) {
  return P || (P = document.createElement("a")), (P.href = e), t === P.href;
}
function he(t) {
  return Object.keys(t).length === 0;
}
function l(t, e) {
  t.appendChild(e);
}
function D(t, e, n) {
  t.insertBefore(e, n || null);
}
function O(t) {
  t.parentNode.removeChild(t);
}
function me(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function d(t) {
  return document.createElement(t);
}
function E(t) {
  return document.createTextNode(t);
}
function h() {
  return E(" ");
}
function A(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function f(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function pe(t) {
  return Array.from(t.childNodes);
}
function _e(t, e) {
  (e = "" + e), t.wholeText !== e && (t.data = e);
}
let Q;
function N(t) {
  Q = t;
}
const I = [],
  G = [],
  V = [],
  oe = [],
  ge = Promise.resolve();
let K = !1;
function ye() {
  K || ((K = !0), ge.then(X));
}
function U(t) {
  V.push(t);
}
const F = new Set();
let H = 0;
function X() {
  const t = Q;
  do {
    for (; H < I.length; ) {
      const e = I[H];
      H++, N(e), be(e.$$);
    }
    for (N(null), I.length = 0, H = 0; G.length; ) G.pop()();
    for (let e = 0; e < V.length; e += 1) {
      const n = V[e];
      F.has(n) || (F.add(n), n());
    }
    V.length = 0;
  } while (I.length);
  for (; oe.length; ) oe.pop()();
  (K = !1), F.clear(), N(t);
}
function be(t) {
  if (t.fragment !== null) {
    t.update(), j(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(U);
  }
}
const W = new Set();
let we;
function J(t, e) {
  t && t.i && (W.delete(t), t.i(e));
}
function re(t, e, n, r) {
  if (t && t.o) {
    if (W.has(t)) return;
    W.add(t),
      we.c.push(() => {
        W.delete(t), r && (n && t.d(1), r());
      }),
      t.o(e);
  }
}
function le(t) {
  t && t.c();
}
function R(t, e, n, r) {
  const { fragment: s, on_mount: i, on_destroy: c, after_update: a } = t.$$;
  s && s.m(e, n),
    r ||
      U(() => {
        const u = i.map(ie).filter(de);
        c ? c.push(...u) : j(u), (t.$$.on_mount = []);
      }),
    a.forEach(U);
}
function Y(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (j(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function ve(t, e) {
  t.$$.dirty[0] === -1 && (I.push(t), ye(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Z(t, e, n, r, s, i, c, a = [-1]) {
  const u = Q;
  N(t);
  const o = (t.$$ = {
    fragment: null,
    ctx: null,
    props: i,
    update: T,
    not_equal: s,
    bound: ne(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    callbacks: ne(),
    dirty: a,
    skip_bound: !1,
    root: e.target || u.$$.root,
  });
  c && c(o.root);
  let p = !1;
  if (
    ((o.ctx = n
      ? n(t, e.props || {}, (m, y, ...q) => {
          const _ = q.length ? q[0] : y;
          return (
            o.ctx &&
              s(o.ctx[m], (o.ctx[m] = _)) &&
              (!o.skip_bound && o.bound[m] && o.bound[m](_), p && ve(t, m)),
            y
          );
        })
      : []),
    o.update(),
    (p = !0),
    j(o.before_update),
    (o.fragment = r ? r(o.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const m = pe(e.target);
      o.fragment && o.fragment.l(m), m.forEach(O);
    } else o.fragment && o.fragment.c();
    e.intro && J(t.$$.fragment), R(t, e.target, e.anchor, e.customElement), X();
  }
  N(u);
}
class ee {
  $destroy() {
    Y(this, 1), (this.$destroy = T);
  }
  $on(e, n) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      r.push(n),
      () => {
        const s = r.indexOf(n);
        s !== -1 && r.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !he(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
var qe = "assets/svelte.d72399d3.png";
function $e(t) {
  let e, n, r, s, i, c, a, u, o, p, m, y, q, _, g, C;
  return {
    c() {
      (e = d("section")),
        (n = d("h3")),
        (r = E("Times the loader was called from Svelte: ")),
        (s = E(t[0])),
        (i = h()),
        (c = d("br")),
        (a = h()),
        (u = d("button")),
        (u.textContent = "Call loader from component"),
        (o = h()),
        (p = d("br")),
        (m = h()),
        (y = d("button")),
        (y.textContent = "Call loader from component using global declaration"),
        (q = h()),
        (_ = d("div")),
        (_.innerHTML =
          '<button data-id="component" onclick="window.app.viewCode()" class="svelte-19cr9ab">View code (I&#39;m inside Vue component)</button>'),
        f(u, "class", "svelte-19cr9ab"),
        f(y, "class", "svelte-19cr9ab"),
        f(_, "class", "right"),
        f(e, "class", "svelte-19cr9ab");
    },
    m(b, v) {
      D(b, e, v),
        l(e, n),
        l(n, r),
        l(n, s),
        l(e, i),
        l(e, c),
        l(e, a),
        l(e, u),
        l(e, o),
        l(e, p),
        l(e, m),
        l(e, y),
        l(e, q),
        l(e, _),
        g || ((C = [A(u, "click", t[1]), A(y, "click", t[2])]), (g = !0));
    },
    p(b, [v]) {
      v & 1 && _e(s, b[0]);
    },
    i: T,
    o: T,
    d(b) {
      b && O(e), (g = !1), j(C);
    },
  };
}
function Ce(t, e, n) {
  let { count: r = 0 } = e;
  function s() {
    const c = document.querySelector("oa-loader");
    c.show(),
      n(0, r++, r),
      setTimeout(() => {
        c.hide();
      }, 2e3);
  }
  const i = () => {
    window.app.loader.show(),
      n(0, r++, r),
      setTimeout(() => {
        window.app.loader.hide();
      }, 2e3);
  };
  return (
    (t.$$set = (c) => {
      "count" in c && n(0, (r = c.count));
    }),
    [r, s, i]
  );
}
class ke extends ee {
  constructor(e) {
    super(), Z(this, e, Ce, $e, z, { count: 0, showLoader: 1 });
  }
  get count() {
    return this.$$.ctx[0];
  }
  set count(e) {
    this.$$set({ count: e }), X();
  }
  get showLoader() {
    return this.$$.ctx[1];
  }
}
function se(t, e, n) {
  const r = t.slice();
  return (r[6] = e[n]), r;
}
function ce(t) {
  let e,
    n,
    r = t[6].name + "",
    s,
    i,
    c,
    a = t[6].country + "",
    u,
    o,
    p,
    m = t[6].comment + "",
    y,
    q,
    _,
    g,
    C,
    b,
    v,
    $,
    M,
    k,
    x;
  function S() {
    return t[4](t[6]);
  }
  function B() {
    return t[5](t[6]);
  }
  return {
    c() {
      (e = d("tr")),
        (n = d("td")),
        (s = E(r)),
        (i = h()),
        (c = d("td")),
        (u = E(a)),
        (o = h()),
        (p = d("td")),
        (y = E(m)),
        (q = h()),
        (_ = d("td")),
        (g = d("span")),
        (g.textContent = "EDIT"),
        (C = h()),
        (b = d("td")),
        (v = d("span")),
        (v.textContent = "DELETE"),
        ($ = h()),
        f(n, "class", "svelte-1aqqjeq"),
        f(c, "class", "svelte-1aqqjeq"),
        f(p, "class", "svelte-1aqqjeq"),
        f(g, "class", "svelte-1aqqjeq"),
        f(_, "class", "svelte-1aqqjeq"),
        f(v, "class", "svelte-1aqqjeq"),
        f(b, "class", "svelte-1aqqjeq"),
        f(e, "v-for", "user in authors"),
        f(e, "key", (M = t[6].id)),
        f(e, "class", "svelte-1aqqjeq");
    },
    m(L, w) {
      D(L, e, w),
        l(e, n),
        l(n, s),
        l(e, i),
        l(e, c),
        l(c, u),
        l(e, o),
        l(e, p),
        l(p, y),
        l(e, q),
        l(e, _),
        l(_, g),
        l(e, C),
        l(e, b),
        l(b, v),
        l(e, $),
        k || ((x = [A(g, "click", S), A(v, "click", B)]), (k = !0));
    },
    p(L, w) {
      t = L;
    },
    d(L) {
      L && O(e), (k = !1), j(x);
    },
  };
}
function xe(t) {
  let e,
    n,
    r,
    s,
    i = t[0],
    c = [];
  for (let a = 0; a < i.length; a += 1) c[a] = ce(se(t, i, a));
  return {
    c() {
      (e = d("table")),
        (n = d("thead")),
        (n.innerHTML = `<tr class="svelte-1aqqjeq"><th class="svelte-1aqqjeq">Author</th> 
      <th class="svelte-1aqqjeq">Country</th> 
      <th class="svelte-1aqqjeq">Comment</th> 
      <th class="svelte-1aqqjeq"></th> 
      <th class="svelte-1aqqjeq"></th></tr>`),
        (r = h()),
        (s = d("tbody"));
      for (let a = 0; a < c.length; a += 1) c[a].c();
      f(e, "class", "my-table svelte-1aqqjeq");
    },
    m(a, u) {
      D(a, e, u), l(e, n), l(e, r), l(e, s);
      for (let o = 0; o < c.length; o += 1) c[o].m(s, null);
    },
    p(a, [u]) {
      if (u & 7) {
        i = a[0];
        let o;
        for (o = 0; o < i.length; o += 1) {
          const p = se(a, i, o);
          c[o] ? c[o].p(p, u) : ((c[o] = ce(p)), c[o].c(), c[o].m(s, null));
        }
        for (; o < c.length; o += 1) c[o].d(1);
        c.length = i.length;
      }
    },
    i: T,
    o: T,
    d(a) {
      a && O(e), me(c, a);
    },
  };
}
function Le(t, e, n) {
  const r = [
      {
        id: 1,
        name: "Toni Morrison",
        country: "USA",
        comment:
          "Her works often depict difficult circumstances and the dark side of humanity, but still convey integrity and redemption.",
      },
      {
        id: 2,
        name: "Jorge Luis Borges",
        country: "Argentina",
        comment: 'Believe me, you need to read "The Immortal".',
      },
      {
        id: 3,
        name: "Mary Shelley",
        country: "United Kingdom",
        comment:
          "She believed that people could improve society through the responsible exercise of political power, but she feared that the irresponsible exercise of power would lead to chaos.",
      },
      {
        id: 4,
        name: "Oscar Alderete",
        country: "Per\xFA",
        comment: "Well, this guy just write code.",
      },
    ],
    s = (o) => {
      c(o),
        window.app.loader.show(),
        setTimeout(() => {
          window.app.loader.hide(),
            window.app.toast.show({
              message: `Cannot access to author ${o.name}'s record!`,
              type: "error",
            });
        }, 1e3);
    },
    i = (o) => {
      window.app.dialog.deploy(
        {
          title: "WARNING",
          message: `Are you sure you want to delete ${o.name}'s record?`,
        },
        () => {
          s(o);
        },
        () => {
          window.app.toast.show({
            message: "Yeah, this writer is too good to be deleted!",
            type: "success",
          });
        }
      );
    };
  let { updateCounter: c } = e;
  const a = (o) => s(o),
    u = (o) => i(o);
  return (
    (t.$$set = (o) => {
      "updateCounter" in o && n(3, (c = o.updateCounter));
    }),
    [r, s, i, c, a, u]
  );
}
class je extends ee {
  constructor(e) {
    super(), Z(this, e, Le, xe, z, { updateCounter: 3 });
  }
}
function Ee(t) {
  let e,
    n,
    r,
    s,
    i,
    c,
    a,
    u,
    o,
    p,
    m,
    y,
    q,
    _,
    g,
    C,
    b,
    v,
    $,
    M,
    k,
    x,
    S,
    B,
    L = {};
  return (
    (a = new ke({ props: L })),
    t[4](a),
    ($ = new je({ props: { updateCounter: t[3] } })),
    {
      c() {
        (e = d("main")),
          (n = d("img")),
          (s = h()),
          (i = d("h1")),
          (i.textContent = "Custom Web Elements"),
          (c = h()),
          le(a.$$.fragment),
          (u = h()),
          (o = d("br")),
          (p = h()),
          (m = d("button")),
          (m.textContent =
            "Call loader from root component using global declaration"),
          (y = h()),
          (q = d("br")),
          (_ = h()),
          (g = d("button")),
          (g.textContent = "Call loader using component method from parent"),
          (C = h()),
          (b = d("h3")),
          (b.textContent =
            "Below, there is another component to test the another custom web elements:"),
          (v = h()),
          le($.$$.fragment),
          (M = h()),
          (k = d("div")),
          (k.innerHTML =
            '<button data-id="app" onclick="window.app.viewCode()" class="svelte-4idch4">View code (I&#39;m inside Vue root component)</button>'),
          fe(n.src, (r = qe)) || f(n, "src", r),
          f(n, "alt", "Svelte Logo"),
          f(n, "class", "svelte-4idch4"),
          f(i, "class", "svelte-4idch4"),
          f(m, "class", "svelte-4idch4"),
          f(g, "class", "svelte-4idch4"),
          f(k, "class", "right"),
          f(e, "class", "svelte-4idch4");
      },
      m(w, te) {
        D(w, e, te),
          l(e, n),
          l(e, s),
          l(e, i),
          l(e, c),
          R(a, e, null),
          l(e, u),
          l(e, o),
          l(e, p),
          l(e, m),
          l(e, y),
          l(e, q),
          l(e, _),
          l(e, g),
          l(e, C),
          l(e, b),
          l(e, v),
          R($, e, null),
          l(e, M),
          l(e, k),
          (x = !0),
          S || ((B = [A(m, "click", t[1]), A(g, "click", t[2])]), (S = !0));
      },
      p(w, [te]) {
        const ae = {};
        a.$set(ae);
      },
      i(w) {
        x || (J(a.$$.fragment, w), J($.$$.fragment, w), (x = !0));
      },
      o(w) {
        re(a.$$.fragment, w), re($.$$.fragment, w), (x = !1);
      },
      d(w) {
        w && O(e), t[4](null), Y(a), Y($), (S = !1), j(B);
      },
    }
  );
}
function Te(t, e, n) {
  let r;
  const s = () => {
      window.app.loader.show(),
        n(0, r.count++, r),
        setTimeout(() => {
          window.app.loader.hide();
        }, 1e3);
    },
    i = () => {
      n(0, r.count++, r), r.showLoader();
    },
    c = (u) => {
      n(0, r.count++, r);
    };
  function a(u) {
    G[u ? "unshift" : "push"](() => {
      (r = u), n(0, r);
    });
  }
  return [r, s, i, c, a];
}
class Ae extends ee {
  constructor(e) {
    super(), Z(this, e, Te, Ee, z, {});
  }
}
new Ae({ target: document.getElementById("app") });
