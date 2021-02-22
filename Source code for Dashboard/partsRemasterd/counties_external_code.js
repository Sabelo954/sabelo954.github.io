import * as d3 from 'd3';
import * as dimple from 'dimple';

/*
 * Outline
 * 
 * 1 - Population
 * 2 - Demographics
 * 3 - Disability and Poverty
 * 4 - Tanf
 * 5 - Snap
*/
(async()=>{
    // https://github.com/PMSI-AlignAlytics/dimple/issues/265
    let createChart = (objarr)=>{
        objarr.map(obj=>{
            // Configure Chart
            let chart = obj.chart
            chart.setBounds(...obj.bounds)
            // Configure X Axis
            let xaxis = chart.addCategoryAxis(...obj.categoryAxis);
            if (obj.xtitle) {
                xaxis.title = obj.xtitle
            }
            if (obj.order) {
                xaxis.addOrderRule([...obj.order]);
            }
            // configure Y Axis
            let yaxis = chart.addMeasureAxis(...obj.measureAxis)
            yaxis.title = obj.ytitle
            yaxis.tickFormat = d3.format(obj.tickFormat)
            // Draw
            let arr = ["Workers receiving TANF benefits", "Workforce/Service in TANF", "Recipients amongst MD Workers"]
            var series = ''
            if (arr.includes(obj.ytitle)) {
                series = chart.addSeries(obj.series, dimple.plot.line);
            } else {
                series = chart.addSeries(obj.series, dimple.plot.bar);
            }
            series.lineMarkers = true;
            if (obj.colors) {
                if (Array.isArray(obj.colors[0])) {
                    obj.colors.map(colors=>chart.assignColor(...colors))
                } else if (obj.colors) {
                    chart.assignColor(...obj.colors)
                }
            }
            if (obj.legend) {
                chart.addLegend(...obj.legend)
            }
            chart.draw()
        }
        )
    }
    window.findEmp = (objArr,indx)=>{
        let returnThis = objArr.filter(obj=>{
            return obj['Employment_Status'] == ["Unemployed", "Labor Force", "Employed"][indx]
        }
        )
        returnThis = returnThis[0]
        returnThis = returnThis == undefined ? '--' : returnThis['Amount']
        return returnThis
    }

    window.findDisEmp = (objArr,indx1,indx2)=>{
        let returnThis = objArr.filter(obj=>{
            return obj['Employment_Status'] == ["Unemployed", "Labor Force", "Employed"][indx1] && obj['Indicator_Status'] == ["Disabled", "Non Disabled"][indx2]
        }
        )

        returnThis = returnThis[0]
        returnThis = returnThis == undefined ? '--' : returnThis['Amount']
        return returnThis
    }
    
    // Retrieve Data
    let url = CountyName2 == 'Maryland' ? './data/MarylandData.csv' : "./data/CountyData.csv"
    let data = await d3.csv(url)
    CountyName2 == 'Maryland' ? '' : data = dimple.filterData(data, "Location", CountyName2)
    //
    // Population and Median Household Income
    //

    // Filter Data
    let pop = dimple.filterData(data, "Time", ["2015", "2016", "2017", "2018", "2019"]);
    let mhhi = dimple.filterData(pop, "Indicator", "Median Household Income")
    pop = dimple.filterData(pop, "Indicator", "Total Population")

    // Display Table
    document.getElementById('pop_table').innerHTML = `
    <tr class="HeadRow" style="background-color: white;">
      <th>${CountyName4}:</th>
      <th>2015</th>
      <th>2016</th>
      <th>2017</th>
      <th>2018</th>
    </tr>
    <tr>
      <th>Population</th>
      <td>${cma(find(pop, 0))}</td>
      <td>${cma(find(pop, 1))}</td>
      <td>${cma(find(pop, 2))}</td>
      <td>${cma(find(pop, 3))}</td>
    </tr>
    <tr class="FootRow">
      <th>Median Household Income</th>
      <td>$${cma(find(mhhi, 0))}</td>
      <td>$${cma(find(mhhi, 1))}</td>
      <td>$${cma(find(mhhi, 2))}</td>
      <td>$${cma(find(mhhi, 3))}</td>
    </tr>
    `

    // Retrieve Elements
    var pop_svg = dimple.newSvg("#pop_chart", "100%", 400);
    var pop_chart_print = dimple.newSvg("#pop_chart_print", 750, 400);

    // Configure Chart
    window.pop_chart = new dimple.chart(pop_svg,pop);
    window.mhhi_chart = new dimple.chart(pop_svg,mhhi);
    window.ppop_chart = new dimple.chart(pop_chart_print,pop);
    window.mhhi_chart_print = new dimple.chart(pop_chart_print,mhhi);
    var orderRule = ["2015", "2016", "2017"]
    let m = ["y", "Amount"]
    var createThese = [{
        "chart": pop_chart,
        "bounds": ["11%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": 'Years',
        "order": orderRule,
        "measureAxis": m,
        "ytitle": "Total Population",
        "tickFormat": ',.0f',
        "series": "Indicator",
        "lineMarkers": true,
    }, {
        "chart": ppop_chart,
        "bounds": ["14%", "12%", "32%", 300],
        "categoryAxis": ["x", "Time"],
        "xtitle": 'Years',
        "order": orderRule,
        "measureAxis": m,
        "ytitle": "Total Population",
        "tickFormat": ',.0f',
        "series": "Indicator",
        "lineMarkers": true
    }, {
        "chart": mhhi_chart,
        "bounds": ["56%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": 'Years',
        "order": orderRule,
        "measureAxis": m,
        "ytitle": "Median Household Income",
        "tickFormat": '$,.0f',
        "series": "Indicator",
        "lineMarkers": true
    }, {
        "chart": mhhi_chart_print,
        "bounds": ["62%", "12%", "32%", 300],
        "categoryAxis": ["x", "Time"],
        "xtitle": 'Years',
        "order": orderRule,
        "measureAxis": m,
        "ytitle": "Median Household Income",
        "tickFormat": '$,.0f',
        "series": "Indicator",
        "lineMarkers": true
    }, ]
    createChart(createThese)

    //
    // empl edu gend
    //

    // Retrieve Elements
    var empl_edu_gend_svg = dimple.newSvg("#empl_edu_gend_chart", "100%", 400);
    var empl_edu_gend_chart_print = dimple.newSvg("#empl_edu_gend_chart_print", 750, 400);

    // Filter Data 
    let EduAttainment = dimple.filterData(data, "Indicator_Status", [
      "Less than Highschool", "Highschool", "Some College", "Bachelor's or Higher"
    ] )
    EduAttainment = dimple.filterData(EduAttainment, "Employment_Status", ["Unemployed", "NIL", "Employed"])
    window.EduAttainment18 = dimple.filterData(EduAttainment, "Time", "2018");
    window.EduAttainment17 = dimple.filterData(EduAttainment, "Time", "2017");
    window.EduAttainment16 = dimple.filterData(EduAttainment, "Time", "2016");
    window.EduAttainment15 = dimple.filterData(EduAttainment, "Time", "2015");

    let unempByGender = dimple.filterData(data, "Indicator_Status", ["Male", "Female"])
    unempByGender = dimple.filterData(unempByGender, "Indicator", "Unemployment By Gender")
    window.unempByGender18 = dimple.filterData(unempByGender, "Time", "2018")
    window.unempByGender17 = dimple.filterData(unempByGender, "Time", "2017")
    window.unempByGender16 = dimple.filterData(unempByGender, "Time", "2016")
    window.unempByGender15 = dimple.filterData(unempByGender, "Time", "2015")

    let findEmpEdu = (objArr,indx1,indx2)=>{
        let x1 = ["Less than Highschool", "Highschool", "Some College", "Bachelor's or Higher"][indx1]
        let x2 = ["Employed", "Unemployed", "NIL"][indx2]
        let returnThis = objArr.filter(obj=>{
            let status1 = obj['Indicator_Status'] == x1
            let status2 = obj['Employment_Status'] == x2
            return status1 & status2
        }
        )[0]
        returnThis = returnThis == undefined ? '--' : returnThis['Amount']
        return returnThis
    }

    // Create Tables
    let mdNoTD = CountyName == 'Maryland' ? '' : `
      <td></td>
      <td></td>
    `

    let mdunempByGenderlbl = CountyName == 'Maryland' ? '' : `
      <th>Male</th> 
      <th>Female</th> 
    `
    let mdunempByGender18 = CountyName == 'Maryland' ? '' : `
      <td>${cma(findGender(unempByGender18, 0))}</td> 
      <td>${cma(findGender(unempByGender18, 1))}</td> 
    `
    let mdunempByGender17 = CountyName == 'Maryland' ? '' : `
      <td>${cma(findGender(unempByGender17, 0))}</td> 
      <td>${cma(findGender(unempByGender17, 1))}</td> 
    `
    let mdunempByGender16 = CountyName == 'Maryland' ? '' : `
      <td>${cma(findGender(unempByGender16, 0))}</td> 
      <td>${cma(findGender(unempByGender16, 1))}</td> 
    `
    let mdunempByGender15 = CountyName == 'Maryland' ? '' : `
      <td>${cma(findGender(unempByGender15, 0))}</td> 
      <td>${cma(findGender(unempByGender15, 1))}</td> 
    `

    document.getElementById('empl_edu_gend_table').innerHTML = `
    <tr class="HeadRow" style="background-color: white;">
      <th>${CountyName4}: </th>
      <th>Less than High School Graduate</th>
      <th>High School Graduate (Includes Equivalency)</th>
      <th>Some College or Associates</th>
      <th>Bachelor's Degree or Higher</th>
      ${CountyName == 'Maryland' ? '' : '<th></th>'}
      ${mdunempByGenderlbl}
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2018</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      ${CountyName == 'Maryland' ? '' : '<th></th>'}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Employed</th>
      <td>${cma(findEmpEdu(EduAttainment18, 0, 0))}</td>
      <td>${cma(findEmpEdu(EduAttainment18, 1, 0))}</td>
      <td>${cma(findEmpEdu(EduAttainment18, 2, 0))}</td>
      <td>${cma(findEmpEdu(EduAttainment18, 3, 0))}</td>
      ${CountyName == 'Maryland' ? '' : `<th rowspan="3" style="border-style: solid; border-color: #5281B7;">Unemployment Rate</th>`}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${cma(findEmpEdu(EduAttainment18, 0, 1))}</td>
      <td>${cma(findEmpEdu(EduAttainment18, 1, 1))}</td>
      <td>${cma(findEmpEdu(EduAttainment18, 2, 1))}</td>
      <td>${cma(findEmpEdu(EduAttainment18, 3, 1))}</td>
      ${mdunempByGender18}
    </tr>
    <tr>
      <th>Not In Labor Force (NIL)</th>
      <td>${cma(findEmpEdu(EduAttainment18, 0, 2))}</td>
      <td>${cma(findEmpEdu(EduAttainment18, 1, 2))}</td>
      <td>${cma(findEmpEdu(EduAttainment18, 2, 2))}</td>
      <td>${cma(findEmpEdu(EduAttainment18, 3, 2))}</td>
      ${mdNoTD}
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2017</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      ${CountyName == 'Maryland' ? '' : '<th></th>'}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Employed</th>
      <td>${cma(findEmpEdu(EduAttainment17, 0, 0))}</td>
      <td>${cma(findEmpEdu(EduAttainment17, 1, 0))}</td>
      <td>${cma(findEmpEdu(EduAttainment17, 2, 0))}</td>
      <td>${cma(findEmpEdu(EduAttainment17, 3, 0))}</td>
      ${CountyName == 'Maryland' ? '' : `<th rowspan="3" style="border-style: solid; border-color: #5281B7;">Unemployment Rate</th>`}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${cma(findEmpEdu(EduAttainment17, 0, 1))}</td>
      <td>${cma(findEmpEdu(EduAttainment17, 1, 1))}</td>
      <td>${cma(findEmpEdu(EduAttainment17, 2, 1))}</td>
      <td>${cma(findEmpEdu(EduAttainment17, 3, 1))}</td>
      ${mdunempByGender17}
    </tr>
    <tr>
      <th>Not In Labor Force (NIL)</th>
      <td>${cma(findEmpEdu(EduAttainment17, 0, 2))}</td>
      <td>${cma(findEmpEdu(EduAttainment17, 1, 2))}</td>
      <td>${cma(findEmpEdu(EduAttainment17, 2, 2))}</td>
      <td>${cma(findEmpEdu(EduAttainment17, 3, 2))}</td>
      ${mdNoTD}
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2016: </th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      ${CountyName == 'Maryland' ? '' : '<th></th>'}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Employed</th>
      <td>${cma(findEmpEdu(EduAttainment16, 0, 0))}</td>
      <td>${cma(findEmpEdu(EduAttainment16, 1, 0))}</td>
      <td>${cma(findEmpEdu(EduAttainment16, 2, 0))}</td>
      <td>${cma(findEmpEdu(EduAttainment16, 3, 0))}</td>
      ${CountyName == 'Maryland' ? '' : `<th rowspan="3" style="border-style: solid; border-color: #5281B7;">Unemployment Rate</th>`}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${cma(findEmpEdu(EduAttainment16, 0, 1))}</td>
      <td>${cma(findEmpEdu(EduAttainment16, 1, 1))}</td>
      <td>${cma(findEmpEdu(EduAttainment16, 2, 1))}</td>
      <td>${cma(findEmpEdu(EduAttainment16, 3, 1))}</td>
      ${mdunempByGender16}
    </tr>
    <tr>
      <th>Not In Labor Force (NIL)</th>
      <td>${cma(findEmpEdu(EduAttainment16, 0, 2))}</td>
      <td>${cma(findEmpEdu(EduAttainment16, 1, 2))}</td>
      <td>${cma(findEmpEdu(EduAttainment16, 2, 2))}</td>
      <td>${cma(findEmpEdu(EduAttainment16, 3, 2))}</td>
      ${CountyName == 'Maryland' ? '' : '<th></th>'}
      ${mdNoTD}
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2015: </th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      ${CountyName == 'Maryland' ? '' : '<th></th>'}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Employed</th>
      <td>${cma(findEmpEdu(EduAttainment15, 0, 0))}</td>
      <td>${cma(findEmpEdu(EduAttainment15, 1, 0))}</td>
      <td>${cma(findEmpEdu(EduAttainment15, 2, 0))}</td>
      <td>${cma(findEmpEdu(EduAttainment15, 3, 0))}</td>
      ${CountyName == 'Maryland' ? '' : `<th rowspan="3" style="border-style: solid; border-color: #5281B7;">Unemployment Rate</th>`}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${cma(findEmpEdu(EduAttainment15, 0, 1))}</td>
      <td>${cma(findEmpEdu(EduAttainment15, 1, 1))}</td>
      <td>${cma(findEmpEdu(EduAttainment15, 2, 1))}</td>
      <td>${cma(findEmpEdu(EduAttainment15, 3, 1))}</td>
      ${mdunempByGender15}
    </tr>
    <tr>
      <th>Not In Labor Force (NIL)</th>
      <td>${cma(findEmpEdu(EduAttainment15, 0, 2))}</td>
      <td>${cma(findEmpEdu(EduAttainment15, 1, 2))}</td>
      <td>${cma(findEmpEdu(EduAttainment15, 2, 2))}</td>
      <td>${cma(findEmpEdu(EduAttainment15, 3, 2))}</td>
      ${CountyName == 'Maryland' ? '' : '<th></th>'}
      ${mdNoTD}
    </tr>
    `

    // Configure Chart
    window.empl_edu_chart = new dimple.chart(empl_edu_gend_svg,EduAttainment);
    window.empl_edu_gend_chart = new dimple.chart(empl_edu_gend_svg,unempByGender);
    window.pempl_edu_chart = new dimple.chart(empl_edu_gend_chart_print,EduAttainment);
    window.pempl_edu_gend_chart = new dimple.chart(empl_edu_gend_chart_print,unempByGender);
    orderRule = ["Less than Highschool", "Highschool", "Some College", "Bachelor's or Higher"]

    createThese = [{
        "chart": empl_edu_chart,
        "bounds": ["11%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Employment_Status"],
        "xtitle": "Employment Status",
        "order": orderRule,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Totals",
        "tickFormat": ',',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": false

    }, {
        "chart": pempl_edu_chart,
        "bounds": ["14%", "12%", "32%", 250],
        "categoryAxis": ["x", "Employment_Status"],
        "xtitle": 'Employment Status',
        "order": orderRule,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Totals",
        "tickFormat": ',',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": false
    }, {
        "chart": empl_edu_gend_chart,
        "bounds": ["58%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": 'Gender',
        "order": orderRule,
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": "Unemployment Rate",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["Male", "#3366ff", "black", 0.7], ["Female", "pink", "black", 0.7]]

    }, {
        "chart": pempl_edu_gend_chart,
        "bounds": ["62%", "12%", "32%", 300],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": 'Gender',
        "order": orderRule,
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": "Unemployment Rate",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["Male", "#3366ff", "black", 0.7], ["Female", "pink", "black", 0.7]]
    }, ]
    createChart(createThese)

    //
    // empl_race_ethn
    //

    // Retrieve Elements
    var empl_race_ethn_svg = dimple.newSvg("#empl_race_ethn_chart", "100%", 400);
    var empl_race_ethn_chart_print = dimple.newSvg("#empl_race_ethn_chart_print", 750, 400);

    // Filter Data
    window.raceData = dimple.filterData(data, "Indicator", "Unemployment By Race")
    raceData = dimple.filterData(raceData, "Indicator_Status", ["White", "Black", "Asian", "Hispanic"]);
    window.raceData15 = dimple.filterData(raceData, "Time", "2015")
    window.raceData16 = dimple.filterData(raceData, "Time", "2016")
    window.raceData17 = dimple.filterData(raceData, "Time", "2017")
    window.raceData18 = dimple.filterData(raceData, "Time", "2018")

    window.ethData = dimple.filterData(data, "Indicator", "Unemployment By Race")
    ethData = dimple.filterData(ethData, "Indicator_Status", ["White", "Hispanic"]);
    window.ethData15 = dimple.filterData(ethData, "Time", "2015")
    window.ethData16 = dimple.filterData(ethData, "Time", "2016")
    window.ethData17 = dimple.filterData(ethData, "Time", "2017")
    window.ethData18 = dimple.filterData(ethData, "Time", "2018")

    // Config Chart
    window.empl_race_ethn_chart = new dimple.chart(empl_race_ethn_svg,raceData);
    window.chart5 = new dimple.chart(empl_race_ethn_svg,ethData);
    window.pchart5 = new dimple.chart(empl_race_ethn_chart_print,ethData);
    window.pempl_race_ethn_chart = new dimple.chart(empl_race_ethn_chart_print,raceData);

    let findRace = (objArr,indx)=>{
        let returnThis = objArr.filter(obj=>{
            return obj['Indicator_Status'] == ["White", "Black", "Asian", "Hispanic"][indx]
        }
        )[0]
        returnThis = returnThis == undefined ? '--' : returnThis['Amount']
        return returnThis
    }

    document.getElementById('empl_race_ethn_table').innerHTML = `
        <tr class="HeadRow" style="background-color: white;">
          <th>${CountyName4}:</th>
          <th>White</th>
          <th>Black</th>
          <th>Asian</th>
          <th>Hispanic or Latino <br> (Any Race)</th>
        </tr>
        <tr class="HeadRow">
          <th>2018</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr >
          <th>Unemployment Rate</th>
          <td>${pcnt2(findRace(raceData18, 0))}</td>
          <td>${pcnt2(findRace(raceData18, 1))}</td>
          <td>${pcnt2(findRace(raceData18, 2))}</td>
          <td>${pcnt2(findRace(raceData18, 3))}</td>
        </tr>
        <tr class="HeadRow">
          <th>2017</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr >
          <th>Unemployment Rate</th>
          <td>${pcnt2(findRace(raceData17, 0))}</td>
          <td>${pcnt2(findRace(raceData17, 1))}</td>
          <td>${pcnt2(findRace(raceData17, 2))}</td>
          <td>${pcnt2(findRace(raceData17, 3))}</td>
        </tr>
        <tr class="HeadRow">
          <th>2016
          </th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr class="FootRow">
          <th>Unemployment Rate</th>
          <td>${pcnt2(findRace(raceData16, 0))}</td>
          <td>${pcnt2(findRace(raceData16, 1))}</td>
          <td>${pcnt2(findRace(raceData16, 2))}</td>
          <td>${pcnt2(findRace(raceData16, 3))}</td>
        </tr>
        <tr class="HeadRow">
          <th>2015
          </th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr class="FootRow">
          <th>Unemployment Rate</th>
          <td>${pcnt2(findRace(raceData15, 0))}</td>
          <td>${pcnt2(findRace(raceData15, 1))}</td>
          <td>${pcnt2(findRace(raceData15, 2))}</td>
          <td>${pcnt2(findRace(raceData15, 3))}</td>
        </tr>
    `

    createThese = [{
        "chart": empl_race_ethn_chart,
        "bounds": ["11%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": " ",
        "order": ["White", "Black", "Asian", "Hispanic"],
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": "Unemployment Rate",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["Black", "#ff8566", "black", 0.7], ["White", "#99ccff", "black", 0.7], ["Asian", "#4dffa6", "black", 0.7], ["Hispanic", "#a366ff", "black", 0.7]]
    }, {
        "chart": chart5,
        "bounds": ["58%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": " ",
        "order": ["White", "Hispanic"],
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": "Unemployment Rate",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["White", "#99ccff", "black", .7], ["Hispanic", "#a366ff", "black", 0.7]]
    }, {
        "chart": pchart5,
        "bounds": ["62%", "12%", "32%", 300],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": " ",
        "order": ["White", "Hispanic"],
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": " ",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["White", "#99ccff", "black", 0.7], ["Hispanic", "#a366ff", "black", 0.7]]
    }, {
        "chart": pempl_race_ethn_chart,
        "bounds": ["14%", "12%", "32%", 250],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": " ",
        "order": ["White", "Black", "Asian", "Hispanic"],
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": " ",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["Black", "#ff8566", "black", 0.7], ["White", "#99ccff", "black", 0.7], ["Asian", "#4dffa6", "black", 0.7], ["Hispanic", "#a366ff", "black", 0.7]]
    }]
    createChart(createThese)

    //
    // empl_vet
    //

    // Retrieve Elements
    var empl_vet_svg = dimple.newSvg("#empl_vet_chart", "100%", 400);
    var empl_vet_print_svg = dimple.newSvg("#empl_vet_chart_print", 750, 400);

    // Filter Data
    let vetData = dimple.filterData(data, "Indicator", "Unemployment By Veteran Status")
    window.vetData15 = dimple.filterData(vetData, "Time", "2015");
    window.vetData16 = dimple.filterData(vetData, "Time", "2016");
    window.vetData17 = dimple.filterData(vetData, "Time", "2017")
    window.vetData18 = dimple.filterData(vetData, "Time", "2018");

    // Create Chart
    window.empl_vet_chart = new dimple.chart(empl_vet_svg,vetData);
    window.empl_vet_print_chart = new dimple.chart(empl_vet_print_svg,vetData);

    let findVet = (objArr,indx)=>{
        let returnThis = objArr.filter(obj=>{
            return obj['Indicator_Status'] == ["Veteran", "Non Veteran"][indx]
        }
        )[0]
        returnThis = returnThis == undefined ? '--' : returnThis['Amount']
        return returnThis
    }

    document.getElementById('empl_vet_table').innerHTML = `
        <tr class="HeadRow" style="background-color: white;">
          <th>${CountyName4}:</th>
          <th>Veteran</th>
          <th>Non Veteran</th>
        </tr>
        <tr class="HeadRow">
          <th>2018</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>Unemployment Rate</th>
          <td>${pcnt2(findVet(vetData18, 0))}</td>
          <td>${pcnt2(findVet(vetData18, 1))}</td>
        </tr>
        <tr class="HeadRow">
          <th>2017</th>
          <th></th>
          <th></th>
        </tr>
        <tr class="FootRow">
          <th>Unemployment Rate</th>
          <td>${pcnt2(findVet(vetData17, 0))}</td>
          <td>${pcnt2(findVet(vetData17, 1))}</td>
        </tr>
        <tr class="HeadRow">
          <th>2016</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>Unemployment Rate</th>
          <td>${pcnt2(findVet(vetData16, 0))}</td>
          <td>${pcnt2(findVet(vetData16, 1))}</td>
        </tr>
        <tr class="HeadRow">
          <th>2015</th>
          <th></th>
          <th></th>
        </tr>
        <tr class="FootRow">
          <th>Unemployment Rate</th>
          <td>${pcnt2(findVet(vetData15, 0))}</td>
          <td>${pcnt2(findVet(vetData15, 1))}</td>
        </tr>
    `

    // Configure Charts
    createThese = [{
        "chart": empl_vet_chart,
        "bounds": ["9%", "12%", "80%", "65%"],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": " ",
        "order": ["Veteran", "Non Veteran"],
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": "Unemployment Rate",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["Veteran", "#248f24", "black", 0.7], ["Non Veteran", "#33cccc", "black", 0.7]]
    }, {
        "chart": empl_vet_print_chart,
        "bounds": ["13%", "12%", "80%", "65%"],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": " ",
        "order": ["Veteran", "Non Veteran"],
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": "Unemployment Rate",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["Veteran", "#248f24", "black", 0.7], ["Non Veteran", "#33cccc", "black", 0.7]]
    }]
    createChart(createThese)

    //
    //Chart 6 - QCEW  - Disablity and Povery
    //

    // Retrieve Elements
    var disabl_pov_svg = dimple.newSvg("#disabl_pov_chart", "100%", 400);
    var disabl_pov_chart_print = dimple.newSvg("#disabl_pov_chart_print", 750, 400);

    // Filter Data
    let povRate = dimple.filterData(data, "Indicator", "Employment Status By Poverty Status")
    povRate = dimple.filterData(povRate, "Employment_Status", ["Unemployed", "Labor Force", "Employed"])
    povRate = dimple.filterData(povRate, "Indicator_Status", ["Below Poverty"])
    window.povRate18 = dimple.filterData(povRate, "Time", "2018");
    window.povRate17 = dimple.filterData(povRate, "Time", "2017");
    window.povRate16 = dimple.filterData(povRate, "Time", "2016");
    window.povRate15 = dimple.filterData(povRate, "Time", "2015");

    let disAttainment1 = dimple.filterData(data, "Indicator", "Employment Status By Disability Status")
    disAttainment1 = dimple.filterData(disAttainment1, "Employment_Status", ["Unemployed", "Labor Force", "Employed"])
    window.disAttainment18 = dimple.filterData(disAttainment1, "Time", "2018");
    window.disAttainment17 = dimple.filterData(disAttainment1, "Time", "2017");
    window.disAttainment16 = dimple.filterData(disAttainment1, "Time", "2016");
    window.disAttainment15 = dimple.filterData(disAttainment1, "Time", ["2008-2011", "2015"]);


    // Config Chart
    window.pempl_status_chart = new dimple.chart(disabl_pov_chart_print,povRate);
    window.empl_status_chart = new dimple.chart(disabl_pov_svg,povRate);

    window.emp_dis_chart_print = new dimple.chart(disabl_pov_chart_print,disAttainment18);
    window.emp_dis_chart = new dimple.chart(disabl_pov_svg,disAttainment18);

    document.getElementById('disabl_pov_table').innerHTML = `
    <tr class="HeadRow" style="background-color: white;">
      <th>${CountyName4}: </th>
      <th>Disabled Individuals</th>
      <th>Individuals without Disabilities</th>
      <th></th>
      <th>Income in the past 12 months below poverty level</th>
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2018</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <th>Labor Force</th>
      <td>${cma(findDisEmp(disAttainment18, 1, 0))}</td>
      <td>${cma(findDisEmp(disAttainment18, 1, 1))}</td>
      <td></td>
      <td>${cma(findEmp(povRate18, 1))}</td>
    </tr>
    <tr>
      <th>Employed</th>
      <td>${cma(findDisEmp(disAttainment18, 2, 0))}</td>
      <td>${cma(findDisEmp(disAttainment18, 2, 1))}</td>
      <td></td>
      <td>${cma(findEmp(povRate18, 2))}</td>
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${cma(findDisEmp(disAttainment18, 0, 0))}</td>
      <td>${cma(findDisEmp(disAttainment18, 0, 1))}</td>
      <td ></td>
      <td>${cma(findEmp(povRate18, 0))}</td>
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2017</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <th>Labor Force</th>
      <td>${cma(findDisEmp(disAttainment17, 1, 0))}</td>
      <td>${cma(findDisEmp(disAttainment17, 1, 1))}</td>
      <td></td>
      <td>${cma(findEmp(povRate17, 1))}</td>
    </tr>
    <tr>
      <th>Employed</th>
      <td>${cma(findDisEmp(disAttainment17, 2, 0))}</td>
      <td>${cma(findDisEmp(disAttainment17, 2, 1))}</td>
      <td></td>
      <td>${cma(findEmp(povRate17, 2))}</td>
    </tr>
    <tr class="FootRow">
      <th>Unemployed</th>
      <td>${cma(findDisEmp(disAttainment17, 0, 0))}</td>
      <td>${cma(findDisEmp(disAttainment17, 0, 1))}</td>
      <td></td>
      <td>${cma(findEmp(povRate17, 0))}</td>
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2016</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <th>Labor Force</th>
      <td>${cma(findDisEmp(disAttainment16, 1, 0))}</td>
      <td>${cma(findDisEmp(disAttainment16, 1, 1))}</td>
      <td></td>
      <td>${cma(findEmp(povRate16, 1))}</td>
    </tr>
    <tr>
      <th>Employed</th>
      <td>${cma(findDisEmp(disAttainment16, 2, 0))}</td>
      <td>${cma(findDisEmp(disAttainment16, 2, 1))}</td>
      <td></td>
      <td>${cma(findEmp(povRate16, 2))}</td>
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${cma(findDisEmp(disAttainment16, 0, 0))}</td>
      <td>${cma(findDisEmp(disAttainment16, 0, 1))}</td>
      <td ></td>
      <td>${cma(findEmp(povRate16, 0))}</td>
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2015</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <th>Labor Force</th>
      <td>${cma(findDisEmp(disAttainment15, 1, 0))}</td>
      <td>${cma(findDisEmp(disAttainment15, 1, 1))}</td>
      <td></td>
      <td>${cma(findEmp(povRate15, 1))}</td>
    </tr>
    <tr>
      <th>Employed</th>
      <td>${cma(findDisEmp(disAttainment15, 2, 0))}</td>
      <td>${cma(findDisEmp(disAttainment15, 2, 1))}</td>
      <td></td>
      <td>${cma(findEmp(povRate15, 2))}</td>
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${cma(findDisEmp(disAttainment15, 0, 0))}</td>
      <td>${cma(findDisEmp(disAttainment15, 0, 1))}</td>
      <td ></td>
      <td>${cma(findEmp(povRate15, 0))}</td>
    </tr>
    `

    createThese = [{
        "chart": emp_dis_chart,
        "bounds": ["8%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Employment_Status"],
        "xtitle": "Employment Status",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Disability Status",
        "tickFormat": ',.0f',
        "series": "Indicator_Status",
        "lineMarkers": true,
        "lineWeight": 0,
        "colors": false
    }, {
        "chart": emp_dis_chart_print,
        "bounds": ["8%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Employment_Status"],
        "xtitle": "Employment Status",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Disability Status",
        "tickFormat": ',.0f',
        "series": "Indicator_Status",
        "lineMarkers": true,
        "lineWeight": 0,
        "colors": false
    }, {
        "chart": pempl_status_chart,
        "bounds": ["58%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Employment_Status"],
        "xtitle": "Employment Status",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Povery Status",
        "tickFormat": ',.0f',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": false
    }, {
        "chart": empl_status_chart,
        "bounds": ["58%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Employment_Status"],
        "xtitle": "Employment Status",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Povery Status",
        "tickFormat": ',.0f',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": false
    }]
    createChart(createThese)

    //
    // TANF
    //

    // Retrieve Elements
    var tanf_svg = dimple.newSvg("#tanf_chart", "100%", 400);
    var tanf_chart_print = dimple.newSvg("#tanf_chart_print", 750, 400);

    let tanfAttainment = dimple.filterData(data, "Indicator", "TANF Workers")
    window.tanfAttainment15 = dimple.filterData(tanfAttainment, "Time", ["2015Q1", "2015Q2", "2015Q3", "2015Q4"]);
    window.tanfAttainment16 = dimple.filterData(tanfAttainment, "Time", ["2016Q1", "2016Q2", "2016Q3", "2016Q4"]);
    window.tanfAttainment17 = dimple.filterData(tanfAttainment, "Time", ["2017Q1", "2017Q2", "2017Q3", "2017Q4"]);
    window.tanfAttainment18 = dimple.filterData(tanfAttainment, "Time", ["2018Q1", "2018Q2", "2018Q3", "2018Q4"]);
    window.tanfAttainment19 = dimple.filterData(tanfAttainment, "Time", ["2019Q1", "2019Q2"]);

    let tanfData = dimple.filterData(data, "Indicator", "TANF Participants in Workforce Service ")
    window.tanfData15 = dimple.filterData(tanfData, "Time", ["2015Q1", "2015Q2", "2015Q3", "2015Q4"]);
    window.tanfData16 = dimple.filterData(tanfData, "Time", ["2016Q1", "2016Q2", "2016Q3", "2016Q4"]);
    window.tanfData17 = dimple.filterData(tanfData, "Time", ["2017Q1", "2017Q2", "2017Q3", "2017Q4"]);
    window.tanfData18 = dimple.filterData(tanfData, "Time", ["2018Q1", "2018Q2", "2018Q3", "2018Q4"]);
    window.tanfData19 = dimple.filterData(tanfData, "Time", ["2019Q1", "2019Q2"]);

    let tanfRate = dimple.filterData(data, "Indicator", "Percent of Workforce Service participants in TANF (%)")
    window.tanfRate15 = dimple.filterData(tanfRate, "Time", ["2015Q1", "2015Q2", "2015Q3", "2015Q4"]);
    window.tanfRate16 = dimple.filterData(tanfRate, "Time", ["2016Q1", "2016Q2", "2016Q3", "2016Q4"]);
    window.tanfRate17 = dimple.filterData(tanfRate, "Time", ["2017Q1", "2017Q2", "2017Q3", "2017Q4"]);
    window.tanfRate18 = dimple.filterData(tanfRate, "Time", ["2018Q1", "2018Q2", "2018Q3", "2018Q4"]);
    window.tanfRate19 = dimple.filterData(tanfRate, "Time", ["2019Q1", "2019Q2"]);

    let tanfPerc = dimple.filterData(data, "Indicator", "Percent of Workers in TANF (%)")
    window.tanfPerc15 = dimple.filterData(tanfPerc, "Time", ["2015Q1", "2015Q2", "2015Q3", "2015Q4"]);
    window.tanfPerc16 = dimple.filterData(tanfPerc, "Time", ["2016Q1", "2016Q2", "2016Q3", "2016Q4"]);
    window.tanfPerc17 = dimple.filterData(tanfPerc, "Time", ["2017Q1", "2017Q2", "2017Q3", "2017Q4"]);
    window.tanfPerc18 = dimple.filterData(tanfPerc, "Time", ["2018Q1", "2018Q2", "2018Q3", "2018Q4"]);
    window.tanfPerc19 = dimple.filterData(tanfPerc, "Time", ["2019Q1", "2019Q2"]);

    window.display_tanf_table = (year,tanfAttainment,tanfPerc,tanfRate,tanfData)=>{ 
        let find = (objArr,indx)=>{
            // Search
            let returnThis = objArr.filter(obj=>{
                return obj['Time'].search(['Q1', 'Q2', 'Q3', 'Q4'][indx]) > -1 ? true : false
            }
            )
            returnThis = returnThis[0]
            returnThis = returnThis == undefined ? '--' : returnThis['Amount']
            return returnThis
        } 
        document.getElementById('tanf_table').innerHTML = `
            <tr class="HeadRow" style="background-color: white;">
              <th>${CountyName4}:</th>
              <th>TANF Recipient Workers (count)</th>
              <th>TANF Participants in Workforce Service (count)</th>
              <th>Percent of Workers in TANF (percent)</th>
              <th>Service participants in TANF (percent)</th>
            </tr>
            <tr>
              <th>${year}Q1</th>
              <td>${cma(find(tanfAttainment, 0))}</td>
              <td>${cma(find(tanfData, 0))}</td>
              <td>${pcnt2(find(tanfPerc, 0))}</td>
              <td>${pcnt2(find(tanfRate, 0))}</td>
            </tr>
            <tr>
              <th>${year}Q2</th>
              <td>${cma(find(tanfAttainment, 1))}</td>
              <td>${cma(find(tanfData, 1))}</td>
              <td>${pcnt2(find(tanfPerc, 1))}</td>
              <td>${pcnt2(find(tanfRate, 1))}</td>
            </tr>
            <tr>
              <th>${year}Q3</th>
              <td>${cma(find(tanfAttainment, 2))}</td>
              <td>${cma(find(tanfData, 2))}</td>
              <td>${pcnt2(find(tanfPerc, 2))}</td>
              <td>${pcnt2(find(tanfRate, 2))}</td>
            </tr>
            <tr>
              <th>${year}Q4</th>
              <td>${cma(find(tanfAttainment, 3))}</td>
              <td>${cma(find(tanfData, 3))}</td>
              <td>${pcnt2(find(tanfPerc, 3))}</td>
              <td>${pcnt2(find(tanfRate, 3))}</td>
            </tr>
        `
    }
    display_tanf_table('2018', tanfAttainment18, tanfPerc18, tanfRate18, tanfData18)

    let ordered = ["2018Q1", "2018Q2", "2018Q3", "2018Q4"]

    window.tanf_attainment_chart = new dimple.chart(tanf_svg,tanfAttainment18);
    window.ptanf_attainment_chart = new dimple.chart(tanf_chart_print,tanfAttainment18);

    window.tanf_data = new dimple.chart(tanf_svg,tanfData18);
    window.ptanf_data = new dimple.chart(tanf_chart_print,tanfData18);

    window.tanf_rate_chart = new dimple.chart(tanf_svg,tanfRate18);
    window.ptanf_rate_chart = new dimple.chart(tanf_chart_print,tanfRate18);

    // tanfPerc18
    window.tanf_perc_chart = new dimple.chart(tanf_svg,tanfPerc18);
    window.ptanf_perc_chart = new dimple.chart(tanf_chart_print,tanfPerc18);

    // (visuals share the width)
    // Bounds: [startPosLeft, PadFromTop,
    //          chartWidth, chartHeight] 
    createThese = [{
        "chart": tanf_attainment_chart,
        "bounds": ["8%", "12%", "20%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": ordered,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Workers receiving TANF benefits",
        "tickFormat": ',.0f',
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    }, {
        "chart": tanf_data,
        "bounds": ["30%", "12%", "20%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": ordered,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Recipients amongst MD Workers",
        "tickFormat": ',.0f',
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    }, {
        "chart": tanf_rate_chart,
        "bounds": ["52%", "12%", "20%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": ordered,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Workforce/Service in TANF (%)",
        "tickFormat": ',.0f',
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    }, {
        "chart": tanf_perc_chart,
        "bounds": ["78%", "12%", "20%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": ordered,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Percent of Workers in TANF (%)",
        "tickFormat": '.1%',
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    }, {
        "chart": ptanf_data,
        "bounds": ["74%", "12%", "22%", "60%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": ordered,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Recipients amongst MD Workers",
        "tickFormat": '.1%',
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    }, {
        "chart": ptanf_rate_chart,
        "bounds": ["51%", "12%", "22%", "60%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": ordered,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Workforce/Service in TANF (%)",
        "tickFormat": ',.0f',
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    }, {
        "chart": ptanf_perc_chart,
        "bounds": ["30%", "12%", "22%", "60%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": ordered,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Percent of Workers in TANF (%)",
        "tickFormat": '.1%',
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    }, {
        "chart": ptanf_attainment_chart,
        "bounds": ["7%", "12%", "22%", "60%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": ordered,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Workers receiving TANF benefits",
        "tickFormat": ",.0f",
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    }
    ]
    createChart(createThese)

    var empl_status_svg = dimple.newSvg("#empl_status_chart", "100%", 500);
    var empl_status_chart_print = dimple.newSvg("#empl_status_chart_print", 750, 400);
    window.work_exp_pov_chart = new dimple.chart(empl_status_svg,[]);
    window.pwork_exp_pov_chart = new dimple.chart(empl_status_chart_print,[]);
    
    if (!emplStatusCounties.includes(CountyName)) {
        //Create Tables
        let empl_data = CountyName == 'Maryland' ? data : await d3.dsv(",", "./data/emp18/emp_" + CountyName4.replace(/[ ]/g, '') + ".csv")
        empl_data.unshift(["Employment Status Amongst Maryland Workers", "", "", 2016, 2017, 2018])
        var container = d3.select("#empl_status_table")
        var rows = container.selectAll('tr').data(empl_data).enter().append('tr')
            var rowcount = 0
        var cells = rows.selectAll('td').data(row=>{
            rowcount += 1
            return Object.keys(row).map(column=>{
                return {
                    column: column,
                    value: rowcount <= 1 || isNaN(row[column]) || !row[column] ? row[column] : cma(row[column]) 
                }
            }
            )
        }
        ).enter().append('td').text(d=>{
            return d.value
        }
        )
        window.workerDatag1 = dimple.filterData(data, "Indicator", "Work Experience by Gender")
        window.workerDatag2 = dimple.filterData(workerDatag1, "Time", "2016");
        window.workerDatag3 = dimple.filterData(workerDatag1, "Time", "2017");
        window.workerDatag4 = dimple.filterData(workerDatag1, "Time", "2018");
        workerDatag1 = dimple.filterData(workerDatag1, "Time", "2015");
        //education
        window.workerDatae1 = dimple.filterData(data, "Indicator", "Work Experience by Education")
        window.workerDatae2 = dimple.filterData(workerDatae1, "Time", "2016");
        window.workerDatae3 = dimple.filterData(workerDatae1, "Time", "2017");
        window.workerDatae4 = dimple.filterData(workerDatae1, "Time", "2018");
        workerDatae1 = dimple.filterData(workerDatae1, "Time", "2015");
        //race
        window.workerDatar1 = dimple.filterData(data, "Indicator", "Work Experience by Race")
        window.workerDatar2 = dimple.filterData(workerDatar1, "Time", "2016");
        window.workerDatar3 = dimple.filterData(workerDatar1, "Time", "2017");
        window.workerDatar4 = dimple.filterData(workerDatar1, "Time", "2018");
        workerDatar1 = dimple.filterData(workerDatar1, "Time", "2015");
        //poverty
        window.workerDatap1 = dimple.filterData(data, "Indicator", "Work Experience by Poverty")
        window.workerDatap2 = dimple.filterData(workerDatap1, "Time", "2016");
        window.workerDatap3 = dimple.filterData(workerDatap1, "Time", "2017");
        window.workerDatap4 = dimple.filterData(workerDatap1, "Time", "2018");
        workerDatap1 = dimple.filterData(workerDatap1, "Time", "2015");

        //window.work_exp_pov_chart = new dimple.chart(empl_status_svg,workerDatag3);
        //window.pwork_exp_pov_chart = new dimple.chart(empl_status_chart_print,workerDatag3);

        createThese = [{
            "chart": window.work_exp_pov_chart,
            "bounds": ["11%", "12%", "80%", "60%"],
            "categoryAxis": ["x", "Indicator_Status"],
            "xtitle": " ",
            "order": ["N/A", "No School", "Nursery", "Kindergarten", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12", "GED", "Highschool", "Professional", "Some College", "Associate", "Bachlor's", "Master's", "Doctoral", "1 or More", "0-25", "26-50", "51-75", "76-100", "100-500", "501"],
            "measureAxis": ["y", "Amount"],
            "ytitle": "Number of Workers",
            "tickFormat": ',.0f',
            "series": "Employment_Status",
            "lineMarkers": true,
            "colors": false,
            "legend": ["26%", "5%", "50%", "70%", "right"]
        }, {
            "chart": pwork_exp_pov_chart,
            "bounds": ["15%", "12%", "65%", "50%"],
            "categoryAxis": ["x", "Indicator_Status"],
            "xtitle": " ",
            "order": ["N/A", "No School", "Nursery", "Kindergarten", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12", "GED", "Highschool", "Professional", "Some College", "Associate", "Bachlor's", "Master's", "Doctoral", "1 or More", "0-25", "26-50", "51-75", "76-100", "100-500", "501"],
            "measureAxis": ["y", "Amount"],
            "ytitle": "Number of Workers",
            "tickFormat": ",.0f",
            "series": "Employment_Status",
            "lineMarkers": true,
            "colors": false,
            "legend": ["16%", "90%", "50%", "70%", "right"]
        }]
        createChart(createThese)
    }

    // 
    // Snap
    // 

    // Retrieve Elements
    var snap_chart_svg = dimple.newSvg("#snap_chart", "100%", 400);
    var psnap_chart_svg = dimple.newSvg("#snap_chart_print", 750, 400);

    // Filter Data
    let snap_Data1 = dimple.filterData(data, "Indicator", "SNAP Recipient Workers")
    let snap_Data2 = dimple.filterData(data, "Indicator", "SNAP Recipient Workers by Percentage")
    // Config Chart
    window.snap_chart = new dimple.chart(snap_chart_svg,snap_Data1);
    window.snap_chart2 = new dimple.chart(snap_chart_svg,snap_Data2);
    window.psnap_chart = new dimple.chart(psnap_chart_svg,snap_Data1);
    window.psnap_chart2 = new dimple.chart(psnap_chart_svg,snap_Data2);

    find = (objArr,indx)=>{
        let returnThis = objArr.filter(obj=>{
            return obj['Time'] == ['2016', '2017', '2018'][indx]
        }
        )[0]
        returnThis = returnThis == undefined ? '--' : returnThis['Amount']
        return returnThis
    }

    var container = document.getElementById("snap_table")
    container.innerHTML = `
            <tr class="HeadRow">
              <th>SNAP Recipient Workers</th> <th></th>
              <th>2016</th>
              <th>2017</th>
              <th>2018</th>
              </tr>
            <tr>
              <th>Snap Recipient Workers</th> <th></th>
              <td>${cma(find(snap_Data1, 0))}</td>
              <td>${cma(find(snap_Data1, 1))}</td>
              <td>${cma(find(snap_Data1, 2))}</td>
            </tr>
            <tr>
              <th>Snap Recipient Workers by Percentage</th> <th></th>
              <td>${pcnt(find(snap_Data2, 0))}</td>
              <td>${pcnt(find(snap_Data2, 1))}</td>
              <td>${pcnt(find(snap_Data2, 2))}</td>
            </tr>
    `
    createThese = [{
        "chart": snap_chart,
        "bounds": ["11%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": "Year",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Amount",
        "tickFormat": ',',
        "series": "Indicator",
        "lineMarkers": false,
        "colors": false
    }, {
        "chart": snap_chart2,
        "bounds": ["58%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": "Year",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Percent",
        "tickFormat": '.2%',
        "series": "Indicator",
        "lineMarkers": false,
        "colors": false
    }, {
        "chart": psnap_chart,
        "bounds": ["14%", "12%", "32%", 250],
        "categoryAxis": ["x", "Year"],
        "xtitle": "Year",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Amount",
        "tickFormat": ',',
        "series": "Indicator",
        "lineMarkers": false,
        "colors": false
    }, {
        "chart": psnap_chart2,
        "bounds": ["62%", "12%", "32%", 300],
        "categoryAxis": ["x", "Year"],
        "xtitle": "Year",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Percent",
        "tickFormat": '.2%',
        "series": "Indicator",
        "lineMarkers": false,
        "colors": false
    }]
    createChart(createThese)


    window.countyLookup = [
      {
          'tab':'pop',
          'lbl':'Population and Median Household Income',
          'dm':false,'dmy':false,'dmq':false, 
          'charts':[pop_chart, mhhi_chart], 
          'pcharts':[ppop_chart, mhhi_chart_print],
          'svgName': '#pop_chart',
          'data': {
            data18 : [pop, mhhi],
            data17 : [pop, mhhi],
            data16 : [pop, mhhi],
            data15 : [pop, mhhi],
          }
      },
      {
          'tab':'empl_edu_gend',
          'lbl':'Demographics - Education and Gender',
          'dm':true,'dmy':true,'dmq':false, 
          'charts':[empl_edu_chart, empl_edu_gend_chart],
          'pcharts':[pempl_edu_chart, pempl_edu_gend_chart],
          'svgName': '#empl_edu_gend_chart',
          'data': {
            data18 : [EduAttainment18, unempByGender18],
            data17 : [EduAttainment17, unempByGender17],
            data16 : [EduAttainment16, unempByGender16],
            data15 : [EduAttainment15, unempByGender15],
          }
      },
      {
          'tab':'empl_race_ethn',
          'lbl':'Demographics - Race and Ethnicity',
          'dm':true,'dmy':true,'dmq':false, 
          'charts':[empl_race_ethn_chart, chart5],
          'pcharts':[pempl_race_ethn_chart, pchart5],
          'svgName': '#empl_race_ethn_chart',
          'data': {
            data18 : [raceData18, ethData18],
            data17 : [raceData17, ethData17],
            data16 : [raceData16, ethData16],
            data15 : [raceData15, ethData15],
          }
      },
      {
          'tab':'empl_vet',
          'lbl':'Demographics - Veterans Status',
          'dm':true, 'dmy':true,'dmq':false, 
          'charts':[empl_vet_chart],
          'pcharts':[empl_vet_print_chart],
          'svgName': '#empl_vet_chart',
          'data': {
            data18 : [vetData18],
            data17 : [vetData17],
            data16 : [vetData16],
            data15 : [vetData15],
          }
      },
      {
          'tab':'disabl_pov','lbl':'Disability and Poverty',
          'dm':true,'dmy':true,'dmq':false, 
          'charts':[emp_dis_chart, empl_status_chart],
          'pcharts':[emp_dis_chart_print, pempl_status_chart],
          'svgName': '#disabl_pov_chart',
          'data': {
            data18 : [disAttainment18, povRate18],
            data17 : [disAttainment17, povRate17],
            data16 : [disAttainment16, povRate16],
            data15 : [disAttainment15, povRate15]
          }
      },
      {
          'tab':'tanf',
          'lbl':'Temporary Aid for Needy Families (TANF) Stats',
          'dm':true,'dmy':true,'dmq':false, 
          'charts':[tanf_attainment_chart, tanf_perc_chart, tanf_rate_chart, tanf_data],
          'pcharts':[ptanf_attainment_chart, ptanf_perc_chart, ptanf_rate_chart, ptanf_data],
          'svgName': '#tanf_chart',
          'data': {
            data19 : [tanfAttainment19, tanfPerc19, tanfRate19, tanfData19],
            data18 : [tanfAttainment18, tanfPerc18, tanfRate18, tanfData18],
            data17 : [tanfAttainment17, tanfPerc17, tanfRate17, tanfData17],
            data16 : [tanfAttainment16, tanfPerc16, tanfRate16, tanfData16],
            data15 : [tanfAttainment15, tanfPerc15, tanfRate15, tanfData15]
          }
      },
      {
          'tab':'empl_status',
          'lbl':'Employment Status amongst Maryland Workers',
          'dm':true,'dmy':true,'dmq':false, 
          'charts':[work_exp_pov_chart],
          'pcharts':[pwork_exp_pov_chart],
          'svgName': '#empl_status_chart',
          'data': {
            data18 : !emplStatusCounties.includes(CountyName) ? [workerDatag4, workerDatar4, workerDatae4, workerDatap4] : [],
            data17 : !emplStatusCounties.includes(CountyName) ? [workerDatag3, workerDatar3, workerDatae3, workerDatap3] : [],
            data16 : !emplStatusCounties.includes(CountyName) ? [workerDatag2, workerDatar2, workerDatae2, workerDatap2] : [],
            data15 : !emplStatusCounties.includes(CountyName) ? [workerDatag1, workerDatar1, workerDatae1, workerDatap1] : []
          } 
      },
      {
          'tab':'snap',
          'lbl':'SNAP Recipient Workers',
          'dm':false,'dmy':false,'dmq':false, 
          'charts':[snap_chart, snap_chart2],
          'pcharts':[psnap_chart, psnap_chart2],
          'svgName': '#snap_chart',
          'data': {
            data18 : [snap_Data1, snap_Data2],
            data17 : [snap_Data1, snap_Data2],
            data16 : [snap_Data1, snap_Data2],
            data15 : [snap_Data1, snap_Data2]
          }
      }
    ]
        /*        
        */
    // Loop All Tabs
    countyLookup.map( tab => {
        // Loop All Years 
        tab['yearAvailable'] = {}
        let chartsHaveRecords = !tab['data'] ? '' : Object.keys(tab['data']).map( ( dataDropdownCategory ) => {
            // Loop All datasets and get a T/F flag for each. 
            let valid4TabDisplay = tab['data'][dataDropdownCategory].map( dataset  => {
                // Loop All Records in dataset. Returns True if any record is not empty 
                return dataset.some((d) => {
                    return (d != 'N/A' & d != undefined & d != '--' & d != 'S')
                } )
            } )
            // Get a single T/F value for entire Year
            tab['yearAvailable'][dataDropdownCategory] = valid4TabDisplay // .some((d)=> { return d } )
            return valid4TabDisplay
        } )
    })

    //
    // Whenever a user selects a dropdown option
    //
    window.chartChange = function() {

        let drpY = document.querySelector("#dropdownMenuY").value

        // For each Tab
        countyLookup.map( tab => {

            // Get indicator datasets for dropdown-selected year
            const avail = tab['yearAvailable'][drpY]
            let dta = tab['data'][drpY]
            let lbl = tab['lbl']
            if(lbl == 'Temporary Aid for Needy Families (TANF) Stats'){
              display_tanf_table(drpY, 
                tab['charts'][0].data, 
                tab['charts'][1].data, 
                tab['charts'][2].data, 
                tab['charts'][3].data
              )
            }
            if(lbl == 'Employment Status amongst Maryland Workers'){
              var e8 = document.getElementById("emplStatus_categ_dd");
              var strUser8 = e8.options[e8.selectedIndex].text; 
              let clag = avail && avail[0]
              if (strUser8 == "Gender") { ; tab['charts'][0].data = avail && avail[0] ? dta[0] : [] } 
              if (strUser8 == "Race") { tab['charts'][0].data = avail && avail[1] ? dta[1] : []} 
              if (strUser8 == "Education") { tab['charts'][0].data = avail && avail[2] ? dta[2] : [] } 
              if (strUser8 == "Poverty") { tab['charts'][0].data = avail && avail[3] ? dta[3] : [] }
              // pwork_exp_pov_chart.data = tab['charts'][0].data;
              tab['charts'][0].draw()
            }
            // For each Chart 
            else{
              let svg = document.querySelector(tab['svgName']);
              for (let i in tab['charts']) {
                // Determine Chart Viz
                let flag = avail && avail[i]
                let svgChart = svg.querySelectorAll('.dimple-chart')[i] 
                tab['charts'][i].data = flag ? dta[i] : []
                tab['charts'][i].draw()
                // svgChart.style.visibility = flag ? 'inline' : 'none'
              }
            }
        } )

        drawAll();

    }
        
    d3.select("#dropdownMenuY").on("change", chartChange);
    d3.select("#emplStatus_categ_dd").on("change", chartChange);

    document.querySelectorAll('[data-lbl]').forEach(el=>{
        el.removeAttribute("disabled");
    }
    )

}
)()
