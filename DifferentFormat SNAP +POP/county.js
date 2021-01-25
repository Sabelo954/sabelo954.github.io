console.log('Dom has loaded');
var allMedianHouseholdIncomeData = [];
var allPopulationData = [];

function OnChangeCountyClick() {
  // Get which county was click on,
  var dropdown = document.getElementById("CountyDropdown");
  var value = dropdown.value;
  allMedianHouseholdIncomeData = [];
  allPopulationData = [];

  // Get API endpoint for this county
  var medianIncomeEndpoints = [];
  var populationDataEndpoints = [];
  for (var i = 0; i <= 4; i++) {
    medianIncomeEndpoints.push(endpoints[value].MedianHincome[i]);
    populationDataEndpoints.push(endpoints[value].pop[i]);
  }
  // Lets get some data!!!
  for (var i = 0; i < medianIncomeEndpoints.length; i++) {
    var medianIncomeInstance = medianIncomeEndpoints[i];
    var medianIncomeYear = medianIncomeInstance.year;
    var medianIncomeUrl = medianIncomeInstance.url;

    // Get population instance
    var populationInstance = populationDataEndpoints[i];
    populationYear = populationInstance.year;
    populationUrl = populationInstance.url;

    getMedianHouseholdIncomeData(medianIncomeUrl, medianIncomeYear, value);
    getPopulationData(populationUrl, populationYear, value);
  }
  setTimeout(() => {
    // Create Median income chart
    createChart("#svgMedianincome", 520, 360, allMedianHouseholdIncomeData,
    "Median Household Income", "Year", value);

    // Create Population chart
    createChart("#svgPopulation", 520, 360, allPopulationData,
    "Total Population", "Year", value);

    // Create table
    createTable(allMedianHouseholdIncomeData, allPopulationData, value);
  }, 3000)
}

function getMedianHouseholdIncomeData(url, year, countyId) {
  fetch(url).then(response => response.json())
  .then((data) => {
    console.log(url + ": DATA " + JSON.stringify(data));
    var formattedData= data[1].map(Number).slice(1,2);

    allMedianHouseholdIncomeData.push( {
      "Year" : year,
      "Median Household Income": formattedData,
    })
  })
}

function getPopulationData(url, year, countyId) {
  fetch(url).then(response => response.json())
  .then((data) => {
    console.log(url + ": DATA " + JSON.stringify(data));
    var formattedData= data[1].map(Number).slice(1,2);
    allPopulationData.push( {
      "Year" : year,
      "Total Population": formattedData,
    })
  })
}

function createChart(svgId, width, height, data, yAxisLabel, xAxisLabel, countyId) {
  // Remove whatever is in the svgId chart
  var id = String(svgId);
  document.getElementById(id.substring(1)).innerHTML = "";
  // Change title of the county header
  var newCounty = endpoints[countyId].text;
  document.getElementById("countyTitle").innerHTML=newCounty;
  var svg1 = dimple.newSvg(svgId, width, height);
  var chart = new dimple.chart(svg1, data);
  chart.setBounds("100px","50px","60%","70%")
  chart.addCategoryAxis("x", xAxisLabel);
  var y= chart.addMeasureAxis("y", yAxisLabel);
  y.tickFormat=',.0f';
  chart.addSeries(null, dimple.plot.bar);
  chart.draw();

}

function createTable(medianHouseholdIncome, populationData, countyId) {

  document.getElementById("TableCountyHeader").innerHTML = endpoints[countyId].text;
  document.getElementById("TotalPop2016").innerHTML = populationData[1]["Total Population"];
  console.log(populationData);
  document.getElementById("TotalPop2017").innerHTML = populationData[2]["Total Population"];
  document.getElementById("TotalPop2018").innerHTML = populationData[3]["Total Population"];
  document.getElementById("TotalPop2019").innerHTML = populationData[4]["Total Population"];

  document.getElementById("MedianHincome2016").innerHTML =
  medianHouseholdIncome[1]["Median Household Income"];
  document.getElementById("MedianHincome2017").innerHTML =
  medianHouseholdIncome[2]["Median Household Income"];
  document.getElementById("MedianHincome2018").innerHTML =
  medianHouseholdIncome[3]["Median Household Income"];
  document.getElementById("MedianHincome2019").innerHTML =
  medianHouseholdIncome[4]["Median Household Income"];

}
