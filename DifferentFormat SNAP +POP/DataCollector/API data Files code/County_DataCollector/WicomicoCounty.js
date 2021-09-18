//ACS Data
// The table or array that will be converted to the excel spreadsheet
var results = [

  ["2015Q3,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,165,",,,,,"],
  ["2015Q4,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,178,",,,,,"],
  ["2015Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.38150289017341,",",0.38150289017341/100,",,,,,"],
  ["2015Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.403399433427762,",",0.403399433427762/100,",,,,,"],

  ["2016Q1,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,136,",,,,,"],
  ["2016Q2,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,173,",,,,,"],
  ["2016Q3,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,163,",,,,,"],
  ["2016Q4,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,155,",,,,,"],
  ["2016Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.316021842686186,",",0.316021842686186/100,",,,,,"],
  ["2016Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.392869308504599,",",0.392869308504599/100,",,,,,"],
  ["2016Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.377673254709331,",",0.377673254709331/100,",,,,,"],
  ["2016Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.351155414589941,",",0.351155414589941/100,",,,,,"],
  
  ["2017Q1,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,124,",,,,,"],
  ["2017Q2,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,150,",,,,,"],
  ["2017Q3,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,131,",,,,,"],
  ["2017Q4,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,141,",,,,,"],
  ["2017Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.289354552667196,",",0.289354552667196/100,",,,,,"],
  ["2017Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.339443312966735,",",0.339443312966735/100,",,,,,"],
  ["2017Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.301926800036877,",",0.301926800036877/100,",,,,,"],
  ["2017Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.317982950701367,",",0.317982950701367/100,",,,,,"],
  
  ["2018Q1,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,103,",,,,,"],
  ["2018Q2,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,126,",,,,,"],
  ["2018Q3,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,140,",,,,,"],
  ["2018Q4,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,132,",,,,,"],  
  ["2018Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.241048443716359,",",0.241048443716359/100,",,,,,"],
  ["2018Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.284174203297323,",",0.284174203297323/100,",,,,,"],
  ["2018Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.320051208193311,",",0.320051208193311/100,",,,,,"],
  ["2018Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.298311826255961,",",0.298311826255961/100,",,,,,"],
  
  ["2019Q1,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,99,",,,,,"],
  ["2019Q2,","TANF Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,110,",,,,,"],
  ["2019Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.228215767634855,",",0.228215767634855/100,",,,,,"],
  ["2019Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",0.248211747185053,",",0.248211747185053/100,",,,,,"],

   
  ["2016Q3,","TANF Participants in Workforce Service "+",,,"+"\"Wicomico County, Maryland\"",",",,45,",,,,,"],
  ["2016Q4,","TANF Participants in Workforce Service "+",,,"+"\"Wicomico County, Maryland\"",",",,18,",,,,,"],
  ["2016Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",7.17703349282297,",",7.17703349282297/100,",",,",",",,,,"],
  ["2016Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",3.76569037656904,",",3.76569037656904/100,",",,",",",,,,"],
  
  ["2017Q1,","TANF Participants in Workforce Service "+",,,"+"\"Wicomico County, Maryland\"",",",,29,",,,,,"],
  ["2017Q2,","TANF Participants in Workforce Service "+",,,"+"\"Wicomico County, Maryland\"",",",,22,",,,,,"],
  ["2017Q3,","TANF Participants in Workforce Service "+",,,"+"\"Wicomico County, Maryland\"",",",,17,",,,,,"],
  ["2017Q4,","TANF Participants in Workforce Service "+",,,"+"\"Wicomico County, Maryland\"",",",,14,",,,,,"],
  ["2017Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",4.98281786941581,",",4.98281786941581/100,",",,",",",,,,"],
  ["2017Q2,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",4.55486542443064,",",4.55486542443064/100,",",,",",",,,,"],
  ["2017Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",3.7037037037037,",",3.7037037037037/100,",",,",",",,,,"],
  ["2017Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",2.74509803921569,",",2.74509803921569/100,",",,",",",,,,"],
  
  ["2018Q1,","TANF Participants in Workforce Service "+",,,"+"\"Wicomico County, Maryland\"",",",,17,",,,,,"],
  ["2018Q2,","TANF Participants in Workforce Service "+",,,"+"\"Wicomico County, Maryland\"",",",,13,",,,,,"],
  ["2018Q3,","TANF Participants in Workforce Service "+",,,"+"\"Wicomico County, Maryland\"",",",,15,",,,,,"],
  ["2018Q4,","TANF Participants in Workforce Service "+",,,"+"\"Wicomico County, Maryland\"",",",,19,",,,,,"],
  
  ["2018Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",3.6480686695279,",",3.6480686695279/100,",",,",",",,,,"],
  ["2018Q2,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",3.47593582887701,",",3.47593582887701/100,",",,",",",,,,"],
  ["2018Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",3.64077669902913,",",3.64077669902913/100,",",,",",",,,,"],
  ["2018Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",4.96083550913838,",",4.96083550913838/100,",",,",",",,,,"],
  
  ["2019Q1,","TANF Participants in Workforce Service "+",,,"+"\"Wicomico County, Maryland\"",",",,19,",,,,,"],
  ["2019Q2,","TANF Participants in Workforce Service "+",,,"+"\"Wicomico County, Maryland\"",",",,2,",,,,,"],
  ["2019Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",3.55140186915888,",",3.55140186915888/100,",",,",",",,,,"],
  ["2019Q2,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Wicomico County, Maryland\"",",",1.81818181818182,",",1.81818181818182/100,",",,",",",,,,"], 
  
  

  ["2017,","SNAP Recipient Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,8062,",,,,,"],
  ["2018,","SNAP Recipient Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,7730,",,,,,"],
  ["2019,","SNAP Recipient Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,7677,",,,,,"],
  ["2020,","SNAP Recipient Workers"+",,,"+"\"Wicomico County, Maryland\"",",",,7582,",,,,,"],

  ["2017,","SNAP Recipient Workers by Percentage"+",,,"+"\"Wicomico County, Maryland\"",",",,3.164/100,",",3.164,",,,,"],
  ["2018,","SNAP Recipient Workers by Percentage"+",,,"+"\"Wicomico County, Maryland\"",",",,3.2413/100,",",3.2413,",,,,"],
  ["2019,","SNAP Recipient Workers by Percentage"+",,,"+"\"Wicomico County, Maryland\"",",",,3.1923/100,",",3.1923,",,,,"],
  ["2020,","SNAP Recipient Workers by Percentage"+",,,"+"\"Wicomico County, Maryland\"",",",,3.2935/100,",",3.2935,",,,,"],
  
  
  

  ["2015,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Wicomico County, Maryland\"",",",2432,",,,,"],
  ["2016,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Wicomico County, Maryland\"",",",2143,",,,,"],
  ["2017,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Wicomico County, Maryland\"",",",2360,",,,,"],
  ["2018,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Wicomico County, Maryland\"",",",2537,",,,,"],
  ["2019,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Wicomico County, Maryland\"",",",2599,",,,,"],

  ["2015,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Wicomico County, Maryland\"",",",46563,",,,,"],
  ["2016,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Wicomico County, Maryland\"",",",47134,",,,,"],
  ["2017,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Wicomico County, Maryland\"",",",47216,",,,,"],
  ["2018,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Wicomico County, Maryland\"",",",46497,",,,,"],
  ["2019,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Wicomico County, Maryland\"",",",45940,",,,,"],

["2015,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Wicomico County, Maryland\"",",",5340,",,,,"],
["2016,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Wicomico County, Maryland\"",",",5689,",,,,"],
["2017,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Wicomico County, Maryland\"",",",5507,",,,,"],
["2018,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Wicomico County, Maryland\"",",",5180,",,,,"],
["2019,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Wicomico County, Maryland\"",",",5351,",,,,"],

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
              "/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat1: [
              year,"Median Household Income,,",'"Wicomico County, Maryland"',
              dataend+",",
              ",,,,",
            ],
          },
          set2: {
            url2:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/profile?get=NAME,DP05_0001E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat2: [
              year,"Total Population,,",'"Wicomico County, Maryland"',
              dataend,
              ",,,,",
            ],
          },


          set3: {
            url3:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat3: [
              year,"Unemployment By Gender,","Male",'"Wicomico County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set4: {
            url4:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat4: [
              year,"Employment Status By Disability Status","Unemployed","Disabled",'"Wicomico County, Maryland"',
              dataend+ ",,,,",
            ],
          },

          set5: {
            url5:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_019E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat5: [
              year,"Unemployment By Race,","Hispanic",'"Wicomico County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set6: {
            url6:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat6: [
              year,"Unemployment By Gender,","Female",'"Wicomico County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set7: {
            url7:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat7: [
              year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Wicomico County, Maryland"',
              dataend+ ",,,,",
            ],
          },

          set8: {
            url8:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat8: [
              year,"Employment Status By Disability Status","Employed","Non Disabled",'"Wicomico County, Maryland"',
              dataend+ ",",
            ],
          },

          set9: {
            url9:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_027E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat9: [
              year,"Employment Status By Education","Employed","Bachelor's or Higher",'"Wicomico County, Maryland"',
              dataend+ ",",
            ],
          },

          set10: {
            url10:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_028E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat10: [
              year,"Employment Status By Education","Unemployed","Bachelor's or Higher",'"Wicomico County, Maryland"',
              dataend+ ",",
            ],
          },

          set11: {
            url11:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_029E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat11: [
              year,"Employment Status By Education","NIL","Bachelor's or Higher",'"Wicomico County, Maryland"',
              dataend+ ",",
            ],
          },

          set12: {
            url12:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_013E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat12: [
              year,"Employment Status By Education","Employed","Highschool",'"Wicomico County, Maryland"',
              dataend+ ",",
            ],
          },

          set13: {
            url13:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_014E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat13: [
              year,"Employment Status By Education","Unemployed","Highschool",'"Wicomico County, Maryland"',
              dataend+ ",",
            ],
          },

          set14: {
            url14:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_015E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat14: [
              year,"Employment Status By Education","NIL","Highschool",'"Wicomico County, Maryland"',
              dataend+ ",",
            ],
          },

          set15: {
            url15:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_028E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat15: [
              year,"Employment Status By Poverty Status","Employed","Below Poverty",'"Wicomico County, Maryland"',
              dataend + ",",
            ],
          },

          set16: {
            url16:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_031E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat16: [
              year,"Employment Status By Poverty Status","Unemployed","Below Poverty",'"Wicomico County, Maryland"',
              dataend+ ",",
            ],
          },

          set17: {
            url17:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_004E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat17: [
              year,"Employment Status By Disability Status","Employed","Disabled",'"Wicomico County, Maryland"',
              dataend+ ",,,,",
            ],
          },


          set18: {
            url18:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_006E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat18: [
              year,"Employment Status By Education","Employed","Less than Highschool",'"Wicomico County, Maryland"',
              dataend+",",
            ],
          },

          set19: {
            url19:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_007E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat19: [
              year,"Employment Status By Education","Unemployed","Less than Highschool",'"Wicomico County, Maryland"',
              dataend+ ",",
            ],
          },

          set20: {
            url20:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_008E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat20: [
              year,"Employment Status By Education","NIL","Less than Highschool",'"Wicomico County, Maryland"',
              dataend+ ",",
            ],
          },

          set21: {
            url21:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat21: [
              year,"Unemployment By Veteran Status,","Non Veteran",'"Wicomico County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set22: {
            url22:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat22: [
              year,"Unemployment By Veteran Status,","Veteran",'"Wicomico County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set23: {
            url23:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_020E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat23: [
              year,"Employment Status By Education","Employed","Some College",'"Wicomico County, Maryland"',
              dataend+ ",",
            ],
          },

          set24: {
            url24:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_021E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat24: [
              year,"Employment Status By Education","Unemployed","Some College",'"Wicomico County, Maryland"',
              dataend+ ",",
            ],
          },

          set25: {
            url25:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_022E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat25: [
              year,"Employment Status By Education","NIL","Some College",'"Wicomico County, Maryland"',
              dataend+ ",",
            ],
          },

          set26: {
            url26:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat26: [
              year,"Unemployment By Race,","Asian",'"Wicomico County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },


          set27: {
            url27:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat27: [
              year,"Unemployment By Race,","White",'"Wicomico County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set28: {
            url28:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat28: [
              year,"Unemployment By Race,","Black",'"Wicomico County, Maryland"',
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
            "/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat1: [
            year,"Median Household Income,,",'"Wicomico County, Maryland"',
            dataend+",",
            ",,,,",
          ],
        },
        set2: {
          url2:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/profile?get=NAME,DP05_0001E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat2: [
            year,"Total Population,,",'"Wicomico County, Maryland"',
            dataend,
            ",,,,",
          ],
        },


        set3: {
          url3:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat3: [
            year,"Unemployment By Gender,","Male",'"Wicomico County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set4: {
          url4:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat4: [
            year,"Employment Status By Disability Status","Unemployed","Disabled",'"Wicomico County, Maryland"',
            dataend+ ",,,,",
          ],
        },
//adjusted to remove the extra data points for non disabled unemplyoment rate

set5: {
  url5:
    "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_019E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
  arrayformat5: [
    year,"Unemployment By Race,","Hispanic",'"Wicomico County, Maryland"',
    dataend,
    dataend / 100,
  ],
},

        set6: {
          url6:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat6: [
            year,"Unemployment By Gender,","Female",'"Wicomico County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },


        set7: {
          url7:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat7: [
            year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Wicomico County, Maryland"',
            dataend+ ",,,,",
          ],
        },

        set8: {
          url8:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat8: [
            year,"Employment Status By Disability Status","Employed","Non Disabled",'"Wicomico County, Maryland"',
            dataend+ ",",
          ],
        },

        set9: {
          url9:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_027E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat9: [
            year,"Employment Status By Education","Employed","Bachelor's or Higher",'"Wicomico County, Maryland"',
            dataend+ ",",
          ],
        },

        set10: {
          url10:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_028E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat10: [
            year,"Employment Status By Education","Unemployed","Bachelor's or Higher",'"Wicomico County, Maryland"',
            dataend+ ",",
          ],
        },

        set11: {
          url11:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_029E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat11: [
            year,"Employment Status By Education","NIL","Bachelor's or Higher",'"Wicomico County, Maryland"',
            dataend+ ",",
          ],
        },

        set12: {
          url12:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_013E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat12: [
            year,"Employment Status By Education","Employed","Highschool",'"Wicomico County, Maryland"',
            dataend+ ",",
          ],
        },

        set13: {
          url13:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_014E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat13: [
            year,"Employment Status By Education","Unemployed","Highschool",'"Wicomico County, Maryland"',
            dataend+ ",",
          ],
        },

        set14: {
          url14:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_015E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat14: [
            year,"Employment Status By Education","NIL","Highschool",'"Wicomico County, Maryland"',
            dataend+ ",",
          ],
        },

        set15: {
          url15:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S1701_C02_028E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat15: [
            year,"Employment Status By Poverty Status","Employed","Below Poverty",'"Wicomico County, Maryland"',
            dataend + ",",
          ],
        },

        set16: {
          url16:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S1701_C02_031E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat16: [
            year,"Employment Status By Poverty Status","Unemployed","Below Poverty",'"Wicomico County, Maryland"',
            dataend+ ",",
          ],
        },

        set17: {
          url17:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_004E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat17: [
            year,"Employment Status By Disability Status","Employed","Disabled",'"Wicomico County, Maryland"',
            dataend+ ",,,,",
          ],
        },


        set18: {
          url18:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_006E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat18: [
            year,"Employment Status By Education","Employed","Less than Highschool",'"Wicomico County, Maryland"',
            dataend+",",
          ],
        },

        set19: {
          url19:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_007E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat19: [
            year,"Employment Status By Education","Unemployed","Less than Highschool",'"Wicomico County, Maryland"',
            dataend+ ",",
          ],
        },

        set20: {
          url20:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_008E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat20: [
            year,"Employment Status By Education","NIL","Less than Highschool",'"Wicomico County, Maryland"',
            dataend+ ",",
          ],
        },

        set21: {
          url21:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat21: [
            year,"Unemployment By Veteran Status,","Non Veteran",'"Wicomico County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set22: {
          url22:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat22: [
            year,"Unemployment By Veteran Status,","Veteran",'"Wicomico County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set23: {
          url23:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_020E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat23: [
            year,"Employment Status By Education","Employed","Some College",'"Wicomico County, Maryland"',
            dataend+ ",",
          ],
        },

        set24: {
          url24:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_021E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat24: [
            year,"Employment Status By Education","Unemployed","Some College",'"Wicomico County, Maryland"',
            dataend+ ",",
          ],
        },

        set25: {
          url25:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_022E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat25: [
            year,"Employment Status By Education","NIL","Some College",'"Wicomico County, Maryland"',
            dataend+ ",",
          ],
        },

        set26: {
          url26:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat26: [
            year,"Unemployment By Race,","Asian",'"Wicomico County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },


        set27: {
          url27:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat27: [
            year,"Unemployment By Race,","White",'"Wicomico County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set28: {
          url28:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:045&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat28: [
            year,"Unemployment By Race,","Black",'"Wicomico County, Maryland"',
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
