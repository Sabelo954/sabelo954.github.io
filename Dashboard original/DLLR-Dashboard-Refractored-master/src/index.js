/*
#File: Index.js
#Author: Charles Karpati
#Date: March 2020
#Section: Bnia
#Email: karpati1@umbc.edu
#Description: Loads the app and inserts it into the div 'start-app'
#Purpose: We have to kickstart the app somehow!
#input: Nothin
#output: The Application and a Service Worker

*/

import './index.css';
import * as d3 from 'd3'

import {wdaSelects} from './parts/woia_html.js'
import {countySelects} from './parts/county_html.js'

import {Chardin} from 'chardin.ts';
import 'chardin.ts/chardinjs.scss';

(async()=>{

    //default: ""
    let location_search = window.location.search

    //
    // Load the Homepage
    //
    if (!location_search) {
        console.log('HOMEPAGE')
        let myCounties = await import (/* webpackChunkName: "boundary_marylands_counties" */
        './data/boundary_marylands_counties.json')
        document.querySelector("#body").innerHTML = `
        <div class="Title">
			<p>Welcome to the Maryland Area Explorer! (Last Updated 5/27/19)</p>
        </div>
        <div class="Body">
			<p>The Maryland Area Explorer turns complex labor market information data into easy-to-understand charts and graphs. To get started, select a county from the dropdown menus or from the map below.</p>
		</div>
        <div id="tooltip"></div>
		<div id="mapDrop">
			<select onChange="window.location.href = '?county=' + this.value"> ${countySelects} </select>
			<select onChange="window.location.href = '?county=' + this.value"> ${wdaSelects} </select>
		</div> <div id="map" > </div>	`
        window.arrCounties = [];
        var projection = d3.geoMercator().scale(4500).translate([6275, 3300]);
        var path = d3.geoPath().projection(projection);
        var svg = d3.select("#map").append("svg").attr("width", "100%").attr("height", "550").attr("viewBox", "0 0 400 1").attr("id", "md-svg").append("g").attr("id", "counties").selectAll("path")// Returns an empty selection
        .data(myCounties.default.features)// Binds data to a selection
        .enter().append("path").attr("class", "md-county").attr("onClick", "window.location.href = '?county=' + (arrCounties[this.attributes.cid.value].properties.GEODESC).replace(/[ ]/g,'').replace(/[']/g,'') + '.html'").attr("d", path).attr("cid", (d)=>{
            arrCounties.push(d);
            return arrCounties.length - 1;
        }
        )
    } else {

        //
        // Load a View
        //
        localStorage.setItem('Clicked', 'nothingyet');
        
        window.CountyName = location_search.replace("?county=", "").replace(".html", "").replace(/([A-Z])/g, ' $1').trim()
        window.md = CountyName == 'Maryland'
        window.wd = CountyName.includes('L W D A')
        window.emplStatusCounties = ["Maryland", "Worcester County", "Wicomico County", "Talbot County", "St Marys County", 
                                     "Queen Annes County", "Kent County", "Garrett County", "Dorchester County", "Allegany County", 
                                     "Caroline County", "Calvert County", "Somerset County", "Prince Georges County"]

        var {countyCode, buttonMenu} = ''

        let {wdaDropdowns, wdaCollapse1, wdaCollapse2, wdaCollapse3, wdaCollapse4, wdaCollapse5, countyDropdowns, counties_pop, counties_empl_edu_gend, counties_empl_race_ethn, counties_empl_vet, counties_disabl_pov, counties_empl_status, counties_snap} = false
		let dropdown = `<div class="ChartTitle">
		  <p id='title' style="display:inline" >innertext</p>
		  <p></p>
		  <div id='dropdownMenu' style="display:inline; float:right">
		    <p id='notalldataavailablewarning' style='color:red'> Only partial data is available for the given year.</p>
		    <br>
			<p style="display:inline;">Select Time Period:</p>
				<select id='dropdownMenuY' style="display:inline; float:right">
				  <option value='false'>Pick a Time Period</option>
				  <option value='data15'>2015</option>
				  <option value='data16'>2016</option>
				  <option value='data17'>2017</option>
				  <option value='data18' selected="selected">2018</option>
				  <option value='data19'>2019</option>
				</select>
				<select  id='dropdownMenuQ' style="display:inline">
				  <option value='data16q1'>2016-Q1</option>
				  <option value='data16q2'>2016-Q2</option>
				  <option value='data16q3'>2016-Q3</option>
				  <option value='data16q4'>2016-Q4</option>
				  <option value='data17q1'>2017-Q1</option>
				  <option value='data17q2'>2017-Q2</option>
				  <option value='data17q3'>2017-Q3</option>
				  <option value='data17q4'>2017-Q4</option>
				  <option value='data18q1'>2018-Q1</option>
				  <option value='data18q2'>2018-Q2</option>
				  <option value='data18q3'>2018-Q3</option>
				  <option value='data18q4' selected="selected">2018-Q4</option>
				  <option value='data19q1'>2019-Q1</option>
				  <option value='data19q2'>2019-Q2</option>
				  <option value='data19q3'>2019-Q3</option>
				  <option value='data19q4'>2019-Q4</option>
				</select>
			</div>
		</div>
		`
		
        if (wd) {
            //
            // WDA
            //
            localStorage.setItem('viewing', 'wd')
            let tmp = CountyName.replace("L W D A", "")
            window.CountyName1 = tmp + "WIA -- Maryland Statewide"
            window.CountyName2 = tmp + "WIA"
            window.CountyName4 = tmp + " Local Workforce Development Area"
            window.CountyName5 = tmp + "LWDA"
            let {wdaDropdowns, wdaCollapse1, wdaCollapse2, wdaCollapse3, wdaCollapse4, wdaCollapse5} = await import ('./parts/woia_html')
            buttonMenu = wdaDropdowns
            countyCode = `${dropdown} ${wdaCollapse1} ${wdaCollapse2} ${wdaCollapse3} ${wdaCollapse4(CountyName)} ${wdaCollapse5}`
        } else if (md) {
            //
            // MD
            //
            localStorage.setItem('viewing', 'md')
            window.CountyName = window.CountyName1 = window.CountyName2 = window.CountyName4 = 'Maryland'
            let {wdaDropdowns, wdaCollapse1, wdaCollapse2, wdaCollapse3, wdaCollapse4, wdaCollapse5} = await import ('./parts/woia_html')
            let {countyDropdowns, counties_pop, counties_empl_edu_gend, counties_empl_race_ethn, counties_empl_vet, counties_disabl_pov, counties_tanf, counties_empl_status, counties_snap} = await import ('./parts/county_html')
            let {mdDrodowns, mdApprenticeshipCompleters, mdNewApprenticeShipPrograms, mdNewAndACtivePrograms, mdLongTermUnemployment, mdServiceParticipantsInSnap} = await import ('./parts/maryland_html')
            buttonMenu = mdDrodowns
            countyCode = `${dropdown} ${wdaCollapse1} ${wdaCollapse2} ${wdaCollapse3} ${wdaCollapse4(CountyName)} ${wdaCollapse5} ${counties_pop} ${counties_empl_edu_gend} ${counties_empl_race_ethn} ${counties_empl_vet} ${counties_disabl_pov} ${counties_tanf} ${counties_empl_status} ${counties_snap}  ${mdApprenticeshipCompleters} ${mdNewApprenticeShipPrograms} ${mdNewAndACtivePrograms} ${mdLongTermUnemployment} ${mdServiceParticipantsInSnap}
            `
        } else {
            //
            // County
            //
            localStorage.setItem('viewing', 'ct')
            let {countyDropdowns, counties_pop, counties_empl_edu_gend, counties_empl_race_ethn, counties_empl_vet, counties_disabl_pov, counties_tanf, counties_empl_status, counties_snap} = await import ('./parts/county_html')
            countyCode = `${dropdown} ${counties_pop} ${counties_empl_edu_gend} ${counties_empl_race_ethn} ${counties_empl_vet} ${counties_disabl_pov} ${counties_tanf} ${counties_empl_status} ${counties_snap} 
            `

            window.CountyName1 = CountyName + ", MD";
            window.CountyName2 = CountyName + ", Maryland";
            window.CountyName4 = CountyName;

            console.log("Countyname", CountyName )
            if(CountyName == "St Marys County"){
            	window.CountyName4 = "St Mary's County"
            }
            if(CountyName == "Queen Annes County"){
            	window.CountyName4 = "Queen Anne's County"
            }
            if(CountyName == "Prince Georges County"){
            	window.CountyName4 = "Prince George's County"
            }
            
            buttonMenu = countyDropdowns(CountyName)
        }

        //
        // Region Selection and Button Menu
        //

        let sidebutton = `
	  <div class="sidebutton">
	    <div data-intro="Toggle Region"  data-position="right">
			<select onChange="window.location.href = '?county=' + this.value" style="margin: 0px 0px 10px 4px; margin-bottom: 10px; padding-right: 18%;">
			  ${countySelects}
			</select>
			<select onChange="window.location.href = '?county=' + this.value" style="margin: 0px 0px 2px 3px; margin-bottom: 10px; padding-right: 0%;">
			  ${wdaSelects}
			</select>
		</div>
		<div <div data-intro="Toggle Indicator"  data-position="right">
		${buttonMenu}
		</div>
	  </div>
	  `

      let wrapper = `
	  ${sidebutton}
	  <div id="Wrapper">
		<div class="content">
		  <div class="Header">
			<p class="RightText"><a href="./index.html" data-intro="Homepage"  data-position="bottom" >Start Over</a>    |    
			<button onclick="printClick()" data-intro="Save"  data-position="bottom">Print This Snapshot</button>    |     
			<button onclick="printAll()"  data-intro="Save"  data-position="bottom"> Print Whole Page</button></p>
			<p>Select Different Snapshot and/or County</p>
		  </div>
		  <div class="County">
			<p id="title1">${CountyName4}</p>
			<p id="Landing">Please select a dashboard from the buttons to the right, or select a different geographic area from the dropdown menus. </p>
		  </div>
		  ${countyCode}
		</div>
	  </div>
	  `
        document.body.innerHTML += wrapper

        if (CountyName.includes('L W D A')) {
            import(/* webpackChunkName: "woia_external_code" */
            './parts/woia_external_code.js')
        } else if (CountyName == 'Maryland') {
            import(/* webpackChunkName: "woia_external_code" */
            './parts/woia_external_code.js')
            import(/* webpackChunkName: "counties_external_code" */
            './parts/counties_external_code.js')
            import(/* webpackChunkName: "maryland_external_code" */
            './parts/maryland_external_code.js')
        } else {
            import(/* webpackChunkName: "counties_external_code" */
            './parts/counties_external_code.js')
        }
        import(/* webpackChunkName: "event_handlers" */
            './parts/event_handlers.js')
    }
    localStorage.setItem('Clicked', 'placeholder');
    document.body.innerHTML += ''
    // localStorage.setItem('displayChardin', 'test')
    if( ! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &
        location_search && localStorage.getItem('displayChardin') != 'false') {
        localStorage.setItem('displayChardin', 'false')
        let chardin = new Chardin(document.querySelector('body'));
        chardin.start();
    }
}
)()
