var dataYears = ["2015","2016","2017","2018","2019"];

var urlpop= "https://api.census.gov/data/2019/acs/acs1/cprofile?get=CP05_2015_001E,CP05_2016_001E,CP05_2017_001E,CP05_2018_001E,CP05_2019_001E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
d3.json(urlpop).get(function(error,data){
  var dataPopbeg= data[1];
  var dataPop= dataPopbeg.map(Number);

var urlmed= "https://api.census.gov/data/2019/acs/acs1/cprofile?get=CP03_2015_062E,CP03_2016_062E,CP03_2017_062E,CP03_2018_062E,CP03_2019_062E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
d3.json(urlmed).get(function(error,data){
  var dataMedianHincomebeg= data[1];
  var dataMedianHincome= dataMedianHincomebeg.map(Number);
