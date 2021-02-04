var year = 2016;
var dataend = 2;
var arr = [];
var text = "Maryland";
while(year<2019){
     year++;
    console.log(year);

    var endpoint = {
            // beginning of the object for the library
        Maryland: { // beginning of the object for the county API data
          MedianHincomePrep: [  //beginning of measure data
            {
              url: "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            },

          ],   // end of measure data

        }, // end of the object for county data

        // end of the object for the library
    };

    //   updateurl: d3.json(endpoint.Maryland.MedianHincomePrep[0].url).get(function(error,data){
    //              var databeg= data[1];
    //              var dataend= databeg.map(Number).slice(1,2);
    //              console.log(dataend);
    //     console.log(year);
    //
    // var  arrayformat =["Maryland",year,"Median Household Income",",,,",dataend];
    // });

  console.log(endpoint.Maryland.MedianHincomePrep[0].url);

  // });

};
/////Just 2019

  // url: "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
