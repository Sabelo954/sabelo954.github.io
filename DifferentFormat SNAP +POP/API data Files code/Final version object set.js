var yearAPIfunction = 2015;
var dataend=2;
var dataWDisem2019=6;
var dataWDisem2019=7;
var dataDisem2019=7;

var endpoint = {
        // beginning of the object for the library
    Maryland: { // beginning of the object for the county API data
      set1: {
          url1: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat1: ["Maryland",yearAPIfunction,"Median Household Income",",,,",dataend],
        },
      set2:
        {
          url2: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5/profile?get=NAME,DP05_0001E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat2: ["Maryland",yearAPIfunction,"Total Population",",,,",dataend],
        },

      set3:{
          url3: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat3: ["Maryland",yearAPIfunction,"Unemployment By Gender","1"+",,,",dataend,dataend/100],
        },


      set4  :
        {

          url4: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat4: ["Maryland","2019","Unemployment By Gender","2"+",,,",dataend,dataend/100],
        },


      set5:
        {
          url5: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat5: ["Maryland","2019","Employment Status By Disability Status","Non "+",","Unemployed"+",",dataend],
        },


      set6 :
        {

          url6: "https://api.census.gov/data/2019/acs/acs5?get=NAME,C18120_005E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat6: ["Maryland","2019","Employment Status By Disability Status",""+",","Labor Force"+",",dataDisem2019+dataDisem2019],
        },



      set7:
        {

          url7: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,C18120_004M&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat7: ["Maryland",yearAPIfunction,"Employment Status By Disability Status",""+",","Employed"+",",dataend],
        },


      set8:
        {

          url8: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,C18120_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat8: ["Maryland",yearAPIfunction,"Employment Status By Disability Status",""+",","Employed"+",",dataend],
        },


      set9:
        {

          url9: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,B23006_027E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat9: ["Maryland",yearAPIfunction,"Employment Status By Education,Bachelor's or Higher"+",","Employed"+",",dataend],
        },


      set10:
        {

          url10: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,B23006_028E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat10: ["Maryland",yearAPIfunction,"Employment Status By Education,Bachelor's or Higher"+",","Unemployed"+",",dataend],
        },


      set11:
        {

          url11: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,B23006_029E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat11: ["Maryland",yearAPIfunction,"Employment Status By Education,Bachelor's or Higher"+",","NIL"+",",dataend],
        },


      set12:
        {

          url12: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,B23006_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat12: ["Maryland",yearAPIfunction,"Employment Status By Education","Highschool"+",","Employed"+",",dataend],
        },


      set13:
        {

          url13: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,B23006_014E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat13: ["Maryland",yearAPIfunction,"Employment Status By Education","Highschool"+",","Unemployed"+",",dataend],
        },


      set14:
        {

          url14: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,B23006_015E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat14: ["Maryland",yearAPIfunction,"Employment Status By Education","Highschool"+",","NIL"+",",dataend],
        },


      set15:
        {

          url15: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,S1701_C02_028E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat15: ["Maryland",yearAPIfunction,"Employment Status By Poverty Status","Below Poverty"+",","Employed"+",",dataend],
        },


    set16:
        {

          url16: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,S1701_C02_027E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat16: ["Maryland",yearAPIfunction,"Employment Status By Poverty Status","Below Poverty"+",","Unemployed"+",",dataend],
        },


      set17:
        {

          url17: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,S1701_C02_031E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat17: ["Maryland",yearAPIfunction,"Employment Status By Poverty Status","Below Poverty"+",","Labor Force"+",",dataend],
        },


      set18:
        {

          url18: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,B23006_006E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat18: ["Maryland",yearAPIfunction,"Employment Status By Education","Less than Highschool"+",","Employed"+",",dataend],
        },


      set19:
        {

          url19: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,B23006_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat19: ["Maryland",yearAPIfunction,"Employment Status By Education","Less than Highschool"+",","Unemployed"+",",dataend],
        },


      set20:
        {

          url20: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,B23006_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat20: ["Maryland",yearAPIfunction,"Employment Status By Education","Less than Highschool"+",","NIL"+",",dataend],
        },


    set:
        {

          url21: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat21: ["Maryland",yearAPIfunction,"Unemployment By Veteran Status","Non Veteran"+",,,",dataend,dataend/100],
        },


      set:
        {

          url22: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat22: ["Maryland",yearAPIfunction,"Unemployment By Veteran Status","Veteran"+",,,",dataend,dataend/100],
        },


      Some_College_set:
        {

          url23: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,B23006_020E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat23: ["Maryland",yearAPIfunction,"Employment Status By Education","Status By Education,Some College"+",","Employed"+",",dataend],
        },


      Some_Collegeset  :
        {

          url24: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,B23006_021E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat24: ["Maryland",yearAPIfunction,"Employment Status By Education","Status By Education,Some College"+",","Unemployed"+",",dataend],
        },


      Some_College_set:
        {

          url25: "https://api.census.gov/data/"+yearAPIfunction+"/acs/acs5?get=NAME,B23006_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat25: ["Maryland",yearAPIfunction,"Employment Status By Education","Status By Education,Some College"+",","NIL"+",",dataend],
        },


      Asian  :
        {

          url26: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat26: ["Maryland",yearAPIfunction,"Unemployment By Race","Asian"+",,,",dataend,dataend/100],
        },


      White  :
        {

          url27: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat27: ["Maryland",yearAPIfunction,"Unemployment By Race","White"+",,,",dataend,dataend/100],
        },


      Black  :
        {

          url28: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat28: ["Maryland",yearAPIfunction,"Unemployment By Race","Black"+",,,",dataend,dataend/100],
        },


      Hispanic  :
        {

          url29: "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat29: ["Maryland",yearAPIfunction,"Unemployment By Race","Hispanic or Latino (Any Race)"+",,,",dataend,dataend/100],
        },


      //QWI data

      Accomodation_Avg_Monthly_Earnings  :
        {


          url30: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=72",
          arrayformat30: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",72,"Accommodation and Food Services"+",","Earnings",dataend],
        },
        {


          url31: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=72",
          arrayformat31: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",72,"Accommodation and Food Services"+",","Earnings",dataend],
        },
        {


          url32: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=72",
          arrayformat32: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",72,"Accommodation and Food Services"+",","Earnings",dataend],
        },
        {


          url33: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=72",
          arrayformat33: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",72,"Accommodation and Food Services"+",","Earnings",dataend],
        },



      Accomodation_Job_Net_Change  :
        {


          url34: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=72",
          arrayformat34: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",72,"Accommodation and Food Services"+",","Job Change",dataend],
        },
        {


          url35: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=72",
          arrayformat35: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",72,"Accommodation and Food Services"+",","Job Change",dataend],
        },
        {


          url36: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=72",
          arrayformat36: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",72,"Accommodation and Food Services"+",","Job Change",dataend],
        },
        {

          url37: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=72",
          arrayformat37: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",72,"Accommodation and Food Services"+",","Job Change",dataend],
        },



      Accomodation_New_Hires  :
        {


          url38: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=72",
          arrayformat38: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",72,"Accommodation and Food Services"+",","New Hires",dataend],

        },
        {


          url39: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=72",
          arrayformat39: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",72,"Accommodation and Food Services"+",","New Hires",dataend],
        },
        {


          url40: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=72",
          arrayformat40: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",72,"Accommodation and Food Services"+",","New Hires",dataend],
        },
        {

          url41: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=72",
          arrayformat41: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",72,"Accommodation and Food Services"+",","New Hires",dataend],
        },



      Accomodation_Separations  :
        {


          url42: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=72",
          arrayformat42: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",72,"Accommodation and Food Services"+",","Seperation",dataend],

        },
        {


          url43: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=72",
          arrayformat43: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",72,"Accommodation and Food Services"+",","Seperation",dataend],
        },
        {


          url44: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=72",
          arrayformat44: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",72,"Accommodation and Food Services"+",","Seperation",dataend],
        },
        {


          url45: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=72",
          arrayformat45: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",72,"Accommodation and Food Services"+",","Seperation",dataend],
        },



      Accomodation_Turnover_Rate  :
        {


          url46: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=72",
          arrayformat46: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",72,"Accommodation and Food Services"+",","Turnover Rate",dataend],

        },
        {


          url47: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=72",
          arrayformat47: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",72,"Accommodation and Food Services"+",","Turnover Rate",dataend],
        },
        {


          url48: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=72",
          arrayformat48: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",72,"Accommodation and Food Services"+",","Turnover Rate",dataend],
        },
        {

          url49: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=72",
          arrayformat49: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",72,"Accommodation and Food Services"+",","Turnover Rate",dataend],
        },



      Accomodation_Workers  :
        {


          url50: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=72",
          arrayformat50: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",72,"Accommodation and Food Services"+",","Workers",dataend],

        },
        {


          url51: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=72",
          arrayformat51: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",72,"Accommodation and Food Services"+",","Workers",dataend],
        },
        {


          url52: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=72",
          arrayformat52: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",72,"Accommodation and Food Services"+",","Workers",dataend],
        },
        {

          url53: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=72",
          arrayformat53: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",72,"Accommodation and Food Services"+",","Workers",dataend],
        },



      Health_Social_Avg_Monthly_Earnings  :
        {


          url54: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=62",
          arrayformat54: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",62,"Health Care and Social Assistance"+",","Earnings",dataend],
        },
        {


          url55: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=62",
          arrayformat55: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",62,"Health Care and Social Assistance"+",","Earnings",dataend],
        },
        {


          url56: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=62",
          arrayformat56: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",62,"Health Care and Social Assistance"+",","Earnings",dataend],
        },
        {

          url57: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=62",
          arrayformat57: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",62,"Health Care and Social Assistance"+",","Earnings",dataend],
        },



      Health_Social_Job_Net_Change  :
        {


          url58: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=62",
          arrayformat58: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",62,"Health Care and Social Assistance"+",","Job Change",dataend],
        },
        {


          url59: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=62",
          arrayformat59: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",62,"Health Care and Social Assistance"+",","Job Change",dataend],
        },
        {


          url60: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=62",
          arrayformat60: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",62,"Health Care and Social Assistance"+",","Job Change",dataend],
        },
        {

          url61: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=62",
          arrayformat61: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",62,"Health Care and Social Assistance"+",","Job Change",dataend],
        },



      Health_Social_New_Hires  :
        {


          url62: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=62",
          arrayformat62: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",62,"Health Care and Social Assistance"+",","New Hires",dataend],

        },
        {


          url63: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=62",
          arrayformat63: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",62,"Health Care and Social Assistance"+",","New Hires",dataend],
        },
        {


          url64: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=62",
          arrayformat64: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",62,"Health Care and Social Assistance"+",","New Hires",dataend],
        },
        {

          url65: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=62",
          arrayformat65: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",62,"Health Care and Social Assistance"+",","New Hires",dataend],
        },



      Health_Social_Separations  :
        {


          url66: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=62",
          arrayformat66: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",62,"Health Care and Social Assistance"+",","Seperation",dataend],

        },
        {


          url67: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=62",
          arrayformat67: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",62,"Health Care and Social Assistance"+",","Seperation",dataend],
        },
        {


          url68: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=62",
          arrayformat68: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",62,"Health Care and Social Assistance"+",","Seperation",dataend],
        },
        {

          url69: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=62",
          arrayformat69: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",62,"Health Care and Social Assistance"+",","Seperation",dataend],
        },



      Health_Social_Turnover_Rate  :
        {


          url70: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=62",
          arrayformat70: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",62,"Health Care and Social Assistance"+",","Turnover Rate",dataend],
        },
        {


          url71: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=62",
          arrayformat71: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",62,"Health Care and Social Assistance"+",","Turnover Rate",dataend],
        },
        {


          url72: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=62",
          arrayformat72: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",62,"Health Care and Social Assistance"+",","Turnover Rate",dataend],
        },
        {

          url73: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=62",
          arrayformat73: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",62,"Health Care and Social Assistance"+",","Turnover Rate",dataend],
        },



      Health_Social_Workers  :
        {


          url74: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=62",
          arrayformat74: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",62,"Health Care and Social Assistance"+",","Workers",dataend],
        },
        {


          url75: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=62",
          arrayformat75: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",62,"Health Care and Social Assistance"+",","Workers",dataend],
        },
        {


          url76: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=62",
          arrayformat76: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",62,"Health Care and Social Assistance"+",","Workers",dataend],
        },
        {

          url77: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=62",
          arrayformat77: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",62,"Health Care and Social Assistance"+",","Workers",dataend],
        },



      Adminstrative_Avg_Monthly_Earnings  :
        {


          url78: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=56",
          arrayformat78: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Earnings",dataend],
        },
        {


          url79: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=56",
          arrayformat79: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Earnings",dataend],
        },
        {


          url80: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=56",
          arrayformat80: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Earnings",dataend],
        },
        {

          url81: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=56",
          arrayformat81: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Earnings",dataend],
        },



      Adminstrative_Job_Net_Change  :
        {


          url82: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=56",
          arrayformat82: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Job Change",dataend],
        },
        {


          url83: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=56",
          arrayformat83: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Job Change",dataend],
        },
        {


          url84: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=56",
          arrayformat84: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Job Change",dataend],
        },
        {

          url85: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=56",
          arrayformat85: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Job Change",dataend],
        },



      Adminstrative_New_Hires  :
        {


          url86: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=56",
          arrayformat86: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","New Hires",dataend],

        },
        {


          url87: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=56",
          arrayformat87: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","New Hires",dataend],
        },
        {


          url88: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=56",
          arrayformat88: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","New Hires",dataend],
        },
        {

          url89: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=56",
          arrayformat89: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","New Hires",dataend],
        },



      Adminstrative_Separations  :
        {


          url90: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=56",
          arrayformat90: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Seperation",dataend],

        },
        {


          url91: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=56",
          arrayformat91: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Seperation",dataend],
        },
        {


          url92: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=56",
          arrayformat92: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Seperation",dataend],
        },
        {


          url93: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=56",
          arrayformat93: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Seperation",dataend],
        },



      Adminstrative_Turnover_Rate  :
        {


          url94: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=56",
          arrayformat94: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Turnover Rate",dataend],

        },
        {


          url95: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=56",
          arrayformat95: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Turnover Rate",dataend],
        },
        {


          url96: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=56",
          arrayformat96: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Turnover Rate",dataend],
        },
        {

          url97: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=56",
          arrayformat97: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Turnover Rate",dataend],
        },



      Adminstrative_Workers  :
        {


          url98: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=56",
          arrayformat98: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Workers",dataend],

        },
        {


          url99: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=56",
          arrayformat99: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Workers",dataend],
        },
        {


          url100: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=56",
          arrayformat100: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Workers",dataend],
        },
        {

          url101: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=56",
          arrayformat101: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",56,"Administrative and Support and Waste Management and Remediation Services"+",","Workers",dataend],
        },



      Agriculture_Avg_Monthly_Earnings  :
        {


          url102: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=11",
          arrayformat12: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Earnings",dataend],
        },
        {


          url103: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=11",
          arrayformat13: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Earnings",dataend],
        },
        {


          url104: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=11",
          arrayformat104: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Earnings",dataend],
        },
        {

          url105: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=11",
          arrayformat105: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Earnings",dataend],
        },



      Agriculture_Job_Net_Change  :
        {


          url106: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=11",
          arrayformat106: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Job Change",dataend],
        },
        {


          url107: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=11",
          arrayformat107: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Job Change",dataend],
        },
        {


          url108: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=11",
          arrayformat108: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Job Change",dataend],
        },
        {

          url109: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=11",
          arrayformat109: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Job Change",dataend],
        },



      Agriculture_New_Hires  :
        {


          url110: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=11",
          arrayformat110: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","New Hires",dataend],

        },
        {


          url111: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=11",
          arrayformat111: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","New Hires",dataend],
        },
        {


          url112: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=11",
          arrayformat112: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","New Hires",dataend],
        },
        {

          url113: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=11",
          arrayformat113: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","New Hires",dataend],
        },



      Agriculture_Separations  :
        {


          url114: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=11",
          arrayformat114: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Seperation",dataend],

        },
        {


          url115: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=11",
          arrayformat115: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Seperation",dataend],
        },
        {


          url116: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=11",
          arrayformat116: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Seperation",dataend],
        },
        {

          url117: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=11",
          arrayformat117: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Seperation",dataend],
        },



      Agriculture_Turnover_Rate  :
        {


          url118: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=11",
          arrayformat118: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Turnover Rate",dataend],

        },
        {


          url119: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=11",
          arrayformat119: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Turnover Rate",dataend],
        },
        {


          url120: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=11",
          arrayformat120: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Turnover Rate",dataend],
        },
        {

          url121: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=11",
          arrayformat121: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Turnover Rate",dataend],
        },



      Agriculture_Workers  :
        {


          url122: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=11",
          arrayformat122: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Workers",dataend],

        },
        {


          url123: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=11",
          arrayformat123: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Workers",dataend],
        },
        {


          url124: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=11",
          arrayformat124: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Workers",dataend],
        },
        {

          url125: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=11",
          arrayformat125: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",11,"Agriculture, Forestry, Fishing and Hunting"+",","Workers",dataend],
        },



      Arts_Avg_Monthly_Earnings  :
  {


    url126: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=71",
    arrayformat126: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",71,"Arts, Entertainment, and Recreation"+",","Earnings",dataend],
  },
  {


    url127: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=71",
    arrayformat127: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",71,"Arts, Entertainment, and Recreation"+",","Earnings",dataend],
  },
  {


    url128: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=71",
    arrayformat128: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",71,"Arts, Entertainment, and Recreation"+",","Earnings",dataend],
  },
  {

    url129: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=71",
    arrayformat129: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",71,"Arts, Entertainment, and Recreation"+",","Earnings",dataend],
  },

],  // end of measure data

Arts_Job_Net_Change  :
  {


    url130: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=71",
    arrayformat130: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",71,"Arts, Entertainment, and Recreation"+",","Job Change",dataend],
  },
  {


    url131: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=71",
    arrayformat131: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",71,"Arts, Entertainment, and Recreation"+",","Job Change",dataend],
  },
  {


    url132: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=71",
    arrayformat132: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",71,"Arts, Entertainment, and Recreation"+",","Job Change",dataend],
  },
  {

    url133: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=71",
    arrayformat133: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",71,"Arts, Entertainment, and Recreation"+",","Job Change",dataend],
  },

],  // end of measure data

