var yearAPIfunction = 2015;
var dataend = 2;
var dataWDisem2019 = 6;
var dataWDisem2019 = 7;
var dataDisem2019 = 7;

var endpoint = {
  // beginning of the object for the library
  Maryland: {
    // beginning of the object for the county API data
    set1: {
      url1:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat1: [
        "Maryland",
        yearAPIfunction,
        "Median Household Income",
        ",,,",
        dataend,
      ],
    },
    set2: {
      url2:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5/profile?get=NAME,DP05_0001E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat2: [
        "Maryland",
        yearAPIfunction,
        "Total Population",
        ",,,",
        dataend,
      ],
    },

    set3: {
      url3:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5/subject?get=NAME,S2301_C04_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat3: [
        "Maryland",
        yearAPIfunction,
        "Unemployment By Gender",
        "1" + ",,,",
        dataend,
        dataend / 100,
      ],
    },

    set4: {
      url4:
        "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat4: [
        "Maryland",
        "2019",
        "Unemployment By Gender",
        "2" + ",,,",
        dataend,
        dataend / 100,
      ],
    },

    set5: {
      url5:
        "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat5: [
        "Maryland",
        "2019",
        "Employment Status By Disability Status",
        "Non " + ",",
        "Unemployed" + ",",
        dataend,
      ],
    },

    set6: {
      url6:
        "https://api.census.gov/data/2019/acs/acs5?get=NAME,C18120_005E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat6: [
        "Maryland",
        "2019",
        "Employment Status By Disability Status",
        "" + ",",
        "Labor Force" + ",",
        dataDisem2019 + dataDisem2019,
      ],
    },

    set7: {
      url7:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,C18120_004M&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat7: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Disability Status",
        "" + ",",
        "Employed" + ",",
        dataend,
      ],
    },

    set8: {
      url8:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,C18120_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat8: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Disability Status",
        "" + ",",
        "Employed" + ",",
        dataend,
      ],
    },

    set9: {
      url9:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,B23006_027E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat9: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Education,Bachelor's or Higher" + ",",
        "Employed" + ",",
        dataend,
      ],
    },

    set10: {
      url10:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,B23006_028E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat10: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Education,Bachelor's or Higher" + ",",
        "Unemployed" + ",",
        dataend,
      ],
    },

    set11: {
      url11:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,B23006_029E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat11: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Education,Bachelor's or Higher" + ",",
        "NIL" + ",",
        dataend,
      ],
    },

    set12: {
      url12:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,B23006_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat12: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Education",
        "Highschool" + ",",
        "Employed" + ",",
        dataend,
      ],
    },

    set13: {
      url13:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,B23006_014E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat13: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Education",
        "Highschool" + ",",
        "Unemployed" + ",",
        dataend,
      ],
    },

    set14: {
      url14:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,B23006_015E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat14: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Education",
        "Highschool" + ",",
        "NIL" + ",",
        dataend,
      ],
    },

    set15: {
      url15:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,S1701_C02_028E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat15: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Poverty Status",
        "Below Poverty" + ",",
        "Employed" + ",",
        dataend,
      ],
    },

    set16: {
      url16:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,S1701_C02_027E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat16: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Poverty Status",
        "Below Poverty" + ",",
        "Unemployed" + ",",
        dataend,
      ],
    },

    set17: {
      url17:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,S1701_C02_031E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat17: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Poverty Status",
        "Below Poverty" + ",",
        "Labor Force" + ",",
        dataend,
      ],
    },

    set18: {
      url18:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,B23006_006E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat18: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Education",
        "Less than Highschool" + ",",
        "Employed" + ",",
        dataend,
      ],
    },

    set19: {
      url19:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,B23006_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat19: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Education",
        "Less than Highschool" + ",",
        "Unemployed" + ",",
        dataend,
      ],
    },

    set20: {
      url20:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,B23006_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat20: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Education",
        "Less than Highschool" + ",",
        "NIL" + ",",
        dataend,
      ],
    },

    set21: {
      url21:
        "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat21: [
        "Maryland",
        yearAPIfunction,
        "Unemployment By Veteran Status",
        "Non Veteran" + ",,,",
        dataend,
        dataend / 100,
      ],
    },

    set22: {
      url22:
        "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat22: [
        "Maryland",
        yearAPIfunction,
        "Unemployment By Veteran Status",
        "Veteran" + ",,,",
        dataend,
        dataend / 100,
      ],
    },

    set23: {
      url23:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,B23006_020E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat23: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Education",
        "Status By Education,Some College" + ",",
        "Employed" + ",",
        dataend,
      ],
    },

    set24: {
      url24:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,B23006_021E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat24: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Education",
        "Status By Education,Some College" + ",",
        "Unemployed" + ",",
        dataend,
      ],
    },

    set25: {
      url25:
        "https://api.census.gov/data/" +
        yearAPIfunction +
        "/acs/acs5?get=NAME,B23006_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat25: [
        "Maryland",
        yearAPIfunction,
        "Employment Status By Education",
        "Status By Education,Some College" + ",",
        "NIL" + ",",
        dataend,
      ],
    },

    set26: {
      url26:
        "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat26: [
        "Maryland",
        yearAPIfunction,
        "Unemployment By Race",
        "Asian" + ",,,",
        dataend,
        dataend / 100,
      ],
    },

    set27: {
      url27:
        "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat27: [
        "Maryland",
        yearAPIfunction,
        "Unemployment By Race",
        "White" + ",,,",
        dataend,
        dataend / 100,
      ],
    },

    set28: {
      url28:
        "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat28: [
        "Maryland",
        yearAPIfunction,
        "Unemployment By Race",
        "Black" + ",,,",
        dataend,
        dataend / 100,
      ],
    },

    set29: {
      url29:
        "https://api.census.gov/data/2019/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat29: [
        "Maryland",
        yearAPIfunction,
        "Unemployment By Race",
        "Hispanic or Latino (Any Race)" + ",,,",
        dataend,
        dataend / 100,
      ],
    },

    //QWI data

    set30: {
      url30:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=72",
      arrayformat30: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Earnings",
        dataend,
      ],
    },
    set31: {
      url31:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=72",
      arrayformat31: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Earnings",
        dataend,
      ],
    },
    set32: {
      url32:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=72",
      arrayformat32: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Earnings",
        dataend,
      ],
    },
    set33: {
      url33:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=72",
      arrayformat33: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Earnings",
        dataend,
      ],
    },

    set34: {
      url34:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=72",
      arrayformat34: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Job Change",
        dataend,
      ],
    },
    set35: {
      url35:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=72",
      arrayformat35: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Job Change",
        dataend,
      ],
    },
    set36: {
      url36:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=72",
      arrayformat36: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Job Change",
        dataend,
      ],
    },
    set37: {
      url37:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=72",
      arrayformat37: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Job Change",
        dataend,
      ],
    },

    set38: {
      url38:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=72",
      arrayformat38: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "New Hires",
        dataend,
      ],
    },
    set39: {
      url39:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=72",
      arrayformat39: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "New Hires",
        dataend,
      ],
    },
    set40: {
      url40:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=72",
      arrayformat40: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "New Hires",
        dataend,
      ],
    },
    set41: {
      url41:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=72",
      arrayformat41: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "New Hires",
        dataend,
      ],
    },

    set42: {
      url42:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=72",
      arrayformat42: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Seperation",
        dataend,
      ],
    },
    set43: {
      url43:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=72",
      arrayformat43: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Seperation",
        dataend,
      ],
    },
    set44: {
      url44:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=72",
      arrayformat44: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Seperation",
        dataend,
      ],
    },
    set45: {
      url45:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=72",
      arrayformat45: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Seperation",
        dataend,
      ],
    },

    set46: {
      url46:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=72",
      arrayformat46: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set47: {
      url47:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=72",
      arrayformat47: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set48: {
      url48:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=72",
      arrayformat48: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set49: {
      url49:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=72",
      arrayformat49: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set50: {
      url50:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=72",
      arrayformat50: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Workers",
        dataend,
      ],
    },
    set51: {
      url51:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=72",
      arrayformat51: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Workers",
        dataend,
      ],
    },
    set52: {
      url52:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=72",
      arrayformat52: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Workers",
        dataend,
      ],
    },
    set53: {
      url53:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=72",
      arrayformat53: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        72,
        "Accommodation and Food Services" + ",",
        "Workers",
        dataend,
      ],
    },

    set54: {
      url54:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=62",
      arrayformat54: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Earnings",
        dataend,
      ],
    },
    set55: {
      url55:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=62",
      arrayformat55: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Earnings",
        dataend,
      ],
    },
    set56: {
      url56:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=62",
      arrayformat56: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Earnings",
        dataend,
      ],
    },
    set57: {
      url57:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=62",
      arrayformat57: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Earnings",
        dataend,
      ],
    },

    set58: {
      url58:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=62",
      arrayformat58: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Job Change",
        dataend,
      ],
    },
    set59: {
      url59:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=62",
      arrayformat59: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Job Change",
        dataend,
      ],
    },
    set60: {
      url60:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=62",
      arrayformat60: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Job Change",
        dataend,
      ],
    },
    set61: {
      url61:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=62",
      arrayformat61: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Job Change",
        dataend,
      ],
    },

    set62: {
      url62:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=62",
      arrayformat62: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "New Hires",
        dataend,
      ],
    },
    set63: {
      url63:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=62",
      arrayformat63: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "New Hires",
        dataend,
      ],
    },
    set64: {
      url64:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=62",
      arrayformat64: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "New Hires",
        dataend,
      ],
    },
    set65: {
      url65:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=62",
      arrayformat65: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "New Hires",
        dataend,
      ],
    },

    set66: {
      url66:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=62",
      arrayformat66: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Seperation",
        dataend,
      ],
    },
    set67: {
      url67:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=62",
      arrayformat67: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Seperation",
        dataend,
      ],
    },
    set68: {
      url68:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=62",
      arrayformat68: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Seperation",
        dataend,
      ],
    },
    set69: {
      url69:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=62",
      arrayformat69: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Seperation",
        dataend,
      ],
    },
    set70: {
      url70:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=62",
      arrayformat70: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set71: {
      url71:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=62",
      arrayformat71: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set72: {
      url72:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=62",
      arrayformat72: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set73: {
      url73:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=62",
      arrayformat73: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set74: {
      url74:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=62",
      arrayformat74: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Workers",
        dataend,
      ],
    },
    set75: {
      url75:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=62",
      arrayformat75: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Workers",
        dataend,
      ],
    },
    set76: {
      url76:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=62",
      arrayformat76: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Workers",
        dataend,
      ],
    },
    set77: {
      url77:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=62",
      arrayformat77: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        62,
        "Health Care and Social Assistance" + ",",
        "Workers",
        dataend,
      ],
    },

    set78: {
      url78:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=56",
      arrayformat78: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Earnings",
        dataend,
      ],
    },
    set79: {
      url79:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=56",
      arrayformat79: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Earnings",
        dataend,
      ],
    },
    set80: {
      url80:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=56",
      arrayformat80: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Earnings",
        dataend,
      ],
    },
    set81: {
      url81:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=56",
      arrayformat81: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Earnings",
        dataend,
      ],
    },
    set82: {
      url82:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=56",
      arrayformat82: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Job Change",
        dataend,
      ],
    },
    set83: {
      url83:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=56",
      arrayformat83: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Job Change",
        dataend,
      ],
    },
    set84: {
      url84:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=56",
      arrayformat84: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Job Change",
        dataend,
      ],
    },
    set85: {
      url85:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=56",
      arrayformat85: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Job Change",
        dataend,
      ],
    },

    set86: {
      url86:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=56",
      arrayformat86: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "New Hires",
        dataend,
      ],
    },
    set87: {
      url87:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=56",
      arrayformat87: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "New Hires",
        dataend,
      ],
    },
    set88: {
      url88:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=56",
      arrayformat88: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "New Hires",
        dataend,
      ],
    },
    set89: {
      url89:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=56",
      arrayformat89: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "New Hires",
        dataend,
      ],
    },

    set90: {
      url90:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=56",
      arrayformat90: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Seperation",
        dataend,
      ],
    },
    set91: {
      url91:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=56",
      arrayformat91: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Seperation",
        dataend,
      ],
    },
    set92: {
      url92:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=56",
      arrayformat92: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Seperation",
        dataend,
      ],
    },
    set93: {
      url93:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=56",
      arrayformat93: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Seperation",
        dataend,
      ],
    },

    set94: {
      url94:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=56",
      arrayformat94: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set95: {
      url95:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=56",
      arrayformat95: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set96: {
      url96:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=56",
      arrayformat96: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set97: {
      url97:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=56",
      arrayformat97: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set98: {
      url98:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=56",
      arrayformat98: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Workers",
        dataend,
      ],
    },
    set99: {
      url99:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=56",
      arrayformat99: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Workers",
        dataend,
      ],
    },
    set100: {
      url100:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=56",
      arrayformat100: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Workers",
        dataend,
      ],
    },
    set101: {
      url101:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=56",
      arrayformat101: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        56,
        "Administrative and Support and Waste Management and Remediation Services" +
          ",",
        "Workers",
        dataend,
      ],
    },
    set102: {
      url102:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=11",
      arrayformat12: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Earnings",
        dataend,
      ],
    },
    set103: {
      url103:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=11",
      arrayformat13: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Earnings",
        dataend,
      ],
    },
    set104: {
      url104:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=11",
      arrayformat104: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Earnings",
        dataend,
      ],
    },
    set105: {
      url105:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=11",
      arrayformat105: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Earnings",
        dataend,
      ],
    },
    set106: {
      url106:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=11",
      arrayformat106: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Job Change",
        dataend,
      ],
    },
    set107: {
      url107:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=11",
      arrayformat107: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Job Change",
        dataend,
      ],
    },
    set108: {
      url108:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=11",
      arrayformat108: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Job Change",
        dataend,
      ],
    },
    set109: {
      url109:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=11",
      arrayformat109: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Job Change",
        dataend,
      ],
    },

    set110: {
      url110:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=11",
      arrayformat110: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "New Hires",
        dataend,
      ],
    },
    set111: {
      url111:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=11",
      arrayformat111: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "New Hires",
        dataend,
      ],
    },
    set112: {
      url112:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=11",
      arrayformat112: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "New Hires",
        dataend,
      ],
    },
    set113: {
      url113:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=11",
      arrayformat113: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "New Hires",
        dataend,
      ],
    },

    set114: {
      url114:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=11",
      arrayformat114: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Seperation",
        dataend,
      ],
    },
    set115: {
      url115:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=11",
      arrayformat115: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Seperation",
        dataend,
      ],
    },
    set116: {
      url116:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=11",
      arrayformat116: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Seperation",
        dataend,
      ],
    },
    set117: {
      url117:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=11",
      arrayformat117: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Seperation",
        dataend,
      ],
    },
    set118: {
      url118:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=11",
      arrayformat118: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set119: {
      url119:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=11",
      arrayformat119: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set120: {
      url120:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=11",
      arrayformat120: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set121: {
      url121:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=11",
      arrayformat121: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set122: {
      url122:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=11",
      arrayformat122: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Workers",
        dataend,
      ],
    },
    set123: {
      url123:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=11",
      arrayformat123: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Workers",
        dataend,
      ],
    },
    set124: {
      url124:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=11",
      arrayformat124: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Workers",
        dataend,
      ],
    },
    set125: {
      url125:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=11",
      arrayformat125: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        11,
        "Agriculture, Forestry, Fishing and Hunting" + ",",
        "Workers",
        dataend,
      ],
    },

    set126: {
      url126:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=71",
      arrayformat126: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Earnings",
        dataend,
      ],
    },
    set127: {
      url127:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=71",
      arrayformat127: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Earnings",
        dataend,
      ],
    },
    set128: {
      url128:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=71",
      arrayformat128: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Earnings",
        dataend,
      ],
    },
    set129: {
      url129:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=71",
      arrayformat129: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Earnings",
        dataend,
      ],
    },

    set130: {
      url130:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=71",
      arrayformat130: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Job Change",
        dataend,
      ],
    },
    set131: {
      url131:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=71",
      arrayformat131: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Job Change",
        dataend,
      ],
    },
    set132: {
      url132:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=71",
      arrayformat132: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Job Change",
        dataend,
      ],
    },
    set133: {
      url133:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=71",
      arrayformat133: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Job Change",
        dataend,
      ],
    },

    set134: {
      url134:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=71",
      arrayformat134: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "New Hires",
        dataend,
      ],
    },
    set135: {
      url135:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=71",
      arrayformat135: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "New Hires",
        dataend,
      ],
    },
    set136: {
      url136:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=71",
      arrayformat136: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "New Hires",
        dataend,
      ],
    },
    set137: {
      url137:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=71",
      arrayformat137: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "New Hires",
        dataend,
      ],
    },

    set138: {
      url138:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=71",
      arrayformat138: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Seperation",
        dataend,
      ],
    },
    set139: {
      url139:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=71",
      arrayformat139: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Seperation",
        dataend,
      ],
    },
    set140: {
      url140:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=71",
      arrayformat140: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Seperation",
        dataend,
      ],
    },
    set141: {
      url141:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=71",
      arrayformat141: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Seperation",
        dataend,
      ],
    },

    set142: {
      url142:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=71",
      arrayformat142: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set143: {
      url143:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=71",
      arrayformat143: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set144: {
      url144:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=71",
      arrayformat144: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set145: {
      url145:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=71",
      arrayformat145: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set146: {
      url146:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=71",
      arrayformat146: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Workers",
        dataend,
      ],
    },
    set147: {
      url147:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=71",
      arrayformat147: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Workers",
        dataend,
      ],
    },
    set148: {
      url148:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=71",
      arrayformat148: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Workers",
        dataend,
      ],
    },
    set149: {
      url149:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=71",
      arrayformat149: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        71,
        "Arts, Entertainment, and Recreation" + ",",
        "Workers",
        dataend,
      ],
    },

    set150: {
      url150:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=23",
      arrayformat150: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        23,
        "Construction" + ",",
        "Earnings",
        dataend,
      ],
    },
    set151: {
      url151:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=23",
      arrayformat151: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        23,
        "Construction" + ",",
        "Earnings",
        dataend,
      ],
    },
    set152: {
      url152:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=23",
      arrayformat152: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        23,
        "Construction" + ",",
        "Earnings",
        dataend,
      ],
    },
    set153: {
      url153:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=23",
      arrayformat153: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        23,
        "Construction" + ",",
        "Earnings",
        dataend,
      ],
    },

    set154: {
      url154:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=23",
      arrayformat154: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        23,
        "Construction" + ",",
        "Job Change",
        dataend,
      ],
    },
    set155: {
      url155:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=23",
      arrayformat155: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        23,
        "Construction" + ",",
        "Job Change",
        dataend,
      ],
    },
    set156: {
      url156:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=23",
      arrayformat156: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        23,
        "Construction" + ",",
        "Job Change",
        dataend,
      ],
    },
    set157: {
      url157:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=23",
      arrayformat157: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        23,
        "Construction" + ",",
        "Job Change",
        dataend,
      ],
    },

    set158: {
      url158:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=23",
      arrayformat158: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        23,
        "Construction" + ",",
        "New Hires",
        dataend,
      ],
    },
    set159: {
      url159:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=23",
      arrayformat159: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        23,
        "Construction" + ",",
        "New Hires",
        dataend,
      ],
    },
    set160: {
      url160:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=23",
      arrayformat160: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        23,
        "Construction" + ",",
        "New Hires",
        dataend,
      ],
    },
    set161: {
      url161:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=23",
      arrayformat161: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        23,
        "Construction" + ",",
        "New Hires",
        dataend,
      ],
    },

    set162: {
      url162:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=23",
      arrayformat162: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        23,
        "Construction" + ",",
        "Seperation",
        dataend,
      ],
    },
    set163: {
      url163:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=23",
      arrayformat163: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        23,
        "Construction" + ",",
        "Seperation",
        dataend,
      ],
    },
    set164: {
      url164:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=23",
      arrayformat164: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        23,
        "Construction" + ",",
        "Seperation",
        dataend,
      ],
    },
    set165: {
      url165:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=23",
      arrayformat165: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        23,
        "Construction" + ",",
        "Seperation",
        dataend,
      ],
    },

    set166: {
      url166:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=23",
      arrayformat166: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        23,
        "Construction" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set167: {
      url167:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=23",
      arrayformat167: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        23,
        "Construction" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set168: {
      url168:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=23",
      arrayformat168: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        23,
        "Construction" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set169: {
      url169:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=23",
      arrayformat169: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        23,
        "Construction" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set170: {
      url170:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=23",
      arrayformat170: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        23,
        "Construction" + ",",
        "Workers",
        dataend,
      ],
    },
    set171: {
      url171:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=23",
      arrayformat171: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        23,
        "Construction" + ",",
        "Workers",
        dataend,
      ],
    },
    set172: {
      url172:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=23",
      arrayformat172: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        23,
        "Construction" + ",",
        "Workers",
        dataend,
      ],
    },
    set173: {
      url173:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=23",
      arrayformat173: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        23,
        "Construction" + ",",
        "Workers",
        dataend,
      ],
    },

    set174: {
      url174:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=61",
      arrayformat174: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        61,
        "Educational Services" + ",",
        "Earnings",
        dataend,
      ],
    },
    set175: {
      url175:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=61",
      arrayformat175: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        61,
        "Educational Services" + ",",
        "Earnings",
        dataend,
      ],
    },
    set176: {
      url176:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=61",
      arrayformat176: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        61,
        "Educational Services" + ",",
        "Earnings",
        dataend,
      ],
    },
    set177: {
      url177:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=61",
      arrayformat177: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        61,
        "Educational Services" + ",",
        "Earnings",
        dataend,
      ],
    },

    set178: {
      url178:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=61",
      arrayformat178: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        61,
        "Educational Services" + ",",
        "Job Change",
        dataend,
      ],
    },
    set179: {
      url179:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=61",
      arrayformat179: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        61,
        "Educational Services" + ",",
        "Job Change",
        dataend,
      ],
    },
    set180: {
      url180:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=61",
      arrayformat180: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        61,
        "Educational Services" + ",",
        "Job Change",
        dataend,
      ],
    },
    set181: {
      url181:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=61",
      arrayformat181: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        61,
        "Educational Services" + ",",
        "Job Change",
        dataend,
      ],
    },

    set182: {
      url182:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=61",
      arrayformat182: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        61,
        "Educational Services" + ",",
        "New Hires",
        dataend,
      ],
    },
    set183: {
      url183:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=61",
      arrayformat183: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        61,
        "Educational Services" + ",",
        "New Hires",
        dataend,
      ],
    },
    set184: {
      url184:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=61",
      arrayformat184: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        61,
        "Educational Services" + ",",
        "New Hires",
        dataend,
      ],
    },
    set185: {
      url185:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=61",
      arrayformat185: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        61,
        "Educational Services" + ",",
        "New Hires",
        dataend,
      ],
    },

    set186: {
      url186:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=61",
      arrayformat186: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        61,
        "Educational Services" + ",",
        "Seperation",
        dataend,
      ],
    },
    set187: {
      url187:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=61",
      arrayformat187: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        61,
        "Educational Services" + ",",
        "Seperation",
        dataend,
      ],
    },
    set188: {
      url188:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=61",
      arrayformat188: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        61,
        "Educational Services" + ",",
        "Seperation",
        dataend,
      ],
    },
    set189: {
      url189:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=61",
      arrayformat189: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        61,
        "Educational Services" + ",",
        "Seperation",
        dataend,
      ],
    },

    set190: {
      url190:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=61",
      arrayformat190: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        61,
        "Educational Services" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set191: {
      url191:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=61",
      arrayformat191: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        61,
        "Educational Services" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set192: {
      url192:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=61",
      arrayformat192: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        61,
        "Educational Services" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set193: {
      url193:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=61",
      arrayformat193: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        61,
        "Educational Services" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set194: {
      url194:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=61",
      arrayformat194: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        61,
        "Educational Services" + ",",
        "Workers",
        dataend,
      ],
    },
    set195: {
      url195:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=61",
      arrayformat195: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        61,
        "Educational Services" + ",",
        "Workers",
        dataend,
      ],
    },
    set196: {
      url196:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=61",
      arrayformat196: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        61,
        "Educational Services" + ",",
        "Workers",
        dataend,
      ],
    },
    set197: {
      url197:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=61",
      arrayformat197: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        61,
        "Educational Services" + ",",
        "Workers",
        dataend,
      ],
    },

    set198: {
      url198:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=52",
      arrayformat198: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        52,
        "Finance and Insurance" + ",",
        "Earnings",
        dataend,
      ],
    },
    set199: {
      url199:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=52",
      arrayformat199: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        52,
        "Finance and Insurance" + ",",
        "Earnings",
        dataend,
      ],
    },
    set200: {
      url200:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=52",
      arrayformat200: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        52,
        "Finance and Insurance" + ",",
        "Earnings",
        dataend,
      ],
    },
    set201: {
      url201:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=52",
      arrayformat201: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        52,
        "Finance and Insurance" + ",",
        "Earnings",
        dataend,
      ],
    },

    set202: {
      url202:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=52",
      arrayformat202: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        52,
        "Finance and Insurance" + ",",
        "Job Change",
        dataend,
      ],
    },
    set203: {
      url203:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=52",
      arrayformat203: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        52,
        "Finance and Insurance" + ",",
        "Job Change",
        dataend,
      ],
    },
    set204: {
      url204:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=52",
      arrayformat204: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        52,
        "Finance and Insurance" + ",",
        "Job Change",
        dataend,
      ],
    },
    set205: {
      url205:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=52",
      arrayformat205: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        52,
        "Finance and Insurance" + ",",
        "Job Change",
        dataend,
      ],
    },

    set206: {
      url206:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=52",
      arrayformat206: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        52,
        "Finance and Insurance" + ",",
        "New Hires",
        dataend,
      ],
    },
    set207: {
      url207:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=52",
      arrayformat207: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        52,
        "Finance and Insurance" + ",",
        "New Hires",
        dataend,
      ],
    },
    set208: {
      url208:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=52",
      arrayformat208: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        52,
        "Finance and Insurance" + ",",
        "New Hires",
        dataend,
      ],
    },
    set209: {
      url209:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=52",
      arrayformat209: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        52,
        "Finance and Insurance" + ",",
        "New Hires",
        dataend,
      ],
    },

    set210: {
      url210:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=52",
      arrayformat210: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        52,
        "Finance and Insurance" + ",",
        "Seperation",
        dataend,
      ],
    },
    set211: {
      url211:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=52",
      arrayformat211: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        52,
        "Finance and Insurance" + ",",
        "Seperation",
        dataend,
      ],
    },
    set212: {
      url212:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=52",
      arrayformat212: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        52,
        "Finance and Insurance" + ",",
        "Seperation",
        dataend,
      ],
    },
    set213: {
      url213:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=52",
      arrayformat213: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        52,
        "Finance and Insurance" + ",",
        "Seperation",
        dataend,
      ],
    },

    set214: {
      url214:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=52",
      arrayformat214: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        52,
        "Finance and Insurance" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set215: {
      url215:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=52",
      arrayformat215: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        52,
        "Finance and Insurance" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set216: {
      url216:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=52",
      arrayformat216: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        52,
        "Finance and Insurance" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set217: {
      url217:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=52",
      arrayformat217: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        52,
        "Finance and Insurance" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set218: {
      url218:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=52",
      arrayformat218: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        52,
        "Finance and Insurance" + ",",
        "Workers",
        dataend,
      ],
    },
    set219: {
      url219:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=52",
      arrayformat219: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        52,
        "Finance and Insurance" + ",",
        "Workers",
        dataend,
      ],
    },
    set220: {
      url220:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=52",
      arrayformat220: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        52,
        "Finance and Insurance" + ",",
        "Workers",
        dataend,
      ],
    },
    set221: {
      url221:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=52",
      arrayformat221: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        52,
        "Finance and Insurance" + ",",
        "Workers",
        dataend,
      ],
    },

    set222: {
      url222:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=51",
      arrayformat222: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        51,
        "Information" + ",",
        "Earnings",
        dataend,
      ],
    },
    set223: {
      url223:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=51",
      arrayformat223: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        51,
        "Information" + ",",
        "Earnings",
        dataend,
      ],
    },
    set224: {
      url224:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=51",
      arrayformat224: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        51,
        "Information" + ",",
        "Earnings",
        dataend,
      ],
    },
    set225: {
      url225:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=51",
      arrayformat225: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        51,
        "Information" + ",",
        "Earnings",
        dataend,
      ],
    },

    set226: {
      url226:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=51",
      arrayformat226: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        51,
        "Information" + ",",
        "Job Change",
        dataend,
      ],
    },
    set227: {
      url227:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=51",
      arrayformat227: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        51,
        "Information" + ",",
        "Job Change",
        dataend,
      ],
    },
    set228: {
      url228:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=51",
      arrayformat228: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        51,
        "Information" + ",",
        "Job Change",
        dataend,
      ],
    },
    set229: {
      url229:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=51",
      arrayformat229: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        51,
        "Information" + ",",
        "Job Change",
        dataend,
      ],
    },

    set230: {
      url230:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=51",
      arrayformat230: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        51,
        "Information" + ",",
        "New Hires",
        dataend,
      ],
    },

    set231: {
      url231:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=51",
      arrayformat231: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        51,
        "Information" + ",",
        "New Hires",
        dataend,
      ],
    },
    set232: {
      url232:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=51",
      arrayformat232: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        51,
        "Information" + ",",
        "New Hires",
        dataend,
      ],
    },
    set233: {
      url233:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=51",
      arrayformat233: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        51,
        "Information" + ",",
        "New Hires",
        dataend,
      ],
    },

    set234: {
      url234:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=51",
      arrayformat234: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        51,
        "Information" + ",",
        "Seperation",
        dataend,
      ],
    },
    set235: {
      url235:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=51",
      arrayformat235: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        51,
        "Information" + ",",
        "Seperation",
        dataend,
      ],
    },
    set236: {
      url236:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=51",
      arrayformat236: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        51,
        "Information" + ",",
        "Seperation",
        dataend,
      ],
    },
    set237: {
      url237:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=51",
      arrayformat237: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        51,
        "Information" + ",",
        "Seperation",
        dataend,
      ],
    },

    set238: {
      url238:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=51",
      arrayformat238: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        51,
        "Information" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set239: {
      url239:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=51",
      arrayformat239: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        51,
        "Information" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set240: {
      url240:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=51",
      arrayformat240: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        51,
        "Information" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set241: {
      url241:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=51",
      arrayformat241: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        51,
        "Information" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set242: {
      url242:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=51",
      arrayformat242: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        51,
        "Information" + ",",
        "Workers",
        dataend,
      ],
    },
    set243: {
      url243:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=51",
      arrayformat243: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        51,
        "Information" + ",",
        "Workers",
        dataend,
      ],
    },
    set244: {
      url244:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=51",
      arrayformat244: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        51,
        "Information" + ",",
        "Workers",
        dataend,
      ],
    },
    set245: {
      url245:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=51",
      arrayformat245: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        51,
        "Information" + ",",
        "Workers",
        dataend,
      ],
    },

    set246: {
      url246:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=55",
      arrayformat246: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Earnings",
        dataend,
      ],
    },
    set247: {
      url247:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=55",
      arrayformat247: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Earnings",
        dataend,
      ],
    },
    set248: {
      url248:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=55",
      arrayformat248: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Earnings",
        dataend,
      ],
    },
    set249: {
      url249:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=55",
      arrayformat249: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Earnings",
        dataend,
      ],
    },

    set250: {
      url250:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=55",
      arrayformat250: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Job Change",
        dataend,
      ],
    },
    set251: {
      url251:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=55",
      arrayformat251: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Job Change",
        dataend,
      ],
    },
    set252: {
      url252:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=55",
      arrayformat252: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Job Change",
        dataend,
      ],
    },
    set253: {
      url253:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=55",
      arrayformat253: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Job Change",
        dataend,
      ],
    },

    set254: {
      url254:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=55",
      arrayformat254: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "New Hires",
        dataend,
      ],
    },
    set255: {
      url255:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=55",
      arrayformat255: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "New Hires",
        dataend,
      ],
    },
    set256: {
      url256:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=55",
      arrayformat256: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "New Hires",
        dataend,
      ],
    },
    set257: {
      url257:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=55",
      arrayformat257: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "New Hires",
        dataend,
      ],
    },

    set258: {
      url258:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=55",
      arrayformat258: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Seperation",
        dataend,
      ],
    },
    set259: {
      url259:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=55",
      arrayformat259: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Seperation",
        dataend,
      ],
    },
    set260: {
      url260:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=55",
      arrayformat260: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Seperation",
        dataend,
      ],
    },
    set261: {
      url261:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=55",
      arrayformat261: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Seperation",
        dataend,
      ],
    },

    set262: {
      url262:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=55",
      arrayformat262: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set263: {
      url263:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=55",
      arrayformat263: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set264: {
      url264:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=55",
      arrayformat264: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set265: {
      url265:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=55",
      arrayformat265: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set266: {
      url266:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=55",
      arrayformat266: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Workers",
        dataend,
      ],
    },
    set267: {
      url267:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=55",
      arrayformat267: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Workers",
        dataend,
      ],
    },
    set268: {
      url268:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=55",
      arrayformat268: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Workers",
        dataend,
      ],
    },
    set269: {
      url269:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=55",
      arrayformat269: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        55,
        "Management of Companies and Enterprises" + ",",
        "Workers",
        dataend,
      ],
    },

    set270: {
      url270:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=31-33",
      arrayformat270: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Earnings",
        dataend,
      ],
    },
    set271: {
      url271:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=31-33",
      arrayformat271: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Earnings",
        dataend,
      ],
    },
    set272: {
      url272:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=31-33",
      arrayformat272: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Earnings",
        dataend,
      ],
    },
    set273: {
      url273:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=31-33",
      arrayformat273: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Earnings",
        dataend,
      ],
    },

    set274: {
      url274:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=31-33",
      arrayformat274: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Job Change",
        dataend,
      ],
    },
    set275: {
      url275:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=31-33",
      arrayformat275: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Job Change",
        dataend,
      ],
    },
    set276: {
      url276:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=31-33",
      arrayformat276: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Job Change",
        dataend,
      ],
    },
    set277: {
      url277:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=31-33",
      arrayformat277: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Job Change",
        dataend,
      ],
    },

    set278: {
      url278:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=31-33",
      arrayformat278: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "New Hires",
        dataend,
      ],
    },
    set279: {
      url279:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=31-33",
      arrayformat279: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "New Hires",
        dataend,
      ],
    },
    set280: {
      url280:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=31-33",
      arrayformat280: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "New Hires",
        dataend,
      ],
    },
    set281: {
      url281:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=31-33",
      arrayformat281: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "New Hires",
        dataend,
      ],
    },

    set282: {
      url282:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=31-33",
      arrayformat282: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Seperation",
        dataend,
      ],
    },
    set283: {
      url283:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=31-33",
      arrayformat283: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Seperation",
        dataend,
      ],
    },
    set284: {
      url284:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=31-33",
      arrayformat284: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Seperation",
        dataend,
      ],
    },
    set285: {
      url285:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=31-33",
      arrayformat285: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Seperation",
        dataend,
      ],
    },

    set286: {
      url286:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=31-33",
      arrayformat286: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set287: {
      url287:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=31-33",
      arrayformat287: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set288: {
      url288:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=31-33",
      arrayformat288: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set289: {
      url289:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=31-33",
      arrayformat289: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set290: {
      url290:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=31-33",
      arrayformat290: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Workers",
        dataend,
      ],
    },
    set291: {
      url291:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=31-33",
      arrayformat291: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Workers",
        dataend,
      ],
    },
    set292: {
      url292:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=31-33",
      arrayformat292: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Workers",
        dataend,
      ],
    },
    set293: {
      url293:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=31-33",
      arrayformat293: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        31 - 33,
        "Manufacturing" + ",",
        "Workers",
        dataend,
      ],
    },

    set294: {
      url294:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=21",
      arrayformat294: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Earnings",
        dataend,
      ],
    },
    set295: {
      url295:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=21",
      arrayformat295: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Earnings",
        dataend,
      ],
    },
    set296: {
      url296:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=21",
      arrayformat296: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Earnings",
        dataend,
      ],
    },
    set297: {
      url297:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=21",
      arrayformat297: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Earnings",
        dataend,
      ],
    },

    set298: {
      url298:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=21",
      arrayformat298: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Job Change",
        dataend,
      ],
    },
    set299: {
      url299:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=21",
      arrayformat299: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Job Change",
        dataend,
      ],
    },
    set300: {
      url300:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=21",
      arrayformat300: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Job Change",
        dataend,
      ],
    },
    set301: {
      url301:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=21",
      arrayformat301: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Job Change",
        dataend,
      ],
    },

    set302: {
      url302:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=21",
      arrayformat302: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "New Hires",
        dataend,
      ],
    },
    set303: {
      url303:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=21",
      arrayformat303: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "New Hires",
        dataend,
      ],
    },
    set304: {
      url304:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=21",
      arrayformat304: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "New Hires",
        dataend,
      ],
    },
    set305: {
      url305:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=21",
      arrayformat305: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "New Hires",
        dataend,
      ],
    },

    set306: {
      url306:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=21",
      arrayformat306: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Seperation",
        dataend,
      ],
    },
    set307: {
      url307:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=21",
      arrayformat307: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Seperation",
        dataend,
      ],
    },
    set308: {
      url308:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=21",
      arrayformat308: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Seperation",
        dataend,
      ],
    },
    set309: {
      url309:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=21",
      arrayformat309: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Seperation",
        dataend,
      ],
    },

    set310: {
      url310:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=21",
      arrayformat310: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set311: {
      url311:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=21",
      arrayformat311: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set312: {
      url312:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=21",
      arrayformat312: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set313: {
      url313:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=21",
      arrayformat313: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set314: {
      url314:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=21",
      arrayformat314: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Workers",
        dataend,
      ],
    },
    set315: {
      url315:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=21",
      arrayformat315: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Workers",
        dataend,
      ],
    },
    set316: {
      url316:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=21",
      arrayformat316: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Workers",
        dataend,
      ],
    },
    set317: {
      url317:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=21",
      arrayformat317: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        21,
        "Mining, Quarrying, and Oil and Gas Extraction" + ",",
        "Workers",
        dataend,
      ],
    },

    set318: {
      url318:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=81",
      arrayformat318: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Earnings",
        dataend,
      ],
    },
    set319: {
      url319:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=81",
      arrayformat319: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Earnings",
        dataend,
      ],
    },
    set320: {
      url320:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=81",
      arrayformat320: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Earnings",
        dataend,
      ],
    },
    set321: {
      url321:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=81",
      arrayformat321: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Earnings",
        dataend,
      ],
    },

    set322: {
      url322:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=81",
      arrayformat322: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Job Change",
        dataend,
      ],
    },
    set323: {
      url323:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=81",
      arrayformat323: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Job Change",
        dataend,
      ],
    },
    set324: {
      url324:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=81",
      arrayformat324: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Job Change",
        dataend,
      ],
    },
    set325: {
      url325:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=81",
      arrayformat325: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Job Change",
        dataend,
      ],
    },

    set326: {
      url326:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=81",
      arrayformat326: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "New Hires",
        dataend,
      ],
    },
    set327: {
      url327:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=81",
      arrayformat327: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "New Hires",
        dataend,
      ],
    },
    set328: {
      url328:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=81",
      arrayformat328: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "New Hires",
        dataend,
      ],
    },
    set329: {
      url329:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=81",
      arrayformat329: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "New Hires",
        dataend,
      ],
    },

    set330: {
      url330:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=81",
      arrayformat330: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Seperation",
        dataend,
      ],
    },
    set331: {
      url331:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=81",
      arrayformat331: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Seperation",
        dataend,
      ],
    },
    set332: {
      url332:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=81",
      arrayformat332: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Seperation",
        dataend,
      ],
    },
    set333: {
      url333:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=81",
      arrayformat333: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Seperation",
        dataend,
      ],
    },

    set334: {
      url334:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=81",
      arrayformat334: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set335: {
      url335:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=81",
      arrayformat335: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set336: {
      url336:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=81",
      arrayformat336: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set337: {
      url337:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=81",
      arrayformat337: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set338: {
      url338:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=81",
      arrayformat338: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Workers",
        dataend,
      ],
    },
    set339: {
      url339:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=81",
      arrayformat339: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Workers",
        dataend,
      ],
    },
    set340: {
      url340:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=81",
      arrayformat340: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Workers",
        dataend,
      ],
    },
    set341: {
      url341:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=81",
      arrayformat341: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        81,
        "Other Services (except Public Administration)" + ",",
        "Workers",
        dataend,
      ],
    },

    set342: {
      url342:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=541",
      arrayformat342: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Earnings",
        dataend,
      ],
    },
    set343: {
      url343:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=541",
      arrayformat343: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Earnings",
        dataend,
      ],
    },
    set344: {
      url344:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=541",
      arrayformat344: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Earnings",
        dataend,
      ],
    },
    set345: {
      url345:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=541",
      arrayformat345: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Earnings",
        dataend,
      ],
    },

    set346: {
      url346:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=541",
      arrayformat346: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Job Change",
        dataend,
      ],
    },
    set347: {
      url347:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=541",
      arrayformat347: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Job Change",
        dataend,
      ],
    },
    set348: {
      url348:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=541",
      arrayformat348: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Job Change",
        dataend,
      ],
    },
    set349: {
      url349:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=541",
      arrayformat349: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Job Change",
        dataend,
      ],
    },

    set350: {
      url350:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=541",
      arrayformat350: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "New Hires",
        dataend,
      ],
    },
    set351: {
      url351:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=541",
      arrayformat351: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "New Hires",
        dataend,
      ],
    },
    set352: {
      url352:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=541",
      arrayformat352: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "New Hires",
        dataend,
      ],
    },
    set353: {
      url353:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=541",
      arrayformat353: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "New Hires",
        dataend,
      ],
    },

    set354: {
      url354:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=541",
      arrayformat354: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Seperation",
        dataend,
      ],
    },
    set355: {
      url355:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=541",
      arrayformat355: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Seperation",
        dataend,
      ],
    },
    set356: {
      url356:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=541",
      arrayformat356: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Seperation",
        dataend,
      ],
    },
    set357: {
      url357:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=541",
      arrayformat357: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Seperation",
        dataend,
      ],
    },

    set358: {
      url358:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=541",
      arrayformat358: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set359: {
      url359:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=541",
      arrayformat359: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set360: {
      url360:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=541",
      arrayformat360: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set361: {
      url361:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=541",
      arrayformat361: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set362: {
      url362:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=541",
      arrayformat362: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Workers",
        dataend,
      ],
    },
    set363: {
      url363:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=541",
      arrayformat363: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Workers",
        dataend,
      ],
    },
    set364: {
      url364:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=541",
      arrayformat364: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Workers",
        dataend,
      ],
    },
    set365: {
      url365:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=541",
      arrayformat365: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        541,
        "Professional, Scientific, and Technical Services" + ",",
        "Workers",
        dataend,
      ],
    },

    set366: {
      url366:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=92",
      arrayformat366: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        92,
        "Public Administration" + ",",
        "Earnings",
        dataend,
      ],
    },
    set367: {
      url367:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=92",
      arrayformat367: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        92,
        "Public Administration" + ",",
        "Earnings",
        dataend,
      ],
    },
    set368: {
      url368:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=92",
      arrayformat368: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        92,
        "Public Administration" + ",",
        "Earnings",
        dataend,
      ],
    },
    set369: {
      url369:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=92",
      arrayformat369: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        92,
        "Public Administration" + ",",
        "Earnings",
        dataend,
      ],
    },

    set370: {
      url370:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=92",
      arrayformat370: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        92,
        "Public Administration" + ",",
        "Job Change",
        dataend,
      ],
    },
    set371: {
      url371:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=92",
      arrayformat371: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        92,
        "Public Administration" + ",",
        "Job Change",
        dataend,
      ],
    },
    set372: {
      url372:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=92",
      arrayformat372: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        92,
        "Public Administration" + ",",
        "Job Change",
        dataend,
      ],
    },
    set373: {
      url373:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=92",
      arrayformat373: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        92,
        "Public Administration" + ",",
        "Job Change",
        dataend,
      ],
    },

    set374: {
      url374:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=92",
      arrayformat374: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        92,
        "Public Administration" + ",",
        "New Hires",
        dataend,
      ],
    },
    set375: {
      url375:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=92",
      arrayformat375: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        92,
        "Public Administration" + ",",
        "New Hires",
        dataend,
      ],
    },
    set376: {
      url376:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=92",
      arrayformat376: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        92,
        "Public Administration" + ",",
        "New Hires",
        dataend,
      ],
    },
    set377: {
      url377:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=92",
      arrayformat377: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        92,
        "Public Administration" + ",",
        "New Hires",
        dataend,
      ],
    },

    set378: {
      url378:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=92",
      arrayformat378: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        92,
        "Public Administration" + ",",
        "Seperation",
        dataend,
      ],
    },
    set379: {
      url379:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=92",
      arrayformat379: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        92,
        "Public Administration" + ",",
        "Seperation",
        dataend,
      ],
    },
    set380: {
      url380:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=92",
      arrayformat380: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        92,
        "Public Administration" + ",",
        "Seperation",
        dataend,
      ],
    },
    set381: {
      url381:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=92",
      arrayformat381: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        92,
        "Public Administration" + ",",
        "Seperation",
        dataend,
      ],
    },

    set382: {
      url382:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=92",
      arrayformat382: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        92,
        "Public Administration" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set383: {
      url383:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=92",
      arrayformat383: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        92,
        "Public Administration" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set384: {
      url384:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=92",
      arrayformat384: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        92,
        "Public Administration" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set385: {
      url385:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=92",
      arrayformat385: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        92,
        "Public Administration" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set386: {
      url386:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=92",
      arrayformat386: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        92,
        "Public Administration" + ",",
        "Workers",
        dataend,
      ],
    },
    set387: {
      url387:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=92",
      arrayformat387: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        92,
        "Public Administration" + ",",
        "Workers",
        dataend,
      ],
    },
    set388: {
      url388:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=92",
      arrayformat388: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        92,
        "Public Administration" + ",",
        "Workers",
        dataend,
      ],
    },
    set389: {
      url389:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=92",
      arrayformat389: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        92,
        "Public Administration" + ",",
        "Workers",
        dataend,
      ],
    },

    set390: {
      url390:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=53",
      arrayformat390: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Earnings",
        dataend,
      ],
    },
    set391: {
      url391:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=53",
      arrayformat391: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Earnings",
        dataend,
      ],
    },
    set392: {
      url392:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=53",
      arrayformat392: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Earnings",
        dataend,
      ],
    },
    set393: {
      url393:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=53",
      arrayformat393: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Earnings",
        dataend,
      ],
    },

    set394: {
      url394:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=53",
      arrayformat394: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Job Change",
        dataend,
      ],
    },
    set395: {
      url395:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=53",
      arrayformat395: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Job Change",
        dataend,
      ],
    },
    set396: {
      url396:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=53",
      arrayformat396: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Job Change",
        dataend,
      ],
    },
    set397: {
      url397:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=53",
      arrayformat397: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Job Change",
        dataend,
      ],
    },

    set398: {
      url398:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=53",
      arrayformat398: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "New Hires",
        dataend,
      ],
    },
    set399: {
      url399:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=53",
      arrayformat399: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "New Hires",
        dataend,
      ],
    },
    set400: {
      url400:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=53",
      arrayformat400: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "New Hires",
        dataend,
      ],
    },
    set401: {
      url401:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=53",
      arrayformat401: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "New Hires",
        dataend,
      ],
    },

    set402: {
      url402:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=53",
      arrayformat402: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Seperation",
        dataend,
      ],
    },
    set403: {
      url403:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=53",
      arrayformat403: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Seperation",
        dataend,
      ],
    },
    set404: {
      url404:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=53",
      arrayformat404: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Seperation",
        dataend,
      ],
    },
    set405: {
      url405:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=53",
      arrayformat405: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Seperation",
        dataend,
      ],
    },

    set406: {
      url406:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=53",
      arrayformat406: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set407: {
      url407:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=53",
      arrayformat407: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set408: {
      url408:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=53",
      arrayformat408: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set409: {
      url409:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=53",
      arrayformat409: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set410: {
      url410:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=53",
      arrayformat410: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Workers",
        dataend,
      ],
    },
    set411: {
      url411:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=53",
      arrayformat411: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Workers",
        dataend,
      ],
    },
    set412: {
      url412:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=53",
      arrayformat412: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Workers",
        dataend,
      ],
    },
    set413: {
      url413:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=53",
      arrayformat413: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        53,
        "Real Estate and Rental and Leasing" + ",",
        "Workers",
        dataend,
      ],
    },

    set414: {
      url414:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=44-45",
      arrayformat414: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Earnings",
        dataend,
      ],
    },
    set415: {
      url415:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=44-45",
      arrayformat415: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Earnings",
        dataend,
      ],
    },
    set416: {
      url416:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=44-45",
      arrayformat416: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Earnings",
        dataend,
      ],
    },
    set417: {
      url417:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=44-45",
      arrayformat417: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Earnings",
        dataend,
      ],
    },

    set418: {
      url418:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=44-45",
      arrayformat418: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Job Change",
        dataend,
      ],
    },
    set419: {
      url419:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=44-45",
      arrayformat419: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Job Change",
        dataend,
      ],
    },
    set420: {
      url420:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=44-45",
      arrayformat420: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Job Change",
        dataend,
      ],
    },
    set421: {
      url421:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=44-45",
      arrayformat421: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Job Change",
        dataend,
      ],
    },

    set422: {
      url422:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=44-45",
      arrayformat422: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "New Hires",
        dataend,
      ],
    },
    set423: {
      url423:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=44-45",
      arrayformat423: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "New Hires",
        dataend,
      ],
    },
    set424: {
      url424:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=44-45",
      arrayformat424: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "New Hires",
        dataend,
      ],
    },
    set425: {
      url425:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=44-45",
      arrayformat425: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "New Hires",
        dataend,
      ],
    },

    set426: {
      url426:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=44-45",
      arrayformat426: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Seperation",
        dataend,
      ],
    },
    set427: {
      url427:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=44-45",
      arrayformat427: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Seperation",
        dataend,
      ],
    },
    set428: {
      url428:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=44-45",
      arrayformat428: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Seperation",
        dataend,
      ],
    },
    set429: {
      url429:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=44-45",
      arrayformat429: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Seperation",
        dataend,
      ],
    },

    set430: {
      url430:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=44-45",
      arrayformat430: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set431: {
      url431:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=44-45",
      arrayformat431: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set432: {
      url432:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=44-45",
      arrayformat432: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set433: {
      url433:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=44-45",
      arrayformat433: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set434: {
      url434:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=44-45",
      arrayformat434: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Workers",
        dataend,
      ],
    },
    set435: {
      url435:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=44-45",
      arrayformat435: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Workers",
        dataend,
      ],
    },
    set436: {
      url436:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=44-45",
      arrayformat436: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Workers",
        dataend,
      ],
    },
    set437: {
      url437:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=44-45",
      arrayformat437: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        44 - 45,
        "Retail Trade" + ",",
        "Workers",
        dataend,
      ],
    },

    set438: {
      url438:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=48-49",
      arrayformat438: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Earnings",
        dataend,
      ],
    },
    set439: {
      url439:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=48-49",
      arrayformat439: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Earnings",
        dataend,
      ],
    },
    set440: {
      url440:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=48-49",
      arrayformat440: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Earnings",
        dataend,
      ],
    },
    set441: {
      url441:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=48-49",
      arrayformat441: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Earnings",
        dataend,
      ],
    },

    set442: {
      url442:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=48-49",
      arrayformat442: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Job Change",
        dataend,
      ],
    },
    set443: {
      url443:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=48-49",
      arrayformat443: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Job Change",
        dataend,
      ],
    },
    set444: {
      url444:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=48-49",
      arrayformat444: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Job Change",
        dataend,
      ],
    },
    set445: {
      url445:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=48-49",
      arrayformat445: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Job Change",
        dataend,
      ],
    },

    set446: {
      url446:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=48-49",
      arrayformat446: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "New Hires",
        dataend,
      ],
    },
    set447: {
      url447:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=48-49",
      arrayformat447: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "New Hires",
        dataend,
      ],
    },
    set448: {
      url448:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=48-49",
      arrayformat448: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "New Hires",
        dataend,
      ],
    },
    set449: {
      url449:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=48-49",
      arrayformat449: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "New Hires",
        dataend,
      ],
    },

    set450: {
      url450:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=48-49",
      arrayformat450: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Seperation",
        dataend,
      ],
    },
    set451: {
      url451:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=48-49",
      arrayformat451: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Seperation",
        dataend,
      ],
    },
    set452: {
      url452:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=48-49",
      arrayformat452: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Seperation",
        dataend,
      ],
    },
    set453: {
      url453:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=48-49",
      arrayformat453: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Seperation",
        dataend,
      ],
    },

    set454: {
      url454:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=48-49",
      arrayformat454: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set455: {
      url455:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=48-49",
      arrayformat455: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set456: {
      url456:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=48-49",
      arrayformat456: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set457: {
      url457:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=48-49",
      arrayformat457: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set458: {
      url458:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=48-49",
      arrayformat458: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Workers",
        dataend,
      ],
    },
    set459: {
      url459:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=48-49",
      arrayformat459: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Workers",
        dataend,
      ],
    },
    set460: {
      url460:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=48-49",
      arrayformat460: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Workers",
        dataend,
      ],
    },
    set461: {
      url461:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=48-49",
      arrayformat461: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        48 - 49,
        "Transportation and Warehousing" + ",",
        "Workers",
        dataend,
      ],
    },

    set462: {
      url462:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=22",
      arrayformat462: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        22,
        "Utilities" + ",",
        "Earnings",
        dataend,
      ],
    },
    set463: {
      url463:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=22",
      arrayformat463: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        22,
        "Utilities" + ",",
        "Earnings",
        dataend,
      ],
    },
    set464: {
      url464:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=22",
      arrayformat464: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        22,
        "Utilities" + ",",
        "Earnings",
        dataend,
      ],
    },
    set465: {
      url465:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=22",
      arrayformat465: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        22,
        "Utilities" + ",",
        "Earnings",
        dataend,
      ],
    },

    set466: {
      url466:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=22",
      arrayformat466: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        22,
        "Utilities" + ",",
        "Job Change",
        dataend,
      ],
    },
    set467: {
      url467:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=22",
      arrayformat467: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        22,
        "Utilities" + ",",
        "Job Change",
        dataend,
      ],
    },
    set468: {
      url468:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=22",
      arrayformat468: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        22,
        "Utilities" + ",",
        "Job Change",
        dataend,
      ],
    },
    set469: {
      url469:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=22",
      arrayformat469: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        22,
        "Utilities" + ",",
        "Job Change",
        dataend,
      ],
    },

    set470: {
      url470:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=22",
      arrayformat470: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        22,
        "Utilities" + ",",
        "New Hires",
        dataend,
      ],
    },
    set471: {
      url471:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=22",
      arrayformat471: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        22,
        "Utilities" + ",",
        "New Hires",
        dataend,
      ],
    },
    set472: {
      url472:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=22",
      arrayformat472: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        22,
        "Utilities" + ",",
        "New Hires",
        dataend,
      ],
    },
    set473: {
      url473:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=22",
      arrayformat473: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        22,
        "Utilities" + ",",
        "New Hires",
        dataend,
      ],
    },

    set474: {
      url474:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=22",
      arrayformat474: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        22,
        "Utilities" + ",",
        "Seperation",
        dataend,
      ],
    },
    set475: {
      url475:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=22",
      arrayformat475: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        22,
        "Utilities" + ",",
        "Seperation",
        dataend,
      ],
    },
    set476: {
      url476:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=22",
      arrayformat476: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        22,
        "Utilities" + ",",
        "Seperation",
        dataend,
      ],
    },
    set477: {
      url477:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=22",
      arrayformat477: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        22,
        "Utilities" + ",",
        "Seperation",
        dataend,
      ],
    },

    set478: {
      url478:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=22",
      arrayformat478: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        22,
        "Utilities" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set479: {
      url479:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=22",
      arrayformat479: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        22,
        "Utilities" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set480: {
      url480:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=22",
      arrayformat480: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        22,
        "Utilities" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set481: {
      url481:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=22",
      arrayformat481: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        22,
        "Utilities" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set482: {
      url482:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=22",
      arrayformat482: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        22,
        "Utilities" + ",",
        "Workers",
        dataend,
      ],
    },
    set483: {
      url483:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=22",
      arrayformat483: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        22,
        "Utilities" + ",",
        "Workers",
        dataend,
      ],
    },
    set484: {
      url484:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=22",
      arrayformat484: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        22,
        "Utilities" + ",",
        "Workers",
        dataend,
      ],
    },
    set485: {
      url485:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=22",
      arrayformat485: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        22,
        "Utilities" + ",",
        "Workers",
        dataend,
      ],
    },

    set486: {
      url486:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=42",
      arrayformat486: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Industry",
        42,
        "Wholesale Trade" + ",",
        "Earnings",
        dataend,
      ],
    },
    set487: {
      url487:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=42",
      arrayformat487: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Industry",
        42,
        "Wholesale Trade" + ",",
        "Earnings",
        dataend,
      ],
    },
    set488: {
      url488:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=42",
      arrayformat488: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Industry",
        42,
        "Wholesale Trade" + ",",
        "Earnings",
        dataend,
      ],
    },
    set489: {
      url489:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=42",
      arrayformat489: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Industry",
        42,
        "Wholesale Trade" + ",",
        "Earnings",
        dataend,
      ],
    },

    set490: {
      url490:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=42",
      arrayformat490: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Job Net Change by Industry",
        42,
        "Wholesale Trade" + ",",
        "Job Change",
        dataend,
      ],
    },
    set491: {
      url491:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=42",
      arrayformat491: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Job Net Change by Industry",
        42,
        "Wholesale Trade" + ",",
        "Job Change",
        dataend,
      ],
    },
    set492: {
      url492:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=42",
      arrayformat492: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Job Net Change by Industry",
        42,
        "Wholesale Trade" + ",",
        "Job Change",
        dataend,
      ],
    },
    set493: {
      url493:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=42",
      arrayformat493: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Job Net Change by Industry",
        42,
        "Wholesale Trade" + ",",
        "Job Change",
        dataend,
      ],
    },

    set494: {
      url494:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=42",
      arrayformat494: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Industry",
        42,
        "Wholesale Trade" + ",",
        "New Hires",
        dataend,
      ],
    },
    set495: {
      url495:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=42",
      arrayformat495: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Industry",
        42,
        "Wholesale Trade" + ",",
        "New Hires",
        dataend,
      ],
    },
    set496: {
      url496:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=42",
      arrayformat496: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Industry",
        42,
        "Wholesale Trade" + ",",
        "New Hires",
        dataend,
      ],
    },
    set497: {
      url497:
        "https://api.census.gov/data/timeseries/qwi/sa?get=HirA&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=42",
      arrayformat497: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Industry",
        42,
        "Wholesale Trade" + ",",
        "New Hires",
        dataend,
      ],
    },

    set498: {
      url498:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=42",
      arrayformat498: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Industry",
        42,
        "Wholesale Trade" + ",",
        "Seperation",
        dataend,
      ],
    },
    set499: {
      url499:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=42",
      arrayformat499: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Industry",
        42,
        "Wholesale Trade" + ",",
        "Seperation",
        dataend,
      ],
    },
    set500: {
      url500:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=42",
      arrayformat500: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Industry",
        42,
        "Wholesale Trade" + ",",
        "Seperation",
        dataend,
      ],
    },
    set501: {
      url501:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=42",
      arrayformat501: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Industry",
        42,
        "Wholesale Trade" + ",",
        "Seperation",
        dataend,
      ],
    },

    set502: {
      url502:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=42",
      arrayformat502: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Industry",
        42,
        "Wholesale Trade" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set503: {
      url503:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=42",
      arrayformat503: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Industry",
        42,
        "Wholesale Trade" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set504: {
      url504:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=42",
      arrayformat504: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Industry",
        42,
        "Wholesale Trade" + ",",
        "Turnover Rate",
        dataend,
      ],
    },
    set505: {
      url505:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=42",
      arrayformat505: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Industry",
        42,
        "Wholesale Trade" + ",",
        "Turnover Rate",
        dataend,
      ],
    },

    set506: {
      url506:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&industry=42",
      arrayformat506: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Industry",
        42,
        "Wholesale Trade" + ",",
        "Workers",
        dataend,
      ],
    },
    set507: {
      url507:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&industry=42",
      arrayformat507: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Industry",
        42,
        "Wholesale Trade" + ",",
        "Workers",
        dataend,
      ],
    },
    set508: {
      url508:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&industry=42",
      arrayformat508: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Industry",
        42,
        "Wholesale Trade" + ",",
        "Workers",
        dataend,
      ],
    },
    set509: {
      url509:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&industry=42",
      arrayformat509: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Industry",
        42,
        "Wholesale Trade" + ",",
        "Workers",
        dataend,
      ],
    },

    set510: {
      url510:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A01",
      arrayformat510: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Age",
        "A01",
        "14-18" + ",",
        "Earnings",
        dataend,
      ],
    },
    set511: {
      url511:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A01",
      arrayformat511: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Age",
        "A01",
        "14-18" + ",",
        "Earnings",
        dataend,
      ],
    },
    set512: {
      url512:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A01",
      arrayformat512: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Age",
        "A01",
        "14-18" + ",",
        "Earnings",
        dataend,
      ],
    },
    set513: {
      url513:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A01",
      arrayformat513: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Age",
        "A01",
        "14-18" + ",",
        "Earnings",
        dataend,
      ],
    },

    set514: {
      url514:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A02",
      arrayformat514: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Age",
        "A02",
        "19-21" + ",",
        "Earnings",
        dataend,
      ],
    },
    set515: {
      url515:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A02",
      arrayformat515: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Age",
        "A02",
        "19-21" + ",",
        "Earnings",
        dataend,
      ],
    },
    set516: {
      url516:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A02",
      arrayformat516: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Age",
        "A02",
        "19-21" + ",",
        "Earnings",
        dataend,
      ],
    },
    set517: {
      url517:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A02",
      arrayformat517: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Age",
        "A02",
        "19-21" + ",",
        "Earnings",
        dataend,
      ],
    },

    set518: {
      url518:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A03",
      arrayformat518: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Age",
        "A03",
        "22-24" + ",",
        "Earnings",
        dataend,
      ],
    },
    set519: {
      url519:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A03",
      arrayformat519: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Age",
        "A03",
        "22-24" + ",",
        "Earnings",
        dataend,
      ],
    },
    set520: {
      url520:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A03",
      arrayformat520: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Age",
        "A03",
        "22-24" + ",",
        "Earnings",
        dataend,
      ],
    },
    set521: {
      url521:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A03",
      arrayformat521: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Age",
        "A03",
        "22-24" + ",",
        "Earnings",
        dataend,
      ],
    },

    set522: {
      url522:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A04",
      arrayformat522: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Age",
        "A04",
        "25-34" + ",",
        "Earnings",
        dataend,
      ],
    },
    set523: {
      url523:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A04",
      arrayformat523: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Age",
        "A04",
        "25-34" + ",",
        "Earnings",
        dataend,
      ],
    },
    set524: {
      url524:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A04",
      arrayformat524: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Age",
        "A04",
        "25-34" + ",",
        "Earnings",
        dataend,
      ],
    },
    set525: {
      url525:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A04",
      arrayformat525: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Age",
        "A04",
        "25-34" + ",",
        "Earnings",
        dataend,
      ],
    },

    set526: {
      url526:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A05",
      arrayformat526: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Age",
        "A05",
        "35-44" + ",",
        "Earnings",
        dataend,
      ],
    },
    set527: {
      url527:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A05",
      arrayformat527: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Age",
        "A05",
        "35-44" + ",",
        "Earnings",
        dataend,
      ],
    },
    set528: {
      url528:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A05",
      arrayformat528: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Age",
        "A05",
        "35-44" + ",",
        "Earnings",
        dataend,
      ],
    },
    set529: {
      url529:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A05",
      arrayformat529: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Age",
        "A05",
        "35-44" + ",",
        "Earnings",
        dataend,
      ],
    },

    set530: {
      url530:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A06",
      arrayformat530: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Age",
        "A06",
        "45-54" + ",",
        "Earnings",
        dataend,
      ],
    },
    set531: {
      url531:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A06",
      arrayformat531: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Age",
        "A06",
        "45-54" + ",",
        "Earnings",
        dataend,
      ],
    },
    set532: {
      url532:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A06",
      arrayformat532: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Age",
        "A06",
        "45-54" + ",",
        "Earnings",
        dataend,
      ],
    },
    set533: {
      url533:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A06",
      arrayformat533: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Age",
        "A06",
        "45-54" + ",",
        "Earnings",
        dataend,
      ],
    },

    set534: {
      url534:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A07",
      arrayformat534: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Earnings by Age",
        "A07",
        "65-99" + ",",
        "Earnings",
        dataend,
      ],
    },
    set535: {
      url535:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A07",
      arrayformat535: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Earnings by Age",
        "A07",
        "65-99" + ",",
        "Earnings",
        dataend,
      ],
    },
    set536: {
      url536:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A07",
      arrayformat536: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Earnings by Age",
        "A07",
        "65-99" + ",",
        "Earnings",
        dataend,
      ],
    },
    set537: {
      url537:
        "https://api.census.gov/data/timeseries/qwi/sa?get=EarnS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A07",
      arrayformat537: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Earnings by Age",
        "A07",
        "65-99" + ",",
        "Earnings",
        dataend,
      ],
    },

    set538: {
      url538:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A01",
      arrayformat538: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Age",
        "A01",
        "14-18" + ",",
        "Workers",
        dataend,
      ],
    },
    set539: {
      url539:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A01",
      arrayformat539: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Age",
        "A01",
        "14-18" + ",",
        "Workers",
        dataend,
      ],
    },
    set540: {
      url540:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A01",
      arrayformat540: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Age",
        "A01",
        "14-18" + ",",
        "Workers",
        dataend,
      ],
    },
    set541: {
      url541:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A01",
      arrayformat541: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Age",
        "A01",
        "14-18" + ",",
        "Workers",
        dataend,
      ],
    },

    set542: {
      url542:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A02",
      arrayformat542: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Age",
        "A02",
        "19-21" + ",",
        "Workers",
        dataend,
      ],
    },
    set543: {
      url543:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A02",
      arrayformat543: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Age",
        "A02",
        "19-21" + ",",
        "Workers",
        dataend,
      ],
    },
    set544: {
      url544:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A02",
      arrayformat544: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Age",
        "A02",
        "19-21" + ",",
        "Workers",
        dataend,
      ],
    },
    set545: {
      url545:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A02",
      arrayformat545: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Age",
        "A02",
        "19-21" + ",",
        "Workers",
        dataend,
      ],
    },

    set546: {
      url546:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A03",
      arrayformat546: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Age",
        "A03",
        "22-24" + ",",
        "Workers",
        dataend,
      ],
    },
    set547: {
      url547:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A03",
      arrayformat547: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Age",
        "A03",
        "22-24" + ",",
        "Workers",
        dataend,
      ],
    },
    set548: {
      url548:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A03",
      arrayformat548: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Age",
        "A03",
        "22-24" + ",",
        "Workers",
        dataend,
      ],
    },
    set549: {
      url549:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A03",
      arrayformat549: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Age",
        "A03",
        "22-24" + ",",
        "Workers",
        dataend,
      ],
    },

    set550: {
      url550:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A04",
      arrayformat550: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Age",
        "A04",
        "25-34" + ",",
        "Workers",
        dataend,
      ],
    },
    set551: {
      url551:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A04",
      arrayformat551: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Age",
        "A04",
        "25-34" + ",",
        "Workers",
        dataend,
      ],
    },
    set552: {
      url552:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A04",
      arrayformat552: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Age",
        "A04",
        "25-34" + ",",
        "Workers",
        dataend,
      ],
    },
    set553: {
      url553:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A04",
      arrayformat553: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Age",
        "A04",
        "25-34" + ",",
        "Workers",
        dataend,
      ],
    },

    set554: {
      url554:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A05",
      arrayformat554: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Age",
        "A05",
        "35-44" + ",",
        "Workers",
        dataend,
      ],
    },
    set555: {
      url555:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A05",
      arrayformat555: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Age",
        "A05",
        "35-44" + ",",
        "Workers",
        dataend,
      ],
    },
    set556: {
      url556:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A05",
      arrayformat556: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Age",
        "A05",
        "35-44" + ",",
        "Workers",
        dataend,
      ],
    },
    set557: {
      url557:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A05",
      arrayformat557: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Age",
        "A05",
        "35-44" + ",",
        "Workers",
        dataend,
      ],
    },

    set558: {
      url558:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A06",
      arrayformat558: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Age",
        "A06",
        "45-54" + ",",
        "Workers",
        dataend,
      ],
    },
    set559: {
      url559:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A06",
      arrayformat559: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Age",
        "A06",
        "45-54" + ",",
        "Workers",
        dataend,
      ],
    },
    set560: {
      url560:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A06",
      arrayformat560: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Age",
        "A06",
        "45-54" + ",",
        "Workers",
        dataend,
      ],
    },
    set561: {
      url561:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A06",
      arrayformat561: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Age",
        "A06",
        "45-54" + ",",
        "Workers",
        dataend,
      ],
    },

    set562: {
      url562:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A07",
      arrayformat562: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Age",
        "A07",
        "65-99" + ",",
        "Workers",
        dataend,
      ],
    },
    set563: {
      url563:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A07",
      arrayformat563: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Age",
        "A07",
        "65-99" + ",",
        "Workers",
        dataend,
      ],
    },
    set564: {
      url564:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A07",
      arrayformat564: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Age",
        "A07",
        "65-99" + ",",
        "Workers",
        dataend,
      ],
    },
    set565: {
      url565:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A07",
      arrayformat565: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Age",
        "A07",
        "65-99" + ",",
        "Workers",
        dataend,
      ],
    },

    set566: {
      url566:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A01",
      arrayformat566: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Age",
        "A01",
        "14-18" + ",",
        "Seperation",
        dataend,
      ],
    },
    set567: {
      url567:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A01",
      arrayformat567: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Age",
        "A01",
        "14-18" + ",",
        "Seperation",
        dataend,
      ],
    },
    set568: {
      url568:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A01",
      arrayformat568: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Age",
        "A01",
        "14-18" + ",",
        "Seperation",
        dataend,
      ],
    },
    set569: {
      url569:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A01",
      arrayformat569: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Age",
        "A01",
        "14-18" + ",",
        "Seperation",
        dataend,
      ],
    },

    set570: {
      url570:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A02",
      arrayformat570: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Age",
        "A02",
        "19-21" + ",",
        "Seperation",
        dataend,
      ],
    },
    set571: {
      url571:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A02",
      arrayformat571: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Age",
        "A02",
        "19-21" + ",",
        "Seperation",
        dataend,
      ],
    },
    set572: {
      url572:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A02",
      arrayformat572: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Age",
        "A02",
        "19-21" + ",",
        "Seperation",
        dataend,
      ],
    },
    set573: {
      url573:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A02",
      arrayformat573: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Age",
        "A02",
        "19-21" + ",",
        "Seperation",
        dataend,
      ],
    },

    set574: {
      url574:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A03",
      arrayformat574: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Age",
        "A03",
        "22-24" + ",",
        "Seperation",
        dataend,
      ],
    },
    set575: {
      url575:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A03",
      arrayformat575: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Age",
        "A03",
        "22-24" + ",",
        "Seperation",
        dataend,
      ],
    },
    set576: {
      url576:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A03",
      arrayformat576: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Age",
        "A03",
        "22-24" + ",",
        "Seperation",
        dataend,
      ],
    },
    set577: {
      url577:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A03",
      arrayformat577: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Age",
        "A03",
        "22-24" + ",",
        "Seperation",
        dataend,
      ],
    },

    set578: {
      url578:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A04",
      arrayformat578: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Age",
        "A04",
        "25-34" + ",",
        "Seperation",
        dataend,
      ],
    },
    set579: {
      url579:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A04",
      arrayformat579: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Age",
        "A04",
        "25-34" + ",",
        "Seperation",
        dataend,
      ],
    },
    set580: {
      url580:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A04",
      arrayformat580: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Age",
        "A04",
        "25-34" + ",",
        "Seperation",
        dataend,
      ],
    },
    set581: {
      url581:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A04",
      arrayformat581: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Age",
        "A04",
        "25-34" + ",",
        "Seperation",
        dataend,
      ],
    },

    set582: {
      url582:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A05",
      arrayformat582: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Age",
        "A05",
        "35-44" + ",",
        "Seperation",
        dataend,
      ],
    },
    set583: {
      url583:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A05",
      arrayformat583: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Age",
        "A05",
        "35-44" + ",",
        "Seperation",
        dataend,
      ],
    },
    set584: {
      url584:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A05",
      arrayformat584: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Age",
        "A05",
        "35-44" + ",",
        "Seperation",
        dataend,
      ],
    },
    set585: {
      url585:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A05",
      arrayformat585: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Age",
        "A05",
        "35-44" + ",",
        "Seperation",
        dataend,
      ],
    },

    set586: {
      url586:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A06",
      arrayformat586: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Age",
        "A06",
        "45-54" + ",",
        "Seperation",
        dataend,
      ],
    },
    set587: {
      url587:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A06",
      arrayformat587: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Age",
        "A06",
        "45-54" + ",",
        "Seperation",
        dataend,
      ],
    },
    set588: {
      url588:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A06",
      arrayformat588: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Age",
        "A06",
        "45-54" + ",",
        "Seperation",
        dataend,
      ],
    },
    set589: {
      url589:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A06",
      arrayformat589: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Age",
        "A06",
        "45-54" + ",",
        "Seperation",
        dataend,
      ],
    },

    set590: {
      url590:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&agegrp=A07",
      arrayformat590: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Age",
        "A07",
        "65-99" + ",",
        "Seperation",
        dataend,
      ],
    },
    set591: {
      url591:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&agegrp=A07",
      arrayformat591: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Age",
        "A07",
        "65-99" + ",",
        "Seperation",
        dataend,
      ],
    },
    set592: {
      url592:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&agegrp=A07",
      arrayformat592: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Age",
        "A07",
        "65-99" + ",",
        "Seperation",
        dataend,
      ],
    },
    set593: {
      url593:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&agegrp=A07",
      arrayformat593: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Age",
        "A07",
        "65-99" + ",",
        "Seperation",
        dataend,
      ],
    },

    set594: {
      url594:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&sex=1",
      arrayformat594: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Monthly Earnings by Gender",
        "1",
        "Male" + ",",
        "Earnings",
        dataend,
      ],
    },
    set595: {
      url595:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&sex=1",
      arrayformat595: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Monthly Earnings by Gender",
        "1",
        "Male" + ",",
        "Earnings",
        dataend,
      ],
    },
    set596: {
      url596:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&sex=1",
      arrayformat596: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Monthly Earnings by Gender",
        "1",
        "Male" + ",",
        "Earnings",
        dataend,
      ],
    },
    set597: {
      url597:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&sex=1",
      arrayformat597: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Monthly Earnings by Gender",
        "1",
        "Male" + ",",
        "Earnings",
        dataend,
      ],
    },

    set598: {
      url598:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&sex=2",
      arrayformat598: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Average Monthly Earnings by Gender",
        "2",
        "Female" + ",",
        "Earnings",
        dataend,
      ],
    },
    set599: {
      url599:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&sex=2",
      arrayformat599: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Average Monthly Earnings by Gender",
        "2",
        "Female" + ",",
        "Earnings",
        dataend,
      ],
    },
    set600: {
      url600:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&sex=2",
      arrayformat600: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Average Monthly Earnings by Gender",
        "2",
        "Female" + ",",
        "Earnings",
        dataend,
      ],
    },
    set601: {
      url601:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Earns&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&sex=2",
      arrayformat601: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Average Monthly Earnings by Gender",
        "2",
        "Female" + ",",
        "Earnings",
        dataend,
      ],
    },

    set602: {
      url602:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&sex=1",
      arrayformat602: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Gender",
        "1",
        "Male" + ",",
        "Workers",
        dataend,
      ],
    },
    set603: {
      url603:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&sex=1",
      arrayformat603: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Gender",
        "1",
        "Male" + ",",
        "Workers",
        dataend,
      ],
    },
    set604: {
      url604:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&sex=1",
      arrayformat604: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Gender",
        "1",
        "Male" + ",",
        "Workers",
        dataend,
      ],
    },
    set605: {
      url605:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&sex=1",
      arrayformat605: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Gender",
        "1",
        "Male" + ",",
        "Workers",
        dataend,
      ],
    },

    set606: {
      url606:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&sex=2",
      arrayformat606: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Workers by Gender",
        "2",
        "Female" + ",",
        "Workers",
        dataend,
      ],
    },
    set607: {
      url607:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&sex=2",
      arrayformat607: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Workers by Gender",
        "2",
        "Female" + ",",
        "Workers",
        dataend,
      ],
    },
    set608: {
      url608:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&sex=2",
      arrayformat608: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Workers by Gender",
        "2",
        "Female" + ",",
        "Workers",
        dataend,
      ],
    },
    set609: {
      url609:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Emp&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&sex=2",
      arrayformat609: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Workers by Gender",
        "2",
        "Female" + ",",
        "Workers",
        dataend,
      ],
    },

    set610: {
      url610:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&sex=1",
      arrayformat610: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Gender",
        "1",
        "Male" + ",",
        "Seperation",
        dataend,
      ],
    },
    set611: {
      url611:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&sex=1",
      arrayformat611: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Gender",
        "1",
        "Male" + ",",
        "Seperation",
        dataend,
      ],
    },
    set612: {
      url612:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&sex=1",
      arrayformat612: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Gender",
        "1",
        "Male" + ",",
        "Seperation",
        dataend,
      ],
    },
    set613: {
      url613:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&sex=1",
      arrayformat613: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Gender",
        "1",
        "Male" + ",",
        "Seperation",
        dataend,
      ],
    },

    set614: {
      url614:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&sex=2",
      arrayformat614: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Separations by Gender",
        "2",
        "Female" + ",",
        "Seperation",
        dataend,
      ],
    },
    set615: {
      url615:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&sex=2",
      arrayformat615: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Separations by Gender",
        "2",
        "Female" + ",",
        "Seperation",
        dataend,
      ],
    },
    set616: {
      url616:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&sex=2",
      arrayformat616: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Separations by Gender",
        "2",
        "Female" + ",",
        "Seperation",
        dataend,
      ],
    },
    set617: {
      url617:
        "https://api.census.gov/data/timeseries/qwi/sa?get=Sep&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&sex=2",
      arrayformat617: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Separations by Gender",
        "2",
        "Female" + ",",
        "Seperation",
        dataend,
      ],
    },

    set618: {
      url618:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&education=E1",
      arrayformat618: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Net Change by Education",
        "E1",
        "Less than High School" + ",",
        "Job Change",
        dataend,
      ],
    },
    set619: {
      url619:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&education=E1",
      arrayformat619: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Net Change by Education",
        "E1",
        "Less than High School" + ",",
        "Job Change",
        dataend,
      ],
    },
    set620: {
      url620:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&education=E1",
      arrayformat620: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Net Change by Education",
        "E1",
        "Less than High School" + ",",
        "Job Change",
        dataend,
      ],
    },
    set621: {
      url621:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&education=E1",
      arrayformat621: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Net Change by Education",
        "E1",
        "Less than High School" + ",",
        "Job Change",
        dataend,
      ],
    },

    set622: {
      url622:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&education=E2",
      arrayformat622: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Net Change by Education",
        "E2",
        "High school or equivalent, no college" + ",",
        "Job Change",
        dataend,
      ],
    },
    set623: {
      url623:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&education=E2",
      arrayformat623: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Net Change by Education",
        "E2",
        "High school or equivalent, no college" + ",",
        "Job Change",
        dataend,
      ],
    },
    set624: {
      url624:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&education=E2",
      arrayformat624: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Net Change by Education",
        "E2",
        "High school or equivalent, no college" + ",",
        "Job Change",
        dataend,
      ],
    },
    set625: {
      url625:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&education=E2",
      arrayformat625: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Net Change by Education",
        "E2",
        "High school or equivalent, no college" + ",",
        "Job Change",
        dataend,
      ],
    },

    set626: {
      url626:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&education=E3",
      arrayformat626: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Net Change by Education",
        "E3",
        "Some college or Associate degree" + ",",
        "Job Change",
        dataend,
      ],
    },
    set627: {
      url627:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&education=E3",
      arrayformat627: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Net Change by Education",
        "E3",
        "Some college or Associate degree" + ",",
        "Job Change",
        dataend,
      ],
    },
    set628: {
      url628:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&education=E3",
      arrayformat628: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Net Change by Education",
        "E3",
        "Some college or Associate degree" + ",",
        "Job Change",
        dataend,
      ],
    },
    set629: {
      url629:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&education=E3",
      arrayformat629: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Net Change by Education",
        "E3",
        "Some college or Associate degree" + ",",
        "Job Change",
        dataend,
      ],
    },

    set630: {
      url630:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&education=E4",
      arrayformat630: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Net Change by Education",
        "E4",
        "Bachelor's degree or advanced degree" + ",",
        "Job Change",
        dataend,
      ],
    },
    set631: {
      url631:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&education=E4",
      arrayformat631: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Net Change by Education",
        "E4",
        "Bachelor's degree or advanced degree" + ",",
        "Job Change",
        dataend,
      ],
    },
    set632: {
      url632:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&education=E4",
      arrayformat632: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Net Change by Education",
        "E4",
        "Bachelor's degree or advanced degree" + ",",
        "Job Change",
        dataend,
      ],
    },
    set633: {
      url633:
        "https://api.census.gov/data/timeseries/qwi/se?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&education=E4",
      arrayformat633: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Net Change by Education",
        "E4",
        "Bachelor's degree or advanced degree" + ",",
        "Job Change",
        dataend,
      ],
    },

    set634: {
      url634:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&education=E1",
      arrayformat634: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Education",
        "E1",
        "Less than High School" + ",",
        "New Hires",
        dataend,
      ],
    },
    set635: {
      url635:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&education=E1",
      arrayformat635: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Education",
        "E1",
        "Less than High School" + ",",
        "New Hires",
        dataend,
      ],
    },
    set636: {
      url636:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&education=E1",
      arrayformat636: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Education",
        "E1",
        "Less than High School" + ",",
        "New Hires",
        dataend,
      ],
    },
    set637: {
      url637:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&education=E1",
      arrayformat637: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Education",
        "E1",
        "Less than High School" + ",",
        "New Hires",
        dataend,
      ],
    },

    set638: {
      url638:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&education=E2",
      arrayformat638: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Education",
        "E2",
        "High school or equivalent, no college" + ",",
        "New Hires",
        dataend,
      ],
    },
    set639: {
      url639:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&education=E2",
      arrayformat639: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Education",
        "E2",
        "High school or equivalent, no college" + ",",
        "New Hires",
        dataend,
      ],
    },
    set640: {
      url640:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&education=E2",
      arrayformat640: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Education",
        "E2",
        "High school or equivalent, no college" + ",",
        "New Hires",
        dataend,
      ],
    },
    set641: {
      url641:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&education=E2",
      arrayformat641: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Education",
        "E2",
        "High school or equivalent, no college" + ",",
        "New Hires",
        dataend,
      ],
    },

    set642: {
      url642:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&education=E3",
      arrayformat642: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Education",
        "E3",
        "Some college or Associate degree" + ",",
        "New Hires",
        dataend,
      ],
    },
    set643: {
      url643:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&education=E3",
      arrayformat643: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Education",
        "E3",
        "Some college or Associate degree" + ",",
        "New Hires",
        dataend,
      ],
    },
    set644: {
      url644:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&education=E3",
      arrayformat644: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Education",
        "E3",
        "Some college or Associate degree" + ",",
        "New Hires",
        dataend,
      ],
    },
    set645: {
      url645:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&education=E3",
      arrayformat645: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Education",
        "E3",
        "Some college or Associate degree" + ",",
        "New Hires",
        dataend,
      ],
    },

    set646: {
      url646:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&education=E4",
      arrayformat646: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland New Hires by Education",
        "E4",
        "Bachelor's degree or advanced degree" + ",",
        "New Hires",
        dataend,
      ],
    },
    set647: {
      url647:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&education=E4",
      arrayformat647: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland New Hires by Education",
        "E4",
        "Bachelor's degree or advanced degree" + ",",
        "New Hires",
        dataend,
      ],
    },
    set648: {
      url648:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&education=E4",
      arrayformat648: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland New Hires by Education",
        "E4",
        "Bachelor's degree or advanced degree" + ",",
        "New Hires",
        dataend,
      ],
    },
    set649: {
      url649:
        "https://api.census.gov/data/timeseries/qwi/se?get=HirAfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&education=E4",
      arrayformat649: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland New Hires by Education",
        "E4",
        "Bachelor's degree or advanced degree" + ",",
        "New Hires",
        dataend,
      ],
    },

    set650: {
      url650:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&education=E1",
      arrayformat650: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Education",
        "E1",
        "Less than High School" + ",",
        "Turnover",
        dataend,
      ],
    },
    set651: {
      url651:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&education=E1",
      arrayformat651: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Education",
        "E1",
        "Less than High School" + ",",
        "Turnover",
        dataend,
      ],
    },
    set652: {
      url652:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&education=E1",
      arrayformat652: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Education",
        "E1",
        "Less than High School" + ",",
        "Turnover",
        dataend,
      ],
    },
    set653: {
      url653:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&education=E1",
      arrayformat653: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Education",
        "E1",
        "Less than High School" + ",",
        "Turnover",
        dataend,
      ],
    },

    set654: {
      url654:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&education=E2",
      arrayformat654: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Education",
        "E2",
        "High school or equivalent, no college" + ",",
        "Turnover",
        dataend,
      ],
    },
    set655: {
      url655:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&education=E2",
      arrayformat655: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Education",
        "E2",
        "High school or equivalent, no college" + ",",
        "Turnover",
        dataend,
      ],
    },
    set656: {
      url656:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&education=E2",
      arrayformat656: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Education",
        "E2",
        "High school or equivalent, no college" + ",",
        "Turnover",
        dataend,
      ],
    },
    set657: {
      url657:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&education=E2",
      arrayformat657: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Education",
        "E2",
        "High school or equivalent, no college" + ",",
        "Turnover",
        dataend,
      ],
    },

    set658: {
      url658:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&education=E3",
      arrayformat658: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Education",
        "E3",
        "Some college or Associate degree" + ",",
        "Turnover",
        dataend,
      ],
    },
    set659: {
      url659:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&education=E3",
      arrayformat659: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Education",
        "E3",
        "Some college or Associate degree" + ",",
        "Turnover",
        dataend,
      ],
    },
    set660: {
      url660:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&education=E3",
      arrayformat660: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Education",
        "E3",
        "Some college or Associate degree" + ",",
        "Turnover",
        dataend,
      ],
    },
    set661: {
      url661:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&education=E3",
      arrayformat661: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Education",
        "E3",
        "Some college or Associate degree" + ",",
        "Turnover",
        dataend,
      ],
    },

    set662: {
      url662:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&education=E4",
      arrayformat662: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Education",
        "E4",
        "Bachelor's degree or advanced degree" + ",",
        "Turnover",
        dataend,
      ],
    },
    set663: {
      url663:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&education=E4",
      arrayformat663: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Education",
        "E4",
        "Bachelor's degree or advanced degree" + ",",
        "Turnover",
        dataend,
      ],
    },
    set664: {
      url664:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&education=E4",
      arrayformat664: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Education",
        "E4",
        "Bachelor's degree or advanced degree" + ",",
        "Turnover",
        dataend,
      ],
    },
    set665: {
      url665:
        "https://api.census.gov/data/timeseries/qwi/se?get=TurnOvrSfor=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&education=E4",
      arrayformat665: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Education",
        "E4",
        "Bachelor's degree or advanced degree" + ",",
        "Turnover",
        dataend,
      ],
    },

    set666: {
      url666:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&sex=1",
      arrayformat666: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Net Change by Gender",
        "1",
        "Male" + ",",
        "Job Change",
        dataend,
      ],
    },
    set667: {
      url667:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&sex=1",
      arrayformat667: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Net Change by Gender",
        "1",
        "Male" + ",",
        "Job Change",
        dataend,
      ],
    },
    set668: {
      url668:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&sex=1",
      arrayformat668: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Net Change by Gender",
        "1",
        "Male" + ",",
        "Job Change",
        dataend,
      ],
    },
    set669: {
      url669:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&sex=1",
      arrayformat669: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Net Change by Gender",
        "1",
        "Male" + ",",
        "Job Change",
        dataend,
      ],
    },

    set670: {
      url670:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&sex=2",
      arrayformat670: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Gender",
        "2",
        "Female" + ",",
        "Job Change",
        dataend,
      ],
    },
    set671: {
      url671:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&sex=2",
      arrayformat671: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Gender",
        "2",
        "Female" + ",",
        "Job Change",
        dataend,
      ],
    },
    set672: {
      url672:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&sex=2",
      arrayformat672: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Gender",
        "2",
        "Female" + ",",
        "Job Change",
        dataend,
      ],
    },
    set673: {
      url673:
        "https://api.census.gov/data/timeseries/qwi/sa?get=FrmJbC&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&sex=2",
      arrayformat673: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Gender",
        "2",
        "Female" + ",",
        "Job Change",
        dataend,
      ],
    },

    set674: {
      url674:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&sex=1",
      arrayformat674: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Gender",
        "1",
        "Male" + ",",
        "Turnover",
        dataend,
      ],
    },
    set675: {
      url675:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&sex=1",
      arrayformat675: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Gender",
        "1",
        "Male" + ",",
        "Turnover",
        dataend,
      ],
    },
    set676: {
      url676:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&sex=1",
      arrayformat676: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Gender",
        "1",
        "Male" + ",",
        "Turnover",
        dataend,
      ],
    },
    set677: {
      url677:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&sex=1",
      arrayformat677: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Gender",
        "1",
        "Male" + ",",
        "Turnover",
        dataend,
      ],
    },

    set678: {
      url678:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q1" +
        "&sex=2",
      arrayformat678: [
        "Maryland",
        yearAPIfunction + "Q1",
        "Maryland Turnover Rate by Gender",
        "2",
        "Female" + ",",
        "Turnover",
        dataend,
      ],
    },
    set679: {
      url679:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q2" +
        "&sex=2",
      arrayformat679: [
        "Maryland",
        yearAPIfunction + "Q2",
        "Maryland Turnover Rate by Gender",
        "2",
        "Female" + ",",
        "Turnover",
        dataend,
      ],
    },
    set680: {
      url680:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q3" +
        "&sex=2",
      arrayformat680: [
        "Maryland",
        yearAPIfunction + "Q3",
        "Maryland Turnover Rate by Gender",
        "2",
        "Female" + ",",
        "Turnover",
        dataend,
      ],
    },
    set681: {
      url681:
        "https://api.census.gov/data/timeseries/qwi/sa?get=TurnOvrS&for=state:24&time=" +
        yearAPIfunction +
        "-" +
        "Q4" +
        "&sex=2",
      arrayformat681: [
        "Maryland",
        yearAPIfunction + "Q4",
        "Maryland Turnover Rate by Gender",
        "2",
        "Female" + ",",
        "Turnover",
        dataend,
      ],
    },

    set682: {
      url682:
        "https://api.census.gov/data/2019/acs/acs5?get=NAME,C18120_005E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat682: [
        "Maryland",
        "2019",
        "Employment Status By Disability Status",
        "Non " + ",",
        "Employed" + ",",
        dataend,
      ],
    },

    set683: {
      url683:
        "https://api.census.gov/data/2019/acs/acs5?get=NAME,C18120_005E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
      arrayformat683: [
        "Maryland",
        "2019",
        "Employment Status By Disability Status",
        "Non " + ",",
        "Labor Force" + ",",
        dataWDisem2019 + dataWDisem2019,
      ],
    },
  },
}; // end of the object for the library
