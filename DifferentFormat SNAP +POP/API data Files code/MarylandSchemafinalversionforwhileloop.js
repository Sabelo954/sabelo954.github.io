https://api.census.gov/data/2019/acs/acs5/profile?get=NAME,DP05_0001E&for=county:005&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853export
var endpoints = {
        // beginning of the object for the library
    Maryland: { // beginning of the object for the county API data
      text: "Maryland",
      MedianHincome: [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: [text,year,"Median Household Income",",,,",dataend],
        },
      ],   // end of measure data

      Population: [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5/profile?get=NAME,DP05_0001E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Total Population",",,,",dataend],
        },
      ],  // end of measure data

      Unemployment_Rate_Male  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",+year+,"Unemployment By Gender","Male"+",,,",dataend,dataend/100],
        },
      ],  // end of measure data

      Unemployment_Rate_Female  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland","2019","Unemployment By Gender","Female"+",,,",dataend,dataend/100],
        },
      ],  // end of measure data

      Non_Disabled_Unemployed  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland","2019","Employment Status By Disability Status","Non Disabled"+",","Unemployed"+",",dataend],
        },
      ],  // end of measure data

      Non_Disabled_Employed  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/2019/acs/acs5?get=NAME,C18120_005E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland","2019","Employment Status By Disability Status","Non Disabled"+",","Employed"+",",dataend],
        },
      ],  // end of measure data

      Non_Disabled_Labor_Force  : [  //beginning of measure data // rethink it is a calculation!!!!
        {
          year: 2015,
          url: "",
          arrayformat: ["Maryland","2019","Employment Status By Disability Status","Non Disabled"+",","Labor Force"+",",dataWDisem2019+dataWDisem2019], ***
        },
      ],  // end of measure data

      Disabled_Employed  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_004M&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Disability Status","Disabled"+",","Employed"+",",dataend],
        },
      ],  // end of measure data

      Disabled_Unemployed  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Disability Status","Disabled"+",","Employed"+",",dataend],
        },
      ],  // end of measure data

      Disabled_Labor_Force  : [  //beginning of measure data // rethink it is a calculation!!!!
        {
          year: 2015,
          url: "",
          arrayformat: ["Maryland","2019","Employment Status By Disability Status","Disabled"+",","Labor Force"+",",dataDisem2019+dataDisem2019], ***
        },
      ],  // end of measure data

      Bachelors_Employed  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,B23006_027E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Education,Bachelor's or Higher"+",","Employed"+",",dataend],
        },
      ],  // end of measure data

      Bachelors_Unemployed  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,B23006_028E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Education,Bachelor's or Higher"+",","Unemployed"+",",dataend],
        },
      ],  // end of measure data

      Bachelors_NIL  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,B23006_029E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Education,Bachelor's or Higher"+",","NIL"+",",dataend],
        },
      ],  // end of measure data

      High_School_Employed  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,B23006_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Education","Highschool"+",","Employed"+",",dataend],
        },
      ],  // end of measure data

      High_School_Unemployed  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,B23006_014E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Education","Highschool"+",","Unemployed"+",",dataend],
        },
      ],  // end of measure data

      High_School_NIL  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,B23006_015E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Education","Highschool"+",","NIL"+",",dataend],
        },
      ],  // end of measure data

      Inc_Below_Poverty_Level_Employed  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,S1701_C02_028E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Poverty Status","Below Poverty"+",","Employed"+",",dataend],
        },
      ],  // end of measure data

      Inc_Below_Poverty_Level_Unemployed  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,S1701_C02_027E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Poverty Status","Below Poverty"+",","Unemployed"+",",dataend],
        },
      ],  // end of measure data

      Inc_Below_Poverty_Level_Labor_Force  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,S1701_C02_031E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Poverty Status","Below Poverty"+",","Labor Force"+",",dataend],
        },
      ],  // end of measure data

      Less_than_High_School_Employed  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,B23006_006E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Education","Less than Highschool"+",","Employed"+",",dataend],
        },
      ],  // end of measure data

      Less_than_High_School_Unemployed  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,B23006_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Education","Less than Highschool"+",","Unemployed"+",",dataend],
        },
      ],  // end of measure data

      Less_than_High_School_NIL  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,B23006_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Education","Less than Highschool"+",","NIL"+",",dataend],
        },
      ],  // end of measure data

      Unemployment_Rate_Non_Veteran  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Unemployment By Veteran Status","Non Veteran"+",,,",dataend,dataend/100],
        },
      ],  // end of measure data

      Unemployment_Rate_Veteran  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Unemployment By Veteran Status","Veteran"+",,,",dataend,dataend/100],
        },
      ],  // end of measure data

      Some_College_Employed  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,B23006_020E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Education","Status By Education,Some College"+",","Employed"+",",dataend],
        },
      ],  // end of measure data

      Some_College_Unemployed  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,B23006_021E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Education","Status By Education,Some College"+",","Unemployed"+",",dataend],
        },
      ],  // end of measure data

      Some_College_NIL  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,B23006_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Employment Status By Education","Status By Education,Some College"+",","NIL"+",",dataend],
        },
      ],  // end of measure data

      Unemployment_Rate_Asian  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Unemployment By Race","Asian"+",,,",dataend,dataend/100],
        },
      ],  // end of measure data

      Unemployment_Rate_White  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Unemployment By Race","White"+",,,",dataend,dataend/100],
        },
      ],  // end of measure data

      Unemployment_Rate_Black  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Unemployment By Race","Black"+",,,",dataend,dataend/100],
        },
      ],  // end of measure data

      Unemployment_Rate_Hispanic  : [  //beginning of measure data
        {
          year: 2015,
          url: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat: ["Maryland",year,"Unemployment By Race","Hispanic or Latino (Any Race)"+",,,",dataend,dataend/100],
        },
      ],  // end of measure data

      //QWI data

      Accomodation_Avg_Monthly_Earnings  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",72,"Accommodation and Food Services"+",","Earnings",dataend],
        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",72,"Accommodation and Food Services"+",","Earnings",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",72,"Accommodation and Food Services"+",","Earnings",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",72,"Accommodation and Food Services"+",","Earnings",dataend],
        },

      ],  // end of measure data

      Accomodation_Job_Net_Change  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",72,"Accommodation and Food Services"+",","Job Change",dataend],
        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",72,"Accommodation and Food Services"+",","Job Change",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",72,"Accommodation and Food Services"+",","Job Change",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",72,"Accommodation and Food Services"+",","Job Change",dataend],
        },

      ],  // end of measure data

      Accomodation_New_Hires  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",72,"Accommodation and Food Services"+",","New Hires",dataend],

        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",72,"Accommodation and Food Services"+",","New Hires",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",72,"Accommodation and Food Services"+",","New Hires",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",72,"Accommodation and Food Services"+",","New Hires",dataend],
        },

      ],  // end of measure data

      Accomodation_Separations  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",72,"Accommodation and Food Services"+",","Separation",dataend],

        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",72,"Accommodation and Food Services"+",","Separation",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",72,"Accommodation and Food Services"+",","Separation",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",72,"Accommodation and Food Services"+",","Separation",dataend],
        },

      ],  // end of measure data

      Accomodation_Turnover_Rate  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",72,"Accommodation and Food Services"+",","Turnover Rate",dataend],

        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",72,"Accommodation and Food Services"+",","Turnover Rate",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",72,"Accommodation and Food Services"+",","Turnover Rate",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",72,"Accommodation and Food Services"+",","Turnover Rate",dataend],
        },

      ],  // end of measure data

      Accomodation_Workers  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",72,"Accommodation and Food Services"+",","Workers",dataend],

        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",72,"Accommodation and Food Services"+",","Workers",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",72,"Accommodation and Food Services"+",","Workers",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=72",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",72,"Accommodation and Food Services"+",","Workers",dataend],
        },

      ],  // end of measure data

      Health_Social_Avg_Monthly_Earnings  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",62,"Health Care and Social Assistance"+",","Earnings",dataend],
        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",62,"Health Care and Social Assistance"+",","Earnings",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",62,"Health Care and Social Assistance"+",","Earnings",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",62,"Health Care and Social Assistance"+",","Earnings",dataend],
        },

      ],  // end of measure data

      Health_Social_Job_Net_Change  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",62,"Health Care and Social Assistance"+",","Job Change",dataend],
        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",62,"Health Care and Social Assistance"+",","Job Change",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",62,"Health Care and Social Assistance"+",","Job Change",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",62,"Health Care and Social Assistance"+",","Job Change",dataend],
        },

      ],  // end of measure data

      Health_Social_New_Hires  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",62,"Health Care and Social Assistance"+",","New Hires",dataend],

        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",62,"Health Care and Social Assistance"+",","New Hires",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",62,"Health Care and Social Assistance"+",","New Hires",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",62,"Health Care and Social Assistance"+",","New Hires",dataend],
        },

      ],  // end of measure data

      Health_Social_Separations  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",62,"Health Care and Social Assistance"+",","Separation",dataend],

        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",62,"Health Care and Social Assistance"+",","Separation",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",62,"Health Care and Social Assistance"+",","Separation",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",62,"Health Care and Social Assistance"+",","Separation",dataend],
        },

      ],  // end of measure data

      Health_Social_Turnover_Rate  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",62,"Health Care and Social Assistance"+",","Turnover Rate",dataend],
        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",62,"Health Care and Social Assistance"+",","Turnover Rate",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",62,"Health Care and Social Assistance"+",","Turnover Rate",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",62,"Health Care and Social Assistance"+",","Turnover Rate",dataend],
        },

      ],  // end of measure data

      Health_Social_Workers  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",62,"Health Care and Social Assistance"+",","Workers",dataend],
        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",62,"Health Care and Social Assistance"+",","Workers",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",62,"Health Care and Social Assistance"+",","Workers",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=62",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",62,"Health Care and Social Assistance"+",","Workers",dataend],
        },

      ],  // end of measure data

      Adminstrative_Avg_Monthly_Earnings  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Earnings",dataend],
        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Earnings",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Earnings",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Earnings",dataend],
        },

      ],  // end of measure data

      Adminstrative_Job_Net_Change  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Job Change",dataend],
        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Job Change",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Job Change",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Job Change",dataend],
        },

      ],  // end of measure data

      Adminstrative_New_Hires  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","New Hires",dataend],

        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","New Hires",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","New Hires",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","New Hires",dataend],
        },

      ],  // end of measure data

      Adminstrative_Separations  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Separation",dataend],

        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Separation",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Separation",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Separation",dataend],
        },

      ],  // end of measure data

      Adminstrative_Turnover_Rate  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Turnover Rate",dataend],
                    Maryland,2017Q1,Maryland Turnover Rate by Industry,56,Administrative and Support and Waste Management and Remediation Services,,Turnover Rate,0.156,
        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Turnover Rate",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Turnover Rate",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Turnover Rate",dataend],
        },

      ],  // end of measure data

      Adminstrative_Workers  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Workers",dataend],
                    Maryland,2016Q1,Maryland Workers by Industry,56,Administrative and Support and Waste Management and Remediation Services,,Workers,213835,
        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Workers",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Workers",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=56",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Workers",dataend],
        },

      ],  // end of measure data

      Agriculture_Avg_Monthly_Earnings  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Earnings",dataend],
        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Earnings",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Earnings",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Earnings",dataend],
        },

      ],  // end of measure data

      Agriculture_Job_Net_Change  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Job Change",dataend],
        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Job Change",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Job Change",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Job Change",dataend],
        },

      ],  // end of measure data

      Agriculture_New_Hires  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","New Hires",dataend],

        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","New Hires",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","New Hires",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","New Hires",dataend],
        },

      ],  // end of measure data

      Agriculture_Separations  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Separation",dataend],

        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Separation",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Separation",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Separation",dataend],
        },

      ],  // end of measure data

      Agriculture_Turnover_Rate  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Turnover Rate",dataend],
                    Maryland,2017Q1,Maryland Turnover Rate by Industry,11,Agriculture, Forestry, Fishing and Hunting,,Turnover Rate,0.156,
        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Turnover Rate",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Turnover Rate",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Turnover Rate",dataend],
        },

      ],  // end of measure data

      Agriculture_Workers  : [  //beginning of measure data
        {
          year: 2015,
          Quarter: "Q1",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Workers",dataend],
                    Maryland,2016Q1,Maryland Workers by Industry,11,Agriculture, Forestry, Fishing and Hunting,,Workers,213835,
        },
        {
          year: 2015,
          Quarter: "Q2",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Workers",dataend],
        },
        {
          year: 2015,
          Quarter: "Q3",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Workers",dataend],
        },
        {
          year: 2015,
          Quarter: "Q4",
          url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=11",
          arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Workers",dataend],
        },

      ],  // end of measure data

      Arts_Avg_Monthly_Earnings  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",71,"Arts, Entertainment, and Recreation"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",71,"Arts, Entertainment, and Recreation"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",71,"Arts, Entertainment, and Recreation"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",71,"Arts, Entertainment, and Recreation"+",","Earnings",dataend],
  },

],  // end of measure data

