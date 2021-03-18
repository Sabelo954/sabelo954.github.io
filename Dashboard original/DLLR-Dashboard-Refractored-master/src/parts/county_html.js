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
    <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">
      <div class="buttons">
        <p> 
        Indicator:
          <select id="emplStatus_categ_dd">
            <option>Gender</option>
            <option>Race</option>
            <option>Education</option>
            <option>Poverty</option>
          </select>
         </p>
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
