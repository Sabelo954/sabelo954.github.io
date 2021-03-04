(this.webpackJsonp = this.webpackJsonp || []).push([
  [4],
  {
    kLjC: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "configCharts", function () {
          return d;
        }),
        e.d(n, "configSvgz", function () {
          return u;
        }),
        e.d(n, "createDatasets", function () {
          return s;
        }),
        e.d(n, "createChart", function () {
          return p;
        }),
        e.d(n, "pcnt", function () {
          return h;
        }),
        e.d(n, "pcnt2", function () {
          return m;
        }),
        e.d(n, "findGender", function () {
          return w;
        }),
        e.d(n, "cma", function () {
          return f;
        }),
        e.d(n, "dlr", function () {
          return _;
        }),
        e.d(n, "zeronulls", function () {
          return y;
        }),
        e.d(n, "findEdu", function () {
          return g;
        }),
        e.d(n, "findAge", function () {
          return v;
        }),
        e.d(n, "indsList", function () {
          return A;
        }),
        e.d(n, "findIndustry", function () {
          return b;
        }),
        e.d(n, "find", function () {
          return C;
        }),
        e.d(n, "findEmpEdu", function () {
          return S;
        }),
        e.d(n, "findRace", function () {
          return E;
        }),
        e.d(n, "findEmp", function () {
          return I;
        }),
        e.d(n, "findVet", function () {
          return k;
        }),
        e.d(n, "findDisEmp", function () {
          return B;
        });
      var r = e("RIqP"),
        a = e.n(r),
        o = e("VphZ"),
        l = e("KTtF");
      function i(t, n) {
        var e;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (e = (function (t, n) {
              if (!t) return;
              if ("string" == typeof t) return c(t, n);
              var e = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === e && t.constructor && (e = t.constructor.name);
              if ("Map" === e || "Set" === e) return Array.from(t);
              if (
                "Arguments" === e ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
              )
                return c(t, n);
            })(t)) ||
            (n && t && "number" == typeof t.length)
          ) {
            e && (t = e);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          l = !0,
          i = !1;
        return {
          s: function () {
            e = t[Symbol.iterator]();
          },
          n: function () {
            var t = e.next();
            return (l = t.done), t;
          },
          e: function (t) {
            (i = !0), (o = t);
          },
          f: function () {
            try {
              l || null == e.return || e.return();
            } finally {
              if (i) throw o;
            }
          },
        };
      }
      function c(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
        return r;
      }
      var d = function (t) {
          t.map(function (t) {
            window["".concat(t[0])] = new l.chart(t[1], t[2]);
          });
        },
        u = function (t) {
          t.map(function (t) {
            window["".concat(t[0])] = l.newSvg(t[1], t[2], t[3]);
          });
        },
        s = function (t, n, e) {
          e.map(function (e) {
            Array.isArray(e)
              ? e.map(function (e) {
                  window["".concat(n).concat(e)] = l.filterData(t, "Time", [
                    e + "Q1",
                    e + "Q2",
                    e + "Q3",
                    e + "Q4",
                  ]);
                })
              : (window["".concat(n).concat(e)] = l.filterData(t, "Time", e));
          });
        },
        p = function (t) {
          t.map(function (t) {
            var n = t.chart;
            n.setBounds.apply(n, a()(t.bounds));
            var e = n.addCategoryAxis.apply(n, a()(t.categoryAxis));
            (t.xtitle && (e.title = t.xtitle),
            t.order && e.addOrderRule(a()(t.order)),
            t.legend) &&
              (n.addLegend("65%", "5%", "40%", "95%").fontSize = "1px");
            var r = n.addMeasureAxis.apply(n, a()(t.measureAxis));
            (r.title = t.ytitle), (r.tickFormat = o.format(t.tickFormat));
            (([
              "Workers receiving TANF benefits",
              "Workforce/Service in TANF",
              "Recipients amongst MD Workers",
            ].includes(t.ytitle)
              ? n.addSeries(t.series, l.plot.line)
              : n.addSeries(t.series, l.plot.bar)
            ).lineMarkers = !0),
              t.colors &&
                (Array.isArray(t.colors[0])
                  ? t.colors.map(function (t) {
                      return n.assignColor.apply(n, a()(t));
                    })
                  : t.colors && n.assignColor.apply(n, a()(t.colors))),
              n.draw();
          });
        },
        h = function (t) {
          return "N/A" == t || "S" == t
            ? t
            : (null == t) | ("--" == t)
            ? "--"
            : "%" != t.slice(t.length - 1)
            ? o.format(".1%")(1 * t)
            : o.format(".1%")(Number(0.01 * t.slice(0, -1)));
        },
        m = function (t) {
          return "N/A" == t || "S" == t
            ? t
            : (null == t) | ("--" == t)
            ? "--"
            : "%" != t.slice(t.length - 1)
            ? o.format(".1%")(0.01 * t)
            : o.format(".1%")(Number(0.01 * t.slice(0, -1)));
        },
        w = function (t, n) {
          var e = t.filter(function (t) {
            var e = t.Indicator_Status == ["Male", "Female"][n];
            return (e = e || t.Indicator_Value == ["Male", "Female"][n]);
          })[0];
          return (e = null == e ? "--" : e.Amount);
        },
        f = function (t) {
          return "N/A" == t || "S" == t
            ? t
            : (null == t) | ("--" == t)
            ? "--"
            : o.format(",.0f")(1 * t);
        },
        _ = function (t) {
          return "N/A" == t || "S" == t
            ? t
            : (null == t) | ("--" == t)
            ? "--"
            : o.format("$,.0f")(1 * t);
        },
        y = function (t) {
          var n,
            e = [],
            r = i(t);
          try {
            for (r.s(); !(n = r.n()).done; ) {
              var a = n.value;
              ("N/A" != a.Amount && "S" != a.Amount) || (a.Amount = 0),
                e.push(a);
            }
          } catch (t) {
            r.e(t);
          } finally {
            r.f();
          }
          return e;
        },
        g = function (t, n) {
          var e = [
              "Educational attainment not available (workers aged 24 or younger)",
              "Less than High school",
              "High school or equivalent, no college",
              "Some college or Associate degree",
              "Bachelor's degree or advanced degree",
            ],
            r = t.filter(function (t) {
              var r = t.Indicator_Value;
              return 0 == n
                ? (["NR", "N/A", "NA"].includes(r),
                  ["NR", "N/A", "NA"].includes(r) || r == e[n])
                : r == e[n];
            });
          return (r = null == (r = r[0]) ? "--" : r.Amount);
        },
        v = function (t, n) {
          var e = t.filter(function (t) {
            return (
              t.Indicator_Value ==
              [
                "14-18",
                "19-21",
                "22-24",
                "25-34",
                "35-44",
                "45-54",
                "55-64",
                "65-99",
              ][n]
            );
          })[0];
          return (e = null == e ? "--" : e.Amount);
        },
        A = [
          "Agriculture, Forestry, Fishing and Hunting",
          "Mining, Quarrying, and Oil and Gas Extraction",
          "Utilities",
          "Construction",
          "Manufacturing",
          "Wholesale Trade",
          "Retail Trade",
          "Transportation and Warehousing",
          "Information",
          "Finance and Insurance",
          "Real Estate and Rental and Leasing",
          "Professional, Scientific, and Technical Services",
          "Management of Companies and Enterprises",
          "Administrative and Support and Waste Management and Remediation Services",
          "Educational Services",
          "Health Care and Social Assistance",
          "Arts, Entertainment, and Recreation",
          "Accommodation and Food Services",
          "Other Services (except Public Administration)",
          "Public Administration",
        ],
        b = function (t, n) {
          var e = t.filter(function (t) {
            return t.Indicator_Value == A[n];
          })[0];
          return (e = null == e ? "--" : e.Amount);
        },
        C = function (t, n) {
          var e = t.filter(function (t) {
            return t.Time == ["2015", "2016", "2017", "2018", "2019"][n];
          })[0];
          return (e = null == e ? "--" : e.Amount);
        },
        S = function (t, n, e) {
          var r = [
              "Less than Highschool",
              "Highschool",
              "Some College",
              "Bachelor's or Higher",
            ][n],
            a = ["Employed", "Unemployed", "NIL"][e],
            o = t.filter(function (t) {
              return (t.Indicator_Status == r) & (t.Employment_Status == a);
            })[0];
          return (o = null == o ? "--" : o.Amount);
        },
        E = function (t, n) {
          var e = t.filter(function (t) {
            return (
              t.Indicator_Status == ["White", "Black", "Asian", "Hispanic"][n]
            );
          })[0];
          return (e = null == e ? "--" : e.Amount);
        },
        I = function (t, n) {
          var e = t.filter(function (t) {
            return (
              t.Employment_Status ==
              ["Unemployed", "Labor Force", "Employed"][n]
            );
          });
          return (e = null == (e = e[0]) ? "--" : e.Amount);
        },
        k = function (t, n) {
          var e = t.filter(function (t) {
            return t.Indicator_Status == ["Veteran", "Non Veteran"][n];
          })[0];
          return (e = null == e ? "--" : e.Amount);
        },
        B = function (t, n, e) {
          var r = t.filter(function (t) {
            return (
              t.Employment_Status ==
                ["Unemployed", "Labor Force", "Employed"][n] &&
              t.Indicator_Status == ["Disabled", "Non Disabled"][e]
            );
          });
          return (r = null == (r = r[0]) ? "--" : r.Amount);
        },
        L = "pop";
      (window.togNum1 = 0),
        (window.onresize = function () {
          return drawAll();
        }),
        (window.c_collapsables = [
          "pop",
          "empl_edu_gend",
          "empl_race_ethn",
          "empl_vet",
          "disabl_pov",
          "tanf",
          "snap",
          "empl_status",
        ]),
        (window.w_collapsables = [
          "collapse1",
          "collapse2",
          "collapse3",
          "collapse4",
          "collapse5",
        ]),
        (window.collapsables = md
          ? [].concat(a()(c_collapsables), a()(w_collapsables), [
              "collapse9",
              "collapse16",
              "collapse17",
              "collapse20",
              "collapse19",
            ])
          : wd
          ? w_collapsables
          : c_collapsables),
        (window.c_prints = [
          "pop_chart_print",
          "empl_edu_gend_chart_print",
          "empl_race_ethn_chart_print",
          "empl_vet_chart_print",
          "disabl_pov_chart_print",
          "tanf_chart_print",
          "empl_status_chart_print",
          "snap_chart_print",
        ]),
        (window.w_prints = [
          "Landing",
          "Print3",
          "Print4",
          "PrintFive",
          "Print6",
          "Print17",
        ]),
        (window.prints = md
          ? [].concat(a()(c_prints), a()(w_prints), [
              "Print11",
              "Print18",
              "Print19",
              "Print20",
              "Print21",
            ])
          : wd
          ? w_prints
          : c_prints),
        (window.c_charts = [
          "pop_chart",
          "empl_edu_gend_chart",
          "empl_race_ethn_chart",
          "empl_vet_chart",
          "disabl_pov_chart",
          "tanf_chart",
          "empl_status_chart",
          "snap_chart",
          "Landing",
        ]),
        (window.w_charts = [
          "Chart3",
          "Chart4",
          "ChartFive",
          "Chart6",
          "Chart17",
        ]),
        (window.charts = md
          ? [].concat(a()(c_charts), a()(w_charts), [
              "Chart11",
              "Chart18",
              "Chart19",
              "Chart20",
              "Chart21",
            ])
          : wd
          ? w_charts
          : c_charts),
        (window.stylem = function (t, n, e) {
          return t.forEach(function (t) {
            document.getElementById(t).style[n] = e;
          });
        }),
        (window.hideall = function (t) {
          return stylem(t, "display", "none");
        }),
        (window.showall = function (t) {
          return stylem(t, "display", "inline");
        }),
        (window.toggleTab = function (t, n) {
          hideall(collapsables),
            showall(t),
            (L = n),
            drawAll(),
            hideall(prints);
        }),
        (window.popchart = function () {
          return toggleTab(["collapse1", "collapse5"], 1);
        }),
        (window.educhart = function () {
          return toggleTab(["collapse2", "collapse5"], 2);
        }),
        (window.racechart = function () {
          return toggleTab(["collapse3", "collapse5"], 3);
        }),
        (window.vetchart = function () {
          return toggleTab(["collapse4", "collapse5"], 4);
        }),
        (window.sepchart = function () {
          return toggleTab(["collapse5", "collapse5"], 5);
        }),
        (window.drawAll = function () {
          (wd && !md) ||
            (pop_chart.draw(0, !0),
            mhhi_chart.draw(0, !0),
            empl_edu_chart.draw(0, !0),
            empl_edu_gend_chart.draw(0, !0),
            empl_race_ethn_chart.draw(0, !0),
            chart5.draw(0, !0),
            window.empl_vet_chart.draw(0, !0),
            emp_dis_chart.draw(0, !0),
            empl_status_chart.draw(0, !0),
            tanf_attainment_chart.draw(0, !0),
            tanf_rate_chart.draw(0, !0),
            tanf_data.draw(0, !0),
            emplStatusCounties.includes(CountyName) ||
              (window.work_exp_pov_chart.draw(0, !0),
              pwork_exp_pov_chart.draw(0, !0)),
            snap_chart.draw(0, !0),
            snap_chart2.draw(0, !0),
            ppop_chart.draw(0, !0),
            mhhi_chart_print.draw(0, !0),
            pempl_edu_chart.draw(0, !0),
            pempl_edu_gend_chart.draw(0, !0),
            pempl_race_ethn_chart.draw(0, !0),
            pchart5.draw(0, !0),
            empl_vet_print_chart.draw(0, !0),
            emp_dis_chart_print.draw(0, !0),
            pempl_status_chart.draw(0, !0),
            ptanf_attainment_chart.draw(0, !0),
            ptanf_rate_chart.draw(0, !0),
            ptanf_data.draw(0, !0),
            psnap_chart.draw(0, !0),
            psnap_chart2.draw(0, !0)),
            (wd || md) &&
              (window.wChart.draw(0, !0),
              avgChart.draw(0, !0),
              jc.draw(0, !0),
              newHireChart.draw(0, !0),
              turnChart.draw(0, !0),
              chart8.draw(0, !0),
              chart61.draw(0, !0),
              pwChart.draw(0, !0),
              pavgChart.draw(0, !0),
              pjc.draw(0, !0),
              pnewHireChart.draw(0, !0),
              pturnChart.draw(0, !0),
              pchart8.draw(0, !0),
              pchart61.draw(0, !0)),
            md &&
              (chart15.draw(0, !0),
              aprogChart.draw(0, !0),
              aNewChart.draw(0, !0),
              chart1.draw(0, !0),
              chart18.draw(0, !0));
        }),
        (window.printClick = function () {
          1 == L
            ? (popchart(),
              (document.getElementById("Chart3").style.display = "none"),
              (document.getElementById("Print3").style.display = "inline"),
              drawAll())
            : 2 == L
            ? (educhart(),
              (document.getElementById("Chart4").style.display = "none"),
              (document.getElementById("Print4").style.display = "inline"))
            : 3 == L
            ? (racechart(),
              (document.getElementById("ChartFive").style.display = "none"),
              (document.getElementById("PrintFive").style.display = "inline"))
            : 4 == L
            ? (vetchart(),
              (document.getElementById("Chart6").style.display = "none"),
              (document.getElementById("Print6").style.display = "inline"))
            : 5 == L
            ? (sepchart(),
              (document.getElementById("Chart17").style.display = "none"),
              (document.getElementById("Print17").style.display = "inline"))
            : "pop" == L
            ? (pop(), hideall(["pop_chart"]), showAll(["pop_chart_print"]))
            : "educhart" == L
            ? (educhart(),
              hideall(["empl_edu_gend_chart"]),
              showAll(["empl_edu_gend_chart_print"]))
            : "racechart" == L
            ? (racechart(),
              hideall(["empl_race_ethn_chart"]),
              showAll(["empl_race_ethn_chart_print"]))
            : "vetchart" == L
            ? (vetchart(),
              hideall(["empl_vet_chart"]),
              showAll(["empl_vet_chart_print"]))
            : "disbilities" == L
            ? (dischart(),
              hideall(["disabl_pov_chart"]),
              showAll(["disabl_pov_chart_print"]))
            : "tanf" == L
            ? (tanf(), hideall(["tanf_chart"]), showAll(["tanf_chart_print"]))
            : "empl_status" == L
            ? (empl_status(),
              hideall(["empl_status_chart"]),
              showAll(["empl_status_chart_print"]))
            : "tanf_attainment" == L &&
              (tanf_attainment(),
              hideall(["snap_chart_print"]),
              showAll(["snap_chart"])),
            drawAll(),
            window.print();
        }),
        (window.printAll = function () {
          showAll(collapsables),
            hideall(charts),
            showall(prints),
            drawAll(),
            window.print();
        }),
        (window.onafterprint = function () {
          hideall(collapsables),
            hideall(prints),
            showall(charts),
            showAll(["Landing"]);
        }),
        (window.onload = function () {
          (document.getElementById("dropdownMenu").style.display = "none"),
            (document.getElementById("dropdownMenuY").style.display = "none"),
            (document.getElementById("dropdownMenuQ").style.display = "none"),
            (document.getElementById("title").style.display = "none"),
            document.querySelectorAll("[data-lbl]").forEach(function (t) {
              t.addEventListener("click", function () {
                (L = t.dataset.lbl),
                  localStorage.setItem("Clicked", L),
                  (document.querySelector(
                    "#notalldataavailablewarning"
                  ).style.display = "none");
                var n = document.getElementById("title");
                n.style.display = "inline";
                document.querySelector("#dropdownMenu");
                var e = document.querySelector("#dropdownMenuY"),
                  r = document.querySelector("#dropdownMenuQ"),
                  o =
                    "undefined" != typeof countyLookup
                      ? "undefined" != typeof wdaLookup
                        ? [].concat(a()(countyLookup), a()(wdaLookup))
                        : countyLookup
                      : wdaLookup,
                  l = (o = md ? [].concat(a()(o), a()(mdLookup)) : o).filter(
                    function (t) {
                      return t.tab == L;
                    }
                  )[0];
                (n.innerHTML = l.lbl),
                  console.log({ whichTab: L }),
                  console.log({ viewing: localStorage.getItem("viewing") }),
                  console.log({ tabInfo: l });
                var i = !1,
                  c = l.dmy ? "data16" : "data16q4",
                  d = function (t) {
                    Array.from(t.children).map(function (n) {
                      var e = l.yearAvailable[n.value];
                      !!e &&
                      e.some(function (e) {
                        return (
                          t.value == n.value && (i = !0),
                          t.value != n.value && e && n.value,
                          !!e
                        );
                      })
                        ? (n.style.display = "inline")
                        : ((n.style.display = "none"),
                          console.log("nothing", n));
                    });
                  };
                l && l.dmy && d(e),
                  l && l.dmq && d(r),
                  console.log(
                    { currentYearSelectionAvailable: i },
                    { validAlternateYear: c }
                  ),
                  i ||
                    (console.log("Changing Quartr"),
                    l.dmy ? e.value : r.value,
                    document
                      .querySelector("option[value=".concat(c, "]"))
                      .click());
                var u = function (t, n, e) {
                  document.getElementById(yle.display = n[e]
                    ? "inline"
                    : "none")
                };
                u("dropdownMenu", l, "dm"),
                  u("dropdownMenuY", l, "dmy"),
                  u("dropdownMenuQ", l, "dmq"),
                  hideall(collapsables),
                  showall([L]),
                  hideall(prints),
                  drawAll(),
                  l.dmy && countyChartChange(),
                  l.dmq && wdaChartChange();
              }),
                t.removeAttribute("disabled");
            });
        });
    },
  },
]);