Arts_Job_Net_Change  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",71,"Arts, Entertainment, and Recreation"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",71,"Arts, Entertainment, and Recreation"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",71,"Arts, Entertainment, and Recreation"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",71,"Arts, Entertainment, and Recreation"+",","Job Change",dataend],
  },

],  // end of measure data

Arts_New_Hires  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",71,"Arts, Entertainment, and Recreation"+",","New Hires",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",71,"Arts, Entertainment, and Recreation"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",71,"Arts, Entertainment, and Recreation"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",71,"Arts, Entertainment, and Recreation"+",","New Hires",dataend],
  },

],  // end of measure data

Arts_Separations  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",71,"Arts, Entertainment, and Recreation"+",","Separation",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",71,"Arts, Entertainment, and Recreation"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",71,"Arts, Entertainment, and Recreation"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",71,"Arts, Entertainment, and Recreation"+",","Separation",dataend],
  },

],  // end of measure data

Arts_Turnover_Rate  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",71,"Arts, Entertainment, and Recreation"+",","Turnover Rate",dataend],
              Maryland,2017Q1,Maryland Turnover Rate by Industry,71,Arts, Entertainment, and Recreation,,Turnover Rate,0.156,
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",71,"Arts, Entertainment, and Recreation"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",71,"Arts, Entertainment, and Recreation"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",71,"Arts, Entertainment, and Recreation"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Arts_Workers  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",71,"Arts, Entertainment, and Recreation"+",","Workers",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",71,"Arts, Entertainment, and Recreation"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",71,"Arts, Entertainment, and Recreation"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=71",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",71,"Arts, Entertainment, and Recreation"+",","Workers",dataend],
  },

],  // end of measure data

