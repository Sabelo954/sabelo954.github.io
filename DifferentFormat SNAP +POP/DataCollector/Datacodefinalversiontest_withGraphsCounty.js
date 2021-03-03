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
  ["Maryland"+",","2015Q3"+",","TANF Workers"+",,,,,",5546+","],
  ["Maryland"+",","2015Q4"+",","TANF Workers"+",,,,,",5875+","],
  ["Maryland"+",","2016Q1"+",","TANF Workers"+",,,,,",4316+","],
  ["Maryland"+",","2016Q2"+",","TANF Workers"+",,,,,",4843+","],
  ["Maryland"+",","2016Q3"+",","TANF Workers"+",,,,,",5179+","],
  ["Maryland"+",","2016Q4"+",","TANF Workers"+",,,,,",5305+","],
  ["Maryland"+",","2017Q1"+",","TANF Workers"+",,,,,",4026+","],
  ["Maryland"+",","2017Q2"+",","TANF Workers"+",,,,,",4361+","],
  ["Maryland"+",","2017Q3"+",","TANF Workers"+",,,,,",4037+","],
  ["Maryland"+",","2017Q4"+",","TANF Workers"+",,,,,",4744+","],
  ["Maryland"+",","2018Q1"+",","TANF Workers"+",,,,,",3643+","],
  ["Maryland"+",","2018Q2"+",","TANF Workers"+",,,,,",3775+","],
  ["Maryland"+",","2018Q3"+",","TANF Workers"+",,,,,",3947+","],
  ["Maryland"+",","2018Q4"+",","TANF Workers"+",,,,,",4106+","],
  ["Maryland"+",","2019Q1"+",","TANF Workers"+",,,,,",2968+","],
  ["Maryland"+",","2019Q2"+",","TANF Workers"+",,,,,",3397+","],
  ["Maryland"+",","2016Q3"+",","TANF Participants in Workforce Service "+",,,,,",391+","],
  ["Maryland"+",","2016Q4"+",","TANF Participants in Workforce Service "+",,,,,",224+","],
  ["Maryland"+",","2017Q1"+",","TANF Participants in Workforce Service "+",,,,,",265+","],
  ["Maryland"+",","2017Q2"+",","TANF Participants in Workforce Service "+",,,,,",242+","],
  ["Maryland"+",","2017Q3"+",","TANF Participants in Workforce Service "+",,,,,",202+","],
  ["Maryland"+",","2017Q4"+",","TANF Participants in Workforce Service "+",,,,,",168+","],
  ["Maryland"+",","2018Q1"+",","TANF Participants in Workforce Service "+",,,,,",132+","],
  ["Maryland"+",","2018Q2"+",","TANF Participants in Workforce Service "+",,,,,",152+","],
  ["Maryland"+",","2018Q3"+",","TANF Participants in Workforce Service "+",,,,,",153+","],
  ["Maryland"+",","2018Q4"+",","TANF Participants in Workforce Service "+",,,,,",172+","],
  ["Maryland"+",","2019Q1"+",","TANF Participants in Workforce Service "+",,,,,",144+","],
  ["Maryland"+",","2019Q2"+",","TANF Participants in Workforce Service "+",,,,,",37+","],
  ["Maryland"+",","2016Q3"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",3.03054+","],
  ["Maryland"+",","2016Q4"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.85231+","],
  ["Maryland"+",","2017Q1"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.81856+","],
  ["Maryland"+",","2017Q2"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.65436+","],
  ["Maryland"+",","2017Q3"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.38765+","],
  ["Maryland"+",","2017Q4"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.32628+","],
  ["Maryland"+",","2018Q1"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.13188+","],
  ["Maryland"+",","2018Q2"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.33662+","],
  ["Maryland"+",","2018Q4"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.57121+","],
  ["Maryland"+",","2018Q3"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.42804+","],
  ["Maryland"+",","2019Q1"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.11654+","],
  ["Maryland"+",","2019Q2"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.21311+","],
  ["Maryland"+",","2015Q3"+",","Percent of Workers in TANF (%)"+",,,,,",0.226081193+","],
  ["Maryland"+",","2015Q4"+",","Percent of Workers in TANF (%)"+",,,,,",0.236666606+","],
  ["Maryland"+",","2016Q1"+",","Percent of Workers in TANF (%)"+",,,,,",0.178479197+","],
  ["Maryland"+",","2016Q2"+",","Percent of Workers in TANF (%)"+",,,,,",0.195135434+","],
  ["Maryland"+",","2016Q3"+",","Percent of Workers in TANF (%)"+",,,,,",0.208383293+","],
  ["Maryland"+",","2016Q4"+",","Percent of Workers in TANF (%)"+",,,,,",0.211680367+","],
  ["Maryland"+",","2017Q1"+",","Percent of Workers in TANF (%)"+",,,,,",0.164464815+","],
  ["Maryland"+",","2017Q2"+",","Percent of Workers in TANF (%)"+",,,,,",0.174493535+","],
  ["Maryland"+",","2017Q3"+",","Percent of Workers in TANF (%)"+",,,,,",0.16093424+","],
  ["Maryland"+",","2017Q4"+",","Percent of Workers in TANF (%)"+",,,,,",0.18780562+","],
  ["Maryland"+",","2018Q1"+",","Percent of Workers in TANF (%)"+",,,,,",0.147775498+","],
  ["Maryland"+",","2018Q2"+",","Percent of Workers in TANF (%)"+",,,,,",0.14955974+","],
  ["Maryland"+",","2018Q3"+",","Percent of Workers in TANF (%)"+",,,,,",0.155311154+","],
  ["Maryland"+",","2018Q4"+",","Percent of Workers in TANF (%)"+",,,,,",0.161040196+","],
  ["Maryland"+",","2019Q1"+",","Percent of Workers in TANF (%)"+",,,,,",0.118709886+","],
  ["Maryland"+",","2019Q2"+",","Percent of Workers in TANF (%)"+",,,,,",0.133430745+","],
  ["Maryland"+",","2016"+",","New Maryland Apprenticeship Programs"+",,","New Maryland Apprenticeship Programs"+",,,",1+","],
  ["Maryland"+",","2017"+",","New Maryland Apprenticeship Programs"+",,","New Maryland Apprenticeship Programs"+",,,",128+","],
  ["Maryland"+",","2018"+",","New Maryland Apprenticeship Programs"+",,","New Maryland Apprenticeship Programs"+",,,",28+","],
  ["Maryland"+",","FY15"+",","Apprenticeship"+",,","Program Completers"+",,,",1118+","],
  ["Maryland"+",","FY16"+",","Apprenticeship"+",,","Program Completers"+",,,",332+","],
  ["Maryland"+",","FY17"+",","Apprenticeship"+",,","Program Completers"+",,,",1092+","],
  ["Maryland"+",","2016"+",","SNAP Recipient Workers by Percentage"+",,,,,",0.0894+","],
  ["Maryland"+",","2017"+",","SNAP Recipient Workers by Percentage"+",,,,,",0.0886+","],
  ["Maryland"+",","2018"+",","SNAP Recipient Workers by Percentage"+",,,,,",0.0898+","],
  ["Maryland"+",","2016"+",","SNAP Recipient Workers"+",,,,,",271357+","],
  ["Maryland"+",","2017"+",","SNAP Recipient Workers"+",,,,,",271185+","],
  ["Maryland"+",","2018"+",","SNAP Recipient Workers"+",,,,,",275670+","],
  ["Maryland"+",","2016Q3"+",","Service Participants in SNAP"+",,,,,",0.0591+","],
  ["Maryland"+",","2016Q4"+",","Service Participants in SNAP"+",,,,,",0.0466+","],
  ["Maryland,","2016,","Maryland Apprentices,,","Active Apprentices,,,",11821+","],
  ["Maryland,","2016,","Maryland Apprentices,,","New Apprentices,,,",1070+","],
  ["Maryland,","2017,","Maryland Apprentices,,","New Apprentices,,,",2631+","],
  ["Maryland,","2017,","Maryland Apprentices,,","Active Apprentices,,,",9090+","],
  ["Maryland,","2018,","Maryland Apprentices,,","Active Apprentices,,,",8567+","],
  ["Maryland,","2018,","Maryland Apprentices,,","New Apprentices,,,",1904+","],
  ["Maryland"+",", "2013"+",", "Long Term Unemployed"+",","Unemployed for 27 Weeks or More"+",", "Unemployed"+",,,", 76000+","],
  ["Maryland"+",", "2014"+",", "Long Term Unemployed"+",","Unemployed for 27 Weeks or More"+",", "Unemployed"+",,,", 71000+","],
  ["Maryland"+",", "2015"+",", "Long Term Unemployed"+",","Unemployed for 27 Weeks or More"+",", "Unemployed"+",,,", 56000+","],
  ["Maryland,","2015,","Employment Status By Poverty Status,","Above Poverty,,","Labor Force,,",3016531],
  ["Maryland,","2015,","Employment Status By Poverty Status,","Below Poverty,,","Labor Force,,",184714],
  ["Maryland,","2016,","Employment Status By Poverty Status,","Above Poverty,,","Labor Force,,",3029225],
  ["Maryland,","2016,","Employment Status By Poverty Status,","Below Poverty,,","Labor Force,,",179375],
  ["Maryland,","2017,","Employment Status By Poverty Status,","Above Poverty,,","Labor Force,,",3053027],
  ["Maryland,","2017,","Employment Status By Poverty Status,","Below Poverty,,","Labor Force,,",173147],
  ["Maryland,","2018,","Employment Status By Poverty Status,","Above Poverty,,","Labor Force,,",3070769],
  ["Maryland,","2018,","Employment Status By Poverty Status,","Below Poverty,,","Labor Force,,",167852],
  ["Maryland,","2015,","Employment Status By Disability Status,","Disabled,,","Labor Force,,",147296],
  ["Maryland,","2015,","Employment Status By Disability Status,","Non Disabled,,","Labor Force,,",2861550],
  ["Maryland,","2016,","Employment Status By Disability Status,","Disabled,,","Labor Force,,",150516],
  ["Maryland,","2016,","Employment Status By Disability Status,","Non Disabled,,","Labor Force,,",2857188],
  ["Maryland,","2017,","Employment Status By Disability Status,","Disabled,,","Labor Force,,",153211],
  ["Maryland,","2017,","Employment Status By Disability Status,","Non Disabled,,","Labor Force,,",2864507],
  ["Maryland,","2018,","Employment Status By Disability Status,","Disabled,,","Labor Force,,",155329],
  ["Maryland,","2018,","Employment Status By Disability Status,","Non Disabled,,","Labor Force,,",2849397]





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
2007-2011,Median Household Income,,,"Allegany County, Maryland",39408,,,,,
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
              "Maryland",
              year,
              "Unemployment By Gender",
              "Male" + ",,,",
              dataend,
              dataend / 100,
            ],
          },



          set4: {
            url4:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat4: [
              "Maryland",
              year,
              "Employment Status By Disability Status",
              "Disabled" + ",",
              "Unemployed" + ",",
              dataend+ ",",
            ],
          },

          set5: {
            url5:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat5: [
              "Maryland",
              year,
              "Employment Status By Disability Status",
              "Non Disabled" + ",",
              "Unemployed" + ",",
              dataend+ ",",
            ],
          },

          set6: {
            url6:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat6: [
                "Maryland",
                year,
                "Unemployment By Gender",
                "Female" + ",,,",
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
              "Maryland",
              year,
              "Employment Status By Disability Status",
              "Non Disabled" + ",",
              "Employed" + ",",
              dataend+ ",",
            ],
          },

          set8: {
            url8:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat8: [
              "Maryland",
              year,
              "Employment Status By Disability Status",
              "Non Disabled" + ",",
              "Unemployed" + ",",
              dataend+ ",",
            ],
          },

          set9: {
            url9:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_027E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat9: [
              "Maryland",
              year,
              "Employment Status By Education,Bachelor's or Higher" + ",",
              "Employed"+ ",",
              dataend+ ",",
            ],
          },

          set10: {
            url10:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_028E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat10: [
              "Maryland",
              year,
              "Employment Status By Education,Bachelor's or Higher" + ",",
              "Unemployed"+ ",",
              dataend+ ",",
            ],
          },

          set11: {
            url11:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_029E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat11: [
              "Maryland",
              year,
              "Employment Status By Education,Bachelor's or Higher" + ",",
              "NIL" + ",",
              dataend+ ",",
            ],
          },

          set12: {
            url12:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat12: [
              "Maryland",
              year,
              "Employment Status By Education",
              "Highschool" + ",",
              "Employed" + ",",
              dataend+ ",",
            ],
          },

          set13: {
            url13:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_014E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat13: [
              "Maryland",
              year,
              "Employment Status By Education",
              "Highschool" + ",",
              "Unemployed" + ",",
              dataend+ ",",
            ],
          },

          set14: {
            url14:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_015E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat14: [
              "Maryland",
              year,
              "Employment Status By Education",
              "Highschool" + ",",
              "NIL" + ",",
              dataend+ ",",
            ],
          },

          set15: {
            url15:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_028E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat15: [
              "Maryland",
              year,
              "Employment Status By Poverty Status",
              "Below Poverty" + ",",
              "Employed" + ",",
              dataend + ",",
            ],
          },

          set16: {
            url16:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_027E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat16: [
              "Maryland",
              year,
              "Employment Status By Poverty Status",
              "Below Poverty" + ",",
              "Unemployed" + ",",
              dataend+ ",",
            ],
          },

          set17: {
            url17:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_031E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat17: [
              "Maryland",
              year,
              "Employment Status By Poverty Status",
              "Below Poverty" + ",",
              "Labor Force" + ",",
              0+ ",",
            ],
          },

          set18: {
            url18:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_006E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat18: [
              "Maryland",
              year,
              "Employment Status By Education",
              "Less than Highschool" + ",",
              "Employed" + ",",
              dataend+ ",",
            ],
          },

          set19: {
            url19:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat19: [
              "Maryland",
              year,
              "Employment Status By Education",
              "Less than Highschool" + ",",
              "Unemployed" + ",",
              dataend+ ",",
            ],
          },

          set20: {
            url20:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat20: [
              "Maryland",
              year,
              "Employment Status By Education",
              "Less than Highschool" + ",",
              "NIL" + ",",
              dataend+ ",",
            ],
          },

          set21: {
            url21:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat21: [
              "Maryland",
              year,
              "Unemployment By Veteran Status",
              "Non Veteran" + ",,,",
              dataend,
              dataend / 100,
            ],
          },

          set22: {
            url22:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat22: [
              "Maryland",
              year,
              "Unemployment By Veteran Status",
              "Veteran" + ",,,",
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
              "Maryland",
              year,
              "Employment Status By Education",
              "Some College" + ",",
              "Employed,",
              dataend+ ",",
            ],
          },

          set24: {
            url24:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_021E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat24: [
              "Maryland",
              year,
              "Employment Status By Education",
              "Some College" + ",",
              "Unemployed,",
              dataend+ ",",
            ],
          },

          set25: {
            url25:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat25: [
              "Maryland",
              year,
              "Employment Status By Education",
              "Some College" + ",",
              "NIL,",
              dataend+ ",",
            ],
          },

          set26: {
            url26:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat26: [
              "Maryland",
              year,
              "Unemployment By Race",
              "Asian" + ",,,",
              dataend,
              dataend / 100,
            ],
          },

          set27: {
            url27:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat27: [
              "Maryland",
              year,
              "Unemployment By Race",
              "White" + ",,,",
              dataend,
              dataend / 100,
            ],
          },

          set28: {
            url28:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat28: [
              "Maryland",
              year,
              "Unemployment By Race",
              "Black" + ",,,",
              dataend,
              dataend / 100,
            ],
          },

          set29: {
            url29:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat29: [
              "Maryland",
              year,
              "Unemployment By Race",
              "Hispanic" + ",,,",
              dataend,
              dataend / 100,
            ],
          },

          set30: {
            url30:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat30: [
              "Maryland",
              "2019",
              "Employment Status By Disability Status",
              "Non Disabled " + ",",
              "Employed" + ",",
              dataend+ ",",
            ],
          },

          set31: {
            url31:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_004E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat31: [
              "Maryland",
              year,
              "Employment Status By Disability Status",
              "Disabled" + ",",
              "Employed" + ",",
              dataend+ ",",
            ],
          },

          set32: {
            url32:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat32: [
              "Maryland",
              year,
              "Employment Status By Disability Status",
              "Non Disabled " + ",",
              "Employed" + ",",
              dataend+ ",",
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
