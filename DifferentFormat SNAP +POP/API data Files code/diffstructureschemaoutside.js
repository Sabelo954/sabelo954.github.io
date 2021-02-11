//ACS Data
// The table or array that will be converted to the excel spreadsheet
var results = [
  ["Col1", "Col2", "Col3", "Col4","Col5","Col6","Col7","Col8","Col9","Col10","Col11","Col12","Col13","Col14"],
  ["Location","Time","Indicator","Indicator_Status","Indicator_Value","Employment_Status","QWI-Status","Amount","Unemployment_Rate"],

];

// Just a few operations within the data that needs to be completed. Right now not critical.
var dataWDisem2019=6;
var dataWDisem2019=7;
var dataDisem2019=7;

function getCensusApiData(url, year, obj, i) {
  fetch(url).then((response) => response.json())
    .then((data) => {
      var databeg= data[1];
      var dataend= databeg.map(Number).slice(1,2);
      console.log(dataend);
      console.log(year + ":" + url + ": " +data);
      var a = "set"+String(i);
      var b = "arrayformat"+String(i);
      console.log("!!!!something obvious!!!!!");
      console.log("check for i in function",i);
      console.log(a);
      console.log(b);
      results.push([[obj.Maryland[a][b]+","+dataend],]);



    console.log(results);
  }) // end of function to collect the Census bureau data

}

//Initial for loop which links to each data set
for (var i=1;i<4;++i){
console.log("Checking for i!!!!")
console.log(i);

//While loop to collect the Census bureau data for each iteration of year until it is undefined.
var year=2015
  while (year != undefined){

  // var datafinal = collectACSAPI("S1701_C02_027E",year);
if (year == 2020) {
  break;
}

//Object that stores the url for the census bureau data and the format of the data.
  <script type="text/javascript" src="Final version object set outside short.js"></script>
  Object; 
console.log(Object);

//beginning of the function to collect data
            var variableinput = String("S1701_C02_027E");
            var yearAPIfunction = String(year);
            var d = "set"+String(i);
            var url = "url"+ String(i);
            console.log(i);
            var url = Object.Maryland[d][url];

            getCensusApiData(url, year,Object,i);
            year++;




        }; // end of the while loop




console.log(year);

        }; // end of the for loop for each set of data in the Object

//The conversion of the results array to an excel csv format

exportToCsv = function() {
  var CsvString = "";
  results.forEach(function(RowItem, RowIndex) {
    RowItem.forEach(function(ColItem, ColIndex) {
      CsvString += ColItem + ',';
    });
    CsvString += "\r\n";
  });


  window.open('data:application/vnd.ms-excel,' + encodeURIComponent(CsvString));
};