Arts_New_Hires  :
  {


    url134: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=71",
    arrayformat134: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",71,"Arts, Entertainment, and Recreation"+",","New Hires",dataend],

  },
  {


    url135: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=71",
    arrayformat135: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",71,"Arts, Entertainment, and Recreation"+",","New Hires",dataend],
  },
  {


    url136: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=71",
    arrayformat136: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",71,"Arts, Entertainment, and Recreation"+",","New Hires",dataend],
  },
  {

    url137: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=71",
    arrayformat137: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",71,"Arts, Entertainment, and Recreation"+",","New Hires",dataend],
  },

],  // end of measure data

Arts_Separations  :
  {


    url138: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=71",
    arrayformat138: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",71,"Arts, Entertainment, and Recreation"+",","Seperation",dataend],

  },
  {


    url139: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=71",
    arrayformat139: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",71,"Arts, Entertainment, and Recreation"+",","Seperation",dataend],
  },
  {


    url140: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=71",
    arrayformat140: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",71,"Arts, Entertainment, and Recreation"+",","Seperation",dataend],
  },
  {

    url141: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=71",
    arrayformat141: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",71,"Arts, Entertainment, and Recreation"+",","Seperation",dataend],
  },

],  // end of measure data

Arts_Turnover_Rate  :
  {


    url142: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=71",
    arrayformat142: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",71,"Arts, Entertainment, and Recreation"+",","Turnover Rate",dataend],
  },
  {


    url143: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=71",
    arrayformat143: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",71,"Arts, Entertainment, and Recreation"+",","Turnover Rate",dataend],
  },
  {


    url144: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=71",
    arrayformat144: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",71,"Arts, Entertainment, and Recreation"+",","Turnover Rate",dataend],
  },
  {

    url145: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=71",
    arrayformat145: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",71,"Arts, Entertainment, and Recreation"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Arts_Workers  :
  {


    url146: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=71",
    arrayformat146: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",71,"Arts, Entertainment, and Recreation"+",","Workers",dataend],

  },
  {


    url147: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=71",
    arrayformat147: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",71,"Arts, Entertainment, and Recreation"+",","Workers",dataend],
  },
  {


    url148: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=71",
    arrayformat148: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",71,"Arts, Entertainment, and Recreation"+",","Workers",dataend],
  },
  {

    url149: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=71",
    arrayformat149: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",71,"Arts, Entertainment, and Recreation"+",","Workers",dataend],
  },

],  // end of measure data

Construction_Avg_Monthly_Earnings  :
  {


    url150: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=23",
    arrayformat150: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",23,"Construction"+",","Earnings",dataend],
  },
  {


    url151: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=23",
    arrayformat151: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",23,"Construction"+",","Earnings",dataend],
  },
  {


    url152: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=23",
    arrayformat152: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",23,"Construction"+",","Earnings",dataend],
  },
  {

    url153: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=23",
    arrayformat153: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",23,"Construction"+",","Earnings",dataend],
  },

],  // end of measure data

Construction_Job_Net_Change  :
  {


    url154: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=23",
    arrayformat154: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",23,"Construction"+",","Job Change",dataend],
  },
  {


    url155: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=23",
    arrayformat155: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",23,"Construction"+",","Job Change",dataend],
  },
  {


    url156: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=23",
    arrayformat156: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",23,"Construction"+",","Job Change",dataend],
  },
  {

    url157: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=23",
    arrayformat157: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",23,"Construction"+",","Job Change",dataend],
  },

],  // end of measure data

Construction_New_Hires  :
  {


    url158: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=23",
    arrayformat158: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",23,"Construction"+",","New Hires",dataend],

  },
  {


    url159: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=23",
    arrayformat159: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",23,"Construction"+",","New Hires",dataend],
  },
  {


    url160: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=23",
    arrayformat160: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",23,"Construction"+",","New Hires",dataend],
  },
  {

    url161: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=23",
    arrayformat161: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",23,"Construction"+",","New Hires",dataend],
  },

],  // end of measure data

Construction_Separations  :
  {


    url162: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=23",
    arrayformat162: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",23,"Construction"+",","Seperation",dataend],

  },
  {


    url163: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=23",
    arrayformat163: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",23,"Construction"+",","Seperation",dataend],
  },
  {


    url164: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=23",
    arrayformat164: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",23,"Construction"+",","Seperation",dataend],
  },
  {

    url165: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=23",
    arrayformat165: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",23,"Construction"+",","Seperation",dataend],
  },

],  // end of measure data

Construction_Turnover_Rate  :
  {


    url166: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=23",
    arrayformat166: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",23,"Construction"+",","Turnover Rate",dataend],

  },
  {


    url167: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=23",
    arrayformat167: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",23,"Construction"+",","Turnover Rate",dataend],
  },
  {


    url168: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=23",
    arrayformat168: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",23,"Construction"+",","Turnover Rate",dataend],
  },
  {

    url169: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=23",
    arrayformat169: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",23,"Construction"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Construction_Workers  :
  {


    url170: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=23",
    arrayformat170: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",23,"Construction"+",","Workers",dataend],

  },
  {


    url171: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=23",
    arrayformat171: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",23,"Construction"+",","Workers",dataend],
  },
  {


    url172: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=23",
    arrayformat172: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",23,"Construction"+",","Workers",dataend],
  },
  {

    url173: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=23",
    arrayformat173: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",23,"Construction"+",","Workers",dataend],
  },

],  // end of measure data

Educational_Services_Avg_Monthly_Earnings  :
  {


    url174: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=61",
    arrayformat174: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",61,"Educational Services"+",","Earnings",dataend],
  },
  {


    url175: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=61",
    arrayformat175: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",61,"Educational Services"+",","Earnings",dataend],
  },
  {


    url176: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=61",
    arrayformat176: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",61,"Educational Services"+",","Earnings",dataend],
  },
  {

    url177: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=61",
    arrayformat177: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",61,"Educational Services"+",","Earnings",dataend],
  },

],  // end of measure data

