/*
 * Counties 
*/

export let countySelects = `
  <option selected="selected">Choose a county...</option>
  <option value="Maryland.html" >Maryland</option>
  <option value="AlleganyCounty.html" >Allegany</option>
  <option value="AnneArundelCounty.html">Anne Arundel</option>
  <option value="BaltimoreCity.html">Baltimore City</option>
  <option value="BaltimoreCounty.html">Baltimore County</option>
  <option value="CalvertCounty.html">Calvert County</option>
  <option value="CarolineCounty.html">Caroline County</option>
  <option value="CarrollCounty.html">Carroll County</option>
  <option value="CecilCounty.html">Cecil County</option>
  <option value="CharlesCounty.html">Charles County</option>
  <option value="DorchesterCounty.html">Dorchester County</option>
  <option value="FrederickCounty.html">Frederick County</option>
  <option value="GarrettCounty.html">Garrett County</option>
  <option value="HarfordCounty.html">Harford County</option>
  <option value="HowardCounty.html">Howard County</option>
  <option value="KentCounty.html">Kent County</option>
  <option value="MontgomeryCounty.html">Montgomery County</option>
  <option value="PrinceGeorgesCounty.html">Prince George's County</option>
  <option value="QueenAnnesCounty.html">Queen Anne's</option>
  <option value="SomersetCounty.html">Somerset</option>
  <option value="StMarysCounty.html">St Mary's County</option>
  <option value="TalbotCounty.html">Talbot County</option>
  <option value="WashingtonCounty.html">Washington County</option>
  <option value="WicomicoCounty.html">Wicomico County</option>
  <option value="WorcesterCounty.html">Worcester County</option>
`

export function countyDropdowns(CountyName){
    return `
<div class="dropdown"> <button class="button" disabled data-lbl="pop">Population and Median Household Income</button> </div>
<div class="dropdown">
  <button class="button" style="padding-left: 16%; padding-right: 16%">Demographics and Employment</button>
  <div class="dropdown-content">
	<button class="button" disabled data-lbl="empl_edu_gend">Education and Gender</button>
	<button class="button" disabled data-lbl="empl_race_ethn">Race and Ethnicity</button>
	<button class="button" disabled data-lbl="empl_vet" style="padding-left: 14%; padding-right: 12%">Veteran Status</button>
  </div>
</div>
<div class="dropdown"> <button class="button" disabled data-lbl="disabl_pov">Disability and Poverty</button> </div>
<div class="dropdown"> <button class="button" disabled data-lbl="tanf">TANF</button> </div>
${(!emplStatusCounties.includes(CountyName)) ? `<div class="dropdown"> <button class="button" disabled data-lbl="empl_status">Employment Status</button> </div>` : ''}
<div class="dropdown"> <button class="button" disabled data-lbl="snap" >SNAP</button> </div>
`
}

export let counties_pop = `
  <div id="pop" style="display: none;">
    <div class="ChartDiv">
      <div id="pop_chart" class="show">
        <script src="../js/stateD3.js"></script>
      </div>
    </div>
    <div class="print">
      <div id="pop_chart_print">
      </div>
    </div>
    <div class="Table">
      <table id="pop_table">
      </table>
    <div class="Footer">
      <div class="FootLeft">
        <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: May 01, 2020)</p>
      </div>
    </div>
    </div>
  </div>
  `
export let counties_empl_edu_gend = `
  <div id="empl_edu_gend" style="display: none">
    <div class="ChartDiv">
      <div id="empl_edu_gend_chart" class="show">
        <p></p>
      </div>
      <div class="print">
        <div id="empl_edu_gend_chart_print">
        </div>
      </div>
    </div>
    <div class="Table">
      <table id ="empl_edu_gend_table">
      </table>
    <div class="Footer">
      <p>Note: NIL are individuals who are not in the labor force; this includes retirees and others who are not looking for work </p>
      <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: May 01, 2020)</p>
      <p>"S" Represents suppressed counts that are less than 3.</p>
    </div>
    </div>
  </div>
  `
export let counties_empl_race_ethn = `
  <div id="empl_race_ethn" style="display: none">
    <div class="ChartDiv">
      <div id="empl_race_ethn_chart" class="show">
      </div>
      <div class="print">
        <div id="empl_race_ethn_chart_print">
        </div>
      </div>
    </div>
    <div class="Table">
      <table id="empl_race_ethn_table">
      </table>
    <div class="Footer">
      <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: May 01, 2020)</p>
      <p>"S" Represents suppressed counts that are less than 3.</p>
    </div>
    </div>
  </div>
  `
