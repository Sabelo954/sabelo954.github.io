//ACS Data
var results = [
  ["Col1", "Col2", "Col3", "Col4","Col5","Col6","Col7","Col8","Col9","Col10","Col11","Col12","Col13","Col14"],
  ["Location","Time","Indicator","Indicator_Status","Indicator_Value","Employment_Status","QWI-Status","Amount","Unemployment_Rate"],


];

var dataWDisem2019=6;
var dataWDisem2019=7;
var dataDisem2019=7;

for (var i=1;i<3;++i){

var year=2015
while (year != undefined){
  // var datafinal = collectACSAPI("S1701_C02_027E",year);
if (year == 2020) {
  break;
}

var endpoint = {
        // beginning of the object for the library
    Maryland: {
               "set1":{ url1:"https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
                     arrayformat1:["Maryland",year,"Median Household Income",",,,"],
                   },
               "set2":{ url2: "https://api.census.gov/data/"+year+"/acs/acs5/profile?get=NAME,DP05_0001E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
                     arrayformat2: ["Maryland",year,"Total Population",",,,"],
                   },

               "set3":{ url3: "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat3: ["Maryland",year,"Unemployment By Gender","1"+",,,"],
                    },

      // MedianHincome:{//beginning of measure data


              },  // end of measure data

            };

            var variableinput = String("S1701_C02_027E");
            var yearAPIfunction = String(year);

            var url = endpoint.Maryland["set"+i]["url"+i];

            getCensusApiData(url, year);
            year++;

          };
          console.log("I was here");

          function getCensusApiData(url, year) {
            fetch(url).then((response) => response.json())
              .then((data) => {
                var databeg= data[1];
                var dataend= databeg.map(Number).slice(1,2);
                console.log(dataend);
                console.log(year + ":" + url + ": " +data);
                results.push([[endpoint.Maryland["set"+i]["arrayformat"+i]+","+dataend],])

 //// for loop remains on last figure

              console.log(results);
              })


          }
        };



console.log(year);

console.log(endpoint.Maryland["set"+i]["url"+i]);
