import*as d3 from 'd3';
import*as dimple from 'dimple';

import {createDatasets, configCharts, configSvgz, cma, pcnt, pcnt2, find, findGender, findEmp, findEmpEdu, findDisEmp, createChart, findRace, findVet, createDatasetsUsingQuarters} from './event_handlers.js'

/*
 * Outline
 * 
 * 1 - Population
 * 2 - Demographics
 * 3 - Disability and Poverty
 * 4 - Tanf
 * 5 - Employment - Conditional
 * 6 - Snap
*/
(async()=>{
    //
    // Retrieve Data
    //
    let url = CountyName2 == 'Maryland' ? './data/MarylandData.csv' : "./data/CountyData.csv"
    let data = await d3.csv(url)
    CountyName2 == 'Maryland' ? '' : data = dimple.filterData(data, "Location", CountyName2)
    //
    // Filter Data
    //
    let fullYears = ['2015', '2016', '2017', '2018', '2019']
    let fullQuarters =  ["2016Q1", "2016Q2", "2016Q3", "2016Q4", "2017Q1", "2017Q2", "2017Q3", "2017Q4", "2018Q1", "2018Q2", "2018Q3", "2018Q4", "2019Q1", "2019Q2", "2019Q3", "2019Q4"]
    
    // Tab - Pop & MHHI
    let mhhi = dimple.filterData(data, "Indicator", "Median Household Income")
    let pop = dimple.filterData(data, "Indicator", "Total Population")
    // Tab - Edu & Gen
    let EduAttainment = dimple.filterData(data, "Indicator_Status", 
      ["Less than Highschool", "Highschool", "Some College", "Bachelor's or Higher"])
    EduAttainment = dimple.filterData(EduAttainment, "Employment_Status", ["Unemployed", "NIL", "Employed"])
    createDatasets(EduAttainment, 'EduAttainment', fullYears)
    let unempByGender = dimple.filterData(data, "Indicator_Status", ["Male", "Female"])
    unempByGender = dimple.filterData(unempByGender, "Indicator", "Unemployment By Gender")
    createDatasets(unempByGender, 'unempByGender', fullYears)
    // Tab - Race & Eth
    let raceData = dimple.filterData(data, "Indicator", "Unemployment By Race")
    raceData = dimple.filterData(raceData, "Indicator_Status", ["White", "Black", "Asian", "Hispanic"]);
    createDatasets(raceData, 'raceData', fullYears)
    let ethData = dimple.filterData(data, "Indicator", "Unemployment By Race")
    ethData = dimple.filterData(ethData, "Indicator_Status", ["White", "Hispanic"]);
    createDatasets(ethData, 'ethData', fullYears)
    // Tab - Vet
    let vetData = dimple.filterData(data, "Indicator", "Unemployment By Veteran Status")
    window.vetData2015 = dimple.filterData(vetData, "Time", "2015");
    createDatasets(vetData, 'vetData', fullYears)
    // Tab - Disability and Pov
    let povRate = dimple.filterData(data, "Indicator", "Employment Status By Poverty Status")
    povRate = dimple.filterData(povRate, "Employment_Status", ["Unemployed", "Labor Force", "Employed"])
    povRate = dimple.filterData(povRate, "Indicator_Status", ["Below Poverty"])
    window.povRate2018 = dimple.filterData(povRate, "Time", "2018");
    createDatasets(povRate, 'povRate', fullYears)
    let disAttainment = dimple.filterData(data, "Indicator", "Employment Status By Disability Status")
    disAttainment = dimple.filterData(disAttainment, "Employment_Status", ["Unemployed", "Labor Force", "Employed"])
    createDatasets(disAttainment, 'disAttainment', fullYears)
    window.disAttainment2015 = dimple.filterData(disAttainment, "Time", ["2008-2011", "2015"]);
    // Tab - TANF
    let tanfAttainment = dimple.filterData(data, "Indicator", "TANF Workers")
    let tanfData = dimple.filterData(data, "Indicator", "TANF Participants in Workforce Service ")
    let tanfRate = dimple.filterData(data, "Indicator", "Percent of Workforce Service participants in TANF (%)")
    let tanfPerc = dimple.filterData(data, "Indicator", "Percent of Workers in TANF (%)")
    let quartersByYear = fullYears.map( year => [year] )
    createDatasets(tanfAttainment, 'tanfAttainment', quartersByYear)
    createDatasets(tanfData, 'tanfData', quartersByYear)
    createDatasets(tanfRate, 'tanfRate', quartersByYear)
    createDatasets(tanfPerc, 'tanfPerc', quartersByYear)

    // Tab 5 - EMPL
    let empl_data = ''
    if (!emplStatusCounties.includes(CountyName)) {
        empl_data = CountyName == 'Maryland' ? data : await d3.dsv(",", "./data/emp18/emp_" + CountyName4.replace(/[ ]/g, '') + ".csv")
        empl_data.unshift(["Employment Status Amongst Maryland Workers", "", "", 2016, 2017, 2018])
    
        createDatasets(dimple.filterData(data, "Indicator", "Work Experience by Gender"), 'workerDatag', fullYears)
        createDatasets(dimple.filterData(data, "Indicator", "Work Experience by Education"), 'workerDatae', fullYears)
        createDatasets(dimple.filterData(data, "Indicator", "Work Experience by Race"), 'workerDatar', fullYears)
        createDatasets(dimple.filterData(data, "Indicator", "Work Experience by Poverty"), 'workerDatap', fullYears)
    }
    // Tab 6 - SNAP
    let snap_Data1 = dimple.filterData(data, "Indicator", "SNAP Recipient Workers")
    let snap_Data2 = dimple.filterData(data, "Indicator", "SNAP Recipient Workers by Percentage")

    console.log(window)

    //
    // Create SVGz
    //
	configSvgz([ 
		['pop_svg', "#pop_chart", "100%", 400],
		['pop_chart_print', "#pop_chart_print", 750, 400],
		['empl_edu_gend_svg', "#empl_edu_gend_chart", "100%", 400],
		['empl_edu_gend_chart_print', "#empl_edu_gend_chart_print", 750, 400],
		['empl_race_ethn_svg', "#empl_race_ethn_chart", "100%", 400],
		['empl_race_ethn_chart_print', "#empl_race_ethn_chart_print", 750, 400],
		['empl_vet_svg', "#empl_vet_chart", "100%", 400],
		['empl_vet_print_svg', "#empl_vet_chart_print", 750, 400],
		['tanf_svg', "#tanf_chart", "100%", 400],
		['tanf_chart_print', "#tanf_chart_print", 750, 400],
		['disabl_pov_svg', "#disabl_pov_chart", "100%", 400],
		['disabl_pov_chart_print', "#disabl_pov_chart_print", 750, 400],
		['empl_status_svg', "#empl_status_chart", "100%", 500],
		['empl_status_chart_print', "#empl_status_chart_print", 750, 400],
		['snap_chart_svg', "#snap_chart", "100%", 400],
		['psnap_chart_svg', "#snap_chart_print", 750, 400],

    ] ) 
    //
    // Configure Chart
    //
    configCharts(
      [
        ['pop_chart', pop_svg, pop], 
        ['mhhi_chart', pop_svg, mhhi], 
        ['ppop_chart', pop_chart_print, pop], 
        ['mhhi_chart_print', pop_chart_print, mhhi], 
        ['empl_edu_chart', empl_edu_gend_svg, EduAttainment], 
        ['empl_edu_gend_chart', empl_edu_gend_svg, unempByGender], 
        ['pempl_edu_chart', empl_edu_gend_chart_print, EduAttainment], 
        ['pempl_edu_gend_chart', empl_edu_gend_chart_print, unempByGender], 
        ['empl_race_ethn_chart', empl_race_ethn_svg, raceData], 
        ['chart5', empl_race_ethn_svg, ethData], 
        ['pchart5', empl_race_ethn_chart_print, ethData], 
        ['pempl_race_ethn_chart', empl_race_ethn_chart_print, raceData], 
        ['empl_vet_chart', empl_vet_svg, vetData], 
        ['empl_vet_print_chart', empl_vet_print_svg, vetData], 
        ['work_exp_pov_chart', empl_status_svg, []],
        ['pwork_exp_pov_chart', empl_status_chart_print, []], 
        ['snap_chart', snap_chart_svg, snap_Data1], 
        ['snap_chart2', snap_chart_svg, snap_Data2],
        ['psnap_chart', psnap_chart_svg, snap_Data1], 
        ['psnap_chart2', psnap_chart_svg, snap_Data2], 
        ['tanf_attainment_chart', tanf_svg, tanfAttainment2018], 
        ['ptanf_attainment_chart', tanf_chart_print, tanfAttainment2018], 
        ['tanf_data', tanf_svg, tanfData2018], 
        ['ptanf_data', tanf_chart_print, tanfData2018], 
        ['tanf_rate_chart', tanf_svg, tanfRate2018], 
        ['ptanf_rate_chart', tanf_chart_print, tanfRate2018], 
        ['tanf_perc_chart', tanf_svg, tanfPerc2018], 
        ['ptanf_perc_chart', tanf_chart_print, tanfPerc2018], 
        ['pempl_status_chart', disabl_pov_chart_print, povRate], 
        ['empl_status_chart', disabl_pov_svg, povRate], 
        ['emp_dis_chart_print', disabl_pov_chart_print, disAttainment2018], 
        ['emp_dis_chart', disabl_pov_svg, disAttainment2018], 
      ])


    //
    // Event Handler
    //
    window.countyLookup = [{
        'tab': 'pop',
        'lbl': 'Population and Median Household Income',
        'dm': false,
        'dmy': false,
        'dmq': false,
        'charts': [pop_chart, mhhi_chart],
        'pcharts': [ppop_chart, mhhi_chart_print],
        'svgName': '#pop_chart',
        'data': {
            data18: [pop, mhhi],
            data17: [pop, mhhi],
            data16: [pop, mhhi],
            data15: [pop, mhhi],
        }
    }, {
        'tab': 'empl_edu_gend',
        'lbl': 'Demographics - Education and Gender',
        'dm': true,
        'dmy': true,
        'dmq': false,
        'charts': [empl_edu_chart, empl_edu_gend_chart],
        'pcharts': [pempl_edu_chart, pempl_edu_gend_chart],
        'svgName': '#empl_edu_gend_chart',
        'data': {
            data18: [EduAttainment2018, unempByGender2018],
            data17: [EduAttainment2017, unempByGender2017],
            data16: [EduAttainment2016, unempByGender2016],
            data15: [EduAttainment2015, unempByGender2015],
        }
    }, {
        'tab': 'empl_race_ethn',
        'lbl': 'Demographics - Race and Ethnicity',
        'dm': true,
        'dmy': true,
        'dmq': false,
        'charts': [empl_race_ethn_chart, chart5],
        'pcharts': [pempl_race_ethn_chart, pchart5],
        'svgName': '#empl_race_ethn_chart',
        'data': {
            data18: [raceData2018, ethData2018],
            data17: [raceData2017, ethData2017],
            data16: [raceData2016, ethData2016],
            data15: [raceData2015, ethData2015],
        }
    }, {
        'tab': 'empl_vet',
        'lbl': 'Demographics - Veterans Status',
        'dm': true,
        'dmy': true,
        'dmq': false,
        'charts': [empl_vet_chart],
        'pcharts': [empl_vet_print_chart],
        'svgName': '#empl_vet_chart',
        'data': {
            data18: [vetData2018],
            data17: [vetData2017],
            data16: [vetData2016],
            data15: [vetData2015],
        }
    }, {
        'tab': 'disabl_pov',
        'lbl': 'Disability and Poverty',
        'dm': true,
        'dmy': true,
        'dmq': false,
        'charts': [emp_dis_chart, empl_status_chart],
        'pcharts': [emp_dis_chart_print, pempl_status_chart],
        'svgName': '#disabl_pov_chart',
        'data': {
            data18: [disAttainment2018, povRate2018],
            data17: [disAttainment2017, povRate2017],
            data16: [disAttainment2016, povRate2016],
            data15: [disAttainment2015, povRate2015]
        }
    }, {
        'tab': 'tanf',
        'lbl': 'Temporary Aid for Needy Families (TANF) Stats',
        'dm': true,
        'dmy': true,
        'dmq': false,
        'charts': [tanf_attainment_chart, tanf_perc_chart, tanf_rate_chart, tanf_data],
        'pcharts': [ptanf_attainment_chart, ptanf_perc_chart, ptanf_rate_chart, ptanf_data],
        'svgName': '#tanf_chart',
        'data': {
            data19: [tanfAttainment2019, tanfPerc2019, tanfRate2019, tanfData2019],
            data18: [tanfAttainment2018, tanfPerc2018, tanfRate2018, tanfData2018],
            data17: [tanfAttainment2017, tanfPerc2017, tanfRate2017, tanfData2017],
            data16: [tanfAttainment2016, tanfPerc2016, tanfRate2016, tanfData2016],
            data15: [tanfAttainment2015, tanfPerc2015, tanfRate2015, tanfData2015]
        }
    }, {
        'tab': 'empl_status',
        'lbl': 'Employment Status amongst Maryland Workers',
        'dm': true,
        'dmy': true,
        'dmq': false,
        'charts': [work_exp_pov_chart],
        'pcharts': [pwork_exp_pov_chart],
        'svgName': '#empl_status_chart',
        'data': {
            data18: !emplStatusCounties.includes(CountyName) ? [workerDatag2018, workerDatar2018, workerDatae2018, workerDatap2018] : [],
            data17: !emplStatusCounties.includes(CountyName) ? [workerDatag2017, workerDatar2017, workerDatae2017, workerDatap2017] : [],
            data16: !emplStatusCounties.includes(CountyName) ? [workerDatag2016, workerDatar2016, workerDatae2016, workerDatap2016] : [],
            data15: !emplStatusCounties.includes(CountyName) ? [workerDatag2015, workerDatar2015, workerDatae2015, workerDatap2015] : []
        }
    }, {
        'tab': 'snap',
        'lbl': 'SNAP Recipient Workers',
        'dm': false,
        'dmy': false,
        'dmq': false,
        'charts': [snap_chart, snap_chart2],
        'pcharts': [psnap_chart, psnap_chart2],
        'svgName': '#snap_chart',
        'data': {
            data18: [snap_Data1, snap_Data2],
            data17: [snap_Data1, snap_Data2],
            data16: [snap_Data1, snap_Data2],
            data15: [snap_Data1, snap_Data2]
        }
    }]


    //
    // Determine if indicator has a missing year.
    // That way when a tab is clicked, we know to change the year.
    //

    // Loop All Tabs
    countyLookup.map(tab=>{
        // Loop All Years 
        tab['yearAvailable'] = {}
        let chartsHaveRecords = !tab['data'] ? '' : Object.keys(tab['data']).map((dataDropdownCategory)=>{
            // Loop All datasets and get a T/F flag for each. 
            let valid4TabDisplay = tab['data'][dataDropdownCategory].map(dataset=>{
                // Loop All Records in dataset. Returns True if any record is not empty 
                return dataset.some((d)=>{
                    return (d != 'N/A' & d != undefined & d != '--' & d != 'S')
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

    console.log({countyLookup})

    //
    // Display Table
    //
    // Tab - Pop & MHHI
    let displayYears = Object.keys( countyLookup[0]['yearAvailable'] ).map( lbl => lbl.replace('data', '20') ).reverse()
    document.getElementById('pop_table').innerHTML = `
        <tr class="HeadRow" style="background-color: white;">
          <th>${CountyName4}:</th> ${displayYears.map(yr=>`<th>${yr}</th>`).join('')} </tr>
        <tr>
          <th>Population</th> ${displayYears.map((yr,i)=>`<td>${cma(find(pop, i))}</td>`).join('')}
        </tr>
        <tr class="FootRow">
          <th>Median Household Income</th> ${displayYears.map((yr,i)=>`<td>${cma(find(mhhi, i))}</td>`).join('')}
        </tr>
    `
    // Tab - Edu & Gen
    displayYears = Object.keys( countyLookup[1]['yearAvailable'] ).map( lbl => lbl.replace('data', '20') )
    let mdNoTD = CountyName == 'Maryland' ? '' : `<td></td><td></td>`
    document.getElementById('empl_edu_gend_table').innerHTML = `
    <tr class="HeadRow" style="background-color: white;">
      <th>${CountyName4}: </th>
      <th>Less than High School Graduate</th>
      <th>High School Graduate (Includes Equivalency)</th>
      <th>Some College or Associates</th>
      <th>Bachelor's Degree or Higher</th>
      ${mdNoTD}
      ${CountyName == 'Maryland' ? '' : `<th>Male</th><th>Female</th>`}
    </tr>
    ${displayYears.map(year=>{
        let ds = window['EduAttainment' + year]
        let ds2 = window['unempByGender' + year]
        return `<tr class="HeadRow" style="background-color: white;">
          <th>${year}</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          ${CountyName == 'Maryland' ? '' : '<th></th>'}
          ${mdNoTD}
        </tr>
        <tr>
          <th>Employed</th>
          <td>${cma(findEmpEdu(ds, 0, 0))}</td>
          <td>${cma(findEmpEdu(ds, 1, 0))}</td>
          <td>${cma(findEmpEdu(ds, 2, 0))}</td>
          <td>${cma(findEmpEdu(ds, 3, 0))}</td>
          ${CountyName == 'Maryland' ? '' : `<th rowspan="3" style="border-style: solid; border-color: #5281B7;">Unemployment Rate</th>`}
          ${mdNoTD}
        </tr>
        <tr>
          <th>Unemployed</th>
          <td>${cma(findEmpEdu(ds, 0, 1))}</td>
          <td>${cma(findEmpEdu(ds, 1, 1))}</td>
          <td>${cma(findEmpEdu(ds, 2, 1))}</td>
          <td>${cma(findEmpEdu(ds, 3, 1))}</td>
          ${CountyName == 'Maryland' ? '' : `<td>${cma(findGender(ds2, 0))}</td>`}
          ${CountyName == 'Maryland' ? '' : `<td>${cma(findGender(ds2, 1))}</td>`}
        </tr>
        <tr>
          <th>Not In Labor Force (NIL)</th>
          <td>${cma(findEmpEdu(ds, 0, 2))}</td>
          <td>${cma(findEmpEdu(ds, 1, 2))}</td>
          <td>${cma(findEmpEdu(ds, 2, 2))}</td>
          <td>${cma(findEmpEdu(ds, 3, 2))}</td>
          ${mdNoTD}
        </tr>`
    }
    ).join('')}
    <tr class="FootRow" style="padding:0px">
      <th style="padding:0px"></th> 
      ${displayYears.map((yr,i)=>`<td style="padding:0px"></td>`).join('')} 
      ${CountyName == 'Maryland' ? '' : `<td style="padding:0px"></td><td style="padding:0px"></td>`}
    </tr>
    `
    // Tab - Race & Eth
    displayYears = Object.keys( countyLookup[2]['yearAvailable'] ).map( lbl => lbl.replace('data', '20') ).reverse()
    document.getElementById('empl_race_ethn_table').innerHTML = `
        <tr class="HeadRow" style="background-color: white;">
          <th>${CountyName4}:</th>
          <th>White</th>
          <th>Black</th>
          <th>Asian</th>
          <th>Hispanic or Latino <br> (Any Race)</th>
        </tr>
        ${displayYears.map(year=>{
        let ds = window['raceData' + year]
        return `
                <tr class="HeadRow">
                  <th>${year}</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr >
                  <th>Unemployment Rate</th>
                  <td>${pcnt2(findRace(ds, 0))}</td>
                  <td>${pcnt2(findRace(ds, 1))}</td>
                  <td>${pcnt2(findRace(ds, 2))}</td>
                  <td>${pcnt2(findRace(ds, 3))}</td>
                </tr>`
    }
    ).join('')}
        <tr class="FootRow" style="padding:0px">
          <th style="padding:0px"></th> 
          ${displayYears.map((yr,i)=>`<td style="padding:0px"></td>`).join('')} 
          ${CountyName == 'Maryland' ? '' : `<td style="padding:0px"></td><td style="padding:0px"></td>`}
        </tr>
    `
    // Tab - Vet
    displayYears = Object.keys( countyLookup[3]['yearAvailable'] ).map( lbl => lbl.replace('data', '20') ).reverse()
    document.getElementById('empl_vet_table').innerHTML = `
        <tr class="HeadRow" style="background-color: white;">
          <th>${CountyName4}:</th>
          <th>Veteran</th>
          <th>Non Veteran</th>
        </tr>
        ${displayYears.map(year=>{
        let ds = window['vetData' + year]
        return `<tr class="HeadRow">
                  <th>${year}</th>
                  <th></th>
                  <th></th>
                </tr>
                <tr class="FootRow">
                  <th>Unemployment Rate</th>
                  <td>${pcnt2(findVet(ds, 0))}</td>
                  <td>${pcnt2(findVet(ds, 1))}</td>
                </tr>`
    }
    ).join('')}
    `
    // Tab - Disability and Pov
    displayYears = Object.keys( countyLookup[4]['yearAvailable'] ).map( lbl => lbl.replace('data', '20') )
    document.getElementById('disabl_pov_table').innerHTML = `
        <tr class="HeadRow" style="background-color: white;">
          <th>${CountyName4}: </th>
          <th>Disabled Individuals</th>
          <th>Individuals without Disabilities</th>
          <th></th>
          <th>Income in the past 12 months below poverty level</th>
        </tr>
        ${displayYears.map(year=>{
        let ds1 = window['disAttainment' + year]
        let ds2 = window['povRate' + year]
        return `<tr class="HeadRow" style="background-color: white;">
                  <th>${year}</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <th>Labor Force</th>
                  <td>${cma(findDisEmp(ds1, 1, 0))}</td>
                  <td>${cma(findDisEmp(ds1, 1, 1))}</td>
                  <td></td>
                  <td>${cma(findEmp(ds2, 1))}</td>
                </tr>
                <tr>
                  <th>Employed</th>
                  <td>${cma(findDisEmp(ds1, 2, 0))}</td>
                  <td>${cma(findDisEmp(ds1, 2, 1))}</td>
                  <td></td>
                  <td>${cma(findEmp(ds2, 2))}</td>
                </tr>
                <tr>
                  <th>Unemployed</th>
                  <td>${cma(findDisEmp(ds1, 0, 0))}</td>
                  <td>${cma(findDisEmp(ds1, 0, 1))}</td>
                  <td ></td>
                  <td>${cma(findEmp(ds2, 0))}</td>
                </tr>`
    }
    ).join('')}
        <tr class="FootRow" style="padding:0px">
          <th style="padding:0px"></th> 
          ${[0, 1, 2, 3].map((yr,i)=>`<td style="padding:0px"></td>`).join('')} 
        </tr>
    `
    // Tab - TANF
    window.display_tanf_table = (lbl,tanfAttainment,tanfPerc,tanfRate,tanfData)=>{
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
              <th>${lbl}Q1</th>
              <td>${cma(find(tanfAttainment, 0))}</td>
              <td>${cma(find(tanfData, 0))}</td>
              <td>${pcnt2(find(tanfPerc, 0))}</td>
              <td>${pcnt2(find(tanfRate, 0))}</td>
            </tr>
            <tr>
              <th>${lbl}Q2</th>
              <td>${cma(find(tanfAttainment, 1))}</td>
              <td>${cma(find(tanfData, 1))}</td>
              <td>${pcnt2(find(tanfPerc, 1))}</td>
              <td>${pcnt2(find(tanfRate, 1))}</td>
            </tr>
            <tr>
              <th>${lbl}Q3</th>
              <td>${cma(find(tanfAttainment, 2))}</td>
              <td>${cma(find(tanfData, 2))}</td>
              <td>${pcnt2(find(tanfPerc, 2))}</td>
              <td>${pcnt2(find(tanfRate, 2))}</td>
            </tr>
            <tr>
              <th>${lbl}Q4</th>
              <td>${cma(find(tanfAttainment, 3))}</td>
              <td>${cma(find(tanfData, 3))}</td>
              <td>${pcnt2(find(tanfPerc, 3))}</td>
              <td>${pcnt2(find(tanfRate, 3))}</td>
            </tr>
        `
    }
    display_tanf_table('2018', tanfAttainment2018, tanfPerc2018, tanfRate2018, tanfData2018)
    // Tab 5 - EMPL
    if (!emplStatusCounties.includes(CountyName)) {
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
        ).enter().append('td').text(d=>d.value)
    }
    // Tab 5 - SNAP
    console.log(snap_Data1)
    document.getElementById("snap_table").innerHTML = `
        <tr class="HeadRow">
          <th>SNAP Recipient Workers</th> <th></th>
          <th>2016</th>
          <th>2017</th>
          <th>2018</th>
          </tr>
        <tr>
          <th>Snap Recipient Workers</th> <th></th>
          <td>${cma(find(snap_Data1, 1))}</td>
          <td>${cma(find(snap_Data1, 2))}</td>
          <td>${cma(find(snap_Data1, 3))}</td>
        </tr>
        <tr>
          <th>Snap Recipient Workers by Percentage</th> <th></th>
          <td>${pcnt(find(snap_Data2, 1))}</td>
          <td>${pcnt(find(snap_Data2, 2))}</td>
          <td>${pcnt(find(snap_Data2, 3))}</td>
        </tr>
    `
    //
    // Display Charts
    //
    // Tab - Pop & MHHI
    let m = ["y", "Amount"]
    let orderRuleEdu = ["Less than Highschool", "Highschool", "Some College", "Bachelor's or Higher"]
    let orderedQtr = ["2018Q1", "2018Q2", "2018Q3", "2018Q4"]
    var createThese = [{
        "chart": pop_chart,
        "bounds": ["11%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": 'Years',
        "order": fullYears,
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
        "order": fullYears,
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
        "order": fullYears,
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
        "order": fullYears,
        "measureAxis": m,
        "ytitle": "Median Household Income",
        "tickFormat": '$,.0f',
        "series": "Indicator",
        "lineMarkers": true
    }, {
        "chart": empl_edu_chart,
        "bounds": ["11%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Employment_Status"],
        "xtitle": "Employment Status",
        "order": orderRuleEdu,
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
        "order": orderRuleEdu,
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
        "order": orderRuleEdu,
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
        "order": orderRuleEdu,
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": "Unemployment Rate",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["Male", "#3366ff", "black", 0.7], ["Female", "pink", "black", 0.7]]
    }, {
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
    }, {
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
    }, {
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
    }, {
        "chart": tanf_attainment_chart,
        "bounds": ["8%", "12%", "20%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": orderedQtr,
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
        "order": orderedQtr,
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
        "order": orderedQtr,
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
        "order": orderedQtr,
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
        "order": orderedQtr,
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
        "order": orderedQtr,
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
        "order": orderedQtr,
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
        "order": orderedQtr,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Workers receiving TANF benefits",
        "tickFormat": ",.0f",
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    },{
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
    if (!emplStatusCounties.includes(CountyName)) {
        createThese.push({
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
        })
        createThese.push({
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
        })
    }
    createChart(createThese)    

    //
    // Whenever a user selects a dropdown option
    window.countyChartChange = () => {
        // Find what tab we were on
        let tab = countyLookup.filter(obj=>obj['tab'] == localStorage.getItem('Clicked'))[0];
        // Get the selected dropdown year
        let drp = document.querySelector("#dropdownMenuY")
        let drpY = drp.value
        // Get the tabs data at the dropdown selected year
        let dta = tab['data'][drpY]
        
        // Check the size of the year's dataset to see if it is empty, pick another one at random if so.
        if ( new Blob([JSON.stringify(dta)]).size < 20 ){
          let notTheSame = false 
          while (!notTheSame){
              let objk = Object.keys( tab['data'] )
              drpY = objk[Math.floor(Math.random()*objk.length)]
              notTheSame = drp.value != drpY
              console.log({notTheSame}, drp.value, drpY)
              if(notTheSame){
                  drp.value = drpY
                  dta = tab['data'][drpY] 
              }
          }
        }

        let lbl = tab['lbl']
        const avail = tab['yearAvailable'][drpY] 
        // If any of the datasets can't be displayed
        let notAllChartsAvailable = !avail ? false : avail.some(availableAtYear => !availableAtYear)
        let warn = document.querySelector('#notalldataavailablewarning')
        warn.style.display = notAllChartsAvailable ? 'inline':'none';
        console.log({notAllChartsAvailable})

        // Tanf
        if (lbl == 'Temporary Aid for Needy Families (TANF) Stats') {
            display_tanf_table(drpY.replace('data', '20'), 
                tab['charts'][0].data, tab['charts'][1].data, 
                tab['charts'][2].data, tab['charts'][3].data 
            )
        }
        // EMPL
        // This has 4 charts, only show those that have valid data.
        if (lbl == 'Employment Status amongst Maryland Workers') {
            var e8 = document.getElementById("emplStatus_categ_dd");
            var strUser8 = e8.options[e8.selectedIndex].text;
            let clag = avail && avail[0]
            if (strUser8 == "Gender") { tab['charts'][0].data = avail && avail[0] ? dta[0] : [] }
            if (strUser8 == "Race") { tab['charts'][0].data = avail && avail[1] ? dta[1] : [] }
            if (strUser8 == "Education") { tab['charts'][0].data = avail && avail[2] ? dta[2] : [] }
            if (strUser8 == "Poverty") { tab['charts'][0].data = avail && avail[3] ? dta[3] : [] }
            // pwork_exp_pov_chart.data = tab['charts'][0].data;
            tab['charts'][0].draw()
        }
        // Otherwise 
        else {
            let svg = document.querySelector(tab['svgName']);
            for (let i in tab['charts']) {
                // Determine Chart Viz
                let flag = avail && avail[i]
                let svgChart = svg.querySelectorAll('.dimple-chart')[i]
                tab['charts'][i].data = flag ? dta[i] : []
                tab['charts'][i].draw()
            }
        }
        drawAll();
    }

    d3.select("#dropdownMenuY").on("change", countyChartChange);
    d3.select("#emplStatus_categ_dd").on("change", countyChartChange);
}
)()
