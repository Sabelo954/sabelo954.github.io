(this.webpackJsonp = this.webpackJsonp || []).push([
  [9],
  {
    MvBd: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return r;
      });
      var r = (function () {
        function t(t, n) {
          var e = this;
          void 0 === n && (n = "id"),
            (this.element = t),
            (this.idAttr = n),
            (this.start = function () {
              if (e._overlay_visible) return e;
              e._add_overlay_layer(),
                e.element
                  .querySelectorAll("*[data-intro]")
                  .forEach(function (t) {
                    e.isVisible(t) && e._show_element(t);
                  }),
                e.element.dispatchEvent(new Event("chardinJs:start"));
            }),
            (this.toggle = function () {
              e._overlay_visible ? e.stop() : e.start();
            }),
            (this.refresh = function () {
              if (e._overlay_visible) {
                var t = e.element.querySelectorAll("*[data-intro]"),
                  n = [];
                t.forEach(function (t) {
                  n.push(e._position_helper_layer(t));
                });
              }
            }),
            (this.stop = function () {
              e.element
                .querySelectorAll(".chardinjs-overlay")
                .forEach(function (t) {
                  return e.fadeOutEffect(t);
                }),
                e.element
                  .querySelectorAll(".chardinjs-helper-layer")
                  .forEach(function (t) {
                    return t.remove();
                  }),
                e.element
                  .querySelectorAll(".chardinjs-show-element")
                  .forEach(function (t) {
                    return t.classList.remove("chardinjs-show-element");
                  }),
                e.element
                  .querySelectorAll(".chardinjs-relative-position")
                  .forEach(function (t) {
                    return t.classList.remove("chardinjs-relative-position");
                  }),
                e.element
                  .querySelectorAll("*[data-intro]")
                  .forEach(function (t) {
                    (t.dataset.helper_layer = null),
                      (t.dataset.tooltip_layer = null);
                  }),
                window.removeEventListener("keydown", window.onkeydown, !0),
                e.element.dispatchEvent(new Event("chardinJs:stop"));
            }),
            (this.fadeOutEffect = function (t) {
              var n = setInterval(function () {
                t.style.opacity || (t.style.opacity = "1");
                var e = Number(t.style.opacity);
                e > 0
                  ? (t.style.opacity = String(e - 0.1))
                  : (clearInterval(n), t.remove());
              }, 50);
            }),
            (this._add_overlay_layer = function () {
              if (e._overlay_visible) return !1;
              var t,
                n = document.createElement("div"),
                r = "";
              if (
                ((n.className = "chardinjs-overlay"),
                "BODY" === e.element.tagName)
              )
                (r += "top: 0;bottom: 0; left: 0;right: 0;position: fixed;"),
                  n.setAttribute("style", r);
              else {
                var i = e._get_offset(e.element);
                i &&
                  ((r +=
                    "width: " +
                    i.width +
                    "px; height:" +
                    i.height +
                    "px; top:" +
                    i.top +
                    "px;left: " +
                    i.left +
                    "px;"),
                  n.setAttribute("style", r));
              }
              return (
                e.element.appendChild(n),
                (n.onclick =
                  ((t = e),
                  function () {
                    return t.stop();
                  })),
                setTimeout(function () {
                  return (
                    (r +=
                      "opacity: .8;opacity: .8;-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)';filter: alpha(opacity=80);"),
                    n.setAttribute("style", r)
                  );
                }, 10)
              );
            }),
            (this._get_position = function (t) {
              return t.getAttribute("data-position") || "bottom";
            }),
            (this._place_tooltip = function (t, n) {
              void 0 === n &&
                (n = e.element.querySelector("div.chardinjs-tooltip"));
              var r = e._get_offset(n);
              switch (
                ((n.style.top = null),
                (n.style.right = null),
                (n.style.bottom = null),
                (n.style.left = null),
                e._get_position(t))
              ) {
                case "top":
                case "bottom":
                  var i = e._get_offset(t).width;
                  n.style.left = i / 2 - r.width / 2 + "px";
                  break;
                case "left":
                case "right":
                  var o = e._get_offset(t).height;
                  n.style.top = o / 2 - r.height / 2 + "px";
              }
              switch (e._get_position(t)) {
                case "left":
                  return (n.style.left = "-" + (r.width - 34) + "px");
                case "right":
                  return (n.style.right = "-" + (r.width - 34) + "px");
                case "bottom":
                  return (n.style.bottom = "-" + r.height + "px");
                case "top":
                  return (n.style.top = "-" + r.height + "px");
              }
            }),
            (this._position_helper_layer = function (t, n) {
              void 0 === n &&
                (n = e.element.querySelector(
                  "div.chardinjs-helper-layer[data-id='" + e.getId(t) + "']"
                ));
              var r = e._get_offset(t);
              return e.isVisible(t) && n
                ? n.setAttribute(
                    "style",
                    "display: block; width: " +
                      r.width +
                      "px; height:" +
                      r.height +
                      "px; top:" +
                      r.top +
                      "px; left: " +
                      r.left +
                      "px;"
                  )
                : e.isVisible(t) && !n
                ? e._show_element(t)
                : !e.isVisible(t) && n
                ? n.setAttribute(
                    "style",
                    "display: none; width: " +
                      r.width +
                      "px; height:" +
                      r.height +
                      "px; top:" +
                      r.top +
                      "px; left: " +
                      r.left +
                      "px;"
                  )
                : void 0;
            }),
            (this.isHidden = function (t) {
              var n = t.offsetWidth,
                e = t.offsetHeight;
              return (
                (0 === n && 0 === e) ||
                "none" ===
                  ((t.style && t.style.display) ||
                    document.defaultView.getComputedStyle(t, "display"))
              );
            }),
            (this.isVisible = function (t) {
              return !e.isHidden(t);
            }),
            (this._show_element = function (t) {
              var n = document.createElement("div"),
                r = document.createElement("div"),
                i = e.getId(t);
              i && n.setAttribute("data-id", i),
                (n.className =
                  "chardinjs-helper-layer chardinjs-" + e._get_position(t)),
                e._position_helper_layer(t, n),
                e.element.appendChild(n),
                (r.className =
                  "chardinjs-tooltip chardinjs-" + e._get_position(t)),
                (r.innerHTML =
                  "<div class='chardinjs-tooltiptext'>" +
                  t.getAttribute("data-intro") +
                  "</div>"),
                n.appendChild(r),
                e._place_tooltip(t, r),
                (t.className += " chardinjs-show-element");
              var o = "";
              if (
                (document.defaultView &&
                  document.defaultView.getComputedStyle &&
                  (o = document.defaultView
                    .getComputedStyle(t, null)
                    .getPropertyValue("position")),
                "absolute" !== (o = o.toLowerCase()) && "relative" !== o)
              )
                return (t.className += " chardinjs-relative-position");
            }),
            (this._get_offset = function (t) {
              var n = {
                width: t.offsetWidth,
                height: t.offsetHeight,
                top: 0,
                left: 0,
              };
              return (
                (n.top = t.getBoundingClientRect().top),
                (n.left = t.getBoundingClientRect().left),
                t.getBoundingClientRect()
              );
            }),
            (this.getId = function (t) {
              return t.id
                ? t.id
                : t.hasAttribute(e.idAttr)
                ? t.getAttribute(e.idAttr)
                : void 0;
            }),
            window.addEventListener("resize", function () {
              return e.refresh();
            });
        }
        return (
          Object.defineProperty(t.prototype, "_overlay_visible", {
            get: function () {
              return (
                0 !== this.element.querySelectorAll(".chardinjs-overlay").length
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })();
    },
    STSK: function (t, n, e) {},
    VphZ: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "version", function () {
          return r;
        }),
        e.d(n, "bisect", function () {
          return f;
        }),
        e.d(n, "bisectRight", function () {
          return a;
        }),
        e.d(n, "bisectLeft", function () {
          return c;
        }),
        e.d(n, "ascending", function () {
          return i;
        }),
        e.d(n, "bisector", function () {
          return o;
        }),
        e.d(n, "cross", function () {
          return h;
        }),
        e.d(n, "descending", function () {
          return d;
        }),
        e.d(n, "deviation", function () {
          return y;
        }),
        e.d(n, "extent", function () {
          return g;
        }),
        e.d(n, "histogram", function () {
          return P;
        }),
        e.d(n, "thresholdFreedmanDiaconis", function () {
          return L;
        }),
        e.d(n, "thresholdScott", function () {
          return R;
        }),
        e.d(n, "thresholdSturges", function () {
          return C;
        }),
        e.d(n, "max", function () {
          return q;
        }),
        e.d(n, "mean", function () {
          return D;
        }),
        e.d(n, "median", function () {
          return U;
        }),
        e.d(n, "merge", function () {
          return O;
        }),
        e.d(n, "min", function () {
          return B;
        }),
        e.d(n, "pairs", function () {
          return s;
        }),
        e.d(n, "permute", function () {
          return F;
        }),
        e.d(n, "quantile", function () {
          return z;
        }),
        e.d(n, "range", function () {
          return M;
        }),
        e.d(n, "scan", function () {
          return Y;
        }),
        e.d(n, "shuffle", function () {
          return I;
        }),
        e.d(n, "sum", function () {
          return j;
        }),
        e.d(n, "ticks", function () {
          return T;
        }),
        e.d(n, "tickIncrement", function () {
          return S;
        }),
        e.d(n, "tickStep", function () {
          return k;
        }),
        e.d(n, "transpose", function () {
          return H;
        }),
        e.d(n, "variance", function () {
          return v;
        }),
        e.d(n, "zip", function () {
          return X;
        }),
        e.d(n, "axisTop", function () {
          return nt;
        }),
        e.d(n, "axisRight", function () {
          return et;
        }),
        e.d(n, "axisBottom", function () {
          return rt;
        }),
        e.d(n, "axisLeft", function () {
          return it;
        }),
        e.d(n, "brush", function () {
          return Ei;
        }),
        e.d(n, "brushX", function () {
          return Ni;
        }),
        e.d(n, "brushY", function () {
          return Ai;
        }),
        e.d(n, "brushSelection", function () {
          return Mi;
        }),
        e.d(n, "chord", function () {
          return qi;
        }),
        e.d(n, "ribbon", function () {
          return Wi;
        }),
        e.d(n, "nest", function () {
          return Ki;
        }),
        e.d(n, "set", function () {
          return ao;
        }),
        e.d(n, "map", function () {
          return Ji;
        }),
        e.d(n, "keys", function () {
          return co;
        }),
        e.d(n, "values", function () {
          return fo;
        }),
        e.d(n, "entries", function () {
          return so;
        }),
        e.d(n, "color", function () {
          return Vn;
        }),
        e.d(n, "rgb", function () {
          return Wn;
        }),
        e.d(n, "hsl", function () {
          return ee;
        }),
        e.d(n, "lab", function () {
          return yo;
        }),
        e.d(n, "hcl", function () {
          return No;
        }),
        e.d(n, "lch", function () {
          return Mo;
        }),
        e.d(n, "gray", function () {
          return vo;
        }),
        e.d(n, "cubehelix", function () {
          return zo;
        }),
        e.d(n, "contours", function () {
          return Io;
        }),
        e.d(n, "contourDensity", function () {
          return $o;
        }),
        e.d(n, "dispatch", function () {
          return lt;
        }),
        e.d(n, "drag", function () {
          return nu;
        }),
        e.d(n, "dragDisable", function () {
          return Tn;
        }),
        e.d(n, "dragEnable", function () {
          return Sn;
        }),
        e.d(n, "dsvFormat", function () {
          return cu;
        }),
        e.d(n, "csvParse", function () {
          return su;
        }),
        e.d(n, "csvParseRows", function () {
          return lu;
        }),
        e.d(n, "csvFormat", function () {
          return hu;
        }),
        e.d(n, "csvFormatBody", function () {
          return du;
        }),
        e.d(n, "csvFormatRows", function () {
          return pu;
        }),
        e.d(n, "csvFormatRow", function () {
          return vu;
        }),
        e.d(n, "csvFormatValue", function () {
          return yu;
        }),
        e.d(n, "tsvParse", function () {
          return _u;
        }),
        e.d(n, "tsvParseRows", function () {
          return bu;
        }),
        e.d(n, "tsvFormat", function () {
          return mu;
        }),
        e.d(n, "tsvFormatBody", function () {
          return xu;
        }),
        e.d(n, "tsvFormatRows", function () {
          return wu;
        }),
        e.d(n, "tsvFormatRow", function () {
          return Mu;
        }),
        e.d(n, "tsvFormatValue", function () {
          return Nu;
        }),
        e.d(n, "autoType", function () {
          return Au;
        }),
        e.d(n, "easeLinear", function () {
          return Tu;
        }),
        e.d(n, "easeQuad", function () {
          return Cu;
        }),
        e.d(n, "easeQuadIn", function () {
          return Su;
        }),
        e.d(n, "easeQuadOut", function () {
          return ku;
        }),
        e.d(n, "easeQuadInOut", function () {
          return Cu;
        }),
        e.d(n, "easeCubic", function () {
          return Gr;
        }),
        e.d(n, "easeCubicIn", function () {
          return Vr;
        }),
        e.d(n, "easeCubicOut", function () {
          return Xr;
        }),
        e.d(n, "easeCubicInOut", function () {
          return Gr;
        }),
        e.d(n, "easePoly", function () {
          return Lu;
        }),
        e.d(n, "easePolyIn", function () {
          return Pu;
        }),
        e.d(n, "easePolyOut", function () {
          return zu;
        }),
        e.d(n, "easePolyInOut", function () {
          return Lu;
        }),
        e.d(n, "easeSin", function () {
          return Ou;
        }),
        e.d(n, "easeSinIn", function () {
          return Du;
        }),
        e.d(n, "easeSinOut", function () {
          return Uu;
        }),
        e.d(n, "easeSinInOut", function () {
          return Ou;
        }),
        e.d(n, "easeExp", function () {
          return Yu;
        }),
        e.d(n, "easeExpIn", function () {
          return Bu;
        }),
        e.d(n, "easeExpOut", function () {
          return Fu;
        }),
        e.d(n, "easeExpInOut", function () {
          return Yu;
        }),
        e.d(n, "easeCircle", function () {
          return Hu;
        }),
        e.d(n, "easeCircleIn", function () {
          return Iu;
        }),
        e.d(n, "easeCircleOut", function () {
          return ju;
        }),
        e.d(n, "easeCircleInOut", function () {
          return Hu;
        }),
        e.d(n, "easeBounce", function () {
          return Xu;
        }),
        e.d(n, "easeBounceIn", function () {
          return Vu;
        }),
        e.d(n, "easeBounceOut", function () {
          return Xu;
        }),
        e.d(n, "easeBounceInOut", function () {
          return Gu;
        }),
        e.d(n, "easeBack", function () {
          return Zu;
        }),
        e.d(n, "easeBackIn", function () {
          return $u;
        }),
        e.d(n, "easeBackOut", function () {
          return Wu;
        }),
        e.d(n, "easeBackInOut", function () {
          return Zu;
        }),
        e.d(n, "easeElastic", function () {
          return Ku;
        }),
        e.d(n, "easeElasticIn", function () {
          return Ju;
        }),
        e.d(n, "easeElasticOut", function () {
          return Ku;
        }),
        e.d(n, "easeElasticInOut", function () {
          return ta;
        }),
        e.d(n, "blob", function () {
          return ea;
        }),
        e.d(n, "buffer", function () {
          return ia;
        }),
        e.d(n, "dsv", function () {
          return ca;
        }),
        e.d(n, "csv", function () {
          return fa;
        }),
        e.d(n, "tsv", function () {
          return sa;
        }),
        e.d(n, "image", function () {
          return la;
        }),
        e.d(n, "json", function () {
          return da;
        }),
        e.d(n, "text", function () {
          return ua;
        }),
        e.d(n, "xml", function () {
          return va;
        }),
        e.d(n, "html", function () {
          return ya;
        }),
        e.d(n, "svg", function () {
          return ga;
        }),
        e.d(n, "forceCenter", function () {
          return _a;
        }),
        e.d(n, "forceCollide", function () {
          return Pa;
        }),
        e.d(n, "forceLink", function () {
          return Ra;
        }),
        e.d(n, "forceManyBody", function () {
          return Ba;
        }),
        e.d(n, "forceRadial", function () {
          return Fa;
        }),
        e.d(n, "forceSimulation", function () {
          return Oa;
        }),
        e.d(n, "forceX", function () {
          return Ya;
        }),
        e.d(n, "forceY", function () {
          return Ia;
        }),
        e.d(n, "formatDefaultLocale", function () {
          return ic;
        }),
        e.d(n, "format", function () {
          return Za;
        }),
        e.d(n, "formatPrefix", function () {
          return Qa;
        }),
        e.d(n, "formatLocale", function () {
          return rc;
        }),
        e.d(n, "formatSpecifier", function () {
          return Xa;
        }),
        e.d(n, "FormatSpecifier", function () {
          return Ga;
        }),
        e.d(n, "precisionFixed", function () {
          return oc;
        }),
        e.d(n, "precisionPrefix", function () {
          return uc;
        }),
        e.d(n, "precisionRound", function () {
          return ac;
        }),
        e.d(n, "geoArea", function () {
          return Jc;
        }),
        e.d(n, "geoBounds", function () {
          return Vf;
        }),
        e.d(n, "geoCentroid", function () {
          return rs;
        }),
        e.d(n, "geoCircle", function () {
          return ps;
        }),
        e.d(n, "geoClipAntimeridian", function () {
          return Es;
        }),
        e.d(n, "geoClipCircle", function () {
          return Ts;
        }),
        e.d(n, "geoClipExtent", function () {
          return zs;
        }),
        e.d(n, "geoClipRectangle", function () {
          return Ss;
        }),
        e.d(n, "geoContains", function () {
          return Zs;
        }),
        e.d(n, "geoDistance", function () {
          return Ys;
        }),
        e.d(n, "geoGraticule", function () {
          return Ks;
        }),
        e.d(n, "geoGraticule10", function () {
          return tl;
        }),
        e.d(n, "geoInterpolate", function () {
          return ol;
        }),
        e.d(n, "geoLength", function () {
          return Os;
        }),
        e.d(n, "geoPath", function () {
          return rh;
        }),
        e.d(n, "geoAlbers", function () {
          return wh;
        }),
        e.d(n, "geoAlbersUsa", function () {
          return Mh;
        }),
        e.d(n, "geoAzimuthalEqualArea", function () {
          return Th;
        }),
        e.d(n, "geoAzimuthalEqualAreaRaw", function () {
          return Eh;
        }),
        e.d(n, "geoAzimuthalEquidistant", function () {
          return kh;
        }),
        e.d(n, "geoAzimuthalEquidistantRaw", function () {
          return Sh;
        }),
        e.d(n, "geoConicConformal", function () {
          return qh;
        }),
        e.d(n, "geoConicConformalRaw", function () {
          return Rh;
        }),
        e.d(n, "geoConicEqualArea", function () {
          return xh;
        }),
        e.d(n, "geoConicEqualAreaRaw", function () {
          return mh;
        }),
        e.d(n, "geoConicEquidistant", function () {
          return Bh;
        }),
        e.d(n, "geoConicEquidistantRaw", function () {
          return Oh;
        }),
        e.d(n, "geoEqualEarth", function () {
          return Xh;
        }),
        e.d(n, "geoEqualEarthRaw", function () {
          return Vh;
        }),
        e.d(n, "geoEquirectangular", function () {
          return Uh;
        }),
        e.d(n, "geoEquirectangularRaw", function () {
          return Dh;
        }),
        e.d(n, "geoGnomonic", function () {
          return $h;
        }),
        e.d(n, "geoGnomonicRaw", function () {
          return Gh;
        }),
        e.d(n, "geoIdentity", function () {
          return Wh;
        }),
        e.d(n, "geoProjection", function () {
          return gh;
        }),
        e.d(n, "geoProjectionMutator", function () {
          return _h;
        }),
        e.d(n, "geoMercator", function () {
          return Ph;
        }),
        e.d(n, "geoMercatorRaw", function () {
          return Ch;
        }),
        e.d(n, "geoNaturalEarth1", function () {
          return Qh;
        }),
        e.d(n, "geoNaturalEarth1Raw", function () {
          return Zh;
        }),
        e.d(n, "geoOrthographic", function () {
          return Kh;
        }),
        e.d(n, "geoOrthographicRaw", function () {
          return Jh;
        }),
        e.d(n, "geoStereographic", function () {
          return nd;
        }),
        e.d(n, "geoStereographicRaw", function () {
          return td;
        }),
        e.d(n, "geoTransverseMercator", function () {
          return rd;
        }),
        e.d(n, "geoTransverseMercatorRaw", function () {
          return ed;
        }),
        e.d(n, "geoRotation", function () {
          return ls;
        }),
        e.d(n, "geoStream", function () {
          return Hc;
        }),
        e.d(n, "geoTransform", function () {
          return ih;
        }),
        e.d(n, "cluster", function () {
          return ad;
        }),
        e.d(n, "hierarchy", function () {
          return fd;
        }),
        e.d(n, "pack", function () {
          return Rd;
        }),
        e.d(n, "packSiblings", function () {
          return Sd;
        }),
        e.d(n, "packEnclose", function () {
          return vd;
        }),
        e.d(n, "partition", function () {
          return Fd;
        }),
        e.d(n, "stratify", function () {
          return Vd;
        }),
        e.d(n, "tree", function () {
          return Jd;
        }),
        e.d(n, "treemap", function () {
          return rp;
        }),
        e.d(n, "treemapBinary", function () {
          return ip;
        }),
        e.d(n, "treemapDice", function () {
          return Bd;
        }),
        e.d(n, "treemapSlice", function () {
          return Kd;
        }),
        e.d(n, "treemapSliceDice", function () {
          return op;
        }),
        e.d(n, "treemapSquarify", function () {
          return ep;
        }),
        e.d(n, "treemapResquarify", function () {
          return up;
        }),
        e.d(n, "interpolate", function () {
          return ke;
        }),
        e.d(n, "interpolateArray", function () {
          return be;
        }),
        e.d(n, "interpolateBasis", function () {
          return ue;
        }),
        e.d(n, "interpolateBasisClosed", function () {
          return ae;
        }),
        e.d(n, "interpolateDate", function () {
          return xe;
        }),
        e.d(n, "interpolateDiscrete", function () {
          return ap;
        }),
        e.d(n, "interpolateHue", function () {
          return cp;
        }),
        e.d(n, "interpolateNumber", function () {
          return we;
        }),
        e.d(n, "interpolateNumberArray", function () {
          return ge;
        }),
        e.d(n, "interpolateObject", function () {
          return Me;
        }),
        e.d(n, "interpolateRound", function () {
          return fp;
        }),
        e.d(n, "interpolateString", function () {
          return Se;
        }),
        e.d(n, "interpolateTransformCss", function () {
          return hr;
        }),
        e.d(n, "interpolateTransformSvg", function () {
          return dr;
        }),
        e.d(n, "interpolateZoom", function () {
          return hp;
        }),
        e.d(n, "interpolateRgb", function () {
          return de;
        }),
        e.d(n, "interpolateRgbBasis", function () {
          return ve;
        }),
        e.d(n, "interpolateRgbBasisClosed", function () {
          return ye;
        }),
        e.d(n, "interpolateHsl", function () {
          return pp;
        }),
        e.d(n, "interpolateHslLong", function () {
          return vp;
        }),
        e.d(n, "interpolateLab", function () {
          return yp;
        }),
        e.d(n, "interpolateHcl", function () {
          return _p;
        }),
        e.d(n, "interpolateHclLong", function () {
          return bp;
        }),
        e.d(n, "interpolateCubehelix", function () {
          return xp;
        }),
        e.d(n, "interpolateCubehelixLong", function () {
          return wp;
        }),
        e.d(n, "piecewise", function () {
          return Mp;
        }),
        e.d(n, "quantize", function () {
          return Np;
        }),
        e.d(n, "path", function () {
          return ji;
        }),
        e.d(n, "polygonArea", function () {
          return Ap;
        }),
        e.d(n, "polygonCentroid", function () {
          return Ep;
        }),
        e.d(n, "polygonHull", function () {
          return kp;
        }),
        e.d(n, "polygonContains", function () {
          return Cp;
        }),
        e.d(n, "polygonLength", function () {
          return Pp;
        }),
        e.d(n, "quadtree", function () {
          return Aa;
        }),
        e.d(n, "randomUniform", function () {
          return Lp;
        }),
        e.d(n, "randomNormal", function () {
          return Rp;
        }),
        e.d(n, "randomLogNormal", function () {
          return qp;
        }),
        e.d(n, "randomBates", function () {
          return Up;
        }),
        e.d(n, "randomIrwinHall", function () {
          return Dp;
        }),
        e.d(n, "randomExponential", function () {
          return Op;
        }),
        e.d(n, "scaleBand", function () {
          return Xp;
        }),
        e.d(n, "scalePoint", function () {
          return $p;
        }),
        e.d(n, "scaleIdentity", function () {
          return cv;
        }),
        e.d(n, "scaleLinear", function () {
          return av;
        }),
        e.d(n, "scaleLog", function () {
          return gv;
        }),
        e.d(n, "scaleSymlog", function () {
          return xv;
        }),
        e.d(n, "scaleOrdinal", function () {
          return Vp;
        }),
        e.d(n, "scaleImplicit", function () {
          return Hp;
        }),
        e.d(n, "scalePow", function () {
          return Ev;
        }),
        e.d(n, "scaleSqrt", function () {
          return Tv;
        }),
        e.d(n, "scaleQuantile", function () {
          return Sv;
        }),
        e.d(n, "scaleQuantize", function () {
          return kv;
        }),
        e.d(n, "scaleThreshold", function () {
          return Cv;
        }),
        e.d(n, "scaleTime", function () {
          return a_;
        }),
        e.d(n, "scaleUtc", function () {
          return g_;
        }),
        e.d(n, "scaleSequential", function () {
          return m_;
        }),
        e.d(n, "scaleSequentialLog", function () {
          return x_;
        }),
        e.d(n, "scaleSequentialPow", function () {
          return M_;
        }),
        e.d(n, "scaleSequentialSqrt", function () {
          return N_;
        }),
        e.d(n, "scaleSequentialSymlog", function () {
          return w_;
        }),
        e.d(n, "scaleSequentialQuantile", function () {
          return A_;
        }),
        e.d(n, "scaleDiverging", function () {
          return T_;
        }),
        e.d(n, "scaleDivergingLog", function () {
          return S_;
        }),
        e.d(n, "scaleDivergingPow", function () {
          return C_;
        }),
        e.d(n, "scaleDivergingSqrt", function () {
          return P_;
        }),
        e.d(n, "scaleDivergingSymlog", function () {
          return k_;
        }),
        e.d(n, "tickFormat", function () {
          return ov;
        }),
        e.d(n, "schemeCategory10", function () {
          return L_;
        }),
        e.d(n, "schemeAccent", function () {
          return R_;
        }),
        e.d(n, "schemeDark2", function () {
          return q_;
        }),
        e.d(n, "schemePaired", function () {
          return D_;
        }),
        e.d(n, "schemePastel1", function () {
          return U_;
        }),
        e.d(n, "schemePastel2", function () {
          return O_;
        }),
        e.d(n, "schemeSet1", function () {
          return B_;
        }),
        e.d(n, "schemeSet2", function () {
          return F_;
        }),
        e.d(n, "schemeSet3", function () {
          return Y_;
        }),
        e.d(n, "schemeTableau10", function () {
          return I_;
        }),
        e.d(n, "interpolateBrBG", function () {
          return V_;
        }),
        e.d(n, "schemeBrBG", function () {
          return H_;
        }),
        e.d(n, "interpolatePRGn", function () {
          return G_;
        }),
        e.d(n, "schemePRGn", function () {
          return X_;
        }),
        e.d(n, "interpolatePiYG", function () {
          return W_;
        }),
        e.d(n, "schemePiYG", function () {
          return $_;
        }),
        e.d(n, "interpolatePuOr", function () {
          return Q_;
        }),
        e.d(n, "schemePuOr", function () {
          return Z_;
        }),
        e.d(n, "interpolateRdBu", function () {
          return K_;
        }),
        e.d(n, "schemeRdBu", function () {
          return J_;
        }),
        e.d(n, "interpolateRdGy", function () {
          return nb;
        }),
        e.d(n, "schemeRdGy", function () {
          return tb;
        }),
        e.d(n, "interpolateRdYlBu", function () {
          return rb;
        }),
        e.d(n, "schemeRdYlBu", function () {
          return eb;
        }),
        e.d(n, "interpolateRdYlGn", function () {
          return ob;
        }),
        e.d(n, "schemeRdYlGn", function () {
          return ib;
        }),
        e.d(n, "interpolateSpectral", function () {
          return ab;
        }),
        e.d(n, "schemeSpectral", function () {
          return ub;
        }),
        e.d(n, "interpolateBuGn", function () {
          return fb;
        }),
        e.d(n, "schemeBuGn", function () {
          return cb;
        }),
        e.d(n, "interpolateBuPu", function () {
          return lb;
        }),
        e.d(n, "schemeBuPu", function () {
          return sb;
        }),
        e.d(n, "interpolateGnBu", function () {
          return db;
        }),
        e.d(n, "schemeGnBu", function () {
          return hb;
        }),
        e.d(n, "interpolateOrRd", function () {
          return vb;
        }),
        e.d(n, "schemeOrRd", function () {
          return pb;
        }),
        e.d(n, "interpolatePuBuGn", function () {
          return gb;
        }),
        e.d(n, "schemePuBuGn", function () {
          return yb;
        }),
        e.d(n, "interpolatePuBu", function () {
          return bb;
        }),
        e.d(n, "schemePuBu", function () {
          return _b;
        }),
        e.d(n, "interpolatePuRd", function () {
          return xb;
        }),
        e.d(n, "schemePuRd", function () {
          return mb;
        }),
        e.d(n, "interpolateRdPu", function () {
          return Mb;
        }),
        e.d(n, "schemeRdPu", function () {
          return wb;
        }),
        e.d(n, "interpolateYlGnBu", function () {
          return Ab;
        }),
        e.d(n, "schemeYlGnBu", function () {
          return Nb;
        }),
        e.d(n, "interpolateYlGn", function () {
          return Tb;
        }),
        e.d(n, "schemeYlGn", function () {
          return Eb;
        }),
        e.d(n, "interpolateYlOrBr", function () {
          return kb;
        }),
        e.d(n, "schemeYlOrBr", function () {
          return Sb;
        }),
        e.d(n, "interpolateYlOrRd", function () {
          return Pb;
        }),
        e.d(n, "schemeYlOrRd", function () {
          return Cb;
        }),
        e.d(n, "interpolateBlues", function () {
          return Lb;
        }),
        e.d(n, "schemeBlues", function () {
          return zb;
        }),
        e.d(n, "interpolateGreens", function () {
          return qb;
        }),
        e.d(n, "schemeGreens", function () {
          return Rb;
        }),
        e.d(n, "interpolateGreys", function () {
          return Ub;
        }),
        e.d(n, "schemeGreys", function () {
          return Db;
        }),
        e.d(n, "interpolatePurples", function () {
          return Bb;
        }),
        e.d(n, "schemePurples", function () {
          return Ob;
        }),
        e.d(n, "interpolateReds", function () {
          return Yb;
        }),
        e.d(n, "schemeReds", function () {
          return Fb;
        }),
        e.d(n, "interpolateOranges", function () {
          return jb;
        }),
        e.d(n, "schemeOranges", function () {
          return Ib;
        }),
        e.d(n, "interpolateCividis", function () {
          return Hb;
        }),
        e.d(n, "interpolateCubehelixDefault", function () {
          return Vb;
        }),
        e.d(n, "interpolateRainbow", function () {
          return Wb;
        }),
        e.d(n, "interpolateWarm", function () {
          return Xb;
        }),
        e.d(n, "interpolateCool", function () {
          return Gb;
        }),
        e.d(n, "interpolateSinebow", function () {
          return Kb;
        }),
        e.d(n, "interpolateTurbo", function () {
          return tm;
        }),
        e.d(n, "interpolateViridis", function () {
          return em;
        }),
        e.d(n, "interpolateMagma", function () {
          return rm;
        }),
        e.d(n, "interpolateInferno", function () {
          return im;
        }),
        e.d(n, "interpolatePlasma", function () {
          return om;
        }),
        e.d(n, "create", function () {
          return um;
        }),
        e.d(n, "creator", function () {
          return rn;
        }),
        e.d(n, "local", function () {
          return cm;
        }),
        e.d(n, "matcher", function () {
          return yt;
        }),
        e.d(n, "mouse", function () {
          return Le;
        }),
        e.d(n, "namespace", function () {
          return Nt;
        }),
        e.d(n, "namespaces", function () {
          return Mt;
        }),
        e.d(n, "clientPoint", function () {
          return Pe;
        }),
        e.d(n, "select", function () {
          return Nn;
        }),
        e.d(n, "selectAll", function () {
          return sm;
        }),
        e.d(n, "selection", function () {
          return Mn;
        }),
        e.d(n, "selector", function () {
          return dt;
        }),
        e.d(n, "selectorAll", function () {
          return vt;
        }),
        e.d(n, "style", function () {
          return qt;
        }),
        e.d(n, "touch", function () {
          return ze;
        }),
        e.d(n, "touches", function () {
          return lm;
        }),
        e.d(n, "window", function () {
          return Pt;
        }),
        e.d(n, "event", function () {
          return sn;
        }),
        e.d(n, "customEvent", function () {
          return yn;
        }),
        e.d(n, "arc", function () {
          return zm;
        }),
        e.d(n, "area", function () {
          return Om;
        }),
        e.d(n, "line", function () {
          return Um;
        }),
        e.d(n, "pie", function () {
          return Ym;
        }),
        e.d(n, "areaRadial", function () {
          return Gm;
        }),
        e.d(n, "radialArea", function () {
          return Gm;
        }),
        e.d(n, "lineRadial", function () {
          return Xm;
        }),
        e.d(n, "radialLine", function () {
          return Xm;
        }),
        e.d(n, "pointRadial", function () {
          return $m;
        }),
        e.d(n, "linkHorizontal", function () {
          return ex;
        }),
        e.d(n, "linkVertical", function () {
          return rx;
        }),
        e.d(n, "linkRadial", function () {
          return ix;
        }),
        e.d(n, "symbol", function () {
          return wx;
        }),
        e.d(n, "symbols", function () {
          return xx;
        }),
        e.d(n, "symbolCircle", function () {
          return ox;
        }),
        e.d(n, "symbolCross", function () {
          return ux;
        }),
        e.d(n, "symbolDiamond", function () {
          return fx;
        }),
        e.d(n, "symbolSquare", function () {
          return px;
        }),
        e.d(n, "symbolStar", function () {
          return dx;
        }),
        e.d(n, "symbolTriangle", function () {
          return yx;
        }),
        e.d(n, "symbolWye", function () {
          return mx;
        }),
        e.d(n, "curveBasisClosed", function () {
          return Sx;
        }),
        e.d(n, "curveBasisOpen", function () {
          return Cx;
        }),
        e.d(n, "curveBasis", function () {
          return Ex;
        }),
        e.d(n, "curveBundle", function () {
          return zx;
        }),
        e.d(n, "curveCardinalClosed", function () {
          return Ux;
        }),
        e.d(n, "curveCardinalOpen", function () {
          return Bx;
        }),
        e.d(n, "curveCardinal", function () {
          return qx;
        }),
        e.d(n, "curveCatmullRomClosed", function () {
          return Hx;
        }),
        e.d(n, "curveCatmullRomOpen", function () {
          return Xx;
        }),
        e.d(n, "curveCatmullRom", function () {
          return Ix;
        }),
        e.d(n, "curveLinearClosed", function () {
          return $x;
        }),
        e.d(n, "curveLinear", function () {
          return Rm;
        }),
        e.d(n, "curveMonotoneX", function () {
          return ew;
        }),
        e.d(n, "curveMonotoneY", function () {
          return rw;
        }),
        e.d(n, "curveNatural", function () {
          return uw;
        }),
        e.d(n, "curveStep", function () {
          return cw;
        }),
        e.d(n, "curveStepAfter", function () {
          return sw;
        }),
        e.d(n, "curveStepBefore", function () {
          return fw;
        }),
        e.d(n, "stack", function () {
          return pw;
        }),
        e.d(n, "stackOffsetExpand", function () {
          return vw;
        }),
        e.d(n, "stackOffsetDiverging", function () {
          return yw;
        }),
        e.d(n, "stackOffsetNone", function () {
          return lw;
        }),
        e.d(n, "stackOffsetSilhouette", function () {
          return gw;
        }),
        e.d(n, "stackOffsetWiggle", function () {
          return _w;
        }),
        e.d(n, "stackOrderAppearance", function () {
          return bw;
        }),
        e.d(n, "stackOrderAscending", function () {
          return xw;
        }),
        e.d(n, "stackOrderDescending", function () {
          return Mw;
        }),
        e.d(n, "stackOrderInsideOut", function () {
          return Nw;
        }),
        e.d(n, "stackOrderNone", function () {
          return hw;
        }),
        e.d(n, "stackOrderReverse", function () {
          return Aw;
        }),
        e.d(n, "timeInterval", function () {
          return Lv;
        }),
        e.d(n, "timeMillisecond", function () {
          return py;
        }),
        e.d(n, "timeMilliseconds", function () {
          return vy;
        }),
        e.d(n, "utcMillisecond", function () {
          return py;
        }),
        e.d(n, "utcMilliseconds", function () {
          return vy;
        }),
        e.d(n, "timeSecond", function () {
          return ly;
        }),
        e.d(n, "timeSeconds", function () {
          return hy;
        }),
        e.d(n, "utcSecond", function () {
          return ly;
        }),
        e.d(n, "utcSeconds", function () {
          return hy;
        }),
        e.d(n, "timeMinute", function () {
          return cy;
        }),
        e.d(n, "timeMinutes", function () {
          return fy;
        }),
        e.d(n, "timeHour", function () {
          return oy;
        }),
        e.d(n, "timeHours", function () {
          return uy;
        }),
        e.d(n, "timeDay", function () {
          return ey;
        }),
        e.d(n, "timeDays", function () {
          return ry;
        }),
        e.d(n, "timeWeek", function () {
          return Yv;
        }),
        e.d(n, "timeWeeks", function () {
          return $v;
        }),
        e.d(n, "timeSunday", function () {
          return Yv;
        }),
        e.d(n, "timeSundays", function () {
          return $v;
        }),
        e.d(n, "timeMonday", function () {
          return Iv;
        }),
        e.d(n, "timeMondays", function () {
          return Wv;
        }),
        e.d(n, "timeTuesday", function () {
          return jv;
        }),
        e.d(n, "timeTuesdays", function () {
          return Zv;
        }),
        e.d(n, "timeWednesday", function () {
          return Hv;
        }),
        e.d(n, "timeWednesdays", function () {
          return Qv;
        }),
        e.d(n, "timeThursday", function () {
          return Vv;
        }),
        e.d(n, "timeThursdays", function () {
          return Jv;
        }),
        e.d(n, "timeFriday", function () {
          return Xv;
        }),
        e.d(n, "timeFridays", function () {
          return Kv;
        }),
        e.d(n, "timeSaturday", function () {
          return Gv;
        }),
        e.d(n, "timeSaturdays", function () {
          return ty;
        }),
        e.d(n, "timeMonth", function () {
          return Ov;
        }),
        e.d(n, "timeMonths", function () {
          return Bv;
        }),
        e.d(n, "timeYear", function () {
          return qv;
        }),
        e.d(n, "timeYears", function () {
          return Dv;
        }),
        e.d(n, "utcMinute", function () {
          return v_;
        }),
        e.d(n, "utcMinutes", function () {
          return y_;
        }),
        e.d(n, "utcHour", function () {
          return h_;
        }),
        e.d(n, "utcHours", function () {
          return d_;
        }),
        e.d(n, "utcDay", function () {
          return zy;
        }),
        e.d(n, "utcDays", function () {
          return Ly;
        }),
        e.d(n, "utcWeek", function () {
          return gy;
        }),
        e.d(n, "utcWeeks", function () {
          return Ny;
        }),
        e.d(n, "utcSunday", function () {
          return gy;
        }),
        e.d(n, "utcSundays", function () {
          return Ny;
        }),
        e.d(n, "utcMonday", function () {
          return _y;
        }),
        e.d(n, "utcMondays", function () {
          return Ay;
        }),
        e.d(n, "utcTuesday", function () {
          return by;
        }),
        e.d(n, "utcTuesdays", function () {
          return Ey;
        }),
        e.d(n, "utcWednesday", function () {
          return my;
        }),
        e.d(n, "utcWednesdays", function () {
          return Ty;
        }),
        e.d(n, "utcThursday", function () {
          return xy;
        }),
        e.d(n, "utcThursdays", function () {
          return Sy;
        }),
        e.d(n, "utcFriday", function () {
          return wy;
        }),
        e.d(n, "utcFridays", function () {
          return ky;
        }),
        e.d(n, "utcSaturday", function () {
          return My;
        }),
        e.d(n, "utcSaturdays", function () {
          return Cy;
        }),
        e.d(n, "utcMonth", function () {
          return f_;
        }),
        e.d(n, "utcMonths", function () {
          return s_;
        }),
        e.d(n, "utcYear", function () {
          return qy;
        }),
        e.d(n, "utcYears", function () {
          return Dy;
        }),
        e.d(n, "timeFormatDefaultLocale", function () {
          return r_;
        }),
        e.d(n, "timeFormat", function () {
          return Iy;
        }),
        e.d(n, "timeParse", function () {
          return jy;
        }),
        e.d(n, "utcFormat", function () {
          return Hy;
        }),
        e.d(n, "utcParse", function () {
          return Vy;
        }),
        e.d(n, "timeFormatLocale", function () {
          return Fy;
        }),
        e.d(n, "isoFormat", function () {
          return Ew;
        }),
        e.d(n, "isoParse", function () {
          return Tw;
        }),
        e.d(n, "now", function () {
          return Ie;
        }),
        e.d(n, "timer", function () {
          return Ve;
        }),
        e.d(n, "timerFlush", function () {
          return Xe;
        }),
        e.d(n, "timeout", function () {
          return Ze;
        }),
        e.d(n, "interval", function () {
          return Sw;
        }),
        e.d(n, "transition", function () {
          return Ir;
        }),
        e.d(n, "active", function () {
          return Qr;
        }),
        e.d(n, "interrupt", function () {
          return ar;
        }),
        e.d(n, "voronoi", function () {
          return dM;
        }),
        e.d(n, "zoom", function () {
          return TM;
        }),
        e.d(n, "zoomTransform", function () {
          return _M;
        }),
        e.d(n, "zoomIdentity", function () {
          return gM;
        });
      var r = "5.16.0",
        i = function (t, n) {
          return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
        },
        o = function (t) {
          var n;
          return (
            1 === t.length &&
              ((n = t),
              (t = function (t, e) {
                return i(n(t), e);
              })),
            {
              left: function (n, e, r, i) {
                for (
                  null == r && (r = 0), null == i && (i = n.length);
                  r < i;

                ) {
                  var o = (r + i) >>> 1;
                  t(n[o], e) < 0 ? (r = o + 1) : (i = o);
                }
                return r;
              },
              right: function (n, e, r, i) {
                for (
                  null == r && (r = 0), null == i && (i = n.length);
                  r < i;

                ) {
                  var o = (r + i) >>> 1;
                  t(n[o], e) > 0 ? (i = o) : (r = o + 1);
                }
                return r;
              },
            }
          );
        };
      var u = o(i),
        a = u.right,
        c = u.left,
        f = a,
        s = function (t, n) {
          null == n && (n = l);
          for (
            var e = 0, r = t.length - 1, i = t[0], o = new Array(r < 0 ? 0 : r);
            e < r;

          )
            o[e] = n(i, (i = t[++e]));
          return o;
        };
      function l(t, n) {
        return [t, n];
      }
      var h = function (t, n, e) {
          var r,
            i,
            o,
            u,
            a = t.length,
            c = n.length,
            f = new Array(a * c);
          for (null == e && (e = l), r = o = 0; r < a; ++r)
            for (u = t[r], i = 0; i < c; ++i, ++o) f[o] = e(u, n[i]);
          return f;
        },
        d = function (t, n) {
          return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
        },
        p = function (t) {
          return null === t ? NaN : +t;
        },
        v = function (t, n) {
          var e,
            r,
            i = t.length,
            o = 0,
            u = -1,
            a = 0,
            c = 0;
          if (null == n)
            for (; ++u < i; )
              isNaN((e = p(t[u]))) || (c += (r = e - a) * (e - (a += r / ++o)));
          else
            for (; ++u < i; )
              isNaN((e = p(n(t[u], u, t)))) ||
                (c += (r = e - a) * (e - (a += r / ++o)));
          if (o > 1) return c / (o - 1);
        },
        y = function (t, n) {
          var e = v(t, n);
          return e ? Math.sqrt(e) : e;
        },
        g = function (t, n) {
          var e,
            r,
            i,
            o = t.length,
            u = -1;
          if (null == n) {
            for (; ++u < o; )
              if (null != (e = t[u]) && e >= e)
                for (r = i = e; ++u < o; )
                  null != (e = t[u]) && (r > e && (r = e), i < e && (i = e));
          } else
            for (; ++u < o; )
              if (null != (e = n(t[u], u, t)) && e >= e)
                for (r = i = e; ++u < o; )
                  null != (e = n(t[u], u, t)) &&
                    (r > e && (r = e), i < e && (i = e));
          return [r, i];
        },
        _ = Array.prototype,
        b = _.slice,
        m = _.map,
        x = function (t) {
          return function () {
            return t;
          };
        },
        w = function (t) {
          return t;
        },
        M = function (t, n, e) {
          (t = +t),
            (n = +n),
            (e =
              (i = arguments.length) < 2
                ? ((n = t), (t = 0), 1)
                : i < 3
                ? 1
                : +e);
          for (
            var r = -1,
              i = 0 | Math.max(0, Math.ceil((n - t) / e)),
              o = new Array(i);
            ++r < i;

          )
            o[r] = t + r * e;
          return o;
        },
        N = Math.sqrt(50),
        A = Math.sqrt(10),
        E = Math.sqrt(2),
        T = function (t, n, e) {
          var r,
            i,
            o,
            u,
            a = -1;
          if (((e = +e), (t = +t) === (n = +n) && e > 0)) return [t];
          if (
            ((r = n < t) && ((i = t), (t = n), (n = i)),
            0 === (u = S(t, n, e)) || !isFinite(u))
          )
            return [];
          if (u > 0)
            for (
              t = Math.ceil(t / u),
                n = Math.floor(n / u),
                o = new Array((i = Math.ceil(n - t + 1)));
              ++a < i;

            )
              o[a] = (t + a) * u;
          else
            for (
              t = Math.floor(t * u),
                n = Math.ceil(n * u),
                o = new Array((i = Math.ceil(t - n + 1)));
              ++a < i;

            )
              o[a] = (t - a) / u;
          return r && o.reverse(), o;
        };
      function S(t, n, e) {
        var r = (n - t) / Math.max(0, e),
          i = Math.floor(Math.log(r) / Math.LN10),
          o = r / Math.pow(10, i);
        return i >= 0
          ? (o >= N ? 10 : o >= A ? 5 : o >= E ? 2 : 1) * Math.pow(10, i)
          : -Math.pow(10, -i) / (o >= N ? 10 : o >= A ? 5 : o >= E ? 2 : 1);
      }
      function k(t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e),
          i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
          o = r / i;
        return (
          o >= N ? (i *= 10) : o >= A ? (i *= 5) : o >= E && (i *= 2),
          n < t ? -i : i
        );
      }
      var C = function (t) {
          return Math.ceil(Math.log(t.length) / Math.LN2) + 1;
        },
        P = function () {
          var t = w,
            n = g,
            e = C;
          function r(r) {
            var i,
              o,
              u = r.length,
              a = new Array(u);
            for (i = 0; i < u; ++i) a[i] = t(r[i], i, r);
            var c = n(a),
              s = c[0],
              l = c[1],
              h = e(a, s, l);
            Array.isArray(h) ||
              ((h = k(s, l, h)), (h = M(Math.ceil(s / h) * h, l, h)));
            for (var d = h.length; h[0] <= s; ) h.shift(), --d;
            for (; h[d - 1] > l; ) h.pop(), --d;
            var p,
              v = new Array(d + 1);
            for (i = 0; i <= d; ++i)
              ((p = v[i] = []).x0 = i > 0 ? h[i - 1] : s),
                (p.x1 = i < d ? h[i] : l);
            for (i = 0; i < u; ++i)
              s <= (o = a[i]) && o <= l && v[f(h, o, 0, d)].push(r[i]);
            return v;
          }
          return (
            (r.value = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : x(n)), r)
                : t;
            }),
            (r.domain = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : x([t[0], t[1]])), r)
                : n;
            }),
            (r.thresholds = function (t) {
              return arguments.length
                ? ((e =
                    "function" == typeof t
                      ? t
                      : Array.isArray(t)
                      ? x(b.call(t))
                      : x(t)),
                  r)
                : e;
            }),
            r
          );
        },
        z = function (t, n, e) {
          if ((null == e && (e = p), (r = t.length))) {
            if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
            if (n >= 1) return +e(t[r - 1], r - 1, t);
            var r,
              i = (r - 1) * n,
              o = Math.floor(i),
              u = +e(t[o], o, t);
            return u + (+e(t[o + 1], o + 1, t) - u) * (i - o);
          }
        },
        L = function (t, n, e) {
          return (
            (t = m.call(t, p).sort(i)),
            Math.ceil(
              (e - n) /
                (2 * (z(t, 0.75) - z(t, 0.25)) * Math.pow(t.length, -1 / 3))
            )
          );
        },
        R = function (t, n, e) {
          return Math.ceil((e - n) / (3.5 * y(t) * Math.pow(t.length, -1 / 3)));
        },
        q = function (t, n) {
          var e,
            r,
            i = t.length,
            o = -1;
          if (null == n) {
            for (; ++o < i; )
              if (null != (e = t[o]) && e >= e)
                for (r = e; ++o < i; ) null != (e = t[o]) && e > r && (r = e);
          } else
            for (; ++o < i; )
              if (null != (e = n(t[o], o, t)) && e >= e)
                for (r = e; ++o < i; )
                  null != (e = n(t[o], o, t)) && e > r && (r = e);
          return r;
        },
        D = function (t, n) {
          var e,
            r = t.length,
            i = r,
            o = -1,
            u = 0;
          if (null == n)
            for (; ++o < r; ) isNaN((e = p(t[o]))) ? --i : (u += e);
          else for (; ++o < r; ) isNaN((e = p(n(t[o], o, t)))) ? --i : (u += e);
          if (i) return u / i;
        },
        U = function (t, n) {
          var e,
            r = t.length,
            o = -1,
            u = [];
          if (null == n) for (; ++o < r; ) isNaN((e = p(t[o]))) || u.push(e);
          else for (; ++o < r; ) isNaN((e = p(n(t[o], o, t)))) || u.push(e);
          return z(u.sort(i), 0.5);
        },
        O = function (t) {
          for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i; )
            u += t[o].length;
          for (e = new Array(u); --i >= 0; )
            for (n = (r = t[i]).length; --n >= 0; ) e[--u] = r[n];
          return e;
        },
        B = function (t, n) {
          var e,
            r,
            i = t.length,
            o = -1;
          if (null == n) {
            for (; ++o < i; )
              if (null != (e = t[o]) && e >= e)
                for (r = e; ++o < i; ) null != (e = t[o]) && r > e && (r = e);
          } else
            for (; ++o < i; )
              if (null != (e = n(t[o], o, t)) && e >= e)
                for (r = e; ++o < i; )
                  null != (e = n(t[o], o, t)) && r > e && (r = e);
          return r;
        },
        F = function (t, n) {
          for (var e = n.length, r = new Array(e); e--; ) r[e] = t[n[e]];
          return r;
        },
        Y = function (t, n) {
          if ((e = t.length)) {
            var e,
              r,
              o = 0,
              u = 0,
              a = t[u];
            for (null == n && (n = i); ++o < e; )
              (n((r = t[o]), a) < 0 || 0 !== n(a, a)) && ((a = r), (u = o));
            return 0 === n(a, a) ? u : void 0;
          }
        },
        I = function (t, n, e) {
          for (
            var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n);
            o;

          )
            (i = (Math.random() * o--) | 0),
              (r = t[o + n]),
              (t[o + n] = t[i + n]),
              (t[i + n] = r);
          return t;
        },
        j = function (t, n) {
          var e,
            r = t.length,
            i = -1,
            o = 0;
          if (null == n) for (; ++i < r; ) (e = +t[i]) && (o += e);
          else for (; ++i < r; ) (e = +n(t[i], i, t)) && (o += e);
          return o;
        },
        H = function (t) {
          if (!(i = t.length)) return [];
          for (var n = -1, e = B(t, V), r = new Array(e); ++n < e; )
            for (var i, o = -1, u = (r[n] = new Array(i)); ++o < i; )
              u[o] = t[o][n];
          return r;
        };
      function V(t) {
        return t.length;
      }
      var X = function () {
          return H(arguments);
        },
        G = Array.prototype.slice,
        $ = function (t) {
          return t;
        };
      function W(t) {
        return "translate(" + (t + 0.5) + ",0)";
      }
      function Z(t) {
        return "translate(0," + (t + 0.5) + ")";
      }
      function Q(t) {
        return function (n) {
          return +t(n);
        };
      }
      function J(t) {
        var n = Math.max(0, t.bandwidth() - 1) / 2;
        return (
          t.round() && (n = Math.round(n)),
          function (e) {
            return +t(e) + n;
          }
        );
      }
      function K() {
        return !this.__axis;
      }
      function tt(t, n) {
        var e = [],
          r = null,
          i = null,
          o = 6,
          u = 6,
          a = 3,
          c = 1 === t || 4 === t ? -1 : 1,
          f = 4 === t || 2 === t ? "x" : "y",
          s = 1 === t || 3 === t ? W : Z;
        function l(l) {
          var h = null == r ? (n.ticks ? n.ticks.apply(n, e) : n.domain()) : r,
            d = null == i ? (n.tickFormat ? n.tickFormat.apply(n, e) : $) : i,
            p = Math.max(o, 0) + a,
            v = n.range(),
            y = +v[0] + 0.5,
            g = +v[v.length - 1] + 0.5,
            _ = (n.bandwidth ? J : Q)(n.copy()),
            b = l.selection ? l.selection() : l,
            m = b.selectAll(".domain").data([null]),
            x = b.selectAll(".tick").data(h, n).order(),
            w = x.exit(),
            M = x.enter().append("g").attr("class", "tick"),
            N = x.select("line"),
            A = x.select("text");
          (m = m.merge(
            m
              .enter()
              .insert("path", ".tick")
              .attr("class", "domain")
              .attr("stroke", "currentColor")
          )),
            (x = x.merge(M)),
            (N = N.merge(
              M.append("line")
                .attr("stroke", "currentColor")
                .attr(f + "2", c * o)
            )),
            (A = A.merge(
              M.append("text")
                .attr("fill", "currentColor")
                .attr(f, c * p)
                .attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")
            )),
            l !== b &&
              ((m = m.transition(l)),
              (x = x.transition(l)),
              (N = N.transition(l)),
              (A = A.transition(l)),
              (w = w
                .transition(l)
                .attr("opacity", 1e-6)
                .attr("transform", function (t) {
                  return isFinite((t = _(t)))
                    ? s(t)
                    : this.getAttribute("transform");
                })),
              M.attr("opacity", 1e-6).attr("transform", function (t) {
                var n = this.parentNode.__axis;
                return s(n && isFinite((n = n(t))) ? n : _(t));
              })),
            w.remove(),
            m.attr(
              "d",
              4 === t || 2 == t
                ? u
                  ? "M" + c * u + "," + y + "H0.5V" + g + "H" + c * u
                  : "M0.5," + y + "V" + g
                : u
                ? "M" + y + "," + c * u + "V0.5H" + g + "V" + c * u
                : "M" + y + ",0.5H" + g
            ),
            x.attr("opacity", 1).attr("transform", function (t) {
              return s(_(t));
            }),
            N.attr(f + "2", c * o),
            A.attr(f, c * p).text(d),
            b
              .filter(K)
              .attr("fill", "none")
              .attr("font-size", 10)
              .attr("font-family", "sans-serif")
              .attr(
                "text-anchor",
                2 === t ? "start" : 4 === t ? "end" : "middle"
              ),
            b.each(function () {
              this.__axis = _;
            });
        }
        return (
          (l.scale = function (t) {
            return arguments.length ? ((n = t), l) : n;
          }),
          (l.ticks = function () {
            return (e = G.call(arguments)), l;
          }),
          (l.tickArguments = function (t) {
            return arguments.length
              ? ((e = null == t ? [] : G.call(t)), l)
              : e.slice();
          }),
          (l.tickValues = function (t) {
            return arguments.length
              ? ((r = null == t ? null : G.call(t)), l)
              : r && r.slice();
          }),
          (l.tickFormat = function (t) {
            return arguments.length ? ((i = t), l) : i;
          }),
          (l.tickSize = function (t) {
            return arguments.length ? ((o = u = +t), l) : o;
          }),
          (l.tickSizeInner = function (t) {
            return arguments.length ? ((o = +t), l) : o;
          }),
          (l.tickSizeOuter = function (t) {
            return arguments.length ? ((u = +t), l) : u;
          }),
          (l.tickPadding = function (t) {
            return arguments.length ? ((a = +t), l) : a;
          }),
          l
        );
      }
      function nt(t) {
        return tt(1, t);
      }
      function et(t) {
        return tt(2, t);
      }
      function rt(t) {
        return tt(3, t);
      }
      function it(t) {
        return tt(4, t);
      }
      var ot = { value: function () {} };
      function ut() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
          if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t))
            throw new Error("illegal type: " + t);
          r[t] = [];
        }
        return new at(r);
      }
      function at(t) {
        this._ = t;
      }
      function ct(t, n) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var e = "",
              r = t.indexOf(".");
            if (
              (r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))),
              t && !n.hasOwnProperty(t))
            )
              throw new Error("unknown type: " + t);
            return { type: t, name: e };
          });
      }
      function ft(t, n) {
        for (var e, r = 0, i = t.length; r < i; ++r)
          if ((e = t[r]).name === n) return e.value;
      }
      function st(t, n, e) {
        for (var r = 0, i = t.length; r < i; ++r)
          if (t[r].name === n) {
            (t[r] = ot), (t = t.slice(0, r).concat(t.slice(r + 1)));
            break;
          }
        return null != e && t.push({ name: n, value: e }), t;
      }
      at.prototype = ut.prototype = {
        constructor: at,
        on: function (t, n) {
          var e,
            r = this._,
            i = ct(t + "", r),
            o = -1,
            u = i.length;
          if (!(arguments.length < 2)) {
            if (null != n && "function" != typeof n)
              throw new Error("invalid callback: " + n);
            for (; ++o < u; )
              if ((e = (t = i[o]).type)) r[e] = st(r[e], t.name, n);
              else if (null == n) for (e in r) r[e] = st(r[e], t.name, null);
            return this;
          }
          for (; ++o < u; )
            if ((e = (t = i[o]).type) && (e = ft(r[e], t.name))) return e;
        },
        copy: function () {
          var t = {},
            n = this._;
          for (var e in n) t[e] = n[e].slice();
          return new at(t);
        },
        call: function (t, n) {
          if ((e = arguments.length - 2) > 0)
            for (var e, r, i = new Array(e), o = 0; o < e; ++o)
              i[o] = arguments[o + 2];
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          for (o = 0, e = (r = this._[t]).length; o < e; ++o)
            r[o].value.apply(n, i);
        },
        apply: function (t, n, e) {
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
            r[i].value.apply(n, e);
        },
      };
      var lt = ut;
      function ht() {}
      var dt = function (t) {
        return null == t
          ? ht
          : function () {
              return this.querySelector(t);
            };
      };
      function pt() {
        return [];
      }
      var vt = function (t) {
          return null == t
            ? pt
            : function () {
                return this.querySelectorAll(t);
              };
        },
        yt = function (t) {
          return function () {
            return this.matches(t);
          };
        },
        gt = function (t) {
          return new Array(t.length);
        };
      function _t(t, n) {
        (this.ownerDocument = t.ownerDocument),
          (this.namespaceURI = t.namespaceURI),
          (this._next = null),
          (this._parent = t),
          (this.__data__ = n);
      }
      _t.prototype = {
        constructor: _t,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, n) {
          return this._parent.insertBefore(t, n);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      };
      function bt(t, n, e, r, i, o) {
        for (var u, a = 0, c = n.length, f = o.length; a < f; ++a)
          (u = n[a])
            ? ((u.__data__ = o[a]), (r[a] = u))
            : (e[a] = new _t(t, o[a]));
        for (; a < c; ++a) (u = n[a]) && (i[a] = u);
      }
      function mt(t, n, e, r, i, o, u) {
        var a,
          c,
          f,
          s = {},
          l = n.length,
          h = o.length,
          d = new Array(l);
        for (a = 0; a < l; ++a)
          (c = n[a]) &&
            ((d[a] = f = "$" + u.call(c, c.__data__, a, n)),
            f in s ? (i[a] = c) : (s[f] = c));
        for (a = 0; a < h; ++a)
          (c = s[(f = "$" + u.call(t, o[a], a, o))])
            ? ((r[a] = c), (c.__data__ = o[a]), (s[f] = null))
            : (e[a] = new _t(t, o[a]));
        for (a = 0; a < l; ++a) (c = n[a]) && s[d[a]] === c && (i[a] = c);
      }
      function xt(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }
      var wt = "http://www.w3.org/1999/xhtml",
        Mt = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: wt,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        Nt = function (t) {
          var n = (t += ""),
            e = n.indexOf(":");
          return (
            e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
            Mt.hasOwnProperty(n) ? { space: Mt[n], local: t } : t
          );
        };
      function At(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function Et(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function Tt(t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      }
      function St(t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      }
      function kt(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
        };
      }
      function Ct(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e
            ? this.removeAttributeNS(t.space, t.local)
            : this.setAttributeNS(t.space, t.local, e);
        };
      }
      var Pt = function (t) {
        return (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          (t.document && t) ||
          t.defaultView
        );
      };
      function zt(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function Lt(t, n, e) {
        return function () {
          this.style.setProperty(t, n, e);
        };
      }
      function Rt(t, n, e) {
        return function () {
          var r = n.apply(this, arguments);
          null == r
            ? this.style.removeProperty(t)
            : this.style.setProperty(t, r, e);
        };
      }
      function qt(t, n) {
        return (
          t.style.getPropertyValue(n) ||
          Pt(t).getComputedStyle(t, null).getPropertyValue(n)
        );
      }
      function Dt(t) {
        return function () {
          delete this[t];
        };
      }
      function Ut(t, n) {
        return function () {
          this[t] = n;
        };
      }
      function Ot(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? delete this[t] : (this[t] = e);
        };
      }
      function Bt(t) {
        return t.trim().split(/^|\s+/);
      }
      function Ft(t) {
        return t.classList || new Yt(t);
      }
      function Yt(t) {
        (this._node = t), (this._names = Bt(t.getAttribute("class") || ""));
      }
      function It(t, n) {
        for (var e = Ft(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
      }
      function jt(t, n) {
        for (var e = Ft(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
      }
      function Ht(t) {
        return function () {
          It(this, t);
        };
      }
      function Vt(t) {
        return function () {
          jt(this, t);
        };
      }
      function Xt(t, n) {
        return function () {
          (n.apply(this, arguments) ? It : jt)(this, t);
        };
      }
      Yt.prototype = {
        add: function (t) {
          this._names.indexOf(t) < 0 &&
            (this._names.push(t),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (t) {
          var n = this._names.indexOf(t);
          n >= 0 &&
            (this._names.splice(n, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      function Gt() {
        this.textContent = "";
      }
      function $t(t) {
        return function () {
          this.textContent = t;
        };
      }
      function Wt(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.textContent = null == n ? "" : n;
        };
      }
      function Zt() {
        this.innerHTML = "";
      }
      function Qt(t) {
        return function () {
          this.innerHTML = t;
        };
      }
      function Jt(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.innerHTML = null == n ? "" : n;
        };
      }
      function Kt() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function tn() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function nn(t) {
        return function () {
          var n = this.ownerDocument,
            e = this.namespaceURI;
          return e === wt && n.documentElement.namespaceURI === wt
            ? n.createElement(t)
            : n.createElementNS(e, t);
        };
      }
      function en(t) {
        return function () {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      }
      var rn = function (t) {
        var n = Nt(t);
        return (n.local ? en : nn)(n);
      };
      function on() {
        return null;
      }
      function un() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }
      function an() {
        var t = this.cloneNode(!1),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function cn() {
        var t = this.cloneNode(!0),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      var fn = {},
        sn = null;
      "undefined" != typeof document &&
        ("onmouseenter" in document.documentElement ||
          (fn = { mouseenter: "mouseover", mouseleave: "mouseout" }));
      function ln(t, n, e) {
        return (
          (t = hn(t, n, e)),
          function (n) {
            var e = n.relatedTarget;
            (e && (e === this || 8 & e.compareDocumentPosition(this))) ||
              t.call(this, n);
          }
        );
      }
      function hn(t, n, e) {
        return function (r) {
          var i = sn;
          sn = r;
          try {
            t.call(this, this.__data__, n, e);
          } finally {
            sn = i;
          }
        };
      }
      function dn(t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = "",
              e = t.indexOf(".");
            return (
              e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
              { type: t, name: n }
            );
          });
      }
      function pn(t) {
        return function () {
          var n = this.__on;
          if (n) {
            for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
              (e = n[r]),
                (t.type && e.type !== t.type) || e.name !== t.name
                  ? (n[++i] = e)
                  : this.removeEventListener(e.type, e.listener, e.capture);
            ++i ? (n.length = i) : delete this.__on;
          }
        };
      }
      function vn(t, n, e) {
        var r = fn.hasOwnProperty(t.type) ? ln : hn;
        return function (i, o, u) {
          var a,
            c = this.__on,
            f = r(n, o, u);
          if (c)
            for (var s = 0, l = c.length; s < l; ++s)
              if ((a = c[s]).type === t.type && a.name === t.name)
                return (
                  this.removeEventListener(a.type, a.listener, a.capture),
                  this.addEventListener(
                    a.type,
                    (a.listener = f),
                    (a.capture = e)
                  ),
                  void (a.value = n)
                );
          this.addEventListener(t.type, f, e),
            (a = {
              type: t.type,
              name: t.name,
              value: n,
              listener: f,
              capture: e,
            }),
            c ? c.push(a) : (this.__on = [a]);
        };
      }
      function yn(t, n, e, r) {
        var i = sn;
        (t.sourceEvent = sn), (sn = t);
        try {
          return n.apply(e, r);
        } finally {
          sn = i;
        }
      }
      function gn(t, n, e) {
        var r = Pt(t),
          i = r.CustomEvent;
        "function" == typeof i
          ? (i = new i(n, e))
          : ((i = r.document.createEvent("Event")),
            e
              ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
              : i.initEvent(n, !1, !1)),
          t.dispatchEvent(i);
      }
      function _n(t, n) {
        return function () {
          return gn(this, t, n);
        };
      }
      function bn(t, n) {
        return function () {
          return gn(this, t, n.apply(this, arguments));
        };
      }
      var mn = [null];
      function xn(t, n) {
        (this._groups = t), (this._parents = n);
      }
      function wn() {
        return new xn([[document.documentElement]], mn);
      }
      xn.prototype = wn.prototype = {
        constructor: xn,
        select: function (t) {
          "function" != typeof t && (t = dt(t));
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var o,
                u,
                a = n[i],
                c = a.length,
                f = (r[i] = new Array(c)),
                s = 0;
              s < c;
              ++s
            )
              (o = a[s]) &&
                (u = t.call(o, o.__data__, s, a)) &&
                ("__data__" in o && (u.__data__ = o.__data__), (f[s] = u));
          return new xn(r, this._parents);
        },
        selectAll: function (t) {
          "function" != typeof t && (t = vt(t));
          for (
            var n = this._groups, e = n.length, r = [], i = [], o = 0;
            o < e;
            ++o
          )
            for (var u, a = n[o], c = a.length, f = 0; f < c; ++f)
              (u = a[f]) && (r.push(t.call(u, u.__data__, f, a)), i.push(u));
          return new xn(r, i);
        },
        filter: function (t) {
          "function" != typeof t && (t = yt(t));
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var o, u = n[i], a = u.length, c = (r[i] = []), f = 0;
              f < a;
              ++f
            )
              (o = u[f]) && t.call(o, o.__data__, f, u) && c.push(o);
          return new xn(r, this._parents);
        },
        data: function (t, n) {
          if (!t)
            return (
              (p = new Array(this.size())),
              (s = -1),
              this.each(function (t) {
                p[++s] = t;
              }),
              p
            );
          var e,
            r = n ? mt : bt,
            i = this._parents,
            o = this._groups;
          "function" != typeof t &&
            ((e = t),
            (t = function () {
              return e;
            }));
          for (
            var u = o.length,
              a = new Array(u),
              c = new Array(u),
              f = new Array(u),
              s = 0;
            s < u;
            ++s
          ) {
            var l = i[s],
              h = o[s],
              d = h.length,
              p = t.call(l, l && l.__data__, s, i),
              v = p.length,
              y = (c[s] = new Array(v)),
              g = (a[s] = new Array(v));
            r(l, h, y, g, (f[s] = new Array(d)), p, n);
            for (var _, b, m = 0, x = 0; m < v; ++m)
              if ((_ = y[m])) {
                for (m >= x && (x = m + 1); !(b = g[x]) && ++x < v; );
                _._next = b || null;
              }
          }
          return ((a = new xn(a, i))._enter = c), (a._exit = f), a;
        },
        enter: function () {
          return new xn(this._enter || this._groups.map(gt), this._parents);
        },
        exit: function () {
          return new xn(this._exit || this._groups.map(gt), this._parents);
        },
        join: function (t, n, e) {
          var r = this.enter(),
            i = this,
            o = this.exit();
          return (
            (r = "function" == typeof t ? t(r) : r.append(t + "")),
            null != n && (i = n(i)),
            null == e ? o.remove() : e(o),
            r && i ? r.merge(i).order() : i
          );
        },
        merge: function (t) {
          for (
            var n = this._groups,
              e = t._groups,
              r = n.length,
              i = e.length,
              o = Math.min(r, i),
              u = new Array(r),
              a = 0;
            a < o;
            ++a
          )
            for (
              var c,
                f = n[a],
                s = e[a],
                l = f.length,
                h = (u[a] = new Array(l)),
                d = 0;
              d < l;
              ++d
            )
              (c = f[d] || s[d]) && (h[d] = c);
          for (; a < r; ++a) u[a] = n[a];
          return new xn(u, this._parents);
        },
        order: function () {
          for (var t = this._groups, n = -1, e = t.length; ++n < e; )
            for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0; )
              (r = i[o]) &&
                (u &&
                  4 ^ r.compareDocumentPosition(u) &&
                  u.parentNode.insertBefore(r, u),
                (u = r));
          return this;
        },
        sort: function (t) {
          function n(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e;
          }
          t || (t = xt);
          for (
            var e = this._groups, r = e.length, i = new Array(r), o = 0;
            o < r;
            ++o
          ) {
            for (
              var u, a = e[o], c = a.length, f = (i[o] = new Array(c)), s = 0;
              s < c;
              ++s
            )
              (u = a[s]) && (f[s] = u);
            f.sort(n);
          }
          return new xn(i, this._parents).order();
        },
        call: function () {
          var t = arguments[0];
          return (arguments[0] = this), t.apply(null, arguments), this;
        },
        nodes: function () {
          var t = new Array(this.size()),
            n = -1;
          return (
            this.each(function () {
              t[++n] = this;
            }),
            t
          );
        },
        node: function () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
              var u = r[i];
              if (u) return u;
            }
          return null;
        },
        size: function () {
          var t = 0;
          return (
            this.each(function () {
              ++t;
            }),
            t
          );
        },
        empty: function () {
          return !this.node();
        },
        each: function (t) {
          for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
            for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)
              (i = o[u]) && t.call(i, i.__data__, u, o);
          return this;
        },
        attr: function (t, n) {
          var e = Nt(t);
          if (arguments.length < 2) {
            var r = this.node();
            return e.local
              ? r.getAttributeNS(e.space, e.local)
              : r.getAttribute(e);
          }
          return this.each(
            (null == n
              ? e.local
                ? Et
                : At
              : "function" == typeof n
              ? e.local
                ? Ct
                : kt
              : e.local
              ? St
              : Tt)(e, n)
          );
        },
        style: function (t, n, e) {
          return arguments.length > 1
            ? this.each(
                (null == n ? zt : "function" == typeof n ? Rt : Lt)(
                  t,
                  n,
                  null == e ? "" : e
                )
              )
            : qt(this.node(), t);
        },
        property: function (t, n) {
          return arguments.length > 1
            ? this.each(
                (null == n ? Dt : "function" == typeof n ? Ot : Ut)(t, n)
              )
            : this.node()[t];
        },
        classed: function (t, n) {
          var e = Bt(t + "");
          if (arguments.length < 2) {
            for (var r = Ft(this.node()), i = -1, o = e.length; ++i < o; )
              if (!r.contains(e[i])) return !1;
            return !0;
          }
          return this.each(("function" == typeof n ? Xt : n ? Ht : Vt)(e, n));
        },
        text: function (t) {
          return arguments.length
            ? this.each(null == t ? Gt : ("function" == typeof t ? Wt : $t)(t))
            : this.node().textContent;
        },
        html: function (t) {
          return arguments.length
            ? this.each(null == t ? Zt : ("function" == typeof t ? Jt : Qt)(t))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(Kt);
        },
        lower: function () {
          return this.each(tn);
        },
        append: function (t) {
          var n = "function" == typeof t ? t : rn(t);
          return this.select(function () {
            return this.appendChild(n.apply(this, arguments));
          });
        },
        insert: function (t, n) {
          var e = "function" == typeof t ? t : rn(t),
            r = null == n ? on : "function" == typeof n ? n : dt(n);
          return this.select(function () {
            return this.insertBefore(
              e.apply(this, arguments),
              r.apply(this, arguments) || null
            );
          });
        },
        remove: function () {
          return this.each(un);
        },
        clone: function (t) {
          return this.select(t ? cn : an);
        },
        datum: function (t) {
          return arguments.length
            ? this.property("__data__", t)
            : this.node().__data__;
        },
        on: function (t, n, e) {
          var r,
            i,
            o = dn(t + ""),
            u = o.length;
          if (!(arguments.length < 2)) {
            for (a = n ? vn : pn, null == e && (e = !1), r = 0; r < u; ++r)
              this.each(a(o[r], n, e));
            return this;
          }
          var a = this.node().__on;
          if (a)
            for (var c, f = 0, s = a.length; f < s; ++f)
              for (r = 0, c = a[f]; r < u; ++r)
                if ((i = o[r]).type === c.type && i.name === c.name)
                  return c.value;
        },
        dispatch: function (t, n) {
          return this.each(("function" == typeof n ? bn : _n)(t, n));
        },
      };
      var Mn = wn,
        Nn = function (t) {
          return "string" == typeof t
            ? new xn([[document.querySelector(t)]], [document.documentElement])
            : new xn([[t]], mn);
        };
      function An() {
        sn.stopImmediatePropagation();
      }
      var En = function () {
          sn.preventDefault(), sn.stopImmediatePropagation();
        },
        Tn = function (t) {
          var n = t.document.documentElement,
            e = Nn(t).on("dragstart.drag", En, !0);
          "onselectstart" in n
            ? e.on("selectstart.drag", En, !0)
            : ((n.__noselect = n.style.MozUserSelect),
              (n.style.MozUserSelect = "none"));
        };
      function Sn(t, n) {
        var e = t.document.documentElement,
          r = Nn(t).on("dragstart.drag", null);
        n &&
          (r.on("click.drag", En, !0),
          setTimeout(function () {
            r.on("click.drag", null);
          }, 0)),
          "onselectstart" in e
            ? r.on("selectstart.drag", null)
            : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect);
      }
      var kn = function (t, n, e) {
        (t.prototype = n.prototype = e), (e.constructor = t);
      };
      function Cn(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e;
      }
      function Pn() {}
      var zn = "\\s*([+-]?\\d+)\\s*",
        Ln = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        Rn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        qn = /^#([0-9a-f]{3,8})$/,
        Dn = new RegExp("^rgb\\(" + [zn, zn, zn] + "\\)$"),
        Un = new RegExp("^rgb\\(" + [Rn, Rn, Rn] + "\\)$"),
        On = new RegExp("^rgba\\(" + [zn, zn, zn, Ln] + "\\)$"),
        Bn = new RegExp("^rgba\\(" + [Rn, Rn, Rn, Ln] + "\\)$"),
        Fn = new RegExp("^hsl\\(" + [Ln, Rn, Rn] + "\\)$"),
        Yn = new RegExp("^hsla\\(" + [Ln, Rn, Rn, Ln] + "\\)$"),
        In = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function jn() {
        return this.rgb().formatHex();
      }
      function Hn() {
        return this.rgb().formatRgb();
      }
      function Vn(t) {
        var n, e;
        return (
          (t = (t + "").trim().toLowerCase()),
          (n = qn.exec(t))
            ? ((e = n[1].length),
              (n = parseInt(n[1], 16)),
              6 === e
                ? Xn(n)
                : 3 === e
                ? new Zn(
                    ((n >> 8) & 15) | ((n >> 4) & 240),
                    ((n >> 4) & 15) | (240 & n),
                    ((15 & n) << 4) | (15 & n),
                    1
                  )
                : 8 === e
                ? Gn(
                    (n >> 24) & 255,
                    (n >> 16) & 255,
                    (n >> 8) & 255,
                    (255 & n) / 255
                  )
                : 4 === e
                ? Gn(
                    ((n >> 12) & 15) | ((n >> 8) & 240),
                    ((n >> 8) & 15) | ((n >> 4) & 240),
                    ((n >> 4) & 15) | (240 & n),
                    (((15 & n) << 4) | (15 & n)) / 255
                  )
                : null)
            : (n = Dn.exec(t))
            ? new Zn(n[1], n[2], n[3], 1)
            : (n = Un.exec(t))
            ? new Zn(
                (255 * n[1]) / 100,
                (255 * n[2]) / 100,
                (255 * n[3]) / 100,
                1
              )
            : (n = On.exec(t))
            ? Gn(n[1], n[2], n[3], n[4])
            : (n = Bn.exec(t))
            ? Gn(
                (255 * n[1]) / 100,
                (255 * n[2]) / 100,
                (255 * n[3]) / 100,
                n[4]
              )
            : (n = Fn.exec(t))
            ? te(n[1], n[2] / 100, n[3] / 100, 1)
            : (n = Yn.exec(t))
            ? te(n[1], n[2] / 100, n[3] / 100, n[4])
            : In.hasOwnProperty(t)
            ? Xn(In[t])
            : "transparent" === t
            ? new Zn(NaN, NaN, NaN, 0)
            : null
        );
      }
      function Xn(t) {
        return new Zn((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function Gn(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new Zn(t, n, e, r);
      }
      function $n(t) {
        return (
          t instanceof Pn || (t = Vn(t)),
          t ? new Zn((t = t.rgb()).r, t.g, t.b, t.opacity) : new Zn()
        );
      }
      function Wn(t, n, e, r) {
        return 1 === arguments.length
          ? $n(t)
          : new Zn(t, n, e, null == r ? 1 : r);
      }
      function Zn(t, n, e, r) {
        (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
      }
      function Qn() {
        return "#" + Kn(this.r) + Kn(this.g) + Kn(this.b);
      }
      function Jn() {
        var t = this.opacity;
        return (
          (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
            ? "rgb("
            : "rgba(") +
          Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
          (1 === t ? ")" : ", " + t + ")")
        );
      }
      function Kn(t) {
        return (
          ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16
            ? "0"
            : "") + t.toString(16)
        );
      }
      function te(t, n, e, r) {
        return (
          r <= 0
            ? (t = n = e = NaN)
            : e <= 0 || e >= 1
            ? (t = n = NaN)
            : n <= 0 && (t = NaN),
          new re(t, n, e, r)
        );
      }
      function ne(t) {
        if (t instanceof re) return new re(t.h, t.s, t.l, t.opacity);
        if ((t instanceof Pn || (t = Vn(t)), !t)) return new re();
        if (t instanceof re) return t;
        var n = (t = t.rgb()).r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = Math.min(n, e, r),
          o = Math.max(n, e, r),
          u = NaN,
          a = o - i,
          c = (o + i) / 2;
        return (
          a
            ? ((u =
                n === o
                  ? (e - r) / a + 6 * (e < r)
                  : e === o
                  ? (r - n) / a + 2
                  : (n - e) / a + 4),
              (a /= c < 0.5 ? o + i : 2 - o - i),
              (u *= 60))
            : (a = c > 0 && c < 1 ? 0 : u),
          new re(u, a, c, t.opacity)
        );
      }
      function ee(t, n, e, r) {
        return 1 === arguments.length
          ? ne(t)
          : new re(t, n, e, null == r ? 1 : r);
      }
      function re(t, n, e, r) {
        (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
      }
      function ie(t, n, e) {
        return (
          255 *
          (t < 60
            ? n + ((e - n) * t) / 60
            : t < 180
            ? e
            : t < 240
            ? n + ((e - n) * (240 - t)) / 60
            : n)
        );
      }
      function oe(t, n, e, r, i) {
        var o = t * t,
          u = o * t;
        return (
          ((1 - 3 * t + 3 * o - u) * n +
            (4 - 6 * o + 3 * u) * e +
            (1 + 3 * t + 3 * o - 3 * u) * r +
            u * i) /
          6
        );
      }
      kn(Pn, Vn, {
        copy: function (t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable: function () {
          return this.rgb().displayable();
        },
        hex: jn,
        formatHex: jn,
        formatHsl: function () {
          return ne(this).formatHsl();
        },
        formatRgb: Hn,
        toString: Hn,
      }),
        kn(
          Zn,
          Wn,
          Cn(Pn, {
            brighter: function (t) {
              return (
                (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new Zn(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new Zn(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb: function () {
              return this;
            },
            displayable: function () {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: Qn,
            formatHex: Qn,
            formatRgb: Jn,
            toString: Jn,
          })
        ),
        kn(
          re,
          ee,
          Cn(Pn, {
            brighter: function (t) {
              return (
                (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new re(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new re(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb: function () {
              var t = (this.h % 360) + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                r = e + (e < 0.5 ? e : 1 - e) * n,
                i = 2 * e - r;
              return new Zn(
                ie(t >= 240 ? t - 240 : t + 120, i, r),
                ie(t, i, r),
                ie(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity
              );
            },
            displayable: function () {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl: function () {
              var t = this.opacity;
              return (
                (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                  ? "hsl("
                  : "hsla(") +
                (this.h || 0) +
                ", " +
                100 * (this.s || 0) +
                "%, " +
                100 * (this.l || 0) +
                "%" +
                (1 === t ? ")" : ", " + t + ")")
              );
            },
          })
        );
      var ue = function (t) {
          var n = t.length - 1;
          return function (e) {
            var r =
                e <= 0
                  ? (e = 0)
                  : e >= 1
                  ? ((e = 1), n - 1)
                  : Math.floor(e * n),
              i = t[r],
              o = t[r + 1],
              u = r > 0 ? t[r - 1] : 2 * i - o,
              a = r < n - 1 ? t[r + 2] : 2 * o - i;
            return oe((e - r / n) * n, u, i, o, a);
          };
        },
        ae = function (t) {
          var n = t.length;
          return function (e) {
            var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
              i = t[(r + n - 1) % n],
              o = t[r % n],
              u = t[(r + 1) % n],
              a = t[(r + 2) % n];
            return oe((e - r / n) * n, i, o, u, a);
          };
        },
        ce = function (t) {
          return function () {
            return t;
          };
        };
      function fe(t, n) {
        return function (e) {
          return t + e * n;
        };
      }
      function se(t, n) {
        var e = n - t;
        return e
          ? fe(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
          : ce(isNaN(t) ? n : t);
      }
      function le(t) {
        return 1 == (t = +t)
          ? he
          : function (n, e) {
              return e - n
                ? (function (t, n, e) {
                    return (
                      (t = Math.pow(t, e)),
                      (n = Math.pow(n, e) - t),
                      (e = 1 / e),
                      function (r) {
                        return Math.pow(t + r * n, e);
                      }
                    );
                  })(n, e, t)
                : ce(isNaN(n) ? e : n);
            };
      }
      function he(t, n) {
        var e = n - t;
        return e ? fe(t, e) : ce(isNaN(t) ? n : t);
      }
      var de = (function t(n) {
        var e = le(n);
        function r(t, n) {
          var r = e((t = Wn(t)).r, (n = Wn(n)).r),
            i = e(t.g, n.g),
            o = e(t.b, n.b),
            u = he(t.opacity, n.opacity);
          return function (n) {
            return (
              (t.r = r(n)),
              (t.g = i(n)),
              (t.b = o(n)),
              (t.opacity = u(n)),
              t + ""
            );
          };
        }
        return (r.gamma = t), r;
      })(1);
      function pe(t) {
        return function (n) {
          var e,
            r,
            i = n.length,
            o = new Array(i),
            u = new Array(i),
            a = new Array(i);
          for (e = 0; e < i; ++e)
            (r = Wn(n[e])),
              (o[e] = r.r || 0),
              (u[e] = r.g || 0),
              (a[e] = r.b || 0);
          return (
            (o = t(o)),
            (u = t(u)),
            (a = t(a)),
            (r.opacity = 1),
            function (t) {
              return (r.r = o(t)), (r.g = u(t)), (r.b = a(t)), r + "";
            }
          );
        };
      }
      var ve = pe(ue),
        ye = pe(ae),
        ge = function (t, n) {
          n || (n = []);
          var e,
            r = t ? Math.min(n.length, t.length) : 0,
            i = n.slice();
          return function (o) {
            for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o;
            return i;
          };
        };
      function _e(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView);
      }
      var be = function (t, n) {
        return (_e(n) ? ge : me)(t, n);
      };
      function me(t, n) {
        var e,
          r = n ? n.length : 0,
          i = t ? Math.min(r, t.length) : 0,
          o = new Array(i),
          u = new Array(r);
        for (e = 0; e < i; ++e) o[e] = ke(t[e], n[e]);
        for (; e < r; ++e) u[e] = n[e];
        return function (t) {
          for (e = 0; e < i; ++e) u[e] = o[e](t);
          return u;
        };
      }
      var xe = function (t, n) {
          var e = new Date();
          return (
            (t = +t),
            (n = +n),
            function (r) {
              return e.setTime(t * (1 - r) + n * r), e;
            }
          );
        },
        we = function (t, n) {
          return (
            (t = +t),
            (n = +n),
            function (e) {
              return t * (1 - e) + n * e;
            }
          );
        },
        Me = function (t, n) {
          var e,
            r = {},
            i = {};
          for (e in ((null !== t && "object" == typeof t) || (t = {}),
          (null !== n && "object" == typeof n) || (n = {}),
          n))
            e in t ? (r[e] = ke(t[e], n[e])) : (i[e] = n[e]);
          return function (t) {
            for (e in r) i[e] = r[e](t);
            return i;
          };
        },
        Ne = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        Ae = new RegExp(Ne.source, "g");
      var Ee,
        Te,
        Se = function (t, n) {
          var e,
            r,
            i,
            o = (Ne.lastIndex = Ae.lastIndex = 0),
            u = -1,
            a = [],
            c = [];
          for (t += "", n += ""; (e = Ne.exec(t)) && (r = Ae.exec(n)); )
            (i = r.index) > o &&
              ((i = n.slice(o, i)), a[u] ? (a[u] += i) : (a[++u] = i)),
              (e = e[0]) === (r = r[0])
                ? a[u]
                  ? (a[u] += r)
                  : (a[++u] = r)
                : ((a[++u] = null), c.push({ i: u, x: we(e, r) })),
              (o = Ae.lastIndex);
          return (
            o < n.length &&
              ((i = n.slice(o)), a[u] ? (a[u] += i) : (a[++u] = i)),
            a.length < 2
              ? c[0]
                ? (function (t) {
                    return function (n) {
                      return t(n) + "";
                    };
                  })(c[0].x)
                : (function (t) {
                    return function () {
                      return t;
                    };
                  })(n)
              : ((n = c.length),
                function (t) {
                  for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
                  return a.join("");
                })
          );
        },
        ke = function (t, n) {
          var e,
            r = typeof n;
          return null == n || "boolean" === r
            ? ce(n)
            : ("number" === r
                ? we
                : "string" === r
                ? (e = Vn(n))
                  ? ((n = e), de)
                  : Se
                : n instanceof Vn
                ? de
                : n instanceof Date
                ? xe
                : _e(n)
                ? ge
                : Array.isArray(n)
                ? me
                : ("function" != typeof n.valueOf &&
                    "function" != typeof n.toString) ||
                  isNaN(n)
                ? Me
                : we)(t, n);
        },
        Ce = function () {
          for (var t, n = sn; (t = n.sourceEvent); ) n = t;
          return n;
        },
        Pe = function (t, n) {
          var e = t.ownerSVGElement || t;
          if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            return (
              (r.x = n.clientX),
              (r.y = n.clientY),
              [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
            );
          }
          var i = t.getBoundingClientRect();
          return [
            n.clientX - i.left - t.clientLeft,
            n.clientY - i.top - t.clientTop,
          ];
        },
        ze = function (t, n, e) {
          arguments.length < 3 && ((e = n), (n = Ce().changedTouches));
          for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)
            if ((r = n[i]).identifier === e) return Pe(t, r);
          return null;
        },
        Le = function (t) {
          var n = Ce();
          return n.changedTouches && (n = n.changedTouches[0]), Pe(t, n);
        },
        Re = 0,
        qe = 0,
        De = 0,
        Ue = 0,
        Oe = 0,
        Be = 0,
        Fe =
          "object" == typeof performance && performance.now
            ? performance
            : Date,
        Ye =
          "object" == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (t) {
                setTimeout(t, 17);
              };
      function Ie() {
        return Oe || (Ye(je), (Oe = Fe.now() + Be));
      }
      function je() {
        Oe = 0;
      }
      function He() {
        this._call = this._time = this._next = null;
      }
      function Ve(t, n, e) {
        var r = new He();
        return r.restart(t, n, e), r;
      }
      function Xe() {
        Ie(), ++Re;
        for (var t, n = Ee; n; )
          (t = Oe - n._time) >= 0 && n._call.call(null, t), (n = n._next);
        --Re;
      }
      function Ge() {
        (Oe = (Ue = Fe.now()) + Be), (Re = qe = 0);
        try {
          Xe();
        } finally {
          (Re = 0),
            (function () {
              var t,
                n,
                e = Ee,
                r = 1 / 0;
              for (; e; )
                e._call
                  ? (r > e._time && (r = e._time), (t = e), (e = e._next))
                  : ((n = e._next),
                    (e._next = null),
                    (e = t ? (t._next = n) : (Ee = n)));
              (Te = t), We(r);
            })(),
            (Oe = 0);
        }
      }
      function $e() {
        var t = Fe.now(),
          n = t - Ue;
        n > 1e3 && ((Be -= n), (Ue = t));
      }
      function We(t) {
        Re ||
          (qe && (qe = clearTimeout(qe)),
          t - Oe > 24
            ? (t < 1 / 0 && (qe = setTimeout(Ge, t - Fe.now() - Be)),
              De && (De = clearInterval(De)))
            : (De || ((Ue = Fe.now()), (De = setInterval($e, 1e3))),
              (Re = 1),
              Ye(Ge)));
      }
      He.prototype = Ve.prototype = {
        constructor: He,
        restart: function (t, n, e) {
          if ("function" != typeof t)
            throw new TypeError("callback is not a function");
          (e = (null == e ? Ie() : +e) + (null == n ? 0 : +n)),
            this._next ||
              Te === this ||
              (Te ? (Te._next = this) : (Ee = this), (Te = this)),
            (this._call = t),
            (this._time = e),
            We();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), We());
        },
      };
      var Ze = function (t, n, e) {
          var r = new He();
          return (
            (n = null == n ? 0 : +n),
            r.restart(
              function (e) {
                r.stop(), t(e + n);
              },
              n,
              e
            ),
            r
          );
        },
        Qe = lt("start", "end", "cancel", "interrupt"),
        Je = [],
        Ke = function (t, n, e, r, i, o) {
          var u = t.__transition;
          if (u) {
            if (e in u) return;
          } else t.__transition = {};
          !(function (t, n, e) {
            var r,
              i = t.__transition;
            function o(c) {
              var f, s, l, h;
              if (1 !== e.state) return a();
              for (f in i)
                if ((h = i[f]).name === e.name) {
                  if (3 === h.state) return Ze(o);
                  4 === h.state
                    ? ((h.state = 6),
                      h.timer.stop(),
                      h.on.call("interrupt", t, t.__data__, h.index, h.group),
                      delete i[f])
                    : +f < n &&
                      ((h.state = 6),
                      h.timer.stop(),
                      h.on.call("cancel", t, t.__data__, h.index, h.group),
                      delete i[f]);
                }
              if (
                (Ze(function () {
                  3 === e.state &&
                    ((e.state = 4), e.timer.restart(u, e.delay, e.time), u(c));
                }),
                (e.state = 2),
                e.on.call("start", t, t.__data__, e.index, e.group),
                2 === e.state)
              ) {
                for (
                  e.state = 3,
                    r = new Array((l = e.tween.length)),
                    f = 0,
                    s = -1;
                  f < l;
                  ++f
                )
                  (h = e.tween[f].value.call(
                    t,
                    t.__data__,
                    e.index,
                    e.group
                  )) && (r[++s] = h);
                r.length = s + 1;
              }
            }
            function u(n) {
              for (
                var i =
                    n < e.duration
                      ? e.ease.call(null, n / e.duration)
                      : (e.timer.restart(a), (e.state = 5), 1),
                  o = -1,
                  u = r.length;
                ++o < u;

              )
                r[o].call(t, i);
              5 === e.state &&
                (e.on.call("end", t, t.__data__, e.index, e.group), a());
            }
            function a() {
              for (var r in ((e.state = 6), e.timer.stop(), delete i[n], i))
                return;
              delete t.__transition;
            }
            (i[n] = e),
              (e.timer = Ve(
                function (t) {
                  (e.state = 1),
                    e.timer.restart(o, e.delay, e.time),
                    e.delay <= t && o(t - e.delay);
                },
                0,
                e.time
              ));
          })(t, e, {
            name: n,
            index: r,
            group: i,
            on: Qe,
            tween: Je,
            time: o.time,
            delay: o.delay,
            duration: o.duration,
            ease: o.ease,
            timer: null,
            state: 0,
          });
        };
      function tr(t, n) {
        var e = er(t, n);
        if (e.state > 0) throw new Error("too late; already scheduled");
        return e;
      }
      function nr(t, n) {
        var e = er(t, n);
        if (e.state > 3) throw new Error("too late; already running");
        return e;
      }
      function er(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("transition not found");
        return e;
      }
      var rr,
        ir,
        or,
        ur,
        ar = function (t, n) {
          var e,
            r,
            i,
            o = t.__transition,
            u = !0;
          if (o) {
            for (i in ((n = null == n ? null : n + ""), o))
              (e = o[i]).name === n
                ? ((r = e.state > 2 && e.state < 5),
                  (e.state = 6),
                  e.timer.stop(),
                  e.on.call(
                    r ? "interrupt" : "cancel",
                    t,
                    t.__data__,
                    e.index,
                    e.group
                  ),
                  delete o[i])
                : (u = !1);
            u && delete t.__transition;
          }
        },
        cr = 180 / Math.PI,
        fr = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        },
        sr = function (t, n, e, r, i, o) {
          var u, a, c;
          return (
            (u = Math.sqrt(t * t + n * n)) && ((t /= u), (n /= u)),
            (c = t * e + n * r) && ((e -= t * c), (r -= n * c)),
            (a = Math.sqrt(e * e + r * r)) && ((e /= a), (r /= a), (c /= a)),
            t * r < n * e && ((t = -t), (n = -n), (c = -c), (u = -u)),
            {
              translateX: i,
              translateY: o,
              rotate: Math.atan2(n, t) * cr,
              skewX: Math.atan(c) * cr,
              scaleX: u,
              scaleY: a,
            }
          );
        };
      function lr(t, n, e, r) {
        function i(t) {
          return t.length ? t.pop() + " " : "";
        }
        return function (o, u) {
          var a = [],
            c = [];
          return (
            (o = t(o)),
            (u = t(u)),
            (function (t, r, i, o, u, a) {
              if (t !== i || r !== o) {
                var c = u.push("translate(", null, n, null, e);
                a.push({ i: c - 4, x: we(t, i) }, { i: c - 2, x: we(r, o) });
              } else (i || o) && u.push("translate(" + i + n + o + e);
            })(o.translateX, o.translateY, u.translateX, u.translateY, a, c),
            (function (t, n, e, o) {
              t !== n
                ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
                  o.push({
                    i: e.push(i(e) + "rotate(", null, r) - 2,
                    x: we(t, n),
                  }))
                : n && e.push(i(e) + "rotate(" + n + r);
            })(o.rotate, u.rotate, a, c),
            (function (t, n, e, o) {
              t !== n
                ? o.push({
                    i: e.push(i(e) + "skewX(", null, r) - 2,
                    x: we(t, n),
                  })
                : n && e.push(i(e) + "skewX(" + n + r);
            })(o.skewX, u.skewX, a, c),
            (function (t, n, e, r, o, u) {
              if (t !== e || n !== r) {
                var a = o.push(i(o) + "scale(", null, ",", null, ")");
                u.push({ i: a - 4, x: we(t, e) }, { i: a - 2, x: we(n, r) });
              } else
                (1 === e && 1 === r) ||
                  o.push(i(o) + "scale(" + e + "," + r + ")");
            })(o.scaleX, o.scaleY, u.scaleX, u.scaleY, a, c),
            (o = u = null),
            function (t) {
              for (var n, e = -1, r = c.length; ++e < r; )
                a[(n = c[e]).i] = n.x(t);
              return a.join("");
            }
          );
        };
      }
      var hr = lr(
          function (t) {
            return "none" === t
              ? fr
              : (rr ||
                  ((rr = document.createElement("DIV")),
                  (ir = document.documentElement),
                  (or = document.defaultView)),
                (rr.style.transform = t),
                (t = or
                  .getComputedStyle(ir.appendChild(rr), null)
                  .getPropertyValue("transform")),
                ir.removeChild(rr),
                (t = t.slice(7, -1).split(",")),
                sr(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
          },
          "px, ",
          "px)",
          "deg)"
        ),
        dr = lr(
          function (t) {
            return null == t
              ? fr
              : (ur ||
                  (ur = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g"
                  )),
                ur.setAttribute("transform", t),
                (t = ur.transform.baseVal.consolidate())
                  ? ((t = t.matrix), sr(t.a, t.b, t.c, t.d, t.e, t.f))
                  : fr);
          },
          ", ",
          ")",
          ")"
        );
      function pr(t, n) {
        var e, r;
        return function () {
          var i = nr(this, t),
            o = i.tween;
          if (o !== e)
            for (var u = 0, a = (r = e = o).length; u < a; ++u)
              if (r[u].name === n) {
                (r = r.slice()).splice(u, 1);
                break;
              }
          i.tween = r;
        };
      }
      function vr(t, n, e) {
        var r, i;
        if ("function" != typeof e) throw new Error();
        return function () {
          var o = nr(this, t),
            u = o.tween;
          if (u !== r) {
            i = (r = u).slice();
            for (var a = { name: n, value: e }, c = 0, f = i.length; c < f; ++c)
              if (i[c].name === n) {
                i[c] = a;
                break;
              }
            c === f && i.push(a);
          }
          o.tween = i;
        };
      }
      function yr(t, n, e) {
        var r = t._id;
        return (
          t.each(function () {
            var t = nr(this, r);
            (t.value || (t.value = {}))[n] = e.apply(this, arguments);
          }),
          function (t) {
            return er(t, r).value[n];
          }
        );
      }
      var gr = function (t, n) {
        var e;
        return ("number" == typeof n
          ? we
          : n instanceof Vn
          ? de
          : (e = Vn(n))
          ? ((n = e), de)
          : Se)(t, n);
      };
      function _r(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function br(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function mr(t, n, e) {
        var r,
          i,
          o = e + "";
        return function () {
          var u = this.getAttribute(t);
          return u === o ? null : u === r ? i : (i = n((r = u), e));
        };
      }
      function xr(t, n, e) {
        var r,
          i,
          o = e + "";
        return function () {
          var u = this.getAttributeNS(t.space, t.local);
          return u === o ? null : u === r ? i : (i = n((r = u), e));
        };
      }
      function wr(t, n, e) {
        var r, i, o;
        return function () {
          var u,
            a,
            c = e(this);
          if (null != c)
            return (u = this.getAttribute(t)) === (a = c + "")
              ? null
              : u === r && a === i
              ? o
              : ((i = a), (o = n((r = u), c)));
          this.removeAttribute(t);
        };
      }
      function Mr(t, n, e) {
        var r, i, o;
        return function () {
          var u,
            a,
            c = e(this);
          if (null != c)
            return (u = this.getAttributeNS(t.space, t.local)) === (a = c + "")
              ? null
              : u === r && a === i
              ? o
              : ((i = a), (o = n((r = u), c)));
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function Nr(t, n) {
        return function (e) {
          this.setAttribute(t, n.call(this, e));
        };
      }
      function Ar(t, n) {
        return function (e) {
          this.setAttributeNS(t.space, t.local, n.call(this, e));
        };
      }
      function Er(t, n) {
        var e, r;
        function i() {
          var i = n.apply(this, arguments);
          return i !== r && (e = (r = i) && Ar(t, i)), e;
        }
        return (i._value = n), i;
      }
      function Tr(t, n) {
        var e, r;
        function i() {
          var i = n.apply(this, arguments);
          return i !== r && (e = (r = i) && Nr(t, i)), e;
        }
        return (i._value = n), i;
      }
      function Sr(t, n) {
        return function () {
          tr(this, t).delay = +n.apply(this, arguments);
        };
      }
      function kr(t, n) {
        return (
          (n = +n),
          function () {
            tr(this, t).delay = n;
          }
        );
      }
      function Cr(t, n) {
        return function () {
          nr(this, t).duration = +n.apply(this, arguments);
        };
      }
      function Pr(t, n) {
        return (
          (n = +n),
          function () {
            nr(this, t).duration = n;
          }
        );
      }
      function zr(t, n) {
        if ("function" != typeof n) throw new Error();
        return function () {
          nr(this, t).ease = n;
        };
      }
      function Lr(t, n, e) {
        var r,
          i,
          o = (function (t) {
            return (t + "")
              .trim()
              .split(/^|\s+/)
              .every(function (t) {
                var n = t.indexOf(".");
                return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
              });
          })(n)
            ? tr
            : nr;
        return function () {
          var u = o(this, t),
            a = u.on;
          a !== r && (i = (r = a).copy()).on(n, e), (u.on = i);
        };
      }
      var Rr = Mn.prototype.constructor;
      function qr(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function Dr(t, n, e) {
        return function (r) {
          this.style.setProperty(t, n.call(this, r), e);
        };
      }
      function Ur(t, n, e) {
        var r, i;
        function o() {
          var o = n.apply(this, arguments);
          return o !== i && (r = (i = o) && Dr(t, o, e)), r;
        }
        return (o._value = n), o;
      }
      function Or(t) {
        return function (n) {
          this.textContent = t.call(this, n);
        };
      }
      function Br(t) {
        var n, e;
        function r() {
          var r = t.apply(this, arguments);
          return r !== e && (n = (e = r) && Or(r)), n;
        }
        return (r._value = t), r;
      }
      var Fr = 0;
      function Yr(t, n, e, r) {
        (this._groups = t),
          (this._parents = n),
          (this._name = e),
          (this._id = r);
      }
      function Ir(t) {
        return Mn().transition(t);
      }
      function jr() {
        return ++Fr;
      }
      var Hr = Mn.prototype;
      function Vr(t) {
        return t * t * t;
      }
      function Xr(t) {
        return --t * t * t + 1;
      }
      function Gr(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      }
      Yr.prototype = Ir.prototype = {
        constructor: Yr,
        select: function (t) {
          var n = this._name,
            e = this._id;
          "function" != typeof t && (t = dt(t));
          for (
            var r = this._groups, i = r.length, o = new Array(i), u = 0;
            u < i;
            ++u
          )
            for (
              var a,
                c,
                f = r[u],
                s = f.length,
                l = (o[u] = new Array(s)),
                h = 0;
              h < s;
              ++h
            )
              (a = f[h]) &&
                (c = t.call(a, a.__data__, h, f)) &&
                ("__data__" in a && (c.__data__ = a.__data__),
                (l[h] = c),
                Ke(l[h], n, e, h, l, er(a, e)));
          return new Yr(o, this._parents, n, e);
        },
        selectAll: function (t) {
          var n = this._name,
            e = this._id;
          "function" != typeof t && (t = vt(t));
          for (
            var r = this._groups, i = r.length, o = [], u = [], a = 0;
            a < i;
            ++a
          )
            for (var c, f = r[a], s = f.length, l = 0; l < s; ++l)
              if ((c = f[l])) {
                for (
                  var h,
                    d = t.call(c, c.__data__, l, f),
                    p = er(c, e),
                    v = 0,
                    y = d.length;
                  v < y;
                  ++v
                )
                  (h = d[v]) && Ke(h, n, e, v, d, p);
                o.push(d), u.push(c);
              }
          return new Yr(o, u, n, e);
        },
        filter: function (t) {
          "function" != typeof t && (t = yt(t));
          for (
            var n = this._groups, e = n.length, r = new Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var o, u = n[i], a = u.length, c = (r[i] = []), f = 0;
              f < a;
              ++f
            )
              (o = u[f]) && t.call(o, o.__data__, f, u) && c.push(o);
          return new Yr(r, this._parents, this._name, this._id);
        },
        merge: function (t) {
          if (t._id !== this._id) throw new Error();
          for (
            var n = this._groups,
              e = t._groups,
              r = n.length,
              i = e.length,
              o = Math.min(r, i),
              u = new Array(r),
              a = 0;
            a < o;
            ++a
          )
            for (
              var c,
                f = n[a],
                s = e[a],
                l = f.length,
                h = (u[a] = new Array(l)),
                d = 0;
              d < l;
              ++d
            )
              (c = f[d] || s[d]) && (h[d] = c);
          for (; a < r; ++a) u[a] = n[a];
          return new Yr(u, this._parents, this._name, this._id);
        },
        selection: function () {
          return new Rr(this._groups, this._parents);
        },
        transition: function () {
          for (
            var t = this._name,
              n = this._id,
              e = jr(),
              r = this._groups,
              i = r.length,
              o = 0;
            o < i;
            ++o
          )
            for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)
              if ((u = a[f])) {
                var s = er(u, n);
                Ke(u, t, e, f, a, {
                  time: s.time + s.delay + s.duration,
                  delay: 0,
                  duration: s.duration,
                  ease: s.ease,
                });
              }
          return new Yr(r, this._parents, t, e);
        },
        call: Hr.call,
        nodes: Hr.nodes,
        node: Hr.node,
        size: Hr.size,
        empty: Hr.empty,
        each: Hr.each,
        on: function (t, n) {
          var e = this._id;
          return arguments.length < 2
            ? er(this.node(), e).on.on(t)
            : this.each(Lr(e, t, n));
        },
        attr: function (t, n) {
          var e = Nt(t),
            r = "transform" === e ? dr : gr;
          return this.attrTween(
            t,
            "function" == typeof n
              ? (e.local ? Mr : wr)(e, r, yr(this, "attr." + t, n))
              : null == n
              ? (e.local ? br : _r)(e)
              : (e.local ? xr : mr)(e, r, n)
          );
        },
        attrTween: function (t, n) {
          var e = "attr." + t;
          if (arguments.length < 2) return (e = this.tween(e)) && e._value;
          if (null == n) return this.tween(e, null);
          if ("function" != typeof n) throw new Error();
          var r = Nt(t);
          return this.tween(e, (r.local ? Er : Tr)(r, n));
        },
        style: function (t, n, e) {
          var r = "transform" == (t += "") ? hr : gr;
          return null == n
            ? this.styleTween(
                t,
                (function (t, n) {
                  var e, r, i;
                  return function () {
                    var o = qt(this, t),
                      u = (this.style.removeProperty(t), qt(this, t));
                    return o === u
                      ? null
                      : o === e && u === r
                      ? i
                      : (i = n((e = o), (r = u)));
                  };
                })(t, r)
              ).on("end.style." + t, qr(t))
            : "function" == typeof n
            ? this.styleTween(
                t,
                (function (t, n, e) {
                  var r, i, o;
                  return function () {
                    var u = qt(this, t),
                      a = e(this),
                      c = a + "";
                    return (
                      null == a &&
                        (this.style.removeProperty(t), (c = a = qt(this, t))),
                      u === c
                        ? null
                        : u === r && c === i
                        ? o
                        : ((i = c), (o = n((r = u), a)))
                    );
                  };
                })(t, r, yr(this, "style." + t, n))
              ).each(
                (function (t, n) {
                  var e,
                    r,
                    i,
                    o,
                    u = "style." + n,
                    a = "end." + u;
                  return function () {
                    var c = nr(this, t),
                      f = c.on,
                      s = null == c.value[u] ? o || (o = qr(n)) : void 0;
                    (f === e && i === s) || (r = (e = f).copy()).on(a, (i = s)),
                      (c.on = r);
                  };
                })(this._id, t)
              )
            : this.styleTween(
                t,
                (function (t, n, e) {
                  var r,
                    i,
                    o = e + "";
                  return function () {
                    var u = qt(this, t);
                    return u === o ? null : u === r ? i : (i = n((r = u), e));
                  };
                })(t, r, n),
                e
              ).on("end.style." + t, null);
        },
        styleTween: function (t, n, e) {
          var r = "style." + (t += "");
          if (arguments.length < 2) return (r = this.tween(r)) && r._value;
          if (null == n) return this.tween(r, null);
          if ("function" != typeof n) throw new Error();
          return this.tween(r, Ur(t, n, null == e ? "" : e));
        },
        text: function (t) {
          return this.tween(
            "text",
            "function" == typeof t
              ? (function (t) {
                  return function () {
                    var n = t(this);
                    this.textContent = null == n ? "" : n;
                  };
                })(yr(this, "text", t))
              : (function (t) {
                  return function () {
                    this.textContent = t;
                  };
                })(null == t ? "" : t + "")
          );
        },
        textTween: function (t) {
          var n = "text";
          if (arguments.length < 1) return (n = this.tween(n)) && n._value;
          if (null == t) return this.tween(n, null);
          if ("function" != typeof t) throw new Error();
          return this.tween(n, Br(t));
        },
        remove: function () {
          return this.on(
            "end.remove",
            ((t = this._id),
            function () {
              var n = this.parentNode;
              for (var e in this.__transition) if (+e !== t) return;
              n && n.removeChild(this);
            })
          );
          var t;
        },
        tween: function (t, n) {
          var e = this._id;
          if (((t += ""), arguments.length < 2)) {
            for (
              var r, i = er(this.node(), e).tween, o = 0, u = i.length;
              o < u;
              ++o
            )
              if ((r = i[o]).name === t) return r.value;
            return null;
          }
          return this.each((null == n ? pr : vr)(e, t, n));
        },
        delay: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(("function" == typeof t ? Sr : kr)(n, t))
            : er(this.node(), n).delay;
        },
        duration: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(("function" == typeof t ? Cr : Pr)(n, t))
            : er(this.node(), n).duration;
        },
        ease: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(zr(n, t))
            : er(this.node(), n).ease;
        },
        end: function () {
          var t,
            n,
            e = this,
            r = e._id,
            i = e.size();
          return new Promise(function (o, u) {
            var a = { value: u },
              c = {
                value: function () {
                  0 == --i && o();
                },
              };
            e.each(function () {
              var e = nr(this, r),
                i = e.on;
              i !== t &&
                ((n = (t = i).copy())._.cancel.push(a),
                n._.interrupt.push(a),
                n._.end.push(c)),
                (e.on = n);
            });
          });
        },
      };
      var $r = { time: null, delay: 0, duration: 250, ease: Gr };
      function Wr(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]); )
          if (!(t = t.parentNode)) return ($r.time = Ie()), $r;
        return e;
      }
      (Mn.prototype.interrupt = function (t) {
        return this.each(function () {
          ar(this, t);
        });
      }),
        (Mn.prototype.transition = function (t) {
          var n, e;
          t instanceof Yr
            ? ((n = t._id), (t = t._name))
            : ((n = jr()),
              ((e = $r).time = Ie()),
              (t = null == t ? null : t + ""));
          for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
            for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)
              (u = a[f]) && Ke(u, t, n, f, a, e || Wr(u, n));
          return new Yr(r, this._parents, t, n);
        });
      var Zr = [null],
        Qr = function (t, n) {
          var e,
            r,
            i = t.__transition;
          if (i)
            for (r in ((n = null == n ? null : n + ""), i))
              if ((e = i[r]).state > 1 && e.name === n)
                return new Yr([[t]], Zr, n, +r);
          return null;
        },
        Jr = function (t) {
          return function () {
            return t;
          };
        },
        Kr = function (t, n, e) {
          (this.target = t), (this.type = n), (this.selection = e);
        };
      function ti() {
        sn.stopImmediatePropagation();
      }
      var ni = function () {
          sn.preventDefault(), sn.stopImmediatePropagation();
        },
        ei = { name: "drag" },
        ri = { name: "space" },
        ii = { name: "handle" },
        oi = { name: "center" };
      function ui(t) {
        return [+t[0], +t[1]];
      }
      function ai(t) {
        return [ui(t[0]), ui(t[1])];
      }
      function ci(t) {
        return function (n) {
          return ze(n, sn.touches, t);
        };
      }
      var fi = {
          name: "x",
          handles: ["w", "e"].map(gi),
          input: function (t, n) {
            return null == t
              ? null
              : [
                  [+t[0], n[0][1]],
                  [+t[1], n[1][1]],
                ];
          },
          output: function (t) {
            return t && [t[0][0], t[1][0]];
          },
        },
        si = {
          name: "y",
          handles: ["n", "s"].map(gi),
          input: function (t, n) {
            return null == t
              ? null
              : [
                  [n[0][0], +t[0]],
                  [n[1][0], +t[1]],
                ];
          },
          output: function (t) {
            return t && [t[0][1], t[1][1]];
          },
        },
        li = {
          name: "xy",
          handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(gi),
          input: function (t) {
            return null == t ? null : ai(t);
          },
          output: function (t) {
            return t;
          },
        },
        hi = {
          overlay: "crosshair",
          selection: "move",
          n: "ns-resize",
          e: "ew-resize",
          s: "ns-resize",
          w: "ew-resize",
          nw: "nwse-resize",
          ne: "nesw-resize",
          se: "nwse-resize",
          sw: "nesw-resize",
        },
        di = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" },
        pi = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" },
        vi = {
          overlay: 1,
          selection: 1,
          n: null,
          e: 1,
          s: null,
          w: -1,
          nw: -1,
          ne: 1,
          se: 1,
          sw: -1,
        },
        yi = {
          overlay: 1,
          selection: 1,
          n: -1,
          e: null,
          s: 1,
          w: null,
          nw: -1,
          ne: -1,
          se: 1,
          sw: 1,
        };
      function gi(t) {
        return { type: t };
      }
      function _i() {
        return !sn.ctrlKey && !sn.button;
      }
      function bi() {
        var t = this.ownerSVGElement || this;
        return t.hasAttribute("viewBox")
          ? [
              [(t = t.viewBox.baseVal).x, t.y],
              [t.x + t.width, t.y + t.height],
            ]
          : [
              [0, 0],
              [t.width.baseVal.value, t.height.baseVal.value],
            ];
      }
      function mi() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function xi(t) {
        for (; !t.__brush; ) if (!(t = t.parentNode)) return;
        return t.__brush;
      }
      function wi(t) {
        return t[0][0] === t[1][0] || t[0][1] === t[1][1];
      }
      function Mi(t) {
        var n = t.__brush;
        return n ? n.dim.output(n.selection) : null;
      }
      function Ni() {
        return Ti(fi);
      }
      function Ai() {
        return Ti(si);
      }
      var Ei = function () {
        return Ti(li);
      };
      function Ti(t) {
        var n,
          e = bi,
          r = _i,
          i = mi,
          o = !0,
          u = lt("start", "brush", "end"),
          a = 6;
        function c(n) {
          var e = n
            .property("__brush", v)
            .selectAll(".overlay")
            .data([gi("overlay")]);
          e
            .enter()
            .append("rect")
            .attr("class", "overlay")
            .attr("pointer-events", "all")
            .attr("cursor", hi.overlay)
            .merge(e)
            .each(function () {
              var t = xi(this).extent;
              Nn(this)
                .attr("x", t[0][0])
                .attr("y", t[0][1])
                .attr("width", t[1][0] - t[0][0])
                .attr("height", t[1][1] - t[0][1]);
            }),
            n
              .selectAll(".selection")
              .data([gi("selection")])
              .enter()
              .append("rect")
              .attr("class", "selection")
              .attr("cursor", hi.selection)
              .attr("fill", "#777")
              .attr("fill-opacity", 0.3)
              .attr("stroke", "#fff")
              .attr("shape-rendering", "crispEdges");
          var r = n.selectAll(".handle").data(t.handles, function (t) {
            return t.type;
          });
          r.exit().remove(),
            r
              .enter()
              .append("rect")
              .attr("class", function (t) {
                return "handle handle--" + t.type;
              })
              .attr("cursor", function (t) {
                return hi[t.type];
              }),
            n
              .each(f)
              .attr("fill", "none")
              .attr("pointer-events", "all")
              .on("mousedown.brush", h)
              .filter(i)
              .on("touchstart.brush", h)
              .on("touchmove.brush", d)
              .on("touchend.brush touchcancel.brush", p)
              .style("touch-action", "none")
              .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function f() {
          var t = Nn(this),
            n = xi(this).selection;
          n
            ? (t
                .selectAll(".selection")
                .style("display", null)
                .attr("x", n[0][0])
                .attr("y", n[0][1])
                .attr("width", n[1][0] - n[0][0])
                .attr("height", n[1][1] - n[0][1]),
              t
                .selectAll(".handle")
                .style("display", null)
                .attr("x", function (t) {
                  return "e" === t.type[t.type.length - 1]
                    ? n[1][0] - a / 2
                    : n[0][0] - a / 2;
                })
                .attr("y", function (t) {
                  return "s" === t.type[0] ? n[1][1] - a / 2 : n[0][1] - a / 2;
                })
                .attr("width", function (t) {
                  return "n" === t.type || "s" === t.type
                    ? n[1][0] - n[0][0] + a
                    : a;
                })
                .attr("height", function (t) {
                  return "e" === t.type || "w" === t.type
                    ? n[1][1] - n[0][1] + a
                    : a;
                }))
            : t
                .selectAll(".selection,.handle")
                .style("display", "none")
                .attr("x", null)
                .attr("y", null)
                .attr("width", null)
                .attr("height", null);
        }
        function s(t, n, e) {
          return (!e && t.__brush.emitter) || new l(t, n);
        }
        function l(t, n) {
          (this.that = t),
            (this.args = n),
            (this.state = t.__brush),
            (this.active = 0);
        }
        function h() {
          if ((!n || sn.touches) && r.apply(this, arguments)) {
            var e,
              i,
              u,
              a,
              c,
              l,
              h,
              d,
              p,
              v,
              y,
              g = this,
              _ = sn.target.__data__.type,
              b =
                "selection" === (o && sn.metaKey ? (_ = "overlay") : _)
                  ? ei
                  : o && sn.altKey
                  ? oi
                  : ii,
              m = t === si ? null : vi[_],
              x = t === fi ? null : yi[_],
              w = xi(g),
              M = w.extent,
              N = w.selection,
              A = M[0][0],
              E = M[0][1],
              T = M[1][0],
              S = M[1][1],
              k = 0,
              C = 0,
              P = m && x && o && sn.shiftKey,
              z = sn.touches ? ci(sn.changedTouches[0].identifier) : Le,
              L = z(g),
              R = L,
              q = s(g, arguments, !0).beforestart();
            "overlay" === _
              ? (N && (p = !0),
                (w.selection = N = [
                  [(e = t === si ? A : L[0]), (u = t === fi ? E : L[1])],
                  [(c = t === si ? T : e), (h = t === fi ? S : u)],
                ]))
              : ((e = N[0][0]), (u = N[0][1]), (c = N[1][0]), (h = N[1][1])),
              (i = e),
              (a = u),
              (l = c),
              (d = h);
            var D = Nn(g).attr("pointer-events", "none"),
              U = D.selectAll(".overlay").attr("cursor", hi[_]);
            if (sn.touches) (q.moved = B), (q.ended = Y);
            else {
              var O = Nn(sn.view)
                .on("mousemove.brush", B, !0)
                .on("mouseup.brush", Y, !0);
              o && O.on("keydown.brush", I, !0).on("keyup.brush", j, !0),
                Tn(sn.view);
            }
            ti(), ar(g), f.call(g), q.start();
          }
          function B() {
            var t = z(g);
            !P ||
              v ||
              y ||
              (Math.abs(t[0] - R[0]) > Math.abs(t[1] - R[1])
                ? (y = !0)
                : (v = !0)),
              (R = t),
              (p = !0),
              ni(),
              F();
          }
          function F() {
            var t;
            switch (((k = R[0] - L[0]), (C = R[1] - L[1]), b)) {
              case ri:
              case ei:
                m &&
                  ((k = Math.max(A - e, Math.min(T - c, k))),
                  (i = e + k),
                  (l = c + k)),
                  x &&
                    ((C = Math.max(E - u, Math.min(S - h, C))),
                    (a = u + C),
                    (d = h + C));
                break;
              case ii:
                m < 0
                  ? ((k = Math.max(A - e, Math.min(T - e, k))),
                    (i = e + k),
                    (l = c))
                  : m > 0 &&
                    ((k = Math.max(A - c, Math.min(T - c, k))),
                    (i = e),
                    (l = c + k)),
                  x < 0
                    ? ((C = Math.max(E - u, Math.min(S - u, C))),
                      (a = u + C),
                      (d = h))
                    : x > 0 &&
                      ((C = Math.max(E - h, Math.min(S - h, C))),
                      (a = u),
                      (d = h + C));
                break;
              case oi:
                m &&
                  ((i = Math.max(A, Math.min(T, e - k * m))),
                  (l = Math.max(A, Math.min(T, c + k * m)))),
                  x &&
                    ((a = Math.max(E, Math.min(S, u - C * x))),
                    (d = Math.max(E, Math.min(S, h + C * x))));
            }
            l < i &&
              ((m *= -1),
              (t = e),
              (e = c),
              (c = t),
              (t = i),
              (i = l),
              (l = t),
              _ in di && U.attr("cursor", hi[(_ = di[_])])),
              d < a &&
                ((x *= -1),
                (t = u),
                (u = h),
                (h = t),
                (t = a),
                (a = d),
                (d = t),
                _ in pi && U.attr("cursor", hi[(_ = pi[_])])),
              w.selection && (N = w.selection),
              v && ((i = N[0][0]), (l = N[1][0])),
              y && ((a = N[0][1]), (d = N[1][1])),
              (N[0][0] === i &&
                N[0][1] === a &&
                N[1][0] === l &&
                N[1][1] === d) ||
                ((w.selection = [
                  [i, a],
                  [l, d],
                ]),
                f.call(g),
                q.brush());
          }
          function Y() {
            if ((ti(), sn.touches)) {
              if (sn.touches.length) return;
              n && clearTimeout(n),
                (n = setTimeout(function () {
                  n = null;
                }, 500));
            } else
              Sn(sn.view, p),
                O.on(
                  "keydown.brush keyup.brush mousemove.brush mouseup.brush",
                  null
                );
            D.attr("pointer-events", "all"),
              U.attr("cursor", hi.overlay),
              w.selection && (N = w.selection),
              wi(N) && ((w.selection = null), f.call(g)),
              q.end();
          }
          function I() {
            switch (sn.keyCode) {
              case 16:
                P = m && x;
                break;
              case 18:
                b === ii &&
                  (m && ((c = l - k * m), (e = i + k * m)),
                  x && ((h = d - C * x), (u = a + C * x)),
                  (b = oi),
                  F());
                break;
              case 32:
                (b !== ii && b !== oi) ||
                  (m < 0 ? (c = l - k) : m > 0 && (e = i - k),
                  x < 0 ? (h = d - C) : x > 0 && (u = a - C),
                  (b = ri),
                  U.attr("cursor", hi.selection),
                  F());
                break;
              default:
                return;
            }
            ni();
          }
          function j() {
            switch (sn.keyCode) {
              case 16:
                P && ((v = y = P = !1), F());
                break;
              case 18:
                b === oi &&
                  (m < 0 ? (c = l) : m > 0 && (e = i),
                  x < 0 ? (h = d) : x > 0 && (u = a),
                  (b = ii),
                  F());
                break;
              case 32:
                b === ri &&
                  (sn.altKey
                    ? (m && ((c = l - k * m), (e = i + k * m)),
                      x && ((h = d - C * x), (u = a + C * x)),
                      (b = oi))
                    : (m < 0 ? (c = l) : m > 0 && (e = i),
                      x < 0 ? (h = d) : x > 0 && (u = a),
                      (b = ii)),
                  U.attr("cursor", hi[_]),
                  F());
                break;
              default:
                return;
            }
            ni();
          }
        }
        function d() {
          s(this, arguments).moved();
        }
        function p() {
          s(this, arguments).ended();
        }
        function v() {
          var n = this.__brush || { selection: null };
          return (n.extent = ai(e.apply(this, arguments))), (n.dim = t), n;
        }
        return (
          (c.move = function (n, e) {
            n.selection
              ? n
                  .on("start.brush", function () {
                    s(this, arguments).beforestart().start();
                  })
                  .on("interrupt.brush end.brush", function () {
                    s(this, arguments).end();
                  })
                  .tween("brush", function () {
                    var n = this,
                      r = n.__brush,
                      i = s(n, arguments),
                      o = r.selection,
                      u = t.input(
                        "function" == typeof e ? e.apply(this, arguments) : e,
                        r.extent
                      ),
                      a = ke(o, u);
                    function c(t) {
                      (r.selection = 1 === t && null === u ? null : a(t)),
                        f.call(n),
                        i.brush();
                    }
                    return null !== o && null !== u ? c : c(1);
                  })
              : n.each(function () {
                  var n = this,
                    r = arguments,
                    i = n.__brush,
                    o = t.input(
                      "function" == typeof e ? e.apply(n, r) : e,
                      i.extent
                    ),
                    u = s(n, r).beforestart();
                  ar(n),
                    (i.selection = null === o ? null : o),
                    f.call(n),
                    u.start().brush().end();
                });
          }),
          (c.clear = function (t) {
            c.move(t, null);
          }),
          (l.prototype = {
            beforestart: function () {
              return (
                1 == ++this.active &&
                  ((this.state.emitter = this), (this.starting = !0)),
                this
              );
            },
            start: function () {
              return (
                this.starting
                  ? ((this.starting = !1), this.emit("start"))
                  : this.emit("brush"),
                this
              );
            },
            brush: function () {
              return this.emit("brush"), this;
            },
            end: function () {
              return (
                0 == --this.active &&
                  (delete this.state.emitter, this.emit("end")),
                this
              );
            },
            emit: function (n) {
              yn(new Kr(c, n, t.output(this.state.selection)), u.apply, u, [
                n,
                this.that,
                this.args,
              ]);
            },
          }),
          (c.extent = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : Jr(ai(t))), c)
              : e;
          }),
          (c.filter = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : Jr(!!t)), c)
              : r;
          }),
          (c.touchable = function (t) {
            return arguments.length
              ? ((i = "function" == typeof t ? t : Jr(!!t)), c)
              : i;
          }),
          (c.handleSize = function (t) {
            return arguments.length ? ((a = +t), c) : a;
          }),
          (c.keyModifiers = function (t) {
            return arguments.length ? ((o = !!t), c) : o;
          }),
          (c.on = function () {
            var t = u.on.apply(u, arguments);
            return t === u ? c : t;
          }),
          c
        );
      }
      var Si = Math.cos,
        ki = Math.sin,
        Ci = Math.PI,
        Pi = Ci / 2,
        zi = 2 * Ci,
        Li = Math.max;
      function Ri(t) {
        return function (n, e) {
          return t(
            n.source.value + n.target.value,
            e.source.value + e.target.value
          );
        };
      }
      var qi = function () {
          var t = 0,
            n = null,
            e = null,
            r = null;
          function i(i) {
            var o,
              u,
              a,
              c,
              f,
              s,
              l = i.length,
              h = [],
              d = M(l),
              p = [],
              v = [],
              y = (v.groups = new Array(l)),
              g = new Array(l * l);
            for (o = 0, f = -1; ++f < l; ) {
              for (u = 0, s = -1; ++s < l; ) u += i[f][s];
              h.push(u), p.push(M(l)), (o += u);
            }
            for (
              n &&
                d.sort(function (t, e) {
                  return n(h[t], h[e]);
                }),
                e &&
                  p.forEach(function (t, n) {
                    t.sort(function (t, r) {
                      return e(i[n][t], i[n][r]);
                    });
                  }),
                c = (o = Li(0, zi - t * l) / o) ? t : zi / l,
                u = 0,
                f = -1;
              ++f < l;

            ) {
              for (a = u, s = -1; ++s < l; ) {
                var _ = d[f],
                  b = p[_][s],
                  m = i[_][b],
                  x = u,
                  w = (u += m * o);
                g[b * l + _] = {
                  index: _,
                  subindex: b,
                  startAngle: x,
                  endAngle: w,
                  value: m,
                };
              }
              (y[_] = { index: _, startAngle: a, endAngle: u, value: h[_] }),
                (u += c);
            }
            for (f = -1; ++f < l; )
              for (s = f - 1; ++s < l; ) {
                var N = g[s * l + f],
                  A = g[f * l + s];
                (N.value || A.value) &&
                  v.push(
                    N.value < A.value
                      ? { source: A, target: N }
                      : { source: N, target: A }
                  );
              }
            return r ? v.sort(r) : v;
          }
          return (
            (i.padAngle = function (n) {
              return arguments.length ? ((t = Li(0, n)), i) : t;
            }),
            (i.sortGroups = function (t) {
              return arguments.length ? ((n = t), i) : n;
            }),
            (i.sortSubgroups = function (t) {
              return arguments.length ? ((e = t), i) : e;
            }),
            (i.sortChords = function (t) {
              return arguments.length
                ? (null == t ? (r = null) : ((r = Ri(t))._ = t), i)
                : r && r._;
            }),
            i
          );
        },
        Di = Array.prototype.slice,
        Ui = function (t) {
          return function () {
            return t;
          };
        },
        Oi = Math.PI,
        Bi = 2 * Oi,
        Fi = Bi - 1e-6;
      function Yi() {
        (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
      }
      function Ii() {
        return new Yi();
      }
      Yi.prototype = Ii.prototype = {
        constructor: Yi,
        moveTo: function (t, n) {
          this._ +=
            "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
        },
        closePath: function () {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
        },
        lineTo: function (t, n) {
          this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
        },
        quadraticCurveTo: function (t, n, e, r) {
          this._ +=
            "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r);
        },
        bezierCurveTo: function (t, n, e, r, i, o) {
          this._ +=
            "C" +
            +t +
            "," +
            +n +
            "," +
            +e +
            "," +
            +r +
            "," +
            (this._x1 = +i) +
            "," +
            (this._y1 = +o);
        },
        arcTo: function (t, n, e, r, i) {
          (t = +t), (n = +n), (e = +e), (r = +r), (i = +i);
          var o = this._x1,
            u = this._y1,
            a = e - t,
            c = r - n,
            f = o - t,
            s = u - n,
            l = f * f + s * s;
          if (i < 0) throw new Error("negative radius: " + i);
          if (null === this._x1)
            this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
          else if (l > 1e-6)
            if (Math.abs(s * a - c * f) > 1e-6 && i) {
              var h = e - o,
                d = r - u,
                p = a * a + c * c,
                v = h * h + d * d,
                y = Math.sqrt(p),
                g = Math.sqrt(l),
                _ =
                  i * Math.tan((Oi - Math.acos((p + l - v) / (2 * y * g))) / 2),
                b = _ / g,
                m = _ / y;
              Math.abs(b - 1) > 1e-6 &&
                (this._ += "L" + (t + b * f) + "," + (n + b * s)),
                (this._ +=
                  "A" +
                  i +
                  "," +
                  i +
                  ",0,0," +
                  +(s * h > f * d) +
                  "," +
                  (this._x1 = t + m * a) +
                  "," +
                  (this._y1 = n + m * c));
            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
          else;
        },
        arc: function (t, n, e, r, i, o) {
          (t = +t), (n = +n), (o = !!o);
          var u = (e = +e) * Math.cos(r),
            a = e * Math.sin(r),
            c = t + u,
            f = n + a,
            s = 1 ^ o,
            l = o ? r - i : i - r;
          if (e < 0) throw new Error("negative radius: " + e);
          null === this._x1
            ? (this._ += "M" + c + "," + f)
            : (Math.abs(this._x1 - c) > 1e-6 ||
                Math.abs(this._y1 - f) > 1e-6) &&
              (this._ += "L" + c + "," + f),
            e &&
              (l < 0 && (l = (l % Bi) + Bi),
              l > Fi
                ? (this._ +=
                    "A" +
                    e +
                    "," +
                    e +
                    ",0,1," +
                    s +
                    "," +
                    (t - u) +
                    "," +
                    (n - a) +
                    "A" +
                    e +
                    "," +
                    e +
                    ",0,1," +
                    s +
                    "," +
                    (this._x1 = c) +
                    "," +
                    (this._y1 = f))
                : l > 1e-6 &&
                  (this._ +=
                    "A" +
                    e +
                    "," +
                    e +
                    ",0," +
                    +(l >= Oi) +
                    "," +
                    s +
                    "," +
                    (this._x1 = t + e * Math.cos(i)) +
                    "," +
                    (this._y1 = n + e * Math.sin(i))));
        },
        rect: function (t, n, e, r) {
          this._ +=
            "M" +
            (this._x0 = this._x1 = +t) +
            "," +
            (this._y0 = this._y1 = +n) +
            "h" +
            +e +
            "v" +
            +r +
            "h" +
            -e +
            "Z";
        },
        toString: function () {
          return this._;
        },
      };
      var ji = Ii;
      function Hi(t) {
        return t.source;
      }
      function Vi(t) {
        return t.target;
      }
      function Xi(t) {
        return t.radius;
      }
      function Gi(t) {
        return t.startAngle;
      }
      function $i(t) {
        return t.endAngle;
      }
      var Wi = function () {
        var t = Hi,
          n = Vi,
          e = Xi,
          r = Gi,
          i = $i,
          o = null;
        function u() {
          var u,
            a = Di.call(arguments),
            c = t.apply(this, a),
            f = n.apply(this, a),
            s = +e.apply(this, ((a[0] = c), a)),
            l = r.apply(this, a) - Pi,
            h = i.apply(this, a) - Pi,
            d = s * Si(l),
            p = s * ki(l),
            v = +e.apply(this, ((a[0] = f), a)),
            y = r.apply(this, a) - Pi,
            g = i.apply(this, a) - Pi;
          if (
            (o || (o = u = ji()),
            o.moveTo(d, p),
            o.arc(0, 0, s, l, h),
            (l === y && h === g) ||
              (o.quadraticCurveTo(0, 0, v * Si(y), v * ki(y)),
              o.arc(0, 0, v, y, g)),
            o.quadraticCurveTo(0, 0, d, p),
            o.closePath(),
            u)
          )
            return (o = null), u + "" || null;
        }
        return (
          (u.radius = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : Ui(+t)), u)
              : e;
          }),
          (u.startAngle = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : Ui(+t)), u)
              : r;
          }),
          (u.endAngle = function (t) {
            return arguments.length
              ? ((i = "function" == typeof t ? t : Ui(+t)), u)
              : i;
          }),
          (u.source = function (n) {
            return arguments.length ? ((t = n), u) : t;
          }),
          (u.target = function (t) {
            return arguments.length ? ((n = t), u) : n;
          }),
          (u.context = function (t) {
            return arguments.length ? ((o = null == t ? null : t), u) : o;
          }),
          u
        );
      };
      function Zi() {}
      function Qi(t, n) {
        var e = new Zi();
        if (t instanceof Zi)
          t.each(function (t, n) {
            e.set(n, t);
          });
        else if (Array.isArray(t)) {
          var r,
            i = -1,
            o = t.length;
          if (null == n) for (; ++i < o; ) e.set(i, t[i]);
          else for (; ++i < o; ) e.set(n((r = t[i]), i, t), r);
        } else if (t) for (var u in t) e.set(u, t[u]);
        return e;
      }
      Zi.prototype = Qi.prototype = {
        constructor: Zi,
        has: function (t) {
          return "$" + t in this;
        },
        get: function (t) {
          return this["$" + t];
        },
        set: function (t, n) {
          return (this["$" + t] = n), this;
        },
        remove: function (t) {
          var n = "$" + t;
          return n in this && delete this[n];
        },
        clear: function () {
          for (var t in this) "$" === t[0] && delete this[t];
        },
        keys: function () {
          var t = [];
          for (var n in this) "$" === n[0] && t.push(n.slice(1));
          return t;
        },
        values: function () {
          var t = [];
          for (var n in this) "$" === n[0] && t.push(this[n]);
          return t;
        },
        entries: function () {
          var t = [];
          for (var n in this)
            "$" === n[0] && t.push({ key: n.slice(1), value: this[n] });
          return t;
        },
        size: function () {
          var t = 0;
          for (var n in this) "$" === n[0] && ++t;
          return t;
        },
        empty: function () {
          for (var t in this) if ("$" === t[0]) return !1;
          return !0;
        },
        each: function (t) {
          for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this);
        },
      };
      var Ji = Qi,
        Ki = function () {
          var t,
            n,
            e,
            r = [],
            i = [];
          function o(e, i, u, a) {
            if (i >= r.length)
              return null != t && e.sort(t), null != n ? n(e) : e;
            for (
              var c, f, s, l = -1, h = e.length, d = r[i++], p = Ji(), v = u();
              ++l < h;

            )
              (s = p.get((c = d((f = e[l])) + ""))) ? s.push(f) : p.set(c, [f]);
            return (
              p.each(function (t, n) {
                a(v, n, o(t, i, u, a));
              }),
              v
            );
          }
          return (e = {
            object: function (t) {
              return o(t, 0, to, no);
            },
            map: function (t) {
              return o(t, 0, eo, ro);
            },
            entries: function (t) {
              return (function t(e, o) {
                if (++o > r.length) return e;
                var u,
                  a = i[o - 1];
                return (
                  null != n && o >= r.length
                    ? (u = e.entries())
                    : ((u = []),
                      e.each(function (n, e) {
                        u.push({ key: e, values: t(n, o) });
                      })),
                  null != a
                    ? u.sort(function (t, n) {
                        return a(t.key, n.key);
                      })
                    : u
                );
              })(o(t, 0, eo, ro), 0);
            },
            key: function (t) {
              return r.push(t), e;
            },
            sortKeys: function (t) {
              return (i[r.length - 1] = t), e;
            },
            sortValues: function (n) {
              return (t = n), e;
            },
            rollup: function (t) {
              return (n = t), e;
            },
          });
        };
      function to() {
        return {};
      }
      function no(t, n, e) {
        t[n] = e;
      }
      function eo() {
        return Ji();
      }
      function ro(t, n, e) {
        t.set(n, e);
      }
      function io() {}
      var oo = Ji.prototype;
      function uo(t, n) {
        var e = new io();
        if (t instanceof io)
          t.each(function (t) {
            e.add(t);
          });
        else if (t) {
          var r = -1,
            i = t.length;
          if (null == n) for (; ++r < i; ) e.add(t[r]);
          else for (; ++r < i; ) e.add(n(t[r], r, t));
        }
        return e;
      }
      io.prototype = uo.prototype = {
        constructor: io,
        has: oo.has,
        add: function (t) {
          return (this["$" + (t += "")] = t), this;
        },
        remove: oo.remove,
        clear: oo.clear,
        values: oo.keys,
        size: oo.size,
        empty: oo.empty,
        each: oo.each,
      };
      var ao = uo,
        co = function (t) {
          var n = [];
          for (var e in t) n.push(e);
          return n;
        },
        fo = function (t) {
          var n = [];
          for (var e in t) n.push(t[e]);
          return n;
        },
        so = function (t) {
          var n = [];
          for (var e in t) n.push({ key: e, value: t[e] });
          return n;
        },
        lo = Math.PI / 180,
        ho = 180 / Math.PI;
      function po(t) {
        if (t instanceof go) return new go(t.l, t.a, t.b, t.opacity);
        if (t instanceof Ao) return Eo(t);
        t instanceof Zn || (t = $n(t));
        var n,
          e,
          r = xo(t.r),
          i = xo(t.g),
          o = xo(t.b),
          u = _o((0.2225045 * r + 0.7168786 * i + 0.0606169 * o) / 1);
        return (
          r === i && i === o
            ? (n = e = u)
            : ((n = _o(
                (0.4360747 * r + 0.3850649 * i + 0.1430804 * o) / 0.96422
              )),
              (e = _o(
                (0.0139322 * r + 0.0971045 * i + 0.7141733 * o) / 0.82521
              ))),
          new go(116 * u - 16, 500 * (n - u), 200 * (u - e), t.opacity)
        );
      }
      function vo(t, n) {
        return new go(t, 0, 0, null == n ? 1 : n);
      }
      function yo(t, n, e, r) {
        return 1 === arguments.length
          ? po(t)
          : new go(t, n, e, null == r ? 1 : r);
      }
      function go(t, n, e, r) {
        (this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r);
      }
      function _o(t) {
        return t > (6 / 29) * (6 / 29) * (6 / 29)
          ? Math.pow(t, 1 / 3)
          : t / ((6 / 29) * 3 * (6 / 29)) + 4 / 29;
      }
      function bo(t) {
        return t > 6 / 29 ? t * t * t : (6 / 29) * 3 * (6 / 29) * (t - 4 / 29);
      }
      function mo(t) {
        return (
          255 *
          (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
        );
      }
      function xo(t) {
        return (t /= 255) <= 0.04045
          ? t / 12.92
          : Math.pow((t + 0.055) / 1.055, 2.4);
      }
      function wo(t) {
        if (t instanceof Ao) return new Ao(t.h, t.c, t.l, t.opacity);
        if ((t instanceof go || (t = po(t)), 0 === t.a && 0 === t.b))
          return new Ao(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
        var n = Math.atan2(t.b, t.a) * ho;
        return new Ao(
          n < 0 ? n + 360 : n,
          Math.sqrt(t.a * t.a + t.b * t.b),
          t.l,
          t.opacity
        );
      }
      function Mo(t, n, e, r) {
        return 1 === arguments.length
          ? wo(t)
          : new Ao(e, n, t, null == r ? 1 : r);
      }
      function No(t, n, e, r) {
        return 1 === arguments.length
          ? wo(t)
          : new Ao(t, n, e, null == r ? 1 : r);
      }
      function Ao(t, n, e, r) {
        (this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r);
      }
      function Eo(t) {
        if (isNaN(t.h)) return new go(t.l, 0, 0, t.opacity);
        var n = t.h * lo;
        return new go(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
      }
      kn(
        go,
        yo,
        Cn(Pn, {
          brighter: function (t) {
            return new go(
              this.l + 18 * (null == t ? 1 : t),
              this.a,
              this.b,
              this.opacity
            );
          },
          darker: function (t) {
            return new go(
              this.l - 18 * (null == t ? 1 : t),
              this.a,
              this.b,
              this.opacity
            );
          },
          rgb: function () {
            var t = (this.l + 16) / 116,
              n = isNaN(this.a) ? t : t + this.a / 500,
              e = isNaN(this.b) ? t : t - this.b / 200;
            return new Zn(
              mo(
                3.1338561 * (n = 0.96422 * bo(n)) -
                  1.6168667 * (t = 1 * bo(t)) -
                  0.4906146 * (e = 0.82521 * bo(e))
              ),
              mo(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
              mo(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
              this.opacity
            );
          },
        })
      ),
        kn(
          Ao,
          No,
          Cn(Pn, {
            brighter: function (t) {
              return new Ao(
                this.h,
                this.c,
                this.l + 18 * (null == t ? 1 : t),
                this.opacity
              );
            },
            darker: function (t) {
              return new Ao(
                this.h,
                this.c,
                this.l - 18 * (null == t ? 1 : t),
                this.opacity
              );
            },
            rgb: function () {
              return Eo(this).rgb();
            },
          })
        );
      var To = -0.29227,
        So = -1.7884503806,
        ko = 3.5172982438,
        Co = -0.6557636667999999;
      function Po(t) {
        if (t instanceof Lo) return new Lo(t.h, t.s, t.l, t.opacity);
        t instanceof Zn || (t = $n(t));
        var n = t.r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = (Co * r + So * n - ko * e) / (Co + So - ko),
          o = r - i,
          u = (1.97294 * (e - i) - To * o) / -0.90649,
          a = Math.sqrt(u * u + o * o) / (1.97294 * i * (1 - i)),
          c = a ? Math.atan2(u, o) * ho - 120 : NaN;
        return new Lo(c < 0 ? c + 360 : c, a, i, t.opacity);
      }
      function zo(t, n, e, r) {
        return 1 === arguments.length
          ? Po(t)
          : new Lo(t, n, e, null == r ? 1 : r);
      }
      function Lo(t, n, e, r) {
        (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
      }
      kn(
        Lo,
        zo,
        Cn(Pn, {
          brighter: function (t) {
            return (
              (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
              new Lo(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new Lo(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb: function () {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * lo,
              n = +this.l,
              e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
              r = Math.cos(t),
              i = Math.sin(t);
            return new Zn(
              255 * (n + e * (-0.14861 * r + 1.78277 * i)),
              255 * (n + e * (To * r + -0.90649 * i)),
              255 * (n + e * (1.97294 * r)),
              this.opacity
            );
          },
        })
      );
      var Ro = Array.prototype.slice,
        qo = function (t, n) {
          return t - n;
        },
        Do = function (t) {
          return function () {
            return t;
          };
        },
        Uo = function (t, n) {
          for (var e, r = -1, i = n.length; ++r < i; )
            if ((e = Oo(t, n[r]))) return e;
          return 0;
        };
      function Oo(t, n) {
        for (
          var e = n[0], r = n[1], i = -1, o = 0, u = t.length, a = u - 1;
          o < u;
          a = o++
        ) {
          var c = t[o],
            f = c[0],
            s = c[1],
            l = t[a],
            h = l[0],
            d = l[1];
          if (Bo(c, l, n)) return 0;
          s > r != d > r && e < ((h - f) * (r - s)) / (d - s) + f && (i = -i);
        }
        return i;
      }
      function Bo(t, n, e) {
        var r, i, o, u;
        return (
          (function (t, n, e) {
            return (
              (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1])
            );
          })(t, n, e) &&
          ((i = t[(r = +(t[0] === n[0]))]),
          (o = e[r]),
          (u = n[r]),
          (i <= o && o <= u) || (u <= o && o <= i))
        );
      }
      var Fo = function () {},
        Yo = [
          [],
          [
            [
              [1, 1.5],
              [0.5, 1],
            ],
          ],
          [
            [
              [1.5, 1],
              [1, 1.5],
            ],
          ],
          [
            [
              [1.5, 1],
              [0.5, 1],
            ],
          ],
          [
            [
              [1, 0.5],
              [1.5, 1],
            ],
          ],
          [
            [
              [1, 1.5],
              [0.5, 1],
            ],
            [
              [1, 0.5],
              [1.5, 1],
            ],
          ],
          [
            [
              [1, 0.5],
              [1, 1.5],
            ],
          ],
          [
            [
              [1, 0.5],
              [0.5, 1],
            ],
          ],
          [
            [
              [0.5, 1],
              [1, 0.5],
            ],
          ],
          [
            [
              [1, 1.5],
              [1, 0.5],
            ],
          ],
          [
            [
              [0.5, 1],
              [1, 0.5],
            ],
            [
              [1.5, 1],
              [1, 1.5],
            ],
          ],
          [
            [
              [1.5, 1],
              [1, 0.5],
            ],
          ],
          [
            [
              [0.5, 1],
              [1.5, 1],
            ],
          ],
          [
            [
              [1, 1.5],
              [1.5, 1],
            ],
          ],
          [
            [
              [0.5, 1],
              [1, 1.5],
            ],
          ],
          [],
        ],
        Io = function () {
          var t = 1,
            n = 1,
            e = C,
            r = a;
          function i(t) {
            var n = e(t);
            if (Array.isArray(n)) n = n.slice().sort(qo);
            else {
              var r = g(t),
                i = r[0],
                u = r[1];
              (n = k(i, u, n)),
                (n = M(Math.floor(i / n) * n, Math.floor(u / n) * n, n));
            }
            return n.map(function (n) {
              return o(t, n);
            });
          }
          function o(e, i) {
            var o = [],
              a = [];
            return (
              (function (e, r, i) {
                var o,
                  a,
                  c,
                  f,
                  s,
                  l,
                  h = new Array(),
                  d = new Array();
                (o = a = -1), (f = e[0] >= r), Yo[f << 1].forEach(p);
                for (; ++o < t - 1; )
                  (c = f), (f = e[o + 1] >= r), Yo[c | (f << 1)].forEach(p);
                Yo[f << 0].forEach(p);
                for (; ++a < n - 1; ) {
                  for (
                    o = -1,
                      f = e[a * t + t] >= r,
                      s = e[a * t] >= r,
                      Yo[(f << 1) | (s << 2)].forEach(p);
                    ++o < t - 1;

                  )
                    (c = f),
                      (f = e[a * t + t + o + 1] >= r),
                      (l = s),
                      (s = e[a * t + o + 1] >= r),
                      Yo[c | (f << 1) | (s << 2) | (l << 3)].forEach(p);
                  Yo[f | (s << 3)].forEach(p);
                }
                (o = -1), (s = e[a * t] >= r), Yo[s << 2].forEach(p);
                for (; ++o < t - 1; )
                  (l = s),
                    (s = e[a * t + o + 1] >= r),
                    Yo[(s << 2) | (l << 3)].forEach(p);
                function p(t) {
                  var n,
                    e,
                    r = [t[0][0] + o, t[0][1] + a],
                    c = [t[1][0] + o, t[1][1] + a],
                    f = u(r),
                    s = u(c);
                  (n = d[f])
                    ? (e = h[s])
                      ? (delete d[n.end],
                        delete h[e.start],
                        n === e
                          ? (n.ring.push(c), i(n.ring))
                          : (h[n.start] = d[e.end] = {
                              start: n.start,
                              end: e.end,
                              ring: n.ring.concat(e.ring),
                            }))
                      : (delete d[n.end], n.ring.push(c), (d[(n.end = s)] = n))
                    : (n = h[s])
                    ? (e = d[f])
                      ? (delete h[n.start],
                        delete d[e.end],
                        n === e
                          ? (n.ring.push(c), i(n.ring))
                          : (h[e.start] = d[n.end] = {
                              start: e.start,
                              end: n.end,
                              ring: e.ring.concat(n.ring),
                            }))
                      : (delete h[n.start],
                        n.ring.unshift(r),
                        (h[(n.start = f)] = n))
                    : (h[f] = d[s] = { start: f, end: s, ring: [r, c] });
                }
                Yo[s << 3].forEach(p);
              })(e, i, function (t) {
                r(t, e, i),
                  (function (t) {
                    for (
                      var n = 0,
                        e = t.length,
                        r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1];
                      ++n < e;

                    )
                      r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
                    return r;
                  })(t) > 0
                    ? o.push([t])
                    : a.push(t);
              }),
              a.forEach(function (t) {
                for (var n, e = 0, r = o.length; e < r; ++e)
                  if (-1 !== Uo((n = o[e])[0], t)) return void n.push(t);
              }),
              { type: "MultiPolygon", value: i, coordinates: o }
            );
          }
          function u(n) {
            return 2 * n[0] + n[1] * (t + 1) * 4;
          }
          function a(e, r, i) {
            e.forEach(function (e) {
              var o,
                u = e[0],
                a = e[1],
                c = 0 | u,
                f = 0 | a,
                s = r[f * t + c];
              u > 0 &&
                u < t &&
                c === u &&
                ((o = r[f * t + c - 1]), (e[0] = u + (i - o) / (s - o) - 0.5)),
                a > 0 &&
                  a < n &&
                  f === a &&
                  ((o = r[(f - 1) * t + c]),
                  (e[1] = a + (i - o) / (s - o) - 0.5));
            });
          }
          return (
            (i.contour = o),
            (i.size = function (e) {
              if (!arguments.length) return [t, n];
              var r = Math.ceil(e[0]),
                o = Math.ceil(e[1]);
              if (!(r > 0 && o > 0)) throw new Error("invalid size");
              return (t = r), (n = o), i;
            }),
            (i.thresholds = function (t) {
              return arguments.length
                ? ((e =
                    "function" == typeof t
                      ? t
                      : Array.isArray(t)
                      ? Do(Ro.call(t))
                      : Do(t)),
                  i)
                : e;
            }),
            (i.smooth = function (t) {
              return arguments.length ? ((r = t ? a : Fo), i) : r === a;
            }),
            i
          );
        };
      function jo(t, n, e) {
        for (var r = t.width, i = t.height, o = 1 + (e << 1), u = 0; u < i; ++u)
          for (var a = 0, c = 0; a < r + e; ++a)
            a < r && (c += t.data[a + u * r]),
              a >= e &&
                (a >= o && (c -= t.data[a - o + u * r]),
                (n.data[a - e + u * r] =
                  c / Math.min(a + 1, r - 1 + o - a, o)));
      }
      function Ho(t, n, e) {
        for (var r = t.width, i = t.height, o = 1 + (e << 1), u = 0; u < r; ++u)
          for (var a = 0, c = 0; a < i + e; ++a)
            a < i && (c += t.data[u + a * r]),
              a >= e &&
                (a >= o && (c -= t.data[u + (a - o) * r]),
                (n.data[u + (a - e) * r] =
                  c / Math.min(a + 1, i - 1 + o - a, o)));
      }
      function Vo(t) {
        return t[0];
      }
      function Xo(t) {
        return t[1];
      }
      function Go() {
        return 1;
      }
      var $o = function () {
          var t = Vo,
            n = Xo,
            e = Go,
            r = 960,
            i = 500,
            o = 20,
            u = 2,
            a = 3 * o,
            c = (r + 2 * a) >> u,
            f = (i + 2 * a) >> u,
            s = Do(20);
          function l(r) {
            var i = new Float32Array(c * f),
              l = new Float32Array(c * f);
            r.forEach(function (r, o, s) {
              var l = (+t(r, o, s) + a) >> u,
                h = (+n(r, o, s) + a) >> u,
                d = +e(r, o, s);
              l >= 0 && l < c && h >= 0 && h < f && (i[l + h * c] += d);
            }),
              jo(
                { width: c, height: f, data: i },
                { width: c, height: f, data: l },
                o >> u
              ),
              Ho(
                { width: c, height: f, data: l },
                { width: c, height: f, data: i },
                o >> u
              ),
              jo(
                { width: c, height: f, data: i },
                { width: c, height: f, data: l },
                o >> u
              ),
              Ho(
                { width: c, height: f, data: l },
                { width: c, height: f, data: i },
                o >> u
              ),
              jo(
                { width: c, height: f, data: i },
                { width: c, height: f, data: l },
                o >> u
              ),
              Ho(
                { width: c, height: f, data: l },
                { width: c, height: f, data: i },
                o >> u
              );
            var d = s(i);
            if (!Array.isArray(d)) {
              var p = q(i);
              (d = k(0, p, d)), (d = M(0, Math.floor(p / d) * d, d)).shift();
            }
            return Io().thresholds(d).size([c, f])(i).map(h);
          }
          function h(t) {
            return (
              (t.value *= Math.pow(2, -2 * u)), t.coordinates.forEach(d), t
            );
          }
          function d(t) {
            t.forEach(p);
          }
          function p(t) {
            t.forEach(v);
          }
          function v(t) {
            (t[0] = t[0] * Math.pow(2, u) - a),
              (t[1] = t[1] * Math.pow(2, u) - a);
          }
          function y() {
            return (c = (r + 2 * (a = 3 * o)) >> u), (f = (i + 2 * a) >> u), l;
          }
          return (
            (l.x = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : Do(+n)), l)
                : t;
            }),
            (l.y = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : Do(+t)), l)
                : n;
            }),
            (l.weight = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : Do(+t)), l)
                : e;
            }),
            (l.size = function (t) {
              if (!arguments.length) return [r, i];
              var n = Math.ceil(t[0]),
                e = Math.ceil(t[1]);
              if (!(n >= 0 || n >= 0)) throw new Error("invalid size");
              return (r = n), (i = e), y();
            }),
            (l.cellSize = function (t) {
              if (!arguments.length) return 1 << u;
              if (!((t = +t) >= 1)) throw new Error("invalid cell size");
              return (u = Math.floor(Math.log(t) / Math.LN2)), y();
            }),
            (l.thresholds = function (t) {
              return arguments.length
                ? ((s =
                    "function" == typeof t
                      ? t
                      : Array.isArray(t)
                      ? Do(Ro.call(t))
                      : Do(t)),
                  l)
                : s;
            }),
            (l.bandwidth = function (t) {
              if (!arguments.length) return Math.sqrt(o * (o + 1));
              if (!((t = +t) >= 0)) throw new Error("invalid bandwidth");
              return (o = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2)), y();
            }),
            l
          );
        },
        Wo = function (t) {
          return function () {
            return t;
          };
        };
      function Zo(t, n, e, r, i, o, u, a, c, f) {
        (this.target = t),
          (this.type = n),
          (this.subject = e),
          (this.identifier = r),
          (this.active = i),
          (this.x = o),
          (this.y = u),
          (this.dx = a),
          (this.dy = c),
          (this._ = f);
      }
      function Qo() {
        return !sn.ctrlKey && !sn.button;
      }
      function Jo() {
        return this.parentNode;
      }
      function Ko(t) {
        return null == t ? { x: sn.x, y: sn.y } : t;
      }
      function tu() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      Zo.prototype.on = function () {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t;
      };
      var nu = function () {
          var t,
            n,
            e,
            r,
            i = Qo,
            o = Jo,
            u = Ko,
            a = tu,
            c = {},
            f = lt("start", "drag", "end"),
            s = 0,
            l = 0;
          function h(t) {
            t.on("mousedown.drag", d)
              .filter(a)
              .on("touchstart.drag", y)
              .on("touchmove.drag", g)
              .on("touchend.drag touchcancel.drag", _)
              .style("touch-action", "none")
              .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
          }
          function d() {
            if (!r && i.apply(this, arguments)) {
              var u = b("mouse", o.apply(this, arguments), Le, this, arguments);
              u &&
                (Nn(sn.view)
                  .on("mousemove.drag", p, !0)
                  .on("mouseup.drag", v, !0),
                Tn(sn.view),
                An(),
                (e = !1),
                (t = sn.clientX),
                (n = sn.clientY),
                u("start"));
            }
          }
          function p() {
            if ((En(), !e)) {
              var r = sn.clientX - t,
                i = sn.clientY - n;
              e = r * r + i * i > l;
            }
            c.mouse("drag");
          }
          function v() {
            Nn(sn.view).on("mousemove.drag mouseup.drag", null),
              Sn(sn.view, e),
              En(),
              c.mouse("end");
          }
          function y() {
            if (i.apply(this, arguments)) {
              var t,
                n,
                e = sn.changedTouches,
                r = o.apply(this, arguments),
                u = e.length;
              for (t = 0; t < u; ++t)
                (n = b(e[t].identifier, r, ze, this, arguments)) &&
                  (An(), n("start"));
            }
          }
          function g() {
            var t,
              n,
              e = sn.changedTouches,
              r = e.length;
            for (t = 0; t < r; ++t)
              (n = c[e[t].identifier]) && (En(), n("drag"));
          }
          function _() {
            var t,
              n,
              e = sn.changedTouches,
              i = e.length;
            for (
              r && clearTimeout(r),
                r = setTimeout(function () {
                  r = null;
                }, 500),
                t = 0;
              t < i;
              ++t
            )
              (n = c[e[t].identifier]) && (An(), n("end"));
          }
          function b(t, n, e, r, i) {
            var o,
              a,
              l,
              d = e(n, t),
              p = f.copy();
            if (
              yn(
                new Zo(h, "beforestart", o, t, s, d[0], d[1], 0, 0, p),
                function () {
                  return (
                    null != (sn.subject = o = u.apply(r, i)) &&
                    ((a = o.x - d[0] || 0), (l = o.y - d[1] || 0), !0)
                  );
                }
              )
            )
              return function u(f) {
                var v,
                  y = d;
                switch (f) {
                  case "start":
                    (c[t] = u), (v = s++);
                    break;
                  case "end":
                    delete c[t], --s;
                  case "drag":
                    (d = e(n, t)), (v = s);
                }
                yn(
                  new Zo(
                    h,
                    f,
                    o,
                    t,
                    v,
                    d[0] + a,
                    d[1] + l,
                    d[0] - y[0],
                    d[1] - y[1],
                    p
                  ),
                  p.apply,
                  p,
                  [f, r, i]
                );
              };
          }
          return (
            (h.filter = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : Wo(!!t)), h)
                : i;
            }),
            (h.container = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : Wo(t)), h)
                : o;
            }),
            (h.subject = function (t) {
              return arguments.length
                ? ((u = "function" == typeof t ? t : Wo(t)), h)
                : u;
            }),
            (h.touchable = function (t) {
              return arguments.length
                ? ((a = "function" == typeof t ? t : Wo(!!t)), h)
                : a;
            }),
            (h.on = function () {
              var t = f.on.apply(f, arguments);
              return t === f ? h : t;
            }),
            (h.clickDistance = function (t) {
              return arguments.length ? ((l = (t = +t) * t), h) : Math.sqrt(l);
            }),
            h
          );
        },
        eu = {},
        ru = {};
      function iu(t) {
        return new Function(
          "d",
          "return {" +
            t
              .map(function (t, n) {
                return JSON.stringify(t) + ": d[" + n + '] || ""';
              })
              .join(",") +
            "}"
        );
      }
      function ou(t) {
        var n = Object.create(null),
          e = [];
        return (
          t.forEach(function (t) {
            for (var r in t) r in n || e.push((n[r] = r));
          }),
          e
        );
      }
      function uu(t, n) {
        var e = t + "",
          r = e.length;
        return r < n ? new Array(n - r + 1).join(0) + e : e;
      }
      function au(t) {
        var n,
          e = t.getUTCHours(),
          r = t.getUTCMinutes(),
          i = t.getUTCSeconds(),
          o = t.getUTCMilliseconds();
        return isNaN(t)
          ? "Invalid Date"
          : ((n = t.getUTCFullYear()) < 0
              ? "-" + uu(-n, 6)
              : n > 9999
              ? "+" + uu(n, 6)
              : uu(n, 4)) +
              "-" +
              uu(t.getUTCMonth() + 1, 2) +
              "-" +
              uu(t.getUTCDate(), 2) +
              (o
                ? "T" +
                  uu(e, 2) +
                  ":" +
                  uu(r, 2) +
                  ":" +
                  uu(i, 2) +
                  "." +
                  uu(o, 3) +
                  "Z"
                : i
                ? "T" + uu(e, 2) + ":" + uu(r, 2) + ":" + uu(i, 2) + "Z"
                : r || e
                ? "T" + uu(e, 2) + ":" + uu(r, 2) + "Z"
                : "");
      }
      var cu = function (t) {
          var n = new RegExp('["' + t + "\n\r]"),
            e = t.charCodeAt(0);
          function r(t, n) {
            var r,
              i = [],
              o = t.length,
              u = 0,
              a = 0,
              c = o <= 0,
              f = !1;
            function s() {
              if (c) return ru;
              if (f) return (f = !1), eu;
              var n,
                r,
                i = u;
              if (34 === t.charCodeAt(i)) {
                for (
                  ;
                  (u++ < o && 34 !== t.charCodeAt(u)) ||
                  34 === t.charCodeAt(++u);

                );
                return (
                  (n = u) >= o
                    ? (c = !0)
                    : 10 === (r = t.charCodeAt(u++))
                    ? (f = !0)
                    : 13 === r && ((f = !0), 10 === t.charCodeAt(u) && ++u),
                  t.slice(i + 1, n - 1).replace(/""/g, '"')
                );
              }
              for (; u < o; ) {
                if (10 === (r = t.charCodeAt((n = u++)))) f = !0;
                else if (13 === r) (f = !0), 10 === t.charCodeAt(u) && ++u;
                else if (r !== e) continue;
                return t.slice(i, n);
              }
              return (c = !0), t.slice(i, o);
            }
            for (
              10 === t.charCodeAt(o - 1) && --o,
                13 === t.charCodeAt(o - 1) && --o;
              (r = s()) !== ru;

            ) {
              for (var l = []; r !== eu && r !== ru; ) l.push(r), (r = s());
              (n && null == (l = n(l, a++))) || i.push(l);
            }
            return i;
          }
          function i(n, e) {
            return n.map(function (n) {
              return e
                .map(function (t) {
                  return u(n[t]);
                })
                .join(t);
            });
          }
          function o(n) {
            return n.map(u).join(t);
          }
          function u(t) {
            return null == t
              ? ""
              : t instanceof Date
              ? au(t)
              : n.test((t += ""))
              ? '"' + t.replace(/"/g, '""') + '"'
              : t;
          }
          return {
            parse: function (t, n) {
              var e,
                i,
                o = r(t, function (t, r) {
                  if (e) return e(t, r - 1);
                  (i = t),
                    (e = n
                      ? (function (t, n) {
                          var e = iu(t);
                          return function (r, i) {
                            return n(e(r), i, t);
                          };
                        })(t, n)
                      : iu(t));
                });
              return (o.columns = i || []), o;
            },
            parseRows: r,
            format: function (n, e) {
              return (
                null == e && (e = ou(n)),
                [e.map(u).join(t)].concat(i(n, e)).join("\n")
              );
            },
            formatBody: function (t, n) {
              return null == n && (n = ou(t)), i(t, n).join("\n");
            },
            formatRows: function (t) {
              return t.map(o).join("\n");
            },
            formatRow: o,
            formatValue: u,
          };
        },
        fu = cu(","),
        su = fu.parse,
        lu = fu.parseRows,
        hu = fu.format,
        du = fu.formatBody,
        pu = fu.formatRows,
        vu = fu.formatRow,
        yu = fu.formatValue,
        gu = cu("\t"),
        _u = gu.parse,
        bu = gu.parseRows,
        mu = gu.format,
        xu = gu.formatBody,
        wu = gu.formatRows,
        Mu = gu.formatRow,
        Nu = gu.formatValue;
      function Au(t) {
        for (var n in t) {
          var e,
            r,
            i = t[n].trim();
          if (i)
            if ("true" === i) i = !0;
            else if ("false" === i) i = !1;
            else if ("NaN" === i) i = NaN;
            else if (isNaN((e = +i))) {
              if (
                !(r = i.match(
                  /^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/
                ))
              )
                continue;
              Eu &&
                r[4] &&
                !r[7] &&
                (i = i.replace(/-/g, "/").replace(/T/, " ")),
                (i = new Date(i));
            } else i = e;
          else i = null;
          t[n] = i;
        }
        return t;
      }
      var Eu =
        new Date("2019-01-01T00:00").getHours() ||
        new Date("2019-07-01T00:00").getHours();
      function Tu(t) {
        return +t;
      }
      function Su(t) {
        return t * t;
      }
      function ku(t) {
        return t * (2 - t);
      }
      function Cu(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
      }
      var Pu = (function t(n) {
          function e(t) {
            return Math.pow(t, n);
          }
          return (n = +n), (e.exponent = t), e;
        })(3),
        zu = (function t(n) {
          function e(t) {
            return 1 - Math.pow(1 - t, n);
          }
          return (n = +n), (e.exponent = t), e;
        })(3),
        Lu = (function t(n) {
          function e(t) {
            return (
              ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
            );
          }
          return (n = +n), (e.exponent = t), e;
        })(3),
        Ru = Math.PI,
        qu = Ru / 2;
      function Du(t) {
        return 1 - Math.cos(t * qu);
      }
      function Uu(t) {
        return Math.sin(t * qu);
      }
      function Ou(t) {
        return (1 - Math.cos(Ru * t)) / 2;
      }
      function Bu(t) {
        return Math.pow(2, 10 * t - 10);
      }
      function Fu(t) {
        return 1 - Math.pow(2, -10 * t);
      }
      function Yu(t) {
        return (
          ((t *= 2) <= 1
            ? Math.pow(2, 10 * t - 10)
            : 2 - Math.pow(2, 10 - 10 * t)) / 2
        );
      }
      function Iu(t) {
        return 1 - Math.sqrt(1 - t * t);
      }
      function ju(t) {
        return Math.sqrt(1 - --t * t);
      }
      function Hu(t) {
        return (
          ((t *= 2) <= 1
            ? 1 - Math.sqrt(1 - t * t)
            : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
        );
      }
      function Vu(t) {
        return 1 - Xu(1 - t);
      }
      function Xu(t) {
        return (t = +t) < 4 / 11
          ? 7.5625 * t * t
          : t < 8 / 11
          ? 7.5625 * (t -= 6 / 11) * t + 3 / 4
          : t < 10 / 11
          ? 7.5625 * (t -= 9 / 11) * t + 15 / 16
          : 7.5625 * (t -= 21 / 22) * t + 63 / 64;
      }
      function Gu(t) {
        return ((t *= 2) <= 1 ? 1 - Xu(1 - t) : Xu(t - 1) + 1) / 2;
      }
      var $u = (function t(n) {
          function e(t) {
            return t * t * ((n + 1) * t - n);
          }
          return (n = +n), (e.overshoot = t), e;
        })(1.70158),
        Wu = (function t(n) {
          function e(t) {
            return --t * t * ((n + 1) * t + n) + 1;
          }
          return (n = +n), (e.overshoot = t), e;
        })(1.70158),
        Zu = (function t(n) {
          function e(t) {
            return (
              ((t *= 2) < 1
                ? t * t * ((n + 1) * t - n)
                : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
            );
          }
          return (n = +n), (e.overshoot = t), e;
        })(1.70158),
        Qu = 2 * Math.PI,
        Ju = (function t(n, e) {
          var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Qu);
          function i(t) {
            return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e);
          }
          return (
            (i.amplitude = function (n) {
              return t(n, e * Qu);
            }),
            (i.period = function (e) {
              return t(n, e);
            }),
            i
          );
        })(1, 0.3),
        Ku = (function t(n, e) {
          var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Qu);
          function i(t) {
            return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e);
          }
          return (
            (i.amplitude = function (n) {
              return t(n, e * Qu);
            }),
            (i.period = function (e) {
              return t(n, e);
            }),
            i
          );
        })(1, 0.3),
        ta = (function t(n, e) {
          var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Qu);
          function i(t) {
            return (
              ((t = 2 * t - 1) < 0
                ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e)
                : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
            );
          }
          return (
            (i.amplitude = function (n) {
              return t(n, e * Qu);
            }),
            (i.period = function (e) {
              return t(n, e);
            }),
            i
          );
        })(1, 0.3);
      function na(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.blob();
      }
      var ea = function (t, n) {
        return fetch(t, n).then(na);
      };
      function ra(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.arrayBuffer();
      }
      var ia = function (t, n) {
        return fetch(t, n).then(ra);
      };
      function oa(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.text();
      }
      var ua = function (t, n) {
        return fetch(t, n).then(oa);
      };
      function aa(t) {
        return function (n, e, r) {
          return (
            2 === arguments.length &&
              "function" == typeof e &&
              ((r = e), (e = void 0)),
            ua(n, e).then(function (n) {
              return t(n, r);
            })
          );
        };
      }
      function ca(t, n, e, r) {
        3 === arguments.length &&
          "function" == typeof e &&
          ((r = e), (e = void 0));
        var i = cu(t);
        return ua(n, e).then(function (t) {
          return i.parse(t, r);
        });
      }
      var fa = aa(su),
        sa = aa(_u),
        la = function (t, n) {
          return new Promise(function (e, r) {
            var i = new Image();
            for (var o in n) i[o] = n[o];
            (i.onerror = r),
              (i.onload = function () {
                e(i);
              }),
              (i.src = t);
          });
        };
      function ha(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.json();
      }
      var da = function (t, n) {
        return fetch(t, n).then(ha);
      };
      function pa(t) {
        return function (n, e) {
          return ua(n, e).then(function (n) {
            return new DOMParser().parseFromString(n, t);
          });
        };
      }
      var va = pa("application/xml"),
        ya = pa("text/html"),
        ga = pa("image/svg+xml"),
        _a = function (t, n) {
          var e;
          function r() {
            var r,
              i,
              o = e.length,
              u = 0,
              a = 0;
            for (r = 0; r < o; ++r) (u += (i = e[r]).x), (a += i.y);
            for (u = u / o - t, a = a / o - n, r = 0; r < o; ++r)
              ((i = e[r]).x -= u), (i.y -= a);
          }
          return (
            null == t && (t = 0),
            null == n && (n = 0),
            (r.initialize = function (t) {
              e = t;
            }),
            (r.x = function (n) {
              return arguments.length ? ((t = +n), r) : t;
            }),
            (r.y = function (t) {
              return arguments.length ? ((n = +t), r) : n;
            }),
            r
          );
        },
        ba = function (t) {
          return function () {
            return t;
          };
        },
        ma = function () {
          return 1e-6 * (Math.random() - 0.5);
        };
      function xa(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t;
        var i,
          o,
          u,
          a,
          c,
          f,
          s,
          l,
          h,
          d = t._root,
          p = { data: r },
          v = t._x0,
          y = t._y0,
          g = t._x1,
          _ = t._y1;
        if (!d) return (t._root = p), t;
        for (; d.length; )
          if (
            ((f = n >= (o = (v + g) / 2)) ? (v = o) : (g = o),
            (s = e >= (u = (y + _) / 2)) ? (y = u) : (_ = u),
            (i = d),
            !(d = d[(l = (s << 1) | f)]))
          )
            return (i[l] = p), t;
        if (
          ((a = +t._x.call(null, d.data)),
          (c = +t._y.call(null, d.data)),
          n === a && e === c)
        )
          return (p.next = d), i ? (i[l] = p) : (t._root = p), t;
        do {
          (i = i ? (i[l] = new Array(4)) : (t._root = new Array(4))),
            (f = n >= (o = (v + g) / 2)) ? (v = o) : (g = o),
            (s = e >= (u = (y + _) / 2)) ? (y = u) : (_ = u);
        } while ((l = (s << 1) | f) == (h = ((c >= u) << 1) | (a >= o)));
        return (i[h] = d), (i[l] = p), t;
      }
      var wa = function (t, n, e, r, i) {
        (this.node = t),
          (this.x0 = n),
          (this.y0 = e),
          (this.x1 = r),
          (this.y1 = i);
      };
      function Ma(t) {
        return t[0];
      }
      function Na(t) {
        return t[1];
      }
      function Aa(t, n, e) {
        var r = new Ea(
          null == n ? Ma : n,
          null == e ? Na : e,
          NaN,
          NaN,
          NaN,
          NaN
        );
        return null == t ? r : r.addAll(t);
      }
      function Ea(t, n, e, r, i, o) {
        (this._x = t),
          (this._y = n),
          (this._x0 = e),
          (this._y0 = r),
          (this._x1 = i),
          (this._y1 = o),
          (this._root = void 0);
      }
      function Ta(t) {
        for (var n = { data: t.data }, e = n; (t = t.next); )
          e = e.next = { data: t.data };
        return n;
      }
      var Sa = (Aa.prototype = Ea.prototype);
      function ka(t) {
        return t.x + t.vx;
      }
      function Ca(t) {
        return t.y + t.vy;
      }
      (Sa.copy = function () {
        var t,
          n,
          e = new Ea(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
          r = this._root;
        if (!r) return e;
        if (!r.length) return (e._root = Ta(r)), e;
        for (
          t = [{ source: r, target: (e._root = new Array(4)) }];
          (r = t.pop());

        )
          for (var i = 0; i < 4; ++i)
            (n = r.source[i]) &&
              (n.length
                ? t.push({ source: n, target: (r.target[i] = new Array(4)) })
                : (r.target[i] = Ta(n)));
        return e;
      }),
        (Sa.add = function (t) {
          var n = +this._x.call(null, t),
            e = +this._y.call(null, t);
          return xa(this.cover(n, e), n, e, t);
        }),
        (Sa.addAll = function (t) {
          var n,
            e,
            r,
            i,
            o = t.length,
            u = new Array(o),
            a = new Array(o),
            c = 1 / 0,
            f = 1 / 0,
            s = -1 / 0,
            l = -1 / 0;
          for (e = 0; e < o; ++e)
            isNaN((r = +this._x.call(null, (n = t[e])))) ||
              isNaN((i = +this._y.call(null, n))) ||
              ((u[e] = r),
              (a[e] = i),
              r < c && (c = r),
              r > s && (s = r),
              i < f && (f = i),
              i > l && (l = i));
          if (c > s || f > l) return this;
          for (this.cover(c, f).cover(s, l), e = 0; e < o; ++e)
            xa(this, u[e], a[e], t[e]);
          return this;
        }),
        (Sa.cover = function (t, n) {
          if (isNaN((t = +t)) || isNaN((n = +n))) return this;
          var e = this._x0,
            r = this._y0,
            i = this._x1,
            o = this._y1;
          if (isNaN(e))
            (i = (e = Math.floor(t)) + 1), (o = (r = Math.floor(n)) + 1);
          else {
            for (
              var u, a, c = i - e, f = this._root;
              e > t || t >= i || r > n || n >= o;

            )
              switch (
                ((a = ((n < r) << 1) | (t < e)),
                ((u = new Array(4))[a] = f),
                (f = u),
                (c *= 2),
                a)
              ) {
                case 0:
                  (i = e + c), (o = r + c);
                  break;
                case 1:
                  (e = i - c), (o = r + c);
                  break;
                case 2:
                  (i = e + c), (r = o - c);
                  break;
                case 3:
                  (e = i - c), (r = o - c);
              }
            this._root && this._root.length && (this._root = f);
          }
          return (
            (this._x0 = e), (this._y0 = r), (this._x1 = i), (this._y1 = o), this
          );
        }),
        (Sa.data = function () {
          var t = [];
          return (
            this.visit(function (n) {
              if (!n.length)
                do {
                  t.push(n.data);
                } while ((n = n.next));
            }),
            t
          );
        }),
        (Sa.extent = function (t) {
          return arguments.length
            ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
            : isNaN(this._x0)
            ? void 0
            : [
                [this._x0, this._y0],
                [this._x1, this._y1],
              ];
        }),
        (Sa.find = function (t, n, e) {
          var r,
            i,
            o,
            u,
            a,
            c,
            f,
            s = this._x0,
            l = this._y0,
            h = this._x1,
            d = this._y1,
            p = [],
            v = this._root;
          for (
            v && p.push(new wa(v, s, l, h, d)),
              null == e
                ? (e = 1 / 0)
                : ((s = t - e),
                  (l = n - e),
                  (h = t + e),
                  (d = n + e),
                  (e *= e));
            (c = p.pop());

          )
            if (
              !(
                !(v = c.node) ||
                (i = c.x0) > h ||
                (o = c.y0) > d ||
                (u = c.x1) < s ||
                (a = c.y1) < l
              )
            )
              if (v.length) {
                var y = (i + u) / 2,
                  g = (o + a) / 2;
                p.push(
                  new wa(v[3], y, g, u, a),
                  new wa(v[2], i, g, y, a),
                  new wa(v[1], y, o, u, g),
                  new wa(v[0], i, o, y, g)
                ),
                  (f = ((n >= g) << 1) | (t >= y)) &&
                    ((c = p[p.length - 1]),
                    (p[p.length - 1] = p[p.length - 1 - f]),
                    (p[p.length - 1 - f] = c));
              } else {
                var _ = t - +this._x.call(null, v.data),
                  b = n - +this._y.call(null, v.data),
                  m = _ * _ + b * b;
                if (m < e) {
                  var x = Math.sqrt((e = m));
                  (s = t - x),
                    (l = n - x),
                    (h = t + x),
                    (d = n + x),
                    (r = v.data);
                }
              }
          return r;
        }),
        (Sa.remove = function (t) {
          if (
            isNaN((o = +this._x.call(null, t))) ||
            isNaN((u = +this._y.call(null, t)))
          )
            return this;
          var n,
            e,
            r,
            i,
            o,
            u,
            a,
            c,
            f,
            s,
            l,
            h,
            d = this._root,
            p = this._x0,
            v = this._y0,
            y = this._x1,
            g = this._y1;
          if (!d) return this;
          if (d.length)
            for (;;) {
              if (
                ((f = o >= (a = (p + y) / 2)) ? (p = a) : (y = a),
                (s = u >= (c = (v + g) / 2)) ? (v = c) : (g = c),
                (n = d),
                !(d = d[(l = (s << 1) | f)]))
              )
                return this;
              if (!d.length) break;
              (n[(l + 1) & 3] || n[(l + 2) & 3] || n[(l + 3) & 3]) &&
                ((e = n), (h = l));
            }
          for (; d.data !== t; ) if (((r = d), !(d = d.next))) return this;
          return (
            (i = d.next) && delete d.next,
            r
              ? (i ? (r.next = i) : delete r.next, this)
              : n
              ? (i ? (n[l] = i) : delete n[l],
                (d = n[0] || n[1] || n[2] || n[3]) &&
                  d === (n[3] || n[2] || n[1] || n[0]) &&
                  !d.length &&
                  (e ? (e[h] = d) : (this._root = d)),
                this)
              : ((this._root = i), this)
          );
        }),
        (Sa.removeAll = function (t) {
          for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
          return this;
        }),
        (Sa.root = function () {
          return this._root;
        }),
        (Sa.size = function () {
          var t = 0;
          return (
            this.visit(function (n) {
              if (!n.length)
                do {
                  ++t;
                } while ((n = n.next));
            }),
            t
          );
        }),
        (Sa.visit = function (t) {
          var n,
            e,
            r,
            i,
            o,
            u,
            a = [],
            c = this._root;
          for (
            c && a.push(new wa(c, this._x0, this._y0, this._x1, this._y1));
            (n = a.pop());

          )
            if (
              !t(
                (c = n.node),
                (r = n.x0),
                (i = n.y0),
                (o = n.x1),
                (u = n.y1)
              ) &&
              c.length
            ) {
              var f = (r + o) / 2,
                s = (i + u) / 2;
              (e = c[3]) && a.push(new wa(e, f, s, o, u)),
                (e = c[2]) && a.push(new wa(e, r, s, f, u)),
                (e = c[1]) && a.push(new wa(e, f, i, o, s)),
                (e = c[0]) && a.push(new wa(e, r, i, f, s));
            }
          return this;
        }),
        (Sa.visitAfter = function (t) {
          var n,
            e = [],
            r = [];
          for (
            this._root &&
            e.push(new wa(this._root, this._x0, this._y0, this._x1, this._y1));
            (n = e.pop());

          ) {
            var i = n.node;
            if (i.length) {
              var o,
                u = n.x0,
                a = n.y0,
                c = n.x1,
                f = n.y1,
                s = (u + c) / 2,
                l = (a + f) / 2;
              (o = i[0]) && e.push(new wa(o, u, a, s, l)),
                (o = i[1]) && e.push(new wa(o, s, a, c, l)),
                (o = i[2]) && e.push(new wa(o, u, l, s, f)),
                (o = i[3]) && e.push(new wa(o, s, l, c, f));
            }
            r.push(n);
          }
          for (; (n = r.pop()); ) t(n.node, n.x0, n.y0, n.x1, n.y1);
          return this;
        }),
        (Sa.x = function (t) {
          return arguments.length ? ((this._x = t), this) : this._x;
        }),
        (Sa.y = function (t) {
          return arguments.length ? ((this._y = t), this) : this._y;
        });
      var Pa = function (t) {
        var n,
          e,
          r = 1,
          i = 1;
        function o() {
          for (var t, o, a, c, f, s, l, h = n.length, d = 0; d < i; ++d)
            for (o = Aa(n, ka, Ca).visitAfter(u), t = 0; t < h; ++t)
              (a = n[t]),
                (s = e[a.index]),
                (l = s * s),
                (c = a.x + a.vx),
                (f = a.y + a.vy),
                o.visit(p);
          function p(t, n, e, i, o) {
            var u = t.data,
              h = t.r,
              d = s + h;
            if (!u) return n > c + d || i < c - d || e > f + d || o < f - d;
            if (u.index > a.index) {
              var p = c - u.x - u.vx,
                v = f - u.y - u.vy,
                y = p * p + v * v;
              y < d * d &&
                (0 === p && (y += (p = ma()) * p),
                0 === v && (y += (v = ma()) * v),
                (y = ((d - (y = Math.sqrt(y))) / y) * r),
                (a.vx += (p *= y) * (d = (h *= h) / (l + h))),
                (a.vy += (v *= y) * d),
                (u.vx -= p * (d = 1 - d)),
                (u.vy -= v * d));
            }
          }
        }
        function u(t) {
          if (t.data) return (t.r = e[t.data.index]);
          for (var n = (t.r = 0); n < 4; ++n)
            t[n] && t[n].r > t.r && (t.r = t[n].r);
        }
        function a() {
          if (n) {
            var r,
              i,
              o = n.length;
            for (e = new Array(o), r = 0; r < o; ++r)
              (i = n[r]), (e[i.index] = +t(i, r, n));
          }
        }
        return (
          "function" != typeof t && (t = ba(null == t ? 1 : +t)),
          (o.initialize = function (t) {
            (n = t), a();
          }),
          (o.iterations = function (t) {
            return arguments.length ? ((i = +t), o) : i;
          }),
          (o.strength = function (t) {
            return arguments.length ? ((r = +t), o) : r;
          }),
          (o.radius = function (n) {
            return arguments.length
              ? ((t = "function" == typeof n ? n : ba(+n)), a(), o)
              : t;
          }),
          o
        );
      };
      function za(t) {
        return t.index;
      }
      function La(t, n) {
        var e = t.get(n);
        if (!e) throw new Error("missing: " + n);
        return e;
      }
      var Ra = function (t) {
        var n,
          e,
          r,
          i,
          o,
          u = za,
          a = function (t) {
            return 1 / Math.min(i[t.source.index], i[t.target.index]);
          },
          c = ba(30),
          f = 1;
        function s(r) {
          for (var i = 0, u = t.length; i < f; ++i)
            for (var a, c, s, l, h, d, p, v = 0; v < u; ++v)
              (c = (a = t[v]).source),
                (l = (s = a.target).x + s.vx - c.x - c.vx || ma()),
                (h = s.y + s.vy - c.y - c.vy || ma()),
                (l *= d =
                  (((d = Math.sqrt(l * l + h * h)) - e[v]) / d) * r * n[v]),
                (h *= d),
                (s.vx -= l * (p = o[v])),
                (s.vy -= h * p),
                (c.vx += l * (p = 1 - p)),
                (c.vy += h * p);
        }
        function l() {
          if (r) {
            var a,
              c,
              f = r.length,
              s = t.length,
              l = Ji(r, u);
            for (a = 0, i = new Array(f); a < s; ++a)
              ((c = t[a]).index = a),
                "object" != typeof c.source && (c.source = La(l, c.source)),
                "object" != typeof c.target && (c.target = La(l, c.target)),
                (i[c.source.index] = (i[c.source.index] || 0) + 1),
                (i[c.target.index] = (i[c.target.index] || 0) + 1);
            for (a = 0, o = new Array(s); a < s; ++a)
              (c = t[a]),
                (o[a] =
                  i[c.source.index] / (i[c.source.index] + i[c.target.index]));
            (n = new Array(s)), h(), (e = new Array(s)), d();
          }
        }
        function h() {
          if (r)
            for (var e = 0, i = t.length; e < i; ++e) n[e] = +a(t[e], e, t);
        }
        function d() {
          if (r)
            for (var n = 0, i = t.length; n < i; ++n) e[n] = +c(t[n], n, t);
        }
        return (
          null == t && (t = []),
          (s.initialize = function (t) {
            (r = t), l();
          }),
          (s.links = function (n) {
            return arguments.length ? ((t = n), l(), s) : t;
          }),
          (s.id = function (t) {
            return arguments.length ? ((u = t), s) : u;
          }),
          (s.iterations = function (t) {
            return arguments.length ? ((f = +t), s) : f;
          }),
          (s.strength = function (t) {
            return arguments.length
              ? ((a = "function" == typeof t ? t : ba(+t)), h(), s)
              : a;
          }),
          (s.distance = function (t) {
            return arguments.length
              ? ((c = "function" == typeof t ? t : ba(+t)), d(), s)
              : c;
          }),
          s
        );
      };
      function qa(t) {
        return t.x;
      }
      function Da(t) {
        return t.y;
      }
      var Ua = Math.PI * (3 - Math.sqrt(5)),
        Oa = function (t) {
          var n,
            e = 1,
            r = 0.001,
            i = 1 - Math.pow(r, 1 / 300),
            o = 0,
            u = 0.6,
            a = Ji(),
            c = Ve(s),
            f = lt("tick", "end");
          function s() {
            l(), f.call("tick", n), e < r && (c.stop(), f.call("end", n));
          }
          function l(r) {
            var c,
              f,
              s = t.length;
            void 0 === r && (r = 1);
            for (var l = 0; l < r; ++l)
              for (
                e += (o - e) * i,
                  a.each(function (t) {
                    t(e);
                  }),
                  c = 0;
                c < s;
                ++c
              )
                null == (f = t[c]).fx
                  ? (f.x += f.vx *= u)
                  : ((f.x = f.fx), (f.vx = 0)),
                  null == f.fy
                    ? (f.y += f.vy *= u)
                    : ((f.y = f.fy), (f.vy = 0));
            return n;
          }
          function h() {
            for (var n, e = 0, r = t.length; e < r; ++e) {
              if (
                (((n = t[e]).index = e),
                null != n.fx && (n.x = n.fx),
                null != n.fy && (n.y = n.fy),
                isNaN(n.x) || isNaN(n.y))
              ) {
                var i = 10 * Math.sqrt(e),
                  o = e * Ua;
                (n.x = i * Math.cos(o)), (n.y = i * Math.sin(o));
              }
              (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
            }
          }
          function d(n) {
            return n.initialize && n.initialize(t), n;
          }
          return (
            null == t && (t = []),
            h(),
            (n = {
              tick: l,
              restart: function () {
                return c.restart(s), n;
              },
              stop: function () {
                return c.stop(), n;
              },
              nodes: function (e) {
                return arguments.length ? ((t = e), h(), a.each(d), n) : t;
              },
              alpha: function (t) {
                return arguments.length ? ((e = +t), n) : e;
              },
              alphaMin: function (t) {
                return arguments.length ? ((r = +t), n) : r;
              },
              alphaDecay: function (t) {
                return arguments.length ? ((i = +t), n) : +i;
              },
              alphaTarget: function (t) {
                return arguments.length ? ((o = +t), n) : o;
              },
              velocityDecay: function (t) {
                return arguments.length ? ((u = 1 - t), n) : 1 - u;
              },
              force: function (t, e) {
                return arguments.length > 1
                  ? (null == e ? a.remove(t) : a.set(t, d(e)), n)
                  : a.get(t);
              },
              find: function (n, e, r) {
                var i,
                  o,
                  u,
                  a,
                  c,
                  f = 0,
                  s = t.length;
                for (null == r ? (r = 1 / 0) : (r *= r), f = 0; f < s; ++f)
                  (u = (i = n - (a = t[f]).x) * i + (o = e - a.y) * o) < r &&
                    ((c = a), (r = u));
                return c;
              },
              on: function (t, e) {
                return arguments.length > 1 ? (f.on(t, e), n) : f.on(t);
              },
            })
          );
        },
        Ba = function () {
          var t,
            n,
            e,
            r,
            i = ba(-30),
            o = 1,
            u = 1 / 0,
            a = 0.81;
          function c(r) {
            var i,
              o = t.length,
              u = Aa(t, qa, Da).visitAfter(s);
            for (e = r, i = 0; i < o; ++i) (n = t[i]), u.visit(l);
          }
          function f() {
            if (t) {
              var n,
                e,
                o = t.length;
              for (r = new Array(o), n = 0; n < o; ++n)
                (e = t[n]), (r[e.index] = +i(e, n, t));
            }
          }
          function s(t) {
            var n,
              e,
              i,
              o,
              u,
              a = 0,
              c = 0;
            if (t.length) {
              for (i = o = u = 0; u < 4; ++u)
                (n = t[u]) &&
                  (e = Math.abs(n.value)) &&
                  ((a += n.value), (c += e), (i += e * n.x), (o += e * n.y));
              (t.x = i / c), (t.y = o / c);
            } else {
              ((n = t).x = n.data.x), (n.y = n.data.y);
              do {
                a += r[n.data.index];
              } while ((n = n.next));
            }
            t.value = a;
          }
          function l(t, i, c, f) {
            if (!t.value) return !0;
            var s = t.x - n.x,
              l = t.y - n.y,
              h = f - i,
              d = s * s + l * l;
            if ((h * h) / a < d)
              return (
                d < u &&
                  (0 === s && (d += (s = ma()) * s),
                  0 === l && (d += (l = ma()) * l),
                  d < o && (d = Math.sqrt(o * d)),
                  (n.vx += (s * t.value * e) / d),
                  (n.vy += (l * t.value * e) / d)),
                !0
              );
            if (!(t.length || d >= u)) {
              (t.data !== n || t.next) &&
                (0 === s && (d += (s = ma()) * s),
                0 === l && (d += (l = ma()) * l),
                d < o && (d = Math.sqrt(o * d)));
              do {
                t.data !== n &&
                  ((h = (r[t.data.index] * e) / d),
                  (n.vx += s * h),
                  (n.vy += l * h));
              } while ((t = t.next));
            }
          }
          return (
            (c.initialize = function (n) {
              (t = n), f();
            }),
            (c.strength = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : ba(+t)), f(), c)
                : i;
            }),
            (c.distanceMin = function (t) {
              return arguments.length ? ((o = t * t), c) : Math.sqrt(o);
            }),
            (c.distanceMax = function (t) {
              return arguments.length ? ((u = t * t), c) : Math.sqrt(u);
            }),
            (c.theta = function (t) {
              return arguments.length ? ((a = t * t), c) : Math.sqrt(a);
            }),
            c
          );
        },
        Fa = function (t, n, e) {
          var r,
            i,
            o,
            u = ba(0.1);
          function a(t) {
            for (var u = 0, a = r.length; u < a; ++u) {
              var c = r[u],
                f = c.x - n || 1e-6,
                s = c.y - e || 1e-6,
                l = Math.sqrt(f * f + s * s),
                h = ((o[u] - l) * i[u] * t) / l;
              (c.vx += f * h), (c.vy += s * h);
            }
          }
          function c() {
            if (r) {
              var n,
                e = r.length;
              for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n)
                (o[n] = +t(r[n], n, r)),
                  (i[n] = isNaN(o[n]) ? 0 : +u(r[n], n, r));
            }
          }
          return (
            "function" != typeof t && (t = ba(+t)),
            null == n && (n = 0),
            null == e && (e = 0),
            (a.initialize = function (t) {
              (r = t), c();
            }),
            (a.strength = function (t) {
              return arguments.length
                ? ((u = "function" == typeof t ? t : ba(+t)), c(), a)
                : u;
            }),
            (a.radius = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : ba(+n)), c(), a)
                : t;
            }),
            (a.x = function (t) {
              return arguments.length ? ((n = +t), a) : n;
            }),
            (a.y = function (t) {
              return arguments.length ? ((e = +t), a) : e;
            }),
            a
          );
        },
        Ya = function (t) {
          var n,
            e,
            r,
            i = ba(0.1);
          function o(t) {
            for (var i, o = 0, u = n.length; o < u; ++o)
              (i = n[o]).vx += (r[o] - i.x) * e[o] * t;
          }
          function u() {
            if (n) {
              var o,
                u = n.length;
              for (e = new Array(u), r = new Array(u), o = 0; o < u; ++o)
                e[o] = isNaN((r[o] = +t(n[o], o, n))) ? 0 : +i(n[o], o, n);
            }
          }
          return (
            "function" != typeof t && (t = ba(null == t ? 0 : +t)),
            (o.initialize = function (t) {
              (n = t), u();
            }),
            (o.strength = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : ba(+t)), u(), o)
                : i;
            }),
            (o.x = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : ba(+n)), u(), o)
                : t;
            }),
            o
          );
        },
        Ia = function (t) {
          var n,
            e,
            r,
            i = ba(0.1);
          function o(t) {
            for (var i, o = 0, u = n.length; o < u; ++o)
              (i = n[o]).vy += (r[o] - i.y) * e[o] * t;
          }
          function u() {
            if (n) {
              var o,
                u = n.length;
              for (e = new Array(u), r = new Array(u), o = 0; o < u; ++o)
                e[o] = isNaN((r[o] = +t(n[o], o, n))) ? 0 : +i(n[o], o, n);
            }
          }
          return (
            "function" != typeof t && (t = ba(null == t ? 0 : +t)),
            (o.initialize = function (t) {
              (n = t), u();
            }),
            (o.strength = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : ba(+t)), u(), o)
                : i;
            }),
            (o.y = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : ba(+n)), u(), o)
                : t;
            }),
            o
          );
        },
        ja = function (t, n) {
          if (
            (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf(
              "e"
            )) < 0
          )
            return null;
          var e,
            r = t.slice(0, e);
          return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
        },
        Ha = function (t) {
          return (t = ja(Math.abs(t))) ? t[1] : NaN;
        },
        Va = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function Xa(t) {
        if (!(n = Va.exec(t))) throw new Error("invalid format: " + t);
        var n;
        return new Ga({
          fill: n[1],
          align: n[2],
          sign: n[3],
          symbol: n[4],
          zero: n[5],
          width: n[6],
          comma: n[7],
          precision: n[8] && n[8].slice(1),
          trim: n[9],
          type: n[10],
        });
      }
      function Ga(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
          (this.align = void 0 === t.align ? ">" : t.align + ""),
          (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
          (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? "" : t.type + "");
      }
      (Xa.prototype = Ga.prototype),
        (Ga.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
      var $a,
        Wa,
        Za,
        Qa,
        Ja = function (t, n) {
          var e = ja(t, n);
          if (!e) return t + "";
          var r = e[0],
            i = e[1];
          return i < 0
            ? "0." + new Array(-i).join("0") + r
            : r.length > i + 1
            ? r.slice(0, i + 1) + "." + r.slice(i + 1)
            : r + new Array(i - r.length + 2).join("0");
        },
        Ka = {
          "%": function (t, n) {
            return (100 * t).toFixed(n);
          },
          b: function (t) {
            return Math.round(t).toString(2);
          },
          c: function (t) {
            return t + "";
          },
          d: function (t) {
            return Math.round(t).toString(10);
          },
          e: function (t, n) {
            return t.toExponential(n);
          },
          f: function (t, n) {
            return t.toFixed(n);
          },
          g: function (t, n) {
            return t.toPrecision(n);
          },
          o: function (t) {
            return Math.round(t).toString(8);
          },
          p: function (t, n) {
            return Ja(100 * t, n);
          },
          r: Ja,
          s: function (t, n) {
            var e = ja(t, n);
            if (!e) return t + "";
            var r = e[0],
              i = e[1],
              o =
                i - ($a = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
              u = r.length;
            return o === u
              ? r
              : o > u
              ? r + new Array(o - u + 1).join("0")
              : o > 0
              ? r.slice(0, o) + "." + r.slice(o)
              : "0." +
                new Array(1 - o).join("0") +
                ja(t, Math.max(0, n + o - 1))[0];
          },
          X: function (t) {
            return Math.round(t).toString(16).toUpperCase();
          },
          x: function (t) {
            return Math.round(t).toString(16);
          },
        },
        tc = function (t) {
          return t;
        },
        nc = Array.prototype.map,
        ec = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "µ",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ],
        rc = function (t) {
          var n,
            e,
            r =
              void 0 === t.grouping || void 0 === t.thousands
                ? tc
                : ((n = nc.call(t.grouping, Number)),
                  (e = t.thousands + ""),
                  function (t, r) {
                    for (
                      var i = t.length, o = [], u = 0, a = n[0], c = 0;
                      i > 0 &&
                      a > 0 &&
                      (c + a + 1 > r && (a = Math.max(1, r - c)),
                      o.push(t.substring((i -= a), i + a)),
                      !((c += a + 1) > r));

                    )
                      a = n[(u = (u + 1) % n.length)];
                    return o.reverse().join(e);
                  }),
            i = void 0 === t.currency ? "" : t.currency[0] + "",
            o = void 0 === t.currency ? "" : t.currency[1] + "",
            u = void 0 === t.decimal ? "." : t.decimal + "",
            a =
              void 0 === t.numerals
                ? tc
                : (function (t) {
                    return function (n) {
                      return n.replace(/[0-9]/g, function (n) {
                        return t[+n];
                      });
                    };
                  })(nc.call(t.numerals, String)),
            c = void 0 === t.percent ? "%" : t.percent + "",
            f = void 0 === t.minus ? "-" : t.minus + "",
            s = void 0 === t.nan ? "NaN" : t.nan + "";
          function l(t) {
            var n = (t = Xa(t)).fill,
              e = t.align,
              l = t.sign,
              h = t.symbol,
              d = t.zero,
              p = t.width,
              v = t.comma,
              y = t.precision,
              g = t.trim,
              _ = t.type;
            "n" === _
              ? ((v = !0), (_ = "g"))
              : Ka[_] || (void 0 === y && (y = 12), (g = !0), (_ = "g")),
              (d || ("0" === n && "=" === e)) &&
                ((d = !0), (n = "0"), (e = "="));
            var b =
                "$" === h
                  ? i
                  : "#" === h && /[boxX]/.test(_)
                  ? "0" + _.toLowerCase()
                  : "",
              m = "$" === h ? o : /[%p]/.test(_) ? c : "",
              x = Ka[_],
              w = /[defgprs%]/.test(_);
            function M(t) {
              var i,
                o,
                c,
                h = b,
                M = m;
              if ("c" === _) (M = x(t) + M), (t = "");
              else {
                var N = (t = +t) < 0 || 1 / t < 0;
                if (
                  ((t = isNaN(t) ? s : x(Math.abs(t), y)),
                  g &&
                    (t = (function (t) {
                      t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                        switch (t[r]) {
                          case ".":
                            i = n = r;
                            break;
                          case "0":
                            0 === i && (i = r), (n = r);
                            break;
                          default:
                            if (!+t[r]) break t;
                            i > 0 && (i = 0);
                        }
                      return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
                    })(t)),
                  N && 0 == +t && "+" !== l && (N = !1),
                  (h =
                    (N
                      ? "(" === l
                        ? l
                        : f
                      : "-" === l || "(" === l
                      ? ""
                      : l) + h),
                  (M =
                    ("s" === _ ? ec[8 + $a / 3] : "") +
                    M +
                    (N && "(" === l ? ")" : "")),
                  w)
                )
                  for (i = -1, o = t.length; ++i < o; )
                    if (48 > (c = t.charCodeAt(i)) || c > 57) {
                      (M = (46 === c ? u + t.slice(i + 1) : t.slice(i)) + M),
                        (t = t.slice(0, i));
                      break;
                    }
              }
              v && !d && (t = r(t, 1 / 0));
              var A = h.length + t.length + M.length,
                E = A < p ? new Array(p - A + 1).join(n) : "";
              switch (
                (v &&
                  d &&
                  ((t = r(E + t, E.length ? p - M.length : 1 / 0)), (E = "")),
                e)
              ) {
                case "<":
                  t = h + t + M + E;
                  break;
                case "=":
                  t = h + E + t + M;
                  break;
                case "^":
                  t = E.slice(0, (A = E.length >> 1)) + h + t + M + E.slice(A);
                  break;
                default:
                  t = E + h + t + M;
              }
              return a(t);
            }
            return (
              (y =
                void 0 === y
                  ? 6
                  : /[gprs]/.test(_)
                  ? Math.max(1, Math.min(21, y))
                  : Math.max(0, Math.min(20, y))),
              (M.toString = function () {
                return t + "";
              }),
              M
            );
          }
          return {
            format: l,
            formatPrefix: function (t, n) {
              var e = l((((t = Xa(t)).type = "f"), t)),
                r = 3 * Math.max(-8, Math.min(8, Math.floor(Ha(n) / 3))),
                i = Math.pow(10, -r),
                o = ec[8 + r / 3];
              return function (t) {
                return e(i * t) + o;
              };
            },
          };
        };
      function ic(t) {
        return (Wa = rc(t)), (Za = Wa.format), (Qa = Wa.formatPrefix), Wa;
      }
      ic({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        minus: "-",
      });
      var oc = function (t) {
          return Math.max(0, -Ha(Math.abs(t)));
        },
        uc = function (t, n) {
          return Math.max(
            0,
            3 * Math.max(-8, Math.min(8, Math.floor(Ha(n) / 3))) -
              Ha(Math.abs(t))
          );
        },
        ac = function (t, n) {
          return (
            (t = Math.abs(t)),
            (n = Math.abs(n) - t),
            Math.max(0, Ha(n) - Ha(t)) + 1
          );
        },
        cc = function () {
          return new fc();
        };
      function fc() {
        this.reset();
      }
      fc.prototype = {
        constructor: fc,
        reset: function () {
          this.s = this.t = 0;
        },
        add: function (t) {
          lc(sc, t, this.t),
            lc(this, sc.s, this.s),
            this.s ? (this.t += sc.t) : (this.s = sc.t);
        },
        valueOf: function () {
          return this.s;
        },
      };
      var sc = new fc();
      function lc(t, n, e) {
        var r = (t.s = n + e),
          i = r - n,
          o = r - i;
        t.t = n - o + (e - i);
      }
      var hc = Math.PI,
        dc = hc / 2,
        pc = hc / 4,
        vc = 2 * hc,
        yc = 180 / hc,
        gc = hc / 180,
        _c = Math.abs,
        bc = Math.atan,
        mc = Math.atan2,
        xc = Math.cos,
        wc = Math.ceil,
        Mc = Math.exp,
        Nc = (Math.floor, Math.log),
        Ac = Math.pow,
        Ec = Math.sin,
        Tc =
          Math.sign ||
          function (t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
          },
        Sc = Math.sqrt,
        kc = Math.tan;
      function Cc(t) {
        return t > 1 ? 0 : t < -1 ? hc : Math.acos(t);
      }
      function Pc(t) {
        return t > 1 ? dc : t < -1 ? -dc : Math.asin(t);
      }
      function zc(t) {
        return (t = Ec(t / 2)) * t;
      }
      function Lc() {}
      function Rc(t, n) {
        t && Dc.hasOwnProperty(t.type) && Dc[t.type](t, n);
      }
      var qc = {
          Feature: function (t, n) {
            Rc(t.geometry, n);
          },
          FeatureCollection: function (t, n) {
            for (var e = t.features, r = -1, i = e.length; ++r < i; )
              Rc(e[r].geometry, n);
          },
        },
        Dc = {
          Sphere: function (t, n) {
            n.sphere();
          },
          Point: function (t, n) {
            (t = t.coordinates), n.point(t[0], t[1], t[2]);
          },
          MultiPoint: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              (t = e[r]), n.point(t[0], t[1], t[2]);
          },
          LineString: function (t, n) {
            Uc(t.coordinates, n, 0);
          },
          MultiLineString: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              Uc(e[r], n, 0);
          },
          Polygon: function (t, n) {
            Oc(t.coordinates, n);
          },
          MultiPolygon: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              Oc(e[r], n);
          },
          GeometryCollection: function (t, n) {
            for (var e = t.geometries, r = -1, i = e.length; ++r < i; )
              Rc(e[r], n);
          },
        };
      function Uc(t, n, e) {
        var r,
          i = -1,
          o = t.length - e;
        for (n.lineStart(); ++i < o; ) (r = t[i]), n.point(r[0], r[1], r[2]);
        n.lineEnd();
      }
      function Oc(t, n) {
        var e = -1,
          r = t.length;
        for (n.polygonStart(); ++e < r; ) Uc(t[e], n, 1);
        n.polygonEnd();
      }
      var Bc,
        Fc,
        Yc,
        Ic,
        jc,
        Hc = function (t, n) {
          t && qc.hasOwnProperty(t.type) ? qc[t.type](t, n) : Rc(t, n);
        },
        Vc = cc(),
        Xc = cc(),
        Gc = {
          point: Lc,
          lineStart: Lc,
          lineEnd: Lc,
          polygonStart: function () {
            Vc.reset(), (Gc.lineStart = $c), (Gc.lineEnd = Wc);
          },
          polygonEnd: function () {
            var t = +Vc;
            Xc.add(t < 0 ? vc + t : t),
              (this.lineStart = this.lineEnd = this.point = Lc);
          },
          sphere: function () {
            Xc.add(vc);
          },
        };
      function $c() {
        Gc.point = Zc;
      }
      function Wc() {
        Qc(Bc, Fc);
      }
      function Zc(t, n) {
        (Gc.point = Qc),
          (Bc = t),
          (Fc = n),
          (Yc = t *= gc),
          (Ic = xc((n = (n *= gc) / 2 + pc))),
          (jc = Ec(n));
      }
      function Qc(t, n) {
        var e = (t *= gc) - Yc,
          r = e >= 0 ? 1 : -1,
          i = r * e,
          o = xc((n = (n *= gc) / 2 + pc)),
          u = Ec(n),
          a = jc * u,
          c = Ic * o + a * xc(i),
          f = a * r * Ec(i);
        Vc.add(mc(f, c)), (Yc = t), (Ic = o), (jc = u);
      }
      var Jc = function (t) {
        return Xc.reset(), Hc(t, Gc), 2 * Xc;
      };
      function Kc(t) {
        return [mc(t[1], t[0]), Pc(t[2])];
      }
      function tf(t) {
        var n = t[0],
          e = t[1],
          r = xc(e);
        return [r * xc(n), r * Ec(n), Ec(e)];
      }
      function nf(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
      }
      function ef(t, n) {
        return [
          t[1] * n[2] - t[2] * n[1],
          t[2] * n[0] - t[0] * n[2],
          t[0] * n[1] - t[1] * n[0],
        ];
      }
      function rf(t, n) {
        (t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2]);
      }
      function of(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n];
      }
      function uf(t) {
        var n = Sc(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        (t[0] /= n), (t[1] /= n), (t[2] /= n);
      }
      var af,
        cf,
        ff,
        sf,
        lf,
        hf,
        df,
        pf,
        vf,
        yf,
        gf = cc(),
        _f = {
          point: bf,
          lineStart: xf,
          lineEnd: wf,
          polygonStart: function () {
            (_f.point = Mf),
              (_f.lineStart = Nf),
              (_f.lineEnd = Af),
              gf.reset(),
              Gc.polygonStart();
          },
          polygonEnd: function () {
            Gc.polygonEnd(),
              (_f.point = bf),
              (_f.lineStart = xf),
              (_f.lineEnd = wf),
              Vc < 0
                ? ((af = -(ff = 180)), (cf = -(sf = 90)))
                : gf > 1e-6
                ? (sf = 90)
                : gf < -1e-6 && (cf = -90),
              (yf[0] = af),
              (yf[1] = ff);
          },
          sphere: function () {
            (af = -(ff = 180)), (cf = -(sf = 90));
          },
        };
      function bf(t, n) {
        vf.push((yf = [(af = t), (ff = t)])),
          n < cf && (cf = n),
          n > sf && (sf = n);
      }
      function mf(t, n) {
        var e = tf([t * gc, n * gc]);
        if (pf) {
          var r = ef(pf, e),
            i = ef([r[1], -r[0], 0], r);
          uf(i), (i = Kc(i));
          var o,
            u = t - lf,
            a = u > 0 ? 1 : -1,
            c = i[0] * yc * a,
            f = _c(u) > 180;
          f ^ (a * lf < c && c < a * t)
            ? (o = i[1] * yc) > sf && (sf = o)
            : f ^ (a * lf < (c = ((c + 360) % 360) - 180) && c < a * t)
            ? (o = -i[1] * yc) < cf && (cf = o)
            : (n < cf && (cf = n), n > sf && (sf = n)),
            f
              ? t < lf
                ? Ef(af, t) > Ef(af, ff) && (ff = t)
                : Ef(t, ff) > Ef(af, ff) && (af = t)
              : ff >= af
              ? (t < af && (af = t), t > ff && (ff = t))
              : t > lf
              ? Ef(af, t) > Ef(af, ff) && (ff = t)
              : Ef(t, ff) > Ef(af, ff) && (af = t);
        } else vf.push((yf = [(af = t), (ff = t)]));
        n < cf && (cf = n), n > sf && (sf = n), (pf = e), (lf = t);
      }
      function xf() {
        _f.point = mf;
      }
      function wf() {
        (yf[0] = af), (yf[1] = ff), (_f.point = bf), (pf = null);
      }
      function Mf(t, n) {
        if (pf) {
          var e = t - lf;
          gf.add(_c(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
        } else (hf = t), (df = n);
        Gc.point(t, n), mf(t, n);
      }
      function Nf() {
        Gc.lineStart();
      }
      function Af() {
        Mf(hf, df),
          Gc.lineEnd(),
          _c(gf) > 1e-6 && (af = -(ff = 180)),
          (yf[0] = af),
          (yf[1] = ff),
          (pf = null);
      }
      function Ef(t, n) {
        return (n -= t) < 0 ? n + 360 : n;
      }
      function Tf(t, n) {
        return t[0] - n[0];
      }
      function Sf(t, n) {
        return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
      }
      var kf,
        Cf,
        Pf,
        zf,
        Lf,
        Rf,
        qf,
        Df,
        Uf,
        Of,
        Bf,
        Ff,
        Yf,
        If,
        jf,
        Hf,
        Vf = function (t) {
          var n, e, r, i, o, u, a;
          if (
            ((sf = ff = -(af = cf = 1 / 0)),
            (vf = []),
            Hc(t, _f),
            (e = vf.length))
          ) {
            for (vf.sort(Tf), n = 1, o = [(r = vf[0])]; n < e; ++n)
              Sf(r, (i = vf[n])[0]) || Sf(r, i[1])
                ? (Ef(r[0], i[1]) > Ef(r[0], r[1]) && (r[1] = i[1]),
                  Ef(i[0], r[1]) > Ef(r[0], r[1]) && (r[0] = i[0]))
                : o.push((r = i));
            for (
              u = -1 / 0, n = 0, r = o[(e = o.length - 1)];
              n <= e;
              r = i, ++n
            )
              (i = o[n]),
                (a = Ef(r[1], i[0])) > u && ((u = a), (af = i[0]), (ff = r[1]));
          }
          return (
            (vf = yf = null),
            af === 1 / 0 || cf === 1 / 0
              ? [
                  [NaN, NaN],
                  [NaN, NaN],
                ]
              : [
                  [af, cf],
                  [ff, sf],
                ]
          );
        },
        Xf = {
          sphere: Lc,
          point: Gf,
          lineStart: Wf,
          lineEnd: Jf,
          polygonStart: function () {
            (Xf.lineStart = Kf), (Xf.lineEnd = ts);
          },
          polygonEnd: function () {
            (Xf.lineStart = Wf), (Xf.lineEnd = Jf);
          },
        };
      function Gf(t, n) {
        t *= gc;
        var e = xc((n *= gc));
        $f(e * xc(t), e * Ec(t), Ec(n));
      }
      function $f(t, n, e) {
        ++kf,
          (Pf += (t - Pf) / kf),
          (zf += (n - zf) / kf),
          (Lf += (e - Lf) / kf);
      }
      function Wf() {
        Xf.point = Zf;
      }
      function Zf(t, n) {
        t *= gc;
        var e = xc((n *= gc));
        (If = e * xc(t)),
          (jf = e * Ec(t)),
          (Hf = Ec(n)),
          (Xf.point = Qf),
          $f(If, jf, Hf);
      }
      function Qf(t, n) {
        t *= gc;
        var e = xc((n *= gc)),
          r = e * xc(t),
          i = e * Ec(t),
          o = Ec(n),
          u = mc(
            Sc(
              (u = jf * o - Hf * i) * u +
                (u = Hf * r - If * o) * u +
                (u = If * i - jf * r) * u
            ),
            If * r + jf * i + Hf * o
          );
        (Cf += u),
          (Rf += u * (If + (If = r))),
          (qf += u * (jf + (jf = i))),
          (Df += u * (Hf + (Hf = o))),
          $f(If, jf, Hf);
      }
      function Jf() {
        Xf.point = Gf;
      }
      function Kf() {
        Xf.point = ns;
      }
      function ts() {
        es(Ff, Yf), (Xf.point = Gf);
      }
      function ns(t, n) {
        (Ff = t), (Yf = n), (t *= gc), (n *= gc), (Xf.point = es);
        var e = xc(n);
        (If = e * xc(t)), (jf = e * Ec(t)), (Hf = Ec(n)), $f(If, jf, Hf);
      }
      function es(t, n) {
        t *= gc;
        var e = xc((n *= gc)),
          r = e * xc(t),
          i = e * Ec(t),
          o = Ec(n),
          u = jf * o - Hf * i,
          a = Hf * r - If * o,
          c = If * i - jf * r,
          f = Sc(u * u + a * a + c * c),
          s = Pc(f),
          l = f && -s / f;
        (Uf += l * u),
          (Of += l * a),
          (Bf += l * c),
          (Cf += s),
          (Rf += s * (If + (If = r))),
          (qf += s * (jf + (jf = i))),
          (Df += s * (Hf + (Hf = o))),
          $f(If, jf, Hf);
      }
      var rs = function (t) {
          (kf = Cf = Pf = zf = Lf = Rf = qf = Df = Uf = Of = Bf = 0), Hc(t, Xf);
          var n = Uf,
            e = Of,
            r = Bf,
            i = n * n + e * e + r * r;
          return i < 1e-12 &&
            ((n = Rf),
            (e = qf),
            (r = Df),
            Cf < 1e-6 && ((n = Pf), (e = zf), (r = Lf)),
            (i = n * n + e * e + r * r) < 1e-12)
            ? [NaN, NaN]
            : [mc(e, n) * yc, Pc(r / Sc(i)) * yc];
        },
        is = function (t) {
          return function () {
            return t;
          };
        },
        os = function (t, n) {
          function e(e, r) {
            return (e = t(e, r)), n(e[0], e[1]);
          }
          return (
            t.invert &&
              n.invert &&
              (e.invert = function (e, r) {
                return (e = n.invert(e, r)) && t.invert(e[0], e[1]);
              }),
            e
          );
        };
      function us(t, n) {
        return [_c(t) > hc ? t + Math.round(-t / vc) * vc : t, n];
      }
      function as(t, n, e) {
        return (t %= vc)
          ? n || e
            ? os(fs(t), ss(n, e))
            : fs(t)
          : n || e
          ? ss(n, e)
          : us;
      }
      function cs(t) {
        return function (n, e) {
          return [(n += t) > hc ? n - vc : n < -hc ? n + vc : n, e];
        };
      }
      function fs(t) {
        var n = cs(t);
        return (n.invert = cs(-t)), n;
      }
      function ss(t, n) {
        var e = xc(t),
          r = Ec(t),
          i = xc(n),
          o = Ec(n);
        function u(t, n) {
          var u = xc(n),
            a = xc(t) * u,
            c = Ec(t) * u,
            f = Ec(n),
            s = f * e + a * r;
          return [mc(c * i - s * o, a * e - f * r), Pc(s * i + c * o)];
        }
        return (
          (u.invert = function (t, n) {
            var u = xc(n),
              a = xc(t) * u,
              c = Ec(t) * u,
              f = Ec(n),
              s = f * i - c * o;
            return [mc(c * i + f * o, a * e + s * r), Pc(s * e - a * r)];
          }),
          u
        );
      }
      us.invert = us;
      var ls = function (t) {
        function n(n) {
          return ((n = t(n[0] * gc, n[1] * gc))[0] *= yc), (n[1] *= yc), n;
        }
        return (
          (t = as(t[0] * gc, t[1] * gc, t.length > 2 ? t[2] * gc : 0)),
          (n.invert = function (n) {
            return (
              ((n = t.invert(n[0] * gc, n[1] * gc))[0] *= yc), (n[1] *= yc), n
            );
          }),
          n
        );
      };
      function hs(t, n, e, r, i, o) {
        if (e) {
          var u = xc(n),
            a = Ec(n),
            c = r * e;
          null == i
            ? ((i = n + r * vc), (o = n - c / 2))
            : ((i = ds(u, i)),
              (o = ds(u, o)),
              (r > 0 ? i < o : i > o) && (i += r * vc));
          for (var f, s = i; r > 0 ? s > o : s < o; s -= c)
            (f = Kc([u, -a * xc(s), -a * Ec(s)])), t.point(f[0], f[1]);
        }
      }
      function ds(t, n) {
        ((n = tf(n))[0] -= t), uf(n);
        var e = Cc(-n[1]);
        return ((-n[2] < 0 ? -e : e) + vc - 1e-6) % vc;
      }
      var ps = function () {
          var t,
            n,
            e = is([0, 0]),
            r = is(90),
            i = is(6),
            o = {
              point: function (e, r) {
                t.push((e = n(e, r))), (e[0] *= yc), (e[1] *= yc);
              },
            };
          function u() {
            var u = e.apply(this, arguments),
              a = r.apply(this, arguments) * gc,
              c = i.apply(this, arguments) * gc;
            return (
              (t = []),
              (n = as(-u[0] * gc, -u[1] * gc, 0).invert),
              hs(o, a, c, 1),
              (u = { type: "Polygon", coordinates: [t] }),
              (t = n = null),
              u
            );
          }
          return (
            (u.center = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : is([+t[0], +t[1]])), u)
                : e;
            }),
            (u.radius = function (t) {
              return arguments.length
                ? ((r = "function" == typeof t ? t : is(+t)), u)
                : r;
            }),
            (u.precision = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : is(+t)), u)
                : i;
            }),
            u
          );
        },
        vs = function () {
          var t,
            n = [];
          return {
            point: function (n, e, r) {
              t.push([n, e, r]);
            },
            lineStart: function () {
              n.push((t = []));
            },
            lineEnd: Lc,
            rejoin: function () {
              n.length > 1 && n.push(n.pop().concat(n.shift()));
            },
            result: function () {
              var e = n;
              return (n = []), (t = null), e;
            },
          };
        },
        ys = function (t, n) {
          return _c(t[0] - n[0]) < 1e-6 && _c(t[1] - n[1]) < 1e-6;
        };
      function gs(t, n, e, r) {
        (this.x = t),
          (this.z = n),
          (this.o = e),
          (this.e = r),
          (this.v = !1),
          (this.n = this.p = null);
      }
      var _s = function (t, n, e, r, i) {
        var o,
          u,
          a = [],
          c = [];
        if (
          (t.forEach(function (t) {
            if (!((n = t.length - 1) <= 0)) {
              var n,
                e,
                r = t[0],
                u = t[n];
              if (ys(r, u)) {
                if (!r[2] && !u[2]) {
                  for (i.lineStart(), o = 0; o < n; ++o)
                    i.point((r = t[o])[0], r[1]);
                  return void i.lineEnd();
                }
                u[0] += 2e-6;
              }
              a.push((e = new gs(r, t, null, !0))),
                c.push((e.o = new gs(r, null, e, !1))),
                a.push((e = new gs(u, t, null, !1))),
                c.push((e.o = new gs(u, null, e, !0)));
            }
          }),
          a.length)
        ) {
          for (c.sort(n), bs(a), bs(c), o = 0, u = c.length; o < u; ++o)
            c[o].e = e = !e;
          for (var f, s, l = a[0]; ; ) {
            for (var h = l, d = !0; h.v; ) if ((h = h.n) === l) return;
            (f = h.z), i.lineStart();
            do {
              if (((h.v = h.o.v = !0), h.e)) {
                if (d)
                  for (o = 0, u = f.length; o < u; ++o)
                    i.point((s = f[o])[0], s[1]);
                else r(h.x, h.n.x, 1, i);
                h = h.n;
              } else {
                if (d)
                  for (f = h.p.z, o = f.length - 1; o >= 0; --o)
                    i.point((s = f[o])[0], s[1]);
                else r(h.x, h.p.x, -1, i);
                h = h.p;
              }
              (f = (h = h.o).z), (d = !d);
            } while (!h.v);
            i.lineEnd();
          }
        }
      };
      function bs(t) {
        if ((n = t.length)) {
          for (var n, e, r = 0, i = t[0]; ++r < n; )
            (i.n = e = t[r]), (e.p = i), (i = e);
          (i.n = e = t[0]), (e.p = i);
        }
      }
      var ms = cc();
      function xs(t) {
        return _c(t[0]) <= hc ? t[0] : Tc(t[0]) * (((_c(t[0]) + hc) % vc) - hc);
      }
      var ws = function (t, n) {
          var e = xs(n),
            r = n[1],
            i = Ec(r),
            o = [Ec(e), -xc(e), 0],
            u = 0,
            a = 0;
          ms.reset(), 1 === i ? (r = dc + 1e-6) : -1 === i && (r = -dc - 1e-6);
          for (var c = 0, f = t.length; c < f; ++c)
            if ((l = (s = t[c]).length))
              for (
                var s,
                  l,
                  h = s[l - 1],
                  d = xs(h),
                  p = h[1] / 2 + pc,
                  v = Ec(p),
                  y = xc(p),
                  g = 0;
                g < l;
                ++g, d = b, v = x, y = w, h = _
              ) {
                var _ = s[g],
                  b = xs(_),
                  m = _[1] / 2 + pc,
                  x = Ec(m),
                  w = xc(m),
                  M = b - d,
                  N = M >= 0 ? 1 : -1,
                  A = N * M,
                  E = A > hc,
                  T = v * x;
                if (
                  (ms.add(mc(T * N * Ec(A), y * w + T * xc(A))),
                  (u += E ? M + N * vc : M),
                  E ^ (d >= e) ^ (b >= e))
                ) {
                  var S = ef(tf(h), tf(_));
                  uf(S);
                  var k = ef(o, S);
                  uf(k);
                  var C = (E ^ (M >= 0) ? -1 : 1) * Pc(k[2]);
                  (r > C || (r === C && (S[0] || S[1]))) &&
                    (a += E ^ (M >= 0) ? 1 : -1);
                }
              }
          return (u < -1e-6 || (u < 1e-6 && ms < -1e-6)) ^ (1 & a);
        },
        Ms = function (t, n, e, r) {
          return function (i) {
            var o,
              u,
              a,
              c = n(i),
              f = vs(),
              s = n(f),
              l = !1,
              h = {
                point: d,
                lineStart: v,
                lineEnd: y,
                polygonStart: function () {
                  (h.point = g),
                    (h.lineStart = _),
                    (h.lineEnd = b),
                    (u = []),
                    (o = []);
                },
                polygonEnd: function () {
                  (h.point = d), (h.lineStart = v), (h.lineEnd = y), (u = O(u));
                  var t = ws(o, r);
                  u.length
                    ? (l || (i.polygonStart(), (l = !0)), _s(u, As, t, e, i))
                    : t &&
                      (l || (i.polygonStart(), (l = !0)),
                      i.lineStart(),
                      e(null, null, 1, i),
                      i.lineEnd()),
                    l && (i.polygonEnd(), (l = !1)),
                    (u = o = null);
                },
                sphere: function () {
                  i.polygonStart(),
                    i.lineStart(),
                    e(null, null, 1, i),
                    i.lineEnd(),
                    i.polygonEnd();
                },
              };
            function d(n, e) {
              t(n, e) && i.point(n, e);
            }
            function p(t, n) {
              c.point(t, n);
            }
            function v() {
              (h.point = p), c.lineStart();
            }
            function y() {
              (h.point = d), c.lineEnd();
            }
            function g(t, n) {
              a.push([t, n]), s.point(t, n);
            }
            function _() {
              s.lineStart(), (a = []);
            }
            function b() {
              g(a[0][0], a[0][1]), s.lineEnd();
              var t,
                n,
                e,
                r,
                c = s.clean(),
                h = f.result(),
                d = h.length;
              if ((a.pop(), o.push(a), (a = null), d))
                if (1 & c) {
                  if ((n = (e = h[0]).length - 1) > 0) {
                    for (
                      l || (i.polygonStart(), (l = !0)), i.lineStart(), t = 0;
                      t < n;
                      ++t
                    )
                      i.point((r = e[t])[0], r[1]);
                    i.lineEnd();
                  }
                } else
                  d > 1 && 2 & c && h.push(h.pop().concat(h.shift())),
                    u.push(h.filter(Ns));
            }
            return h;
          };
        };
      function Ns(t) {
        return t.length > 1;
      }
      function As(t, n) {
        return (
          ((t = t.x)[0] < 0 ? t[1] - dc - 1e-6 : dc - t[1]) -
          ((n = n.x)[0] < 0 ? n[1] - dc - 1e-6 : dc - n[1])
        );
      }
      var Es = Ms(
        function () {
          return !0;
        },
        function (t) {
          var n,
            e = NaN,
            r = NaN,
            i = NaN;
          return {
            lineStart: function () {
              t.lineStart(), (n = 1);
            },
            point: function (o, u) {
              var a = o > 0 ? hc : -hc,
                c = _c(o - e);
              _c(c - hc) < 1e-6
                ? (t.point(e, (r = (r + u) / 2 > 0 ? dc : -dc)),
                  t.point(i, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(a, r),
                  t.point(o, r),
                  (n = 0))
                : i !== a &&
                  c >= hc &&
                  (_c(e - i) < 1e-6 && (e -= 1e-6 * i),
                  _c(o - a) < 1e-6 && (o -= 1e-6 * a),
                  (r = (function (t, n, e, r) {
                    var i,
                      o,
                      u = Ec(t - e);
                    return _c(u) > 1e-6
                      ? bc(
                          (Ec(n) * (o = xc(r)) * Ec(e) -
                            Ec(r) * (i = xc(n)) * Ec(t)) /
                            (i * o * u)
                        )
                      : (n + r) / 2;
                  })(e, r, o, u)),
                  t.point(i, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(a, r),
                  (n = 0)),
                t.point((e = o), (r = u)),
                (i = a);
            },
            lineEnd: function () {
              t.lineEnd(), (e = r = NaN);
            },
            clean: function () {
              return 2 - n;
            },
          };
        },
        function (t, n, e, r) {
          var i;
          if (null == t)
            (i = e * dc),
              r.point(-hc, i),
              r.point(0, i),
              r.point(hc, i),
              r.point(hc, 0),
              r.point(hc, -i),
              r.point(0, -i),
              r.point(-hc, -i),
              r.point(-hc, 0),
              r.point(-hc, i);
          else if (_c(t[0] - n[0]) > 1e-6) {
            var o = t[0] < n[0] ? hc : -hc;
            (i = (e * o) / 2), r.point(-o, i), r.point(0, i), r.point(o, i);
          } else r.point(n[0], n[1]);
        },
        [-hc, -dc]
      );
      var Ts = function (t) {
        var n = xc(t),
          e = 6 * gc,
          r = n > 0,
          i = _c(n) > 1e-6;
        function o(t, e) {
          return xc(t) * xc(e) > n;
        }
        function u(t, e, r) {
          var i = [1, 0, 0],
            o = ef(tf(t), tf(e)),
            u = nf(o, o),
            a = o[0],
            c = u - a * a;
          if (!c) return !r && t;
          var f = (n * u) / c,
            s = (-n * a) / c,
            l = ef(i, o),
            h = of(i, f);
          rf(h, of(o, s));
          var d = l,
            p = nf(h, d),
            v = nf(d, d),
            y = p * p - v * (nf(h, h) - 1);
          if (!(y < 0)) {
            var g = Sc(y),
              _ = of(d, (-p - g) / v);
            if ((rf(_, h), (_ = Kc(_)), !r)) return _;
            var b,
              m = t[0],
              x = e[0],
              w = t[1],
              M = e[1];
            x < m && ((b = m), (m = x), (x = b));
            var N = x - m,
              A = _c(N - hc) < 1e-6;
            if (
              (!A && M < w && ((b = w), (w = M), (M = b)),
              A || N < 1e-6
                ? A
                  ? (w + M > 0) ^ (_[1] < (_c(_[0] - m) < 1e-6 ? w : M))
                  : w <= _[1] && _[1] <= M
                : (N > hc) ^ (m <= _[0] && _[0] <= x))
            ) {
              var E = of(d, (-p + g) / v);
              return rf(E, h), [_, Kc(E)];
            }
          }
        }
        function a(n, e) {
          var i = r ? t : hc - t,
            o = 0;
          return (
            n < -i ? (o |= 1) : n > i && (o |= 2),
            e < -i ? (o |= 4) : e > i && (o |= 8),
            o
          );
        }
        return Ms(
          o,
          function (t) {
            var n, e, c, f, s;
            return {
              lineStart: function () {
                (f = c = !1), (s = 1);
              },
              point: function (l, h) {
                var d,
                  p = [l, h],
                  v = o(l, h),
                  y = r
                    ? v
                      ? 0
                      : a(l, h)
                    : v
                    ? a(l + (l < 0 ? hc : -hc), h)
                    : 0;
                if (
                  (!n && (f = c = v) && t.lineStart(),
                  v !== c &&
                    (!(d = u(n, p)) || ys(n, d) || ys(p, d)) &&
                    (p[2] = 1),
                  v !== c)
                )
                  (s = 0),
                    v
                      ? (t.lineStart(), (d = u(p, n)), t.point(d[0], d[1]))
                      : ((d = u(n, p)), t.point(d[0], d[1], 2), t.lineEnd()),
                    (n = d);
                else if (i && n && r ^ v) {
                  var g;
                  y & e ||
                    !(g = u(p, n, !0)) ||
                    ((s = 0),
                    r
                      ? (t.lineStart(),
                        t.point(g[0][0], g[0][1]),
                        t.point(g[1][0], g[1][1]),
                        t.lineEnd())
                      : (t.point(g[1][0], g[1][1]),
                        t.lineEnd(),
                        t.lineStart(),
                        t.point(g[0][0], g[0][1], 3)));
                }
                !v || (n && ys(n, p)) || t.point(p[0], p[1]),
                  (n = p),
                  (c = v),
                  (e = y);
              },
              lineEnd: function () {
                c && t.lineEnd(), (n = null);
              },
              clean: function () {
                return s | ((f && c) << 1);
              },
            };
          },
          function (n, r, i, o) {
            hs(o, t, e, i, n, r);
          },
          r ? [0, -t] : [-hc, t - hc]
        );
      };
      function Ss(t, n, e, r) {
        function i(i, o) {
          return t <= i && i <= e && n <= o && o <= r;
        }
        function o(i, o, a, f) {
          var s = 0,
            l = 0;
          if (
            null == i ||
            (s = u(i, a)) !== (l = u(o, a)) ||
            (c(i, o) < 0) ^ (a > 0)
          )
            do {
              f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n);
            } while ((s = (s + a + 4) % 4) !== l);
          else f.point(o[0], o[1]);
        }
        function u(r, i) {
          return _c(r[0] - t) < 1e-6
            ? i > 0
              ? 0
              : 3
            : _c(r[0] - e) < 1e-6
            ? i > 0
              ? 2
              : 1
            : _c(r[1] - n) < 1e-6
            ? i > 0
              ? 1
              : 0
            : i > 0
            ? 3
            : 2;
        }
        function a(t, n) {
          return c(t.x, n.x);
        }
        function c(t, n) {
          var e = u(t, 1),
            r = u(n, 1);
          return e !== r
            ? e - r
            : 0 === e
            ? n[1] - t[1]
            : 1 === e
            ? t[0] - n[0]
            : 2 === e
            ? t[1] - n[1]
            : n[0] - t[0];
        }
        return function (u) {
          var c,
            f,
            s,
            l,
            h,
            d,
            p,
            v,
            y,
            g,
            _,
            b = u,
            m = vs(),
            x = {
              point: w,
              lineStart: function () {
                (x.point = M), f && f.push((s = []));
                (g = !0), (y = !1), (p = v = NaN);
              },
              lineEnd: function () {
                c && (M(l, h), d && y && m.rejoin(), c.push(m.result()));
                (x.point = w), y && b.lineEnd();
              },
              polygonStart: function () {
                (b = m), (c = []), (f = []), (_ = !0);
              },
              polygonEnd: function () {
                var n = (function () {
                    for (var n = 0, e = 0, i = f.length; e < i; ++e)
                      for (
                        var o,
                          u,
                          a = f[e],
                          c = 1,
                          s = a.length,
                          l = a[0],
                          h = l[0],
                          d = l[1];
                        c < s;
                        ++c
                      )
                        (o = h),
                          (u = d),
                          (l = a[c]),
                          (h = l[0]),
                          (d = l[1]),
                          u <= r
                            ? d > r &&
                              (h - o) * (r - u) > (d - u) * (t - o) &&
                              ++n
                            : d <= r &&
                              (h - o) * (r - u) < (d - u) * (t - o) &&
                              --n;
                    return n;
                  })(),
                  e = _ && n,
                  i = (c = O(c)).length;
                (e || i) &&
                  (u.polygonStart(),
                  e && (u.lineStart(), o(null, null, 1, u), u.lineEnd()),
                  i && _s(c, a, n, o, u),
                  u.polygonEnd());
                (b = u), (c = f = s = null);
              },
            };
          function w(t, n) {
            i(t, n) && b.point(t, n);
          }
          function M(o, u) {
            var a = i(o, u);
            if ((f && s.push([o, u]), g))
              (l = o),
                (h = u),
                (d = a),
                (g = !1),
                a && (b.lineStart(), b.point(o, u));
            else if (a && y) b.point(o, u);
            else {
              var c = [
                  (p = Math.max(-1e9, Math.min(1e9, p))),
                  (v = Math.max(-1e9, Math.min(1e9, v))),
                ],
                m = [
                  (o = Math.max(-1e9, Math.min(1e9, o))),
                  (u = Math.max(-1e9, Math.min(1e9, u))),
                ];
              !(function (t, n, e, r, i, o) {
                var u,
                  a = t[0],
                  c = t[1],
                  f = 0,
                  s = 1,
                  l = n[0] - a,
                  h = n[1] - c;
                if (((u = e - a), l || !(u > 0))) {
                  if (((u /= l), l < 0)) {
                    if (u < f) return;
                    u < s && (s = u);
                  } else if (l > 0) {
                    if (u > s) return;
                    u > f && (f = u);
                  }
                  if (((u = i - a), l || !(u < 0))) {
                    if (((u /= l), l < 0)) {
                      if (u > s) return;
                      u > f && (f = u);
                    } else if (l > 0) {
                      if (u < f) return;
                      u < s && (s = u);
                    }
                    if (((u = r - c), h || !(u > 0))) {
                      if (((u /= h), h < 0)) {
                        if (u < f) return;
                        u < s && (s = u);
                      } else if (h > 0) {
                        if (u > s) return;
                        u > f && (f = u);
                      }
                      if (((u = o - c), h || !(u < 0))) {
                        if (((u /= h), h < 0)) {
                          if (u > s) return;
                          u > f && (f = u);
                        } else if (h > 0) {
                          if (u < f) return;
                          u < s && (s = u);
                        }
                        return (
                          f > 0 && ((t[0] = a + f * l), (t[1] = c + f * h)),
                          s < 1 && ((n[0] = a + s * l), (n[1] = c + s * h)),
                          !0
                        );
                      }
                    }
                  }
                }
              })(c, m, t, n, e, r)
                ? a && (b.lineStart(), b.point(o, u), (_ = !1))
                : (y || (b.lineStart(), b.point(c[0], c[1])),
                  b.point(m[0], m[1]),
                  a || b.lineEnd(),
                  (_ = !1));
            }
            (p = o), (v = u), (y = a);
          }
          return x;
        };
      }
      var ks,
        Cs,
        Ps,
        zs = function () {
          var t,
            n,
            e,
            r = 0,
            i = 0,
            o = 960,
            u = 500;
          return (e = {
            stream: function (e) {
              return t && n === e ? t : (t = Ss(r, i, o, u)((n = e)));
            },
            extent: function (a) {
              return arguments.length
                ? ((r = +a[0][0]),
                  (i = +a[0][1]),
                  (o = +a[1][0]),
                  (u = +a[1][1]),
                  (t = n = null),
                  e)
                : [
                    [r, i],
                    [o, u],
                  ];
            },
          });
        },
        Ls = cc(),
        Rs = {
          sphere: Lc,
          point: Lc,
          lineStart: function () {
            (Rs.point = Ds), (Rs.lineEnd = qs);
          },
          lineEnd: Lc,
          polygonStart: Lc,
          polygonEnd: Lc,
        };
      function qs() {
        Rs.point = Rs.lineEnd = Lc;
      }
      function Ds(t, n) {
        (ks = t *= gc), (Cs = Ec((n *= gc))), (Ps = xc(n)), (Rs.point = Us);
      }
      function Us(t, n) {
        t *= gc;
        var e = Ec((n *= gc)),
          r = xc(n),
          i = _c(t - ks),
          o = xc(i),
          u = r * Ec(i),
          a = Ps * e - Cs * r * o,
          c = Cs * e + Ps * r * o;
        Ls.add(mc(Sc(u * u + a * a), c)), (ks = t), (Cs = e), (Ps = r);
      }
      var Os = function (t) {
          return Ls.reset(), Hc(t, Rs), +Ls;
        },
        Bs = [null, null],
        Fs = { type: "LineString", coordinates: Bs },
        Ys = function (t, n) {
          return (Bs[0] = t), (Bs[1] = n), Os(Fs);
        },
        Is = {
          Feature: function (t, n) {
            return Hs(t.geometry, n);
          },
          FeatureCollection: function (t, n) {
            for (var e = t.features, r = -1, i = e.length; ++r < i; )
              if (Hs(e[r].geometry, n)) return !0;
            return !1;
          },
        },
        js = {
          Sphere: function () {
            return !0;
          },
          Point: function (t, n) {
            return Vs(t.coordinates, n);
          },
          MultiPoint: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              if (Vs(e[r], n)) return !0;
            return !1;
          },
          LineString: function (t, n) {
            return Xs(t.coordinates, n);
          },
          MultiLineString: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              if (Xs(e[r], n)) return !0;
            return !1;
          },
          Polygon: function (t, n) {
            return Gs(t.coordinates, n);
          },
          MultiPolygon: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
              if (Gs(e[r], n)) return !0;
            return !1;
          },
          GeometryCollection: function (t, n) {
            for (var e = t.geometries, r = -1, i = e.length; ++r < i; )
              if (Hs(e[r], n)) return !0;
            return !1;
          },
        };
      function Hs(t, n) {
        return !(!t || !js.hasOwnProperty(t.type)) && js[t.type](t, n);
      }
      function Vs(t, n) {
        return 0 === Ys(t, n);
      }
      function Xs(t, n) {
        for (var e, r, i, o = 0, u = t.length; o < u; o++) {
          if (0 === (r = Ys(t[o], n))) return !0;
          if (
            o > 0 &&
            (i = Ys(t[o], t[o - 1])) > 0 &&
            e <= i &&
            r <= i &&
            (e + r - i) * (1 - Math.pow((e - r) / i, 2)) < 1e-12 * i
          )
            return !0;
          e = r;
        }
        return !1;
      }
      function Gs(t, n) {
        return !!ws(t.map($s), Ws(n));
      }
      function $s(t) {
        return (t = t.map(Ws)).pop(), t;
      }
      function Ws(t) {
        return [t[0] * gc, t[1] * gc];
      }
      var Zs = function (t, n) {
        return (t && Is.hasOwnProperty(t.type) ? Is[t.type] : Hs)(t, n);
      };
      function Qs(t, n, e) {
        var r = M(t, n - 1e-6, e).concat(n);
        return function (t) {
          return r.map(function (n) {
            return [t, n];
          });
        };
      }
      function Js(t, n, e) {
        var r = M(t, n - 1e-6, e).concat(n);
        return function (t) {
          return r.map(function (n) {
            return [n, t];
          });
        };
      }
      function Ks() {
        var t,
          n,
          e,
          r,
          i,
          o,
          u,
          a,
          c,
          f,
          s,
          l,
          h = 10,
          d = h,
          p = 90,
          v = 360,
          y = 2.5;
        function g() {
          return { type: "MultiLineString", coordinates: _() };
        }
        function _() {
          return M(wc(r / p) * p, e, p)
            .map(s)
            .concat(M(wc(a / v) * v, u, v).map(l))
            .concat(
              M(wc(n / h) * h, t, h)
                .filter(function (t) {
                  return _c(t % p) > 1e-6;
                })
                .map(c)
            )
            .concat(
              M(wc(o / d) * d, i, d)
                .filter(function (t) {
                  return _c(t % v) > 1e-6;
                })
                .map(f)
            );
        }
        return (
          (g.lines = function () {
            return _().map(function (t) {
              return { type: "LineString", coordinates: t };
            });
          }),
          (g.outline = function () {
            return {
              type: "Polygon",
              coordinates: [
                s(r).concat(
                  l(u).slice(1),
                  s(e).reverse().slice(1),
                  l(a).reverse().slice(1)
                ),
              ],
            };
          }),
          (g.extent = function (t) {
            return arguments.length
              ? g.extentMajor(t).extentMinor(t)
              : g.extentMinor();
          }),
          (g.extentMajor = function (t) {
            return arguments.length
              ? ((r = +t[0][0]),
                (e = +t[1][0]),
                (a = +t[0][1]),
                (u = +t[1][1]),
                r > e && ((t = r), (r = e), (e = t)),
                a > u && ((t = a), (a = u), (u = t)),
                g.precision(y))
              : [
                  [r, a],
                  [e, u],
                ];
          }),
          (g.extentMinor = function (e) {
            return arguments.length
              ? ((n = +e[0][0]),
                (t = +e[1][0]),
                (o = +e[0][1]),
                (i = +e[1][1]),
                n > t && ((e = n), (n = t), (t = e)),
                o > i && ((e = o), (o = i), (i = e)),
                g.precision(y))
              : [
                  [n, o],
                  [t, i],
                ];
          }),
          (g.step = function (t) {
            return arguments.length
              ? g.stepMajor(t).stepMinor(t)
              : g.stepMinor();
          }),
          (g.stepMajor = function (t) {
            return arguments.length ? ((p = +t[0]), (v = +t[1]), g) : [p, v];
          }),
          (g.stepMinor = function (t) {
            return arguments.length ? ((h = +t[0]), (d = +t[1]), g) : [h, d];
          }),
          (g.precision = function (h) {
            return arguments.length
              ? ((y = +h),
                (c = Qs(o, i, 90)),
                (f = Js(n, t, y)),
                (s = Qs(a, u, 90)),
                (l = Js(r, e, y)),
                g)
              : y;
          }),
          g
            .extentMajor([
              [-180, -89.999999],
              [180, 89.999999],
            ])
            .extentMinor([
              [-180, -80.000001],
              [180, 80.000001],
            ])
        );
      }
      function tl() {
        return Ks()();
      }
      var nl,
        el,
        rl,
        il,
        ol = function (t, n) {
          var e = t[0] * gc,
            r = t[1] * gc,
            i = n[0] * gc,
            o = n[1] * gc,
            u = xc(r),
            a = Ec(r),
            c = xc(o),
            f = Ec(o),
            s = u * xc(e),
            l = u * Ec(e),
            h = c * xc(i),
            d = c * Ec(i),
            p = 2 * Pc(Sc(zc(o - r) + u * c * zc(i - e))),
            v = Ec(p),
            y = p
              ? function (t) {
                  var n = Ec((t *= p)) / v,
                    e = Ec(p - t) / v,
                    r = e * s + n * h,
                    i = e * l + n * d,
                    o = e * a + n * f;
                  return [mc(i, r) * yc, mc(o, Sc(r * r + i * i)) * yc];
                }
              : function () {
                  return [e * yc, r * yc];
                };
          return (y.distance = p), y;
        },
        ul = function (t) {
          return t;
        },
        al = cc(),
        cl = cc(),
        fl = {
          point: Lc,
          lineStart: Lc,
          lineEnd: Lc,
          polygonStart: function () {
            (fl.lineStart = sl), (fl.lineEnd = dl);
          },
          polygonEnd: function () {
            (fl.lineStart = fl.lineEnd = fl.point = Lc),
              al.add(_c(cl)),
              cl.reset();
          },
          result: function () {
            var t = al / 2;
            return al.reset(), t;
          },
        };
      function sl() {
        fl.point = ll;
      }
      function ll(t, n) {
        (fl.point = hl), (nl = rl = t), (el = il = n);
      }
      function hl(t, n) {
        cl.add(il * t - rl * n), (rl = t), (il = n);
      }
      function dl() {
        hl(nl, el);
      }
      var pl = fl,
        vl = 1 / 0,
        yl = vl,
        gl = -vl,
        _l = gl;
      var bl,
        ml,
        xl,
        wl,
        Ml = {
          point: function (t, n) {
            t < vl && (vl = t);
            t > gl && (gl = t);
            n < yl && (yl = n);
            n > _l && (_l = n);
          },
          lineStart: Lc,
          lineEnd: Lc,
          polygonStart: Lc,
          polygonEnd: Lc,
          result: function () {
            var t = [
              [vl, yl],
              [gl, _l],
            ];
            return (gl = _l = -(yl = vl = 1 / 0)), t;
          },
        },
        Nl = 0,
        Al = 0,
        El = 0,
        Tl = 0,
        Sl = 0,
        kl = 0,
        Cl = 0,
        Pl = 0,
        zl = 0,
        Ll = {
          point: Rl,
          lineStart: ql,
          lineEnd: Ol,
          polygonStart: function () {
            (Ll.lineStart = Bl), (Ll.lineEnd = Fl);
          },
          polygonEnd: function () {
            (Ll.point = Rl), (Ll.lineStart = ql), (Ll.lineEnd = Ol);
          },
          result: function () {
            var t = zl
              ? [Cl / zl, Pl / zl]
              : kl
              ? [Tl / kl, Sl / kl]
              : El
              ? [Nl / El, Al / El]
              : [NaN, NaN];
            return (Nl = Al = El = Tl = Sl = kl = Cl = Pl = zl = 0), t;
          },
        };
      function Rl(t, n) {
        (Nl += t), (Al += n), ++El;
      }
      function ql() {
        Ll.point = Dl;
      }
      function Dl(t, n) {
        (Ll.point = Ul), Rl((xl = t), (wl = n));
      }
      function Ul(t, n) {
        var e = t - xl,
          r = n - wl,
          i = Sc(e * e + r * r);
        (Tl += (i * (xl + t)) / 2),
          (Sl += (i * (wl + n)) / 2),
          (kl += i),
          Rl((xl = t), (wl = n));
      }
      function Ol() {
        Ll.point = Rl;
      }
      function Bl() {
        Ll.point = Yl;
      }
      function Fl() {
        Il(bl, ml);
      }
      function Yl(t, n) {
        (Ll.point = Il), Rl((bl = xl = t), (ml = wl = n));
      }
      function Il(t, n) {
        var e = t - xl,
          r = n - wl,
          i = Sc(e * e + r * r);
        (Tl += (i * (xl + t)) / 2),
          (Sl += (i * (wl + n)) / 2),
          (kl += i),
          (Cl += (i = wl * t - xl * n) * (xl + t)),
          (Pl += i * (wl + n)),
          (zl += 3 * i),
          Rl((xl = t), (wl = n));
      }
      var jl = Ll;
      function Hl(t) {
        this._context = t;
      }
      Hl.prototype = {
        _radius: 4.5,
        pointRadius: function (t) {
          return (this._radius = t), this;
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          0 === this._line && this._context.closePath(), (this._point = NaN);
        },
        point: function (t, n) {
          switch (this._point) {
            case 0:
              this._context.moveTo(t, n), (this._point = 1);
              break;
            case 1:
              this._context.lineTo(t, n);
              break;
            default:
              this._context.moveTo(t + this._radius, n),
                this._context.arc(t, n, this._radius, 0, vc);
          }
        },
        result: Lc,
      };
      var Vl,
        Xl,
        Gl,
        $l,
        Wl,
        Zl = cc(),
        Ql = {
          point: Lc,
          lineStart: function () {
            Ql.point = Jl;
          },
          lineEnd: function () {
            Vl && Kl(Xl, Gl), (Ql.point = Lc);
          },
          polygonStart: function () {
            Vl = !0;
          },
          polygonEnd: function () {
            Vl = null;
          },
          result: function () {
            var t = +Zl;
            return Zl.reset(), t;
          },
        };
      function Jl(t, n) {
        (Ql.point = Kl), (Xl = $l = t), (Gl = Wl = n);
      }
      function Kl(t, n) {
        ($l -= t), (Wl -= n), Zl.add(Sc($l * $l + Wl * Wl)), ($l = t), (Wl = n);
      }
      var th = Ql;
      function nh() {
        this._string = [];
      }
      function eh(t) {
        return (
          "m0," +
          t +
          "a" +
          t +
          "," +
          t +
          " 0 1,1 0," +
          -2 * t +
          "a" +
          t +
          "," +
          t +
          " 0 1,1 0," +
          2 * t +
          "z"
        );
      }
      nh.prototype = {
        _radius: 4.5,
        _circle: eh(4.5),
        pointRadius: function (t) {
          return (
            (t = +t) !== this._radius &&
              ((this._radius = t), (this._circle = null)),
            this
          );
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          0 === this._line && this._string.push("Z"), (this._point = NaN);
        },
        point: function (t, n) {
          switch (this._point) {
            case 0:
              this._string.push("M", t, ",", n), (this._point = 1);
              break;
            case 1:
              this._string.push("L", t, ",", n);
              break;
            default:
              null == this._circle && (this._circle = eh(this._radius)),
                this._string.push("M", t, ",", n, this._circle);
          }
        },
        result: function () {
          if (this._string.length) {
            var t = this._string.join("");
            return (this._string = []), t;
          }
          return null;
        },
      };
      var rh = function (t, n) {
          var e,
            r,
            i = 4.5;
          function o(t) {
            return (
              t &&
                ("function" == typeof i &&
                  r.pointRadius(+i.apply(this, arguments)),
                Hc(t, e(r))),
              r.result()
            );
          }
          return (
            (o.area = function (t) {
              return Hc(t, e(pl)), pl.result();
            }),
            (o.measure = function (t) {
              return Hc(t, e(th)), th.result();
            }),
            (o.bounds = function (t) {
              return Hc(t, e(Ml)), Ml.result();
            }),
            (o.centroid = function (t) {
              return Hc(t, e(jl)), jl.result();
            }),
            (o.projection = function (n) {
              return arguments.length
                ? ((e = null == n ? ((t = null), ul) : (t = n).stream), o)
                : t;
            }),
            (o.context = function (t) {
              return arguments.length
                ? ((r = null == t ? ((n = null), new nh()) : new Hl((n = t))),
                  "function" != typeof i && r.pointRadius(i),
                  o)
                : n;
            }),
            (o.pointRadius = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : (r.pointRadius(+t), +t)),
                  o)
                : i;
            }),
            o.projection(t).context(n)
          );
        },
        ih = function (t) {
          return { stream: oh(t) };
        };
      function oh(t) {
        return function (n) {
          var e = new uh();
          for (var r in t) e[r] = t[r];
          return (e.stream = n), e;
        };
      }
      function uh() {}
      function ah(t, n, e) {
        var r = t.clipExtent && t.clipExtent();
        return (
          t.scale(150).translate([0, 0]),
          null != r && t.clipExtent(null),
          Hc(e, t.stream(Ml)),
          n(Ml.result()),
          null != r && t.clipExtent(r),
          t
        );
      }
      function ch(t, n, e) {
        return ah(
          t,
          function (e) {
            var r = n[1][0] - n[0][0],
              i = n[1][1] - n[0][1],
              o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
              u = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
              a = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * o).translate([u, a]);
          },
          e
        );
      }
      function fh(t, n, e) {
        return ch(t, [[0, 0], n], e);
      }
      function sh(t, n, e) {
        return ah(
          t,
          function (e) {
            var r = +n,
              i = r / (e[1][0] - e[0][0]),
              o = (r - i * (e[1][0] + e[0][0])) / 2,
              u = -i * e[0][1];
            t.scale(150 * i).translate([o, u]);
          },
          e
        );
      }
      function lh(t, n, e) {
        return ah(
          t,
          function (e) {
            var r = +n,
              i = r / (e[1][1] - e[0][1]),
              o = -i * e[0][0],
              u = (r - i * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * i).translate([o, u]);
          },
          e
        );
      }
      uh.prototype = {
        constructor: uh,
        point: function (t, n) {
          this.stream.point(t, n);
        },
        sphere: function () {
          this.stream.sphere();
        },
        lineStart: function () {
          this.stream.lineStart();
        },
        lineEnd: function () {
          this.stream.lineEnd();
        },
        polygonStart: function () {
          this.stream.polygonStart();
        },
        polygonEnd: function () {
          this.stream.polygonEnd();
        },
      };
      var hh = xc(30 * gc),
        dh = function (t, n) {
          return +n
            ? (function (t, n) {
                function e(r, i, o, u, a, c, f, s, l, h, d, p, v, y) {
                  var g = f - r,
                    _ = s - i,
                    b = g * g + _ * _;
                  if (b > 4 * n && v--) {
                    var m = u + h,
                      x = a + d,
                      w = c + p,
                      M = Sc(m * m + x * x + w * w),
                      N = Pc((w /= M)),
                      A =
                        _c(_c(w) - 1) < 1e-6 || _c(o - l) < 1e-6
                          ? (o + l) / 2
                          : mc(x, m),
                      E = t(A, N),
                      T = E[0],
                      S = E[1],
                      k = T - r,
                      C = S - i,
                      P = _ * k - g * C;
                    ((P * P) / b > n ||
                      _c((g * k + _ * C) / b - 0.5) > 0.3 ||
                      u * h + a * d + c * p < hh) &&
                      (e(
                        r,
                        i,
                        o,
                        u,
                        a,
                        c,
                        T,
                        S,
                        A,
                        (m /= M),
                        (x /= M),
                        w,
                        v,
                        y
                      ),
                      y.point(T, S),
                      e(T, S, A, m, x, w, f, s, l, h, d, p, v, y));
                  }
                }
                return function (n) {
                  var r,
                    i,
                    o,
                    u,
                    a,
                    c,
                    f,
                    s,
                    l,
                    h,
                    d,
                    p,
                    v = {
                      point: y,
                      lineStart: g,
                      lineEnd: b,
                      polygonStart: function () {
                        n.polygonStart(), (v.lineStart = m);
                      },
                      polygonEnd: function () {
                        n.polygonEnd(), (v.lineStart = g);
                      },
                    };
                  function y(e, r) {
                    (e = t(e, r)), n.point(e[0], e[1]);
                  }
                  function g() {
                    (s = NaN), (v.point = _), n.lineStart();
                  }
                  function _(r, i) {
                    var o = tf([r, i]),
                      u = t(r, i);
                    e(
                      s,
                      l,
                      f,
                      h,
                      d,
                      p,
                      (s = u[0]),
                      (l = u[1]),
                      (f = r),
                      (h = o[0]),
                      (d = o[1]),
                      (p = o[2]),
                      16,
                      n
                    ),
                      n.point(s, l);
                  }
                  function b() {
                    (v.point = y), n.lineEnd();
                  }
                  function m() {
                    g(), (v.point = x), (v.lineEnd = w);
                  }
                  function x(t, n) {
                    _((r = t), n),
                      (i = s),
                      (o = l),
                      (u = h),
                      (a = d),
                      (c = p),
                      (v.point = _);
                  }
                  function w() {
                    e(s, l, f, h, d, p, i, o, r, u, a, c, 16, n),
                      (v.lineEnd = b),
                      b();
                  }
                  return v;
                };
              })(t, n)
            : (function (t) {
                return oh({
                  point: function (n, e) {
                    (n = t(n, e)), this.stream.point(n[0], n[1]);
                  },
                });
              })(t);
        };
      var ph = oh({
        point: function (t, n) {
          this.stream.point(t * gc, n * gc);
        },
      });
      function vh(t, n, e, r, i) {
        function o(o, u) {
          return [n + t * (o *= r), e - t * (u *= i)];
        }
        return (
          (o.invert = function (o, u) {
            return [((o - n) / t) * r, ((e - u) / t) * i];
          }),
          o
        );
      }
      function yh(t, n, e, r, i, o) {
        var u = xc(o),
          a = Ec(o),
          c = u * t,
          f = a * t,
          s = u / t,
          l = a / t,
          h = (a * e - u * n) / t,
          d = (a * n + u * e) / t;
        function p(t, o) {
          return [c * (t *= r) - f * (o *= i) + n, e - f * t - c * o];
        }
        return (
          (p.invert = function (t, n) {
            return [r * (s * t - l * n + h), i * (d - l * t - s * n)];
          }),
          p
        );
      }
      function gh(t) {
        return _h(function () {
          return t;
        })();
      }
      function _h(t) {
        var n,
          e,
          r,
          i,
          o,
          u,
          a,
          c,
          f,
          s,
          l = 150,
          h = 480,
          d = 250,
          p = 0,
          v = 0,
          y = 0,
          g = 0,
          _ = 0,
          b = 0,
          m = 1,
          x = 1,
          w = null,
          M = Es,
          N = null,
          A = ul,
          E = 0.5;
        function T(t) {
          return c(t[0] * gc, t[1] * gc);
        }
        function S(t) {
          return (t = c.invert(t[0], t[1])) && [t[0] * yc, t[1] * yc];
        }
        function k() {
          var t = yh(l, 0, 0, m, x, b).apply(null, n(p, v)),
            r = (b ? yh : vh)(l, h - t[0], d - t[1], m, x, b);
          return (
            (e = as(y, g, _)),
            (a = os(n, r)),
            (c = os(e, a)),
            (u = dh(a, E)),
            C()
          );
        }
        function C() {
          return (f = s = null), T;
        }
        return (
          (T.stream = function (t) {
            return f && s === t
              ? f
              : (f = ph(
                  (function (t) {
                    return oh({
                      point: function (n, e) {
                        var r = t(n, e);
                        return this.stream.point(r[0], r[1]);
                      },
                    });
                  })(e)(M(u(A((s = t)))))
                ));
          }),
          (T.preclip = function (t) {
            return arguments.length ? ((M = t), (w = void 0), C()) : M;
          }),
          (T.postclip = function (t) {
            return arguments.length
              ? ((A = t), (N = r = i = o = null), C())
              : A;
          }),
          (T.clipAngle = function (t) {
            return arguments.length
              ? ((M = +t ? Ts((w = t * gc)) : ((w = null), Es)), C())
              : w * yc;
          }),
          (T.clipExtent = function (t) {
            return arguments.length
              ? ((A =
                  null == t
                    ? ((N = r = i = o = null), ul)
                    : Ss(
                        (N = +t[0][0]),
                        (r = +t[0][1]),
                        (i = +t[1][0]),
                        (o = +t[1][1])
                      )),
                C())
              : null == N
              ? null
              : [
                  [N, r],
                  [i, o],
                ];
          }),
          (T.scale = function (t) {
            return arguments.length ? ((l = +t), k()) : l;
          }),
          (T.translate = function (t) {
            return arguments.length ? ((h = +t[0]), (d = +t[1]), k()) : [h, d];
          }),
          (T.center = function (t) {
            return arguments.length
              ? ((p = (t[0] % 360) * gc), (v = (t[1] % 360) * gc), k())
              : [p * yc, v * yc];
          }),
          (T.rotate = function (t) {
            return arguments.length
              ? ((y = (t[0] % 360) * gc),
                (g = (t[1] % 360) * gc),
                (_ = t.length > 2 ? (t[2] % 360) * gc : 0),
                k())
              : [y * yc, g * yc, _ * yc];
          }),
          (T.angle = function (t) {
            return arguments.length ? ((b = (t % 360) * gc), k()) : b * yc;
          }),
          (T.reflectX = function (t) {
            return arguments.length ? ((m = t ? -1 : 1), k()) : m < 0;
          }),
          (T.reflectY = function (t) {
            return arguments.length ? ((x = t ? -1 : 1), k()) : x < 0;
          }),
          (T.precision = function (t) {
            return arguments.length ? ((u = dh(a, (E = t * t))), C()) : Sc(E);
          }),
          (T.fitExtent = function (t, n) {
            return ch(T, t, n);
          }),
          (T.fitSize = function (t, n) {
            return fh(T, t, n);
          }),
          (T.fitWidth = function (t, n) {
            return sh(T, t, n);
          }),
          (T.fitHeight = function (t, n) {
            return lh(T, t, n);
          }),
          function () {
            return (
              (n = t.apply(this, arguments)), (T.invert = n.invert && S), k()
            );
          }
        );
      }
      function bh(t) {
        var n = 0,
          e = hc / 3,
          r = _h(t),
          i = r(n, e);
        return (
          (i.parallels = function (t) {
            return arguments.length
              ? r((n = t[0] * gc), (e = t[1] * gc))
              : [n * yc, e * yc];
          }),
          i
        );
      }
      function mh(t, n) {
        var e = Ec(t),
          r = (e + Ec(n)) / 2;
        if (_c(r) < 1e-6)
          return (function (t) {
            var n = xc(t);
            function e(t, e) {
              return [t * n, Ec(e) / n];
            }
            return (
              (e.invert = function (t, e) {
                return [t / n, Pc(e * n)];
              }),
              e
            );
          })(t);
        var i = 1 + e * (2 * r - e),
          o = Sc(i) / r;
        function u(t, n) {
          var e = Sc(i - 2 * r * Ec(n)) / r;
          return [e * Ec((t *= r)), o - e * xc(t)];
        }
        return (
          (u.invert = function (t, n) {
            var e = o - n,
              u = mc(t, _c(e)) * Tc(e);
            return (
              e * r < 0 && (u -= hc * Tc(t) * Tc(e)),
              [u / r, Pc((i - (t * t + e * e) * r * r) / (2 * r))]
            );
          }),
          u
        );
      }
      var xh = function () {
          return bh(mh).scale(155.424).center([0, 33.6442]);
        },
        wh = function () {
          return xh()
            .parallels([29.5, 45.5])
            .scale(1070)
            .translate([480, 250])
            .rotate([96, 0])
            .center([-0.6, 38.7]);
        };
      var Mh = function () {
        var t,
          n,
          e,
          r,
          i,
          o,
          u = wh(),
          a = xh().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
          c = xh().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
          f = {
            point: function (t, n) {
              o = [t, n];
            },
          };
        function s(t) {
          var n = t[0],
            u = t[1];
          return (
            (o = null),
            e.point(n, u),
            o || (r.point(n, u), o) || (i.point(n, u), o)
          );
        }
        function l() {
          return (t = n = null), s;
        }
        return (
          (s.invert = function (t) {
            var n = u.scale(),
              e = u.translate(),
              r = (t[0] - e[0]) / n,
              i = (t[1] - e[1]) / n;
            return (i >= 0.12 && i < 0.234 && r >= -0.425 && r < -0.214
              ? a
              : i >= 0.166 && i < 0.234 && r >= -0.214 && r < -0.115
              ? c
              : u
            ).invert(t);
          }),
          (s.stream = function (e) {
            return t && n === e
              ? t
              : ((r = [u.stream((n = e)), a.stream(e), c.stream(e)]),
                (i = r.length),
                (t = {
                  point: function (t, n) {
                    for (var e = -1; ++e < i; ) r[e].point(t, n);
                  },
                  sphere: function () {
                    for (var t = -1; ++t < i; ) r[t].sphere();
                  },
                  lineStart: function () {
                    for (var t = -1; ++t < i; ) r[t].lineStart();
                  },
                  lineEnd: function () {
                    for (var t = -1; ++t < i; ) r[t].lineEnd();
                  },
                  polygonStart: function () {
                    for (var t = -1; ++t < i; ) r[t].polygonStart();
                  },
                  polygonEnd: function () {
                    for (var t = -1; ++t < i; ) r[t].polygonEnd();
                  },
                }));
            var r, i;
          }),
          (s.precision = function (t) {
            return arguments.length
              ? (u.precision(t), a.precision(t), c.precision(t), l())
              : u.precision();
          }),
          (s.scale = function (t) {
            return arguments.length
              ? (u.scale(t),
                a.scale(0.35 * t),
                c.scale(t),
                s.translate(u.translate()))
              : u.scale();
          }),
          (s.translate = function (t) {
            if (!arguments.length) return u.translate();
            var n = u.scale(),
              o = +t[0],
              s = +t[1];
            return (
              (e = u
                .translate(t)
                .clipExtent([
                  [o - 0.455 * n, s - 0.238 * n],
                  [o + 0.455 * n, s + 0.238 * n],
                ])
                .stream(f)),
              (r = a
                .translate([o - 0.307 * n, s + 0.201 * n])
                .clipExtent([
                  [o - 0.425 * n + 1e-6, s + 0.12 * n + 1e-6],
                  [o - 0.214 * n - 1e-6, s + 0.234 * n - 1e-6],
                ])
                .stream(f)),
              (i = c
                .translate([o - 0.205 * n, s + 0.212 * n])
                .clipExtent([
                  [o - 0.214 * n + 1e-6, s + 0.166 * n + 1e-6],
                  [o - 0.115 * n - 1e-6, s + 0.234 * n - 1e-6],
                ])
                .stream(f)),
              l()
            );
          }),
          (s.fitExtent = function (t, n) {
            return ch(s, t, n);
          }),
          (s.fitSize = function (t, n) {
            return fh(s, t, n);
          }),
          (s.fitWidth = function (t, n) {
            return sh(s, t, n);
          }),
          (s.fitHeight = function (t, n) {
            return lh(s, t, n);
          }),
          s.scale(1070)
        );
      };
      function Nh(t) {
        return function (n, e) {
          var r = xc(n),
            i = xc(e),
            o = t(r * i);
          return [o * i * Ec(n), o * Ec(e)];
        };
      }
      function Ah(t) {
        return function (n, e) {
          var r = Sc(n * n + e * e),
            i = t(r),
            o = Ec(i),
            u = xc(i);
          return [mc(n * o, r * u), Pc(r && (e * o) / r)];
        };
      }
      var Eh = Nh(function (t) {
        return Sc(2 / (1 + t));
      });
      Eh.invert = Ah(function (t) {
        return 2 * Pc(t / 2);
      });
      var Th = function () {
          return gh(Eh).scale(124.75).clipAngle(179.999);
        },
        Sh = Nh(function (t) {
          return (t = Cc(t)) && t / Ec(t);
        });
      Sh.invert = Ah(function (t) {
        return t;
      });
      var kh = function () {
        return gh(Sh).scale(79.4188).clipAngle(179.999);
      };
      function Ch(t, n) {
        return [t, Nc(kc((dc + n) / 2))];
      }
      Ch.invert = function (t, n) {
        return [t, 2 * bc(Mc(n)) - dc];
      };
      var Ph = function () {
        return zh(Ch).scale(961 / vc);
      };
      function zh(t) {
        var n,
          e,
          r,
          i = gh(t),
          o = i.center,
          u = i.scale,
          a = i.translate,
          c = i.clipExtent,
          f = null;
        function s() {
          var o = hc * u(),
            a = i(ls(i.rotate()).invert([0, 0]));
          return c(
            null == f
              ? [
                  [a[0] - o, a[1] - o],
                  [a[0] + o, a[1] + o],
                ]
              : t === Ch
              ? [
                  [Math.max(a[0] - o, f), n],
                  [Math.min(a[0] + o, e), r],
                ]
              : [
                  [f, Math.max(a[1] - o, n)],
                  [e, Math.min(a[1] + o, r)],
                ]
          );
        }
        return (
          (i.scale = function (t) {
            return arguments.length ? (u(t), s()) : u();
          }),
          (i.translate = function (t) {
            return arguments.length ? (a(t), s()) : a();
          }),
          (i.center = function (t) {
            return arguments.length ? (o(t), s()) : o();
          }),
          (i.clipExtent = function (t) {
            return arguments.length
              ? (null == t
                  ? (f = n = e = r = null)
                  : ((f = +t[0][0]),
                    (n = +t[0][1]),
                    (e = +t[1][0]),
                    (r = +t[1][1])),
                s())
              : null == f
              ? null
              : [
                  [f, n],
                  [e, r],
                ];
          }),
          s()
        );
      }
      function Lh(t) {
        return kc((dc + t) / 2);
      }
      function Rh(t, n) {
        var e = xc(t),
          r = t === n ? Ec(t) : Nc(e / xc(n)) / Nc(Lh(n) / Lh(t)),
          i = (e * Ac(Lh(t), r)) / r;
        if (!r) return Ch;
        function o(t, n) {
          i > 0
            ? n < 1e-6 - dc && (n = 1e-6 - dc)
            : n > dc - 1e-6 && (n = dc - 1e-6);
          var e = i / Ac(Lh(n), r);
          return [e * Ec(r * t), i - e * xc(r * t)];
        }
        return (
          (o.invert = function (t, n) {
            var e = i - n,
              o = Tc(r) * Sc(t * t + e * e),
              u = mc(t, _c(e)) * Tc(e);
            return (
              e * r < 0 && (u -= hc * Tc(t) * Tc(e)),
              [u / r, 2 * bc(Ac(i / o, 1 / r)) - dc]
            );
          }),
          o
        );
      }
      var qh = function () {
        return bh(Rh).scale(109.5).parallels([30, 30]);
      };
      function Dh(t, n) {
        return [t, n];
      }
      Dh.invert = Dh;
      var Uh = function () {
        return gh(Dh).scale(152.63);
      };
      function Oh(t, n) {
        var e = xc(t),
          r = t === n ? Ec(t) : (e - xc(n)) / (n - t),
          i = e / r + t;
        if (_c(r) < 1e-6) return Dh;
        function o(t, n) {
          var e = i - n,
            o = r * t;
          return [e * Ec(o), i - e * xc(o)];
        }
        return (
          (o.invert = function (t, n) {
            var e = i - n,
              o = mc(t, _c(e)) * Tc(e);
            return (
              e * r < 0 && (o -= hc * Tc(t) * Tc(e)),
              [o / r, i - Tc(r) * Sc(t * t + e * e)]
            );
          }),
          o
        );
      }
      var Bh = function () {
          return bh(Oh).scale(131.154).center([0, 13.9389]);
        },
        Fh = 1.340264,
        Yh = -0.081106,
        Ih = 893e-6,
        jh = 0.003796,
        Hh = Sc(3) / 2;
      function Vh(t, n) {
        var e = Pc(Hh * Ec(n)),
          r = e * e,
          i = r * r * r;
        return [
          (t * xc(e)) / (Hh * (Fh + 3 * Yh * r + i * (7 * Ih + 9 * jh * r))),
          e * (Fh + Yh * r + i * (Ih + jh * r)),
        ];
      }
      Vh.invert = function (t, n) {
        for (
          var e, r = n, i = r * r, o = i * i * i, u = 0;
          u < 12 &&
          ((o =
            (i =
              (r -= e =
                (r * (Fh + Yh * i + o * (Ih + jh * i)) - n) /
                (Fh + 3 * Yh * i + o * (7 * Ih + 9 * jh * i))) * r) *
            i *
            i),
          !(_c(e) < 1e-12));
          ++u
        );
        return [
          (Hh * t * (Fh + 3 * Yh * i + o * (7 * Ih + 9 * jh * i))) / xc(r),
          Pc(Ec(r) / Hh),
        ];
      };
      var Xh = function () {
        return gh(Vh).scale(177.158);
      };
      function Gh(t, n) {
        var e = xc(n),
          r = xc(t) * e;
        return [(e * Ec(t)) / r, Ec(n) / r];
      }
      Gh.invert = Ah(bc);
      var $h = function () {
          return gh(Gh).scale(144.049).clipAngle(60);
        },
        Wh = function () {
          var t,
            n,
            e,
            r,
            i,
            o,
            u,
            a = 1,
            c = 0,
            f = 0,
            s = 1,
            l = 1,
            h = 0,
            d = null,
            p = 1,
            v = 1,
            y = oh({
              point: function (t, n) {
                var e = b([t, n]);
                this.stream.point(e[0], e[1]);
              },
            }),
            g = ul;
          function _() {
            return (p = a * s), (v = a * l), (o = u = null), b;
          }
          function b(e) {
            var r = e[0] * p,
              i = e[1] * v;
            if (h) {
              var o = i * t - r * n;
              (r = r * t + i * n), (i = o);
            }
            return [r + c, i + f];
          }
          return (
            (b.invert = function (e) {
              var r = e[0] - c,
                i = e[1] - f;
              if (h) {
                var o = i * t + r * n;
                (r = r * t - i * n), (i = o);
              }
              return [r / p, i / v];
            }),
            (b.stream = function (t) {
              return o && u === t ? o : (o = y(g((u = t))));
            }),
            (b.postclip = function (t) {
              return arguments.length
                ? ((g = t), (d = e = r = i = null), _())
                : g;
            }),
            (b.clipExtent = function (t) {
              return arguments.length
                ? ((g =
                    null == t
                      ? ((d = e = r = i = null), ul)
                      : Ss(
                          (d = +t[0][0]),
                          (e = +t[0][1]),
                          (r = +t[1][0]),
                          (i = +t[1][1])
                        )),
                  _())
                : null == d
                ? null
                : [
                    [d, e],
                    [r, i],
                  ];
            }),
            (b.scale = function (t) {
              return arguments.length ? ((a = +t), _()) : a;
            }),
            (b.translate = function (t) {
              return arguments.length
                ? ((c = +t[0]), (f = +t[1]), _())
                : [c, f];
            }),
            (b.angle = function (e) {
              return arguments.length
                ? ((n = Ec((h = (e % 360) * gc))), (t = xc(h)), _())
                : h * yc;
            }),
            (b.reflectX = function (t) {
              return arguments.length ? ((s = t ? -1 : 1), _()) : s < 0;
            }),
            (b.reflectY = function (t) {
              return arguments.length ? ((l = t ? -1 : 1), _()) : l < 0;
            }),
            (b.fitExtent = function (t, n) {
              return ch(b, t, n);
            }),
            (b.fitSize = function (t, n) {
              return fh(b, t, n);
            }),
            (b.fitWidth = function (t, n) {
              return sh(b, t, n);
            }),
            (b.fitHeight = function (t, n) {
              return lh(b, t, n);
            }),
            b
          );
        };
      function Zh(t, n) {
        var e = n * n,
          r = e * e;
        return [
          t *
            (0.8707 -
              0.131979 * e +
              r * (r * (0.003971 * e - 0.001529 * r) - 0.013791)),
          n *
            (1.007226 +
              e * (0.015085 + r * (0.028874 * e - 0.044475 - 0.005916 * r))),
        ];
      }
      Zh.invert = function (t, n) {
        var e,
          r = n,
          i = 25;
        do {
          var o = r * r,
            u = o * o;
          r -= e =
            (r *
              (1.007226 +
                o * (0.015085 + u * (0.028874 * o - 0.044475 - 0.005916 * u))) -
              n) /
            (1.007226 +
              o *
                (0.045255 + u * (0.259866 * o - 0.311325 - 0.005916 * 11 * u)));
        } while (_c(e) > 1e-6 && --i > 0);
        return [
          t /
            (0.8707 +
              (o = r * r) *
                (o * (o * o * o * (0.003971 - 0.001529 * o) - 0.013791) -
                  0.131979)),
          r,
        ];
      };
      var Qh = function () {
        return gh(Zh).scale(175.295);
      };
      function Jh(t, n) {
        return [xc(n) * Ec(t), Ec(n)];
      }
      Jh.invert = Ah(Pc);
      var Kh = function () {
        return gh(Jh).scale(249.5).clipAngle(90.000001);
      };
      function td(t, n) {
        var e = xc(n),
          r = 1 + xc(t) * e;
        return [(e * Ec(t)) / r, Ec(n) / r];
      }
      td.invert = Ah(function (t) {
        return 2 * bc(t);
      });
      var nd = function () {
        return gh(td).scale(250).clipAngle(142);
      };
      function ed(t, n) {
        return [Nc(kc((dc + n) / 2)), -t];
      }
      ed.invert = function (t, n) {
        return [-n, 2 * bc(Mc(t)) - dc];
      };
      var rd = function () {
        var t = zh(ed),
          n = t.center,
          e = t.rotate;
        return (
          (t.center = function (t) {
            return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]];
          }),
          (t.rotate = function (t) {
            return arguments.length
              ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90])
              : [(t = e())[0], t[1], t[2] - 90];
          }),
          e([0, 0, 90]).scale(159.155)
        );
      };
      function id(t, n) {
        return t.parent === n.parent ? 1 : 2;
      }
      function od(t, n) {
        return t + n.x;
      }
      function ud(t, n) {
        return Math.max(t, n.y);
      }
      var ad = function () {
        var t = id,
          n = 1,
          e = 1,
          r = !1;
        function i(i) {
          var o,
            u = 0;
          i.eachAfter(function (n) {
            var e = n.children;
            e
              ? ((n.x = (function (t) {
                  return t.reduce(od, 0) / t.length;
                })(e)),
                (n.y = (function (t) {
                  return 1 + t.reduce(ud, 0);
                })(e)))
              : ((n.x = o ? (u += t(n, o)) : 0), (n.y = 0), (o = n));
          });
          var a = (function (t) {
              for (var n; (n = t.children); ) t = n[0];
              return t;
            })(i),
            c = (function (t) {
              for (var n; (n = t.children); ) t = n[n.length - 1];
              return t;
            })(i),
            f = a.x - t(a, c) / 2,
            s = c.x + t(c, a) / 2;
          return i.eachAfter(
            r
              ? function (t) {
                  (t.x = (t.x - i.x) * n), (t.y = (i.y - t.y) * e);
                }
              : function (t) {
                  (t.x = ((t.x - f) / (s - f)) * n),
                    (t.y = (1 - (i.y ? t.y / i.y : 1)) * e);
                }
          );
        }
        return (
          (i.separation = function (n) {
            return arguments.length ? ((t = n), i) : t;
          }),
          (i.size = function (t) {
            return arguments.length
              ? ((r = !1), (n = +t[0]), (e = +t[1]), i)
              : r
              ? null
              : [n, e];
          }),
          (i.nodeSize = function (t) {
            return arguments.length
              ? ((r = !0), (n = +t[0]), (e = +t[1]), i)
              : r
              ? [n, e]
              : null;
          }),
          i
        );
      };
      function cd(t) {
        var n = 0,
          e = t.children,
          r = e && e.length;
        if (r) for (; --r >= 0; ) n += e[r].value;
        else n = 1;
        t.value = n;
      }
      function fd(t, n) {
        var e,
          r,
          i,
          o,
          u,
          a = new dd(t),
          c = +t.value && (a.value = t.value),
          f = [a];
        for (null == n && (n = sd); (e = f.pop()); )
          if (
            (c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length))
          )
            for (e.children = new Array(u), o = u - 1; o >= 0; --o)
              f.push((r = e.children[o] = new dd(i[o]))),
                (r.parent = e),
                (r.depth = e.depth + 1);
        return a.eachBefore(hd);
      }
      function sd(t) {
        return t.children;
      }
      function ld(t) {
        t.data = t.data.data;
      }
      function hd(t) {
        var n = 0;
        do {
          t.height = n;
        } while ((t = t.parent) && t.height < ++n);
      }
      function dd(t) {
        (this.data = t), (this.depth = this.height = 0), (this.parent = null);
      }
      dd.prototype = fd.prototype = {
        constructor: dd,
        count: function () {
          return this.eachAfter(cd);
        },
        each: function (t) {
          var n,
            e,
            r,
            i,
            o = this,
            u = [o];
          do {
            for (n = u.reverse(), u = []; (o = n.pop()); )
              if ((t(o), (e = o.children)))
                for (r = 0, i = e.length; r < i; ++r) u.push(e[r]);
          } while (u.length);
          return this;
        },
        eachAfter: function (t) {
          for (var n, e, r, i = this, o = [i], u = []; (i = o.pop()); )
            if ((u.push(i), (n = i.children)))
              for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
          for (; (i = u.pop()); ) t(i);
          return this;
        },
        eachBefore: function (t) {
          for (var n, e, r = this, i = [r]; (r = i.pop()); )
            if ((t(r), (n = r.children)))
              for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
          return this;
        },
        sum: function (t) {
          return this.eachAfter(function (n) {
            for (
              var e = +t(n.data) || 0, r = n.children, i = r && r.length;
              --i >= 0;

            )
              e += r[i].value;
            n.value = e;
          });
        },
        sort: function (t) {
          return this.eachBefore(function (n) {
            n.children && n.children.sort(t);
          });
        },
        path: function (t) {
          for (
            var n = this,
              e = (function (t, n) {
                if (t === n) return t;
                var e = t.ancestors(),
                  r = n.ancestors(),
                  i = null;
                (t = e.pop()), (n = r.pop());
                for (; t === n; ) (i = t), (t = e.pop()), (n = r.pop());
                return i;
              })(n, t),
              r = [n];
            n !== e;

          )
            (n = n.parent), r.push(n);
          for (var i = r.length; t !== e; ) r.splice(i, 0, t), (t = t.parent);
          return r;
        },
        ancestors: function () {
          for (var t = this, n = [t]; (t = t.parent); ) n.push(t);
          return n;
        },
        descendants: function () {
          var t = [];
          return (
            this.each(function (n) {
              t.push(n);
            }),
            t
          );
        },
        leaves: function () {
          var t = [];
          return (
            this.eachBefore(function (n) {
              n.children || t.push(n);
            }),
            t
          );
        },
        links: function () {
          var t = this,
            n = [];
          return (
            t.each(function (e) {
              e !== t && n.push({ source: e.parent, target: e });
            }),
            n
          );
        },
        copy: function () {
          return fd(this).eachBefore(ld);
        },
      };
      var pd = Array.prototype.slice;
      var vd = function (t) {
        for (
          var n,
            e,
            r = 0,
            i = (t = (function (t) {
              for (var n, e, r = t.length; r; )
                (e = (Math.random() * r--) | 0),
                  (n = t[r]),
                  (t[r] = t[e]),
                  (t[e] = n);
              return t;
            })(pd.call(t))).length,
            o = [];
          r < i;

        )
          (n = t[r]), e && _d(e, n) ? ++r : ((e = md((o = yd(o, n)))), (r = 0));
        return e;
      };
      function yd(t, n) {
        var e, r;
        if (bd(n, t)) return [n];
        for (e = 0; e < t.length; ++e)
          if (gd(n, t[e]) && bd(xd(t[e], n), t)) return [t[e], n];
        for (e = 0; e < t.length - 1; ++e)
          for (r = e + 1; r < t.length; ++r)
            if (
              gd(xd(t[e], t[r]), n) &&
              gd(xd(t[e], n), t[r]) &&
              gd(xd(t[r], n), t[e]) &&
              bd(wd(t[e], t[r], n), t)
            )
              return [t[e], t[r], n];
        throw new Error();
      }
      function gd(t, n) {
        var e = t.r - n.r,
          r = n.x - t.x,
          i = n.y - t.y;
        return e < 0 || e * e < r * r + i * i;
      }
      function _d(t, n) {
        var e = t.r - n.r + 1e-6,
          r = n.x - t.x,
          i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i;
      }
      function bd(t, n) {
        for (var e = 0; e < n.length; ++e) if (!_d(t, n[e])) return !1;
        return !0;
      }
      function md(t) {
        switch (t.length) {
          case 1:
            return { x: (n = t[0]).x, y: n.y, r: n.r };
          case 2:
            return xd(t[0], t[1]);
          case 3:
            return wd(t[0], t[1], t[2]);
        }
        var n;
      }
      function xd(t, n) {
        var e = t.x,
          r = t.y,
          i = t.r,
          o = n.x,
          u = n.y,
          a = n.r,
          c = o - e,
          f = u - r,
          s = a - i,
          l = Math.sqrt(c * c + f * f);
        return {
          x: (e + o + (c / l) * s) / 2,
          y: (r + u + (f / l) * s) / 2,
          r: (l + i + a) / 2,
        };
      }
      function wd(t, n, e) {
        var r = t.x,
          i = t.y,
          o = t.r,
          u = n.x,
          a = n.y,
          c = n.r,
          f = e.x,
          s = e.y,
          l = e.r,
          h = r - u,
          d = r - f,
          p = i - a,
          v = i - s,
          y = c - o,
          g = l - o,
          _ = r * r + i * i - o * o,
          b = _ - u * u - a * a + c * c,
          m = _ - f * f - s * s + l * l,
          x = d * p - h * v,
          w = (p * m - v * b) / (2 * x) - r,
          M = (v * y - p * g) / x,
          N = (d * b - h * m) / (2 * x) - i,
          A = (h * g - d * y) / x,
          E = M * M + A * A - 1,
          T = 2 * (o + w * M + N * A),
          S = w * w + N * N - o * o,
          k = -(E ? (T + Math.sqrt(T * T - 4 * E * S)) / (2 * E) : S / T);
        return { x: r + w + M * k, y: i + N + A * k, r: k };
      }
      function Md(t, n, e) {
        var r,
          i,
          o,
          u,
          a = t.x - n.x,
          c = t.y - n.y,
          f = a * a + c * c;
        f
          ? ((i = n.r + e.r),
            (i *= i),
            (u = t.r + e.r),
            i > (u *= u)
              ? ((r = (f + u - i) / (2 * f)),
                (o = Math.sqrt(Math.max(0, u / f - r * r))),
                (e.x = t.x - r * a - o * c),
                (e.y = t.y - r * c + o * a))
              : ((r = (f + i - u) / (2 * f)),
                (o = Math.sqrt(Math.max(0, i / f - r * r))),
                (e.x = n.x + r * a - o * c),
                (e.y = n.y + r * c + o * a)))
          : ((e.x = n.x + e.r), (e.y = n.y));
      }
      function Nd(t, n) {
        var e = t.r + n.r - 1e-6,
          r = n.x - t.x,
          i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i;
      }
      function Ad(t) {
        var n = t._,
          e = t.next._,
          r = n.r + e.r,
          i = (n.x * e.r + e.x * n.r) / r,
          o = (n.y * e.r + e.y * n.r) / r;
        return i * i + o * o;
      }
      function Ed(t) {
        (this._ = t), (this.next = null), (this.previous = null);
      }
      function Td(t) {
        if (!(i = t.length)) return 0;
        var n, e, r, i, o, u, a, c, f, s, l;
        if ((((n = t[0]).x = 0), (n.y = 0), !(i > 1))) return n.r;
        if (((e = t[1]), (n.x = -e.r), (e.x = n.r), (e.y = 0), !(i > 2)))
          return n.r + e.r;
        Md(e, n, (r = t[2])),
          (n = new Ed(n)),
          (e = new Ed(e)),
          (r = new Ed(r)),
          (n.next = r.previous = e),
          (e.next = n.previous = r),
          (r.next = e.previous = n);
        t: for (a = 3; a < i; ++a) {
          Md(n._, e._, (r = t[a])),
            (r = new Ed(r)),
            (c = e.next),
            (f = n.previous),
            (s = e._.r),
            (l = n._.r);
          do {
            if (s <= l) {
              if (Nd(c._, r._)) {
                (e = c), (n.next = e), (e.previous = n), --a;
                continue t;
              }
              (s += c._.r), (c = c.next);
            } else {
              if (Nd(f._, r._)) {
                ((n = f).next = e), (e.previous = n), --a;
                continue t;
              }
              (l += f._.r), (f = f.previous);
            }
          } while (c !== f.next);
          for (
            r.previous = n, r.next = e, n.next = e.previous = e = r, o = Ad(n);
            (r = r.next) !== e;

          )
            (u = Ad(r)) < o && ((n = r), (o = u));
          e = n.next;
        }
        for (n = [e._], r = e; (r = r.next) !== e; ) n.push(r._);
        for (r = vd(n), a = 0; a < i; ++a) ((n = t[a]).x -= r.x), (n.y -= r.y);
        return r.r;
      }
      var Sd = function (t) {
        return Td(t), t;
      };
      function kd(t) {
        return null == t ? null : Cd(t);
      }
      function Cd(t) {
        if ("function" != typeof t) throw new Error();
        return t;
      }
      function Pd() {
        return 0;
      }
      var zd = function (t) {
        return function () {
          return t;
        };
      };
      function Ld(t) {
        return Math.sqrt(t.value);
      }
      var Rd = function () {
        var t = null,
          n = 1,
          e = 1,
          r = Pd;
        function i(i) {
          return (
            (i.x = n / 2),
            (i.y = e / 2),
            t
              ? i.eachBefore(qd(t)).eachAfter(Dd(r, 0.5)).eachBefore(Ud(1))
              : i
                  .eachBefore(qd(Ld))
                  .eachAfter(Dd(Pd, 1))
                  .eachAfter(Dd(r, i.r / Math.min(n, e)))
                  .eachBefore(Ud(Math.min(n, e) / (2 * i.r))),
            i
          );
        }
        return (
          (i.radius = function (n) {
            return arguments.length ? ((t = kd(n)), i) : t;
          }),
          (i.size = function (t) {
            return arguments.length ? ((n = +t[0]), (e = +t[1]), i) : [n, e];
          }),
          (i.padding = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : zd(+t)), i)
              : r;
          }),
          i
        );
      };
      function qd(t) {
        return function (n) {
          n.children || (n.r = Math.max(0, +t(n) || 0));
        };
      }
      function Dd(t, n) {
        return function (e) {
          if ((r = e.children)) {
            var r,
              i,
              o,
              u = r.length,
              a = t(e) * n || 0;
            if (a) for (i = 0; i < u; ++i) r[i].r += a;
            if (((o = Td(r)), a)) for (i = 0; i < u; ++i) r[i].r -= a;
            e.r = o + a;
          }
        };
      }
      function Ud(t) {
        return function (n) {
          var e = n.parent;
          (n.r *= t), e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y));
        };
      }
      var Od = function (t) {
          (t.x0 = Math.round(t.x0)),
            (t.y0 = Math.round(t.y0)),
            (t.x1 = Math.round(t.x1)),
            (t.y1 = Math.round(t.y1));
        },
        Bd = function (t, n, e, r, i) {
          for (
            var o,
              u = t.children,
              a = -1,
              c = u.length,
              f = t.value && (r - n) / t.value;
            ++a < c;

          )
            ((o = u[a]).y0 = e),
              (o.y1 = i),
              (o.x0 = n),
              (o.x1 = n += o.value * f);
        },
        Fd = function () {
          var t = 1,
            n = 1,
            e = 0,
            r = !1;
          function i(i) {
            var o = i.height + 1;
            return (
              (i.x0 = i.y0 = e),
              (i.x1 = t),
              (i.y1 = n / o),
              i.eachBefore(
                (function (t, n) {
                  return function (r) {
                    r.children &&
                      Bd(
                        r,
                        r.x0,
                        (t * (r.depth + 1)) / n,
                        r.x1,
                        (t * (r.depth + 2)) / n
                      );
                    var i = r.x0,
                      o = r.y0,
                      u = r.x1 - e,
                      a = r.y1 - e;
                    u < i && (i = u = (i + u) / 2),
                      a < o && (o = a = (o + a) / 2),
                      (r.x0 = i),
                      (r.y0 = o),
                      (r.x1 = u),
                      (r.y1 = a);
                  };
                })(n, o)
              ),
              r && i.eachBefore(Od),
              i
            );
          }
          return (
            (i.round = function (t) {
              return arguments.length ? ((r = !!t), i) : r;
            }),
            (i.size = function (e) {
              return arguments.length ? ((t = +e[0]), (n = +e[1]), i) : [t, n];
            }),
            (i.padding = function (t) {
              return arguments.length ? ((e = +t), i) : e;
            }),
            i
          );
        },
        Yd = { depth: -1 },
        Id = {};
      function jd(t) {
        return t.id;
      }
      function Hd(t) {
        return t.parentId;
      }
      var Vd = function () {
        var t = jd,
          n = Hd;
        function e(e) {
          var r,
            i,
            o,
            u,
            a,
            c,
            f,
            s = e.length,
            l = new Array(s),
            h = {};
          for (i = 0; i < s; ++i)
            (r = e[i]),
              (a = l[i] = new dd(r)),
              null != (c = t(r, i, e)) &&
                (c += "") &&
                (h[(f = "$" + (a.id = c))] = f in h ? Id : a);
          for (i = 0; i < s; ++i)
            if (((a = l[i]), null != (c = n(e[i], i, e)) && (c += ""))) {
              if (!(u = h["$" + c])) throw new Error("missing: " + c);
              if (u === Id) throw new Error("ambiguous: " + c);
              u.children ? u.children.push(a) : (u.children = [a]),
                (a.parent = u);
            } else {
              if (o) throw new Error("multiple roots");
              o = a;
            }
          if (!o) throw new Error("no root");
          if (
            ((o.parent = Yd),
            o
              .eachBefore(function (t) {
                (t.depth = t.parent.depth + 1), --s;
              })
              .eachBefore(hd),
            (o.parent = null),
            s > 0)
          )
            throw new Error("cycle");
          return o;
        }
        return (
          (e.id = function (n) {
            return arguments.length ? ((t = Cd(n)), e) : t;
          }),
          (e.parentId = function (t) {
            return arguments.length ? ((n = Cd(t)), e) : n;
          }),
          e
        );
      };
      function Xd(t, n) {
        return t.parent === n.parent ? 1 : 2;
      }
      function Gd(t) {
        var n = t.children;
        return n ? n[0] : t.t;
      }
      function $d(t) {
        var n = t.children;
        return n ? n[n.length - 1] : t.t;
      }
      function Wd(t, n, e) {
        var r = e / (n.i - t.i);
        (n.c -= r), (n.s += e), (t.c += r), (n.z += e), (n.m += e);
      }
      function Zd(t, n, e) {
        return t.a.parent === n.parent ? t.a : e;
      }
      function Qd(t, n) {
        (this._ = t),
          (this.parent = null),
          (this.children = null),
          (this.A = null),
          (this.a = this),
          (this.z = 0),
          (this.m = 0),
          (this.c = 0),
          (this.s = 0),
          (this.t = null),
          (this.i = n);
      }
      Qd.prototype = Object.create(dd.prototype);
      var Jd = function () {
          var t = Xd,
            n = 1,
            e = 1,
            r = null;
          function i(i) {
            var c = (function (t) {
              for (
                var n, e, r, i, o, u = new Qd(t, 0), a = [u];
                (n = a.pop());

              )
                if ((r = n._.children))
                  for (
                    n.children = new Array((o = r.length)), i = o - 1;
                    i >= 0;
                    --i
                  )
                    a.push((e = n.children[i] = new Qd(r[i], i))),
                      (e.parent = n);
              return ((u.parent = new Qd(null, 0)).children = [u]), u;
            })(i);
            if ((c.eachAfter(o), (c.parent.m = -c.z), c.eachBefore(u), r))
              i.eachBefore(a);
            else {
              var f = i,
                s = i,
                l = i;
              i.eachBefore(function (t) {
                t.x < f.x && (f = t),
                  t.x > s.x && (s = t),
                  t.depth > l.depth && (l = t);
              });
              var h = f === s ? 1 : t(f, s) / 2,
                d = h - f.x,
                p = n / (s.x + h + d),
                v = e / (l.depth || 1);
              i.eachBefore(function (t) {
                (t.x = (t.x + d) * p), (t.y = t.depth * v);
              });
            }
            return i;
          }
          function o(n) {
            var e = n.children,
              r = n.parent.children,
              i = n.i ? r[n.i - 1] : null;
            if (e) {
              !(function (t) {
                for (
                  var n, e = 0, r = 0, i = t.children, o = i.length;
                  --o >= 0;

                )
                  ((n = i[o]).z += e), (n.m += e), (e += n.s + (r += n.c));
              })(n);
              var o = (e[0].z + e[e.length - 1].z) / 2;
              i ? ((n.z = i.z + t(n._, i._)), (n.m = n.z - o)) : (n.z = o);
            } else i && (n.z = i.z + t(n._, i._));
            n.parent.A = (function (n, e, r) {
              if (e) {
                for (
                  var i,
                    o = n,
                    u = n,
                    a = e,
                    c = o.parent.children[0],
                    f = o.m,
                    s = u.m,
                    l = a.m,
                    h = c.m;
                  (a = $d(a)), (o = Gd(o)), a && o;

                )
                  (c = Gd(c)),
                    ((u = $d(u)).a = n),
                    (i = a.z + l - o.z - f + t(a._, o._)) > 0 &&
                      (Wd(Zd(a, n, r), n, i), (f += i), (s += i)),
                    (l += a.m),
                    (f += o.m),
                    (h += c.m),
                    (s += u.m);
                a && !$d(u) && ((u.t = a), (u.m += l - s)),
                  o && !Gd(c) && ((c.t = o), (c.m += f - h), (r = n));
              }
              return r;
            })(n, i, n.parent.A || r[0]);
          }
          function u(t) {
            (t._.x = t.z + t.parent.m), (t.m += t.parent.m);
          }
          function a(t) {
            (t.x *= n), (t.y = t.depth * e);
          }
          return (
            (i.separation = function (n) {
              return arguments.length ? ((t = n), i) : t;
            }),
            (i.size = function (t) {
              return arguments.length
                ? ((r = !1), (n = +t[0]), (e = +t[1]), i)
                : r
                ? null
                : [n, e];
            }),
            (i.nodeSize = function (t) {
              return arguments.length
                ? ((r = !0), (n = +t[0]), (e = +t[1]), i)
                : r
                ? [n, e]
                : null;
            }),
            i
          );
        },
        Kd = function (t, n, e, r, i) {
          for (
            var o,
              u = t.children,
              a = -1,
              c = u.length,
              f = t.value && (i - e) / t.value;
            ++a < c;

          )
            ((o = u[a]).x0 = n),
              (o.x1 = r),
              (o.y0 = e),
              (o.y1 = e += o.value * f);
        },
        tp = (1 + Math.sqrt(5)) / 2;
      function np(t, n, e, r, i, o) {
        for (
          var u,
            a,
            c,
            f,
            s,
            l,
            h,
            d,
            p,
            v,
            y,
            g = [],
            _ = n.children,
            b = 0,
            m = 0,
            x = _.length,
            w = n.value;
          b < x;

        ) {
          (c = i - e), (f = o - r);
          do {
            s = _[m++].value;
          } while (!s && m < x);
          for (
            l = h = s,
              y = s * s * (v = Math.max(f / c, c / f) / (w * t)),
              p = Math.max(h / y, y / l);
            m < x;
            ++m
          ) {
            if (
              ((s += a = _[m].value),
              a < l && (l = a),
              a > h && (h = a),
              (y = s * s * v),
              (d = Math.max(h / y, y / l)) > p)
            ) {
              s -= a;
              break;
            }
            p = d;
          }
          g.push((u = { value: s, dice: c < f, children: _.slice(b, m) })),
            u.dice
              ? Bd(u, e, r, i, w ? (r += (f * s) / w) : o)
              : Kd(u, e, r, w ? (e += (c * s) / w) : i, o),
            (w -= s),
            (b = m);
        }
        return g;
      }
      var ep = (function t(n) {
          function e(t, e, r, i, o) {
            np(n, t, e, r, i, o);
          }
          return (
            (e.ratio = function (n) {
              return t((n = +n) > 1 ? n : 1);
            }),
            e
          );
        })(tp),
        rp = function () {
          var t = ep,
            n = !1,
            e = 1,
            r = 1,
            i = [0],
            o = Pd,
            u = Pd,
            a = Pd,
            c = Pd,
            f = Pd;
          function s(t) {
            return (
              (t.x0 = t.y0 = 0),
              (t.x1 = e),
              (t.y1 = r),
              t.eachBefore(l),
              (i = [0]),
              n && t.eachBefore(Od),
              t
            );
          }
          function l(n) {
            var e = i[n.depth],
              r = n.x0 + e,
              s = n.y0 + e,
              l = n.x1 - e,
              h = n.y1 - e;
            l < r && (r = l = (r + l) / 2),
              h < s && (s = h = (s + h) / 2),
              (n.x0 = r),
              (n.y0 = s),
              (n.x1 = l),
              (n.y1 = h),
              n.children &&
                ((e = i[n.depth + 1] = o(n) / 2),
                (r += f(n) - e),
                (s += u(n) - e),
                (l -= a(n) - e) < r && (r = l = (r + l) / 2),
                (h -= c(n) - e) < s && (s = h = (s + h) / 2),
                t(n, r, s, l, h));
          }
          return (
            (s.round = function (t) {
              return arguments.length ? ((n = !!t), s) : n;
            }),
            (s.size = function (t) {
              return arguments.length ? ((e = +t[0]), (r = +t[1]), s) : [e, r];
            }),
            (s.tile = function (n) {
              return arguments.length ? ((t = Cd(n)), s) : t;
            }),
            (s.padding = function (t) {
              return arguments.length
                ? s.paddingInner(t).paddingOuter(t)
                : s.paddingInner();
            }),
            (s.paddingInner = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : zd(+t)), s)
                : o;
            }),
            (s.paddingOuter = function (t) {
              return arguments.length
                ? s
                    .paddingTop(t)
                    .paddingRight(t)
                    .paddingBottom(t)
                    .paddingLeft(t)
                : s.paddingTop();
            }),
            (s.paddingTop = function (t) {
              return arguments.length
                ? ((u = "function" == typeof t ? t : zd(+t)), s)
                : u;
            }),
            (s.paddingRight = function (t) {
              return arguments.length
                ? ((a = "function" == typeof t ? t : zd(+t)), s)
                : a;
            }),
            (s.paddingBottom = function (t) {
              return arguments.length
                ? ((c = "function" == typeof t ? t : zd(+t)), s)
                : c;
            }),
            (s.paddingLeft = function (t) {
              return arguments.length
                ? ((f = "function" == typeof t ? t : zd(+t)), s)
                : f;
            }),
            s
          );
        },
        ip = function (t, n, e, r, i) {
          var o,
            u,
            a = t.children,
            c = a.length,
            f = new Array(c + 1);
          for (f[0] = u = o = 0; o < c; ++o) f[o + 1] = u += a[o].value;
          !(function t(n, e, r, i, o, u, c) {
            if (n >= e - 1) {
              var s = a[n];
              return (s.x0 = i), (s.y0 = o), (s.x1 = u), void (s.y1 = c);
            }
            var l = f[n],
              h = r / 2 + l,
              d = n + 1,
              p = e - 1;
            for (; d < p; ) {
              var v = (d + p) >>> 1;
              f[v] < h ? (d = v + 1) : (p = v);
            }
            h - f[d - 1] < f[d] - h && n + 1 < d && --d;
            var y = f[d] - l,
              g = r - y;
            if (u - i > c - o) {
              var _ = (i * g + u * y) / r;
              t(n, d, y, i, o, _, c), t(d, e, g, _, o, u, c);
            } else {
              var b = (o * g + c * y) / r;
              t(n, d, y, i, o, u, b), t(d, e, g, i, b, u, c);
            }
          })(0, c, t.value, n, e, r, i);
        },
        op = function (t, n, e, r, i) {
          (1 & t.depth ? Kd : Bd)(t, n, e, r, i);
        },
        up = (function t(n) {
          function e(t, e, r, i, o) {
            if ((u = t._squarify) && u.ratio === n)
              for (
                var u, a, c, f, s, l = -1, h = u.length, d = t.value;
                ++l < h;

              ) {
                for (
                  c = (a = u[l]).children, f = a.value = 0, s = c.length;
                  f < s;
                  ++f
                )
                  a.value += c[f].value;
                a.dice
                  ? Bd(a, e, r, i, (r += ((o - r) * a.value) / d))
                  : Kd(a, e, r, (e += ((i - e) * a.value) / d), o),
                  (d -= a.value);
              }
            else (t._squarify = u = np(n, t, e, r, i, o)), (u.ratio = n);
          }
          return (
            (e.ratio = function (n) {
              return t((n = +n) > 1 ? n : 1);
            }),
            e
          );
        })(tp),
        ap = function (t) {
          var n = t.length;
          return function (e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
          };
        },
        cp = function (t, n) {
          var e = se(+t, +n);
          return function (t) {
            var n = e(t);
            return n - 360 * Math.floor(n / 360);
          };
        },
        fp = function (t, n) {
          return (
            (t = +t),
            (n = +n),
            function (e) {
              return Math.round(t * (1 - e) + n * e);
            }
          );
        },
        sp = Math.SQRT2;
      function lp(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2;
      }
      var hp = function (t, n) {
        var e,
          r,
          i = t[0],
          o = t[1],
          u = t[2],
          a = n[0],
          c = n[1],
          f = n[2],
          s = a - i,
          l = c - o,
          h = s * s + l * l;
        if (h < 1e-12)
          (r = Math.log(f / u) / sp),
            (e = function (t) {
              return [i + t * s, o + t * l, u * Math.exp(sp * t * r)];
            });
        else {
          var d = Math.sqrt(h),
            p = (f * f - u * u + 4 * h) / (2 * u * 2 * d),
            v = (f * f - u * u - 4 * h) / (2 * f * 2 * d),
            y = Math.log(Math.sqrt(p * p + 1) - p),
            g = Math.log(Math.sqrt(v * v + 1) - v);
          (r = (g - y) / sp),
            (e = function (t) {
              var n,
                e = t * r,
                a = lp(y),
                c =
                  (u / (2 * d)) *
                  (a *
                    ((n = sp * e + y), ((n = Math.exp(2 * n)) - 1) / (n + 1)) -
                    (function (t) {
                      return ((t = Math.exp(t)) - 1 / t) / 2;
                    })(y));
              return [i + c * s, o + c * l, (u * a) / lp(sp * e + y)];
            });
        }
        return (e.duration = 1e3 * r), e;
      };
      function dp(t) {
        return function (n, e) {
          var r = t((n = ee(n)).h, (e = ee(e)).h),
            i = he(n.s, e.s),
            o = he(n.l, e.l),
            u = he(n.opacity, e.opacity);
          return function (t) {
            return (
              (n.h = r(t)),
              (n.s = i(t)),
              (n.l = o(t)),
              (n.opacity = u(t)),
              n + ""
            );
          };
        };
      }
      var pp = dp(se),
        vp = dp(he);
      function yp(t, n) {
        var e = he((t = yo(t)).l, (n = yo(n)).l),
          r = he(t.a, n.a),
          i = he(t.b, n.b),
          o = he(t.opacity, n.opacity);
        return function (n) {
          return (
            (t.l = e(n)), (t.a = r(n)), (t.b = i(n)), (t.opacity = o(n)), t + ""
          );
        };
      }
      function gp(t) {
        return function (n, e) {
          var r = t((n = No(n)).h, (e = No(e)).h),
            i = he(n.c, e.c),
            o = he(n.l, e.l),
            u = he(n.opacity, e.opacity);
          return function (t) {
            return (
              (n.h = r(t)),
              (n.c = i(t)),
              (n.l = o(t)),
              (n.opacity = u(t)),
              n + ""
            );
          };
        };
      }
      var _p = gp(se),
        bp = gp(he);
      function mp(t) {
        return (function n(e) {
          function r(n, r) {
            var i = t((n = zo(n)).h, (r = zo(r)).h),
              o = he(n.s, r.s),
              u = he(n.l, r.l),
              a = he(n.opacity, r.opacity);
            return function (t) {
              return (
                (n.h = i(t)),
                (n.s = o(t)),
                (n.l = u(Math.pow(t, e))),
                (n.opacity = a(t)),
                n + ""
              );
            };
          }
          return (e = +e), (r.gamma = n), r;
        })(1);
      }
      var xp = mp(se),
        wp = mp(he);
      function Mp(t, n) {
        for (
          var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r);
          e < r;

        )
          o[e] = t(i, (i = n[++e]));
        return function (t) {
          var n = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
          return o[n](t - n);
        };
      }
      var Np = function (t, n) {
          for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
          return e;
        },
        Ap = function (t) {
          for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r; )
            (n = i), (i = t[e]), (o += n[1] * i[0] - n[0] * i[1]);
          return o / 2;
        },
        Ep = function (t) {
          for (
            var n, e, r = -1, i = t.length, o = 0, u = 0, a = t[i - 1], c = 0;
            ++r < i;

          )
            (n = a),
              (a = t[r]),
              (c += e = n[0] * a[1] - a[0] * n[1]),
              (o += (n[0] + a[0]) * e),
              (u += (n[1] + a[1]) * e);
          return [o / (c *= 3), u / c];
        };
      function Tp(t, n) {
        return t[0] - n[0] || t[1] - n[1];
      }
      function Sp(t) {
        for (var n, e, r, i = t.length, o = [0, 1], u = 2, a = 2; a < i; ++a) {
          for (
            ;
            u > 1 &&
            ((n = t[o[u - 2]]),
            (e = t[o[u - 1]]),
            (r = t[a]),
            (e[0] - n[0]) * (r[1] - n[1]) - (e[1] - n[1]) * (r[0] - n[0]) <= 0);

          )
            --u;
          o[u++] = a;
        }
        return o.slice(0, u);
      }
      var kp = function (t) {
          if ((e = t.length) < 3) return null;
          var n,
            e,
            r = new Array(e),
            i = new Array(e);
          for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
          for (r.sort(Tp), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
          var o = Sp(r),
            u = Sp(i),
            a = u[0] === o[0],
            c = u[u.length - 1] === o[o.length - 1],
            f = [];
          for (n = o.length - 1; n >= 0; --n) f.push(t[r[o[n]][2]]);
          for (n = +a; n < u.length - c; ++n) f.push(t[r[u[n]][2]]);
          return f;
        },
        Cp = function (t, n) {
          for (
            var e,
              r,
              i = t.length,
              o = t[i - 1],
              u = n[0],
              a = n[1],
              c = o[0],
              f = o[1],
              s = !1,
              l = 0;
            l < i;
            ++l
          )
            (e = (o = t[l])[0]),
              (r = o[1]) > a != f > a &&
                u < ((c - e) * (a - r)) / (f - r) + e &&
                (s = !s),
              (c = e),
              (f = r);
          return s;
        },
        Pp = function (t) {
          for (
            var n,
              e,
              r = -1,
              i = t.length,
              o = t[i - 1],
              u = o[0],
              a = o[1],
              c = 0;
            ++r < i;

          )
            (n = u),
              (e = a),
              (n -= u = (o = t[r])[0]),
              (e -= a = o[1]),
              (c += Math.sqrt(n * n + e * e));
          return c;
        },
        zp = function () {
          return Math.random();
        },
        Lp = (function t(n) {
          function e(t, e) {
            return (
              (t = null == t ? 0 : +t),
              (e = null == e ? 1 : +e),
              1 === arguments.length ? ((e = t), (t = 0)) : (e -= t),
              function () {
                return n() * e + t;
              }
            );
          }
          return (e.source = t), e;
        })(zp),
        Rp = (function t(n) {
          function e(t, e) {
            var r, i;
            return (
              (t = null == t ? 0 : +t),
              (e = null == e ? 1 : +e),
              function () {
                var o;
                if (null != r) (o = r), (r = null);
                else
                  do {
                    (r = 2 * n() - 1), (o = 2 * n() - 1), (i = r * r + o * o);
                  } while (!i || i > 1);
                return t + e * o * Math.sqrt((-2 * Math.log(i)) / i);
              }
            );
          }
          return (e.source = t), e;
        })(zp),
        qp = (function t(n) {
          function e() {
            var t = Rp.source(n).apply(this, arguments);
            return function () {
              return Math.exp(t());
            };
          }
          return (e.source = t), e;
        })(zp),
        Dp = (function t(n) {
          function e(t) {
            return function () {
              for (var e = 0, r = 0; r < t; ++r) e += n();
              return e;
            };
          }
          return (e.source = t), e;
        })(zp),
        Up = (function t(n) {
          function e(t) {
            var e = Dp.source(n)(t);
            return function () {
              return e() / t;
            };
          }
          return (e.source = t), e;
        })(zp),
        Op = (function t(n) {
          function e(t) {
            return function () {
              return -Math.log(1 - n()) / t;
            };
          }
          return (e.source = t), e;
        })(zp);
      function Bp(t, n) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(n).domain(t);
        }
        return this;
      }
      function Fp(t, n) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.interpolator(t);
            break;
          default:
            this.interpolator(n).domain(t);
        }
        return this;
      }
      var Yp = Array.prototype,
        Ip = Yp.map,
        jp = Yp.slice,
        Hp = { name: "implicit" };
      function Vp() {
        var t = Ji(),
          n = [],
          e = [],
          r = Hp;
        function i(i) {
          var o = i + "",
            u = t.get(o);
          if (!u) {
            if (r !== Hp) return r;
            t.set(o, (u = n.push(i)));
          }
          return e[(u - 1) % e.length];
        }
        return (
          (i.domain = function (e) {
            if (!arguments.length) return n.slice();
            (n = []), (t = Ji());
            for (var r, o, u = -1, a = e.length; ++u < a; )
              t.has((o = (r = e[u]) + "")) || t.set(o, n.push(r));
            return i;
          }),
          (i.range = function (t) {
            return arguments.length ? ((e = jp.call(t)), i) : e.slice();
          }),
          (i.unknown = function (t) {
            return arguments.length ? ((r = t), i) : r;
          }),
          (i.copy = function () {
            return Vp(n, e).unknown(r);
          }),
          Bp.apply(i, arguments),
          i
        );
      }
      function Xp() {
        var t,
          n,
          e = Vp().unknown(void 0),
          r = e.domain,
          i = e.range,
          o = [0, 1],
          u = !1,
          a = 0,
          c = 0,
          f = 0.5;
        function s() {
          var e = r().length,
            s = o[1] < o[0],
            l = o[s - 0],
            h = o[1 - s];
          (t = (h - l) / Math.max(1, e - a + 2 * c)),
            u && (t = Math.floor(t)),
            (l += (h - l - t * (e - a)) * f),
            (n = t * (1 - a)),
            u && ((l = Math.round(l)), (n = Math.round(n)));
          var d = M(e).map(function (n) {
            return l + t * n;
          });
          return i(s ? d.reverse() : d);
        }
        return (
          delete e.unknown,
          (e.domain = function (t) {
            return arguments.length ? (r(t), s()) : r();
          }),
          (e.range = function (t) {
            return arguments.length ? ((o = [+t[0], +t[1]]), s()) : o.slice();
          }),
          (e.rangeRound = function (t) {
            return (o = [+t[0], +t[1]]), (u = !0), s();
          }),
          (e.bandwidth = function () {
            return n;
          }),
          (e.step = function () {
            return t;
          }),
          (e.round = function (t) {
            return arguments.length ? ((u = !!t), s()) : u;
          }),
          (e.padding = function (t) {
            return arguments.length ? ((a = Math.min(1, (c = +t))), s()) : a;
          }),
          (e.paddingInner = function (t) {
            return arguments.length ? ((a = Math.min(1, t)), s()) : a;
          }),
          (e.paddingOuter = function (t) {
            return arguments.length ? ((c = +t), s()) : c;
          }),
          (e.align = function (t) {
            return arguments.length
              ? ((f = Math.max(0, Math.min(1, t))), s())
              : f;
          }),
          (e.copy = function () {
            return Xp(r(), o).round(u).paddingInner(a).paddingOuter(c).align(f);
          }),
          Bp.apply(s(), arguments)
        );
      }
      function Gp(t) {
        var n = t.copy;
        return (
          (t.padding = t.paddingOuter),
          delete t.paddingInner,
          delete t.paddingOuter,
          (t.copy = function () {
            return Gp(n());
          }),
          t
        );
      }
      function $p() {
        return Gp(Xp.apply(null, arguments).paddingInner(1));
      }
      var Wp = function (t) {
          return +t;
        },
        Zp = [0, 1];
      function Qp(t) {
        return t;
      }
      function Jp(t, n) {
        return (n -= t = +t)
          ? function (e) {
              return (e - t) / n;
            }
          : ((e = isNaN(n) ? NaN : 0.5),
            function () {
              return e;
            });
        var e;
      }
      function Kp(t) {
        var n,
          e = t[0],
          r = t[t.length - 1];
        return (
          e > r && ((n = e), (e = r), (r = n)),
          function (t) {
            return Math.max(e, Math.min(r, t));
          }
        );
      }
      function tv(t, n, e) {
        var r = t[0],
          i = t[1],
          o = n[0],
          u = n[1];
        return (
          i < r
            ? ((r = Jp(i, r)), (o = e(u, o)))
            : ((r = Jp(r, i)), (o = e(o, u))),
          function (t) {
            return o(r(t));
          }
        );
      }
      function nv(t, n, e) {
        var r = Math.min(t.length, n.length) - 1,
          i = new Array(r),
          o = new Array(r),
          u = -1;
        for (
          t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
          ++u < r;

        )
          (i[u] = Jp(t[u], t[u + 1])), (o[u] = e(n[u], n[u + 1]));
        return function (n) {
          var e = f(t, n, 1, r) - 1;
          return o[e](i[e](n));
        };
      }
      function ev(t, n) {
        return n
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function rv() {
        var t,
          n,
          e,
          r,
          i,
          o,
          u = Zp,
          a = Zp,
          c = ke,
          f = Qp;
        function s() {
          return (
            (r = Math.min(u.length, a.length) > 2 ? nv : tv), (i = o = null), l
          );
        }
        function l(n) {
          return isNaN((n = +n)) ? e : (i || (i = r(u.map(t), a, c)))(t(f(n)));
        }
        return (
          (l.invert = function (e) {
            return f(n((o || (o = r(a, u.map(t), we)))(e)));
          }),
          (l.domain = function (t) {
            return arguments.length
              ? ((u = Ip.call(t, Wp)), f === Qp || (f = Kp(u)), s())
              : u.slice();
          }),
          (l.range = function (t) {
            return arguments.length ? ((a = jp.call(t)), s()) : a.slice();
          }),
          (l.rangeRound = function (t) {
            return (a = jp.call(t)), (c = fp), s();
          }),
          (l.clamp = function (t) {
            return arguments.length ? ((f = t ? Kp(u) : Qp), l) : f !== Qp;
          }),
          (l.interpolate = function (t) {
            return arguments.length ? ((c = t), s()) : c;
          }),
          (l.unknown = function (t) {
            return arguments.length ? ((e = t), l) : e;
          }),
          function (e, r) {
            return (t = e), (n = r), s();
          }
        );
      }
      function iv(t, n) {
        return rv()(t, n);
      }
      var ov = function (t, n, e, r) {
        var i,
          o = k(t, n, e);
        switch ((r = Xa(null == r ? ",f" : r)).type) {
          case "s":
            var u = Math.max(Math.abs(t), Math.abs(n));
            return (
              null != r.precision || isNaN((i = uc(o, u))) || (r.precision = i),
              Qa(r, u)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != r.precision ||
              isNaN((i = ac(o, Math.max(Math.abs(t), Math.abs(n))))) ||
              (r.precision = i - ("e" === r.type));
            break;
          case "f":
          case "%":
            null != r.precision ||
              isNaN((i = oc(o))) ||
              (r.precision = i - 2 * ("%" === r.type));
        }
        return Za(r);
      };
      function uv(t) {
        var n = t.domain;
        return (
          (t.ticks = function (t) {
            var e = n();
            return T(e[0], e[e.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, e) {
            var r = n();
            return ov(r[0], r[r.length - 1], null == t ? 10 : t, e);
          }),
          (t.nice = function (e) {
            null == e && (e = 10);
            var r,
              i = n(),
              o = 0,
              u = i.length - 1,
              a = i[o],
              c = i[u];
            return (
              c < a && ((r = a), (a = c), (c = r), (r = o), (o = u), (u = r)),
              (r = S(a, c, e)) > 0
                ? (r = S(
                    (a = Math.floor(a / r) * r),
                    (c = Math.ceil(c / r) * r),
                    e
                  ))
                : r < 0 &&
                  (r = S(
                    (a = Math.ceil(a * r) / r),
                    (c = Math.floor(c * r) / r),
                    e
                  )),
              r > 0
                ? ((i[o] = Math.floor(a / r) * r),
                  (i[u] = Math.ceil(c / r) * r),
                  n(i))
                : r < 0 &&
                  ((i[o] = Math.ceil(a * r) / r),
                  (i[u] = Math.floor(c * r) / r),
                  n(i)),
              t
            );
          }),
          t
        );
      }
      function av() {
        var t = iv(Qp, Qp);
        return (
          (t.copy = function () {
            return ev(t, av());
          }),
          Bp.apply(t, arguments),
          uv(t)
        );
      }
      function cv(t) {
        var n;
        function e(t) {
          return isNaN((t = +t)) ? n : t;
        }
        return (
          (e.invert = e),
          (e.domain = e.range = function (n) {
            return arguments.length ? ((t = Ip.call(n, Wp)), e) : t.slice();
          }),
          (e.unknown = function (t) {
            return arguments.length ? ((n = t), e) : n;
          }),
          (e.copy = function () {
            return cv(t).unknown(n);
          }),
          (t = arguments.length ? Ip.call(t, Wp) : [0, 1]),
          uv(e)
        );
      }
      var fv = function (t, n) {
        var e,
          r = 0,
          i = (t = t.slice()).length - 1,
          o = t[r],
          u = t[i];
        return (
          u < o && ((e = r), (r = i), (i = e), (e = o), (o = u), (u = e)),
          (t[r] = n.floor(o)),
          (t[i] = n.ceil(u)),
          t
        );
      };
      function sv(t) {
        return Math.log(t);
      }
      function lv(t) {
        return Math.exp(t);
      }
      function hv(t) {
        return -Math.log(-t);
      }
      function dv(t) {
        return -Math.exp(-t);
      }
      function pv(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function vv(t) {
        return function (n) {
          return -t(-n);
        };
      }
      function yv(t) {
        var n,
          e,
          r = t(sv, lv),
          i = r.domain,
          o = 10;
        function u() {
          return (
            (n = (function (t) {
              return t === Math.E
                ? Math.log
                : (10 === t && Math.log10) ||
                    (2 === t && Math.log2) ||
                    ((t = Math.log(t)),
                    function (n) {
                      return Math.log(n) / t;
                    });
            })(o)),
            (e = (function (t) {
              return 10 === t
                ? pv
                : t === Math.E
                ? Math.exp
                : function (n) {
                    return Math.pow(t, n);
                  };
            })(o)),
            i()[0] < 0 ? ((n = vv(n)), (e = vv(e)), t(hv, dv)) : t(sv, lv),
            r
          );
        }
        return (
          (r.base = function (t) {
            return arguments.length ? ((o = +t), u()) : o;
          }),
          (r.domain = function (t) {
            return arguments.length ? (i(t), u()) : i();
          }),
          (r.ticks = function (t) {
            var r,
              u = i(),
              a = u[0],
              c = u[u.length - 1];
            (r = c < a) && ((h = a), (a = c), (c = h));
            var f,
              s,
              l,
              h = n(a),
              d = n(c),
              p = null == t ? 10 : +t,
              v = [];
            if (!(o % 1) && d - h < p) {
              if (((h = Math.round(h) - 1), (d = Math.round(d) + 1), a > 0)) {
                for (; h < d; ++h)
                  for (s = 1, f = e(h); s < o; ++s)
                    if (!((l = f * s) < a)) {
                      if (l > c) break;
                      v.push(l);
                    }
              } else
                for (; h < d; ++h)
                  for (s = o - 1, f = e(h); s >= 1; --s)
                    if (!((l = f * s) < a)) {
                      if (l > c) break;
                      v.push(l);
                    }
            } else v = T(h, d, Math.min(d - h, p)).map(e);
            return r ? v.reverse() : v;
          }),
          (r.tickFormat = function (t, i) {
            if (
              (null == i && (i = 10 === o ? ".0e" : ","),
              "function" != typeof i && (i = Za(i)),
              t === 1 / 0)
            )
              return i;
            null == t && (t = 10);
            var u = Math.max(1, (o * t) / r.ticks().length);
            return function (t) {
              var r = t / e(Math.round(n(t)));
              return r * o < o - 0.5 && (r *= o), r <= u ? i(t) : "";
            };
          }),
          (r.nice = function () {
            return i(
              fv(i(), {
                floor: function (t) {
                  return e(Math.floor(n(t)));
                },
                ceil: function (t) {
                  return e(Math.ceil(n(t)));
                },
              })
            );
          }),
          r
        );
      }
      function gv() {
        var t = yv(rv()).domain([1, 10]);
        return (
          (t.copy = function () {
            return ev(t, gv()).base(t.base());
          }),
          Bp.apply(t, arguments),
          t
        );
      }
      function _v(t) {
        return function (n) {
          return Math.sign(n) * Math.log1p(Math.abs(n / t));
        };
      }
      function bv(t) {
        return function (n) {
          return Math.sign(n) * Math.expm1(Math.abs(n)) * t;
        };
      }
      function mv(t) {
        var n = 1,
          e = t(_v(n), bv(n));
        return (
          (e.constant = function (e) {
            return arguments.length ? t(_v((n = +e)), bv(n)) : n;
          }),
          uv(e)
        );
      }
      function xv() {
        var t = mv(rv());
        return (
          (t.copy = function () {
            return ev(t, xv()).constant(t.constant());
          }),
          Bp.apply(t, arguments)
        );
      }
      function wv(t) {
        return function (n) {
          return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
        };
      }
      function Mv(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function Nv(t) {
        return t < 0 ? -t * t : t * t;
      }
      function Av(t) {
        var n = t(Qp, Qp),
          e = 1;
        function r() {
          return 1 === e
            ? t(Qp, Qp)
            : 0.5 === e
            ? t(Mv, Nv)
            : t(wv(e), wv(1 / e));
        }
        return (
          (n.exponent = function (t) {
            return arguments.length ? ((e = +t), r()) : e;
          }),
          uv(n)
        );
      }
      function Ev() {
        var t = Av(rv());
        return (
          (t.copy = function () {
            return ev(t, Ev()).exponent(t.exponent());
          }),
          Bp.apply(t, arguments),
          t
        );
      }
      function Tv() {
        return Ev.apply(null, arguments).exponent(0.5);
      }
      function Sv() {
        var t,
          n = [],
          e = [],
          r = [];
        function o() {
          var t = 0,
            i = Math.max(1, e.length);
          for (r = new Array(i - 1); ++t < i; ) r[t - 1] = z(n, t / i);
          return u;
        }
        function u(n) {
          return isNaN((n = +n)) ? t : e[f(r, n)];
        }
        return (
          (u.invertExtent = function (t) {
            var i = e.indexOf(t);
            return i < 0
              ? [NaN, NaN]
              : [
                  i > 0 ? r[i - 1] : n[0],
                  i < r.length ? r[i] : n[n.length - 1],
                ];
          }),
          (u.domain = function (t) {
            if (!arguments.length) return n.slice();
            n = [];
            for (var e, r = 0, u = t.length; r < u; ++r)
              null == (e = t[r]) || isNaN((e = +e)) || n.push(e);
            return n.sort(i), o();
          }),
          (u.range = function (t) {
            return arguments.length ? ((e = jp.call(t)), o()) : e.slice();
          }),
          (u.unknown = function (n) {
            return arguments.length ? ((t = n), u) : t;
          }),
          (u.quantiles = function () {
            return r.slice();
          }),
          (u.copy = function () {
            return Sv().domain(n).range(e).unknown(t);
          }),
          Bp.apply(u, arguments)
        );
      }
      function kv() {
        var t,
          n = 0,
          e = 1,
          r = 1,
          i = [0.5],
          o = [0, 1];
        function u(n) {
          return n <= n ? o[f(i, n, 0, r)] : t;
        }
        function a() {
          var t = -1;
          for (i = new Array(r); ++t < r; )
            i[t] = ((t + 1) * e - (t - r) * n) / (r + 1);
          return u;
        }
        return (
          (u.domain = function (t) {
            return arguments.length ? ((n = +t[0]), (e = +t[1]), a()) : [n, e];
          }),
          (u.range = function (t) {
            return arguments.length
              ? ((r = (o = jp.call(t)).length - 1), a())
              : o.slice();
          }),
          (u.invertExtent = function (t) {
            var u = o.indexOf(t);
            return u < 0
              ? [NaN, NaN]
              : u < 1
              ? [n, i[0]]
              : u >= r
              ? [i[r - 1], e]
              : [i[u - 1], i[u]];
          }),
          (u.unknown = function (n) {
            return arguments.length ? ((t = n), u) : u;
          }),
          (u.thresholds = function () {
            return i.slice();
          }),
          (u.copy = function () {
            return kv().domain([n, e]).range(o).unknown(t);
          }),
          Bp.apply(uv(u), arguments)
        );
      }
      function Cv() {
        var t,
          n = [0.5],
          e = [0, 1],
          r = 1;
        function i(i) {
          return i <= i ? e[f(n, i, 0, r)] : t;
        }
        return (
          (i.domain = function (t) {
            return arguments.length
              ? ((n = jp.call(t)), (r = Math.min(n.length, e.length - 1)), i)
              : n.slice();
          }),
          (i.range = function (t) {
            return arguments.length
              ? ((e = jp.call(t)), (r = Math.min(n.length, e.length - 1)), i)
              : e.slice();
          }),
          (i.invertExtent = function (t) {
            var r = e.indexOf(t);
            return [n[r - 1], n[r]];
          }),
          (i.unknown = function (n) {
            return arguments.length ? ((t = n), i) : t;
          }),
          (i.copy = function () {
            return Cv().domain(n).range(e).unknown(t);
          }),
          Bp.apply(i, arguments)
        );
      }
      var Pv = new Date(),
        zv = new Date();
      function Lv(t, n, e, r) {
        function i(n) {
          return t((n = 0 === arguments.length ? new Date() : new Date(+n))), n;
        }
        return (
          (i.floor = function (n) {
            return t((n = new Date(+n))), n;
          }),
          (i.ceil = function (e) {
            return t((e = new Date(e - 1))), n(e, 1), t(e), e;
          }),
          (i.round = function (t) {
            var n = i(t),
              e = i.ceil(t);
            return t - n < e - t ? n : e;
          }),
          (i.offset = function (t, e) {
            return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t;
          }),
          (i.range = function (e, r, o) {
            var u,
              a = [];
            if (
              ((e = i.ceil(e)),
              (o = null == o ? 1 : Math.floor(o)),
              !(e < r && o > 0))
            )
              return a;
            do {
              a.push((u = new Date(+e))), n(e, o), t(e);
            } while (u < e && e < r);
            return a;
          }),
          (i.filter = function (e) {
            return Lv(
              function (n) {
                if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
              },
              function (t, r) {
                if (t >= t)
                  if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
                  else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
              }
            );
          }),
          e &&
            ((i.count = function (n, r) {
              return (
                Pv.setTime(+n),
                zv.setTime(+r),
                t(Pv),
                t(zv),
                Math.floor(e(Pv, zv))
              );
            }),
            (i.every = function (t) {
              return (
                (t = Math.floor(t)),
                isFinite(t) && t > 0
                  ? t > 1
                    ? i.filter(
                        r
                          ? function (n) {
                              return r(n) % t == 0;
                            }
                          : function (n) {
                              return i.count(0, n) % t == 0;
                            }
                      )
                    : i
                  : null
              );
            })),
          i
        );
      }
      var Rv = Lv(
        function (t) {
          t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
        },
        function (t, n) {
          t.setFullYear(t.getFullYear() + n);
        },
        function (t, n) {
          return n.getFullYear() - t.getFullYear();
        },
        function (t) {
          return t.getFullYear();
        }
      );
      Rv.every = function (t) {
        return isFinite((t = Math.floor(t))) && t > 0
          ? Lv(
              function (n) {
                n.setFullYear(Math.floor(n.getFullYear() / t) * t),
                  n.setMonth(0, 1),
                  n.setHours(0, 0, 0, 0);
              },
              function (n, e) {
                n.setFullYear(n.getFullYear() + e * t);
              }
            )
          : null;
      };
      var qv = Rv,
        Dv = Rv.range,
        Uv = Lv(
          function (t) {
            t.setDate(1), t.setHours(0, 0, 0, 0);
          },
          function (t, n) {
            t.setMonth(t.getMonth() + n);
          },
          function (t, n) {
            return (
              n.getMonth() -
              t.getMonth() +
              12 * (n.getFullYear() - t.getFullYear())
            );
          },
          function (t) {
            return t.getMonth();
          }
        ),
        Ov = Uv,
        Bv = Uv.range;
      function Fv(t) {
        return Lv(
          function (n) {
            n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
              n.setHours(0, 0, 0, 0);
          },
          function (t, n) {
            t.setDate(t.getDate() + 7 * n);
          },
          function (t, n) {
            return (
              (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) /
              6048e5
            );
          }
        );
      }
      var Yv = Fv(0),
        Iv = Fv(1),
        jv = Fv(2),
        Hv = Fv(3),
        Vv = Fv(4),
        Xv = Fv(5),
        Gv = Fv(6),
        $v = Yv.range,
        Wv = Iv.range,
        Zv = jv.range,
        Qv = Hv.range,
        Jv = Vv.range,
        Kv = Xv.range,
        ty = Gv.range,
        ny = Lv(
          function (t) {
            t.setHours(0, 0, 0, 0);
          },
          function (t, n) {
            t.setDate(t.getDate() + n);
          },
          function (t, n) {
            return (
              (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) /
              864e5
            );
          },
          function (t) {
            return t.getDate() - 1;
          }
        ),
        ey = ny,
        ry = ny.range,
        iy = Lv(
          function (t) {
            t.setTime(
              t -
                t.getMilliseconds() -
                1e3 * t.getSeconds() -
                6e4 * t.getMinutes()
            );
          },
          function (t, n) {
            t.setTime(+t + 36e5 * n);
          },
          function (t, n) {
            return (n - t) / 36e5;
          },
          function (t) {
            return t.getHours();
          }
        ),
        oy = iy,
        uy = iy.range,
        ay = Lv(
          function (t) {
            t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
          },
          function (t, n) {
            t.setTime(+t + 6e4 * n);
          },
          function (t, n) {
            return (n - t) / 6e4;
          },
          function (t) {
            return t.getMinutes();
          }
        ),
        cy = ay,
        fy = ay.range,
        sy = Lv(
          function (t) {
            t.setTime(t - t.getMilliseconds());
          },
          function (t, n) {
            t.setTime(+t + 1e3 * n);
          },
          function (t, n) {
            return (n - t) / 1e3;
          },
          function (t) {
            return t.getUTCSeconds();
          }
        ),
        ly = sy,
        hy = sy.range,
        dy = Lv(
          function () {},
          function (t, n) {
            t.setTime(+t + n);
          },
          function (t, n) {
            return n - t;
          }
        );
      dy.every = function (t) {
        return (
          (t = Math.floor(t)),
          isFinite(t) && t > 0
            ? t > 1
              ? Lv(
                  function (n) {
                    n.setTime(Math.floor(n / t) * t);
                  },
                  function (n, e) {
                    n.setTime(+n + e * t);
                  },
                  function (n, e) {
                    return (e - n) / t;
                  }
                )
              : dy
            : null
        );
      };
      var py = dy,
        vy = dy.range;
      function yy(t) {
        return Lv(
          function (n) {
            n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)),
              n.setUTCHours(0, 0, 0, 0);
          },
          function (t, n) {
            t.setUTCDate(t.getUTCDate() + 7 * n);
          },
          function (t, n) {
            return (n - t) / 6048e5;
          }
        );
      }
      var gy = yy(0),
        _y = yy(1),
        by = yy(2),
        my = yy(3),
        xy = yy(4),
        wy = yy(5),
        My = yy(6),
        Ny = gy.range,
        Ay = _y.range,
        Ey = by.range,
        Ty = my.range,
        Sy = xy.range,
        ky = wy.range,
        Cy = My.range,
        Py = Lv(
          function (t) {
            t.setUTCHours(0, 0, 0, 0);
          },
          function (t, n) {
            t.setUTCDate(t.getUTCDate() + n);
          },
          function (t, n) {
            return (n - t) / 864e5;
          },
          function (t) {
            return t.getUTCDate() - 1;
          }
        ),
        zy = Py,
        Ly = Py.range,
        Ry = Lv(
          function (t) {
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
          },
          function (t, n) {
            t.setUTCFullYear(t.getUTCFullYear() + n);
          },
          function (t, n) {
            return n.getUTCFullYear() - t.getUTCFullYear();
          },
          function (t) {
            return t.getUTCFullYear();
          }
        );
      Ry.every = function (t) {
        return isFinite((t = Math.floor(t))) && t > 0
          ? Lv(
              function (n) {
                n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
                  n.setUTCMonth(0, 1),
                  n.setUTCHours(0, 0, 0, 0);
              },
              function (n, e) {
                n.setUTCFullYear(n.getUTCFullYear() + e * t);
              }
            )
          : null;
      };
      var qy = Ry,
        Dy = Ry.range;
      function Uy(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return n.setFullYear(t.y), n;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function Oy(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return n.setUTCFullYear(t.y), n;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function By(t, n, e) {
        return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
      }
      function Fy(t) {
        var n = t.dateTime,
          e = t.date,
          r = t.time,
          i = t.periods,
          o = t.days,
          u = t.shortDays,
          a = t.months,
          c = t.shortMonths,
          f = Jy(i),
          s = Ky(i),
          l = Jy(o),
          h = Ky(o),
          d = Jy(u),
          p = Ky(u),
          v = Jy(a),
          y = Ky(a),
          g = Jy(c),
          _ = Ky(c),
          b = {
            a: function (t) {
              return u[t.getDay()];
            },
            A: function (t) {
              return o[t.getDay()];
            },
            b: function (t) {
              return c[t.getMonth()];
            },
            B: function (t) {
              return a[t.getMonth()];
            },
            c: null,
            d: mg,
            e: mg,
            f: Ag,
            H: xg,
            I: wg,
            j: Mg,
            L: Ng,
            m: Eg,
            M: Tg,
            p: function (t) {
              return i[+(t.getHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getMonth() / 3);
            },
            Q: n_,
            s: e_,
            S: Sg,
            u: kg,
            U: Cg,
            V: Pg,
            w: zg,
            W: Lg,
            x: null,
            X: null,
            y: Rg,
            Y: qg,
            Z: Dg,
            "%": t_,
          },
          m = {
            a: function (t) {
              return u[t.getUTCDay()];
            },
            A: function (t) {
              return o[t.getUTCDay()];
            },
            b: function (t) {
              return c[t.getUTCMonth()];
            },
            B: function (t) {
              return a[t.getUTCMonth()];
            },
            c: null,
            d: Ug,
            e: Ug,
            f: Ig,
            H: Og,
            I: Bg,
            j: Fg,
            L: Yg,
            m: jg,
            M: Hg,
            p: function (t) {
              return i[+(t.getUTCHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getUTCMonth() / 3);
            },
            Q: n_,
            s: e_,
            S: Vg,
            u: Xg,
            U: Gg,
            V: $g,
            w: Wg,
            W: Zg,
            x: null,
            X: null,
            y: Qg,
            Y: Jg,
            Z: Kg,
            "%": t_,
          },
          x = {
            a: function (t, n, e) {
              var r = d.exec(n.slice(e));
              return r ? ((t.w = p[r[0].toLowerCase()]), e + r[0].length) : -1;
            },
            A: function (t, n, e) {
              var r = l.exec(n.slice(e));
              return r ? ((t.w = h[r[0].toLowerCase()]), e + r[0].length) : -1;
            },
            b: function (t, n, e) {
              var r = g.exec(n.slice(e));
              return r ? ((t.m = _[r[0].toLowerCase()]), e + r[0].length) : -1;
            },
            B: function (t, n, e) {
              var r = v.exec(n.slice(e));
              return r ? ((t.m = y[r[0].toLowerCase()]), e + r[0].length) : -1;
            },
            c: function (t, e, r) {
              return N(t, n, e, r);
            },
            d: sg,
            e: sg,
            f: yg,
            H: hg,
            I: hg,
            j: lg,
            L: vg,
            m: fg,
            M: dg,
            p: function (t, n, e) {
              var r = f.exec(n.slice(e));
              return r ? ((t.p = s[r[0].toLowerCase()]), e + r[0].length) : -1;
            },
            q: cg,
            Q: _g,
            s: bg,
            S: pg,
            u: ng,
            U: eg,
            V: rg,
            w: tg,
            W: ig,
            x: function (t, n, r) {
              return N(t, e, n, r);
            },
            X: function (t, n, e) {
              return N(t, r, n, e);
            },
            y: ug,
            Y: og,
            Z: ag,
            "%": gg,
          };
        function w(t, n) {
          return function (e) {
            var r,
              i,
              o,
              u = [],
              a = -1,
              c = 0,
              f = t.length;
            for (e instanceof Date || (e = new Date(+e)); ++a < f; )
              37 === t.charCodeAt(a) &&
                (u.push(t.slice(c, a)),
                null != (i = Xy[(r = t.charAt(++a))])
                  ? (r = t.charAt(++a))
                  : (i = "e" === r ? " " : "0"),
                (o = n[r]) && (r = o(e, i)),
                u.push(r),
                (c = a + 1));
            return u.push(t.slice(c, a)), u.join("");
          };
        }
        function M(t, n) {
          return function (e) {
            var r,
              i,
              o = By(1900, void 0, 1);
            if (N(o, t, (e += ""), 0) != e.length) return null;
            if ("Q" in o) return new Date(o.Q);
            if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
            if (
              (n && !("Z" in o) && (o.Z = 0),
              "p" in o && (o.H = (o.H % 12) + 12 * o.p),
              void 0 === o.m && (o.m = "q" in o ? o.q : 0),
              "V" in o)
            ) {
              if (o.V < 1 || o.V > 53) return null;
              "w" in o || (o.w = 1),
                "Z" in o
                  ? ((i = (r = Oy(By(o.y, 0, 1))).getUTCDay()),
                    (r = i > 4 || 0 === i ? _y.ceil(r) : _y(r)),
                    (r = zy.offset(r, 7 * (o.V - 1))),
                    (o.y = r.getUTCFullYear()),
                    (o.m = r.getUTCMonth()),
                    (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                  : ((i = (r = Uy(By(o.y, 0, 1))).getDay()),
                    (r = i > 4 || 0 === i ? Iv.ceil(r) : Iv(r)),
                    (r = ey.offset(r, 7 * (o.V - 1))),
                    (o.y = r.getFullYear()),
                    (o.m = r.getMonth()),
                    (o.d = r.getDate() + ((o.w + 6) % 7)));
            } else
              ("W" in o || "U" in o) &&
                ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0),
                (i =
                  "Z" in o
                    ? Oy(By(o.y, 0, 1)).getUTCDay()
                    : Uy(By(o.y, 0, 1)).getDay()),
                (o.m = 0),
                (o.d =
                  "W" in o
                    ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                    : o.w + 7 * o.U - ((i + 6) % 7)));
            return "Z" in o
              ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), Oy(o))
              : Uy(o);
          };
        }
        function N(t, n, e, r) {
          for (var i, o, u = 0, a = n.length, c = e.length; u < a; ) {
            if (r >= c) return -1;
            if (37 === (i = n.charCodeAt(u++))) {
              if (
                ((i = n.charAt(u++)),
                !(o = x[i in Xy ? n.charAt(u++) : i]) || (r = o(t, e, r)) < 0)
              )
                return -1;
            } else if (i != e.charCodeAt(r++)) return -1;
          }
          return r;
        }
        return (
          (b.x = w(e, b)),
          (b.X = w(r, b)),
          (b.c = w(n, b)),
          (m.x = w(e, m)),
          (m.X = w(r, m)),
          (m.c = w(n, m)),
          {
            format: function (t) {
              var n = w((t += ""), b);
              return (
                (n.toString = function () {
                  return t;
                }),
                n
              );
            },
            parse: function (t) {
              var n = M((t += ""), !1);
              return (
                (n.toString = function () {
                  return t;
                }),
                n
              );
            },
            utcFormat: function (t) {
              var n = w((t += ""), m);
              return (
                (n.toString = function () {
                  return t;
                }),
                n
              );
            },
            utcParse: function (t) {
              var n = M((t += ""), !0);
              return (
                (n.toString = function () {
                  return t;
                }),
                n
              );
            },
          }
        );
      }
      var Yy,
        Iy,
        jy,
        Hy,
        Vy,
        Xy = { "-": "", _: " ", 0: "0" },
        Gy = /^\s*\d+/,
        $y = /^%/,
        Wy = /[\\^$*+?|[\]().{}]/g;
      function Zy(t, n, e) {
        var r = t < 0 ? "-" : "",
          i = (r ? -t : t) + "",
          o = i.length;
        return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
      }
      function Qy(t) {
        return t.replace(Wy, "\\$&");
      }
      function Jy(t) {
        return new RegExp("^(?:" + t.map(Qy).join("|") + ")", "i");
      }
      function Ky(t) {
        for (var n = {}, e = -1, r = t.length; ++e < r; )
          n[t[e].toLowerCase()] = e;
        return n;
      }
      function tg(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 1));
        return r ? ((t.w = +r[0]), e + r[0].length) : -1;
      }
      function ng(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 1));
        return r ? ((t.u = +r[0]), e + r[0].length) : -1;
      }
      function eg(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 2));
        return r ? ((t.U = +r[0]), e + r[0].length) : -1;
      }
      function rg(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 2));
        return r ? ((t.V = +r[0]), e + r[0].length) : -1;
      }
      function ig(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 2));
        return r ? ((t.W = +r[0]), e + r[0].length) : -1;
      }
      function og(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 4));
        return r ? ((t.y = +r[0]), e + r[0].length) : -1;
      }
      function ug(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 2));
        return r
          ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
          : -1;
      }
      function ag(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
        return r
          ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length)
          : -1;
      }
      function cg(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 1));
        return r ? ((t.q = 3 * r[0] - 3), e + r[0].length) : -1;
      }
      function fg(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 2));
        return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
      }
      function sg(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 2));
        return r ? ((t.d = +r[0]), e + r[0].length) : -1;
      }
      function lg(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 3));
        return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
      }
      function hg(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 2));
        return r ? ((t.H = +r[0]), e + r[0].length) : -1;
      }
      function dg(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 2));
        return r ? ((t.M = +r[0]), e + r[0].length) : -1;
      }
      function pg(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 2));
        return r ? ((t.S = +r[0]), e + r[0].length) : -1;
      }
      function vg(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 3));
        return r ? ((t.L = +r[0]), e + r[0].length) : -1;
      }
      function yg(t, n, e) {
        var r = Gy.exec(n.slice(e, e + 6));
        return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
      }
      function gg(t, n, e) {
        var r = $y.exec(n.slice(e, e + 1));
        return r ? e + r[0].length : -1;
      }
      function _g(t, n, e) {
        var r = Gy.exec(n.slice(e));
        return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
      }
      function bg(t, n, e) {
        var r = Gy.exec(n.slice(e));
        return r ? ((t.s = +r[0]), e + r[0].length) : -1;
      }
      function mg(t, n) {
        return Zy(t.getDate(), n, 2);
      }
      function xg(t, n) {
        return Zy(t.getHours(), n, 2);
      }
      function wg(t, n) {
        return Zy(t.getHours() % 12 || 12, n, 2);
      }
      function Mg(t, n) {
        return Zy(1 + ey.count(qv(t), t), n, 3);
      }
      function Ng(t, n) {
        return Zy(t.getMilliseconds(), n, 3);
      }
      function Ag(t, n) {
        return Ng(t, n) + "000";
      }
      function Eg(t, n) {
        return Zy(t.getMonth() + 1, n, 2);
      }
      function Tg(t, n) {
        return Zy(t.getMinutes(), n, 2);
      }
      function Sg(t, n) {
        return Zy(t.getSeconds(), n, 2);
      }
      function kg(t) {
        var n = t.getDay();
        return 0 === n ? 7 : n;
      }
      function Cg(t, n) {
        return Zy(Yv.count(qv(t) - 1, t), n, 2);
      }
      function Pg(t, n) {
        var e = t.getDay();
        return (
          (t = e >= 4 || 0 === e ? Vv(t) : Vv.ceil(t)),
          Zy(Vv.count(qv(t), t) + (4 === qv(t).getDay()), n, 2)
        );
      }
      function zg(t) {
        return t.getDay();
      }
      function Lg(t, n) {
        return Zy(Iv.count(qv(t) - 1, t), n, 2);
      }
      function Rg(t, n) {
        return Zy(t.getFullYear() % 100, n, 2);
      }
      function qg(t, n) {
        return Zy(t.getFullYear() % 1e4, n, 4);
      }
      function Dg(t) {
        var n = t.getTimezoneOffset();
        return (
          (n > 0 ? "-" : ((n *= -1), "+")) +
          Zy((n / 60) | 0, "0", 2) +
          Zy(n % 60, "0", 2)
        );
      }
      function Ug(t, n) {
        return Zy(t.getUTCDate(), n, 2);
      }
      function Og(t, n) {
        return Zy(t.getUTCHours(), n, 2);
      }
      function Bg(t, n) {
        return Zy(t.getUTCHours() % 12 || 12, n, 2);
      }
      function Fg(t, n) {
        return Zy(1 + zy.count(qy(t), t), n, 3);
      }
      function Yg(t, n) {
        return Zy(t.getUTCMilliseconds(), n, 3);
      }
      function Ig(t, n) {
        return Yg(t, n) + "000";
      }
      function jg(t, n) {
        return Zy(t.getUTCMonth() + 1, n, 2);
      }
      function Hg(t, n) {
        return Zy(t.getUTCMinutes(), n, 2);
      }
      function Vg(t, n) {
        return Zy(t.getUTCSeconds(), n, 2);
      }
      function Xg(t) {
        var n = t.getUTCDay();
        return 0 === n ? 7 : n;
      }
      function Gg(t, n) {
        return Zy(gy.count(qy(t) - 1, t), n, 2);
      }
      function $g(t, n) {
        var e = t.getUTCDay();
        return (
          (t = e >= 4 || 0 === e ? xy(t) : xy.ceil(t)),
          Zy(xy.count(qy(t), t) + (4 === qy(t).getUTCDay()), n, 2)
        );
      }
      function Wg(t) {
        return t.getUTCDay();
      }
      function Zg(t, n) {
        return Zy(_y.count(qy(t) - 1, t), n, 2);
      }
      function Qg(t, n) {
        return Zy(t.getUTCFullYear() % 100, n, 2);
      }
      function Jg(t, n) {
        return Zy(t.getUTCFullYear() % 1e4, n, 4);
      }
      function Kg() {
        return "+0000";
      }
      function t_() {
        return "%";
      }
      function n_(t) {
        return +t;
      }
      function e_(t) {
        return Math.floor(+t / 1e3);
      }
      function r_(t) {
        return (
          (Yy = Fy(t)),
          (Iy = Yy.format),
          (jy = Yy.parse),
          (Hy = Yy.utcFormat),
          (Vy = Yy.utcParse),
          Yy
        );
      }
      r_({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        shortMonths: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      });
      function i_(t) {
        return new Date(t);
      }
      function o_(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function u_(t, n, e, r, i, u, a, c, f) {
        var s = iv(Qp, Qp),
          l = s.invert,
          h = s.domain,
          d = f(".%L"),
          p = f(":%S"),
          v = f("%I:%M"),
          y = f("%I %p"),
          g = f("%a %d"),
          _ = f("%b %d"),
          b = f("%B"),
          m = f("%Y"),
          x = [
            [a, 1, 1e3],
            [a, 5, 5e3],
            [a, 15, 15e3],
            [a, 30, 3e4],
            [u, 1, 6e4],
            [u, 5, 3e5],
            [u, 15, 9e5],
            [u, 30, 18e5],
            [i, 1, 36e5],
            [i, 3, 108e5],
            [i, 6, 216e5],
            [i, 12, 432e5],
            [r, 1, 864e5],
            [r, 2, 1728e5],
            [e, 1, 6048e5],
            [n, 1, 2592e6],
            [n, 3, 7776e6],
            [t, 1, 31536e6],
          ];
        function w(o) {
          return (a(o) < o
            ? d
            : u(o) < o
            ? p
            : i(o) < o
            ? v
            : r(o) < o
            ? y
            : n(o) < o
            ? e(o) < o
              ? g
              : _
            : t(o) < o
            ? b
            : m)(o);
        }
        function M(n, e, r, i) {
          if ((null == n && (n = 10), "number" == typeof n)) {
            var u = Math.abs(r - e) / n,
              a = o(function (t) {
                return t[2];
              }).right(x, u);
            a === x.length
              ? ((i = k(e / 31536e6, r / 31536e6, n)), (n = t))
              : a
              ? ((i = (a = x[u / x[a - 1][2] < x[a][2] / u ? a - 1 : a])[1]),
                (n = a[0]))
              : ((i = Math.max(k(e, r, n), 1)), (n = c));
          }
          return null == i ? n : n.every(i);
        }
        return (
          (s.invert = function (t) {
            return new Date(l(t));
          }),
          (s.domain = function (t) {
            return arguments.length ? h(Ip.call(t, o_)) : h().map(i_);
          }),
          (s.ticks = function (t, n) {
            var e,
              r = h(),
              i = r[0],
              o = r[r.length - 1],
              u = o < i;
            return (
              u && ((e = i), (i = o), (o = e)),
              (e = (e = M(t, i, o, n)) ? e.range(i, o + 1) : []),
              u ? e.reverse() : e
            );
          }),
          (s.tickFormat = function (t, n) {
            return null == n ? w : f(n);
          }),
          (s.nice = function (t, n) {
            var e = h();
            return (t = M(t, e[0], e[e.length - 1], n)) ? h(fv(e, t)) : s;
          }),
          (s.copy = function () {
            return ev(s, u_(t, n, e, r, i, u, a, c, f));
          }),
          s
        );
      }
      var a_ = function () {
          return Bp.apply(
            u_(qv, Ov, Yv, ey, oy, cy, ly, py, Iy).domain([
              new Date(2e3, 0, 1),
              new Date(2e3, 0, 2),
            ]),
            arguments
          );
        },
        c_ = Lv(
          function (t) {
            t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
          },
          function (t, n) {
            t.setUTCMonth(t.getUTCMonth() + n);
          },
          function (t, n) {
            return (
              n.getUTCMonth() -
              t.getUTCMonth() +
              12 * (n.getUTCFullYear() - t.getUTCFullYear())
            );
          },
          function (t) {
            return t.getUTCMonth();
          }
        ),
        f_ = c_,
        s_ = c_.range,
        l_ = Lv(
          function (t) {
            t.setUTCMinutes(0, 0, 0);
          },
          function (t, n) {
            t.setTime(+t + 36e5 * n);
          },
          function (t, n) {
            return (n - t) / 36e5;
          },
          function (t) {
            return t.getUTCHours();
          }
        ),
        h_ = l_,
        d_ = l_.range,
        p_ = Lv(
          function (t) {
            t.setUTCSeconds(0, 0);
          },
          function (t, n) {
            t.setTime(+t + 6e4 * n);
          },
          function (t, n) {
            return (n - t) / 6e4;
          },
          function (t) {
            return t.getUTCMinutes();
          }
        ),
        v_ = p_,
        y_ = p_.range,
        g_ = function () {
          return Bp.apply(
            u_(qy, f_, gy, zy, h_, v_, ly, py, Hy).domain([
              Date.UTC(2e3, 0, 1),
              Date.UTC(2e3, 0, 2),
            ]),
            arguments
          );
        };
      function __() {
        var t,
          n,
          e,
          r,
          i,
          o = 0,
          u = 1,
          a = Qp,
          c = !1;
        function f(n) {
          return isNaN((n = +n))
            ? i
            : a(
                0 === e
                  ? 0.5
                  : ((n = (r(n) - t) * e), c ? Math.max(0, Math.min(1, n)) : n)
              );
        }
        return (
          (f.domain = function (i) {
            return arguments.length
              ? ((t = r((o = +i[0]))),
                (n = r((u = +i[1]))),
                (e = t === n ? 0 : 1 / (n - t)),
                f)
              : [o, u];
          }),
          (f.clamp = function (t) {
            return arguments.length ? ((c = !!t), f) : c;
          }),
          (f.interpolator = function (t) {
            return arguments.length ? ((a = t), f) : a;
          }),
          (f.unknown = function (t) {
            return arguments.length ? ((i = t), f) : i;
          }),
          function (i) {
            return (
              (r = i),
              (t = i(o)),
              (n = i(u)),
              (e = t === n ? 0 : 1 / (n - t)),
              f
            );
          }
        );
      }
      function b_(t, n) {
        return n
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function m_() {
        var t = uv(__()(Qp));
        return (
          (t.copy = function () {
            return b_(t, m_());
          }),
          Fp.apply(t, arguments)
        );
      }
      function x_() {
        var t = yv(__()).domain([1, 10]);
        return (
          (t.copy = function () {
            return b_(t, x_()).base(t.base());
          }),
          Fp.apply(t, arguments)
        );
      }
      function w_() {
        var t = mv(__());
        return (
          (t.copy = function () {
            return b_(t, w_()).constant(t.constant());
          }),
          Fp.apply(t, arguments)
        );
      }
      function M_() {
        var t = Av(__());
        return (
          (t.copy = function () {
            return b_(t, M_()).exponent(t.exponent());
          }),
          Fp.apply(t, arguments)
        );
      }
      function N_() {
        return M_.apply(null, arguments).exponent(0.5);
      }
      function A_() {
        var t = [],
          n = Qp;
        function e(e) {
          if (!isNaN((e = +e))) return n((f(t, e) - 1) / (t.length - 1));
        }
        return (
          (e.domain = function (n) {
            if (!arguments.length) return t.slice();
            t = [];
            for (var r, o = 0, u = n.length; o < u; ++o)
              null == (r = n[o]) || isNaN((r = +r)) || t.push(r);
            return t.sort(i), e;
          }),
          (e.interpolator = function (t) {
            return arguments.length ? ((n = t), e) : n;
          }),
          (e.copy = function () {
            return A_(n).domain(t);
          }),
          Fp.apply(e, arguments)
        );
      }
      function E_() {
        var t,
          n,
          e,
          r,
          i,
          o,
          u,
          a = 0,
          c = 0.5,
          f = 1,
          s = Qp,
          l = !1;
        function h(t) {
          return isNaN((t = +t))
            ? u
            : ((t = 0.5 + ((t = +o(t)) - n) * (t < n ? r : i)),
              s(l ? Math.max(0, Math.min(1, t)) : t));
        }
        return (
          (h.domain = function (u) {
            return arguments.length
              ? ((t = o((a = +u[0]))),
                (n = o((c = +u[1]))),
                (e = o((f = +u[2]))),
                (r = t === n ? 0 : 0.5 / (n - t)),
                (i = n === e ? 0 : 0.5 / (e - n)),
                h)
              : [a, c, f];
          }),
          (h.clamp = function (t) {
            return arguments.length ? ((l = !!t), h) : l;
          }),
          (h.interpolator = function (t) {
            return arguments.length ? ((s = t), h) : s;
          }),
          (h.unknown = function (t) {
            return arguments.length ? ((u = t), h) : u;
          }),
          function (u) {
            return (
              (o = u),
              (t = u(a)),
              (n = u(c)),
              (e = u(f)),
              (r = t === n ? 0 : 0.5 / (n - t)),
              (i = n === e ? 0 : 0.5 / (e - n)),
              h
            );
          }
        );
      }
      function T_() {
        var t = uv(E_()(Qp));
        return (
          (t.copy = function () {
            return b_(t, T_());
          }),
          Fp.apply(t, arguments)
        );
      }
      function S_() {
        var t = yv(E_()).domain([0.1, 1, 10]);
        return (
          (t.copy = function () {
            return b_(t, S_()).base(t.base());
          }),
          Fp.apply(t, arguments)
        );
      }
      function k_() {
        var t = mv(E_());
        return (
          (t.copy = function () {
            return b_(t, k_()).constant(t.constant());
          }),
          Fp.apply(t, arguments)
        );
      }
      function C_() {
        var t = Av(E_());
        return (
          (t.copy = function () {
            return b_(t, C_()).exponent(t.exponent());
          }),
          Fp.apply(t, arguments)
        );
      }
      function P_() {
        return C_.apply(null, arguments).exponent(0.5);
      }
      var z_ = function (t) {
          for (var n = (t.length / 6) | 0, e = new Array(n), r = 0; r < n; )
            e[r] = "#" + t.slice(6 * r, 6 * ++r);
          return e;
        },
        L_ = z_("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
        R_ = z_("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
        q_ = z_("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
        D_ = z_(
          "a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"
        ),
        U_ = z_("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
        O_ = z_("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
        B_ = z_("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
        F_ = z_("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
        Y_ = z_(
          "8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"
        ),
        I_ = z_("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"),
        j_ = function (t) {
          return ve(t[t.length - 1]);
        },
        H_ = new Array(3)
          .concat(
            "d8b365f5f5f55ab4ac",
            "a6611adfc27d80cdc1018571",
            "a6611adfc27df5f5f580cdc1018571",
            "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
            "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
            "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
            "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
            "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
            "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
          )
          .map(z_),
        V_ = j_(H_),
        X_ = new Array(3)
          .concat(
            "af8dc3f7f7f77fbf7b",
            "7b3294c2a5cfa6dba0008837",
            "7b3294c2a5cff7f7f7a6dba0008837",
            "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
            "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
            "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
            "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
            "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
            "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
          )
          .map(z_),
        G_ = j_(X_),
        $_ = new Array(3)
          .concat(
            "e9a3c9f7f7f7a1d76a",
            "d01c8bf1b6dab8e1864dac26",
            "d01c8bf1b6daf7f7f7b8e1864dac26",
            "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
            "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
            "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
            "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
            "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
            "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
          )
          .map(z_),
        W_ = j_($_),
        Z_ = new Array(3)
          .concat(
            "998ec3f7f7f7f1a340",
            "5e3c99b2abd2fdb863e66101",
            "5e3c99b2abd2f7f7f7fdb863e66101",
            "542788998ec3d8daebfee0b6f1a340b35806",
            "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
            "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
            "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
            "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
            "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
          )
          .map(z_),
        Q_ = j_(Z_),
        J_ = new Array(3)
          .concat(
            "ef8a62f7f7f767a9cf",
            "ca0020f4a58292c5de0571b0",
            "ca0020f4a582f7f7f792c5de0571b0",
            "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
            "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
            "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
            "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
            "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
            "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
          )
          .map(z_),
        K_ = j_(J_),
        tb = new Array(3)
          .concat(
            "ef8a62ffffff999999",
            "ca0020f4a582bababa404040",
            "ca0020f4a582ffffffbababa404040",
            "b2182bef8a62fddbc7e0e0e09999994d4d4d",
            "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
            "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
            "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
            "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
            "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
          )
          .map(z_),
        nb = j_(tb),
        eb = new Array(3)
          .concat(
            "fc8d59ffffbf91bfdb",
            "d7191cfdae61abd9e92c7bb6",
            "d7191cfdae61ffffbfabd9e92c7bb6",
            "d73027fc8d59fee090e0f3f891bfdb4575b4",
            "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
            "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
            "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
            "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
            "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
          )
          .map(z_),
        rb = j_(eb),
        ib = new Array(3)
          .concat(
            "fc8d59ffffbf91cf60",
            "d7191cfdae61a6d96a1a9641",
            "d7191cfdae61ffffbfa6d96a1a9641",
            "d73027fc8d59fee08bd9ef8b91cf601a9850",
            "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
            "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
            "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
            "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
            "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
          )
          .map(z_),
        ob = j_(ib),
        ub = new Array(3)
          .concat(
            "fc8d59ffffbf99d594",
            "d7191cfdae61abdda42b83ba",
            "d7191cfdae61ffffbfabdda42b83ba",
            "d53e4ffc8d59fee08be6f59899d5943288bd",
            "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
            "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
            "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
            "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
            "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
          )
          .map(z_),
        ab = j_(ub),
        cb = new Array(3)
          .concat(
            "e5f5f999d8c92ca25f",
            "edf8fbb2e2e266c2a4238b45",
            "edf8fbb2e2e266c2a42ca25f006d2c",
            "edf8fbccece699d8c966c2a42ca25f006d2c",
            "edf8fbccece699d8c966c2a441ae76238b45005824",
            "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
            "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
          )
          .map(z_),
        fb = j_(cb),
        sb = new Array(3)
          .concat(
            "e0ecf49ebcda8856a7",
            "edf8fbb3cde38c96c688419d",
            "edf8fbb3cde38c96c68856a7810f7c",
            "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
            "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
            "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
            "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
          )
          .map(z_),
        lb = j_(sb),
        hb = new Array(3)
          .concat(
            "e0f3dba8ddb543a2ca",
            "f0f9e8bae4bc7bccc42b8cbe",
            "f0f9e8bae4bc7bccc443a2ca0868ac",
            "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
            "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
            "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
            "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
          )
          .map(z_),
        db = j_(hb),
        pb = new Array(3)
          .concat(
            "fee8c8fdbb84e34a33",
            "fef0d9fdcc8afc8d59d7301f",
            "fef0d9fdcc8afc8d59e34a33b30000",
            "fef0d9fdd49efdbb84fc8d59e34a33b30000",
            "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
            "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
            "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
          )
          .map(z_),
        vb = j_(pb),
        yb = new Array(3)
          .concat(
            "ece2f0a6bddb1c9099",
            "f6eff7bdc9e167a9cf02818a",
            "f6eff7bdc9e167a9cf1c9099016c59",
            "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
            "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
            "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
            "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
          )
          .map(z_),
        gb = j_(yb),
        _b = new Array(3)
          .concat(
            "ece7f2a6bddb2b8cbe",
            "f1eef6bdc9e174a9cf0570b0",
            "f1eef6bdc9e174a9cf2b8cbe045a8d",
            "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
            "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
            "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
            "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
          )
          .map(z_),
        bb = j_(_b),
        mb = new Array(3)
          .concat(
            "e7e1efc994c7dd1c77",
            "f1eef6d7b5d8df65b0ce1256",
            "f1eef6d7b5d8df65b0dd1c77980043",
            "f1eef6d4b9dac994c7df65b0dd1c77980043",
            "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
            "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
            "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
          )
          .map(z_),
        xb = j_(mb),
        wb = new Array(3)
          .concat(
            "fde0ddfa9fb5c51b8a",
            "feebe2fbb4b9f768a1ae017e",
            "feebe2fbb4b9f768a1c51b8a7a0177",
            "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
            "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
            "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
            "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
          )
          .map(z_),
        Mb = j_(wb),
        Nb = new Array(3)
          .concat(
            "edf8b17fcdbb2c7fb8",
            "ffffcca1dab441b6c4225ea8",
            "ffffcca1dab441b6c42c7fb8253494",
            "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
            "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
            "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
            "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
          )
          .map(z_),
        Ab = j_(Nb),
        Eb = new Array(3)
          .concat(
            "f7fcb9addd8e31a354",
            "ffffccc2e69978c679238443",
            "ffffccc2e69978c67931a354006837",
            "ffffccd9f0a3addd8e78c67931a354006837",
            "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
            "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
            "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
          )
          .map(z_),
        Tb = j_(Eb),
        Sb = new Array(3)
          .concat(
            "fff7bcfec44fd95f0e",
            "ffffd4fed98efe9929cc4c02",
            "ffffd4fed98efe9929d95f0e993404",
            "ffffd4fee391fec44ffe9929d95f0e993404",
            "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
            "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
            "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
          )
          .map(z_),
        kb = j_(Sb),
        Cb = new Array(3)
          .concat(
            "ffeda0feb24cf03b20",
            "ffffb2fecc5cfd8d3ce31a1c",
            "ffffb2fecc5cfd8d3cf03b20bd0026",
            "ffffb2fed976feb24cfd8d3cf03b20bd0026",
            "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
            "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
            "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
          )
          .map(z_),
        Pb = j_(Cb),
        zb = new Array(3)
          .concat(
            "deebf79ecae13182bd",
            "eff3ffbdd7e76baed62171b5",
            "eff3ffbdd7e76baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
          )
          .map(z_),
        Lb = j_(zb),
        Rb = new Array(3)
          .concat(
            "e5f5e0a1d99b31a354",
            "edf8e9bae4b374c476238b45",
            "edf8e9bae4b374c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
          )
          .map(z_),
        qb = j_(Rb),
        Db = new Array(3)
          .concat(
            "f0f0f0bdbdbd636363",
            "f7f7f7cccccc969696525252",
            "f7f7f7cccccc969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
          )
          .map(z_),
        Ub = j_(Db),
        Ob = new Array(3)
          .concat(
            "efedf5bcbddc756bb1",
            "f2f0f7cbc9e29e9ac86a51a3",
            "f2f0f7cbc9e29e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
          )
          .map(z_),
        Bb = j_(Ob),
        Fb = new Array(3)
          .concat(
            "fee0d2fc9272de2d26",
            "fee5d9fcae91fb6a4acb181d",
            "fee5d9fcae91fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
          )
          .map(z_),
        Yb = j_(Fb),
        Ib = new Array(3)
          .concat(
            "fee6cefdae6be6550d",
            "feeddefdbe85fd8d3cd94701",
            "feeddefdbe85fd8d3ce6550da63603",
            "feeddefdd0a2fdae6bfd8d3ce6550da63603",
            "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
            "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
            "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
          )
          .map(z_),
        jb = j_(Ib),
        Hb = function (t) {
          return (
            (t = Math.max(0, Math.min(1, t))),
            "rgb(" +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    -4.54 -
                      t *
                        (35.34 -
                          t *
                            (2381.73 -
                              t * (6402.7 - t * (7024.72 - 2710.57 * t))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    32.49 +
                      t *
                        (170.73 +
                          t * (52.82 - t * (131.46 - t * (176.58 - 67.37 * t))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    81.24 +
                      t *
                        (442.36 -
                          t *
                            (2482.43 -
                              t * (6167.24 - t * (6614.94 - 2475.67 * t))))
                  )
                )
              ) +
              ")"
          );
        },
        Vb = wp(zo(300, 0.5, 0), zo(-240, 0.5, 1)),
        Xb = wp(zo(-100, 0.75, 0.35), zo(80, 1.5, 0.8)),
        Gb = wp(zo(260, 0.75, 0.35), zo(80, 1.5, 0.8)),
        $b = zo(),
        Wb = function (t) {
          (t < 0 || t > 1) && (t -= Math.floor(t));
          var n = Math.abs(t - 0.5);
          return (
            ($b.h = 360 * t - 100),
            ($b.s = 1.5 - 1.5 * n),
            ($b.l = 0.8 - 0.9 * n),
            $b + ""
          );
        },
        Zb = Wn(),
        Qb = Math.PI / 3,
        Jb = (2 * Math.PI) / 3,
        Kb = function (t) {
          var n;
          return (
            (t = (0.5 - t) * Math.PI),
            (Zb.r = 255 * (n = Math.sin(t)) * n),
            (Zb.g = 255 * (n = Math.sin(t + Qb)) * n),
            (Zb.b = 255 * (n = Math.sin(t + Jb)) * n),
            Zb + ""
          );
        },
        tm = function (t) {
          return (
            (t = Math.max(0, Math.min(1, t))),
            "rgb(" +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    34.61 +
                      t *
                        (1172.33 -
                          t *
                            (10793.56 -
                              t * (33300.12 - t * (38394.49 - 14825.05 * t))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    23.31 +
                      t *
                        (557.33 +
                          t *
                            (1225.33 -
                              t * (3574.96 - t * (1073.77 + 707.56 * t))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    27.2 +
                      t *
                        (3211.1 -
                          t *
                            (15327.97 -
                              t * (27814 - t * (22569.18 - 6838.66 * t))))
                  )
                )
              ) +
              ")"
          );
        };
      function nm(t) {
        var n = t.length;
        return function (e) {
          return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
        };
      }
      var em = nm(
          z_(
            "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
          )
        ),
        rm = nm(
          z_(
            "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
          )
        ),
        im = nm(
          z_(
            "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
          )
        ),
        om = nm(
          z_(
            "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
          )
        ),
        um = function (t) {
          return Nn(rn(t).call(document.documentElement));
        },
        am = 0;
      function cm() {
        return new fm();
      }
      function fm() {
        this._ = "@" + (++am).toString(36);
      }
      fm.prototype = cm.prototype = {
        constructor: fm,
        get: function (t) {
          for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
          return t[n];
        },
        set: function (t, n) {
          return (t[this._] = n);
        },
        remove: function (t) {
          return this._ in t && delete t[this._];
        },
        toString: function () {
          return this._;
        },
      };
      var sm = function (t) {
          return "string" == typeof t
            ? new xn([document.querySelectorAll(t)], [document.documentElement])
            : new xn([null == t ? [] : t], mn);
        },
        lm = function (t, n) {
          null == n && (n = Ce().touches);
          for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e)
            i[e] = Pe(t, n[e]);
          return i;
        },
        hm = function (t) {
          return function () {
            return t;
          };
        },
        dm = Math.abs,
        pm = Math.atan2,
        vm = Math.cos,
        ym = Math.max,
        gm = Math.min,
        _m = Math.sin,
        bm = Math.sqrt,
        mm = Math.PI,
        xm = mm / 2,
        wm = 2 * mm;
      function Mm(t) {
        return t > 1 ? 0 : t < -1 ? mm : Math.acos(t);
      }
      function Nm(t) {
        return t >= 1 ? xm : t <= -1 ? -xm : Math.asin(t);
      }
      function Am(t) {
        return t.innerRadius;
      }
      function Em(t) {
        return t.outerRadius;
      }
      function Tm(t) {
        return t.startAngle;
      }
      function Sm(t) {
        return t.endAngle;
      }
      function km(t) {
        return t && t.padAngle;
      }
      function Cm(t, n, e, r, i, o, u, a) {
        var c = e - t,
          f = r - n,
          s = u - i,
          l = a - o,
          h = l * c - s * f;
        if (!(h * h < 1e-12))
          return [t + (h = (s * (n - o) - l * (t - i)) / h) * c, n + h * f];
      }
      function Pm(t, n, e, r, i, o, u) {
        var a = t - e,
          c = n - r,
          f = (u ? o : -o) / bm(a * a + c * c),
          s = f * c,
          l = -f * a,
          h = t + s,
          d = n + l,
          p = e + s,
          v = r + l,
          y = (h + p) / 2,
          g = (d + v) / 2,
          _ = p - h,
          b = v - d,
          m = _ * _ + b * b,
          x = i - o,
          w = h * v - p * d,
          M = (b < 0 ? -1 : 1) * bm(ym(0, x * x * m - w * w)),
          N = (w * b - _ * M) / m,
          A = (-w * _ - b * M) / m,
          E = (w * b + _ * M) / m,
          T = (-w * _ + b * M) / m,
          S = N - y,
          k = A - g,
          C = E - y,
          P = T - g;
        return (
          S * S + k * k > C * C + P * P && ((N = E), (A = T)),
          {
            cx: N,
            cy: A,
            x01: -s,
            y01: -l,
            x11: N * (i / x - 1),
            y11: A * (i / x - 1),
          }
        );
      }
      var zm = function () {
        var t = Am,
          n = Em,
          e = hm(0),
          r = null,
          i = Tm,
          o = Sm,
          u = km,
          a = null;
        function c() {
          var c,
            f,
            s = +t.apply(this, arguments),
            l = +n.apply(this, arguments),
            h = i.apply(this, arguments) - xm,
            d = o.apply(this, arguments) - xm,
            p = dm(d - h),
            v = d > h;
          if (
            (a || (a = c = ji()),
            l < s && ((f = l), (l = s), (s = f)),
            l > 1e-12)
          )
            if (p > wm - 1e-12)
              a.moveTo(l * vm(h), l * _m(h)),
                a.arc(0, 0, l, h, d, !v),
                s > 1e-12 &&
                  (a.moveTo(s * vm(d), s * _m(d)), a.arc(0, 0, s, d, h, v));
            else {
              var y,
                g,
                _ = h,
                b = d,
                m = h,
                x = d,
                w = p,
                M = p,
                N = u.apply(this, arguments) / 2,
                A =
                  N > 1e-12 &&
                  (r ? +r.apply(this, arguments) : bm(s * s + l * l)),
                E = gm(dm(l - s) / 2, +e.apply(this, arguments)),
                T = E,
                S = E;
              if (A > 1e-12) {
                var k = Nm((A / s) * _m(N)),
                  C = Nm((A / l) * _m(N));
                (w -= 2 * k) > 1e-12
                  ? ((m += k *= v ? 1 : -1), (x -= k))
                  : ((w = 0), (m = x = (h + d) / 2)),
                  (M -= 2 * C) > 1e-12
                    ? ((_ += C *= v ? 1 : -1), (b -= C))
                    : ((M = 0), (_ = b = (h + d) / 2));
              }
              var P = l * vm(_),
                z = l * _m(_),
                L = s * vm(x),
                R = s * _m(x);
              if (E > 1e-12) {
                var q,
                  D = l * vm(b),
                  U = l * _m(b),
                  O = s * vm(m),
                  B = s * _m(m);
                if (p < mm && (q = Cm(P, z, O, B, D, U, L, R))) {
                  var F = P - q[0],
                    Y = z - q[1],
                    I = D - q[0],
                    j = U - q[1],
                    H =
                      1 /
                      _m(
                        Mm(
                          (F * I + Y * j) /
                            (bm(F * F + Y * Y) * bm(I * I + j * j))
                        ) / 2
                      ),
                    V = bm(q[0] * q[0] + q[1] * q[1]);
                  (T = gm(E, (s - V) / (H - 1))),
                    (S = gm(E, (l - V) / (H + 1)));
                }
              }
              M > 1e-12
                ? S > 1e-12
                  ? ((y = Pm(O, B, P, z, l, S, v)),
                    (g = Pm(D, U, L, R, l, S, v)),
                    a.moveTo(y.cx + y.x01, y.cy + y.y01),
                    S < E
                      ? a.arc(
                          y.cx,
                          y.cy,
                          S,
                          pm(y.y01, y.x01),
                          pm(g.y01, g.x01),
                          !v
                        )
                      : (a.arc(
                          y.cx,
                          y.cy,
                          S,
                          pm(y.y01, y.x01),
                          pm(y.y11, y.x11),
                          !v
                        ),
                        a.arc(
                          0,
                          0,
                          l,
                          pm(y.cy + y.y11, y.cx + y.x11),
                          pm(g.cy + g.y11, g.cx + g.x11),
                          !v
                        ),
                        a.arc(
                          g.cx,
                          g.cy,
                          S,
                          pm(g.y11, g.x11),
                          pm(g.y01, g.x01),
                          !v
                        )))
                  : (a.moveTo(P, z), a.arc(0, 0, l, _, b, !v))
                : a.moveTo(P, z),
                s > 1e-12 && w > 1e-12
                  ? T > 1e-12
                    ? ((y = Pm(L, R, D, U, s, -T, v)),
                      (g = Pm(P, z, O, B, s, -T, v)),
                      a.lineTo(y.cx + y.x01, y.cy + y.y01),
                      T < E
                        ? a.arc(
                            y.cx,
                            y.cy,
                            T,
                            pm(y.y01, y.x01),
                            pm(g.y01, g.x01),
                            !v
                          )
                        : (a.arc(
                            y.cx,
                            y.cy,
                            T,
                            pm(y.y01, y.x01),
                            pm(y.y11, y.x11),
                            !v
                          ),
                          a.arc(
                            0,
                            0,
                            s,
                            pm(y.cy + y.y11, y.cx + y.x11),
                            pm(g.cy + g.y11, g.cx + g.x11),
                            v
                          ),
                          a.arc(
                            g.cx,
                            g.cy,
                            T,
                            pm(g.y11, g.x11),
                            pm(g.y01, g.x01),
                            !v
                          )))
                    : a.arc(0, 0, s, x, m, v)
                  : a.lineTo(L, R);
            }
          else a.moveTo(0, 0);
          if ((a.closePath(), c)) return (a = null), c + "" || null;
        }
        return (
          (c.centroid = function () {
            var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
              r =
                (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 -
                mm / 2;
            return [vm(r) * e, _m(r) * e];
          }),
          (c.innerRadius = function (n) {
            return arguments.length
              ? ((t = "function" == typeof n ? n : hm(+n)), c)
              : t;
          }),
          (c.outerRadius = function (t) {
            return arguments.length
              ? ((n = "function" == typeof t ? t : hm(+t)), c)
              : n;
          }),
          (c.cornerRadius = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : hm(+t)), c)
              : e;
          }),
          (c.padRadius = function (t) {
            return arguments.length
              ? ((r = null == t ? null : "function" == typeof t ? t : hm(+t)),
                c)
              : r;
          }),
          (c.startAngle = function (t) {
            return arguments.length
              ? ((i = "function" == typeof t ? t : hm(+t)), c)
              : i;
          }),
          (c.endAngle = function (t) {
            return arguments.length
              ? ((o = "function" == typeof t ? t : hm(+t)), c)
              : o;
          }),
          (c.padAngle = function (t) {
            return arguments.length
              ? ((u = "function" == typeof t ? t : hm(+t)), c)
              : u;
          }),
          (c.context = function (t) {
            return arguments.length ? ((a = null == t ? null : t), c) : a;
          }),
          c
        );
      };
      function Lm(t) {
        this._context = t;
      }
      Lm.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(t, n);
          }
        },
      };
      var Rm = function (t) {
        return new Lm(t);
      };
      function qm(t) {
        return t[0];
      }
      function Dm(t) {
        return t[1];
      }
      var Um = function () {
          var t = qm,
            n = Dm,
            e = hm(!0),
            r = null,
            i = Rm,
            o = null;
          function u(u) {
            var a,
              c,
              f,
              s = u.length,
              l = !1;
            for (null == r && (o = i((f = ji()))), a = 0; a <= s; ++a)
              !(a < s && e((c = u[a]), a, u)) === l &&
                ((l = !l) ? o.lineStart() : o.lineEnd()),
                l && o.point(+t(c, a, u), +n(c, a, u));
            if (f) return (o = null), f + "" || null;
          }
          return (
            (u.x = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : hm(+n)), u)
                : t;
            }),
            (u.y = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : hm(+t)), u)
                : n;
            }),
            (u.defined = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : hm(!!t)), u)
                : e;
            }),
            (u.curve = function (t) {
              return arguments.length
                ? ((i = t), null != r && (o = i(r)), u)
                : i;
            }),
            (u.context = function (t) {
              return arguments.length
                ? (null == t ? (r = o = null) : (o = i((r = t))), u)
                : r;
            }),
            u
          );
        },
        Om = function () {
          var t = qm,
            n = null,
            e = hm(0),
            r = Dm,
            i = hm(!0),
            o = null,
            u = Rm,
            a = null;
          function c(c) {
            var f,
              s,
              l,
              h,
              d,
              p = c.length,
              v = !1,
              y = new Array(p),
              g = new Array(p);
            for (null == o && (a = u((d = ji()))), f = 0; f <= p; ++f) {
              if (!(f < p && i((h = c[f]), f, c)) === v)
                if ((v = !v)) (s = f), a.areaStart(), a.lineStart();
                else {
                  for (a.lineEnd(), a.lineStart(), l = f - 1; l >= s; --l)
                    a.point(y[l], g[l]);
                  a.lineEnd(), a.areaEnd();
                }
              v &&
                ((y[f] = +t(h, f, c)),
                (g[f] = +e(h, f, c)),
                a.point(n ? +n(h, f, c) : y[f], r ? +r(h, f, c) : g[f]));
            }
            if (d) return (a = null), d + "" || null;
          }
          function f() {
            return Um().defined(i).curve(u).context(o);
          }
          return (
            (c.x = function (e) {
              return arguments.length
                ? ((t = "function" == typeof e ? e : hm(+e)), (n = null), c)
                : t;
            }),
            (c.x0 = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : hm(+n)), c)
                : t;
            }),
            (c.x1 = function (t) {
              return arguments.length
                ? ((n = null == t ? null : "function" == typeof t ? t : hm(+t)),
                  c)
                : n;
            }),
            (c.y = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : hm(+t)), (r = null), c)
                : e;
            }),
            (c.y0 = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : hm(+t)), c)
                : e;
            }),
            (c.y1 = function (t) {
              return arguments.length
                ? ((r = null == t ? null : "function" == typeof t ? t : hm(+t)),
                  c)
                : r;
            }),
            (c.lineX0 = c.lineY0 = function () {
              return f().x(t).y(e);
            }),
            (c.lineY1 = function () {
              return f().x(t).y(r);
            }),
            (c.lineX1 = function () {
              return f().x(n).y(e);
            }),
            (c.defined = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : hm(!!t)), c)
                : i;
            }),
            (c.curve = function (t) {
              return arguments.length
                ? ((u = t), null != o && (a = u(o)), c)
                : u;
            }),
            (c.context = function (t) {
              return arguments.length
                ? (null == t ? (o = a = null) : (a = u((o = t))), c)
                : o;
            }),
            c
          );
        },
        Bm = function (t, n) {
          return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
        },
        Fm = function (t) {
          return t;
        },
        Ym = function () {
          var t = Fm,
            n = Bm,
            e = null,
            r = hm(0),
            i = hm(wm),
            o = hm(0);
          function u(u) {
            var a,
              c,
              f,
              s,
              l,
              h = u.length,
              d = 0,
              p = new Array(h),
              v = new Array(h),
              y = +r.apply(this, arguments),
              g = Math.min(wm, Math.max(-wm, i.apply(this, arguments) - y)),
              _ = Math.min(Math.abs(g) / h, o.apply(this, arguments)),
              b = _ * (g < 0 ? -1 : 1);
            for (a = 0; a < h; ++a)
              (l = v[(p[a] = a)] = +t(u[a], a, u)) > 0 && (d += l);
            for (
              null != n
                ? p.sort(function (t, e) {
                    return n(v[t], v[e]);
                  })
                : null != e &&
                  p.sort(function (t, n) {
                    return e(u[t], u[n]);
                  }),
                a = 0,
                f = d ? (g - h * b) / d : 0;
              a < h;
              ++a, y = s
            )
              (c = p[a]),
                (s = y + ((l = v[c]) > 0 ? l * f : 0) + b),
                (v[c] = {
                  data: u[c],
                  index: a,
                  value: l,
                  startAngle: y,
                  endAngle: s,
                  padAngle: _,
                });
            return v;
          }
          return (
            (u.value = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : hm(+n)), u)
                : t;
            }),
            (u.sortValues = function (t) {
              return arguments.length ? ((n = t), (e = null), u) : n;
            }),
            (u.sort = function (t) {
              return arguments.length ? ((e = t), (n = null), u) : e;
            }),
            (u.startAngle = function (t) {
              return arguments.length
                ? ((r = "function" == typeof t ? t : hm(+t)), u)
                : r;
            }),
            (u.endAngle = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : hm(+t)), u)
                : i;
            }),
            (u.padAngle = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : hm(+t)), u)
                : o;
            }),
            u
          );
        },
        Im = Hm(Rm);
      function jm(t) {
        this._curve = t;
      }
      function Hm(t) {
        function n(n) {
          return new jm(t(n));
        }
        return (n._curve = t), n;
      }
      function Vm(t) {
        var n = t.curve;
        return (
          (t.angle = t.x),
          delete t.x,
          (t.radius = t.y),
          delete t.y,
          (t.curve = function (t) {
            return arguments.length ? n(Hm(t)) : n()._curve;
          }),
          t
        );
      }
      jm.prototype = {
        areaStart: function () {
          this._curve.areaStart();
        },
        areaEnd: function () {
          this._curve.areaEnd();
        },
        lineStart: function () {
          this._curve.lineStart();
        },
        lineEnd: function () {
          this._curve.lineEnd();
        },
        point: function (t, n) {
          this._curve.point(n * Math.sin(t), n * -Math.cos(t));
        },
      };
      var Xm = function () {
          return Vm(Um().curve(Im));
        },
        Gm = function () {
          var t = Om().curve(Im),
            n = t.curve,
            e = t.lineX0,
            r = t.lineX1,
            i = t.lineY0,
            o = t.lineY1;
          return (
            (t.angle = t.x),
            delete t.x,
            (t.startAngle = t.x0),
            delete t.x0,
            (t.endAngle = t.x1),
            delete t.x1,
            (t.radius = t.y),
            delete t.y,
            (t.innerRadius = t.y0),
            delete t.y0,
            (t.outerRadius = t.y1),
            delete t.y1,
            (t.lineStartAngle = function () {
              return Vm(e());
            }),
            delete t.lineX0,
            (t.lineEndAngle = function () {
              return Vm(r());
            }),
            delete t.lineX1,
            (t.lineInnerRadius = function () {
              return Vm(i());
            }),
            delete t.lineY0,
            (t.lineOuterRadius = function () {
              return Vm(o());
            }),
            delete t.lineY1,
            (t.curve = function (t) {
              return arguments.length ? n(Hm(t)) : n()._curve;
            }),
            t
          );
        },
        $m = function (t, n) {
          return [(n = +n) * Math.cos((t -= Math.PI / 2)), n * Math.sin(t)];
        },
        Wm = Array.prototype.slice;
      function Zm(t) {
        return t.source;
      }
      function Qm(t) {
        return t.target;
      }
      function Jm(t) {
        var n = Zm,
          e = Qm,
          r = qm,
          i = Dm,
          o = null;
        function u() {
          var u,
            a = Wm.call(arguments),
            c = n.apply(this, a),
            f = e.apply(this, a);
          if (
            (o || (o = u = ji()),
            t(
              o,
              +r.apply(this, ((a[0] = c), a)),
              +i.apply(this, a),
              +r.apply(this, ((a[0] = f), a)),
              +i.apply(this, a)
            ),
            u)
          )
            return (o = null), u + "" || null;
        }
        return (
          (u.source = function (t) {
            return arguments.length ? ((n = t), u) : n;
          }),
          (u.target = function (t) {
            return arguments.length ? ((e = t), u) : e;
          }),
          (u.x = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : hm(+t)), u)
              : r;
          }),
          (u.y = function (t) {
            return arguments.length
              ? ((i = "function" == typeof t ? t : hm(+t)), u)
              : i;
          }),
          (u.context = function (t) {
            return arguments.length ? ((o = null == t ? null : t), u) : o;
          }),
          u
        );
      }
      function Km(t, n, e, r, i) {
        t.moveTo(n, e), t.bezierCurveTo((n = (n + r) / 2), e, n, i, r, i);
      }
      function tx(t, n, e, r, i) {
        t.moveTo(n, e), t.bezierCurveTo(n, (e = (e + i) / 2), r, e, r, i);
      }
      function nx(t, n, e, r, i) {
        var o = $m(n, e),
          u = $m(n, (e = (e + i) / 2)),
          a = $m(r, e),
          c = $m(r, i);
        t.moveTo(o[0], o[1]),
          t.bezierCurveTo(u[0], u[1], a[0], a[1], c[0], c[1]);
      }
      function ex() {
        return Jm(Km);
      }
      function rx() {
        return Jm(tx);
      }
      function ix() {
        var t = Jm(nx);
        return (t.angle = t.x), delete t.x, (t.radius = t.y), delete t.y, t;
      }
      var ox = {
          draw: function (t, n) {
            var e = Math.sqrt(n / mm);
            t.moveTo(e, 0), t.arc(0, 0, e, 0, wm);
          },
        },
        ux = {
          draw: function (t, n) {
            var e = Math.sqrt(n / 5) / 2;
            t.moveTo(-3 * e, -e),
              t.lineTo(-e, -e),
              t.lineTo(-e, -3 * e),
              t.lineTo(e, -3 * e),
              t.lineTo(e, -e),
              t.lineTo(3 * e, -e),
              t.lineTo(3 * e, e),
              t.lineTo(e, e),
              t.lineTo(e, 3 * e),
              t.lineTo(-e, 3 * e),
              t.lineTo(-e, e),
              t.lineTo(-3 * e, e),
              t.closePath();
          },
        },
        ax = Math.sqrt(1 / 3),
        cx = 2 * ax,
        fx = {
          draw: function (t, n) {
            var e = Math.sqrt(n / cx),
              r = e * ax;
            t.moveTo(0, -e),
              t.lineTo(r, 0),
              t.lineTo(0, e),
              t.lineTo(-r, 0),
              t.closePath();
          },
        },
        sx = Math.sin(mm / 10) / Math.sin((7 * mm) / 10),
        lx = Math.sin(wm / 10) * sx,
        hx = -Math.cos(wm / 10) * sx,
        dx = {
          draw: function (t, n) {
            var e = Math.sqrt(0.8908130915292852 * n),
              r = lx * e,
              i = hx * e;
            t.moveTo(0, -e), t.lineTo(r, i);
            for (var o = 1; o < 5; ++o) {
              var u = (wm * o) / 5,
                a = Math.cos(u),
                c = Math.sin(u);
              t.lineTo(c * e, -a * e), t.lineTo(a * r - c * i, c * r + a * i);
            }
            t.closePath();
          },
        },
        px = {
          draw: function (t, n) {
            var e = Math.sqrt(n),
              r = -e / 2;
            t.rect(r, r, e, e);
          },
        },
        vx = Math.sqrt(3),
        yx = {
          draw: function (t, n) {
            var e = -Math.sqrt(n / (3 * vx));
            t.moveTo(0, 2 * e),
              t.lineTo(-vx * e, -e),
              t.lineTo(vx * e, -e),
              t.closePath();
          },
        },
        gx = Math.sqrt(3) / 2,
        _x = 1 / Math.sqrt(12),
        bx = 3 * (_x / 2 + 1),
        mx = {
          draw: function (t, n) {
            var e = Math.sqrt(n / bx),
              r = e / 2,
              i = e * _x,
              o = r,
              u = e * _x + e,
              a = -o,
              c = u;
            t.moveTo(r, i),
              t.lineTo(o, u),
              t.lineTo(a, c),
              t.lineTo(-0.5 * r - gx * i, gx * r + -0.5 * i),
              t.lineTo(-0.5 * o - gx * u, gx * o + -0.5 * u),
              t.lineTo(-0.5 * a - gx * c, gx * a + -0.5 * c),
              t.lineTo(-0.5 * r + gx * i, -0.5 * i - gx * r),
              t.lineTo(-0.5 * o + gx * u, -0.5 * u - gx * o),
              t.lineTo(-0.5 * a + gx * c, -0.5 * c - gx * a),
              t.closePath();
          },
        },
        xx = [ox, ux, fx, px, dx, yx, mx],
        wx = function () {
          var t = hm(ox),
            n = hm(64),
            e = null;
          function r() {
            var r;
            if (
              (e || (e = r = ji()),
              t.apply(this, arguments).draw(e, +n.apply(this, arguments)),
              r)
            )
              return (e = null), r + "" || null;
          }
          return (
            (r.type = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : hm(n)), r)
                : t;
            }),
            (r.size = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : hm(+t)), r)
                : n;
            }),
            (r.context = function (t) {
              return arguments.length ? ((e = null == t ? null : t), r) : e;
            }),
            r
          );
        },
        Mx = function () {};
      function Nx(t, n, e) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + n) / 6,
          (t._y0 + 4 * t._y1 + e) / 6
        );
      }
      function Ax(t) {
        this._context = t;
      }
      Ax.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              Nx(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                );
            default:
              Nx(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n);
        },
      };
      var Ex = function (t) {
        return new Ax(t);
      };
      function Tx(t) {
        this._context = t;
      }
      Tx.prototype = {
        areaStart: Mx,
        areaEnd: Mx,
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x2, this._y2),
                this._context.closePath();
              break;
            case 2:
              this._context.moveTo(
                (this._x2 + 2 * this._x3) / 3,
                (this._y2 + 2 * this._y3) / 3
              ),
                this._context.lineTo(
                  (this._x3 + 2 * this._x2) / 3,
                  (this._y3 + 2 * this._y2) / 3
                ),
                this._context.closePath();
              break;
            case 3:
              this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4);
          }
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1), (this._x2 = t), (this._y2 = n);
              break;
            case 1:
              (this._point = 2), (this._x3 = t), (this._y3 = n);
              break;
            case 2:
              (this._point = 3),
                (this._x4 = t),
                (this._y4 = n),
                this._context.moveTo(
                  (this._x0 + 4 * this._x1 + t) / 6,
                  (this._y0 + 4 * this._y1 + n) / 6
                );
              break;
            default:
              Nx(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n);
        },
      };
      var Sx = function (t) {
        return new Tx(t);
      };
      function kx(t) {
        this._context = t;
      }
      kx.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              var e = (this._x0 + 4 * this._x1 + t) / 6,
                r = (this._y0 + 4 * this._y1 + n) / 6;
              this._line
                ? this._context.lineTo(e, r)
                : this._context.moveTo(e, r);
              break;
            case 3:
              this._point = 4;
            default:
              Nx(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n);
        },
      };
      var Cx = function (t) {
        return new kx(t);
      };
      function Px(t, n) {
        (this._basis = new Ax(t)), (this._beta = n);
      }
      Px.prototype = {
        lineStart: function () {
          (this._x = []), (this._y = []), this._basis.lineStart();
        },
        lineEnd: function () {
          var t = this._x,
            n = this._y,
            e = t.length - 1;
          if (e > 0)
            for (
              var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1;
              ++c <= e;

            )
              (r = c / e),
                this._basis.point(
                  this._beta * t[c] + (1 - this._beta) * (i + r * u),
                  this._beta * n[c] + (1 - this._beta) * (o + r * a)
                );
          (this._x = this._y = null), this._basis.lineEnd();
        },
        point: function (t, n) {
          this._x.push(+t), this._y.push(+n);
        },
      };
      var zx = (function t(n) {
        function e(t) {
          return 1 === n ? new Ax(t) : new Px(t, n);
        }
        return (
          (e.beta = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.85);
      function Lx(t, n, e) {
        t._context.bezierCurveTo(
          t._x1 + t._k * (t._x2 - t._x0),
          t._y1 + t._k * (t._y2 - t._y0),
          t._x2 + t._k * (t._x1 - n),
          t._y2 + t._k * (t._y1 - e),
          t._x2,
          t._y2
        );
      }
      function Rx(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      Rx.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              Lx(this, this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              (this._point = 2), (this._x1 = t), (this._y1 = n);
              break;
            case 2:
              this._point = 3;
            default:
              Lx(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var qx = (function t(n) {
        function e(t) {
          return new Rx(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function Dx(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      Dx.prototype = {
        areaStart: Mx,
        areaEnd: Mx,
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 2:
              this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 3:
              this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5);
          }
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1), (this._x3 = t), (this._y3 = n);
              break;
            case 1:
              (this._point = 2),
                this._context.moveTo((this._x4 = t), (this._y4 = n));
              break;
            case 2:
              (this._point = 3), (this._x5 = t), (this._y5 = n);
              break;
            default:
              Lx(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var Ux = (function t(n) {
        function e(t) {
          return new Dx(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function Ox(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      Ox.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              Lx(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var Bx = (function t(n) {
        function e(t) {
          return new Ox(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function Fx(t, n, e) {
        var r = t._x1,
          i = t._y1,
          o = t._x2,
          u = t._y2;
        if (t._l01_a > 1e-12) {
          var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            c = 3 * t._l01_a * (t._l01_a + t._l12_a);
          (r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c),
            (i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c);
        }
        if (t._l23_a > 1e-12) {
          var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            s = 3 * t._l23_a * (t._l23_a + t._l12_a);
          (o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s),
            (u = (u * f + t._y1 * t._l23_2a - e * t._l12_2a) / s);
        }
        t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2);
      }
      function Yx(t, n) {
        (this._context = t), (this._alpha = n);
      }
      Yx.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              this.point(this._x2, this._y2);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              r = this._y2 - n;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            );
          }
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
            default:
              Fx(this, t, n);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var Ix = (function t(n) {
        function e(t) {
          return n ? new Yx(t, n) : new Rx(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function jx(t, n) {
        (this._context = t), (this._alpha = n);
      }
      jx.prototype = {
        areaStart: Mx,
        areaEnd: Mx,
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
            (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 2:
              this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 3:
              this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5);
          }
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              r = this._y2 - n;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            );
          }
          switch (this._point) {
            case 0:
              (this._point = 1), (this._x3 = t), (this._y3 = n);
              break;
            case 1:
              (this._point = 2),
                this._context.moveTo((this._x4 = t), (this._y4 = n));
              break;
            case 2:
              (this._point = 3), (this._x5 = t), (this._y5 = n);
              break;
            default:
              Fx(this, t, n);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var Hx = (function t(n) {
        function e(t) {
          return n ? new jx(t, n) : new Dx(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function Vx(t, n) {
        (this._context = t), (this._alpha = n);
      }
      Vx.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              r = this._y2 - n;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            );
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              Fx(this, t, n);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      var Xx = (function t(n) {
        function e(t) {
          return n ? new Vx(t, n) : new Ox(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function Gx(t) {
        this._context = t;
      }
      Gx.prototype = {
        areaStart: Mx,
        areaEnd: Mx,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (t, n) {
          (t = +t),
            (n = +n),
            this._point
              ? this._context.lineTo(t, n)
              : ((this._point = 1), this._context.moveTo(t, n));
        },
      };
      var $x = function (t) {
        return new Gx(t);
      };
      function Wx(t) {
        return t < 0 ? -1 : 1;
      }
      function Zx(t, n, e) {
        var r = t._x1 - t._x0,
          i = n - t._x1,
          o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
          u = (e - t._y1) / (i || (r < 0 && -0)),
          a = (o * i + u * r) / (r + i);
        return (
          (Wx(o) + Wx(u)) *
            Math.min(Math.abs(o), Math.abs(u), 0.5 * Math.abs(a)) || 0
        );
      }
      function Qx(t, n) {
        var e = t._x1 - t._x0;
        return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
      }
      function Jx(t, n, e) {
        var r = t._x0,
          i = t._y0,
          o = t._x1,
          u = t._y1,
          a = (o - r) / 3;
        t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u);
      }
      function Kx(t) {
        this._context = t;
      }
      function tw(t) {
        this._context = new nw(t);
      }
      function nw(t) {
        this._context = t;
      }
      function ew(t) {
        return new Kx(t);
      }
      function rw(t) {
        return new tw(t);
      }
      function iw(t) {
        this._context = t;
      }
      function ow(t) {
        var n,
          e,
          r = t.length - 1,
          i = new Array(r),
          o = new Array(r),
          u = new Array(r);
        for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n)
          (i[n] = 1), (o[n] = 4), (u[n] = 4 * t[n] + 2 * t[n + 1]);
        for (
          i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1;
          n < r;
          ++n
        )
          (e = i[n] / o[n - 1]), (o[n] -= e), (u[n] -= e * u[n - 1]);
        for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n)
          i[n] = (u[n] - i[n + 1]) / o[n];
        for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n)
          o[n] = 2 * t[n + 1] - i[n + 1];
        return [i, o];
      }
      (Kx.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x1, this._y1);
              break;
            case 3:
              Jx(this, this._t0, Qx(this, this._t0));
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          var e = NaN;
          if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
            switch (this._point) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3), Jx(this, Qx(this, (e = Zx(this, t, n))), e);
                break;
              default:
                Jx(this, this._t0, (e = Zx(this, t, n)));
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = n),
              (this._t0 = e);
          }
        },
      }),
        ((tw.prototype = Object.create(Kx.prototype)).point = function (t, n) {
          Kx.prototype.point.call(this, n, t);
        }),
        (nw.prototype = {
          moveTo: function (t, n) {
            this._context.moveTo(n, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, n) {
            this._context.lineTo(n, t);
          },
          bezierCurveTo: function (t, n, e, r, i, o) {
            this._context.bezierCurveTo(n, t, r, e, o, i);
          },
        }),
        (iw.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = []), (this._y = []);
          },
          lineEnd: function () {
            var t = this._x,
              n = this._y,
              e = t.length;
            if (e)
              if (
                (this._line
                  ? this._context.lineTo(t[0], n[0])
                  : this._context.moveTo(t[0], n[0]),
                2 === e)
              )
                this._context.lineTo(t[1], n[1]);
              else
                for (var r = ow(t), i = ow(n), o = 0, u = 1; u < e; ++o, ++u)
                  this._context.bezierCurveTo(
                    r[0][o],
                    i[0][o],
                    r[1][o],
                    i[1][o],
                    t[u],
                    n[u]
                  );
            (this._line || (0 !== this._line && 1 === e)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (t, n) {
            this._x.push(+t), this._y.push(+n);
          },
        });
      var uw = function (t) {
        return new iw(t);
      };
      function aw(t, n) {
        (this._context = t), (this._t = n);
      }
      aw.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x = this._y = NaN), (this._point = 0);
        },
        lineEnd: function () {
          0 < this._t &&
            this._t < 1 &&
            2 === this._point &&
            this._context.lineTo(this._x, this._y),
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
            this._line >= 0 &&
              ((this._t = 1 - this._t), (this._line = 1 - this._line));
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default:
              if (this._t <= 0)
                this._context.lineTo(this._x, n), this._context.lineTo(t, n);
              else {
                var e = this._x * (1 - this._t) + t * this._t;
                this._context.lineTo(e, this._y), this._context.lineTo(e, n);
              }
          }
          (this._x = t), (this._y = n);
        },
      };
      var cw = function (t) {
        return new aw(t, 0.5);
      };
      function fw(t) {
        return new aw(t, 0);
      }
      function sw(t) {
        return new aw(t, 1);
      }
      var lw = function (t, n) {
          if ((i = t.length) > 1)
            for (var e, r, i, o = 1, u = t[n[0]], a = u.length; o < i; ++o)
              for (r = u, u = t[n[o]], e = 0; e < a; ++e)
                u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
        },
        hw = function (t) {
          for (var n = t.length, e = new Array(n); --n >= 0; ) e[n] = n;
          return e;
        };
      function dw(t, n) {
        return t[n];
      }
      var pw = function () {
          var t = hm([]),
            n = hw,
            e = lw,
            r = dw;
          function i(i) {
            var o,
              u,
              a = t.apply(this, arguments),
              c = i.length,
              f = a.length,
              s = new Array(f);
            for (o = 0; o < f; ++o) {
              for (
                var l, h = a[o], d = (s[o] = new Array(c)), p = 0;
                p < c;
                ++p
              )
                (d[p] = l = [0, +r(i[p], h, p, i)]), (l.data = i[p]);
              d.key = h;
            }
            for (o = 0, u = n(s); o < f; ++o) s[u[o]].index = o;
            return e(s, u), s;
          }
          return (
            (i.keys = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : hm(Wm.call(n))), i)
                : t;
            }),
            (i.value = function (t) {
              return arguments.length
                ? ((r = "function" == typeof t ? t : hm(+t)), i)
                : r;
            }),
            (i.order = function (t) {
              return arguments.length
                ? ((n =
                    null == t
                      ? hw
                      : "function" == typeof t
                      ? t
                      : hm(Wm.call(t))),
                  i)
                : n;
            }),
            (i.offset = function (t) {
              return arguments.length ? ((e = null == t ? lw : t), i) : e;
            }),
            i
          );
        },
        vw = function (t, n) {
          if ((r = t.length) > 0) {
            for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
              for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
              if (i) for (e = 0; e < r; ++e) t[e][o][1] /= i;
            }
            lw(t, n);
          }
        },
        yw = function (t, n) {
          if ((a = t.length) > 0)
            for (var e, r, i, o, u, a, c = 0, f = t[n[0]].length; c < f; ++c)
              for (o = u = 0, e = 0; e < a; ++e)
                (i = (r = t[n[e]][c])[1] - r[0]) > 0
                  ? ((r[0] = o), (r[1] = o += i))
                  : i < 0
                  ? ((r[1] = u), (r[0] = u += i))
                  : ((r[0] = 0), (r[1] = i));
        },
        gw = function (t, n) {
          if ((e = t.length) > 0) {
            for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
              for (var u = 0, a = 0; u < e; ++u) a += t[u][r][1] || 0;
              i[r][1] += i[r][0] = -a / 2;
            }
            lw(t, n);
          }
        },
        _w = function (t, n) {
          if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
            for (var e, r, i, o = 0, u = 1; u < r; ++u) {
              for (var a = 0, c = 0, f = 0; a < i; ++a) {
                for (
                  var s = t[n[a]],
                    l = s[u][1] || 0,
                    h = (l - (s[u - 1][1] || 0)) / 2,
                    d = 0;
                  d < a;
                  ++d
                ) {
                  var p = t[n[d]];
                  h += (p[u][1] || 0) - (p[u - 1][1] || 0);
                }
                (c += l), (f += h * l);
              }
              (e[u - 1][1] += e[u - 1][0] = o), c && (o -= f / c);
            }
            (e[u - 1][1] += e[u - 1][0] = o), lw(t, n);
          }
        },
        bw = function (t) {
          var n = t.map(mw);
          return hw(t).sort(function (t, e) {
            return n[t] - n[e];
          });
        };
      function mw(t) {
        for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i; )
          (n = +t[e][1]) > o && ((o = n), (r = e));
        return r;
      }
      var xw = function (t) {
        var n = t.map(ww);
        return hw(t).sort(function (t, e) {
          return n[t] - n[e];
        });
      };
      function ww(t) {
        for (var n, e = 0, r = -1, i = t.length; ++r < i; )
          (n = +t[r][1]) && (e += n);
        return e;
      }
      var Mw = function (t) {
          return xw(t).reverse();
        },
        Nw = function (t) {
          var n,
            e,
            r = t.length,
            i = t.map(ww),
            o = bw(t),
            u = 0,
            a = 0,
            c = [],
            f = [];
          for (n = 0; n < r; ++n)
            (e = o[n]),
              u < a ? ((u += i[e]), c.push(e)) : ((a += i[e]), f.push(e));
          return f.reverse().concat(c);
        },
        Aw = function (t) {
          return hw(t).reverse();
        };
      var Ew = Date.prototype.toISOString
        ? function (t) {
            return t.toISOString();
          }
        : Hy("%Y-%m-%dT%H:%M:%S.%LZ");
      var Tw = +new Date("2000-01-01T00:00:00.000Z")
          ? function (t) {
              var n = new Date(t);
              return isNaN(n) ? null : n;
            }
          : Vy("%Y-%m-%dT%H:%M:%S.%LZ"),
        Sw = function (t, n, e) {
          var r = new He(),
            i = n;
          return null == n
            ? (r.restart(t, n, e), r)
            : ((n = +n),
              (e = null == e ? Ie() : +e),
              r.restart(
                function o(u) {
                  (u += i), r.restart(o, (i += n), e), t(u);
                },
                n,
                e
              ),
              r);
        },
        kw = function (t) {
          return function () {
            return t;
          };
        };
      function Cw(t) {
        return t[0];
      }
      function Pw(t) {
        return t[1];
      }
      function zw() {
        this._ = null;
      }
      function Lw(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null;
      }
      function Rw(t, n) {
        var e = n,
          r = n.R,
          i = e.U;
        i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
          (r.U = i),
          (e.U = r),
          (e.R = r.L),
          e.R && (e.R.U = e),
          (r.L = e);
      }
      function qw(t, n) {
        var e = n,
          r = n.L,
          i = e.U;
        i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
          (r.U = i),
          (e.U = r),
          (e.L = r.R),
          e.L && (e.L.U = e),
          (r.R = e);
      }
      function Dw(t) {
        for (; t.L; ) t = t.L;
        return t;
      }
      zw.prototype = {
        constructor: zw,
        insert: function (t, n) {
          var e, r, i;
          if (t) {
            if (((n.P = t), (n.N = t.N), t.N && (t.N.P = n), (t.N = n), t.R)) {
              for (t = t.R; t.L; ) t = t.L;
              t.L = n;
            } else t.R = n;
            e = t;
          } else
            this._
              ? ((t = Dw(this._)),
                (n.P = null),
                (n.N = t),
                (t.P = t.L = n),
                (e = t))
              : ((n.P = n.N = null), (this._ = n), (e = null));
          for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C; )
            e === (r = e.U).L
              ? (i = r.R) && i.C
                ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                : (t === e.R && (Rw(this, e), (e = (t = e).U)),
                  (e.C = !1),
                  (r.C = !0),
                  qw(this, r))
              : (i = r.L) && i.C
              ? ((e.C = i.C = !1), (r.C = !0), (t = r))
              : (t === e.L && (qw(this, e), (e = (t = e).U)),
                (e.C = !1),
                (r.C = !0),
                Rw(this, r)),
              (e = t.U);
          this._.C = !1;
        },
        remove: function (t) {
          t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null);
          var n,
            e,
            r,
            i = t.U,
            o = t.L,
            u = t.R;
          if (
            ((e = o ? (u ? Dw(u) : o) : u),
            i ? (i.L === t ? (i.L = e) : (i.R = e)) : (this._ = e),
            o && u
              ? ((r = e.C),
                (e.C = t.C),
                (e.L = o),
                (o.U = e),
                e !== u
                  ? ((i = e.U),
                    (e.U = t.U),
                    (t = e.R),
                    (i.L = t),
                    (e.R = u),
                    (u.U = e))
                  : ((e.U = i), (i = e), (t = e.R)))
              : ((r = t.C), (t = e)),
            t && (t.U = i),
            !r)
          )
            if (t && t.C) t.C = !1;
            else {
              do {
                if (t === this._) break;
                if (t === i.L) {
                  if (
                    ((n = i.R).C &&
                      ((n.C = !1), (i.C = !0), Rw(this, i), (n = i.R)),
                    (n.L && n.L.C) || (n.R && n.R.C))
                  ) {
                    (n.R && n.R.C) ||
                      ((n.L.C = !1), (n.C = !0), qw(this, n), (n = i.R)),
                      (n.C = i.C),
                      (i.C = n.R.C = !1),
                      Rw(this, i),
                      (t = this._);
                    break;
                  }
                } else if (
                  ((n = i.L).C &&
                    ((n.C = !1), (i.C = !0), qw(this, i), (n = i.L)),
                  (n.L && n.L.C) || (n.R && n.R.C))
                ) {
                  (n.L && n.L.C) ||
                    ((n.R.C = !1), (n.C = !0), Rw(this, n), (n = i.L)),
                    (n.C = i.C),
                    (i.C = n.L.C = !1),
                    qw(this, i),
                    (t = this._);
                  break;
                }
                (n.C = !0), (t = i), (i = i.U);
              } while (!t.C);
              t && (t.C = !1);
            }
        },
      };
      var Uw = zw;
      function Ow(t, n, e, r) {
        var i = [null, null],
          o = cM.push(i) - 1;
        return (
          (i.left = t),
          (i.right = n),
          e && Fw(i, t, n, e),
          r && Fw(i, n, t, r),
          uM[t.index].halfedges.push(o),
          uM[n.index].halfedges.push(o),
          i
        );
      }
      function Bw(t, n, e) {
        var r = [n, e];
        return (r.left = t), r;
      }
      function Fw(t, n, e, r) {
        t[0] || t[1]
          ? t.left === e
            ? (t[1] = r)
            : (t[0] = r)
          : ((t[0] = r), (t.left = n), (t.right = e));
      }
      function Yw(t, n, e, r, i) {
        var o,
          u = t[0],
          a = t[1],
          c = u[0],
          f = u[1],
          s = 0,
          l = 1,
          h = a[0] - c,
          d = a[1] - f;
        if (((o = n - c), h || !(o > 0))) {
          if (((o /= h), h < 0)) {
            if (o < s) return;
            o < l && (l = o);
          } else if (h > 0) {
            if (o > l) return;
            o > s && (s = o);
          }
          if (((o = r - c), h || !(o < 0))) {
            if (((o /= h), h < 0)) {
              if (o > l) return;
              o > s && (s = o);
            } else if (h > 0) {
              if (o < s) return;
              o < l && (l = o);
            }
            if (((o = e - f), d || !(o > 0))) {
              if (((o /= d), d < 0)) {
                if (o < s) return;
                o < l && (l = o);
              } else if (d > 0) {
                if (o > l) return;
                o > s && (s = o);
              }
              if (((o = i - f), d || !(o < 0))) {
                if (((o /= d), d < 0)) {
                  if (o > l) return;
                  o > s && (s = o);
                } else if (d > 0) {
                  if (o < s) return;
                  o < l && (l = o);
                }
                return (
                  !(s > 0 || l < 1) ||
                  (s > 0 && (t[0] = [c + s * h, f + s * d]),
                  l < 1 && (t[1] = [c + l * h, f + l * d]),
                  !0)
                );
              }
            }
          }
        }
      }
      function Iw(t, n, e, r, i) {
        var o = t[1];
        if (o) return !0;
        var u,
          a,
          c = t[0],
          f = t.left,
          s = t.right,
          l = f[0],
          h = f[1],
          d = s[0],
          p = s[1],
          v = (l + d) / 2,
          y = (h + p) / 2;
        if (p === h) {
          if (v < n || v >= r) return;
          if (l > d) {
            if (c) {
              if (c[1] >= i) return;
            } else c = [v, e];
            o = [v, i];
          } else {
            if (c) {
              if (c[1] < e) return;
            } else c = [v, i];
            o = [v, e];
          }
        } else if (((a = y - (u = (l - d) / (p - h)) * v), u < -1 || u > 1))
          if (l > d) {
            if (c) {
              if (c[1] >= i) return;
            } else c = [(e - a) / u, e];
            o = [(i - a) / u, i];
          } else {
            if (c) {
              if (c[1] < e) return;
            } else c = [(i - a) / u, i];
            o = [(e - a) / u, e];
          }
        else if (h < p) {
          if (c) {
            if (c[0] >= r) return;
          } else c = [n, u * n + a];
          o = [r, u * r + a];
        } else {
          if (c) {
            if (c[0] < n) return;
          } else c = [r, u * r + a];
          o = [n, u * n + a];
        }
        return (t[0] = c), (t[1] = o), !0;
      }
      function jw(t, n) {
        var e = t.site,
          r = n.left,
          i = n.right;
        return (
          e === i && ((i = r), (r = e)),
          i
            ? Math.atan2(i[1] - r[1], i[0] - r[0])
            : (e === r ? ((r = n[1]), (i = n[0])) : ((r = n[0]), (i = n[1])),
              Math.atan2(r[0] - i[0], i[1] - r[1]))
        );
      }
      function Hw(t, n) {
        return n[+(n.left !== t.site)];
      }
      function Vw(t, n) {
        return n[+(n.left === t.site)];
      }
      var Xw,
        Gw = [];
      function $w() {
        Lw(this), (this.x = this.y = this.arc = this.site = this.cy = null);
      }
      function Ww(t) {
        var n = t.P,
          e = t.N;
        if (n && e) {
          var r = n.site,
            i = t.site,
            o = e.site;
          if (r !== o) {
            var u = i[0],
              a = i[1],
              c = r[0] - u,
              f = r[1] - a,
              s = o[0] - u,
              l = o[1] - a,
              h = 2 * (c * l - f * s);
            if (!(h >= -sM)) {
              var d = c * c + f * f,
                p = s * s + l * l,
                v = (l * d - f * p) / h,
                y = (c * p - s * d) / h,
                g = Gw.pop() || new $w();
              (g.arc = t),
                (g.site = i),
                (g.x = v + u),
                (g.y = (g.cy = y + a) + Math.sqrt(v * v + y * y)),
                (t.circle = g);
              for (var _ = null, b = aM._; b; )
                if (g.y < b.y || (g.y === b.y && g.x <= b.x)) {
                  if (!b.L) {
                    _ = b.P;
                    break;
                  }
                  b = b.L;
                } else {
                  if (!b.R) {
                    _ = b;
                    break;
                  }
                  b = b.R;
                }
              aM.insert(_, g), _ || (Xw = g);
            }
          }
        }
      }
      function Zw(t) {
        var n = t.circle;
        n &&
          (n.P || (Xw = n.N),
          aM.remove(n),
          Gw.push(n),
          Lw(n),
          (t.circle = null));
      }
      var Qw = [];
      function Jw() {
        Lw(this), (this.edge = this.site = this.circle = null);
      }
      function Kw(t) {
        var n = Qw.pop() || new Jw();
        return (n.site = t), n;
      }
      function tM(t) {
        Zw(t), oM.remove(t), Qw.push(t), Lw(t);
      }
      function nM(t) {
        var n = t.circle,
          e = n.x,
          r = n.cy,
          i = [e, r],
          o = t.P,
          u = t.N,
          a = [t];
        tM(t);
        for (
          var c = o;
          c.circle &&
          Math.abs(e - c.circle.x) < fM &&
          Math.abs(r - c.circle.cy) < fM;

        )
          (o = c.P), a.unshift(c), tM(c), (c = o);
        a.unshift(c), Zw(c);
        for (
          var f = u;
          f.circle &&
          Math.abs(e - f.circle.x) < fM &&
          Math.abs(r - f.circle.cy) < fM;

        )
          (u = f.N), a.push(f), tM(f), (f = u);
        a.push(f), Zw(f);
        var s,
          l = a.length;
        for (s = 1; s < l; ++s)
          (f = a[s]), (c = a[s - 1]), Fw(f.edge, c.site, f.site, i);
        (c = a[0]),
          ((f = a[l - 1]).edge = Ow(c.site, f.site, null, i)),
          Ww(c),
          Ww(f);
      }
      function eM(t) {
        for (var n, e, r, i, o = t[0], u = t[1], a = oM._; a; )
          if ((r = rM(a, u) - o) > fM) a = a.L;
          else {
            if (!((i = o - iM(a, u)) > fM)) {
              r > -fM
                ? ((n = a.P), (e = a))
                : i > -fM
                ? ((n = a), (e = a.N))
                : (n = e = a);
              break;
            }
            if (!a.R) {
              n = a;
              break;
            }
            a = a.R;
          }
        !(function (t) {
          uM[t.index] = { site: t, halfedges: [] };
        })(t);
        var c = Kw(t);
        if ((oM.insert(n, c), n || e)) {
          if (n === e)
            return (
              Zw(n),
              (e = Kw(n.site)),
              oM.insert(c, e),
              (c.edge = e.edge = Ow(n.site, c.site)),
              Ww(n),
              void Ww(e)
            );
          if (e) {
            Zw(n), Zw(e);
            var f = n.site,
              s = f[0],
              l = f[1],
              h = t[0] - s,
              d = t[1] - l,
              p = e.site,
              v = p[0] - s,
              y = p[1] - l,
              g = 2 * (h * y - d * v),
              _ = h * h + d * d,
              b = v * v + y * y,
              m = [(y * _ - d * b) / g + s, (h * b - v * _) / g + l];
            Fw(e.edge, f, p, m),
              (c.edge = Ow(f, t, null, m)),
              (e.edge = Ow(t, p, null, m)),
              Ww(n),
              Ww(e);
          } else c.edge = Ow(n.site, c.site);
        }
      }
      function rM(t, n) {
        var e = t.site,
          r = e[0],
          i = e[1],
          o = i - n;
        if (!o) return r;
        var u = t.P;
        if (!u) return -1 / 0;
        var a = (e = u.site)[0],
          c = e[1],
          f = c - n;
        if (!f) return a;
        var s = a - r,
          l = 1 / o - 1 / f,
          h = s / f;
        return l
          ? (-h +
              Math.sqrt(
                h * h - 2 * l * ((s * s) / (-2 * f) - c + f / 2 + i - o / 2)
              )) /
              l +
              r
          : (r + a) / 2;
      }
      function iM(t, n) {
        var e = t.N;
        if (e) return rM(e, n);
        var r = t.site;
        return r[1] === n ? r[0] : 1 / 0;
      }
      var oM,
        uM,
        aM,
        cM,
        fM = 1e-6,
        sM = 1e-12;
      function lM(t, n) {
        return n[1] - t[1] || n[0] - t[0];
      }
      function hM(t, n) {
        var e,
          r,
          i,
          o = t.sort(lM).pop();
        for (
          cM = [], uM = new Array(t.length), oM = new Uw(), aM = new Uw();
          ;

        )
          if (
            ((i = Xw), o && (!i || o[1] < i.y || (o[1] === i.y && o[0] < i.x)))
          )
            (o[0] === e && o[1] === r) || (eM(o), (e = o[0]), (r = o[1])),
              (o = t.pop());
          else {
            if (!i) break;
            nM(i.arc);
          }
        if (
          ((function () {
            for (var t, n, e, r, i = 0, o = uM.length; i < o; ++i)
              if ((t = uM[i]) && (r = (n = t.halfedges).length)) {
                var u = new Array(r),
                  a = new Array(r);
                for (e = 0; e < r; ++e) (u[e] = e), (a[e] = jw(t, cM[n[e]]));
                for (
                  u.sort(function (t, n) {
                    return a[n] - a[t];
                  }),
                    e = 0;
                  e < r;
                  ++e
                )
                  a[e] = n[u[e]];
                for (e = 0; e < r; ++e) n[e] = a[e];
              }
          })(),
          n)
        ) {
          var u = +n[0][0],
            a = +n[0][1],
            c = +n[1][0],
            f = +n[1][1];
          !(function (t, n, e, r) {
            for (var i, o = cM.length; o--; )
              (Iw((i = cM[o]), t, n, e, r) &&
                Yw(i, t, n, e, r) &&
                (Math.abs(i[0][0] - i[1][0]) > fM ||
                  Math.abs(i[0][1] - i[1][1]) > fM)) ||
                delete cM[o];
          })(u, a, c, f),
            (function (t, n, e, r) {
              var i,
                o,
                u,
                a,
                c,
                f,
                s,
                l,
                h,
                d,
                p,
                v,
                y = uM.length,
                g = !0;
              for (i = 0; i < y; ++i)
                if ((o = uM[i])) {
                  for (u = o.site, a = (c = o.halfedges).length; a--; )
                    cM[c[a]] || c.splice(a, 1);
                  for (a = 0, f = c.length; a < f; )
                    (p = (d = Vw(o, cM[c[a]]))[0]),
                      (v = d[1]),
                      (l = (s = Hw(o, cM[c[++a % f]]))[0]),
                      (h = s[1]),
                      (Math.abs(p - l) > fM || Math.abs(v - h) > fM) &&
                        (c.splice(
                          a,
                          0,
                          cM.push(
                            Bw(
                              u,
                              d,
                              Math.abs(p - t) < fM && r - v > fM
                                ? [t, Math.abs(l - t) < fM ? h : r]
                                : Math.abs(v - r) < fM && e - p > fM
                                ? [Math.abs(h - r) < fM ? l : e, r]
                                : Math.abs(p - e) < fM && v - n > fM
                                ? [e, Math.abs(l - e) < fM ? h : n]
                                : Math.abs(v - n) < fM && p - t > fM
                                ? [Math.abs(h - n) < fM ? l : t, n]
                                : null
                            )
                          ) - 1
                        ),
                        ++f);
                  f && (g = !1);
                }
              if (g) {
                var _,
                  b,
                  m,
                  x = 1 / 0;
                for (i = 0, g = null; i < y; ++i)
                  (o = uM[i]) &&
                    (m = (_ = (u = o.site)[0] - t) * _ + (b = u[1] - n) * b) <
                      x &&
                    ((x = m), (g = o));
                if (g) {
                  var w = [t, n],
                    M = [t, r],
                    N = [e, r],
                    A = [e, n];
                  g.halfedges.push(
                    cM.push(Bw((u = g.site), w, M)) - 1,
                    cM.push(Bw(u, M, N)) - 1,
                    cM.push(Bw(u, N, A)) - 1,
                    cM.push(Bw(u, A, w)) - 1
                  );
                }
              }
              for (i = 0; i < y; ++i)
                (o = uM[i]) && (o.halfedges.length || delete uM[i]);
            })(u, a, c, f);
        }
        (this.edges = cM), (this.cells = uM), (oM = aM = cM = uM = null);
      }
      hM.prototype = {
        constructor: hM,
        polygons: function () {
          var t = this.edges;
          return this.cells.map(function (n) {
            var e = n.halfedges.map(function (e) {
              return Hw(n, t[e]);
            });
            return (e.data = n.site.data), e;
          });
        },
        triangles: function () {
          var t = [],
            n = this.edges;
          return (
            this.cells.forEach(function (e, r) {
              if ((o = (i = e.halfedges).length))
                for (
                  var i,
                    o,
                    u,
                    a,
                    c,
                    f,
                    s = e.site,
                    l = -1,
                    h = n[i[o - 1]],
                    d = h.left === s ? h.right : h.left;
                  ++l < o;

                )
                  (u = d),
                    (d = (h = n[i[l]]).left === s ? h.right : h.left),
                    u &&
                      d &&
                      r < u.index &&
                      r < d.index &&
                      ((c = u),
                      (f = d),
                      ((a = s)[0] - f[0]) * (c[1] - a[1]) -
                        (a[0] - c[0]) * (f[1] - a[1]) <
                        0) &&
                      t.push([s.data, u.data, d.data]);
            }),
            t
          );
        },
        links: function () {
          return this.edges
            .filter(function (t) {
              return t.right;
            })
            .map(function (t) {
              return { source: t.left.data, target: t.right.data };
            });
        },
        find: function (t, n, e) {
          for (
            var r, i, o = this, u = o._found || 0, a = o.cells.length;
            !(i = o.cells[u]);

          )
            if (++u >= a) return null;
          var c = t - i.site[0],
            f = n - i.site[1],
            s = c * c + f * f;
          do {
            (i = o.cells[(r = u)]),
              (u = null),
              i.halfedges.forEach(function (e) {
                var r = o.edges[e],
                  a = r.left;
                if ((a !== i.site && a) || (a = r.right)) {
                  var c = t - a[0],
                    f = n - a[1],
                    l = c * c + f * f;
                  l < s && ((s = l), (u = a.index));
                }
              });
          } while (null !== u);
          return (o._found = r), null == e || s <= e * e ? i.site : null;
        },
      };
      var dM = function () {
          var t = Cw,
            n = Pw,
            e = null;
          function r(r) {
            return new hM(
              r.map(function (e, i) {
                var o = [
                  Math.round(t(e, i, r) / fM) * fM,
                  Math.round(n(e, i, r) / fM) * fM,
                ];
                return (o.index = i), (o.data = e), o;
              }),
              e
            );
          }
          return (
            (r.polygons = function (t) {
              return r(t).polygons();
            }),
            (r.links = function (t) {
              return r(t).links();
            }),
            (r.triangles = function (t) {
              return r(t).triangles();
            }),
            (r.x = function (n) {
              return arguments.length
                ? ((t = "function" == typeof n ? n : kw(+n)), r)
                : t;
            }),
            (r.y = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : kw(+t)), r)
                : n;
            }),
            (r.extent = function (t) {
              return arguments.length
                ? ((e =
                    null == t
                      ? null
                      : [
                          [+t[0][0], +t[0][1]],
                          [+t[1][0], +t[1][1]],
                        ]),
                  r)
                : e && [
                    [e[0][0], e[0][1]],
                    [e[1][0], e[1][1]],
                  ];
            }),
            (r.size = function (t) {
              return arguments.length
                ? ((e =
                    null == t
                      ? null
                      : [
                          [0, 0],
                          [+t[0], +t[1]],
                        ]),
                  r)
                : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]];
            }),
            r
          );
        },
        pM = function (t) {
          return function () {
            return t;
          };
        };
      function vM(t, n, e) {
        (this.target = t), (this.type = n), (this.transform = e);
      }
      function yM(t, n, e) {
        (this.k = t), (this.x = n), (this.y = e);
      }
      yM.prototype = {
        constructor: yM,
        scale: function (t) {
          return 1 === t ? this : new yM(this.k * t, this.x, this.y);
        },
        translate: function (t, n) {
          return (0 === t) & (0 === n)
            ? this
            : new yM(this.k, this.x + this.k * t, this.y + this.k * n);
        },
        apply: function (t) {
          return [t[0] * this.k + this.x, t[1] * this.k + this.y];
        },
        applyX: function (t) {
          return t * this.k + this.x;
        },
        applyY: function (t) {
          return t * this.k + this.y;
        },
        invert: function (t) {
          return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
        },
        invertX: function (t) {
          return (t - this.x) / this.k;
        },
        invertY: function (t) {
          return (t - this.y) / this.k;
        },
        rescaleX: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertX, this).map(t.invert, t));
        },
        rescaleY: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertY, this).map(t.invert, t));
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          );
        },
      };
      var gM = new yM(1, 0, 0);
      function _M(t) {
        for (; !t.__zoom; ) if (!(t = t.parentNode)) return gM;
        return t.__zoom;
      }
      function bM() {
        sn.stopImmediatePropagation();
      }
      _M.prototype = yM.prototype;
      var mM = function () {
        sn.preventDefault(), sn.stopImmediatePropagation();
      };
      function xM() {
        return !sn.ctrlKey && !sn.button;
      }
      function wM() {
        var t = this;
        return t instanceof SVGElement
          ? (t = t.ownerSVGElement || t).hasAttribute("viewBox")
            ? [
                [(t = t.viewBox.baseVal).x, t.y],
                [t.x + t.width, t.y + t.height],
              ]
            : [
                [0, 0],
                [t.width.baseVal.value, t.height.baseVal.value],
              ]
          : [
              [0, 0],
              [t.clientWidth, t.clientHeight],
            ];
      }
      function MM() {
        return this.__zoom || gM;
      }
      function NM() {
        return (
          -sn.deltaY * (1 === sn.deltaMode ? 0.05 : sn.deltaMode ? 1 : 0.002)
        );
      }
      function AM() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function EM(t, n, e) {
        var r = t.invertX(n[0][0]) - e[0][0],
          i = t.invertX(n[1][0]) - e[1][0],
          o = t.invertY(n[0][1]) - e[0][1],
          u = t.invertY(n[1][1]) - e[1][1];
        return t.translate(
          i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
          u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u)
        );
      }
      var TM = function () {
        var t,
          n,
          e = xM,
          r = wM,
          i = EM,
          o = NM,
          u = AM,
          a = [0, 1 / 0],
          c = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          f = 250,
          s = hp,
          l = lt("start", "zoom", "end"),
          h = 0;
        function d(t) {
          t.property("__zoom", MM)
            .on("wheel.zoom", m)
            .on("mousedown.zoom", x)
            .on("dblclick.zoom", w)
            .filter(u)
            .on("touchstart.zoom", M)
            .on("touchmove.zoom", N)
            .on("touchend.zoom touchcancel.zoom", A)
            .style("touch-action", "none")
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function p(t, n) {
          return (n = Math.max(a[0], Math.min(a[1], n))) === t.k
            ? t
            : new yM(n, t.x, t.y);
        }
        function v(t, n, e) {
          var r = n[0] - e[0] * t.k,
            i = n[1] - e[1] * t.k;
          return r === t.x && i === t.y ? t : new yM(t.k, r, i);
        }
        function y(t) {
          return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
        }
        function g(t, n, e) {
          t.on("start.zoom", function () {
            _(this, arguments).start();
          })
            .on("interrupt.zoom end.zoom", function () {
              _(this, arguments).end();
            })
            .tween("zoom", function () {
              var t = this,
                i = arguments,
                o = _(t, i),
                u = r.apply(t, i),
                a =
                  null == e ? y(u) : "function" == typeof e ? e.apply(t, i) : e,
                c = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
                f = t.__zoom,
                l = "function" == typeof n ? n.apply(t, i) : n,
                h = s(f.invert(a).concat(c / f.k), l.invert(a).concat(c / l.k));
              return function (t) {
                if (1 === t) t = l;
                else {
                  var n = h(t),
                    e = c / n[2];
                  t = new yM(e, a[0] - n[0] * e, a[1] - n[1] * e);
                }
                o.zoom(null, t);
              };
            });
        }
        function _(t, n, e) {
          return (!e && t.__zooming) || new b(t, n);
        }
        function b(t, n) {
          (this.that = t),
            (this.args = n),
            (this.active = 0),
            (this.extent = r.apply(t, n)),
            (this.taps = 0);
        }
        function m() {
          if (e.apply(this, arguments)) {
            var t = _(this, arguments),
              n = this.__zoom,
              r = Math.max(
                a[0],
                Math.min(a[1], n.k * Math.pow(2, o.apply(this, arguments)))
              ),
              u = Le(this);
            if (t.wheel)
              (t.mouse[0][0] === u[0] && t.mouse[0][1] === u[1]) ||
                (t.mouse[1] = n.invert((t.mouse[0] = u))),
                clearTimeout(t.wheel);
            else {
              if (n.k === r) return;
              (t.mouse = [u, n.invert(u)]), ar(this), t.start();
            }
            mM(),
              (t.wheel = setTimeout(f, 150)),
              t.zoom(
                "mouse",
                i(v(p(n, r), t.mouse[0], t.mouse[1]), t.extent, c)
              );
          }
          function f() {
            (t.wheel = null), t.end();
          }
        }
        function x() {
          if (!n && e.apply(this, arguments)) {
            var t = _(this, arguments, !0),
              r = Nn(sn.view)
                .on("mousemove.zoom", f, !0)
                .on("mouseup.zoom", s, !0),
              o = Le(this),
              u = sn.clientX,
              a = sn.clientY;
            Tn(sn.view),
              bM(),
              (t.mouse = [o, this.__zoom.invert(o)]),
              ar(this),
              t.start();
          }
          function f() {
            if ((mM(), !t.moved)) {
              var n = sn.clientX - u,
                e = sn.clientY - a;
              t.moved = n * n + e * e > h;
            }
            t.zoom(
              "mouse",
              i(
                v(t.that.__zoom, (t.mouse[0] = Le(t.that)), t.mouse[1]),
                t.extent,
                c
              )
            );
          }
          function s() {
            r.on("mousemove.zoom mouseup.zoom", null),
              Sn(sn.view, t.moved),
              mM(),
              t.end();
          }
        }
        function w() {
          if (e.apply(this, arguments)) {
            var t = this.__zoom,
              n = Le(this),
              o = t.invert(n),
              u = t.k * (sn.shiftKey ? 0.5 : 2),
              a = i(v(p(t, u), n, o), r.apply(this, arguments), c);
            mM(),
              f > 0
                ? Nn(this).transition().duration(f).call(g, a, n)
                : Nn(this).call(d.transform, a);
          }
        }
        function M() {
          if (e.apply(this, arguments)) {
            var n,
              r,
              i,
              o,
              u = sn.touches,
              a = u.length,
              c = _(this, arguments, sn.changedTouches.length === a);
            for (bM(), r = 0; r < a; ++r)
              (i = u[r]),
                (o = [
                  (o = ze(this, u, i.identifier)),
                  this.__zoom.invert(o),
                  i.identifier,
                ]),
                c.touch0
                  ? c.touch1 ||
                    c.touch0[2] === o[2] ||
                    ((c.touch1 = o), (c.taps = 0))
                  : ((c.touch0 = o), (n = !0), (c.taps = 1 + !!t));
            t && (t = clearTimeout(t)),
              n &&
                (c.taps < 2 &&
                  (t = setTimeout(function () {
                    t = null;
                  }, 500)),
                ar(this),
                c.start());
          }
        }
        function N() {
          if (this.__zooming) {
            var n,
              e,
              r,
              o,
              u = _(this, arguments),
              a = sn.changedTouches,
              f = a.length;
            for (
              mM(), t && (t = clearTimeout(t)), u.taps = 0, n = 0;
              n < f;
              ++n
            )
              (e = a[n]),
                (r = ze(this, a, e.identifier)),
                u.touch0 && u.touch0[2] === e.identifier
                  ? (u.touch0[0] = r)
                  : u.touch1 &&
                    u.touch1[2] === e.identifier &&
                    (u.touch1[0] = r);
            if (((e = u.that.__zoom), u.touch1)) {
              var s = u.touch0[0],
                l = u.touch0[1],
                h = u.touch1[0],
                d = u.touch1[1],
                y = (y = h[0] - s[0]) * y + (y = h[1] - s[1]) * y,
                g = (g = d[0] - l[0]) * g + (g = d[1] - l[1]) * g;
              (e = p(e, Math.sqrt(y / g))),
                (r = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2]),
                (o = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2]);
            } else {
              if (!u.touch0) return;
              (r = u.touch0[0]), (o = u.touch0[1]);
            }
            u.zoom("touch", i(v(e, r, o), u.extent, c));
          }
        }
        function A() {
          if (this.__zooming) {
            var t,
              e,
              r = _(this, arguments),
              i = sn.changedTouches,
              o = i.length;
            for (
              bM(),
                n && clearTimeout(n),
                n = setTimeout(function () {
                  n = null;
                }, 500),
                t = 0;
              t < o;
              ++t
            )
              (e = i[t]),
                r.touch0 && r.touch0[2] === e.identifier
                  ? delete r.touch0
                  : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
            if (
              (r.touch1 &&
                !r.touch0 &&
                ((r.touch0 = r.touch1), delete r.touch1),
              r.touch0)
            )
              r.touch0[1] = this.__zoom.invert(r.touch0[0]);
            else if ((r.end(), 2 === r.taps)) {
              var u = Nn(this).on("dblclick.zoom");
              u && u.apply(this, arguments);
            }
          }
        }
        return (
          (d.transform = function (t, n, e) {
            var r = t.selection ? t.selection() : t;
            r.property("__zoom", MM),
              t !== r
                ? g(t, n, e)
                : r.interrupt().each(function () {
                    _(this, arguments)
                      .start()
                      .zoom(
                        null,
                        "function" == typeof n ? n.apply(this, arguments) : n
                      )
                      .end();
                  });
          }),
          (d.scaleBy = function (t, n, e) {
            d.scaleTo(
              t,
              function () {
                var t = this.__zoom.k,
                  e = "function" == typeof n ? n.apply(this, arguments) : n;
                return t * e;
              },
              e
            );
          }),
          (d.scaleTo = function (t, n, e) {
            d.transform(
              t,
              function () {
                var t = r.apply(this, arguments),
                  o = this.__zoom,
                  u =
                    null == e
                      ? y(t)
                      : "function" == typeof e
                      ? e.apply(this, arguments)
                      : e,
                  a = o.invert(u),
                  f = "function" == typeof n ? n.apply(this, arguments) : n;
                return i(v(p(o, f), u, a), t, c);
              },
              e
            );
          }),
          (d.translateBy = function (t, n, e) {
            d.transform(t, function () {
              return i(
                this.__zoom.translate(
                  "function" == typeof n ? n.apply(this, arguments) : n,
                  "function" == typeof e ? e.apply(this, arguments) : e
                ),
                r.apply(this, arguments),
                c
              );
            });
          }),
          (d.translateTo = function (t, n, e, o) {
            d.transform(
              t,
              function () {
                var t = r.apply(this, arguments),
                  u = this.__zoom,
                  a =
                    null == o
                      ? y(t)
                      : "function" == typeof o
                      ? o.apply(this, arguments)
                      : o;
                return i(
                  gM
                    .translate(a[0], a[1])
                    .scale(u.k)
                    .translate(
                      "function" == typeof n ? -n.apply(this, arguments) : -n,
                      "function" == typeof e ? -e.apply(this, arguments) : -e
                    ),
                  t,
                  c
                );
              },
              o
            );
          }),
          (b.prototype = {
            start: function () {
              return (
                1 == ++this.active &&
                  ((this.that.__zooming = this), this.emit("start")),
                this
              );
            },
            zoom: function (t, n) {
              return (
                this.mouse &&
                  "mouse" !== t &&
                  (this.mouse[1] = n.invert(this.mouse[0])),
                this.touch0 &&
                  "touch" !== t &&
                  (this.touch0[1] = n.invert(this.touch0[0])),
                this.touch1 &&
                  "touch" !== t &&
                  (this.touch1[1] = n.invert(this.touch1[0])),
                (this.that.__zoom = n),
                this.emit("zoom"),
                this
              );
            },
            end: function () {
              return (
                0 == --this.active &&
                  (delete this.that.__zooming, this.emit("end")),
                this
              );
            },
            emit: function (t) {
              yn(new vM(d, t, this.that.__zoom), l.apply, l, [
                t,
                this.that,
                this.args,
              ]);
            },
          }),
          (d.wheelDelta = function (t) {
            return arguments.length
              ? ((o = "function" == typeof t ? t : pM(+t)), d)
              : o;
          }),
          (d.filter = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : pM(!!t)), d)
              : e;
          }),
          (d.touchable = function (t) {
            return arguments.length
              ? ((u = "function" == typeof t ? t : pM(!!t)), d)
              : u;
          }),
          (d.extent = function (t) {
            return arguments.length
              ? ((r =
                  "function" == typeof t
                    ? t
                    : pM([
                        [+t[0][0], +t[0][1]],
                        [+t[1][0], +t[1][1]],
                      ])),
                d)
              : r;
          }),
          (d.scaleExtent = function (t) {
            return arguments.length
              ? ((a[0] = +t[0]), (a[1] = +t[1]), d)
              : [a[0], a[1]];
          }),
          (d.translateExtent = function (t) {
            return arguments.length
              ? ((c[0][0] = +t[0][0]),
                (c[1][0] = +t[1][0]),
                (c[0][1] = +t[0][1]),
                (c[1][1] = +t[1][1]),
                d)
              : [
                  [c[0][0], c[0][1]],
                  [c[1][0], c[1][1]],
                ];
          }),
          (d.constrain = function (t) {
            return arguments.length ? ((i = t), d) : i;
          }),
          (d.duration = function (t) {
            return arguments.length ? ((f = +t), d) : f;
          }),
          (d.interpolate = function (t) {
            return arguments.length ? ((s = t), d) : s;
          }),
          (d.on = function () {
            var t = l.on.apply(l, arguments);
            return t === l ? d : t;
          }),
          (d.clickDistance = function (t) {
            return arguments.length ? ((h = (t = +t) * t), d) : Math.sqrt(h);
          }),
          d
        );
      };
    },
    ls82: function (t, n, e) {
      var r = (function (t) {
        "use strict";
        var n = Object.prototype,
          e = n.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          i = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          u = r.toStringTag || "@@toStringTag";
        function a(t, n, e, r) {
          var i = n && n.prototype instanceof s ? n : s,
            o = Object.create(i.prototype),
            u = new w(r || []);
          return (
            (o._invoke = (function (t, n, e) {
              var r = "suspendedStart";
              return function (i, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === i) throw o;
                  return N();
                }
                for (e.method = i, e.arg = o; ; ) {
                  var u = e.delegate;
                  if (u) {
                    var a = b(u, e);
                    if (a) {
                      if (a === f) continue;
                      return a;
                    }
                  }
                  if ("next" === e.method) e.sent = e._sent = e.arg;
                  else if ("throw" === e.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), e.arg);
                    e.dispatchException(e.arg);
                  } else "return" === e.method && e.abrupt("return", e.arg);
                  r = "executing";
                  var s = c(t, n, e);
                  if ("normal" === s.type) {
                    if (
                      ((r = e.done ? "completed" : "suspendedYield"),
                      s.arg === f)
                    )
                      continue;
                    return { value: s.arg, done: e.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (e.method = "throw"), (e.arg = s.arg));
                }
              };
            })(t, e, u)),
            o
          );
        }
        function c(t, n, e) {
          try {
            return { type: "normal", arg: t.call(n, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = a;
        var f = {};
        function s() {}
        function l() {}
        function h() {}
        var d = {};
        d[i] = function () {
          return this;
        };
        var p = Object.getPrototypeOf,
          v = p && p(p(M([])));
        v && v !== n && e.call(v, i) && (d = v);
        var y = (h.prototype = s.prototype = Object.create(d));
        function g(t) {
          ["next", "throw", "return"].forEach(function (n) {
            t[n] = function (t) {
              return this._invoke(n, t);
            };
          });
        }
        function _(t, n) {
          var r;
          this._invoke = function (i, o) {
            function u() {
              return new n(function (r, u) {
                !(function r(i, o, u, a) {
                  var f = c(t[i], t, o);
                  if ("throw" !== f.type) {
                    var s = f.arg,
                      l = s.value;
                    return l && "object" == typeof l && e.call(l, "__await")
                      ? n.resolve(l.__await).then(
                          function (t) {
                            r("next", t, u, a);
                          },
                          function (t) {
                            r("throw", t, u, a);
                          }
                        )
                      : n.resolve(l).then(
                          function (t) {
                            (s.value = t), u(s);
                          },
                          function (t) {
                            return r("throw", t, u, a);
                          }
                        );
                  }
                  a(f.arg);
                })(i, o, r, u);
              });
            }
            return (r = r ? r.then(u, u) : u());
          };
        }
        function b(t, n) {
          var e = t.iterator[n.method];
          if (void 0 === e) {
            if (((n.delegate = null), "throw" === n.method)) {
              if (
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = void 0),
                b(t, n),
                "throw" === n.method)
              )
                return f;
              (n.method = "throw"),
                (n.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var r = c(e, t.iterator, n.arg);
          if ("throw" === r.type)
            return (
              (n.method = "throw"), (n.arg = r.arg), (n.delegate = null), f
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((n[t.resultName] = i.value),
                (n.next = t.nextLoc),
                "return" !== n.method &&
                  ((n.method = "next"), (n.arg = void 0)),
                (n.delegate = null),
                f)
              : i
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              f);
        }
        function m(t) {
          var n = { tryLoc: t[0] };
          1 in t && (n.catchLoc = t[1]),
            2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
            this.tryEntries.push(n);
        }
        function x(t) {
          var n = t.completion || {};
          (n.type = "normal"), delete n.arg, (t.completion = n);
        }
        function w(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(m, this),
            this.reset(!0);
        }
        function M(t) {
          if (t) {
            var n = t[i];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function n() {
                  for (; ++r < t.length; )
                    if (e.call(t, r)) return (n.value = t[r]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (l.prototype = y.constructor = h),
          (h.constructor = l),
          (h[u] = l.displayName = "GeneratorFunction"),
          (t.isGeneratorFunction = function (t) {
            var n = "function" == typeof t && t.constructor;
            return (
              !!n &&
              (n === l || "GeneratorFunction" === (n.displayName || n.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, h)
                : ((t.__proto__ = h), u in t || (t[u] = "GeneratorFunction")),
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(_.prototype),
          (_.prototype[o] = function () {
            return this;
          }),
          (t.AsyncIterator = _),
          (t.async = function (n, e, r, i, o) {
            void 0 === o && (o = Promise);
            var u = new _(a(n, e, r, i), o);
            return t.isGeneratorFunction(e)
              ? u
              : u.next().then(function (t) {
                  return t.done ? t.value : u.next();
                });
          }),
          g(y),
          (y[u] = "Generator"),
          (y[i] = function () {
            return this;
          }),
          (y.toString = function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var n = [];
            for (var e in t) n.push(e);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = M),
          (w.prototype = {
            constructor: w,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    e.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function r(e, r) {
                return (
                  (u.type = "throw"),
                  (u.arg = t),
                  (n.next = e),
                  r && ((n.method = "next"), (n.arg = void 0)),
                  !!r
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  u = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var a = e.call(o, "catchLoc"),
                    c = e.call(o, "finallyLoc");
                  if (a && c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (a) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, n) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r];
                if (
                  i.tryLoc <= this.prev &&
                  e.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= n &&
                n <= o.finallyLoc &&
                (o = null);
              var u = o ? o.completion : {};
              return (
                (u.type = t),
                (u.arg = n),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(u)
              );
            },
            complete: function (t, n) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && n && (this.next = n),
                f
              );
            },
            finish: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.finallyLoc === t)
                  return this.complete(e.completion, e.afterLoc), x(e), f;
              }
            },
            catch: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.tryLoc === t) {
                  var r = e.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    x(e);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, e) {
              return (
                (this.delegate = { iterator: M(t), resultName: n, nextLoc: e }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = r;
      } catch (t) {
        Function("r", "regeneratorRuntime = r")(r);
      }
    },
    o0o1: function (t, n, e) {
      t.exports = e("ls82");
    },
    yXPU: function (t, n) {
      function e(t, n, e, r, i, o, u) {
        try {
          var a = t[o](u),
            c = a.value;
        } catch (t) {
          return void e(t);
        }
        a.done ? n(c) : Promise.resolve(c).then(r, i);
      }
      t.exports = function (t) {
        return function () {
          var n = this,
            r = arguments;
          return new Promise(function (i, o) {
            var u = t.apply(n, r);
            function a(t) {
              e(u, i, o, a, c, "next", t);
            }
            function c(t) {
              e(u, i, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      };
    },
  },
]);
