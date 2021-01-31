//ACS Data
var results = [
  ["Col1", "Col2", "Col3", "Col4","Col5","Col6","Col7","Col8","Col9","Col10","Col11","Col12","Col13","Col14"],
  ["Location","Time","Indicator","Indicator_Status","Indicator_Value","Employment_Status","QWI-Status","Amount","Unemployment_Rate"],


];
var collectACSAPI = function(variablecode,yearAPI){

var variableinput = String(variablecode);
var yearAPIfunction = String(yearAPI);

var url = "https://api.census.gov/data/"+ yearAPIfunction +"/acs/acs5/subject?get=NAME,"+ variableinput +"&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853" ;
d3.json(url).get(function(error,data){
  var databeg= data[1];
  var dataend= databeg.map(Number).slice(1,2);
  console.log(dataend);


  return dataend;

  });
};

var year=2015
while (year != undefined){
  // var datafinal = collectACSAPI("S1701_C02_027E",year);
if (year == 2020) {
  break;
}
  var variableinput = String("S1701_C02_027E");
  var yearAPIfunction = String(year);

  var url = "https://api.census.gov/data/"+ yearAPIfunction +"/acs/acs5/subject?get=NAME,"+ variableinput +"&for=state:24&key=855666deab62d95596011f1944d9f1bd8c918853" ;

  getCensusApiData(url, year);
  year++;

};
console.log("I was here");
// for (var i = 0; i < 10; i++) {
//   // Current data
//   console.log("I was here 2");
//   data = allData[i];
  // var Results = [
  // ["Col1", "Col2", "Col3", "Col4","Col5","Col6","Col7","Col8","Col9","Col10","Col11","Col12","Col13","Col14"],
  // ["Location","Time","Indicator","Indicator_Status","Indicator_Value","Employment_Status","QWI-Status","Amount","Unemployment_Rate"],
  // ["Maryland",data["Year"],"Income below proverty level unemployed",",,,",data["Data"]],
  // ["Maryland","2016Q3","Service Participants in SNAP",",,,",0.0591],
  // ["Maryland","2016Q4","Service Participants in SNAP",",,,",0.0466]
  // ]
//   console.log(Results);
// }


function getCensusApiData(url, year) {
  fetch(url).then((response) => response.json())
    .then((data) => {
      var databeg= data[1];
      var dataend= databeg.map(Number).slice(1,2);
      console.log(dataend);
      console.log(year + ":" + url + ": " +data);
      results.push([["Maryland",year,"Income below proverty level unemployed",",,,",dataend],])
    console.log(results);
    })
}

// Add all of it to the Results

//QWI data


//Table


// var Results =  [
  // ["Col1", "Col2", "Col3", "Col4","Col5","Col6","Col7","Col8","Col9","Col10","Col11","Col12","Col13","Col14"],
  // ["Location","Time","Indicator","Indicator_Status","Indicator_Value","Employment_Status","QWI-Status","Amount","Unemployment_Rate"],
  // ["Maryland",year,"Income below proverty level unemployed",",,,",dataend],
  // ["Maryland","2016Q3","Service Participants in SNAP",",,,",0.0591],
  // ["Maryland","2016Q4","Service Participants in SNAP",",,,",0.0466],
//
//    ];

// exportToCsv = function() {
//   var CsvString = "";
//   Results.forEach(function(RowItem, RowIndex) {
//     RowItem.forEach(function(ColItem, ColIndex) {
//       CsvString += ColItem + ',';
//              });
//     CsvString += "\r\n";
//          });
//
//
//   window.open('data:application/vnd.ms-excel,' + encodeURIComponent(CsvString));
//        };
