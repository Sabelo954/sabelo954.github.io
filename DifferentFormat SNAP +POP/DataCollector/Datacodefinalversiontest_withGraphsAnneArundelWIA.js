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
    "Measure,","Location,","Indicator,","Time,","Indicator_Status,","Indicator_Value,","Amount"
  ],
  // ["Maryland"+",","2015Q3"+",","TANF Workers"+",,,,,",5546+","],
  // ["Maryland"+",","2015Q4"+",","TANF Workers"+",,,,,",5875+","],
  // ["Maryland"+",","2016Q1"+",","TANF Workers"+",,,,,",4316+","],
  // ["Maryland"+",","2016Q2"+",","TANF Workers"+",,,,,",4843+","],
  // ["Maryland"+",","2016Q3"+",","TANF Workers"+",,,,,",5179+","],
  // ["Maryland"+",","2016Q4"+",","TANF Workers"+",,,,,",5305+","],
  // ["Maryland"+",","2017Q1"+",","TANF Workers"+",,,,,",4026+","],
  // ["Maryland"+",","2017Q2"+",","TANF Workers"+",,,,,",4361+","],
  // ["Maryland"+",","2017Q3"+",","TANF Workers"+",,,,,",4037+","],
  // ["Maryland"+",","2017Q4"+",","TANF Workers"+",,,,,",4744+","],
  // ["Maryland"+",","2018Q1"+",","TANF Workers"+",,,,,",3643+","],
  // ["Maryland"+",","2018Q2"+",","TANF Workers"+",,,,,",3775+","],
  // ["Maryland"+",","2018Q3"+",","TANF Workers"+",,,,,",3947+","],
  // ["Maryland"+",","2018Q4"+",","TANF Workers"+",,,,,",4106+","],
  // ["Maryland"+",","2019Q1"+",","TANF Workers"+",,,,,",2968+","],
  // ["Maryland"+",","2019Q2"+",","TANF Workers"+",,,,,",3397+","],
  // ["Maryland"+",","2016Q3"+",","TANF Participants in Workforce Service "+",,,,,",391+","],
  // ["Maryland"+",","2016Q4"+",","TANF Participants in Workforce Service "+",,,,,",224+","],
  // ["Maryland"+",","2017Q1"+",","TANF Participants in Workforce Service "+",,,,,",265+","],
  // ["Maryland"+",","2017Q2"+",","TANF Participants in Workforce Service "+",,,,,",242+","],
  // ["Maryland"+",","2017Q3"+",","TANF Participants in Workforce Service "+",,,,,",202+","],
  // ["Maryland"+",","2017Q4"+",","TANF Participants in Workforce Service "+",,,,,",168+","],
  // ["Maryland"+",","2018Q1"+",","TANF Participants in Workforce Service "+",,,,,",132+","],
  // ["Maryland"+",","2018Q2"+",","TANF Participants in Workforce Service "+",,,,,",152+","],
  // ["Maryland"+",","2018Q3"+",","TANF Participants in Workforce Service "+",,,,,",153+","],
  // ["Maryland"+",","2018Q4"+",","TANF Participants in Workforce Service "+",,,,,",172+","],
  // ["Maryland"+",","2019Q1"+",","TANF Participants in Workforce Service "+",,,,,",144+","],
  // ["Maryland"+",","2019Q2"+",","TANF Participants in Workforce Service "+",,,,,",37+","],
  // ["Maryland"+",","2016Q3"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",3.03054+","],
  // ["Maryland"+",","2016Q4"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.85231+","],
  // ["Maryland"+",","2017Q1"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.81856+","],
  // ["Maryland"+",","2017Q2"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.65436+","],
  // ["Maryland"+",","2017Q3"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.38765+","],
  // ["Maryland"+",","2017Q4"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.32628+","],
  // ["Maryland"+",","2018Q1"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.13188+","],
  // ["Maryland"+",","2018Q2"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.33662+","],
  // ["Maryland"+",","2018Q4"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.57121+","],
  // ["Maryland"+",","2018Q3"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.42804+","],
  // ["Maryland"+",","2019Q1"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.11654+","],
  // ["Maryland"+",","2019Q2"+",","Percent of Workforce Service participants in TANF (%)"+",,,,,",1.21311+","],
  // ["Maryland"+",","2015Q3"+",","Percent of Workers in TANF (%)"+",,,,,",0.226081193+","],
  // ["Maryland"+",","2015Q4"+",","Percent of Workers in TANF (%)"+",,,,,",0.236666606+","],
  // ["Maryland"+",","2016Q1"+",","Percent of Workers in TANF (%)"+",,,,,",0.178479197+","],
  // ["Maryland"+",","2016Q2"+",","Percent of Workers in TANF (%)"+",,,,,",0.195135434+","],
  // ["Maryland"+",","2016Q3"+",","Percent of Workers in TANF (%)"+",,,,,",0.208383293+","],
  // ["Maryland"+",","2016Q4"+",","Percent of Workers in TANF (%)"+",,,,,",0.211680367+","],
  // ["Maryland"+",","2017Q1"+",","Percent of Workers in TANF (%)"+",,,,,",0.164464815+","],
  // ["Maryland"+",","2017Q2"+",","Percent of Workers in TANF (%)"+",,,,,",0.174493535+","],
  // ["Maryland"+",","2017Q3"+",","Percent of Workers in TANF (%)"+",,,,,",0.16093424+","],
  // ["Maryland"+",","2017Q4"+",","Percent of Workers in TANF (%)"+",,,,,",0.18780562+","],
  // ["Maryland"+",","2018Q1"+",","Percent of Workers in TANF (%)"+",,,,,",0.147775498+","],
  // ["Maryland"+",","2018Q2"+",","Percent of Workers in TANF (%)"+",,,,,",0.14955974+","],
  // ["Maryland"+",","2018Q3"+",","Percent of Workers in TANF (%)"+",,,,,",0.155311154+","],
  // ["Maryland"+",","2018Q4"+",","Percent of Workers in TANF (%)"+",,,,,",0.161040196+","],
  // ["Maryland"+",","2019Q1"+",","Percent of Workers in TANF (%)"+",,,,,",0.118709886+","],
  // ["Maryland"+",","2019Q2"+",","Percent of Workers in TANF (%)"+",,,,,",0.133430745+","],
  // ["Maryland"+",","2016"+",","New Maryland Apprenticeship Programs"+",,","New Maryland Apprenticeship Programs"+",,,",1+","],
  // ["Maryland"+",","2017"+",","New Maryland Apprenticeship Programs"+",,","New Maryland Apprenticeship Programs"+",,,",128+","],
  // ["Maryland"+",","2018"+",","New Maryland Apprenticeship Programs"+",,","New Maryland Apprenticeship Programs"+",,,",28+","],
  // ["Maryland"+",","FY15"+",","Apprenticeship"+",,","Program Completers"+",,,",1118+","],
  // ["Maryland"+",","FY16"+",","Apprenticeship"+",,","Program Completers"+",,,",332+","],
  // ["Maryland"+",","FY17"+",","Apprenticeship"+",,","Program Completers"+",,,",1092+","],
  // ["Maryland"+",","2016"+",","SNAP Recipient Workers by Percentage"+",,,,,",0.0894+","],
  // ["Maryland"+",","2017"+",","SNAP Recipient Workers by Percentage"+",,,,,",0.0886+","],
  // ["Maryland"+",","2018"+",","SNAP Recipient Workers by Percentage"+",,,,,",0.0898+","],
  // ["Maryland"+",","2016"+",","SNAP Recipient Workers"+",,,,,",271357+","],
  // ["Maryland"+",","2017"+",","SNAP Recipient Workers"+",,,,,",271185+","],
  // ["Maryland"+",","2018"+",","SNAP Recipient Workers"+",,,,,",275670+","],
  // ["Maryland"+",","2016Q3"+",","Service Participants in SNAP"+",,,,,",0.0591+","],
  // ["Maryland"+",","2016Q4"+",","Service Participants in SNAP"+",,,,,",0.0466+","],
  // ["Maryland,","2016,","Maryland Apprentices,,","Active Apprentices,,,",11821+","],
  // ["Maryland,","2016,","Maryland Apprentices,,","New Apprentices,,,",1070+","],
  // ["Maryland,","2017,","Maryland Apprentices,,","New Apprentices,,,",2631+","],
  // ["Maryland,","2017,","Maryland Apprentices,,","Active Apprentices,,,",9090+","],
  // ["Maryland,","2018,","Maryland Apprentices,,","Active Apprentices,,,",8567+","],
  // ["Maryland,","2018,","Maryland Apprentices,,","New Apprentices,,,",1904+","],
  // ["Maryland"+",", "2013"+",", "Long Term Unemployed"+",","Unemployed for 27 Weeks or More"+",", "Unemployed"+",,,", 76000+","],
  // ["Maryland"+",", "2014"+",", "Long Term Unemployed"+",","Unemployed for 27 Weeks or More"+",", "Unemployed"+",,,", 71000+","],
  // ["Maryland"+",", "2015"+",", "Long Term Unemployed"+",","Unemployed for 27 Weeks or More"+",", "Unemployed"+",,,", 56000+","],
  // ["Maryland,","2015,","Employment Status By Poverty Status,","Above Poverty,,","Labor Force,,",3016531],
  // ["Maryland,","2015,","Employment Status By Poverty Status,","Below Poverty,,","Labor Force,,",184714],
  // ["Maryland,","2016,","Employment Status By Poverty Status,","Above Poverty,,","Labor Force,,",3029225],
  // ["Maryland,","2016,","Employment Status By Poverty Status,","Below Poverty,,","Labor Force,,",179375],
  // ["Maryland,","2017,","Employment Status By Poverty Status,","Above Poverty,,","Labor Force,,",3053027],
  // ["Maryland,","2017,","Employment Status By Poverty Status,","Below Poverty,,","Labor Force,,",173147],
  // ["Maryland,","2018,","Employment Status By Poverty Status,","Above Poverty,,","Labor Force,,",3070769],
  // ["Maryland,","2018,","Employment Status By Poverty Status,","Below Poverty,,","Labor Force,,",167852],
  // ["Maryland,","2015,","Employment Status By Disability Status,","Disabled,,","Labor Force,,",147296],
  // ["Maryland,","2015,","Employment Status By Disability Status,","Non Disabled,,","Labor Force,,",2861550],
  // ["Maryland,","2016,","Employment Status By Disability Status,","Disabled,,","Labor Force,,",150516],
  // ["Maryland,","2016,","Employment Status By Disability Status,","Non Disabled,,","Labor Force,,",2857188],
  // ["Maryland,","2017,","Employment Status By Disability Status,","Disabled,,","Labor Force,,",153211],
  // ["Maryland,","2017,","Employment Status By Disability Status,","Non Disabled,,","Labor Force,,",2864507],
  // ["Maryland,","2018,","Employment Status By Disability Status,","Disabled,,","Labor Force,,",155329],
  // ["Maryland,","2018,","Employment Status By Disability Status,","Non Disabled,,","Labor Force,,",2849397]





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
          //QWI data

          set33: {
            url33:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat33: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Earnings by Industry",
              + year + "Q1","72",
              "Accommodation and Food Services",
              dataend,
            ],
          },

          set34: {
            url34:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat34: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Earnings by Industry",
              + year + "Q2","72",
              "Accommodation and Food Services",
              dataend,
            ],
          },
          set35: {
            url35:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat35: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Earnings by Industry",
              + year + "Q3","72",
              "Accommodation and Food Services",
              dataend,
            ],
          },
          set36: {
            url36:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat36: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Earnings by Industry",
              + year + "Q4","72",
              "Accommodation and Food Services",
              dataend,
            ],
          },

          set37: {
            url37:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat37: [
              "Job Change,Anne Arundel WIA",
              "Maryland Job Net Change by Industry",
              + year + "Q1","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },

          set38: {
            url38:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat38: [
              "Job Change,Anne Arundel WIA",
              "Maryland Job Net Change by Industry",
              + year + "Q2","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },
          set39: {
            url39:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat39: [
              "Job Change,Anne Arundel WIA",
              "Maryland Job Net Change by Industry",
              + year + "Q3","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },
          set40: {
            url40:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat40: [
              "Job Change,Anne Arundel WIA",
              "Maryland Job Net Change by Industry",
              + year + "Q4","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },

          set41: {
            url41:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat41: [
              "New Hires,Anne Arundel WIA",
              "Maryland New Hires by Industry",
              + year + "Q1","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },
          set42: {
            url42:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat42: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              + year + "Q2","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },
          set43: {
            url43:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat43: [
              "New Hires,Anne Arundel WIA",
              "Maryland New Hires by Industry",
              + year + "Q3","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },
          set44: {
            url44:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat44: [
              "New Hires,Anne Arundel WIA",
              "Maryland New Hires by Industry",
              + year + "Q4","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },

          set45: {
            url45:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat45: [
              "Separations,Anne Arundel WIA",
              "Maryland Separations by Industry",
              + year + "Q1","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },

          set46: {
            url46:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat46: [
              "Separations,Anne Arundel WIA",
              "Maryland Separations by Industry",
              + year + "Q2","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },
          set47: {
            url47:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat47: [
              "Separations,Anne Arundel WIA",
              "Maryland Separations by Industry",
              + year + "Q3","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },
          set48: {
            url48:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat48: [
              "Separations,Anne Arundel WIA",
              "Maryland Separations by Industry",
              + year + "Q4","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },

          set49: {
            url49:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat49: [
              "Turnover,Anne Arundel WIA",
              "Maryland Turnover Rate by Industry",
              + year + "Q1","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },
          set50: {
            url50:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat50: [
              "Turnover,Anne Arundel WIA",
              "Maryland Turnover Rate by Industry",
              + year + "Q2","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },
          set51: {
            url51:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat51: [
              "Turnover,Anne Arundel WIA",
              "Maryland Turnover Rate by Industry",
              + year + "Q3","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },
          set52: {
            url52:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat52: [
              "Turnover,Anne Arundel WIA",
              "Maryland Turnover Rate by Industry",
              + year + "Q4","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },

          set53: {
            url53:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat53: [
              "Workers,Anne Arundel WIA",
              "Maryland Workers by Industry",
              + year + "Q1","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },
          set54: {
            url54:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat54: [
              "Workers,Anne Arundel WIA",
              "Maryland Workers by Industry",
              + year + "Q2","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },
          set55: {
            url55:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat55: [
              "Workers,Anne Arundel WIA",
              "Maryland Workers by Industry",
              + year + "Q3","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },
          set56: {
            url56:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat56: [
              "Workers,Anne Arundel WIA",
              "Maryland Workers by Industry",
              + year + "Q4","72",
              "Accommodation and Food Services",

              dataend,
            ],
          },

          set57: {
            url57:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat57: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Earnings by Industry",
              +year+"Q1","62",
              "Health Care and Social Assistance",
              dataend,
            ],
          },

          set58: {
            url58:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat58: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set59: {
            url59:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat59: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set60: {
            url60:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat60: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Earnings by Industry",
              +year+"Q4","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },

          set61: {
            url61:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat61: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set62: {
            url62:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat62: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set63: {
            url63:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat63: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set64: {
            url64:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat64: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },

          set65: {
            url65:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat65: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set66: {
            url66:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat66: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set67: {
            url67:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat67: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set68: {
            url68:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat68: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },

          set69: {
            url69:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat69: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set70: {
            url70:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat70: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },

          set71: {
            url71:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat71: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },

          set72: {
            url72:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat72: [
              "Turnover,Anne Arundel WIA","Maryland Turnover Rate by Education",
              year + "Q4",
              "E5",
              "Educational attainment not available (workers aged 24 or younger)",

              dataend+ ",",
            ],
          },
          set73: {
            url73:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat73: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set74: {
            url74:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat74: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set75: {
            url75:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat75: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set76: {
            url76:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat76: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set77: {
            url77:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat77: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },

          set78: {
            url78:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat78: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set79: {
            url79:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat79: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set80: {
            url80:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat80: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },
          set81: {
            url81:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat81: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","62",
              "Health Care and Social Assistance",

              dataend,
            ],
          },

          set82: {
            url82:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat82: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q1","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set83: {
            url83:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat83: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set84: {
            url84:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat84: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set85: {
            url85:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat85: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set86: {
            url86:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat86: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set87: {
            url87:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat87: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set88: {
            url88:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat88: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set89: {
            url89:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat89: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },

          set90: {
            url90:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat90: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set91: {
            url91:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat91: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set92: {
            url92:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat92: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set93: {
            url93:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat93: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },

          set94: {
            url94:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat94: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set95: {
            url95:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat95: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set96: {
            url96:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat96: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set97: {
            url97:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat97: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },

          set98: {
            url98:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat98: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set99: {
            url99:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat99: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set100: {
            url100:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat100: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set101: {
            url101:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat101: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set102: {
            url102:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat102: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set103: {
            url103:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat103: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set104: {
            url104:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat104: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set105: {
            url105:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat105: [
              "Workers,Anne Arundel WIA",
              "Maryland Workers by Industry",
              +year+"Q4","56",
              "Administrative and Support and Waste Management and Remediation Services",

              dataend,
            ],
          },
          set106: {
            url106:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat106: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Earnings by Industry",
              +year+"Q1","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",
              dataend,
            ],
          },

          set107: {
            url107:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat107: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set108: {
            url108:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat108: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set109: {
            url109:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat109: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set110: {
            url110:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat110: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set111: {
            url111:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat111: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set112: {
            url112:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat112: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set113: {
            url113:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat113: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },

          set114: {
            url114:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat114: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set115: {
            url115:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat115: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set116: {
            url116:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat116: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set117: {
            url117:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat117: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },

          set118: {
            url118:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat118: [
                "Separations,Anne Arundel WIA",

                "Maryland Separations by Industry",
                +year+"Q1","11",
                "\"Agriculture, Forestry, Fishing and Hunting\"",

                dataend,
              ],
            },
          set119: {
            url119:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat119: [
                "Separations,Anne Arundel WIA",

                "Maryland Separations by Industry",
                +year+"Q2","11",
                "\"Agriculture, Forestry, Fishing and Hunting\"",

                dataend,
              ],
            },
          set120: {
            url120:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat120: [
                "Separations,Anne Arundel WIA",

                "Maryland Separations by Industry",
                +year+"Q3","11",
                "\"Agriculture, Forestry, Fishing and Hunting\"",

                dataend,
              ],
            },
          set121: {
            url121:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat121: [
                "Separations,Anne Arundel WIA",

                "Maryland Separations by Industry",
                +year+"Q4","11",
                "\"Agriculture, Forestry, Fishing and Hunting\"",

                dataend,
              ],
            },
          set122: {
            url122:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat122: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set123: {
            url123:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat123: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set124: {
            url124:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat124: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set125: {
            url125:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat125: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },

          set126: {
            url126:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat126: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set127: {
            url127:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat127: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set128: {
            url128:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat128: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
          set129: {
            url129:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat129: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },

          set130: {
            url130:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat130: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q1","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set131: {
            url131:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat131: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set132: {
            url132:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat132: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set133: {
            url133:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat133: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },

          set134: {
            url134:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat134: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set135: {
            url135:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat135: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set136: {
            url136:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat136: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set137: {
            url137:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat137: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },

          set138: {
            url138:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat138: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set139: {
            url139:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat139: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set140: {
            url140:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat140: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set141: {
            url141:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat141: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },

          set142: {
            url142:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat142: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set143: {
            url143:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat143: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set144: {
            url144:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat144: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set145: {
            url145:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat145: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },

          set146: {
            url146:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat146: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set147: {
            url147:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat147: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set148: {
            url148:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat148: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set149: {
            url149:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat149: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },

          set150: {
            url150:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat150: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set151: {
            url151:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat151: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set152: {
            url152:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat152: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },
          set153: {
            url153:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat153: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","71",
              '"Arts, Entertainment, and Recreation"',

              dataend,
            ],
          },

          set154: {
            url154:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat154: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Earnings by Industry",
              +year+"Q1","23",
              "Construction",
              dataend,
            ],
          },
          set155: {
            url155:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat155: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","23",
              "Construction",

              dataend,
            ],
          },
          set156: {
            url156:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat156: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","23",
              "Construction",

              dataend,
            ],
          },
          set157: {
            url157:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat157: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","23",
              "Construction",

              dataend,
            ],
          },

          set158: {
            url158:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat158: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","23",
              "Construction",

              dataend,
            ],
          },
          set159: {
            url159:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat159: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","23",
              "Construction",

              dataend,
            ],
          },
          set160: {
            url160:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat160: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","23",
              "Construction",

              dataend,
            ],
          },
          set161: {
            url161:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat161: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","23",
              "Construction",

              dataend,
            ],
          },

          set162: {
            url162:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat162: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","23",
              "Construction",

              dataend,
            ],
          },
          set163: {
            url163:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat163: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","23",
              "Construction",

              dataend,
            ],
          },
          set164: {
            url164:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat164: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","23",
              "Construction",

              dataend,
            ],
          },
          set165: {
            url165:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat165: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","23",
              "Construction",

              dataend,
            ],
          },

          set166: {
            url166:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat166: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","23",
              "Construction",

              dataend,
            ],
          },
          set167: {
            url167:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat167: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","23",
              "Construction",

              dataend,
            ],
          },
          set168: {
            url168:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat168: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","23",
              "Construction",

              dataend,
            ],
          },
          set169: {
            url169:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat169: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","23",
              "Construction",

              dataend,
            ],
          },

          set170: {
            url170:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat170: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","23",
              "Construction",

              dataend,
            ],
          },
          set171: {
            url171:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat171: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","23",
              "Construction",

              dataend,
            ],
          },
          set172: {
            url172:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat172: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","23",
              "Construction",

              dataend,
            ],
          },
          set173: {
            url173:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat173: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","23",
              "Construction",

              dataend,
            ],
          },

          set174: {
            url174:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat174: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","23",
              "Construction",

              dataend,
            ],
          },
          set175: {
            url175:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat175: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","23",
              "Construction",

              dataend,
            ],
          },
          set176: {
            url176:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat176: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","23",
              "Construction",

              dataend,
            ],
          },
          set177: {
            url177:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat177: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","23",
              "Construction",

              dataend,
            ],
          },

          set178: {
            url178:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat178: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q1","61",
              "Educational Services",
              dataend,
            ],
          },
          set179: {
            url179:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat179: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","61",
              "Educational Services",

              dataend,
            ],
          },
          set180: {
            url180:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat180: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","61",
              "Educational Services",

              dataend,
            ],
          },
          set181: {
            url181:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat181: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","61",
              "Educational Services",

              dataend,
            ],
          },

          set182: {
            url182:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat182: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","61",
              "Educational Services",

              dataend,
            ],
          },
          set183: {
            url183:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat183: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","61",
              "Educational Services",

              dataend,
            ],
          },
          set184: {
            url184:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat184: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","61",
              "Educational Services",

              dataend,
            ],
          },
          set185: {
            url185:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat185: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","61",
              "Educational Services",

              dataend,
            ],
          },

          set186: {
            url186:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat186: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","61",
              "Educational Services",

              dataend,
            ],
          },
          set187: {
            url187:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat187: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","61",
              "Educational Services",

              dataend,
            ],
          },
          set188: {
            url188:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat188: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","61",
              "Educational Services",

              dataend,
            ],
          },
          set189: {
            url189:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat189: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","61",
              "Educational Services",

              dataend,
            ],
          },

          set190: {
            url190:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat190: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","61",
              "Educational Services",

              dataend,
            ],
          },
          set191: {
            url191:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat191: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","61",
              "Educational Services",

              dataend,
            ],
          },
          set192: {
            url192:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat192: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","61",
              "Educational Services",

              dataend,
            ],
          },
          set193: {
            url193:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat193: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","61",
              "Educational Services",

              dataend,
            ],
          },

          set194: {
            url194:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat194: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","61",
              "Educational Services",

              dataend,
            ],
          },
          set195: {
            url195:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat195: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","61",
              "Educational Services",

              dataend,
            ],
          },
          set196: {
            url196:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat196: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","61",
              "Educational Services",

              dataend,
            ],
          },
          set197: {
            url197:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat197: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","61",
              "Educational Services",

              dataend,
            ],
          },

          set198: {
            url198:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat198: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","61",
              "Educational Services",

              dataend,
            ],
          },
          set199: {
            url199:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat199: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","61",
              "Educational Services",

              dataend,
            ],
          },
          set200: {
            url200:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat200: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","61",
              "Educational Services",

              dataend,
            ],
          },
          set201: {
            url201:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat201: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","61",
              "Educational Services",

              dataend,
            ],
          },

          set202: {
            url202:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat202: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q1","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set203: {
            url203:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat203: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set204: {
            url204:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat204: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set205: {
            url205:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat205: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","52",
              "Finance and Insurance",

              dataend,
            ],
          },

          set206: {
            url206:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat206: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set207: {
            url207:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat207: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set208: {
            url208:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat208: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set209: {
            url209:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat209: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","52",
              "Finance and Insurance",

              dataend,
            ],
          },

          set210: {
            url210:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat210: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set211: {
            url211:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat211: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set212: {
            url212:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat212: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set213: {
            url213:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat213: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","52",
              "Finance and Insurance",

              dataend,
            ],
          },

          set214: {
            url214:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat214: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set215: {
            url215:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat215: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set216: {
            url216:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat216: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set217: {
            url217:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat217: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","52",
              "Finance and Insurance",

              dataend,
            ],
          },

          set218: {
            url218:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat218: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set219: {
            url219:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat219: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set220: {
            url220:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat220: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set221: {
            url221:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat221: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","52",
              "Finance and Insurance",

              dataend,
            ],
          },

          set222: {
            url222:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat222: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set223: {
            url223:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat223: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set224: {
            url224:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat224: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","52",
              "Finance and Insurance",

              dataend,
            ],
          },
          set225: {
            url225:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat225: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","52",
              "Finance and Insurance",

              dataend,
            ],
          },

          set226: {
            url226:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat226: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Earnings by Industry",
              +year+"Q1","51",
              "Information",
              dataend,
            ],
          },
          set227: {
            url227:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat227: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","51",
              "Information",

              dataend,
            ],
          },
          set228: {
            url228:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat228: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","51",
              "Information",

              dataend,
            ],
          },
          set229: {
            url229:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat229: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","51",
              "Information",

              dataend,
            ],
          },

          set230: {
            url230:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat230: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","51",
              "Information",

              dataend,
            ],
          },
          set231: {
            url231:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat231: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","51",
              "Information",

              dataend,
            ],
          },
          set232: {
            url232:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat232: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","51",
              "Information",

              dataend,
            ],
          },
          set233: {
            url233:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat233: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","51",
              "Information",

              dataend,
            ],
          },

          set234: {
            url234:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat234: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","51",
              "Information",

              dataend,
            ],
          },

          set235: {
            url235:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat235: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","51",
              "Information",

              dataend,
            ],
          },
          set236: {
            url236:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat236: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","51",
              "Information",

              dataend,
            ],
          },
          set237: {
            url237:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat237: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","51",
              "Information",

              dataend,
            ],
          },

          set238: {
            url238:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat238: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","51",
              "Information",

              dataend,
            ],
          },
          set239: {
            url239:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat239: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","51",
              "Information",

              dataend,
            ],
          },
          set240: {
            url240:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat240: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","51",
              "Information",

              dataend,
            ],
          },
          set241: {
            url241:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat241: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","51",
              "Information",

              dataend,
            ],
          },

          set242: {
            url242:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat242: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","51",
              "Information",

              dataend,
            ],
          },
          set243: {
            url243:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat243: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","51",
              "Information",

              dataend,
            ],
          },
          set244: {
            url244:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat244: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","51",
              "Information",

              dataend,
            ],
          },
          set245: {
            url245:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat245: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","51",
              "Information",

              dataend,
            ],
          },

          set246: {
            url246:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat246: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","51",
              "Information",

              dataend,
            ],
          },
          set247: {
            url247:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat247: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","51",
              "Information",

              dataend,
            ],
          },
          set248: {
            url248:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat248: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","51",
              "Information",

              dataend,
            ],
          },
          set249: {
            url249:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat249: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","51",
              "Information",

              dataend,
            ],
          },

          set250: {
            url250:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat250: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q1","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set251: {
            url251:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat251: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set252: {
            url252:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat252: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set253: {
            url253:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat253: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },

          set254: {
            url254:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat254: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set255: {
            url255:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat255: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set256: {
            url256:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat256: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set257: {
            url257:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat257: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },

          set258: {
            url258:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat258: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set259: {
            url259:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat259: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set260: {
            url260:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat260: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set261: {
            url261:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat261: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },

          set262: {
            url262:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat262: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set263: {
            url263:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat263: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set264: {
            url264:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat264: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set265: {
            url265:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat265: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },

          set266: {
            url266:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat266: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set267: {
            url267:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat267: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set268: {
            url268:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat268: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set269: {
            url269:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat269: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },

          set270: {
            url270:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat270: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set271: {
            url271:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat271: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set272: {
            url272:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat272: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },
          set273: {
            url273:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat273: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","55",
              "Management of Companies and Enterprises",

              dataend,
            ],
          },

          set274: {
            url274:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat274: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q1","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set275: {
            url275:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat275: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set276: {
            url276:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat276: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set277: {
            url277:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat277: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","31-33",
              "Manufacturing",

              dataend,
            ],
          },

          set278: {
            url278:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat278: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set279: {
            url279:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat279: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set280: {
            url280:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat280: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set281: {
            url281:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat281: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","31-33",
              "Manufacturing",

              dataend,
            ],
          },

          set282: {
            url282:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat282: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set283: {
            url283:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat283: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set284: {
            url284:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat284: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set285: {
            url285:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat285: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","31-33",
              "Manufacturing",

              dataend,
            ],
          },

          set286: {
            url286:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat286: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set287: {
            url287:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat287: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set288: {
            url288:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat288: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set289: {
            url289:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat289: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","31-33",
              "Manufacturing",

              dataend,
            ],
          },

          set290: {
            url290:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat290: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set291: {
            url291:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat291: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set292: {
            url292:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat292: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set293: {
            url293:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat293: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","31-33",
              "Manufacturing",

              dataend,
            ],
          },

          set294: {
            url294:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat294: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set295: {
            url295:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat295: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set296: {
            url296:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat296: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","31-33",
              "Manufacturing",

              dataend,
            ],
          },
          set297: {
            url297:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat297: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","31-33",
              "Manufacturing",

              dataend,
            ],
          },

          set298: {
            url298:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat298: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Earnings by Industry",
              +year+"Q1","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',
              dataend,
            ],
          },
          set299: {
            url299:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat299: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set300: {
            url300:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat300: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set301: {
            url301:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat301: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },

          set302: {
            url302:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat302: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set303: {
            url303:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat303: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set304: {
            url304:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat304: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set305: {
            url305:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat305: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },

          set306: {
            url306:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat306: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set307: {
            url307:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat307: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set308: {
            url308:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat308: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set309: {
            url309:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat309: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },

          set310: {
            url310:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat310: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set311: {
            url311:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat311: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set312: {
            url312:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat312: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set313: {
            url313:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat313: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },

          set314: {
            url314:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat314: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set315: {
            url315:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat315: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set316: {
            url316:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat316: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set317: {
            url317:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat317: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },

          set318: {
            url318:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat318: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set319: {
            url319:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat319: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set320: {
            url320:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat320: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },
          set321: {
            url321:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat321: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","21",
              '"Mining, Quarrying, and Oil and Gas Extraction"',

              dataend,
            ],
          },

          set322: {
            url322:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat322: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q1","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set323: {
            url323:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat323: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set324: {
            url324:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat324: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set325: {
            url325:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat325: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },

          set326: {
            url326:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat326: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set327: {
            url327:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat327: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set328: {
            url328:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat328: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set329: {
            url329:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat329: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },

          set330: {
            url330:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat330: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set331: {
            url331:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat331: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set332: {
            url332:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat332: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set333: {
            url333:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat333: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },

          set334: {
            url334:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat334: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set335: {
            url335:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat335: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set336: {
            url336:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat336: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set337: {
            url337:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat337: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },

          set338: {
            url338:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat338: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set339: {
            url339:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat339: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set340: {
            url340:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat340: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set341: {
            url341:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat341: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },

          set342: {
            url342:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat342: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set343: {
            url343:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat343: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set344: {
            url344:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat344: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },
          set345: {
            url345:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat345: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","81",
              "Other Services (except Public Administration)",

              dataend,
            ],
          },

          set346: {
            url346:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat346: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q1","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set347: {
            url347:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat347: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set348: {
            url348:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat348: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set349: {
            url349:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat349: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },

          set350: {
            url350:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat350: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set351: {
            url351:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat351: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set352: {
            url352:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat352: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set353: {
            url353:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat353: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },

          set354: {
            url354:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat354: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set355: {
            url355:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat355: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set356: {
            url356:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat356: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set357: {
            url357:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat357: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },

          set358: {
            url358:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat358: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set359: {
            url359:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat359: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set360: {
            url360:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat360: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set361: {
            url361:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat361: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },

          set362: {
            url362:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat362: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set363: {
            url363:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat363: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set364: {
            url364:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat364: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set365: {
            url365:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat365: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set366: {
            url366:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat366: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set367: {
            url367:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat367: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set368: {
            url368:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat368: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },
          set369: {
            url369:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat369: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","54",
              '"Professional, Scientific, and Technical Services"',

              dataend,
            ],
          },

          set370: {
            url370:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat370: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q1","92",
              "Public Administration",

              dataend,
            ],
          },
          set371: {
            url371:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat371: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","92",
              "Public Administration",

              dataend,
            ],
          },
          set372: {
            url372:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat372: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","92",
              "Public Administration",

              dataend,
            ],
          },
          set373: {
            url373:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat373: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","92",
              "Public Administration",

              dataend,
            ],
          },

          set374: {
            url374:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat374: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","92",
              "Public Administration",

              dataend,
            ],
          },
          set375: {
            url375:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat375: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","92",
              "Public Administration",

              dataend,
            ],
          },
          set376: {
            url376:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat376: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","92",
              "Public Administration",

              dataend,
            ],
          },
          set377: {
            url377:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat377: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","92",
              "Public Administration",

              dataend,
            ],
          },

          set378: {
            url378:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat378: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","92",
              "Public Administration",

              dataend,
            ],
          },
          set379: {
            url379:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat379: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","92",
              "Public Administration",

              dataend,
            ],
          },
          set380: {
            url380:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat380: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","92",
              "Public Administration",

              dataend,
            ],
          },
          set381: {
            url381:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat381: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","92",
              "Public Administration",

              dataend,
            ],
          },

          set382: {
            url382:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat382: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","92",
              "Public Administration",

              dataend,
            ],
          },
          set383: {
            url383:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat383: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","92",
              "Public Administration",

              dataend,
            ],
          },
          set384: {
            url384:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat384: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","92",
              "Public Administration",

              dataend,
            ],
          },
          set385: {
            url385:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat385: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","92",
              "Public Administration",

              dataend,
            ],
          },

          set386: {
            url386:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat386: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","92",
              "Public Administration",

              dataend,
            ],
          },
          set387: {
            url387:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat387: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","92",
              "Public Administration",

              dataend,
            ],
          },
          set388: {
            url388:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat388: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","92",
              "Public Administration",

              dataend,
            ],
          },
          set389: {
            url389:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat389: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","92",
              "Public Administration",

              dataend,
            ],
          },

          set390: {
            url390:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat390: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","92",
              "Public Administration",

              dataend,
            ],
          },
          set391: {
            url391:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat391: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","92",
              "Public Administration",

              dataend,
            ],
          },
          set392: {
            url392:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat392: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","92",
              "Public Administration",

              dataend,
            ],
          },
          set393: {
            url393:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat393: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","92",
              "Public Administration",

              dataend,
            ],
          },

          set394: {
            url394:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat394: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q1","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set395: {
            url395:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat395: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set396: {
            url396:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat396: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set397: {
            url397:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat397: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },

          set398: {
            url398:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat398: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set399: {
            url399:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat399: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set400: {
            url400:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat400: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set401: {
            url401:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat401: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },

          set402: {
            url402:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat402: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set403: {
            url403:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat403: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set404: {
            url404:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat404: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set405: {
            url405:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat405: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },

          set406: {
            url406:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat406: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set407: {
            url407:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat407: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set408: {
            url408:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat408: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set409: {
            url409:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat409: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },

          set410: {
            url410:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat410: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set411: {
            url411:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat411: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set412: {
            url412:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat412: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set413: {
            url413:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat413: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },

          set414: {
            url414:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat414: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set415: {
            url415:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat415: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set416: {
            url416:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat416: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },
          set417: {
            url417:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat417: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","53",
              "Real Estate and Rental and Leasing",

              dataend,
            ],
          },

          set418: {
            url418:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat418: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q1","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set419: {
            url419:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat419: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set420: {
            url420:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat420: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set421: {
            url421:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat421: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","44-45",
              "Retail Trade",

              dataend,
            ],
          },

          set422: {
            url422:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat422: [
              "Job change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set423: {
            url423:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat423: [
              "Job change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set424: {
            url424:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat424: [
              "Job change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set425: {
            url425:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat425: [
              "Job change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","44-45",
              "Retail Trade",

              dataend,
            ],
          },

          set426: {
            url426:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat426: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set427: {
            url427:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat427: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set428: {
            url428:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat428: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set429: {
            url429:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat429: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","44-45",
              "Retail Trade",

              dataend,
            ],
          },

          set430: {
            url430:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat430: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set431: {
            url431:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat431: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set432: {
            url432:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat432: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set433: {
            url433:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat433: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","44-45",
              "Retail Trade",

              dataend,
            ],
          },

          set434: {
            url434:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat434: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set435: {
            url435:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat435: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set436: {
            url436:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat436: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set437: {
            url437:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat437: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","44-45",
              "Retail Trade",

              dataend,
            ],
          },

          set438: {
            url438:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat438: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set439: {
            url439:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat439: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set440: {
            url440:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat440: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","44-45",
              "Retail Trade",

              dataend,
            ],
          },
          set441: {
            url441:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat441: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","44-45",
              "Retail Trade",

              dataend,
            ],
          },

          set442: {
            url442:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat442: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q1","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set443: {
            url443:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat443: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set444: {
            url444:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat444: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set445: {
            url445:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat445: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },

          set446: {
            url446:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat446: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set447: {
            url447:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat447: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set448: {
            url448:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat448: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set449: {
            url449:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat449: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },

          set450: {
            url450:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat450: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set451: {
            url451:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat451: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set452: {
            url452:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat452: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set453: {
            url453:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat453: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },

          set454: {
            url454:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat454: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set455: {
            url455:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat455: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set456: {
            url456:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat456: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set457: {
            url457:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat457: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },

          set458: {
            url458:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat458: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set459: {
            url459:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat459: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set460: {
            url460:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat460: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set461: {
            url461:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat461: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },

          set462: {
            url462:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat462: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set463: {
            url463:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat463: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set464: {
            url464:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat464: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },
          set465: {
            url465:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat465: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","48-49",
              "Transportation and Warehousing",

              dataend,
            ],
          },

          set466: {
            url466:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat466: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Earnings by Industry",
              +year+"Q1","22",
              "Utilities",
              dataend,
            ],
          },
          set467: {
            url467:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat467: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","22",
              "Utilities",

              dataend,
            ],
          },
          set468: {
            url468:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat468: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","22",
              "Utilities",

              dataend,
            ],
          },
          set469: {
            url469:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat469: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","22",
              "Utilities",

              dataend,
            ],
          },

          set470: {
            url470:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat470: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","22",
              "Utilities",

              dataend,
            ],
          },
          set471: {
            url471:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat471: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","22",
              "Utilities",

              dataend,
            ],
          },
          set472: {
            url472:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat472: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","22",
              "Utilities",

              dataend,
            ],
          },
          set473: {
            url473:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat473: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","22",
              "Utilities",

              dataend,
            ],
          },

          set474: {
            url474:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat474: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","22",
              "Utilities",

              dataend,
            ],
          },
          set475: {
            url475:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat475: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","22",
              "Utilities",

              dataend,
            ],
          },
          set476: {
            url476:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat476: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","22",
              "Utilities",

              dataend,
            ],
          },
          set477: {
            url477:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat477: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","22",
              "Utilities",

              dataend,
            ],
          },

          set478: {
            url478:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat478: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","22",
              "Utilities",

              dataend,
            ],
          },
          set479: {
            url479:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat479: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","22",
              "Utilities",

              dataend,
            ],
          },
          set480: {
            url480:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat480: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","22",
              "Utilities",

              dataend,
            ],
          },
          set481: {
            url481:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat481: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","22",
              "Utilities",

              dataend,
            ],
          },

          set482: {
            url482:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat482: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","22",
              "Utilities",

              dataend,
            ],
          },
          set483: {
            url483:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat483: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","22",
              "Utilities",

              dataend,
            ],
          },
          set484: {
            url484:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat484: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","22",
              "Utilities",

              dataend,
            ],
          },
          set485: {
            url485:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat485: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","22",
              "Utilities",

              dataend,
            ],
          },

          set486: {
            url486:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat486: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","22",
              "Utilities",

              dataend,
            ],
          },
          set487: {
            url487:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat487: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","22",
              "Utilities",

              dataend,
            ],
          },
          set488: {
            url488:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat488: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","22",
              "Utilities",

              dataend,
            ],
          },
          set489: {
            url489:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat489: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","22",
              "Utilities",

              dataend,
            ],
          },

          set490: {
            url490:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat490: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q1","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set491: {
            url491:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat491: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q2","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set492: {
            url492:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat492: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q3","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set493: {
            url493:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat493: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Earnings by Industry",
              +year+"Q4","42",
              "Wholesale Trade",

              dataend,
            ],
          },

          set494: {
            url494:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat494: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q1","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set495: {
            url495:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat495: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q2","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set496: {
            url496:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat496: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q3","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set497: {
            url497:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat497: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Industry",
              +year+"Q4","42",
              "Wholesale Trade",

              dataend,
            ],
          },

          set498: {
            url498:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat498: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q1","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set499: {
            url499:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat499: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q2","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set500: {
            url500:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat500: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q3","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set501: {
            url501:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat501: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Industry",
              +year+"Q4","42",
              "Wholesale Trade",

              dataend,
            ],
          },

          set502: {
            url502:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat502: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set503: {
            url503:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat503: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set504: {
            url504:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat504: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set505: {
            url505:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat505: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","42",
              "Wholesale Trade",

              dataend,
            ],
          },

          set506: {
            url506:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat506: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q1","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set507: {
            url507:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat507: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q2","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set508: {
            url508:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat508: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q3","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set509: {
            url509:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat509: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Industry",
              +year+"Q4","42",
              "Wholesale Trade",

              dataend,
            ],
          },

          set510: {
            url510:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat510: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q1","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set511: {
            url511:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat511: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q2","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set512: {
            url512:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat512: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q3","42",
              "Wholesale Trade",

              dataend,
            ],
          },
          set513: {
            url513:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat513: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Industry",
              +year+"Q4","42",
              "Wholesale Trade",

              dataend,
            ],
          },

          set514: {
            url514:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat514: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Monthly Earnings by Age",
              +year+"Q1","A01",
              "14-18",

              dataend,
            ],
          },
          set515: {
            url515:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat515: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Monthly Earnings by Age",
              +year+"Q2","A01",
              "14-18",

              dataend,
            ],
          },
          set516: {
            url516:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat516: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Monthly Earnings by Age",
              +year+"Q3","A01",
              "14-18",
              dataend,
            ],
          },
          set517: {
            url517:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat517: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q4","A01",
              "14-18",

              dataend,
            ],
          },

          set518: {
            url518:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat518: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q1","A02",
              "19-21",

              dataend,
            ],
          },
          set519: {
            url519:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat519: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q2","A02",
              "19-21",

              dataend,
            ],
          },
          set520: {
            url520:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat520: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q3","A02",
              "19-21",

              dataend,
            ],
          },
          set521: {
            url521:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat521: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q4","A02",
              "19-21",

              dataend,
            ],
          },

          set522: {
            url522:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat522: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q1","A03",
              "22-24",

              dataend,
            ],
          },
          set523: {
            url523:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat523: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q2","A03",
              "22-24",

              dataend,
            ],
          },
          set524: {
            url524:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat524: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q3","A03",
              "22-24",

              dataend,
            ],
          },
          set525: {
            url525:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat525: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q4","A03",
              "22-24",

              dataend,
            ],
          },

          set526: {
            url526:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat526: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q1","A04",
              "25-34",

              dataend,
            ],
          },
          set527: {
            url527:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat527: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q2","A04",
              "25-34",

              dataend,
            ],
          },
          set528: {
            url528:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat528: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q3","A04",
              "25-34",

              dataend,
            ],
          },
          set529: {
            url529:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat529: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q4","A04",
              "25-34",

              dataend,
            ],
          },

          set530: {
            url530:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat530: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q1","A05",
              "35-44",

              dataend,
            ],
          },
          set531: {
            url531:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat531: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q2","A05",
              "35-44",

              dataend,
            ],
          },
          set532: {
            url532:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat532: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q3","A05",
              "35-44",

              dataend,
            ],
          },
          set533: {
            url533:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat533: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q4","A05",
              "35-44",

              dataend,
            ],
          },

          set534: {
            url534:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat534: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q1","A06",
              "45-54",

              dataend,
            ],
          },
          set535: {
            url535:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat535: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q2","A06",
              "45-54",

              dataend,
            ],
          },
          set536: {
            url536:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat536: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q3","A06",
              "45-54",

              dataend,
            ],
          },
          set537: {
            url537:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat537: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q4","A06",
              "45-54",

              dataend,
            ],
          },

          set538: {
            url538:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat538: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q1","A07",
              "55-64",

              dataend,
            ],
          },
          set539: {
            url539:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat539: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q2","A07",
              "55-64",

              dataend,
            ],
          },
          set540: {
            url540:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat540: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q3","A07",
              "55-64",

              dataend,
            ],
          },
          set541: {
            url541:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat541: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Age",
              +year+"Q4","A07",
              "55-64",

              dataend,
            ],
          },

          set542: {
            url542:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat542: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q1","A01",
              "14-18",

              dataend,
            ],
          },
          set543: {
            url543:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat543: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q2","A01",
              "14-18",

              dataend,
            ],
          },
          set544: {
            url544:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat544: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q3","A01",
              "14-18",

              dataend,
            ],
          },
          set545: {
            url545:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat545: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q4","A01",
              "14-18",

              dataend,
            ],
          },

          set546: {
            url546:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat546: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q1","A02",
              "19-21",

              dataend,
            ],
          },
          set547: {
            url547:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat547: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q2","A02",
              "19-21",

              dataend,
            ],
          },
          set548: {
            url548:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat548: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q3","A02",
              "19-21",

              dataend,
            ],
          },
          set549: {
            url549:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat549: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q4","A02",
              "19-21",

              dataend,
            ],
          },

          set550: {
            url550:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat550: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q1","A03",
              "22-24",

              dataend,
            ],
          },
          set551: {
            url551:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat551: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q2","A03",
              "22-24",

              dataend,
            ],
          },
          set552: {
            url552:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat552: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q3","A03",
              "22-24",

              dataend,
            ],
          },
          set553: {
            url553:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat553: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q4","A03",
              "22-24",

              dataend,
            ],
          },

          set554: {
            url554:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat554: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q1","A04",
              "25-34",

              dataend,
            ],
          },
          set555: {
            url555:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat555: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q2","A04",
              "25-34",

              dataend,
            ],
          },
          set556: {
            url556:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat556: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q3","A04",
              "25-34",

              dataend,
            ],
          },
          set557: {
            url557:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat557: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q4","A04",
              "25-34",

              dataend,
            ],
          },

          set558: {
            url558:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat558: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q1","A05",
              "35-44",

              dataend,
            ],
          },
          set559: {
            url559:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat559: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q2","A05",
              "35-44",

              dataend,
            ],
          },
          set560: {
            url560:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat560: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q3","A05",
              "35-44",

              dataend,
            ],
          },
          set561: {
            url561:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat561: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q4","A05",
              "35-44",

              dataend,
            ],
          },

          set562: {
            url562:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat562: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q1","A06",
              "45-54",

              dataend,
            ],
          },
          set563: {
            url563:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat563: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q2","A06",
              "45-54",

              dataend,
            ],
          },
          set564: {
            url564:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat564: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q3","A06",
              "45-54",

              dataend,
            ],
          },
          set565: {
            url565:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat565: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q4","A06",
              "45-54",

              dataend,
            ],
          },

          set566: {
            url566:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat566: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q1","A07",
              "55-64",

              dataend,
            ],
          },
          set567: {
            url567:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat567: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q2","A07",
              "55-64",

              dataend,
            ],
          },
          set568: {
            url568:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat568: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q3","A07",
              "55-64",

              dataend,
            ],
          },
          set569: {
            url569:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat569: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Age",
              +year+"Q4","A07",
              "55-64",

              dataend,
            ],
          },

          set570: {
            url570:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat570: [
              "Separations,Anne Arundel WIA",
              "Maryland Separations by Age",
              +year+"Q1","A01",
              "14-18",

              dataend,
            ],
          },
          set571: {
            url571:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat571: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q2","A01",
              "14-18",

              dataend,
            ],
          },
          set572: {
            url572:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat572: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q3","A01",
              "14-18",

              dataend,
            ],
          },
          set573: {
            url573:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat573: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q4","A01",
              "14-18",

              dataend,
            ],
          },

          set574: {
            url574:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat574: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q1","A02",
              "19-21",

              dataend,
            ],
          },
          set575: {
            url575:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat575: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q2","A02",
              "19-21",

              dataend,
            ],
          },
          set576: {
            url576:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat576: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q3","A02",
              "19-21",

              dataend,
            ],
          },
          set577: {
            url577:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat577: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q4","A02",
              "19-21",

              dataend,
            ],
          },

          set578: {
            url578:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat578: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q1","A03",
              "22-24",

              dataend,
            ],
          },
          set579: {
            url579:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat579: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q2","A03",
              "22-24",

              dataend,
            ],
          },
          set580: {
            url580:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat580: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q3","A03",
              "22-24",

              dataend,
            ],
          },
          set581: {
            url581:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat581: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q4","A03",
              "22-24",

              dataend,
            ],
          },

          set582: {
            url582:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat582: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q1","A04",
              "25-34",

              dataend,
            ],
          },
          set583: {
            url583:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat583: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q2","A04",
              "25-34",

              dataend,
            ],
          },
          set584: {
            url584:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat584: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q3","A04",
              "25-34",

              dataend,
            ],
          },
          set585: {
            url585:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat585: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q4","A04",
              "25-34",

              dataend,
            ],
          },

          set586: {
            url586:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat586: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q1","A05",
              "35-44",

              dataend,
            ],
          },
          set587: {
            url587:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat587: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q2","A05",
              "35-44",

              dataend,
            ],
          },
          set588: {
            url588:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat588: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q3","A05",
              "35-44",

              dataend,
            ],
          },
          set589: {
            url589:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat589: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q4","A05",
              "35-44",

              dataend,
            ],
          },

          set590: {
            url590:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat590: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q1","A06",
              "45-54",

              dataend,
            ],
          },
          set591: {
            url591:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat591: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q2","A06",
              "45-54",

              dataend,
            ],
          },
          set592: {
            url592:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat592: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q3","A06",
              "45-54",

              dataend,
            ],
          },
          set593: {
            url593:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat593: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q4","A06",
              "45-54",

              dataend,
            ],
          },

          set594: {
            url594:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat594: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q1","A07",
              "55-64",

              dataend,
            ],
          },
          set595: {
            url595:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat595: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q2","A07",
              "55-64",

              dataend,
            ],
          },
          set596: {
            url596:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat596: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q3","A07",
              "55-64",

              dataend,
            ],
          },
          set597: {
            url597:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat597: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Age",
              +year+"Q4","A07",
              "55-64",

              dataend,
            ],
          },

          set598: {
            url598:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat598: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q1","1",
              "Male",

              dataend,
            ],
          },
          set599: {
            url599:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat599: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q2","1",
              "Male",

              dataend,
            ],
          },
          set600: {
            url600:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat600: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q3","1",
              "Male",

              dataend,
            ],
          },
          set601: {
            url601:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat601: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q4","1",
              "Male",

              dataend,
            ],
          },

          set602: {
            url602:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat602: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q1","2",
              "Female",

              dataend,
            ],
          },
          set603: {
            url603:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat603: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q2","2",
              "Female",

              dataend,
            ],
          },
          set604: {
            url604:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat604: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q3","2",
              "Female",

              dataend,
            ],
          },
          set605: {
            url605:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat605: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q4","2",
              "Female",

              dataend,
            ],
          },

          set606: {
            url606:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat606: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Gender",
              +year+"Q1","1",
              "Male",

              dataend,
            ],
          },
          set607: {
            url607:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat607: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Gender",
              +year+"Q2","1",
              "Male",

              dataend,
            ],
          },
          set608: {
            url608:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat608: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Gender",
              +year+"Q3","1",
              "Male",

              dataend,
            ],
          },
          set609: {
            url609:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat609: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Gender",
              +year+"Q4","1",
              "Male",

              dataend,
            ],
          },

          set610: {
            url610:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat610: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Gender",
              +year+"Q1","2",
              "Female",

              dataend,
            ],
          },

          set611: {
            url611:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat611: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Gender",
              +year+"Q2","2",
              "Female",

              dataend,
            ],
          },
          set612: {
            url612:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat612: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Gender",
              +year+"Q3","2",
              "Female",

              dataend,
            ],
          },
          set613: {
            url613:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat613: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Gender",
              +year+"Q4","2",
              "Female",

              dataend,
            ],
          },

          set614: {
            url614:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat614: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Gender",
              +year+"Q1","1",
              "Male",

              dataend,
            ],
          },
          set615: {
            url615:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat615: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Gender",
              +year+"Q2","1",
              "Male",

              dataend,
            ],
          },
          set616: {
            url616:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat616: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Gender",
              +year+"Q3","1",
              "Male",

              dataend,
            ],
          },
          set617: {
            url617:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat617: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Gender",
              +year+"Q4","1",
              "Male",

              dataend,
            ],
          },

          set618: {
            url618:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat618: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Gender",
              +year+"Q1","2",
              "Female",

              dataend,
            ],
          },
          set619: {
            url619:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat619: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Gender",
              +year+"Q2","2",
              "Female",

              dataend,
            ],
          },
          set620: {
            url620:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat620: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Gender",
              +year+"Q3","2",
              "Female",

              dataend,
            ],
          },
          set621: {
            url621:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat621: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Gender",
              +year+"Q4","2",
              "Female",

              dataend,
            ],
          },

          set622: {
            url622:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat622: [
              "Job Change,Anne Arundel WIA",
              "Maryland Job Net Change by Education",
              +year+"Q1","E1",
              "Less than High school",

              dataend,
            ],
          },
          set623: {
            url623:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat623: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Education",
              +year+"Q2","E1",
              "Less than High school",

              dataend,
            ],
          },
          set624: {
            url624:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat624: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Education",
              +year+"Q3","E1",
              "Less than High school",

              dataend,
            ],
          },
          set625: {
            url625:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat625: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Education",
              +year+"Q4","E1",
              "Less than High school",

              dataend,
            ],
          },

          set626: {
            url626:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat626: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Education",
              +year+"Q1","E2",
              '"High school or equivalent, no college"',

              dataend,
            ],
          },
          set627: {
            url627:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat627: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Education",
              +year+"Q2","E2",
              '"High school or equivalent, no college"',

              dataend,
            ],
          },
          set628: {
            url628:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat628: [
              "Job Change,Anne Arundel WIA",
              "Maryland Job Net Change by Education",
              +year+"Q3","E2",
              '"High school or equivalent, no college"',

              dataend,
            ],
          },
          set629: {
            url629:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat629: [
              "Job Change,Anne Arundel WIA",
              "Maryland Job Net Change by Education",
              +year+"Q4","E2",
              '"High school or equivalent, no college"',

              dataend,
            ],
          },

          set630: {
            url630:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat630: [
              "Job Change,Anne Arundel WIA",
              "Maryland Job Net Change by Education",
              +year+"Q1","E3",
              "Some college or Associate degree",

              dataend,
            ],
          },
          set631: {
            url631:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat631: [
              "Job Change,Anne Arundel WIA",
              "Maryland Job Net Change by Education",
              +year+"Q2","E3",
              "Some college or Associate degree",

              dataend,
            ],
          },
          set632: {
            url632:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat632: [
              "Job Change,Anne Arundel WIA",
              "Maryland Job Net Change by Education",
              +year+"Q3","E3",
              "Some college or Associate degree",

              dataend,
            ],
          },
          set633: {
            url633:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat633: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Education",
              +year+"Q4","E3",
              "Some college or Associate degree",

              dataend,
            ],
          },

          set634: {
            url634:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat634: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Education",
              +year+"Q1","E4",
              "Bachelor's degree or advanced degree",

              dataend,
            ],
          },
          set635: {
            url635:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat635: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Education",
              +year+"Q2","E4",
              "Bachelor's degree or advanced degree",

              dataend,
            ],
          },
          set636: {
            url636:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat636: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Education",
              +year+"Q3","E4",
              "Bachelor's degree or advanced degree",

              dataend,
            ],
          },
          set637: {
            url637:
              "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat637: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Education",
              +year+"Q4","E4",
              "Bachelor's degree or advanced degree",

              dataend,
            ],
          },

          set638: {
            url638:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat638: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q1","E1",
              "Less than High school",

              dataend,
            ],
          },
          set639: {
            url639:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat639: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q2","E1",
              "Less than High school",

              dataend,
            ],
          },
          set640: {
            url640:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat640: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q3","E1",
              "Less than High school",

              dataend,
            ],
          },
          set641: {
            url641:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat641: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q4","E1",
              "Less than High school",

              dataend,
            ],
          },

          set642: {
            url642:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat642: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q1","E2",
              '"High school or equivalent, no college"',

              dataend,
            ],
          },
          set643: {
            url643:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat643: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q2","E2",
              '"High school or equivalent, no college"',

              dataend,
            ],
          },
          set644: {
            url644:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat644: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q3","E2",
              '"High school or equivalent, no college"',

              dataend,
            ],
          },
          set645: {
            url645:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat645: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q4","E2",
              '"High school or equivalent, no college"',

              dataend,
            ],
          },

          set646: {
            url646:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat646: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q1","E3",
              "Some college or Associate degree",

              dataend,
            ],
          },
          set647: {
            url647:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat647: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q2","E3",
              "Some college or Associate degree",

              dataend,
            ],
          },
          set648: {
            url648:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat648: [
              "New Hires,Anne Arundel WIA",
              "Maryland New Hires by Education",
              +year+"Q3","E3",
              "Some college or Associate degree",

              dataend,
            ],
          },
          set649: {
            url649:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat649: [
              "New Hires,Anne Arundel WIA",
              "Maryland New Hires by Education",
              +year+"Q4","E3",
              "Some college or Associate degree",

              dataend,
            ],
          },

          set650: {
            url650:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat650: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q1","E4",
              "Bachelor's degree or advanced degree",

              dataend,
            ],
          },
          set651: {
            url651:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat651: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q2","E4",
              "Bachelor's degree or advanced degree",

              dataend,
            ],
          },
          set652: {
            url652:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat652: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q3","E4",
              "Bachelor's degree or advanced degree",

              dataend,
            ],
          },
          set653: {
            url653:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat653: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q4","E4",
              "Bachelor's degree or advanced degree",

              dataend,
            ],
          },

          set654: {
            url654:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat654: [
              "Turnover,Anne Arundel WIA",
              "Maryland Turnover Rate by Education",
              +year+"Q1","E1",
              "Less than High school",

              dataend,
            ],
          },
          set655: {
            url655:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat655: [
              "Turnover,Anne Arundel WIA",
              "Maryland Turnover Rate by Education",
              +year+"Q2","E1",
              "Less than High school",

              dataend,
            ],
          },
          set656: {
            url656:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat656: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Education",
              +year+"Q3","E1",
              "Less than High school",

              dataend,
            ],
          },
          set657: {
            url657:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat657: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Education",
              +year+"Q4","E1",
              "Less than High school",

              dataend,
            ],
          },

          set658: {
            url658:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat658: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Education",
              +year+"Q1","E2",
              '"High school or equivalent, no college"',

              dataend,
            ],
          },
          set659: {
            url659:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat659: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Education",
              +year+"Q2","E2",
              '"High school or equivalent, no college"',

              dataend,
            ],
          },
          set660: {
            url660:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat660: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Education",
              +year+"Q3","E2",
              '"High school or equivalent, no college"',

              dataend,
            ],
          },
          set661: {
            url661:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat661: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Education",
              +year+"Q4","E2",
              '"High school or equivalent, no college"',

              dataend,
            ],
          },

          set662: {
            url662:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat662: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Education",
              +year+"Q1","E3",
              "Some college or Associate degree",

              dataend,
            ],
          },
          set663: {
            url663:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat663: [
              "Turnover,Anne Arundel WIA",
              "Maryland Turnover Rate by Education",
              +year+"Q2","E3",
              "Some college or Associate degree",

              dataend,
            ],
          },
          set664: {
            url664:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat664: [
              "Turnover,Anne Arundel WIA",
              "Maryland Turnover Rate by Education",
              +year+"Q3","E3",
              "Some college or Associate degree",

              dataend,
            ],
          },
          set665: {
            url665:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat665: [
              "Turnover,Anne Arundel WIA",
              "Maryland Turnover Rate by Education",
              +year+"Q4","E3",
              "Some college or Associate degree",

              dataend,
            ],
          },

          set666: {
            url666:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat666: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Education",
              +year+"Q1","E4",
              "Bachelor's degree or advanced degree",

              dataend,
            ],
          },
          set667: {
            url667:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat667: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Education",
              +year+"Q2","E4",
              "Bachelor's degree or advanced degree",

              dataend,
            ],
          },
          set668: {
            url668:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat668: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Education",
              +year+"Q3","E4",
              "Bachelor's degree or advanced degree",

              dataend,
            ],
          },
          set669: {
            url669:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat669: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Education",
              +year+"Q4","E4",
              "Bachelor's degree or advanced degree",

              dataend,
            ],
          },

          set670: {
            url670:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat670: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Gender",
              +year+"Q1","1",
              "Male",

              dataend,
            ],
          },
          set671: {
            url671:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat671: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Gender",
              +year+"Q2","1",
              "Male",

              dataend,
            ],
          },
          set672: {
            url672:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat672: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Gender",
              +year+"Q3","1",
              "Male",

              dataend,
            ],
          },
          set673: {
            url673:
              "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat673: [
              "Job Change,Anne Arundel WIA",

              "Maryland Job Net Change by Gender",
              +year+"Q4","1",
              "Male",

              dataend,
            ],
          },

          set674: {
            url674:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat674: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender All",
              +year+"Q1","0",
              "All",

              dataend,
            ],
          },

          set675: {
            url675:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat675: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender All",
              +year+"Q2","0",
              "All",

              dataend,
            ],
          },

          set676: {
            url676:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat676: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Monthly Earnings by Gender All",
              +year+"Q3","0",
              "All",
              dataend,
            ],
          },

          set677: {
            url677:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat677: [
              "Earnings,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender All",
              +year+"Q4","0",
              "All",
              dataend,
            ],
          },

          set678: {
            url678:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat678: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Gender",
              +year+"Q1","1",
              "Male",

              dataend,
            ],
          },
          set679: {
            url679:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat679: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Gender",
              +year+"Q2","1",
              "Male",

              dataend,
            ],
          },
          set680: {
            url680:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat680: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Gender",
              +year+"Q3","1",
              "Male",

              dataend,
            ],
          },
          set681: {
            url681:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat681: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Gender",
              +year+"Q4","1",
              "Male",

              dataend,
            ],
          },

          set682: {
            url682:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat682: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Gender",
              +year+"Q1","2",
              "Female",

              dataend,
            ],
          },
          set683: {
            url683:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat683: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Gender",
              +year+"Q2","2",
              "Female",

              dataend,
            ],
          },
          set684: {
            url684:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat684: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Gender",
              +year+"Q3","2",
              "Female",

              dataend,
            ],
          },
          set685: {
            url685:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat685: [
              "Turnover,Anne Arundel WIA",

              "Maryland Turnover Rate by Gender",
              +year+"Q4","2",
              "Female",

              dataend,
            ],
          },

          set686: {
            url686:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat686: [
              "New Hires,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q1","2",
              "Female",

              dataend,
            ],
          },

          set687: {
            url687:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat687: [
              "New Hires,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q2","2",
              "Female",

              dataend,
            ],
          },

          set688: {
            url688:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat688: [
              "New Hires,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q3","2",
              "Female",

              dataend,
            ],
          },

          set689: {
            url689:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat689: [
              "New Hires,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q4","2",
              "Female",

              dataend,
            ],
          },

          set690: {
            url690:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat690: [
              "New Hires,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q1","2",
              "Male",

              dataend,
            ],
          },

          set691: {
            url691:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat691: [
              "New Hires,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q2","2",
              "Male",

              dataend,
            ],
          },

          set692: {
            url692:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat692: [
              "New Hires,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q3","2",
              "Male",

              dataend,
            ],
          },

          set693: {
            url693:
              "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat693: [
              "New Hires,Anne Arundel WIA",

              "Maryland Average Monthly Earnings by Gender",
              +year+"Q4","2",
              "Male",

              dataend,
            ],
          },
          set694: {
            url694:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat694: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q1","E5",
              "Educational attainment not available (workers aged 24 or younger)",

              dataend,
            ],
          },

          set695: {
            url695:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat695: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q2","E5",
              "Educational attainment not available (workers aged 24 or younger)",

              dataend,
            ],
          },

          set696: {
            url696:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat696: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q3","E5",
              "Educational attainment not available (workers aged 24 or younger)",

              dataend,
            ],
          },

          set697: {
            url697:
              "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat697: [
              "New Hires,Anne Arundel WIA",

              "Maryland New Hires by Education",
              +year+"Q4","E5",
              "Educational attainment not available (workers aged 24 or younger)",

              dataend,
            ],
          },

          set698: {
            url698:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat698: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Gender All",
              +year+"Q1","0",
              "All Sexes",

              dataend,
            ],
          },

          set699: {
            url699:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat699: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Gender All",
              +year+"Q2","0",
              "All Sexes",

              dataend,
            ],
          },

          set700: {
            url700:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat700: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Gender All",
              +year+"Q3","0",
              "All Sexes",

              dataend,
            ],
          },

          set701: {
            url701:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat701: [
              "Workers,Anne Arundel WIA",

              "Maryland Workers by Gender All",
              +year+"Q4","0",
              "All Sexes",

              dataend,
            ],
          },


                  set702: {
                    url702:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat702: [
                      "Workers,Anne Arundel WIA",
                      "Maryland Workers by Age All",
                      +year+"Q1","A00",
                      "All Ages",

                      dataend,
                    ],
                  },
                  set703: {
                    url703:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat703: [
                      "Workers,Anne Arundel WIA",

                      "Maryland Workers by Age All",
                      +year+"Q2","A00",
                      "All Ages",

                      dataend,
                    ],
                  },
                  set704: {
                    url704:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat704: [
                      "Workers,Anne Arundel WIA",

                      "Maryland Workers by Age All",
                      +year+"Q3","A00",
                      "All Ages",

                      dataend,
                    ],
                  },
                  set705: {
                    url705:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat705: [
                      "Workers,Anne Arundel WIA",

                      "Maryland Workers by Age All",
                      +year+"Q4","A00",
                      "All Ages",

                      dataend,
                    ],
                  },

                  set706: {
                    url706:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat706: [
                      "Job Change,Anne Arundel WIA",

                      "Maryland Job Net Change by Gender",
                      +year+"Q1","2",
                      "Female",

                      dataend,
                    ],
                  },
                  set707: {
                    url707:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat707: [
                      "Job Change,Anne Arundel WIA",

                      "Maryland Job Net Change by Gender",
                      +year+"Q2","2",
                      "Female",

                      dataend,
                    ],
                  },
                  set708: {
                    url708:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat708: [
                      "Job Change,Anne Arundel WIA",

                      "Maryland Job Net Change by Gender",
                      +year+"Q3","2",
                      "Female",

                      dataend,
                    ],
                  },
                  set709: {
                    url709:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat709: [
                      "Job Change,Anne Arundel WIA",

                      "Maryland Job Net Change by Gender",
                      +year+"Q4","2",
                      "Female",

                      dataend,
                    ],
                  },

                  set710: {
                    url710:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat710: [
                      "Job Change,Anne Arundel WIA",

                      "Maryland Job Net Change by Gender All",
                      +year+"Q1","0",
                      "All",

                      dataend,
                    ],
                  },
                  set711: {
                    url711:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat711: [
                      "Job Change,Anne Arundel WIA",

                      "Maryland Job Net Change by Gender All",
                      +year+"Q2","0",
                      "All",

                      dataend,
                    ],
                  },
                  set712: {
                    url712:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat712: [
                      "Job Change,Anne Arundel WIA",

                      "Maryland Job Net Change by Gender All",
                      +year+"Q3","0",
                      "All",

                      dataend,
                    ],
                  },
                  set713: {
                    url713:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat713: [
                      "Job Change,Anne Arundel WIA",

                      "Maryland Job Net Change by Gender All",
                      +year+"Q4","0",
                      "All",

                      dataend,
                    ],
                  },

                  set714: {
                    ur714:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat714: [
                      "Workers,Anne Arundel WIA",
                      "Maryland Workers by Age",
                      +year+"Q1","A08",
                      "65-99",

                      dataend,
                    ],
                  },

                  set715: {
                    url715:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat715: [
                      "Workers,Anne Arundel WIA",
                      "Maryland Workers by Age",
                      +year+"Q2","A08",
                      "65-99",

                      dataend,
                    ],
                  },
                  set716: {
                    ur716:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat716: [
                      "Workers,Anne Arundel WIA",

                      "Maryland Workers by Age",
                      +year+"Q3","A08",
                      "65-99",

                      dataend,
                    ],
                  },

                  set717: {
                    url717:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat717: [
                      "Workers,Anne Arundel WIA",

                      "Maryland Workers by Age",
                      +year+"Q4","A08",
                      "65-99",

                      dataend,
                    ],
                  },

                  set718: {
                    url718:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat718: [
                      "Separations,Anne Arundel WIA",

                      "Maryland Separations by Age",
                      +year+"Q1","A08",
                      "65-99",

                      dataend,
                    ],
                  },
                  set719: {
                    url719:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat719: [
                      "Separations,Anne Arundel WIA",

                      "Maryland Separations by Age",
                      +year+"Q2","A08",
                      "65-99",

                      dataend,
                    ],
                  },
                  set720: {
                    url720:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat720: [
                      "Separations,Anne Arundel WIA",

                      "Maryland Separations by Age",
                      +year+"Q3","A08",
                      "65-99",

                      dataend,
                    ],
                  },
                  set721: {
                    url721:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat721: [
                      "Separations,Anne Arundel WIA",

                      "Maryland Separations by Age",
                      +year+"Q4","A08",
                      "65-99",

                      dataend,
                    ],
                  },

                  set722: {
                    url722:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat722: [
                      "New Hires,Anne Arundel WIA",

                      "Maryland New Hires by Gender",
                      +year+"Q1","1",
                      "Male",

                      dataend,
                    ],
                  },

                  set723: {
                    url723:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat723: [
                      "New Hires,Anne Arundel WIA",

                      "Maryland New Hires by Gender",
                      +year+"Q2","1",
                      "Male",

                      dataend,
                    ],
                  },

                  set724: {
                    url724:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat724: [
                      "New Hires,Anne Arundel WIA",

                      "Maryland New Hires by Gender",
                      +year+"Q3","1",
                      "Male",

                      dataend,
                    ],
                  },

                  set725: {
                    url725:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat725: [
                      "New Hires,Anne Arundel WIA",

                      "Maryland New Hires by Gender",
                      +year+"Q4","1",
                      "Male",

                      dataend,
                    ],
                  },

                  set726: {
                    url726:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat726: [
                      "New Hires,Anne Arundel WIA",

                      "Maryland New Hires by Gender",
                      +year+"Q1","2",
                      "Female",

                      dataend,
                    ],
                  },

                  set727: {
                    url727:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat727: [
                      "New Hires,Anne Arundel WIA",

                      "Maryland New Hires by Gender",
                      +year+"Q2","2",
                      "Female",

                      dataend,
                    ],
                  },

                  set728: {
                    url728:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat728: [
                      "New Hires,Anne Arundel WIA",

                      "Maryland New Hires by Gender",
                      +year+"Q3","2",
                      "Female",

                      dataend,
                    ],
                  },

                  set729: {
                    url729:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat729: [
                      "New Hires,Anne Arundel WIA",

                      "Maryland New Hires by Gender",
                      +year+"Q4","2",
                      "Female",

                      dataend,
                    ],
                  },

                  set730: {
                    url730:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat730: [
                      "Earnings,Anne Arundel WIA",
                      "Maryland Average Monthly Earnings by Age",
                      +year+"Q1","A08",
                      "65-99",

                      dataend,
                    ],
                  },

                  set731: {
                    url731:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat731: [
                      "Earnings,Anne Arundel WIA",
                      "Maryland Average Monthly Earnings by Age",
                      +year+"Q2","A08",
                      "65-99",

                      dataend,
                    ],
                  },

                  set732: {
                    url732:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat732: [
                      "Earnings,Anne Arundel WIA",
                      "Maryland Average Monthly Earnings by Age",
                      +year+"Q3","A08",
                      "65-99",

                      dataend,
                    ],
                  },

                  set733: {
                    url733:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat733: [
                      "Earnings,Anne Arundel WIA",
                      "Maryland Average Monthly Earnings by Age",
                      +year+"Q4","A08",
                      "65-99",
                      dataend,
                    ],
                  },

                  set734: {
                    url734:
                      "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat734: [
                      "Job change,Anne Arundel WIA",
                      "Maryland Job Net Change by Education All",
                      +year+"Q1","E0",
                      "All Education Categories",
                      dataend,
                    ],
                  },
                  set735: {
                    url735:
                      "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat735: [
                      "Job change,Anne Arundel WIA",
                      "Maryland Job Net Change by Education All",
                      +year+"Q2","E0",
                      "All Education Categories",

                      dataend,
                    ],
                  },
                  set736: {
                    url736:
                      "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat736: [
                      "Job change,Anne Arundel WIA",
                      "Maryland Job Net Change by Education All",
                      +year+"Q3","E0",
                      "All Education Categories",

                      dataend,
                    ],
                  },
                  set737: {
                    url737:
                      "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat737: [
                      "Job change,Anne Arundel WIA",
                      "Maryland Job Net Change by Education All",
                      +year+"Q4","E0",
                      "All Education Categories",

                      dataend,
                    ],
                  },

                  set738: {
                    url738:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat738: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education All",
                      +year+"Q1","E0",
                      "All Education Categories",

                      dataend,
                    ],
                  },

                  set739: {
                    url739:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat739: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education All",
                      +year+"Q2","E0",
                      "All Education Categories",

                      dataend,
                    ],
                  },

                  set740: {
                    url740:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat740: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education All",
                      +year+"Q3","E0",
                      "All Education Categories",

                      dataend,
                    ],
                  },

                  set741: {
                    url741:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat741: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education All",
                      +year+"Q4","E0",
                      "All Education Categories",

                      dataend,
                    ],
                  },

                  set742: {
                    url742:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat742: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q1","E1",
                      "Less than High school",

                      dataend,
                    ],
                  },

                  set743: {
                    url743:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat743: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q2","E1",
                      "Less than High school",

                      dataend,
                    ],
                  },

                  set744: {
                    url744:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat744: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q3","E1",
                      "Less than High school",

                      dataend,
                    ],
                  },

                  set745: {
                    url745:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat745: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q4","E1",
                      "Less than High school",

                      dataend,
                    ],
                  },

                  set746: {
                    url746:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat746: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q1","E2",
                      '"High school or equivalent, no college"',

                      dataend,
                    ],
                  },

                  set747: {
                    url747:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat747: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q2","E2",
                      '"High school or equivalent, no college"',

                      dataend,
                    ],
                  },

                  set748: {
                    url748:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat748: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q3","E2",
                      '"High school or equivalent, no college"',

                      dataend,
                    ],
                  },

                  set748: {
                    url748:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat748: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q3","E2",
                      '"High school or equivalent, no college"',

                      dataend,
                    ],
                  },

                  set749: {
                    url749:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat749: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q4","E2",
                      '"High school or equivalent, no college"',

                      dataend,
                    ],
                  },

                  set750: {
                    url750:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat750: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q1","E3",
                      "Some college or Associate degree",

                      dataend,
                    ],
                  },

                  set751: {
                    url751:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat751: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q2","E3",
                      "Some college or Associate degree",

                      dataend,
                    ],
                  },

                  set752: {
                    url752:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat752: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q3","E3",
                      "Some college or Associate degree",

                      dataend,
                    ],
                  },

                  set753: {
                    url753:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat753: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q4","E3",
                      "Some college or Associate degree",

                      dataend,
                    ],
                  },

                  set754: {
                    url754:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat754: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q1","E4",
                      "Bachelor's degree or advanced degree",

                      dataend,
                    ],
                  },

                  set755: {
                    url755:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat755: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q2","E4",
                      "Bachelor's degree or advanced degree",

                      dataend,
                    ],
                  },

                  set756: {
                    url756:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat756: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q3","E4",
                      "Bachelor's degree or advanced degree",

                      dataend,
                    ],
                  },

                  set757: {
                    url757:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat757: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q4","E4",
                      "Bachelor's degree or advanced degree",

                      dataend,
                    ],
                  },

                  set758: {
                    url758:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat758: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q1","E5",
                      "Educational attainment not available (workers aged 24 or younger)",

                      dataend,
                    ],
                  },

                  set759: {
                    url759:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat759: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q2","E5",
                      "Educational attainment not available (workers aged 24 or younger)",

                      dataend,
                    ],
                  },

                  set760: {
                    url760:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat760: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q3","E5",
                      "Educational attainment not available (workers aged 24 or younger)",

                      dataend,
                    ],
                  },

                  set761: {
                    url761:
                      "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat761: [
                      "Separations,Anne Arundel WIA",
                      "Maryland Separations by Education",
                      +year+"Q4","E5",
                      "Educational attainment not available (workers aged 24 or younger)",

                      dataend,
                    ],
                  },

                  set762: {
                    url762:
                      "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat762: [
                      "Job Change,Anne Arundel WIA",

                      "Maryland Job Net Change by Education",
                      +year+"Q1","E5",
                      "Educational attainment not available (workers aged 24 or younger)",

                      dataend,
                    ],
                  },

                  set763: {
                    url763:
                      "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat763: [
                      "Job Change,Anne Arundel WIA",

                      "Maryland Job Net Change by Education",
                      +year+"Q2","E5",
                      "Educational attainment not available (workers aged 24 or younger)",

                      dataend,
                    ],
                  },

                  set764: {
                    url764:
                      "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat764: [
                      "Job Change,Anne Arundel WIA",

                      "Maryland Job Net Change by Education",
                      +year+"Q3","E5",
                      "Educational attainment not available (workers aged 24 or younger)",

                      dataend,
                    ],
                  },

                  set765: {
                    url765:
                      "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q4" +
                      "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat765: [
                      "Job Change,Anne Arundel WIA",

                      "Maryland Job Net Change by Education",
                      +year+"Q4","E5",
                      "Educational attainment not available (workers aged 24 or younger)",

                      dataend,
                    ],
                  },

                  set766: {
                    url766:
                      "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q1" +
                      "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat766: [
                      "Turnover,Anne Arundel WIA",
                      "Maryland Turnover Rate by Education",
                      year + "Q1",
                      "E5",
                      "Educational attainment not available (workers aged 24 or younger)",
                      dataend+ ",",
                    ],
                  },

                  set767: {
                    url767:
                      "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat767: [
                      "Turnover,Anne Arundel WIA",
                      "Maryland Turnover Rate by Education",
                      year + "Q2",
                      "E5",
                      "Educational attainment not available (workers aged 24 or younger)",

                      dataend+ ",",
                    ],
                  },

                  set768: {
                    url768:
                      "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q3" +
                      "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat768: [
                      "Turnover,Anne Arundel WIA","Maryland Turnover Rate by Education",
                      year + "Q3",
                      "E5",
                      "Educational attainment not available (workers aged 24 or younger)",

                      dataend+ ",",
                    ],
                  },

                  set769: {
                  url769:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat769: [
                    "Earnings,Anne Arundel WIA",
                    "Maryland Average Monthly Earnings by Age All",
                    +year+"Q1","A00",
                    "All Ages",
                    dataend,
                  ],
                },

                set770: {
                url770:
                  "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
                  year +
                  "-" +
                  "Q2" +
                  "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
                arrayformat770: [
                  "Earnings,Anne Arundel WIA",
                  "Maryland Average Monthly Earnings by Age All",
                  +year+"Q2","A00",
                  "All Ages",
                  dataend,
                ],
              },

              set771: {
              url771:
                "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
                year +
                "-" +
                "Q2" +
                "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat771: [
                "Earnings,Anne Arundel WIA",
                "Maryland Average Monthly Earnings by Age All",
                +year+"Q2","A00",
                "All Ages",
                dataend,
              ],
              },

              set772: {
              url772:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat772: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Monthly Earnings by Age All",
              +year+"Q3","A00",
              "All Ages",
              dataend,
              ],
              },

              set773: {
              url773:
              "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat773: [
              "Earnings,Anne Arundel WIA",
              "Maryland Average Monthly Earnings by Age All",
              +year+"Q4","A00",
              "All Ages",
              dataend,
              ],
              },

              set774: {
              url774:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat774: [
              "Separations,Anne Arundel WIA",
              "Maryland Separations by Age All",
              +year+"Q1","A00",
              "All Ages",
              dataend,
              ],
              },

              set775: {
              url775:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat775: [
              "Separations,Anne Arundel WIA",
              "Maryland Separations by Age All",
              +year+"Q2","A00",
              "All Ages",
              dataend,
              ],
              },

              set776: {
              url776:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat776: [
              "Separations,Anne Arundel WIA",
              "Maryland Separations by Age All",
              +year+"Q3","A00",
              "All Ages",
              dataend,
              ],
              },

              set777: {
              url777:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat777: [
              "Separations,Anne Arundel WIA",
              "Maryland Separations by Age All",
              +year+"Q4","A00",
              "All Ages",
              dataend,
              ],
              },
              set778: {
              url778:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat778: [
              "Turnover,Anne Arundel WIA","Maryland Turnover Rate by Education All",
              year + "Q1",
              "E0",
              "All Education Categories",
              dataend,
              ],
              },

              set779: {
              url779:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q2" +
              "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat779: [
              "Turnover,Anne Arundel WIA","Maryland Turnover Rate by Education All",
              year + "Q2",
              "E0",
              "All Education Categories",
              dataend,
              ],
              },

              set780: {
              url780:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q3" +
              "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat780: [
              "Turnover,Anne Arundel WIA","Maryland Turnover Rate by Education All",
              year + "Q3",
              "E0",
              "All Education Categories",
              dataend,
              ],
              },

              set781: {
              url781:
              "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat781: [
              "Turnover,Anne Arundel WIA","Maryland Turnover Rate by Education All",
              year + "Q4",
              "E0",
              "All Education Categories",
              dataend,
              ],
              },

              set782: {
              url782:
               "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
               year +
               "-" +
               "Q1" +
               "&key=855666deab62d95596011f1944d9f1bd8c918853",
              arrayformat782: [
               "Separations,Anne Arundel WIA",
               "Maryland Separations by Gender All",
               +year+"Q1","0",
               "All",
               dataend,
              ],
              },

              set783: {
                url783:
                  "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                  year +
                  "-" +
                  "Q2" +
                  "&key=855666deab62d95596011f1944d9f1bd8c918853",
                arrayformat783: [
                  "Separations,Anne Arundel WIA",
                  "Maryland Separations by Gender All",
                  +year+"Q2","0",
                  "All",
                  dataend,
                ],
                },

                set784: {
                   url784:
                     "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                     year +
                     "-" +
                     "Q3" +
                     "&key=855666deab62d95596011f1944d9f1bd8c918853",
                   arrayformat784: [
                     "Separations,Anne Arundel WIA",
                     "Maryland Separations by Gender All",
                     +year+"Q3","0",
                     "All",
                     dataend,
                   ],
                   },

                   set785: {
                      url785:
                        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                        year +
                        "-" +
                        "Q4" +
                        "&key=855666deab62d95596011f1944d9f1bd8c918853",
                      arrayformat785: [
                        "Separations,Anne Arundel WIA",
                        "Maryland Separations by Gender All",
                        +year+"Q4","0",
                        "All",
                        dataend,
                      ],
                      },

                      set786: {
                      url786:
                        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
                        year +
                        "-" +
                        "Q1" +
                        "&key=855666deab62d95596011f1944d9f1bd8c918853",
                      arrayformat786: [
                        "Turnover,Anne Arundel WIA",
                        "Maryland Turnover Rate by Gender All",
                        +year+"Q1","0",
                        "All",
                        dataend,
                      ],
                    },

                    set787: {
                    url787:
                      "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
                      year +
                      "-" +
                      "Q2" +
                      "&key=855666deab62d95596011f1944d9f1bd8c918853",
                    arrayformat787: [
                      "Turnover,Anne Arundel WIA",
                      "Maryland Turnover Rate by Gender All",
                      +year+"Q2","0",
                      "All",
                      dataend,
                    ],
                  },

                  set788: {
                  url788:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat788: [
                    "Turnover,Anne Arundel WIA",
                    "Maryland Turnover Rate by Gender All",
                    +year+"Q3","0",
                    "All",
                    dataend,
                  ],
                },

                set789: {
                url789:
                  "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
                  year +
                  "-" +
                  "Q4" +
                  "&key=855666deab62d95596011f1944d9f1bd8c918853",
                arrayformat789: [
                  "Turnover,Anne Arundel WIA",
                  "Maryland Turnover Rate by Gender All",
                  +year+"Q4","0",
                  "All",
                  dataend,
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






console.log(results);
// console.log("Outside fucntion:",dataend);
// console.log("Data end after function:", dataend);

//Initial for loop which links to each data set
for (var i = 33; i < 790; ++i) {
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

      Maryland: {
        //QWI data

        set33: {
          url33:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat33: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Earnings by Industry",
            + year + "Q1","72",
            "Accommodation and Food Services",
            dataend,
          ],
        },

        set34: {
          url34:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat34: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Earnings by Industry",
            + year + "Q2","72",
            "Accommodation and Food Services",
            dataend,
          ],
        },
        set35: {
          url35:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat35: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Earnings by Industry",
            + year + "Q3","72",
            "Accommodation and Food Services",
            dataend,
          ],
        },
        set36: {
          url36:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat36: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Earnings by Industry",
            + year + "Q4","72",
            "Accommodation and Food Services",
            dataend,
          ],
        },

        set37: {
          url37:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat37: [
            "Job Change,Anne Arundel WIA",
            "Maryland Job Net Change by Industry",
            + year + "Q1","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },

        set38: {
          url38:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat38: [
            "Job Change,Anne Arundel WIA",
            "Maryland Job Net Change by Industry",
            + year + "Q2","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },
        set39: {
          url39:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat39: [
            "Job Change,Anne Arundel WIA",
            "Maryland Job Net Change by Industry",
            + year + "Q3","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },
        set40: {
          url40:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat40: [
            "Job Change,Anne Arundel WIA",
            "Maryland Job Net Change by Industry",
            + year + "Q4","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },

        set41: {
          url41:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat41: [
            "New Hires,Anne Arundel WIA",
            "Maryland New Hires by Industry",
            + year + "Q1","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },
        set42: {
          url42:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat42: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            + year + "Q2","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },
        set43: {
          url43:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat43: [
            "New Hires,Anne Arundel WIA",
            "Maryland New Hires by Industry",
            + year + "Q3","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },
        set44: {
          url44:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat44: [
            "New Hires,Anne Arundel WIA",
            "Maryland New Hires by Industry",
            + year + "Q4","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },

        set45: {
          url45:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat45: [
            "Separations,Anne Arundel WIA",
            "Maryland Separations by Industry",
            + year + "Q1","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },

        set46: {
          url46:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat46: [
            "Separations,Anne Arundel WIA",
            "Maryland Separations by Industry",
            + year + "Q2","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },
        set47: {
          url47:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat47: [
            "Separations,Anne Arundel WIA",
            "Maryland Separations by Industry",
            + year + "Q3","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },
        set48: {
          url48:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat48: [
            "Separations,Anne Arundel WIA",
            "Maryland Separations by Industry",
            + year + "Q4","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },

        set49: {
          url49:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat49: [
            "Turnover,Anne Arundel WIA",
            "Maryland Turnover Rate by Industry",
            + year + "Q1","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },
        set50: {
          url50:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat50: [
            "Turnover,Anne Arundel WIA",
            "Maryland Turnover Rate by Industry",
            + year + "Q2","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },
        set51: {
          url51:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat51: [
            "Turnover,Anne Arundel WIA",
            "Maryland Turnover Rate by Industry",
            + year + "Q3","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },
        set52: {
          url52:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat52: [
            "Turnover,Anne Arundel WIA",
            "Maryland Turnover Rate by Industry",
            + year + "Q4","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },

        set53: {
          url53:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat53: [
            "Workers,Anne Arundel WIA",
            "Maryland Workers by Industry",
            + year + "Q1","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },
        set54: {
          url54:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat54: [
            "Workers,Anne Arundel WIA",
            "Maryland Workers by Industry",
            + year + "Q2","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },
        set55: {
          url55:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat55: [
            "Workers,Anne Arundel WIA",
            "Maryland Workers by Industry",
            + year + "Q3","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },
        set56: {
          url56:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=72&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat56: [
            "Workers,Anne Arundel WIA",
            "Maryland Workers by Industry",
            + year + "Q4","72",
            "Accommodation and Food Services",

            dataend,
          ],
        },

        set57: {
          url57:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat57: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Earnings by Industry",
            +year+"Q1","62",
            "Health Care and Social Assistance",
            dataend,
          ],
        },

        set58: {
          url58:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat58: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set59: {
          url59:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat59: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set60: {
          url60:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat60: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Earnings by Industry",
            +year+"Q4","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },

        set61: {
          url61:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat61: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set62: {
          url62:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat62: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set63: {
          url63:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat63: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set64: {
          url64:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat64: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },

        set65: {
          url65:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat65: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set66: {
          url66:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat66: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set67: {
          url67:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat67: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set68: {
          url68:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat68: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },

        set69: {
          url69:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat69: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set70: {
          url70:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat70: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },

        set71: {
          url71:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat71: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },

        set72: {
          url72:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat72: [
            "Turnover,Anne Arundel WIA","Maryland Turnover Rate by Education",
            year + "Q4",
            "E5",
            "Educational attainment not available (workers aged 24 or younger)",

            dataend+ ",",
          ],
        },
        set73: {
          url73:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat73: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set74: {
          url74:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat74: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set75: {
          url75:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat75: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set76: {
          url76:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat76: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set77: {
          url77:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat77: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },

        set78: {
          url78:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat78: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set79: {
          url79:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat79: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set80: {
          url80:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat80: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },
        set81: {
          url81:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=62&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat81: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","62",
            "Health Care and Social Assistance",

            dataend,
          ],
        },

        set82: {
          url82:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat82: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q1","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set83: {
          url83:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat83: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set84: {
          url84:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat84: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set85: {
          url85:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat85: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set86: {
          url86:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat86: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set87: {
          url87:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat87: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set88: {
          url88:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat88: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set89: {
          url89:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat89: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },

        set90: {
          url90:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat90: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set91: {
          url91:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat91: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set92: {
          url92:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat92: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set93: {
          url93:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat93: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },

        set94: {
          url94:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat94: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set95: {
          url95:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat95: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set96: {
          url96:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat96: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set97: {
          url97:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat97: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },

        set98: {
          url98:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat98: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set99: {
          url99:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat99: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set100: {
          url100:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat100: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set101: {
          url101:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat101: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set102: {
          url102:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat102: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set103: {
          url103:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat103: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set104: {
          url104:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat104: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set105: {
          url105:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=56&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat105: [
            "Workers,Anne Arundel WIA",
            "Maryland Workers by Industry",
            +year+"Q4","56",
            "Administrative and Support and Waste Management and Remediation Services",

            dataend,
          ],
        },
        set106: {
          url106:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat106: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Earnings by Industry",
            +year+"Q1","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",
            dataend,
          ],
        },

        set107: {
          url107:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat107: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set108: {
          url108:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat108: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set109: {
          url109:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat109: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set110: {
          url110:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat110: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set111: {
          url111:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat111: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set112: {
          url112:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat112: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set113: {
          url113:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat113: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },

        set114: {
          url114:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat114: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set115: {
          url115:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat115: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set116: {
          url116:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat116: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set117: {
          url117:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat117: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },

        set118: {
          url118:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat118: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q1","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
        set119: {
          url119:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat119: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q2","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
        set120: {
          url120:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat120: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q3","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
        set121: {
          url121:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat121: [
              "Separations,Anne Arundel WIA",

              "Maryland Separations by Industry",
              +year+"Q4","11",
              "\"Agriculture, Forestry, Fishing and Hunting\"",

              dataend,
            ],
          },
        set122: {
          url122:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat122: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set123: {
          url123:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat123: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set124: {
          url124:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat124: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set125: {
          url125:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat125: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },

        set126: {
          url126:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat126: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set127: {
          url127:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat127: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set128: {
          url128:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat128: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },
        set129: {
          url129:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=11&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat129: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","11",
            "\"Agriculture, Forestry, Fishing and Hunting\"",

            dataend,
          ],
        },

        set130: {
          url130:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat130: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q1","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set131: {
          url131:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat131: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set132: {
          url132:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat132: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set133: {
          url133:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat133: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },

        set134: {
          url134:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat134: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set135: {
          url135:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat135: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set136: {
          url136:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat136: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set137: {
          url137:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat137: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },

        set138: {
          url138:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat138: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set139: {
          url139:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat139: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set140: {
          url140:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat140: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set141: {
          url141:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat141: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },

        set142: {
          url142:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat142: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set143: {
          url143:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat143: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set144: {
          url144:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat144: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set145: {
          url145:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat145: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },

        set146: {
          url146:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat146: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set147: {
          url147:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat147: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set148: {
          url148:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat148: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set149: {
          url149:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat149: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },

        set150: {
          url150:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat150: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set151: {
          url151:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat151: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set152: {
          url152:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat152: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },
        set153: {
          url153:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=71&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat153: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","71",
            '"Arts, Entertainment, and Recreation"',

            dataend,
          ],
        },

        set154: {
          url154:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat154: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Earnings by Industry",
            +year+"Q1","23",
            "Construction",
            dataend,
          ],
        },
        set155: {
          url155:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat155: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","23",
            "Construction",

            dataend,
          ],
        },
        set156: {
          url156:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat156: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","23",
            "Construction",

            dataend,
          ],
        },
        set157: {
          url157:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat157: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","23",
            "Construction",

            dataend,
          ],
        },

        set158: {
          url158:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat158: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","23",
            "Construction",

            dataend,
          ],
        },
        set159: {
          url159:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat159: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","23",
            "Construction",

            dataend,
          ],
        },
        set160: {
          url160:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat160: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","23",
            "Construction",

            dataend,
          ],
        },
        set161: {
          url161:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat161: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","23",
            "Construction",

            dataend,
          ],
        },

        set162: {
          url162:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat162: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","23",
            "Construction",

            dataend,
          ],
        },
        set163: {
          url163:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat163: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","23",
            "Construction",

            dataend,
          ],
        },
        set164: {
          url164:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat164: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","23",
            "Construction",

            dataend,
          ],
        },
        set165: {
          url165:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat165: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","23",
            "Construction",

            dataend,
          ],
        },

        set166: {
          url166:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat166: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","23",
            "Construction",

            dataend,
          ],
        },
        set167: {
          url167:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat167: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","23",
            "Construction",

            dataend,
          ],
        },
        set168: {
          url168:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat168: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","23",
            "Construction",

            dataend,
          ],
        },
        set169: {
          url169:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat169: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","23",
            "Construction",

            dataend,
          ],
        },

        set170: {
          url170:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat170: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","23",
            "Construction",

            dataend,
          ],
        },
        set171: {
          url171:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat171: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","23",
            "Construction",

            dataend,
          ],
        },
        set172: {
          url172:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat172: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","23",
            "Construction",

            dataend,
          ],
        },
        set173: {
          url173:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat173: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","23",
            "Construction",

            dataend,
          ],
        },

        set174: {
          url174:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat174: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","23",
            "Construction",

            dataend,
          ],
        },
        set175: {
          url175:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat175: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","23",
            "Construction",

            dataend,
          ],
        },
        set176: {
          url176:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat176: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","23",
            "Construction",

            dataend,
          ],
        },
        set177: {
          url177:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=23&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat177: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","23",
            "Construction",

            dataend,
          ],
        },

        set178: {
          url178:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat178: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q1","61",
            "Educational Services",
            dataend,
          ],
        },
        set179: {
          url179:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat179: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","61",
            "Educational Services",

            dataend,
          ],
        },
        set180: {
          url180:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat180: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","61",
            "Educational Services",

            dataend,
          ],
        },
        set181: {
          url181:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat181: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","61",
            "Educational Services",

            dataend,
          ],
        },

        set182: {
          url182:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat182: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","61",
            "Educational Services",

            dataend,
          ],
        },
        set183: {
          url183:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat183: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","61",
            "Educational Services",

            dataend,
          ],
        },
        set184: {
          url184:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat184: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","61",
            "Educational Services",

            dataend,
          ],
        },
        set185: {
          url185:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat185: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","61",
            "Educational Services",

            dataend,
          ],
        },

        set186: {
          url186:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat186: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","61",
            "Educational Services",

            dataend,
          ],
        },
        set187: {
          url187:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat187: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","61",
            "Educational Services",

            dataend,
          ],
        },
        set188: {
          url188:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat188: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","61",
            "Educational Services",

            dataend,
          ],
        },
        set189: {
          url189:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat189: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","61",
            "Educational Services",

            dataend,
          ],
        },

        set190: {
          url190:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat190: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","61",
            "Educational Services",

            dataend,
          ],
        },
        set191: {
          url191:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat191: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","61",
            "Educational Services",

            dataend,
          ],
        },
        set192: {
          url192:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat192: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","61",
            "Educational Services",

            dataend,
          ],
        },
        set193: {
          url193:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat193: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","61",
            "Educational Services",

            dataend,
          ],
        },

        set194: {
          url194:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat194: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","61",
            "Educational Services",

            dataend,
          ],
        },
        set195: {
          url195:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat195: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","61",
            "Educational Services",

            dataend,
          ],
        },
        set196: {
          url196:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat196: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","61",
            "Educational Services",

            dataend,
          ],
        },
        set197: {
          url197:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat197: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","61",
            "Educational Services",

            dataend,
          ],
        },

        set198: {
          url198:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat198: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","61",
            "Educational Services",

            dataend,
          ],
        },
        set199: {
          url199:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat199: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","61",
            "Educational Services",

            dataend,
          ],
        },
        set200: {
          url200:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat200: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","61",
            "Educational Services",

            dataend,
          ],
        },
        set201: {
          url201:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=61&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat201: [
            "Workers,Anne Arundel WIA",
            "Maryland Workers by Industry",
            +year+"Q4","61",
            "Educational Services",
            dataend,
          ],
        },

        set202: {
          url202:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat202: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Earnings by Industry",
            +year+"Q1","52",
            "Finance and Insurance",
            dataend,
          ],
        },
        set203: {
          url203:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat203: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set204: {
          url204:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat204: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set205: {
          url205:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat205: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","52",
            "Finance and Insurance",

            dataend,
          ],
        },

        set206: {
          url206:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat206: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set207: {
          url207:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat207: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set208: {
          url208:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat208: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set209: {
          url209:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat209: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","52",
            "Finance and Insurance",

            dataend,
          ],
        },

        set210: {
          url210:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat210: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set211: {
          url211:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat211: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set212: {
          url212:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat212: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set213: {
          url213:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat213: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","52",
            "Finance and Insurance",

            dataend,
          ],
        },

        set214: {
          url214:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat214: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set215: {
          url215:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat215: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set216: {
          url216:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat216: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set217: {
          url217:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat217: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","52",
            "Finance and Insurance",

            dataend,
          ],
        },

        set218: {
          url218:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat218: [
            "Turnover,Anne Arundel WIA",
            "Maryland Turnover Rate by Industry",
            +year+"Q1","52",
            "Finance and Insurance",
            dataend,
          ],
        },
        set219: {
          url219:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat219: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set220: {
          url220:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat220: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set221: {
          url221:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat221: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","52",
            "Finance and Insurance",

            dataend,
          ],
        },

        set222: {
          url222:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat222: [
            "Workers,Anne Arundel WIA",
            "Maryland Workers by Industry",
            +year+"Q1","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set223: {
          url223:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat223: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set224: {
          url224:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat224: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","52",
            "Finance and Insurance",

            dataend,
          ],
        },
        set225: {
          url225:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=52&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat225: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","52",
            "Finance and Insurance",

            dataend,
          ],
        },

        set226: {
          url226:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat226: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Earnings by Industry",
            +year+"Q1","51",
            "Information",
            dataend,
          ],
        },
        set227: {
          url227:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat227: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","51",
            "Information",

            dataend,
          ],
        },
        set228: {
          url228:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat228: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","51",
            "Information",

            dataend,
          ],
        },
        set229: {
          url229:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat229: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","51",
            "Information",

            dataend,
          ],
        },

        set230: {
          url230:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat230: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","51",
            "Information",

            dataend,
          ],
        },
        set231: {
          url231:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat231: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","51",
            "Information",

            dataend,
          ],
        },
        set232: {
          url232:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat232: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","51",
            "Information",

            dataend,
          ],
        },
        set233: {
          url233:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat233: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","51",
            "Information",

            dataend,
          ],
        },

        set234: {
          url234:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat234: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","51",
            "Information",

            dataend,
          ],
        },

        set235: {
          url235:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat235: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","51",
            "Information",

            dataend,
          ],
        },
        set236: {
          url236:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat236: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","51",
            "Information",

            dataend,
          ],
        },
        set237: {
          url237:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat237: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","51",
            "Information",

            dataend,
          ],
        },

        set238: {
          url238:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat238: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","51",
            "Information",

            dataend,
          ],
        },
        set239: {
          url239:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat239: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","51",
            "Information",

            dataend,
          ],
        },
        set240: {
          url240:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat240: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","51",
            "Information",

            dataend,
          ],
        },
        set241: {
          url241:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat241: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","51",
            "Information",

            dataend,
          ],
        },

        set242: {
          url242:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat242: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","51",
            "Information",

            dataend,
          ],
        },
        set243: {
          url243:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat243: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","51",
            "Information",

            dataend,
          ],
        },
        set244: {
          url244:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat244: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","51",
            "Information",

            dataend,
          ],
        },
        set245: {
          url245:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat245: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","51",
            "Information",

            dataend,
          ],
        },

        set246: {
          url246:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat246: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","51",
            "Information",

            dataend,
          ],
        },
        set247: {
          url247:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat247: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","51",
            "Information",

            dataend,
          ],
        },
        set248: {
          url248:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat248: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","51",
            "Information",

            dataend,
          ],
        },
        set249: {
          url249:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=51&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat249: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","51",
            "Information",

            dataend,
          ],
        },

        set250: {
          url250:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat250: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q1","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set251: {
          url251:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat251: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set252: {
          url252:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat252: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set253: {
          url253:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat253: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },

        set254: {
          url254:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat254: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set255: {
          url255:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat255: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set256: {
          url256:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat256: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set257: {
          url257:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat257: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },

        set258: {
          url258:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat258: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set259: {
          url259:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat259: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set260: {
          url260:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat260: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set261: {
          url261:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat261: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },

        set262: {
          url262:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat262: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set263: {
          url263:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat263: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set264: {
          url264:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat264: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set265: {
          url265:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat265: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },

        set266: {
          url266:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat266: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set267: {
          url267:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat267: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set268: {
          url268:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat268: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set269: {
          url269:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat269: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },

        set270: {
          url270:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat270: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set271: {
          url271:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat271: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set272: {
          url272:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat272: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },
        set273: {
          url273:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=55&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat273: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","55",
            "Management of Companies and Enterprises",

            dataend,
          ],
        },

        set274: {
          url274:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat274: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q1","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set275: {
          url275:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat275: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set276: {
          url276:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat276: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set277: {
          url277:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat277: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","31-33",
            "Manufacturing",

            dataend,
          ],
        },

        set278: {
          url278:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat278: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set279: {
          url279:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat279: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set280: {
          url280:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat280: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set281: {
          url281:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat281: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","31-33",
            "Manufacturing",

            dataend,
          ],
        },

        set282: {
          url282:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat282: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set283: {
          url283:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat283: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set284: {
          url284:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat284: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set285: {
          url285:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat285: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","31-33",
            "Manufacturing",

            dataend,
          ],
        },

        set286: {
          url286:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat286: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set287: {
          url287:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat287: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set288: {
          url288:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat288: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set289: {
          url289:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat289: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","31-33",
            "Manufacturing",

            dataend,
          ],
        },

        set290: {
          url290:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat290: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set291: {
          url291:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat291: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set292: {
          url292:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat292: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set293: {
          url293:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat293: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","31-33",
            "Manufacturing",

            dataend,
          ],
        },

        set294: {
          url294:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat294: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set295: {
          url295:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat295: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set296: {
          url296:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat296: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","31-33",
            "Manufacturing",

            dataend,
          ],
        },
        set297: {
          url297:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=31-33&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat297: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","31-33",
            "Manufacturing",

            dataend,
          ],
        },

        set298: {
          url298:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat298: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Earnings by Industry",
            +year+"Q1","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',
            dataend,
          ],
        },
        set299: {
          url299:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat299: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set300: {
          url300:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat300: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set301: {
          url301:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat301: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },

        set302: {
          url302:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat302: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set303: {
          url303:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat303: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set304: {
          url304:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat304: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set305: {
          url305:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat305: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },

        set306: {
          url306:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat306: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set307: {
          url307:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat307: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set308: {
          url308:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat308: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set309: {
          url309:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat309: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },

        set310: {
          url310:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat310: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set311: {
          url311:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat311: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set312: {
          url312:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat312: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set313: {
          url313:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat313: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },

        set314: {
          url314:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat314: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set315: {
          url315:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat315: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set316: {
          url316:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat316: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set317: {
          url317:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat317: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },

        set318: {
          url318:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat318: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set319: {
          url319:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat319: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set320: {
          url320:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat320: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },
        set321: {
          url321:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=21&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat321: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","21",
            '"Mining, Quarrying, and Oil and Gas Extraction"',

            dataend,
          ],
        },

        set322: {
          url322:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat322: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q1","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set323: {
          url323:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat323: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set324: {
          url324:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat324: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set325: {
          url325:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat325: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },

        set326: {
          url326:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat326: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set327: {
          url327:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat327: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set328: {
          url328:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat328: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set329: {
          url329:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat329: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },

        set330: {
          url330:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat330: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set331: {
          url331:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat331: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set332: {
          url332:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat332: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set333: {
          url333:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat333: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },

        set334: {
          url334:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat334: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set335: {
          url335:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat335: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set336: {
          url336:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat336: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set337: {
          url337:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat337: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },

        set338: {
          url338:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat338: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set339: {
          url339:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat339: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set340: {
          url340:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat340: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set341: {
          url341:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat341: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },

        set342: {
          url342:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat342: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set343: {
          url343:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat343: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set344: {
          url344:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat344: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },
        set345: {
          url345:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=81&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat345: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","81",
            "Other Services (except Public Administration)",

            dataend,
          ],
        },

        set346: {
          url346:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat346: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q1","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set347: {
          url347:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat347: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set348: {
          url348:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat348: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set349: {
          url349:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat349: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },

        set350: {
          url350:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat350: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set351: {
          url351:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat351: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set352: {
          url352:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat352: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set353: {
          url353:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat353: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },

        set354: {
          url354:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat354: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set355: {
          url355:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat355: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set356: {
          url356:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat356: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set357: {
          url357:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat357: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },

        set358: {
          url358:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat358: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set359: {
          url359:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat359: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set360: {
          url360:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat360: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set361: {
          url361:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat361: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },

        set362: {
          url362:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat362: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set363: {
          url363:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat363: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set364: {
          url364:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat364: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set365: {
          url365:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat365: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set366: {
          url366:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat366: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set367: {
          url367:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat367: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set368: {
          url368:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat368: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },
        set369: {
          url369:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=541&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat369: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","54",
            '"Professional, Scientific, and Technical Services"',

            dataend,
          ],
        },

        set370: {
          url370:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat370: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q1","92",
            "Public Administration",

            dataend,
          ],
        },
        set371: {
          url371:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat371: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","92",
            "Public Administration",

            dataend,
          ],
        },
        set372: {
          url372:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat372: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","92",
            "Public Administration",

            dataend,
          ],
        },
        set373: {
          url373:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat373: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","92",
            "Public Administration",

            dataend,
          ],
        },

        set374: {
          url374:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat374: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","92",
            "Public Administration",

            dataend,
          ],
        },
        set375: {
          url375:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat375: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","92",
            "Public Administration",

            dataend,
          ],
        },
        set376: {
          url376:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat376: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","92",
            "Public Administration",

            dataend,
          ],
        },
        set377: {
          url377:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat377: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","92",
            "Public Administration",

            dataend,
          ],
        },

        set378: {
          url378:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat378: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","92",
            "Public Administration",

            dataend,
          ],
        },
        set379: {
          url379:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat379: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","92",
            "Public Administration",

            dataend,
          ],
        },
        set380: {
          url380:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat380: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","92",
            "Public Administration",

            dataend,
          ],
        },
        set381: {
          url381:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat381: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","92",
            "Public Administration",

            dataend,
          ],
        },

        set382: {
          url382:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat382: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","92",
            "Public Administration",

            dataend,
          ],
        },
        set383: {
          url383:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat383: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","92",
            "Public Administration",

            dataend,
          ],
        },
        set384: {
          url384:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat384: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","92",
            "Public Administration",

            dataend,
          ],
        },
        set385: {
          url385:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat385: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","92",
            "Public Administration",

            dataend,
          ],
        },

        set386: {
          url386:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat386: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","92",
            "Public Administration",

            dataend,
          ],
        },
        set387: {
          url387:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat387: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","92",
            "Public Administration",

            dataend,
          ],
        },
        set388: {
          url388:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat388: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","92",
            "Public Administration",

            dataend,
          ],
        },
        set389: {
          url389:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat389: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","92",
            "Public Administration",

            dataend,
          ],
        },

        set390: {
          url390:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat390: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","92",
            "Public Administration",

            dataend,
          ],
        },
        set391: {
          url391:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat391: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","92",
            "Public Administration",

            dataend,
          ],
        },
        set392: {
          url392:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat392: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","92",
            "Public Administration",

            dataend,
          ],
        },
        set393: {
          url393:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=92&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat393: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","92",
            "Public Administration",

            dataend,
          ],
        },

        set394: {
          url394:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat394: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q1","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set395: {
          url395:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat395: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set396: {
          url396:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat396: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set397: {
          url397:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat397: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },

        set398: {
          url398:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat398: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set399: {
          url399:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat399: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set400: {
          url400:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat400: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set401: {
          url401:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat401: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },

        set402: {
          url402:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat402: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set403: {
          url403:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat403: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set404: {
          url404:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat404: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set405: {
          url405:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat405: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },

        set406: {
          url406:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat406: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set407: {
          url407:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat407: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set408: {
          url408:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat408: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set409: {
          url409:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat409: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },

        set410: {
          url410:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat410: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set411: {
          url411:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat411: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set412: {
          url412:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat412: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set413: {
          url413:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat413: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },

        set414: {
          url414:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat414: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set415: {
          url415:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat415: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set416: {
          url416:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat416: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },
        set417: {
          url417:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=53&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat417: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","53",
            "Real Estate and Rental and Leasing",

            dataend,
          ],
        },

        set418: {
          url418:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat418: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q1","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set419: {
          url419:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat419: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set420: {
          url420:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat420: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set421: {
          url421:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat421: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","44-45",
            "Retail Trade",

            dataend,
          ],
        },

        set422: {
          url422:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat422: [
            "Job change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set423: {
          url423:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat423: [
            "Job change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set424: {
          url424:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat424: [
            "Job change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set425: {
          url425:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat425: [
            "Job change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","44-45",
            "Retail Trade",

            dataend,
          ],
        },

        set426: {
          url426:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat426: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set427: {
          url427:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat427: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set428: {
          url428:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat428: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set429: {
          url429:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat429: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","44-45",
            "Retail Trade",

            dataend,
          ],
        },

        set430: {
          url430:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat430: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set431: {
          url431:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat431: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set432: {
          url432:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat432: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set433: {
          url433:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat433: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","44-45",
            "Retail Trade",

            dataend,
          ],
        },

        set434: {
          url434:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat434: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set435: {
          url435:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat435: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set436: {
          url436:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat436: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set437: {
          url437:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat437: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","44-45",
            "Retail Trade",

            dataend,
          ],
        },

        set438: {
          url438:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat438: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set439: {
          url439:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat439: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set440: {
          url440:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat440: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","44-45",
            "Retail Trade",

            dataend,
          ],
        },
        set441: {
          url441:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=44-45&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat441: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","44-45",
            "Retail Trade",

            dataend,
          ],
        },

        set442: {
          url442:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat442: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q1","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set443: {
          url443:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat443: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set444: {
          url444:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat444: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set445: {
          url445:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat445: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },

        set446: {
          url446:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat446: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set447: {
          url447:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat447: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set448: {
          url448:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat448: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set449: {
          url449:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat449: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },

        set450: {
          url450:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat450: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set451: {
          url451:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat451: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set452: {
          url452:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat452: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set453: {
          url453:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat453: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },

        set454: {
          url454:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat454: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set455: {
          url455:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat455: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set456: {
          url456:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat456: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set457: {
          url457:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat457: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },

        set458: {
          url458:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat458: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set459: {
          url459:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat459: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set460: {
          url460:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat460: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set461: {
          url461:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat461: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },

        set462: {
          url462:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat462: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set463: {
          url463:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat463: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set464: {
          url464:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat464: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },
        set465: {
          url465:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=48-49&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat465: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","48-49",
            "Transportation and Warehousing",

            dataend,
          ],
        },

        set466: {
          url466:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat466: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Earnings by Industry",
            +year+"Q1","22",
            "Utilities",
            dataend,
          ],
        },
        set467: {
          url467:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat467: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","22",
            "Utilities",

            dataend,
          ],
        },
        set468: {
          url468:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat468: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","22",
            "Utilities",

            dataend,
          ],
        },
        set469: {
          url469:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat469: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","22",
            "Utilities",

            dataend,
          ],
        },

        set470: {
          url470:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat470: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","22",
            "Utilities",

            dataend,
          ],
        },
        set471: {
          url471:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat471: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","22",
            "Utilities",

            dataend,
          ],
        },
        set472: {
          url472:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat472: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","22",
            "Utilities",

            dataend,
          ],
        },
        set473: {
          url473:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat473: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","22",
            "Utilities",

            dataend,
          ],
        },

        set474: {
          url474:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat474: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","22",
            "Utilities",

            dataend,
          ],
        },
        set475: {
          url475:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat475: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","22",
            "Utilities",

            dataend,
          ],
        },
        set476: {
          url476:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat476: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","22",
            "Utilities",

            dataend,
          ],
        },
        set477: {
          url477:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat477: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","22",
            "Utilities",

            dataend,
          ],
        },

        set478: {
          url478:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat478: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","22",
            "Utilities",

            dataend,
          ],
        },
        set479: {
          url479:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat479: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","22",
            "Utilities",

            dataend,
          ],
        },
        set480: {
          url480:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat480: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","22",
            "Utilities",

            dataend,
          ],
        },
        set481: {
          url481:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat481: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","22",
            "Utilities",

            dataend,
          ],
        },

        set482: {
          url482:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat482: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","22",
            "Utilities",

            dataend,
          ],
        },
        set483: {
          url483:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat483: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","22",
            "Utilities",

            dataend,
          ],
        },
        set484: {
          url484:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat484: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","22",
            "Utilities",

            dataend,
          ],
        },
        set485: {
          url485:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat485: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","22",
            "Utilities",

            dataend,
          ],
        },

        set486: {
          url486:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat486: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","22",
            "Utilities",

            dataend,
          ],
        },
        set487: {
          url487:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat487: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","22",
            "Utilities",

            dataend,
          ],
        },
        set488: {
          url488:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat488: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","22",
            "Utilities",

            dataend,
          ],
        },
        set489: {
          url489:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=22&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat489: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","22",
            "Utilities",

            dataend,
          ],
        },

        set490: {
          url490:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat490: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q1","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set491: {
          url491:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat491: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q2","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set492: {
          url492:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat492: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q3","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set493: {
          url493:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat493: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Earnings by Industry",
            +year+"Q4","42",
            "Wholesale Trade",

            dataend,
          ],
        },

        set494: {
          url494:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat494: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q1","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set495: {
          url495:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat495: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q2","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set496: {
          url496:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat496: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q3","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set497: {
          url497:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat497: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Industry",
            +year+"Q4","42",
            "Wholesale Trade",

            dataend,
          ],
        },

        set498: {
          url498:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat498: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q1","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set499: {
          url499:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat499: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q2","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set500: {
          url500:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat500: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q3","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set501: {
          url501:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat501: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Industry",
            +year+"Q4","42",
            "Wholesale Trade",

            dataend,
          ],
        },

        set502: {
          url502:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat502: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q1","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set503: {
          url503:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat503: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q2","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set504: {
          url504:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat504: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q3","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set505: {
          url505:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat505: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Industry",
            +year+"Q4","42",
            "Wholesale Trade",

            dataend,
          ],
        },

        set506: {
          url506:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat506: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q1","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set507: {
          url507:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat507: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q2","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set508: {
          url508:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat508: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q3","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set509: {
          url509:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat509: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Industry",
            +year+"Q4","42",
            "Wholesale Trade",

            dataend,
          ],
        },

        set510: {
          url510:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat510: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q1","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set511: {
          url511:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat511: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q2","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set512: {
          url512:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat512: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q3","42",
            "Wholesale Trade",

            dataend,
          ],
        },
        set513: {
          url513:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&industry=42&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat513: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Industry",
            +year+"Q4","42",
            "Wholesale Trade",

            dataend,
          ],
        },

        set514: {
          url514:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat514: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q1","A01",
            "14-18",

            dataend,
          ],
        },
        set515: {
          url515:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat515: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q2","A01",
            "14-18",

            dataend,
          ],
        },
        set516: {
          url516:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat516: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q3","A01",
            "14-18",

            dataend,
          ],
        },
        set517: {
          url517:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat517: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q4","A01",
            "14-18",

            dataend,
          ],
        },

        set518: {
          url518:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat518: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q1","A02",
            "19-21",

            dataend,
          ],
        },
        set519: {
          url519:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat519: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q2","A02",
            "19-21",

            dataend,
          ],
        },
        set520: {
          url520:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat520: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q3","A02",
            "19-21",

            dataend,
          ],
        },
        set521: {
          url521:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat521: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q4","A02",
            "19-21",

            dataend,
          ],
        },

        set522: {
          url522:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat522: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q1","A03",
            "22-24",

            dataend,
          ],
        },
        set523: {
          url523:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat523: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q2","A03",
            "22-24",

            dataend,
          ],
        },
        set524: {
          url524:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat524: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q3","A03",
            "22-24",

            dataend,
          ],
        },
        set525: {
          url525:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat525: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q4","A03",
            "22-24",

            dataend,
          ],
        },

        set526: {
          url526:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat526: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q1","A04",
            "25-34",

            dataend,
          ],
        },
        set527: {
          url527:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat527: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Age",
            +year+"Q2","A04",
            "25-34",

            dataend,
          ],
        },
        set528: {
          url528:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat528: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q3","A04",
            "25-34",

            dataend,
          ],
        },
        set529: {
          url529:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat529: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q4","A04",
            "25-34",

            dataend,
          ],
        },

        set530: {
          url530:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat530: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q1","A05",
            "35-44",

            dataend,
          ],
        },
        set531: {
          url531:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat531: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q2","A05",
            "35-44",

            dataend,
          ],
        },
        set532: {
          url532:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat532: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q3","A05",
            "35-44",

            dataend,
          ],
        },
        set533: {
          url533:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat533: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q4","A05",
            "35-44",

            dataend,
          ],
        },

        set534: {
          url534:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat534: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q1","A06",
            "45-54",

            dataend,
          ],
        },
        set535: {
          url535:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat535: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q2","A06",
            "45-54",

            dataend,
          ],
        },
        set536: {
          url536:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat536: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Age",
            +year+"Q3","A06",
            "45-54",

            dataend,
          ],
        },
        set537: {
          url537:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat537: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Age",
            +year+"Q4","A06",
            "45-54",

            dataend,
          ],
        },

        set538: {
          url538:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat538: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Age",
            +year+"Q1","A07",
            "55-64",

            dataend,
          ],
        },
        set539: {
          url539:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat539: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Age",
            +year+"Q2","A07",
            "55-64",

            dataend,
          ],
        },
        set540: {
          url540:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat540: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Age",
            +year+"Q3","A07",
            "55-64",

            dataend,
          ],
        },
        set541: {
          url541:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat541: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Age",
            +year+"Q4","A07",
            "55-64",

            dataend,
          ],
        },

        set542: {
          url542:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat542: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q1","A01",
            "14-18",

            dataend,
          ],
        },
        set543: {
          url543:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat543: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q2","A01",
            "14-18",

            dataend,
          ],
        },
        set544: {
          url544:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat544: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q3","A01",
            "14-18",

            dataend,
          ],
        },
        set545: {
          url545:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat545: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q4","A01",
            "14-18",

            dataend,
          ],
        },

        set546: {
          url546:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat546: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q1","A02",
            "19-21",

            dataend,
          ],
        },
        set547: {
          url547:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat547: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q2","A02",
            "19-21",

            dataend,
          ],
        },
        set548: {
          url548:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat548: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q3","A02",
            "19-21",

            dataend,
          ],
        },
        set549: {
          url549:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat549: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q4","A02",
            "19-21",

            dataend,
          ],
        },

        set550: {
          url550:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat550: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q1","A03",
            "22-24",

            dataend,
          ],
        },
        set551: {
          url551:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat551: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q2","A03",
            "22-24",

            dataend,
          ],
        },
        set552: {
          url552:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat552: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q3","A03",
            "22-24",

            dataend,
          ],
        },
        set553: {
          url553:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat553: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q4","A03",
            "22-24",

            dataend,
          ],
        },

        set554: {
          url554:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat554: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q1","A04",
            "25-34",

            dataend,
          ],
        },
        set555: {
          url555:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat555: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q2","A04",
            "25-34",

            dataend,
          ],
        },
        set556: {
          url556:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat556: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q3","A04",
            "25-34",

            dataend,
          ],
        },
        set557: {
          url557:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat557: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q4","A04",
            "25-34",

            dataend,
          ],
        },

        set558: {
          url558:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat558: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q1","A05",
            "35-44",

            dataend,
          ],
        },
        set559: {
          url559:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat559: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q2","A05",
            "35-44",

            dataend,
          ],
        },
        set560: {
          url560:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat560: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q3","A05",
            "35-44",

            dataend,
          ],
        },
        set561: {
          url561:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat561: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q4","A05",
            "35-44",

            dataend,
          ],
        },

        set562: {
          url562:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat562: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q1","A06",
            "45-54",

            dataend,
          ],
        },
        set563: {
          url563:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat563: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q2","A06",
            "45-54",

            dataend,
          ],
        },
        set564: {
          url564:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat564: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q3","A06",
            "45-54",

            dataend,
          ],
        },
        set565: {
          url565:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat565: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q4","A06",
            "45-54",

            dataend,
          ],
        },

        set566: {
          url566:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat566: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q1","A07",
            "55-64",

            dataend,
          ],
        },
        set567: {
          url567:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat567: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q2","A07",
            "55-64",

            dataend,
          ],
        },
        set568: {
          url568:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat568: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q3","A07",
            "55-64",

            dataend,
          ],
        },
        set569: {
          url569:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat569: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Age",
            +year+"Q4","A07",
            "55-64",

            dataend,
          ],
        },

        set570: {
          url570:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat570: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q1","A01",
            "14-18",

            dataend,
          ],
        },
        set571: {
          url571:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat571: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q2","A01",
            "14-18",

            dataend,
          ],
        },
        set572: {
          url572:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat572: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q3","A01",
            "14-18",

            dataend,
          ],
        },
        set573: {
          url573:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A01&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat573: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q4","A01",
            "14-18",

            dataend,
          ],
        },

        set574: {
          url574:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat574: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q1","A02",
            "19-21",

            dataend,
          ],
        },
        set575: {
          url575:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat575: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q2","A02",
            "19-21",

            dataend,
          ],
        },
        set576: {
          url576:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat576: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q3","A02",
            "19-21",

            dataend,
          ],
        },
        set577: {
          url577:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A02&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat577: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q4","A02",
            "19-21",

            dataend,
          ],
        },

        set578: {
          url578:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat578: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q1","A03",
            "22-24",

            dataend,
          ],
        },
        set579: {
          url579:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat579: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q2","A03",
            "22-24",

            dataend,
          ],
        },
        set580: {
          url580:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat580: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q3","A03",
            "22-24",

            dataend,
          ],
        },
        set581: {
          url581:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A03&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat581: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q4","A03",
            "22-24",

            dataend,
          ],
        },

        set582: {
          url582:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat582: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q1","A04",
            "25-34",

            dataend,
          ],
        },
        set583: {
          url583:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat583: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q2","A04",
            "25-34",

            dataend,
          ],
        },
        set584: {
          url584:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat584: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q3","A04",
            "25-34",

            dataend,
          ],
        },
        set585: {
          url585:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A04&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat585: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q4","A04",
            "25-34",

            dataend,
          ],
        },

        set586: {
          url586:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat586: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q1","A05",
            "35-44",

            dataend,
          ],
        },
        set587: {
          url587:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat587: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q2","A05",
            "35-44",

            dataend,
          ],
        },
        set588: {
          url588:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat588: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q3","A05",
            "35-44",

            dataend,
          ],
        },
        set589: {
          url589:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A05&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat589: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q4","A05",
            "35-44",

            dataend,
          ],
        },

        set590: {
          url590:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat590: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q1","A06",
            "45-54",

            dataend,
          ],
        },
        set591: {
          url591:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat591: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q2","A06",
            "45-54",

            dataend,
          ],
        },
        set592: {
          url592:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat592: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q3","A06",
            "45-54",

            dataend,
          ],
        },
        set593: {
          url593:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A06&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat593: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q4","A06",
            "45-54",

            dataend,
          ],
        },

        set594: {
          url594:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat594: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q1","A07",
            "55-64",

            dataend,
          ],
        },
        set595: {
          url595:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat595: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q2","A07",
            "55-64",

            dataend,
          ],
        },
        set596: {
          url596:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat596: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q3","A07",
            "55-64",

            dataend,
          ],
        },
        set597: {
          url597:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&agegrp=A07&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat597: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Age",
            +year+"Q4","A07",
            "55-64",

            dataend,
          ],
        },

        set598: {
          url598:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat598: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Gender",
            +year+"Q1","1",
            "Male",

            dataend,
          ],
        },
        set599: {
          url599:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat599: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Gender",
            +year+"Q2","1",
            "Male",

            dataend,
          ],
        },
        set600: {
          url600:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat600: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender",
            +year+"Q3","1",
            "Male",

            dataend,
          ],
        },
        set601: {
          url601:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat601: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Gender",
            +year+"Q4","1",
            "Male",

            dataend,
          ],
        },

        set602: {
          url602:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat602: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender",
            +year+"Q1","2",
            "Female",

            dataend,
          ],
        },
        set603: {
          url603:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat603: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender",
            +year+"Q2","2",
            "Female",

            dataend,
          ],
        },
        set604: {
          url604:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat604: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender",
            +year+"Q3","2",
            "Female",

            dataend,
          ],
        },
        set605: {
          url605:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat605: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender",
            +year+"Q4","2",
            "Female",

            dataend,
          ],
        },

        set606: {
          url606:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat606: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Gender",
            +year+"Q1","1",
            "Male",

            dataend,
          ],
        },
        set607: {
          url607:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat607: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Gender",
            +year+"Q2","1",
            "Male",

            dataend,
          ],
        },
        set608: {
          url608:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat608: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Gender",
            +year+"Q3","1",
            "Male",

            dataend,
          ],
        },
        set609: {
          url609:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat609: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Gender",
            +year+"Q4","1",
            "Male",

            dataend,
          ],
        },

        set610: {
          url610:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat610: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Gender",
            +year+"Q1","2",
            "Female",

            dataend,
          ],
        },

        set611: {
          url611:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat611: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Gender",
            +year+"Q2","2",
            "Female",

            dataend,
          ],
        },
        set612: {
          url612:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat612: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Gender",
            +year+"Q3","2",
            "Female",

            dataend,
          ],
        },
        set613: {
          url613:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat613: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Gender",
            +year+"Q4","2",
            "Female",

            dataend,
          ],
        },

        set614: {
          url614:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat614: [
            "Separations,Anne Arundel WIA",
            "Maryland Separations by Gender",
            +year+"Q1","1",
            "Male",
            dataend,
          ],
        },
        set615: {
          url615:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat615: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Gender",
            +year+"Q2","1",
            "Male",

            dataend,
          ],
        },
        set616: {
          url616:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat616: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Gender",
            +year+"Q3","1",
            "Male",

            dataend,
          ],
        },
        set617: {
          url617:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat617: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Gender",
            +year+"Q4","1",
            "Male",

            dataend,
          ],
        },

        set618: {
          url618:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat618: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Gender",
            +year+"Q1","2",
            "Female",

            dataend,
          ],
        },
        set619: {
          url619:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat619: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Gender",
            +year+"Q2","2",
            "Female",

            dataend,
          ],
        },
        set620: {
          url620:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat620: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Gender",
            +year+"Q3","2",
            "Female",

            dataend,
          ],
        },
        set621: {
          url621:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat621: [
            "Separations,Anne Arundel WIA",

            "Maryland Separations by Gender",
            +year+"Q4","2",
            "Female",

            dataend,
          ],
        },

        set622: {
          url622:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat622: [
            "Job Change,Anne Arundel WIA",
            "Maryland Job Net Change by Education",
            +year+"Q1","E1",
            "Less than High school",

            dataend,
          ],
        },
        set623: {
          url623:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat623: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Education",
            +year+"Q2","E1",
            "Less than High school",

            dataend,
          ],
        },
        set624: {
          url624:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat624: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Education",
            +year+"Q3","E1",
            "Less than High school",

            dataend,
          ],
        },
        set625: {
          url625:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat625: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Education",
            +year+"Q4","E1",
            "Less than High school",

            dataend,
          ],
        },

        set626: {
          url626:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat626: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Education",
            +year+"Q1","E2",
            '"High school or equivalent, no college"',

            dataend,
          ],
        },
        set627: {
          url627:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat627: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Education",
            +year+"Q2","E2",
            '"High school or equivalent, no college"',

            dataend,
          ],
        },
        set628: {
          url628:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat628: [
            "Job Change,Anne Arundel WIA",
            "Maryland Job Net Change by Education",
            +year+"Q3","E2",
            '"High school or equivalent, no college"',

            dataend,
          ],
        },
        set629: {
          url629:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat629: [
            "Job Change,Anne Arundel WIA",
            "Maryland Job Net Change by Education",
            +year+"Q4","E2",
            '"High school or equivalent, no college"',

            dataend,
          ],
        },

        set630: {
          url630:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat630: [
            "Job Change,Anne Arundel WIA",
            "Maryland Job Net Change by Education",
            +year+"Q1","E3",
            "Some college or Associate degree",

            dataend,
          ],
        },
        set631: {
          url631:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat631: [
            "Job Change,Anne Arundel WIA",
            "Maryland Job Net Change by Education",
            +year+"Q2","E3",
            "Some college or Associate degree",

            dataend,
          ],
        },
        set632: {
          url632:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat632: [
            "Job Change,Anne Arundel WIA",
            "Maryland Job Net Change by Education",
            +year+"Q3","E3",
            "Some college or Associate degree",

            dataend,
          ],
        },
        set633: {
          url633:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat633: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Education",
            +year+"Q4","E3",
            "Some college or Associate degree",

            dataend,
          ],
        },

        set634: {
          url634:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat634: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Education",
            +year+"Q1","E4",
            "Bachelor's degree or advanced degree",

            dataend,
          ],
        },
        set635: {
          url635:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat635: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Education",
            +year+"Q2","E4",
            "Bachelor's degree or advanced degree",

            dataend,
          ],
        },
        set636: {
          url636:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat636: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Education",
            +year+"Q3","E4",
            "Bachelor's degree or advanced degree",

            dataend,
          ],
        },
        set637: {
          url637:
            "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat637: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Education",
            +year+"Q4","E4",
            "Bachelor's degree or advanced degree",

            dataend,
          ],
        },

        set638: {
          url638:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat638: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q1","E1",
            "Less than High school",

            dataend,
          ],
        },
        set639: {
          url639:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat639: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q2","E1",
            "Less than High school",

            dataend,
          ],
        },
        set640: {
          url640:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat640: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q3","E1",
            "Less than High school",

            dataend,
          ],
        },
        set641: {
          url641:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat641: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q4","E1",
            "Less than High school",

            dataend,
          ],
        },

        set642: {
          url642:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat642: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q1","E2",
            '"High school or equivalent, no college"',

            dataend,
          ],
        },
        set643: {
          url643:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat643: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q2","E2",
            '"High school or equivalent, no college"',

            dataend,
          ],
        },
        set644: {
          url644:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat644: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q3","E2",
            '"High school or equivalent, no college"',

            dataend,
          ],
        },
        set645: {
          url645:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat645: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q4","E2",
            '"High school or equivalent, no college"',

            dataend,
          ],
        },

        set646: {
          url646:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat646: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q1","E3",
            "Some college or Associate degree",

            dataend,
          ],
        },
        set647: {
          url647:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat647: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q2","E3",
            "Some college or Associate degree",

            dataend,
          ],
        },
        set648: {
          url648:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat648: [
            "New Hires,Anne Arundel WIA",
            "Maryland New Hires by Education",
            +year+"Q3","E3",
            "Some college or Associate degree",

            dataend,
          ],
        },
        set649: {
          url649:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat649: [
            "New Hires,Anne Arundel WIA",
            "Maryland New Hires by Education",
            +year+"Q4","E3",
            "Some college or Associate degree",

            dataend,
          ],
        },

        set650: {
          url650:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat650: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q1","E4",
            "Bachelor's degree or advanced degree",

            dataend,
          ],
        },
        set651: {
          url651:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat651: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q2","E4",
            "Bachelor's degree or advanced degree",

            dataend,
          ],
        },
        set652: {
          url652:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat652: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q3","E4",
            "Bachelor's degree or advanced degree",

            dataend,
          ],
        },
        set653: {
          url653:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat653: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q4","E4",
            "Bachelor's degree or advanced degree",

            dataend,
          ],
        },

        set654: {
          url654:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat654: [
            "Turnover,Anne Arundel WIA",
            "Maryland Turnover Rate by Education",
            +year+"Q1","E1",
            "Less than High school",
            dataend,
          ],
        },
        set655: {
          url655:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat655: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Education",
            +year+"Q2","E1",
            "Less than High school",

            dataend,
          ],
        },
        set656: {
          url656:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat656: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Education",
            +year+"Q3","E1",
            "Less than High school",

            dataend,
          ],
        },
        set657: {
          url657:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat657: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Education",
            +year+"Q4","E1",
            "Less than High school",

            dataend,
          ],
        },

        set658: {
          url658:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat658: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Education",
            +year+"Q1","E2",
            '"High school or equivalent, no college"',

            dataend,
          ],
        },
        set659: {
          url659:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat659: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Education",
            +year+"Q2","E2",
            '"High school or equivalent, no college"',

            dataend,
          ],
        },
        set660: {
          url660:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat660: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Education",
            +year+"Q3","E2",
            '"High school or equivalent, no college"',

            dataend,
          ],
        },
        set661: {
          url661:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat661: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Education",
            +year+"Q4","E2",
            '"High school or equivalent, no college"',

            dataend,
          ],
        },

        set662: {
          url662:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat662: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Education",
            +year+"Q1","E3",
            "Some college or Associate degree",

            dataend,
          ],
        },
        set663: {
          url663:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat663: [
            "Turnover,Anne Arundel WIA",
            "Maryland Turnover Rate by Education",
            +year+"Q2","E3",
            "Some college or Associate degree",

            dataend,
          ],
        },
        set664: {
          url664:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat664: [
            "Turnover,Anne Arundel WIA",
            "Maryland Turnover Rate by Education",
            +year+"Q3","E3",
            "Some college or Associate degree",

            dataend,
          ],
        },
        set665: {
          url665:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat665: [
            "Turnover,Anne Arundel WIA",
            "Maryland Turnover Rate by Education",
            +year+"Q4","E3",
            "Some college or Associate degree",

            dataend,
          ],
        },

        set666: {
          url666:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat666: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Education",
            +year+"Q1","E4",
            "Bachelor's degree or advanced degree",

            dataend,
          ],
        },
        set667: {
          url667:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat667: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Education",
            +year+"Q2","E4",
            "Bachelor's degree or advanced degree",

            dataend,
          ],
        },
        set668: {
          url668:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat668: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Education",
            +year+"Q3","E4",
            "Bachelor's degree or advanced degree",

            dataend,
          ],
        },
        set669: {
          url669:
            "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat669: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Education",
            +year+"Q4","E4",
            "Bachelor's degree or advanced degree",

            dataend,
          ],
        },

        set670: {
          url670:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat670: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Gender",
            +year+"Q1","1",
            "Male",

            dataend,
          ],
        },
        set671: {
          url671:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat671: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Gender",
            +year+"Q2","1",
            "Male",

            dataend,
          ],
        },
        set672: {
          url672:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat672: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Gender",
            +year+"Q3","1",
            "Male",

            dataend,
          ],
        },
        set673: {
          url673:
            "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat673: [
            "Job Change,Anne Arundel WIA",

            "Maryland Job Net Change by Gender",
            +year+"Q4","1",
            "Male",

            dataend,
          ],
        },

        set674: {
          url674:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat674: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Gender All",
            +year+"Q1","0",
            "All",
            dataend,
          ],
        },

        set675: {
          url675:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat675: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender All",
            +year+"Q2","0",
            "All",

            dataend,
          ],
        },

        set676: {
          url676:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat676: [
            "Earnings,Anne Arundel WIA",
            "Maryland Average Monthly Earnings by Gender All",
            +year+"Q3","0",
            "All",
            dataend,
          ],
        },

        set677: {
          url677:
            "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat677: [
            "Earnings,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender All",
            +year+"Q4","0",
            "All",
            dataend,
          ],
        },

        set678: {
          url678:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat678: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Gender",
            +year+"Q1","1",
            "Male",

            dataend,
          ],
        },
        set679: {
          url679:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat679: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Gender",
            +year+"Q2","1",
            "Male",

            dataend,
          ],
        },
        set680: {
          url680:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat680: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Gender",
            +year+"Q3","1",
            "Male",

            dataend,
          ],
        },
        set681: {
          url681:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat681: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Gender",
            +year+"Q4","1",
            "Male",

            dataend,
          ],
        },

        set682: {
          url682:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat682: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Gender",
            +year+"Q1","2",
            "Female",

            dataend,
          ],
        },
        set683: {
          url683:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat683: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Gender",
            +year+"Q2","2",
            "Female",

            dataend,
          ],
        },
        set684: {
          url684:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat684: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Gender",
            +year+"Q3","2",
            "Female",

            dataend,
          ],
        },
        set685: {
          url685:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat685: [
            "Turnover,Anne Arundel WIA",

            "Maryland Turnover Rate by Gender",
            +year+"Q4","2",
            "Female",

            dataend,
          ],
        },

        set686: {
          url686:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat686: [
            "New Hires,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender",
            +year+"Q1","2",
            "Female",

            dataend,
          ],
        },

        set687: {
          url687:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat687: [
            "New Hires,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender",
            +year+"Q2","2",
            "Female",

            dataend,
          ],
        },

        set688: {
          url688:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat688: [
            "New Hires,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender",
            +year+"Q3","2",
            "Female",

            dataend,
          ],
        },

        set689: {
          url689:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat689: [
            "New Hires,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender",
            +year+"Q4","2",
            "Female",

            dataend,
          ],
        },

        set690: {
          url690:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat690: [
            "New Hires,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender",
            +year+"Q1","2",
            "Male",

            dataend,
          ],
        },

        set691: {
          url691:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat691: [
            "New Hires,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender",
            +year+"Q2","2",
            "Male",

            dataend,
          ],
        },

        set692: {
          url692:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat692: [
            "New Hires,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender",
            +year+"Q3","2",
            "Male",

            dataend,
          ],
        },

        set693: {
          url693:
            "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat693: [
            "New Hires,Anne Arundel WIA",

            "Maryland Average Monthly Earnings by Gender",
            +year+"Q4","2",
            "Male",

            dataend,
          ],
        },
        set694: {
          url694:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat694: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q1","E5",
            "Educational attainment not available (workers aged 24 or younger)",

            dataend,
          ],
        },

        set695: {
          url695:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat695: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q2","E5",
            "Educational attainment not available (workers aged 24 or younger)",

            dataend,
          ],
        },

        set696: {
          url696:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat696: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q3","E5",
            "Educational attainment not available (workers aged 24 or younger)",

            dataend,
          ],
        },

        set697: {
          url697:
            "https://api.census.gov/data/timeseries/qwi/se?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat697: [
            "New Hires,Anne Arundel WIA",

            "Maryland New Hires by Education",
            +year+"Q4","E5",
            "Educational attainment not available (workers aged 24 or younger)",

            dataend,
          ],
        },

        set698: {
          url698:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q1" +
            "&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat698: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Gender All",
            +year+"Q1","0",
            "All Sexes",

            dataend,
          ],
        },

        set699: {
          url699:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat699: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Gender All",
            +year+"Q2","0",
            "All Sexes",

            dataend,
          ],
        },

        set700: {
          url700:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q3" +
            "&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat700: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Gender All",
            +year+"Q3","0",
            "All Sexes",

            dataend,
          ],
        },

        set701: {
          url701:
            "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q4" +
            "&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat701: [
            "Workers,Anne Arundel WIA",

            "Maryland Workers by Gender All",
            +year+"Q4","0",
            "All Sexes",

            dataend,
          ],
        },


                set702: {
                  url702:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat702: [
                    "Workers,Anne Arundel WIA",
                    "Maryland Workers by Age All",
                    +year+"Q1","A00",
                    "All Ages",
                    dataend,
                  ],
                },
                set703: {
                  url703:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat703: [
                    "Workers,Anne Arundel WIA",

                    "Maryland Workers by Age All",
                    +year+"Q2","A00",
                    "All Ages",

                    dataend,
                  ],
                },
                set704: {
                  url704:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat704: [
                    "Workers,Anne Arundel WIA",

                    "Maryland Workers by Age All",
                    +year+"Q3","A00",
                    "All Ages",

                    dataend,
                  ],
                },
                set705: {
                  url705:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat705: [
                    "Workers,Anne Arundel WIA",

                    "Maryland Workers by Age All",
                    +year+"Q4","A00",
                    "All Ages",

                    dataend,
                  ],
                },

                set706: {
                  url706:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat706: [
                    "Job Change,Anne Arundel WIA",

                    "Maryland Job Net Change by Gender",
                    +year+"Q1","2",
                    "Female",

                    dataend,
                  ],
                },
                set707: {
                  url707:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat707: [
                    "Job Change,Anne Arundel WIA",

                    "Maryland Job Net Change by Gender",
                    +year+"Q2","2",
                    "Female",

                    dataend,
                  ],
                },
                set708: {
                  url708:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat708: [
                    "Job Change,Anne Arundel WIA",

                    "Maryland Job Net Change by Gender",
                    +year+"Q3","2",
                    "Female",

                    dataend,
                  ],
                },
                set709: {
                  url709:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat709: [
                    "Job Change,Anne Arundel WIA",

                    "Maryland Job Net Change by Gender",
                    +year+"Q4","2",
                    "Female",

                    dataend,
                  ],
                },

                set710: {
                  url710:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat710: [
                    "Job Change,Anne Arundel WIA",

                    "Maryland Job Net Change by Gender All",
                    +year+"Q1","0",
                    "All",

                    dataend,
                  ],
                },
                set711: {
                  url711:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat711: [
                    "Job Change,Anne Arundel WIA",

                    "Maryland Job Net Change by Gender All",
                    +year+"Q2","0",
                    "All",

                    dataend,
                  ],
                },
                set712: {
                  url712:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat712: [
                    "Job Change,Anne Arundel WIA",

                    "Maryland Job Net Change by Gender All",
                    +year+"Q3","0",
                    "All",

                    dataend,
                  ],
                },
                set713: {
                  url713:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat713: [
                    "Job Change,Anne Arundel WIA",

                    "Maryland Job Net Change by Gender All",
                    +year+"Q4","0",
                    "All",

                    dataend,
                  ],
                },

                set714: {
                  url714:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat714: [
                    "Workers,Anne Arundel WIA",

                    "Maryland Workers by Age",
                    +year+"Q1","A08",
                    "65-99",

                    dataend,
                  ],
                },

                set715: {
                  url715:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat715: [
                    "Workers,Anne Arundel WIA",

                    "Maryland Workers by Age",
                    +year+"Q2","A08",
                    "65-99",

                    dataend,
                  ],
                },

                set716: {
                  url716:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat716: [
                    "Workers,Anne Arundel WIA",

                    "Maryland Workers by Age",
                    +year+"Q3","A08",
                    "65-99",

                    dataend,
                  ],
                },

                set717: {
                  url717:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat717: [
                    "Workers,Anne Arundel WIA",
                    "Maryland Workers by Age",
                    +year+"Q4","A08",
                    "65-99",

                    dataend,
                  ],
                },

                set718: {
                  url718:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat718: [
                    "Separations,Anne Arundel WIA",

                    "Maryland Separations by Age",
                    +year+"Q1","A08",
                    "65-99",

                    dataend,
                  ],
                },
                set719: {
                  url719:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat719: [
                    "Separations,Anne Arundel WIA",

                    "Maryland Separations by Age",
                    +year+"Q2","A08",
                    "65-99",

                    dataend,
                  ],
                },
                set720: {
                  url720:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat720: [
                    "Separations,Anne Arundel WIA",

                    "Maryland Separations by Age",
                    +year+"Q3","A08",
                    "65-99",

                    dataend,
                  ],
                },
                set721: {
                  url721:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat721: [
                    "Separations,Anne Arundel WIA",

                    "Maryland Separations by Age",
                    +year+"Q4","A08",
                    "65-99",

                    dataend,
                  ],
                },

                set722: {
                  url722:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat722: [
                    "New Hires,Anne Arundel WIA",

                    "Maryland New Hires by Gender",
                    +year+"Q1","1",
                    "Male",

                    dataend,
                  ],
                },

                set723: {
                  url723:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat723: [
                    "New Hires,Anne Arundel WIA",

                    "Maryland New Hires by Gender",
                    +year+"Q2","1",
                    "Male",

                    dataend,
                  ],
                },

                set724: {
                  url724:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat724: [
                    "New Hires,Anne Arundel WIA",

                    "Maryland New Hires by Gender",
                    +year+"Q3","1",
                    "Male",

                    dataend,
                  ],
                },

                set725: {
                  url725:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&sex=1&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat725: [
                    "New Hires,Anne Arundel WIA",

                    "Maryland New Hires by Gender",
                    +year+"Q4","1",
                    "Male",

                    dataend,
                  ],
                },

                set726: {
                  url726:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat726: [
                    "New Hires,Anne Arundel WIA",

                    "Maryland New Hires by Gender",
                    +year+"Q1","2",
                    "Female",

                    dataend,
                  ],
                },

                set727: {
                  url727:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat727: [
                    "New Hires,Anne Arundel WIA",

                    "Maryland New Hires by Gender",
                    +year+"Q2","2",
                    "Female",

                    dataend,
                  ],
                },

                set728: {
                  url728:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat728: [
                    "New Hires,Anne Arundel WIA",

                    "Maryland New Hires by Gender",
                    +year+"Q3","2",
                    "Female",

                    dataend,
                  ],
                },

                set729: {
                  url729:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=HirN&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&sex=2&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat729: [
                    "New Hires,Anne Arundel WIA",

                    "Maryland New Hires by Gender",
                    +year+"Q4","2",
                    "Female",

                    dataend,
                  ],
                },

                set730: {
                  url730:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat730: [
                    "Earnings,Anne Arundel WIA",

                    "Maryland Average Monthly Earnings by Age",
                    +year+"Q1","A08",
                    "65-99",

                    dataend,
                  ],
                },

                set731: {
                  url731:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat731: [
                    "Earnings,Anne Arundel WIA",

                    "Maryland Average Monthly Earnings by Age",
                    +year+"Q2","A08",
                    "65-99",

                    dataend,
                  ],
                },

                set732: {
                  url732:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat732: [
                    "Earnings,Anne Arundel WIA",

                    "Maryland Average Monthly Earnings by Age",
                    +year+"Q3","A08",
                    "65-99",

                    dataend,
                  ],
                },

                set733: {
                  url733:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&agegrp=A08&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat733: [
                    "Earnings,Anne Arundel WIA",

                    "Maryland Average Monthly Earnings by Age",
                    +year+"Q4","A08",
                    "65-99",
                    dataend,
                  ],
                },

                set734: {
                  url734:
                    "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat734: [
                    "Job change,Anne Arundel WIA",
                    "Maryland Job Net Change by Education All",
                    +year+"Q1","E0",
                    "All Education Categories",

                    dataend,
                  ],
                },
                set735: {
                  url735:
                    "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat735: [
                    "Job change,Anne Arundel WIA",
                    "Maryland Job Net Change by Education All",
                    +year+"Q2","E0",
                    "All Education Categories",

                    dataend,
                  ],
                },
                set736: {
                  url736:
                    "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat736: [
                    "Job change,Anne Arundel WIA",
                    "Maryland Job Net Change by Education All",
                    +year+"Q3","E0",
                    "All Education Categories",

                    dataend,
                  ],
                },
                set737: {
                  url737:
                    "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat737: [
                    "Job change,Anne Arundel WIA",
                    "Maryland Job Net Change by Education All",
                    +year+"Q4","E0",
                    "All Education Categories",

                    dataend,
                  ],
                },

                set738: {
                  url738:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat738: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education All",
                    +year+"Q1","E0",
                    "All Education Categories",

                    dataend,
                  ],
                },

                set739: {
                  url739:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat739: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education All",
                    +year+"Q2","E0",
                    "All Education Categories",

                    dataend,
                  ],
                },

                set740: {
                  url740:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat740: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education All",
                    +year+"Q3","E0",
                    "All Education Categories",

                    dataend,
                  ],
                },

                set741: {
                  url741:
                    "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat741: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education All",
                    +year+"Q4","E0",
                    "All Education Categories",

                    dataend,
                  ],
                },

                set742: {
                  url742:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat742: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q1","E1",
                    "Less than High school",

                    dataend,
                  ],
                },

                set743: {
                  url743:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat743: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q2","E1",
                    "Less than High school",

                    dataend,
                  ],
                },

                set744: {
                  url744:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat744: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q3","E1",
                    "Less than High school",

                    dataend,
                  ],
                },

                set745: {
                  url745:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&education=E1&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat745: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q4","E1",
                    "Less than High school",

                    dataend,
                  ],
                },

                set746: {
                  url746:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat746: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q1","E2",
                    '"High school or equivalent, no college"',

                    dataend,
                  ],
                },

                set747: {
                  url747:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat747: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q2","E2",
                    '"High school or equivalent, no college"',

                    dataend,
                  ],
                },

                set748: {
                  url748:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat748: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q3","E2",
                    '"High school or equivalent, no college"',

                    dataend,
                  ],
                },

                set748: {
                  url748:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat748: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q3","E2",
                    '"High school or equivalent, no college"',

                    dataend,
                  ],
                },

                set749: {
                  url749:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&education=E2&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat749: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q4","E2",
                    '"High school or equivalent, no college"',

                    dataend,
                  ],
                },

                set750: {
                  url750:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat750: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q1","E3",
                    "Some college or Associate degree",

                    dataend,
                  ],
                },

                set751: {
                  url751:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat751: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q2","E3",
                    "Some college or Associate degree",

                    dataend,
                  ],
                },

                set752: {
                  url752:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat752: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q3","E3",
                    "Some college or Associate degree",

                    dataend,
                  ],
                },

                set753: {
                  url753:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&education=E3&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat753: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q4","E3",
                    "Some college or Associate degree",

                    dataend,
                  ],
                },

                set754: {
                  url754:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat754: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q1","E4",
                    "Bachelor's degree or advanced degree",

                    dataend,
                  ],
                },

                set755: {
                  url755:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat755: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q2","E4",
                    "Bachelor's degree or advanced degree",

                    dataend,
                  ],
                },

                set756: {
                  url756:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat756: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q3","E4",
                    "Bachelor's degree or advanced degree",

                    dataend,
                  ],
                },

                set757: {
                  url757:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&education=E4&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat757: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q4","E4",
                    "Bachelor's degree or advanced degree",

                    dataend,
                  ],
                },

                set758: {
                  url758:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat758: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q1","E5",
                    "Educational attainment not available (workers aged 24 or younger)",

                    dataend,
                  ],
                },

                set759: {
                  url759:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat759: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q2","E5",
                    "Educational attainment not available (workers aged 24 or younger)",

                    dataend,
                  ],
                },

                set760: {
                  url760:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat760: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q3","E5",
                    "Educational attainment not available (workers aged 24 or younger)",

                    dataend,
                  ],
                },

                set761: {
                  url761:
                    "https://api.census.gov/data/timeseries/qwi/se?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat761: [
                    "Separations,Anne Arundel WIA",
                    "Maryland Separations by Education",
                    +year+"Q4","E5",
                    "Educational attainment not available (workers aged 24 or younger)",

                    dataend,
                  ],
                },

                set762: {
                  url762:
                    "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat762: [
                    "Job Change,Anne Arundel WIA",

                    "Maryland Job Net Change by Education",
                    +year+"Q1","E5",
                    "Educational attainment not available (workers aged 24 or younger)",

                    dataend,
                  ],
                },

                set763: {
                  url763:
                    "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat763: [
                    "Job Change,Anne Arundel WIA",

                    "Maryland Job Net Change by Education",
                    +year+"Q2","E5",
                    "Educational attainment not available (workers aged 24 or younger)",

                    dataend,
                  ],
                },

                set764: {
                  url764:
                    "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat764: [
                    "Job Change,Anne Arundel WIA",

                    "Maryland Job Net Change by Education",
                    +year+"Q3","E5",
                    "Educational attainment not available (workers aged 24 or younger)",

                    dataend,
                  ],
                },

                set765: {
                  url765:
                    "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q4" +
                    "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat765: [
                    "Job Change,Anne Arundel WIA",

                    "Maryland Job Net Change by Education",
                    +year+"Q4","E5",
                    "Educational attainment not available (workers aged 24 or younger)",

                    dataend,
                  ],
                },

                set766: {
                  url766:
                    "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q1" +
                    "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat766: [
                    "Turnover,Anne Arundel WIA","Maryland Turnover Rate by Education",
                    year + "Q1",
                    "E5",
                    "Educational attainment not available (workers aged 24 or younger)",

                    dataend+ ",",
                  ],
                },

                set767: {
                  url767:
                    "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q2" +
                    "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat767: [
                    "Maryland",
                    year + "Q2",
                    "Maryland Turnover Rate by Education",
                    "E5",
                    "Educational attainment not available (workers aged 24 or younger)",

                    dataend+ ",",
                  ],
                },

                set768: {
                  url768:
                    "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
                    year +
                    "-" +
                    "Q3" +
                    "&education=E5&key=855666deab62d95596011f1944d9f1bd8c918853",
                  arrayformat768: [
                    "Maryland",
                    year + "Q3",
                    "Maryland Turnover Rate by Education",
                    "E5",
                    "Educational attainment not available (workers aged 24 or younger)",

                    dataend+ ",",
                  ],
                },
        set769: {
        url769:
          "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
          year +
          "-" +
          "Q1" +
          "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
        arrayformat769: [
          "Earnings,Anne Arundel WIA",
          "Maryland Average Monthly Earnings by Age All",
          +year+"Q1","A00",
          "All Ages",
          dataend,
        ],
      },

      set770: {
      url770:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
        year +
        "-" +
        "Q2" +
        "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat770: [
        "Earnings,Anne Arundel WIA",
        "Maryland Average Monthly Earnings by Age All",
        +year+"Q2","A00",
        "All Ages",
        dataend,
      ],
    },

    set771: {
    url771:
      "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
      year +
      "-" +
      "Q2" +
      "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
    arrayformat771: [
      "Earnings,Anne Arundel WIA",
      "Maryland Average Monthly Earnings by Age All",
      +year+"Q2","A00",
      "All Ages",
      dataend,
    ],
  },

  set772: {
  url772:
    "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
    year +
    "-" +
    "Q3" +
    "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
  arrayformat772: [
    "Earnings,Anne Arundel WIA",
    "Maryland Average Monthly Earnings by Age All",
    +year+"Q3","A00",
    "All Ages",
    dataend,
  ],
},