export let counties_empl_vet = `
  <div id="empl_vet" style="display: none">
    <div class="ChartDiv">
      <div id="empl_vet_chart" class="show">
      </div>
      <div class="print">
        <div id="empl_vet_chart_print">
        </div>
      </div>
    </div>
    <div class="Table">
      <table id="empl_vet_table">
      </table>
      <div class="Footer">
        <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: May 01, 2020)</p>
        <p>"S" Represents suppressed counts that are less than 3.</p>
      </div>
    </div>
  </div>
  `
export let counties_disabl_pov = `
  <div id="disabl_pov" style="display: none">
    <div class="ChartDiv">
      <div id="disabl_pov_chart" class="show">
      </div>
      <div class="print">
        <div id="disabl_pov_chart_print">
        </div>
      </div>
    </div>
    <div class="Table">
      <table id ="disabl_pov_table">
      </table>
      <div class="Footer">
        <div class="FootLeft">
          <p>Source: American Community Survey <span id='acsyearagg'>1</span>-Year Estimates (Date Last Accessed: May 01, 2020)</p>
        </div>
      </div>
    </div>
  </div>
  `
export let counties_tanf = `
  <div id="tanf" style="display: none">
    <div class="ChartDiv">
      <div id="tanf_chart" class="show">
      </div>
      <div class="print">
        <div id="tanf_chart_print">
        </div>
      </div>
    </div>
    <div class="Table">
      <table id="tanf_table">
        <tfoot>
          <tr>
            <td  colspan="4">Service participants means Individuals who received TANF benefits.</td>
          </tr>
        </tfoot>
      </table>
      <div class="Footer">
        <div class="FootLeft">
          <p>Source: Administrative Data from Temporary Assistance to Needy Families (TANF) and MD Wage Records (Date Last Accessed: May 01, 2020)</p>
          <p>"S" Represents suppressed counts that are less than 3.</p>
        </div>
      </div>
    </div>
  </div>
  `
export let counties_empl_status = `
  <div id="empl_status" style="display: none;" >
    <div class="ChartTitle">
      <div style="float: right">
        <p style="display: inline;"> Select Indicator: </p>
        <select id="emplStatus_categ_dd">
          <option>Gender</option>
          <option>Race</option>
          <option>Education</option>
          <option>Poverty</option>
        </select>
      </div>
    </div>
    <div class="ChartDiv">
      <div id="empl_status_chart" class="show">
      </div>
      <div class="print">
        <div id="empl_status_chart_print">
        </div>
      </div>
    </div>
    <div class="Table">
      <table id="empl_status_table">
        <tr class="HeadRow"> </tr>
      </table>
      <div class="Footer">
        <div class="FootLeft">
          <p>The Workforce Services data is available from July 2016 to June 2017</p>
          <p>Source: ACS and Microdata, accessed 4/15/2019</p>
        </div>
      </div>
    </div>
  </div>
  `
export let counties_snap = `
  <div id="snap" style="display: none;" >
    <div class="ChartDiv">
      <div id="snap_chart" class="show">
      </div>
      <div class="print">
        <div id="snap_chart_print">
        </div>
      </div>
    </div>
    <div class="Table">
      <table id="snap_table">
      </table>
      <div class="Footer">
        <div class="FootLeft">
          <p>SNAP data is available from January 2016 to October 2016. </p>
          <p>Source: Jacob France Institute, accessed 4/15/2019</p>
        </div>
      </div>
    </div>
  </div>
  `
  
  
/*
 * Maryland
*/

export let mdDrodowns = `
  <div class="dropdown"> <button class="button" disabled data-lbl="pop">Population and Median Household Income</button> </div>
  <div class="dropdown">
    <button class="button" style="padding-left: 16%; padding-right: 16%">Demographics and Employment</button>
    <div class="dropdown-content">
      <button class="button" disabled data-lbl="empl_edu_gend">Gender</button>
      <button class="button" disabled data-lbl="empl_race_ethn">Race and Ethnicity</button>
      <button class="button" disabled data-lbl="empl_vet" style="padding-left: 14%; padding-right: 12%">Veteran Status</button>
    </div>
  </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="disabl_pov">Disability and Poverty</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="tanf">TANF</button> </div>
  <div class="dropdown">
    <button class="button" disabled style="padding-left: 1%; padding-right: 1%" data-lbl="collapse9">Apprenticeship Completers</button>
  </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse1" id="button1">Number of Workers <br><br> Average Monthly Earnings</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse2" style="padding-left: 15%; padding-right: 12.5%">New Hires <br><br>Job Net Changes</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse3" style="padding-left: 17%; padding-right: 17%">Turnover Rate</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse4" style="padding-left: 15%; padding-right: 1%;">Industry Metrics</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse15" style="padding-left: 20%; padding-right: 20%">Separations</button> </div>
  <div class="dropdown">    
    <button class="button" disabled data-lbl="collapse16" style="padding-left: 20%; padding-right: 20%">New Apprentice Programs</button>
  </div>
  <div class="dropdown">    
    <button class="button" disabled data-lbl="collapse17" style="padding-left: 20%; padding-right: 20%">New/Active Apprentices</button>
  </div>
  <div class="dropdown">
    <button class="button" disabled data-lbl="collapse20" style="padding-left: 2%; padding-right: 5%">Long Term Unemployed</button>
  </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="snap" >SNAP</button> </div>
  <div class="dropdown">
    <button class="button" disabled style="padding-left: 2%; padding-right: 5%" data-lbl="collapse19">Service Partcipants in SNAP</button>
  </div>
  `

