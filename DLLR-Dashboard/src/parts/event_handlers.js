/*
#File: Index.js
#Author: Charles Karpati
#Date: August 2020
#Section: Bnia
#Email: karpati1@umbc.edu
#Description: Handles the Load, ScreenResize, Printscreen Buttons, Indicator and Year Toggles
#Purpose: Display logic. 
#input: Nothin
#output: The Application and a Service Worker

*/

import * as d3 from 'd3';
import * as dimple from 'dimple';


export let configCharts = (objArr) => {
    objArr.map( obj => { 
        window[`${obj[0]}`] = new dimple.chart(obj[1],obj[2]) 
    } )
}
export let configSvgz = (objArr) => {
    objArr.map( obj => { 
        window[`${obj[0]}`] = dimple.newSvg(obj[1],obj[2],obj[3]) 
    } )
}
export let createDatasets = (data, dsPrefix, filters) => {
    filters.map( filter => {
        if( Array.isArray(filter) ){
            filter.map( year => {
                 window[`${dsPrefix}${year}`] = dimple.filterData(data, "Time", [year+'Q1',year+'Q2',year+'Q3',year+'Q4']) 
            } )
        }
        else{
            window[`${dsPrefix}${filter}`] = dimple.filterData(data, "Time", filter)   
        }
    } )
}

// https://github.com/PMSI-AlignAlytics/dimple/issues/265
export let createChart = (objarr)=>{
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
        if(obj.legend){
            let legen = chart.addLegend("65%","5%","40%","95%")
            legen.fontSize="1px"
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
        chart.draw()
    }
    )
}

export let pcnt = (d)=>{
    if (d == 'N/A') {
        return d
    }
    if (d == 'S') {
        return d
    }
    if (d == undefined | d == '--') {
        return '--'
    }
    return d.slice(d.length - 1) != '%' ? (d3.format(".1%")(d * 1)) : (d3.format(".1%")(Number(d.slice(0, -1) * .01)))
}
export let pcnt2 = (d)=>{
    if (d == 'N/A') {
        return d
    }
    if (d == 'S') {
        return d
    }
    if (d == undefined | d == '--') {
        return '--'
    }
    return d.slice(d.length - 1) != '%' ? (d3.format(".1%")(d * .01)) : (d3.format(".1%")(Number(d.slice(0, -1) * .01)))
}

export let findGender = (objArr,indx)=>{
    let returnThis = objArr.filter(obj=>{
        let flag = obj['Indicator_Status'] == ["Male", "Female"][indx]
        flag = flag ? flag : obj['Indicator_Value'] == ["Male", "Female"][indx]
        return flag
    }
    )[0] 
    returnThis = returnThis == undefined ? '--' : returnThis['Amount']
    return returnThis
}

export let cma = (d)=>{
    if (d == 'N/A') {
        return d
    }
    if (d == 'S') {
        return d
    }
    if (d == undefined | d == '--') {
        return '--'
    }
    return d3.format(',.0f')(d * 1)
}
export let dlr = (d)=>{
    if (d == 'N/A') {
        return d
    }
    if (d == 'S') {
        return d
    }
    if (d == undefined | d == '--') {
        return '--'
    }
    return d3.format('$,.0f')(d * 1)
}
export let zeronulls = (dataset)=>{
    let returnThis = []  
    for (let record of dataset) {
        if (record['Amount'] == "N/A" || record['Amount'] == 'S') {
            record['Amount'] = 0
        }
        returnThis.push(record)
    }
    return returnThis
}

export let findEdu = (objArr,indx)=>{
    let filtray = ["Educational attainment not available (workers aged 24 or younger)", "Less than High school", "High school or equivalent, no college", "Some college or Associate degree", "Bachelor's degree or advanced degree"]
    let flag = false
    let returnThis = objArr.filter(obj=>{
        let val = obj['Indicator_Value']
        if (indx == 0) {
            if (["NR", "N/A", "NA"].includes(val)) {
                flag == true
            }
            return ["NR", "N/A", "NA"].includes(val) || val == filtray[indx]
        } else {
            return val == filtray[indx]
        }
    }
    )
    returnThis = returnThis[0]
    returnThis = returnThis == undefined ? '--' : returnThis['Amount']

    return returnThis
}

export let findAge = (objArr,indx)=>{
    let returnThis = objArr.filter(obj=>{
        return obj['Indicator_Value'] == ["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99"][indx]
    }
    )[0]
    returnThis = returnThis == undefined ? '--' : returnThis['Amount']
    return returnThis
}