set773: {
url773:
  "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=workforce+investment+area:001001&in=state:24&time=" +
  year +
  "-" +
  "Q4" +
  "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
arrayformat773: [
  "Earnings,Anne Arundel WIA",
  "Maryland Average Monthly Earnings by Age All",
  +year+"Q4","A00",
  "All Ages",
  dataend,
],
},

set774: {
  url774:
    "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
    year +
    "-" +
    "Q1" +
    "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
  arrayformat774: [
    "Separations,Anne Arundel WIA",
    "Maryland Separations by Age All",
    +year+"Q1","A00",
    "All Ages",
    dataend,
  ],
},

set775: {
  url775:
    "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
    year +
    "-" +
    "Q2" +
    "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
  arrayformat775: [
    "Separations,Anne Arundel WIA",
    "Maryland Separations by Age All",
    +year+"Q2","A00",
    "All Ages",
    dataend,
  ],
},

set776: {
  url776:
    "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
    year +
    "-" +
    "Q3" +
    "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
  arrayformat776: [
    "Separations,Anne Arundel WIA",
    "Maryland Separations by Age All",
    +year+"Q3","A00",
    "All Ages",
    dataend,
  ],
},

set777: {
  url777:
    "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
    year +
    "-" +
    "Q4" +
    "&agegrp=A00&key=855666deab62d95596011f1944d9f1bd8c918853",
  arrayformat777: [
    "Separations,Anne Arundel WIA",
    "Maryland Separations by Age All",
    +year+"Q4","A00",
    "All Ages",
    dataend,
  ],
},
set778: {
  url778:
    "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
    year +
    "-" +
    "Q1" +
    "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
  arrayformat778: [
    "Turnover,Anne Arundel WIA","Maryland Turnover Rate by Education All",
    year + "Q1",
    "E0",
    "All Education Categories",
    dataend,
  ],
},