Construction_Avg_Monthly_Earnings  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",23,"Construction"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",23,"Construction"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",23,"Construction"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",23,"Construction"+",","Earnings",dataend],
  },

],  // end of measure data

Construction_Job_Net_Change  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",23,"Construction"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",23,"Construction"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",23,"Construction"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",23,"Construction"+",","Job Change",dataend],
  },

],  // end of measure data

Construction_New_Hires  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",23,"Construction"+",","New Hires",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",23,"Construction"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",23,"Construction"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",23,"Construction"+",","New Hires",dataend],
  },

],  // end of measure data

Construction_Separations  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",23,"Construction"+",","Separation",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",23,"Construction"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",23,"Construction"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",23,"Construction"+",","Separation",dataend],
  },

],  // end of measure data

Construction_Turnover_Rate  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",23,"Construction"+",","Turnover Rate",dataend],
              Maryland,2017Q1,Maryland Turnover Rate by Industry,23,Construction,,Turnover Rate,0.156,
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",23,"Construction"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",23,"Construction"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",23,"Construction"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Construction_Workers  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",23,"Construction"+",","Workers",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",23,"Construction"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",23,"Construction"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=23",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",23,"Construction"+",","Workers",dataend],
  },

],  // end of measure data

Educational_Services_Avg_Monthly_Earnings  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",61,"Educational Services"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",61,"Educational Services"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",61,"Educational Services"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",61,"Educational Services"+",","Earnings",dataend],
  },

],  // end of measure data

