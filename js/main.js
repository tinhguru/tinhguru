// (function (w, d) {
//   zaraz.debug = (fC = "") => {
//     document.cookie = `zarazDebug=${fC}; path=/`;
//     location.reload();
//   };
//   window.zaraz._al = function (fv, fw, fx) {
//     w.zaraz.listeners.push({
//       item: fv,
//       type: fw,
//       callback: fx,
//     });
//     fv.addEventListener(fw, fx);
//   };
//   zaraz.preview = (fy = "") => {
//     document.cookie = `zarazPreview=${fy}; path=/`;
//     location.reload();
//   };
//   zaraz.i = function (eE) {
//     const eF = d.createElement("div");
//     eF.innerHTML = unescape(eE);
//     const eG = eF.querySelectorAll("script");
//     for (let eH = 0; eH < eG.length; eH++) {
//       const eI = d.createElement("script");
//       eG[eH].innerHTML && (eI.innerHTML = eG[eH].innerHTML);
//       for (const eJ of eG[eH].attributes) eI.setAttribute(eJ.name, eJ.value);
//       d.head.appendChild(eI);
//       eG[eH].remove();
//     }
//     d.body.appendChild(eF);
//   };
//   zaraz.f = async function (fz, fA) {
//     const fB = {
//       credentials: "include",
//       keepalive: !0,
//       mode: "no-cors",
//     };
//     if (fA) {
//       fB.method = "POST";
//       fB.body = new URLSearchParams(fA);
//       fB.headers = {
//         "Content-Type": "application/x-www-form-urlencoded",
//       };
//     }
//     return await fetch(fz, fB);
//   };
//   !(function (fb, fc, fd, fe, ff, fg) {
//     function fh(fj, fk) {
//       fg ? fe(fj, fk || 32) : ff.push(fj, fk);
//     }
//     function fi(fl, fm, fn, fo) {
//       return (
//         (fm && fc.getElementById(fm)) ||
//           ((fo = fc.createElement(fl || "SCRIPT")),
//           fm && (fo.id = fm),
//           fn && (fo.onload = fn),
//           fc.head.appendChild(fo)),
//         fo || {}
//       );
//     }
//     (fg = /p/.test(fc.readyState)),
//       fb.addEventListener("on" + fd in fb ? fd : "load", function () {
//         for (fg = 1; ff[0]; ) fh(ff.shift(), ff.shift());
//       }),
//       (fh._ = fi),
//       (fb.defer = fh),
//       (fb.deferscript = function (fp, fq, fr, fs) {
//         fh(function () {
//           fi("", fq, fs).src = fp;
//         }, fr);
//       });
//   })(this, d, "pageshow", setTimeout, []);
//   defer(function () {
//     for (; zaraz.deferred.length; ) zaraz.deferred.pop()();
//     Object.defineProperty(zaraz.deferred, "push", {
//       configurable: !0,
//       enumerable: !1,
//       writable: !0,
//       value: function (...ft) {
//         let fu = Array.prototype.push.apply(this, ft);
//         for (; zaraz.deferred.length; ) zaraz.deferred.pop()();
//         return fu;
//       },
//     });
//   }, 5500);
//   addEventListener("visibilitychange", function () {
//     for (; zaraz.deferred.length; ) zaraz.deferred.pop()();
//   });
//   // window.zaraz._p = async (bb) =>
//   //   new Promise((bc) => {
//   //     if (bb) {
//   //       bb.e &&
//   //         bb.e.forEach((bd) => {
//   //           try {
//   //             new Function(bd)();
//   //           } catch (be) {
//   //             console.error(`Error executing script: ${bd}\n`, be);
//   //           }
//   //         });
//   //       Promise.allSettled((bb.f || []).map((bf) => fetch(bf[0], bf[1])));
//   //     }
//   //     bc();
//   //   });
//   // zaraz.pageVariables = {};
//   // zaraz.__zcl ||= {};
//   // zaraz.track = async function (ee, ef, eg) {
//   //   return new Promise((eh, ei) => {
//   //     const ej = {
//   //       name: ee,
//   //       data: {},
//   //     };
//   //     for (const ek of [localStorage, sessionStorage])
//   //       Object.keys(ek || {})
//   //         .filter((em) => em.startsWith("_zaraz_"))
//   //         .forEach((el) => {
//   //           try {
//   //             ej.data[el.slice(7)] = JSON.parse(ek.getItem(el));
//   //           } catch {
//   //             ej.data[el.slice(7)] = ek.getItem(el);
//   //           }
//   //         });
//   //     Object.keys(zaraz.pageVariables).forEach(
//   //       (en) => (ej.data[en] = JSON.parse(zaraz.pageVariables[en]))
//   //     );
//   //     Object.keys(zaraz.__zcl).forEach(
//   //       (eo) => (ej.data[`__zcl_ ${eo}`] = zaraz.__zcl[eo])
//   //     );
//   //     ej.data.__zarazMCListeners = zaraz.__zarazMCListeners;
//   //     //
//   //     ej.data = {
//   //       ...ej.data,
//   //       ...ef,
//   //     };
//   //     ej.zarazData = zarazData;
//   //     fetch("/cdn-cgi/zaraz/t", {
//   //       credentials: "include",
//   //       keepalive: !0,
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(ej),
//   //     })
//   //       .catch(() => {
//   //         //
//   //         return fetch("/cdn-cgi/zaraz/t", {
//   //           credentials: "include",
//   //           method: "POST",
//   //           headers: {
//   //             "Content-Type": "application/json",
//   //           },
//   //           body: JSON.stringify(ej),
//   //         });
//   //       })
//   //       .then(function (eq) {
//   //         zarazData._let = new Date().getTime();
//   //         eq.ok || ei();
//   //         return 204 !== eq.status && eq.json();
//   //       })
//   //       .then(async (ep) => {
//   //         await zaraz._p(ep);
//   //         "function" == typeof eg && eg();
//   //       })
//   //       .finally(() => eh());
//   //   });
//   // };
//   // zaraz.set = function (er, es, et) {
//   //   try {
//   //     es = JSON.stringify(es);
//   //   } catch (eu) {
//   //     return;
//   //   }
//   //   prefixedKey = "_zaraz_" + er;
//   //   sessionStorage && sessionStorage.removeItem(prefixedKey);
//   //   localStorage && localStorage.removeItem(prefixedKey);
//   //   delete zaraz.pageVariables[er];
//   //   if (void 0 !== es) {
//   //     et && "session" == et.scope
//   //       ? sessionStorage && sessionStorage.setItem(prefixedKey, es)
//   //       : et && "page" == et.scope
//   //       ? (zaraz.pageVariables[er] = es)
//   //       : localStorage && localStorage.setItem(prefixedKey, es);
//   //     zaraz.__watchVar = {
//   //       key: er,
//   //       value: es,
//   //     };
//   //   }
//   // };
//   // for (const { m: ev, a: ew } of zarazData.q.filter(({ m: ex }) =>
//   //   ["debug", "set"].includes(ex)
//   // ))
//   //   zaraz[ev](...ew);
//   // for (const { m: ey, a: ez } of zaraz.q) zaraz[ey](...ez);
//   // delete zaraz.q;
//   // delete zarazData.q;
//   // zaraz.fulfilTrigger = function (eA, eB, eC, eD) {
//   //   zaraz.__zarazTriggerMap || (zaraz.__zarazTriggerMap = {});
//   //   zaraz.__zarazTriggerMap[eA] || (zaraz.__zarazTriggerMap[eA] = "");
//   //   zaraz.__zarazTriggerMap[eA] += "*" + eB + "*";
//   //   zaraz.track(
//   //     "__zarazEmpty",
//   //     {
//   //       ...eC,
//   //       __zarazClientTriggers: zaraz.__zarazTriggerMap[eA],
//   //     },
//   //     eD
//   //   );
//   // };
//   window.dataLayer = w.dataLayer || [];
//   zaraz._processDataLayer = (fK) => {
//     for (const fL of Object.entries(fK))
//       zaraz.set(fL[0], fL[1], {
//         scope: "page",
//       });
//     if (fK.event) {
//       if (
//         zarazData.dataLayerIgnore &&
//         zarazData.dataLayerIgnore.includes(fK.event)
//       )
//         return;
//       let fM = {};
//       for (let fN of dataLayer.slice(0, dataLayer.indexOf(fK) + 1))
//         fM = {
//           ...fM,
//           ...fN,
//         };
//       delete fM.event;
//       fK.event.startsWith("gtm.") || zaraz.track(fK.event, fM);
//     }
//   };
//   const fJ = w.dataLayer.push;
//   Object.defineProperty(w.dataLayer, "push", {
//     configurable: !0,
//     enumerable: !1,
//     writable: !0,
//     value: function (...fO) {
//       let fP = fJ.apply(this, fO);
//       zaraz._processDataLayer(fO[0]);
//       return fP;
//     },
//   });
//   dataLayer.forEach((fQ) => zaraz._processDataLayer(fQ));
//   zaraz._cts = () => {
//     zaraz._timeouts && zaraz._timeouts.forEach((dI) => clearTimeout(dI));
//     zaraz._timeouts = [];
//   };
//   zaraz._rl = function () {
//     w.zaraz.listeners &&
//       w.zaraz.listeners.forEach((dJ) =>
//         dJ.item.removeEventListener(dJ.type, dJ.callback)
//       );
//     window.zaraz.listeners = [];
//   };
//   history.pushState = function () {
//     try {
//       zaraz._rl();
//       zaraz._cts && zaraz._cts();
//     } finally {
//       History.prototype.pushState.apply(history, arguments);
//       setTimeout(() => {
//         zarazData.l = d.location.href;
//         zarazData.t = d.title;
//         zaraz.pageVariables = {};
//         zaraz.__zarazMCListeners = {};
//         zaraz.track("__zarazSPA");
//       }, 100);
//     }
//   };
//   history.replaceState = function () {
//     try {
//       zaraz._rl();
//       zaraz._cts && zaraz._cts();
//     } finally {
//       History.prototype.replaceState.apply(history, arguments);
//       setTimeout(() => {
//         zarazData.l = d.location.href;
//         zarazData.t = d.title;
//         zaraz.pageVariables = {};
//         zaraz.track("__zarazSPA");
//       }, 100);
//     }
//   };
//   zaraz._c = (dA) => {
//     const { event: dB, ...dC } = dA;
//     zaraz.track(dB, {
//       ...dC,
//       __zarazClientEvent: !0,
//     });
//   };
//   zaraz._syncedAttributes = [
//     "altKey",
//     "clientX",
//     "clientY",
//     "pageX",
//     "pageY",
//     "button",
//   ];
//   zaraz.__zcl.track = !0;
//   d.addEventListener("visibilitychange", (cd) => {
//     zaraz._c(
//       {
//         event: "visibilityChange",
//         visibilityChange: [
//           {
//             state: d.visibilityState,
//             timestamp: new Date().getTime(),
//           },
//         ],
//       },
//       1
//     );
//   });
//   zaraz.__zcl.visibilityChange = !0;
//   zaraz.__zarazMCListeners = {
//     "google-analytics_v4_20ac": ["visibilityChange"],
//   };
//   zaraz._p({
//     e: [
//       '(function(w,d){w.zarazData.executed.push("Pageview");})(window,document)',
//     ],
//     f: [
//       [
//         "https://stats.g.doubleclick.net/g/collect?t=dc&aip=1&_r=3&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=7400fba9-d3c0-4ffe-9a1b-b775c9841f59&_u=KGDAAEADQAAAAC%7E&z=1835961434",
//         {},
//       ],
//     ],
//   });
// })(window, document);
