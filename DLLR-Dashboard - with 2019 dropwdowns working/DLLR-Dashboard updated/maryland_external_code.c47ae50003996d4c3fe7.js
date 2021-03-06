(this.webpackJsonp = this.webpackJsonp || []).push([
  [7, 4],
  {
    kLjC: function (t, a, n) {
      "use strict";
      n.r(a),
        n.d(a, "configCharts", function () {
          return c;
        }),
        n.d(a, "configSvgz", function () {
          return s;
        }),
        n.d(a, "createDatasets", function () {
          return u;
        }),
        n.d(a, "createChart", function () {
          return p;
        }),
        n.d(a, "pcnt", function () {
          return h;
        }),
        n.d(a, "pcnt2", function () {
          return w;
        }),
        n.d(a, "findGender", function () {
          return m;
        }),
        n.d(a, "cma", function () {
          return f;
        }),
        n.d(a, "dlr", function () {
          return g;
        }),
        n.d(a, "zeronulls", function () {
          return y;
        }),
        n.d(a, "findEdu", function () {
          return _;
        }),
        n.d(a, "findAge", function () {
          return A;
        }),
        n.d(a, "indsList", function () {
          return v;
        }),
        n.d(a, "findIndustry", function () {
          return C;
        }),
        n.d(a, "find", function () {
          return b;
        }),
        n.d(a, "findEmpEdu", function () {
          return S;
        }),
        n.d(a, "findRace", function () {
          return N;
        }),
        n.d(a, "findEmp", function () {
          return I;
        }),
        n.d(a, "findVet", function () {
          return T;
        }),
        n.d(a, "findDisEmp", function () {
          return M;
        });
      var e = n("RIqP"),
        r = n.n(e),
        o = n("VphZ"),
        i = n("KTtF");
      function d(t, a) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, a) {
              if (!t) return;
              if ("string" == typeof t) return l(t, a);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return l(t, a);
            })(t)) ||
            (a && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var e = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return e >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[e++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          i = !0,
          d = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (i = t.done), t;
          },
          e: function (t) {
            (d = !0), (o = t);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (d) throw o;
            }
          },
        };
      }
      function l(t, a) {
        (null == a || a > t.length) && (a = t.length);
        for (var n = 0, e = new Array(a); n < a; n++) e[n] = t[n];
        return e;
      }
      var c = function (t) {
          t.map(function (t) {
            window["".concat(t[0])] = new i.chart(t[1], t[2]);
          });
        },
        s = function (t) {
          t.map(function (t) {
            window["".concat(t[0])] = i.newSvg(t[1], t[2], t[3]);
          });
        },
        u = function (t, a, n) {
          n.map(function (n) {
            Array.isArray(n)
              ? n.map(function (n) {
                  window["".concat(a).concat(n)] = i.filterData(t, "Time", [
                    n + "Q1",
                    n + "Q2",
                    n + "Q3",
                    n + "Q4",
                  ]);
                })
              : (window["".concat(a).concat(n)] = i.filterData(t, "Time", n));
          });
        },
        p = function (t) {
          t.map(function (t) {
            var a = t.chart;
            a.setBounds.apply(a, r()(t.bounds));
            var n = a.addCategoryAxis.apply(a, r()(t.categoryAxis));
            (t.xtitle && (n.title = t.xtitle),
            t.order && n.addOrderRule(r()(t.order)),
            t.legend) &&
              (a.addLegend("65%", "5%", "40%", "95%").fontSize = "1px");
            var e = a.addMeasureAxis.apply(a, r()(t.measureAxis));
            (e.title = t.ytitle), (e.tickFormat = o.format(t.tickFormat));
            (([
              "Workers receiving TANF benefits",
              "Workforce/Service in TANF",
              "Recipients amongst MD Workers",
            ].includes(t.ytitle)
              ? a.addSeries(t.series, i.plot.line)
              : a.addSeries(t.series, i.plot.bar)
            ).lineMarkers = !0),
              t.colors &&
                (Array.isArray(t.colors[0])
                  ? t.colors.map(function (t) {
                      return a.assignColor.apply(a, r()(t));
                    })
                  : t.colors && a.assignColor.apply(a, r()(t.colors))),
              a.draw();
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
        w = function (t) {
          return "N/A" == t || "S" == t
            ? t
            : (null == t) | ("--" == t)
            ? "--"
            : "%" != t.slice(t.length - 1)
            ? o.format(".1%")(0.01 * t)
            : o.format(".1%")(Number(0.01 * t.slice(0, -1)));
        },
        m = function (t, a) {
          var n = t.filter(function (t) {
            var n = t.Indicator_Status == ["Male", "Female"][a];
            return (n = n || t.Indicator_Value == ["Male", "Female"][a]);
          })[0];
          return (n = null == n ? "--" : n.Amount);
        },
        f = function (t) {
          return "N/A" == t || "S" == t
            ? t
            : (null == t) | ("--" == t)
            ? "--"
            : o.format(",.0f")(1 * t);
        },
        g = function (t) {
          return "N/A" == t || "S" == t
            ? t
            : (null == t) | ("--" == t)
            ? "--"
            : o.format("$,.0f")(1 * t);
        },
        y = function (t) {
          var a,
            n = [],
            e = d(t);
          try {
            for (e.s(); !(a = e.n()).done; ) {
              var r = a.value;
              ("N/A" != r.Amount && "S" != r.Amount) || (r.Amount = 0),
                n.push(r);
            }
          } catch (t) {
            e.e(t);
          } finally {
            e.f();
          }
          return n;
        },
        _ = function (t, a) {
          var n = [
              "Educational attainment not available (workers aged 24 or younger)",
              "Less than High school",
              "High school or equivalent, no college",
              "Some college or Associate degree",
              "Bachelor's degree or advanced degree",
            ],
            e = t.filter(function (t) {
              var e = t.Indicator_Value;
              return 0 == a
                ? (["NR", "N/A", "NA"].includes(e),
                  ["NR", "N/A", "NA"].includes(e) || e == n[a])
                : e == n[a];
            });
          return (e = null == (e = e[0]) ? "--" : e.Amount);
        },
        A = function (t, a) {
          var n = t.filter(function (t) {
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
              ][a]
            );
          })[0];
          return (n = null == n ? "--" : n.Amount);
        },
        v = [
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
        C = function (t, a) {
          var n = t.filter(function (t) {
            return t.Indicator_Value == v[a];
          })[0];
          return (n = null == n ? "--" : n.Amount);
        },
        b = function (t, a) {
          var n = t.filter(function (t) {
            return t.Time == ["2015", "2016", "2017", "2018", "2019"][a];
          })[0];
          return (n = null == n ? "--" : n.Amount);
        },
        S = function (t, a, n) {
          var e = [
              "Less than Highschool",
              "Highschool",
              "Some College",
              "Bachelor's or Higher",
            ][a],
            r = ["Employed", "Unemployed", "NIL"][n],
            o = t.filter(function (t) {
              return (t.Indicator_Status == e) & (t.Employment_Status == r);
            })[0];
          return (o = null == o ? "--" : o.Amount);
        },
        N = function (t, a) {
          var n = t.filter(function (t) {
            return (
              t.Indicator_Status == ["White", "Black", "Asian", "Hispanic"][a]
            );
          })[0];
          return (n = null == n ? "--" : n.Amount);
        },
        I = function (t, a) {
          var n = t.filter(function (t) {
            return (
              t.Employment_Status ==
              ["Unemployed", "Labor Force", "Employed"][a]
            );
          });
          return (n = null == (n = n[0]) ? "--" : n.Amount);
        },
        T = function (t, a) {
          var n = t.filter(function (t) {
            return t.Indicator_Status == ["Veteran", "Non Veteran"][a];
          })[0];
          return (n = null == n ? "--" : n.Amount);
        },
        M = function (t, a, n) {
          var e = t.filter(function (t) {
            return (
              t.Employment_Status ==
                ["Unemployed", "Labor Force", "Employed"][a] &&
              t.Indicator_Status == ["Disabled", "Non Disabled"][n]
            );
          });
          return (e = null == (e = e[0]) ? "--" : e.Amount);
        },
        x = "pop";
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
          ? [].concat(r()(c_collapsables), r()(w_collapsables), [
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
          ? [].concat(r()(c_prints), r()(w_prints), [
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
          ? [].concat(r()(c_charts), r()(w_charts), [
              "Chart11",
              "Chart18",
              "Chart19",
              "Chart20",
              "Chart21",
            ])
          : wd
          ? w_charts
          : c_charts),
        (window.stylem = function (t, a, n) {
          return t.forEach(function (t) {
            document.getElementById(t).style[a] = n;
          });
        }),
        (window.hideall = function (t) {
          return stylem(t, "display", "none");
        }),
        (window.showall = function (t) {
          return stylem(t, "display", "inline");
        }),
        (window.toggleTab = function (t, a) {
          hideall(collapsables),
            showall(t),
            (x = a),
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
          1 == x
            ? (popchart(),
              (document.getElementById("Chart3").style.display = "none"),
              (document.getElementById("Print3").style.display = "inline"),
              drawAll())
            : 2 == x
            ? (educhart(),
              (document.getElementById("Chart4").style.display = "none"),
              (document.getElementById("Print4").style.display = "inline"))
            : 3 == x
            ? (racechart(),
              (document.getElementById("ChartFive").style.display = "none"),
              (document.getElementById("PrintFive").style.display = "inline"))
            : 4 == x
            ? (vetchart(),
              (document.getElementById("Chart6").style.display = "none"),
              (document.getElementById("Print6").style.display = "inline"))
            : 5 == x
            ? (sepchart(),
              (document.getElementById("Chart17").style.display = "none"),
              (document.getElementById("Print17").style.display = "inline"))
            : "pop" == x
            ? (pop(), hideall(["pop_chart"]), showAll(["pop_chart_print"]))
            : "educhart" == x
            ? (educhart(),
              hideall(["empl_edu_gend_chart"]),
              showAll(["empl_edu_gend_chart_print"]))
            : "racechart" == x
            ? (racechart(),
              hideall(["empl_race_ethn_chart"]),
              showAll(["empl_race_ethn_chart_print"]))
            : "vetchart" == x
            ? (vetchart(),
              hideall(["empl_vet_chart"]),
              showAll(["empl_vet_chart_print"]))
            : "disbilities" == x
            ? (dischart(),
              hideall(["disabl_pov_chart"]),
              showAll(["disabl_pov_chart_print"]))
            : "tanf" == x
            ? (tanf(), hideall(["tanf_chart"]), showAll(["tanf_chart_print"]))
            : "empl_status" == x
            ? (empl_status(),
              hideall(["empl_status_chart"]),
              showAll(["empl_status_chart_print"]))
            : "tanf_attainment" == x &&
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
                (x = t.dataset.lbl),
                  localStorage.setItem("Clicked", x),
                  (document.querySelector(
                    "#notalldataavailablewarning"
                  ).style.display = "none");
                var a = document.getElementById("title");
                a.style.display = "inline";
                document.querySelector("#dropdownMenu");
                var n = document.querySelector("#dropdownMenuY"),
                  e = document.querySelector("#dropdownMenuQ"),
                  o =
                    "undefined" != typeof countyLookup
                      ? "undefined" != typeof wdaLookup
                        ? [].concat(r()(countyLookup), r()(wdaLookup))
                        : countyLookup
                      : wdaLookup,
                  i = (o = md ? [].concat(r()(o), r()(mdLookup)) : o).filter(
                    function (t) {
                      return t.tab == x;
                    }
                  )[0];
                (a.innerHTML = i.lbl),
                  console.log({ whichTab: x }),
                  console.log({ viewing: localStorage.getItem("viewing") }),
                  console.log({ tabInfo: i });
                var d = !1,
                  l = i.dmy ? "data16" : "data16q4",
                  c = function (t) {
                    Array.from(t.children).map(function (a) {
                      var n = i.yearAvailable[a.value];
                      !!n &&
                      n.some(function (n) {
                        return (
                          t.value == a.value && (d = !0),
                          t.value != a.value && n && a.value,
                          !!n
                        );
                      })
                        ? (a.style.display = "inline")
                        : ((a.style.display = "none"),
                          console.log("nothing", a));
                    });
                  };
                i && i.dmy && c(n),
                  i && i.dmq && c(e),
                  console.log(
                    { currentYearSelectionAvailable: d },
                    { validAlternateYear: l }
                  ),
                  d ||
                    (console.log("Changing Quartr"),
                    i.dmy ? n.value : e.value,
                    document
                      .querySelector("option[value=".concat(l, "]"))
                      .click());
                var s = function (t, a, n) {
                  document.getElementById(t).style.display = a[n]
                    ? "inline"
                    : "none";
                };
                s("dropdownMenu", i, "dm"),
                  s("dropdownMenuY", i, "dmy"),
                  s("dropdownMenuQ", i, "dmq"),
                  hideall(collapsables),
                  showall([x]),
                  hideall(prints),
                  drawAll(),
                  i.dmy && countyChartChange(),
                  i.dmq && wdaChartChange();
              }),
                t.removeAttribute("disabled");
            });
        });
    },
    rObY: function (t, a, n) {
      "use strict";
      n.r(a);
      var e = n("o0o1"),
        r = n.n(e),
        o = n("yXPU"),
        i = n.n(o),
        d = n("VphZ"),
        l = n("KTtF"),
        c = n("kLjC");
      i()(
        r.a.mark(function t() {
          var a,
            n,
            e,
            o,
            i,
            s,
            u,
            p,
            h,
            w,
            m,
            f,
            g,
            y,
            _,
            A,
            v,
            C,
            b,
            S,
            N,
            I,
            T;
          return r.a.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    "./data/MarylandData.csv",
                    (t.next = 3),
                    d.csv("./data/MarylandData.csv")
                  );
                case 3:
                  (a = t.sent),
                    (window.mAppData = l.filterData(
                      l.filterData(a, "Indicator_Value", "Program Completers"),
                      "Time",
                      ["FY17", "FY18", "FY19"]
                    )),
                    console.log("mAppData", mAppData);
                    (document.getElementById(
                      "table11"
                    ).innerHTML = '\n\t<tr class="HeadRow" style="background-color: white;">\n\t  <th>Apprenticeship Program Completers in Maryland</th>\n\t  <td></td>\n\t</tr>\n\t<tr>\n\t  <th>2017</th>\n\t  <td>'
                      .concat(
                        mAppData[0].Amount,
                        "</td>\n\t</tr>\n\t<tr>\n\t  <th>2018</th>\n\t  <td>"
                      )
                      .concat(
                        mAppData[1].Amount,
                        "</td>\n\t</tr>\n\t<tr>\n\t  <th>2019</th>\n\t  <td>"
                      )
                      .concat(mAppData[2].Amount, "</td>\n\t</tr>\n\t")),
                    (n = l.newSvg("#Chart11", "100%", 400)),
                    (e = l.newSvg("#Print11", 750, 400)),
                    (window.chart15 = new l.chart(n, mAppData)),
                    chart15.setBounds("11%", "21%", "80%", "65%"),
                    ((o = chart15.addCategoryAxis("x", "Time")).title = " "),
                    o.addOrderRule(["FY17", "FY18"]),
                    ((i = chart15.addMeasureAxis("y", "Amount")).title =
                      "Totals"),
                    (i.tickFormat = ",.0f"),
                    (window.pchart15 = new l.chart(e, mAppData)),
                    pchart15.setBounds("11%", "21%", "80%", 250),
                    ((s = pchart15.addCategoryAxis("x", "Time")).title = " "),
                    s.addOrderRule(["FY17", "FY18"]),
                    ((u = pchart15.addMeasureAxis("y", "Amount")).title =
                      "Totals"),
                    (u.tickFormat = ",.0f"),
                    pchart15.addSeries("Indicator Value", l.plot.bar),
                    chart15.addSeries("Indicator Value", l.plot.bar),
                    chart15.draw(),
                    pchart15.draw(),
                    (window.aprog1 = l.filterData(
                      l.filterData(
                        a,
                        "Indicator",
                        "New Maryland Apprenticeship Programs"
                      ),
                      "Time",
                      "2016"
                    )),
                    (window.aprog2 = l.filterData(
                      l.filterData(
                        a,
                        "Indicator",
                        "New Maryland Apprenticeship Programs"
                      ),
                      "Time",
                      "2017"
                    )),
                    (window.aprog3 = l.filterData(
                      a,
                      "Indicator",
                      "New Maryland Apprenticeship Programs"
                    )),
                    (document.getElementById(
                      "table55"
                    ).innerHTML = '\n\t<thead>\n\t  <tr> \n\t    <th class="HeadRow" colspan="2">New Apprenticeship Programs</th> \n\t  </tr>\n\t  <tr class="HeadRow" style="background-color: white;">\n\t    <th style=\'text-align:center;\'>Year</th>\n\t  <th style=\'text-align:center;\'>New Programs</th>\n\t  </tr>\n\t</thead>\n\t<tbody>\n\t  <tr>\n\t    <td>2017</td>\n\t    <td> '
                      .concat(
                        aprog3[0].Amount,
                        "</td>\n\t  </tr>\n\t  <tr>\n\t    <td>2018</td>\n\t    <td> "
                      )
                      .concat(
                        aprog3[1].Amount,
                        '</td>\n\t  </tr>\n\t  <tr class="FootRow">\n\t    <td>2019</td>\n\t    <td> '
                      )
                      .concat(
                        aprog3[2].Amount,
                        "</td>\n\t  </tr>\n\t</tbody>\n\t"
                      )),
                    (p = l.newSvg("#Chart18", "100%", 400)),
                    (h = l.newSvg("#Print18", 750, 400)),
                    (window.aprogChart = new l.chart(p, aprog3)),
                    aprogChart.setBounds("9%", "12%", "80%", "60%"),
                    (aprogChart.addCategoryAxis("x", [
                      "Time",
                      "Indicator Value",
                    ]).title = "Year"),
                    ((w = aprogChart.addMeasureAxis("y", "Amount")).title =
                      "New Programs"),
                    (w.tickFormat = ",.0f"),
                    (window.paprogChart = new l.chart(h, aprog3)),
                    paprogChart.setBounds("10%", "12%", "50%", 300),
                    (paprogChart.addCategoryAxis("x", [
                      "Time",
                      "Indicator Value",
                    ]).title = "Year"),
                    (w.tickFormat = ",.0f"),
                    ((w = paprogChart.addMeasureAxis("y", "Amount")).title =
                      "New Programs"),
                    aprogChart
                      .addSeries("Indicator Value", l.plot.bar)
                      .addOrderRule(!0),
                    aprogChart.draw(),
                    paprogChart
                      .addSeries("Indicator Value", l.plot.bar)
                      .addOrderRule(!0),
                    paprogChart.draw(),
                    (window.aNew1 = l.filterData(
                      l.filterData(a, "Indicator", "Maryland Apprentices"),
                      "Time",
                      "2017"
                    )),
                    (window.aNew2 = l.filterData(
                      l.filterData(a, "Indicator", "Maryland Apprentices"),
                      "Time",
                      "2018"
                    )),
                    (window.aNew3 = l.filterData(
                      a,
                      "Indicator",
                      "Maryland Apprentices"
                    )),
                    (window.aNew4 = l.filterData(
                      l.filterData(a, "Indicator", "Maryland Apprentices"),
                      "Time",
                      "2019"
                    )),
                    (document.getElementById(
                      "table19"
                    ).innerHTML = '\n\t<thead>\n\t  <tr>\n\t    <th class="HeadRow" colspan="3" >New and Active Apprentices</th>\n\t  </tr>\n\t  <tr class="HeadRow" style="background-color: white;">\n\t    <th>Year</th>\n\t    <th>New</th>\n\t    <th>Active</th>\n\t  </tr>\n\t</thead>\n\t<tbody>\n\t  <tr>\n\t    <td>2017</td>\n\t    <td> '
                      .concat(aNew1[0].Amount, "</td>\n\t    <td> ")
                      .concat(
                        aNew1[1].Amount,
                        "</td>\n\t  </tr>\n\t  <tr>\n\t    <td>2018</td>\n\t    <td> "
                      )
                      .concat(aNew2[0].Amount, "</td>\n\t    <td> ")
                      .concat(
                        aNew2[1].Amount,
                        '</td>\n\t  </tr>\n\t  <tr class="FootRow">\n\t    <td>2019</td>\n\t    <td> '
                      )
                      .concat(aNew4[0].Amount, "</td>\n\t    <td> ")
                      .concat(
                        aNew4[1].Amount,
                        "</td>\n\t  </tr>\n\t</tbody>\n\t"
                      )),
                    (m = l.newSvg("#Chart19", "100%", 400)),
                    (f = l.newSvg("#Print19", 750, 400)),
                    (window.aNewChart = new l.chart(m, aNew3)),
                    aNewChart.setBounds("10%", "12%", "80%", "60%"),
                    aNewChart.addCategoryAxis("x", ["Time", "Indicator_Value"]),
                    ((w = aNewChart.addMeasureAxis("y", "Amount")).tickFormat =
                      ",.0f"),
                    (window.paNewChart = new l.chart(f, aNew3)),
                    paNewChart.setBounds("9%", "12%", "50%", "50%"),
                    paNewChart.addCategoryAxis("x", [
                      "Time",
                      "Indicator_Value",
                    ]),
                    ((w = paNewChart.addMeasureAxis("y", "Amount")).tickFormat =
                      ",.0f"),
                    aNewChart
                      .addSeries("Indicator_Value", l.plot.bar)
                      .addOrderRule(["New Apprentices", "Active Apprentices"]),
                    aNewChart.draw(),
                    paNewChart
                      .addSeries("Indicator Value", l.plot.bar)
                      .addOrderRule(!0),
                    paNewChart.draw(),
                    (g = l.filterData(a, "Time", ["2018", "2019", "2020"])),
                    (window.longTermLocation = l.filterData(
                      g,
                      "Indicator",
                      "Long Term Unemployed"
                    )),
                    (document.getElementById(
                      "table20"
                    ).innerHTML = '\n\t<tr class="HeadRow" style="background-color: white;">\n\t  <th> </th>\n\t  <th>2020</th>\n\t  <th>2019</th>\n\t  <th>2018</th>\n\t</tr>\n\t<tr class="FootRow">\n\t  <th>Maryland</th>\n\t  <td> '
                      .concat(longTermLocation[2].Amount, "</td>\n\t  <td> ")
                      .concat(longTermLocation[1].Amount, "</td>\n\t  <td> ")
                      .concat(
                        longTermLocation[0].Amount,
                        "</td>\n\t</tr>\n\t"
                      )),
                    (y = l.newSvg("#Chart20", "100%", 400)),
                    (_ = l.newSvg("#Print20", 750, 400)),
                    (window.chart1 = new l.chart(y, longTermLocation)),
                    chart1.setBounds("9%", "12%", "85%", "70%"),
                    (A = chart1.addCategoryAxis("x", ["Time", "Location"])),
                    ((v = chart1.addMeasureAxis("y", "Amount")).tickFormat =
                      ",.0f"),
                    (v.title = "Totals"),
                    (A.title = " "),
                    (window.pchart1 = new l.chart(_, longTermLocation)),
                    pchart1.setBounds("9%", "12%", "85%", 300),
                    (C = pchart1.addCategoryAxis("x", ["Time", "Location"])),
                    ((b = pchart1.addMeasureAxis("y", "Amount")).tickFormat =
                      ",.0f"),
                    (b.title = "Totals"),
                    (C.title = " "),
                    ((S = chart1.addSeries("Location", l.plot.line)).aggregate =
                      l.aggregateMethod.min),
                    (S.lineMarkers = !0),
                    chart1.addLegend("20%", "1%", "50%", "50%", "right"),
                    chart1.draw(),
                    ((N = pchart1.addSeries(
                      "Location",
                      l.plot.line
                    )).aggregate = l.aggregateMethod.min),
                    (N.lineMarkers = !0),
                    pchart1.addLegend("20%", "1%", "50%", "50%", "right"),
                    pchart1.draw(),
                    (window.SnapData2 = l.filterData(
                      a,
                      "Indicator",
                      "Service Participants in SNAP"
                    )),
                    (document.getElementById(
                      "table155"
                    ).innerHTML = '\n\t<tr class="HeadRow">\n\t  <th>Service Participants in SNAP</th>\n\t  <th></th>\n\t  <th>2016-Q3</th>\n\t  <th>2016-Q4</th>\n\t</tr>  \n\t<tr class="FootRow">\n\t  <td></td>\n\t  <td></td>\n\t  <td> '
                      .concat(
                        Object(c.pcnt)(SnapData2[0].Amount),
                        "</td>\n\t  <td> "
                      )
                      .concat(
                        Object(c.pcnt)(SnapData2[1].Amount),
                        "</td>\n\t</tr>\n\t"
                      )),
                    (I = l.newSvg("#Chart21", "100%", 400)),
                    (T = l.newSvg("#Print21", 750, 400)),
                    (window.chart18 = new l.chart(I, SnapData2)),
                    chart18.setBounds("10%", "12%", "80%", "60%"),
                    chart18.addCategoryAxis("x", "Time"),
                    (chart18.addMeasureAxis("y", "Amount").tickFormat = ",.2%"),
                    (window.pchart18 = new l.chart(T, SnapData2)),
                    pchart18.setBounds("15%", "12%", "60%", "60%"),
                    pchart18.addCategoryAxis("x", "Time"),
                    (pchart18.addMeasureAxis("y", "Amount").tickFormat =
                      ",.2%"),
                    chart18.addSeries("Indicator", l.plot.bar),
                    chart18.draw(),
                    pchart18.addSeries("Indicator", l.plot.bar),
                    pchart18.draw(),
                    (window.mdLookup = [
                      {
                        tab: "collapse9",
                        lbl: "Apprenticeship Completers",
                        dm: !1,
                        dmy: !1,
                        dmq: !1,
                        charts: [chart15],
                        pcharts: [pchart15],
                        svgName: "#Chart11",
                        data: {},
                      },
                      {
                        tab: "collapse16",
                        lbl: "New Apprentice Programs",
                        dm: !1,
                        dmy: !1,
                        dmq: !1,
                        charts: [aprogChart],
                        pcharts: [aprogChart],
                        svgName: "#Chart18",
                        data: {},
                      },
                      {
                        tab: "collapse17",
                        lbl: "New/Active Apprentice Programs",
                        dm: !1,
                        dmy: !1,
                        dmq: !1,
                        charts: [aNewChart],
                        pcharts: [aNewChart],
                        svgName: "#Chart19",
                        data: {},
                      },
                      {
                        tab: "collapse20",
                        lbl: "Long Term Unemployed",
                        dm: !1,
                        dmy: !1,
                        dmq: !1,
                        charts: [chart1],
                        pcharts: [pchart1],
                        svgName: "#Chart20",
                        data: {},
                      },
                      {
                        tab: "collapse19",
                        lbl: "Service Participants in SNAP",
                        dm: !1,
                        dmy: !1,
                        dmq: !1,
                        charts: [chart18],
                        pcharts: [pchart18],
                        svgName: "#Chart21",
                        data: {},
                      },
                    ]);
                case 125:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )();
    },
  },
]);