Educational_Services_Job_Net_Change  :
  {


    url178: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=61",
    arrayformat178: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",61,"Educational Services"+",","Job Change",dataend],
  },
  {


    url179: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=61",
    arrayformat179: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",61,"Educational Services"+",","Job Change",dataend],
  },
  {


    url180: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=61",
    arrayformat180: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",61,"Educational Services"+",","Job Change",dataend],
  },
  {

    url181: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=61",
    arrayformat181: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",61,"Educational Services"+",","Job Change",dataend],
  },

],  // end of measure data

Educational_Services_New_Hires  :
  {


    url182: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=61",
    arrayformat182: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",61,"Educational Services"+",","New Hires",dataend],

  },
  {


    url183: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=61",
    arrayformat183: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",61,"Educational Services"+",","New Hires",dataend],
  },
  {


    url184: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=61",
    arrayformat184: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",61,"Educational Services"+",","New Hires",dataend],
  },
  {

    url185: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=61",
    arrayformat185: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",61,"Educational Services"+",","New Hires",dataend],
  },

],  // end of measure data

Educational_Services_Separations  :
  {


    url186: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=61",
    arrayformat186: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",61,"Educational Services"+",","Seperation",dataend],

  },
  {


    url187: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=61",
    arrayformat187: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",61,"Educational Services"+",","Seperation",dataend],
  },
  {


    url188: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=61",
    arrayformat188: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",61,"Educational Services"+",","Seperation",dataend],
  },
  {

    url189: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=61",
    arrayformat189: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",61,"Educational Services"+",","Seperation",dataend],
  },

],  // end of measure data

Educational_Services_Turnover_Rate  :
  {


    url190: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=61",
    arrayformat190: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",61,"Educational Services"+",","Turnover Rate",dataend],
  },
  {


    url191: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=61",
    arrayformat191: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",61,"Educational Services"+",","Turnover Rate",dataend],
  },
  {


    url192: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=61",
    arrayformat192: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",61,"Educational Services"+",","Turnover Rate",dataend],
  },
  {

    url193: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=61",
    arrayformat193: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",61,"Educational Services"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Educational_Services_Workers  :
  {


    url194: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=61",
    arrayformat194: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",61,"Educational Services"+",","Workers",dataend],

  },
  {


    url195: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=61",
    arrayformat195: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",61,"Educational Services"+",","Workers",dataend],
  },
  {


    url196: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=61",
    arrayformat196: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",61,"Educational Services"+",","Workers",dataend],
  },
  {

    url197: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=61",
    arrayformat197: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",61,"Educational Services"+",","Workers",dataend],
  },

],  // end of measure data

Finance_Avg_Monthly_Earnings  :
  {


    url198: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=52",
    arrayformat198: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",52,"Finance and Insurance"+",","Earnings",dataend],
  },
  {


    url199: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=52",
    arrayformat199: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",52,"Finance and Insurance"+",","Earnings",dataend],
  },
  {


    url200: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=52",
    arrayformat200: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",52,"Finance and Insurance"+",","Earnings",dataend],
  },
  {

    url201: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=52",
    arrayformat201: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",52,"Finance and Insurance"+",","Earnings",dataend],
  },

],  // end of measure data

Finance_Job_Net_Change  :
  {


    url202: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=52",
    arrayformat202: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",52,"Finance and Insurance"+",","Job Change",dataend],
  },
  {


    url203: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=52",
    arrayformat203: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",52,"Finance and Insurance"+",","Job Change",dataend],
  },
  {


    url204: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=52",
    arrayformat204: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",52,"Finance and Insurance"+",","Job Change",dataend],
  },
  {

    url205: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=52",
    arrayformat205: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",52,"Finance and Insurance"+",","Job Change",dataend],
  },

],  // end of measure data

Finance_New_Hires  :
  {


    url206: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=52",
    arrayformat206: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",52,"Finance and Insurance"+",","New Hires",dataend],

  },
  {


    url207: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=52",
    arrayformat207: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",52,"Finance and Insurance"+",","New Hires",dataend],
  },
  {


    url208: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=52",
    arrayformat208: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",52,"Finance and Insurance"+",","New Hires",dataend],
  },
  {

    url209: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=52",
    arrayformat209: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",52,"Finance and Insurance"+",","New Hires",dataend],
  },

],  // end of measure data

Finance_Separations  :
  {


    url210: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=52",
    arrayformat210: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",52,"Finance and Insurance"+",","Seperation",dataend],

  },
  {


    url211: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=52",
    arrayformat211: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",52,"Finance and Insurance"+",","Seperation",dataend],
  },
  {


    url212: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=52",
    arrayformat212: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",52,"Finance and Insurance"+",","Seperation",dataend],
  },
  {

    url213: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=52",
    arrayformat213: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",52,"Finance and Insurance"+",","Seperation",dataend],
  },

],  // end of measure data

Finance_Turnover_Rate  :
  {


    url214: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=52",
    arrayformat214: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",52,"Finance and Insurance"+",","Turnover Rate",dataend],

  },
  {


    url215: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=52",
    arrayformat215: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",52,"Finance and Insurance"+",","Turnover Rate",dataend],
  },
  {


    url216: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=52",
    arrayformat216: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",52,"Finance and Insurance"+",","Turnover Rate",dataend],
  },
  {

    url217: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=52",
    arrayformat217: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",52,"Finance and Insurance"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Finance_Workers  :
  {


    url218: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=52",
    arrayformat218: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",52,"Finance and Insurance"+",","Workers",dataend],

  },
  {


    url219: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=52",
    arrayformat219: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",52,"Finance and Insurance"+",","Workers",dataend],
  },
  {


    url220: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=52",
    arrayformat220: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",52,"Finance and Insurance"+",","Workers",dataend],
  },
  {

    url221: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=52",
    arrayformat221: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",52,"Finance and Insurance"+",","Workers",dataend],
  },

],  // end of measure data

Information_Avg_Monthly_Earnings  :
  {


    url222: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=51",
    arrayformat222: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",51,"Information"+",","Earnings",dataend],
  },
  {


    url223: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=51",
    arrayformat223: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",51,"Information"+",","Earnings",dataend],
  },
  {


    url224: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=51",
    arrayformat224: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",51,"Information"+",","Earnings",dataend],
  },
  {

    url225: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=51",
    arrayformat225: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",51,"Information"+",","Earnings",dataend],
  },

],  // end of measure data

Information_Job_Net_Change  :
  {


    url226: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=51",
    arrayformat226: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",51,"Information"+",","Job Change",dataend],
  },
  {


    url227: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=51",
    arrayformat227: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",51,"Information"+",","Job Change",dataend],
  },
  {


    url228: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=51",
    arrayformat228: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",51,"Information"+",","Job Change",dataend],
  },
  {

    url229: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=51",
    arrayformat229: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",51,"Information"+",","Job Change",dataend],
  },

],  // end of measure data

Information_New_Hires  :
  {


    url230: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=51",
    arrayformat230: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",51,"Information"+",","New Hires",dataend],

  },
  {


    url231: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=51",
    arrayformat231: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",51,"Information"+",","New Hires",dataend],
  },
  {


    url232: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=51",
    arrayformat232: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",51,"Information"+",","New Hires",dataend],
  },
  {

    url233: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=51",
    arrayformat233: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",51,"Information"+",","New Hires",dataend],
  },

],  // end of measure data

Information_Separations  :
  {


    url234: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=51",
    arrayformat234: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",51,"Information"+",","Seperation",dataend],

  },
  {


    url235: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=51",
    arrayformat235: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",51,"Information"+",","Seperation",dataend],
  },
  {


    url236: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=51",
    arrayformat236: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",51,"Information"+",","Seperation",dataend],
  },
  {

    url237: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=51",
    arrayformat237: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",51,"Information"+",","Seperation",dataend],
  },

],  // end of measure data

Information_Turnover_Rate  :
  {


    url238: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=51",
    arrayformat238: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",51,"Information"+",","Turnover Rate",dataend],

  },
  {


    url239: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=51",
    arrayformat239: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",51,"Information"+",","Turnover Rate",dataend],
  },
  {


    url240: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=51",
    arrayformat240: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",51,"Information"+",","Turnover Rate",dataend],
  },
  {

    url241: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=51",
    arrayformat241: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",51,"Information"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Information_Workers  :
  {


    url242: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=51",
    arrayformat242: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",51,"Information"+",","Workers",dataend],

  },
  {


    url243: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=51",
    arrayformat243: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",51,"Information"+",","Workers",dataend],
  },
  {


    url244: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=51",
    arrayformat244: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",51,"Information"+",","Workers",dataend],
  },
  {

    url245: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=51",
    arrayformat245: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",51,"Information"+",","Workers",dataend],
  },

],  // end of measure data

Management_Avg_Monthly_Earnings  :
  {


    url246: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=55",
    arrayformat246: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",55,"Management of Companies and Enterprises"+",","Earnings",dataend],
  },
  {


    url247: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=55",
    arrayformat247: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",55,"Management of Companies and Enterprises"+",","Earnings",dataend],
  },
  {


    url248: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=55",
    arrayformat248: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",55,"Management of Companies and Enterprises"+",","Earnings",dataend],
  },
  {

    url249: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=55",
    arrayformat249: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",55,"Management of Companies and Enterprises"+",","Earnings",dataend],
  },

],  // end of measure data

Management_Job_Net_Change  :
  {


    url250: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=55",
    arrayformat250: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",55,"Management of Companies and Enterprises"+",","Job Change",dataend],
  },
  {


    url251: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=55",
    arrayformat251: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",55,"Management of Companies and Enterprises"+",","Job Change",dataend],
  },
  {


    url252: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=55",
    arrayformat252: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",55,"Management of Companies and Enterprises"+",","Job Change",dataend],
  },
  {

    url253: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=55",
    arrayformat253: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",55,"Management of Companies and Enterprises"+",","Job Change",dataend],
  },

],  // end of measure data

Management_New_Hires  :
  {


    url254: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=55",
    arrayformat254: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",55,"Management of Companies and Enterprises"+",","New Hires",dataend],

  },
  {


    url255: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=55",
    arrayformat255: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",55,"Management of Companies and Enterprises"+",","New Hires",dataend],
  },
  {


    url256: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=55",
    arrayformat256: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",55,"Management of Companies and Enterprises"+",","New Hires",dataend],
  },
  {

    url257: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=55",
    arrayformat257: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",55,"Management of Companies and Enterprises"+",","New Hires",dataend],
  },

],  // end of measure data

Management_Separations  :
  {


    url258: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=55",
    arrayformat258: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",55,"Management of Companies and Enterprises"+",","Seperation",dataend],

  },
  {


    url259: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=55",
    arrayformat259: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",55,"Management of Companies and Enterprises"+",","Seperation",dataend],
  },
  {


    url260: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=55",
    arrayformat260: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",55,"Management of Companies and Enterprises"+",","Seperation",dataend],
  },
  {

    url261: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=55",
    arrayformat261: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",55,"Management of Companies and Enterprises"+",","Seperation",dataend],
  },

],  // end of measure data

Management_Turnover_Rate  :
  {


    url262: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=55",
    arrayformat262: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",55,"Management of Companies and Enterprises"+",","Turnover Rate",dataend],

  },
  {


    url263: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=55",
    arrayformat263: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",55,"Management of Companies and Enterprises"+",","Turnover Rate",dataend],
  },
  {


    url264: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=55",
    arrayformat264: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",55,"Management of Companies and Enterprises"+",","Turnover Rate",dataend],
  },
  {

    url265: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=55",
    arrayformat265: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",55,"Management of Companies and Enterprises"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Management_Workers  :
  {


    url266: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=55",
    arrayformat266: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",55,"Management of Companies and Enterprises"+",","Workers",dataend],

  },
  {


    url267: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=55",
    arrayformat267: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",55,"Management of Companies and Enterprises"+",","Workers",dataend],
  },
  {


    url268: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=55",
    arrayformat268: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",55,"Management of Companies and Enterprises"+",","Workers",dataend],
  },
  {

    url269: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=55",
    arrayformat269: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",55,"Management of Companies and Enterprises"+",","Workers",dataend],
  },

],  // end of measure data

Manufacturing_Avg_Monthly_Earnings  :
  {


    url270: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=31-33",
    arrayformat270: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",31-33,"Manufacturing"+",","Earnings",dataend],
  },
  {


    url271: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=31-33",
    arrayformat271: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",31-33,"Manufacturing"+",","Earnings",dataend],
  },
  {


    url272: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=31-33",
    arrayformat272: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",31-33,"Manufacturing"+",","Earnings",dataend],
  },
  {

    url273: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=31-33",
    arrayformat273: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",31-33,"Manufacturing"+",","Earnings",dataend],
  },

],  // end of measure data

