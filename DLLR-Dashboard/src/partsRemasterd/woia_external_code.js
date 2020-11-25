import * as d3 from 'd3';
import * as dimple from 'dimple';

/*
 * Outline
 * 
*/

(async()=>{
    let url = CountyName2 == 'Maryland' ? './data/MarylandData.csv' : "./data/wda/" + CountyName.replace(/[ ]/g, '') + ".csv"

    let data = await d3.dsv(",", url)
    console.log(data)

    //
    // Tab 1 Chart 1
    //

    var svg3 = dimple.newSvg("#Chart3", "100%", 400);
    var svg4 = dimple.newSvg("#Chart4", "100%", 400);
    var svg5 = dimple.newSvg("#ChartFive", "100%", 400);
    var svg6 = dimple.newSvg("#Chart6", "100%", 450);

    var print3 = dimple.newSvg("#Print3", 750, 400);
    var print4 = dimple.newSvg("#Print4", 750, 400);
    var print5 = dimple.newSvg("#PrintFive", 750, 400);
    var print6 = dimple.newSvg("#Print6", 750, 450);

    var svg71 = dimple.newSvg("#Chart17", "100%", 400);
    var print71 = dimple.newSvg("#Print17", 750, 400);
    
    let createDatasets = (data, dsPrefix, filters) => {
		filters.map( filter => {
		    window[`${dsPrefix}${filter}`] = dimple.filterData(workDataA, "Time", filter)
		} )
	}
	let workData = dimple.filterData(workData, "Indicator", ["Maryland Workers by Age", "Maryland Workers by Gender", "Maryland Workers by Industry"])
	let quarters = ['2016Q1','2016Q2','2016Q3','2016Q4','2017Q1','2017Q2','2017Q3','2017Q4','2018Q1','2018Q2','2018Q3','2018Q4','2019Q1','2019Q2','2019Q3','2019Q4']
    createDatasets( dimple.filterData(workData, "Indicator", "Maryland Workers by Age"),'workData', quarters )
    createDatasets( dimple.filterData(workData, "Indicator", "Maryland Workers by Gender"),'workDatg', quarters )

    window.wChart = new dimple.chart(svg3,zeronulls(workData2018Q1 ) );
    wChart.setBounds("11%", "12%", "35%", "65%")
    window.edX = wChart.addCategoryAxis("x", "Indicator_Value");
    var eduY = wChart.addMeasureAxis("y", "Amount");
    var edSeries = wChart.addSeries("Indicator_Value", dimple.plot.bar);
    eduY.title = "Number of Workers";
    edX.title = " ";

    edX.addOrderRule(["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99", "Female", "Male"]);

    wChart.assignColor("14-18", "#4dc3ff", "black", 0.7);
    wChart.assignColor("19-21", "#ff5c33", "black", 0.7);
    wChart.assignColor("22-24", "#66ff66", "black", 0.7);
    wChart.assignColor("25-34", "#ffdb4d", "black", 0.7);
    wChart.assignColor("35-44", "#ffb84d", "black", 0.7);
    wChart.assignColor("45-54", "#00cccc", "black", 0.7);
    wChart.assignColor("55-64", "#6666ff", "black", 0.7);
    wChart.assignColor("65-99", "#ffcc99", "black", 0.7);
    wChart.assignColor("Male", "#3366ff", "black", 0.7);
    wChart.assignColor("Female", "pink", "black", 0.7);

    wChart.draw();

    eduY.tickFormat = ',.0f';

    window.pwChart = new dimple.chart(print3,zeronulls(workData2018Q1 ) );
    pwChart.setBounds("13%", "12%", "35%", 250)
    var pedX = pwChart.addCategoryAxis("x", "Indicator_Value");
    var peduY = pwChart.addMeasureAxis("y", "Amount");
    var pedSeries = pwChart.addSeries("Indicator_Value", dimple.plot.bar);
    peduY.title = "Number of Workers";
    pedX.title = " ";

    pedX.addOrderRule(["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99", "Female", "Male"]);

    pwChart.assignColor("14-18", "#4dc3ff", "black", 0.7);
    pwChart.assignColor("19-21", "#ff5c33", "black", 0.7);
    pwChart.assignColor("22-24", "#66ff66", "black", 0.7);
    pwChart.assignColor("25-34", "#ffdb4d", "black", 0.7);
    pwChart.assignColor("35-44", "#ffb84d", "black", 0.7);
    pwChart.assignColor("45-54", "#00cccc", "black", 0.7);
    pwChart.assignColor("55-64", "#6666ff", "black", 0.7);
    pwChart.assignColor("65-99", "#ffcc99", "black", 0.7);
    pwChart.assignColor("Male", "#3366ff", "black", 0.7);
    pwChart.assignColor("Female", "pink", "black", 0.7);

    pwChart.draw();

    peduY.tickFormat = ',.0f';

    //
    // Tab 1 Chart 2

    let averageData = dimple.filterData(data, "Time", ["2016Q1", "2016Q2", "2016Q3", "2016Q4", "2017Q1", "2017Q2", "2017Q3", "2017Q4", "2018Q1", "2018Q2", "2018Q3", "2018Q4", "2019Q1", "2019Q2", "2019Q3", "2019Q4"]);

    let averageData2 = dimple.filterData(averageData, "Indicator", "Maryland Average Monthly Earnings by Age");
    window.averageData2016Q1 = dimple.filterData(averageData2, "Time", "2016Q1")
    window.averageData2016Q2 = dimple.filterData(averageData2, "Time", "2016Q2")
    window.averageData2016Q3 = dimple.filterData(averageData2, "Time", "2016Q3")
    window.averageData2016Q4 = dimple.filterData(averageData2, "Time", "2016Q4")
    window.averageData2017Q1 = dimple.filterData(averageData2, "Time", "2017Q1")
    window.averageData2017Q2 = dimple.filterData(averageData2, "Time", "2017Q2")
    window.averageData2017Q3 = dimple.filterData(averageData2, "Time", "2017Q3")
    window.averageData2017Q4 = dimple.filterData(averageData2, "Time", "2017Q4")
    window.averageData2018Q1 = dimple.filterData(averageData2, "Time", "2018Q1")
    window.averageData2018Q2 = dimple.filterData(averageData2, "Time", "2018Q2")
    window.averageData2018Q3 = dimple.filterData(averageData2, "Time", "2018Q3")
    window.averageData2018Q4 = dimple.filterData(averageData2, "Time", "2018Q4")
    window.averageData2019Q1 = dimple.filterData(averageData2, "Time", "2019Q1")
    window.averageData2019Q2 = dimple.filterData(averageData2, "Time", "2019Q2")
    window.averageData2019Q3 = dimple.filterData(averageData2, "Time", "2019Q3")
    window.averageData2019Q4 = dimple.filterData(averageData2, "Time", "2019Q4")

    let averageData1 = dimple.filterData(averageData, "Indicator", "Maryland Average Monthly Earnings by Gender");

    window.averageDatg2016Q1 = dimple.filterData(averageData1, "Time", "2016Q1")
    window.averageDatg2016Q2 = dimple.filterData(averageData1, "Time", "2016Q2")
    window.averageDatg2016Q3 = dimple.filterData(averageData1, "Time", "2016Q3")
    window.averageDatg2016Q4 = dimple.filterData(averageData1, "Time", "2016Q4")
    window.averageDatg2017Q1 = dimple.filterData(averageData1, "Time", "2017Q1")
    window.averageDatg2017Q2 = dimple.filterData(averageData1, "Time", "2017Q2")
    window.averageDatg2017Q3 = dimple.filterData(averageData1, "Time", "2017Q3")
    window.averageDatg2017Q4 = dimple.filterData(averageData1, "Time", "2017Q4")
    window.averageDatg2018Q1 = dimple.filterData(averageData1, "Time", "2018Q1")
    window.averageDatg2018Q2 = dimple.filterData(averageData1, "Time", "2018Q2")
    window.averageDatg2018Q3 = dimple.filterData(averageData1, "Time", "2018Q3")
    window.averageDatg2018Q4 = dimple.filterData(averageData1, "Time", "2018Q4")
    window.averageDatg2019Q1 = dimple.filterData(averageData1, "Time", "2019Q1")
    window.averageDatg2019Q2 = dimple.filterData(averageData1, "Time", "2019Q2")
    window.averageDatg2019Q3 = dimple.filterData(averageData1, "Time", "2019Q3")
    window.averageDatg2019Q4 = dimple.filterData(averageData1, "Time", "2019Q4")


    /*
    console.log('Num Workers, Average Earnings', {
        workData2018Q1,
        workDatg2018Q1,
        averageData2018Q1,
        averageDatg2018Q1,
        workData2018Q2,
        workDatg2018Q2,
        averageData2018Q2,
        averageDatg2018Q2,
        workData2018Q3,
        workDatg2018Q3,
        averageData2018Q3,
        averageDatg2018Q3,
        workData2018Q4,
        workDatg2018Q4,
        averageData2018Q4,
        averageDatg2018Q4,
        workData2019Q1,
        workDatg2019Q1,
        averageData2019Q1,
        averageDatg2019Q1,
        workData2019Q2,
        workDatg2019Q2,
        averageData2019Q2,
        averageDatg2019Q2,
        workData2019Q3,
        workDatg2019Q3,
        averageData2019Q3,
        averageDatg2019Q3,
        workData2019Q4,
        workDatg2019Q4,
        averageData2019Q4,
        averageDatg2019Q4,
    })
    */

    let displayAvgQuarterTab1 = (quarter,agec,gendc,agea,genda)=>{
        // console.log('displayAvgQuarterTab1', quarter, agec, gendc, agea, genda)
        return `
		<tr class="HeadRow">
		  <th>${quarter}</th>
		  <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th>
	   </tr>
	   <tr>
		  <th>Number of Workers</th>
		  <td>${cma(findAge(agec, 0))}</td>
		  <td>${cma(findAge(agec, 1))}</td>
		  <td>${cma(findAge(agec, 2))}</td>
		  <td>${cma(findAge(agec, 3))}</td>
		  <td>${cma(findAge(agec, 4))}</td>
		  <td>${cma(findAge(agec, 5))}</td>
		  <td>${cma(findAge(agec, 6))}</td>
		  <td>${cma(findAge(agec, 7))}</td>
		  <td>${cma(findGender(gendc, 1))}</td>
		  <td>${cma(findGender(gendc, 0))}</td>
	   </tr>
	   <tr class="FootRow">
		  <th>Average Monthly Earnings</th>
		  <td>${cma(findAge(agea, 0))}</td>
		  <td>${cma(findAge(agea, 1))}</td>
		  <td>${cma(findAge(agea, 2))}</td>
		  <td>${cma(findAge(agea, 3))}</td>
		  <td>${cma(findAge(agea, 4))}</td>
		  <td>${cma(findAge(agea, 5))}</td>
		  <td>${cma(findAge(agea, 6))}</td>
		  <td>${cma(findAge(agea, 7))}</td>
		  <td>${cma(findGender(genda, 1))}</td>
		  <td>${cma(findGender(genda, 0))}</td>
	   </tr>`
    }
    document.getElementById('table3').innerHTML = `
               <tr class="HeadRow" style="background-color: white;">
                  <th>${CountyName.replace("L W D A", "LWDA")}</th>
                  <th>Age 14-18</th>
                  <th>Age 19-21</th>
                  <th>Age 22-24</th>
                  <th>Age 25-34</th>
                  <th>Age 35-44</th>
                  <th>Age 45-54</th>
                  <th>Age 55-64</th>
                  <th>Age 65-99</th>
                  <th rowspan="100" style="border-style: solid; border-color: #5281B7;">Gender Data</th>
                  <th>Female</th>
                  <th>Male</th>
               </tr>
               ${displayAvgQuarterTab1('2016Q1', workData2016Q1, workDatg2016Q1, averageData2016Q1, averageDatg2016Q1)}
               ${displayAvgQuarterTab1('2016Q2', workData2016Q2, workDatg2016Q2, averageData2016Q2, averageDatg2016Q2)}
               ${displayAvgQuarterTab1('2016Q3', workData2016Q3, workDatg2016Q3, averageData2016Q3, averageDatg2016Q3)}
               ${displayAvgQuarterTab1('2016Q4', workData2016Q4, workDatg2016Q4, averageData2016Q4, averageDatg2016Q4)}
               ${displayAvgQuarterTab1('2017Q1', workData2017Q1, workDatg2017Q1, averageData2017Q1, averageDatg2017Q1)}
               ${displayAvgQuarterTab1('2017Q2', workData2017Q2, workDatg2017Q2, averageData2017Q2, averageDatg2017Q2)}
               ${displayAvgQuarterTab1('2017Q3', workData2017Q3, workDatg2017Q3, averageData2017Q3, averageDatg2017Q3)}
               ${displayAvgQuarterTab1('2017Q4', workData2017Q4, workDatg2017Q4, averageData2017Q4, averageDatg2017Q4)}
               ${displayAvgQuarterTab1('2018Q1', workData2018Q1, workDatg2018Q1, averageData2018Q1, averageDatg2018Q1)}
               ${!workData2018Q2[0] ? '' : displayAvgQuarterTab1('2018Q2', workData2018Q2, workDatg2018Q2, averageData2018Q2, averageDatg2018Q2)}
               ${!workData2018Q3[0] ? '' : displayAvgQuarterTab1('2018Q3', workData2018Q3, workDatg2018Q3, averageData2018Q3, averageDatg2018Q3)}
               ${!workData2018Q4[0] ? '' : displayAvgQuarterTab1('2018Q4', workData2018Q4, workDatg2018Q4, averageData2018Q4, averageDatg2018Q4)}
               ${!workData2019Q1[0] ? '' : displayAvgQuarterTab1('2019Q1', workData2019Q1, workDatg2019Q1, averageData2019Q1, averageDatg2019Q1)}
               ${!workData2019Q2[0] ? '' : displayAvgQuarterTab1('2019Q2', workData2019Q2, workDatg2019Q2, averageData2019Q2, averageDatg2019Q2)}
               ${!workData2019Q3[0] ? '' : displayAvgQuarterTab1('2019Q3', workData2019Q3, workDatg2019Q3, averageData2019Q3, averageDatg2019Q3)}
               ${!workData2019Q4[0] ? '' : displayAvgQuarterTab1('2019Q4', workData2019Q4, workDatg2019Q4, averageData2019Q4, averageDatg2019Q4)}
  `


    window.avgChart = new dimple.chart(svg3,zeronulls(averageData2017Q4) );
    avgChart.setBounds("56%", "12%", "35%", "65%")
    window.genX = avgChart.addCategoryAxis("x", "Indicator_Value");
    var genY = avgChart.addMeasureAxis("y", "Amount");
    avgChart.addSeries("Indicator_Value", dimple.plot.bar);
    console.log({avgChart})

    avgChart.assignColor("14-18", "#4dc3ff", "black", 0.7);
    avgChart.assignColor("19-21", "#ff5c33", "black", 0.7);
    avgChart.assignColor("22-24", "#66ff66", "black", 0.7);
    avgChart.assignColor("25-34", "#ffdb4d", "black", 0.7);
    avgChart.assignColor("35-44", "#ffb84d", "black", 0.7);
    avgChart.assignColor("45-54", "#00cccc", "black", 0.7);
    avgChart.assignColor("55-64", "#6666ff", "black", 0.7);
    avgChart.assignColor("65-99", "#ffcc99", "black", 0.7);
    avgChart.assignColor("Male", "#3366ff", "black", 0.7);
    avgChart.assignColor("Female", "pink", "black", 0.7);

    avgChart.draw();
    genX.addOrderRule(["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99", "Female", "Male"]);

    genX.title = " ";
    genY.tickFormat = '$,.0f';
    genY.title = "Average Monthly Earnings";

    window.pavgChart = new dimple.chart(print3,zeronulls(averageDatg2017Q4) );
    pavgChart.setBounds("61%", "12%", "35%", 250)
    var pgenX = pavgChart.addCategoryAxis("x", "Indicator_Value");
    var pgenY = pavgChart.addMeasureAxis("y", "Amount");
    pavgChart.addSeries("Indicator_Value", dimple.plot.bar);

    pavgChart.assignColor("14-18", "#4dc3ff", "black", 0.7);
    pavgChart.assignColor("19-21", "#ff5c33", "black", 0.7);
    pavgChart.assignColor("22-24", "#66ff66", "black", 0.7);
    pavgChart.assignColor("25-34", "#ffdb4d", "black", 0.7);
    pavgChart.assignColor("35-44", "#ffb84d", "black", 0.7);
    pavgChart.assignColor("45-54", "#00cccc", "black", 0.7);
    pavgChart.assignColor("55-64", "#6666ff", "black", 0.7);
    pavgChart.assignColor("65-99", "#ffcc99", "black", 0.7);
    pavgChart.assignColor("Male", "#3366ff", "black", 0.7);
    pavgChart.assignColor("Female", "pink", "black", 0.7);
    pavgChart.draw();

    pgenX.title = " ";
    pgenY.tickFormat = '$,.0f';
    pgenY.title = "Average Monthly Earnings";
    pgenX.addOrderRule(["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99", "Female", "Male"]);

    //
    // Tab 2 Chart 1
    //

    let newHireData = dimple.filterData(data, "Time", ["2016Q1", "2016Q2", "2016Q3", "2016Q4", "2017Q1", "2017Q2", "2017Q3", "2017Q4", "2018Q1", "2018Q2", "2018Q3", "2018Q4", "2019Q1", "2019Q2", "2019Q3", "2019Q4"])

    newHireData = dimple.filterData(newHireData, "Indicator", ["Maryland New Hires by Education", "Maryland New Hires by Gender"])

    let newHireData1 = dimple.filterData(newHireData, "Indicator", "Maryland New Hires by Education");
    window.newHireDatc2016Q1 = dimple.filterData(newHireData1, "Time", "2016Q1")
    window.newHireDatc2016Q2 = dimple.filterData(newHireData1, "Time", "2016Q2")
    window.newHireDatc2016Q3 = dimple.filterData(newHireData1, "Time", "2016Q3")
    window.newHireDatc2016Q4 = dimple.filterData(newHireData1, "Time", "2016Q4")
    window.newHireDatc2017Q1 = dimple.filterData(newHireData1, "Time", "2017Q1")
    window.newHireDatc2017Q2 = dimple.filterData(newHireData1, "Time", "2017Q2")
    window.newHireDatc2017Q3 = dimple.filterData(newHireData1, "Time", "2017Q3")
    window.newHireDatc2017Q4 = dimple.filterData(newHireData1, "Time", "2017Q4")
    window.newHireDatc2018Q1 = dimple.filterData(newHireData1, "Time", "2018Q1")
    window.newHireDatc2018Q2 = dimple.filterData(newHireData1, "Time", "2018Q2")
    window.newHireDatc2018Q3 = dimple.filterData(newHireData1, "Time", "2018Q3")
    window.newHireDatc2018Q4 = dimple.filterData(newHireData1, "Time", "2018Q4")
    window.newHireDatc2019Q1 = dimple.filterData(newHireData1, "Time", "2019Q1")
    window.newHireDatc2019Q2 = dimple.filterData(newHireData1, "Time", "2019Q2")
    window.newHireDatc2019Q3 = dimple.filterData(newHireData1, "Time", "2019Q3")
    window.newHireDatc2019Q4 = dimple.filterData(newHireData1, "Time", "2019Q4")

    let newHireData2 = dimple.filterData(newHireData, "Indicator", "Maryland New Hires by Gender");
    window.newHireDatg2016Q1 = dimple.filterData(newHireData2, "Time", "2016Q1")
    window.newHireDatg2016Q2 = dimple.filterData(newHireData2, "Time", "2016Q2")
    window.newHireDatg2016Q3 = dimple.filterData(newHireData2, "Time", "2016Q3")
    window.newHireDatg2016Q4 = dimple.filterData(newHireData2, "Time", "2016Q4")
    window.newHireDatg2017Q1 = dimple.filterData(newHireData2, "Time", "2017Q1")
    window.newHireDatg2017Q2 = dimple.filterData(newHireData2, "Time", "2017Q2")
    window.newHireDatg2017Q3 = dimple.filterData(newHireData2, "Time", "2017Q3")
    window.newHireDatg2017Q4 = dimple.filterData(newHireData2, "Time", "2017Q4")
    window.newHireDatg2018Q1 = dimple.filterData(newHireData2, "Time", "2018Q1")
    window.newHireDatg2018Q2 = dimple.filterData(newHireData2, "Time", "2018Q2")
    window.newHireDatg2018Q3 = dimple.filterData(newHireData2, "Time", "2018Q3")
    window.newHireDatg2018Q4 = dimple.filterData(newHireData2, "Time", "2018Q4")
    window.newHireDatg2019Q1 = dimple.filterData(newHireData2, "Time", "2019Q1")
    window.newHireDatg2019Q2 = dimple.filterData(newHireData2, "Time", "2019Q2")
    window.newHireDatg2019Q3 = dimple.filterData(newHireData2, "Time", "2019Q3")
    window.newHireDatg2019Q4 = dimple.filterData(newHireData2, "Time", "2019Q4")

    //
    // Tab 2 Chart 2
    //
    
    let jobData = dimple.filterData(data, "Time", ["2016Q1", "2016Q2", "2016Q3", "2016Q4", "2017Q1", "2017Q2", "2017Q3", "2017Q4", "2018Q1", "2018Q2", "2018Q3", "2018Q4", "2019Q1", "2019Q2", "2019Q3", "2019Q4"])

    jobData = dimple.filterData(jobData, "Indicator", ["Maryland Job Net Change by Education", "Maryland Job Net Change by Gender"])

    let jobData1 = dimple.filterData(jobData, "Indicator", "Maryland Job Net Change by Education");
    window.jobDatc2016Q1 = dimple.filterData(jobData1, "Time", "2016Q1")
    window.jobDatc2016Q2 = dimple.filterData(jobData1, "Time", "2016Q2")
    window.jobDatc2016Q3 = dimple.filterData(jobData1, "Time", "2016Q3")
    window.jobDatc2016Q4 = dimple.filterData(jobData1, "Time", "2016Q4")
    window.jobDatc2017Q1 = dimple.filterData(jobData1, "Time", "2017Q1")
    window.jobDatc2017Q2 = dimple.filterData(jobData1, "Time", "2017Q2")
    window.jobDatc2017Q3 = dimple.filterData(jobData1, "Time", "2017Q3")
    window.jobDatc2017Q4 = dimple.filterData(jobData1, "Time", "2017Q4")
    window.jobDatc2018Q1 = dimple.filterData(jobData1, "Time", "2018Q1")
    window.jobDatc2018Q2 = dimple.filterData(jobData1, "Time", "2018Q2")
    window.jobDatc2018Q3 = dimple.filterData(jobData1, "Time", "2018Q3")
    window.jobDatc2018Q4 = dimple.filterData(jobData1, "Time", "2018Q4")
    window.jobDatc2019Q1 = dimple.filterData(jobData1, "Time", "2019Q1")
    window.jobDatc2019Q2 = dimple.filterData(jobData1, "Time", "2019Q2")
    window.jobDatc2019Q3 = dimple.filterData(jobData1, "Time", "2019Q3")
    window.jobDatc2019Q4 = dimple.filterData(jobData1, "Time", "2019Q4")

    let jobData2 = dimple.filterData(jobData, "Indicator", "Maryland Job Net Change by Gender");
    window.jobDatg2016Q1 = dimple.filterData(jobData2, "Time", "2016Q1")
    window.jobDatg2016Q2 = dimple.filterData(jobData2, "Time", "2016Q2")
    window.jobDatg2016Q3 = dimple.filterData(jobData2, "Time", "2016Q3")
    window.jobDatg2016Q4 = dimple.filterData(jobData2, "Time", "2016Q4")
    window.jobDatg2017Q1 = dimple.filterData(jobData2, "Time", "2017Q1")
    window.jobDatg2017Q2 = dimple.filterData(jobData2, "Time", "2017Q2")
    window.jobDatg2017Q3 = dimple.filterData(jobData2, "Time", "2017Q3")
    window.jobDatg2017Q4 = dimple.filterData(jobData2, "Time", "2017Q4")
    window.jobDatg2018Q1 = dimple.filterData(jobData2, "Time", "2018Q1")
    window.jobDatg2018Q2 = dimple.filterData(jobData2, "Time", "2018Q2")
    window.jobDatg2018Q3 = dimple.filterData(jobData2, "Time", "2018Q3")
    window.jobDatg2018Q4 = dimple.filterData(jobData2, "Time", "2018Q4")
    window.jobDatg2019Q1 = dimple.filterData(jobData2, "Time", "2019Q1")
    window.jobDatg2019Q2 = dimple.filterData(jobData2, "Time", "2019Q2")
    window.jobDatg2019Q3 = dimple.filterData(jobData2, "Time", "2019Q3")
    window.jobDatg2019Q4 = dimple.filterData(jobData2, "Time", "2019Q4")

    window.jc = new dimple.chart(svg4,zeronulls( jobDatc2017Q1) );
    jc.setBounds("56%", "8%", "35%", "45%")

    var raceX = jc.addCategoryAxis("x", "Indicator_Value");
    var raceY = jc.addMeasureAxis("y", "Amount");
    var rSeries = jc.addSeries("Indicator_Value", dimple.plot.bar);
    raceX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);

    jc.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
    jc.assignColor("High school", "#ff5c33", "black", 0.7);
    jc.assignColor("Some college", "#66ff66", "black", 0.7);
    jc.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
    jc.assignColor("N/A", "#919191", "black", 0.7);

    jc.assignColor("Male", "#3366ff", "black", 0.7);
    jc.assignColor("Female", "pink", "black", 0.7);

    jc.draw();
    raceY.title = "Job Net Change";
    raceX.title = " ";

    raceY.tickFormat = ',.0f';

    window.pjc = new dimple.chart(print4,zeronulls(jobDatc2017Q1) );
    pjc.setBounds("59%", "8%", "35%", 175)

    var praceX = pjc.addCategoryAxis("x", "Indicator_Value");
    var praceY = pjc.addMeasureAxis("y", "Amount");
    var prSeries = pjc.addSeries("Indicator_Value", dimple.plot.bar);

    pjc.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
    pjc.assignColor("High school", "#ff5c33", "black", 0.7);
    pjc.assignColor("Some college", "#66ff66", "black", 0.7);
    pjc.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
    pjc.assignColor("N/A", "#919191", "black", 0.7);

    pjc.assignColor("Male", "#3366ff", "black", 0.7);
    pjc.assignColor("Female", "pink", "black", 0.7);
    pjc.draw();

    praceY.title = "Job Net Change";
    praceX.title = " ";

    praceY.tickFormat = ',.0f';
    praceX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);

    let displayAvgQuarterTab2 = (quarter,jobChangeCount,jobChangeGender,newHireCount,newHireGender)=>{
        return `
               <tr class="HeadRow">
                  <th>${quarter}</th>
                  <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th>
               </tr>
               <tr>
                  <th>New Hires</th>
                  <td>${cma(findEdu(newHireCount, 1))}</td>
                  <td>${cma(findEdu(newHireCount, 2))}</td>
                  <td>${cma(findEdu(newHireCount, 3))}</td>
                  <td>${cma(findEdu(newHireCount, 4))}</td>
                  <td>${cma(findEdu(newHireCount, 0))}</td>
                  <td>${cma(findGender(newHireGender, 0))}</td>
                  <td>${cma(findGender(newHireGender, 1))}</td>
               </tr>
               <tr class="FootRow">
                  <th >Job Net Change</th>
                  <td>${cma(findEdu(jobChangeCount, 1))}</td>
                  <td>${cma(findEdu(jobChangeCount, 2))}</td>
                  <td>${cma(findEdu(jobChangeCount, 3))}</td>
                  <td>${cma(findEdu(jobChangeCount, 4))}</td>
                  <td>${cma(findEdu(jobChangeCount, 0))}</td>
                  <td>${cma(findGender(jobChangeGender, 0))}</td>
                  <td>${cma(findGender(jobChangeGender, 1))}</td>
               </tr>`
    }

    document.getElementById('table4').innerHTML = `
                 <tr class="HeadRow" style="background-color: white;">
                  <th style="border-right-style: solid;">${CountyName.replace("L W D A", "LWDA")}</th>
                  <th>Less than high school</th>
                  <th>High school or equivalent, no college</th>
                  <th>Some college or Associate degree</th>
                  <th>Bachelor's degree or advanced degree</th>
                  <th>Educational attainment not reported (workers aged 24 or younger)</th>
                  <th rowspan="100" style="border-style: solid; border-color: #5281B7;">Gender Data</th>
                  <th>Female</th>
                  <th>Male</th>
               </tr>
               ${displayAvgQuarterTab2('2016Q1', jobDatc2016Q1, jobDatg2016Q1, newHireDatc2016Q1, newHireDatg2016Q1)}
               ${displayAvgQuarterTab2('2016Q2', jobDatc2016Q2, jobDatg2016Q2, newHireDatc2016Q2, newHireDatg2016Q2)}
               ${displayAvgQuarterTab2('2016Q3', jobDatc2016Q3, jobDatg2016Q3, newHireDatc2016Q3, newHireDatg2016Q3)}
               ${displayAvgQuarterTab2('2016Q4', jobDatc2016Q4, jobDatg2016Q4, newHireDatc2016Q4, newHireDatg2016Q4)}
               ${displayAvgQuarterTab2('2017Q1', jobDatc2017Q1, jobDatg2017Q1, newHireDatc2017Q1, newHireDatg2017Q1)}
               ${displayAvgQuarterTab2('2017Q2', jobDatc2017Q2, jobDatg2017Q2, newHireDatc2017Q2, newHireDatg2017Q2)}
               ${displayAvgQuarterTab2('2017Q3', jobDatc2017Q3, jobDatg2017Q3, newHireDatc2017Q3, newHireDatg2017Q3)}
               ${displayAvgQuarterTab2('2017Q4', jobDatc2017Q4, jobDatg2017Q4, newHireDatc2017Q4, newHireDatg2017Q4)}
               ${!jobDatg2018Q1[0] ? '' : displayAvgQuarterTab2('2018Q1', jobDatc2018Q1, jobDatg2018Q1, newHireDatc2018Q1, newHireDatg2018Q1)}
               ${!jobDatg2018Q2[0] ? '' : displayAvgQuarterTab2('2018Q2', jobDatc2018Q2, jobDatg2018Q2, newHireDatc2018Q2, newHireDatg2018Q2)}
               ${!jobDatg2018Q3[0] ? '' : displayAvgQuarterTab2('2018Q3', jobDatc2018Q3, jobDatg2018Q3, newHireDatc2018Q3, newHireDatg2018Q3)}
               ${!jobDatg2018Q4[0] ? '' : displayAvgQuarterTab2('2018Q4', jobDatc2018Q4, jobDatg2018Q4, newHireDatc2018Q4, newHireDatg2018Q4)}
               ${!jobDatg2019Q1[0] ? '' : displayAvgQuarterTab2('2019Q1', jobDatc2019Q1, jobDatg2019Q1, newHireDatc2019Q1, newHireDatg2019Q1)}
               ${!jobDatg2019Q2[0] ? '' : displayAvgQuarterTab2('2019Q2', jobDatc2019Q2, jobDatg2019Q2, newHireDatc2019Q2, newHireDatg2019Q2)}
               ${!jobDatg2019Q3[0] ? '' : displayAvgQuarterTab2('2019Q3', jobDatc2019Q3, jobDatg2019Q3, newHireDatc2019Q3, newHireDatg2019Q3)}
               ${!jobDatg2019Q4[0] ? '' : displayAvgQuarterTab2('2019Q4', jobDatc2019Q4, jobDatg2019Q4, newHireDatc2019Q4, newHireDatg2019Q4)}
    `
    window.newHireChart = new dimple.chart(svg4,zeronulls(newHireDatc2017Q4) );
    newHireChart.setBounds("11%", "8%", "35%", "45%")
    var ethX = newHireChart.addCategoryAxis("x", "Indicator_Value");
    var ethY = newHireChart.addMeasureAxis("y", "Amount");

    newHireChart.addSeries("Indicator_Value", dimple.plot.bar);

    ethY.tickFormat = ',.0f';
    ethY.title = "New Hires";
    ethX.title = " ";

    newHireChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
    newHireChart.assignColor("High school", "#ff5c33", "black", 0.7);
    newHireChart.assignColor("Some college", "#66ff66", "black", 0.7);
    newHireChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
    newHireChart.assignColor("N/A", "#919191", "black", 0.7);

    newHireChart.assignColor("Male", "#3366ff", "black", 0.7);
    newHireChart.assignColor("Female", "pink", "black", 0.7);
    newHireChart.draw();
    ethX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);

    window.pnewHireChart = new dimple.chart(print4,zeronulls(newHireDatc2017Q4) );
    pnewHireChart.setBounds("11%", "8%", "35%", 175)
    var pethX = pnewHireChart.addCategoryAxis("x", "Indicator_Value");
    var pethY = pnewHireChart.addMeasureAxis("y", "Amount");
    pnewHireChart.addSeries("Indicator_Value", dimple.plot.bar);
    pethY.tickFormat = ',.0f';
    pethY.title = "New Hires";
    pethX.title = " ";

    pnewHireChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
    pnewHireChart.assignColor("High school", "#ff5c33", "black", 0.7);
    pnewHireChart.assignColor("Some college", "#66ff66", "black", 0.7);
    pnewHireChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
    pnewHireChart.assignColor("N/A", "#919191", "black", 0.7);

    pnewHireChart.assignColor("Male", "#3366ff", "black", 0.7);
    pnewHireChart.assignColor("Female", "pink", "black", 0.7);
    pnewHireChart.draw();

    pethX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);

    //
    // Tab 3 Chart 1   Turnover Rate
    //

    let turnOverData = dimple.filterData(data, "Time", ["2016Q1", "2016Q2", "2016Q3", "2016Q4", "2017Q1", "2017Q2", "2017Q3", "2017Q4", "2018Q1", "2018Q2", "2018Q3", "2018Q4", "2019Q1", "2019Q2", "2019Q3", "2019Q4", ])
    turnOverData = dimple.filterData(turnOverData, "Indicator", ["Maryland Turnover Rate by Education", "Maryland Turnover Rate by Gender", "Maryland Workers by Industry"])

    let turnOverData1 = dimple.filterData(turnOverData, "Indicator", "Maryland Turnover Rate by Education");
    window.turnOverData2016Q1 = dimple.filterData(turnOverData1, "Time", "2016Q1")
    window.turnOverData2016Q2 = dimple.filterData(turnOverData1, "Time", "2016Q2")
    window.turnOverData2016Q3 = dimple.filterData(turnOverData1, "Time", "2016Q3")
    window.turnOverData2016Q4 = dimple.filterData(turnOverData1, "Time", "2016Q4")
    window.turnOverData2017Q1 = dimple.filterData(turnOverData1, "Time", "2017Q1")
    window.turnOverData2017Q2 = dimple.filterData(turnOverData1, "Time", "2017Q2")
    window.turnOverData2017Q3 = dimple.filterData(turnOverData1, "Time", "2017Q3")
    window.turnOverData2017Q4 = dimple.filterData(turnOverData1, "Time", "2017Q4")
    window.turnOverData2018Q1 = dimple.filterData(turnOverData1, "Time", "2018Q1")
    window.turnOverData2018Q2 = dimple.filterData(turnOverData1, "Time", "2018Q2")
    window.turnOverData2018Q3 = dimple.filterData(turnOverData1, "Time", "2018Q3")
    window.turnOverData2018Q4 = dimple.filterData(turnOverData1, "Time", "2018Q4")
    window.turnOverData2019Q1 = dimple.filterData(turnOverData1, "Time", "2019Q1")
    window.turnOverData2019Q2 = dimple.filterData(turnOverData1, "Time", "2019Q2")
    window.turnOverData2019Q3 = dimple.filterData(turnOverData1, "Time", "2019Q3")
    window.turnOverData2019Q4 = dimple.filterData(turnOverData1, "Time", "2019Q4")

    let turnOverData2 = dimple.filterData(turnOverData, "Indicator", "Maryland Turnover Rate by Gender")
    window.turnOverDatg2016Q1 = dimple.filterData(turnOverData2, "Time", "2016Q1")
    window.turnOverDatg2016Q2 = dimple.filterData(turnOverData2, "Time", "2016Q2")
    window.turnOverDatg2016Q3 = dimple.filterData(turnOverData2, "Time", "2016Q3")
    window.turnOverDatg2016Q4 = dimple.filterData(turnOverData2, "Time", "2016Q4")
    window.turnOverDatg2017Q1 = dimple.filterData(turnOverData2, "Time", "2017Q1")
    window.turnOverDatg2017Q2 = dimple.filterData(turnOverData2, "Time", "2017Q2")
    window.turnOverDatg2017Q3 = dimple.filterData(turnOverData2, "Time", "2017Q3")
    window.turnOverDatg2017Q4 = dimple.filterData(turnOverData2, "Time", "2017Q4")
    window.turnOverDatg2018Q1 = dimple.filterData(turnOverData2, "Time", "2018Q1")
    window.turnOverDatg2018Q2 = dimple.filterData(turnOverData2, "Time", "2018Q2")
    window.turnOverDatg2018Q3 = dimple.filterData(turnOverData2, "Time", "2018Q3")
    window.turnOverDatg2018Q4 = dimple.filterData(turnOverData2, "Time", "2018Q4")
    window.turnOverDatg2019Q1 = dimple.filterData(turnOverData2, "Time", "2019Q1")
    window.turnOverDatg2019Q2 = dimple.filterData(turnOverData2, "Time", "2019Q2")
    window.turnOverDatg2019Q3 = dimple.filterData(turnOverData2, "Time", "2019Q3")
    window.turnOverDatg2019Q4 = dimple.filterData(turnOverData2, "Time", "2019Q4")

    let displayAvgQuarterTab3 = (quarter,edu,gend)=>{
        return `
                  <tr class="HeadRow">
                     <th>${quarter}</th>
                     <th></th> <th></th>
                     <th></th> <th></th>
                     <th></th> <th></th>
                     <th></th>
                  </tr>
                  <tr>
                     <th>Turnover Rate</th>
                     <td>${pcnt(findEdu(edu, 1))}</td>
                     <td>${pcnt(findEdu(edu, 2))}</td>
                     <td>${pcnt(findEdu(edu, 3))}</td>
                     <td>${pcnt(findEdu(edu, 4))}</td>
                     <td>${pcnt(findEdu(edu, 0))}</td>
                     <td>${pcnt(findGender(gend, 0))}</td>
                     <td>${pcnt(findGender(gend, 1))}</td>
                  </tr>`
    }
    document.getElementById('table5').innerHTML = `
                  <tr class="HeadRow" style="background-color: white;">
                     <th style="border-right-style: solid;">${CountyName.replace("L W D A", "LWDA")}</th>
                     <th>Less than high school</th>
                     <th>High school or equivalent, no college</th>
                     <th>Some college or Associate degree</th>
                     <th>Bachelor's degree or advanced degree</th>
                     <th>Educational attainment not reported (workers aged 24 or younger)</th>
                     <th rowspan="100" style="border-style: solid; border-color: #5281B7;">Gender Data</th>
                     <th>Female</th>
                     <th>Male</th>
                  </tr>
               ${displayAvgQuarterTab3('2016Q1', turnOverData2016Q1, turnOverDatg2016Q1)}
               ${displayAvgQuarterTab3('2016Q2', turnOverData2016Q2, turnOverDatg2016Q2)}
               ${displayAvgQuarterTab3('2016Q3', turnOverData2016Q3, turnOverDatg2016Q3)}
               ${displayAvgQuarterTab3('2016Q4', turnOverData2016Q4, turnOverDatg2016Q4)}
               ${displayAvgQuarterTab3('2017Q1', turnOverData2017Q1, turnOverDatg2017Q1)}
               ${displayAvgQuarterTab3('2017Q2', turnOverData2017Q2, turnOverDatg2017Q2)}
               ${displayAvgQuarterTab3('2017Q3', turnOverData2017Q3, turnOverDatg2017Q3)}
               ${displayAvgQuarterTab3('2017Q4', turnOverData2017Q4, turnOverDatg2017Q4)}
               ${displayAvgQuarterTab3('2018Q1', turnOverData2018Q1, turnOverDatg2018Q1)}
               ${!turnOverData2018Q2[0] ? '' : displayAvgQuarterTab3('2018Q2', turnOverData2018Q2, turnOverDatg2018Q2)}
               ${!turnOverData2018Q3[0] ? '' : displayAvgQuarterTab3('2018Q3', turnOverData2018Q3, turnOverDatg2018Q3)}
               ${!turnOverData2018Q4[0] ? '' : displayAvgQuarterTab3('2018Q4', turnOverData2018Q4, turnOverDatg2018Q4)}
               ${!turnOverData2019Q1[0] ? '' : displayAvgQuarterTab3('2019Q1', turnOverData2019Q1, turnOverDatg2019Q1)}
               ${!turnOverData2019Q2[0] ? '' : displayAvgQuarterTab3('2019Q2', turnOverData2019Q2, turnOverDatg2019Q2)}
               ${!turnOverData2019Q3[0] ? '' : displayAvgQuarterTab3('2019Q3', turnOverData2019Q3, turnOverDatg2019Q3)}
               ${!turnOverData2019Q4[0] ? '' : displayAvgQuarterTab3('2019Q4', turnOverData2019Q4, turnOverDatg2019Q4)}
  `

    window.turnChart = new dimple.chart(svg5,zeronulls(turnOverDatg2017Q4) );
    turnChart.setBounds("12%", "12%", "80%", "45%")
    var vetX = turnChart.addCategoryAxis("x", "Indicator_Value")

    var vetY = turnChart.addMeasureAxis("y", "Amount");

    turnChart.addSeries("Indicator_Value", dimple.plot.bar);

    vetY.tickFormat = '.1%';
    vetY.title = " ";

    turnChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
    turnChart.assignColor("High school", "#ff5c33", "black", 0.7);
    turnChart.assignColor("Some college", "#66ff66", "black", 0.7);
    turnChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
    turnChart.assignColor("N/A", "#919191", "black", 0.7);

    turnChart.assignColor("Male", "#3366ff", "black", 0.7);
    turnChart.assignColor("Female", "pink", "black", 0.7);

    turnChart.draw();

    vetX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
    vetX.title = "Turnover Rate";

    window.pturnChart = new dimple.chart(print5,zeronulls(turnOverDatg2017Q4) );
    pturnChart.setBounds("12%", "12%", "75%", 175)
    var pvetX = pturnChart.addCategoryAxis("x", "Indicator_Value")
    var pvetY = pturnChart.addMeasureAxis("y", "Amount");
    pturnChart.addSeries("Indicator_Value", dimple.plot.bar);
    pvetY.tickFormat = '.1%';
    pvetY.title = "Turnover Rate";

    pturnChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
    pturnChart.assignColor("High school", "#ff5c33", "black", 0.7);
    pturnChart.assignColor("Some college", "#66ff66", "black", 0.7);
    pturnChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
    pturnChart.assignColor("N/A", "#919191", "black", 0.7);

    pturnChart.assignColor("Male", "#3366ff", "black", 0.7);
    pturnChart.assignColor("Female", "pink", "black", 0.7);

    pturnChart.draw();

    pvetX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
    pvetX.title = " ";

    //
    // Tab 4 Chart 1 Industry Metrics
    //

    let wdata = dimple.filterData(data, "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"])

    let iwdata0 = dimple.filterData(wdata, "Indicator", "Maryland Workers by Industry")
    window.iwdata1 = dimple.filterData(iwdata0, "Time", "2016Q1");
    window.iwdata2 = dimple.filterData(iwdata0, "Time", "2016Q2");
    window.iwdata3 = dimple.filterData(iwdata0, "Time", "2016Q3");
    window.iwdata4 = dimple.filterData(iwdata0, "Time", "2016Q4");
    window.iwdata5 = dimple.filterData(iwdata0, "Time", "2017Q1");
    window.iwdata6 = dimple.filterData(iwdata0, "Time", "2017Q2");
    window.iwdata7 = dimple.filterData(iwdata0, "Time", "2017Q3");
    window.iwdata8 = dimple.filterData(iwdata0, "Time", "2017Q4");
    window.iwdata9 = dimple.filterData(iwdata0, "Time", "2018Q1");
    window.iwdata10 = dimple.filterData(iwdata0, "Time", "2018Q2");
    window.iwdata11 = dimple.filterData(iwdata0, "Time", "2018Q3");
    window.iwdata12 = dimple.filterData(iwdata0, "Time", "2018Q4");
    window.iwdata13 = dimple.filterData(iwdata0, "Time", "2019Q1");
    window.iwdata14 = dimple.filterData(iwdata0, "Time", "2019Q2");
    window.iwdata15 = dimple.filterData(iwdata0, "Time", "2019Q3");
    window.iwdata16 = dimple.filterData(iwdata0, "Time", "2019Q4");

    let iwData2 = dimple.filterData(wdata, "Indicator", "Maryland Average Earnings by Industry")
    window.avgdata1 = dimple.filterData(iwData2, "Time", "2016Q1");
    window.avgdata2 = dimple.filterData(iwData2, "Time", "2016Q2");
    window.avgdata3 = dimple.filterData(iwData2, "Time", "2016Q3");
    window.avgdata4 = dimple.filterData(iwData2, "Time", "2016Q4");
    window.avgdata5 = dimple.filterData(iwData2, "Time", "2017Q1");
    window.avgdata6 = dimple.filterData(iwData2, "Time", "2017Q2");
    window.avgdata7 = dimple.filterData(iwData2, "Time", "2017Q3");
    window.avgdata8 = dimple.filterData(iwData2, "Time", "2017Q4");
    window.avgdata9 = dimple.filterData(iwData2, "Time", "2018Q1");
    window.avgdata10 = dimple.filterData(iwData2, "Time", "2018Q2");
    window.avgdata11 = dimple.filterData(iwData2, "Time", "2018Q3");
    window.avgdata12 = dimple.filterData(iwData2, "Time", "2018Q4");
    window.avgdata13 = dimple.filterData(iwData2, "Time", "2019Q1");
    window.avgdata14 = dimple.filterData(iwData2, "Time", "2019Q2");
    window.avgdata15 = dimple.filterData(iwData2, "Time", "2019Q3");
    window.avgdata16 = dimple.filterData(iwData2, "Time", "2019Q4");

    let iwData3 = dimple.filterData(wdata, "Indicator", "Maryland Job Net Change by Industry")
    window.netdata1 = dimple.filterData(iwData3, "Time", "2016Q1");
    window.netdata2 = dimple.filterData(iwData3, "Time", "2016Q2");
    window.netdata3 = dimple.filterData(iwData3, "Time", "2016Q3");
    window.netdata4 = dimple.filterData(iwData3, "Time", "2016Q4");
    window.netdata5 = dimple.filterData(iwData3, "Time", "2017Q1");
    window.netdata6 = dimple.filterData(iwData3, "Time", "2017Q2");
    window.netdata7 = dimple.filterData(iwData3, "Time", "2017Q3");
    window.netdata8 = dimple.filterData(iwData3, "Time", "2017Q4");
    window.netdata9 = dimple.filterData(iwData3, "Time", "2018Q1");
    window.netdata10 = dimple.filterData(iwData3, "Time", "2018Q2");
    window.netdata11 = dimple.filterData(iwData3, "Time", "2018Q3");
    window.netdata12 = dimple.filterData(iwData3, "Time", "2018Q4");
    window.netdata13 = dimple.filterData(iwData3, "Time", "2019Q1");
    window.netdata14 = dimple.filterData(iwData3, "Time", "2019Q2");
    window.netdata15 = dimple.filterData(iwData3, "Time", "2019Q3");
    window.netdata16 = dimple.filterData(iwData3, "Time", "2019Q4");

    let iwData4 = dimple.filterData(wdata, "Indicator", "Maryland Turnover Rate by Industry")
    window.turndata1 = dimple.filterData(iwData4, "Time", "2016Q1");
    window.turndata2 = dimple.filterData(iwData4, "Time", "2016Q2");
    window.turndata3 = dimple.filterData(iwData4, "Time", "2016Q3");
    window.turndata4 = dimple.filterData(iwData4, "Time", "2016Q4");
    window.turndata5 = dimple.filterData(iwData4, "Time", "2017Q1");
    window.turndata6 = dimple.filterData(iwData4, "Time", "2017Q2");
    window.turndata7 = dimple.filterData(iwData4, "Time", "2017Q3");
    window.turndata8 = dimple.filterData(iwData4, "Time", "2017Q4");
    window.turndata9 = dimple.filterData(iwData4, "Time", "2018Q1");
    window.turndata10 = dimple.filterData(iwData4, "Time", "2018Q2");
    window.turndata11 = dimple.filterData(iwData4, "Time", "2018Q3");
    window.turndata12 = dimple.filterData(iwData4, "Time", "2018Q4");
    window.turndata13 = dimple.filterData(iwData4, "Time", "2019Q1");
    window.turndata14 = dimple.filterData(iwData4, "Time", "2019Q2");
    window.turndata15 = dimple.filterData(iwData4, "Time", "2019Q3");
    window.turndata16 = dimple.filterData(iwData4, "Time", "2019Q4");

    let iwData5 = dimple.filterData(wdata, "Indicator", "Maryland New Hires by Industry")
    window.hiredata1 = dimple.filterData(iwData5, "Time", "2016Q1");
    window.hiredata2 = dimple.filterData(iwData5, "Time", "2016Q2");
    window.hiredata3 = dimple.filterData(iwData5, "Time", "2016Q3");
    window.hiredata4 = dimple.filterData(iwData5, "Time", "2016Q4");
    window.hiredata5 = dimple.filterData(iwData5, "Time", "2017Q1");
    window.hiredata6 = dimple.filterData(iwData5, "Time", "2017Q2");
    window.hiredata7 = dimple.filterData(iwData5, "Time", "2017Q3");
    window.hiredata8 = dimple.filterData(iwData5, "Time", "2017Q4");
    window.hiredata9 = dimple.filterData(iwData5, "Time", "2018Q1");
    window.hiredata10 = dimple.filterData(iwData5, "Time", "2018Q2");
    window.hiredata11 = dimple.filterData(iwData5, "Time", "2018Q3");
    window.hiredata12 = dimple.filterData(iwData5, "Time", "2018Q4");
    window.hiredata13 = dimple.filterData(iwData5, "Time", "2019Q1");
    window.hiredata14 = dimple.filterData(iwData5, "Time", "2019Q2");
    window.hiredata15 = dimple.filterData(iwData5, "Time", "2019Q3");
    window.hiredata16 = dimple.filterData(iwData5, "Time", "2019Q4");

    window.displayIndustryMetricsTable = (wdatax,hiredatax,avgdatax,netdatax,turndatax)=>{

        let tableOrder = ['Agriculture, Forestry, Fishing and Hunting', 'Mining, Quarrying, and Oil and Gas Extraction', 'Utilities', 'Construction', 'Manufacturing', 'Wholesale Trade', 'Retail Trade', 'Transportation and Warehousing', 'Information', 'Finance and Insurance', 'Real Estate and Rental and Leasing', 'Professional, Scientific, and Technical Services', 'Management of Companies and Enterprises', 'Administrative and Support and Waste Management and Remediation Services', 'Educational Services', 'Health Care and Social Assistance', 'Arts, Entertainment, and Recreation', 'Accommodation and Food Services', 'Other Services (except Public Administration)', 'Public Administration']
        let filterForData = (objArr,indx)=>{
            return objArr.filter(obj=>{
                return obj['Indicator_Value'] == tableOrder[indx]
            }
            )[0]
        }

        return `
         <tr class="HeadRow">
            <th>Year and Quarter</th>
            <th></th>
            <th ></th>
            <th></th>
            <th>${!wdatax[0] ? "" : wdatax[0]['Time']}</th>
            <th></th>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 0)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 0)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 0)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 0)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 0)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 0)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 1)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 1)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 1)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 1)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 1)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 1)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 2)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 2)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 2)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 2)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 2)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 2)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 3)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 3)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 3)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 3)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 3)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 3)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 4)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 4)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 4)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 4)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 4)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 4)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 5)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 5)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 5)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 5)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 5)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 5)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 6)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 6)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 6)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 6)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 6)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 6)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 7)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 7)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 7)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 7)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 7)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 7)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 8)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 8)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 8)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 8)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 8)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 8)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 9)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 9)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 9)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 9)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 9)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 9)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 10)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 10)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 10)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 10)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 10)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 10)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 11)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 11)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 11)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 11)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 11)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 11)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 12)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 12)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 12)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 12)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 12)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 12)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 13)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 13)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 13)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 13)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 13)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 13)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 14)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 14)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 14)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 14)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 14)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 14)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 15)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 15)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 15)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 15)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 15)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 15)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 16)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 16)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 16)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 16)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 16)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 16)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 17)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 17)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 17)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 17)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 17)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 17)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax, 18)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 18)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 18)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 18)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 18)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 18)['Amount'])}</td>
         </tr>
         <tr class="FootRow">
            <th>${filterForData(wdatax, 19)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax, 19)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax, 19)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax, 19)['Amount'])}</td>
            <td>${cma(filterForData(netdatax, 19)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax, 19)['Amount'])}</td>
         </tr>
    `
    }
    document.getElementById('table6').innerHTML = `
      <thead>
         <tr>
            <th class="HeadRow" rowspan="7">LWDA Data by Industry</th>
         </tr>
         <tr class="HeadRow" style="background-color: white;">
            <th>Workers</th>
            <th>New Hires</th>
            <th>Average Monthly Earnings</th>
            <th>Job Net Change</th>
            <th>Turnover Rate</th>
         </tr>
      </thead>
      <tbody>
        ${!iwdata16[0] ? '' : displayIndustryMetricsTable(iwdata16, hiredata16, avgdata16, netdata16, turndata16)} 
        ${!iwdata15[0] ? '' : displayIndustryMetricsTable(iwdata15, hiredata15, avgdata15, netdata15, turndata15)} 
        ${!iwdata14[0] ? '' : displayIndustryMetricsTable(iwdata14, hiredata14, avgdata14, netdata14, turndata14)} 
        ${!iwdata13[0] ? '' : displayIndustryMetricsTable(iwdata13, hiredata13, avgdata13, netdata13, turndata13)} 
        ${!iwdata12[0] ? '' : displayIndustryMetricsTable(iwdata12, hiredata12, avgdata12, netdata12, turndata12)} 
        ${!iwdata11[0] ? '' : displayIndustryMetricsTable(iwdata11, hiredata11, avgdata11, netdata11, turndata11)} 
        ${!iwdata10[0] ? '' : displayIndustryMetricsTable(iwdata10, hiredata10, avgdata10, netdata10, turndata10)}        
        ${displayIndustryMetricsTable(iwdata9, hiredata9, avgdata9, netdata9, turndata9)} 
        ${displayIndustryMetricsTable(iwdata8, hiredata8, avgdata8, netdata8, turndata8)} 
        ${displayIndustryMetricsTable(iwdata7, hiredata7, avgdata7, netdata7, turndata7)} 
        ${displayIndustryMetricsTable(iwdata6, hiredata6, avgdata6, netdata6, turndata6)} 
        ${displayIndustryMetricsTable(iwdata5, hiredata5, avgdata5, netdata5, turndata5)} 
        ${displayIndustryMetricsTable(iwdata4, hiredata4, avgdata4, netdata4, turndata4)} 
        ${displayIndustryMetricsTable(iwdata3, hiredata3, avgdata3, netdata3, turndata3)} 
        ${displayIndustryMetricsTable(iwdata2, hiredata2, avgdata2, netdata2, turndata2)}
        ${displayIndustryMetricsTable(iwdata1, hiredata1, avgdata1, netdata1, turndata1)}
      </tbody>
  `

    window.chart8 = new dimple.chart(svg6,zeronulls(iwdata8) );
    chart8.setBounds("9%", "12%", "55%", "55%")
    var x2 = chart8.addCategoryAxis("x", ["Time", "Indicator_Value"]);
    var y2 = chart8.addMeasureAxis("y", "Amount");
    y2.tickFormat = ',.0f';
    var series8 = chart8.addSeries("Indicator_Value", dimple.plot.bar);
    var qLegend = chart8.addLegend("65%", "5%", "40%", "95%");
    qLegend.fontSize = "1px";
    series8.addOrderRule(true);
    chart8.assignColor("Accommodation and Food Services", "red", "black", 0.8);
    chart8.assignColor("Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8);
    chart8.assignColor("Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8);
    chart8.assignColor("Arts, Entertainment, and Recreation", "blue", "black", 0.8);
    chart8.assignColor("Construction", "Orange", "black", 0.8);
    chart8.assignColor("Educational Services", "Purple", "black", 0.8);
    chart8.assignColor("Finance and Insurance", "Cyan", "black", 0.8);
    chart8.assignColor("Health Care and Social Assistance", "Magenta", "black", 0.8);

    //needs new colors
    chart8.assignColor("Information", "Lime", "black", 0.8);
    chart8.assignColor("Management of Companies and Enterprises", "Pink", "black", 0.8);

    chart8.assignColor("Manufacturing", "Teal", "black", 0.8);
    chart8.assignColor("Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8);
    chart8.assignColor("Other Services (except Public Administration)", "Brown", "black", 0.8);
    chart8.assignColor("Professional, Scientific, and Technical Services", "Beige", "black", 0.8);
    chart8.assignColor("Public Administration", "Maroon", "black", 0.8);
    chart8.assignColor("Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8);
    chart8.assignColor("Retail Trade", "Olive", "black", 0.8);
    chart8.assignColor("Transportation and Warehousing", "Coral", "black", 0.8);
    chart8.assignColor("Utilities", "Navy", "black", 0.8);
    chart8.assignColor("Wholesale Trade", "Grey", "black", 0.8);

    chart8.draw();

    y2.title = 'Placeholder';
    x2.title = " ";

    window.pchart8 = new dimple.chart(print6,zeronulls(iwdata8) );
    pchart8.setBounds("14%", "12%", "45%", 250)
    var px2 = pchart8.addCategoryAxis("x", ["Time", "Indicator_Value"]);
    var py2 = pchart8.addMeasureAxis("y", "Amount");
    py2.tickFormat = ',.1f';
    var pseries8 = pchart8.addSeries("Indicator_Value", dimple.plot.bar);
    var pqLegend = pchart8.addLegend("65%", "5%", "40%", "95%");
    pqLegend.fontSize = "1px";
    pseries8.addOrderRule(true);

    pchart8.assignColor("Accommodation and Food Services", "red", "black", 0.8);
    pchart8.assignColor("Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8);
    pchart8.assignColor("Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8);
    pchart8.assignColor("Arts, Entertainment, and Recreation", "blue", "black", 0.8);
    pchart8.assignColor("Construction", "Orange", "black", 0.8);
    pchart8.assignColor("Educational Services", "Purple", "black", 0.8);
    pchart8.assignColor("Finance and Insurance", "Cyan", "black", 0.8);
    pchart8.assignColor("Health Care and Social Assistance", "Magenta", "black", 0.8);

    //needs new colors
    pchart8.assignColor("Information", "Lime", "black", 0.8);
    pchart8.assignColor("Management of Companies and Enterprises", "Pink", "black", 0.8);

    pchart8.assignColor("Manufacturing", "Teal", "black", 0.8);
    pchart8.assignColor("Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8);
    pchart8.assignColor("Other Services (except Public Administration)", "Brown", "black", 0.8);
    pchart8.assignColor("Professional, Scientific, and Technical Services", "Beige", "black", 0.8);
    pchart8.assignColor("Public Administration", "Maroon", "black", 0.8);
    pchart8.assignColor("Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8);
    pchart8.assignColor("Retail Trade", "Olive", "black", 0.8);
    pchart8.assignColor("Transportation and Warehousing", "Coral", "black", 0.8);
    pchart8.assignColor("Utilities", "Navy", "black", 0.8);
    pchart8.assignColor("Wholesale Trade", "Grey", "black", 0.8);
    pchart8.draw();
    py2.title = 'Placeholder2';
    px2.title = " ";

    //seperation

    //
    //chart 8 button
    //

    //seperation
    let indusep = dimple.filterData(data, "Indicator", "Maryland Separations by Industry")
    indusep = dimple.filterData(indusep, "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"])

    window.isepdata1 = dimple.filterData(indusep, "Time", "2016Q1")
    window.isepdata2 = dimple.filterData(indusep, "Time", "2016Q2")
    window.isepdata3 = dimple.filterData(indusep, "Time", "2016Q3")
    window.isepdata4 = dimple.filterData(indusep, "Time", "2016Q4")
    window.isepdata5 = dimple.filterData(indusep, "Time", "2017Q1")
    window.isepdata6 = dimple.filterData(indusep, "Time", "2017Q2")
    window.isepdata7 = dimple.filterData(indusep, "Time", "2017Q3")
    window.isepdata8 = dimple.filterData(indusep, "Time", "2017Q4")
    window.isepdata9 = dimple.filterData(indusep, "Time", "2018Q1")
    window.isepdata10 = dimple.filterData(indusep, "Time", "2018Q2")
    window.isepdata11 = dimple.filterData(indusep, "Time", "2018Q3")
    window.isepdata12 = dimple.filterData(indusep, "Time", "2018Q4")
    window.isepdata13 = dimple.filterData(indusep, "Time", "2019Q1")
    window.isepdata14 = dimple.filterData(indusep, "Time", "2019Q2")
    window.isepdata15 = dimple.filterData(indusep, "Time", "2019Q3")
    window.isepdata16 = dimple.filterData(indusep, "Time", "2019Q4")

    let agesep = dimple.filterData(data, "Indicator", "Maryland Separations by Age")
    window.asepdata1 = dimple.filterData(agesep, "Time", "2016Q1")
    window.asepdata2 = dimple.filterData(agesep, "Time", "2016Q2")
    window.asepdata3 = dimple.filterData(agesep, "Time", "2016Q3")
    window.asepdata4 = dimple.filterData(agesep, "Time", "2016Q4")
    window.asepdata5 = dimple.filterData(agesep, "Time", "2017Q1")
    window.asepdata6 = dimple.filterData(agesep, "Time", "2017Q2")
    window.asepdata7 = dimple.filterData(agesep, "Time", "2017Q3")
    window.asepdata8 = dimple.filterData(agesep, "Time", "2017Q4")
    window.asepdata9 = dimple.filterData(agesep, "Time", "2018Q1")
    window.asepdata10 = dimple.filterData(agesep, "Time", "2018Q2")
    window.asepdata11 = dimple.filterData(agesep, "Time", "2018Q3")
    window.asepdata12 = dimple.filterData(agesep, "Time", "2018Q4")
    window.asepdata13 = dimple.filterData(agesep, "Time", "2019Q1")
    window.asepdata14 = dimple.filterData(agesep, "Time", "2019Q2")
    window.asepdata15 = dimple.filterData(agesep, "Time", "2019Q3")
    window.asepdata16 = dimple.filterData(agesep, "Time", "2019Q4")

    let gensep = dimple.filterData(data, "Indicator", "Maryland Separations by Gender")
    window.gsepdata1 = dimple.filterData(gensep, "Time", "2016Q1")
    window.gsepdata2 = dimple.filterData(gensep, "Time", "2016Q2")
    window.gsepdata3 = dimple.filterData(gensep, "Time", "2016Q3")
    window.gsepdata4 = dimple.filterData(gensep, "Time", "2016Q4")
    window.gsepdata5 = dimple.filterData(gensep, "Time", "2017Q1")
    window.gsepdata6 = dimple.filterData(gensep, "Time", "2017Q2")
    window.gsepdata7 = dimple.filterData(gensep, "Time", "2017Q3")
    window.gsepdata8 = dimple.filterData(gensep, "Time", "2017Q4")
    window.gsepdata9 = dimple.filterData(gensep, "Time", "2018Q1")
    window.gsepdata10 = dimple.filterData(gensep, "Time", "2018Q2")
    window.gsepdata11 = dimple.filterData(gensep, "Time", "2018Q3")
    window.gsepdata12 = dimple.filterData(gensep, "Time", "2018Q4")
    window.gsepdata13 = dimple.filterData(gensep, "Time", "2019Q1")
    window.gsepdata14 = dimple.filterData(gensep, "Time", "2019Q2")
    window.gsepdata15 = dimple.filterData(gensep, "Time", "2019Q3")
    window.gsepdata16 = dimple.filterData(gensep, "Time", "2019Q4")

    let edusep = dimple.filterData(data, "Indicator", "Maryland Separations by Education")
    window.esepdata1 = dimple.filterData(edusep, "Time", "2016Q1")
    window.esepdata2 = dimple.filterData(edusep, "Time", "2016Q2")
    window.esepdata3 = dimple.filterData(edusep, "Time", "2016Q3")
    window.esepdata4 = dimple.filterData(edusep, "Time", "2016Q4")
    window.esepdata5 = dimple.filterData(edusep, "Time", "2017Q1")
    window.esepdata6 = dimple.filterData(edusep, "Time", "2017Q2")
    window.esepdata7 = dimple.filterData(edusep, "Time", "2017Q3")
    window.esepdata8 = dimple.filterData(edusep, "Time", "2017Q4")
    window.esepdata9 = dimple.filterData(edusep, "Time", "2018Q1")
    window.esepdata10 = dimple.filterData(edusep, "Time", "2018Q2")
    window.esepdata11 = dimple.filterData(edusep, "Time", "2018Q3")
    window.esepdata12 = dimple.filterData(edusep, "Time", "2018Q4")
    window.esepdata13 = dimple.filterData(edusep, "Time", "2019Q1")
    window.esepdata14 = dimple.filterData(edusep, "Time", "2019Q2")
    window.esepdata15 = dimple.filterData(edusep, "Time", "2019Q3")
    window.esepdata16 = dimple.filterData(edusep, "Time", "2019Q4")

    window.chart61 = new dimple.chart(svg71,zeronulls(isepdata8) );
    chart61.setBounds("9%", "12%", "55%", "55%")
    var px2 = chart61.addCategoryAxis("x", ["Time", "Indicator_Value"]);
    var sepy2 = chart61.addMeasureAxis("y", "Amount");
    sepy2.tickFormat = ',.0f';
    var pseries8 = chart61.addSeries("Indicator_Value", dimple.plot.bar);
    var pqLegend = chart61.addLegend("65%", "5%", "40%", "95%");
    pqLegend.fontSizechart61 = "1px";
    pseries8.addOrderRule(true);

    chart61.assignColor("Accommodation and Food Services", "red", "black", 0.8);
    chart61.assignColor("Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8);
    chart61.assignColor("Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8);
    chart61.assignColor("Arts, Entertainment, and Recreation", "blue", "black", 0.8);
    chart61.assignColor("Construction", "Orange", "black", 0.8);
    chart61.assignColor("Educational Services", "Purple", "black", 0.8);
    chart61.assignColor("Finance and Insurance", "Cyan", "black", 0.8);
    chart61.assignColor("Health Care and Social Assistance", "Magenta", "black", 0.8);

    //needs new colors
    chart61.assignColor("Information", "Lime", "black", 0.8);
    chart61.assignColor("Management of Companies and Enterprises", "Pink", "black", 0.8);

    chart61.assignColor("Manufacturing", "Teal", "black", 0.8);
    chart61.assignColor("Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8);
    chart61.assignColor("Other Services (except Public Administration)", "Brown", "black", 0.8);
    chart61.assignColor("Professional, Scientific, and Technical Services", "Beige", "black", 0.8);
    chart61.assignColor("Public Administration", "Maroon", "black", 0.8);
    chart61.assignColor("Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8);
    chart61.assignColor("Retail Trade", "Olive", "black", 0.8);
    chart61.assignColor("Transportation and Warehousing", "Coral", "black", 0.8);
    chart61.assignColor("Utilities", "Navy", "black", 0.8);
    chart61.assignColor("Wholesale Trade", "Grey", "black", 0.8);
    chart61.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
    chart61.assignColor("High school", "#ff5c33", "black", 0.7);
    chart61.assignColor("Some college", "#66ff66", "black", 0.7);
    chart61.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
    chart61.assignColor("N/A", "#919191", "black", 0.7);
    chart61.assignColor("14-18", "#4dc3ff", "black", 0.7);
    chart61.assignColor("19-21", "#ff5c33", "black", 0.7);
    chart61.assignColor("22-24", "#66ff66", "black", 0.7);
    chart61.assignColor("25-34", "#ffdb4d", "black", 0.7);
    chart61.assignColor("35-44", "#ffb84d", "black", 0.7);
    chart61.assignColor("45-54", "#00cccc", "black", 0.7);
    chart61.assignColor("55-64", "#6666ff", "black", 0.7);
    chart61.assignColor("65-99", "#ffcc99", "black", 0.7);

    chart61.assignColor("Male", "#3366ff", "black", 0.7);
    chart61.assignColor("Female", "pink", "black", 0.7);

    sepy2.title = "Separations";
    px2.title = " ";

    chart61.draw();

    window.pchart61 = new dimple.chart(print71,zeronulls(isepdata8) );
    pchart61.setBounds("9%", "12%", "50%", 300)
    var px2 = pchart61.addCategoryAxis("x", ["Time", "Indicator_Value"]);
    var psepy2 = pchart61.addMeasureAxis("y", "Amount");
    psepy2.tickFormat = ',.0f';
    var pseries8 = pchart61.addSeries("Indicator_Value", dimple.plot.bar);
    var pqLegend = pchart61.addLegend("65%", "5%", "40%", "95%");
    pqLegend.fontSize = "1px";
    pseries8.addOrderRule(true);

    pchart61.assignColor("Accommodation and Food Services", "red", "black", 0.8);
    pchart61.assignColor("Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8);
    pchart61.assignColor("Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8);
    pchart61.assignColor("Arts, Entertainment, and Recreation", "blue", "black", 0.8);
    pchart61.assignColor("Construction", "Orange", "black", 0.8);
    pchart61.assignColor("Educational Services", "Purple", "black", 0.8);
    pchart61.assignColor("Finance and Insurance", "Cyan", "black", 0.8);
    pchart61.assignColor("Health Care and Social Assistance", "Magenta", "black", 0.8);

    //needs new colors
    pchart61.assignColor("Information", "Lime", "black", 0.8);
    pchart61.assignColor("Management of Companies and Enterprises", "Pink", "black", 0.8);

    pchart61.assignColor("Manufacturing", "Teal", "black", 0.8);
    pchart61.assignColor("Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8);
    pchart61.assignColor("Other Services (except Public Administration)", "Brown", "black", 0.8);
    pchart61.assignColor("Professional, Scientific, and Technical Services", "Beige", "black", 0.8);
    pchart61.assignColor("Public Administration", "Maroon", "black", 0.8);
    pchart61.assignColor("Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8);
    pchart61.assignColor("Retail Trade", "Olive", "black", 0.8);
    pchart61.assignColor("Transportation and Warehousing", "Coral", "black", 0.8);
    pchart61.assignColor("Utilities", "Navy", "black", 0.8);
    pchart61.assignColor("Wholesale Trade", "Grey", "black", 0.8);
    pchart61.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
    pchart61.assignColor("High school", "#ff5c33", "black", 0.7);
    pchart61.assignColor("Some college", "#66ff66", "black", 0.7);
    pchart61.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
    pchart61.assignColor("N/A", "#919191", "black", 0.7);
    pchart61.assignColor("14-18", "#4dc3ff", "black", 0.7);
    pchart61.assignColor("19-21", "#ff5c33", "black", 0.7);
    pchart61.assignColor("22-24", "#66ff66", "black", 0.7);
    pchart61.assignColor("25-34", "#ffdb4d", "black", 0.7);
    pchart61.assignColor("35-44", "#ffb84d", "black", 0.7);
    pchart61.assignColor("45-54", "#00cccc", "black", 0.7);
    pchart61.assignColor("55-64", "#6666ff", "black", 0.7);
    pchart61.assignColor("65-99", "#ffcc99", "black", 0.7);

    pchart61.assignColor("Male", "#3366ff", "black", 0.7);
    pchart61.assignColor("Female", "pink", "black", 0.7);

    psepy2.title = "Placeholder 4";
    px2.title = " ";

    pchart61.draw();

    //chart 8 button

    window.indsList = ["Agriculture, Forestry, Fishing and Hunting", "Mining, Quarrying, and Oil and Gas Extraction", "Utilities", "Construction", "Manufacturing", "Wholesale Trade", "Retail Trade", "Transportation and Warehousing", "Information", "Finance and Insurance", "Real Estate and Rental and Leasing", "Professional, Scientific, and Technical Services", "Management of Companies and Enterprises", "Administrative and Support and Waste Management and Remediation Services", "Educational Services", "Health Care and Social Assistance", "Arts, Entertainment, and Recreation", "Accommodation and Food Services", "Other Services (except Public Administration)", "Public Administration", ]
    window.findIndustry = (objArr,indx)=>{
        let returnThis = objArr.filter(obj=>{
            return obj['Indicator_Value'] == window.indsList[indx]
        }
        )[0]
        returnThis = returnThis == undefined ? '--' : returnThis['Amount']
        return returnThis
    }

    //
    // Industry: Not For Maryland
    //
    let showRecordSepeartions = (y1,y2,y3,y4,y5,y6,y7,y8,y9,y10,y11,y12,y13,y14,y15,y16,pos)=>{
        return `<tr>
	    <td>${window.indsList[pos]}</td>
	    <td>${cma(findIndustry(y1, pos))}</td> 
	    <td>${cma(findIndustry(y2, pos))}</td> 
	    <td>${cma(findIndustry(y3, pos))}</td> 
	    <td>${cma(findIndustry(y4, pos))}</td> 
	    <td>${cma(findIndustry(y5, pos))}</td> 
	    <td>${cma(findIndustry(y6, pos))}</td> 
	    <td>${cma(findIndustry(y7, pos))}</td> 
	    <td>${cma(findIndustry(y8, pos))}</td> 
	    <td>${cma(findIndustry(y9, pos))}</td> 
	    <td>${cma(findIndustry(y10, pos))}</td> 
	    <td>${cma(findIndustry(y11, pos))}</td> 
	    <td>${cma(findIndustry(y12, pos))}</td> 
	    <td>${cma(findIndustry(y13, pos))}</td> 
	    <td>${cma(findIndustry(y14, pos))}</td> 
	    <td>${cma(findIndustry(y15, pos))}</td> 
	    <td>${cma(findIndustry(y16, pos))}</td> 
      </tr>`
    }
    //
    // findGender
    //
    //
    let showLbldRecordGend = (lbl,y1,y2,y3,y4,y5,y6,y7,y8,y9,y10,y11,y12,y13,y14,y15,y16,pos)=>{
        return `
	    <tr> <td>${lbl}</td> 
	    <td>${cma(findGender(y1, pos))}</td> 
	    <td>${cma(findGender(y2, pos))}</td> 
	    <td>${cma(findGender(y3, pos))}</td> 
	    <td>${cma(findGender(y4, pos))}</td> 
	    <td>${cma(findGender(y5, pos))}</td> 
	    <td>${cma(findGender(y6, pos))}</td> 
	    <td>${cma(findGender(y7, pos))}</td> 
	    <td>${cma(findGender(y8, pos))}</td> 
	    <td>${cma(findGender(y9, pos))}</td> 
	    <td>${cma(findGender(y10, pos))}</td> 
	    <td>${cma(findGender(y12, pos))}</td> 
	    <td>${cma(findGender(y13, pos))}</td> 
	    <td>${cma(findGender(y14, pos))}</td> 
	    <td>${cma(findGender(y15, pos))}</td> 
	    </tr>
  `
    }
    //
    // findEdu
    //
    //
    let showLbldRecordEdu = (lbl,y1,y2,y3,y4,y5,y6,y7,y8,y9,y10,y11,y12,y13,y14,y15,y16,pos)=>{
        return `
	    <tr> <td>${lbl}</td> 
	    <td>${cma(findEdu(y1, pos))}</td> 
	    <td>${cma(findEdu(y2, pos))}</td> 
	    <td>${cma(findEdu(y3, pos))}</td> 
	    <td>${cma(findEdu(y4, pos))}</td> 
	    <td>${cma(findEdu(y5, pos))}</td> 
	    <td>${cma(findEdu(y6, pos))}</td> 
	    <td>${cma(findEdu(y7, pos))}</td> 
	    <td>${cma(findEdu(y8, pos))}</td> 
	    <td>${cma(findEdu(y9, pos))}</td> 
	    <td>${cma(findEdu(y10, pos))}</td> 
	    <td>${cma(findEdu(y12, pos))}</td> 
	    <td>${cma(findEdu(y13, pos))}</td> 
	    <td>${cma(findEdu(y14, pos))}</td> 
	    <td>${cma(findEdu(y15, pos))}</td> 
	    </tr>
  `
    }
    //
    // findAge
    //
    //
    let showLbldRecordAge = (lbl,y1,y2,y3,y4,y5,y6,y7,y8,y9,y10,y11,y12,y13,y14,y15,y16,pos)=>{
        return `
	    <tr> <td>${lbl}</td> 
	    <td>${cma(findAge(y1, pos))}</td> 
	    <td>${cma(findAge(y2, pos))}</td> 
	    <td>${cma(findAge(y3, pos))}</td> 
	    <td>${cma(findAge(y4, pos))}</td> 
	    <td>${cma(findAge(y5, pos))}</td> 
	    <td>${cma(findAge(y6, pos))}</td> 
	    <td>${cma(findAge(y7, pos))}</td> 
	    <td>${cma(findAge(y8, pos))}</td> 
	    <td>${cma(findAge(y9, pos))}</td> 
	    <td>${cma(findAge(y10, pos))}</td> 
	    <td>${cma(findAge(y12, pos))}</td> 
	    <td>${cma(findAge(y13, pos))}</td> 
	    <td>${cma(findAge(y14, pos))}</td> 
	    <td>${cma(findAge(y15, pos))}</td> 
	    </tr>
  `
    }

    // let notMdisepdata = CountyName == 'Maryland' ? '' : `
    let notMdisepdata = `
       <thead>
        <tr> <th class="HeadRow">Separations by Industry</th> 
          <th class="HeadRow">2016Q1</th>
          <th class="HeadRow">2016Q2</th>
          <th class="HeadRow">2016Q3</th>
          <th class="HeadRow">2016Q4</th>
          <th class="HeadRow">2017Q1</th>
          <th class="HeadRow">2017Q2</th>
          <th class="HeadRow">2017Q3</th>
          <th class="HeadRow">2017Q4</th> 
          <th class="HeadRow">2018Q1</th>
          <th class="HeadRow">2018Q2</th>
          <th class="HeadRow">2018Q3</th>
          <th class="HeadRow">2018Q4</th>
          <th class="HeadRow">2019Q1</th>
          <th class="HeadRow">2019Q2</th>
          <th class="HeadRow">2019Q3</th>
        </tr>
       </thead>
       <tbody>
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 0)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 1)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 2)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 3)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 4)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 5)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 6)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 7)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 8)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 9)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 10)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 11)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 12)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 13)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 14)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 15)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 16)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 17)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 18)}
          ${showRecordSepeartions(isepdata1, isepdata2, isepdata3, isepdata4, isepdata5, isepdata6, isepdata7, isepdata8, isepdata9, isepdata10, isepdata11, isepdata12, isepdata13, isepdata14, isepdata15, isepdata16, 19)}
       </tbody>
    `
    document.getElementById('table15').innerHTML = `
       ${notMdisepdata}
       <thead>
        <tr> <th class="HeadRow">Separations by Gender</th> 
          <th class="HeadRow">2016Q1</th>
          <th class="HeadRow">2016Q2</th>
          <th class="HeadRow">2016Q3</th>
          <th class="HeadRow">2016Q4</th>
          <th class="HeadRow">2017Q1</th>
          <th class="HeadRow">2017Q2</th>
          <th class="HeadRow">2017Q3</th>
          <th class="HeadRow">2017Q4</th> 
          <th class="HeadRow">2018Q1</th>
          <th class="HeadRow">2018Q2</th>
          <th class="HeadRow">2018Q3</th>
          <th class="HeadRow">2018Q4</th>
          <th class="HeadRow">2019Q1</th>
          <th class="HeadRow">2019Q2</th>
          <th class="HeadRow">2019Q3</th>
        </tr>
       </thead>
       <tbody>
          ${showLbldRecordGend('Male', gsepdata1, gsepdata2, gsepdata3, gsepdata4, gsepdata5, gsepdata6, gsepdata7, gsepdata8, gsepdata9, gsepdata10, gsepdata11, gsepdata12, gsepdata13, gsepdata14, gsepdata15, gsepdata16, 0)}
          ${showLbldRecordGend('Female', gsepdata1, gsepdata2, gsepdata3, gsepdata4, gsepdata5, gsepdata6, gsepdata7, gsepdata8, gsepdata9, gsepdata10, gsepdata11, gsepdata12, gsepdata13, gsepdata14, gsepdata15, gsepdata16, 1)}
       </tbody>
       <thead>
        <tr> <th class="HeadRow">Separations by Education</th> 
          <th class="HeadRow">2016Q1</th>
          <th class="HeadRow">2016Q2</th>
          <th class="HeadRow">2016Q3</th>
          <th class="HeadRow">2016Q4</th>
          <th class="HeadRow">2017Q1</th>
          <th class="HeadRow">2017Q2</th>
          <th class="HeadRow">2017Q3</th>
          <th class="HeadRow">2017Q4</th> 
          <th class="HeadRow">2018Q1</th>
          <th class="HeadRow">2018Q2</th>
          <th class="HeadRow">2018Q3</th>
          <th class="HeadRow">2018Q4</th>
          <th class="HeadRow">2019Q1</th>
          <th class="HeadRow">2019Q2</th>
          <th class="HeadRow">2019Q3</th>
        </tr>
       </thead>
       <tbody>
          ${showLbldRecordEdu('Less than High school', esepdata1, esepdata2, esepdata3, esepdata4, esepdata5, esepdata6, esepdata7, esepdata8, esepdata9, esepdata10, esepdata11, esepdata12, esepdata13, esepdata14, esepdata15, esepdata16, 0)}
          ${showLbldRecordEdu('High school', esepdata1, esepdata2, esepdata3, esepdata4, esepdata5, esepdata6, esepdata7, esepdata8, esepdata9, esepdata10, esepdata11, esepdata12, esepdata13, esepdata14, esepdata15, esepdata16, 1)}
          ${showLbldRecordEdu('Some College', esepdata1, esepdata2, esepdata3, esepdata4, esepdata5, esepdata6, esepdata7, esepdata8, esepdata9, esepdata10, esepdata11, esepdata12, esepdata13, esepdata14, esepdata15, esepdata16, 2)}
          ${showLbldRecordEdu("Bachelor's or Higher", esepdata1, esepdata2, esepdata3, esepdata4, esepdata5, esepdata6, esepdata7, esepdata8, esepdata9, esepdata10, esepdata11, esepdata12, esepdata13, esepdata14, esepdata15, esepdata16, 3)}
          ${showLbldRecordEdu('NR', esepdata1, esepdata2, esepdata3, esepdata4, esepdata5, esepdata6, esepdata7, esepdata8, esepdata9, esepdata10, esepdata11, esepdata12, esepdata13, esepdata14, esepdata15, esepdata16, 4)}
       </tbody>
       <thead>
        <tr> <th class="HeadRow">Separations by Age</th> 
          <th class="HeadRow">2016Q1</th>
          <th class="HeadRow">2016Q2</th>
          <th class="HeadRow">2016Q3</th>
          <th class="HeadRow">2016Q4</th>
          <th class="HeadRow">2017Q1</th>
          <th class="HeadRow">2017Q2</th>
          <th class="HeadRow">2017Q3</th>
          <th class="HeadRow">2017Q4</th> 
          <th class="HeadRow">2018Q1</th>
          <th class="HeadRow">2018Q2</th>
          <th class="HeadRow">2018Q3</th>
          <th class="HeadRow">2018Q4</th>
          <th class="HeadRow">2019Q1</th>
          <th class="HeadRow">2019Q2</th>
          <th class="HeadRow">2019Q3</th>
        </tr>
       </thead>
       <tbody>
          ${showLbldRecordAge('Age 14-18', asepdata1, asepdata2, asepdata3, asepdata4, asepdata5, asepdata6, asepdata7, asepdata8, asepdata9, asepdata10, asepdata11, asepdata12, asepdata13, asepdata14, asepdata15, asepdata16, 0)}
          ${showLbldRecordAge('Age 19-21', asepdata1, asepdata2, asepdata3, asepdata4, asepdata5, asepdata6, asepdata7, asepdata8, asepdata9, asepdata10, asepdata11, asepdata12, asepdata13, asepdata14, asepdata15, asepdata16, 1)}
          ${showLbldRecordAge('Age 22-24', asepdata1, asepdata2, asepdata3, asepdata4, asepdata5, asepdata6, asepdata7, asepdata8, asepdata9, asepdata10, asepdata11, asepdata12, asepdata13, asepdata14, asepdata15, asepdata16, 2)}
          ${showLbldRecordAge('Age 25-34', asepdata1, asepdata2, asepdata3, asepdata4, asepdata5, asepdata6, asepdata7, asepdata8, asepdata9, asepdata10, asepdata11, asepdata12, asepdata13, asepdata14, asepdata15, asepdata16, 3)}
          ${showLbldRecordAge('Age 35-44', asepdata1, asepdata2, asepdata3, asepdata4, asepdata5, asepdata6, asepdata7, asepdata8, asepdata9, asepdata10, asepdata11, asepdata12, asepdata13, asepdata14, asepdata15, asepdata16, 4)}
          ${showLbldRecordAge('Age 45-54', asepdata1, asepdata2, asepdata3, asepdata4, asepdata5, asepdata6, asepdata7, asepdata8, asepdata9, asepdata10, asepdata11, asepdata12, asepdata13, asepdata14, asepdata15, asepdata16, 5)}
          ${showLbldRecordAge('Age 55-64', asepdata1, asepdata2, asepdata3, asepdata4, asepdata5, asepdata6, asepdata7, asepdata8, asepdata9, asepdata10, asepdata11, asepdata12, asepdata13, asepdata14, asepdata15, asepdata16, 6)}
          ${showLbldRecordAge('Age 65-99', asepdata1, asepdata2, asepdata3, asepdata4, asepdata5, asepdata6, asepdata7, asepdata8, asepdata9, asepdata10, asepdata11, asepdata12, asepdata13, asepdata14, asepdata15, asepdata16, 7)}
       </tbody>
    `

    //
    // Dropdown Trigger
    //

    window.triggerWdaChange = function() {

        y2.tickFormat = ',.0f';

        var e7 = document.getElementById("dropdownMenuQ");
        let e10 = ""
        let c = localStorage.getItem('Clicked');
        if (c == 'collapse1') {
            e10 = document.getElementById("wda_dd_1")
        } else if (c == 'collapse2') {
            e10 = document.getElementById("wda_dd_2")
        } else if (c == 'collapse3') {
            e10 = document.getElementById("wda_dd_3")
        } else if (c == 'collapse4') {
            e10 = document.getElementById("wda_dd_4")
        } else if (c == 'collapse15') {
            e10 = document.getElementById("wda_dd_5")
        } else {
            e10 = document.getElementById("wda_dd_5")
        }

        // indicator
        var strUser7 = e7.options[e7.selectedIndex].text;
        var strUser10 = e10.options[e10.selectedIndex].text;
        let strUser31 = 'By ' + strUser10
        y2.title = strUser10;

        /*                           
            // Tab1 - by age by gen wda_dd_1
            // Tab2 - by edu by gen wda_dd_2
            // Tab1 - by edu by gen wda_dd_3
            // Tab4 - Avg Job New Turn Workers wda_dd_4
            // Tab5 - Industry Gender Education Age
        */
        let handleQuarter = (quarter,iwdata,hiredata,avgdata,netdata,turndata,isepdata,gsepdata,esepdata,asepdata,workData,averageData,jobDatc,newHireDatc,turnOverData,workDatg,averageDatg,jobDatg,newHireDatg,turnOverDatg)=>{
            window.displayIndustryMetricsTable(iwdata, hiredata, avgdata, netdata, turndata)
            // Tab 4
            if (strUser10 == "Average Monthly Earnings") {
                y2.tickFormat = '$,.0f';
                chart8.data = zeronulls(avgdata);
            }
            if (strUser10 == "Job Net Changes") {
                chart8.data = zeronulls(netdata);
            }
            if (strUser10 == "New Hires") {
                chart8.data = zeronulls(hiredata);
            }
            if (strUser10 == "Turnover Rate") {
                y2.tickFormat = '.1%';
                chart8.data = zeronulls(turndata);
            }
            if (strUser10 == "Workers") {
                chart8.data = zeronulls(iwdata);
            }
            // Tabs 1, 2, 3 & 5
            if (["Education", "By Education"].includes(strUser10)) {
                jc.data = zeronulls(jobDatc)
                // tab 2 Chart 3
                newHireChart.data = zeronulls(newHireDatc);
                // tab 2 Chart 4
                turnChart.data = zeronulls(turnOverData);
                // tab 3 chart 5
                chart61.data = zeronulls(esepdata);
                // Tab 5 Chart 7
            }
            if (["Age", "By Age"].includes(strUser10)) {
                wChart.data = zeronulls(workData)
                // tab 1 Chart 1
                avgChart.data = zeronulls(averageData)
                // tab 1 Chart 1
                chart61.data = zeronulls(asepdata);
                // Tab 4
            }
            if (["Gender", "By Gender"].includes(strUser10)) {
                wChart.data = zeronulls(workDatg)
                // tab 1 Chart 1
                avgChart.data = zeronulls(averageDatg)
                // tab 1 Chart 1
                jc.data = zeronulls(jobDatg)
                // tab 2 Chart 3
                newHireChart.data = zeronulls(newHireDatg);
                // tab 2 Chart 4
                turnChart.data = zeronulls(turnOverDatg);
                // tab 3 chart 5
                chart61.data = zeronulls(gsepdata);
                // Tab 4
            }

            if (strUser10 == "Industry") {
                chart61.data = zeronulls(isepdata);
                // Tab 4
            }
        }
        if (strUser7 == "2016-Q1") {
            handleQuarter('2016-Q1', iwdata1, hiredata1, avgdata1, netdata1, turndata1, isepdata1, gsepdata1, esepdata1, asepdata1, workData2016Q1, averageData2016Q1, jobDatc2016Q1, newHireDatc2016Q1, turnOverData2016Q1, workDatg2016Q1, averageDatg2016Q1, jobDatg2016Q1, newHireDatg2016Q1, turnOverDatg2016Q1)
        }
        if (strUser7 == "2016-Q2") {
            handleQuarter('2016-Q2', iwdata2, hiredata2, avgdata2, netdata2, turndata2, isepdata2, gsepdata2, esepdata2, asepdata2, workData2016Q2, averageData2016Q2, jobDatc2016Q2, newHireDatc2016Q2, turnOverData2016Q2, workDatg2016Q2, averageDatg2016Q2, jobDatg2016Q2, newHireDatg2016Q2, turnOverDatg2016Q2)
        }
        if (strUser7 == "2016-Q3") {
            handleQuarter('2016-Q3', iwdata3, hiredata3, avgdata3, netdata3, turndata3, isepdata3, gsepdata3, esepdata3, asepdata3, workData2016Q3, averageData2016Q3, jobDatc2016Q3, newHireDatc2016Q3, turnOverData2016Q3, workDatg2016Q3, averageDatg2016Q3, jobDatg2016Q3, newHireDatg2016Q3, turnOverDatg2016Q3)
        }
        if (strUser7 == "2016-Q4") {
            handleQuarter('2016-Q4', iwdata4, hiredata4, avgdata4, netdata4, turndata4, isepdata4, gsepdata4, esepdata4, asepdata4, workData2016Q4, averageData2016Q4, jobDatc2016Q4, newHireDatc2016Q4, turnOverData2016Q4, workDatg2016Q4, averageDatg2016Q4, jobDatg2016Q4, newHireDatg2016Q4, turnOverDatg2016Q4)
        }
        if (strUser7 == "2017-Q1") {
            handleQuarter('2017-Q1', iwdata5, hiredata5, avgdata5, netdata5, turndata5, isepdata5, gsepdata5, esepdata5, asepdata5, workData2017Q1, averageData2017Q1, jobDatc2017Q1, newHireDatc2017Q1, turnOverData2017Q1, workDatg2017Q1, averageDatg2017Q1, jobDatg2017Q1, newHireDatg2017Q1, turnOverDatg2017Q1)
        }
        if (strUser7 == "2017-Q2") {
            handleQuarter('2017-Q2', iwdata6, hiredata6, avgdata6, netdata6, turndata6, isepdata6, gsepdata6, esepdata6, asepdata6, workData2017Q2, averageData2017Q2, jobDatc2017Q2, newHireDatc2017Q2, turnOverData2016Q2, workDatg2017Q2, averageDatg2017Q2, jobDatg2017Q2, newHireDatg2017Q2, turnOverDatg2017Q2)
        }
        if (strUser7 == "2017-Q3") {
            handleQuarter('2017-Q3', iwdata1, hiredata7, avgdata7, netdata7, turndata7, isepdata1, gsepdata7, esepdata7, asepdata7, workData2017Q3, averageData2017Q3, jobDatc2017Q3, newHireDatc2017Q3, turnOverData2017Q3, workDatg2017Q3, averageDatg2017Q3, jobDatg2017Q3, newHireDatg2017Q3, turnOverDatg2017Q3)
        }
        if (strUser7 == "2017-Q4") {
            handleQuarter('2017-Q4', iwdata8, hiredata8, avgdata8, netdata8, turndata8, isepdata8, gsepdata8, esepdata8, asepdata8, workData2017Q4, averageData2017Q4, jobDatc2017Q4, newHireDatc2017Q4, turnOverData2017Q4, workDatg2017Q4, averageDatg2017Q4, jobDatg2017Q4, newHireDatg2017Q4, turnOverDatg2017Q4)
        }
        if (strUser7 == "2018-Q1") {
            handleQuarter('2018-Q1', iwdata9, hiredata9, avgdata9, netdata9, turndata9, isepdata9, gsepdata9, esepdata9, asepdata9, workData2018Q1, averageData2018Q1, jobDatc2018Q1, newHireDatc2018Q1, turnOverData2018Q1, workDatg2018Q1, averageDatg2018Q1, jobDatg2018Q1, newHireDatg2018Q1, turnOverDatg2018Q1)
        }
        if (strUser7 == "2018-Q2") {
            handleQuarter('2018-Q2', iwdata10, hiredata10, avgdata10, netdata10, turndata10, isepdata10, gsepdata10, esepdata10, asepdata10, workData2018Q2, averageData2018Q2, jobDatc2018Q2, newHireDatc2018Q2, turnOverData2018Q2, workDatg2018Q2, averageDatg2018Q2, jobDatg2018Q2, newHireDatg2018Q2, turnOverDatg2018Q2)
        }
        if (strUser7 == "2018-Q3") {
            handleQuarter('2018-Q3', iwdata11, hiredata11, avgdata11, netdata11, turndata11, isepdata11, gsepdata11, esepdata11, asepdata11, workData2018Q3, averageData2018Q3, jobDatc2018Q3, newHireDatc2018Q3, turnOverData2018Q3, workDatg2018Q3, averageDatg2018Q3, jobDatg2018Q3, newHireDatg2018Q3, turnOverDatg2018Q3)
        }
        if (strUser7 == "2018-Q4") {
            handleQuarter('2018-Q4', iwdata12, hiredata12, avgdata12, netdata12, turndata12, isepdata12, gsepdata12, esepdata12, asepdata12, workData2018Q4, averageData2018Q4, jobDatc2018Q4, newHireDatc2018Q4, turnOverData2018Q4, workDatg2018Q4, averageDatg2018Q4, jobDatg2018Q4, newHireDatg2018Q4, turnOverDatg2018Q4)
        }
        if (strUser7 == "2019-Q1") {
            handleQuarter('2019-Q1', iwdata13, hiredata13, avgdata13, netdata13, turndata13, isepdata13, gsepdata13, esepdata13, asepdata13, workData2019Q1, averageData2019Q1, jobDatc2019Q1, newHireDatc2019Q1, turnOverData2019Q1, workDatg2019Q1, averageDatg2019Q1, jobDatg2019Q1, newHireDatg2019Q1, turnOverDatg2019Q1)
        }
        if (strUser7 == "2019-Q2") {
            handleQuarter('2019-Q2', iwdata14, hiredata14, avgdata14, netdata14, turndata14, isepdata14, gsepdata14, esepdata14, asepdata14, workData2019Q2, averageData2019Q2, jobDatc2019Q2, newHireDatc2019Q2, turnOverData2019Q2, workDatg2019Q2, averageDatg2019Q2, jobDatg2019Q2, newHireDatg2019Q2, turnOverDatg2019Q2)
        }
        if (strUser7 == "2019-Q3") {
            handleQuarter('2019-Q3', iwdata15, hiredata15, avgdata15, netdata15, turndata15, isepdata15, gsepdata15, esepdata15, asepdata15, workData2019Q3, averageData2019Q3, jobDatc2019Q3, newHireDatc2019Q3, turnOverData2019Q3, workDatg2019Q3, averageDatg2019Q3, jobDatg2019Q3, newHireDatg2019Q3, turnOverDatg2019Q3)
        }
        if (strUser7 == "2019-Q4") {
            handleQuarter('2019-Q4', iwdata16, hiredata16, avgdata16, netdata16, turndata16, isepdata16, gsepdata16, esepdata16, asepdata16, workData2019Q4, averageData2019Q4, jobDatc2019Q4, newHireDatc2019Q4, turnOverData2019Q4, workDatg2019Q4, averageDatg2019Q4, jobDatg2019Q4, newHireDatg2019Q4, turnOverDatg2019Q4)
        }

        pwChart.draw();
        wChart.draw();

        avgChart.draw();
        pavgChart.draw();

        jc.draw();
        pjc.draw();

        pturnChart.draw();
        turnChart.draw();

        chart8.draw();
        pchart8.draw();

        pnewHireChart.draw();
        newHireChart.draw();

        chart61.draw()
        pchart61.draw();

    }

    d3.select("#wda_dd_1").on("click", triggerWdaChange)
    d3.select("#wda_dd_2").on("click", triggerWdaChange)
    d3.select("#wda_dd_3").on("click", triggerWdaChange)
    d3.select("#wda_dd_4").on("click", triggerWdaChange)
    d3.select("#wda_dd_5").on("click", triggerWdaChange)
    d3.select("#dropdownMenuQ").on("click", triggerWdaChange)

    window.onresize = function() {
        drawAll()
    }

    d3.select("#btn6wda").on("click", function() {
        if (togNum1 == 1) {
            togNum1 = 0;
            qLegend.shapes.style("visibility", "hidden");
            pqLegend.shapes.style("visibility", "hidden");
        } else if (togNum1 == 0) {
            togNum1 = 1;
            qLegend.shapes.style("visibility", "visible");
            pqLegend.shapes.style("visibility", "visible");
        }
    });

}
)()
