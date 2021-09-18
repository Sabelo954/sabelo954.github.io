//ACS Data
// The table or array that will be converted to the excel spreadsheet
var results = [

  ["2015Q3,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,132,",,,,,"],
  ["2015Q4,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,124,",,,,,"],
  ["2015Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.17246109826363,",",0.17246109826363/100,",,,,,"],
  ["2015Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.158551554828151,",",0.158551554828151/100,",,,,,"],

  ["2016Q1,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,75,",,,,,"],
  ["2016Q2,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,94,",,,,,"],
  ["2016Q3,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,102,",,,,,"],
  ["2016Q4,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,106,",,,,,"],
  ["2016Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.0993983089034379,",",0.0993983089034379/100,",,,,,"],
  ["2016Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.117350378267709,",",0.117350378267709/100,",,,,,"],
  ["2016Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.128340631133927,",",0.128340631133927/100,",,,,,"],
  ["2016Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.128675131709923,",",0.128675131709923/100,",,,,,"],
  
  ["2017Q1,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,69,",,,,,"],
  ["2017Q2,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,90,",,,,,"],
  ["2017Q3,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,105,",,,,,"],
  ["2017Q4,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,122,",,,,,"],
  ["2017Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.0873915521499588,",",0.0873915521499588/100,",,,,,"],
  ["2017Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.110821060926957,",",0.110821060926957/100,",,,,,"],
  ["2017Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.128829613633854,",",0.128829613633854/100,",,,,,"],
  ["2017Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.143698468786808,",",0.143698468786808/100,",,,,,"],
  
  ["2018Q1,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,89,",,,,,"],
  ["2018Q2,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,107,",,,,,"],
  ["2018Q3,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,94,",,,,,"],
  ["2018Q4,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,108,",,,,,"],  
  ["2018Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.10954655112993,",",0.10954655112993/100,",,,,,"],
  ["2018Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.130664680237883,",",0.130664680237883/100,",,,,,"],
  ["2018Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.113791809410825,",",0.113791809410825/100,",,,,,"],
  ["2018Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.127504338689303,",",0.127504338689303/100,",,,,,"],
  
  ["2019Q1,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,70,",,,,,"],
  ["2019Q2,","TANF Workers"+",,,"+"\"Harford County, Maryland\"",",",,81,",,,,,"],
  ["2019Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.0852452627989673,",",0.0852452627989673/100,",,,,,"],
  ["2019Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.0982973920852396,",",0.0982973920852396/100,",,,,,"],

   
  ["2016Q3,","TANF Participants in Workforce Service "+",,,"+"\"Harford County, Maryland\"",",",,12,",,,,,"],
  ["2016Q4,","TANF Participants in Workforce Service "+",,,"+"\"Harford County, Maryland\"",",",,6,",,,,,"],
  ["2016Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",3.58208955223881,",",3.58208955223881/100,",",,",",",,,,"],
  ["2016Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",1.29032258064516,",",1.29032258064516/100,",",,",",",,,,"],
  
  ["2017Q1,","TANF Participants in Workforce Service "+",,,"+"\"Harford County, Maryland\"",",",,3,",,,,,"],
  ["2017Q2,","TANF Participants in Workforce Service "+",,,"+"\"Harford County, Maryland\"",",",,4,",,,,,"],
  ["2017Q3,","TANF Participants in Workforce Service "+",,,"+"\"Harford County, Maryland\"",",",,14,",,,,,"],
  ["2017Q4,","TANF Participants in Workforce Service "+",,,"+"\"Harford County, Maryland\"",",",,4,",,,,,"],
  ["2017Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.479233226837061,",",0.479233226837061/100,",",,",",",,,,"],
  ["2017Q2,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.732600732600733,",",0.732600732600733/100,",",,",",",,,,"],
  ["2017Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",2.19092331768388,",",2.19092331768388/100,",",,",",",,,,"],
  ["2017Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.928074245939675,",",0.928074245939675/100,",",,",",",,,,"],
  
  ["2018Q1,","TANF Participants in Workforce Service "+",,,"+"\"Harford County, Maryland\"",",",,2,",,,,,"],
  ["2018Q2,","TANF Participants in Workforce Service "+",,,"+"\"Harford County, Maryland\"",",",,6,",,,,,"],
  ["2018Q3,","TANF Participants in Workforce Service "+",,,"+"\"Harford County, Maryland\"",",",,4,",,,,,"],
  ["2018Q4,","TANF Participants in Workforce Service "+",,,"+"\"Harford County, Maryland\"",",",,5,",,,,,"],
  
  ["2018Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",0.478468899521531,",",0.478468899521531/100,",",,",",",,,,"],
  ["2018Q2,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",1.3953488372093,",",1.3953488372093/100,",",,",",",,,,"],
  ["2018Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",1.05540897097625,",",1.05540897097625/100,",",,",",",,,,"],
  ["2018Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",1.26582278481013,",",1.26582278481013/100,",",,",",",,,,"],
  
  ["2019Q1,","TANF Participants in Workforce Service "+",,,"+"\"Harford County, Maryland\"",",",,8,",,,,,"],
  ["2019Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Harford County, Maryland\"",",",1.65631469979296,",",1.65631469979296/100,",",,",",",,,,"],

  
  

  ["2017,","SNAP Recipient Workers"+",,,"+"\"Harford County, Maryland\"",",",,9293,",,,,,"],
  ["2018,","SNAP Recipient Workers"+",,,"+"\"Harford County, Maryland\"",",",,8770,",,,,,"],
  ["2019,","SNAP Recipient Workers"+",,,"+"\"Harford County, Maryland\"",",",,8839,",,,,,"],
  ["2020,","SNAP Recipient Workers"+",,,"+"\"Harford County, Maryland\"",",",,8450,",,,,,"],

  ["2017,","SNAP Recipient Workers by Percentage"+",,,"+"\"Harford County, Maryland\"",",",,3.6471/100,",",3.6471,",,,,"],
  ["2018,","SNAP Recipient Workers by Percentage"+",,,"+"\"Harford County, Maryland\"",",",,3.6774/100,",",3.6774,",,,,"],
  ["2019,","SNAP Recipient Workers by Percentage"+",,,"+"\"Harford County, Maryland\"",",",,3.6754/100,",",3.6754,",,,,"],
  ["2020,","SNAP Recipient Workers by Percentage"+",,,"+"\"Harford County, Maryland\"",",",,3.6705/100,",",3.6705,",,,,"],
  
  
  

  ["2015,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Harford County, Maryland\"",",",6387,",,,,"],
  ["2016,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Harford County, Maryland\"",",",6388,",,,,"],
  ["2017,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Harford County, Maryland\"",",",6464,",,,,"],
  ["2018,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Harford County, Maryland\"",",",6911,",,,,"],
  ["2019,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Harford County, Maryland\"",",",6679,",,,,"],

  ["2015,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Harford County, Maryland\"",",",120447,",,,,"],
  ["2016,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Harford County, Maryland\"",",",119988,",,,,"],
  ["2017,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Harford County, Maryland\"",",",120195,",,,,"],
  ["2018,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Harford County, Maryland\"",",",119174,",,,,"],
  ["2019,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Harford County, Maryland\"",",",119420,",,,,"],

["2015,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Harford County, Maryland\"",",",6226,",,,,"],
["2016,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Harford County, Maryland\"",",",5941,",,,,"],
["2017,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Harford County, Maryland\"",",",5885,",,,,"],
["2018,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Harford County, Maryland\"",",",5731,",,,,"],
["2019,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Harford County, Maryland\"",",",5189,",,,,"],

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
              "/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat1: [
              year,"Median Household Income,,",'"Harford County, Maryland"',
              dataend+",",
              ",,,,",
            ],
          },
          set2: {
            url2:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/profile?get=NAME,DP05_0001E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat2: [
              year,"Total Population,,",'"Harford County, Maryland"',
              dataend,
              ",,,,",
            ],
          },


          set3: {
            url3:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat3: [
              year,"Unemployment By Gender,","Male",'"Harford County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set4: {
            url4:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat4: [
              year,"Employment Status By Disability Status","Unemployed","Disabled",'"Harford County, Maryland"',
              dataend+ ",,,,",
            ],
          },

          set5: {
            url5:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_019E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat5: [
              year,"Unemployment By Race,","Hispanic",'"Harford County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set6: {
            url6:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat6: [
              year,"Unemployment By Gender,","Female",'"Harford County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set7: {
            url7:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat7: [
              year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Harford County, Maryland"',
              dataend+ ",,,,",
            ],
          },

          set8: {
            url8:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat8: [
              year,"Employment Status By Disability Status","Employed","Non Disabled",'"Harford County, Maryland"',
              dataend+ ",",
            ],
          },

          set9: {
            url9:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_027E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat9: [
              year,"Employment Status By Education","Employed","Bachelor's or Higher",'"Harford County, Maryland"',
              dataend+ ",",
            ],
          },

          set10: {
            url10:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_028E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat10: [
              year,"Employment Status By Education","Unemployed","Bachelor's or Higher",'"Harford County, Maryland"',
              dataend+ ",",
            ],
          },

          set11: {
            url11:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_029E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat11: [
              year,"Employment Status By Education","NIL","Bachelor's or Higher",'"Harford County, Maryland"',
              dataend+ ",",
            ],
          },

          set12: {
            url12:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_013E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat12: [
              year,"Employment Status By Education","Employed","Highschool",'"Harford County, Maryland"',
              dataend+ ",",
            ],
          },

          set13: {
            url13:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_014E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat13: [
              year,"Employment Status By Education","Unemployed","Highschool",'"Harford County, Maryland"',
              dataend+ ",",
            ],
          },

          set14: {
            url14:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_015E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat14: [
              year,"Employment Status By Education","NIL","Highschool",'"Harford County, Maryland"',
              dataend+ ",",
            ],
          },

          set15: {
            url15:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_028E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat15: [
              year,"Employment Status By Poverty Status","Employed","Below Poverty",'"Harford County, Maryland"',
              dataend + ",",
            ],
          },

          set16: {
            url16:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_031E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat16: [
              year,"Employment Status By Poverty Status","Unemployed","Below Poverty",'"Harford County, Maryland"',
              dataend+ ",",
            ],
          },

          set17: {
            url17:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_004E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat17: [
              year,"Employment Status By Disability Status","Employed","Disabled",'"Harford County, Maryland"',
              dataend+ ",,,,",
            ],
          },


          set18: {
            url18:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_006E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat18: [
              year,"Employment Status By Education","Employed","Less than Highschool",'"Harford County, Maryland"',
              dataend+",",
            ],
          },

          set19: {
            url19:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_007E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat19: [
              year,"Employment Status By Education","Unemployed","Less than Highschool",'"Harford County, Maryland"',
              dataend+ ",",
            ],
          },

          set20: {
            url20:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_008E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat20: [
              year,"Employment Status By Education","NIL","Less than Highschool",'"Harford County, Maryland"',
              dataend+ ",",
            ],
          },

          set21: {
            url21:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat21: [
              year,"Unemployment By Veteran Status,","Non Veteran",'"Harford County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set22: {
            url22:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat22: [
              year,"Unemployment By Veteran Status,","Veteran",'"Harford County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set23: {
            url23:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_020E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat23: [
              year,"Employment Status By Education","Employed","Some College",'"Harford County, Maryland"',
              dataend+ ",",
            ],
          },

          set24: {
            url24:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_021E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat24: [
              year,"Employment Status By Education","Unemployed","Some College",'"Harford County, Maryland"',
              dataend+ ",",
            ],
          },

          set25: {
            url25:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_022E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat25: [
              year,"Employment Status By Education","NIL","Some College",'"Harford County, Maryland"',
              dataend+ ",",
            ],
          },

          set26: {
            url26:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat26: [
              year,"Unemployment By Race,","Asian",'"Harford County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },


          set27: {
            url27:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat27: [
              year,"Unemployment By Race,","White",'"Harford County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set28: {
            url28:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat28: [
              year,"Unemployment By Race,","Black",'"Harford County, Maryland"',
              dataend,
              dataend / 100,
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
for (var i = 1; i < 29; ++i) {
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
      Maryland: {
        //Alleghany County
        // beginning of the object for the county API data // anything in while loop counts grey comma as a comma
        set1: {
          url1:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat1: [
            year,"Median Household Income,,",'"Harford County, Maryland"',
            dataend+",",
            ",,,,",
          ],
        },
        set2: {
          url2:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/profile?get=NAME,DP05_0001E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat2: [
            year,"Total Population,,",'"Harford County, Maryland"',
            dataend,
            ",,,,",
          ],
        },


        set3: {
          url3:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat3: [
            year,"Unemployment By Gender,","Male",'"Harford County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set4: {
          url4:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat4: [
            year,"Employment Status By Disability Status","Unemployed","Disabled",'"Harford County, Maryland"',
            dataend+ ",,,,",
          ],
        },
//adjusted to remove the extra data points for non disabled unemplyoment rate

set5: {
  url5:
    "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_019E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
  arrayformat5: [
    year,"Unemployment By Race,","Hispanic",'"Harford County, Maryland"',
    dataend,
    dataend / 100,
  ],
},

        set6: {
          url6:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat6: [
            year,"Unemployment By Gender,","Female",'"Harford County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },


        set7: {
          url7:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat7: [
            year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Harford County, Maryland"',
            dataend+ ",,,,",
          ],
        },

        set8: {
          url8:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat8: [
            year,"Employment Status By Disability Status","Employed","Non Disabled",'"Harford County, Maryland"',
            dataend+ ",",
          ],
        },

        set9: {
          url9:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_027E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat9: [
            year,"Employment Status By Education","Employed","Bachelor's or Higher",'"Harford County, Maryland"',
            dataend+ ",",
          ],
        },

        set10: {
          url10:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_028E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat10: [
            year,"Employment Status By Education","Unemployed","Bachelor's or Higher",'"Harford County, Maryland"',
            dataend+ ",",
          ],
        },

        set11: {
          url11:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_029E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat11: [
            year,"Employment Status By Education","NIL","Bachelor's or Higher",'"Harford County, Maryland"',
            dataend+ ",",
          ],
        },

        set12: {
          url12:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_013E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat12: [
            year,"Employment Status By Education","Employed","Highschool",'"Harford County, Maryland"',
            dataend+ ",",
          ],
        },

        set13: {
          url13:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_014E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat13: [
            year,"Employment Status By Education","Unemployed","Highschool",'"Harford County, Maryland"',
            dataend+ ",",
          ],
        },

        set14: {
          url14:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_015E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat14: [
            year,"Employment Status By Education","NIL","Highschool",'"Harford County, Maryland"',
            dataend+ ",",
          ],
        },

        set15: {
          url15:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S1701_C02_028E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat15: [
            year,"Employment Status By Poverty Status","Employed","Below Poverty",'"Harford County, Maryland"',
            dataend + ",",
          ],
        },

        set16: {
          url16:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S1701_C02_031E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat16: [
            year,"Employment Status By Poverty Status","Unemployed","Below Poverty",'"Harford County, Maryland"',
            dataend+ ",",
          ],
        },

        set17: {
          url17:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_004E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat17: [
            year,"Employment Status By Disability Status","Employed","Disabled",'"Harford County, Maryland"',
            dataend+ ",,,,",
          ],
        },


        set18: {
          url18:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_006E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat18: [
            year,"Employment Status By Education","Employed","Less than Highschool",'"Harford County, Maryland"',
            dataend+",",
          ],
        },

        set19: {
          url19:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_007E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat19: [
            year,"Employment Status By Education","Unemployed","Less than Highschool",'"Harford County, Maryland"',
            dataend+ ",",
          ],
        },

        set20: {
          url20:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_008E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat20: [
            year,"Employment Status By Education","NIL","Less than Highschool",'"Harford County, Maryland"',
            dataend+ ",",
          ],
        },

        set21: {
          url21:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat21: [
            year,"Unemployment By Veteran Status,","Non Veteran",'"Harford County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set22: {
          url22:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat22: [
            year,"Unemployment By Veteran Status,","Veteran",'"Harford County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set23: {
          url23:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_020E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat23: [
            year,"Employment Status By Education","Employed","Some College",'"Harford County, Maryland"',
            dataend+ ",",
          ],
        },

        set24: {
          url24:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_021E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat24: [
            year,"Employment Status By Education","Unemployed","Some College",'"Harford County, Maryland"',
            dataend+ ",",
          ],
        },

        set25: {
          url25:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_022E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat25: [
            year,"Employment Status By Education","NIL","Some College",'"Harford County, Maryland"',
            dataend+ ",",
          ],
        },

        set26: {
          url26:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat26: [
            year,"Unemployment By Race,","Asian",'"Harford County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },


        set27: {
          url27:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat27: [
            year,"Unemployment By Race,","White",'"Harford County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set28: {
          url28:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:025&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat28: [
            year,"Unemployment By Race,","Black",'"Harford County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },









       },


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