Manufacturing_Job_Net_Change  :
  {


    url274: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=31-33",
    arrayformat274: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",31-33,"Manufacturing"+",","Job Change",dataend],
  },
  {


    url275: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=31-33",
    arrayformat275: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",31-33,"Manufacturing"+",","Job Change",dataend],
  },
  {


    url276: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=31-33",
    arrayformat276: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",31-33,"Manufacturing"+",","Job Change",dataend],
  },
  {

    url277: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=31-33",
    arrayformat277: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",31-33,"Manufacturing"+",","Job Change",dataend],
  },

],  // end of measure data

Manufacturing_New_Hires  :
  {


    url278: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=31-33",
    arrayformat278: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",31-33,"Manufacturing"+",","New Hires",dataend],

  },
  {


    url279: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=31-33",
    arrayformat279: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",31-33,"Manufacturing"+",","New Hires",dataend],
  },
  {


    url280: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=31-33",
    arrayformat280: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",31-33,"Manufacturing"+",","New Hires",dataend],
  },
  {

    url281: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=31-33",
    arrayformat281: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",31-33,"Manufacturing"+",","New Hires",dataend],
  },

],  // end of measure data

Manufacturing_Separations  :
  {


    url282: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=31-33",
    arrayformat282: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",31-33,"Manufacturing"+",","Seperation",dataend],

  },
  {


    url283: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=31-33",
    arrayformat283: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",31-33,"Manufacturing"+",","Seperation",dataend],
  },
  {


    url284: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=31-33",
    arrayformat284: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",31-33,"Manufacturing"+",","Seperation",dataend],
  },
  {

    url285: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=31-33",
    arrayformat285: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",31-33,"Manufacturing"+",","Seperation",dataend],
  },

],  // end of measure data

Manufacturing_Turnover_Rate  :
  {


    url286: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=31-33",
    arrayformat286: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",31-33,"Manufacturing"+",","Turnover Rate",dataend],

  },
  {


    url287: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=31-33",
    arrayformat287: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",31-33,"Manufacturing"+",","Turnover Rate",dataend],
  },
  {


    url288: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=31-33",
    arrayformat288: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",31-33,"Manufacturing"+",","Turnover Rate",dataend],
  },
  {

    url289: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=31-33",
    arrayformat289: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",31-33,"Manufacturing"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Manufacturing_Workers  :
  {


    url290: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=31-33",
    arrayformat290: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",31-33,"Manufacturing"+",","Workers",dataend],

  },
  {


    url291: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=31-33",
    arrayformat291: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",31-33,"Manufacturing"+",","Workers",dataend],
  },
  {


    url292: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=31-33",
    arrayformat292: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",31-33,"Manufacturing"+",","Workers",dataend],
  },
  {

    url293: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=31-33",
    arrayformat293: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",31-33,"Manufacturing"+",","Workers",dataend],
  },

],  // end of measure data

Mining_Avg_Monthly_Earnings  :
  {


    url294: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=21",
    arrayformat294: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Earnings",dataend],
  },
  {


    url295: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=21",
    arrayformat295: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Earnings",dataend],
  },
  {


    url296: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=21",
    arrayformat296: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Earnings",dataend],
  },
  {

    url297: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=21",
    arrayformat297: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Earnings",dataend],
  },

],  // end of measure data

Mining_Job_Net_Change  :
  {


    url298: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=21",
    arrayformat298: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Job Change",dataend],
  },
  {


    url299: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=21",
    arrayformat299: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Job Change",dataend],
  },
  {


    url300: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=21",
    arrayformat300: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Job Change",dataend],
  },
  {

    url301: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=21",
    arrayformat301: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Job Change",dataend],
  },

],  // end of measure data

Mining_New_Hires  :
  {


    url302: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=21",
    arrayformat302: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","New Hires",dataend],

  },
  {


    url303: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=21",
    arrayformat303: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","New Hires",dataend],
  },
  {


    url304: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=21",
    arrayformat304: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","New Hires",dataend],
  },
  {

    url305: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=21",
    arrayformat305: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","New Hires",dataend],
  },

],  // end of measure data

Mining_Separations  :
  {


    url306: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=21",
    arrayformat306: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Seperation",dataend],

  },
  {


    url307: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=21",
    arrayformat307: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Seperation",dataend],
  },
  {


    url308: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=21",
    arrayformat308: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Seperation",dataend],
  },
  {

    url309: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=21",
    arrayformat309: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Seperation",dataend],
  },

],  // end of measure data

Mining_Turnover_Rate  :
  {


    url310: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=21",
    arrayformat310: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Turnover Rate",dataend],

  },
  {


    url311: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=21",
    arrayformat311: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Turnover Rate",dataend],
  },
  {


    url312: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=21",
    arrayformat312: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Turnover Rate",dataend],
  },
  {

    url313: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=21",
    arrayformat313: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Mining_Workers  :
  {


    url314: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=21",
    arrayformat314: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Workers",dataend],

  },
  {


    url315: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=21",
    arrayformat315: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Workers",dataend],
  },
  {


    url316: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=21",
    arrayformat316: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Workers",dataend],
  },
  {

    url317: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=21",
    arrayformat317: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",21,"Mining, Quarrying, and Oil and Gas Extraction"+",","Workers",dataend],
  },

],  // end of measure data

Other_Services_Avg_Monthly_Earnings  :
  {


    url318: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=81",
    arrayformat318: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",81,"Other Services (except Public Administration)"+",","Earnings",dataend],
  },
  {


    url319: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=81",
    arrayformat319: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",81,"Other Services (except Public Administration)"+",","Earnings",dataend],
  },
  {


    url320: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=81",
    arrayformat320: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",81,"Other Services (except Public Administration)"+",","Earnings",dataend],
  },
  {

    url321: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=81",
    arrayformat321: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",81,"Other Services (except Public Administration)"+",","Earnings",dataend],
  },

],  // end of measure data

Other_Services_Job_Net_Change  :
  {


    url322: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=81",
    arrayformat322: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",81,"Other Services (except Public Administration)"+",","Job Change",dataend],
  },
  {


    url323: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=81",
    arrayformat323: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",81,"Other Services (except Public Administration)"+",","Job Change",dataend],
  },
  {


    url324: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=81",
    arrayformat324: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",81,"Other Services (except Public Administration)"+",","Job Change",dataend],
  },
  {

    url325: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=81",
    arrayformat325: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",81,"Other Services (except Public Administration)"+",","Job Change",dataend],
  },

],  // end of measure data

Other_Services_New_Hires  :
  {


    url326: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=81",
    arrayformat326: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",81,"Other Services (except Public Administration)"+",","New Hires",dataend],

  },
  {


    url327: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=81",
    arrayformat327: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",81,"Other Services (except Public Administration)"+",","New Hires",dataend],
  },
  {


    url328: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=81",
    arrayformat328: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",81,"Other Services (except Public Administration)"+",","New Hires",dataend],
  },
  {

    url329: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=81",
    arrayformat329: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",81,"Other Services (except Public Administration)"+",","New Hires",dataend],
  },

],  // end of measure data

Other_Services_Separations  :
  {


    url330: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=81",
    arrayformat330: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",81,"Other Services (except Public Administration)"+",","Seperation",dataend],

  },
  {


    url331: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=81",
    arrayformat331: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",81,"Other Services (except Public Administration)"+",","Seperation",dataend],
  },
  {


    url332: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=81",
    arrayformat332: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",81,"Other Services (except Public Administration)"+",","Seperation",dataend],
  },
  {

    url333: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=81",
    arrayformat333: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",81,"Other Services (except Public Administration)"+",","Seperation",dataend],
  },

],  // end of measure data

Other_Services_Turnover_Rate  :
  {


    url334: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=81",
    arrayformat334: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",81,"Other Services (except Public Administration)"+",","Turnover Rate",dataend],

  },
  {


    url335: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=81",
    arrayformat335: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",81,"Other Services (except Public Administration)"+",","Turnover Rate",dataend],
  },
  {


    url336: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=81",
    arrayformat336: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",81,"Other Services (except Public Administration)"+",","Turnover Rate",dataend],
  },
  {

    url337: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=81",
    arrayformat337: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",81,"Other Services (except Public Administration)"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Other_Services_Workers  :
  {


    url338: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=81",
    arrayformat338: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",81,"Other Services (except Public Administration)"+",","Workers",dataend],

  },
  {


    url339: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=81",
    arrayformat339: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",81,"Other Services (except Public Administration)"+",","Workers",dataend],
  },
  {


    url340: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=81",
    arrayformat340: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",81,"Other Services (except Public Administration)"+",","Workers",dataend],
  },
  {

    url341: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=81",
    arrayformat341: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",81,"Other Services (except Public Administration)"+",","Workers",dataend],
  },

],  // end of measure data

Professional_Avg_Monthly_Earnings  :
  {


    url342: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=541",
    arrayformat342: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",541,"Professional, Scientific, and Technical Services"+",","Earnings",dataend],
  },
  {


    url343: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=541",
    arrayformat343: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",541,"Professional, Scientific, and Technical Services"+",","Earnings",dataend],
  },
  {


    url344: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=541",
    arrayformat344: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",541,"Professional, Scientific, and Technical Services"+",","Earnings",dataend],
  },
  {

    url345: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=541",
    arrayformat345: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",541,"Professional, Scientific, and Technical Services"+",","Earnings",dataend],
  },

],  // end of measure data

Professional_Job_Net_Change  :
  {


    url346: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=541",
    arrayformat346: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",541,"Professional, Scientific, and Technical Services"+",","Job Change",dataend],
  },
  {


    url347: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=541",
    arrayformat347: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",541,"Professional, Scientific, and Technical Services"+",","Job Change",dataend],
  },
  {


    url348: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=541",
    arrayformat348: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",541,"Professional, Scientific, and Technical Services"+",","Job Change",dataend],
  },
  {

    url349: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=541",
    arrayformat349: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",541,"Professional, Scientific, and Technical Services"+",","Job Change",dataend],
  },

],  // end of measure data

Professional_New_Hires  :
  {


    url350: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=541",
    arrayformat350: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",541,"Professional, Scientific, and Technical Services"+",","New Hires",dataend],

  },
  {


    url351: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=541",
    arrayformat351: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",541,"Professional, Scientific, and Technical Services"+",","New Hires",dataend],
  },
  {


    url352: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=541",
    arrayformat352: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",541,"Professional, Scientific, and Technical Services"+",","New Hires",dataend],
  },
  {

    url353: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=541",
    arrayformat353: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",541,"Professional, Scientific, and Technical Services"+",","New Hires",dataend],
  },

],  // end of measure data

Professional_Separations  :
  {


    url354: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=541",
    arrayformat354: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",541,"Professional, Scientific, and Technical Services"+",","Seperation",dataend],

  },
  {


    url355: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=541",
    arrayformat355: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",541,"Professional, Scientific, and Technical Services"+",","Seperation",dataend],
  },
  {


    url356: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=541",
    arrayformat356: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",541,"Professional, Scientific, and Technical Services"+",","Seperation",dataend],
  },
  {

    url357: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=541",
    arrayformat357: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",541,"Professional, Scientific, and Technical Services"+",","Seperation",dataend],
  },

],  // end of measure data

Professional_Turnover_Rate  :
  {


    url358: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=541",
    arrayformat358: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",541,"Professional, Scientific, and Technical Services"+",","Turnover Rate",dataend],

  },
  {


    url359: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=541",
    arrayformat359: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",541,"Professional, Scientific, and Technical Services"+",","Turnover Rate",dataend],
  },
  {


    url360: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=541",
    arrayformat360: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",541,"Professional, Scientific, and Technical Services"+",","Turnover Rate",dataend],
  },
  {

    url361: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=541",
    arrayformat361: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",541,"Professional, Scientific, and Technical Services"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Professional_Workers  :
  {


    url362: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=541",
    arrayformat362: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",541,"Professional, Scientific, and Technical Services"+",","Workers",dataend],

  },
  {


    url363: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=541",
    arrayformat363: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",541,"Professional, Scientific, and Technical Services"+",","Workers",dataend],
  },
  {


    url364: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=541",
    arrayformat364: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",541,"Professional, Scientific, and Technical Services"+",","Workers",dataend],
  },
  {

    url365: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=541",
    arrayformat365: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",541,"Professional, Scientific, and Technical Services"+",","Workers",dataend],
  },

],  // end of measure data