export let mdApprenticeshipCompleters = `
  <div id="collapse9" style="display: none;">
    <div class="ChartDiv">
      <div id="Chart11"></div>
      <div id="Print11" class="print"></div>
    </div>
    <div class="Table">
      <table id="table11"></table>
      <div class="Footer">
        <div class="FootLeft">
          <p>Source: United States Department of Labor (Date Last Accessed: May 01, 2020)</p>
        </div>
      </div>
    </div>
  </div>
`

export let mdNewApprenticeShipPrograms = `
  <div id="collapse16" style="display:none;">
    <div class="ChartDiv">
      <div id="Chart18"> </div>
      <div id="Print18" class="print"></div>
    </div>
    <div class="Table">
      <table id="table55"></table>
      <div id="scrollTable">
        <div class="Footer">
          <p class="FootLeft">
            Source: United States Department of Labor (Date Last Accessed: May 01, 2020) 
          </p>
          <p class="FootLeft">
            Service participants means individuals who received SNAP benefits
          </p>
        </div>
      </div>
    </div>
  </div>
`

export let mdNewAndACtivePrograms = `
  <div id="collapse17" style="display:none;">
    <div class="ChartDiv">
      <div id="Chart19"></div>
      <div id="Print19" class="print"></div>
    </div>
    <div class="Table">
      <table id="table19"></table>
      <div class="Footer">
        <div class="FootLeft">
          <p>Source: United States Department of Labor (Date Last Accessed: May 01, 2020)</p>
        </div>
      </div>
    </div>
  </div>
`

export let mdLongTermUnemployment = `
  <div id="collapse20" style="display: none;">
    <div id="Chart20">
      <p></p>
    </div>
    <div id="Print20" class="print"></div>
    <div class="Table">
      <table id="table20"></table>
      <div class="Footer">
        <div class="FootLeft">
          <p>Source: Current Population Survey, Latest Data Available as of Summer 2019 is 2015</p>
        </div>
      </div>
    </div>
  </div>
`

export let mdServiceParticipantsInSnap = `
  <div id="collapse19" style="display: none">
    <div class="ChartDiv">
      <div id="Chart21" class="show"></div>
      <div class="print">
        <div id="Print21"></div>
      </div>
    </div>
    <div class="Table">
      <table id="table155"></table>
      <div class="Footer">
        <div class="FootLeft">
          <p>SNAP (Supplemental Nutrition Assistance Program) is available available from January 2014 to October 2016. </p>
        </div>
        <div class="FootLeft">
          <p>Source: Jacob France Institute, accessed 4/15/2019</p>
        </div>
      </div>
    </div>
  </div>
`









/*
 * WDA 
*/

export let wdaSelects = `
  <option selected="selected">Or A Local Workforce Development Area (LWDA)...</option>
  <option value="AnneArundelLWDA.html">Anne Arundel LWDA</option>
  <option value="BaltimoreCityLWDA.html">Baltimore City LWDA</option>
  <option value="BaltimoreCountyLWDA.html">Baltimore County LWDA</option>
  <option value="FrederickLWDA.html">Frederick County LWDA</option>
  <option value="LowerShoreLWDA.html">Lower Shore LWDA</option>
  <option value="MidMarylandLWDA.html">Mid Maryland LWDA</option>
  <option value="MontgomeryLWDA.html">Montgomery LWDA</option>
  <option value="PrinceGeorgesLWDA.html">Prince George's LWDA</option>
  <option value="SouthernMarylandLWDA.html">Southern Maryland LWDA</option>
  <option value="SusquehannaLWDA.html">Susquehanna LWDA</option>
  <option value="UpperShoreLWDA.html">Upper Shore LWDA</option>
  <option value="WesternMarylandLWDA.html">Western Maryland LWDA</option>
  <option value="Maryland.html" >Maryland</option>
`

export let wdaDropdowns = `
<div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse1" id="button1">Number of Workers <br><br> Average Monthly Earnings</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse2" style="padding-left: 15%; padding-right: 12.5%">New Hires <br><br>Job Net Changes</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse3" style="padding-left: 17%; padding-right: 17%">Turnover Rate</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse4" style="padding-left: 15%; padding-right: 1%;">Industry Metrics</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse15" style="padding-left: 20%; padding-right: 20%">Separations</button> </div>
</div>
`

