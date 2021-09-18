//ACS Data
// The table or array that will be converted to the excel spreadsheet
var results = [

  ["2015Q3,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,127,",,,,,"],
  ["2015Q4,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,116,",,,,,"],
  ["2015Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0722905282331512,",",0.0722905282331512/100,",,,,,"],
  ["2015Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0660122350263195,",",0.0660122350263195/100,",,,,,"],

  ["2016Q1,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,89,",,,,,"],
  ["2016Q2,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,101,",,,,,"],
  ["2016Q3,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,111,",,,,,"],
  ["2016Q4,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,109,",,,,,"],
  ["2016Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0513293730895669,",",0.0513293730895669/100,",,,,,"],
  ["2016Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0570821417671727,",",0.0570821417671727/100,",,,,,"],
  ["2016Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0619157053928022,",",0.0619157053928022/100,",,,,,"],
  ["2016Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0612793325612512,",",0.0612793325612512/100,",,,,,"],
  
  ["2017Q1,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,96,",,,,,"],
  ["2017Q2,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,99,",,,,,"],
  ["2017Q3,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,83,",,,,,"],
  ["2017Q4,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,95,",,,,,"],
  ["2017Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0549227362964912,",",0.0549227362964912/100,",,,,,"],
  ["2017Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0554283378777105,",",0.0554283378777105/100,",,,,,"],
  ["2017Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0462557889398508,",",0.0462557889398508/100,",,,,,"],
  ["2017Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0530791493926628,",",0.0530791493926628/100,",,,,,"],
  
  ["2018Q1,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,65,",,,,,"],
  ["2018Q2,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,71,",,,,,"],
  ["2018Q3,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,73,",,,,,"],
  ["2018Q4,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,103,",,,,,"],  
  ["2018Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0369353858043106,",",0.0369353858043106/100,",,,,,"],
  ["2018Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0396101468922771,",",0.0396101468922771/100,",,,,,"],
  ["2018Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0399319515784061,",",0.0399319515784061/100,",,,,,"],
  ["2018Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0570024461243871,",",0.0570024461243871/100,",,,,,"],
  
  ["2019Q1,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,90,",,,,,"],
  ["2019Q2,","TANF Workers"+",,,"+"\"Howard County, Maryland\"",",",,86,",,,,,"],
  ["2019Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0494891618735497,",",0.0494891618735497/100,",,,,,"],
  ["2019Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.0467971181681649,",",0.0467971181681649/100,",,,,,"],

   
  ["2016Q3,","TANF Participants in Workforce Service "+",,,"+"\"Howard County, Maryland\"",",",,12,",,,,,"],
  ["2016Q4,","TANF Participants in Workforce Service "+",,,"+"\"Howard County, Maryland\"",",",,6,",,,,,"],
  ["2016Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",3.58208955223881,",",3.58208955223881/100,",",,",",",,,,"],
  ["2016Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",1.29032258064516,",",1.29032258064516/100,",",,",",",,,,"],
  
  ["2017Q1,","TANF Participants in Workforce Service "+",,,"+"\"Howard County, Maryland\"",",",,3,",,,,,"],
  ["2017Q2,","TANF Participants in Workforce Service "+",,,"+"\"Howard County, Maryland\"",",",,4,",,,,,"],
  ["2017Q3,","TANF Participants in Workforce Service "+",,,"+"\"Howard County, Maryland\"",",",,14,",,,,,"],
  ["2017Q4,","TANF Participants in Workforce Service "+",,,"+"\"Howard County, Maryland\"",",",,4,",,,,,"],
  ["2017Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.479233226837061,",",0.479233226837061/100,",",,",",",,,,"],
  ["2017Q2,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.732600732600733,",",0.732600732600733/100,",",,",",",,,,"],
  ["2017Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",2.19092331768388,
",",2.19092331768388/100,",",,",",",,,,"],
  ["2017Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.928074245939675,",",0.928074245939675/100,",",,",",",,,,"],
  
  ["2018Q1,","TANF Participants in Workforce Service "+",,,"+"\"Howard County, Maryland\"",",",,2,",,,,,"],
  ["2018Q2,","TANF Participants in Workforce Service "+",,,"+"\"Howard County, Maryland\"",",",,6,",,,,,"],
  ["2018Q3,","TANF Participants in Workforce Service "+",,,"+"\"Howard County, Maryland\"",",",,4,",,,,,"],
  ["2018Q4,","TANF Participants in Workforce Service "+",,,"+"\"Howard County, Maryland\"",",",,5,",,,,,"],
  
  ["2018Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",0.478468899521531,",",0.478468899521531/100,",",,",",",,,,"],
  ["2018Q2,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",1.3953488372093,
",",1.3953488372093/100,",",,",",",,,,"],
  ["2018Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",1.05540897097625,
",",1.05540897097625/100,",",,",",",,,,"],
  ["2018Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",1.26582278481013,
",",1.26582278481013/100,",",,",",",,,,"],
  
  ["2019Q1,","TANF Participants in Workforce Service "+",,,"+"\"Howard County, Maryland\"",",",,8,",,,,,"],
  ["2019Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Howard County, Maryland\"",",",1.65631469979296,",",1.65631469979296/100,",",,",",",,,,"],

  
  

  ["2017,","SNAP Recipient Workers"+",,,"+"\"Howard County, Maryland\"",",",,6914,",,,,,"],
  ["2018,","SNAP Recipient Workers"+",,,"+"\"Howard County, Maryland\"",",",,6364,",,,,,"],
  ["2019,","SNAP Recipient Workers"+",,,"+"\"Howard County, Maryland\"",",",,6580,",,,,,"],
  ["2020,","SNAP Recipient Workers"+",,,"+"\"Howard County, Maryland\"",",",,6244,",,,,,"],

  ["2017,","SNAP Recipient Workers by Percentage"+",,,"+"\"Howard County, Maryland\"",",",,2.7135/100,",",2.7135,",,,,"],
  ["2018,","SNAP Recipient Workers by Percentage"+",,,"+"\"Howard County, Maryland\"",",",,2.6685/100,",",2.6685,",,,,"],
  ["2019,","SNAP Recipient Workers by Percentage"+",,,"+"\"Howard County, Maryland\"",",",,2.7361/100,",",2.7361,",,,,"],
  ["2020,","SNAP Recipient Workers by Percentage"+",,,"+"\"Howard County, Maryland\"",",",,2.7123/100,",",2.7123,",,,,"],
  
  
  

  ["2015,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Howard County, Maryland\"",",",5313,",,,,"],
  ["2016,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Howard County, Maryland\"",",",5477,",,,,"],
  ["2017,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Howard County, Maryland\"",",",5790,",,,,"],
  ["2018,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Howard County, Maryland\"",",",6018,",,,,"],
  ["2019,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Howard County, Maryland\"",",",6130,",,,,"],

  ["2015,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Howard County, Maryland\"",",",155363,",,,,"],
  ["2016,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Howard County, Maryland\"",",",156390,",,,,"],
  ["2017,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Howard County, Maryland\"",",",157101,",,,,"],
  ["2018,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Howard County, Maryland\"",",",157334,",,,,"],
  ["2019,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Howard County, Maryland\"",",",158148,",,,,"],

["2015,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Howard County, Maryland\"",",",5416,",,,,"],
["2016,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Howard County, Maryland\"",",",5334,",,,,"],
["2017,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Howard County, Maryland\"",",",5616,",,,,"],
["2018,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Howard County, Maryland\"",",",5693,",,,,"],
["2019,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Howard County, Maryland\"",",",5102,",,,,"],

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
              "/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat1: [
              year,"Median Household Income,,",'"Howard County, Maryland"',
              dataend+",",
              ",,,,",
            ],
          },
          set2: {
            url2:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/profile?get=NAME,DP05_0001E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat2: [
              year,"Total Population,,",'"Howard County, Maryland"',
              dataend,
              ",,,,",
            ],
          },


          set3: {
            url3:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat3: [
              year,"Unemployment By Gender,","Male",'"Howard County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set4: {
            url4:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat4: [
              year,"Employment Status By Disability Status","Unemployed","Disabled",'"Howard County, Maryland"',
              dataend+ ",,,,",
            ],
          },

          set5: {
            url5:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_019E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat5: [
              year,"Unemployment By Race,","Hispanic",'"Howard County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set6: {
            url6:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat6: [
              year,"Unemployment By Gender,","Female",'"Howard County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set7: {
            url7:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat7: [
              year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Howard County, Maryland"',
              dataend+ ",,,,",
            ],
          },

          set8: {
            url8:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat8: [
              year,"Employment Status By Disability Status","Employed","Non Disabled",'"Howard County, Maryland"',
              dataend+ ",",
            ],
          },

          set9: {
            url9:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_027E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat9: [
              year,"Employment Status By Education","Employed","Bachelor's or Higher",'"Howard County, Maryland"',
              dataend+ ",",
            ],
          },

          set10: {
            url10:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_028E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat10: [
              year,"Employment Status By Education","Unemployed","Bachelor's or Higher",'"Howard County, Maryland"',
              dataend+ ",",
            ],
          },

          set11: {
            url11:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_029E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat11: [
              year,"Employment Status By Education","NIL","Bachelor's or Higher",'"Howard County, Maryland"',
              dataend+ ",",
            ],
          },

          set12: {
            url12:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_013E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat12: [
              year,"Employment Status By Education","Employed","Highschool",'"Howard County, Maryland"',
              dataend+ ",",
            ],
          },

          set13: {
            url13:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_014E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat13: [
              year,"Employment Status By Education","Unemployed","Highschool",'"Howard County, Maryland"',
              dataend+ ",",
            ],
          },

          set14: {
            url14:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_015E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat14: [
              year,"Employment Status By Education","NIL","Highschool",'"Howard County, Maryland"',
              dataend+ ",",
            ],
          },

          set15: {
            url15:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_028E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat15: [
              year,"Employment Status By Poverty Status","Employed","Below Poverty",'"Howard County, Maryland"',
              dataend + ",",
            ],
          },

          set16: {
            url16:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_031E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat16: [
              year,"Employment Status By Poverty Status","Unemployed","Below Poverty",'"Howard County, Maryland"',
              dataend+ ",",
            ],
          },

          set17: {
            url17:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_004E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat17: [
              year,"Employment Status By Disability Status","Employed","Disabled",'"Howard County, Maryland"',
              dataend+ ",,,,",
            ],
          },


          set18: {
            url18:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_006E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat18: [
              year,"Employment Status By Education","Employed","Less than Highschool",'"Howard County, Maryland"',
              dataend+",",
            ],
          },

          set19: {
            url19:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_007E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat19: [
              year,"Employment Status By Education","Unemployed","Less than Highschool",'"Howard County, Maryland"',
              dataend+ ",",
            ],
          },

          set20: {
            url20:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_008E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat20: [
              year,"Employment Status By Education","NIL","Less than Highschool",'"Howard County, Maryland"',
              dataend+ ",",
            ],
          },

          set21: {
            url21:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat21: [
              year,"Unemployment By Veteran Status,","Non Veteran",'"Howard County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set22: {
            url22:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat22: [
              year,"Unemployment By Veteran Status,","Veteran",'"Howard County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set23: {
            url23:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_020E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat23: [
              year,"Employment Status By Education","Employed","Some College",'"Howard County, Maryland"',
              dataend+ ",",
            ],
          },

          set24: {
            url24:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_021E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat24: [
              year,"Employment Status By Education","Unemployed","Some College",'"Howard County, Maryland"',
              dataend+ ",",
            ],
          },

          set25: {
            url25:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_022E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat25: [
              year,"Employment Status By Education","NIL","Some College",'"Howard County, Maryland"',
              dataend+ ",",
            ],
          },

          set26: {
            url26:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat26: [
              year,"Unemployment By Race,","Asian",'"Howard County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },


          set27: {
            url27:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat27: [
              year,"Unemployment By Race,","White",'"Howard County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set28: {
            url28:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat28: [
              year,"Unemployment By Race,","Black",'"Howard County, Maryland"',
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
            "/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat1: [
            year,"Median Household Income,,",'"Howard County, Maryland"',
            dataend+",",
            ",,,,",
          ],
        },
        set2: {
          url2:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/profile?get=NAME,DP05_0001E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat2: [
            year,"Total Population,,",'"Howard County, Maryland"',
            dataend,
            ",,,,",
          ],
        },


        set3: {
          url3:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat3: [
            year,"Unemployment By Gender,","Male",'"Howard County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set4: {
          url4:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat4: [
            year,"Employment Status By Disability Status","Unemployed","Disabled",'"Howard County, Maryland"',
            dataend+ ",,,,",
          ],
        },
//adjusted to remove the extra data points for non disabled unemplyoment rate

set5: {
  url5:
    "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_019E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
  arrayformat5: [
    year,"Unemployment By Race,","Hispanic",'"Howard County, Maryland"',
    dataend,
    dataend / 100,
  ],
},

        set6: {
          url6:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat6: [
            year,"Unemployment By Gender,","Female",'"Howard County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },


        set7: {
          url7:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat7: [
            year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Howard County, Maryland"',
            dataend+ ",,,,",
          ],
        },

        set8: {
          url8:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat8: [
            year,"Employment Status By Disability Status","Employed","Non Disabled",'"Howard County, Maryland"',
            dataend+ ",",
          ],
        },

        set9: {
          url9:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_027E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat9: [
            year,"Employment Status By Education","Employed","Bachelor's or Higher",'"Howard County, Maryland"',
            dataend+ ",",
          ],
        },

        set10: {
          url10:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_028E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat10: [
            year,"Employment Status By Education","Unemployed","Bachelor's or Higher",'"Howard County, Maryland"',
            dataend+ ",",
          ],
        },

        set11: {
          url11:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_029E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat11: [
            year,"Employment Status By Education","NIL","Bachelor's or Higher",'"Howard County, Maryland"',
            dataend+ ",",
          ],
        },

        set12: {
          url12:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_013E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat12: [
            year,"Employment Status By Education","Employed","Highschool",'"Howard County, Maryland"',
            dataend+ ",",
          ],
        },

        set13: {
          url13:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_014E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat13: [
            year,"Employment Status By Education","Unemployed","Highschool",'"Howard County, Maryland"',
            dataend+ ",",
          ],
        },

        set14: {
          url14:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_015E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat14: [
            year,"Employment Status By Education","NIL","Highschool",'"Howard County, Maryland"',
            dataend+ ",",
          ],
        },

        set15: {
          url15:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S1701_C02_028E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat15: [
            year,"Employment Status By Poverty Status","Employed","Below Poverty",'"Howard County, Maryland"',
            dataend + ",",
          ],
        },

        set16: {
          url16:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S1701_C02_031E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat16: [
            year,"Employment Status By Poverty Status","Unemployed","Below Poverty",'"Howard County, Maryland"',
            dataend+ ",",
          ],
        },

        set17: {
          url17:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_004E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat17: [
            year,"Employment Status By Disability Status","Employed","Disabled",'"Howard County, Maryland"',
            dataend+ ",,,,",
          ],
        },


        set18: {
          url18:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_006E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat18: [
            year,"Employment Status By Education","Employed","Less than Highschool",'"Howard County, Maryland"',
            dataend+",",
          ],
        },

        set19: {
          url19:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_007E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat19: [
            year,"Employment Status By Education","Unemployed","Less than Highschool",'"Howard County, Maryland"',
            dataend+ ",",
          ],
        },

        set20: {
          url20:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_008E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat20: [
            year,"Employment Status By Education","NIL","Less than Highschool",'"Howard County, Maryland"',
            dataend+ ",",
          ],
        },

        set21: {
          url21:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat21: [
            year,"Unemployment By Veteran Status,","Non Veteran",'"Howard County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set22: {
          url22:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat22: [
            year,"Unemployment By Veteran Status,","Veteran",'"Howard County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set23: {
          url23:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_020E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat23: [
            year,"Employment Status By Education","Employed","Some College",'"Howard County, Maryland"',
            dataend+ ",",
          ],
        },

        set24: {
          url24:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_021E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat24: [
            year,"Employment Status By Education","Unemployed","Some College",'"Howard County, Maryland"',
            dataend+ ",",
          ],
        },

        set25: {
          url25:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_022E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat25: [
            year,"Employment Status By Education","NIL","Some College",'"Howard County, Maryland"',
            dataend+ ",",
          ],
        },

        set26: {
          url26:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat26: [
            year,"Unemployment By Race,","Asian",'"Howard County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },


        set27: {
          url27:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat27: [
            year,"Unemployment By Race,","White",'"Howard County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set28: {
          url28:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:027&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat28: [
            year,"Unemployment By Race,","Black",'"Howard County, Maryland"',
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
