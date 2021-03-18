import * as d3 from 'd3';
import * as dimple from 'dimple';
/*
 * Outline
 *  
 * 1 - collapse9 - Chart11-chart15 - Apprenticeship Completers, 
 * 2 - collapse16 - Chart18-aprogChart - Print18 - table55 New Apprentice Programs
 * 3 - collapse17 - Chart19-aNewChart - Print19 - table19 - New/Active Apprentices
 * 4 - collapse20 - Chart20-pchart1 - Print2 - table20 - Long Term Unemployed
 * 5 - collapse19 - Chart21-chart18 - Print21 - table155 - Service Partcipants in SNAP
 */
(async()=>{
    // Retrieve Data
    let url = './data/MarylandData.csv'
    let data = await d3.csv(url)
    document.getElementById('acsyearagg').innerHTML = '1'

    // 
    // Apprenticeship Completers
    // 
    // Filter Data

    window.mAppData = dimple.filterData(dimple.filterData(data, "Indicator_Value", "Program Completers"), "Time", ["FY15", "FY16", "FY17"]);

    // Create Table
    document.getElementById('table11').innerHTML = `
	<tr class="HeadRow" style="background-color: white;">
	  <th>Apprenticeship Program Completers in Maryland</th>
	  <td></td>
	</tr>
	<tr>
	  <th>2015</th>
	  <td>${mAppData[0]['Amount']}</td>
	</tr>
	<tr>
	  <th>2016</th>
	  <td>${mAppData[1]['Amount']}</td>
	</tr>
	<tr>
	  <th>2017</th>
	  <td>${mAppData[2]['Amount']}</td>
	</tr>
	`

    // Retrieve Elements
    var svg11 = dimple.newSvg("#Chart11", "100%", 400);
    var print11 = dimple.newSvg("#Print11", 750, 400);

    // Configure Chart
    window.chart15 = new dimple.chart(svg11,mAppData);
    chart15.setBounds("11%", "21%", "80%", "65%")
    var mAppx = chart15.addCategoryAxis("x", "Time")
    mAppx.title = " ";
    mAppx.addOrderRule(["FY15", "FY16"]);
    var mAppY = chart15.addMeasureAxis("y", "Amount");
    mAppY.title = "Totals";
    mAppY.tickFormat = ',.0f';

    window.pchart15 = new dimple.chart(print11,mAppData);
    pchart15.setBounds("11%", "21%", "80%", 250)
    var pmAppx = pchart15.addCategoryAxis("x", "Time")
    pmAppx.title = " ";
    pmAppx.addOrderRule(["FY15", "FY16"]);
    var pmAppY = pchart15.addMeasureAxis("y", "Amount");
    pmAppY.title = "Totals";
    pmAppY.tickFormat = ',.0f';

    // Draw
    var pmAppLines = pchart15.addSeries("Indicator Value", dimple.plot.bar);
    var mAppLines = chart15.addSeries("Indicator Value", dimple.plot.bar);
    chart15.draw();
    pchart15.draw();

    // 
    // New Apprentice Programs
    // 
    // Filter Data
    window.aprog1 = dimple.filterData(dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs"), "Time", "2016");
    window.aprog2 = dimple.filterData(dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs"), "Time", "2017");
    window.aprog3 = dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs")

    // Create Table
    document.getElementById('table55').innerHTML = `
	<thead>
	  <tr> 
	    <th class="HeadRow" colspan="2">New Apprenticeship Programs</th> 
	  </tr>
	  <tr class="HeadRow" style="background-color: white;">
	    <th style='text-align:center;'>Year</th>
	  <th style='text-align:center;'>New Programs</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td>2016</td>
	    <td> ${aprog3[0]['Amount']}</td>
	  </tr>
	  <tr>
	    <td>2017</td>
	    <td> ${aprog3[1]['Amount']}</td>
	  </tr>
	  <tr class="FootRow">
	    <td>2018</td>
	    <td> ${aprog3[2]['Amount']}</td>
	  </tr>
	</tbody>
	`
    // Retrieve Elements
    var svg81 = dimple.newSvg("#Chart18", "100%", 400);
    var print81 = dimple.newSvg("#Print18", 750, 400);

    // Configure Chart
    window.aprogChart = new dimple.chart(svg81,aprog3);
    aprogChart.setBounds("9%", "12%", "80%", "60%")
    var px2 = aprogChart.addCategoryAxis("x", ["Time", "Indicator Value"]);
    px2.title = "Year";
    var py2 = aprogChart.addMeasureAxis("y", "Amount");
    py2.title = "New Programs";
    py2.tickFormat = ',.0f';

    window.paprogChart = new dimple.chart(print81,aprog3);
    paprogChart.setBounds("10%", "12%", "50%", 300)
    var px2 = paprogChart.addCategoryAxis("x", ["Time", "Indicator Value"]);
    px2.title = "Year";
    py2.tickFormat = ',.0f';
    var py2 = paprogChart.addMeasureAxis("y", "Amount");
    py2.title = "New Programs";
    ;// Draw
    var prog8 = aprogChart.addSeries("Indicator Value", dimple.plot.bar);
    prog8.addOrderRule(true);
    aprogChart.draw();

    var pprog8 = paprogChart.addSeries("Indicator Value", dimple.plot.bar);
    pprog8.addOrderRule(true)
    paprogChart.draw();

    // 
    // New/Active Apprentices
    // 
    // Filter Data
    window.aNew1 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Apprentices"), "Time", "2016");
    window.aNew2 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Apprentices"), "Time", "2017");
    window.aNew3 = dimple.filterData(data, "Indicator", "Maryland Apprentices")

    // Create Table
    document.getElementById('table19').innerHTML = `
	<thead>
	  <tr>
	    <th class="HeadRow" colspan="3" >New and Active Apprentices</th>
	  </tr>
	  <tr class="HeadRow" style="background-color: white;">
	    <th>Year</th>
	    <th>New</th>
	    <th>Active</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td>2016</td>
	    <td> ${aNew1[0]['Amount']}</td>
	    <td> ${aNew1[1]['Amount']}</td>
	  </tr>
	  <tr>
	    <td>2017</td>
	    <td> ${aNew2[0]['Amount']}</td>
	    <td> ${aNew2[1]['Amount']}</td>
	  </tr>
	  <tr class="FootRow">
	    <td>2018</td>
	    <td> ${aNew3[0]['Amount']}</td>
	    <td> ${aNew3[1]['Amount']}</td>
	  </tr>
	</tbody>
	`
    // Retrieve Elements
    var svg91 = dimple.newSvg("#Chart19", "100%", 400);
    var print91 = dimple.newSvg("#Print19", 750, 400);

    // Configure Chart
    window.aNewChart = new dimple.chart(svg91,aNew3);
    aNewChart.setBounds("10%", "12%", "80%", "60%")
    var px2 = aNewChart.addCategoryAxis("x", ["Time", "Indicator_Value"]);
    var py2 = aNewChart.addMeasureAxis("y", "Amount");
    py2.tickFormat = ',.0f';

    window.paNewChart = new dimple.chart(print91,aNew3);
    paNewChart.setBounds("9%", "12%", "50%", "50%")
    var px2 = paNewChart.addCategoryAxis("x", ["Time", "Indicator_Value"]);
    var py2 = paNewChart.addMeasureAxis("y", "Amount");
    py2.tickFormat = ',.0f';

    // Draw
    var newApp = aNewChart.addSeries("Indicator_Value", dimple.plot.bar);
    newApp.addOrderRule(["New Apprentices", "Active Apprentices"]);
    aNewChart.draw();

    var pseries8 = paNewChart.addSeries("Indicator Value", dimple.plot.bar);
    pseries8.addOrderRule(true);
    paNewChart.draw();

    // 
    // Long Term Unemployed
    // 
    // Filter Data
    let years = dimple.filterData(data, "Time", ["2013", "2014", "2015"]);
    window.longTermLocation = dimple.filterData(years, "Indicator", "Long Term Unemployed");

    // Create Table
    document.getElementById('table20').innerHTML = `
	<tr class="HeadRow" style="background-color: white;">
	  <th> </th>
	  <th>2013</th>
	  <th>2014</th>
	  <th>2015</th>
	</tr>
	<tr class="FootRow">
	  <th>Maryland</th>
	  <td> ${longTermLocation[2]['Amount']}</td>
	  <td> ${longTermLocation[1]['Amount']}</td>
	  <td> ${longTermLocation[0]['Amount']}</td>
	</tr>
	`
    // Retrieve Elements
    var svg1 = dimple.newSvg("#Chart20", "100%", 400);
    var print1 = dimple.newSvg("#Print20", 750, 400);

    // Configure Chart
    window.chart1 = new dimple.chart(svg1,longTermLocation);
    chart1.setBounds("9%", "12%", "85%", "70%")
    var x1 = chart1.addCategoryAxis("x", ["Time", "Location"]);
    var y1 = chart1.addMeasureAxis("y", "Amount");
    y1.tickFormat = ',.0f';
    y1.title = "Totals";
    x1.title = " ";

    window.pchart1 = new dimple.chart(print1,longTermLocation);
    pchart1.setBounds("9%", "12%", "85%", 300)
    var px1 = pchart1.addCategoryAxis("x", ["Time", "Location"]);
    var py1 = pchart1.addMeasureAxis("y", "Amount");
    py1.tickFormat = ',.0f';
    py1.title = "Totals";
    px1.title = " ";

    // Draw
    var lines2 = chart1.addSeries("Location", dimple.plot.line);
    lines2.aggregate = dimple.aggregateMethod.min;
    lines2.lineMarkers = true;
    chart1.addLegend("20%", "1%", "50%", "50%", "right");
    chart1.draw();

    var plines2 = pchart1.addSeries("Location", dimple.plot.line);
    plines2.aggregate = dimple.aggregateMethod.min;
    plines2.lineMarkers = true;
    pchart1.addLegend("20%", "1%", "50%", "50%", "right");
    pchart1.draw();

    // 
    // Service Partcipants in SNAP 
    // 
    // Filter
    window.SnapData2 = dimple.filterData(data, "Indicator", "Service Participants in SNAP")

    // Create Table
    document.getElementById('table155').innerHTML = `
	<tr class="HeadRow">
	  <th>Service Participants in SNAP</th>
	  <th></th>
	  <th>2016-Q3</th>
	  <th>2016-Q4</th>
	</tr>  
	<tr class="FootRow">
	  <td></td>
	  <td></td>
	  <td> ${pcnt(SnapData2[0]['Amount'])}</td>
	  <td> ${pcnt(SnapData2[1]['Amount'])}</td>
	</tr>
	`
    // Retrieve Elements
    var svg17 = dimple.newSvg("#Chart21", "100%", 400);
    var print17 = dimple.newSvg("#Print21", 750, 400);

    // Configure Chart
    window.chart18 = new dimple.chart(svg17,SnapData2);
    chart18.setBounds("10%", "12%", "80%", "60%")
    var workX = chart18.addCategoryAxis("x", "Time")
    var workY = chart18.addMeasureAxis("y", "Amount");
    workY.tickFormat = ',.2%';

    window.pchart18 = new dimple.chart(print17,SnapData2);
    pchart18.setBounds("15%", "12%", "60%", "60%")
    var pworkX = pchart18.addCategoryAxis("x", "Time")
    var pworkY = pchart18.addMeasureAxis("y", "Amount");
    pworkY.tickFormat = ',.2%';

    // Draw
    var workLine = chart18.addSeries("Indicator", dimple.plot.bar);
    chart18.draw();
    var pworkLine = pchart18.addSeries("Indicator", dimple.plot.bar);
    pchart18.draw();
}
)()
