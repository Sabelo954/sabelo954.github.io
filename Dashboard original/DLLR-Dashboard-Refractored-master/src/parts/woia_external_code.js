import*as d3 from 'd3';

import*as dimple from 'dimple';
import {createDatasets, configCharts, createChart, configSvgz, zeronulls, cma, findAge, findGender, findEdu, pcnt, dlr, findIndustry, indsList} from './event_handlers.js'

/*
 * Outline
 * 
*/

(async()=>{

    // Tab 1 Chart 1 -> New Hires
    // Tab 1 Chart 2 - Average Monthly Earnings
    // Tab 2 Chart 1 -> New Hires
    // Tab 2 Chart 2 -> Job Net Change
    // Tab 3 Chart 1 -> Turnover Rate
    // Tab 4 Chart 1 -> Industry Metrics
    // Tab 5 Chart 1 -> Seperations

    //
    // Retrieve Data
    //
    let url = CountyName2 == 'Maryland' ? './data/MarylandData.csv' : "./data/wda/" + CountyName.replace(/[ ]/g, '') + ".csv"
    let data = await d3.dsv(",", url)
    //
    // Set variables
    //
    let fullYears = ['2015', '2016', '2017', '2018', '2019']
    let fullQuarters = ["2016Q1", "2016Q2", "2016Q3", "2016Q4", "2017Q1", "2017Q2", "2017Q3", "2017Q4", "2018Q1", "2018Q2", "2018Q3", "2018Q4", "2019Q1", "2019Q2", "2019Q3", "2019Q4"]
    let ageGender = ["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99", "Female", "Male"]
    let eduGender = ["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]
    //
    // Filter Data
    //
    // Tab 1 Chart 1 -> New Hires
    let workData = dimple.filterData(data, "Time", fullQuarters)
    workData = dimple.filterData(workData, "Indicator", ["Maryland Workers by Age", "Maryland Workers by Gender", "Maryland Workers by Industry"])
    let workDataA = dimple.filterData(workData, "Indicator", "Maryland Workers by Age");
    let workDataB = dimple.filterData(workData, "Indicator", "Maryland Workers by Gender");
    createDatasets(workDataA, 'workData', fullQuarters)
    createDatasets(workDataB, 'workDatg', fullQuarters)

    // Tab 1 Chart 2
    let averageData = dimple.filterData(data, "Time", fullQuarters);
    let averageData2 = dimple.filterData(averageData, "Indicator", "Maryland Average Monthly Earnings by Age");
    let averageData1 = dimple.filterData(averageData, "Indicator", "Maryland Average Monthly Earnings by Gender");
    createDatasets(averageData2, 'averageData', fullQuarters)
    createDatasets(averageData1, 'averageDatg', fullQuarters)

    // Tab 2 Chart 1
    let newHireData = dimple.filterData(data, "Time", fullQuarters)
    newHireData = dimple.filterData(newHireData, "Indicator", ["Maryland New Hires by Education", "Maryland New Hires by Gender"])
    let newHireData1 = dimple.filterData(newHireData, "Indicator", "Maryland New Hires by Education");
    let newHireData2 = dimple.filterData(newHireData, "Indicator", "Maryland New Hires by Gender");
    createDatasets(newHireData1, 'newHireDatc', fullQuarters)
    createDatasets(newHireData2, 'newHireDatg', fullQuarters) 

    // Tab 2 Chart 2    
    let jobData = dimple.filterData(data, "Time", fullQuarters)
    jobData = dimple.filterData(jobData, "Indicator", ["Maryland Job Net Change by Education", "Maryland Job Net Change by Gender"])
    let jobData1 = dimple.filterData(jobData, "Indicator", "Maryland Job Net Change by Education");
    let jobData2 = dimple.filterData(jobData, "Indicator", "Maryland Job Net Change by Gender");
    createDatasets(jobData1, 'jobDatc', fullQuarters)
    createDatasets(jobData2, 'jobDatg', fullQuarters)

    // Tab 3 Chart 1 Turnover Rate
    let turnOverData = dimple.filterData(data, "Time", fullQuarters)
    turnOverData = dimple.filterData(turnOverData, "Indicator", ["Maryland Turnover Rate by Education", "Maryland Turnover Rate by Gender", "Maryland Workers by Industry"])
    let turnOverData1 = dimple.filterData(turnOverData, "Indicator", "Maryland Turnover Rate by Education");
    let turnOverData2 = dimple.filterData(turnOverData, "Indicator", "Maryland Turnover Rate by Gender")
    createDatasets(turnOverData1, 'turnOverData', fullQuarters)
    createDatasets(turnOverData2, 'turnOverDatg', fullQuarters)

    // Tab 4 Chart 1 Industry Metrics
    let wdata = dimple.filterData(data, "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"])
    let iwdata0 = dimple.filterData(wdata, "Indicator", "Maryland Workers by Industry")
    let iwData1 = dimple.filterData(wdata, "Indicator", "Maryland Average Earnings by Industry")
    let iwdata2 = dimple.filterData(wdata, "Indicator", "Maryland Job Net Change by Industry")
    let iwdata3 = dimple.filterData(wdata, "Indicator", "Maryland Turnover Rate by Industry")
    let iwdata4 = dimple.filterData(wdata, "Indicator", "Maryland New Hires by Industry")
    createDatasets(iwdata0, 'iwdata', fullQuarters)
    createDatasets(iwData1, 'avgdata', fullQuarters)
    createDatasets(iwdata2, 'netdata', fullQuarters)
    createDatasets(iwdata3, 'turndata', fullQuarters)
    createDatasets(iwdata4, 'hiredata', fullQuarters)

    // Tab 5 Chart 1 Seperations
    let indusep = dimple.filterData(data, "Indicator", "Maryland Separations by Industry")
    indusep = dimple.filterData(indusep, "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"])
    let agesep = dimple.filterData(data, "Indicator", "Maryland Separations by Age")
    let gensep = dimple.filterData(data, "Indicator", "Maryland Separations by Gender")
    let edusep = dimple.filterData(data, "Indicator", "Maryland Separations by Education")
    window.asepdata1 = dimple.filterData(agesep, "Time", fullQuarters)
    window.gsepdata1 = dimple.filterData(gensep, "Time", fullQuarters)
    window.esepdata1 = dimple.filterData(edusep, "Time", fullQuarters)
    createDatasets(indusep, 'isepdata', fullQuarters)
    createDatasets(asepdata1, 'asepdata', fullQuarters)
    createDatasets(gsepdata1, 'gsepdata', fullQuarters)
    createDatasets(edusep, 'esepdata', fullQuarters)

    //
    // Create  SVGz
    //
    configSvgz([
      ['svg3', "#Chart3", "100%", 400], 
      ['svg4', "#Chart4", "100%", 400], 
      ['svg5', "#ChartFive", "100%", 400], 
      ['svg6', "#Chart6", "100%", 450], 
      ['print3', "#Print3", 750, 400], 
      ['print4', "#Print4", 750, 400], 
      ['print5', "#PrintFive", 750, 400], 
      ['print6', "#Print6", 750, 450], 
      ['svg71', "#Chart17", "100%", 400], 
      ['print71', "#Print17", 750, 400]
    ])
    //
    // Configure Chart
    //
    configCharts([
      ['chart61', svg71, zeronulls(isepdata2017Q4)], 
      ['pchart61', print71, zeronulls(isepdata2017Q4)], 
      ['pchart8', print6, zeronulls(iwdata2017Q4)], 
      ['chart8', svg6, zeronulls(iwdata2017Q4)], 
      ['pturnChart', print5, zeronulls(turnOverDatg2017Q4)], 
      ['turnChart', svg5, zeronulls(turnOverDatg2017Q4)], 
      ['pnewHireChart', print4, zeronulls(newHireDatc2017Q4)], 
      ['newHireChart', svg4, zeronulls(newHireDatc2017Q4)], 
      ['pjc', print4, zeronulls(jobDatc2017Q1)], 
      ['jc', svg4, zeronulls(jobDatc2017Q1)], 
      ['pavgChart', print3, zeronulls(averageDatg2017Q4)], 
      ['avgChart', svg3, zeronulls(window['averageData2017Q4'])], 
      ['pwChart', print3, zeronulls(workData2018Q1)], 
      ['wChart', svg3, zeronulls(window['workData2018Q1'])]
      ])

    //
    // Display Table
    //
    // Tab 1
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
               ${!workData2019Q3[1] ? '' : displayAvgQuarterTab1('2019Q3', workData2019Q3, workDatg2019Q3, averageData2019Q3, averageDatg2019Q3)}
               ${!workData2019Q4[1] ? '' : displayAvgQuarterTab1('2019Q4', workData2019Q4, workDatg2019Q4, averageData2019Q4, averageDatg2019Q4)}
  `
    // Tab 2  
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
	   ${!newHireDatc2018Q1[0] ? '' : displayAvgQuarterTab2('2018Q1', jobDatc2018Q1, jobDatg2018Q1, newHireDatc2018Q1, newHireDatg2018Q1)}
	   ${!newHireDatc2018Q2[0] ? '' : displayAvgQuarterTab2('2018Q2', jobDatc2018Q2, jobDatg2018Q2, newHireDatc2018Q2, newHireDatg2018Q2)}
	   ${!newHireDatc2018Q3[0] ? '' : displayAvgQuarterTab2('2018Q3', jobDatc2018Q3, jobDatg2018Q3, newHireDatc2018Q3, newHireDatg2018Q3)}
	   ${!newHireDatc2018Q4[0] ? '' : displayAvgQuarterTab2('2018Q4', jobDatc2018Q4, jobDatg2018Q4, newHireDatc2018Q4, newHireDatg2018Q4)}
	   ${!newHireDatc2019Q1[0] ? '' : displayAvgQuarterTab2('2019Q1', jobDatc2019Q1, jobDatg2019Q1, newHireDatc2019Q1, newHireDatg2019Q1)}
	   ${!newHireDatc2019Q2[0] ? '' : displayAvgQuarterTab2('2019Q2', jobDatc2019Q2, jobDatg2019Q2, newHireDatc2019Q2, newHireDatg2019Q2)}
	   ${!newHireDatc2019Q3[0] ? '' : displayAvgQuarterTab2('2019Q3', jobDatc2019Q3, jobDatg2019Q3, newHireDatc2019Q3, newHireDatg2019Q3)}
	   ${!newHireDatc2019Q4[0] ? '' : displayAvgQuarterTab2('2019Q4', jobDatc2019Q4, jobDatg2019Q4, newHireDatc2019Q4, newHireDatg2019Q4)}
    `

    // Tab 3 Turnover Rate
    //
    // Tab 3 Chart 1   Turnover Rate
    //
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
    // Tab 4 Industry Metrics
    window.displayIndustryMetricsTable = (wdatax,hiredatax,avgdatax,netdatax,turndatax)=>{
        // console.log( { wdatax,hiredatax,avgdatax,netdatax,turndatax } )
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
        ${!iwdata2019Q4[0] ? '' : displayIndustryMetricsTable(iwdata2019Q4, hiredata2019Q4, avgdata2019Q4, netdata2019Q4, turndata2019Q4)} 
        ${!iwdata2019Q3[0] ? '' : displayIndustryMetricsTable(iwdata2019Q3, hiredata2019Q3, avgdata2019Q3, netdata2019Q3, turndata2019Q3)} 
        ${!iwdata2019Q2[0] ? '' : displayIndustryMetricsTable(iwdata2019Q2, hiredata2019Q2, avgdata2019Q2, netdata2019Q2, turndata2019Q2)} 
        ${!iwdata2019Q1[0] ? '' : displayIndustryMetricsTable(iwdata2019Q1, hiredata2019Q1, avgdata2019Q1, netdata2019Q1, turndata2019Q1)} 
        ${!iwdata2018Q4[0] ? '' : displayIndustryMetricsTable(iwdata2018Q4, hiredata2018Q4, avgdata2018Q4, netdata2018Q4, turndata2018Q4)} 
        ${!iwdata2018Q3[0] ? '' : displayIndustryMetricsTable(iwdata2018Q3, hiredata2018Q3, avgdata2018Q3, netdata2018Q3, turndata2018Q3)} 
        ${!iwdata2018Q2[0] ? '' : displayIndustryMetricsTable(iwdata2018Q2, hiredata2018Q2, avgdata2018Q2, netdata2018Q2, turndata2018Q2)}        
        ${!iwdata2018Q1[0] ? '' : displayIndustryMetricsTable(iwdata2018Q1, hiredata2018Q1, avgdata2018Q1, netdata2018Q1, turndata2018Q1)} 
        ${!iwdata2017Q4[0] ? '' : displayIndustryMetricsTable(iwdata2017Q4, hiredata2017Q4, avgdata2017Q4, netdata2017Q4, turndata2017Q4)} 
        ${!iwdata2017Q3[0] ? '' : displayIndustryMetricsTable(iwdata2017Q3, hiredata2017Q3, avgdata2017Q3, netdata2017Q3, turndata2017Q3)} 
        ${!iwdata2017Q2[0] ? '' : displayIndustryMetricsTable(iwdata2017Q2, hiredata2017Q2, avgdata2017Q2, netdata2017Q2, turndata2017Q2)} 
        ${!iwdata2017Q1[0] ? '' : displayIndustryMetricsTable(iwdata2017Q1, hiredata2017Q1, avgdata2017Q1, netdata2017Q1, turndata2017Q1)} 
        ${!iwdata2016Q4[0] ? '' : displayIndustryMetricsTable(iwdata2016Q4, hiredata2016Q4, avgdata2016Q4, netdata2016Q4, turndata2016Q4)} 
        ${!iwdata2016Q3[0] ? '' : displayIndustryMetricsTable(iwdata2016Q3, hiredata2016Q3, avgdata2016Q3, netdata2016Q3, turndata2016Q3)} 
        ${!iwdata2016Q2[0] ? '' : displayIndustryMetricsTable(iwdata2016Q2, hiredata2016Q2, avgdata2016Q2, netdata2016Q2, turndata2016Q2)}
        ${!iwdata2016Q1[0] ? '' : displayIndustryMetricsTable(iwdata2016Q1, hiredata2016Q1, avgdata2016Q1, netdata2016Q1, turndata2016Q2)}
      </tbody>
  `
    // Tab 5 Seperations
    //
    // Industry: Not For Maryland
    //
    let showRecordSepeartions = (y1,y2,y3,y4,y5,y6,y7,y8,y9,y10,y11,y12,y13,y14,y15,y16,pos)=>{
        return `<tr>
	    <td>${indsList[pos]}</td>
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
	    <td>${cma(findGender(y11, pos))}</td> 
	    <td>${cma(findGender(y12, pos))}</td> 
	    <td>${cma(findGender(y13, pos))}</td> 
	    <td>${cma(findGender(y14, pos))}</td>  
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
	    <td>${cma(findEdu(y11, pos))}</td> 
	    <td>${cma(findEdu(y12, pos))}</td> 
	    <td>${cma(findEdu(y13, pos))}</td> 
	    <td>${cma(findEdu(y14, pos))}</td>  
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
	    <td>${cma(findAge(y11, pos))}</td> 
	    <td>${cma(findAge(y12, pos))}</td> 
	    <td>${cma(findAge(y13, pos))}</td> 
	    <td>${cma(findAge(y14, pos))}</td>  
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
        </tr>
       </thead>
       <tbody>
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 0)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 1)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 2)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 3)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 4)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 5)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 6)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 7)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 8)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 9)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 10)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 11)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 12)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 13)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 14)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 15)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 16)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 17)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 18)}
          ${showRecordSepeartions(isepdata2016Q1, isepdata2016Q2, isepdata2016Q3, isepdata2016Q4, isepdata2017Q1, isepdata2017Q2, isepdata2017Q3, isepdata2017Q4, isepdata2018Q1, isepdata2018Q2, isepdata2018Q3, isepdata2018Q4, isepdata2019Q1, isepdata2019Q2, isepdata2019Q3, isepdata2019Q4, 19)}
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
        </tr>
       </thead>
       <tbody>
          ${showLbldRecordGend('Male', gsepdata2016Q1, gsepdata2016Q2, gsepdata2016Q3, gsepdata2016Q4, gsepdata2017Q1, gsepdata2017Q2, gsepdata2017Q3, gsepdata2017Q4, gsepdata2018Q1, gsepdata2018Q2, gsepdata2018Q3, gsepdata2018Q4, gsepdata2019Q1, gsepdata2019Q2, gsepdata2019Q3, gsepdata2019Q4, 0)}
          ${showLbldRecordGend('Female', gsepdata2016Q1, gsepdata2016Q2, gsepdata2016Q3, gsepdata2016Q4, gsepdata2017Q1, gsepdata2017Q2, gsepdata2017Q3, gsepdata2017Q4, gsepdata2018Q1, gsepdata2018Q2, gsepdata2018Q3, gsepdata2018Q4, gsepdata2019Q1, gsepdata2019Q2, gsepdata2019Q3, gsepdata2019Q4, 1)}
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
        </tr>
       </thead>
       <tbody>
          ${showLbldRecordEdu('Less than High school', esepdata2016Q1, esepdata2016Q2, esepdata2016Q3, esepdata2016Q4, esepdata2017Q1, esepdata2017Q2, esepdata2017Q3, esepdata2017Q4, esepdata2018Q1, esepdata2018Q2, esepdata2018Q3, esepdata2018Q4, esepdata2019Q1, esepdata2019Q2, esepdata2019Q3, esepdata2019Q4, 0)}
          ${showLbldRecordEdu('High school', esepdata2016Q1, esepdata2016Q2, esepdata2016Q3, esepdata2016Q4, esepdata2017Q1, esepdata2017Q2, esepdata2017Q3, esepdata2017Q4, esepdata2018Q1, esepdata2018Q2, esepdata2018Q3, esepdata2018Q4, esepdata2019Q1, esepdata2019Q2, esepdata2019Q3, esepdata2019Q4, 1)}
          ${showLbldRecordEdu('Some College', esepdata2016Q1, esepdata2016Q2, esepdata2016Q3, esepdata2016Q4, esepdata2017Q1, esepdata2017Q2, esepdata2017Q3, esepdata2017Q4, esepdata2018Q1, esepdata2018Q2, esepdata2018Q3, esepdata2018Q4, esepdata2019Q1, esepdata2019Q2, esepdata2019Q3, esepdata2019Q4, 2)}
          ${showLbldRecordEdu("Bachelor's or Higher", esepdata2016Q1, esepdata2016Q2, esepdata2016Q3, esepdata2016Q4, esepdata2017Q1, esepdata2017Q2, esepdata2017Q3, esepdata2017Q4, esepdata2018Q1, esepdata2018Q2, esepdata2018Q3, esepdata2018Q4, esepdata2019Q1, esepdata2019Q2, esepdata2019Q3, esepdata2019Q4, 3)}
          ${showLbldRecordEdu('NR', esepdata2016Q1, esepdata2016Q2, esepdata2016Q3, esepdata2016Q4, esepdata2017Q1, esepdata2017Q2, esepdata2017Q3, esepdata2017Q4, esepdata2018Q1, esepdata2018Q2, esepdata2018Q3, esepdata2018Q4, esepdata2019Q1, esepdata2019Q2, esepdata2019Q3, esepdata2019Q4, 4)}
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
        </tr>
       </thead>
       <tbody>
          ${showLbldRecordAge('Age 14-18', asepdata2016Q1, asepdata2016Q2, asepdata2016Q3, asepdata2016Q4, asepdata2017Q1, asepdata2017Q2, asepdata2017Q3, asepdata2017Q4, asepdata2018Q1, asepdata2018Q2, asepdata2018Q3, asepdata2018Q4, asepdata2019Q1, asepdata2019Q2, asepdata2019Q3, asepdata2019Q4, 0)}
          ${showLbldRecordAge('Age 19-21', asepdata2016Q1, asepdata2016Q2, asepdata2016Q3, asepdata2016Q4, asepdata2017Q1, asepdata2017Q2, asepdata2017Q3, asepdata2017Q4, asepdata2018Q1, asepdata2018Q2, asepdata2018Q3, asepdata2018Q4, asepdata2019Q1, asepdata2019Q2, asepdata2019Q3, asepdata2019Q4, 1)}
          ${showLbldRecordAge('Age 22-24', asepdata2016Q1, asepdata2016Q2, asepdata2016Q3, asepdata2016Q4, asepdata2017Q1, asepdata2017Q2, asepdata2017Q3, asepdata2017Q4, asepdata2018Q1, asepdata2018Q2, asepdata2018Q3, asepdata2018Q4, asepdata2019Q1, asepdata2019Q2, asepdata2019Q3, asepdata2019Q4, 2)}
          ${showLbldRecordAge('Age 25-34', asepdata2016Q1, asepdata2016Q2, asepdata2016Q3, asepdata2016Q4, asepdata2017Q1, asepdata2017Q2, asepdata2017Q3, asepdata2017Q4, asepdata2018Q1, asepdata2018Q2, asepdata2018Q3, asepdata2018Q4, asepdata2019Q1, asepdata2019Q2, asepdata2019Q3, asepdata2019Q4, 3)}
          ${showLbldRecordAge('Age 35-44', asepdata2016Q1, asepdata2016Q2, asepdata2016Q3, asepdata2016Q4, asepdata2017Q1, asepdata2017Q2, asepdata2017Q3, asepdata2017Q4, asepdata2018Q1, asepdata2018Q2, asepdata2018Q3, asepdata2018Q4, asepdata2019Q1, asepdata2019Q2, asepdata2019Q3, asepdata2019Q4, 4)}
          ${showLbldRecordAge('Age 45-54', asepdata2016Q1, asepdata2016Q2, asepdata2016Q3, asepdata2016Q4, asepdata2017Q1, asepdata2017Q2, asepdata2017Q3, asepdata2017Q4, asepdata2018Q1, asepdata2018Q2, asepdata2018Q3, asepdata2018Q4, asepdata2019Q1, asepdata2019Q2, asepdata2019Q3, asepdata2019Q4, 5)}
          ${showLbldRecordAge('Age 55-64', asepdata2016Q1, asepdata2016Q2, asepdata2016Q3, asepdata2016Q4, asepdata2017Q1, asepdata2017Q2, asepdata2017Q3, asepdata2017Q4, asepdata2018Q1, asepdata2018Q2, asepdata2018Q3, asepdata2018Q4, asepdata2019Q1, asepdata2019Q2, asepdata2019Q3, asepdata2019Q4, 6)}
          ${showLbldRecordAge('Age 65-99', asepdata2016Q1, asepdata2016Q2, asepdata2016Q3, asepdata2016Q4, asepdata2017Q1, asepdata2017Q2, asepdata2017Q3, asepdata2017Q4, asepdata2018Q1, asepdata2018Q2, asepdata2018Q3, asepdata2018Q4, asepdata2019Q1, asepdata2019Q2, asepdata2019Q3, asepdata2019Q4, 7)}
       </tbody>
    `

    //
    // Tab 1 Chart 1 number of workers
    //
    let tab1chart1colors = [
		["14-18", "#4dc3ff", "black", 0.7], ["19-21", "#ff5c33", "black", 0.7],
		["22-24", "#66ff66", "black", 0.7], ["25-34", "#ffdb4d", "black", 0.7],
		["35-44", "#ffb84d", "black", 0.7], ["45-54", "#00cccc", "black", 0.7],
		["55-64", "#6666ff", "black", 0.7], ["65-99", "#ffcc99", "black", 0.7],
		["Male", "#3366ff", "black", 0.7], ["Female", "pink", "black", 0.7]
	]
    let assignColorTab1chart2 = [
		["14-18", "#4dc3ff", "black", 0.7], ["19-21", "#ff5c33", "black", 0.7],
		["22-24", "#66ff66", "black", 0.7], ["25-34", "#ffdb4d", "black", 0.7],
		["35-44", "#ffb84d", "black", 0.7], ["45-54", "#00cccc", "black", 0.7],
		["55-64", "#6666ff", "black", 0.7], ["65-99", "#ffcc99", "black", 0.7],
		["Male", "#3366ff", "black", 0.7], ["Female", "pink", "black", 0.7]
    ]
    let assignColorTab2chart2 =[
		["Less than High school", "#4dc3ff", "black", 0.7],
		["High school", "#ff5c33", "black", 0.7],
		["Some college", "#66ff66", "black", 0.7],
		["Bachelor's or Higher", "#ffdb4d", "black", 0.7],
		["N/A", "#919191", "black", 0.7],
		["Male", "#3366ff", "black", 0.7],
		["Female", "pink", "black", 0.7]
    ]
    let assignColorTab2chart1 = [
        ["Less than High school", "#4dc3ff", "black", 0.7],
		["High school", "#ff5c33", "black", 0.7],
		["Some college", "#66ff66", "black", 0.7],
		["Bachelor's or Higher", "#ffdb4d", "black", 0.7],
		["N/A", "#919191", "black", 0.7],
		["Male", "#3366ff", "black", 0.7],
		["Female", "pink", "black", 0.7]
    ]
    let assignColorTab3chart1 = [
		["Less than High school", "#4dc3ff", "black", 0.7],
		["High school", "#ff5c33", "black", 0.7],
		["Some college", "#66ff66", "black", 0.7],
		["Bachelor's or Higher", "#ffdb4d", "black", 0.7],
		["N/A", "#919191", "black", 0.7],
		["Male", "#3366ff", "black", 0.7],
		["Female", "pink", "black", 0.7]
    ]
    let tab4chart1colors = [
        ["Accommodation and Food Services", "red", "black", 0.8],
		["Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8],
		["Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8],
		["Arts, Entertainment, and Recreation", "blue", "black", 0.8],
		["Construction", "Orange", "black", 0.8],
		["Educational Services", "Purple", "black", 0.8],
		["Finance and Insurance", "Cyan", "black", 0.8],
		["Health Care and Social Assistance", "Magenta", "black", 0.8],
		["Information", "Lime", "black", 0.8],
		["Management of Companies and Enterprises", "Pink", "black", 0.8],
		["Manufacturing", "Teal", "black", 0.8],
		["Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8],
		["Other Services (except Public Administration)", "Brown", "black", 0.8],
		["Professional, Scientific, and Technical Services", "Beige", "black", 0.8],
		["Public Administration", "Maroon", "black", 0.8],
		["Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8],
		["Retail Trade", "Olive", "black", 0.8],
		["Transportation and Warehousing", "Coral", "black", 0.8],
		["Utilities", "Navy", "black", 0.8],
		["Wholesale Trade", "Grey", "black", 0.8]
    ]
    let tab5chart1colors = [
        ["Accommodation and Food Services", "red", "black", 0.8],
		["Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8],
		["Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8],
		["Arts, Entertainment, and Recreation", "blue", "black", 0.8],
		["Construction", "Orange", "black", 0.8],
		["Educational Services", "Purple", "black", 0.8],
		["Finance and Insurance", "Cyan", "black", 0.8],
		["Health Care and Social Assistance", "Magenta", "black", 0.8],
		["Information", "Lime", "black", 0.8],
		["Management of Companies and Enterprises", "Pink", "black", 0.8],
		["Manufacturing", "Teal", "black", 0.8],
		["Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8],
		["Other Services (except Public Administration)", "Brown", "black", 0.8],
		["Professional, Scientific, and Technical Services", "Beige", "black", 0.8],
		["Public Administration", "Maroon", "black", 0.8],
		["Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8],
		["Retail Trade", "Olive", "black", 0.8],
		["Transportation and Warehousing", "Coral", "black", 0.8],
		["Utilities", "Navy", "black", 0.8],
		["Wholesale Trade", "Grey", "black", 0.8],
		["Less than High school", "#4dc3ff", "black", 0.7],
		["High school", "#ff5c33", "black", 0.7],
		["Some college", "#66ff66", "black", 0.7],
		["Bachelor's or Higher", "#ffdb4d", "black", 0.7],
		["N/A", "#919191", "black", 0.7],
		["14-18", "#4dc3ff", "black", 0.7],
		["19-21", "#ff5c33", "black", 0.7],
		["22-24", "#66ff66", "black", 0.7],
		["25-34", "#ffdb4d", "black", 0.7],
		["35-44", "#ffb84d", "black", 0.7],
		["45-54", "#00cccc", "black", 0.7],
		["55-64", "#6666ff", "black", 0.7],
		["65-99", "#ffcc99", "black", 0.7],
		["Male", "#3366ff", "black", 0.7],
		["Female", "pink", "black", 0.7]
    ]
    var createThese = [ {
        "chart": wChart,
        "bounds": ["11%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Indicator_Value"],
        "xtitle": " ",
        "order": ageGender,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Number of Workers",
        "tickFormat":',.0f',
        "series": "Indicator_Value",
        "lineMarkers": false,
        "colors": tab1chart1colors
    },
    {
        "chart": pwChart,
        "bounds": ["13%", "12%", "35%", 250],
        "categoryAxis": ["x", "Indicator_Value"],
        "xtitle": " ",
        "order": ageGender,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Number of Workers",
        "tickFormat":',.0f',
        "series": "Indicator_Value",
        "lineMarkers": false,
        "colors": tab1chart1colors
    } , {
        "chart": avgChart,
        "bounds": ["56%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Indicator_Value"],
        "xtitle": " ",
        "order": ageGender,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Average Monthly Earnings",
        "tickFormat":',.0f',
        "series": "Indicator_Value",
        "lineMarkers": false,
        "colors": assignColorTab1chart2
      }, {
        "chart": pavgChart,
        "bounds": ["61%", "12%", "35%", 250],
        "categoryAxis": ["x", "Indicator_Value"],
        "xtitle": " ",
        "order": ageGender,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Average Monthly Earnings",
        "tickFormat":',.0f',
        "series": "Indicator_Value",
        "lineMarkers": false,
        "colors": assignColorTab1chart2
      }, {
        "chart": newHireChart,
        "bounds": ["11%", "8%", "35%", "45%"],
        "categoryAxis": ["x", "Indicator_Value"],
        "xtitle": " ",
        "order": eduGender,
        "measureAxis": ["y", "Amount"],
        "ytitle": "New Hires",
        "tickFormat":',.0f',
        "series": "Indicator_Value",
        "lineMarkers": false,
        "colors": assignColorTab2chart1
      }, {
        "chart": pnewHireChart,
        "bounds": ["11%", "8%", "35%", 175],
        "categoryAxis": ["x", "Indicator_Value"],
        "xtitle": " ",
        "order": eduGender,
        "measureAxis": ["y", "Amount"],
        "ytitle": "New Hires",
        "tickFormat":',.0f',
        "series": "Indicator_Value",
        "lineMarkers": false,
        "colors": assignColorTab2chart1
      }, {
        "chart": jc,
        "bounds": ["56%", "8%", "35%", "45%"],
        "categoryAxis": ["x", "Indicator_Value"],
        "xtitle": " ",
        "order": eduGender,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Job Net Change",
        "tickFormat":',.0f',
        "series": "Indicator_Value",
        "lineMarkers": false,
        "colors": assignColorTab2chart1
      }, {
        "chart": pjc,
        "bounds": ["59%", "8%", "35%", 175],
        "categoryAxis": ["x", "Indicator_Value"],
        "xtitle": " ",
        "order": eduGender,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Job Net Change",
        "tickFormat":',.0f',
        "series": "Indicator_Value",
        "lineMarkers": false,
        "colors": assignColorTab2chart1
      }, {
        "chart": turnChart,
        "bounds": ["12%", "12%", "80%", "45%"],
        "categoryAxis": ["x", "Indicator_Value"],
        "xtitle": " ",
        "order": eduGender,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Job Net Change",
        "tickFormat":'.1%',
        "series": "Indicator_Value",
        "lineMarkers": false,
        "colors": assignColorTab3chart1
      }, {
        "chart": pturnChart,
        "bounds": ["12%", "12%", "75%", 175],
        "categoryAxis": ["x", "Indicator_Value"],
        "xtitle": " ",
        "order": eduGender,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Turnover Rate",
        "tickFormat":'.1%',
        "series": "Indicator_Value",
        "lineMarkers": false,
        "colors": assignColorTab3chart1
      },
      {
	    "chart": chart8,
	    "bounds": ["9%", "12%", "55%", "55%"],
	    "categoryAxis": ["x", "Indicator_Value"],
	    "xtitle": " ",
	    "order": false,
	    "measureAxis": ["y", "Amount"],
	    "ytitle": 'Total by Industry',
	    "tickFormat": ',.1f',
	    "series": "Indicator_Value",
	    "lineMarkers": false,
	    "colors": tab4chart1colors,
	    "legend": true
      },
      {
	    "chart": pchart8,
	    "bounds": ["14%", "12%", "45%", 250],
	    "categoryAxis": ["x", "Indicator_Value"],
	    "xtitle": " ",
	    "order": false,
	    "measureAxis": ["y", "Amount"],
	    "ytitle": 'Total by Industry',
	    "tickFormat":',.1f',
	    "series": "Indicator_Value",
	    "lineMarkers": false,
	    "colors": tab4chart1colors,
	    "legend": true
      },
      {
	    "chart": chart61,
	    "bounds": ["9%", "12%", "55%", "55%"],
	    "categoryAxis": ["x", "Indicator_Value"],
	    "xtitle": " ",
	    "order": false,
	    "measureAxis": ["y", "Amount"],
	    "ytitle": 'Separations',
	    "tickFormat": ',.0f',
	    "series": "Indicator_Value",
	    "lineMarkers": false,
	    "colors": tab5chart1colors,
	    "legend": true
      },
      {
	    "chart": pchart61,
	    "bounds": ["9%", "12%", "50%", 3000],
	    "categoryAxis": ["x", "Indicator_Value"],
	    "xtitle": " ",
	    "order": false,
	    "measureAxis": ["y", "Amount"],
	    "ytitle": 'Separations',
	    "tickFormat":',.0f',
	    "series": "Indicator_Value",
	    "lineMarkers": false,
	    "colors": tab5chart1colors,
	    "legend": true
      }
    ]
    createChart(createThese) 
 
    window.wdaLookup = [{
        'tab': 'collapse1',
        'lbl': 'Number of Workers and Average Monthly Earnings by Age and Gender',
        'dm': true,
        'dmy': false,
        'dmq': true,
        'charts': [wChart, avgChart],
        'pcharts': [pwChart, pavgChart],
        'svgName': '#Chart3',
        'data': {
            data19q4: [workData2019Q4, workDatg2019Q4, averageData2019Q4, averageDatg2019Q4],
            data19q3: [workData2019Q3, workDatg2019Q3, averageData2019Q3, averageDatg2019Q3],
            data19q2: [workData2019Q2, workDatg2019Q2, averageData2019Q2, averageDatg2019Q2],
            data19q1: [workData2019Q1, workDatg2019Q1, averageData2019Q1, averageDatg2019Q1],
            data18q4: [workData2018Q4, workDatg2018Q4, averageData2018Q4, averageDatg2018Q4],
            data18q3: [workData2018Q3, workDatg2018Q3, averageData2018Q3, averageDatg2018Q3],
            data18q2: [workData2018Q2, workDatg2018Q2, averageData2018Q2, averageDatg2018Q2],
            data18q1: [workData2018Q1, workDatg2018Q1, averageData2018Q1, averageDatg2018Q1],
            data17q4: [workData2017Q4, workDatg2017Q4, averageData2017Q4, averageDatg2017Q4],
            data17q3: [workData2017Q3, workDatg2017Q3, averageData2017Q3, averageDatg2017Q3],
            data17q2: [workData2017Q2, workDatg2017Q2, averageData2017Q2, averageDatg2017Q2],
            data17q1: [workData2017Q1, workDatg2017Q1, averageData2017Q1, averageDatg2017Q1],
            data16q4: [workData2016Q4, workDatg2016Q4, averageData2016Q4, averageDatg2016Q4],
            data16q3: [workData2016Q3, workDatg2016Q3, averageData2016Q3, averageDatg2016Q3],
            data16q2: [workData2016Q2, workDatg2016Q2, averageData2016Q2, averageDatg2016Q2],
            data16q1: [workData2016Q1, workDatg2016Q1, averageData2016Q1, averageDatg2016Q1],
        }
    }, {
        'tab': 'collapse2',
        'lbl': 'New Hires and Job Net Changes by Education and Gender',
        'dm': true,
        'dmy': false,
        'dmq': true,
        'charts': [newHireChart, jc],
        'pcharts': [pnewHireChart, pjc],
        'svgName': '#Chart4',
        'data': {
            data19q4: [newHireDatc2019Q4, newHireDatg2019Q4, jobDatc2019Q4, jobDatg2019Q4],
            data19q3: [newHireDatc2019Q3, newHireDatg2019Q3, jobDatc2019Q3, jobDatg2019Q3],
            data19q2: [newHireDatc2019Q2, newHireDatg2019Q2, jobDatc2019Q2, jobDatg2019Q2],
            data19q1: [newHireDatc2019Q1, newHireDatg2019Q1, jobDatc2019Q1, jobDatg2019Q1],
            data18q4: [newHireDatc2018Q4, newHireDatg2018Q4, jobDatc2018Q4, jobDatg2018Q4],
            data18q3: [newHireDatc2018Q3, newHireDatg2018Q3, jobDatc2018Q3, jobDatg2018Q3],
            data18q2: [newHireDatc2018Q2, newHireDatg2018Q2, jobDatc2018Q2, jobDatg2018Q2],
            data18q1: [newHireDatc2018Q1, newHireDatg2018Q1, jobDatc2018Q1, jobDatg2018Q1],
            data17q4: [newHireDatc2017Q4, newHireDatg2017Q4, jobDatc2017Q4, jobDatg2017Q4],
            data17q3: [newHireDatc2017Q3, newHireDatg2017Q3, jobDatc2017Q3, jobDatg2017Q3],
            data17q2: [newHireDatc2017Q2, newHireDatg2017Q2, jobDatc2017Q2, jobDatg2017Q2],
            data17q1: [newHireDatc2017Q1, newHireDatg2017Q1, jobDatc2017Q1, jobDatg2017Q1],
            data16q4: [newHireDatc2016Q4, newHireDatg2016Q4, jobDatc2016Q4, jobDatg2016Q4],
            data16q3: [newHireDatc2016Q3, newHireDatg2016Q3, jobDatc2016Q3, jobDatg2016Q3],
            data16q2: [newHireDatc2016Q2, newHireDatg2016Q2, jobDatc2016Q2, jobDatg2016Q2],
            data16q1: [newHireDatc2016Q1, newHireDatg2016Q1, jobDatc2016Q1, jobDatg2016Q1]
        }
    }, {
        'tab': 'collapse3',
        'lbl': 'Turnover Rate by Gender and Education',
        'dm': true,
        'dmy': false,
        'dmq': true,
        'charts': [turnChart],
        'pcharts': [pturnChart],
        'svgName': '#ChartFive',
        'data': {
            data19q4: [turnOverData2019Q4, turnOverDatg2019Q4],
            data19q3: [turnOverData2019Q3, turnOverDatg2019Q3],
            data19q2: [turnOverData2019Q2, turnOverDatg2019Q2],
            data19q1: [turnOverData2019Q1, turnOverDatg2019Q1],
            data18q4: [turnOverData2018Q4, turnOverDatg2018Q4],
            data18q3: [turnOverData2018Q3, turnOverDatg2018Q3],
            data18q2: [turnOverData2018Q2, turnOverDatg2018Q2],
            data18q1: [turnOverData2018Q1, turnOverDatg2018Q1],
            data17q4: [turnOverData2017Q4, turnOverDatg2017Q4],
            data17q3: [turnOverData2017Q3, turnOverDatg2017Q3],
            data17q2: [turnOverData2017Q2, turnOverDatg2017Q2],
            data17q1: [turnOverData2017Q1, turnOverDatg2017Q1],
            data16q4: [turnOverData2016Q4, turnOverDatg2016Q4],
            data16q3: [turnOverData2016Q3, turnOverDatg2016Q3],
            data16q2: [turnOverData2016Q2, turnOverDatg2016Q2],
            data16q1: [turnOverData2016Q1, turnOverDatg2016Q1],
        }
    }, {
        'tab': 'collapse4',
        'lbl': 'Data by Industry',
        'dm': true,
        'dmy': false,
        'dmq': true,
        'charts': [chart8],
        'pcharts': [pchart8],
        'svgName': '#Chart6',
        'data': {
            data19q4: [iwdata2019Q4, avgdata2019Q4, netdata2019Q4, turndata2019Q4, hiredata2019Q4],
            data19q3: [iwdata2019Q3, avgdata2019Q3, netdata2019Q3, turndata2019Q3, hiredata2019Q4],
            data19q2: [iwdata2019Q2, avgdata2019Q2, netdata2019Q2, turndata2019Q2, hiredata2019Q4],
            data19q1: [iwdata2019Q1, avgdata2019Q1, netdata2019Q1, turndata2019Q1, hiredata2019Q4],
            data18q4: [iwdata2018Q4, avgdata2018Q4, netdata2018Q4, turndata2018Q4, hiredata2019Q4],
            data18q3: [iwdata2018Q3, avgdata2018Q3, netdata2018Q3, turndata2018Q3, hiredata2019Q4],
            data18q2: [iwdata2018Q2, avgdata2018Q2, netdata2018Q2, turndata2018Q2, hiredata2019Q4],
            data18q1: [iwdata2018Q1, avgdata2018Q1, netdata2018Q1, turndata2018Q1, hiredata2019Q4],
            data17q4: [iwdata2017Q4, avgdata2017Q4, netdata2017Q4, turndata2017Q4, hiredata2019Q4],
            data17q3: [iwdata2017Q3, avgdata2017Q3, netdata2017Q3, turndata2017Q3, hiredata2019Q4],
            data17q2: [iwdata2017Q2, avgdata2017Q2, netdata2017Q2, turndata2017Q2, hiredata2019Q4],
            data17q1: [iwdata2017Q1, avgdata2017Q1, netdata2017Q1, turndata2017Q1, hiredata2019Q4],
            data16q4: [iwdata2016Q4, avgdata2016Q4, netdata2016Q4, turndata2016Q4, hiredata2019Q4],
            data16q3: [iwdata2016Q3, avgdata2016Q3, netdata2016Q3, turndata2016Q3, hiredata2019Q4],
            data16q2: [iwdata2016Q2, avgdata2016Q2, netdata2016Q2, turndata2016Q2, hiredata2019Q4],
            data16q1: [iwdata2016Q1, avgdata2016Q1, netdata2016Q1, turndata2016Q1, hiredata2019Q4]
        }
    }, {
        'tab': 'collapse5',
        'lbl': 'Separations',
        'dm': true,
        'dmy': false,
        'dmq': true,
        'charts': [chart61],
        'pcharts': [pchart61],
        'svgName': '#Chart17',
        'data': {
            data19q4: [isepdata2019Q4, asepdata2019Q4, gsepdata2019Q4, esepdata2019Q4],
            data19q3: [isepdata2019Q3, asepdata2019Q3, gsepdata2019Q3, esepdata2019Q3],
            data19q2: [isepdata2019Q2, asepdata2019Q2, gsepdata2019Q2, esepdata2019Q2],
            data19q1: [isepdata2019Q1, asepdata2019Q1, gsepdata2019Q1, esepdata2019Q1],
            data18q4: [isepdata2018Q4, asepdata2018Q4, gsepdata2018Q4, esepdata2018Q4],
            data18q3: [isepdata2018Q3, asepdata2018Q3, gsepdata2018Q3, esepdata2018Q3],
            data18q2: [isepdata2018Q2, asepdata2018Q2, gsepdata2018Q2, esepdata2018Q2],
            data18q1: [isepdata2018Q1, asepdata2018Q1, gsepdata2018Q1, esepdata2018Q1],
            data17q4: [isepdata2017Q4, asepdata2017Q4, gsepdata2017Q4, esepdata2017Q4],
            data17q3: [isepdata2017Q3, asepdata2017Q3, gsepdata2017Q3, esepdata2017Q3],
            data17q2: [isepdata2017Q2, asepdata2017Q2, gsepdata2017Q2, esepdata2017Q2],
            data17q1: [isepdata2017Q1, asepdata2017Q1, gsepdata2017Q1, esepdata2017Q1],
            data16q4: [isepdata2016Q4, asepdata2016Q4, gsepdata2016Q4, esepdata2016Q4],
            data16q3: [isepdata2016Q3, asepdata2016Q3, gsepdata2016Q3, esepdata2016Q3],
            data16q2: [isepdata2016Q2, asepdata2016Q2, gsepdata2016Q2, esepdata2016Q2],
            data16q1: [isepdata2016Q1, asepdata2016Q1, gsepdata2016Q1, esepdata2016Q1]
        }
    }, ]

    // Loop All Tabs
    wdaLookup.map(tab=>{
        // Loop All Years 
        tab['yearAvailable'] = {}
        let chartsHaveRecords = !tab['data'] ? '' : Object.keys(tab['data']).map((dataDropdownCategory)=>{
            // Loop All datasets and get a T/F flag for each. 
            let valid4TabDisplay = tab['data'][dataDropdownCategory].map(dataset=>{
                // Loop All Records in dataset. Returns True if any record is not empty 
                return dataset.some((x)=>{
                	let d = x['Amount']
                    return (d != 'N/A' & d != undefined & d != '--' & d != 'S' & d != -1)
                }
                )
            }
            )
            // Get a single T/F value for entire Year
            tab['yearAvailable'][dataDropdownCategory] = valid4TabDisplay
            // .some((d)=> { return d } )
            return valid4TabDisplay
        }
        )
    }
    )

    window.wdaChartChange = function() {
    	console.log('wdaChartChange')
        // Find what tab we were on
        let tab = wdaLookup.filter(obj=>obj['tab'] == localStorage.getItem('Clicked'))[0];
        // Get the selected dropdown Quarter
        let drp = document.querySelector("#dropdownMenuQ")
        let drpQ = drp.value
        // Get the tabs data at the dropdown selected quarter
        let dta = tab['data'][drpQ]

        // Check the size of the year's dataset to see if it is empty, pick another one at random if so.
        if ( new Blob([JSON.stringify(dta)]).size < 20 ){
          let notTheSame = false 
          while (!notTheSame){
              let objk = Object.keys( tab['data'] )
              drpQ = objk[Math.floor(Math.random()*objk.length)]
              notTheSame = drp.value != drpQ
              console.log({notTheSame}, drp.value, drpQ)
              if(notTheSame){
                  drp.value = drpQ
                  dta = tab['data'][drpQ] 
              }
          }
        }

        // For selected tab, get the text from its Indicator's Dropdown
        let drpI = document.getElementById( localStorage.getItem('Clicked') + '_dd').value

        const avail = tab['yearAvailable'][drpQ] 
        // If any of the datasets can't be displayed
        let notAllChartsAvailable = !avail ? false : avail.some(availableAtYear => !availableAtYear)
        let warn = document.querySelector('#notalldataavailablewarning').style.display = notAllChartsAvailable ? 'inline':'none';

        console.log({notAllChartsAvailable})
        console.log( tab['data'][drpQ], tab)
    	console.log('wdaChartChange: ', localStorage.getItem('Clicked'), drpQ, drpI)

        /*                           
            // Tab1 - by age by gen wda_dd_1
            // Tab2 - by edu by gen wda_dd_2
            // Tab1 - by edu by gen wda_dd_3
            // Tab4 - Avg Job New Turn Workers wda_dd_4
            // Tab5 - Industry Gender Education Age
        */

        //
        // Updates data where on dataset where indicator accepted.
        //
		// let datasets = wdaLookup.map( x => x['data'][drpQ] ).flat() 
		// let yrqtlbl = drpQ.replace("data", "20").replace("q", "-Q")
		let tab0 = wdaLookup[0]
		let tab1 = wdaLookup[1]
		let tab2 = wdaLookup[2]
		let tab3 = wdaLookup[3]
		let tab4 = wdaLookup[4]
		let tab0Avail = tab0['yearAvailable'][drpQ]
		let tab1Avail = tab1['yearAvailable'][drpQ]
		let tab2Avail = tab2['yearAvailable'][drpQ]
		let tab3Avail = tab3['yearAvailable'][drpQ]
		let tab4Avail = tab4['yearAvailable'][drpQ]
		//
		// window.displayIndustryMetricsTable(iwdata, hiredata, avgdata, netdata, turndata)
		if (drpI == "Workers") {                  tab3['charts'][0].data = tab3Avail && tab3Avail[0] ? zeronulls(tab3['data'][drpQ][0]) : [] } // Tab 3 chart 1
		if (drpI == "Average Monthly Earnings") { tab3['charts'][0].data = tab3Avail && tab3Avail[1] ? zeronulls(tab3['data'][drpQ][1]) : [] } // Tab 3 chart 1
		if (drpI == "Job Net Changes") {          tab3['charts'][0].data = tab3Avail && tab3Avail[2] ? zeronulls(tab3['data'][drpQ][2]) : [] } // Tab 3 chart 1
		if (drpI == "New Hires") {                tab3['charts'][0].data = tab3Avail && tab3Avail[4] ? zeronulls(tab3['data'][drpQ][4]) : [] } // Tab 3 chart 1
		if (drpI == "Turnover Rate") {            tab3['charts'][0].data = tab3Avail && tab3Avail[3] ? zeronulls(tab3['data'][drpQ][3]) : [] } // Tab 3 chart 1
		if (drpI == "Industry") {   
		  console.log('INDUSTRY', zeronulls(tab4['data'][drpQ][0]) )              
		  tab4['charts'][0].data = tab4Avail && tab4Avail[0] ? zeronulls(tab4['data'][drpQ][0]) : [] 
		} // Tab 3 chart 1
		if (["Education", "By Education"].includes(drpI)) {
			tab1['charts'][1].data = tab1Avail && tab1Avail[2] ? zeronulls(tab1['data'][drpQ][2]) : [] // tab 2 Chart 3
			tab1['charts'][0].data = tab1Avail && tab1Avail[0] ? zeronulls(tab1['data'][drpQ][0]) : [] // tab 2 Chart 4 
			tab2['charts'][0].data = tab2Avail && tab1Avail[0] ? zeronulls(tab2['data'][drpQ][0]) : [] // tab 3 chart 5 
			tab4['charts'][0].data = tab4Avail && tab4Avail[3] ? zeronulls(tab4['data'][drpQ][3]) : [] // Tab 5 Chart 7
		}
		if (["Age", "By Age"].includes(drpI)) {  
			tab0['charts'][0].data = tab0Avail && tab0Avail[0] ? zeronulls( wdaLookup[0]['data'][drpQ][0] ) : [] // tab 1 Chart 1
			tab0['charts'][1].data = tab0Avail && tab0Avail[2] ? zeronulls( wdaLookup[0]['data'][drpQ][2] ) : [] // tab 1 Chart 1 
			tab4['charts'][0].data = tab4Avail && tab4Avail[1] ? zeronulls(tab4['data'][drpQ][1]) : [] // Tab 4
		}
		if (["Gender", "By Gender"].includes(drpI)) {
			tab0['charts'][0].data = tab0Avail && tab0Avail[1] ? zeronulls(tab1['data'][drpQ][1]) : [] // tab 1 Chart 1
			tab0['charts'][1].data = tab0Avail && tab0Avail[3] ? zeronulls(tab1['data'][drpQ][3]) : [] // tab 1 Chart 2
			tab1['charts'][1].data = tab1Avail && tab1Avail[3] ? zeronulls(tab1['data'][drpQ][3]) : [] // tab 2 Chart 1
			tab1['charts'][0].data = tab1Avail && tab1Avail[1] ? zeronulls(tab1['data'][drpQ][1]) : [] // tab 2 Chart 2
			tab2['charts'][0].data = tab2Avail && tab1Avail[1] ? zeronulls(tab2['data'][drpQ][1]) : [] // tab 3 chart 1 
			tab4['charts'][0].data = tab4Avail && tab4Avail[2] ? zeronulls(tab4['data'][drpQ][2]) : [] // Tab 4
		}
        pwChart.draw(); wChart.draw(); 
        avgChart.draw(); pavgChart.draw(); 
        jc.draw(); pjc.draw(); 
        pturnChart.draw(); turnChart.draw(); 
        chart8.draw(); pchart8.draw(); 
        pnewHireChart.draw(); newHireChart.draw(); 
        chart61.draw(); pchart61.draw();
    }

    d3.select("#collapse1_dd").on("change", wdaChartChange)
    d3.select("#collapse2_dd").on("change", wdaChartChange)
    d3.select("#collapse3_dd").on("change", wdaChartChange)
    d3.select("#collapse4_dd").on("change", wdaChartChange)
    d3.select("#collapse5_dd").on("change", wdaChartChange)
    d3.select("#dropdownMenuQ").on("change", wdaChartChange)

    window.onresize = function() {
        drawAll()
    }

    const legend1 = chart8.addLegend("65%", "5%", "40%", "95%");
    legend1.fontSize = "1px";

    const legend2 = pchart8.addLegend("65%", "5%", "40%", "95%");
    legend2.fontSize = "1px";

    const legend3 = chart61.addLegend("65%", "5%", "40%", "95%");
    legend3.fontSize = "1px";

    const legend4 = pchart61.addLegend("65%", "5%", "40%", "95%");
    legend4.fontSize = "1px";

    btn7wda
    let toggleIt = () => {
    	console.log('Toggle Legend', togNum1, legend1)
		let legendElementArray =  Array.from(document.querySelectorAll(".dimple-legend") )
		console.log( {legendElementArray} )
        if (togNum1 == 1) {
            togNum1 = 0;
            // qLegend.shapes.style("visibility", "hidden");
            legendElementArray.map( legendElement => { 
            	legendElement.style.display = "block";
            }) 
        } else if (togNum1 == 0) {
            togNum1 = 1;
            legendElementArray.map( legendElement => { 
            	legendElement.style.display = "none";
            }) 
        }
    }
    d3.select("#btn6wda").on("click", toggleIt);
    d3.select("#btn7wda").on("click", toggleIt);
}
)()