Educational_Services_Job_Net_Change  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",61,"Educational Services"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",61,"Educational Services"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",61,"Educational Services"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",61,"Educational Services"+",","Job Change",dataend],
  },

],  // end of measure data

Educational_Services_New_Hires  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",61,"Educational Services"+",","New Hires",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",61,"Educational Services"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",61,"Educational Services"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",61,"Educational Services"+",","New Hires",dataend],
  },

],  // end of measure data

Educational_Services_Separations  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",61,"Educational Services"+",","Separation",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",61,"Educational Services"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",61,"Educational Services"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",61,"Educational Services"+",","Separation",dataend],
  },

],  // end of measure data

Educational_Services_Turnover_Rate  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",61,"Educational Services"+",","Turnover Rate",dataend],
              Maryland,2017Q1,Maryland Turnover Rate by Industry,61,Educational Services,,Turnover Rate,0.156,
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",61,"Educational Services"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",61,"Educational Services"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",61,"Educational Services"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Educational_Services_Workers  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",61,"Educational Services"+",","Workers",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",61,"Educational Services"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",61,"Educational Services"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=61",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",61,"Educational Services"+",","Workers",dataend],
  },

],  // end of measure data

Finance_Avg_Monthly_Earnings  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",52,"Finance and Insurance"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",52,"Finance and Insurance"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",52,"Finance and Insurance"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",52,"Finance and Insurance"+",","Earnings",dataend],
  },

],  // end of measure data

