var chartSizewidth=550;
var chartSizeheight=320;

//Data gathering from census bureau API. Population data
var urlpop= "https://api.census.gov/data/2019/acs/acs1?get=NAME,B19058_002E&for=state:24";
d3.json(urlpop).get(function(error,data){
  var dataSNAPbeg= data[1];
  var dataSNAP2019= dataSNAPbeg.map(Number).slice(1,2);
  console.log(dataSNAP2019);

  var urlpop= "https://api.census.gov/data/2018/acs/acs1?get=NAME,B19058_002E&for=state:24";
  d3.json(urlpop).get(function(error,data){
    var dataSNAPbeg= data[1];
    var dataSNAP2018= dataSNAPbeg.map(Number).slice(1,2);
    console.log(dataSNAP2018);

    var urlpop= "https://api.census.gov/data/2017/acs/acs1?get=NAME,B19058_002E&for=state:24";
    d3.json(urlpop).get(function(error,data){
      var dataSNAPbeg= data[1];
      var dataSNAP2017= dataSNAPbeg.map(Number).slice(1,2);
      console.log(dataSNAP2017);

      var urlpop= "https://api.census.gov/data/2016/acs/acs1?get=NAME,B19058_002E&for=state:24";
      d3.json(urlpop).get(function(error,data){
        var dataSNAPbeg= data[1];
        var dataSNAP2016= dataSNAPbeg.map(Number).slice(1,2);
        console.log(dataSNAP2016);

        var urlpop= "https://api.census.gov/data/2015/acs/acs1?get=NAME,B19058_002E&for=state:24";
        d3.json(urlpop).get(function(error,data){
          var dataSNAPbeg= data[1];
          var dataSNAP2015= dataSNAPbeg.map(Number).slice(1,2);
          console.log(dataSNAP2015);


//perform slice on array to get values for Population for each year






//Population chart

// Select the div you want to place the svg by it's ID
var svg1 = dimple.newSvg("#svgPopulation", chartSizewidth, chartSizeheight);
var data = [
  { "Year":"2017", "SNAP Recipients": dataSNAP2017 },
  { "Year":"2018", "SNAP Recipients": dataSNAP2018 },
  { "Year":"2019", "SNAP Recipients": dataSNAP2019}
];
var populationChart = new dimple.chart(svg1, data);
populationChart.addCategoryAxis("x", "Year");
var y=populationChart.addMeasureAxis("y", "SNAP Recipients");
y.tickFormat = ',.0f';
populationChart.addSeries(null, dimple.plot.bar);
populationChart.draw();
});
});
});
});
});
//Data gathering from census bureau API. Median income data
var urlmed= "https://api.census.gov/data/2019/acs/acs1/cprofile?get=CP03_2015_062E,CP03_2016_062E,CP03_2017_062E,CP03_2018_062E,CP03_2019_062E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
d3.json(urlmed).get(function(error,data){
var dataMedianHincomebeg= data[1];
var dataMedianHincome= dataMedianHincomebeg.map(Number);

//perform slice on array to get values for Median Household Income for each year
dataMedianInc2015=dataMedianHincome.slice(0,1);
console.log(dataMedianInc2015);
dataMedianInc2016=dataMedianHincome.slice(1,2);
console.log(dataMedianInc2016);
dataMedianInc2017=dataMedianHincome.slice(2,3);
console.log(dataMedianInc2017);
dataMedianInc2018=dataMedianHincome.slice(3,4);
console.log(dataMedianInc2018);
dataMedianInc2019=dataMedianHincome.slice(4,5);
console.log(dataMedianInc2019);

//Median Househol Income graph I want to move
var svg2 = dimple.newSvg("#svgMedianincome", chartSizewidth, chartSizeheight);
//d3.select("body").append("svg").attr("id","svg2").attr("transform","translate("+100","+0+")");// my attempt after.


var data = [
  { "Year":"2015", "Median Household Income": dataMedianInc2015},
  { "Year":"2016", "Median Household Income": dataMedianInc2016},
  { "Year":"2017", "Median Household Income": dataMedianInc2017},
  { "Year":"2018", "Median Household Income": dataMedianInc2018},
  { "Year":"2019", "Median Household Income": dataMedianInc2019}
];

var medianHouseholdIncomeChart = new dimple.chart(svg2, data);
medianHouseholdIncomeChart.addCategoryAxis("x", "Year");
medianHouseholdIncomeChart.addMeasureAxis("y", "Median Household Income");
medianHouseholdIncomeChart.addSeries(null, dimple.plot.bar);
medianHouseholdIncomeChart.draw();
});
