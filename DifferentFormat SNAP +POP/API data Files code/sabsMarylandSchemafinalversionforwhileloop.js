var dataWDisem2019=6;
var dataWDisem2019=7;
var dataDisem2019=7;

var Object = {
        // beginning of the object for the library
    Maryland: {
               "set1":{ url1:"https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
                     arrayformat1:["Maryland",yearAPIfunction,"Median Household Income",",,,",dataend],
                   },
               "set2":{ url2: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5/profile?get=NAME,DP05_0001E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
                     arrayformat2: ["Maryland",yearAPIfunction,"Total Population",",,,",dataend],
                   },

               "set3":{url3: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat3: ["Maryland",yearAPIfunction,"Unemployment By Gender","1"+",,,",dataend],
                    },

      // MedianHincome:{//beginning of measure data



              },  // end of measure data
            };

var test = "boo"+i;
console.log(Object.Maryland["set"+i]["url"+i]);
