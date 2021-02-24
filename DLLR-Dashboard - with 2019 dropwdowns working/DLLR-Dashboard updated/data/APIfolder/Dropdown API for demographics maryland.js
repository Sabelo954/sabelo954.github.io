var dataGender = ["Male","Female"];
var allYears=["2019","2018","2017","2016"];
var selected = "2019";
var dinitial=[3.9,4.5];
console.log(dinitial[1]);

var urlunemployment2019= "https://api.census.gov/data/2019/acs/acs1/subject?get=S2301_C04_022E,S2301_C04_023E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
var urlunemployment2018= "https://api.census.gov/data/2018/acs/acs1/subject?get=S2301_C04_022E,S2301_C04_023E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
var urlunemployment2017= "https://api.census.gov/data/2017/acs/acs1/subject?get=S2301_C04_022E,S2301_C04_023E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";
var urlunemployment2016= "https://api.census.gov/data/2016/acs/acs1/subject?get=S2301_C04_022E,S2301_C04_023E&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853";

var unemploymentRate2019;
var unemploymentRate2018;
var unemploymentRate2017;
var unemploymentRate2016;

var unemploymentAll = [[], [], [], []];
async function getData () {
  for (var i = 0; i < 4; i++) {
    console.log("running " + i);
    var url;
    if (i == 0) {
      url = urlunemployment2016;
      d3.json(url).get(function(error, data) {
        var unemploymentRateData = data[1].slice(0,2).map(Number);
        unemploymentRate2016 = unemploymentRateData;
        // unemploymentRateHere = [];
        // unemploymentRateHere.push(unemploymentRateData);
        // unemploymentAll.push(unemploymentRateData);
        unemploymentAll[0] = unemploymentRateData;
        // makeVis(unemploymentAll);

      });

    } else if (i == 1) {
      url = urlunemployment2017;
      d3.json(url).get(function(error, data) {
        var unemploymentRateData = data[1].slice(0,2).map(Number);
        unemploymentRate2017 = unemploymentRateData;
        // unemploymentRateHere = [];
        // unemploymentRateHere.push(unemploymentRateData);
        // unemploymentAll.push(unemploymentRateData);
        unemploymentAll[1] = unemploymentRateData;
        // makeVis(unemploymentAll);
      });
    } else if ( i == 2) {
      url = urlunemployment2018;
      d3.json(url).get(function(error, data) {
        var unemploymentRateData = data[1].slice(0,2).map(Number);
        unemploymentRate2018 = unemploymentRateData;
        // unemploymentRateHere = [];
        // unemploymentRateHere.push(unemploymentRateData);
        // unemploymentAll.push(unemploymentRateData);
        unemploymentAll[2] = unemploymentRateData;
        // makeVis(unemploymentAll);
      });
    } else if ( i == 3) {
      url = urlunemployment2019;
      d3.json(url).get(function(error, data) {
        var unemploymentRateData = data[1].slice(0,2).map(Number);
        unemploymentRate2019 = unemploymentRateData;
        // unemploymentRateHere = [];
        // unemploymentRateHere.push(unemploymentRateData);
        // unemploymentAll.push(unemploymentRateData);
        unemploymentAll[3] = unemploymentRateData;
        // makeVis(unemploymentAll);
      });
    }
  }
