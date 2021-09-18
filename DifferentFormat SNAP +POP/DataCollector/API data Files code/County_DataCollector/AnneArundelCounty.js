//ACS Data
// The table or array that will be converted to the excel spreadsheet
var results = [

  ["2015Q3,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,317,",,,,,"],
  ["2015Q4,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,362,",,,,,"],
  ["2015Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.120035745660537,",",0.120035745660537/100,",,,,,"],
  ["2015Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.137674517663793,",",0.137674517663793/100,",,,,,"],

  ["2016Q1,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,259,",,,,,"],
  ["2016Q2,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,266,",,,,,"],
  ["2016Q3,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,284,",,,,,"],
  ["2016Q4,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,279,",,,,,"],
  ["2016Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.100251984718346,",",0.100251984718346/100,",,,,,"],
  ["2016Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.10047631818508,",",0.10047631818508/100,",,,,,"],
  ["2016Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.105598584086591,",",0.105598584086591/100,",,,,,"],
  ["2016Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.103967535298655,",",0.103967535298655/100,",,,,,"],
  
  ["2017Q1,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,231,",,,,,"],
  ["2017Q2,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,263,",,,,,"],
  ["2017Q3,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,261,",,,,,"],
  ["2017Q4,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,309,",,,,,"],
  ["2017Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.0892557001935805,",",0.0892557001935805/100,",,,,,"],
  ["2017Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.100351420754811,",",0.100351420754811/100,",,,,,"],
  ["2017Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.0975861450107681,",",0.0975861450107681/100,",,,,,"],
  ["2017Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.115804070007121,",",0.115804070007121/100,",,,,,"],
  
  ["2018Q1,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,249,",,,,,"],
  ["2018Q2,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,222,",,,,,"],
  ["2018Q3,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,224,",,,,,"],
  ["2018Q4,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,249,",,,,,"],  
  ["2018Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.0959190119956548,",",0.0959190119956548/100,",,,,,"],
  ["2018Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.0838229297246681,",",0.0838229297246681/100,",,,,,"],
  ["2018Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.0825903885435332,",",0.0825903885435332/100,",,,,,"],
  ["2018Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.0919840856449414,",",0.0919840856449414/100,",,,,,"],
  
  ["2019Q1,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,211,",,,,,"],
  ["2019Q2,","TANF Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,218,",,,,,"],
  ["2019Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.0800157756221132,",",0.0800157756221132/100,",,,,,"],
  ["2019Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.0812695951059301,",",0.0812695951059301/100,",,,,,"],

   
  ["2016Q3,","TANF Participants in Workforce Service "+",,,"+"\"Anne Arundel County, Maryland\"",",",,9,",,,,,"],
  ["2016Q4,","TANF Participants in Workforce Service "+",,,"+"\"Anne Arundel County, Maryland\"",",",,16,",,,,,"],
  ["2016Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",1.04408352668213,",",0.917431193/100,",",,",",",,,,"],
  ["2016Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",1.96560196560197,",",1.96560196560197/100,",",,",",",,,,"],
  
  ["2017Q1,","TANF Participants in Workforce Service "+",,,"+"\"Anne Arundel County, Maryland\"",",",,16,",,,,,"],
  ["2017Q2,","TANF Participants in Workforce Service "+",,,"+"\"Anne Arundel County, Maryland\"",",",,15,",,,,,"],
  ["2017Q3,","TANF Participants in Workforce Service "+",,,"+"\"Anne Arundel County, Maryland\"",",",,8,",,,,,"],
  ["2017Q4,","TANF Participants in Workforce Service "+",,,"+"\"Anne Arundel County, Maryland\"",",",,4,",,,,,"],
  ["2017Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",1.76211453744493,",",1.76211453744493/100,",",,",",",,,,"],
  ["2017Q2,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",1.50753768844221,",",1.50753768844221/100,",",,",",",,,,"],
  ["2017Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.78125,",",0.78125/100,",",,",",",,,,"],
  ["2017Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.453001132502831,",",0.453001132502831/100,",",,",",",,,,"],
  
  ["2018Q1,","TANF Participants in Workforce Service "+",,,"+"\"Anne Arundel County, Maryland\"",",",,8,",,,,,"],
  ["2018Q2,","TANF Participants in Workforce Service "+",,,"+"\"Anne Arundel County, Maryland\"",",",,7,",,,,,"],
  ["2018Q3,","TANF Participants in Workforce Service "+",,,"+"\"Anne Arundel County, Maryland\"",",",,5,",,,,,"],
  ["2018Q4,","TANF Participants in Workforce Service "+",,,"+"\"Anne Arundel County, Maryland\"",",",,6,",,,,,"],
  
  ["2018Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",1.08843537414966,",",1.08843537414966/100,",",,",",",,,,"],
  ["2018Q2,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.838323353293413,",",0.838323353293413/100,",",,",",",,,,"],
  ["2018Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.657894736842105,",",0.657894736842105/100,",",,",",",,,,"],
  ["2018Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.884955752212389,",",0.884955752212389/100,",",,",",",,,,"],
  
  ["2019Q1,","TANF Participants in Workforce Service "+",,,"+"\"Anne Arundel County, Maryland\"",",",,6,",,,,,"],
  ["2019Q2,","TANF Participants in Workforce Service "+",,,"+"\"Anne Arundel County, Maryland\"",",",,1,",,,,,"],
  ["2019Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.696055684454756,",",0.696055684454756/100,",",,",",",,,,"],
  ["2019Q2,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Anne Arundel County, Maryland\"",",",0.50761421319797,",",0.50761421319797/100,",",,",",",,,,"], 
  

  ["2017,","SNAP Recipient Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,16136,",,,,,"],
  ["2018,","SNAP Recipient Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,14841,",,,,,"],
  ["2019,","SNAP Recipient Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,14881,",,,,,"],
  ["2020,","SNAP Recipient Workers"+",,,"+"\"Anne Arundel County, Maryland\"",",",,14103,",,,,,"],

  ["2017,","SNAP Recipient Workers by Percentage"+",,,"+"\"Anne Arundel County, Maryland\"",",",,0.06333,",",6.3327,",,,,"],
  ["2018,","SNAP Recipient Workers by Percentage"+",,,"+"\"Anne Arundel County, Maryland\"",",",,0.06223,",",6.2231,",,,,"],
  ["2019,","SNAP Recipient Workers by Percentage"+",,,"+"\"Anne Arundel County, Maryland\"",",",,0.06188,",",6.1878,",,,,"],
  ["2020,","SNAP Recipient Workers by Percentage"+",,,"+"\"Anne Arundel County, Maryland\"",",",,0.06126,",",6.126,",,,,"],

  ["2015,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Anne Arundel County, Maryland\"",",",13704,",,,,"],
  ["2016,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Anne Arundel County, Maryland\"",",",14043,",,,,"],
  ["2017,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Anne Arundel County, Maryland\"",",",15180,",,,,"],
  ["2018,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Anne Arundel County, Maryland\"",",",15381,",,,,"],
  ["2019,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Anne Arundel County, Maryland\"",",",15955,",,,,"],

  ["2015,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Anne Arundel County, Maryland\"",",",267609,",,,,"],
  ["2016,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Anne Arundel County, Maryland\"",",",267940,",,,,"],
  ["2017,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Anne Arundel County, Maryland\"",",",269133,",,,,"],
  ["2018,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Anne Arundel County, Maryland\"",",",268500,",,,,"],
  ["2019,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Anne Arundel County, Maryland\"",",",266958,",,,,"],

["2015,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Anne Arundel County, Maryland\"",",",10773,",,,,"],
["2016,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Anne Arundel County, Maryland\"",",",11387,",,,,"],
["2017,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Anne Arundel County, Maryland\"",",",10924,",,,,"],
["2018,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Anne Arundel County, Maryland\"",",",11006,",,,,"],
["2019,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Anne Arundel County, Maryland\"",",",9853,",,,,"],

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
              "/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat1: [
              year,"Median Household Income,,",'"Anne Arundel County, Maryland"',
              dataend+",",
              ",,,,",
            ],
          },
          set2: {
            url2:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/profile?get=NAME,DP05_0001E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat2: [
              year,"Total Population,,",'"Anne Arundel County, Maryland"',
              dataend,
              ",,,,",
            ],
          },


          set3: {
            url3:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat3: [
              year,"Unemployment By Gender,","Male",'"Anne Arundel County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set4: {
            url4:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat4: [
              year,"Employment Status By Disability Status","Unemployed","Disabled",'"Anne Arundel County, Maryland"',
              dataend+ ",,,,",
            ],
          },

          set5: {
            url5:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_019E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat5: [
              year,"Unemployment By Race,","Hispanic",'"Anne Arundel County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set6: {
            url6:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat6: [
              year,"Unemployment By Gender,","Female",'"Anne Arundel County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set7: {
            url7:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat7: [
              year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Anne Arundel County, Maryland"',
              dataend+ ",,,,",
            ],
          },

          set8: {
            url8:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat8: [
              year,"Employment Status By Disability Status","Employed","Non Disabled",'"Anne Arundel County, Maryland"',
              dataend+ ",",
            ],
          },

          set9: {
            url9:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_027E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat9: [
              year,"Employment Status By Education","Employed","Bachelor's or Higher",'"Anne Arundel County, Maryland"',
              dataend+ ",",
            ],
          },

          set10: {
            url10:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_028E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat10: [
              year,"Employment Status By Education","Unemployed","Bachelor's or Higher",'"Anne Arundel County, Maryland"',
              dataend+ ",",
            ],
          },

          set11: {
            url11:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_029E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat11: [
              year,"Employment Status By Education","NIL","Bachelor's or Higher",'"Anne Arundel County, Maryland"',
              dataend+ ",",
            ],
          },

          set12: {
            url12:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_013E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat12: [
              year,"Employment Status By Education","Employed","Highschool",'"Anne Arundel County, Maryland"',
              dataend+ ",",
            ],
          },

          set13: {
            url13:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_014E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat13: [
              year,"Employment Status By Education","Unemployed","Highschool",'"Anne Arundel County, Maryland"',
              dataend+ ",",
            ],
          },

          set14: {
            url14:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_015E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat14: [
              year,"Employment Status By Education","NIL","Highschool",'"Anne Arundel County, Maryland"',
              dataend+ ",",
            ],
          },

          set15: {
            url15:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_028E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat15: [
              year,"Employment Status By Poverty Status","Employed","Below Poverty",'"Anne Arundel County, Maryland"',
              dataend + ",",
            ],
          },

          set16: {
            url16:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_031E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat16: [
              year,"Employment Status By Poverty Status","Unemployed","Below Poverty",'"Anne Arundel County, Maryland"',
              dataend+ ",",
            ],
          },

          set17: {
            url17:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_004E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat17: [
              year,"Employment Status By Disability Status","Employed","Disabled",'"Anne Arundel County, Maryland"',
              dataend+ ",,,,",
            ],
          },


          set18: {
            url18:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_006E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat18: [
              year,"Employment Status By Education","Employed","Less than Highschool",'"Anne Arundel County, Maryland"',
              dataend+",",
            ],
          },

          set19: {
            url19:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_007E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat19: [
              year,"Employment Status By Education","Unemployed","Less than Highschool",'"Anne Arundel County, Maryland"',
              dataend+ ",",
            ],
          },

          set20: {
            url20:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_008E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat20: [
              year,"Employment Status By Education","NIL","Less than Highschool",'"Anne Arundel County, Maryland"',
              dataend+ ",",
            ],
          },

          set21: {
            url21:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat21: [
              year,"Unemployment By Veteran Status,","Non Veteran",'"Anne Arundel County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set22: {
            url22:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat22: [
              year,"Unemployment By Veteran Status,","Veteran",'"Anne Arundel County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set23: {
            url23:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_020E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat23: [
              year,"Employment Status By Education","Employed","Some College",'"Anne Arundel County, Maryland"',
              dataend+ ",",
            ],
          },

          set24: {
            url24:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_021E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat24: [
              year,"Employment Status By Education","Unemployed","Some College",'"Anne Arundel County, Maryland"',
              dataend+ ",",
            ],
          },

          set25: {
            url25:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_022E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat25: [
              year,"Employment Status By Education","NIL","Some College",'"Anne Arundel County, Maryland"',
              dataend+ ",",
            ],
          },

          set26: {
            url26:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat26: [
              year,"Unemployment By Race,","Asian",'"Anne Arundel County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },


          set27: {
            url27:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat27: [
              year,"Unemployment By Race,","White",'"Anne Arundel County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set28: {
            url28:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat28: [
              year,"Unemployment By Race,","Black",'"Anne Arundel County, Maryland"',
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
            "/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat1: [
            year,"Median Household Income,,",'"Anne Arundel County, Maryland"',
            dataend+",",
            ",,,,",
          ],
        },
        set2: {
          url2:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/profile?get=NAME,DP05_0001E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat2: [
            year,"Total Population,,",'"Anne Arundel County, Maryland"',
            dataend,
            ",,,,",
          ],
        },


        set3: {
          url3:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat3: [
            year,"Unemployment By Gender,","Male",'"Anne Arundel County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set4: {
          url4:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat4: [
            year,"Employment Status By Disability Status","Unemployed","Disabled",'"Anne Arundel County, Maryland"',
            dataend+ ",,,,",
          ],
        },
//adjusted to remove the extra data points for non disabled unemplyoment rate

set5: {
  url5:
    "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_019E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
  arrayformat5: [
    year,"Unemployment By Race,","Hispanic",'"Anne Arundel County, Maryland"',
    dataend,
    dataend / 100,
  ],
},

        set6: {
          url6:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat6: [
            year,"Unemployment By Gender,","Female",'"Anne Arundel County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },


        set7: {
          url7:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat7: [
            year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Anne Arundel County, Maryland"',
            dataend+ ",,,,",
          ],
        },

        set8: {
          url8:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat8: [
            year,"Employment Status By Disability Status","Employed","Non Disabled",'"Anne Arundel County, Maryland"',
            dataend+ ",",
          ],
        },

        set9: {
          url9:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_027E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat9: [
            year,"Employment Status By Education","Employed","Bachelor's or Higher",'"Anne Arundel County, Maryland"',
            dataend+ ",",
          ],
        },

        set10: {
          url10:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_028E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat10: [
            year,"Employment Status By Education","Unemployed","Bachelor's or Higher",'"Anne Arundel County, Maryland"',
            dataend+ ",",
          ],
        },

        set11: {
          url11:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_029E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat11: [
            year,"Employment Status By Education","NIL","Bachelor's or Higher",'"Anne Arundel County, Maryland"',
            dataend+ ",",
          ],
        },

        set12: {
          url12:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_013E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat12: [
            year,"Employment Status By Education","Employed","Highschool",'"Anne Arundel County, Maryland"',
            dataend+ ",",
          ],
        },

        set13: {
          url13:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_014E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat13: [
            year,"Employment Status By Education","Unemployed","Highschool",'"Anne Arundel County, Maryland"',
            dataend+ ",",
          ],
        },

        set14: {
          url14:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_015E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat14: [
            year,"Employment Status By Education","NIL","Highschool",'"Anne Arundel County, Maryland"',
            dataend+ ",",
          ],
        },

        set15: {
          url15:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S1701_C02_028E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat15: [
            year,"Employment Status By Poverty Status","Employed","Below Poverty",'"Anne Arundel County, Maryland"',
            dataend + ",",
          ],
        },

        set16: {
          url16:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S1701_C02_031E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat16: [
            year,"Employment Status By Poverty Status","Unemployed","Below Poverty",'"Anne Arundel County, Maryland"',
            dataend+ ",",
          ],
        },

        set17: {
          url17:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_004E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat17: [
            year,"Employment Status By Disability Status","Employed","Disabled",'"Anne Arundel County, Maryland"',
            dataend+ ",,,,",
          ],
        },


        set18: {
          url18:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_006E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat18: [
            year,"Employment Status By Education","Employed","Less than Highschool",'"Anne Arundel County, Maryland"',
            dataend+",",
          ],
        },

        set19: {
          url19:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_007E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat19: [
            year,"Employment Status By Education","Unemployed","Less than Highschool",'"Anne Arundel County, Maryland"',
            dataend+ ",",
          ],
        },

        set20: {
          url20:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_008E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat20: [
            year,"Employment Status By Education","NIL","Less than Highschool",'"Anne Arundel County, Maryland"',
            dataend+ ",",
          ],
        },

        set21: {
          url21:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat21: [
            year,"Unemployment By Veteran Status,","Non Veteran",'"Anne Arundel County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set22: {
          url22:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat22: [
            year,"Unemployment By Veteran Status,","Veteran",'"Anne Arundel County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set23: {
          url23:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_020E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat23: [
            year,"Employment Status By Education","Employed","Some College",'"Anne Arundel County, Maryland"',
            dataend+ ",",
          ],
        },

        set24: {
          url24:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_021E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat24: [
            year,"Employment Status By Education","Unemployed","Some College",'"Anne Arundel County, Maryland"',
            dataend+ ",",
          ],
        },

        set25: {
          url25:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_022E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat25: [
            year,"Employment Status By Education","NIL","Some College",'"Anne Arundel County, Maryland"',
            dataend+ ",",
          ],
        },

        set26: {
          url26:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat26: [
            year,"Unemployment By Race,","Asian",'"Anne Arundel County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },


        set27: {
          url27:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat27: [
            year,"Unemployment By Race,","White",'"Anne Arundel County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set28: {
          url28:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:003&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat28: [
            year,"Unemployment By Race,","Black",'"Anne Arundel County, Maryland"',
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