Public_Administration_Avg_Monthly_Earnings  :
  {


    url366: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=92",
    arrayformat366: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",92,"Public Administration"+",","Earnings",dataend],
  },
  {


    url367: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=92",
    arrayformat367: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",92,"Public Administration"+",","Earnings",dataend],
  },
  {


    url368: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=92",
    arrayformat368: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",92,"Public Administration"+",","Earnings",dataend],
  },
  {

    url369: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=92",
    arrayformat369: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",92,"Public Administration"+",","Earnings",dataend],
  },

],  // end of measure data

Public_Administration_Job_Net_Change  :
  {


    url370: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=92",
    arrayformat370: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",92,"Public Administration"+",","Job Change",dataend],
  },
  {


    url371: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=92",
    arrayformat371: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",92,"Public Administration"+",","Job Change",dataend],
  },
  {


    url372: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=92",
    arrayformat372: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",92,"Public Administration"+",","Job Change",dataend],
  },
  {

    url373: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=92",
    arrayformat373: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",92,"Public Administration"+",","Job Change",dataend],
  },

],  // end of measure data

Public_Administration_New_Hires  :
  {


    url374: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=92",
    arrayformat374: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",92,"Public Administration"+",","New Hires",dataend],

  },
  {


    url375: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=92",
    arrayformat375: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",92,"Public Administration"+",","New Hires",dataend],
  },
  {


    url376: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=92",
    arrayformat376: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",92,"Public Administration"+",","New Hires",dataend],
  },
  {

    url377: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=92",
    arrayformat377: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",92,"Public Administration"+",","New Hires",dataend],
  },

],  // end of measure data

Public_Administration_Separations  :
  {


    url378: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=92",
    arrayformat378: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",92,"Public Administration"+",","Seperation",dataend],

  },
  {


    url379: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=92",
    arrayformat379: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",92,"Public Administration"+",","Seperation",dataend],
  },
  {


    url380: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=92",
    arrayformat380: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",92,"Public Administration"+",","Seperation",dataend],
  },
  {

    url381: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=92",
    arrayformat381: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",92,"Public Administration"+",","Seperation",dataend],
  },

],  // end of measure data

Public_Administration_Turnover_Rate  :
  {


    url382: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=92",
    arrayformat382: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",92,"Public Administration"+",","Turnover Rate",dataend],

  },
  {


    url383: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=92",
    arrayformat383: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",92,"Public Administration"+",","Turnover Rate",dataend],
  },
  {


    url384: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=92",
    arrayformat384: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",92,"Public Administration"+",","Turnover Rate",dataend],
  },
  {

    url385: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=92",
    arrayformat385: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",92,"Public Administration"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Public_Administration_Workers  :
  {


    url386: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=92",
    arrayformat386: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",92,"Public Administration"+",","Workers",dataend],

  },
  {


    url387: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=92",
    arrayformat387: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",92,"Public Administration"+",","Workers",dataend],
  },
  {


    url388: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=92",
    arrayformat388: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",92,"Public Administration"+",","Workers",dataend],
  },
  {

    url389: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=92",
    arrayformat389: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",92,"Public Administration"+",","Workers",dataend],
  },

],  // end of measure data

Real_Estate_Avg_Monthly_Earnings  :
  {


    url390: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=53",
    arrayformat390: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",53,"Real Estate and Rental and Leasing"+",","Earnings",dataend],
  },
  {


    url391: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=53",
    arrayformat391: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",53,"Real Estate and Rental and Leasing"+",","Earnings",dataend],
  },
  {


    url392: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=53",
    arrayformat392: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",53,"Real Estate and Rental and Leasing"+",","Earnings",dataend],
  },
  {

    url393: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=53",
    arrayformat393: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",53,"Real Estate and Rental and Leasing"+",","Earnings",dataend],
  },

],  // end of measure data

Real_Estate_Job_Net_Change  :
  {


    url394: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=53",
    arrayformat394: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",53,"Real Estate and Rental and Leasing"+",","Job Change",dataend],
  },
  {


    url395: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=53",
    arrayformat395: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",53,"Real Estate and Rental and Leasing"+",","Job Change",dataend],
  },
  {


    url396: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=53",
    arrayformat396: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",53,"Real Estate and Rental and Leasing"+",","Job Change",dataend],
  },
  {

    url397: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=53",
    arrayformat397: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",53,"Real Estate and Rental and Leasing"+",","Job Change",dataend],
  },

],  // end of measure data

Real_Estate_New_Hires  :
  {


    url398: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=53",
    arrayformat398: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",53,"Real Estate and Rental and Leasing"+",","New Hires",dataend],

  },
  {


    url399: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=53",
    arrayformat399: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",53,"Real Estate and Rental and Leasing"+",","New Hires",dataend],
  },
  {


    url400: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=53",
    arrayformat400: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",53,"Real Estate and Rental and Leasing"+",","New Hires",dataend],
  },
  {

    url401: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=53",
    arrayformat401: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",53,"Real Estate and Rental and Leasing"+",","New Hires",dataend],
  },

],  // end of measure data

Real_Estate_Separations  :
  {


    url402: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=53",
    arrayformat402: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",53,"Real Estate and Rental and Leasing"+",","Seperation",dataend],

  },
  {


    url403: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=53",
    arrayformat403: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",53,"Real Estate and Rental and Leasing"+",","Seperation",dataend],
  },
  {


    url404: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=53",
    arrayformat404: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",53,"Real Estate and Rental and Leasing"+",","Seperation",dataend],
  },
  {

    url405: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=53",
    arrayformat405: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",53,"Real Estate and Rental and Leasing"+",","Seperation",dataend],
  },

],  // end of measure data

Real_Estate_Turnover_Rate  :
  {


    url406: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=53",
    arrayformat406: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",53,"Real Estate and Rental and Leasing"+",","Turnover Rate",dataend],

  },
  {


    url407: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=53",
    arrayformat407: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",53,"Real Estate and Rental and Leasing"+",","Turnover Rate",dataend],
  },
  {


    url408: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=53",
    arrayformat408: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",53,"Real Estate and Rental and Leasing"+",","Turnover Rate",dataend],
  },
  {

    url409: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=53",
    arrayformat409: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",53,"Real Estate and Rental and Leasing"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Real_Estate_Workers  :
  {


    url410: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=53",
    arrayformat410: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",53,"Real Estate and Rental and Leasing"+",","Workers",dataend],

  },
  {


    url411: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=53",
    arrayformat411: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",53,"Real Estate and Rental and Leasing"+",","Workers",dataend],
  },
  {


    url412: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=53",
    arrayformat412: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",53,"Real Estate and Rental and Leasing"+",","Workers",dataend],
  },
  {

    url413: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=53",
    arrayformat413: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",53,"Real Estate and Rental and Leasing"+",","Workers",dataend],
  },

],  // end of measure data

Retail_Avg_Monthly_Earnings  :
  {


    url414: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=44-45",
    arrayformat414: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",44-45,"Retail Trade"+",","Earnings",dataend],
  },
  {


    url415: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=44-45",
    arrayformat415: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",44-45,"Retail Trade"+",","Earnings",dataend],
  },
  {


    url416: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=44-45",
    arrayformat416: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",44-45,"Retail Trade"+",","Earnings",dataend],
  },
  {

    url417: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=44-45",
    arrayformat417: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",44-45,"Retail Trade"+",","Earnings",dataend],
  },

],  // end of measure data

Retail_Job_Net_Change  :
  {


    url418: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=44-45",
    arrayformat418: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",44-45,"Retail Trade"+",","Job Change",dataend],
  },
  {


    url419: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=44-45",
    arrayformat419: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",44-45,"Retail Trade"+",","Job Change",dataend],
  },
  {


    url420: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=44-45",
    arrayformat420: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",44-45,"Retail Trade"+",","Job Change",dataend],
  },
  {

    url421: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=44-45",
    arrayformat421: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",44-45,"Retail Trade"+",","Job Change",dataend],
  },

],  // end of measure data

Retail_New_Hires  :
  {


    url422: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=44-45",
    arrayformat422: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",44-45,"Retail Trade"+",","New Hires",dataend],

  },
  {


    url423: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=44-45",
    arrayformat423: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",44-45,"Retail Trade"+",","New Hires",dataend],
  },
  {


    url424: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=44-45",
    arrayformat424: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",44-45,"Retail Trade"+",","New Hires",dataend],
  },
  {

    url425: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=44-45",
    arrayformat425: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",44-45,"Retail Trade"+",","New Hires",dataend],
  },

],  // end of measure data

Retail_Separations  :
  {


    url426: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=44-45",
    arrayformat426: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",44-45,"Retail Trade"+",","Seperation",dataend],

  },
  {


    url427: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=44-45",
    arrayformat427: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",44-45,"Retail Trade"+",","Seperation",dataend],
  },
  {


    url428: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=44-45",
    arrayformat428: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",44-45,"Retail Trade"+",","Seperation",dataend],
  },
  {

    url429: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=44-45",
    arrayformat429: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",44-45,"Retail Trade"+",","Seperation",dataend],
  },

],  // end of measure data

Retail_Turnover_Rate  :
  {


    url430: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=44-45",
    arrayformat430: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",44-45,"Retail Trade"+",","Turnover Rate",dataend],

  },
  {


    url431: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=44-45",
    arrayformat431: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",44-45,"Retail Trade"+",","Turnover Rate",dataend],
  },
  {


    url432: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=44-45",
    arrayformat432: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",44-45,"Retail Trade"+",","Turnover Rate",dataend],
  },
  {

    url433: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=44-45",
    arrayformat433: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",44-45,"Retail Trade"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Retail_Workers  :
  {


    url434: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=44-45",
    arrayformat434: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",44-45,"Retail Trade"+",","Workers",dataend],

  },
  {


    url435: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=44-45",
    arrayformat435: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",44-45,"Retail Trade"+",","Workers",dataend],
  },
  {


    url436: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=44-45",
    arrayformat436: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",44-45,"Retail Trade"+",","Workers",dataend],
  },
  {

    url437: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=44-45",
    arrayformat437: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",44-45,"Retail Trade"+",","Workers",dataend],
  },

],  // end of measure data

Transportation_Avg_Monthly_Earnings  :
  {


    url438: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=48-49",
    arrayformat438: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",48-49,"Transportation and Warehousing"+",","Earnings",dataend],
  },
  {


    url439: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=48-49",
    arrayformat439: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",48-49,"Transportation and Warehousing"+",","Earnings",dataend],
  },
  {


    url440: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=48-49",
    arrayformat440: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",48-49,"Transportation and Warehousing"+",","Earnings",dataend],
  },
  {

    url441: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=48-49",
    arrayformat441: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",48-49,"Transportation and Warehousing"+",","Earnings",dataend],
  },

],  // end of measure data

Transportation_Job_Net_Change  :
  {


    url442: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=48-49",
    arrayformat442: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",48-49,"Transportation and Warehousing"+",","Job Change",dataend],
  },
  {


    url443: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=48-49",
    arrayformat443: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",48-49,"Transportation and Warehousing"+",","Job Change",dataend],
  },
  {


    url444: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=48-49",
    arrayformat444: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",48-49,"Transportation and Warehousing"+",","Job Change",dataend],
  },
  {

    url445: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=48-49",
    arrayformat445: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",48-49,"Transportation and Warehousing"+",","Job Change",dataend],
  },

],  // end of measure data

Transportation_New_Hires  :
  {


    url446: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=48-49",
    arrayformat446: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",48-49,"Transportation and Warehousing"+",","New Hires",dataend],

  },
  {


    url447: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=48-49",
    arrayformat447: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",48-49,"Transportation and Warehousing"+",","New Hires",dataend],
  },
  {


    url448: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=48-49",
    arrayformat448: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",48-49,"Transportation and Warehousing"+",","New Hires",dataend],
  },
  {

    url449: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=48-49",
    arrayformat449: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",48-49,"Transportation and Warehousing"+",","New Hires",dataend],
  },

],  // end of measure data

