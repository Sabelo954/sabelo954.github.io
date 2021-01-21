var chartSizewidth=520;
var chartSizeheight=350;

//Data gathering from census bureau API. EmpNILUnemp data
var urlpop= "https://api.census.gov/data/2019/acs/acs1/cprofile?get=CP05_2015_001E,CP05_2016_001E,CP05_2017_001E,CP05_2018_001E,CP05_2019_001E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
d3.json(urlpop).get(function(error,data){
  var dataPopbeg= data[1];
  var dataPop= dataPopbeg.map(Number);



//perform slice on array to get values for Population for each year
dataPop2015=dataPop.slice(0,1);
  console.log(dataPop2015);
dataPop2016=dataPop.slice(1,2);
  console.log(dataPop2016);
dataPop2017=dataPop.slice(2,3);
  console.log(dataPop2017);
dataPop2018=dataPop.slice(3,4);
  console.log(dataPop2018);
dataPop2019=dataPop.slice(4,5);
  console.log(dataPop2019);



//Population chart

// Select the div you want to place the svg by it's ID
var svg1 = dimple.newSvg("#svgEmpNILUnemp", chartSizewidth, chartSizeheight);
var data = [
  { "Year":"2015","Employment Status":"Employed","Education Status":"Less than High School Graduate","Totals": 168076},
  { "Year":"2015","Employment Status":"Employed","Education Status":"High School Graduate","Totals": 547054},
  { "Year":"2015","Employment Status":"Employed","Education Status":"Some College or Associates","Totals": 666025},
  { "Year":"2015","Employment Status":"Employed","Education Status":"Bachelors Degree or Higher","Totals": 1090557},
  { "Year":"2015","Employment Status":"NIL","Education Status":"Less than High School Graduate","Totals": 99566},
  { "Year":"2015","Employment Status":"NIL","Education Status":"High School Graduate","Totals": 182962},
  { "Year":"2015","Employment Status":"NIL","Education Status":"Some College or Associates","Totals": 151758},
  { "Year":"2015","Employment Status":"NIL","Education Status":"Bachelors Degree or Higher","Totals": 142901},
  { "Year":"2015","Employment Status":"Unemployed","Education Status":"Less than High School Graduate","Totals": 25013},
  { "Year":"2015","Employment Status":"Unemployed","Education Status":"High School Graduate","Totals": 52837},
  { "Year":"2015","Employment Status":"Unemployed","Education Status":"Some College or Associates","Totals": 47199},
  { "Year":"2015","Employment Status":"Unemployed","Education Status":"Bachelors Degree or Higher","Totals": 35645},

];
var EmpNILUnempChart = new dimple.chart(svg1, data);
EmpNILUnempChart.setBounds("130px","80px","60%","65%")
EmpNILUnempChart.addCategoryAxis("x", "Employment Status");
var y=EmpNILUnempChart.addMeasureAxis("y", "Totals");
y.tickFormat = ',.0f';
var s = EmpNILUnempChart.addSeries("Education Status", dimple.plot.bar);
EmpNILUnempChart.draw();
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



var data = [
  { "Year":"2015", "Gender": "Female" ,"Unemployment rate": 0.047},
  { "Year":"2015", "Gender": "Male"   ,"Unemployment rate": 0.045},

];
var decimalformatter=d3.format(".1");
var GenderUnempChart = new dimple.chart(svg2, data);
GenderUnempChart.setBounds("130px","25px","60%","65%")
GenderUnempChart.addCategoryAxis("x", "Gender");
var y= GenderUnempChart.addMeasureAxis("y", "Unemployment rate");
y.tickFormat="%"+',.1f';
GenderUnempChart.addSeries("Gender", dimple.plot.bar);
GenderUnempChart.draw();
});