Finance_Job_Net_Change  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",52,"Finance and Insurance"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",52,"Finance and Insurance"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",52,"Finance and Insurance"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",52,"Finance and Insurance"+",","Job Change",dataend],
  },

],  // end of measure data

Finance_New_Hires  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",52,"Finance and Insurance"+",","New Hires",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",52,"Finance and Insurance"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",52,"Finance and Insurance"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",52,"Finance and Insurance"+",","New Hires",dataend],
  },

],  // end of measure data

Finance_Separations  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",52,"Finance and Insurance"+",","Separation",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",52,"Finance and Insurance"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",52,"Finance and Insurance"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",52,"Finance and Insurance"+",","Separation",dataend],
  },

],  // end of measure data

Finance_Turnover_Rate  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",52,"Finance and Insurance"+",","Turnover Rate",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",52,"Finance and Insurance"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",52,"Finance and Insurance"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",52,"Finance and Insurance"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Finance_Workers  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",52,"Finance and Insurance"+",","Workers",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",52,"Finance and Insurance"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",52,"Finance and Insurance"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=52",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",52,"Finance and Insurance"+",","Workers",dataend],
  },

],  // end of measure data

Information_Avg_Monthly_Earnings  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",51,"Information"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",51,"Information"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",51,"Information"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",51,"Information"+",","Earnings",dataend],
  },

],  // end of measure data

Information_Job_Net_Change  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",51,"Information"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",51,"Information"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",51,"Information"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",51,"Information"+",","Job Change",dataend],
  },

],  // end of measure data

Information_New_Hires  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",51,"Information"+",","New Hires",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",51,"Information"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",51,"Information"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",51,"Information"+",","New Hires",dataend],
  },

],  // end of measure data

Information_Separations  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",51,"Information"+",","Separation",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",51,"Information"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",51,"Information"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",51,"Information"+",","Separation",dataend],
  },

],  // end of measure data

Information_Turnover_Rate  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",51,"Information"+",","Turnover Rate",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",51,"Information"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",51,"Information"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",51,"Information"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Information_Workers  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",51,"Information"+",","Workers",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",51,"Information"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",51,"Information"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=51",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",51,"Information"+",","Workers",dataend],
  },

],  // end of measure data

Management_Avg_Monthly_Earnings  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",55,"Management of Companies and Enterprises"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",55,"Management of Companies and Enterprises"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",55,"Management of Companies and Enterprises"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",55,"Management of Companies and Enterprises"+",","Earnings",dataend],
  },

],  // end of measure data

Management_Job_Net_Change  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",55,"Management of Companies and Enterprises"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",55,"Management of Companies and Enterprises"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",55,"Management of Companies and Enterprises"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",55,"Management of Companies and Enterprises"+",","Job Change",dataend],
  },

],  // end of measure data

Management_New_Hires  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",55,"Management of Companies and Enterprises"+",","New Hires",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",55,"Management of Companies and Enterprises"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",55,"Management of Companies and Enterprises"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",55,"Management of Companies and Enterprises"+",","New Hires",dataend],
  },

],  // end of measure data

Management_Separations  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",55,"Management of Companies and Enterprises"+",","Separation",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",55,"Management of Companies and Enterprises"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",55,"Management of Companies and Enterprises"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",55,"Management of Companies and Enterprises"+",","Separation",dataend],
  },

],  // end of measure data

