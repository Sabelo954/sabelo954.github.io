var Object = {
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

              },  // end of measure data

            }; // end of the Object