Transportation_Separations  :
  {


    url450: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=48-49",
    arrayformat450: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",48-49,"Transportation and Warehousing"+",","Seperation",dataend],

  },
  {


    url451: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=48-49",
    arrayformat451: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",48-49,"Transportation and Warehousing"+",","Seperation",dataend],
  },
  {


    url452: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=48-49",
    arrayformat452: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",48-49,"Transportation and Warehousing"+",","Seperation",dataend],
  },
  {

    url453: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=48-49",
    arrayformat453: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",48-49,"Transportation and Warehousing"+",","Seperation",dataend],
  },

],  // end of measure data

Transportation_Turnover_Rate  :
  {


    url454: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=48-49",
    arrayformat454: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",48-49,"Transportation and Warehousing"+",","Turnover Rate",dataend],

  },
  {


    url455: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=48-49",
    arrayformat455: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",48-49,"Transportation and Warehousing"+",","Turnover Rate",dataend],
  },
  {


    url456: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=48-49",
    arrayformat456: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",48-49,"Transportation and Warehousing"+",","Turnover Rate",dataend],
  },
  {

    url457: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=48-49",
    arrayformat457: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",48-49,"Transportation and Warehousing"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Transportation_Workers  :
  {


    url458: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=48-49",
    arrayformat458: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",48-49,"Transportation and Warehousing"+",","Workers",dataend],

  },
  {


    url459: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=48-49",
    arrayformat459: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",48-49,"Transportation and Warehousing"+",","Workers",dataend],
  },
  {


    url460: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=48-49",
    arrayformat460: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",48-49,"Transportation and Warehousing"+",","Workers",dataend],
  },
  {

    url461: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=48-49",
    arrayformat461: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",48-49,"Transportation and Warehousing"+",","Workers",dataend],
  },

],  // end of measure data

Utilities_Avg_Monthly_Earnings  :
  {


    url462: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=22",
    arrayformat462: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",22,"Utilities"+",","Earnings",dataend],
  },
  {


    url463: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=22",
    arrayformat463: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",22,"Utilities"+",","Earnings",dataend],
  },
  {


    url464: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=22",
    arrayformat464: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",22,"Utilities"+",","Earnings",dataend],
  },
  {

    url465: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=22",
    arrayformat465: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",22,"Utilities"+",","Earnings",dataend],
  },

],  // end of measure data

Utilities_Job_Net_Change  :
  {


    url466: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=22",
    arrayformat466: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",22,"Utilities"+",","Job Change",dataend],
  },
  {


    url467: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=22",
    arrayformat467: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",22,"Utilities"+",","Job Change",dataend],
  },
  {


    url468: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=22",
    arrayformat468: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",22,"Utilities"+",","Job Change",dataend],
  },
  {

    url469: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=22",
    arrayformat469: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",22,"Utilities"+",","Job Change",dataend],
  },

],  // end of measure data

Utilities_New_Hires  :
  {


    url470: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=22",
    arrayformat470: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",22,"Utilities"+",","New Hires",dataend],

  },
  {


    url471: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=22",
    arrayformat471: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",22,"Utilities"+",","New Hires",dataend],
  },
  {


    url472: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=22",
    arrayformat472: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",22,"Utilities"+",","New Hires",dataend],
  },
  {

    url473: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=22",
    arrayformat473: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",22,"Utilities"+",","New Hires",dataend],
  },

],  // end of measure data

Utilities_Separations  :
  {


    url474: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=22",
    arrayformat474: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",22,"Utilities"+",","Seperation",dataend],

  },
  {


    url475: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=22",
    arrayformat475: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",22,"Utilities"+",","Seperation",dataend],
  },
  {


    url476: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=22",
    arrayformat476: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",22,"Utilities"+",","Seperation",dataend],
  },
  {

    url477: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=22",
    arrayformat477: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",22,"Utilities"+",","Seperation",dataend],
  },

],  // end of measure data

Utilities_Turnover_Rate  :
  {


    url478: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=22",
    arrayformat478: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",22,"Utilities"+",","Turnover Rate",dataend],

  },
  {


    url479: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=22",
    arrayformat479: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",22,"Utilities"+",","Turnover Rate",dataend],
  },
  {


    url480: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=22",
    arrayformat480: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",22,"Utilities"+",","Turnover Rate",dataend],
  },
  {

    url481: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=22",
    arrayformat481: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",22,"Utilities"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Utilities_Workers  :
  {


    url482: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=22",
    arrayformat482: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",22,"Utilities"+",","Workers",dataend],

  },
  {


    url483: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=22",
    arrayformat483: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",22,"Utilities"+",","Workers",dataend],
  },
  {


    url484: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=22",
    arrayformat484: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",22,"Utilities"+",","Workers",dataend],
  },
  {

    url485: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=22",
    arrayformat485: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",22,"Utilities"+",","Workers",dataend],
  },

],  // end of measure data

Wholesale_Trade_Avg_Monthly_Earnings  :
  {


    url486: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=42",
    arrayformat486: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Industry",42,"Wholesale Trade"+",","Earnings",dataend],
  },
  {


    url487: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=42",
    arrayformat487: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Industry",42,"Wholesale Trade"+",","Earnings",dataend],
  },
  {


    url488: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=42",
    arrayformat488: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Industry",42,"Wholesale Trade"+",","Earnings",dataend],
  },
  {

    url489: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=42",
    arrayformat489: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Industry",42,"Wholesale Trade"+",","Earnings",dataend],
  },

],  // end of measure data

Wholesale_Trade_Job_Net_Change  :
  {


    url490: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=42",
    arrayformat490: ["Maryland",yearAPIfunction+"Q1","Maryland Job Net Change by Industry",42,"Wholesale Trade"+",","Job Change",dataend],
  },
  {


    url491: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=42",
    arrayformat491: ["Maryland",yearAPIfunction+"Q2","Maryland Job Net Change by Industry",42,"Wholesale Trade"+",","Job Change",dataend],
  },
  {


    url492: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=42",
    arrayformat492: ["Maryland",yearAPIfunction+"Q3","Maryland Job Net Change by Industry",42,"Wholesale Trade"+",","Job Change",dataend],
  },
  {

    url493: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=42",
    arrayformat493: ["Maryland",yearAPIfunction+"Q4","Maryland Job Net Change by Industry",42,"Wholesale Trade"+",","Job Change",dataend],
  },

],  // end of measure data

Wholesale_Trade_New_Hires  :
  {


    url494: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=42",
    arrayformat494: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Industry",42,"Wholesale Trade"+",","New Hires",dataend],

  },
  {


    url495: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=42",
    arrayformat495: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Industry",42,"Wholesale Trade"+",","New Hires",dataend],
  },
  {


    url496: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=42",
    arrayformat496: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Industry",42,"Wholesale Trade"+",","New Hires",dataend],
  },
  {

    url497: "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=42",
    arrayformat497: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Industry",42,"Wholesale Trade"+",","New Hires",dataend],
  },

],  // end of measure data

Wholesale_Trade_Separations  :
  {


    url498: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=42",
    arrayformat498: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Industry",42,"Wholesale Trade"+",","Seperation",dataend],

  },
  {


    url499: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=42",
    arrayformat499: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Industry",42,"Wholesale Trade"+",","Seperation",dataend],
  },
  {


    url500: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=42",
    arrayformat500: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Industry",42,"Wholesale Trade"+",","Seperation",dataend],
  },
  {

    url501: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=42",
    arrayformat501: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Industry",42,"Wholesale Trade"+",","Seperation",dataend],
  },

],  // end of measure data

Wholesale_Trade_Turnover_Rate  :
  {


    url502: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=42",
    arrayformat502: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Industry",42,"Wholesale Trade"+",","Turnover Rate",dataend],

  },
  {


    url503: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=42",
    arrayformat503: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Industry",42,"Wholesale Trade"+",","Turnover Rate",dataend],
  },
  {


    url504: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=42",
    arrayformat504: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Industry",42,"Wholesale Trade"+",","Turnover Rate",dataend],
  },
  {

    url505: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=42",
    arrayformat505: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Industry",42,"Wholesale Trade"+",","Turnover Rate",dataend],
  },

],  // end of measure data

Wholesale_Trade_Workers  :
  {


    url506: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&industry=42",
    arrayformat506: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Industry",42,"Wholesale Trade"+",","Workers",dataend],

  },
  {


    url507: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&industry=42",
    arrayformat507: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Industry",42,"Wholesale Trade"+",","Workers",dataend],
  },
  {


    url508: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&industry=42",
    arrayformat508: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Industry",42,"Wholesale Trade"+",","Workers",dataend],
  },
  {

    url509: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&industry=42",
    arrayformat509: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Industry",42,"Wholesale Trade"+",","Workers",dataend],
  },

],  // end of measure data

Age_14_18_Monthly_Earnings  :
  {


    url510: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A01",
    arrayformat510: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Age","A01","14-18"+",","Earnings",dataend],

  },
  {


    url511: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A01",
    arrayformat511: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Age","A01","14-18"+",","Earnings",dataend],
  },
  {


    url512: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A01",
    arrayformat512: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Age","A01","14-18"+",","Earnings",dataend],
  },
  {

    url513: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A01",
    arrayformat513: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Age","A01","14-18"+",","Earnings",dataend],
  },

],  // end of measure data

Age_19_21_Monthly_Earnings  :
  {


    url514: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A02",
    arrayformat514: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Age","A02","19-21"+",","Earnings",dataend],

  },
  {


    url515: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A02",
    arrayformat515: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Age","A02","19-21"+",","Earnings",dataend],
  },
  {


    url516: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A02",
    arrayformat516: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Age","A02","19-21"+",","Earnings",dataend],
  },
  {

    url517: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A02",
    arrayformat517: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Age","A02","19-21"+",","Earnings",dataend],
  },

],  // end of measure data

Age_22_24_Monthly_Earnings  :
  {


    url518: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A03",
    arrayformat518: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Age","A03","22-24"+",","Earnings",dataend],

  },
  {


    url519: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A03",
    arrayformat519: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Age","A03","22-24"+",","Earnings",dataend],
  },
  {


    url520: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A03",
    arrayformat520: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Age","A03","22-24"+",","Earnings",dataend],
  },
  {

    url521: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A03",
    arrayformat521: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Age","A03","22-24"+",","Earnings",dataend],
  },

],  // end of measure data

Age_25_34_Monthly_Earnings  :
  {


    url522: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A04",
    arrayformat522: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Age","A04","25-34"+",","Earnings",dataend],

  },
  {


    url523: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A04",
    arrayformat523: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Age","A04","25-34"+",","Earnings",dataend],
  },
  {


    url524: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A04",
    arrayformat524: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Age","A04","25-34"+",","Earnings",dataend],
  },
  {

    url525: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A04",
    arrayformat525: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Age","A04","25-34"+",","Earnings",dataend],
  },

],  // end of measure data

Age_35_44_Monthly_Earnings  :
  {


    url526: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A05",
    arrayformat526: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Age","A05","35-44"+",","Earnings",dataend],

  },
  {


    url527: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A05",
    arrayformat527: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Age","A05","35-44"+",","Earnings",dataend],
  },
  {


    url528: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A05",
    arrayformat528: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Age","A05","35-44"+",","Earnings",dataend],
  },
  {

    url529: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A05",
    arrayformat529: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Age","A05","35-44"+",","Earnings",dataend],
  },

],  // end of measure data

Age_45_54_Monthly_Earnings  :
  {


    url530: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A06",
    arrayformat530: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Age","A06","45-54"+",","Earnings",dataend],

  },
  {


    url531: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A06",
    arrayformat531: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Age","A06","45-54"+",","Earnings",dataend],
  },
  {


    url532: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A06",
    arrayformat532: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Age","A06","45-54"+",","Earnings",dataend],
  },
  {

    url533: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A06",
    arrayformat533: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Age","A06","45-54"+",","Earnings",dataend],
  },

],  // end of measure data

Age_65_99_Monthly_Earnings  :
  {


    url534: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A07",
    arrayformat534: ["Maryland",yearAPIfunction+"Q1","Maryland Average Earnings by Age","A07","65-99"+",","Earnings",dataend],

  },
  {


    url535: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A07",
    arrayformat535: ["Maryland",yearAPIfunction+"Q2","Maryland Average Earnings by Age","A07","65-99"+",","Earnings",dataend],
  },
  {


    url536: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A07",
    arrayformat536: ["Maryland",yearAPIfunction+"Q3","Maryland Average Earnings by Age","A07","65-99"+",","Earnings",dataend],
  },
  {

    url537: "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A07",
    arrayformat537: ["Maryland",yearAPIfunction+"Q4","Maryland Average Earnings by Age","A07","65-99"+",","Earnings",dataend],
  },

],  // end of measure data