Management_Turnover_Rate  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",55,"Management of Companies and Enterprises"+",","Turnover Rate",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",55,"Management of Companies and Enterprises"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",55,"Management of Companies and Enterprises"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",55,"Management of Companies and Enterprises"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Management_Workers  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",55,"Management of Companies and Enterprises"+",","Workers",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",55,"Management of Companies and Enterprises"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",55,"Management of Companies and Enterprises"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=55",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",55,"Management of Companies and Enterprises"+",","Workers",dataend],
  },

],  // end of measure data

Manufacturing_Avg_Monthly_Earnings  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",31-33,"Manufacturing"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",31-33,"Manufacturing"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",31-33,"Manufacturing"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",31-33,"Manufacturing"+",","Earnings",dataend],
  },

],  // end of measure data

Manufacturing_Job_Net_Change  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",31-33,"Manufacturing"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",31-33,"Manufacturing"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",31-33,"Manufacturing"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",31-33,"Manufacturing"+",","Job Change",dataend],
  },

],  // end of measure data

Manufacturing_New_Hires  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",31-33,"Manufacturing"+",","New Hires",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",31-33,"Manufacturing"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",31-33,"Manufacturing"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",31-33,"Manufacturing"+",","New Hires",dataend],
  },

],  // end of measure data

Manufacturing_Separations  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",31-33,"Manufacturing"+",","Separation",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",31-33,"Manufacturing"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",31-33,"Manufacturing"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",31-33,"Manufacturing"+",","Separation",dataend],
  },

],  // end of measure data

Manufacturing_Turnover_Rate  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",31-33,"Manufacturing"+",","Turnover Rate",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",31-33,"Manufacturing"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",31-33,"Manufacturing"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",31-33,"Manufacturing"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Manufacturing_Workers  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",31-33,"Manufacturing"+",","Workers",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",31-33,"Manufacturing"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",31-33,"Manufacturing"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=31-33",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",31-33,"Manufacturing"+",","Workers",dataend],
  },

],  // end of measure data

Mining_Avg_Monthly_Earnings  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Earnings",dataend],
  },

],  // end of measure data

Mining_Job_Net_Change  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Job Change",dataend],
  },

],  // end of measure data

Mining_New_Hires  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","New Hires",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","New Hires",dataend],
  },

],  // end of measure data

Mining_Separations  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Separation",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Separation",dataend],
  },

],  // end of measure data

Mining_Turnover_Rate  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Turnover Rate",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Mining_Workers  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Workers",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=21",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Workers",dataend],
  },

],  // end of measure data

Other Services_Avg_Monthly_Earnings  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",81,"Other Services (except Public Administration)"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",81,"Other Services (except Public Administration)"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",81,"Other Services (except Public Administration)"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",81,"Other Services (except Public Administration)"+",","Earnings",dataend],
  },

],  // end of measure data

Other Services_Job_Net_Change  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",81,"Other Services (except Public Administration)"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",81,"Other Services (except Public Administration)"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",81,"Other Services (except Public Administration)"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",81,"Other Services (except Public Administration)"+",","Job Change",dataend],
  },

],  // end of measure data

Other Services_New_Hires  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",81,"Other Services (except Public Administration)"+",","New Hires",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",81,"Other Services (except Public Administration)"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",81,"Other Services (except Public Administration)"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",81,"Other Services (except Public Administration)"+",","New Hires",dataend],
  },

],  // end of measure data

Other Services_Separations  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",81,"Other Services (except Public Administration)"+",","Separation",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",81,"Other Services (except Public Administration)"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",81,"Other Services (except Public Administration)"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",81,"Other Services (except Public Administration)"+",","Separation",dataend],
  },

],  // end of measure data

Other Services_Turnover_Rate  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",81,"Other Services (except Public Administration)"+",","Turnover Rate",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",81,"Other Services (except Public Administration)"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",81,"Other Services (except Public Administration)"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",81,"Other Services (except Public Administration)"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Other Services_Workers  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",81,"Other Services (except Public Administration)"+",","Workers",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",81,"Other Services (except Public Administration)"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",81,"Other Services (except Public Administration)"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=81",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",81,"Other Services (except Public Administration)"+",","Workers",dataend],
  },

],  // end of measure data

Professional_Avg_Monthly_Earnings  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",541,"Professional, Scientific, and Technical Services"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",541,"Professional, Scientific, and Technical Services"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",541,"Professional, Scientific, and Technical Services"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",541,"Professional, Scientific, and Technical Services"+",","Earnings",dataend],
  },

],  // end of measure data

