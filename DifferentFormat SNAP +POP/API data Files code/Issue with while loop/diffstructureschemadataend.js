//ACS Data
// The table or array that will be converted to the excel spreadsheet
var results = [
  [
    "Col1",
    "Col2",
    "Col3",
    "Col4",
    "Col5",
    "Col6",
    "Col7",
    "Col8",
    "Col9",
    "Col10",
    "Col11",
    "Col12",
    "Col13",
    "Col14",
  ],
  [
    "Location",
    "Time",
    "Indicator",
    "Indicator_Status",
    "Indicator_Value",
    "Employment_Status",
    "QWI-Status",
    "Amount",
    "Unemployment_Rate",
  ],
];

// Just a few operations within the data that needs to be completed. Right now not critical.
var dataWDisem2019 = 6;
var dataWDisem2019 = 7;
var dataDisem2019 = 7;


function getCensusApiData(url, year, i) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var databeg = data[1];
      var dataend = databeg.map(Number).slice(1, 2);
      // console.log("beginning function dataend:", dataend);
      // console.log("beginning function dataend:", dataend);
      // console.log(year + ":" + url + ": " + data);
      console.log("I must find you:",dataend);

      // return dataend;

      var Objectarray = {
        // beginning of the object for the library
        Maryland: {
                   "set1":{ url1:"https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
                         arrayformat1:["Maryland",year,"Median Household Income",",,,",dataend],
                       },
                   "set2":{ url2: "https://api.census.gov/data/"+year+"/acs/acs5/profile?get=NAME,DP05_0001E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
                         arrayformat2: ["Maryland",year,"Total Population",",,,",dataend],
                       },

                   "set3":{ url3: "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
                        arrayformat3: ["Maryland",year,"Unemployment By Gender","1"+",,,",dataend],
                        },

                  },  // end of measure data

                }; // end of the Object

      pushresultstoarray(year,Objectarray,i);
}
) // end of function to collect the Census bureau data



};

console.log("try something new:",dataend);

function pushresultstoarray(year,obj,i){
  var a = "set"+String(i);
  var b = "arrayformat" + String(i);
  // console.log("check for i in function", i);
  console.log(b); // console log array format
  console.log("the object pushed:", obj.Maryland[a][b]);
  results.push([obj.Maryland[a][b]]);

}






console.log(results);
// console.log("Outside fucntion:",dataend);
// console.log("Data end after function:", dataend);

//Initial for loop which links to each data set
for (var i = 1; i < 4; ++i) {
  // console.log("Checking for i!!!!", i);

  //While loop to collect the Census bureau data for each iteration of year until it is undefined.
  var year = 2015;
  while (year != undefined) {
    // console.log("Check year loop:", year);

    // var datafinal = collectACSAPI("S1701_C02_027E",year);
    if (year == 2020) {
      break;
    }

    //Object that stores the url for the census bureau data and the format of the data.
    // var dataend=dataend; // I need it to start but it is undefined

    // console.log("Hi I am starting dataend :", dataend);

    var Objecturl = {
      // beginning of the object for the library
      Maryland: {
                 "set1":{ url1:"https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
                       arrayformat1:["Maryland",year,"Median Household Income",",,,",dataend],
                     },
                 "set2":{ url2: "https://api.census.gov/data/"+year+"/acs/acs5/profile?get=NAME,DP05_0001E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
                       arrayformat2: ["Maryland",year,"Total Population",",,,",dataend],
                     },

                 "set3":{ url3: "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
                      arrayformat3: ["Maryland",year,"Unemployment By Gender","1"+",,,",dataend],
                      },

                },  // end of measure data

              }; // end of the Object
      var set ="set"+String(i);
      var url = "url" + String(i);
      // console.log("i before function:", i);
      var url = Objecturl.Maryland[set][url];
      // console.log("url before function:", url);
  console.log("url before data function:", url);

      var dataend = getCensusApiData(url, year, i);// If I remove this the pcode does not run.
// console.log("Just before the object array:",dataend());







      year++;

    //beginning of the function to collect data
    // var d = "set" + String(i);
    // var url = "url" + String(i);
    // console.log("i before function:", i);
    // var url = Object.Maryland[d][url];
    // console.log("url before function:", url);
    //
    // getCensusApiData(url, year, Object, i);
    // year++;
  } // end of the while loop

  console.log("What to convert:",results);
} // end of the for loop for each set of data in the Object

//The conversion of the results array to an excel csv format

exportToCsv = function () {
  var CsvString = "";
  results.forEach(function (RowItem, RowIndex) {
    RowItem.forEach(function (ColItem, ColIndex) {
      CsvString += ColItem + ",";
    });
    CsvString += "\r\n";
  });

  window.open("data:application/vnd.ms-excel," + encodeURIComponent(CsvString));
};