Age_14_18_Workers  :
  {


    url538: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A01",
    arrayformat538: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Age","A01","14-18"+",","Workers",dataend],

  },
  {


    url539: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A01",
    arrayformat539: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Age","A01","14-18"+",","Workers",dataend],
  },
  {


    url540: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A01",
    arrayformat540: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Age","A01","14-18"+",","Workers",dataend],
  },
  {

    url541: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A01",
    arrayformat541: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Age","A01","14-18"+",","Workers",dataend],
  },

],  // end of measure data

Age_19_21_Workers  :
  {


    url542: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A02",
    arrayformat542: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Age","A02","19-21"+",","Workers",dataend],

  },
  {


    url543: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A02",
    arrayformat543: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Age","A02","19-21"+",","Workers",dataend],
  },
  {


    url544: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A02",
    arrayformat544: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Age","A02","19-21"+",","Workers",dataend],
  },
  {

    url545: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A02",
    arrayformat545: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Age","A02","19-21"+",","Workers",dataend],
  },

],  // end of measure data

Age_22_24_Workers  :
  {


    url546: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A03",
    arrayformat546: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Age","A03","22-24"+",","Workers",dataend],

  },
  {


    url547: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A03",
    arrayformat547: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Age","A03","22-24"+",","Workers",dataend],
  },
  {


    url548: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A03",
    arrayformat548: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Age","A03","22-24"+",","Workers",dataend],
  },
  {

    url549: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A03",
    arrayformat549: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Age","A03","22-24"+",","Workers",dataend],
  },

],  // end of measure data

Age_25_34_Workers  :
  {


    url550: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A04",
    arrayformat550: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Age","A04","25-34"+",","Workers",dataend],

  },
  {


    url551: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A04",
    arrayformat551: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Age","A04","25-34"+",","Workers",dataend],
  },
  {


    url552: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A04",
    arrayformat552: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Age","A04","25-34"+",","Workers",dataend],
  },
  {

    url553: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A04",
    arrayformat553: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Age","A04","25-34"+",","Workers",dataend],
  },

],  // end of measure data

Age_35_44_Workers  :
  {


    url554: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A05",
    arrayformat554: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Age","A05","35-44"+",","Workers",dataend],

  },
  {


    url555: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A05",
    arrayformat555: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Age","A05","35-44"+",","Workers",dataend],
  },
  {


    url556: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A05",
    arrayformat556: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Age","A05","35-44"+",","Workers",dataend],
  },
  {

    url557: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A05",
    arrayformat557: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Age","A05","35-44"+",","Workers",dataend],
  },

],  // end of measure data

Age_45_54_Workers  :
  {


    url558: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A06",
    arrayformat558: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Age","A06","45-54"+",","Workers",dataend],

  },
  {


    url559: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A06",
    arrayformat559: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Age","A06","45-54"+",","Workers",dataend],
  },
  {


    url560: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A06",
    arrayformat560: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Age","A06","45-54"+",","Workers",dataend],
  },
  {

    url561: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A06",
    arrayformat561: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Age","A06","45-54"+",","Workers",dataend],
  },

],  // end of measure data

Age_65_99_Workers  :
  {


    url562: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A07",
    arrayformat562: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Age","A07","65-99"+",","Workers",dataend],

  },
  {


    url563: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A07",
    arrayformat563: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Age","A07","65-99"+",","Workers",dataend],
  },
  {


    url564: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A07",
    arrayformat564: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Age","A07","65-99"+",","Workers",dataend],
  },
  {

    url565: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A07",
    arrayformat565: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Age","A07","65-99"+",","Workers",dataend],
  },

],  // end of measure data

Age_14_18_Separations  :
  {


    url566: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A01",
    arrayformat566: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Age","A01","14-18"+",","Seperation",dataend],

  },
  {


    url567: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A01",
    arrayformat567: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Age","A01","14-18"+",","Seperation",dataend],
  },
  {


    url568: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A01",
    arrayformat568: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Age","A01","14-18"+",","Seperation",dataend],
  },
  {

    url569: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A01",
    arrayformat569: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Age","A01","14-18"+",","Seperation",dataend],
  },

],  // end of measure data

Age_19_21_Separations  :
  {


    url570: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A02",
    arrayformat570: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Age","A02","19-21"+",","Seperation",dataend],

  },
  {


    url571: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A02",
    arrayformat571: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Age","A02","19-21"+",","Seperation",dataend],
  },
  {


    url572: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A02",
    arrayformat572: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Age","A02","19-21"+",","Seperation",dataend],
  },
  {

    url573: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A02",
    arrayformat573: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Age","A02","19-21"+",","Seperation",dataend],
  },

],  // end of measure data

Age_22_24_Separations  :
  {


    url574: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A03",
    arrayformat574: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Age","A03","22-24"+",","Seperation",dataend],

  },
  {


    url575: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A03",
    arrayformat575: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Age","A03","22-24"+",","Seperation",dataend],
  },
  {


    url576: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A03",
    arrayformat576: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Age","A03","22-24"+",","Seperation",dataend],
  },
  {

    url577: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A03",
    arrayformat577: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Age","A03","22-24"+",","Seperation",dataend],
  },

],  // end of measure data

Age_25_34_Separations  :
  {


    url578: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A04",
    arrayformat578: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Age","A04","25-34"+",","Seperation",dataend],

  },
  {


    url579: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A04",
    arrayformat579: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Age","A04","25-34"+",","Seperation",dataend],
  },
  {


    url580: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A04",
    arrayformat580: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Age","A04","25-34"+",","Seperation",dataend],
  },
  {

    url581: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A04",
    arrayformat581: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Age","A04","25-34"+",","Seperation",dataend],
  },

],  // end of measure data

Age_35_44_Separations  :
  {


    url582: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A05",
    arrayformat582: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Age","A05","35-44"+",","Seperation",dataend],

  },
  {


    url583: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A05",
    arrayformat583: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Age","A05","35-44"+",","Seperation",dataend],
  },
  {


    url584: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A05",
    arrayformat584: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Age","A05","35-44"+",","Seperation",dataend],
  },
  {

    url585: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A05",
    arrayformat585: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Age","A05","35-44"+",","Seperation",dataend],
  },

],  // end of measure data

Age_45_54_Separations  :
  {


    url586: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A06",
    arrayformat586: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Age","A06","45-54"+",","Seperation",dataend],

  },
  {


    url587: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A06",
    arrayformat587: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Age","A06","45-54"+",","Seperation",dataend],
  },
  {


    url588: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A06",
    arrayformat588: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Age","A06","45-54"+",","Seperation",dataend],
  },
  {

    url589: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A06",
    arrayformat589: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Age","A06","45-54"+",","Seperation",dataend],
  },

],  // end of measure data

Age_65_99_Separations  :
  {


    url590: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&agegrp=A07",
    arrayformat590: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Age","A07","65-99"+",","Seperation",dataend],

  },
  {


    url591: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&agegrp=A07",
    arrayformat591: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Age","A07","65-99"+",","Seperation",dataend],
  },
  {


    url592: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&agegrp=A07",
    arrayformat592: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Age","A07","65-99"+",","Seperation",dataend],
  },
  {

    url593: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&agegrp=A07",
    arrayformat593: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Age","A07","65-99"+",","Seperation",dataend],
  },

],  // end of measure data

Monthly_Earnings_Male  :
  {


    url594: "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&sex=1",
    arrayformat594: ["Maryland",yearAPIfunction+"Q1","Maryland Average Monthly Earnings by Gender","1","Male"+",","Earnings",dataend],

  },
  {


    url595: "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&sex=1",
    arrayformat595: ["Maryland",yearAPIfunction+"Q2","Maryland Average Monthly Earnings by Gender","1","Male"+",","Earnings",dataend],
  },
  {


    url596: "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&sex=1",
    arrayformat596: ["Maryland",yearAPIfunction+"Q3","Maryland Average Monthly Earnings by Gender","1","Male"+",","Earnings",dataend],
  },
  {

    url597: "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&sex=1",
    arrayformat597: ["Maryland",yearAPIfunction+"Q4","Maryland Average Monthly Earnings by Gender","1","Male"+",","Earnings",dataend],
  },
],  // end of measure data

Monthly_Earnings_Female  :
  {


    url598: "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&sex=2",
    arrayformat598: ["Maryland",yearAPIfunction+"Q1","Maryland Average Monthly Earnings by Gender","2","Female"+",","Earnings",dataend],

  },
  {


    url599: "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&sex=2",
    arrayformat599: ["Maryland",yearAPIfunction+"Q2","Maryland Average Monthly Earnings by Gender","2","Female"+",","Earnings",dataend],
  },
  {


    url600: "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&sex=2",
    arrayformat600: ["Maryland",yearAPIfunction+"Q3","Maryland Average Monthly Earnings by Gender","2","Female"+",","Earnings",dataend],
  },
  {

    url601: "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&sex=2",
    arrayformat601: ["Maryland",yearAPIfunction+"Q4","Maryland Average Monthly Earnings by Gender","2","Female"+",","Earnings",dataend],
  },
],  // end of measure data

Workers__Male  :
  {


    url602: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&sex=1",
    arrayformat602: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Gender","1","Male"+",","Workers",dataend],

  },
  {


    url603: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&sex=1",
    arrayformat603: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Gender","1","Male"+",","Workers",dataend],
  },
  {


    url604: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&sex=1",
    arrayformat604: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Gender","1","Male"+",","Workers",dataend],
  },
  {

    url605: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&sex=1",
    arrayformat605: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Gender","1","Male"+",","Workers",dataend],
  },
],  // end of measure data

Workers__Female  :
  {


    url606: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&sex=2",
    arrayformat606: ["Maryland",yearAPIfunction+"Q1","Maryland Workers by Gender","2","Female"+",","Workers",dataend],


  },
  {


    url607: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&sex=2",
    arrayformat607: ["Maryland",yearAPIfunction+"Q2","Maryland Workers by Gender","2","Female"+",","Workers",dataend],
  },
  {


    url608: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&sex=2",
    arrayformat608: ["Maryland",yearAPIfunction+"Q3","Maryland Workers by Gender","2","Female"+",","Workers",dataend],
  },
  {

    url609: "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&sex=2",
    arrayformat609: ["Maryland",yearAPIfunction+"Q4","Maryland Workers by Gender","2","Female"+",","Workers",dataend],
  },
],  // end of measure data

Separations__Male  :
  {


    url610: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&sex=1",
    arrayformat610: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Gender","1","Male"+",","Seperation",dataend],

  },
  {


    url611: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&sex=1",
    arrayformat611: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Gender","1","Male"+",","Seperation",dataend],
  },
  {


    url612: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&sex=1",
    arrayformat612: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Gender","1","Male"+",","Seperation",dataend],
  },
  {

    url613: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&sex=1",
    arrayformat613: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Gender","1","Male"+",","Seperation",dataend],
  },
],  // end of measure data

Separations__Female  :
  {


    url614: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&sex=2",
    arrayformat614: ["Maryland",yearAPIfunction+"Q1","Maryland Separations by Gender","2","Female"+",","Seperation",dataend],

  },
  {


    url615: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&sex=2",
    arrayformat615: ["Maryland",yearAPIfunction+"Q2","Maryland Separations by Gender","2","Female"+",","Seperation",dataend],
  },
  {


    url616: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&sex=2",
    arrayformat616: ["Maryland",yearAPIfunction+"Q3","Maryland Separations by Gender","2","Female"+",","Seperation",dataend],
  },
  {

    url617: "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&sex=2",
    arrayformat617: ["Maryland",yearAPIfunction+"Q4","Maryland Separations by Gender","2","Female"+",","Seperation",dataend],
  },
],  // end of measure data