Professional_Job_Net_Change  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",541,"Professional, Scientific, and Technical Services"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",541,"Professional, Scientific, and Technical Services"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",541,"Professional, Scientific, and Technical Services"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",541,"Professional, Scientific, and Technical Services"+",","Job Change",dataend],
  },

],  // end of measure data

Professional_New_Hires  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",541,"Professional, Scientific, and Technical Services"+",","New Hires",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",541,"Professional, Scientific, and Technical Services"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",541,"Professional, Scientific, and Technical Services"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",541,"Professional, Scientific, and Technical Services"+",","New Hires",dataend],
  },

],  // end of measure data

Professional_Separations  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",541,"Professional, Scientific, and Technical Services"+",","Separation",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",541,"Professional, Scientific, and Technical Services"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",541,"Professional, Scientific, and Technical Services"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",541,"Professional, Scientific, and Technical Services"+",","Separation",dataend],
  },

],  // end of measure data

Professional_Turnover_Rate  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",541,"Professional, Scientific, and Technical Services"+",","Turnover Rate",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",541,"Professional, Scientific, and Technical Services"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",541,"Professional, Scientific, and Technical Services"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",541,"Professional, Scientific, and Technical Services"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Professional_Workers  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",541,"Professional, Scientific, and Technical Services"+",","Workers",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",541,"Professional, Scientific, and Technical Services"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",541,"Professional, Scientific, and Technical Services"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=541",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",541,"Professional, Scientific, and Technical Services"+",","Workers",dataend],
  },

],  // end of measure data

Public_Administration_Avg_Monthly_Earnings  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",92,"Public Administration"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",92,"Public Administration"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",92,"Public Administration"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",92,"Public Administration"+",","Earnings",dataend],
  },

],  // end of measure data

Public_Administration_Job_Net_Change  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",92,"Public Administration"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",92,"Public Administration"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",92,"Public Administration"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",92,"Public Administration"+",","Job Change",dataend],
  },

],  // end of measure data

Public_Administration_New_Hires  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",92,"Public Administration"+",","New Hires",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",92,"Public Administration"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",92,"Public Administration"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",92,"Public Administration"+",","New Hires",dataend],
  },

],  // end of measure data

Public_Administration_Separations  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",92,"Public Administration"+",","Separation",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",92,"Public Administration"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",92,"Public Administration"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",92,"Public Administration"+",","Separation",dataend],
  },

],  // end of measure data

Public_Administration_Turnover_Rate  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",92,"Public Administration"+",","Turnover Rate",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",92,"Public Administration"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",92,"Public Administration"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",92,"Public Administration"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Public_Administration_Workers  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",92,"Public Administration"+",","Workers",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",92,"Public Administration"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",92,"Public Administration"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=92",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",92,"Public Administration"+",","Workers",dataend],
  },

],  // end of measure data

Real_Estate_Avg_Monthly_Earnings  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",53,"Real Estate and Rental and Leasing"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",53,"Real Estate and Rental and Leasing"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",53,"Real Estate and Rental and Leasing"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",53,"Real Estate and Rental and Leasing"+",","Earnings",dataend],
  },

],  // end of measure data

Real_Estate_Job_Net_Change  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",53,"Real Estate and Rental and Leasing"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",53,"Real Estate and Rental and Leasing"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",53,"Real Estate and Rental and Leasing"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",53,"Real Estate and Rental and Leasing"+",","Job Change",dataend],
  },

],  // end of measure data

Real_Estate_New_Hires  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",53,"Real Estate and Rental and Leasing"+",","New Hires",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",53,"Real Estate and Rental and Leasing"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",53,"Real Estate and Rental and Leasing"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",53,"Real Estate and Rental and Leasing"+",","New Hires",dataend],
  },

],  // end of measure data

Real_Estate_Separations  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",53,"Real Estate and Rental and Leasing"+",","Separation",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",53,"Real Estate and Rental and Leasing"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",53,"Real Estate and Rental and Leasing"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",53,"Real Estate and Rental and Leasing"+",","Separation",dataend],
  },

],  // end of measure data

