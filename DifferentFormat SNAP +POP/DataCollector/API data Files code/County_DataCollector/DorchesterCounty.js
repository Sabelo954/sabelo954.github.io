//ACS Data
// The table or array that will be converted to the excel spreadsheet
var results = [

  ["2015Q3,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,83,",,,,,"],
  ["2015Q4,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,72,",,,,,"],
  ["2015Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.743061772605192,",",0.743061772605192/100,",,,,,"],
  ["2015Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.646087580760948,",",0.646087580760948/100,",,,,,"],

  ["2016Q1,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,52,",,,,,"],
  ["2016Q2,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,44,",,,,,"],
  ["2016Q3,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,37,",,,,,"],
  ["2016Q4,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,41,",,,,,"],
  ["2016Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.495238095238095,",",0.495238095238095/100,",,,,,"],
  ["2016Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.416824554755589,",",0.416824554755589/100,",,,,,"],
  ["2016Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.336241366775718,",",0.336241366775718/100,",,,,,"],
  ["2016Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.370973579442635,",",0.370973579442635/100,",,,,,"],
  
  ["2017Q1,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,30,",,,,,"],
  ["2017Q2,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,25,",,,,,"],
  ["2017Q3,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,31,",,,,,"],
  ["2017Q4,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,38,",,,,,"],
  ["2017Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.288933834151979,",",0.288933834151979/100,",,,,,"],
  ["2017Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.23719165085389,",",0.23719165085389/100,",,,,,"],
  ["2017Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.282100282100282,",",0.282100282100282/100,",,,,,"],
  ["2017Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.352602765148,",",0.352602765148/100,",,,,,"],
  
  ["2018Q1,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,26,",,,,,"],
  ["2018Q2,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,33,",,,,,"],
  ["2018Q3,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,28,",,,,,"],
  ["2018Q4,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,37,",,,,,"],  
  ["2018Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.258115754988583,",",0.258115754988583/100,",,,,,"],
  ["2018Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.318502075089277,",",0.318502075089277/100,",,,,,"],
  ["2018Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.257637099742363,",",0.257637099742363/100,",,,,,"],
  ["2018Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.337776154829286,",",0.337776154829286/100,",,,,,"],
  
  ["2019Q1,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,26,",,,,,"],
  ["2019Q2,","TANF Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,30,",,,,,"],
  ["2019Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.250168382565188,",",0.250168382565188/100,",,,,,"],
  ["2019Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.278241513633834,",",0.278241513633834/100,",,,,,"],

   
  ["2016Q3,","TANF Participants in Workforce Service "+",,,"+"\"Dorchester County, Maryland\"",",",,13,",,,,,"],
  ["2016Q4,","TANF Participants in Workforce Service "+",,,"+"\"Dorchester County, Maryland\"",",",,7,",,,,,"],
  ["2016Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",5.67685589519651,",",5.67685589519651/100,",",,",",",,,,"],
  ["2016Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",3.05676855895197,",",3.05676855895197/100,",",,",",",,,,"],
  
  ["2017Q1,","TANF Participants in Workforce Service "+",,,"+"\"Dorchester County, Maryland\"",",",,7,",,,,,"],
  ["2017Q2,","TANF Participants in Workforce Service "+",,,"+"\"Dorchester County, Maryland\"",",",,2,",,,,,"],
  ["2017Q3,","TANF Participants in Workforce Service "+",,,"+"\"Dorchester County, Maryland\"",",",,6,",,,,,"],
  ["2017Q4,","TANF Participants in Workforce Service "+",,,"+"\"Dorchester County, Maryland\"",",",,2,",,,,,"],
  ["2017Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",2.23642172523962,",",2.23642172523962/100,",",,",",",,,,"],
  ["2017Q2,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.67340067340067,",",0.673400673400673/100,",",,",",",,,,"],
  ["2017Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",2.58620689655172,",",2.58620689655172/100,",",,",",",,,,"],
  ["2017Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",1.0752688172043,",",1.0752688172043/100,",",,",",",,,,"],
  
  ["2018Q1,","TANF Participants in Workforce Service "+",,,"+"\"Dorchester County, Maryland\"",",",,2,",,,,,"],
  ["2018Q2,","TANF Participants in Workforce Service "+",,,"+"\"Dorchester County, Maryland\"",",",,5,",,,,,"],
  ["2018Q3,","TANF Participants in Workforce Service "+",,,"+"\"Dorchester County, Maryland\"",",",,2,",,,,,"],
  ["2018Q4,","TANF Participants in Workforce Service "+",,,"+"\"Dorchester County, Maryland\"",",",,4,",,,,,"],
  
  ["2018Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",0.94786729857819,",",0.947867298578199/100,",",,",",",,,,"],
  ["2018Q2,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",3.18471337579618,",",3.18471337579618/100,",",,",",",,,,"],
  ["2018Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",1.08695652173913,",",1.08695652173913/100,",",,",",",,,,"],
  ["2018Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",2.7027027027027,",",2.7027027027027/100,",",,",",",,,,"],
  
  ["2019Q1,","TANF Participants in Workforce Service "+",,,"+"\"Dorchester County, Maryland\"",",",,3,",,,,,"],
  ["2019Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Dorchester County, Maryland\"",",",1.50753768844221,",",1.50753768844221/100,",",,",",",,,,"],
  
  

  ["2017,","SNAP Recipient Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,3214,",,,,,"],
  ["2018,","SNAP Recipient Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,3065,",,,,,"],
  ["2019,","SNAP Recipient Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,2997,",,,,,"],
  ["2020,","SNAP Recipient Workers"+",,,"+"\"Dorchester County, Maryland\"",",",,2958,",,,,,"],

  ["2017,","SNAP Recipient Workers by Percentage"+",,,"+"\"Dorchester County, Maryland\"",",",,1.2614/100,",",1.2614,",,,,"],
  ["2018,","SNAP Recipient Workers by Percentage"+",,,"+"\"Dorchester County, Maryland\"",",",,1.2852/100,",",1.2852,",,,,"],
  ["2019,","SNAP Recipient Workers by Percentage"+",,,"+"\"Dorchester County, Maryland\"",",",,1.2462/100,",",1.2462,",,,,"],
  ["2020,","SNAP Recipient Workers by Percentage"+",,,"+"\"Dorchester County, Maryland\"",",",,1.2849/100,",",1.2849,",,,,"],

  ["2015,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Dorchester County, Maryland\"",",",1033,",,,,"],
  ["2016,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Dorchester County, Maryland\"",",",1209,",,,,"],
  ["2017,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Dorchester County, Maryland\"",",",1169,",,,,"],
  ["2018,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Dorchester County, Maryland\"",",",1097,",,,,"],
  ["2019,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Dorchester County, Maryland\"",",",1156,",,,,"],

  ["2015,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Dorchester County, Maryland\"",",",14600,",,,,"],
  ["2016,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Dorchester County, Maryland\"",",",14140,",,,,"],
  ["2017,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Dorchester County, Maryland\"",",",13923,",,,,"],
  ["2018,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Dorchester County, Maryland\"",",",13744,",,,,"],
  ["2019,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Dorchester County, Maryland\"",",",13238,",,,,"],

["2015,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Dorchester County, Maryland\"",",",1624,",,,,"],
["2016,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Dorchester County, Maryland\"",",",1795,",,,,"],
["2017,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Dorchester County, Maryland\"",",",1580,",,,,"],
["2018,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Dorchester County, Maryland\"",",",1469,",,,,"],
["2019,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Dorchester County, Maryland\"",",",1492,",,,,"],

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
              "/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat1: [
              year,"Median Household Income,,",'"Dorchester County, Maryland"',
              dataend+",",
              ",,,,",
            ],
          },
          set2: {
            url2:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/profile?get=NAME,DP05_0001E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat2: [
              year,"Total Population,,",'"Dorchester County, Maryland"',
              dataend,
              ",,,,",
            ],
          },


          set3: {
            url3:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat3: [
              year,"Unemployment By Gender,","Male",'"Dorchester County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set4: {
            url4:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat4: [
              year,"Employment Status By Disability Status","Unemployed","Disabled",'"Dorchester County, Maryland"',
              dataend+ ",,,,",
            ],
          },

          set5: {
            url5:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_019E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat5: [
              year,"Unemployment By Race,","Hispanic",'"Dorchester County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set6: {
            url6:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat6: [
              year,"Unemployment By Gender,","Female",'"Dorchester County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set7: {
            url7:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat7: [
              year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Dorchester County, Maryland"',
              dataend+ ",,,,",
            ],
          },

          set8: {
            url8:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat8: [
              year,"Employment Status By Disability Status","Employed","Non Disabled",'"Dorchester County, Maryland"',
              dataend+ ",",
            ],
          },

          set9: {
            url9:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_027E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat9: [
              year,"Employment Status By Education","Employed","Bachelor's or Higher",'"Dorchester County, Maryland"',
              dataend+ ",",
            ],
          },

          set10: {
            url10:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_028E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat10: [
              year,"Employment Status By Education","Unemployed","Bachelor's or Higher",'"Dorchester County, Maryland"',
              dataend+ ",",
            ],
          },

          set11: {
            url11:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_029E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat11: [
              year,"Employment Status By Education","NIL","Bachelor's or Higher",'"Dorchester County, Maryland"',
              dataend+ ",",
            ],
          },

          set12: {
            url12:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_013E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat12: [
              year,"Employment Status By Education","Employed","Highschool",'"Dorchester County, Maryland"',
              dataend+ ",",
            ],
          },

          set13: {
            url13:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_014E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat13: [
              year,"Employment Status By Education","Unemployed","Highschool",'"Dorchester County, Maryland"',
              dataend+ ",",
            ],
          },

          set14: {
            url14:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_015E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat14: [
              year,"Employment Status By Education","NIL","Highschool",'"Dorchester County, Maryland"',
              dataend+ ",",
            ],
          },

          set15: {
            url15:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_028E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat15: [
              year,"Employment Status By Poverty Status","Employed","Below Poverty",'"Dorchester County, Maryland"',
              dataend + ",",
            ],
          },

          set16: {
            url16:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_031E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat16: [
              year,"Employment Status By Poverty Status","Unemployed","Below Poverty",'"Dorchester County, Maryland"',
              dataend+ ",",
            ],
          },

          set17: {
            url17:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_004E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat17: [
              year,"Employment Status By Disability Status","Employed","Disabled",'"Dorchester County, Maryland"',
              dataend+ ",,,,",
            ],
          },


          set18: {
            url18:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_006E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat18: [
              year,"Employment Status By Education","Employed","Less than Highschool",'"Dorchester County, Maryland"',
              dataend+",",
            ],
          },

          set19: {
            url19:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_007E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat19: [
              year,"Employment Status By Education","Unemployed","Less than Highschool",'"Dorchester County, Maryland"',
              dataend+ ",",
            ],
          },

          set20: {
            url20:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_008E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat20: [
              year,"Employment Status By Education","NIL","Less than Highschool",'"Dorchester County, Maryland"',
              dataend+ ",",
            ],
          },

          set21: {
            url21:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat21: [
              year,"Unemployment By Veteran Status,","Non Veteran",'"Dorchester County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set22: {
            url22:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat22: [
              year,"Unemployment By Veteran Status,","Veteran",'"Dorchester County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set23: {
            url23:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_020E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat23: [
              year,"Employment Status By Education","Employed","Some College",'"Dorchester County, Maryland"',
              dataend+ ",",
            ],
          },

          set24: {
            url24:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_021E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat24: [
              year,"Employment Status By Education","Unemployed","Some College",'"Dorchester County, Maryland"',
              dataend+ ",",
            ],
          },

          set25: {
            url25:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_022E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat25: [
              year,"Employment Status By Education","NIL","Some College",'"Dorchester County, Maryland"',
              dataend+ ",",
            ],
          },

          set26: {
            url26:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat26: [
              year,"Unemployment By Race,","Asian",'"Dorchester County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },


          set27: {
            url27:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat27: [
              year,"Unemployment By Race,","White",'"Dorchester County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set28: {
            url28:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat28: [
              year,"Unemployment By Race,","Black",'"Dorchester County, Maryland"',
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
            "/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat1: [
            year,"Median Household Income,,",'"Dorchester County, Maryland"',
            dataend+",",
            ",,,,",
          ],
        },
        set2: {
          url2:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/profile?get=NAME,DP05_0001E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat2: [
            year,"Total Population,,",'"Dorchester County, Maryland"',
            dataend,
            ",,,,",
          ],
        },


        set3: {
          url3:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat3: [
            year,"Unemployment By Gender,","Male",'"Dorchester County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set4: {
          url4:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat4: [
            year,"Employment Status By Disability Status","Unemployed","Disabled",'"Dorchester County, Maryland"',
            dataend+ ",,,,",
          ],
        },
//adjusted to remove the extra data points for non disabled unemplyoment rate

set5: {
  url5:
    "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_019E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
  arrayformat5: [
    year,"Unemployment By Race,","Hispanic",'"Dorchester County, Maryland"',
    dataend,
    dataend / 100,
  ],
},

        set6: {
          url6:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat6: [
            year,"Unemployment By Gender,","Female",'"Dorchester County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },


        set7: {
          url7:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat7: [
            year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Dorchester County, Maryland"',
            dataend+ ",,,,",
          ],
        },

        set8: {
          url8:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat8: [
            year,"Employment Status By Disability Status","Employed","Non Disabled",'"Dorchester County, Maryland"',
            dataend+ ",",
          ],
        },

        set9: {
          url9:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_027E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat9: [
            year,"Employment Status By Education","Employed","Bachelor's or Higher",'"Dorchester County, Maryland"',
            dataend+ ",",
          ],
        },

        set10: {
          url10:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_028E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat10: [
            year,"Employment Status By Education","Unemployed","Bachelor's or Higher",'"Dorchester County, Maryland"',
            dataend+ ",",
          ],
        },

        set11: {
          url11:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_029E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat11: [
            year,"Employment Status By Education","NIL","Bachelor's or Higher",'"Dorchester County, Maryland"',
            dataend+ ",",
          ],
        },

        set12: {
          url12:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_013E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat12: [
            year,"Employment Status By Education","Employed","Highschool",'"Dorchester County, Maryland"',
            dataend+ ",",
          ],
        },

        set13: {
          url13:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_014E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat13: [
            year,"Employment Status By Education","Unemployed","Highschool",'"Dorchester County, Maryland"',
            dataend+ ",",
          ],
        },

        set14: {
          url14:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_015E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat14: [
            year,"Employment Status By Education","NIL","Highschool",'"Dorchester County, Maryland"',
            dataend+ ",",
          ],
        },

        set15: {
          url15:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S1701_C02_028E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat15: [
            year,"Employment Status By Poverty Status","Employed","Below Poverty",'"Dorchester County, Maryland"',
            dataend + ",",
          ],
        },

        set16: {
          url16:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S1701_C02_031E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat16: [
            year,"Employment Status By Poverty Status","Unemployed","Below Poverty",'"Dorchester County, Maryland"',
            dataend+ ",",
          ],
        },

        set17: {
          url17:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_004E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat17: [
            year,"Employment Status By Disability Status","Employed","Disabled",'"Dorchester County, Maryland"',
            dataend+ ",,,,",
          ],
        },


        set18: {
          url18:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_006E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat18: [
            year,"Employment Status By Education","Employed","Less than Highschool",'"Dorchester County, Maryland"',
            dataend+",",
          ],
        },

        set19: {
          url19:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_007E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat19: [
            year,"Employment Status By Education","Unemployed","Less than Highschool",'"Dorchester County, Maryland"',
            dataend+ ",",
          ],
        },

        set20: {
          url20:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_008E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat20: [
            year,"Employment Status By Education","NIL","Less than Highschool",'"Dorchester County, Maryland"',
            dataend+ ",",
          ],
        },

        set21: {
          url21:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat21: [
            year,"Unemployment By Veteran Status,","Non Veteran",'"Dorchester County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set22: {
          url22:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat22: [
            year,"Unemployment By Veteran Status,","Veteran",'"Dorchester County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set23: {
          url23:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_020E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat23: [
            year,"Employment Status By Education","Employed","Some College",'"Dorchester County, Maryland"',
            dataend+ ",",
          ],
        },

        set24: {
          url24:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_021E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat24: [
            year,"Employment Status By Education","Unemployed","Some College",'"Dorchester County, Maryland"',
            dataend+ ",",
          ],
        },

        set25: {
          url25:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_022E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat25: [
            year,"Employment Status By Education","NIL","Some College",'"Dorchester County, Maryland"',
            dataend+ ",",
          ],
        },

        set26: {
          url26:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat26: [
            year,"Unemployment By Race,","Asian",'"Dorchester County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },


        set27: {
          url27:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat27: [
            year,"Unemployment By Race,","White",'"Dorchester County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set28: {
          url28:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:019&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat28: [
            year,"Unemployment By Race,","Black",'"Dorchester County, Maryland"',
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