let wdaFooter = `
<div class="Footer">
  <p>"S" Represents suppressed counts that are less than 3.</p>
  <p>Data source: Longitudinal Employer-Household Dynamics (LEHD), last accessed on May 01, 2020</p>
</div>
`

export let wdaCollapse1 = `
<div id="collapse1" style="display: none;">
  <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">
    <div class="buttons">
      <p>
        Indicator: 
        <select id="wda_dd_1">
          <option>By Age</option>
          <option>By Gender</option>
        </select>
      </p>
    </div>
  </div>
  <div class="ChartDiv">
    <div id="Chart3">
      <p></p>
    </div>
    <div id="Print3" class="print"></div>
  </div>
  <div class="Table">
    <table id ="table3" style="font-size: 80%"></table>
    ${wdaFooter}
  </div>

</div>
`

export let wdaCollapse2 = `
<div id="collapse2" style="display: none;">
  <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">
    <div class="buttons">
      <p>
        Indicator: 
        <select id="wda_dd_2">
          <option>By Education</option>
          <option>By Gender</option>
        </select>
      </p>
    </div>
  </div>
  <div class="ChartDiv">
    <div id="Chart4">
    </div>
    <div id="Print4" class="print"></div>
  </div>
  <div class="Table">
    <table id="table4">
    </table>
    <div class="Footer" >
      <p>New Hires and Job Net Change since previous quarter.</p>
      <p">New Hires: Estimated number of workers who started a new job.  More specifically, total hires that, while they worked for an employer in the specified quarter, were not employed by that employer in any of the previous four quarters. </p>
      <p>Job Net Change: Difference between firm job gain and firm job loss.</p>
    </div>
    ${wdaFooter}
  </div>
</div>
`

export let wdaCollapse3 = `
<div id="collapse3" style="display: none;">
  <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">
    <div class="buttons">
      <p>
        Indicator: 
        <select id="wda_dd_3">
          <option>By Education</option>
          <option>By Gender</option>
        </select>
      </p>
    </div>
  </div>
  <div class="ChartDiv">
    <div id="ChartFive">
    </div>
    <div id="PrintFive" class="print"></div>
    <div class="Table">
      <table id="table5">
      </table>
      <div class="Footer" >
        <p>Job Turnover Rate in previous quarter.</p>
        <p>Turnover Rate: The rate at which stable jobs begin and end. It is calculated by summing the number of stable hires in the reference quarter and stable separations in the next quarter, and dividing by the average full-quarter employment.</p>
      </div>
      ${wdaFooter}
    </div>
  </div>
</div>
`

export function wdaCollapse4(CountyName) { return `
<div id="collapse4" style="display: none;">
   <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">
      <div class="buttons">
         <p>
            Indicator:
            <select id="wda_dd_4">
               ${CountyName == 'Maryland' ? '' : '<option>Average Monthly Earnings</option>'}
               <option>Job Net Changes</option>
               <option>New Hires</option>
               <option>Turnover Rate</option>
               <option selected="selected">Workers</option>
            </select>
         </p>
         <button type="button" id="btn6wda">Toggle Labels</button>
      </div>
   </div>
   <div class="ChartDiv">
      <div id="Chart6"></div>
      <div id="Print6" class="print"></div>
      <style>
         #table6 > tbody > tr > td { text-align:right !important }
      </style>
      <div id="Table">
         <table id="table6" >
         </table>
         <div class="Footer" >
            <p>New Hires: Estimated number of workers who started a new job.  More specifically, total hires that, while they worked for an employer in the specified quarter, were not employed by that employer in any of the previous four quarters. </p>
            <p>Job Net Change: Difference between firm job gain and firm job loss.</p>
            <p>Turnover Rate: The rate at which stable jobs begin and end. It is calculated by summing the number of stable hires in the reference quarter and stable separations in the next quarter, and dividing by the average full-quarter employment.</p>
         </div>
         ${wdaFooter}
      </div>
   </div>
</div>
`
}

export let wdaCollapse15 = `
<div id="collapse15" style="display:none;">
   <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">
      <div class="buttons">
         <p>
            Indicator:
            <select id="wda_dd_5">
               <option selected="selected">Industry</option>
               <option>Gender</option>
               <option>Education</option>
               <option>Age</option>
            </select>
         </p>
      </div>
   </div>
   <div class="ChartDiv">
      <div id="Chart17"> </div>
      <div id="Print17" class="print"></div>
   </div>
   <div class="Table">
      <table id="table15"> </table>
      <div class="Footer" >
        <p>Estimated number of workers whose job with a given employer ended in the specified quarter.</p>
      </div>
      ${wdaFooter}
   </div>
</div>
`
