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

      //QWI data

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

    }, // end of the object for county data

    // end of the object for the library
};
