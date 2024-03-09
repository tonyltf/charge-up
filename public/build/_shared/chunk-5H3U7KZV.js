import { a as Xi, b as qo, c as Ot, d as Ft } from '/build/_shared/chunk-6OZYWZFQ.js';
function re() {
  return (
    (re = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    re.apply(this, arguments)
  );
}
function ra(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: l, search: i, hash: a } = r.location;
    return Kr(
      '',
      { pathname: l, search: i, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : dt(o);
  }
  return rm(t, n, null, e);
}
function H(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function nr(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function nm() {
  return Math.random().toString(36).substr(2, 8);
}
function nc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Kr(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    re({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? Te(t) : t, {
      state: n,
      key: (t && t.key) || r || nm(),
    })
  );
}
function dt(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Te(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function rm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    i = o.history,
    a = b.Pop,
    u = null,
    s = c();
  s == null && ((s = 0), i.replaceState(re({}, i.state, { idx: s }), ''));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    a = b.Pop;
    let x = c(),
      p = x == null ? null : x - s;
    (s = x), u && u({ action: a, location: E.location, delta: p });
  }
  function h(x, p) {
    a = b.Push;
    let d = Kr(E.location, x, p);
    n && n(d, x), (s = c() + 1);
    let m = nc(d, s),
      S = E.createHref(d);
    try {
      i.pushState(m, '', S);
    } catch (k) {
      if (k instanceof DOMException && k.name === 'DataCloneError') throw k;
      o.location.assign(S);
    }
    l && u && u({ action: a, location: E.location, delta: 1 });
  }
  function g(x, p) {
    a = b.Replace;
    let d = Kr(E.location, x, p);
    n && n(d, x), (s = c());
    let m = nc(d, s),
      S = E.createHref(d);
    i.replaceState(m, '', S), l && u && u({ action: a, location: E.location, delta: 0 });
  }
  function R(x) {
    let p = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      d = typeof x == 'string' ? x : dt(x);
    return (
      (d = d.replace(/ $/, '%20')),
      H(p, 'No window.location.(origin|href) available to create URL for href: ' + d),
      new URL(d, p)
    );
  }
  let E = {
    get action() {
      return a;
    },
    get location() {
      return e(o, i);
    },
    listen(x) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(tc, f),
        (u = x),
        () => {
          o.removeEventListener(tc, f), (u = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: R,
    encodeLocation(x) {
      let p = R(x);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: h,
    replace: g,
    go(x) {
      return i.go(x);
    },
  };
  return E;
}
function lm(e) {
  return e.index === !0;
}
function qi(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, l) => {
      let i = [...n, l],
        a = typeof o.id == 'string' ? o.id : i.join('-');
      if (
        (H(o.index !== !0 || !o.children, 'Cannot specify children on an index route'),
        H(
          !r[a],
          'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`,
        ),
        lm(o))
      ) {
        let u = re({}, o, t(o), { id: a });
        return (r[a] = u), u;
      } else {
        let u = re({}, o, t(o), { id: a, children: void 0 });
        return (r[a] = u), o.children && (u.children = qi(o.children, t, i, r)), u;
      }
    })
  );
}
function De(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Te(t) : t,
    o = qe(r.pathname || '/', n);
  if (o == null) return null;
  let l = mc(e);
  im(l);
  let i = null;
  for (let a = 0; i == null && a < l.length; ++a) {
    let u = ym(o);
    i = mm(l[a], u);
  }
  return i;
}
function oa(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function mc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (l, i, a) => {
    let u = {
      relativePath: a === void 0 ? l.path || '' : a,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l,
    };
    u.relativePath.startsWith('/') &&
      (H(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = st([r, u.relativePath]),
      c = n.concat(u);
    l.children &&
      l.children.length > 0 &&
      (H(
        l.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + s + '".'),
      ),
      mc(l.children, t, c, s)),
      !(l.path == null && !l.index) && t.push({ path: s, score: pm(s, l.index), routesMeta: c });
  };
  return (
    e.forEach((l, i) => {
      var a;
      if (l.path === '' || !((a = l.path) != null && a.includes('?'))) o(l, i);
      else for (let u of vc(l.path)) o(l, i, u);
    }),
    t
  );
}
function vc(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    l = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [l, ''] : [l];
  let i = vc(r.join('/')),
    a = [];
  return (
    a.push(...i.map((u) => (u === '' ? l : [l, u].join('/')))),
    o && a.push(...i),
    a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function im(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : hm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
function pm(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(rc) && (r += fm),
    t && (r += sm),
    n.filter((o) => !rc(o)).reduce((o, l) => o + (am.test(l) ? um : l === '' ? cm : dm), r)
  );
}
function hm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function mm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    l = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      s = o === '/' ? t : t.slice(o.length) || '/',
      c = Zt({ path: a.relativePath, caseSensitive: a.caseSensitive, end: u }, s);
    if (!c) return null;
    Object.assign(r, c.params);
    let f = a.route;
    l.push({ params: r, pathname: st([o, c.pathname]), pathnameBase: wm(st([o, c.pathnameBase])), route: f }),
      c.pathnameBase !== '/' && (o = st([o, c.pathnameBase]));
  }
  return l;
}
function Zt(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = vm(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    i = l.replace(/(.)\/+$/, '$1'),
    a = o.slice(1);
  return {
    params: r.reduce((s, c, f) => {
      let { paramName: h, isOptional: g } = c;
      if (h === '*') {
        let E = a[f] || '';
        i = l.slice(0, l.length - E.length).replace(/(.)\/+$/, '$1');
      }
      let R = a[f];
      return g && !R ? (s[h] = void 0) : (s[h] = (R || '').replace(/%2F/g, '/')), s;
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function vm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    nr(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, u) => (r.push({ paramName: a, isOptional: u != null }), u ? '/?([^\\/]+)?' : '/([^\\/]+)'),
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }), (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (o += '\\/*$')
        : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function ym(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      nr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function qe(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function tl(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: o = '' } = typeof e == 'string' ? Te(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : gm(n, t)) : t, search: Rm(r), hash: Em(o) };
}
function gm(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Gi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function yc(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function nl(e, t) {
  let n = yc(e);
  return t ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function rl(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = Te(e))
    : ((o = re({}, e)),
      H(!o.pathname || !o.pathname.includes('?'), Gi('?', 'pathname', 'search', o)),
      H(!o.pathname || !o.pathname.includes('#'), Gi('#', 'pathname', 'hash', o)),
      H(!o.search || !o.search.includes('#'), Gi('#', 'search', 'hash', o)));
  let l = e === '' || o.pathname === '',
    i = l ? '/' : o.pathname,
    a;
  if (i == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith('..')) {
      let h = i.split('/');
      for (; h[0] === '..'; ) h.shift(), (f -= 1);
      o.pathname = h.join('/');
    }
    a = f >= 0 ? t[f] : '/';
  }
  let u = tl(o, a),
    s = i && i !== '/' && i.endsWith('/'),
    c = (l || i === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (s || c) && (u.pathname += '/'), u;
}
function Sm(e) {
  return e instanceof Promise && e._tracked === !0;
}
function xm(e) {
  if (!Sm(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
function bt(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
function ll(e) {
  let t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n = typeof t < 'u' && typeof t.document < 'u' && typeof t.document.createElement < 'u',
    r = !n;
  H(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let y = e.detectErrorBoundary;
    o = (w) => ({ hasErrorBoundary: y(w) });
  } else o = Lm;
  let l = {},
    i = qi(e.routes, o, void 0, l),
    a,
    u = e.basename || '/',
    s = re(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future,
    ),
    c = null,
    f = new Set(),
    h = null,
    g = null,
    R = null,
    E = e.hydrationData != null,
    x = De(i, e.history.location, u),
    p = null;
  if (x == null) {
    let y = be(404, { pathname: e.history.location.pathname }),
      { matches: w, route: C } = dc(i);
    (x = w), (p = { [C.id]: y });
  }
  let d,
    m = x.some((y) => y.route.lazy),
    S = x.some((y) => y.route.loader);
  if (m) d = !1;
  else if (!S) d = !0;
  else if (s.v7_partialHydration) {
    let y = e.hydrationData ? e.hydrationData.loaderData : null,
      w = e.hydrationData ? e.hydrationData.errors : null,
      C = (L) =>
        L.route.loader
          ? L.route.loader.hydrate === !0
            ? !1
            : (y && y[L.route.id] !== void 0) || (w && w[L.route.id] !== void 0)
          : !0;
    if (w) {
      let L = x.findIndex((M) => w[M.route.id] !== void 0);
      d = x.slice(0, L + 1).every(C);
    } else d = x.every(C);
  } else d = e.hydrationData != null;
  let k,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: x,
      initialized: d,
      navigation: Zi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    _ = b.Pop,
    P = !1,
    O,
    A = !1,
    W = new Map(),
    Re = null,
    ne = !1,
    Be = !1,
    Qo = [],
    Yo = [],
    de = new Map(),
    Jo = 0,
    Ar = -1,
    Xn = new Map(),
    Dt = new Set(),
    Gn = new Map(),
    Ur = new Map(),
    Tt = new Set(),
    kn = new Map(),
    Cn = new Map(),
    $i = !1;
  function Vh() {
    if (
      ((c = e.history.listen((y) => {
        let { action: w, location: C, delta: L } = y;
        if ($i) {
          $i = !1;
          return;
        }
        nr(
          Cn.size === 0 || L != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        );
        let M = bs({ currentLocation: v.location, nextLocation: C, historyAction: w });
        if (M && L != null) {
          ($i = !0),
            e.history.go(L * -1),
            Go(M, {
              state: 'blocked',
              location: C,
              proceed() {
                Go(M, { state: 'proceeding', proceed: void 0, reset: void 0, location: C }), e.history.go(L);
              },
              reset() {
                let B = new Map(v.blockers);
                B.set(M, er), $e({ blockers: B });
              },
            });
          return;
        }
        return Nn(w, C);
      })),
      n)
    ) {
      Hm(t, W);
      let y = () => Vm(t, W);
      t.addEventListener('pagehide', y), (Re = () => t.removeEventListener('pagehide', y));
    }
    return v.initialized || Nn(b.Pop, v.location, { initialHydration: !0 }), k;
  }
  function Bh() {
    c && c(),
      Re && Re(),
      f.clear(),
      O && O.abort(),
      v.fetchers.forEach((y, w) => Xo(w)),
      v.blockers.forEach((y, w) => Zs(w));
  }
  function $h(y) {
    return f.add(y), () => f.delete(y);
  }
  function $e(y, w) {
    w === void 0 && (w = {}), (v = re({}, v, y));
    let C = [],
      L = [];
    s.v7_fetcherPersist &&
      v.fetchers.forEach((M, B) => {
        M.state === 'idle' && (Tt.has(B) ? L.push(B) : C.push(B));
      }),
      [...f].forEach((M) =>
        M(v, {
          deletedFetchers: L,
          unstable_viewTransitionOpts: w.viewTransitionOpts,
          unstable_flushSync: w.flushSync === !0,
        }),
      ),
      s.v7_fetcherPersist && (C.forEach((M) => v.fetchers.delete(M)), L.forEach((M) => Xo(M)));
  }
  function zr(y, w, C) {
    var L, M;
    let { flushSync: B } = C === void 0 ? {} : C,
      j =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        ut(v.navigation.formMethod) &&
        v.navigation.state === 'loading' &&
        ((L = y.state) == null ? void 0 : L._isRedirect) !== !0,
      I;
    w.actionData
      ? Object.keys(w.actionData).length > 0
        ? (I = w.actionData)
        : (I = null)
      : j
        ? (I = v.actionData)
        : (I = null);
    let z = w.loaderData ? cc(v.loaderData, w.loaderData, w.matches || [], w.errors) : v.loaderData,
      $ = v.blockers;
    $.size > 0 && (($ = new Map($)), $.forEach((X, Ee) => $.set(Ee, er)));
    let me =
      P === !0 ||
      (v.navigation.formMethod != null &&
        ut(v.navigation.formMethod) &&
        ((M = y.state) == null ? void 0 : M._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      ne ||
        _ === b.Pop ||
        (_ === b.Push ? e.history.push(y, y.state) : _ === b.Replace && e.history.replace(y, y.state));
    let V;
    if (_ === b.Pop) {
      let X = W.get(v.location.pathname);
      X && X.has(y.pathname)
        ? (V = { currentLocation: v.location, nextLocation: y })
        : W.has(y.pathname) && (V = { currentLocation: y, nextLocation: v.location });
    } else if (A) {
      let X = W.get(v.location.pathname);
      X ? X.add(y.pathname) : ((X = new Set([y.pathname])), W.set(v.location.pathname, X)),
        (V = { currentLocation: v.location, nextLocation: y });
    }
    $e(
      re({}, w, {
        actionData: I,
        loaderData: z,
        historyAction: _,
        location: y,
        initialized: !0,
        navigation: Zi,
        revalidation: 'idle',
        restoreScrollPosition: ec(y, w.matches || v.matches),
        preventScrollReset: me,
        blockers: $,
      }),
      { viewTransitionOpts: V, flushSync: B === !0 },
    ),
      (_ = b.Pop),
      (P = !1),
      (A = !1),
      (ne = !1),
      (Be = !1),
      (Qo = []),
      (Yo = []);
  }
  async function Ks(y, w) {
    if (typeof y == 'number') {
      e.history.go(y);
      return;
    }
    let C = ea(v.location, v.matches, u, s.v7_prependBasename, y, s.v7_relativeSplatPath, w?.fromRouteId, w?.relative),
      { path: L, submission: M, error: B } = oc(s.v7_normalizeFormMethod, !1, C, w),
      j = v.location,
      I = Kr(v.location, L, w && w.state);
    I = re({}, I, e.history.encodeLocation(I));
    let z = w && w.replace != null ? w.replace : void 0,
      $ = b.Push;
    z === !0
      ? ($ = b.Replace)
      : z === !1 ||
        (M != null && ut(M.formMethod) && M.formAction === v.location.pathname + v.location.search && ($ = b.Replace));
    let me = w && 'preventScrollReset' in w ? w.preventScrollReset === !0 : void 0,
      V = (w && w.unstable_flushSync) === !0,
      X = bs({ currentLocation: j, nextLocation: I, historyAction: $ });
    if (X) {
      Go(X, {
        state: 'blocked',
        location: I,
        proceed() {
          Go(X, { state: 'proceeding', proceed: void 0, reset: void 0, location: I }), Ks(y, w);
        },
        reset() {
          let Ee = new Map(v.blockers);
          Ee.set(X, er), $e({ blockers: Ee });
        },
      });
      return;
    }
    return await Nn($, I, {
      submission: M,
      pendingError: B,
      preventScrollReset: me,
      replace: w && w.replace,
      enableViewTransition: w && w.unstable_viewTransition,
      flushSync: V,
    });
  }
  function Wh() {
    if ((Wi(), $e({ revalidation: 'loading' }), v.navigation.state !== 'submitting')) {
      if (v.navigation.state === 'idle') {
        Nn(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Nn(_ || v.historyAction, v.navigation.location, { overrideNavigation: v.navigation });
    }
  }
  async function Nn(y, w, C) {
    O && O.abort(),
      (O = null),
      (_ = y),
      (ne = (C && C.startUninterruptedRevalidation) === !0),
      qh(v.location, v.matches),
      (P = (C && C.preventScrollReset) === !0),
      (A = (C && C.enableViewTransition) === !0);
    let L = a || i,
      M = C && C.overrideNavigation,
      B = De(L, w, u),
      j = (C && C.flushSync) === !0;
    if (!B) {
      let Ee = be(404, { pathname: w.pathname }),
        { matches: We, route: ve } = dc(L);
      Ki(), zr(w, { matches: We, loaderData: {}, errors: { [ve.id]: Ee } }, { flushSync: j });
      return;
    }
    if (v.initialized && !Be && Mm(v.location, w) && !(C && C.submission && ut(C.submission.formMethod))) {
      zr(w, { matches: B }, { flushSync: j });
      return;
    }
    O = new AbortController();
    let I = Br(e.history, w, O.signal, C && C.submission),
      z,
      $;
    if (C && C.pendingError) $ = { [Wr(B).route.id]: C.pendingError };
    else if (C && C.submission && ut(C.submission.formMethod)) {
      let Ee = await Kh(I, w, C.submission, B, { replace: C.replace, flushSync: j });
      if (Ee.shortCircuited) return;
      (z = Ee.pendingActionData),
        ($ = Ee.pendingActionError),
        (M = bi(w, C.submission)),
        (j = !1),
        (I = new Request(I.url, { signal: I.signal }));
    }
    let {
      shortCircuited: me,
      loaderData: V,
      errors: X,
    } = await Qh(
      I,
      w,
      B,
      M,
      C && C.submission,
      C && C.fetcherSubmission,
      C && C.replace,
      C && C.initialHydration === !0,
      j,
      z,
      $,
    );
    me || ((O = null), zr(w, re({ matches: B }, z ? { actionData: z } : {}, { loaderData: V, errors: X })));
  }
  async function Kh(y, w, C, L, M) {
    M === void 0 && (M = {}), Wi();
    let B = Im(w, C);
    $e({ navigation: B }, { flushSync: M.flushSync === !0 });
    let j,
      I = na(L, w);
    if (!I.route.action && !I.route.lazy)
      j = { type: ae.error, error: be(405, { method: y.method, pathname: w.pathname, routeId: I.route.id }) };
    else if (((j = await Vr('action', y, I, L, l, o, u, s.v7_relativeSplatPath)), y.signal.aborted))
      return { shortCircuited: !0 };
    if (Dn(j)) {
      let z;
      return (
        M && M.replace != null ? (z = M.replace) : (z = j.location === v.location.pathname + v.location.search),
        await Ir(v, j, { submission: C, replace: z }),
        { shortCircuited: !0 }
      );
    }
    if (tr(j)) {
      let z = Wr(L, I.route.id);
      return (
        (M && M.replace) !== !0 && (_ = b.Push),
        { pendingActionData: {}, pendingActionError: { [z.route.id]: j.error } }
      );
    }
    if (Ln(j)) throw be(400, { type: 'defer-action' });
    return { pendingActionData: { [I.route.id]: j.data } };
  }
  async function Qh(y, w, C, L, M, B, j, I, z, $, me) {
    let V = L || bi(w, M),
      X = M || B || hc(V),
      Ee = a || i,
      [We, ve] = lc(e.history, v, C, X, w, s.v7_partialHydration && I === !0, Be, Qo, Yo, Tt, Gn, Dt, Ee, u, $, me);
    if (
      (Ki((Q) => !(C && C.some((J) => J.route.id === Q)) || (We && We.some((J) => J.route.id === Q))),
      (Ar = ++Jo),
      We.length === 0 && ve.length === 0)
    ) {
      let Q = Xs();
      return (
        zr(
          w,
          re(
            { matches: C, loaderData: {}, errors: me || null },
            $ ? { actionData: $ } : {},
            Q ? { fetchers: new Map(v.fetchers) } : {},
          ),
          { flushSync: z },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!ne && (!s.v7_partialHydration || !I)) {
      ve.forEach((J) => {
        let Ae = v.fetchers.get(J.key),
          bo = $r(void 0, Ae ? Ae.data : void 0);
        v.fetchers.set(J.key, bo);
      });
      let Q = $ || v.actionData;
      $e(
        re(
          { navigation: V },
          Q ? (Object.keys(Q).length === 0 ? { actionData: null } : { actionData: Q }) : {},
          ve.length > 0 ? { fetchers: new Map(v.fetchers) } : {},
        ),
        { flushSync: z },
      );
    }
    ve.forEach((Q) => {
      de.has(Q.key) && Jt(Q.key), Q.controller && de.set(Q.key, Q.controller);
    });
    let Zn = () => ve.forEach((Q) => Jt(Q.key));
    O && O.signal.addEventListener('abort', Zn);
    let { results: Qi, loaderResults: bn, fetcherResults: Xt } = await Qs(v.matches, C, We, ve, y);
    if (y.signal.aborted) return { shortCircuited: !0 };
    O && O.signal.removeEventListener('abort', Zn), ve.forEach((Q) => de.delete(Q.key));
    let Pn = fc(Qi);
    if (Pn) {
      if (Pn.idx >= We.length) {
        let Q = ve[Pn.idx - We.length].key;
        Dt.add(Q);
      }
      return await Ir(v, Pn.result, { replace: j }), { shortCircuited: !0 };
    }
    let { loaderData: Yi, errors: Hr } = sc(v, C, We, bn, me, ve, Xt, kn);
    kn.forEach((Q, J) => {
      Q.subscribe((Ae) => {
        (Ae || Q.done) && kn.delete(J);
      });
    }),
      s.v7_partialHydration &&
        I &&
        v.errors &&
        Object.entries(v.errors)
          .filter((Q) => {
            let [J] = Q;
            return !We.some((Ae) => Ae.route.id === J);
          })
          .forEach((Q) => {
            let [J, Ae] = Q;
            Hr = Object.assign(Hr || {}, { [J]: Ae });
          });
    let Ji = Xs(),
      qn = Gs(Ar),
      Zo = Ji || qn || ve.length > 0;
    return re({ loaderData: Yi, errors: Hr }, Zo ? { fetchers: new Map(v.fetchers) } : {});
  }
  function Yh(y, w, C, L) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    de.has(y) && Jt(y);
    let M = (L && L.unstable_flushSync) === !0,
      B = a || i,
      j = ea(v.location, v.matches, u, s.v7_prependBasename, C, s.v7_relativeSplatPath, w, L?.relative),
      I = De(B, j, u);
    if (!I) {
      jr(y, w, be(404, { pathname: j }), { flushSync: M });
      return;
    }
    let { path: z, submission: $, error: me } = oc(s.v7_normalizeFormMethod, !0, j, L);
    if (me) {
      jr(y, w, me, { flushSync: M });
      return;
    }
    let V = na(I, z);
    if (((P = (L && L.preventScrollReset) === !0), $ && ut($.formMethod))) {
      Jh(y, w, z, V, I, M, $);
      return;
    }
    Gn.set(y, { routeId: w, path: z }), Xh(y, w, z, V, I, M, $);
  }
  async function Jh(y, w, C, L, M, B, j) {
    if ((Wi(), Gn.delete(y), !L.route.action && !L.route.lazy)) {
      let J = be(405, { method: j.formMethod, pathname: C, routeId: w });
      jr(y, w, J, { flushSync: B });
      return;
    }
    let I = v.fetchers.get(y);
    Yt(y, jm(j, I), { flushSync: B });
    let z = new AbortController(),
      $ = Br(e.history, C, z.signal, j);
    de.set(y, z);
    let me = Jo,
      V = await Vr('action', $, L, M, l, o, u, s.v7_relativeSplatPath);
    if ($.signal.aborted) {
      de.get(y) === z && de.delete(y);
      return;
    }
    if (s.v7_fetcherPersist && Tt.has(y)) {
      if (Dn(V) || tr(V)) {
        Yt(y, Gt(void 0));
        return;
      }
    } else {
      if (Dn(V))
        if ((de.delete(y), Ar > me)) {
          Yt(y, Gt(void 0));
          return;
        } else return Dt.add(y), Yt(y, $r(j)), Ir(v, V, { fetcherSubmission: j });
      if (tr(V)) {
        jr(y, w, V.error);
        return;
      }
    }
    if (Ln(V)) throw be(400, { type: 'defer-action' });
    let X = v.navigation.location || v.location,
      Ee = Br(e.history, X, z.signal),
      We = a || i,
      ve = v.navigation.state !== 'idle' ? De(We, v.navigation.location, u) : v.matches;
    H(ve, "Didn't find any matches after fetcher action");
    let Zn = ++Jo;
    Xn.set(y, Zn);
    let Qi = $r(j, V.data);
    v.fetchers.set(y, Qi);
    let [bn, Xt] = lc(e.history, v, ve, j, X, !1, Be, Qo, Yo, Tt, Gn, Dt, We, u, { [L.route.id]: V.data }, void 0);
    Xt.filter((J) => J.key !== y).forEach((J) => {
      let Ae = J.key,
        bo = v.fetchers.get(Ae),
        tm = $r(void 0, bo ? bo.data : void 0);
      v.fetchers.set(Ae, tm), de.has(Ae) && Jt(Ae), J.controller && de.set(Ae, J.controller);
    }),
      $e({ fetchers: new Map(v.fetchers) });
    let Pn = () => Xt.forEach((J) => Jt(J.key));
    z.signal.addEventListener('abort', Pn);
    let { results: Yi, loaderResults: Hr, fetcherResults: Ji } = await Qs(v.matches, ve, bn, Xt, Ee);
    if (z.signal.aborted) return;
    z.signal.removeEventListener('abort', Pn), Xn.delete(y), de.delete(y), Xt.forEach((J) => de.delete(J.key));
    let qn = fc(Yi);
    if (qn) {
      if (qn.idx >= bn.length) {
        let J = Xt[qn.idx - bn.length].key;
        Dt.add(J);
      }
      return Ir(v, qn.result);
    }
    let { loaderData: Zo, errors: Q } = sc(v, v.matches, bn, Hr, void 0, Xt, Ji, kn);
    if (v.fetchers.has(y)) {
      let J = Gt(V.data);
      v.fetchers.set(y, J);
    }
    Gs(Zn),
      v.navigation.state === 'loading' && Zn > Ar
        ? (H(_, 'Expected pending action'),
          O && O.abort(),
          zr(v.navigation.location, { matches: ve, loaderData: Zo, errors: Q, fetchers: new Map(v.fetchers) }))
        : ($e({ errors: Q, loaderData: cc(v.loaderData, Zo, ve, Q), fetchers: new Map(v.fetchers) }), (Be = !1));
  }
  async function Xh(y, w, C, L, M, B, j) {
    let I = v.fetchers.get(y);
    Yt(y, $r(j, I ? I.data : void 0), { flushSync: B });
    let z = new AbortController(),
      $ = Br(e.history, C, z.signal);
    de.set(y, z);
    let me = Jo,
      V = await Vr('loader', $, L, M, l, o, u, s.v7_relativeSplatPath);
    if ((Ln(V) && (V = (await _c(V, $.signal, !0)) || V), de.get(y) === z && de.delete(y), !$.signal.aborted)) {
      if (Tt.has(y)) {
        Yt(y, Gt(void 0));
        return;
      }
      if (Dn(V))
        if (Ar > me) {
          Yt(y, Gt(void 0));
          return;
        } else {
          Dt.add(y), await Ir(v, V);
          return;
        }
      if (tr(V)) {
        jr(y, w, V.error);
        return;
      }
      H(!Ln(V), 'Unhandled fetcher deferred data'), Yt(y, Gt(V.data));
    }
  }
  async function Ir(y, w, C) {
    let { submission: L, fetcherSubmission: M, replace: B } = C === void 0 ? {} : C;
    w.revalidate && (Be = !0);
    let j = Kr(y.location, w.location, { _isRedirect: !0 });
    if ((H(j, 'Expected a location on the redirect navigation'), n)) {
      let X = !1;
      if (w.reloadDocument) X = !0;
      else if (Rc.test(w.location)) {
        let Ee = e.history.createURL(w.location);
        X = Ee.origin !== t.location.origin || qe(Ee.pathname, u) == null;
      }
      if (X) {
        B ? t.location.replace(w.location) : t.location.assign(w.location);
        return;
      }
    }
    O = null;
    let I = B === !0 ? b.Replace : b.Push,
      { formMethod: z, formAction: $, formEncType: me } = y.navigation;
    !L && !M && z && $ && me && (L = hc(y.navigation));
    let V = L || M;
    if (Pm.has(w.status) && V && ut(V.formMethod))
      await Nn(I, j, { submission: re({}, V, { formAction: w.location }), preventScrollReset: P });
    else {
      let X = bi(j, L);
      await Nn(I, j, { overrideNavigation: X, fetcherSubmission: M, preventScrollReset: P });
    }
  }
  async function Qs(y, w, C, L, M) {
    let B = await Promise.all([
        ...C.map((z) => Vr('loader', M, z, w, l, o, u, s.v7_relativeSplatPath)),
        ...L.map((z) =>
          z.matches && z.match && z.controller
            ? Vr(
                'loader',
                Br(e.history, z.path, z.controller.signal),
                z.match,
                z.matches,
                l,
                o,
                u,
                s.v7_relativeSplatPath,
              )
            : { type: ae.error, error: be(404, { pathname: z.path }) },
        ),
      ]),
      j = B.slice(0, C.length),
      I = B.slice(C.length);
    return (
      await Promise.all([
        pc(
          y,
          C,
          j,
          j.map(() => M.signal),
          !1,
          v.loaderData,
        ),
        pc(
          y,
          L.map((z) => z.match),
          I,
          L.map((z) => (z.controller ? z.controller.signal : null)),
          !0,
        ),
      ]),
      { results: B, loaderResults: j, fetcherResults: I }
    );
  }
  function Wi() {
    (Be = !0),
      Qo.push(...Ki()),
      Gn.forEach((y, w) => {
        de.has(w) && (Yo.push(w), Jt(w));
      });
  }
  function Yt(y, w, C) {
    C === void 0 && (C = {}),
      v.fetchers.set(y, w),
      $e({ fetchers: new Map(v.fetchers) }, { flushSync: (C && C.flushSync) === !0 });
  }
  function jr(y, w, C, L) {
    L === void 0 && (L = {});
    let M = Wr(v.matches, w);
    Xo(y), $e({ errors: { [M.route.id]: C }, fetchers: new Map(v.fetchers) }, { flushSync: (L && L.flushSync) === !0 });
  }
  function Ys(y) {
    return s.v7_fetcherPersist && (Ur.set(y, (Ur.get(y) || 0) + 1), Tt.has(y) && Tt.delete(y)), v.fetchers.get(y) || wc;
  }
  function Xo(y) {
    let w = v.fetchers.get(y);
    de.has(y) && !(w && w.state === 'loading' && Xn.has(y)) && Jt(y),
      Gn.delete(y),
      Xn.delete(y),
      Dt.delete(y),
      Tt.delete(y),
      v.fetchers.delete(y);
  }
  function Gh(y) {
    if (s.v7_fetcherPersist) {
      let w = (Ur.get(y) || 0) - 1;
      w <= 0 ? (Ur.delete(y), Tt.add(y)) : Ur.set(y, w);
    } else Xo(y);
    $e({ fetchers: new Map(v.fetchers) });
  }
  function Jt(y) {
    let w = de.get(y);
    H(w, 'Expected fetch controller: ' + y), w.abort(), de.delete(y);
  }
  function Js(y) {
    for (let w of y) {
      let C = Ys(w),
        L = Gt(C.data);
      v.fetchers.set(w, L);
    }
  }
  function Xs() {
    let y = [],
      w = !1;
    for (let C of Dt) {
      let L = v.fetchers.get(C);
      H(L, 'Expected fetcher: ' + C), L.state === 'loading' && (Dt.delete(C), y.push(C), (w = !0));
    }
    return Js(y), w;
  }
  function Gs(y) {
    let w = [];
    for (let [C, L] of Xn)
      if (L < y) {
        let M = v.fetchers.get(C);
        H(M, 'Expected fetcher: ' + C), M.state === 'loading' && (Jt(C), Xn.delete(C), w.push(C));
      }
    return Js(w), w.length > 0;
  }
  function Zh(y, w) {
    let C = v.blockers.get(y) || er;
    return Cn.get(y) !== w && Cn.set(y, w), C;
  }
  function Zs(y) {
    v.blockers.delete(y), Cn.delete(y);
  }
  function Go(y, w) {
    let C = v.blockers.get(y) || er;
    H(
      (C.state === 'unblocked' && w.state === 'blocked') ||
        (C.state === 'blocked' && w.state === 'blocked') ||
        (C.state === 'blocked' && w.state === 'proceeding') ||
        (C.state === 'blocked' && w.state === 'unblocked') ||
        (C.state === 'proceeding' && w.state === 'unblocked'),
      'Invalid blocker state transition: ' + C.state + ' -> ' + w.state,
    );
    let L = new Map(v.blockers);
    L.set(y, w), $e({ blockers: L });
  }
  function bs(y) {
    let { currentLocation: w, nextLocation: C, historyAction: L } = y;
    if (Cn.size === 0) return;
    Cn.size > 1 && nr(!1, 'A router only supports one blocker at a time');
    let M = Array.from(Cn.entries()),
      [B, j] = M[M.length - 1],
      I = v.blockers.get(B);
    if (!(I && I.state === 'proceeding') && j({ currentLocation: w, nextLocation: C, historyAction: L })) return B;
  }
  function Ki(y) {
    let w = [];
    return (
      kn.forEach((C, L) => {
        (!y || y(L)) && (C.cancel(), w.push(L), kn.delete(L));
      }),
      w
    );
  }
  function bh(y, w, C) {
    if (((h = y), (R = w), (g = C || null), !E && v.navigation === Zi)) {
      E = !0;
      let L = ec(v.location, v.matches);
      L != null && $e({ restoreScrollPosition: L });
    }
    return () => {
      (h = null), (R = null), (g = null);
    };
  }
  function qs(y, w) {
    return (
      (g &&
        g(
          y,
          w.map((L) => oa(L, v.loaderData)),
        )) ||
      y.key
    );
  }
  function qh(y, w) {
    if (h && R) {
      let C = qs(y, w);
      h[C] = R();
    }
  }
  function ec(y, w) {
    if (h) {
      let C = qs(y, w),
        L = h[C];
      if (typeof L == 'number') return L;
    }
    return null;
  }
  function em(y) {
    (l = {}), (a = qi(y, o, void 0, l));
  }
  return (
    (k = {
      get basename() {
        return u;
      },
      get future() {
        return s;
      },
      get state() {
        return v;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Vh,
      subscribe: $h,
      enableScrollRestoration: bh,
      navigate: Ks,
      fetch: Yh,
      revalidate: Wh,
      createHref: (y) => e.history.createHref(y),
      encodeLocation: (y) => e.history.encodeLocation(y),
      getFetcher: Ys,
      deleteFetcher: Gh,
      dispose: Bh,
      getBlocker: Zh,
      deleteBlocker: Zs,
      _internalFetchControllers: de,
      _internalActiveDeferreds: kn,
      _internalSetRoutes: em,
    }),
    k
  );
}
function Dm(e) {
  return e != null && (('formData' in e && e.formData != null) || ('body' in e && e.body !== void 0));
}
function ea(e, t, n, r, o, l, i, a) {
  let u, s;
  if (i) {
    u = [];
    for (let f of t)
      if ((u.push(f), f.route.id === i)) {
        s = f;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let c = rl(o || '.', nl(u, l), qe(e.pathname, n) || e.pathname, a === 'path');
  return (
    o == null && ((c.search = e.search), (c.hash = e.hash)),
    (o == null || o === '' || o === '.') &&
      s &&
      s.route.index &&
      !la(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, '?index&') : '?index'),
    r && n !== '/' && (c.pathname = c.pathname === '/' ? n : st([n, c.pathname])),
    dt(c)
  );
}
function oc(e, t, n, r) {
  if (!r || !Dm(r)) return { path: n };
  if (r.formMethod && !zm(r.formMethod)) return { path: n, error: be(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: be(400, { type: 'invalid-body' }) }),
    l = r.formMethod || 'get',
    i = e ? l.toUpperCase() : l.toLowerCase(),
    a = xc(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!ut(i)) return o();
      let h =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((g, R) => {
                let [E, x] = R;
                return (
                  '' +
                  g +
                  E +
                  '=' +
                  x +
                  `
`
                );
              }, '')
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!ut(i)) return o();
      try {
        let h = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  H(typeof FormData == 'function', 'FormData is not available in this environment');
  let u, s;
  if (r.formData) (u = ta(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = ta(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = uc(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = uc(u));
    } catch {
      return o();
    }
  let c = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (ut(c.formMethod)) return { path: n, submission: c };
  let f = Te(n);
  return t && f.search && la(f.search) && u.append('index', ''), (f.search = '?' + u), { path: dt(f), submission: c };
}
function Tm(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function lc(e, t, n, r, o, l, i, a, u, s, c, f, h, g, R, E) {
  let x = E ? Object.values(E)[0] : R ? Object.values(R)[0] : void 0,
    p = e.createURL(t.location),
    d = e.createURL(o),
    m = E ? Object.keys(E)[0] : void 0,
    k = Tm(n, m).filter((_, P) => {
      let { route: O } = _;
      if (O.lazy) return !0;
      if (O.loader == null) return !1;
      if (l) return O.loader.hydrate ? !0 : t.loaderData[O.id] === void 0 && (!t.errors || t.errors[O.id] === void 0);
      if (Om(t.loaderData, t.matches[P], _) || a.some((Re) => Re === _.route.id)) return !0;
      let A = t.matches[P],
        W = _;
      return ic(
        _,
        re({ currentUrl: p, currentParams: A.params, nextUrl: d, nextParams: W.params }, r, {
          actionResult: x,
          defaultShouldRevalidate:
            i || p.pathname + p.search === d.pathname + d.search || p.search !== d.search || Sc(A, W),
        }),
      );
    }),
    v = [];
  return (
    c.forEach((_, P) => {
      if (l || !n.some((ne) => ne.route.id === _.routeId) || s.has(P)) return;
      let O = De(h, _.path, g);
      if (!O) {
        v.push({ key: P, routeId: _.routeId, path: _.path, matches: null, match: null, controller: null });
        return;
      }
      let A = t.fetchers.get(P),
        W = na(O, _.path),
        Re = !1;
      f.has(P)
        ? (Re = !1)
        : u.includes(P)
          ? (Re = !0)
          : A && A.state !== 'idle' && A.data === void 0
            ? (Re = i)
            : (Re = ic(
                W,
                re(
                  {
                    currentUrl: p,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: d,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: x, defaultShouldRevalidate: i },
                ),
              )),
        Re &&
          v.push({ key: P, routeId: _.routeId, path: _.path, matches: O, match: W, controller: new AbortController() });
    }),
    [k, v]
  );
}
function Om(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function Sc(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || (n != null && n.endsWith('*') && e.params['*'] !== t.params['*']);
}
function ic(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function ac(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  H(o, 'No route found in manifest');
  let l = {};
  for (let i in r) {
    let u = o[i] !== void 0 && i !== 'hasErrorBoundary';
    nr(
      !u,
      'Route "' +
        o.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.'),
    ),
      !u && !om.has(i) && (l[i] = r[i]);
  }
  Object.assign(o, l), Object.assign(o, re({}, t(o), { lazy: void 0 }));
}
async function Vr(e, t, n, r, o, l, i, a, u) {
  u === void 0 && (u = {});
  let s,
    c,
    f,
    h = (E) => {
      let x,
        p = new Promise((d, m) => (x = m));
      return (
        (f = () => x()),
        t.signal.addEventListener('abort', f),
        Promise.race([E({ request: t, params: n.params, context: u.requestContext }), p])
      );
    };
  try {
    let E = n.route[e];
    if (n.route.lazy)
      if (E) {
        let x,
          p = await Promise.all([
            h(E).catch((d) => {
              x = d;
            }),
            ac(n.route, l, o),
          ]);
        if (x) throw x;
        c = p[0];
      } else if ((await ac(n.route, l, o), (E = n.route[e]), E)) c = await h(E);
      else if (e === 'action') {
        let x = new URL(t.url),
          p = x.pathname + x.search;
        throw be(405, { method: t.method, pathname: p, routeId: n.route.id });
      } else return { type: ae.data, data: void 0 };
    else if (E) c = await h(E);
    else {
      let x = new URL(t.url),
        p = x.pathname + x.search;
      throw be(404, { pathname: p });
    }
    H(
      c !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' + n.route.id + '" but didn\'t return anything from your `' + e + '` ') +
        'function. Please return a value or `null`.',
    );
  } catch (E) {
    (s = ae.error), (c = E);
  } finally {
    f && t.signal.removeEventListener('abort', f);
  }
  if (Um(c)) {
    let E = c.status;
    if (Nm.has(E)) {
      let p = c.headers.get('Location');
      if ((H(p, 'Redirects returned/thrown from loaders/actions must have a Location header'), !Rc.test(p)))
        p = ea(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, p, a);
      else if (!u.isStaticRequest) {
        let d = new URL(t.url),
          m = p.startsWith('//') ? new URL(d.protocol + p) : new URL(p),
          S = qe(m.pathname, i) != null;
        m.origin === d.origin && S && (p = m.pathname + m.search + m.hash);
      }
      if (u.isStaticRequest) throw (c.headers.set('Location', p), c);
      return {
        type: ae.redirect,
        status: E,
        location: p,
        revalidate: c.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: c.headers.get('X-Remix-Reload-Document') !== null,
      };
    }
    if (u.isRouteRequest) throw { type: s === ae.error ? ae.error : ae.data, response: c };
    let x;
    try {
      let p = c.headers.get('Content-Type');
      p && /\bapplication\/json\b/.test(p)
        ? c.body == null
          ? (x = null)
          : (x = await c.json())
        : (x = await c.text());
    } catch (p) {
      return { type: ae.error, error: p };
    }
    return s === ae.error
      ? { type: s, error: new ct(E, c.statusText, x), headers: c.headers }
      : { type: ae.data, data: x, statusCode: c.status, headers: c.headers };
  }
  if (s === ae.error) return { type: s, error: c };
  if (Am(c)) {
    var g, R;
    return {
      type: ae.deferred,
      deferredData: c,
      statusCode: (g = c.init) == null ? void 0 : g.status,
      headers: ((R = c.init) == null ? void 0 : R.headers) && new Headers(c.init.headers),
    };
  }
  return { type: ae.data, data: c };
}
function Br(e, t, n, r) {
  let o = e.createURL(xc(t)).toString(),
    l = { signal: n };
  if (r && ut(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (l.method = i.toUpperCase()),
      a === 'application/json'
        ? ((l.headers = new Headers({ 'Content-Type': a })), (l.body = JSON.stringify(r.json)))
        : a === 'text/plain'
          ? (l.body = r.text)
          : a === 'application/x-www-form-urlencoded' && r.formData
            ? (l.body = ta(r.formData))
            : (l.body = r.formData);
  }
  return new Request(o, l);
}
function ta(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function uc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Fm(e, t, n, r, o) {
  let l = {},
    i = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((c, f) => {
      let h = t[f].route.id;
      if ((H(!Dn(c), 'Cannot handle redirect results in processLoaderData'), tr(c))) {
        let g = Wr(e, h),
          R = c.error;
        r && ((R = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[g.route.id] == null && (i[g.route.id] = R),
          (l[h] = void 0),
          u || ((u = !0), (a = bt(c.error) ? c.error.status : 500)),
          c.headers && (s[h] = c.headers);
      } else
        Ln(c) ? (o.set(h, c.deferredData), (l[h] = c.deferredData.data)) : (l[h] = c.data),
          c.statusCode != null && c.statusCode !== 200 && !u && (a = c.statusCode),
          c.headers && (s[h] = c.headers);
    }),
    r && ((i = r), (l[Object.keys(r)[0]] = void 0)),
    { loaderData: l, errors: i, statusCode: a || 200, loaderHeaders: s }
  );
}
function sc(e, t, n, r, o, l, i, a) {
  let { loaderData: u, errors: s } = Fm(t, n, r, o, a);
  for (let c = 0; c < l.length; c++) {
    let { key: f, match: h, controller: g } = l[c];
    H(i !== void 0 && i[c] !== void 0, 'Did not find corresponding fetcher result');
    let R = i[c];
    if (!(g && g.signal.aborted))
      if (tr(R)) {
        let E = Wr(e.matches, h?.route.id);
        (s && s[E.route.id]) || (s = re({}, s, { [E.route.id]: R.error })), e.fetchers.delete(f);
      } else if (Dn(R)) H(!1, 'Unhandled fetcher revalidation redirect');
      else if (Ln(R)) H(!1, 'Unhandled fetcher deferred data');
      else {
        let E = Gt(R.data);
        e.fetchers.set(f, E);
      }
  }
  return { loaderData: u, errors: s };
}
function cc(e, t, n, r) {
  let o = re({}, t);
  for (let l of n) {
    let i = l.route.id;
    if (
      (t.hasOwnProperty(i) ? t[i] !== void 0 && (o[i] = t[i]) : e[i] !== void 0 && l.route.loader && (o[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return o;
}
function Wr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function dc(e) {
  let t = e.length === 1 ? e[0] : e.find((n) => n.index || !n.path || n.path === '/') || { id: '__shim-error-route__' };
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t };
}
function be(e, t) {
  let { pathname: n, routeId: r, method: o, type: l } = t === void 0 ? {} : t,
    i = 'Unknown Server Error',
    a = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((i = 'Bad Request'),
        o && n && r
          ? (a =
              'You made a ' +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : l === 'defer-action'
            ? (a = 'defer() is not supported in actions')
            : l === 'invalid-body' && (a = 'Unable to encode submission body'))
      : e === 403
        ? ((i = 'Forbidden'), (a = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((i = 'Not Found'), (a = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((i = 'Method Not Allowed'),
            o && n && r
              ? (a =
                  'You made a ' +
                  o.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  'so there is no way to handle the request.')
              : o && (a = 'Invalid request method "' + o.toUpperCase() + '"')),
    new ct(e || 500, i, new Error(a), !0)
  );
}
function fc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Dn(n)) return { result: n, idx: t };
  }
}
function xc(e) {
  let t = typeof e == 'string' ? Te(e) : e;
  return dt(re({}, t, { hash: '' }));
}
function Mm(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function Ln(e) {
  return e.type === ae.deferred;
}
function tr(e) {
  return e.type === ae.error;
}
function Dn(e) {
  return (e && e.type) === ae.redirect;
}
function Am(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function Um(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function zm(e) {
  return Cm.has(e.toLowerCase());
}
function ut(e) {
  return _m.has(e.toLowerCase());
}
async function pc(e, t, n, r, o, l) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      u = t[i];
    if (!u) continue;
    let s = e.find((f) => f.route.id === u.route.id),
      c = s != null && !Sc(s, u) && (l && l[u.route.id]) !== void 0;
    if (Ln(a) && (o || c)) {
      let f = r[i];
      H(f, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await _c(a, f, o).then((h) => {
          h && (n[i] = h || n[i]);
        });
    }
  }
}
async function _c(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ae.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: ae.error, error: o };
      }
    return { type: ae.data, data: e.deferredData.data };
  }
}
function la(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function na(e, t) {
  let n = typeof t == 'string' ? Te(t).search : t.search;
  if (e[e.length - 1].route.index && la(n || '')) return e[e.length - 1];
  let r = yc(e);
  return r[r.length - 1];
}
function hc(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: o, formData: l, json: i } = e;
  if (!(!t || !n || !r)) {
    if (o != null) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: o };
    if (l != null) return { formMethod: t, formAction: n, formEncType: r, formData: l, json: void 0, text: void 0 };
    if (i !== void 0) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: i, text: void 0 };
  }
}
function bi(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Im(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function $r(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function jm(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Gt(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Hm(e, t) {
  try {
    let n = e.sessionStorage.getItem(Ec);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, l] of Object.entries(r || {})) l && Array.isArray(l) && t.set(o, new Set(l || []));
    }
  } catch {}
}
function Vm(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(Ec, JSON.stringify(n));
    } catch (r) {
      nr(!1, 'Failed to save applied view transitions in sessionStorage (' + r + ').');
    }
  }
}
var b,
  tc,
  ae,
  om,
  am,
  um,
  sm,
  cm,
  dm,
  fm,
  rc,
  st,
  wm,
  Rm,
  Em,
  St,
  el,
  ol,
  ct,
  gc,
  _m,
  km,
  Cm,
  Nm,
  Pm,
  Zi,
  wc,
  er,
  Rc,
  Lm,
  Ec,
  o0,
  qt = Xi(() => {
    (function (e) {
      (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
    })(b || (b = {}));
    tc = 'popstate';
    (function (e) {
      (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
    })(ae || (ae = {}));
    om = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
    (am = /^:[\w-]+$/), (um = 3), (sm = 2), (cm = 1), (dm = 10), (fm = -2), (rc = (e) => e === '*');
    (st = (e) => e.join('/').replace(/\/\/+/g, '/')),
      (wm = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/')),
      (Rm = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e)),
      (Em = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)),
      (St = class extends Error {}),
      (el = class {
        constructor(t, n) {
          (this.pendingKeysSet = new Set()),
            (this.subscribers = new Set()),
            (this.deferredKeys = []),
            H(t && typeof t == 'object' && !Array.isArray(t), 'defer() only accepts plain objects');
          let r;
          (this.abortPromise = new Promise((l, i) => (r = i))), (this.controller = new AbortController());
          let o = () => r(new St('Deferred data aborted'));
          (this.unlistenAbortSignal = () => this.controller.signal.removeEventListener('abort', o)),
            this.controller.signal.addEventListener('abort', o),
            (this.data = Object.entries(t).reduce((l, i) => {
              let [a, u] = i;
              return Object.assign(l, { [a]: this.trackPromise(a, u) });
            }, {})),
            this.done && this.unlistenAbortSignal(),
            (this.init = n);
        }
        trackPromise(t, n) {
          if (!(n instanceof Promise)) return n;
          this.deferredKeys.push(t), this.pendingKeysSet.add(t);
          let r = Promise.race([n, this.abortPromise]).then(
            (o) => this.onSettle(r, t, void 0, o),
            (o) => this.onSettle(r, t, o),
          );
          return r.catch(() => {}), Object.defineProperty(r, '_tracked', { get: () => !0 }), r;
        }
        onSettle(t, n, r, o) {
          if (this.controller.signal.aborted && r instanceof St)
            return this.unlistenAbortSignal(), Object.defineProperty(t, '_error', { get: () => r }), Promise.reject(r);
          if ((this.pendingKeysSet.delete(n), this.done && this.unlistenAbortSignal(), r === void 0 && o === void 0)) {
            let l = new Error(
              'Deferred data for key "' +
                n +
                '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.',
            );
            return Object.defineProperty(t, '_error', { get: () => l }), this.emit(!1, n), Promise.reject(l);
          }
          return o === void 0
            ? (Object.defineProperty(t, '_error', { get: () => r }), this.emit(!1, n), Promise.reject(r))
            : (Object.defineProperty(t, '_data', { get: () => o }), this.emit(!1, n), o);
        }
        emit(t, n) {
          this.subscribers.forEach((r) => r(t, n));
        }
        subscribe(t) {
          return this.subscribers.add(t), () => this.subscribers.delete(t);
        }
        cancel() {
          this.controller.abort(), this.pendingKeysSet.forEach((t, n) => this.pendingKeysSet.delete(n)), this.emit(!0);
        }
        async resolveData(t) {
          let n = !1;
          if (!this.done) {
            let r = () => this.cancel();
            t.addEventListener('abort', r),
              (n = await new Promise((o) => {
                this.subscribe((l) => {
                  t.removeEventListener('abort', r), (l || this.done) && o(l);
                });
              }));
          }
          return n;
        }
        get done() {
          return this.pendingKeysSet.size === 0;
        }
        get unwrappedData() {
          return (
            H(this.data !== null && this.done, 'Can only unwrap data on initialized and settled deferreds'),
            Object.entries(this.data).reduce((t, n) => {
              let [r, o] = n;
              return Object.assign(t, { [r]: xm(o) });
            }, {})
          );
        }
        get pendingKeys() {
          return Array.from(this.pendingKeysSet);
        }
      });
    (ol = function (t, n) {
      n === void 0 && (n = 302);
      let r = n;
      typeof r == 'number' ? (r = { status: r }) : typeof r.status > 'u' && (r.status = 302);
      let o = new Headers(r.headers);
      return o.set('Location', t), new Response(null, re({}, r, { headers: o }));
    }),
      (ct = class {
        constructor(t, n, r, o) {
          o === void 0 && (o = !1),
            (this.status = t),
            (this.statusText = n || ''),
            (this.internal = o),
            r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
        }
      });
    (gc = ['post', 'put', 'patch', 'delete']),
      (_m = new Set(gc)),
      (km = ['get', ...gc]),
      (Cm = new Set(km)),
      (Nm = new Set([301, 302, 303, 307, 308])),
      (Pm = new Set([307, 308])),
      (Zi = {
        state: 'idle',
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      }),
      (wc = {
        state: 'idle',
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      }),
      (er = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 }),
      (Rc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i),
      (Lm = (e) => ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) })),
      (Ec = 'remix-router-transitions');
    o0 = Symbol('deferred');
  });
function Qr() {
  return (
    (Qr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qr.apply(this, arguments)
  );
}
function Tn(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  On() || H(!1);
  let { basename: r, navigator: o } = D.useContext(ft),
    { hash: l, pathname: i, search: a } = Fn(e, { relative: n }),
    u = i;
  return r !== '/' && (u = i === '/' ? r : st([r, i])), o.createHref({ pathname: u, search: a, hash: l });
}
function On() {
  return D.useContext(Yr) != null;
}
function Ue() {
  return On() || H(!1), D.useContext(Yr).location;
}
function Pc(e) {
  D.useContext(ft).static || D.useLayoutEffect(e);
}
function al() {
  let { isDataRoute: e } = D.useContext(xt);
  return e ? qm() : Km();
}
function Km() {
  On() || H(!1);
  let e = D.useContext(Mt),
    { basename: t, future: n, navigator: r } = D.useContext(ft),
    { matches: o } = D.useContext(xt),
    { pathname: l } = Ue(),
    i = JSON.stringify(nl(o, n.v7_relativeSplatPath)),
    a = D.useRef(!1);
  return (
    Pc(() => {
      a.current = !0;
    }),
    D.useCallback(
      function (s, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof s == 'number') {
          r.go(s);
          return;
        }
        let f = rl(s, JSON.parse(i), l, c.relative === 'path');
        e == null && t !== '/' && (f.pathname = f.pathname === '/' ? t : st([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, i, l, e],
    )
  );
}
function ua(e) {
  let t = D.useContext(xt).outlet;
  return t && D.createElement(Qm.Provider, { value: e }, t);
}
function Fn(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = D.useContext(ft),
    { matches: o } = D.useContext(xt),
    { pathname: l } = Ue(),
    i = JSON.stringify(nl(o, r.v7_relativeSplatPath));
  return D.useMemo(() => rl(e, JSON.parse(i), l, n === 'path'), [e, i, l, n]);
}
function Lc(e, t, n, r) {
  On() || H(!1);
  let { navigator: o } = D.useContext(ft),
    { matches: l } = D.useContext(xt),
    i = l[l.length - 1],
    a = i ? i.params : {},
    u = i ? i.pathname : '/',
    s = i ? i.pathnameBase : '/',
    c = i && i.route,
    f = Ue(),
    h;
  if (t) {
    var g;
    let d = typeof t == 'string' ? Te(t) : t;
    s === '/' || ((g = d.pathname) != null && g.startsWith(s)) || H(!1), (h = d);
  } else h = f;
  let R = h.pathname || '/',
    E = R;
  if (s !== '/') {
    let d = s.replace(/^\//, '').split('/');
    E = '/' + R.replace(/^\//, '').split('/').slice(d.length).join('/');
  }
  let x = De(e, { pathname: E }),
    p = Gm(
      x &&
        x.map((d) =>
          Object.assign({}, d, {
            params: Object.assign({}, a, d.params),
            pathname: st([s, o.encodeLocation ? o.encodeLocation(d.pathname).pathname : d.pathname]),
            pathnameBase:
              d.pathnameBase === '/'
                ? s
                : st([s, o.encodeLocation ? o.encodeLocation(d.pathnameBase).pathname : d.pathnameBase]),
          }),
        ),
      l,
      n,
      r,
    );
  return t && p
    ? D.createElement(
        Yr.Provider,
        {
          value: {
            location: Qr({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, h),
            navigationType: b.Pop,
          },
        },
        p,
      )
    : p;
}
function Ym() {
  let e = Jr(),
    t = bt(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    o = { padding: '0.5rem', backgroundColor: r },
    l = { padding: '2px 4px', backgroundColor: r };
  return D.createElement(
    D.Fragment,
    null,
    D.createElement('h2', null, 'Unexpected Application Error!'),
    D.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? D.createElement('pre', { style: o }, n) : null,
    null,
  );
}
function Xm(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = D.useContext(Mt);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    D.createElement(xt.Provider, { value: t }, r)
  );
}
function Gm(e, t, n, r) {
  var o;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let c = i.findIndex((f) => f.route.id && a?.[f.route.id]);
    c >= 0 || H(!1), (i = i.slice(0, Math.min(i.length, c + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < i.length; c++) {
      let f = i[c];
      if (((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (s = c), f.route.id)) {
        let { loaderData: h, errors: g } = n,
          R = f.route.loader && h[f.route.id] === void 0 && (!g || g[f.route.id] === void 0);
        if (f.route.lazy || R) {
          (u = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((c, f, h) => {
    let g,
      R = !1,
      E = null,
      x = null;
    n &&
      ((g = a && f.route.id ? a[f.route.id] : void 0),
      (E = f.route.errorElement || Jm),
      u &&
        (s < 0 && h === 0
          ? (ev('route-fallback', !1, 'No `HydrateFallback` element provided to render during initial hydration'),
            (R = !0),
            (x = null))
          : s === h && ((R = !0), (x = f.route.hydrateFallbackElement || null))));
    let p = t.concat(i.slice(0, h + 1)),
      d = () => {
        let m;
        return (
          g
            ? (m = E)
            : R
              ? (m = x)
              : f.route.Component
                ? (m = D.createElement(f.route.Component, null))
                : f.route.element
                  ? (m = f.route.element)
                  : (m = c),
          D.createElement(Xm, {
            match: f,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? D.createElement(ia, {
          location: n.location,
          revalidation: n.revalidation,
          component: E,
          error: g,
          children: d(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : d();
  }, null);
}
function Zm(e) {
  let t = D.useContext(Mt);
  return t || H(!1), t;
}
function sa(e) {
  let t = D.useContext(en);
  return t || H(!1), t;
}
function bm(e) {
  let t = D.useContext(xt);
  return t || H(!1), t;
}
function Tc(e) {
  let t = bm(e),
    n = t.matches[t.matches.length - 1];
  return n.route.id || H(!1), n.route.id;
}
function or() {
  return sa(rr.UseNavigation).navigation;
}
function lr() {
  let { matches: e, loaderData: t } = sa(rr.UseMatches);
  return D.useMemo(() => e.map((n) => oa(n, t)), [e, t]);
}
function Jr() {
  var e;
  let t = D.useContext(Nc),
    n = sa(rr.UseRouteError),
    r = Tc(rr.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ca() {
  let e = D.useContext(il);
  return e?._data;
}
function ul() {
  let e = D.useContext(il);
  return e?._error;
}
function qm() {
  let { router: e } = Zm(Dc.UseNavigateStable),
    t = Tc(rr.UseNavigateStable),
    n = D.useRef(!1);
  return (
    Pc(() => {
      n.current = !0;
    }),
    D.useCallback(
      function (o, l) {
        l === void 0 && (l = {}),
          n.current && (typeof o == 'number' ? e.navigate(o) : e.navigate(o, Qr({ fromRouteId: t }, l)));
      },
      [e, t],
    )
  );
}
function ev(e, t, n) {
  !t && !kc[e] && (kc[e] = !0);
}
function Oc(e) {
  return ua(e.context);
}
function da(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = b.Pop,
    navigator: l,
    static: i = !1,
    future: a,
  } = e;
  On() && H(!1);
  let u = t.replace(/^\/*/, '/'),
    s = D.useMemo(
      () => ({ basename: u, navigator: l, static: i, future: Qr({ v7_relativeSplatPath: !1 }, a) }),
      [u, a, l, i],
    );
  typeof r == 'string' && (r = Te(r));
  let { pathname: c = '/', search: f = '', hash: h = '', state: g = null, key: R = 'default' } = r,
    E = D.useMemo(() => {
      let x = qe(c, u);
      return x == null ? null : { location: { pathname: x, search: f, hash: h, state: g, key: R }, navigationType: o };
    }, [u, c, f, h, g, R, o]);
  return E == null
    ? null
    : D.createElement(ft.Provider, { value: s }, D.createElement(Yr.Provider, { children: n, value: E }));
}
function fa(e) {
  let { children: t, errorElement: n, resolve: r } = e;
  return D.createElement(aa, { resolve: r, errorElement: n }, D.createElement(rv, null, t));
}
function rv(e) {
  let { children: t } = e,
    n = ca(),
    r = typeof t == 'function' ? t(n) : t;
  return D.createElement(D.Fragment, null, r);
}
function pa(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return (
    e.Component && Object.assign(t, { element: D.createElement(e.Component), Component: void 0 }),
    e.HydrateFallback &&
      Object.assign(t, { hydrateFallbackElement: D.createElement(e.HydrateFallback), HydrateFallback: void 0 }),
    e.ErrorBoundary && Object.assign(t, { errorElement: D.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
    t
  );
}
var D,
  Mt,
  en,
  il,
  ft,
  Yr,
  xt,
  Nc,
  Qm,
  Jm,
  ia,
  Dc,
  rr,
  kc,
  tv,
  s0,
  et,
  nv,
  aa,
  sl = Xi(() => {
    D = Ot(Ft());
    qt();
    qt();
    (Mt = D.createContext(null)),
      (en = D.createContext(null)),
      (il = D.createContext(null)),
      (ft = D.createContext(null)),
      (Yr = D.createContext(null)),
      (xt = D.createContext({ outlet: null, matches: [], isDataRoute: !1 })),
      (Nc = D.createContext(null));
    Qm = D.createContext(null);
    (Jm = D.createElement(Ym, null)),
      (ia = class extends D.Component {
        constructor(t) {
          super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
        }
        static getDerivedStateFromError(t) {
          return { error: t };
        }
        static getDerivedStateFromProps(t, n) {
          return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
            ? { error: t.error, location: t.location, revalidation: t.revalidation }
            : {
                error: t.error !== void 0 ? t.error : n.error,
                location: n.location,
                revalidation: t.revalidation || n.revalidation,
              };
        }
        componentDidCatch(t, n) {
          console.error('React Router caught the following error during render', t, n);
        }
        render() {
          return this.state.error !== void 0
            ? D.createElement(
                xt.Provider,
                { value: this.props.routeContext },
                D.createElement(Nc.Provider, { value: this.state.error, children: this.props.component }),
              )
            : this.props.children;
        }
      });
    (Dc = (function (e) {
      return (
        (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate'), e
      );
    })(Dc || {})),
      (rr = (function (e) {
        return (
          (e.UseBlocker = 'useBlocker'),
          (e.UseLoaderData = 'useLoaderData'),
          (e.UseActionData = 'useActionData'),
          (e.UseRouteError = 'useRouteError'),
          (e.UseNavigation = 'useNavigation'),
          (e.UseRouteLoaderData = 'useRouteLoaderData'),
          (e.UseMatches = 'useMatches'),
          (e.UseRevalidator = 'useRevalidator'),
          (e.UseNavigateStable = 'useNavigate'),
          (e.UseRouteId = 'useRouteId'),
          e
        );
      })(rr || {}));
    kc = {};
    (tv = 'startTransition'), (s0 = D[tv]);
    (et = (function (e) {
      return (e[(e.pending = 0)] = 'pending'), (e[(e.success = 1)] = 'success'), (e[(e.error = 2)] = 'error'), e;
    })(et || {})),
      (nv = new Promise(() => {})),
      (aa = class extends D.Component {
        constructor(t) {
          super(t), (this.state = { error: null });
        }
        static getDerivedStateFromError(t) {
          return { error: t };
        }
        componentDidCatch(t, n) {
          console.error('<Await> caught the following error during render', t, n);
        }
        render() {
          let { children: t, errorElement: n, resolve: r } = this.props,
            o = null,
            l = et.pending;
          if (!(r instanceof Promise))
            (l = et.success),
              (o = Promise.resolve()),
              Object.defineProperty(o, '_tracked', { get: () => !0 }),
              Object.defineProperty(o, '_data', { get: () => r });
          else if (this.state.error) {
            l = et.error;
            let i = this.state.error;
            (o = Promise.reject().catch(() => {})),
              Object.defineProperty(o, '_tracked', { get: () => !0 }),
              Object.defineProperty(o, '_error', { get: () => i });
          } else
            r._tracked
              ? ((o = r), (l = o._error !== void 0 ? et.error : o._data !== void 0 ? et.success : et.pending))
              : ((l = et.pending),
                Object.defineProperty(r, '_tracked', { get: () => !0 }),
                (o = r.then(
                  (i) => Object.defineProperty(r, '_data', { get: () => i }),
                  (i) => Object.defineProperty(r, '_error', { get: () => i }),
                )));
          if (l === et.error && o._error instanceof St) throw nv;
          if (l === et.error && !n) throw o._error;
          if (l === et.error) return D.createElement(il.Provider, { value: o, children: n });
          if (l === et.success) return D.createElement(il.Provider, { value: o, children: t });
          throw o;
        }
      });
  });
var Bc = qo((G) => {
  'use strict';
  function ya(e, t) {
    var n = e.length;
    e.push(t);
    e: for (; 0 < n; ) {
      var r = (n - 1) >>> 1,
        o = e[r];
      if (0 < cl(o, t)) (e[r] = t), (e[n] = o), (n = r);
      else break e;
    }
  }
  function pt(e) {
    return e.length === 0 ? null : e[0];
  }
  function fl(e) {
    if (e.length === 0) return null;
    var t = e[0],
      n = e.pop();
    if (n !== t) {
      e[0] = n;
      e: for (var r = 0, o = e.length, l = o >>> 1; r < l; ) {
        var i = 2 * (r + 1) - 1,
          a = e[i],
          u = i + 1,
          s = e[u];
        if (0 > cl(a, n)) u < o && 0 > cl(s, a) ? ((e[r] = s), (e[u] = n), (r = u)) : ((e[r] = a), (e[i] = n), (r = i));
        else if (u < o && 0 > cl(s, n)) (e[r] = s), (e[u] = n), (r = u);
        else break e;
      }
    }
    return t;
  }
  function cl(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return n !== 0 ? n : e.id - t.id;
  }
  typeof performance == 'object' && typeof performance.now == 'function'
    ? ((Fc = performance),
      (G.unstable_now = function () {
        return Fc.now();
      }))
    : ((ha = Date),
      (Mc = ha.now()),
      (G.unstable_now = function () {
        return ha.now() - Mc;
      }));
  var Fc,
    ha,
    Mc,
    _t = [],
    tn = [],
    ov = 1,
    tt = null,
    ke = 3,
    pl = !1,
    Mn = !1,
    Gr = !1,
    zc = typeof setTimeout == 'function' ? setTimeout : null,
    Ic = typeof clearTimeout == 'function' ? clearTimeout : null,
    Ac = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function ga(e) {
    for (var t = pt(tn); t !== null; ) {
      if (t.callback === null) fl(tn);
      else if (t.startTime <= e) fl(tn), (t.sortIndex = t.expirationTime), ya(_t, t);
      else break;
      t = pt(tn);
    }
  }
  function wa(e) {
    if (((Gr = !1), ga(e), !Mn))
      if (pt(_t) !== null) (Mn = !0), Ea(Ra);
      else {
        var t = pt(tn);
        t !== null && Sa(wa, t.startTime - e);
      }
  }
  function Ra(e, t) {
    (Mn = !1), Gr && ((Gr = !1), Ic(Zr), (Zr = -1)), (pl = !0);
    var n = ke;
    try {
      for (ga(t), tt = pt(_t); tt !== null && (!(tt.expirationTime > t) || (e && !Vc())); ) {
        var r = tt.callback;
        if (typeof r == 'function') {
          (tt.callback = null), (ke = tt.priorityLevel);
          var o = r(tt.expirationTime <= t);
          (t = G.unstable_now()), typeof o == 'function' ? (tt.callback = o) : tt === pt(_t) && fl(_t), ga(t);
        } else fl(_t);
        tt = pt(_t);
      }
      if (tt !== null) var l = !0;
      else {
        var i = pt(tn);
        i !== null && Sa(wa, i.startTime - t), (l = !1);
      }
      return l;
    } finally {
      (tt = null), (ke = n), (pl = !1);
    }
  }
  var hl = !1,
    dl = null,
    Zr = -1,
    jc = 5,
    Hc = -1;
  function Vc() {
    return !(G.unstable_now() - Hc < jc);
  }
  function ma() {
    if (dl !== null) {
      var e = G.unstable_now();
      Hc = e;
      var t = !0;
      try {
        t = dl(!0, e);
      } finally {
        t ? Xr() : ((hl = !1), (dl = null));
      }
    } else hl = !1;
  }
  var Xr;
  typeof Ac == 'function'
    ? (Xr = function () {
        Ac(ma);
      })
    : typeof MessageChannel < 'u'
      ? ((va = new MessageChannel()),
        (Uc = va.port2),
        (va.port1.onmessage = ma),
        (Xr = function () {
          Uc.postMessage(null);
        }))
      : (Xr = function () {
          zc(ma, 0);
        });
  var va, Uc;
  function Ea(e) {
    (dl = e), hl || ((hl = !0), Xr());
  }
  function Sa(e, t) {
    Zr = zc(function () {
      e(G.unstable_now());
    }, t);
  }
  G.unstable_IdlePriority = 5;
  G.unstable_ImmediatePriority = 1;
  G.unstable_LowPriority = 4;
  G.unstable_NormalPriority = 3;
  G.unstable_Profiling = null;
  G.unstable_UserBlockingPriority = 2;
  G.unstable_cancelCallback = function (e) {
    e.callback = null;
  };
  G.unstable_continueExecution = function () {
    Mn || pl || ((Mn = !0), Ea(Ra));
  };
  G.unstable_forceFrameRate = function (e) {
    0 > e || 125 < e
      ? console.error(
          'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
        )
      : (jc = 0 < e ? Math.floor(1e3 / e) : 5);
  };
  G.unstable_getCurrentPriorityLevel = function () {
    return ke;
  };
  G.unstable_getFirstCallbackNode = function () {
    return pt(_t);
  };
  G.unstable_next = function (e) {
    switch (ke) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = ke;
    }
    var n = ke;
    ke = t;
    try {
      return e();
    } finally {
      ke = n;
    }
  };
  G.unstable_pauseExecution = function () {};
  G.unstable_requestPaint = function () {};
  G.unstable_runWithPriority = function (e, t) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var n = ke;
    ke = e;
    try {
      return t();
    } finally {
      ke = n;
    }
  };
  G.unstable_scheduleCallback = function (e, t, n) {
    var r = G.unstable_now();
    switch (
      (typeof n == 'object' && n !== null ? ((n = n.delay), (n = typeof n == 'number' && 0 < n ? r + n : r)) : (n = r),
      e)
    ) {
      case 1:
        var o = -1;
        break;
      case 2:
        o = 250;
        break;
      case 5:
        o = 1073741823;
        break;
      case 4:
        o = 1e4;
        break;
      default:
        o = 5e3;
    }
    return (
      (o = n + o),
      (e = { id: ov++, callback: t, priorityLevel: e, startTime: n, expirationTime: o, sortIndex: -1 }),
      n > r
        ? ((e.sortIndex = n),
          ya(tn, e),
          pt(_t) === null && e === pt(tn) && (Gr ? (Ic(Zr), (Zr = -1)) : (Gr = !0), Sa(wa, n - r)))
        : ((e.sortIndex = o), ya(_t, e), Mn || pl || ((Mn = !0), Ea(Ra))),
      e
    );
  };
  G.unstable_shouldYield = Vc;
  G.unstable_wrapCallback = function (e) {
    var t = ke;
    return function () {
      var n = ke;
      ke = t;
      try {
        return e.apply(this, arguments);
      } finally {
        ke = n;
      }
    };
  };
});
var Wc = qo((p0, $c) => {
  'use strict';
  $c.exports = Bc();
});
var Zp = qo((Ge) => {
  'use strict';
  var Zd = Ft(),
    Je = Wc();
  function N(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
      t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var bd = new Set(),
    Ro = {};
  function Yn(e, t) {
    Cr(e, t), Cr(e + 'Capture', t);
  }
  function Cr(e, t) {
    for (Ro[e] = t, e = 0; e < t.length; e++) bd.add(t[e]);
  }
  var Ht = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    Ka = Object.prototype.hasOwnProperty,
    lv =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Kc = {},
    Qc = {};
  function iv(e) {
    return Ka.call(Qc, e) ? !0 : Ka.call(Kc, e) ? !1 : lv.test(e) ? (Qc[e] = !0) : ((Kc[e] = !0), !1);
  }
  function av(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function uv(e, t, n, r) {
    if (t === null || typeof t > 'u' || av(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function Me(e, t, n, r, o, l, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = l),
      (this.removeEmptyString = i);
  }
  var _e = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      _e[e] = new Me(e, 0, !1, e, null, !1, !1);
    });
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (e) {
    var t = e[0];
    _e[t] = new Me(t, 1, !1, e[1], null, !1, !1);
  });
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    _e[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
    _e[e] = new Me(e, 2, !1, e, null, !1, !1);
  });
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      _e[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    _e[e] = new Me(e, 3, !0, e, null, !1, !1);
  });
  ['capture', 'download'].forEach(function (e) {
    _e[e] = new Me(e, 4, !1, e, null, !1, !1);
  });
  ['cols', 'rows', 'size', 'span'].forEach(function (e) {
    _e[e] = new Me(e, 6, !1, e, null, !1, !1);
  });
  ['rowSpan', 'start'].forEach(function (e) {
    _e[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var zu = /[\-:]([a-z])/g;
  function Iu(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(zu, Iu);
      _e[t] = new Me(t, 1, !1, e, null, !1, !1);
    });
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
    var t = e.replace(zu, Iu);
    _e[t] = new Me(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(zu, Iu);
    _e[t] = new Me(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
  });
  ['tabIndex', 'crossOrigin'].forEach(function (e) {
    _e[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  _e.xlinkHref = new Me('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
  ['src', 'href', 'action', 'formAction'].forEach(function (e) {
    _e[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ju(e, t, n, r) {
    var o = _e.hasOwnProperty(t) ? _e[t] : null;
    (o !== null
      ? o.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (uv(t, n, o, r) && (n = null),
      r || o === null
        ? iv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : o.mustUseProperty
          ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
          : ((t = o.attributeName),
            (r = o.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((o = o.type),
                (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Wt = Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ml = Symbol.for('react.element'),
    ur = Symbol.for('react.portal'),
    sr = Symbol.for('react.fragment'),
    Hu = Symbol.for('react.strict_mode'),
    Qa = Symbol.for('react.profiler'),
    qd = Symbol.for('react.provider'),
    ef = Symbol.for('react.context'),
    Vu = Symbol.for('react.forward_ref'),
    Ya = Symbol.for('react.suspense'),
    Ja = Symbol.for('react.suspense_list'),
    Bu = Symbol.for('react.memo'),
    rn = Symbol.for('react.lazy');
  Symbol.for('react.scope');
  Symbol.for('react.debug_trace_mode');
  var tf = Symbol.for('react.offscreen');
  Symbol.for('react.legacy_hidden');
  Symbol.for('react.cache');
  Symbol.for('react.tracing_marker');
  var Yc = Symbol.iterator;
  function br(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Yc && e[Yc]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var ie = Object.assign,
    xa;
  function io(e) {
    if (xa === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        xa = (t && t[1]) || '';
      }
    return (
      `
` +
      xa +
      e
    );
  }
  var _a = !1;
  function ka(e, t) {
    if (!e || _a) return '';
    _a = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (s) {
            var r = s;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (s) {
            r = s;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (s) {
          r = s;
        }
        e();
      }
    } catch (s) {
      if (s && r && typeof s.stack == 'string') {
        for (
          var o = s.stack.split(`
`),
            l = r.stack.split(`
`),
            i = o.length - 1,
            a = l.length - 1;
          1 <= i && 0 <= a && o[i] !== l[a];

        )
          a--;
        for (; 1 <= i && 0 <= a; i--, a--)
          if (o[i] !== l[a]) {
            if (i !== 1 || a !== 1)
              do
                if ((i--, a--, 0 > a || o[i] !== l[a])) {
                  var u =
                    `
` + o[i].replace(' at new ', ' at ');
                  return e.displayName && u.includes('<anonymous>') && (u = u.replace('<anonymous>', e.displayName)), u;
                }
              while (1 <= i && 0 <= a);
            break;
          }
      }
    } finally {
      (_a = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? io(e) : '';
  }
  function sv(e) {
    switch (e.tag) {
      case 5:
        return io(e.type);
      case 16:
        return io('Lazy');
      case 13:
        return io('Suspense');
      case 19:
        return io('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = ka(e.type, !1)), e;
      case 11:
        return (e = ka(e.type.render, !1)), e;
      case 1:
        return (e = ka(e.type, !0)), e;
      default:
        return '';
    }
  }
  function Xa(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case sr:
        return 'Fragment';
      case ur:
        return 'Portal';
      case Qa:
        return 'Profiler';
      case Hu:
        return 'StrictMode';
      case Ya:
        return 'Suspense';
      case Ja:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case ef:
          return (e.displayName || 'Context') + '.Consumer';
        case qd:
          return (e._context.displayName || 'Context') + '.Provider';
        case Vu:
          var t = e.render;
          return (
            (e = e.displayName),
            e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Bu:
          return (t = e.displayName || null), t !== null ? t : Xa(e.type) || 'Memo';
        case rn:
          (t = e._payload), (e = e._init);
          try {
            return Xa(e(t));
          } catch {}
      }
    return null;
  }
  function cv(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return Xa(t);
      case 8:
        return t === Hu ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function gn(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function nf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function dv(e) {
    var t = nf(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t];
    if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
      var o = n.get,
        l = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (i) {
            (r = '' + i), l.call(this, i);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = '' + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function vl(e) {
    e._valueTracker || (e._valueTracker = dv(e));
  }
  function rf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return e && (r = nf(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
  }
  function Wl(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ga(e, t) {
    var n = t.checked;
    return ie({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Jc(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = gn(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      });
  }
  function of(e, t) {
    (t = t.checked), t != null && ju(e, 'checked', t, !1);
  }
  function Za(e, t) {
    of(e, t);
    var n = gn(t.value),
      r = t.type;
    if (n != null)
      r === 'number'
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? ba(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && ba(e, t.type, gn(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Xc(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type;
      if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
      (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name),
      n !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== '' && (e.name = n);
  }
  function ba(e, t, n) {
    (t !== 'number' || Wl(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var ao = Array.isArray;
  function Rr(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        (o = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = '' + gn(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          (e[o].selected = !0), r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function qa(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
    return ie({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
  }
  function Gc(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(N(92));
        if (ao(n)) {
          if (1 < n.length) throw Error(N(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: gn(n) };
  }
  function lf(e, t) {
    var n = gn(t.value),
      r = gn(t.defaultValue);
    n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r);
  }
  function Zc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function af(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function eu(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? af(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var yl,
    uf = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, o);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          yl = yl || document.createElement('div'),
            yl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = yl.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Eo(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var co = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    fv = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(co).forEach(function (e) {
    fv.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (co[t] = co[e]);
    });
  });
  function sf(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (co.hasOwnProperty(e) && co[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function cf(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          o = sf(n, t[n], r);
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
      }
  }
  var pv = ie(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function tu(e, t) {
    if (t) {
      if (pv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(N(60));
        if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
          throw Error(N(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(N(62));
    }
  }
  function nu(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var ru = null;
  function $u(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ou = null,
    Er = null,
    Sr = null;
  function bc(e) {
    if ((e = jo(e))) {
      if (typeof ou != 'function') throw Error(N(280));
      var t = e.stateNode;
      t && ((t = gi(t)), ou(e.stateNode, e.type, t));
    }
  }
  function df(e) {
    Er ? (Sr ? Sr.push(e) : (Sr = [e])) : (Er = e);
  }
  function ff() {
    if (Er) {
      var e = Er,
        t = Sr;
      if (((Sr = Er = null), bc(e), t)) for (e = 0; e < t.length; e++) bc(t[e]);
    }
  }
  function pf(e, t) {
    return e(t);
  }
  function hf() {}
  var Ca = !1;
  function mf(e, t, n) {
    if (Ca) return e(t, n);
    Ca = !0;
    try {
      return pf(e, t, n);
    } finally {
      (Ca = !1), (Er !== null || Sr !== null) && (hf(), ff());
    }
  }
  function So(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = gi(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (r = !r.disabled) ||
          ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(N(231, t, typeof n));
    return n;
  }
  var lu = !1;
  if (Ht)
    try {
      (ir = {}),
        Object.defineProperty(ir, 'passive', {
          get: function () {
            lu = !0;
          },
        }),
        window.addEventListener('test', ir, ir),
        window.removeEventListener('test', ir, ir);
    } catch {
      lu = !1;
    }
  var ir;
  function hv(e, t, n, r, o, l, i, a, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, s);
    } catch (c) {
      this.onError(c);
    }
  }
  var fo = !1,
    Kl = null,
    Ql = !1,
    iu = null,
    mv = {
      onError: function (e) {
        (fo = !0), (Kl = e);
      },
    };
  function vv(e, t, n, r, o, l, i, a, u) {
    (fo = !1), (Kl = null), hv.apply(mv, arguments);
  }
  function yv(e, t, n, r, o, l, i, a, u) {
    if ((vv.apply(this, arguments), fo)) {
      if (fo) {
        var s = Kl;
        (fo = !1), (Kl = null);
      } else throw Error(N(198));
      Ql || ((Ql = !0), (iu = s));
    }
  }
  function Jn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function vf(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function qc(e) {
    if (Jn(e) !== e) throw Error(N(188));
  }
  function gv(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Jn(e)), t === null)) throw Error(N(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var l = o.alternate;
      if (l === null) {
        if (((r = o.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === l.child) {
        for (l = o.child; l; ) {
          if (l === n) return qc(o), e;
          if (l === r) return qc(o), t;
          l = l.sibling;
        }
        throw Error(N(188));
      }
      if (n.return !== r.return) (n = o), (r = l);
      else {
        for (var i = !1, a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) {
          for (a = l.child; a; ) {
            if (a === n) {
              (i = !0), (n = l), (r = o);
              break;
            }
            if (a === r) {
              (i = !0), (r = l), (n = o);
              break;
            }
            a = a.sibling;
          }
          if (!i) throw Error(N(189));
        }
      }
      if (n.alternate !== r) throw Error(N(190));
    }
    if (n.tag !== 3) throw Error(N(188));
    return n.stateNode.current === n ? e : t;
  }
  function yf(e) {
    return (e = gv(e)), e !== null ? gf(e) : null;
  }
  function gf(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = gf(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var wf = Je.unstable_scheduleCallback,
    ed = Je.unstable_cancelCallback,
    wv = Je.unstable_shouldYield,
    Rv = Je.unstable_requestPaint,
    se = Je.unstable_now,
    Ev = Je.unstable_getCurrentPriorityLevel,
    Wu = Je.unstable_ImmediatePriority,
    Rf = Je.unstable_UserBlockingPriority,
    Yl = Je.unstable_NormalPriority,
    Sv = Je.unstable_LowPriority,
    Ef = Je.unstable_IdlePriority,
    hi = null,
    Pt = null;
  function xv(e) {
    if (Pt && typeof Pt.onCommitFiberRoot == 'function')
      try {
        Pt.onCommitFiberRoot(hi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var gt = Math.clz32 ? Math.clz32 : Cv,
    _v = Math.log,
    kv = Math.LN2;
  function Cv(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((_v(e) / kv) | 0)) | 0;
  }
  var gl = 64,
    wl = 4194304;
  function uo(e) {
    switch (e & -e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Jl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      l = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var a = i & ~o;
      a !== 0 ? (r = uo(a)) : ((l &= i), l !== 0 && (r = uo(l)));
    } else (i = n & ~o), i !== 0 ? (r = uo(i)) : l !== 0 && (r = uo(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0)))
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - gt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
  }
  function Nv(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
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
        return t + 5e3;
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
  function Pv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
      var i = 31 - gt(l),
        a = 1 << i,
        u = o[i];
      u === -1 ? (!(a & n) || a & r) && (o[i] = Nv(a, t)) : u <= t && (e.expiredLanes |= a), (l &= ~a);
    }
  }
  function au(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Sf() {
    var e = gl;
    return (gl <<= 1), !(gl & 4194240) && (gl = 64), e;
  }
  function Na(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function zo(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - gt(t)),
      (e[t] = n);
  }
  function Lv(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - gt(n),
        l = 1 << o;
      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
    }
  }
  function Ku(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - gt(n),
        o = 1 << r;
      (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
  }
  var Y = 0;
  function xf(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
  }
  var _f,
    Qu,
    kf,
    Cf,
    Nf,
    uu = !1,
    Rl = [],
    cn = null,
    dn = null,
    fn = null,
    xo = new Map(),
    _o = new Map(),
    ln = [],
    Dv =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function td(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        cn = null;
        break;
      case 'dragenter':
      case 'dragleave':
        dn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        fn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        xo.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        _o.delete(t.pointerId);
    }
  }
  function qr(e, t, n, r, o, l) {
    return e === null || e.nativeEvent !== l
      ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }),
        t !== null && ((t = jo(t)), t !== null && Qu(t)),
        e)
      : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Tv(e, t, n, r, o) {
    switch (t) {
      case 'focusin':
        return (cn = qr(cn, e, t, n, r, o)), !0;
      case 'dragenter':
        return (dn = qr(dn, e, t, n, r, o)), !0;
      case 'mouseover':
        return (fn = qr(fn, e, t, n, r, o)), !0;
      case 'pointerover':
        var l = o.pointerId;
        return xo.set(l, qr(xo.get(l) || null, e, t, n, r, o)), !0;
      case 'gotpointercapture':
        return (l = o.pointerId), _o.set(l, qr(_o.get(l) || null, e, t, n, r, o)), !0;
    }
    return !1;
  }
  function Pf(e) {
    var t = zn(e.target);
    if (t !== null) {
      var n = Jn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = vf(n)), t !== null)) {
            (e.blockedOn = t),
              Nf(e.priority, function () {
                kf(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ml(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = su(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (ru = r), n.target.dispatchEvent(r), (ru = null);
      } else return (t = jo(n)), t !== null && Qu(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function nd(e, t, n) {
    Ml(e) && n.delete(t);
  }
  function Ov() {
    (uu = !1),
      cn !== null && Ml(cn) && (cn = null),
      dn !== null && Ml(dn) && (dn = null),
      fn !== null && Ml(fn) && (fn = null),
      xo.forEach(nd),
      _o.forEach(nd);
  }
  function eo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null), uu || ((uu = !0), Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Ov)));
  }
  function ko(e) {
    function t(o) {
      return eo(o, e);
    }
    if (0 < Rl.length) {
      eo(Rl[0], e);
      for (var n = 1; n < Rl.length; n++) {
        var r = Rl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      cn !== null && eo(cn, e), dn !== null && eo(dn, e), fn !== null && eo(fn, e), xo.forEach(t), _o.forEach(t), n = 0;
      n < ln.length;
      n++
    )
      (r = ln[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ln.length && ((n = ln[0]), n.blockedOn === null); ) Pf(n), n.blockedOn === null && ln.shift();
  }
  var xr = Wt.ReactCurrentBatchConfig,
    Xl = !0;
  function Fv(e, t, n, r) {
    var o = Y,
      l = xr.transition;
    xr.transition = null;
    try {
      (Y = 1), Yu(e, t, n, r);
    } finally {
      (Y = o), (xr.transition = l);
    }
  }
  function Mv(e, t, n, r) {
    var o = Y,
      l = xr.transition;
    xr.transition = null;
    try {
      (Y = 4), Yu(e, t, n, r);
    } finally {
      (Y = o), (xr.transition = l);
    }
  }
  function Yu(e, t, n, r) {
    if (Xl) {
      var o = su(e, t, n, r);
      if (o === null) Ma(e, t, r, Gl, n), td(e, r);
      else if (Tv(o, e, t, n, r)) r.stopPropagation();
      else if ((td(e, r), t & 4 && -1 < Dv.indexOf(e))) {
        for (; o !== null; ) {
          var l = jo(o);
          if ((l !== null && _f(l), (l = su(e, t, n, r)), l === null && Ma(e, t, r, Gl, n), l === o)) break;
          o = l;
        }
        o !== null && r.stopPropagation();
      } else Ma(e, t, r, null, n);
    }
  }
  var Gl = null;
  function su(e, t, n, r) {
    if (((Gl = null), (e = $u(r)), (e = zn(e)), e !== null))
      if (((t = Jn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = vf(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Gl = e), null;
  }
  function Lf(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (Ev()) {
          case Wu:
            return 1;
          case Rf:
            return 4;
          case Yl:
          case Sv:
            return 16;
          case Ef:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var un = null,
    Ju = null,
    Al = null;
  function Df() {
    if (Al) return Al;
    var e,
      t = Ju,
      n = t.length,
      r,
      o = 'value' in un ? un.value : un.textContent,
      l = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
    return (Al = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ul(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function El() {
    return !0;
  }
  function rd() {
    return !1;
  }
  function Xe(e) {
    function t(n, r, o, l, i) {
      (this._reactName = n),
        (this._targetInst = o),
        (this.type = r),
        (this.nativeEvent = l),
        (this.target = i),
        (this.currentTarget = null);
      for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
      return (
        (this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? El : rd),
        (this.isPropagationStopped = rd),
        this
      );
    }
    return (
      ie(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = El));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = El));
        },
        persist: function () {},
        isPersistent: El,
      }),
      t
    );
  }
  var Fr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Xu = Xe(Fr),
    Io = ie({}, Fr, { view: 0, detail: 0 }),
    Av = Xe(Io),
    Pa,
    La,
    to,
    mi = ie({}, Io, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Gu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== to &&
              (to && e.type === 'mousemove'
                ? ((Pa = e.screenX - to.screenX), (La = e.screenY - to.screenY))
                : (La = Pa = 0),
              (to = e)),
            Pa);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : La;
      },
    }),
    od = Xe(mi),
    Uv = ie({}, mi, { dataTransfer: 0 }),
    zv = Xe(Uv),
    Iv = ie({}, Io, { relatedTarget: 0 }),
    Da = Xe(Iv),
    jv = ie({}, Fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hv = Xe(jv),
    Vv = ie({}, Fr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Bv = Xe(Vv),
    $v = ie({}, Fr, { data: 0 }),
    ld = Xe($v),
    Wv = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Kv = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Qv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Yv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Qv[e]) ? !!t[e] : !1;
  }
  function Gu() {
    return Yv;
  }
  var Jv = ie({}, Io, {
      key: function (e) {
        if (e.key) {
          var t = Wv[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Ul(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Kv[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Gu,
      charCode: function (e) {
        return e.type === 'keypress' ? Ul(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress' ? Ul(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
    }),
    Xv = Xe(Jv),
    Gv = ie({}, mi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    id = Xe(Gv),
    Zv = ie({}, Io, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gu,
    }),
    bv = Xe(Zv),
    qv = ie({}, Fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ey = Xe(qv),
    ty = ie({}, mi, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    ny = Xe(ty),
    ry = [9, 13, 27, 32],
    Zu = Ht && 'CompositionEvent' in window,
    po = null;
  Ht && 'documentMode' in document && (po = document.documentMode);
  var oy = Ht && 'TextEvent' in window && !po,
    Tf = Ht && (!Zu || (po && 8 < po && 11 >= po)),
    ad = String.fromCharCode(32),
    ud = !1;
  function Of(e, t) {
    switch (e) {
      case 'keyup':
        return ry.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Ff(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var cr = !1;
  function ly(e, t) {
    switch (e) {
      case 'compositionend':
        return Ff(t);
      case 'keypress':
        return t.which !== 32 ? null : ((ud = !0), ad);
      case 'textInput':
        return (e = t.data), e === ad && ud ? null : e;
      default:
        return null;
    }
  }
  function iy(e, t) {
    if (cr)
      return e === 'compositionend' || (!Zu && Of(e, t)) ? ((e = Df()), (Al = Ju = un = null), (cr = !1), e) : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Tf && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var ay = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function sd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!ay[e.type] : t === 'textarea';
  }
  function Mf(e, t, n, r) {
    df(r),
      (t = Zl(t, 'onChange')),
      0 < t.length && ((n = new Xu('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
  }
  var ho = null,
    Co = null;
  function uy(e) {
    Kf(e, 0);
  }
  function vi(e) {
    var t = pr(e);
    if (rf(t)) return e;
  }
  function sy(e, t) {
    if (e === 'change') return t;
  }
  var Af = !1;
  Ht &&
    (Ht
      ? ((xl = 'oninput' in document),
        xl ||
          ((Ta = document.createElement('div')),
          Ta.setAttribute('oninput', 'return;'),
          (xl = typeof Ta.oninput == 'function')),
        (Sl = xl))
      : (Sl = !1),
    (Af = Sl && (!document.documentMode || 9 < document.documentMode)));
  var Sl, xl, Ta;
  function cd() {
    ho && (ho.detachEvent('onpropertychange', Uf), (Co = ho = null));
  }
  function Uf(e) {
    if (e.propertyName === 'value' && vi(Co)) {
      var t = [];
      Mf(t, Co, e, $u(e)), mf(uy, t);
    }
  }
  function cy(e, t, n) {
    e === 'focusin' ? (cd(), (ho = t), (Co = n), ho.attachEvent('onpropertychange', Uf)) : e === 'focusout' && cd();
  }
  function dy(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return vi(Co);
  }
  function fy(e, t) {
    if (e === 'click') return vi(t);
  }
  function py(e, t) {
    if (e === 'input' || e === 'change') return vi(t);
  }
  function hy(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Rt = typeof Object.is == 'function' ? Object.is : hy;
  function No(e, t) {
    if (Rt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!Ka.call(t, o) || !Rt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function dd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function fd(e, t) {
    var n = dd(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = dd(n);
    }
  }
  function zf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? zf(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function If() {
    for (var e = window, t = Wl(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Wl(e.document);
    }
    return t;
  }
  function bu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function my(e) {
    var t = If(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && zf(n.ownerDocument.documentElement, n)) {
      if (r !== null && bu(n)) {
        if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
          (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
        else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
          e = e.getSelection();
          var o = n.textContent.length,
            l = Math.min(r.start, o);
          (r = r.end === void 0 ? l : Math.min(r.end, o)),
            !e.extend && l > r && ((o = r), (r = l), (l = o)),
            (o = fd(n, l));
          var i = fd(n, r);
          o &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== o.node ||
              e.anchorOffset !== o.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(o.node, o.offset),
            e.removeAllRanges(),
            l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var vy = Ht && 'documentMode' in document && 11 >= document.documentMode,
    dr = null,
    cu = null,
    mo = null,
    du = !1;
  function pd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    du ||
      dr == null ||
      dr !== Wl(r) ||
      ((r = dr),
      'selectionStart' in r && bu(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (mo && No(mo, r)) ||
        ((mo = r),
        (r = Zl(cu, 'onSelect')),
        0 < r.length &&
          ((t = new Xu('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = dr))));
  }
  function _l(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
  }
  var fr = {
      animationend: _l('Animation', 'AnimationEnd'),
      animationiteration: _l('Animation', 'AnimationIteration'),
      animationstart: _l('Animation', 'AnimationStart'),
      transitionend: _l('Transition', 'TransitionEnd'),
    },
    Oa = {},
    jf = {};
  Ht &&
    ((jf = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete fr.animationend.animation, delete fr.animationiteration.animation, delete fr.animationstart.animation),
    'TransitionEvent' in window || delete fr.transitionend.transition);
  function yi(e) {
    if (Oa[e]) return Oa[e];
    if (!fr[e]) return e;
    var t = fr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in jf) return (Oa[e] = t[n]);
    return e;
  }
  var Hf = yi('animationend'),
    Vf = yi('animationiteration'),
    Bf = yi('animationstart'),
    $f = yi('transitionend'),
    Wf = new Map(),
    hd =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function Rn(e, t) {
    Wf.set(e, t), Yn(t, [e]);
  }
  for (kl = 0; kl < hd.length; kl++)
    (Cl = hd[kl]), (md = Cl.toLowerCase()), (vd = Cl[0].toUpperCase() + Cl.slice(1)), Rn(md, 'on' + vd);
  var Cl, md, vd, kl;
  Rn(Hf, 'onAnimationEnd');
  Rn(Vf, 'onAnimationIteration');
  Rn(Bf, 'onAnimationStart');
  Rn('dblclick', 'onDoubleClick');
  Rn('focusin', 'onFocus');
  Rn('focusout', 'onBlur');
  Rn($f, 'onTransitionEnd');
  Cr('onMouseEnter', ['mouseout', 'mouseover']);
  Cr('onMouseLeave', ['mouseout', 'mouseover']);
  Cr('onPointerEnter', ['pointerout', 'pointerover']);
  Cr('onPointerLeave', ['pointerout', 'pointerover']);
  Yn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
  Yn('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
  Yn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
  Yn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
  Yn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
  Yn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
  var so =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    yy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(so));
  function yd(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), yv(r, t, void 0, e), (e.currentTarget = null);
  }
  function Kf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var a = r[i],
              u = a.instance,
              s = a.currentTarget;
            if (((a = a.listener), u !== l && o.isPropagationStopped())) break e;
            yd(o, a, s), (l = u);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((a = r[i]),
              (u = a.instance),
              (s = a.currentTarget),
              (a = a.listener),
              u !== l && o.isPropagationStopped())
            )
              break e;
            yd(o, a, s), (l = u);
          }
      }
    }
    if (Ql) throw ((e = iu), (Ql = !1), (iu = null), e);
  }
  function q(e, t) {
    var n = t[vu];
    n === void 0 && (n = t[vu] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Qf(t, e, 2, !1), n.add(r));
  }
  function Fa(e, t, n) {
    var r = 0;
    t && (r |= 4), Qf(n, e, r, t);
  }
  var Nl = '_reactListening' + Math.random().toString(36).slice(2);
  function Po(e) {
    if (!e[Nl]) {
      (e[Nl] = !0),
        bd.forEach(function (n) {
          n !== 'selectionchange' && (yy.has(n) || Fa(n, !1, e), Fa(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Nl] || ((t[Nl] = !0), Fa('selectionchange', !1, t));
    }
  }
  function Qf(e, t, n, r) {
    switch (Lf(t)) {
      case 1:
        var o = Fv;
        break;
      case 4:
        o = Mv;
        break;
      default:
        o = Yu;
    }
    (n = o.bind(null, t, n, e)),
      (o = void 0),
      !lu || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
      r
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
          ? e.addEventListener(t, n, { passive: o })
          : e.addEventListener(t, n, !1);
  }
  function Ma(e, t, n, r, o) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var a = r.stateNode.containerInfo;
          if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var u = i.tag;
              if (
                (u === 3 || u === 4) &&
                ((u = i.stateNode.containerInfo), u === o || (u.nodeType === 8 && u.parentNode === o))
              )
                return;
              i = i.return;
            }
          for (; a !== null; ) {
            if (((i = zn(a)), i === null)) return;
            if (((u = i.tag), u === 5 || u === 6)) {
              r = l = i;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
    mf(function () {
      var s = l,
        c = $u(n),
        f = [];
      e: {
        var h = Wf.get(e);
        if (h !== void 0) {
          var g = Xu,
            R = e;
          switch (e) {
            case 'keypress':
              if (Ul(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              g = Xv;
              break;
            case 'focusin':
              (R = 'focus'), (g = Da);
              break;
            case 'focusout':
              (R = 'blur'), (g = Da);
              break;
            case 'beforeblur':
            case 'afterblur':
              g = Da;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              g = od;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              g = zv;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              g = bv;
              break;
            case Hf:
            case Vf:
            case Bf:
              g = Hv;
              break;
            case $f:
              g = ey;
              break;
            case 'scroll':
              g = Av;
              break;
            case 'wheel':
              g = ny;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              g = Bv;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              g = id;
          }
          var E = (t & 4) !== 0,
            x = !E && e === 'scroll',
            p = E ? (h !== null ? h + 'Capture' : null) : h;
          E = [];
          for (var d = s, m; d !== null; ) {
            m = d;
            var S = m.stateNode;
            if (
              (m.tag === 5 && S !== null && ((m = S), p !== null && ((S = So(d, p)), S != null && E.push(Lo(d, S, m)))),
              x)
            )
              break;
            d = d.return;
          }
          0 < E.length && ((h = new g(h, R, null, n, c)), f.push({ event: h, listeners: E }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((h = e === 'mouseover' || e === 'pointerover'),
            (g = e === 'mouseout' || e === 'pointerout'),
            h && n !== ru && (R = n.relatedTarget || n.fromElement) && (zn(R) || R[Vt]))
          )
            break e;
          if (
            (g || h) &&
            ((h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window),
            g
              ? ((R = n.relatedTarget || n.toElement),
                (g = s),
                (R = R ? zn(R) : null),
                R !== null && ((x = Jn(R)), R !== x || (R.tag !== 5 && R.tag !== 6)) && (R = null))
              : ((g = null), (R = s)),
            g !== R)
          ) {
            if (
              ((E = od),
              (S = 'onMouseLeave'),
              (p = 'onMouseEnter'),
              (d = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((E = id), (S = 'onPointerLeave'), (p = 'onPointerEnter'), (d = 'pointer')),
              (x = g == null ? h : pr(g)),
              (m = R == null ? h : pr(R)),
              (h = new E(S, d + 'leave', g, n, c)),
              (h.target = x),
              (h.relatedTarget = m),
              (S = null),
              zn(c) === s && ((E = new E(p, d + 'enter', R, n, c)), (E.target = m), (E.relatedTarget = x), (S = E)),
              (x = S),
              g && R)
            )
              t: {
                for (E = g, p = R, d = 0, m = E; m; m = ar(m)) d++;
                for (m = 0, S = p; S; S = ar(S)) m++;
                for (; 0 < d - m; ) (E = ar(E)), d--;
                for (; 0 < m - d; ) (p = ar(p)), m--;
                for (; d--; ) {
                  if (E === p || (p !== null && E === p.alternate)) break t;
                  (E = ar(E)), (p = ar(p));
                }
                E = null;
              }
            else E = null;
            g !== null && gd(f, h, g, E, !1), R !== null && x !== null && gd(f, x, R, E, !0);
          }
        }
        e: {
          if (
            ((h = s ? pr(s) : window),
            (g = h.nodeName && h.nodeName.toLowerCase()),
            g === 'select' || (g === 'input' && h.type === 'file'))
          )
            var k = sy;
          else if (sd(h))
            if (Af) k = py;
            else {
              k = dy;
              var v = cy;
            }
          else
            (g = h.nodeName) &&
              g.toLowerCase() === 'input' &&
              (h.type === 'checkbox' || h.type === 'radio') &&
              (k = fy);
          if (k && (k = k(e, s))) {
            Mf(f, k, n, c);
            break e;
          }
          v && v(e, h, s),
            e === 'focusout' &&
              (v = h._wrapperState) &&
              v.controlled &&
              h.type === 'number' &&
              ba(h, 'number', h.value);
        }
        switch (((v = s ? pr(s) : window), e)) {
          case 'focusin':
            (sd(v) || v.contentEditable === 'true') && ((dr = v), (cu = s), (mo = null));
            break;
          case 'focusout':
            mo = cu = dr = null;
            break;
          case 'mousedown':
            du = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (du = !1), pd(f, n, c);
            break;
          case 'selectionchange':
            if (vy) break;
          case 'keydown':
          case 'keyup':
            pd(f, n, c);
        }
        var _;
        if (Zu)
          e: {
            switch (e) {
              case 'compositionstart':
                var P = 'onCompositionStart';
                break e;
              case 'compositionend':
                P = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                P = 'onCompositionUpdate';
                break e;
            }
            P = void 0;
          }
        else
          cr
            ? Of(e, n) && (P = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
        P &&
          (Tf &&
            n.locale !== 'ko' &&
            (cr || P !== 'onCompositionStart'
              ? P === 'onCompositionEnd' && cr && (_ = Df())
              : ((un = c), (Ju = 'value' in un ? un.value : un.textContent), (cr = !0))),
          (v = Zl(s, P)),
          0 < v.length &&
            ((P = new ld(P, e, null, n, c)),
            f.push({ event: P, listeners: v }),
            _ ? (P.data = _) : ((_ = Ff(n)), _ !== null && (P.data = _)))),
          (_ = oy ? ly(e, n) : iy(e, n)) &&
            ((s = Zl(s, 'onBeforeInput')),
            0 < s.length &&
              ((c = new ld('onBeforeInput', 'beforeinput', null, n, c)),
              f.push({ event: c, listeners: s }),
              (c.data = _)));
      }
      Kf(f, t);
    });
  }
  function Lo(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Zl(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var o = e,
        l = o.stateNode;
      o.tag === 5 &&
        l !== null &&
        ((o = l),
        (l = So(e, n)),
        l != null && r.unshift(Lo(e, l, o)),
        (l = So(e, t)),
        l != null && r.push(Lo(e, l, o))),
        (e = e.return);
    }
    return r;
  }
  function ar(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function gd(e, t, n, r, o) {
    for (var l = t._reactName, i = []; n !== null && n !== r; ) {
      var a = n,
        u = a.alternate,
        s = a.stateNode;
      if (u !== null && u === r) break;
      a.tag === 5 &&
        s !== null &&
        ((a = s),
        o
          ? ((u = So(n, l)), u != null && i.unshift(Lo(n, u, a)))
          : o || ((u = So(n, l)), u != null && i.push(Lo(n, u, a)))),
        (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var gy = /\r\n?/g,
    wy = /\u0000|\uFFFD/g;
  function wd(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        gy,
        `
`,
      )
      .replace(wy, '');
  }
  function Pl(e, t, n) {
    if (((t = wd(t)), wd(e) !== t && n)) throw Error(N(425));
  }
  function bl() {}
  var fu = null,
    pu = null;
  function hu(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var mu = typeof setTimeout == 'function' ? setTimeout : void 0,
    Ry = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Rd = typeof Promise == 'function' ? Promise : void 0,
    Ey =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Rd < 'u'
          ? function (e) {
              return Rd.resolve(null).then(e).catch(Sy);
            }
          : mu;
  function Sy(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Aa(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === '/$')) {
          if (r === 0) {
            e.removeChild(o), ko(t);
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = o;
    } while (n);
    ko(t);
  }
  function pn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function Ed(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Mr = Math.random().toString(36).slice(2),
    Nt = '__reactFiber$' + Mr,
    Do = '__reactProps$' + Mr,
    Vt = '__reactContainer$' + Mr,
    vu = '__reactEvents$' + Mr,
    xy = '__reactListeners$' + Mr,
    _y = '__reactHandles$' + Mr;
  function zn(e) {
    var t = e[Nt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Vt] || n[Nt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Ed(e); e !== null; ) {
            if ((n = e[Nt])) return n;
            e = Ed(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function jo(e) {
    return (e = e[Nt] || e[Vt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
  }
  function pr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(N(33));
  }
  function gi(e) {
    return e[Do] || null;
  }
  var yu = [],
    hr = -1;
  function En(e) {
    return { current: e };
  }
  function ee(e) {
    0 > hr || ((e.current = yu[hr]), (yu[hr] = null), hr--);
  }
  function Z(e, t) {
    hr++, (yu[hr] = e.current), (e.current = t);
  }
  var wn = {},
    Le = En(wn),
    je = En(!1),
    Bn = wn;
  function Nr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return wn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
      l;
    for (l in n) o[l] = t[l];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
    );
  }
  function He(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ql() {
    ee(je), ee(Le);
  }
  function Sd(e, t, n) {
    if (Le.current !== wn) throw Error(N(168));
    Z(Le, t), Z(je, n);
  }
  function Yf(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(N(108, cv(e) || 'Unknown', o));
    return ie({}, n, r);
  }
  function ei(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wn),
      (Bn = Le.current),
      Z(Le, e),
      Z(je, je.current),
      !0
    );
  }
  function xd(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(N(169));
    n ? ((e = Yf(e, t, Bn)), (r.__reactInternalMemoizedMergedChildContext = e), ee(je), ee(Le), Z(Le, e)) : ee(je),
      Z(je, n);
  }
  var Ut = null,
    wi = !1,
    Ua = !1;
  function Jf(e) {
    Ut === null ? (Ut = [e]) : Ut.push(e);
  }
  function ky(e) {
    (wi = !0), Jf(e);
  }
  function Sn() {
    if (!Ua && Ut !== null) {
      Ua = !0;
      var e = 0,
        t = Y;
      try {
        var n = Ut;
        for (Y = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Ut = null), (wi = !1);
      } catch (o) {
        throw (Ut !== null && (Ut = Ut.slice(e + 1)), wf(Wu, Sn), o);
      } finally {
        (Y = t), (Ua = !1);
      }
    }
    return null;
  }
  var mr = [],
    vr = 0,
    ti = null,
    ni = 0,
    nt = [],
    rt = 0,
    $n = null,
    zt = 1,
    It = '';
  function An(e, t) {
    (mr[vr++] = ni), (mr[vr++] = ti), (ti = e), (ni = t);
  }
  function Xf(e, t, n) {
    (nt[rt++] = zt), (nt[rt++] = It), (nt[rt++] = $n), ($n = e);
    var r = zt;
    e = It;
    var o = 32 - gt(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var l = 32 - gt(t) + o;
    if (30 < l) {
      var i = o - (o % 5);
      (l = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (o -= i),
        (zt = (1 << (32 - gt(t) + o)) | (n << o) | r),
        (It = l + e);
    } else (zt = (1 << l) | (n << o) | r), (It = e);
  }
  function qu(e) {
    e.return !== null && (An(e, 1), Xf(e, 1, 0));
  }
  function es(e) {
    for (; e === ti; ) (ti = mr[--vr]), (mr[vr] = null), (ni = mr[--vr]), (mr[vr] = null);
    for (; e === $n; )
      ($n = nt[--rt]), (nt[rt] = null), (It = nt[--rt]), (nt[rt] = null), (zt = nt[--rt]), (nt[rt] = null);
  }
  var Ye = null,
    Qe = null,
    te = !1,
    yt = null;
  function Gf(e, t) {
    var n = ot(5, null, null, 0);
    (n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function _d(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Ye = e), (Qe = pn(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ye = e), (Qe = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = $n !== null ? { id: zt, overflow: It } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = ot(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ye = e),
              (Qe = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function gu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function wu(e) {
    if (te) {
      var t = Qe;
      if (t) {
        var n = t;
        if (!_d(e, t)) {
          if (gu(e)) throw Error(N(418));
          t = pn(n.nextSibling);
          var r = Ye;
          t && _d(e, t) ? Gf(r, n) : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ye = e));
        }
      } else {
        if (gu(e)) throw Error(N(418));
        (e.flags = (e.flags & -4097) | 2), (te = !1), (Ye = e);
      }
    }
  }
  function kd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ye = e;
  }
  function Ll(e) {
    if (e !== Ye) return !1;
    if (!te) return kd(e), (te = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !hu(e.type, e.memoizedProps))),
      t && (t = Qe))
    ) {
      if (gu(e)) throw (Zf(), Error(N(418)));
      for (; t; ) Gf(e, t), (t = pn(t.nextSibling));
    }
    if ((kd(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(N(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                Qe = pn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        Qe = null;
      }
    } else Qe = Ye ? pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Zf() {
    for (var e = Qe; e; ) e = pn(e.nextSibling);
  }
  function Pr() {
    (Qe = Ye = null), (te = !1);
  }
  function ts(e) {
    yt === null ? (yt = [e]) : yt.push(e);
  }
  var Cy = Wt.ReactCurrentBatchConfig;
  function mt(e, t) {
    if (e && e.defaultProps) {
      (t = ie({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var ri = En(null),
    oi = null,
    yr = null,
    ns = null;
  function rs() {
    ns = yr = oi = null;
  }
  function os(e) {
    var t = ri.current;
    ee(ri), (e._currentValue = t);
  }
  function Ru(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function _r(e, t) {
    (oi = e),
      (ns = yr = null),
      (e = e.dependencies),
      e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), (e.firstContext = null));
  }
  function it(e) {
    var t = e._currentValue;
    if (ns !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), yr === null)) {
        if (oi === null) throw Error(N(308));
        (yr = e), (oi.dependencies = { lanes: 0, firstContext: e });
      } else yr = yr.next = e;
    return t;
  }
  var In = null;
  function ls(e) {
    In === null ? (In = [e]) : In.push(e);
  }
  function bf(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? ((n.next = n), ls(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), Bt(e, r);
  }
  function Bt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var on = !1;
  function is(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function qf(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function jt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function hn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), K & 2)) {
      var o = r.pending;
      return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), Bt(e, n);
    }
    return (
      (o = r.interleaved),
      o === null ? ((t.next = t), ls(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      Bt(e, n)
    );
  }
  function zl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ku(e, n);
    }
  }
  function Cd(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var o = null,
        l = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
        } while (n !== null);
        l === null ? (o = l = t) : (l = l.next = t);
      } else o = l = t;
      (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
  }
  function li(e, t, n, r) {
    var o = e.updateQueue;
    on = !1;
    var l = o.firstBaseUpdate,
      i = o.lastBaseUpdate,
      a = o.shared.pending;
    if (a !== null) {
      o.shared.pending = null;
      var u = a,
        s = u.next;
      (u.next = null), i === null ? (l = s) : (i.next = s), (i = u);
      var c = e.alternate;
      c !== null &&
        ((c = c.updateQueue),
        (a = c.lastBaseUpdate),
        a !== i && (a === null ? (c.firstBaseUpdate = s) : (a.next = s), (c.lastBaseUpdate = u)));
    }
    if (l !== null) {
      var f = o.baseState;
      (i = 0), (c = s = u = null), (a = l);
      do {
        var h = a.lane,
          g = a.eventTime;
        if ((r & h) === h) {
          c !== null &&
            (c = c.next = { eventTime: g, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
          e: {
            var R = e,
              E = a;
            switch (((h = t), (g = n), E.tag)) {
              case 1:
                if (((R = E.payload), typeof R == 'function')) {
                  f = R.call(g, f, h);
                  break e;
                }
                f = R;
                break e;
              case 3:
                R.flags = (R.flags & -65537) | 128;
              case 0:
                if (((R = E.payload), (h = typeof R == 'function' ? R.call(g, f, h) : R), h == null)) break e;
                f = ie({}, f, h);
                break e;
              case 2:
                on = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64), (h = o.effects), h === null ? (o.effects = [a]) : h.push(a));
        } else
          (g = { eventTime: g, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
            c === null ? ((s = c = g), (u = f)) : (c = c.next = g),
            (i |= h);
        if (((a = a.next), a === null)) {
          if (((a = o.shared.pending), a === null)) break;
          (h = a), (a = h.next), (h.next = null), (o.lastBaseUpdate = h), (o.shared.pending = null);
        }
      } while (1);
      if (
        (c === null && (u = f),
        (o.baseState = u),
        (o.firstBaseUpdate = s),
        (o.lastBaseUpdate = c),
        (t = o.shared.interleaved),
        t !== null)
      ) {
        o = t;
        do (i |= o.lane), (o = o.next);
        while (o !== t);
      } else l === null && (o.shared.lanes = 0);
      (Kn |= i), (e.lanes = i), (e.memoizedState = f);
    }
  }
  function Nd(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (o !== null) {
          if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(N(191, o));
          o.call(r);
        }
      }
  }
  var ep = new Zd.Component().refs;
  function Eu(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : ie({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ri = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Jn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Fe(),
        o = vn(e),
        l = jt(r, o);
      (l.payload = t), n != null && (l.callback = n), (t = hn(e, l, o)), t !== null && (wt(t, e, o, r), zl(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Fe(),
        o = vn(e),
        l = jt(r, o);
      (l.tag = 1),
        (l.payload = t),
        n != null && (l.callback = n),
        (t = hn(e, l, o)),
        t !== null && (wt(t, e, o, r), zl(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Fe(),
        r = vn(e),
        o = jt(n, r);
      (o.tag = 2), t != null && (o.callback = t), (t = hn(e, o, r)), t !== null && (wt(t, e, r, n), zl(t, e, r));
    },
  };
  function Pd(e, t, n, r, o, l, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, l, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !No(n, r) || !No(o, l)
          : !0
    );
  }
  function tp(e, t, n) {
    var r = !1,
      o = wn,
      l = t.contextType;
    return (
      typeof l == 'object' && l !== null
        ? (l = it(l))
        : ((o = He(t) ? Bn : Le.current), (r = t.contextTypes), (l = (r = r != null) ? Nr(e, o) : wn)),
      (t = new t(n, l)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ri),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      t
    );
  }
  function Ld(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Ri.enqueueReplaceState(t, t.state, null);
  }
  function Su(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = ep), is(e);
    var l = t.contextType;
    typeof l == 'object' && l !== null ? (o.context = it(l)) : ((l = He(t) ? Bn : Le.current), (o.context = Nr(e, l))),
      (o.state = e.memoizedState),
      (l = t.getDerivedStateFromProps),
      typeof l == 'function' && (Eu(e, t, l, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function' ||
        (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
        ((t = o.state),
        typeof o.componentWillMount == 'function' && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
        t !== o.state && Ri.enqueueReplaceState(o, o.state, null),
        li(e, n, o, r),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function no(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(N(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(N(147, e));
        var o = r,
          l = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === l
          ? t.ref
          : ((t = function (i) {
              var a = o.refs;
              a === ep && (a = o.refs = {}), i === null ? delete a[l] : (a[l] = i);
            }),
            (t._stringRef = l),
            t);
      }
      if (typeof e != 'string') throw Error(N(284));
      if (!n._owner) throw Error(N(290, e));
    }
    return e;
  }
  function Dl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(N(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
    );
  }
  function Dd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function np(e) {
    function t(p, d) {
      if (e) {
        var m = p.deletions;
        m === null ? ((p.deletions = [d]), (p.flags |= 16)) : m.push(d);
      }
    }
    function n(p, d) {
      if (!e) return null;
      for (; d !== null; ) t(p, d), (d = d.sibling);
      return null;
    }
    function r(p, d) {
      for (p = new Map(); d !== null; ) d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
      return p;
    }
    function o(p, d) {
      return (p = yn(p, d)), (p.index = 0), (p.sibling = null), p;
    }
    function l(p, d, m) {
      return (
        (p.index = m),
        e
          ? ((m = p.alternate), m !== null ? ((m = m.index), m < d ? ((p.flags |= 2), d) : m) : ((p.flags |= 2), d))
          : ((p.flags |= 1048576), d)
      );
    }
    function i(p) {
      return e && p.alternate === null && (p.flags |= 2), p;
    }
    function a(p, d, m, S) {
      return d === null || d.tag !== 6
        ? ((d = $a(m, p.mode, S)), (d.return = p), d)
        : ((d = o(d, m)), (d.return = p), d);
    }
    function u(p, d, m, S) {
      var k = m.type;
      return k === sr
        ? c(p, d, m.props.children, S, m.key)
        : d !== null &&
            (d.elementType === k || (typeof k == 'object' && k !== null && k.$$typeof === rn && Dd(k) === d.type))
          ? ((S = o(d, m.props)), (S.ref = no(p, d, m)), (S.return = p), S)
          : ((S = $l(m.type, m.key, m.props, null, p.mode, S)), (S.ref = no(p, d, m)), (S.return = p), S);
    }
    function s(p, d, m, S) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== m.containerInfo ||
        d.stateNode.implementation !== m.implementation
        ? ((d = Wa(m, p.mode, S)), (d.return = p), d)
        : ((d = o(d, m.children || [])), (d.return = p), d);
    }
    function c(p, d, m, S, k) {
      return d === null || d.tag !== 7
        ? ((d = Vn(m, p.mode, S, k)), (d.return = p), d)
        : ((d = o(d, m)), (d.return = p), d);
    }
    function f(p, d, m) {
      if ((typeof d == 'string' && d !== '') || typeof d == 'number')
        return (d = $a('' + d, p.mode, m)), (d.return = p), d;
      if (typeof d == 'object' && d !== null) {
        switch (d.$$typeof) {
          case ml:
            return (m = $l(d.type, d.key, d.props, null, p.mode, m)), (m.ref = no(p, null, d)), (m.return = p), m;
          case ur:
            return (d = Wa(d, p.mode, m)), (d.return = p), d;
          case rn:
            var S = d._init;
            return f(p, S(d._payload), m);
        }
        if (ao(d) || br(d)) return (d = Vn(d, p.mode, m, null)), (d.return = p), d;
        Dl(p, d);
      }
      return null;
    }
    function h(p, d, m, S) {
      var k = d !== null ? d.key : null;
      if ((typeof m == 'string' && m !== '') || typeof m == 'number') return k !== null ? null : a(p, d, '' + m, S);
      if (typeof m == 'object' && m !== null) {
        switch (m.$$typeof) {
          case ml:
            return m.key === k ? u(p, d, m, S) : null;
          case ur:
            return m.key === k ? s(p, d, m, S) : null;
          case rn:
            return (k = m._init), h(p, d, k(m._payload), S);
        }
        if (ao(m) || br(m)) return k !== null ? null : c(p, d, m, S, null);
        Dl(p, m);
      }
      return null;
    }
    function g(p, d, m, S, k) {
      if ((typeof S == 'string' && S !== '') || typeof S == 'number') return (p = p.get(m) || null), a(d, p, '' + S, k);
      if (typeof S == 'object' && S !== null) {
        switch (S.$$typeof) {
          case ml:
            return (p = p.get(S.key === null ? m : S.key) || null), u(d, p, S, k);
          case ur:
            return (p = p.get(S.key === null ? m : S.key) || null), s(d, p, S, k);
          case rn:
            var v = S._init;
            return g(p, d, m, v(S._payload), k);
        }
        if (ao(S) || br(S)) return (p = p.get(m) || null), c(d, p, S, k, null);
        Dl(d, S);
      }
      return null;
    }
    function R(p, d, m, S) {
      for (var k = null, v = null, _ = d, P = (d = 0), O = null; _ !== null && P < m.length; P++) {
        _.index > P ? ((O = _), (_ = null)) : (O = _.sibling);
        var A = h(p, _, m[P], S);
        if (A === null) {
          _ === null && (_ = O);
          break;
        }
        e && _ && A.alternate === null && t(p, _),
          (d = l(A, d, P)),
          v === null ? (k = A) : (v.sibling = A),
          (v = A),
          (_ = O);
      }
      if (P === m.length) return n(p, _), te && An(p, P), k;
      if (_ === null) {
        for (; P < m.length; P++)
          (_ = f(p, m[P], S)), _ !== null && ((d = l(_, d, P)), v === null ? (k = _) : (v.sibling = _), (v = _));
        return te && An(p, P), k;
      }
      for (_ = r(p, _); P < m.length; P++)
        (O = g(_, p, P, m[P], S)),
          O !== null &&
            (e && O.alternate !== null && _.delete(O.key === null ? P : O.key),
            (d = l(O, d, P)),
            v === null ? (k = O) : (v.sibling = O),
            (v = O));
      return (
        e &&
          _.forEach(function (W) {
            return t(p, W);
          }),
        te && An(p, P),
        k
      );
    }
    function E(p, d, m, S) {
      var k = br(m);
      if (typeof k != 'function') throw Error(N(150));
      if (((m = k.call(m)), m == null)) throw Error(N(151));
      for (var v = (k = null), _ = d, P = (d = 0), O = null, A = m.next(); _ !== null && !A.done; P++, A = m.next()) {
        _.index > P ? ((O = _), (_ = null)) : (O = _.sibling);
        var W = h(p, _, A.value, S);
        if (W === null) {
          _ === null && (_ = O);
          break;
        }
        e && _ && W.alternate === null && t(p, _),
          (d = l(W, d, P)),
          v === null ? (k = W) : (v.sibling = W),
          (v = W),
          (_ = O);
      }
      if (A.done) return n(p, _), te && An(p, P), k;
      if (_ === null) {
        for (; !A.done; P++, A = m.next())
          (A = f(p, A.value, S)), A !== null && ((d = l(A, d, P)), v === null ? (k = A) : (v.sibling = A), (v = A));
        return te && An(p, P), k;
      }
      for (_ = r(p, _); !A.done; P++, A = m.next())
        (A = g(_, p, P, A.value, S)),
          A !== null &&
            (e && A.alternate !== null && _.delete(A.key === null ? P : A.key),
            (d = l(A, d, P)),
            v === null ? (k = A) : (v.sibling = A),
            (v = A));
      return (
        e &&
          _.forEach(function (Re) {
            return t(p, Re);
          }),
        te && An(p, P),
        k
      );
    }
    function x(p, d, m, S) {
      if (
        (typeof m == 'object' && m !== null && m.type === sr && m.key === null && (m = m.props.children),
        typeof m == 'object' && m !== null)
      ) {
        switch (m.$$typeof) {
          case ml:
            e: {
              for (var k = m.key, v = d; v !== null; ) {
                if (v.key === k) {
                  if (((k = m.type), k === sr)) {
                    if (v.tag === 7) {
                      n(p, v.sibling), (d = o(v, m.props.children)), (d.return = p), (p = d);
                      break e;
                    }
                  } else if (
                    v.elementType === k ||
                    (typeof k == 'object' && k !== null && k.$$typeof === rn && Dd(k) === v.type)
                  ) {
                    n(p, v.sibling), (d = o(v, m.props)), (d.ref = no(p, v, m)), (d.return = p), (p = d);
                    break e;
                  }
                  n(p, v);
                  break;
                } else t(p, v);
                v = v.sibling;
              }
              m.type === sr
                ? ((d = Vn(m.props.children, p.mode, S, m.key)), (d.return = p), (p = d))
                : ((S = $l(m.type, m.key, m.props, null, p.mode, S)), (S.ref = no(p, d, m)), (S.return = p), (p = S));
            }
            return i(p);
          case ur:
            e: {
              for (v = m.key; d !== null; ) {
                if (d.key === v)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === m.containerInfo &&
                    d.stateNode.implementation === m.implementation
                  ) {
                    n(p, d.sibling), (d = o(d, m.children || [])), (d.return = p), (p = d);
                    break e;
                  } else {
                    n(p, d);
                    break;
                  }
                else t(p, d);
                d = d.sibling;
              }
              (d = Wa(m, p.mode, S)), (d.return = p), (p = d);
            }
            return i(p);
          case rn:
            return (v = m._init), x(p, d, v(m._payload), S);
        }
        if (ao(m)) return R(p, d, m, S);
        if (br(m)) return E(p, d, m, S);
        Dl(p, m);
      }
      return (typeof m == 'string' && m !== '') || typeof m == 'number'
        ? ((m = '' + m),
          d !== null && d.tag === 6
            ? (n(p, d.sibling), (d = o(d, m)), (d.return = p), (p = d))
            : (n(p, d), (d = $a(m, p.mode, S)), (d.return = p), (p = d)),
          i(p))
        : n(p, d);
    }
    return x;
  }
  var Lr = np(!0),
    rp = np(!1),
    Ho = {},
    Lt = En(Ho),
    To = En(Ho),
    Oo = En(Ho);
  function jn(e) {
    if (e === Ho) throw Error(N(174));
    return e;
  }
  function as(e, t) {
    switch ((Z(Oo, t), Z(To, e), Z(Lt, Ho), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : eu(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = eu(t, e));
    }
    ee(Lt), Z(Lt, t);
  }
  function Dr() {
    ee(Lt), ee(To), ee(Oo);
  }
  function op(e) {
    jn(Oo.current);
    var t = jn(Lt.current),
      n = eu(t, e.type);
    t !== n && (Z(To, e), Z(Lt, n));
  }
  function us(e) {
    To.current === e && (ee(Lt), ee(To));
  }
  var oe = En(0);
  function ii(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var za = [];
  function ss() {
    for (var e = 0; e < za.length; e++) za[e]._workInProgressVersionPrimary = null;
    za.length = 0;
  }
  var Il = Wt.ReactCurrentDispatcher,
    Ia = Wt.ReactCurrentBatchConfig,
    Wn = 0,
    le = null,
    pe = null,
    ye = null,
    ai = !1,
    vo = !1,
    Fo = 0,
    Ny = 0;
  function Ce() {
    throw Error(N(321));
  }
  function cs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Rt(e[n], t[n])) return !1;
    return !0;
  }
  function ds(e, t, n, r, o, l) {
    if (
      ((Wn = l),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Il.current = e === null || e.memoizedState === null ? Ty : Oy),
      (e = n(r, o)),
      vo)
    ) {
      l = 0;
      do {
        if (((vo = !1), (Fo = 0), 25 <= l)) throw Error(N(301));
        (l += 1), (ye = pe = null), (t.updateQueue = null), (Il.current = Fy), (e = n(r, o));
      } while (vo);
    }
    if (((Il.current = ui), (t = pe !== null && pe.next !== null), (Wn = 0), (ye = pe = le = null), (ai = !1), t))
      throw Error(N(300));
    return e;
  }
  function fs() {
    var e = Fo !== 0;
    return (Fo = 0), e;
  }
  function Ct() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ye === null ? (le.memoizedState = ye = e) : (ye = ye.next = e), ye;
  }
  function at() {
    if (pe === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = pe.next;
    var t = ye === null ? le.memoizedState : ye.next;
    if (t !== null) (ye = t), (pe = e);
    else {
      if (e === null) throw Error(N(310));
      (pe = e),
        (e = {
          memoizedState: pe.memoizedState,
          baseState: pe.baseState,
          baseQueue: pe.baseQueue,
          queue: pe.queue,
          next: null,
        }),
        ye === null ? (le.memoizedState = ye = e) : (ye = ye.next = e);
    }
    return ye;
  }
  function Mo(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function ja(e) {
    var t = at(),
      n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = pe,
      o = r.baseQueue,
      l = n.pending;
    if (l !== null) {
      if (o !== null) {
        var i = o.next;
        (o.next = l.next), (l.next = i);
      }
      (r.baseQueue = o = l), (n.pending = null);
    }
    if (o !== null) {
      (l = o.next), (r = r.baseState);
      var a = (i = null),
        u = null,
        s = l;
      do {
        var c = s.lane;
        if ((Wn & c) === c)
          u !== null &&
            (u = u.next =
              { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }),
            (r = s.hasEagerState ? s.eagerState : e(r, s.action));
        else {
          var f = { lane: c, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null };
          u === null ? ((a = u = f), (i = r)) : (u = u.next = f), (le.lanes |= c), (Kn |= c);
        }
        s = s.next;
      } while (s !== null && s !== l);
      u === null ? (i = r) : (u.next = a),
        Rt(r, t.memoizedState) || (Ie = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = u),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do (l = o.lane), (le.lanes |= l), (Kn |= l), (o = o.next);
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ha(e) {
    var t = at(),
      n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      l = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var i = (o = o.next);
      do (l = e(l, i.action)), (i = i.next);
      while (i !== o);
      Rt(l, t.memoizedState) || (Ie = !0),
        (t.memoizedState = l),
        t.baseQueue === null && (t.baseState = l),
        (n.lastRenderedState = l);
    }
    return [l, r];
  }
  function lp() {}
  function ip(e, t) {
    var n = le,
      r = at(),
      o = t(),
      l = !Rt(r.memoizedState, o);
    if (
      (l && ((r.memoizedState = o), (Ie = !0)),
      (r = r.queue),
      ps(sp.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || l || (ye !== null && ye.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Ao(9, up.bind(null, n, r, o, t), void 0, null), ge === null)) throw Error(N(349));
      Wn & 30 || ap(n, t, o);
    }
    return o;
  }
  function ap(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (le.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function up(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), cp(t) && dp(e);
  }
  function sp(e, t, n) {
    return n(function () {
      cp(t) && dp(e);
    });
  }
  function cp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Rt(e, n);
    } catch {
      return !0;
    }
  }
  function dp(e) {
    var t = Bt(e, 1);
    t !== null && wt(t, e, 1, -1);
  }
  function Td(e) {
    var t = Ct();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mo,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Dy.bind(null, le, e)),
      [t.memoizedState, e]
    );
  }
  function Ao(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (le.updateQueue = t), (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function fp() {
    return at().memoizedState;
  }
  function jl(e, t, n, r) {
    var o = Ct();
    (le.flags |= e), (o.memoizedState = Ao(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Ei(e, t, n, r) {
    var o = at();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (pe !== null) {
      var i = pe.memoizedState;
      if (((l = i.destroy), r !== null && cs(r, i.deps))) {
        o.memoizedState = Ao(t, n, l, r);
        return;
      }
    }
    (le.flags |= e), (o.memoizedState = Ao(1 | t, n, l, r));
  }
  function Od(e, t) {
    return jl(8390656, 8, e, t);
  }
  function ps(e, t) {
    return Ei(2048, 8, e, t);
  }
  function pp(e, t) {
    return Ei(4, 2, e, t);
  }
  function hp(e, t) {
    return Ei(4, 4, e, t);
  }
  function mp(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function vp(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), Ei(4, 4, mp.bind(null, t, e), n);
  }
  function hs() {}
  function yp(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && cs(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function gp(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && cs(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function wp(e, t, n) {
    return Wn & 21
      ? (Rt(n, t) || ((n = Sf()), (le.lanes |= n), (Kn |= n), (e.baseState = !0)), t)
      : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
  }
  function Py(e, t) {
    var n = Y;
    (Y = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ia.transition;
    Ia.transition = {};
    try {
      e(!1), t();
    } finally {
      (Y = n), (Ia.transition = r);
    }
  }
  function Rp() {
    return at().memoizedState;
  }
  function Ly(e, t, n) {
    var r = vn(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ep(e))) Sp(t, n);
    else if (((n = bf(e, t, n, r)), n !== null)) {
      var o = Fe();
      wt(n, e, r, o), xp(n, t, r);
    }
  }
  function Dy(e, t, n) {
    var r = vn(e),
      o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ep(e)) Sp(t, o);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && ((l = t.lastRenderedReducer), l !== null))
        try {
          var i = t.lastRenderedState,
            a = l(i, n);
          if (((o.hasEagerState = !0), (o.eagerState = a), Rt(a, i))) {
            var u = t.interleaved;
            u === null ? ((o.next = o), ls(t)) : ((o.next = u.next), (u.next = o)), (t.interleaved = o);
            return;
          }
        } catch {
        } finally {
        }
      (n = bf(e, t, o, r)), n !== null && ((o = Fe()), wt(n, e, r, o), xp(n, t, r));
    }
  }
  function Ep(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function Sp(e, t) {
    vo = ai = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
  function xp(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ku(e, n);
    }
  }
  var ui = {
      readContext: it,
      useCallback: Ce,
      useContext: Ce,
      useEffect: Ce,
      useImperativeHandle: Ce,
      useInsertionEffect: Ce,
      useLayoutEffect: Ce,
      useMemo: Ce,
      useReducer: Ce,
      useRef: Ce,
      useState: Ce,
      useDebugValue: Ce,
      useDeferredValue: Ce,
      useTransition: Ce,
      useMutableSource: Ce,
      useSyncExternalStore: Ce,
      useId: Ce,
      unstable_isNewReconciler: !1,
    },
    Ty = {
      readContext: it,
      useCallback: function (e, t) {
        return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: it,
      useEffect: Od,
      useImperativeHandle: function (e, t, n) {
        return (n = n != null ? n.concat([e]) : null), jl(4194308, 4, mp.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return jl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return jl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ct();
        return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, n) {
        var r = Ct();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Ly.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ct();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Td,
      useDebugValue: hs,
      useDeferredValue: function (e) {
        return (Ct().memoizedState = e);
      },
      useTransition: function () {
        var e = Td(!1),
          t = e[0];
        return (e = Py.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = le,
          o = Ct();
        if (te) {
          if (n === void 0) throw Error(N(407));
          n = n();
        } else {
          if (((n = t()), ge === null)) throw Error(N(349));
          Wn & 30 || ap(r, t, n);
        }
        o.memoizedState = n;
        var l = { value: n, getSnapshot: t };
        return (
          (o.queue = l),
          Od(sp.bind(null, r, l, e), [e]),
          (r.flags |= 2048),
          Ao(9, up.bind(null, r, l, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Ct(),
          t = ge.identifierPrefix;
        if (te) {
          var n = It,
            r = zt;
          (n = (r & ~(1 << (32 - gt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Fo++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':');
        } else (n = Ny++), (t = ':' + t + 'r' + n.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Oy = {
      readContext: it,
      useCallback: yp,
      useContext: it,
      useEffect: ps,
      useImperativeHandle: vp,
      useInsertionEffect: pp,
      useLayoutEffect: hp,
      useMemo: gp,
      useReducer: ja,
      useRef: fp,
      useState: function () {
        return ja(Mo);
      },
      useDebugValue: hs,
      useDeferredValue: function (e) {
        var t = at();
        return wp(t, pe.memoizedState, e);
      },
      useTransition: function () {
        var e = ja(Mo)[0],
          t = at().memoizedState;
        return [e, t];
      },
      useMutableSource: lp,
      useSyncExternalStore: ip,
      useId: Rp,
      unstable_isNewReconciler: !1,
    },
    Fy = {
      readContext: it,
      useCallback: yp,
      useContext: it,
      useEffect: ps,
      useImperativeHandle: vp,
      useInsertionEffect: pp,
      useLayoutEffect: hp,
      useMemo: gp,
      useReducer: Ha,
      useRef: fp,
      useState: function () {
        return Ha(Mo);
      },
      useDebugValue: hs,
      useDeferredValue: function (e) {
        var t = at();
        return pe === null ? (t.memoizedState = e) : wp(t, pe.memoizedState, e);
      },
      useTransition: function () {
        var e = Ha(Mo)[0],
          t = at().memoizedState;
        return [e, t];
      },
      useMutableSource: lp,
      useSyncExternalStore: ip,
      useId: Rp,
      unstable_isNewReconciler: !1,
    };
  function Tr(e, t) {
    try {
      var n = '',
        r = t;
      do (n += sv(r)), (r = r.return);
      while (r);
      var o = n;
    } catch (l) {
      o =
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Va(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function xu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var My = typeof WeakMap == 'function' ? WeakMap : Map;
  function _p(e, t, n) {
    (n = jt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        ci || ((ci = !0), (Fu = r)), xu(e, t);
      }),
      n
    );
  }
  function kp(e, t, n) {
    (n = jt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var o = t.value;
      (n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          xu(e, t);
        });
    }
    var l = e.stateNode;
    return (
      l !== null &&
        typeof l.componentDidCatch == 'function' &&
        (n.callback = function () {
          xu(e, t), typeof r != 'function' && (mn === null ? (mn = new Set([this])) : mn.add(this));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' });
        }),
      n
    );
  }
  function Fd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new My();
      var o = new Set();
      r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = Jy.bind(null, e, t, n)), t.then(e, e));
  }
  function Md(e) {
    do {
      var t;
      if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ad(e, t, n, r, o) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = o), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = jt(-1, 1)), (t.tag = 2), hn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Ay = Wt.ReactCurrentOwner,
    Ie = !1;
  function Oe(e, t, n, r) {
    t.child = e === null ? rp(t, null, n, r) : Lr(t, e.child, n, r);
  }
  function Ud(e, t, n, r, o) {
    n = n.render;
    var l = t.ref;
    return (
      _r(t, o),
      (r = ds(e, t, n, r, l, o)),
      (n = fs()),
      e !== null && !Ie
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), $t(e, t, o))
        : (te && n && qu(t), (t.flags |= 1), Oe(e, t, r, o), t.child)
    );
  }
  function zd(e, t, n, r, o) {
    if (e === null) {
      var l = n.type;
      return typeof l == 'function' &&
        !Ss(l) &&
        l.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = l), Cp(e, t, l, r, o))
        : ((e = $l(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((l = e.child), !(e.lanes & o))) {
      var i = l.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : No), n(i, r) && e.ref === t.ref)) return $t(e, t, o);
    }
    return (t.flags |= 1), (e = yn(l, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function Cp(e, t, n, r, o) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (No(l, r) && e.ref === t.ref)
        if (((Ie = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0)) e.flags & 131072 && (Ie = !0);
        else return (t.lanes = e.lanes), $t(e, t, o);
    }
    return _u(e, t, n, r, o);
  }
  function Np(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      l = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Z(wr, Ke), (Ke |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = l !== null ? l.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Z(wr, Ke),
            (Ke |= e),
            null
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = l !== null ? l.baseLanes : n),
          Z(wr, Ke),
          (Ke |= r);
      }
    else l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), Z(wr, Ke), (Ke |= r);
    return Oe(e, t, o, n), t.child;
  }
  function Pp(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
  }
  function _u(e, t, n, r, o) {
    var l = He(n) ? Bn : Le.current;
    return (
      (l = Nr(t, l)),
      _r(t, o),
      (n = ds(e, t, n, r, l, o)),
      (r = fs()),
      e !== null && !Ie
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), $t(e, t, o))
        : (te && r && qu(t), (t.flags |= 1), Oe(e, t, n, o), t.child)
    );
  }
  function Id(e, t, n, r, o) {
    if (He(n)) {
      var l = !0;
      ei(t);
    } else l = !1;
    if ((_r(t, o), t.stateNode === null)) Hl(e, t), tp(t, n, r), Su(t, n, r, o), (r = !0);
    else if (e === null) {
      var i = t.stateNode,
        a = t.memoizedProps;
      i.props = a;
      var u = i.context,
        s = n.contextType;
      typeof s == 'object' && s !== null ? (s = it(s)) : ((s = He(n) ? Bn : Le.current), (s = Nr(t, s)));
      var c = n.getDerivedStateFromProps,
        f = typeof c == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
      f ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' && typeof i.componentWillReceiveProps != 'function') ||
        ((a !== r || u !== s) && Ld(t, i, r, s)),
        (on = !1);
      var h = t.memoizedState;
      (i.state = h),
        li(t, r, i, o),
        (u = t.memoizedState),
        a !== r || h !== u || je.current || on
          ? (typeof c == 'function' && (Eu(t, n, c, r), (u = t.memoizedState)),
            (a = on || Pd(t, n, a, r, h, u, s))
              ? (f ||
                  (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
                  (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = u)),
            (i.props = r),
            (i.state = u),
            (i.context = s),
            (r = a))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
    } else {
      (i = t.stateNode),
        qf(e, t),
        (a = t.memoizedProps),
        (s = t.type === t.elementType ? a : mt(t.type, a)),
        (i.props = s),
        (f = t.pendingProps),
        (h = i.context),
        (u = n.contextType),
        typeof u == 'object' && u !== null ? (u = it(u)) : ((u = He(n) ? Bn : Le.current), (u = Nr(t, u)));
      var g = n.getDerivedStateFromProps;
      (c = typeof g == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' && typeof i.componentWillReceiveProps != 'function') ||
        ((a !== f || h !== u) && Ld(t, i, r, u)),
        (on = !1),
        (h = t.memoizedState),
        (i.state = h),
        li(t, r, i, o);
      var R = t.memoizedState;
      a !== f || h !== R || je.current || on
        ? (typeof g == 'function' && (Eu(t, n, g, r), (R = t.memoizedState)),
          (s = on || Pd(t, n, s, r, h, R, u) || !1)
            ? (c ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' && typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, R, u),
                typeof i.UNSAFE_componentWillUpdate == 'function' && i.UNSAFE_componentWillUpdate(r, R, u)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (a === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (a === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = R)),
          (i.props = r),
          (i.state = R),
          (i.context = u),
          (r = s))
        : (typeof i.componentDidUpdate != 'function' ||
            (a === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (a === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ku(e, t, n, r, l, o);
  }
  function ku(e, t, n, r, o, l) {
    Pp(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return o && xd(t, n, !1), $t(e, t, l);
    (r = t.stateNode), (Ay.current = t);
    var a = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i ? ((t.child = Lr(t, e.child, null, l)), (t.child = Lr(t, null, a, l))) : Oe(e, t, a, l),
      (t.memoizedState = r.state),
      o && xd(t, n, !0),
      t.child
    );
  }
  function Lp(e) {
    var t = e.stateNode;
    t.pendingContext ? Sd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Sd(e, t.context, !1),
      as(e, t.containerInfo);
  }
  function jd(e, t, n, r, o) {
    return Pr(), ts(o), (t.flags |= 256), Oe(e, t, n, r), t.child;
  }
  var Cu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Nu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Dp(e, t, n) {
    var r = t.pendingProps,
      o = oe.current,
      l = !1,
      i = (t.flags & 128) !== 0,
      a;
    if (
      ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      a ? ((l = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
      Z(oe, o & 1),
      e === null)
    )
      return (
        wu(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
          : ((i = r.children),
            (e = r.fallback),
            l
              ? ((r = t.mode),
                (l = t.child),
                (i = { mode: 'hidden', children: i }),
                !(r & 1) && l !== null ? ((l.childLanes = 0), (l.pendingProps = i)) : (l = _i(i, r, 0, null)),
                (e = Vn(e, r, n, null)),
                (l.return = t),
                (e.return = t),
                (l.sibling = e),
                (t.child = l),
                (t.child.memoizedState = Nu(n)),
                (t.memoizedState = Cu),
                e)
              : ms(t, i))
      );
    if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null))) return Uy(e, t, i, r, a, o, n);
    if (l) {
      (l = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
      var u = { mode: 'hidden', children: r.children };
      return (
        !(i & 1) && t.child !== o
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = u), (t.deletions = null))
          : ((r = yn(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
        a !== null ? (l = yn(a, l)) : ((l = Vn(l, i, n, null)), (l.flags |= 2)),
        (l.return = t),
        (r.return = t),
        (r.sibling = l),
        (t.child = r),
        (r = l),
        (l = t.child),
        (i = e.child.memoizedState),
        (i = i === null ? Nu(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (l.memoizedState = i),
        (l.childLanes = e.childLanes & ~n),
        (t.memoizedState = Cu),
        r
      );
    }
    return (
      (l = e.child),
      (e = l.sibling),
      (r = yn(l, { mode: 'visible', children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ms(e, t) {
    return (t = _i({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
  }
  function Tl(e, t, n, r) {
    return (
      r !== null && ts(r),
      Lr(t, e.child, null, n),
      (e = ms(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Uy(e, t, n, r, o, l, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Va(Error(N(422)))), Tl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((l = r.fallback),
            (o = t.mode),
            (r = _i({ mode: 'visible', children: r.children }, o, 0, null)),
            (l = Vn(l, o, i, null)),
            (l.flags |= 2),
            (r.return = t),
            (l.return = t),
            (r.sibling = l),
            (t.child = r),
            t.mode & 1 && Lr(t, e.child, null, i),
            (t.child.memoizedState = Nu(i)),
            (t.memoizedState = Cu),
            l);
    if (!(t.mode & 1)) return Tl(e, t, i, null);
    if (o.data === '$!') {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
      return (r = a), (l = Error(N(419))), (r = Va(l, r, void 0)), Tl(e, t, i, r);
    }
    if (((a = (i & e.childLanes) !== 0), Ie || a)) {
      if (((r = ge), r !== null)) {
        switch (i & -i) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
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
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        (o = o & (r.suspendedLanes | i) ? 0 : o),
          o !== 0 && o !== l.retryLane && ((l.retryLane = o), Bt(e, o), wt(r, e, o, -1));
      }
      return Es(), (r = Va(Error(N(421)))), Tl(e, t, i, r);
    }
    return o.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Xy.bind(null, e)), (o._reactRetry = t), null)
      : ((e = l.treeContext),
        (Qe = pn(o.nextSibling)),
        (Ye = t),
        (te = !0),
        (yt = null),
        e !== null && ((nt[rt++] = zt), (nt[rt++] = It), (nt[rt++] = $n), (zt = e.id), (It = e.overflow), ($n = t)),
        (t = ms(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Hd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ru(e.return, t, n);
  }
  function Ba(e, t, n, r, o) {
    var l = e.memoizedState;
    l === null
      ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
      : ((l.isBackwards = t),
        (l.rendering = null),
        (l.renderingStartTime = 0),
        (l.last = r),
        (l.tail = n),
        (l.tailMode = o));
  }
  function Tp(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      l = r.tail;
    if ((Oe(e, t, r.children, n), (r = oe.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Hd(e, n, t);
          else if (e.tag === 19) Hd(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Z(oe, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (o) {
        case 'forwards':
          for (n = t.child, o = null; n !== null; )
            (e = n.alternate), e !== null && ii(e) === null && (o = n), (n = n.sibling);
          (n = o),
            n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
            Ba(t, !1, o, n, l);
          break;
        case 'backwards':
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (((e = o.alternate), e !== null && ii(e) === null)) {
              t.child = o;
              break;
            }
            (e = o.sibling), (o.sibling = n), (n = o), (o = e);
          }
          Ba(t, !0, n, null, l);
          break;
        case 'together':
          Ba(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Hl(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function $t(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (Kn |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(N(153));
    if (t.child !== null) {
      for (e = t.child, n = yn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        (e = e.sibling), (n = n.sibling = yn(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function zy(e, t, n) {
    switch (t.tag) {
      case 3:
        Lp(t), Pr();
        break;
      case 5:
        op(t);
        break;
      case 1:
        He(t.type) && ei(t);
        break;
      case 4:
        as(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          o = t.memoizedProps.value;
        Z(ri, r._currentValue), (r._currentValue = o);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Z(oe, oe.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? Dp(e, t, n)
              : (Z(oe, oe.current & 1), (e = $t(e, t, n)), e !== null ? e.sibling : null);
        Z(oe, oe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Tp(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          Z(oe, oe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Np(e, t, n);
    }
    return $t(e, t, n);
  }
  var Op, Pu, Fp, Mp;
  Op = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  };
  Pu = function () {};
  Fp = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      (e = t.stateNode), jn(Lt.current);
      var l = null;
      switch (n) {
        case 'input':
          (o = Ga(e, o)), (r = Ga(e, r)), (l = []);
          break;
        case 'select':
          (o = ie({}, o, { value: void 0 })), (r = ie({}, r, { value: void 0 })), (l = []);
          break;
        case 'textarea':
          (o = qa(e, o)), (r = qa(e, r)), (l = []);
          break;
        default:
          typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = bl);
      }
      tu(n, r);
      var i;
      n = null;
      for (s in o)
        if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
          if (s === 'style') {
            var a = o[s];
            for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
          } else
            s !== 'dangerouslySetInnerHTML' &&
              s !== 'children' &&
              s !== 'suppressContentEditableWarning' &&
              s !== 'suppressHydrationWarning' &&
              s !== 'autoFocus' &&
              (Ro.hasOwnProperty(s) ? l || (l = []) : (l = l || []).push(s, null));
      for (s in r) {
        var u = r[s];
        if (((a = o?.[s]), r.hasOwnProperty(s) && u !== a && (u != null || a != null)))
          if (s === 'style')
            if (a) {
              for (i in a) !a.hasOwnProperty(i) || (u && u.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ''));
              for (i in u) u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), (n[i] = u[i]));
            } else n || (l || (l = []), l.push(s, n)), (n = u);
          else
            s === 'dangerouslySetInnerHTML'
              ? ((u = u ? u.__html : void 0),
                (a = a ? a.__html : void 0),
                u != null && a !== u && (l = l || []).push(s, u))
              : s === 'children'
                ? (typeof u != 'string' && typeof u != 'number') || (l = l || []).push(s, '' + u)
                : s !== 'suppressContentEditableWarning' &&
                  s !== 'suppressHydrationWarning' &&
                  (Ro.hasOwnProperty(s)
                    ? (u != null && s === 'onScroll' && q('scroll', e), l || a === u || (l = []))
                    : (l = l || []).push(s, u));
      }
      n && (l = l || []).push('style', n);
      var s = l;
      (t.updateQueue = s) && (t.flags |= 4);
    }
  };
  Mp = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ro(e, t) {
    if (!te)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
          r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
      }
  }
  function Ne(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags & 14680064),
          (r |= o.flags & 14680064),
          (o.return = e),
          (o = o.sibling);
    else
      for (o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Iy(e, t, n) {
    var r = t.pendingProps;
    switch ((es(t), t.tag)) {
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
        return Ne(t), null;
      case 1:
        return He(t.type) && ql(), Ne(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Dr(),
          ee(je),
          ee(Le),
          ss(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ll(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), yt !== null && (Uu(yt), (yt = null)))),
          Pu(e, t),
          Ne(t),
          null
        );
      case 5:
        us(t);
        var o = jn(Oo.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Fp(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(N(166));
            return Ne(t), null;
          }
          if (((e = jn(Lt.current)), Ll(t))) {
            (r = t.stateNode), (n = t.type);
            var l = t.memoizedProps;
            switch (((r[Nt] = t), (r[Do] = l), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                q('cancel', r), q('close', r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                q('load', r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < so.length; o++) q(so[o], r);
                break;
              case 'source':
                q('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                q('error', r), q('load', r);
                break;
              case 'details':
                q('toggle', r);
                break;
              case 'input':
                Jc(r, l), q('invalid', r);
                break;
              case 'select':
                (r._wrapperState = { wasMultiple: !!l.multiple }), q('invalid', r);
                break;
              case 'textarea':
                Gc(r, l), q('invalid', r);
            }
            tu(n, l), (o = null);
            for (var i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === 'children'
                  ? typeof a == 'string'
                    ? r.textContent !== a &&
                      (l.suppressHydrationWarning !== !0 && Pl(r.textContent, a, e), (o = ['children', a]))
                    : typeof a == 'number' &&
                      r.textContent !== '' + a &&
                      (l.suppressHydrationWarning !== !0 && Pl(r.textContent, a, e), (o = ['children', '' + a]))
                  : Ro.hasOwnProperty(i) && a != null && i === 'onScroll' && q('scroll', r);
              }
            switch (n) {
              case 'input':
                vl(r), Xc(r, l, !0);
                break;
              case 'textarea':
                vl(r), Zc(r);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof l.onClick == 'function' && (r.onclick = bl);
            }
            (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (i = o.nodeType === 9 ? o : o.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = af(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = i.createElement('div')),
                    (e.innerHTML = '<script></script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = i.createElement(n, { is: r.is }))
                    : ((e = i.createElement(n)),
                      n === 'select' && ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[Nt] = t),
              (e[Do] = r),
              Op(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((i = nu(n, r)), n)) {
                case 'dialog':
                  q('cancel', e), q('close', e), (o = r);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  q('load', e), (o = r);
                  break;
                case 'video':
                case 'audio':
                  for (o = 0; o < so.length; o++) q(so[o], e);
                  o = r;
                  break;
                case 'source':
                  q('error', e), (o = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  q('error', e), q('load', e), (o = r);
                  break;
                case 'details':
                  q('toggle', e), (o = r);
                  break;
                case 'input':
                  Jc(e, r), (o = Ga(e, r)), q('invalid', e);
                  break;
                case 'option':
                  o = r;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = ie({}, r, { value: void 0 })),
                    q('invalid', e);
                  break;
                case 'textarea':
                  Gc(e, r), (o = qa(e, r)), q('invalid', e);
                  break;
                default:
                  o = r;
              }
              tu(n, o), (a = o);
              for (l in a)
                if (a.hasOwnProperty(l)) {
                  var u = a[l];
                  l === 'style'
                    ? cf(e, u)
                    : l === 'dangerouslySetInnerHTML'
                      ? ((u = u ? u.__html : void 0), u != null && uf(e, u))
                      : l === 'children'
                        ? typeof u == 'string'
                          ? (n !== 'textarea' || u !== '') && Eo(e, u)
                          : typeof u == 'number' && Eo(e, '' + u)
                        : l !== 'suppressContentEditableWarning' &&
                          l !== 'suppressHydrationWarning' &&
                          l !== 'autoFocus' &&
                          (Ro.hasOwnProperty(l)
                            ? u != null && l === 'onScroll' && q('scroll', e)
                            : u != null && ju(e, l, u, i));
                }
              switch (n) {
                case 'input':
                  vl(e), Xc(e, r, !1);
                  break;
                case 'textarea':
                  vl(e), Zc(e);
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + gn(r.value));
                  break;
                case 'select':
                  (e.multiple = !!r.multiple),
                    (l = r.value),
                    l != null
                      ? Rr(e, !!r.multiple, l, !1)
                      : r.defaultValue != null && Rr(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof o.onClick == 'function' && (e.onclick = bl);
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus;
                  break e;
                case 'img':
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ne(t), null;
      case 6:
        if (e && t.stateNode != null) Mp(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(N(166));
          if (((n = jn(Oo.current)), jn(Lt.current), Ll(t))) {
            if (
              ((r = t.stateNode), (n = t.memoizedProps), (r[Nt] = t), (l = r.nodeValue !== n) && ((e = Ye), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Pl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Pl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            l && (t.flags |= 4);
          } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Nt] = t), (t.stateNode = r);
        }
        return Ne(t), null;
      case 13:
        if (
          (ee(oe),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && Qe !== null && t.mode & 1 && !(t.flags & 128)) Zf(), Pr(), (t.flags |= 98560), (l = !1);
          else if (((l = Ll(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(N(318));
              if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(N(317));
              l[Nt] = t;
            } else Pr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
            Ne(t), (l = !1);
          } else yt !== null && (Uu(yt), (yt = null)), (l = !0);
          if (!l) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192), t.mode & 1 && (e === null || oe.current & 1 ? he === 0 && (he = 3) : Es())),
            t.updateQueue !== null && (t.flags |= 4),
            Ne(t),
            null);
      case 4:
        return Dr(), Pu(e, t), e === null && Po(t.stateNode.containerInfo), Ne(t), null;
      case 10:
        return os(t.type._context), Ne(t), null;
      case 17:
        return He(t.type) && ql(), Ne(t), null;
      case 19:
        if ((ee(oe), (l = t.memoizedState), l === null)) return Ne(t), null;
        if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
          if (r) ro(l, !1);
          else {
            if (he !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((i = ii(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      ro(l, !1),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (l = n),
                      (e = r),
                      (l.flags &= 14680066),
                      (i = l.alternate),
                      i === null
                        ? ((l.childLanes = 0),
                          (l.lanes = e),
                          (l.child = null),
                          (l.subtreeFlags = 0),
                          (l.memoizedProps = null),
                          (l.memoizedState = null),
                          (l.updateQueue = null),
                          (l.dependencies = null),
                          (l.stateNode = null))
                        : ((l.childLanes = i.childLanes),
                          (l.lanes = i.lanes),
                          (l.child = i.child),
                          (l.subtreeFlags = 0),
                          (l.deletions = null),
                          (l.memoizedProps = i.memoizedProps),
                          (l.memoizedState = i.memoizedState),
                          (l.updateQueue = i.updateQueue),
                          (l.type = i.type),
                          (e = i.dependencies),
                          (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling);
                  return Z(oe, (oe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && se() > Or && ((t.flags |= 128), (r = !0), ro(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ii(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                ro(l, !0),
                l.tail === null && l.tailMode === 'hidden' && !i.alternate && !te)
              )
                return Ne(t), null;
            } else
              2 * se() - l.renderingStartTime > Or &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), ro(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = l.last), n !== null ? (n.sibling = i) : (t.child = i), (l.last = i));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = se()),
            (t.sibling = null),
            (n = oe.current),
            Z(oe, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ne(t), null);
      case 22:
      case 23:
        return (
          Rs(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1 ? Ke & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ne(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(N(156, t.tag));
  }
  function jy(e, t) {
    switch ((es(t), t.tag)) {
      case 1:
        return He(t.type) && ql(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return (
          Dr(),
          ee(je),
          ee(Le),
          ss(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return us(t), null;
      case 13:
        if ((ee(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(N(340));
          Pr();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return ee(oe), null;
      case 4:
        return Dr(), null;
      case 10:
        return os(t.type._context), null;
      case 22:
      case 23:
        return Rs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ol = !1,
    Pe = !1,
    Hy = typeof WeakSet == 'function' ? WeakSet : Set,
    F = null;
  function gr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          ue(e, t, r);
        }
      else n.current = null;
  }
  function Lu(e, t, n) {
    try {
      n();
    } catch (r) {
      ue(e, t, r);
    }
  }
  var Vd = !1;
  function Vy(e, t) {
    if (((fu = Xl), (e = If()), bu(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var o = r.anchorOffset,
              l = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, l.nodeType;
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              a = -1,
              u = -1,
              s = 0,
              c = 0,
              f = e,
              h = null;
            t: for (;;) {
              for (
                var g;
                f !== n || (o !== 0 && f.nodeType !== 3) || (a = i + o),
                  f !== l || (r !== 0 && f.nodeType !== 3) || (u = i + r),
                  f.nodeType === 3 && (i += f.nodeValue.length),
                  (g = f.firstChild) !== null;

              )
                (h = f), (f = g);
              for (;;) {
                if (f === e) break t;
                if ((h === n && ++s === o && (a = i), h === l && ++c === r && (u = i), (g = f.nextSibling) !== null))
                  break;
                (f = h), (h = f.parentNode);
              }
              f = g;
            }
            n = a === -1 || u === -1 ? null : { start: a, end: u };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (pu = { focusedElem: e, selectionRange: n }, Xl = !1, F = t; F !== null; )
      if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (F = e);
      else
        for (; F !== null; ) {
          t = F;
          try {
            var R = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (R !== null) {
                    var E = R.memoizedProps,
                      x = R.memoizedState,
                      p = t.stateNode,
                      d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? E : mt(t.type, E), x);
                    p.__reactInternalSnapshotBeforeUpdate = d;
                  }
                  break;
                case 3:
                  var m = t.stateNode.containerInfo;
                  m.nodeType === 1
                    ? (m.textContent = '')
                    : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(N(163));
              }
          } catch (S) {
            ue(t, t.return, S);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (F = e);
            break;
          }
          F = t.return;
        }
    return (R = Vd), (Vd = !1), R;
  }
  function yo(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var l = o.destroy;
          (o.destroy = void 0), l !== void 0 && Lu(t, n, l);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Si(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Du(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function Ap(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Ap(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode), t !== null && (delete t[Nt], delete t[Do], delete t[vu], delete t[xy], delete t[_y])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Up(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Bd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Up(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Tu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = bl));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Tu(e, t, n), e = e.sibling; e !== null; ) Tu(e, t, n), (e = e.sibling);
  }
  function Ou(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ou(e, t, n), e = e.sibling; e !== null; ) Ou(e, t, n), (e = e.sibling);
  }
  var Se = null,
    vt = !1;
  function nn(e, t, n) {
    for (n = n.child; n !== null; ) zp(e, t, n), (n = n.sibling);
  }
  function zp(e, t, n) {
    if (Pt && typeof Pt.onCommitFiberUnmount == 'function')
      try {
        Pt.onCommitFiberUnmount(hi, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Pe || gr(n, t);
      case 6:
        var r = Se,
          o = vt;
        (Se = null),
          nn(e, t, n),
          (Se = r),
          (vt = o),
          Se !== null &&
            (vt
              ? ((e = Se), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Se.removeChild(n.stateNode));
        break;
      case 18:
        Se !== null &&
          (vt
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? Aa(e.parentNode, n) : e.nodeType === 1 && Aa(e, n),
              ko(e))
            : Aa(Se, n.stateNode));
        break;
      case 4:
        (r = Se), (o = vt), (Se = n.stateNode.containerInfo), (vt = !0), nn(e, t, n), (Se = r), (vt = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Pe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          o = r = r.next;
          do {
            var l = o,
              i = l.destroy;
            (l = l.tag), i !== void 0 && (l & 2 || l & 4) && Lu(n, t, i), (o = o.next);
          } while (o !== r);
        }
        nn(e, t, n);
        break;
      case 1:
        if (!Pe && (gr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
          } catch (a) {
            ue(n, t, a);
          }
        nn(e, t, n);
        break;
      case 21:
        nn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? ((Pe = (r = Pe) || n.memoizedState !== null), nn(e, t, n), (Pe = r)) : nn(e, t, n);
        break;
      default:
        nn(e, t, n);
    }
  }
  function $d(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Hy()),
        t.forEach(function (r) {
          var o = Gy.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        });
    }
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
          var l = e,
            i = t,
            a = i;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                (Se = a.stateNode), (vt = !1);
                break e;
              case 3:
                (Se = a.stateNode.containerInfo), (vt = !0);
                break e;
              case 4:
                (Se = a.stateNode.containerInfo), (vt = !0);
                break e;
            }
            a = a.return;
          }
          if (Se === null) throw Error(N(160));
          zp(l, i, o), (Se = null), (vt = !1);
          var u = o.alternate;
          u !== null && (u.return = null), (o.return = null);
        } catch (s) {
          ue(o, t, s);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ip(t, e), (t = t.sibling);
  }
  function Ip(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ht(t, e), kt(e), r & 4)) {
          try {
            yo(3, e, e.return), Si(3, e);
          } catch (E) {
            ue(e, e.return, E);
          }
          try {
            yo(5, e, e.return);
          } catch (E) {
            ue(e, e.return, E);
          }
        }
        break;
      case 1:
        ht(t, e), kt(e), r & 512 && n !== null && gr(n, n.return);
        break;
      case 5:
        if ((ht(t, e), kt(e), r & 512 && n !== null && gr(n, n.return), e.flags & 32)) {
          var o = e.stateNode;
          try {
            Eo(o, '');
          } catch (E) {
            ue(e, e.return, E);
          }
        }
        if (r & 4 && ((o = e.stateNode), o != null)) {
          var l = e.memoizedProps,
            i = n !== null ? n.memoizedProps : l,
            a = e.type,
            u = e.updateQueue;
          if (((e.updateQueue = null), u !== null))
            try {
              a === 'input' && l.type === 'radio' && l.name != null && of(o, l), nu(a, i);
              var s = nu(a, l);
              for (i = 0; i < u.length; i += 2) {
                var c = u[i],
                  f = u[i + 1];
                c === 'style'
                  ? cf(o, f)
                  : c === 'dangerouslySetInnerHTML'
                    ? uf(o, f)
                    : c === 'children'
                      ? Eo(o, f)
                      : ju(o, c, f, s);
              }
              switch (a) {
                case 'input':
                  Za(o, l);
                  break;
                case 'textarea':
                  lf(o, l);
                  break;
                case 'select':
                  var h = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!l.multiple;
                  var g = l.value;
                  g != null
                    ? Rr(o, !!l.multiple, g, !1)
                    : h !== !!l.multiple &&
                      (l.defaultValue != null
                        ? Rr(o, !!l.multiple, l.defaultValue, !0)
                        : Rr(o, !!l.multiple, l.multiple ? [] : '', !1));
              }
              o[Do] = l;
            } catch (E) {
              ue(e, e.return, E);
            }
        }
        break;
      case 6:
        if ((ht(t, e), kt(e), r & 4)) {
          if (e.stateNode === null) throw Error(N(162));
          (o = e.stateNode), (l = e.memoizedProps);
          try {
            o.nodeValue = l;
          } catch (E) {
            ue(e, e.return, E);
          }
        }
        break;
      case 3:
        if ((ht(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            ko(t.containerInfo);
          } catch (E) {
            ue(e, e.return, E);
          }
        break;
      case 4:
        ht(t, e), kt(e);
        break;
      case 13:
        ht(t, e),
          kt(e),
          (o = e.child),
          o.flags & 8192 &&
            ((l = o.memoizedState !== null),
            (o.stateNode.isHidden = l),
            !l || (o.alternate !== null && o.alternate.memoizedState !== null) || (gs = se())),
          r & 4 && $d(e);
        break;
      case 22:
        if (
          ((c = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Pe = (s = Pe) || c), ht(t, e), (Pe = s)) : ht(t, e),
          kt(e),
          r & 8192)
        ) {
          if (((s = e.memoizedState !== null), (e.stateNode.isHidden = s) && !c && e.mode & 1))
            for (F = e, c = e.child; c !== null; ) {
              for (f = F = c; F !== null; ) {
                switch (((h = F), (g = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    yo(4, h, h.return);
                    break;
                  case 1:
                    gr(h, h.return);
                    var R = h.stateNode;
                    if (typeof R.componentWillUnmount == 'function') {
                      (r = h), (n = h.return);
                      try {
                        (t = r), (R.props = t.memoizedProps), (R.state = t.memoizedState), R.componentWillUnmount();
                      } catch (E) {
                        ue(r, n, E);
                      }
                    }
                    break;
                  case 5:
                    gr(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      Kd(f);
                      continue;
                    }
                }
                g !== null ? ((g.return = h), (F = g)) : Kd(f);
              }
              c = c.sibling;
            }
          e: for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  (o = f.stateNode),
                    s
                      ? ((l = o.style),
                        typeof l.setProperty == 'function'
                          ? l.setProperty('display', 'none', 'important')
                          : (l.display = 'none'))
                      : ((a = f.stateNode),
                        (u = f.memoizedProps.style),
                        (i = u != null && u.hasOwnProperty('display') ? u.display : null),
                        (a.style.display = sf('display', i)));
                } catch (E) {
                  ue(e, e.return, E);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = s ? '' : f.memoizedProps;
                } catch (E) {
                  ue(e, e.return, E);
                }
            } else if (((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) && f.child !== null) {
              (f.child.return = f), (f = f.child);
              continue;
            }
            if (f === e) break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e) break e;
              c === f && (c = null), (f = f.return);
            }
            c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
          }
        }
        break;
      case 19:
        ht(t, e), kt(e), r & 4 && $d(e);
        break;
      case 21:
        break;
      default:
        ht(t, e), kt(e);
    }
  }
  function kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Up(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(N(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (Eo(o, ''), (r.flags &= -33));
            var l = Bd(e);
            Ou(e, l, o);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              a = Bd(e);
            Tu(e, a, i);
            break;
          default:
            throw Error(N(161));
        }
      } catch (u) {
        ue(e, e.return, u);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function By(e, t, n) {
    (F = e), jp(e, t, n);
  }
  function jp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
      var o = F,
        l = o.child;
      if (o.tag === 22 && r) {
        var i = o.memoizedState !== null || Ol;
        if (!i) {
          var a = o.alternate,
            u = (a !== null && a.memoizedState !== null) || Pe;
          a = Ol;
          var s = Pe;
          if (((Ol = i), (Pe = u) && !s))
            for (F = o; F !== null; )
              (i = F),
                (u = i.child),
                i.tag === 22 && i.memoizedState !== null ? Qd(o) : u !== null ? ((u.return = i), (F = u)) : Qd(o);
          for (; l !== null; ) (F = l), jp(l, t, n), (l = l.sibling);
          (F = o), (Ol = a), (Pe = s);
        }
        Wd(e, t, n);
      } else o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (F = l)) : Wd(e, t, n);
    }
  }
  function Wd(e) {
    for (; F !== null; ) {
      var t = F;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Pe || Si(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Pe)
                  if (n === null) r.componentDidMount();
                  else {
                    var o = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var l = t.updateQueue;
                l !== null && Nd(t, l, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Nd(t, i, n);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = a;
                  var u = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      u.autoFocus && n.focus();
                      break;
                    case 'img':
                      u.src && (n.src = u.src);
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
                if (t.memoizedState === null) {
                  var s = t.alternate;
                  if (s !== null) {
                    var c = s.memoizedState;
                    if (c !== null) {
                      var f = c.dehydrated;
                      f !== null && ko(f);
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
                throw Error(N(163));
            }
          Pe || (t.flags & 512 && Du(t));
        } catch (h) {
          ue(t, t.return, h);
        }
      }
      if (t === e) {
        F = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (F = n);
        break;
      }
      F = t.return;
    }
  }
  function Kd(e) {
    for (; F !== null; ) {
      var t = F;
      if (t === e) {
        F = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (F = n);
        break;
      }
      F = t.return;
    }
  }
  function Qd(e) {
    for (; F !== null; ) {
      var t = F;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Si(4, t);
            } catch (u) {
              ue(t, n, u);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (u) {
                ue(t, o, u);
              }
            }
            var l = t.return;
            try {
              Du(t);
            } catch (u) {
              ue(t, l, u);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Du(t);
            } catch (u) {
              ue(t, i, u);
            }
        }
      } catch (u) {
        ue(t, t.return, u);
      }
      if (t === e) {
        F = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        (a.return = t.return), (F = a);
        break;
      }
      F = t.return;
    }
  }
  var $y = Math.ceil,
    si = Wt.ReactCurrentDispatcher,
    vs = Wt.ReactCurrentOwner,
    lt = Wt.ReactCurrentBatchConfig,
    K = 0,
    ge = null,
    fe = null,
    xe = 0,
    Ke = 0,
    wr = En(0),
    he = 0,
    Uo = null,
    Kn = 0,
    xi = 0,
    ys = 0,
    go = null,
    ze = null,
    gs = 0,
    Or = 1 / 0,
    At = null,
    ci = !1,
    Fu = null,
    mn = null,
    Fl = !1,
    sn = null,
    di = 0,
    wo = 0,
    Mu = null,
    Vl = -1,
    Bl = 0;
  function Fe() {
    return K & 6 ? se() : Vl !== -1 ? Vl : (Vl = se());
  }
  function vn(e) {
    return e.mode & 1
      ? K & 2 && xe !== 0
        ? xe & -xe
        : Cy.transition !== null
          ? (Bl === 0 && (Bl = Sf()), Bl)
          : ((e = Y), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Lf(e.type))), e)
      : 1;
  }
  function wt(e, t, n, r) {
    if (50 < wo) throw ((wo = 0), (Mu = null), Error(N(185)));
    zo(e, n, r),
      (!(K & 2) || e !== ge) &&
        (e === ge && (!(K & 2) && (xi |= n), he === 4 && an(e, xe)),
        Ve(e, r),
        n === 1 && K === 0 && !(t.mode & 1) && ((Or = se() + 500), wi && Sn()));
  }
  function Ve(e, t) {
    var n = e.callbackNode;
    Pv(e, t);
    var r = Jl(e, e === ge ? xe : 0);
    if (r === 0) n !== null && ed(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ed(n), t === 1))
        e.tag === 0 ? ky(Yd.bind(null, e)) : Jf(Yd.bind(null, e)),
          Ey(function () {
            !(K & 6) && Sn();
          }),
          (n = null);
      else {
        switch (xf(r)) {
          case 1:
            n = Wu;
            break;
          case 4:
            n = Rf;
            break;
          case 16:
            n = Yl;
            break;
          case 536870912:
            n = Ef;
            break;
          default:
            n = Yl;
        }
        n = Yp(n, Hp.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Hp(e, t) {
    if (((Vl = -1), (Bl = 0), K & 6)) throw Error(N(327));
    var n = e.callbackNode;
    if (kr() && e.callbackNode !== n) return null;
    var r = Jl(e, e === ge ? xe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = fi(e, r);
    else {
      t = r;
      var o = K;
      K |= 2;
      var l = Bp();
      (ge !== e || xe !== t) && ((At = null), (Or = se() + 500), Hn(e, t));
      do
        try {
          Qy();
          break;
        } catch (a) {
          Vp(e, a);
        }
      while (1);
      rs(), (si.current = l), (K = o), fe !== null ? (t = 0) : ((ge = null), (xe = 0), (t = he));
    }
    if (t !== 0) {
      if ((t === 2 && ((o = au(e)), o !== 0 && ((r = o), (t = Au(e, o)))), t === 1))
        throw ((n = Uo), Hn(e, 0), an(e, r), Ve(e, se()), n);
      if (t === 6) an(e, r);
      else {
        if (
          ((o = e.current.alternate),
          !(r & 30) &&
            !Wy(o) &&
            ((t = fi(e, r)), t === 2 && ((l = au(e)), l !== 0 && ((r = l), (t = Au(e, l)))), t === 1))
        )
          throw ((n = Uo), Hn(e, 0), an(e, r), Ve(e, se()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(N(345));
          case 2:
            Un(e, ze, At);
            break;
          case 3:
            if ((an(e, r), (r & 130023424) === r && ((t = gs + 500 - se()), 10 < t))) {
              if (Jl(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & r) !== r)) {
                Fe(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = mu(Un.bind(null, e, ze, At), t);
              break;
            }
            Un(e, ze, At);
            break;
          case 4:
            if ((an(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var i = 31 - gt(r);
              (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
            }
            if (
              ((r = o),
              (r = se() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * $y(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = mu(Un.bind(null, e, ze, At), r);
              break;
            }
            Un(e, ze, At);
            break;
          case 5:
            Un(e, ze, At);
            break;
          default:
            throw Error(N(329));
        }
      }
    }
    return Ve(e, se()), e.callbackNode === n ? Hp.bind(null, e) : null;
  }
  function Au(e, t) {
    var n = go;
    return (
      e.current.memoizedState.isDehydrated && (Hn(e, t).flags |= 256),
      (e = fi(e, t)),
      e !== 2 && ((t = ze), (ze = n), t !== null && Uu(t)),
      e
    );
  }
  function Uu(e) {
    ze === null ? (ze = e) : ze.push.apply(ze, e);
  }
  function Wy(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              l = o.getSnapshot;
            o = o.value;
            try {
              if (!Rt(l(), o)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function an(e, t) {
    for (t &= ~ys, t &= ~xi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - gt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Yd(e) {
    if (K & 6) throw Error(N(327));
    kr();
    var t = Jl(e, 0);
    if (!(t & 1)) return Ve(e, se()), null;
    var n = fi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = au(e);
      r !== 0 && ((t = r), (n = Au(e, r)));
    }
    if (n === 1) throw ((n = Uo), Hn(e, 0), an(e, t), Ve(e, se()), n);
    if (n === 6) throw Error(N(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Un(e, ze, At), Ve(e, se()), null;
  }
  function ws(e, t) {
    var n = K;
    K |= 1;
    try {
      return e(t);
    } finally {
      (K = n), K === 0 && ((Or = se() + 500), wi && Sn());
    }
  }
  function Qn(e) {
    sn !== null && sn.tag === 0 && !(K & 6) && kr();
    var t = K;
    K |= 1;
    var n = lt.transition,
      r = Y;
    try {
      if (((lt.transition = null), (Y = 1), e)) return e();
    } finally {
      (Y = r), (lt.transition = n), (K = t), !(K & 6) && Sn();
    }
  }
  function Rs() {
    (Ke = wr.current), ee(wr);
  }
  function Hn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Ry(n)), fe !== null))
      for (n = fe.return; n !== null; ) {
        var r = n;
        switch ((es(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && ql();
            break;
          case 3:
            Dr(), ee(je), ee(Le), ss();
            break;
          case 5:
            us(r);
            break;
          case 4:
            Dr();
            break;
          case 13:
            ee(oe);
            break;
          case 19:
            ee(oe);
            break;
          case 10:
            os(r.type._context);
            break;
          case 22:
          case 23:
            Rs();
        }
        n = n.return;
      }
    if (
      ((ge = e),
      (fe = e = yn(e.current, null)),
      (xe = Ke = t),
      (he = 0),
      (Uo = null),
      (ys = xi = Kn = 0),
      (ze = go = null),
      In !== null)
    ) {
      for (t = 0; t < In.length; t++)
        if (((n = In[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var o = r.next,
            l = n.pending;
          if (l !== null) {
            var i = l.next;
            (l.next = o), (r.next = i);
          }
          n.pending = r;
        }
      In = null;
    }
    return e;
  }
  function Vp(e, t) {
    do {
      var n = fe;
      try {
        if ((rs(), (Il.current = ui), ai)) {
          for (var r = le.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), (r = r.next);
          }
          ai = !1;
        }
        if (
          ((Wn = 0), (ye = pe = le = null), (vo = !1), (Fo = 0), (vs.current = null), n === null || n.return === null)
        ) {
          (he = 1), (Uo = t), (fe = null);
          break;
        }
        e: {
          var l = e,
            i = n.return,
            a = n,
            u = t;
          if (((t = xe), (a.flags |= 32768), u !== null && typeof u == 'object' && typeof u.then == 'function')) {
            var s = u,
              c = a,
              f = c.tag;
            if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var h = c.alternate;
              h
                ? ((c.updateQueue = h.updateQueue), (c.memoizedState = h.memoizedState), (c.lanes = h.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
            }
            var g = Md(i);
            if (g !== null) {
              (g.flags &= -257), Ad(g, i, a, l, t), g.mode & 1 && Fd(l, s, t), (t = g), (u = s);
              var R = t.updateQueue;
              if (R === null) {
                var E = new Set();
                E.add(u), (t.updateQueue = E);
              } else R.add(u);
              break e;
            } else {
              if (!(t & 1)) {
                Fd(l, s, t), Es();
                break e;
              }
              u = Error(N(426));
            }
          } else if (te && a.mode & 1) {
            var x = Md(i);
            if (x !== null) {
              !(x.flags & 65536) && (x.flags |= 256), Ad(x, i, a, l, t), ts(Tr(u, a));
              break e;
            }
          }
          (l = u = Tr(u, a)), he !== 4 && (he = 2), go === null ? (go = [l]) : go.push(l), (l = i);
          do {
            switch (l.tag) {
              case 3:
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var p = _p(l, u, t);
                Cd(l, p);
                break e;
              case 1:
                a = u;
                var d = l.type,
                  m = l.stateNode;
                if (
                  !(l.flags & 128) &&
                  (typeof d.getDerivedStateFromError == 'function' ||
                    (m !== null && typeof m.componentDidCatch == 'function' && (mn === null || !mn.has(m))))
                ) {
                  (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                  var S = kp(l, a, t);
                  Cd(l, S);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        Wp(n);
      } catch (k) {
        (t = k), fe === n && n !== null && (fe = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Bp() {
    var e = si.current;
    return (si.current = ui), e === null ? ui : e;
  }
  function Es() {
    (he === 0 || he === 3 || he === 2) && (he = 4),
      ge === null || (!(Kn & 268435455) && !(xi & 268435455)) || an(ge, xe);
  }
  function fi(e, t) {
    var n = K;
    K |= 2;
    var r = Bp();
    (ge !== e || xe !== t) && ((At = null), Hn(e, t));
    do
      try {
        Ky();
        break;
      } catch (o) {
        Vp(e, o);
      }
    while (1);
    if ((rs(), (K = n), (si.current = r), fe !== null)) throw Error(N(261));
    return (ge = null), (xe = 0), he;
  }
  function Ky() {
    for (; fe !== null; ) $p(fe);
  }
  function Qy() {
    for (; fe !== null && !wv(); ) $p(fe);
  }
  function $p(e) {
    var t = Qp(e.alternate, e, Ke);
    (e.memoizedProps = e.pendingProps), t === null ? Wp(e) : (fe = t), (vs.current = null);
  }
  function Wp(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = jy(n, t)), n !== null)) {
          (n.flags &= 32767), (fe = n);
          return;
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (he = 6), (fe = null);
          return;
        }
      } else if (((n = Iy(n, t, Ke)), n !== null)) {
        fe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        fe = t;
        return;
      }
      fe = t = e;
    } while (t !== null);
    he === 0 && (he = 5);
  }
  function Un(e, t, n) {
    var r = Y,
      o = lt.transition;
    try {
      (lt.transition = null), (Y = 1), Yy(e, t, n, r);
    } finally {
      (lt.transition = o), (Y = r);
    }
    return null;
  }
  function Yy(e, t, n, r) {
    do kr();
    while (sn !== null);
    if (K & 6) throw Error(N(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(N(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var l = n.lanes | n.childLanes;
    if (
      (Lv(e, l),
      e === ge && ((fe = ge = null), (xe = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Fl ||
        ((Fl = !0),
        Yp(Yl, function () {
          return kr(), null;
        })),
      (l = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || l)
    ) {
      (l = lt.transition), (lt.transition = null);
      var i = Y;
      Y = 1;
      var a = K;
      (K |= 4),
        (vs.current = null),
        Vy(e, n),
        Ip(n, e),
        my(pu),
        (Xl = !!fu),
        (pu = fu = null),
        (e.current = n),
        By(n, e, o),
        Rv(),
        (K = a),
        (Y = i),
        (lt.transition = l);
    } else e.current = n;
    if (
      (Fl && ((Fl = !1), (sn = e), (di = o)),
      (l = e.pendingLanes),
      l === 0 && (mn = null),
      xv(n.stateNode, r),
      Ve(e, se()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (ci) throw ((ci = !1), (e = Fu), (Fu = null), e);
    return (
      di & 1 && e.tag !== 0 && kr(),
      (l = e.pendingLanes),
      l & 1 ? (e === Mu ? wo++ : ((wo = 0), (Mu = e))) : (wo = 0),
      Sn(),
      null
    );
  }
  function kr() {
    if (sn !== null) {
      var e = xf(di),
        t = lt.transition,
        n = Y;
      try {
        if (((lt.transition = null), (Y = 16 > e ? 16 : e), sn === null)) var r = !1;
        else {
          if (((e = sn), (sn = null), (di = 0), K & 6)) throw Error(N(331));
          var o = K;
          for (K |= 4, F = e.current; F !== null; ) {
            var l = F,
              i = l.child;
            if (F.flags & 16) {
              var a = l.deletions;
              if (a !== null) {
                for (var u = 0; u < a.length; u++) {
                  var s = a[u];
                  for (F = s; F !== null; ) {
                    var c = F;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yo(8, c, l);
                    }
                    var f = c.child;
                    if (f !== null) (f.return = c), (F = f);
                    else
                      for (; F !== null; ) {
                        c = F;
                        var h = c.sibling,
                          g = c.return;
                        if ((Ap(c), c === s)) {
                          F = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = g), (F = h);
                          break;
                        }
                        F = g;
                      }
                  }
                }
                var R = l.alternate;
                if (R !== null) {
                  var E = R.child;
                  if (E !== null) {
                    R.child = null;
                    do {
                      var x = E.sibling;
                      (E.sibling = null), (E = x);
                    } while (E !== null);
                  }
                }
                F = l;
              }
            }
            if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (F = i);
            else
              e: for (; F !== null; ) {
                if (((l = F), l.flags & 2048))
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yo(9, l, l.return);
                  }
                var p = l.sibling;
                if (p !== null) {
                  (p.return = l.return), (F = p);
                  break e;
                }
                F = l.return;
              }
          }
          var d = e.current;
          for (F = d; F !== null; ) {
            i = F;
            var m = i.child;
            if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (F = m);
            else
              e: for (i = d; F !== null; ) {
                if (((a = F), a.flags & 2048))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Si(9, a);
                    }
                  } catch (k) {
                    ue(a, a.return, k);
                  }
                if (a === i) {
                  F = null;
                  break e;
                }
                var S = a.sibling;
                if (S !== null) {
                  (S.return = a.return), (F = S);
                  break e;
                }
                F = a.return;
              }
          }
          if (((K = o), Sn(), Pt && typeof Pt.onPostCommitFiberRoot == 'function'))
            try {
              Pt.onPostCommitFiberRoot(hi, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (Y = n), (lt.transition = t);
      }
    }
    return !1;
  }
  function Jd(e, t, n) {
    (t = Tr(n, t)), (t = _p(e, t, 1)), (e = hn(e, t, 1)), (t = Fe()), e !== null && (zo(e, 1, t), Ve(e, t));
  }
  function ue(e, t, n) {
    if (e.tag === 3) Jd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Jd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (mn === null || !mn.has(r)))
          ) {
            (e = Tr(n, e)), (e = kp(t, e, 1)), (t = hn(t, e, 1)), (e = Fe()), t !== null && (zo(t, 1, e), Ve(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Jy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Fe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ge === e &&
        (xe & n) === n &&
        (he === 4 || (he === 3 && (xe & 130023424) === xe && 500 > se() - gs) ? Hn(e, 0) : (ys |= n)),
      Ve(e, t);
  }
  function Kp(e, t) {
    t === 0 && (e.mode & 1 ? ((t = wl), (wl <<= 1), !(wl & 130023424) && (wl = 4194304)) : (t = 1));
    var n = Fe();
    (e = Bt(e, t)), e !== null && (zo(e, t, n), Ve(e, n));
  }
  function Xy(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Kp(e, n);
  }
  function Gy(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(N(314));
    }
    r !== null && r.delete(t), Kp(e, n);
  }
  var Qp;
  Qp = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || je.current) Ie = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Ie = !1), zy(e, t, n);
        Ie = !!(e.flags & 131072);
      }
    else (Ie = !1), te && t.flags & 1048576 && Xf(t, ni, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Hl(e, t), (e = t.pendingProps);
        var o = Nr(t, Le.current);
        _r(t, n), (o = ds(null, t, r, e, o, n));
        var l = fs();
        return (
          (t.flags |= 1),
          typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              He(r) ? ((l = !0), ei(t)) : (l = !1),
              (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
              is(t),
              (o.updater = Ri),
              (t.stateNode = o),
              (o._reactInternals = t),
              Su(t, r, e, n),
              (t = ku(null, t, r, !0, l, n)))
            : ((t.tag = 0), te && l && qu(t), Oe(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Hl(e, t),
            (e = t.pendingProps),
            (o = r._init),
            (r = o(r._payload)),
            (t.type = r),
            (o = t.tag = by(r)),
            (e = mt(r, e)),
            o)
          ) {
            case 0:
              t = _u(null, t, r, e, n);
              break e;
            case 1:
              t = Id(null, t, r, e, n);
              break e;
            case 11:
              t = Ud(null, t, r, e, n);
              break e;
            case 14:
              t = zd(null, t, r, mt(r.type, e), n);
              break e;
          }
          throw Error(N(306, r, ''));
        }
        return t;
      case 0:
        return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : mt(r, o)), _u(e, t, r, o, n);
      case 1:
        return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : mt(r, o)), Id(e, t, r, o, n);
      case 3:
        e: {
          if ((Lp(t), e === null)) throw Error(N(387));
          (r = t.pendingProps), (l = t.memoizedState), (o = l.element), qf(e, t), li(t, r, null, n);
          var i = t.memoizedState;
          if (((r = i.element), l.isDehydrated))
            if (
              ((l = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = l),
              (t.memoizedState = l),
              t.flags & 256)
            ) {
              (o = Tr(Error(N(423)), t)), (t = jd(e, t, r, n, o));
              break e;
            } else if (r !== o) {
              (o = Tr(Error(N(424)), t)), (t = jd(e, t, r, n, o));
              break e;
            } else
              for (
                Qe = pn(t.stateNode.containerInfo.firstChild),
                  Ye = t,
                  te = !0,
                  yt = null,
                  n = rp(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Pr(), r === o)) {
              t = $t(e, t, n);
              break e;
            }
            Oe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          op(t),
          e === null && wu(t),
          (r = t.type),
          (o = t.pendingProps),
          (l = e !== null ? e.memoizedProps : null),
          (i = o.children),
          hu(r, o) ? (i = null) : l !== null && hu(r, l) && (t.flags |= 32),
          Pp(e, t),
          Oe(e, t, i, n),
          t.child
        );
      case 6:
        return e === null && wu(t), null;
      case 13:
        return Dp(e, t, n);
      case 4:
        return (
          as(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Lr(t, null, r, n)) : Oe(e, t, r, n),
          t.child
        );
      case 11:
        return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : mt(r, o)), Ud(e, t, r, o, n);
      case 7:
        return Oe(e, t, t.pendingProps, n), t.child;
      case 8:
        return Oe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Oe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (l = t.memoizedProps),
            (i = o.value),
            Z(ri, r._currentValue),
            (r._currentValue = i),
            l !== null)
          )
            if (Rt(l.value, i)) {
              if (l.children === o.children && !je.current) {
                t = $t(e, t, n);
                break e;
              }
            } else
              for (l = t.child, l !== null && (l.return = t); l !== null; ) {
                var a = l.dependencies;
                if (a !== null) {
                  i = l.child;
                  for (var u = a.firstContext; u !== null; ) {
                    if (u.context === r) {
                      if (l.tag === 1) {
                        (u = jt(-1, n & -n)), (u.tag = 2);
                        var s = l.updateQueue;
                        if (s !== null) {
                          s = s.shared;
                          var c = s.pending;
                          c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)), (s.pending = u);
                        }
                      }
                      (l.lanes |= n),
                        (u = l.alternate),
                        u !== null && (u.lanes |= n),
                        Ru(l.return, n, t),
                        (a.lanes |= n);
                      break;
                    }
                    u = u.next;
                  }
                } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                else if (l.tag === 18) {
                  if (((i = l.return), i === null)) throw Error(N(341));
                  (i.lanes |= n), (a = i.alternate), a !== null && (a.lanes |= n), Ru(i, n, t), (i = l.sibling);
                } else i = l.child;
                if (i !== null) i.return = l;
                else
                  for (i = l; i !== null; ) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((l = i.sibling), l !== null)) {
                      (l.return = i.return), (i = l);
                      break;
                    }
                    i = i.return;
                  }
                l = i;
              }
          Oe(e, t, o.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          _r(t, n),
          (o = it(o)),
          (r = r(o)),
          (t.flags |= 1),
          Oe(e, t, r, n),
          t.child
        );
      case 14:
        return (r = t.type), (o = mt(r, t.pendingProps)), (o = mt(r.type, o)), zd(e, t, r, o, n);
      case 15:
        return Cp(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : mt(r, o)),
          Hl(e, t),
          (t.tag = 1),
          He(r) ? ((e = !0), ei(t)) : (e = !1),
          _r(t, n),
          tp(t, r, o),
          Su(t, r, o, n),
          ku(null, t, r, !0, e, n)
        );
      case 19:
        return Tp(e, t, n);
      case 22:
        return Np(e, t, n);
    }
    throw Error(N(156, t.tag));
  };
  function Yp(e, t) {
    return wf(e, t);
  }
  function Zy(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ot(e, t, n, r) {
    return new Zy(e, t, n, r);
  }
  function Ss(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function by(e) {
    if (typeof e == 'function') return Ss(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Vu)) return 11;
      if (e === Bu) return 14;
    }
    return 2;
  }
  function yn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ot(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function $l(e, t, n, r, o, l) {
    var i = 2;
    if (((r = e), typeof e == 'function')) Ss(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case sr:
          return Vn(n.children, o, l, t);
        case Hu:
          (i = 8), (o |= 8);
          break;
        case Qa:
          return (e = ot(12, n, t, o | 2)), (e.elementType = Qa), (e.lanes = l), e;
        case Ya:
          return (e = ot(13, n, t, o)), (e.elementType = Ya), (e.lanes = l), e;
        case Ja:
          return (e = ot(19, n, t, o)), (e.elementType = Ja), (e.lanes = l), e;
        case tf:
          return _i(n, o, l, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case qd:
                i = 10;
                break e;
              case ef:
                i = 9;
                break e;
              case Vu:
                i = 11;
                break e;
              case Bu:
                i = 14;
                break e;
              case rn:
                (i = 16), (r = null);
                break e;
            }
          throw Error(N(130, e == null ? e : typeof e, ''));
      }
    return (t = ot(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t;
  }
  function Vn(e, t, n, r) {
    return (e = ot(7, e, r, t)), (e.lanes = n), e;
  }
  function _i(e, t, n, r) {
    return (e = ot(22, e, r, t)), (e.elementType = tf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
  }
  function $a(e, t, n) {
    return (e = ot(6, e, null, t)), (e.lanes = n), e;
  }
  function Wa(e, t, n) {
    return (
      (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
      t
    );
  }
  function qy(e, t, n, r, o) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Na(0)),
      (this.expirationTimes = Na(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Na(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
  }
  function xs(e, t, n, r, o, l, i, a, u) {
    return (
      (e = new qy(e, t, n, a, u)),
      t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
      (l = ot(3, null, null, t)),
      (e.current = l),
      (l.stateNode = e),
      (l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      is(l),
      e
    );
  }
  function eg(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ur, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
  }
  function Jp(e) {
    if (!e) return wn;
    e = e._reactInternals;
    e: {
      if (Jn(e) !== e || e.tag !== 1) throw Error(N(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (He(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(N(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (He(n)) return Yf(e, n, t);
    }
    return t;
  }
  function Xp(e, t, n, r, o, l, i, a, u) {
    return (
      (e = xs(n, r, !0, e, o, l, i, a, u)),
      (e.context = Jp(null)),
      (n = e.current),
      (r = Fe()),
      (o = vn(n)),
      (l = jt(r, o)),
      (l.callback = t ?? null),
      hn(n, l, o),
      (e.current.lanes = o),
      zo(e, o, r),
      Ve(e, r),
      e
    );
  }
  function ki(e, t, n, r) {
    var o = t.current,
      l = Fe(),
      i = vn(o);
    return (
      (n = Jp(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = jt(l, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = hn(o, t, i)),
      e !== null && (wt(e, o, i, l), zl(e, o, i)),
      i
    );
  }
  function pi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Xd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function _s(e, t) {
    Xd(e, t), (e = e.alternate) && Xd(e, t);
  }
  function tg() {
    return null;
  }
  var Gp =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ks(e) {
    this._internalRoot = e;
  }
  Ci.prototype.render = ks.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(N(409));
    ki(e, t, null, null);
  };
  Ci.prototype.unmount = ks.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Qn(function () {
        ki(null, e, null, null);
      }),
        (t[Vt] = null);
    }
  };
  function Ci(e) {
    this._internalRoot = e;
  }
  Ci.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Cf();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++);
      ln.splice(n, 0, e), n === 0 && Pf(e);
    }
  };
  function Cs(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ni(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Gd() {}
  function ng(e, t, n, r, o) {
    if (o) {
      if (typeof r == 'function') {
        var l = r;
        r = function () {
          var s = pi(i);
          l.call(s);
        };
      }
      var i = Xp(t, r, e, 0, null, !1, !1, '', Gd);
      return (e._reactRootContainer = i), (e[Vt] = i.current), Po(e.nodeType === 8 ? e.parentNode : e), Qn(), i;
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == 'function') {
      var a = r;
      r = function () {
        var s = pi(u);
        a.call(s);
      };
    }
    var u = xs(e, 0, !1, null, null, !1, !1, '', Gd);
    return (
      (e._reactRootContainer = u),
      (e[Vt] = u.current),
      Po(e.nodeType === 8 ? e.parentNode : e),
      Qn(function () {
        ki(t, u, n, r);
      }),
      u
    );
  }
  function Pi(e, t, n, r, o) {
    var l = n._reactRootContainer;
    if (l) {
      var i = l;
      if (typeof o == 'function') {
        var a = o;
        o = function () {
          var u = pi(i);
          a.call(u);
        };
      }
      ki(t, i, e, o);
    } else i = ng(n, t, e, o, r);
    return pi(i);
  }
  _f = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = uo(t.pendingLanes);
          n !== 0 && (Ku(t, n | 1), Ve(t, se()), !(K & 6) && ((Or = se() + 500), Sn()));
        }
        break;
      case 13:
        Qn(function () {
          var r = Bt(e, 1);
          if (r !== null) {
            var o = Fe();
            wt(r, e, 1, o);
          }
        }),
          _s(e, 1);
    }
  };
  Qu = function (e) {
    if (e.tag === 13) {
      var t = Bt(e, 134217728);
      if (t !== null) {
        var n = Fe();
        wt(t, e, 134217728, n);
      }
      _s(e, 134217728);
    }
  };
  kf = function (e) {
    if (e.tag === 13) {
      var t = vn(e),
        n = Bt(e, t);
      if (n !== null) {
        var r = Fe();
        wt(n, e, t, r);
      }
      _s(e, t);
    }
  };
  Cf = function () {
    return Y;
  };
  Nf = function (e, t) {
    var n = Y;
    try {
      return (Y = e), t();
    } finally {
      Y = n;
    }
  };
  ou = function (e, t, n) {
    switch (t) {
      case 'input':
        if ((Za(e, n), (t = n.name), n.type === 'radio' && t != null)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = gi(r);
              if (!o) throw Error(N(90));
              rf(r), Za(r, o);
            }
          }
        }
        break;
      case 'textarea':
        lf(e, n);
        break;
      case 'select':
        (t = n.value), t != null && Rr(e, !!n.multiple, t, !1);
    }
  };
  pf = ws;
  hf = Qn;
  var rg = { usingClientEntryPoint: !1, Events: [jo, pr, gi, df, ff, ws] },
    oo = { findFiberByHostInstance: zn, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
    og = {
      bundleType: oo.bundleType,
      version: oo.version,
      rendererPackageName: oo.rendererPackageName,
      rendererConfig: oo.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Wt.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = yf(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: oo.findFiberByHostInstance || tg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    };
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
    ((lo = __REACT_DEVTOOLS_GLOBAL_HOOK__), !lo.isDisabled && lo.supportsFiber)
  )
    try {
      (hi = lo.inject(og)), (Pt = lo);
    } catch {}
  var lo;
  Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rg;
  Ge.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Cs(t)) throw Error(N(200));
    return eg(e, t, null, n);
  };
  Ge.createRoot = function (e, t) {
    if (!Cs(e)) throw Error(N(299));
    var n = !1,
      r = '',
      o = Gp;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
      (t = xs(e, 1, !1, null, null, n, !1, r, o)),
      (e[Vt] = t.current),
      Po(e.nodeType === 8 ? e.parentNode : e),
      new ks(t)
    );
  };
  Ge.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function' ? Error(N(188)) : ((e = Object.keys(e).join(',')), Error(N(268, e)));
    return (e = yf(t)), (e = e === null ? null : e.stateNode), e;
  };
  Ge.flushSync = function (e) {
    return Qn(e);
  };
  Ge.hydrate = function (e, t, n) {
    if (!Ni(t)) throw Error(N(200));
    return Pi(null, e, t, !0, n);
  };
  Ge.hydrateRoot = function (e, t, n) {
    if (!Cs(e)) throw Error(N(405));
    var r = (n != null && n.hydratedSources) || null,
      o = !1,
      l = '',
      i = Gp;
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (o = !0),
        n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
      (t = Xp(t, null, e, 1, n ?? null, o, !1, l, i)),
      (e[Vt] = t.current),
      Po(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (n = r[e]),
          (o = n._getVersion),
          (o = o(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, o])
            : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ci(t);
  };
  Ge.render = function (e, t, n) {
    if (!Ni(t)) throw Error(N(200));
    return Pi(null, e, t, !1, n);
  };
  Ge.unmountComponentAtNode = function (e) {
    if (!Ni(e)) throw Error(N(40));
    return e._reactRootContainer
      ? (Qn(function () {
          Pi(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[Vt] = null);
          });
        }),
        !0)
      : !1;
  };
  Ge.unstable_batchedUpdates = ws;
  Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Ni(n)) throw Error(N(200));
    if (e == null || e._reactInternals === void 0) throw Error(N(38));
    return Pi(e, t, n, !1, r);
  };
  Ge.version = '18.2.0-next-9e3b772b8-20220608';
});
var eh = qo((m0, qp) => {
  'use strict';
  function bp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bp);
      } catch (e) {
        console.error(e);
      }
  }
  bp(), (qp.exports = Zp());
});
function Bo() {
  return (
    (Bo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bo.apply(this, arguments)
  );
}
function lh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++) (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Rg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Eg(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Rg(e);
}
function Lg(e) {
  th ? th(e) : e();
}
function Vo(e) {
  nh ? nh(e) : e();
}
function ah(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, l] = U.useState(n.state),
    [i, a] = U.useState(),
    [u, s] = U.useState({ isTransitioning: !1 }),
    [c, f] = U.useState(),
    [h, g] = U.useState(),
    [R, E] = U.useState(),
    x = U.useRef(new Map()),
    { v7_startTransition: p } = r || {},
    d = U.useCallback(
      (_) => {
        p ? Lg(_) : _();
      },
      [p],
    ),
    m = U.useCallback(
      (_, P) => {
        let { deletedFetchers: O, unstable_flushSync: A, unstable_viewTransitionOpts: W } = P;
        O.forEach((ne) => x.current.delete(ne)),
          _.fetchers.forEach((ne, Be) => {
            ne.data !== void 0 && x.current.set(Be, ne.data);
          });
        let Re = n.window == null || typeof n.window.document.startViewTransition != 'function';
        if (!W || Re) {
          A ? Vo(() => l(_)) : d(() => l(_));
          return;
        }
        if (A) {
          Vo(() => {
            h && (c && c.resolve(), h.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: W.currentLocation,
                nextLocation: W.nextLocation,
              });
          });
          let ne = n.window.document.startViewTransition(() => {
            Vo(() => l(_));
          });
          ne.finished.finally(() => {
            Vo(() => {
              f(void 0), g(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            Vo(() => g(ne));
          return;
        }
        h
          ? (c && c.resolve(),
            h.skipTransition(),
            E({ state: _, currentLocation: W.currentLocation, nextLocation: W.nextLocation }))
          : (a(_),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: W.currentLocation,
              nextLocation: W.nextLocation,
            }));
      },
      [n.window, h, c, x, d],
    );
  U.useLayoutEffect(() => n.subscribe(m), [n, m]),
    U.useEffect(() => {
      u.isTransitioning && !u.flushSync && f(new Ns());
    }, [u]),
    U.useEffect(() => {
      if (c && i && n.window) {
        let _ = i,
          P = c.promise,
          O = n.window.document.startViewTransition(async () => {
            d(() => l(_)), await P;
          });
        O.finished.finally(() => {
          f(void 0), g(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          g(O);
      }
    }, [d, i, c, n.window]),
    U.useEffect(() => {
      c && i && o.location.key === i.location.key && c.resolve();
    }, [c, h, o.location, i]),
    U.useEffect(() => {
      !u.isTransitioning &&
        R &&
        (a(R.state),
        s({ isTransitioning: !0, flushSync: !1, currentLocation: R.currentLocation, nextLocation: R.nextLocation }),
        E(void 0));
    }, [u.isTransitioning, R]),
    U.useEffect(() => {}, []);
  let S = U.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (_) => n.navigate(_),
        push: (_, P, O) => n.navigate(_, { state: P, preventScrollReset: O?.preventScrollReset }),
        replace: (_, P, O) => n.navigate(_, { replace: !0, state: P, preventScrollReset: O?.preventScrollReset }),
      }),
      [n],
    ),
    k = n.basename || '/',
    v = U.useMemo(() => ({ router: n, navigator: S, static: !1, basename: k }), [n, S, k]);
  return U.createElement(
    U.Fragment,
    null,
    U.createElement(
      Mt.Provider,
      { value: v },
      U.createElement(
        en.Provider,
        { value: o },
        U.createElement(
          kg.Provider,
          { value: x.current },
          U.createElement(
            ih.Provider,
            { value: u },
            U.createElement(
              da,
              {
                basename: k,
                location: o.location,
                navigationType: o.historyAction,
                navigator: S,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              o.initialized || n.future.v7_partialHydration
                ? U.createElement(Dg, { routes: n.routes, future: n.future, state: o })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function Dg(e) {
  let { routes: t, future: n, state: r } = e;
  return Lc(t, void 0, r, n);
}
function sh(e) {
  let t = U.useContext(Mt);
  return t || H(!1), t;
}
function Fg(e) {
  let t = U.useContext(en);
  return t || H(!1), t;
}
function ch(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: l,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = al(),
    s = Ue(),
    c = Fn(e, { relative: i });
  return U.useCallback(
    (f) => {
      if (Eg(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : dt(s) === dt(c);
        u(e, { replace: h, state: o, preventScrollReset: l, relative: i, unstable_viewTransition: a });
      }
    },
    [s, u, c, r, o, n, e, l, i, a],
  );
}
function dh(e) {
  let { getKey: t, storageKey: n } = e === void 0 ? {} : e,
    { router: r } = sh(Di.UseScrollRestoration),
    { restoreScrollPosition: o, preventScrollReset: l } = Fg(Ps.UseScrollRestoration),
    { basename: i } = U.useContext(ft),
    a = Ue(),
    u = lr(),
    s = or();
  U.useEffect(
    () => (
      (window.history.scrollRestoration = 'manual'),
      () => {
        window.history.scrollRestoration = 'auto';
      }
    ),
    [],
  ),
    Mg(
      U.useCallback(() => {
        if (s.state === 'idle') {
          let c = (t ? t(a, u) : null) || a.key;
          Li[c] = window.scrollY;
        }
        try {
          sessionStorage.setItem(n || rh, JSON.stringify(Li));
        } catch {}
        window.history.scrollRestoration = 'auto';
      }, [n, t, s.state, a, u]),
    ),
    typeof document < 'u' &&
      (U.useLayoutEffect(() => {
        try {
          let c = sessionStorage.getItem(n || rh);
          c && (Li = JSON.parse(c));
        } catch {}
      }, [n]),
      U.useLayoutEffect(() => {
        let c = t && i !== '/' ? (h, g) => t(Bo({}, h, { pathname: qe(h.pathname, i) || h.pathname }), g) : t,
          f = r?.enableScrollRestoration(Li, () => window.scrollY, c);
        return () => f && f();
      }, [r, i, t]),
      U.useLayoutEffect(() => {
        if (o !== !1) {
          if (typeof o == 'number') {
            window.scrollTo(0, o);
            return;
          }
          if (a.hash) {
            let c = document.getElementById(decodeURIComponent(a.hash.slice(1)));
            if (c) {
              c.scrollIntoView();
              return;
            }
          }
          l !== !0 && window.scrollTo(0, 0);
        }
      }, [a, o, l]));
}
function Mg(e, t) {
  let { capture: n } = t || {};
  U.useEffect(() => {
    let r = n != null ? { capture: n } : void 0;
    return (
      window.addEventListener('pagehide', e, r),
      () => {
        window.removeEventListener('pagehide', e, r);
      }
    );
  }, [e, n]);
}
function fh(e, t) {
  t === void 0 && (t = {});
  let n = U.useContext(ih);
  n == null && H(!1);
  let { basename: r } = sh(Di.useViewTransitionState),
    o = Fn(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let l = qe(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = qe(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Zt(o.pathname, i) != null || Zt(o.pathname, l) != null;
}
var U,
  wg,
  Sg,
  xg,
  _g,
  ih,
  kg,
  Cg,
  th,
  Ng,
  nh,
  Pg,
  S0,
  Ns,
  Tg,
  Og,
  Ds,
  uh,
  Di,
  Ps,
  rh,
  Li,
  xn = Xi(() => {
    (U = Ot(Ft())), (wg = Ot(eh()));
    sl();
    sl();
    qt();
    (Sg = [
      'onClick',
      'relative',
      'reloadDocument',
      'replace',
      'state',
      'target',
      'to',
      'preventScrollReset',
      'unstable_viewTransition',
    ]),
      (xg = [
        'aria-current',
        'caseSensitive',
        'className',
        'end',
        'style',
        'to',
        'unstable_viewTransition',
        'children',
      ]),
      (_g = '6');
    try {
      window.__reactRouterVersion = _g;
    } catch {}
    (ih = U.createContext({ isTransitioning: !1 })),
      (kg = U.createContext(new Map())),
      (Cg = 'startTransition'),
      (th = U[Cg]),
      (Ng = 'flushSync'),
      (nh = wg[Ng]),
      (Pg = 'useId'),
      (S0 = U[Pg]);
    Ns = class {
      constructor() {
        (this.status = 'pending'),
          (this.promise = new Promise((t, n) => {
            (this.resolve = (r) => {
              this.status === 'pending' && ((this.status = 'resolved'), t(r));
            }),
              (this.reject = (r) => {
                this.status === 'pending' && ((this.status = 'rejected'), n(r));
              });
          }));
      }
    };
    (Tg = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u'),
      (Og = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i),
      (Ds = U.forwardRef(function (t, n) {
        let {
            onClick: r,
            relative: o,
            reloadDocument: l,
            replace: i,
            state: a,
            target: u,
            to: s,
            preventScrollReset: c,
            unstable_viewTransition: f,
          } = t,
          h = lh(t, Sg),
          { basename: g } = U.useContext(ft),
          R,
          E = !1;
        if (typeof s == 'string' && Og.test(s) && ((R = s), Tg))
          try {
            let m = new URL(window.location.href),
              S = s.startsWith('//') ? new URL(m.protocol + s) : new URL(s),
              k = qe(S.pathname, g);
            S.origin === m.origin && k != null ? (s = k + S.search + S.hash) : (E = !0);
          } catch {}
        let x = Tn(s, { relative: o }),
          p = ch(s, {
            replace: i,
            state: a,
            target: u,
            preventScrollReset: c,
            relative: o,
            unstable_viewTransition: f,
          });
        function d(m) {
          r && r(m), m.defaultPrevented || p(m);
        }
        return U.createElement('a', Bo({}, h, { href: R || x, onClick: E || l ? r : d, ref: n, target: u }));
      })),
      (uh = U.forwardRef(function (t, n) {
        let {
            'aria-current': r = 'page',
            caseSensitive: o = !1,
            className: l = '',
            end: i = !1,
            style: a,
            to: u,
            unstable_viewTransition: s,
            children: c,
          } = t,
          f = lh(t, xg),
          h = Fn(u, { relative: f.relative }),
          g = Ue(),
          R = U.useContext(en),
          { navigator: E, basename: x } = U.useContext(ft),
          p = R != null && fh(h) && s === !0,
          d = E.encodeLocation ? E.encodeLocation(h).pathname : h.pathname,
          m = g.pathname,
          S = R && R.navigation && R.navigation.location ? R.navigation.location.pathname : null;
        o || ((m = m.toLowerCase()), (S = S ? S.toLowerCase() : null), (d = d.toLowerCase())),
          S && x && (S = qe(S, x) || S);
        let k = d !== '/' && d.endsWith('/') ? d.length - 1 : d.length,
          v = m === d || (!i && m.startsWith(d) && m.charAt(k) === '/'),
          _ = S != null && (S === d || (!i && S.startsWith(d) && S.charAt(d.length) === '/')),
          P = { isActive: v, isPending: _, isTransitioning: p },
          O = v ? r : void 0,
          A;
        typeof l == 'function'
          ? (A = l(P))
          : (A = [l, v ? 'active' : null, _ ? 'pending' : null, p ? 'transitioning' : null].filter(Boolean).join(' '));
        let W = typeof a == 'function' ? a(P) : a;
        return U.createElement(
          Ds,
          Bo({}, f, { 'aria-current': O, className: A, ref: n, style: W, to: u, unstable_viewTransition: s }),
          typeof c == 'function' ? c(P) : c,
        );
      }));
    (function (e) {
      (e.UseScrollRestoration = 'useScrollRestoration'),
        (e.UseSubmit = 'useSubmit'),
        (e.UseSubmitFetcher = 'useSubmitFetcher'),
        (e.UseFetcher = 'useFetcher'),
        (e.useViewTransitionState = 'useViewTransitionState');
    })(Di || (Di = {}));
    (function (e) {
      (e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
    })(Ps || (Ps = {}));
    (rh = 'react-router-scroll-positions'), (Li = {});
  });
qt();
var Ze = Ot(Ft());
sl();
xn();
function ce() {
  return (
    (ce = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ce.apply(this, arguments)
  );
}
var T = Ot(Ft());
xn();
function Kt(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
xn();
async function Ti(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch {
    return window.__remixContext.isSpaMode, window.location.reload(), new Promise(() => {});
  }
}
function ph(e, t, n) {
  let r = e
      .map((l) => {
        var i;
        let a = t[l.route.id],
          u = n.routes[l.route.id];
        return [
          u.css ? u.css.map((s) => ({ rel: 'stylesheet', href: s })) : [],
          (a == null || (i = a.links) === null || i === void 0 ? void 0 : i.call(a)) || [],
        ];
      })
      .flat(2),
    o = zg(e, n);
  return yh(r, o);
}
async function Ts(e, t) {
  var n, r;
  if ((!e.css && !t.links) || !jg()) return;
  let o = [
    ((n = e.css) === null || n === void 0 ? void 0 : n.map((a) => ({ rel: 'stylesheet', href: a }))) ?? [],
    ((r = t.links) === null || r === void 0 ? void 0 : r.call(t)) ?? [],
  ].flat(1);
  if (o.length === 0) return;
  let l = [];
  for (let a of o) !Fi(a) && a.rel === 'stylesheet' && l.push({ ...a, rel: 'preload', as: 'style' });
  let i = l.filter(
    (a) =>
      (!a.media || window.matchMedia(a.media).matches) &&
      !document.querySelector(`link[rel="stylesheet"][href="${a.href}"]`),
  );
  await Promise.all(i.map(Ag));
}
async function Ag(e) {
  return new Promise((t) => {
    let n = document.createElement('link');
    Object.assign(n, e);
    function r() {
      document.head.contains(n) && document.head.removeChild(n);
    }
    (n.onload = () => {
      r(), t();
    }),
      (n.onerror = () => {
        r(), t();
      }),
      document.head.appendChild(n);
  });
}
function Fi(e) {
  return e != null && typeof e.page == 'string';
}
function Ug(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' && typeof e.imageSrcSet == 'string' && typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function hh(e, t, n) {
  let r = await Promise.all(
    e.map(async (o) => {
      let l = await Ti(t.routes[o.route.id], n);
      return l.links ? l.links() : [];
    }),
  );
  return yh(
    r
      .flat(1)
      .filter(Ug)
      .filter((o) => o.rel === 'stylesheet' || o.rel === 'preload')
      .map((o) => (o.rel === 'stylesheet' ? { ...o, rel: 'prefetch', as: 'style' } : { ...o, rel: 'prefetch' })),
  );
}
function Os(e, t, n, r, o, l) {
  let i = gh(e),
    a = (c, f) => (n[f] ? c.route.id !== n[f].route.id : !0),
    u = (c, f) => {
      var h;
      return (
        n[f].pathname !== c.pathname ||
        (((h = n[f].route.path) === null || h === void 0 ? void 0 : h.endsWith('*')) &&
          n[f].params['*'] !== c.params['*'])
      );
    };
  return l === 'data' && o.search !== i.search
    ? t.filter((c, f) => {
        if (!r.routes[c.route.id].hasLoader) return !1;
        if (a(c, f) || u(c, f)) return !0;
        if (c.route.shouldRevalidate) {
          var g;
          let R = c.route.shouldRevalidate({
            currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
            currentParams: ((g = n[0]) === null || g === void 0 ? void 0 : g.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: c.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof R == 'boolean') return R;
        }
        return !0;
      })
    : t.filter((c, f) => {
        let h = r.routes[c.route.id];
        return (l === 'assets' || h.hasLoader) && (a(c, f) || u(c, f));
      });
}
function mh(e, t, n) {
  let r = gh(e);
  return Fs(
    t
      .filter((o) => n.routes[o.route.id].hasLoader)
      .map((o) => {
        let { pathname: l, search: i } = r,
          a = new URLSearchParams(i);
        return a.set('_data', o.route.id), `${l}?${a}`;
      }),
  );
}
function vh(e, t) {
  return Fs(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          o = [r.module];
        return r.imports && (o = o.concat(r.imports)), o;
      })
      .flat(1),
  );
}
function zg(e, t) {
  return Fs(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          o = [r.module];
        return r.imports && (o = o.concat(r.imports)), o;
      })
      .flat(1),
  );
}
function Fs(e) {
  return [...new Set(e)];
}
function Ig(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function yh(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((o, l) => {
    if (t && !Fi(l) && l.as === 'script' && l.href && r.has(l.href)) return o;
    let a = JSON.stringify(Ig(l));
    return n.has(a) || (n.add(a), o.push({ key: a, link: l })), o;
  }, []);
}
function gh(e) {
  let t = Te(e);
  return t.search === void 0 && (t.search = ''), t;
}
var Oi;
function jg() {
  if (Oi !== void 0) return Oi;
  let e = document.createElement('link');
  return (Oi = e.relList.supports('preload')), (e = null), Oi;
}
var Hg = { '&': '\\u0026', '>': '\\u003e', '<': '\\u003c', '\u2028': '\\u2028', '\u2029': '\\u2029' },
  Vg = /[&><\u2028\u2029]/g;
function $o(e) {
  return e.replace(Vg, (t) => Hg[t]);
}
function Ms(e) {
  return { __html: e };
}
function Rh() {
  let e = T.useContext(Mt);
  return Kt(e, 'You must render this element inside a <DataRouterContext.Provider> element'), e;
}
function Ai() {
  let e = T.useContext(en);
  return Kt(e, 'You must render this element inside a <DataRouterStateContext.Provider> element'), e;
}
var Ko = T.createContext(void 0);
Ko.displayName = 'Remix';
function Qt() {
  let e = T.useContext(Ko);
  return Kt(e, 'You must render this element inside a <Remix> element'), e;
}
function Eh(e, t) {
  let [n, r] = T.useState(!1),
    [o, l] = T.useState(!1),
    { onFocus: i, onBlur: a, onMouseEnter: u, onMouseLeave: s, onTouchStart: c } = t,
    f = T.useRef(null);
  T.useEffect(() => {
    if ((e === 'render' && l(!0), e === 'viewport')) {
      let R = (x) => {
          x.forEach((p) => {
            l(p.isIntersecting);
          });
        },
        E = new IntersectionObserver(R, { threshold: 0.5 });
      return (
        f.current && E.observe(f.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [e]);
  let h = () => {
      e === 'intent' && r(!0);
    },
    g = () => {
      e === 'intent' && (r(!1), l(!1));
    };
  return (
    T.useEffect(() => {
      if (n) {
        let R = setTimeout(() => {
          l(!0);
        }, 100);
        return () => {
          clearTimeout(R);
        };
      }
    }, [n]),
    [
      o,
      f,
      { onFocus: Wo(i, h), onBlur: Wo(a, g), onMouseEnter: Wo(u, h), onMouseLeave: Wo(s, g), onTouchStart: Wo(c, h) },
    ]
  );
}
var Sh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  xh = T.forwardRef(({ to: e, prefetch: t = 'none', ...n }, r) => {
    let o = typeof e == 'string' && Sh.test(e),
      l = Tn(e),
      [i, a, u] = Eh(t, n);
    return T.createElement(
      T.Fragment,
      null,
      T.createElement(uh, ce({}, n, u, { ref: Ch(r, a), to: e })),
      i && !o ? T.createElement(Ui, { page: l }) : null,
    );
  });
xh.displayName = 'NavLink';
var _h = T.forwardRef(({ to: e, prefetch: t = 'none', ...n }, r) => {
  let o = typeof e == 'string' && Sh.test(e),
    l = Tn(e),
    [i, a, u] = Eh(t, n);
  return T.createElement(
    T.Fragment,
    null,
    T.createElement(Ds, ce({}, n, u, { ref: Ch(r, a), to: e })),
    i && !o ? T.createElement(Ui, { page: l }) : null,
  );
});
_h.displayName = 'Link';
function Wo(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function As(e, t, n) {
  if (n && !Mi) return [e[0]];
  if (t) {
    let r = e.findIndex((o) => t[o.route.id]);
    return e.slice(0, r + 1);
  }
  return e;
}
function Bg() {
  let { isSpaMode: e, manifest: t, routeModules: n, criticalCss: r } = Qt(),
    { errors: o, matches: l } = Ai(),
    i = As(l, o, e),
    a = T.useMemo(() => ph(i, n, t), [i, n, t]);
  return T.createElement(
    T.Fragment,
    null,
    r ? T.createElement('style', { dangerouslySetInnerHTML: { __html: r } }) : null,
    a.map(({ key: u, link: s }) =>
      Fi(s) ? T.createElement(Ui, ce({ key: u }, s)) : T.createElement('link', ce({ key: u }, s)),
    ),
  );
}
function Ui({ page: e, ...t }) {
  let { router: n } = Rh(),
    r = T.useMemo(() => De(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r
    ? T.createElement(Wg, ce({ page: e, matches: r }, t))
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function $g(e) {
  let { manifest: t, routeModules: n } = Qt(),
    [r, o] = T.useState([]);
  return (
    T.useEffect(() => {
      let l = !1;
      return (
        hh(e, t, n).then((i) => {
          l || o(i);
        }),
        () => {
          l = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function Wg({ page: e, matches: t, ...n }) {
  let r = Ue(),
    { manifest: o } = Qt(),
    { matches: l } = Ai(),
    i = T.useMemo(() => Os(e, t, l, o, r, 'data'), [e, t, l, o, r]),
    a = T.useMemo(() => Os(e, t, l, o, r, 'assets'), [e, t, l, o, r]),
    u = T.useMemo(() => mh(e, i, o), [i, e, o]),
    s = T.useMemo(() => vh(a, o), [a, o]),
    c = $g(a);
  return T.createElement(
    T.Fragment,
    null,
    u.map((f) => T.createElement('link', ce({ key: f, rel: 'prefetch', as: 'fetch', href: f }, n))),
    s.map((f) => T.createElement('link', ce({ key: f, rel: 'modulepreload', href: f }, n))),
    c.map(({ key: f, link: h }) => T.createElement('link', ce({ key: f }, h))),
  );
}
function Kg() {
  let { isSpaMode: e, routeModules: t } = Qt(),
    { errors: n, matches: r, loaderData: o } = Ai(),
    l = Ue(),
    i = As(r, n, e),
    a = null;
  n && (a = n[i[i.length - 1].route.id]);
  let u = [],
    s = null,
    c = [];
  for (let f = 0; f < i.length; f++) {
    let h = i[f],
      g = h.route.id,
      R = o[g],
      E = h.params,
      x = t[g],
      p = [],
      d = { id: g, data: R, meta: [], params: h.params, pathname: h.pathname, handle: h.route.handle, error: a };
    if (
      ((c[f] = d),
      x != null && x.meta
        ? (p =
            typeof x.meta == 'function'
              ? x.meta({ data: R, params: E, location: l, matches: c, error: a })
              : Array.isArray(x.meta)
                ? [...x.meta]
                : x.meta)
        : s && (p = [...s]),
      (p = p || []),
      !Array.isArray(p))
    )
      throw new Error(
        'The route at ' +
          h.route.path +
          ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`,
      );
    (d.meta = p), (c[f] = d), (u = [...p]), (s = u);
  }
  return T.createElement(
    T.Fragment,
    null,
    u.flat().map((f) => {
      if (!f) return null;
      if ('tagName' in f) {
        let { tagName: h, ...g } = f;
        return Qg(h)
          ? T.createElement(h, ce({ key: JSON.stringify(g) }, g))
          : (console.warn(`A meta object uses an invalid tagName: ${h}. Expected either 'link' or 'meta'`), null);
      }
      if ('title' in f) return T.createElement('title', { key: 'title' }, String(f.title));
      if (('charset' in f && ((f.charSet ??= f.charset), delete f.charset), 'charSet' in f && f.charSet != null))
        return typeof f.charSet == 'string' ? T.createElement('meta', { key: 'charSet', charSet: f.charSet }) : null;
      if ('script:ld+json' in f)
        try {
          let h = JSON.stringify(f['script:ld+json']);
          return T.createElement('script', {
            key: `script:ld+json:${h}`,
            type: 'application/ld+json',
            dangerouslySetInnerHTML: { __html: h },
          });
        } catch {
          return null;
        }
      return T.createElement('meta', ce({ key: JSON.stringify(f) }, f));
    }),
  );
}
function Qg(e) {
  return typeof e == 'string' && /^(meta|link)$/.test(e);
}
function kh(e) {
  return T.createElement(fa, e);
}
var Mi = !1;
function Us(e) {
  let { manifest: t, serverHandoffString: n, abortDelay: r, serializeError: o, isSpaMode: l } = Qt(),
    { router: i, static: a, staticContext: u } = Rh(),
    { matches: s } = Ai(),
    c = or(),
    f = As(s, null, l);
  T.useEffect(() => {
    Mi = !0;
  }, []);
  let h = (k, v) => {
      let _;
      return (
        o && v instanceof Error ? (_ = o(v)) : (_ = v),
        `${JSON.stringify(k)}:__remixContext.p(!1, ${$o(JSON.stringify(_))})`
      );
    },
    g = (k, v, _) => {
      let P;
      try {
        P = JSON.stringify(_);
      } catch (O) {
        return h(v, O);
      }
      return `${JSON.stringify(v)}:__remixContext.p(${$o(P)})`;
    },
    R = (k, v, _) => {
      let P;
      return (
        o && _ instanceof Error ? (P = o(_)) : (P = _),
        `__remixContext.r(${JSON.stringify(k)}, ${JSON.stringify(v)}, !1, ${$o(JSON.stringify(P))})`
      );
    },
    E = (k, v, _) => {
      let P;
      try {
        P = JSON.stringify(_);
      } catch (O) {
        return R(k, v, O);
      }
      return `__remixContext.r(${JSON.stringify(k)}, ${JSON.stringify(v)}, ${$o(P)})`;
    },
    x = [],
    p = T.useMemo(() => {
      var k;
      let v = u ? `window.__remixContext = ${n};` : ' ',
        _ = u?.activeDeferreds;
      v += _
        ? [
            '__remixContext.p = function(v,e,p,x) {',
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            '    p=Promise.reject(x);',
            '  } else {',
            '    p=Promise.resolve(v);',
            '  }',
            '  return p;',
            '};',
            '__remixContext.n = function(i,k) {',
            '  __remixContext.t = __remixContext.t || {};',
            '  __remixContext.t[i] = __remixContext.t[i] || {};',
            '  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});',
            typeof r == 'number'
              ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${r});`
              : '',
            '  return p;',
            '};',
            '__remixContext.r = function(i,k,v,e,p,x) {',
            '  p = __remixContext.t[i][k];',
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            '    p.e(x);',
            '  } else {',
            '    p.r(v);',
            '  }',
            '};',
          ].join(`
`) +
          Object.entries(_).map(([O, A]) => {
            let W = new Set(A.pendingKeys),
              Re = A.deferredKeys.map((ne) => {
                if (W.has(ne))
                  return (
                    x.push(
                      T.createElement(wh, {
                        key: `${O} | ${ne}`,
                        deferredData: A,
                        routeId: O,
                        dataKey: ne,
                        scriptProps: e,
                        serializeData: E,
                        serializeError: R,
                      }),
                    ),
                    `${JSON.stringify(ne)}:__remixContext.n(${JSON.stringify(O)}, ${JSON.stringify(ne)})`
                  );
                {
                  let Be = A.data[ne];
                  return typeof Be._error < 'u' ? h(ne, Be._error) : g(O, ne, Be._data);
                }
              }).join(`,
`);
            return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(O)}], {${Re}});`;
          }).join(`
`) +
          (x.length > 0 ? `__remixContext.a=${x.length};` : '')
        : '';
      let P = a
        ? `${(k = t.hmr) !== null && k !== void 0 && k.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ''}import ${JSON.stringify(t.url)};
${f.map((O, A) => `import * as route${A} from ${JSON.stringify(t.routes[O.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${f.map((O, A) => `${JSON.stringify(O.route.id)}:route${A}`).join(',')}};

import(${JSON.stringify(t.entry.module)});`
        : ' ';
      return T.createElement(
        T.Fragment,
        null,
        T.createElement(
          'script',
          ce({}, e, { suppressHydrationWarning: !0, dangerouslySetInnerHTML: Ms(v), type: void 0 }),
        ),
        T.createElement(
          'script',
          ce({}, e, { suppressHydrationWarning: !0, dangerouslySetInnerHTML: Ms(P), type: 'module', async: !0 }),
        ),
      );
    }, []);
  if (!a && typeof __remixContext == 'object' && __remixContext.a)
    for (let k = 0; k < __remixContext.a; k++)
      x.push(T.createElement(wh, { key: k, scriptProps: e, serializeData: E, serializeError: R }));
  let d = T.useMemo(() => {
      if (c.location) {
        let k = De(i.routes, c.location, i.basename);
        return Kt(k, `No routes match path "${c.location.pathname}"`), k;
      }
      return [];
    }, [c.location, i.routes, i.basename]),
    m = f
      .concat(d)
      .map((k) => {
        let v = t.routes[k.route.id];
        return (v.imports || []).concat([v.module]);
      })
      .flat(1),
    S = Mi ? [] : t.entry.imports.concat(m);
  return Mi
    ? null
    : T.createElement(
        T.Fragment,
        null,
        T.createElement('link', { rel: 'modulepreload', href: t.url, crossOrigin: e.crossOrigin }),
        T.createElement('link', { rel: 'modulepreload', href: t.entry.module, crossOrigin: e.crossOrigin }),
        Jg(S).map((k) =>
          T.createElement('link', { key: k, rel: 'modulepreload', href: k, crossOrigin: e.crossOrigin }),
        ),
        p,
        x,
      );
}
function wh({ dataKey: e, deferredData: t, routeId: n, scriptProps: r, serializeData: o, serializeError: l }) {
  return (
    typeof document > 'u' &&
      t &&
      e &&
      n &&
      Kt(
        t.pendingKeys.includes(e),
        `Deferred data for route ${n} with key ${e} was not pending but tried to render a script for it.`,
      ),
    T.createElement(
      T.Suspense,
      {
        fallback:
          typeof document > 'u' && t && e && n
            ? null
            : T.createElement(
                'script',
                ce({}, r, { async: !0, suppressHydrationWarning: !0, dangerouslySetInnerHTML: { __html: ' ' } }),
              ),
      },
      typeof document > 'u' && t && e && n
        ? T.createElement(kh, {
            resolve: t.data[e],
            errorElement: T.createElement(Yg, { dataKey: e, routeId: n, scriptProps: r, serializeError: l }),
            children: (i) =>
              T.createElement(
                'script',
                ce({}, r, { async: !0, suppressHydrationWarning: !0, dangerouslySetInnerHTML: { __html: o(n, e, i) } }),
              ),
          })
        : T.createElement(
            'script',
            ce({}, r, { async: !0, suppressHydrationWarning: !0, dangerouslySetInnerHTML: { __html: ' ' } }),
          ),
    )
  );
}
function Yg({ dataKey: e, routeId: t, scriptProps: n, serializeError: r }) {
  let o = ul();
  return T.createElement(
    'script',
    ce({}, n, { suppressHydrationWarning: !0, dangerouslySetInnerHTML: { __html: r(t, e, o) } }),
  );
}
function Jg(e) {
  return [...new Set(e)];
}
function Ch(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == 'function' ? n(t) : n != null && (n.current = t);
    });
  };
}
var we = Ot(Ft());
xn();
var zi = class extends we.Component {
  constructor(t) {
    super(t), (this.state = { error: t.error || null, location: t.location });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error || null, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  render() {
    return this.state.error ? we.createElement(zs, { error: this.state.error }) : this.props.children;
  }
};
function zs({ error: e }) {
  console.error(e);
  let t = we.createElement('script', {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `,
    },
  });
  if (bt(e))
    return we.createElement(
      Ii,
      { title: 'Unhandled Thrown Response!' },
      we.createElement('h1', { style: { fontSize: '24px' } }, e.status, ' ', e.statusText),
      t,
    );
  let n;
  if (e instanceof Error) n = e;
  else {
    let r = e == null ? 'Unknown Error' : typeof e == 'object' && 'toString' in e ? e.toString() : JSON.stringify(e);
    n = new Error(r);
  }
  return we.createElement(
    Ii,
    { title: 'Application Error!' },
    we.createElement('h1', { style: { fontSize: '24px' } }, 'Application Error'),
    we.createElement(
      'pre',
      { style: { padding: '2rem', background: 'hsla(10, 50%, 50%, 0.1)', color: 'red', overflow: 'auto' } },
      n.stack,
    ),
    t,
  );
}
function Ii({ title: e, renderScripts: t, children: n }) {
  var r;
  let { routeModules: o } = Qt();
  return (r = o.root) !== null && r !== void 0 && r.Layout
    ? n
    : we.createElement(
        'html',
        { lang: 'en' },
        we.createElement(
          'head',
          null,
          we.createElement('meta', { charSet: 'utf-8' }),
          we.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,viewport-fit=cover',
          }),
          we.createElement('title', null, e),
        ),
        we.createElement(
          'body',
          null,
          we.createElement(
            'main',
            { style: { fontFamily: 'system-ui, sans-serif', padding: '2rem' } },
            n,
            t ? we.createElement(Us, null) : null,
          ),
        ),
      );
}
qt();
function Nh(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === 'RouteErrorResponse') n[r] = new ct(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === 'Error') {
      if (o.__subType) {
        let l = window[o.__subType];
        if (typeof l == 'function')
          try {
            let i = new l(o.message);
            (i.stack = o.stack), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let l = new Error(o.message);
        (l.stack = o.stack), (n[r] = l);
      }
    } else n[r] = o;
  return n;
}
var _n = Ot(Ft());
qt();
xn();
qt();
function Lh(e) {
  return e.headers.get('X-Remix-Catch') != null;
}
function Xg(e) {
  return e.headers.get('X-Remix-Error') != null;
}
function Gg(e) {
  return (
    Is(e) &&
    e.status >= 400 &&
    e.headers.get('X-Remix-Error') == null &&
    e.headers.get('X-Remix-Catch') == null &&
    e.headers.get('X-Remix-Response') == null
  );
}
function Dh(e) {
  return e.headers.get('X-Remix-Redirect') != null;
}
function Th(e) {
  var t;
  return !!((t = e.headers.get('Content-Type')) !== null && t !== void 0 && t.match(/text\/remix-deferred/));
}
function Is(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function Oh(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
async function js(e, t, n = 0) {
  let r = new URL(e.url);
  r.searchParams.set('_data', t);
  let o = { signal: e.signal };
  if (e.method !== 'GET') {
    o.method = e.method;
    let a = e.headers.get('Content-Type');
    a && /\bapplication\/json\b/.test(a)
      ? ((o.headers = { 'Content-Type': a }), (o.body = JSON.stringify(await e.json())))
      : a && /\btext\/plain\b/.test(a)
        ? ((o.headers = { 'Content-Type': a }), (o.body = await e.text()))
        : a && /\bapplication\/x-www-form-urlencoded\b/.test(a)
          ? (o.body = new URLSearchParams(await e.text()))
          : (o.body = await e.formData());
  }
  n > 0 && (await new Promise((a) => setTimeout(a, 5 ** n * 10)));
  let l = window.__remixRevalidation,
    i = await fetch(r.href, o).catch((a) => {
      if (typeof l == 'number' && l === window.__remixRevalidation && a?.name === 'TypeError' && n < 3)
        return js(e, t, n + 1);
      throw a;
    });
  if (Xg(i)) {
    let a = await i.json(),
      u = new Error(a.message);
    return (u.stack = a.stack), u;
  }
  if (Gg(i)) {
    let a = await i.text(),
      u = new Error(a);
    return (u.stack = void 0), u;
  }
  return i;
}
var Zg = '__deferred_promise:';
async function Fh(e) {
  if (!e) throw new Error('parseDeferredReadableStream requires stream argument');
  let t,
    n = {};
  try {
    let r = bg(e),
      l = (await r.next()).value;
    if (!l) throw new Error('no critical data');
    let i = JSON.parse(l);
    if (typeof i == 'object' && i !== null)
      for (let [a, u] of Object.entries(i))
        typeof u != 'string' ||
          !u.startsWith(Zg) ||
          ((t = t || {}),
          (t[a] = new Promise((s, c) => {
            n[a] = {
              resolve: (f) => {
                s(f), delete n[a];
              },
              reject: (f) => {
                c(f), delete n[a];
              },
            };
          })));
    return (
      (async () => {
        try {
          for await (let a of r) {
            let [u, ...s] = a.split(':'),
              c = s.join(':'),
              f = JSON.parse(c);
            if (u === 'data') for (let [h, g] of Object.entries(f)) n[h] && n[h].resolve(g);
            else if (u === 'error')
              for (let [h, g] of Object.entries(f)) {
                let R = new Error(g.message);
                (R.stack = g.stack), n[h] && n[h].reject(R);
              }
          }
          for (let [a, u] of Object.entries(n)) u.reject(new St(`Deferred ${a} will never be resolved`));
        } catch (a) {
          for (let u of Object.values(n)) u.reject(a);
        }
      })(),
      new el({ ...i, ...t })
    );
  } catch (r) {
    for (let o of Object.values(n)) o.reject(r);
    throw r;
  }
}
async function* bg(e) {
  let t = e.getReader(),
    n = [],
    r = [],
    o = !1,
    l = new TextEncoder(),
    i = new TextDecoder(),
    a = async () => {
      if (r.length > 0) return r.shift();
      for (; !o && r.length === 0; ) {
        let s = await t.read();
        if (s.done) {
          o = !0;
          break;
        }
        n.push(s.value);
        try {
          let f = i.decode(Ph(...n)).split(`

`);
          if (
            (f.length >= 2 &&
              (r.push(...f.slice(0, -1)),
              (n = [
                l.encode(
                  f.slice(-1).join(`

`),
                ),
              ])),
            r.length > 0)
          )
            break;
        } catch {
          continue;
        }
      }
      return (
        r.length > 0 ||
          (n.length > 0 &&
            ((r = i
              .decode(Ph(...n))
              .split(
                `

`,
              )
              .filter((c) => c)),
            (n = []))),
        r.shift()
      );
    },
    u = await a();
  for (; u; ) yield u, (u = await a());
}
function Ph(...e) {
  let t = new Uint8Array(e.reduce((r, o) => r + o.length, 0)),
    n = 0;
  for (let r of e) t.set(r, n), (n += r.length);
  return t;
}
var Hs = Ot(Ft());
function Mh() {
  return Hs.createElement(
    Ii,
    { title: 'Loading...', renderScripts: !0 },
    Hs.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this " +
                "when your app is running \`clientLoader\` functions on hydration. " +
                "Check out https://remix.run/route/hydrate-fallback for more information."
              );
            `,
      },
    }),
  );
}
function zh(e) {
  let t = {};
  return (
    Object.values(e).forEach((n) => {
      let r = n.parentId || '';
      t[r] || (t[r] = []), t[r].push(n);
    }),
    t
  );
}
function qg(e, t, n) {
  let r = jh(t),
    o = t.HydrateFallback && (!n || e.id === 'root') ? t.HydrateFallback : e.id === 'root' ? Mh : void 0,
    l = t.ErrorBoundary ? t.ErrorBoundary : e.id === 'root' ? () => _n.createElement(zs, { error: Jr() }) : void 0;
  return e.id === 'root' && t.Layout
    ? {
        ...(r ? { element: _n.createElement(t.Layout, null, _n.createElement(r, null)) } : { Component: r }),
        ...(l ? { errorElement: _n.createElement(t.Layout, null, _n.createElement(l, null)) } : { ErrorBoundary: l }),
        ...(o
          ? { hydrateFallbackElement: _n.createElement(t.Layout, null, _n.createElement(o, null)) }
          : { HydrateFallback: o }),
      }
    : { Component: r, ErrorBoundary: l, HydrateFallback: o };
}
function Ih(e, t, n, r, o, l) {
  return Vi(t, n, r, o, l, '', zh(t), e);
}
function ji(e, t, n) {
  if (n) {
    let i = `You cannot call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} in SPA Mode (routeId: "${t.id}")`;
    throw (console.error(i), new ct(400, 'Bad Request', new Error(i), !0));
  }
  let o = `You are trying to call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} on a route that does not have a server ${e} (routeId: "${t.id}")`;
  if ((e === 'loader' && !t.hasLoader) || (e === 'action' && !t.hasAction))
    throw (console.error(o), new ct(400, 'Bad Request', new Error(o), !0));
}
function Vs(e, t) {
  let n = e === 'clientAction' ? 'a' : 'an',
    r = `Route "${t}" does not have ${n} ${e}, but you are trying to submit to it. To fix this, please add ${n} \`${e}\` function to the route`;
  throw (console.error(r), new ct(405, 'Method Not Allowed', new Error(r), !0));
}
function Vi(e, t, n, r, o, l = '', i = zh(e), a) {
  return (i[l] || []).map((u) => {
    let s = t[u.id];
    async function c(d) {
      return u.hasLoader ? Uh(d, u) : null;
    }
    async function f(d) {
      if (!u.hasAction) throw Vs('action', u.id);
      return Uh(d, u);
    }
    async function h(d) {
      let m = t[u.id],
        S = m ? Ts(u, m) : Promise.resolve();
      try {
        return d();
      } finally {
        await S;
      }
    }
    let g = { id: u.id, index: u.index, path: u.path };
    if (s) {
      var R, E, x;
      Object.assign(g, {
        ...g,
        ...qg(u, s, o),
        handle: s.handle,
        shouldRevalidate: a ? Ah(u.id, s.shouldRevalidate, a) : s.shouldRevalidate,
      });
      let d = n == null || (R = n.loaderData) === null || R === void 0 ? void 0 : R[u.id],
        m = n == null || (E = n.errors) === null || E === void 0 ? void 0 : E[u.id],
        S = a == null && (((x = s.clientLoader) === null || x === void 0 ? void 0 : x.hydrate) === !0 || !u.hasLoader);
      (g.loader = async ({ request: k, params: v }) => {
        try {
          return await h(
            async () => (
              Kt(s, 'No `routeModule` available for critical-route loader'),
              s.clientLoader
                ? s.clientLoader({
                    request: k,
                    params: v,
                    async serverLoader() {
                      if ((ji('loader', u, o), S)) {
                        if (m !== void 0) throw m;
                        return d;
                      }
                      let P = await c(k);
                      return await Hi(P);
                    },
                  })
                : o
                  ? null
                  : c(k)
            ),
          );
        } finally {
          S = !1;
        }
      }),
        (g.loader.hydrate = Bs(u, s, o)),
        (g.action = ({ request: k, params: v }) =>
          h(async () => {
            if ((Kt(s, 'No `routeModule` available for critical-route action'), !s.clientAction)) {
              if (o) throw Vs('clientAction', u.id);
              return f(k);
            }
            return s.clientAction({
              request: k,
              params: v,
              async serverAction() {
                ji('action', u, o);
                let _ = await f(k);
                return await Hi(_);
              },
            });
          }));
    } else
      u.hasClientLoader || (g.loader = ({ request: d }) => h(() => (o ? Promise.resolve(null) : c(d)))),
        u.hasClientAction ||
          (g.action = ({ request: d }) =>
            h(() => {
              if (o) throw Vs('clientAction', u.id);
              return f(d);
            })),
        (g.lazy = async () => {
          let d = await e0(u, t),
            m = { ...d };
          if (d.clientLoader) {
            let S = d.clientLoader;
            m.loader = (k) =>
              S({
                ...k,
                async serverLoader() {
                  ji('loader', u, o);
                  let v = await c(k.request);
                  return await Hi(v);
                },
              });
          }
          if (d.clientAction) {
            let S = d.clientAction;
            m.action = (k) =>
              S({
                ...k,
                async serverAction() {
                  ji('action', u, o);
                  let v = await f(k.request);
                  return await Hi(v);
                },
              });
          }
          return (
            a && (m.shouldRevalidate = Ah(u.id, d.shouldRevalidate, a)),
            {
              ...(m.loader ? { loader: m.loader } : {}),
              ...(m.action ? { action: m.action } : {}),
              hasErrorBoundary: m.hasErrorBoundary,
              shouldRevalidate: m.shouldRevalidate,
              handle: m.handle,
              Component: m.Component,
              ErrorBoundary: m.ErrorBoundary,
            }
          );
        });
    let p = Vi(e, t, n, r, o, u.id, i, a);
    return p.length > 0 && (g.children = p), g;
  });
}
function Ah(e, t, n) {
  let r = !1;
  return (o) => (r ? (t ? t(o) : o.defaultShouldRevalidate) : ((r = !0), n.has(e)));
}
async function e0(e, t) {
  let n = await Ti(e, t);
  return (
    await Ts(e, n),
    {
      Component: jh(n),
      ErrorBoundary: n.ErrorBoundary,
      clientAction: n.clientAction,
      clientLoader: n.clientLoader,
      handle: n.handle,
      links: n.links,
      meta: n.meta,
      shouldRevalidate: n.shouldRevalidate,
    }
  );
}
async function Uh(e, t) {
  let n = await js(e, t.id);
  if (n instanceof Error) throw n;
  if (Dh(n)) throw t0(n);
  if (Lh(n)) throw n;
  return Th(n) && n.body ? await Fh(n.body) : n;
}
function Hi(e) {
  if (Oh(e)) return e.data;
  if (Is(e)) {
    let t = e.headers.get('Content-Type');
    return t && /\bapplication\/json\b/.test(t) ? e.json() : e.text();
  }
  return e;
}
function t0(e) {
  let t = parseInt(e.headers.get('X-Remix-Status'), 10) || 302,
    n = e.headers.get('X-Remix-Redirect'),
    r = {},
    o = e.headers.get('X-Remix-Revalidate');
  o && (r['X-Remix-Revalidate'] = o);
  let l = e.headers.get('X-Remix-Reload-Document');
  return l && (r['X-Remix-Reload-Document'] = l), ol(n, { status: t, headers: r });
}
function jh(e) {
  if (e.default == null) return;
  if (!(typeof e.default == 'object' && Object.keys(e.default).length === 0)) return e.default;
}
function Bs(e, t, n) {
  return (n && e.id !== 'root') || (t.clientLoader != null && (t.clientLoader.hydrate === !0 || e.hasLoader !== !0));
}
var Et,
  $s = !1;
var Ws,
  cw = new Promise((e) => {
    Ws = e;
  }).catch(() => {});
function n0(e) {
  if (!Et) {
    let l = window.__remixContext.url,
      i = window.location.pathname;
    if (l !== i && !window.__remixContext.isSpaMode) {
      let s = `Initial URL (${l}) does not match URL at time of hydration (${i}), reloading page...`;
      return console.error(s), window.location.reload(), Ze.createElement(Ze.Fragment, null);
    }
    let a = Vi(
        window.__remixManifest.routes,
        window.__remixRouteModules,
        window.__remixContext.state,
        window.__remixContext.future,
        window.__remixContext.isSpaMode,
      ),
      u;
    if (!window.__remixContext.isSpaMode) {
      u = { ...window.__remixContext.state, loaderData: { ...window.__remixContext.state.loaderData } };
      let s = De(a, window.location);
      if (s)
        for (let c of s) {
          let f = c.route.id,
            h = window.__remixRouteModules[f],
            g = window.__remixManifest.routes[f];
          h && Bs(g, h, window.__remixContext.isSpaMode) && (h.HydrateFallback || !g.hasLoader)
            ? (u.loaderData[f] = void 0)
            : g && !g.hasLoader && (u.loaderData[f] = null);
        }
      u && u.errors && (u.errors = Nh(u.errors));
    }
    (Et = ll({
      routes: a,
      history: ra(),
      basename: window.__remixContext.basename,
      future: {
        v7_normalizeFormMethod: !0,
        v7_fetcherPersist: window.__remixContext.future.v3_fetcherPersist,
        v7_partialHydration: !0,
        v7_prependBasename: !0,
        v7_relativeSplatPath: window.__remixContext.future.v3_relativeSplatPath,
      },
      hydrationData: u,
      mapRouteProperties: pa,
    })),
      Et.state.initialized && (($s = !0), Et.initialize()),
      (Et.createRoutesForHMR = Ih),
      (window.__remixRouter = Et),
      Ws && Ws(Et);
  }
  let [t, n] = Ze.useState(void 0),
    [r, o] = Ze.useState(Et.state.location);
  return (
    Ze.useLayoutEffect(() => {
      $s || (($s = !0), Et.initialize());
    }, []),
    Ze.useLayoutEffect(
      () =>
        Et.subscribe((l) => {
          l.location !== r && o(l.location);
        }),
      [r],
    ),
    Ze.createElement(
      Ko.Provider,
      {
        value: {
          manifest: window.__remixManifest,
          routeModules: window.__remixRouteModules,
          future: window.__remixContext.future,
          criticalCss: t,
          isSpaMode: window.__remixContext.isSpaMode,
        },
      },
      Ze.createElement(
        zi,
        { location: r },
        Ze.createElement(ah, { router: Et, fallbackElement: null, future: { v7_startTransition: !0 } }),
      ),
    )
  );
}
xn();
var Bi = Ot(Ft());
xn();
var Hh = 'positions';
function r0({ getKey: e, ...t }) {
  let { isSpaMode: n } = Qt(),
    r = Ue(),
    o = lr();
  dh({ getKey: e, storageKey: Hh });
  let l = Bi.useMemo(() => {
    if (!e) return null;
    let a = e(r, o);
    return a !== r.key ? a : null;
  }, []);
  if (n) return null;
  let i = ((a, u) => {
    if (!window.history.state || !window.history.state.key) {
      let s = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: s }, '');
    }
    try {
      let c = JSON.parse(sessionStorage.getItem(a) || '{}')[u || window.history.state.key];
      typeof c == 'number' && window.scrollTo(0, c);
    } catch (s) {
      console.error(s), sessionStorage.removeItem(a);
    }
  }).toString();
  return Bi.createElement(
    'script',
    ce({}, t, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: `(${i})(${JSON.stringify(Hh)}, ${JSON.stringify(l)})` },
    }),
  );
}
export { eh as a, Oc as b, Bg as c, Kg as d, Us as e, n0 as f, r0 as g };
/*! Bundled license information:

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router/dist/index.js:
  (**
   * React Router v6.22.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router-dom/dist/index.js:
  (**
   * React Router DOM v6.22.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js:
  (**
   * @remix-run/react v2.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/invariant.js:
  (**
   * @remix-run/react v2.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routeModules.js:
  (**
   * @remix-run/react v2.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/links.js:
  (**
   * @remix-run/react v2.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/markup.js:
  (**
   * @remix-run/react v2.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/components.js:
  (**
   * @remix-run/react v2.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errorBoundaries.js:
  (**
   * @remix-run/react v2.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errors.js:
  (**
   * @remix-run/react v2.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/data.js:
  (**
   * @remix-run/react v2.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/fallback.js:
  (**
   * @remix-run/react v2.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routes.js:
  (**
   * @remix-run/react v2.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/browser.js:
  (**
   * @remix-run/react v2.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/scroll-restoration.js:
  (**
   * @remix-run/react v2.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/index.js:
  (**
   * @remix-run/react v2.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