Job_Net_Change  :
  {


    url618: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&education=E1",
    arrayformat618: ["Maryland",yearAPIfunction+"Q1","Maryland Net Change by Education","E1","Less than High School"+",","Job Change",dataend],

  },
  {


    url619: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&education=E1",
    arrayformat619: ["Maryland",yearAPIfunction+"Q2","Maryland Net Change by Education","E1","Less than High School"+",","Job Change",dataend],
  },
  {


    url620: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&education=E1",
    arrayformat620: ["Maryland",yearAPIfunction+"Q3","Maryland Net Change by Education","E1","Less than High School"+",","Job Change",dataend],
  },
  {

    url621: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&education=E1",
    arrayformat621: ["Maryland",yearAPIfunction+"Q4","Maryland Net Change by Education","E1","Less than High School"+",","Job Change",dataend],
  },
],  // end of measure data

Job_Net_Change  :
  {


    url622: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&education=E2",
    arrayformat622: ["Maryland",yearAPIfunction+"Q1","Maryland Net Change by Education","E2","High school or equivalent, no college"+",","Job Change",dataend],


  },
  {


    url623: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&education=E2",
    arrayformat623: ["Maryland",yearAPIfunction+"Q2","Maryland Net Change by Education","E2","High school or equivalent, no college"+",","Job Change",dataend],
  },
  {


    url624: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&education=E2",
    arrayformat624: ["Maryland",yearAPIfunction+"Q3","Maryland Net Change by Education","E2","High school or equivalent, no college"+",","Job Change",dataend],
  },
  {

    url625: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&education=E2",
    arrayformat625: ["Maryland",yearAPIfunction+"Q4","Maryland Net Change by Education","E2","High school or equivalent, no college"+",","Job Change",dataend],
  },
],  // end of measure data

Some_Colege_Job_Net_Change  :
  {


    url626: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&education=E3",
    arrayformat626: ["Maryland",yearAPIfunction+"Q1","Maryland Net Change by Education","E3","Some college or Associate degree"+",","Job Change",dataend],

  },
  {


    url627: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&education=E3",
    arrayformat627: ["Maryland",yearAPIfunction+"Q2","Maryland Net Change by Education","E3","Some college or Associate degree"+",","Job Change",dataend],
  },
  {


    url628: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&education=E3",
    arrayformat628: ["Maryland",yearAPIfunction+"Q3","Maryland Net Change by Education","E3","Some college or Associate degree"+",","Job Change",dataend],
  },
  {

    url629: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&education=E3",
    arrayformat629: ["Maryland",yearAPIfunction+"Q4","Maryland Net Change by Education","E3","Some college or Associate degree"+",","Job Change",dataend],
  },
],  // end of measure data

Job_Net_Change  :
  {


    url630: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&education=E4",
    arrayformat630: ["Maryland",yearAPIfunction+"Q1","Maryland Net Change by Education","E4","Bachelor's degree or advanced degree"+",","Job Change",dataend],

  },
  {


    url631: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&education=E4",
    arrayformat631: ["Maryland",yearAPIfunction+"Q2","Maryland Net Change by Education","E4","Bachelor's degree or advanced degree"+",","Job Change",dataend],
  },
  {


    url632: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&education=E4",
    arrayformat632: ["Maryland",yearAPIfunction+"Q3","Maryland Net Change by Education","E4","Bachelor's degree or advanced degree"+",","Job Change",dataend],
  },
  {

    url633: "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&education=E4",
    arrayformat633: ["Maryland",yearAPIfunction+"Q4","Maryland Net Change by Education","E4","Bachelor's degree or advanced degree"+",","Job Change",dataend],
  },
],  // end of measure data

New_Hires  :
  {


    url634: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q1"+"&education=E1",
    arrayformat634: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Education","E1","Less than High School"+",","New Hires",dataend],

  },
  {


    url635: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q2"+"&education=E1",
    arrayformat635: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Education","E1","Less than High School"+",","New Hires",dataend],
  },
  {


    url636: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q3"+"&education=E1",
    arrayformat636: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Education","E1","Less than High School"+",","New Hires",dataend],
  },
  {

    url637: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q4"+"&education=E1",
    arrayformat637: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Education","E1","Less than High School"+",","New Hires",dataend],
  },
],  // end of measure data

New_Hires  :
  {


    url638: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q1"+"&education=E2",
    arrayformat638: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Education","E2","High school or equivalent, no college"+",","New Hires",dataend],


  },
  {


    url639: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q2"+"&education=E2",
    arrayformat639: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Education","E2","High school or equivalent, no college"+",","New Hires",dataend],
  },
  {


    url640: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q3"+"&education=E2",
    arrayformat640: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Education","E2","High school or equivalent, no college"+",","New Hires",dataend],
  },
  {

    url641: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q4"+"&education=E2",
    arrayformat641: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Education","E2","High school or equivalent, no college"+",","New Hires",dataend],
  },
],  // end of measure data

Some_Colege_New_Hires  :
  {


    url642: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q1"+"&education=E3",
    arrayformat642: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Education","E3","Some college or Associate degree"+",","New Hires",dataend],

  },
  {


    url643: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q2"+"&education=E3",
    arrayformat643: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Education","E3","Some college or Associate degree"+",","New Hires",dataend],
  },
  {


    url644: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q3"+"&education=E3",
    arrayformat644: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Education","E3","Some college or Associate degree"+",","New Hires",dataend],
  },
  {

    url645: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q4"+"&education=E3",
    arrayformat645: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Education","E3","Some college or Associate degree"+",","New Hires",dataend],
  },
],  // end of measure data

New_Hires  :
  {


    url646: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q1"+"&education=E4",
    arrayformat646: ["Maryland",yearAPIfunction+"Q1","Maryland New Hires by Education","E4","Bachelor's degree or advanced degree"+",","New Hires",dataend],

  },
  {


    url647: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q2"+"&education=E4",
    arrayformat647: ["Maryland",yearAPIfunction+"Q2","Maryland New Hires by Education","E4","Bachelor's degree or advanced degree"+",","New Hires",dataend],
  },
  {


    url648: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q3"+"&education=E4",
    arrayformat648: ["Maryland",yearAPIfunction+"Q3","Maryland New Hires by Education","E4","Bachelor's degree or advanced degree"+",","New Hires",dataend],
  },
  {

    url649: "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time="+yearAPIfunction+"-"+"Q4"+"&education=E4",
    arrayformat649: ["Maryland",yearAPIfunction+"Q4","Maryland New Hires by Education","E4","Bachelor's degree or advanced degree"+",","New Hires",dataend],
  },
],  // end of measure data

Turnover  :
  {


    url650: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q1"+"&education=E1",
    arrayformat650: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Education","E1","Less than High School"+",","Turnover",dataend],

  },
  {


    url651: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q2"+"&education=E1",
    arrayformat651: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Education","E1","Less than High School"+",","Turnover",dataend],
  },
  {


    url652: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q3"+"&education=E1",
    arrayformat652: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Education","E1","Less than High School"+",","Turnover",dataend],
  },
  {

    url653: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q4"+"&education=E1",
    arrayformat653: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Education","E1","Less than High School"+",","Turnover",dataend],
  },
],  // end of measure data

Turnover  :
  {


    url654: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q1"+"&education=E2",
    arrayformat654: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Education","E2","High school or equivalent, no college"+",","Turnover",dataend],


  },
  {


    url655: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q2"+"&education=E2",
    arrayformat655: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Education","E2","High school or equivalent, no college"+",","Turnover",dataend],
  },
  {


    url656: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q3"+"&education=E2",
    arrayformat656: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Education","E2","High school or equivalent, no college"+",","Turnover",dataend],
  },
  {

    url657: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q4"+"&education=E2",
    arrayformat657: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Education","E2","High school or equivalent, no college"+",","Turnover",dataend],
  },
],  // end of measure data

Some_Colege_Turnover  :
  {


    url658: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q1"+"&education=E3",
    arrayformat658: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Education","E3","Some college or Associate degree"+",","Turnover",dataend],

  },
  {


    url659: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q2"+"&education=E3",
    arrayformat659: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Education","E3","Some college or Associate degree"+",","Turnover",dataend],
  },
  {


    url660: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q3"+"&education=E3",
    arrayformat660: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Education","E3","Some college or Associate degree"+",","Turnover",dataend],
  },
  {

    url661: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q4"+"&education=E3",
    arrayformat661: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Education","E3","Some college or Associate degree"+",","Turnover",dataend],
  },
],  // end of measure data

Turnover  :
  {


    url662: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q1"+"&education=E4",
    arrayformat662: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Education","E4","Bachelor's degree or advanced degree"+",","Turnover",dataend],

  },
  {


    url663: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q2"+"&education=E4",
    arrayformat663: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Education","E4","Bachelor's degree or advanced degree"+",","Turnover",dataend],
  },
  {


    url664: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q3"+"&education=E4",
    arrayformat664: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Education","E4","Bachelor's degree or advanced degree"+",","Turnover",dataend],
  },
  {

    url665: "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time="+yearAPIfunction+"-"+"Q4"+"&education=E4",
    arrayformat665: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Education","E4","Bachelor's degree or advanced degree"+",","Turnover",dataend],
  },
],  // end of measure data

Job_Net_Change_Male  :
  {


    url666: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&sex=1",
    arrayformat666: ["Maryland",yearAPIfunction+"Q1","Maryland Net Change by Gender","1","Male"+",","Job Change",dataend],

  },
  {


    url667: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&sex=1",
    arrayformat667: ["Maryland",yearAPIfunction+"Q2","Maryland Net Change by Gender","1","Male"+",","Job Change",dataend],
  },
  {


    url668: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&sex=1",
    arrayformat668: ["Maryland",yearAPIfunction+"Q3","Maryland Net Change by Gender","1","Male"+",","Job Change",dataend],
  },
  {

    url669: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&sex=1",
    arrayformat669: ["Maryland",yearAPIfunction+"Q4","Maryland Net Change by Gender","1","Male"+",","Job Change",dataend],
  },
],  // end of measure data

Job_Net_Change_Female  :
  {


    url670: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&sex=2",
    arrayformat670: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Gender","2","Female"+",","Job Change",dataend],

  },
  {


    url671: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&sex=2",
    arrayformat671: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Gender","2","Female"+",","Job Change",dataend],
  },
  {


    url672: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&sex=2",
    arrayformat672: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Gender","2","Female"+",","Job Change",dataend],
  },
  {

    url673: "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&sex=2",
    arrayformat673: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Gender","2","Female"+",","Job Change",dataend],
  },
],  // end of measure data

Turnover_Male  :
  {


    url674: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&sex=1",
    arrayformat674: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Gender","1","Male"+",","Turnover",dataend],

  },
  {


    url675: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&sex=1",
    arrayformat675: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Gender","1","Male"+",","Turnover",dataend],
  },
  {


    url676: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&sex=1",
    arrayformat676: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Gender","1","Male"+",","Turnover",dataend],
  },
  {

    url677: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&sex=1",
    arrayformat677: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Gender","1","Male"+",","Turnover",dataend],
  },
],  // end of measure data

Turnover_Female  :
  {


    url678: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q1"+"&sex=2",
    arrayformat678: ["Maryland",yearAPIfunction+"Q1","Maryland Turnover Rate by Gender","2","Female"+",","Turnover",dataend],

  },
  {


    url679: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q2"+"&sex=2",
    arrayformat679: ["Maryland",yearAPIfunction+"Q2","Maryland Turnover Rate by Gender","2","Female"+",","Turnover",dataend],
  },
  {


    url680: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q3"+"&sex=2",
    arrayformat680: ["Maryland",yearAPIfunction+"Q3","Maryland Turnover Rate by Gender","2","Female"+",","Turnover",dataend],
  },
  {

    url681: "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time="+yearAPIfunction+"-"+"Q4"+"&sex=2",
    arrayformat681: ["Maryland",yearAPIfunction+"Q4","Maryland Turnover Rate by Gender","2","Female"+",","Turnover",dataend],
  },
],  // end of measure data

_set:
  {

    url682: "https://api.census.gov/data/2019/acs/acs5?get=NAME,C18120_005E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
    arrayformat682: ["Maryland","2019","Employment Status By Disability Status","Non "+",","Employed"+",",dataend],
  },
],  // end of measure data

_set  :
  {

    url683: "https://api.census.gov/data/2019/acs/acs5?get=NAME,C18120_005E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
    arrayformat683: ["Maryland","2019","Employment Status By Disability Status","Non "+",","Labor Force"+",",dataWDisem2019+dataWDisem2019],
  },
],  // end of measure data


 }};// end of the object for the library

 for i=1,i<684;{
console.log()
 }