export let indsList = ["Agriculture, Forestry, Fishing and Hunting", "Mining, Quarrying, and Oil and Gas Extraction", "Utilities", "Construction", "Manufacturing", "Wholesale Trade", "Retail Trade", "Transportation and Warehousing", "Information", "Finance and Insurance", "Real Estate and Rental and Leasing", "Professional, Scientific, and Technical Services", "Management of Companies and Enterprises", "Administrative and Support and Waste Management and Remediation Services", "Educational Services", "Health Care and Social Assistance", "Arts, Entertainment, and Recreation", "Accommodation and Food Services", "Other Services (except Public Administration)", "Public Administration", ]
export let findIndustry = (objArr,indx)=>{
    let returnThis = objArr.filter(obj=>{
        return obj['Indicator_Value'] == indsList[indx]
    }
    )[0]
    returnThis = returnThis == undefined ? '--' : returnThis['Amount']
    return returnThis
}



export let find = (objArr,indx)=>{
    let returnThis = objArr.filter(obj=>{
        return obj['Time'] == ['2015', '2016', '2017', '2018', '2019'][indx]
    }
    )[0]
    returnThis = returnThis == undefined ? '--' : returnThis['Amount']
    return returnThis
}

export let findEmpEdu = (objArr,indx1,indx2)=>{
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
export let findRace = (objArr,indx)=>{
    let returnThis = objArr.filter(obj=>{
        return obj['Indicator_Status'] == ["White", "Black", "Asian", "Hispanic"][indx]
    }
    )[0]
    returnThis = returnThis == undefined ? '--' : returnThis['Amount']
    return returnThis
}
export let findEmp = (objArr,indx)=>{
    let returnThis = objArr.filter(obj=>{
        return obj['Employment_Status'] == ["Unemployed", "Labor Force", "Employed"][indx]
    }
    )
    returnThis = returnThis[0]
    returnThis = returnThis == undefined ? '--' : returnThis['Amount']
    return returnThis
}
export let findVet = (objArr,indx)=>{
    let returnThis = objArr.filter(obj=>{
        return obj['Indicator_Status'] == ["Veteran", "Non Veteran"][indx]
    }
    )[0]
    returnThis = returnThis == undefined ? '--' : returnThis['Amount']
    return returnThis
}
export let findDisEmp = (objArr,indx1,indx2)=>{
    let returnThis = objArr.filter(obj=>{
        return obj['Employment_Status'] == ["Unemployed", "Labor Force", "Employed"][indx1] && obj['Indicator_Status'] == ["Disabled", "Non Disabled"][indx2]
    }
    )

    returnThis = returnThis[0]
    returnThis = returnThis == undefined ? '--' : returnThis['Amount']
    return returnThis
}

//
// Global Variables
//

var whichTab = 'pop';
window.togNum1 = 0
window.onresize = ()=>drawAll()

// The ID of HTML Elements that allow the user to navigate between pages
window.c_collapsables = ["pop", "empl_edu_gend", "empl_race_ethn", "empl_vet", "disabl_pov", "tanf", "snap", "empl_status"]
window.w_collapsables = ["collapse1", "collapse2", "collapse3", "collapse4", "collapse5"]
window.collapsables = md ? [...c_collapsables, ...w_collapsables, ...['collapse9', 'collapse16', 'collapse17', 'collapse20', 'collapse19']] : wd ? w_collapsables : c_collapsables

//
// Visibility Toggle Functions
// The ID of HTML Elements containing the print-optimized and interactive version of our visualization 
//

window.c_prints = ["pop_chart_print", "empl_edu_gend_chart_print", "empl_race_ethn_chart_print", "empl_vet_chart_print", "disabl_pov_chart_print", "tanf_chart_print", "empl_status_chart_print", "snap_chart_print"]
window.w_prints = ["Landing", "Print3", "Print4", "PrintFive", "Print6", "Print17"]
window.prints = md ? [...c_prints, ...w_prints, ...['Print11', 'Print18', 'Print19', "Print20", "Print21"]] : wd ? w_prints : c_prints

window.c_charts = ["pop_chart", "empl_edu_gend_chart", "empl_race_ethn_chart", "empl_vet_chart", "disabl_pov_chart", "tanf_chart", "empl_status_chart", "snap_chart", "Landing"]
window.w_charts = ["Chart3", "Chart4", "ChartFive", "Chart6", "Chart17"]
window.charts = md ? [...c_charts, ...w_charts, ...['Chart11', 'Chart18', 'Chart19', "Chart20", "Chart21"]] : wd ? w_charts : c_charts

window.stylem = (idArr,prop,val)=>idArr.forEach(el=>{
    document.getElementById(el).style[prop] = val
}
)
window.hideall = (idArr)=>stylem(idArr, 'display', 'none')
window.showall = (idArr)=>stylem(idArr, 'display', 'inline')

window.toggleTab = (showThese,chartId)=>{
    hideall(collapsables)
    showall(showThese)
    whichTab = chartId;
    drawAll();
    hideall(prints)
}

window.popchart = ()=>toggleTab(["collapse1", "collapse5"], 1)
window.educhart = ()=>toggleTab(["collapse2", "collapse5"], 2)
window.racechart = ()=>toggleTab(["collapse3", "collapse5"], 3)
window.vetchart = ()=>toggleTab(["collapse4", "collapse5"], 4)
window.sepchart = ()=>toggleTab(["collapse5", "collapse5"], 5) 

//
//
//
window.drawAll = ()=>{
    if (!wd || md) {
        // Counties
        pop_chart.draw(0, true);
        mhhi_chart.draw(0, true);
        empl_edu_chart.draw(0, true);
        empl_edu_gend_chart.draw(0, true);
        empl_race_ethn_chart.draw(0, true);
        chart5.draw(0, true);
        window.empl_vet_chart.draw(0, true);
        emp_dis_chart.draw(0, true);
        empl_status_chart.draw(0, true);
        tanf_attainment_chart.draw(0, true);
        tanf_rate_chart.draw(0, true);
        tanf_data.draw(0, true);
        if (!emplStatusCounties.includes(CountyName)) {
            window.work_exp_pov_chart.draw(0, true)
            pwork_exp_pov_chart.draw(0, true)
        }
        snap_chart.draw(0, true);
        snap_chart2.draw(0, true);
        ppop_chart.draw(0, true);
        mhhi_chart_print.draw(0, true);
        pempl_edu_chart.draw(0, true);
        pempl_edu_gend_chart.draw(0, true);
        pempl_race_ethn_chart.draw(0, true);
        pchart5.draw(0, true);
        empl_vet_print_chart.draw(0, true);
        emp_dis_chart_print.draw(0, true);
        pempl_status_chart.draw(0, true);
        ptanf_attainment_chart.draw(0, true);
        ptanf_rate_chart.draw(0, true);
        ptanf_data.draw(0, true);
        psnap_chart.draw(0, true);
        psnap_chart2.draw(0, true);
    }
    if (wd || md) {
        // WDA
        window.wChart.draw(0, true);
        avgChart.draw(0, true);
        jc.draw(0, true);
        newHireChart.draw(0, true);
        turnChart.draw(0, true);

        chart8.draw(0, true);
        chart61.draw(0, true);

        pwChart.draw(0, true);
        pavgChart.draw(0, true);
        pjc.draw(0, true);
        pnewHireChart.draw(0, true);
        pturnChart.draw(0, true);

        pchart8.draw(0, true);
        pchart61.draw(0, true);

        // edX.shapes.selectAll("text").attr("transform", (d) => d3.select(this).attr("transform") + " translate(0, -10) rotate(-45)" );
        // genX.shapes.selectAll("text").attr("transform", (d) => d3.select(this).attr("transform") + " translate(0, -10) rotate(-45)" );
    }
    if (md) {
        // Maryland
        chart15.draw(0, true);
        aprogChart.draw(0, true);
        aNewChart.draw(0, true);
        chart1.draw(0, true);
        chart18.draw(0, true);
    }

}

//
// BUTTONS
//

window.printClick = ()=>{
    if (whichTab == 1) {
        popchart();
        document.getElementById("Chart3").style.display = "none";
        document.getElementById("Print3").style.display = "inline";
        drawAll();

    } else if (whichTab == 2) {
        educhart();
        document.getElementById("Chart4").style.display = "none";
        document.getElementById("Print4").style.display = "inline";
    } else if (whichTab == 3) {
        racechart();
        document.getElementById("ChartFive").style.display = "none";
        document.getElementById("PrintFive").style.display = "inline";
    } else if (whichTab == 4) {
        vetchart();
        document.getElementById("Chart6").style.display = "none";
        document.getElementById("Print6").style.display = "inline";
    } else if (whichTab == 5) {
        sepchart();
        document.getElementById("Chart17").style.display = "none";
        document.getElementById("Print17").style.display = "inline";
    } else if (whichTab == 'pop') {
        pop();
        hideall(["pop_chart"]);
        showAll(["pop_chart_print"]);
    } else if (whichTab == "educhart") {
        educhart();
        hideall(["empl_edu_gend_chart"]);
        showAll(["empl_edu_gend_chart_print"]);
    } else if (whichTab == 'racechart') {
        racechart();
        hideall(["empl_race_ethn_chart"]);
        showAll(["empl_race_ethn_chart_print"]);
    } else if (whichTab == "vetchart") {
        vetchart();
        hideall(["empl_vet_chart"]);
        showAll(["empl_vet_chart_print"]);
    } else if (whichTab == "disbilities") {
        dischart();
        hideall(["disabl_pov_chart"]);
        showAll(["disabl_pov_chart_print"]);
    } else if (whichTab == "tanf") {
        tanf();
        hideall(["tanf_chart"]);
        showAll(["tanf_chart_print"]);
    } else if (whichTab == "empl_status") {
        empl_status();
        hideall(["empl_status_chart"]);
        showAll(["empl_status_chart_print"]);
    } else if (whichTab == "tanf_attainment") {
        tanf_attainment();
        hideall(["snap_chart_print"]);
        showAll(["snap_chart"]);
    }
    drawAll();
    window.print();
}

window.printAll = ()=>{
    showAll(collapsables);
    hideall(charts)
    showall(prints)
    drawAll();
    window.print();
}

window.onafterprint = ()=>{
    hideall(collapsables);
    hideall(prints)
    showall(charts)
    showAll(["Landing"])
}

window.onload = function() {
    document.getElementById("dropdownMenu").style.display = "none";
    document.getElementById("dropdownMenuY").style.display = "none";
    document.getElementById("dropdownMenuQ").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.querySelectorAll('[data-lbl]').forEach(el=>{
        el.addEventListener("click", function() {
            // The Selected Tab
            whichTab = el.dataset.lbl;
            localStorage.setItem('Clicked', whichTab);
            document.querySelector('#notalldataavailablewarning').style.display = 'none';

            // Shown as the header
            let title = document.getElementById("title")
            title.style.display = "inline";
            // the Year, Quarter, Indicator dropdown
            let drp = document.querySelector("#dropdownMenu")
            let drpY = document.querySelector("#dropdownMenuY")
            let drpQ = document.querySelector("#dropdownMenuQ")

            // Use either the county or wda or both.
            let lookup = typeof(countyLookup) !== 'undefined' ? typeof(wdaLookup) !== 'undefined' ? 
              [...countyLookup, ...wdaLookup] : countyLookup : wdaLookup
            lookup = md ? [...lookup, ...mdLookup] : lookup

            // Get the Tab that was clicked.
            let tabInfo = lookup.filter(obj=>obj['tab'] == whichTab)[0]; 
            title.innerHTML = tabInfo['lbl']

            console.log( {whichTab} )
            console.log( {'viewing' :localStorage.getItem('viewing') } )
            console.log( {tabInfo} )

            // see if the current selected dropdown year is available
            let currentYearSelectionAvailable = false
            let currentYearSelectionAvailableButIncomplete = false
            let currentYearAndIndicatorSelectionAvailable = false
            let validAlternateYear = tabInfo['dmy'] ? "data16" : "data16q4"

            let hideUnavailableDropdowns = (dprX) => {
                Array.from(dprX.children).map(ele=>{
                    // Grab the boolean array telling us if the datasets exist for a year.
                    let datasets = tabInfo['yearAvailable'][ele.value]
                    // and if any of the datasets can be displayed
                    let dropdownValHasChartsAvail = !datasets ? false : datasets.some(avail=>{
                        // let drop = tabInfo['dmy'] ? drpY : drpQ
                        dprX.value == ele.value ? currentYearSelectionAvailable = true : ''
                        dprX.value != ele.value && avail ? validAlternateYear == ele.value : ''
                        return avail ? true : false
                    })
                    if (!dropdownValHasChartsAvail) {
                        // notalldataavailablewarning
                        ele.style.display = 'none'
                        console.log('nothing', ele)
                        // Hide the dropdown option if no dataset exists along the selected year.
                    } 
                    else {
                        ele.style.display = 'inline'
                        // Do not hide the dropdown option if at least a single dataset exists.
                    }
                } )
            }
            // If tab uses the year dropdown.
            // Loop through each option in year dropdown
            tabInfo && tabInfo['dmy'] && ( hideUnavailableDropdowns(drpY) )
            tabInfo && tabInfo['dmq'] && ( hideUnavailableDropdowns(drpQ) )
            
            console.log({currentYearSelectionAvailable}, {validAlternateYear})
            
            if(!currentYearSelectionAvailable){
                console.log('Changing Quartr')
                tabInfo['dmy'] ? drpY.value == validAlternateYear : drpQ.value == validAlternateYear
                document.querySelector(`option[value=${validAlternateYear}]`).click() 
            }

            let conditionalDisplay = (id,obj,attr)=>{
                document.getElementById(id).style.display = obj[attr] ? "inline" : 'none';
            } 
            // dm toggles dropdown menu. 
            conditionalDisplay("dropdownMenu", tabInfo, 'dm')
            conditionalDisplay("dropdownMenuY", tabInfo, 'dmy')
            conditionalDisplay("dropdownMenuQ", tabInfo, 'dmq')
 
            hideall(collapsables)
            showall([whichTab])
            hideall(prints);
            drawAll();

            if (tabInfo['dmy']) {
                // Counties
                countyChartChange()
            }
            if (tabInfo['dmq']) { 
                wdaChartChange()
            }
        } )
        el.removeAttribute("disabled");
    }
    )
}
