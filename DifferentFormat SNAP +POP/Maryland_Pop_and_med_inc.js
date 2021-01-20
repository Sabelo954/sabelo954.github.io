var chartSizewidth=520;
var chartSizeheight=360;

//Data gathering from census bureau API. Population data
var urlpop= "https://api.census.gov/data/2018/acs/acs1/subject?get=NAME,S0101_C01_001E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
d3.json(urlpop).get(function(error,data){
  var dataPopbeg= data[1];
  var dataPop2019= dataPopbeg.map(Number).slice(1,2);
  console.log(dataPop2019);

  var urlpop= "https://api.census.gov/data/2018/acs/acs1/subject?get=NAME,S0101_C01_001E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
  d3.json(urlpop).get(function(error,data){
    var dataPopbeg= data[1];
    var dataPop2018= dataPopbeg.map(Number).slice(1,2);
    console.log(dataPop2018);

    var urlpop= "https://api.census.gov/data/2017/acs/acs1/subject?get=NAME,S0101_C01_001E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
    d3.json(urlpop).get(function(error,data){
      var dataPopbeg= data[1];
      var dataPop2017= dataPopbeg.map(Number).slice(1,2);
      console.log(dataPop2017);

      var urlpop= "https://api.census.gov/data/2016/acs/acs1/subject?get=NAME,S0101_C01_001E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
      d3.json(urlpop).get(function(error,data){
        var dataPopbeg= data[1];
        var dataPop2016= dataPopbeg.map(Number).slice(1,2);
        console.log(dataPop2016);

        var urlpop= "https://api.census.gov/data/2015/acs/acs1/subject?get=NAME,S0101_C01_001E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
        d3.json(urlpop).get(function(error,data){
          var dataPopbeg= data[1];
          var dataPop2015= dataPopbeg.map(Number).slice(1,2);
          console.log(dataPop2015);

//Population chart

// Select the div you want to place the svg by it's ID
var svg1 = dimple.newSvg("#svgPopulation", chartSizewidth, chartSizeheight);
var data = [
  { "Year":"2015", "Total Population": dataPop2015 },
  { "Year":"2016", "Total Population": dataPop2016 },
  { "Year":"2017", "Total Population": dataPop2017 },
  { "Year":"2018", "Total Population": dataPop2018 },
  { "Year":"2019", "Total Population": dataPop2019}
];
var populationChart = new dimple.chart(svg1, data);
populationChart.setBounds("130px","50px","60%","70%")
populationChart.addCategoryAxis("x", "Year");
var y=populationChart.addMeasureAxis("y", "Total Population");
y.tickFormat = ',.0f';
populationChart.addSeries(null, dimple.plot.bar);
populationChart.draw();
});
});
});
});
});
//Data gathering from census bureau API. Median income data

var urlMedianHincome= "https://api.census.gov/data/2019/acs/acs1/subject?get=NAME,S1901_C01_012E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
d3.json(urlMedianHincome).get(function(error,data){
  var dataMedianHincomebeg= data[1];
  var dataMedianHincome2019= dataMedianHincomebeg.map(Number).slice(1,2);
  console.log(dataMedianHincome2019);

  var urlMedianHincome= "https://api.census.gov/data/2019/acs/acs1/subject?get=NAME,S1901_C01_012E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
  d3.json(urlMedianHincome).get(function(error,data){
    var dataMedianHincomebeg= data[1];
    var dataMedianHincome2018= dataMedianHincomebeg.map(Number).slice(1,2);
    console.log(dataMedianHincome2018);

    var urlMedianHincome= "https://api.census.gov/data/2019/acs/acs1/subject?get=NAME,S1901_C01_012E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
    d3.json(urlMedianHincome).get(function(error,data){
      var dataMedianHincomebeg= data[1];
      var dataMedianHincome2017= dataMedianHincomebeg.map(Number).slice(1,2);
      console.log(dataMedianHincome2017);

      var urlMedianHincome= "https://api.census.gov/data/2019/acs/acs1/subject?get=NAME,S1901_C01_012E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
      d3.json(urlMedianHincome).get(function(error,data){
        var dataMedianHincomebeg= data[1];
        var dataMedianHincome2016= dataMedianHincomebeg.map(Number).slice(1,2);
        console.log(dataMedianHincome2016);

        var urlMedianHincome= "https://api.census.gov/data/2019/acs/acs1/subject?get=NAME,S1901_C01_012E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
        d3.json(urlMedianHincome).get(function(error,data){
          var dataMedianHincomebeg= data[1];
          var dataMedianHincome2015= dataMedianHincomebeg.map(Number).slice(1,2);
          console.log(dataMedianHincome2015);


//Median Househol Income graph I want to move
var svg2 = dimple.newSvg("#svgMedianincome", chartSizewidth, chartSizeheight);



var data = [
  { "Year":"2015", "Median Household Income": dataMedianHincome2015},
  { "Year":"2016", "Median Household Income": dataMedianHincome2016},
  { "Year":"2017", "Median Household Income": dataMedianHincome2017},
  { "Year":"2018", "Median Household Income": dataMedianHincome2018},
  { "Year":"2019", "Median Household Income": dataMedianHincome2019}
];

var medianHouseholdIncomeChart = new dimple.chart(svg2, data);
medianHouseholdIncomeChart.setBounds("100px","50px","60%","70%")
medianHouseholdIncomeChart.addCategoryAxis("x", "Year");
var y= medianHouseholdIncomeChart.addMeasureAxis("y", "Median Household Income");
y.tickFormat="$"+',.0f';
medianHouseholdIncomeChart.addSeries(null, dimple.plot.bar);
medianHouseholdIncomeChart.draw();
});
});
});
});
});
