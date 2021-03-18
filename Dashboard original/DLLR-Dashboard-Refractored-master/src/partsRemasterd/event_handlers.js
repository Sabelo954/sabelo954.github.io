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

import*as d3 from 'd3';



let pcnt = (d)=>{
	if (d == 'N/A') {
		return d
	}
	if (d == 'S') {
		return d
	}
	return d.slice(d.length - 1) != '%' ? (d3.format(".1%")(d * 1)) : (d3.format(".1%")(Number(d.slice(0, -1) * .01)))
}
let pcnt2 = (d)=>{
	if (d == 'N/A') {
		return d
	}
	if (d == 'S') {
		return d
	}
	return d.slice(d.length - 1) != '%' ? (d3.format(".1%")(d * .01)) : (d3.format(".1%")(Number(d.slice(0, -1) * .01)))
}
let find = (objArr,indx)=>{
	let returnThis = objArr.filter(obj=>{
		return obj['Time'] == ['2015', '2016', '2017', '2018'][indx]
	}
	)[0]
	returnThis = returnThis == undefined ? '--' : returnThis['Amount']
	return returnThis
}
let findGender = (objArr,indx)=>{
	let returnThis = objArr.filter(obj=>{
		return obj['Indicator_Status'] == ["Male", "Female"][indx]
	}
	)[0]
	returnThis = returnThis == undefined ? '--' : returnThis['Amount']
	return returnThis
}
window.findAge = (objArr,indx)=>{
	let returnThis = objArr.filter(obj=>{
		return obj['Indicator_Value'] == ["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99"][indx]
	}
	)[0]
	returnThis = returnThis == undefined ? '--' : returnThis['Amount']
	return returnThis
}
window.findEdu = (objArr,indx)=>{
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
let cma = (d)=>{
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
let dlr = (d)=>{
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
let zeronulls = (dataset) => {
	let returnThis = []
	for (let record of dataset){
		if(record['Amount'] == "N/A"){ record['Amount'] = -1 }
		returnThis.push(record)
	}
	return returnThis
}



//
// Global Variables
//

var whichChart = 'pop';
window.togNum1 = 0
window.onresize = ()=>drawAll()

// The ID of HTML Elements that allow the user to navigate between pages
window.c_collapsables = ["pop", "empl_edu_gend", "empl_race_ethn", "empl_vet", "disabl_pov", "tanf", "snap", "empl_status"]
window.w_collapsables = ["collapse1", "collapse2", "collapse3", "collapse4", "collapse15"]
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
    whichChart = chartId;
    drawAll();
    hideall(prints)
}

window.popchart = ()=>toggleTab(["collapse1", "collapse5"], 1)
window.educhart = ()=>toggleTab(["collapse2", "collapse5"], 2)
window.racechart = ()=>toggleTab(["collapse3", "collapse5"], 3)
window.vetchart = ()=>toggleTab(["collapse4", "collapse5"], 4)
window.sepchart = ()=>toggleTab(["collapse15", "collapse5"], 5)
window.appchart = ()=>toggleTab(["collapse5"], 6)
window.appchart = ()=>toggleTab(["collapse5"], 7)

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
    if (whichChart == 1) {
        popchart();
        document.getElementById("Chart3").style.display = "none";
        document.getElementById("Print3").style.display = "inline";
        drawAll();

    } else if (whichChart == 2) {
        educhart();
        document.getElementById("Chart4").style.display = "none";
        document.getElementById("Print4").style.display = "inline";
    } else if (whichChart == 3) {
        racechart();
        document.getElementById("ChartFive").style.display = "none";
        document.getElementById("PrintFive").style.display = "inline";
    } else if (whichChart == 4) {
        vetchart();
        document.getElementById("Chart6").style.display = "none";
        document.getElementById("Print6").style.display = "inline";
    } else if (whichChart == 5) {
        sepchart();
        document.getElementById("Chart17").style.display = "none";
        document.getElementById("Print17").style.display = "inline";
    } else if (whichChart == 'pop') {
        pop();
        hideall(["pop_chart"]);
        showAll(["pop_chart_print"]);
    } else if (whichChart == "educhart") {
        educhart();
        hideall(["empl_edu_gend_chart"]);
        showAll(["empl_edu_gend_chart_print"]);
    } else if (whichChart == 'racechart') {
        racechart();
        hideall(["empl_race_ethn_chart"]);
        showAll(["empl_race_ethn_chart_print"]);
    } else if (whichChart == "vetchart") {
        vetchart();
        hideall(["empl_vet_chart"]);
        showAll(["empl_vet_chart_print"]);
    } else if (whichChart == "disbilities") {
        dischart();
        hideall(["disabl_pov_chart"]);
        showAll(["disabl_pov_chart_print"]);
    } else if (whichChart == "tanf") {
        tanf();
        hideall(["tanf_chart"]);
        showAll(["tanf_chart_print"]);
    } else if (whichChart == "empl_status") {
        empl_status();
        hideall(["empl_status_chart"]);
        showAll(["empl_status_chart_print"]);
    } else if (whichChart == "tanf_attainment") {
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

        el.removeAttribute("disabled");

        el.addEventListener("click", function() {

            whichChart = el.dataset.lbl;

            let dm = "none";
            let dmy = "none"
            let dmq = "none"
            let elem = document.getElementById("title")
            elem.style.display = "inline";

            localStorage.setItem('Clicked', el.dataset.lbl);

            let chart = countyLookup.filter(obj=>obj['tab'] == el.dataset.lbl)[0];

            // Hide dropdownMenuY options where the year is not available. 
            let drpY = document.querySelector("#dropdownMenuY")
            console.log(el.dataset.lbl, {chart})

            !chart || !chart['dmy'] ? '' : Array.from(drpY.children).map(ele=>{
                let dropdownVal = ele.value
                let datasets = chart['yearAvailable'][dropdownVal]
                let dropdownValHasChartsAvail = !datasets ? false : datasets.some(avail=>{
                    // Hide the chart if it the active year!
                    return avail ? true : false
                }
                )
                if (!dropdownValHasChartsAvail) {
                    ele.style.display = 'none'
                    // Hide the dropdown options
                } else {
                    ele.style.display = 'inline'
                    // Do not hide the dropdown option
                }
            }
            )

            elem.innerHTML = chart['lbl']

            let conditionalDisplay = (id,obj,attr)=>{
                document.getElementById(id).style.display = obj[attr] ? "inline" : 'none';
            }
            conditionalDisplay("dropdownMenu", chart, 'dm')
            conditionalDisplay("dropdownMenuY", chart, 'dmy')
            conditionalDisplay("dropdownMenuQ", chart, 'dmq')

            hideall(collapsables)
            showall([whichChart])
            hideall(prints);
            drawAll();

            drpY.value = drpY.value ? drpY.value : "data18"
            //var elex2019 = document.querySelector("option[value=data18]")
            //elex2019.click()
            chartChange()
        })

    }
    )
}