Real_Estate_Turnover_Rate  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",53,"Real Estate and Rental and Leasing"+",","Turnover Rate",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",53,"Real Estate and Rental and Leasing"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",53,"Real Estate and Rental and Leasing"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",53,"Real Estate and Rental and Leasing"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Real_Estate_Workers  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",53,"Real Estate and Rental and Leasing"+",","Workers",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",53,"Real Estate and Rental and Leasing"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",53,"Real Estate and Rental and Leasing"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=53",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",53,"Real Estate and Rental and Leasing"+",","Workers",dataend],
  },

],  // end of measure data

Retail_Avg_Monthly_Earnings  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",44-45,"Retail Trade"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",44-45,"Retail Trade"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",44-45,"Retail Trade"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",44-45,"Retail Trade"+",","Earnings",dataend],
  },

],  // end of measure data

Retail_Job_Net_Change  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",44-45,"Retail Trade"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",44-45,"Retail Trade"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",44-45,"Retail Trade"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",44-45,"Retail Trade"+",","Job Change",dataend],
  },

],  // end of measure data

Retail_New_Hires  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",44-45,"Retail Trade"+",","New Hires",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",44-45,"Retail Trade"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",44-45,"Retail Trade"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",44-45,"Retail Trade"+",","New Hires",dataend],
  },

],  // end of measure data

Retail_Separations  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",44-45,"Retail Trade"+",","Separation",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",44-45,"Retail Trade"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",44-45,"Retail Trade"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",44-45,"Retail Trade"+",","Separation",dataend],
  },

],  // end of measure data

Retail_Turnover_Rate  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",44-45,"Retail Trade"+",","Turnover Rate",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",44-45,"Retail Trade"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",44-45,"Retail Trade"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",44-45,"Retail Trade"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Retail_Workers  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",44-45,"Retail Trade"+",","Workers",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",44-45,"Retail Trade"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",44-45,"Retail Trade"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=44-45",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",44-45,"Retail Trade"+",","Workers",dataend],
  },

],  // end of measure data

Transportation_Avg_Monthly_Earnings  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",48-49,"Transportation and Warehousing"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",48-49,"Transportation and Warehousing"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",48-49,"Transportation and Warehousing"+",","Earnings",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Average Earnings by Industry",48-49,"Transportation and Warehousing"+",","Earnings",dataend],
  },

],  // end of measure data

Transportation_Job_Net_Change  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",48-49,"Transportation and Warehousing"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",48-49,"Transportation and Warehousing"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",48-49,"Transportation and Warehousing"+",","Job Change",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Job Net Change by Industry",48-49,"Transportation and Warehousing"+",","Job Change",dataend],
  },

],  // end of measure data

Transportation_New_Hires  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",48-49,"Transportation and Warehousing"+",","New Hires",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",48-49,"Transportation and Warehousing"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",48-49,"Transportation and Warehousing"+",","New Hires",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland New Hires by Industry",48-49,"Transportation and Warehousing"+",","New Hires",dataend],
  },

],  // end of measure data

Transportation_Separations  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",48-49,"Transportation and Warehousing"+",","Separation",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",48-49,"Transportation and Warehousing"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",48-49,"Transportation and Warehousing"+",","Separation",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Separations by Industry",48-49,"Transportation and Warehousing"+",","Separation",dataend],
  },

],  // end of measure data

Transportation_Turnover_Rate  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",48-49,"Transportation and Warehousing"+",","Turnover Rate",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",48-49,"Transportation and Warehousing"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",48-49,"Transportation and Warehousing"+",","Turnover Rate",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Turnover Rate by Industry",48-49,"Transportation and Warehousing"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Transportation_Workers  : [  //beginning of measure data
  {
    year: 2015,
    Quarter: "Q1",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",48-49,"Transportation and Warehousing"+",","Workers",dataend],

  },
  {
    year: 2015,
    Quarter: "Q2",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",48-49,"Transportation and Warehousing"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q3",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",48-49,"Transportation and Warehousing"+",","Workers",dataend],
  },
  {
    year: 2015,
    Quarter: "Q4",
    url: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+year+"-"+Quarter+"&industry=48-49",
    arrayformat: ["Maryland",year+Quarter,"Maryland Workers by Industry",48-49,"Transportation and Warehousing"+",","Workers",dataend],
  },

],  // end of measure data

    }, // end of the object for county data

    // end of the object for the library
};
