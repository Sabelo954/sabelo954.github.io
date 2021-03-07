//ACS Data
// The table or array that will be converted to the excel spreadsheet
var results = [
  [
    "Col1"+",",
    "Col2"+",",
    "Col3"+",",
    "Col4"+",",
    "Col5"+",",
    "Col6"+",",
    "Col7"+",",
    "Col8"+",",
    "Col9"+",",
    "Col10"+",",
    "Col11"+",",
    "Col12"+",",
    "Col13"+",",
    "Col14"
  ],
  [
  "Time,","Indicator,","Employment_Status,","Indicator_Status,","Location,","Amount,","Unemployment_Rate,,,,"
  ],

  ["2015Q1","TANF Workers",,,"Allegany County, Maryland",45,,,,,],
  ["2015Q2","TANF Workers",,,"Allegany County, Maryland",52,,,,,],
  ["2015Q3","TANF Workers",,,"Allegany County, Maryland",58,,,,,],
  ["2015Q4","TANF Workers",,,"Allegany County, Maryland",47,,,,,],
  ["2015Q1","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","S",,,,,],
  ["2015Q2","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","S",,,,,],
  ["2015Q3","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","S",,,,,],
  ["2015Q4","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","S",,,,,],
  ["2015Q1","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.03,,,,,],
  ["2015Q2","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.02,,,,,],
  ["2015Q3","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.02,,,,,],
  ["2015Q4","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.02,,,,,],
  ["2015Q1","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland","TBD","TBD",,,,],
  ["2015Q2","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland","TBD","TBD",,,,],
  ["2015Q3","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland","TBD","TBD",,,,],
  ["2015Q4","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland","TBD","TBD",,,,],

  ["2016Q1","TANF Workers",,,"Allegany County, Maryland","TBD",,,,,],
  ["2016Q2","TANF Workers",,,"Allegany County, Maryland","TBD",,,,,],
  ["2016Q3","TANF Workers",,,"Allegany County, Maryland",90,,,,,],
  ["2016Q4","TANF Workers",,,"Allegany County, Maryland",79,,,,,],
  ["2016Q1","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2016Q2","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2016Q3","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2016Q4","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2016Q1","Percent of Workers in TANF (%)",,,"Allegany County, Maryland","TBD",,,,,],
  ["2016Q2","Percent of Workers in TANF (%)",,,"Allegany County, Maryland","TBD",,,,,],
  ["2016Q3","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.03,,,,,],
  ["2016Q4","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.03,,,,,],
  ["2016Q1","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland","TBD","TBD",,,,],
  ["2016Q2","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland","TBD","TBD",,,,],
  ["2016Q3","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland","TBD","TBD",,,,],
  ["2016Q4","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland","TBD","TBD",,,,],

  ["2017Q1","TANF Workers",,,"Allegany County, Maryland",69,,,,,],
  ["2017Q2","TANF Workers",,,"Allegany County, Maryland",60,,,,,],
  ["2017Q3","TANF Workers",,,"Allegany County, Maryland",62,,,,,],
  ["2017Q4","TANF Workers",,,"Allegany County, Maryland",69,,,,,],
  ["2017Q1","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2017Q2","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2017Q3","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2017Q4","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2017Q1","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.03,,,,,],
  ["2017Q2","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.02,,,,,],
  ["2017Q3","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.02,,,,,],
  ["2017Q4","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.02,,,,,],
  ["2017Q1","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland","TBD","TBD",,,,],
  ["2017Q2","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland","TBD","TBD",,,,],
  ["2017Q3","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland","TBD",0.09,,,,],
  ["2017Q4","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland","TBD","TBD",,,,],

  ["2018Q1","TANF Workers",,,"Allegany County, Maryland",35,,,,,],
  ["2018Q2","TANF Workers",,,"Allegany County, Maryland",44,,,,,],
  ["2018Q3","TANF Workers",,,"Allegany County, Maryland",47,,,,,],
  ["2018Q4","TANF Workers",,,"Allegany County, Maryland",44,,,,,],
  ["2018Q1","TANF Participants in Workforce Service ",,,"Allegany County, Maryland",4,,,,,],
  ["2018Q2","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2018Q3","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2018Q4","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2018Q1","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.01,,,,,],
  ["2018Q2","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.02,,,,,],
  ["2018Q3","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.02,,,,,],
  ["2018Q4","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.02,,,,,],
  ["2018Q1","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland",1.5,0.015,,,,],
  ["2018Q2","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland",0.7,0.007,,,,],
  ["2018Q3","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland",0.5,0.005,,,,],
  ["2018Q4","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland",1.3,0.0013,,,,],

  ["2019Q1","TANF Workers",,,"Allegany County, Maryland",45,,,,,],
  ["2019Q2","TANF Workers",,,"Allegany County, Maryland",52,,,,,],
  ["2019Q3","TANF Workers",,,"Allegany County, Maryland",58,,,,,],
  ["2019Q4","TANF Workers",,,"Allegany County, Maryland",47,,,,,],
  ["2019Q1","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2019Q2","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2019Q3","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2019Q4","TANF Participants in Workforce Service ",,,"Allegany County, Maryland","TBD",,,,,],
  ["2019Q1","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.02,,,,,],
  ["2019Q2","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.02,,,,,],
  ["2019Q3","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.02,,,,,],
  ["2019Q4","Percent of Workers in TANF (%)",,,"Allegany County, Maryland",0.02,,,,,],
  ["2019Q1","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland",0.9,0.009,,,,],
  ["2019Q2","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland",0.6,0.006,,,,],
  ["2019Q3","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland","TBD","TBD",,,,],
  ["2019Q4","Percent of Workforce Service participants in TANF (%)",,,"Allegany County, Maryland",0.2,0.002,,,,],


  ["2016","SNAP Recipient Workers",,,"Allegany County, Maryland",5093,,,,,],
  ["2017","SNAP Recipient Workers",,,"Allegany County, Maryland",5017,,,,,],
  ["2018","SNAP Recipient Workers",,,"Allegany County, Maryland",5006,,,,,],


  ["2015","SNAP Recipient Workers by Percentage",,,"Allegany County, Maryland",0.0185,1.85,,,,],
  ["2016","SNAP Recipient Workers by Percentage",,,"Allegany County, Maryland",0.0185,1.85,,,,],
  ["2017","SNAP Recipient Workers by Percentage",,,"Allegany County, Maryland",0.0185,1.85,,,,],
  ["2018","SNAP Recipient Workers by Percentage",,,"Allegany County, Maryland",0.0185,1.85,,,,]


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
      console.log(data[1])
      if (i<33){
      var dataend = databeg.map(Number).slice(1, 2);}
      else{
            var dataend = databeg.map(Number).slice(0,1);};
      // console.log("beginning function dataend:", dataend);
      // console.log("beginning function dataend:", dataend);
      // console.log(year + ":" + url + ": " + data);
      // console.log("I must find you:",dataend);

      // return dataend;

      var dataWDisem2019 = 6;
      var dataWDisem2019 = 7;
      var dataDisem2019 = 7;

      var Objectarray = {
        // beginning of the object for the library
        Maryland: {
          //Alleghany County
          // beginning of the object for the county API data // anything in while loop counts grey comma as a comma
          set1: {
            url1:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat1: [
              year,"Median Household Income,,",'"Alleghany County,Maryland"',
              dataend+",",
              ",,,,",
            ],
          },
          set2: {
            url2:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/profile?get=NAME,DP05_0001E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat2: [
              year,"Total Population,,",'"Alleghany County,Maryland"',
              dataend,
              ",,,,",
            ],
          },


          set3: {
            url3:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat3: [
              year,"Unemployment By Gender,","Male",'"Alleghany County,Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set4: {
            url4:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat4: [
              year,"Employment Status by Disability Status","Unemployed","Disabled",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },


          set5: {
            url5:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat5: [
              year,"Employment Status by Disability Status","Unemployed","Non Disabled",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set6: {
            url6:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat6: [
                year,"Unemployment by Gender,","Female",'"Alleghany County,Maryland"',
                dataend,
                dataend / 100,
              ],
          },


          set7: {
            url7:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,C18120_005E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat7: [
              year,"Unemplyment by Gender,","Female",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set8: {
            url8:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat8: [
              year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set9: {
            url9:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_027E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat9: [
              year,"Employment Status By Education","Employed","Bachelor's or Higher",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set10: {
            url10:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_028E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat10: [
              year,"Employment Status By Education","Unemployed","Bachelor's or Higher",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set11: {
            url11:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_029E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat11: [
              year,"Employment Status By Education","NIL","Bachelor's or Higher",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set12: {
            url12:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat12: [
              year,"Employment Status By Education","Employed","Highschool",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set13: {
            url13:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_014E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat13: [
              year,"Employment Status By Education","Unemployed","Highschool",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set14: {
            url14:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_015E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat14: [
              year,"Employment Status By Education","NIL","Highschool",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set15: {
            url15:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_028E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat15: [
              year,"Employment Status By Poverty Status","Employed","Below Poverty",'"Alleghany County,Maryland"',
              dataend + ",",
            ],
          },

          set16: {
            url16:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_027E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat16: [
              year,"Employment Status By Poverty Status","Unemployed","Below Poverty",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set17: {
            url17:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_031E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat17: [
              year,"Employment Status By Poverty Status","Labor Force","Below Poverty",'"Alleghany County,Maryland"',
              0+ ",",
            ],
          },


          set18: {
            url18:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_006E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat18: [
              year,"Employment Status By Education","Employed","Less than Highschool",'"Alleghany County,Maryland"',
            ],
          },

          set19: {
            url19:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat19: [
              year,"Employment Status By Education","Unemployed","Less than Highschool",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set20: {
            url20:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat20: [
              year,"Employment Status By Education","NIL","Less than Highschool",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set21: {
            url21:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat21: [
              year,"Unemployment By Veteran Status,","Non Veteran",'"Alleghany County,Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set22: {
            url22:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat22: [
              year,"Unemployment By Veteran Status,","Veteran",'"Alleghany County,Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set23: {
            url23:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_020E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat23: [
              year,"Employment Status By Education,","Employed","Some College",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set24: {
            url24:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_021E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat24: [
              year,"Employment Status By Education,","Unemployed","Some College",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set25: {
            url25:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat25: [
              year,"Employment Status By Education,","NIL","Some College",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set26: {
            url26:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat26: [
              year,"Unemployment By Race,","Asian",'"Alleghany County,Maryland"',
              dataend,
              dataend / 100,
            ],
          },


          set27: {
            url27:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat27: [
              year,"Unemployment By Race,","White",'"Alleghany County,Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set28: {
            url28:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat28: [
              year,"Unemployment By Race,","Black",'"Alleghany County,Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set29: {
            url29:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat29: [
              year,"Unemployment By Race,","Hispanic",'"Alleghany County,Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set30: {
            url30:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat30: [
              year,"Employment Status By Disability Status","Employed","Non Disabled",'"Alleghany County,Maryland"',
              dataend+ ",",
            ],
          },

          set31: {
            url31:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat31: [
              year,"Employment Status By Disability Status","Unemployed","Disabled",'"Alleghany County,Maryland"',
              dataend+ ",,,,",
            ],
          },

          set32: {
            url32:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat32: [
              year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Alleghany County,Maryland"',
              dataend+ ",,,,",
            ],
          },



         },

          // beginning of the object for the county API data
      }; // end of the object for the library


      pushresultstoarray(year,Objectarray,i);
}
) // end of function to collect the Census bureau data



};

// console.log("try something new:",dataend);

function pushresultstoarray(year,obj,i){
  var a = "set"+String(i);
  var b = "arrayformat" + String(i);
  // console.log("check for i in function", i);
  // console.log(b); // console log array format
  // console.log("the object pushed:", obj.Maryland[a][b]);
  results.push([obj.Maryland[a][b]]);

}






// console.log(results);
// console.log("Outside fucntion:",dataend);
// console.log("Data end after function:", dataend);

//Initial for loop which links to each data set
for (var i = 1; i < 766; ++i) {
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

    var dataWDisem2019 = 6;
    var dataWDisem2019 = 7;
    var dataDisem2019 = 7;
    var type

    var Objecturl = {
      // beginning of the object for the library

    }; // end of the object for the library

      var set ="set"+String(i);
      var url = "url" + String(i);
      // console.log("i before function:", i);
      var url = Objecturl.Maryland[set][url];
      // console.log("url before function:", url);
  // console.log("url before data function:", url);

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

  // console.log("What to convert:",results);
} // end of the for loop for each set of data in the Object
console.log("Data ready for export")
//The conversion of the results array to an excel csv format

exportToCsv = function () {
  var CsvString = "";
  results.forEach(function (RowItem, RowIndex) {
    RowItem.forEach(function (ColItem, ColIndex) {
      CsvString += ColItem;
    });
    CsvString += "\r\n";
  });

  window.open("data:application/vnd.ms-excel," + encodeURIComponent(CsvString));
};