set779: {
  url779:
    "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
    year +
    "-" +
    "Q2" +
    "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
  arrayformat779: [
    "Turnover,Anne Arundel WIA","Maryland Turnover Rate by Education All",
    year + "Q2",
    "E0",
    "All Education Categories",
    dataend,
  ],
},

set780: {
  url780:
    "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
    year +
    "-" +
    "Q3" +
    "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
  arrayformat780: [
    "Turnover,Anne Arundel WIA","Maryland Turnover Rate by Education All",
    year + "Q3",
    "E0",
    "All Education Categories",
    dataend,
  ],
},

set781: {
  url781:
    "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
    year +
    "-" +
    "Q4" +
    "&education=E0&key=855666deab62d95596011f1944d9f1bd8c918853",
  arrayformat781: [
    "Turnover,Anne Arundel WIA","Maryland Turnover Rate by Education All",
    year + "Q4",
    "E0",
    "All Education Categories",
    dataend,
  ],
},

set782: {
   url782:
     "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
     year +
     "-" +
     "Q1" +
     "&key=855666deab62d95596011f1944d9f1bd8c918853",
   arrayformat782: [
     "Separations,Anne Arundel WIA",
     "Maryland Separations by Gender All",
     +year+"Q1","0",
     "All",
     dataend,
   ],
   },

   set783: {
      url783:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
        year +
        "-" +
        "Q2" +
        "&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat783: [
        "Separations,Anne Arundel WIA",
        "Maryland Separations by Gender All",
        +year+"Q2","0",
        "All",
        dataend,
      ],
      },

      set784: {
         url784:
           "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
           year +
           "-" +
           "Q3" +
           "&key=855666deab62d95596011f1944d9f1bd8c918853",
         arrayformat784: [
           "Separations,Anne Arundel WIA",
           "Maryland Separations by Gender All",
           +year+"Q3","0",
           "All",
           dataend,
         ],
         },

         set785: {
            url785:
              "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q4" +
              "&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat785: [
              "Separations,Anne Arundel WIA",
              "Maryland Separations by Gender All",
              +year+"Q4","0",
              "All",
              dataend,
            ],
            },

            set786: {
            url786:
              "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
              year +
              "-" +
              "Q1" +
              "&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat786: [
              "Turnover,Anne Arundel WIA",
              "Maryland Turnover Rate by Gender All",
              +year+"Q1","0",
              "All",
              dataend,
            ],
          },

          set787: {
          url787:
            "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
            year +
            "-" +
            "Q2" +
            "&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat787: [
            "Turnover,Anne Arundel WIA",
            "Maryland Turnover Rate by Gender All",
            +year+"Q2","0",
            "All",
            dataend,
          ],
        },

        set788: {
        url788:
          "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
          year +
          "-" +
          "Q3" +
          "&key=855666deab62d95596011f1944d9f1bd8c918853",
        arrayformat788: [
          "Turnover,Anne Arundel WIA",
          "Maryland Turnover Rate by Gender All",
          +year+"Q3","0",
          "All",
          dataend,
        ],
      },

      set789: {
      url789:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=workforce+investment+area:001001&in=state:24&time=" +
        year +
        "-" +
        "Q4" +
        "&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat789: [
        "Turnover,Anne Arundel WIA",
        "Maryland Turnover Rate by Gender All",
        +year+"Q4","0",
        "All",
        dataend,
      ],
    },



       },
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
