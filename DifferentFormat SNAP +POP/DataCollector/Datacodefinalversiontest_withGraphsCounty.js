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

  ["2015Q1,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,45,",,,,,"],
  ["2015Q2,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,52,",,,,,"],
  ["2015Q3,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,90,",,,,,"],
  ["2015Q4,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,79,",,,,,"],
  ["2015Q1,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2015Q2,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2015Q3,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2015Q4,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2015Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.329597891,",",0.329597891/100,",,,,,"],
  ["2015Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.284951666,",",0.284951666/100,",,,,,"],
  ["2015Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.3295978905735,",",0.3295978905735/100,",,,,,"],
  ["2015Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.284951666,",",0.284951666/100,",,,,,"],

  ["2016Q1,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,69,",,,,,"],
  ["2016Q2,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,60,",,,,,"],
  ["2016Q3,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,90,",,,,,"],
  ["2016Q4,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,79,",,,,,"],
  ["2016Q1,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2016Q2,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2016Q3,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2016Q4,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2016Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.258630383447655,",",0.258630383447655/100,",,,,,"],
  ["2016Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.217155266015201,",",0.217155266015201/100,",,,,,"],
  ["2016Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.22893434753711,",",0.22893434753711/100,",,,,,"],
  ["2016Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.245438053569523,",",0.245438053569523/100,",,,,,"],
  ["2016Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.917431193,",",0.917431193/100,",",,",",",,,,"],

  ["2017Q1,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,69,",,,,,"],
  ["2017Q2,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,60,",,,,,"],
  ["2017Q3,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,62,",,,,,"],
  ["2017Q4,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,69,",,,,,"],
  ["2017Q1,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2017Q2,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2017Q3,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2017Q4,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2017Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.13134193935755,",",0.13134193935755/100,",,,,,"],
  ["2017Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.160666033739867,",",0.160666033739867/100,",,,,,"],
  ["2017Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.176247797,",",0.176247797/100,",,,,,"],
  ["2017Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.158006248,",",0.158006248/100,",,,,,"],
  ["2017Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",1.47601476,",",1.47601476/100,",",,",",",,,,"],
  ["2017Q2,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.711743772,",",0.711743772/100,",",,",",",,,,"],
  ["2017Q3,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.46728972,",",0.46728972/100,",",,",",",,,,"],
  ["2017Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",1.290322581,",",1.290322581/100,",",,",",",,,,"],

  ["2018Q1,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,35,",,,,,"],
  ["2018Q2,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,44,",,,,,"],
  ["2018Q3,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,47,",,,,,"],
  ["2018Q4,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,44,",,,,,"],
  ["2018Q1,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,4,",,,,,"],
  ["2018Q2,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2018Q3,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2018Q4,","TANF Participants in Workforce Service "+",,,"+"\"Allegany County, Maryland\"",",",,"S",",,,,,"],
  ["2018Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.168312388,",",0.168312388/100,",,,,,"],
  ["2018Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.190002923,",",0.190002923/100,",,,,,"],
  ["2018Q3,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.213243134,",",0.213243134/100,",,,,,"],
  ["2018Q4,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.167372957,",",0.167372957/100,",,,,,"],
  ["2018Q1,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.909090909,",",0.909090909/100,",",,",",",,,,"],
  ["2018Q2,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.64516129,",",0.64516129/100,",",,",",",,,,"],
  ["2018Q4,","Percent of Workforce Service participants in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",2.222222222,",",2.222222222/100,",",,",",",,,,"],

  ["2019Q1,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,45,",,,,,"],
  ["2019Q2,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,52,",,,,,"],
  ["2019Q3,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,58,",,,,,"],
  ["2019Q4,","TANF Workers"+",,,"+"\"Allegany County, Maryland\"",",",,47,",,,,,"],
  ["2019Q1,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.15326789,",",0.15326789/100,",,,,,"],
  ["2019Q2,","Percent of Workers in TANF (%)"+",,,"+"\"Allegany County, Maryland\"",",",0.225588141,",",0.225588141/100,",,,,,"],




  ["2016,","SNAP Recipient Workers"+",,,"+"\"Allegany County, Maryland\"",",",,5093,",,,,,"],
  ["2017,","SNAP Recipient Workers"+",,,"+"\"Allegany County, Maryland\"",",",,5017,",,,,,"],
  ["2018,","SNAP Recipient Workers"+",,,"+"\"Allegany County, Maryland\"",",",,5006,",,,,,"],


  ["2015,","SNAP Recipient Workers by Percentage"+",,,"+"\"Allegany County, Maryland\"",",",,0.0185,",",1.85,",,,,"],
  ["2016,","SNAP Recipient Workers by Percentage"+",,,"+"\"Allegany County, Maryland\"",",",,0.0185,",",1.85,",,,,"],
  ["2017,","SNAP Recipient Workers by Percentage"+",,,"+"\"Allegany County, Maryland\"",",",,0.0185,",",1.85,",,,,"],
  ["2018,","SNAP Recipient Workers by Percentage"+",,,"+"\"Allegany County, Maryland\"",",",,0.0185,",",1.85,",,,,"],


  ["2015,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Allegany County, Maryland\"",",",2597,",,,,"],
  ["2016,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Allegany County, Maryland\"",",",2569,",,,,"],
  ["2017,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Allegany County, Maryland\"",",",2632,",,,,"],
  ["2018,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Allegany County, Maryland\"",",",2604,",,,,"],
  ["2019,","Employment Status By Disability Status,","Labor Force,","Disabled,","\"Allegany County, Maryland\"",",",2645,",,,,"],

  ["2015,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Allegany County, Maryland\"",",",28656,",,,,"],
  ["2016,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Allegany County, Maryland\"",",",27995,",,,,"],
  ["2017,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Allegany County, Maryland\"",",",27162,",,,,"],
  ["2018,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Allegany County, Maryland\"",",",26986,",,,,"],
  ["2019,","Employment Status By Disability Status,","Labor Force,","Non Disabled,","\"Allegany County, Maryland\"",",",26044,",,,,"],

["2019,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Allegany County, Maryland\"",",",2849,",,,,"],
["2018,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Allegany County, Maryland\"",",",3113,",,,,"],
["2017,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Allegany County, Maryland\"",",",3254,",,,,"],
["2016,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Allegany County, Maryland\"",",",3597,",,,,"],
["2015,","Employment Status By Poverty Status,","Labor Force,","Below Poverty,","\"Allegany County, Maryland\"",",",3827,",,,,"],

  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Allegany County, Maryland\"",",",,5324,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Anne Arundel County, Maryland\"",",",,94044,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Baltimore City, Maryland\"",",",,79449,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Baltimore County, Maryland\"",",",,139939,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Calvert County, Maryland\"",",",,12567,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Caroline County, Maryland\"",",",,2684,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Carroll County, Maryland\"",",",,27380,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Cecil County, Maryland\"",",",,10517,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Charles County, Maryland\"",",",,19731,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Dorchester County, Maryland\"",",",,2696,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Frederick County, Maryland\"",",",,43189,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Garrett County, Maryland\"",",",,2528,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Harford County, Maryland\"",",",,38771,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Howard County, Maryland\"",",",,85009,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Kent County, Maryland\"",",",,2337,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Montgomery County, Maryland\"",",",,266958,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Prince Georges County, Maryland\"",",",,126011,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Queen Annes County, Maryland\"",",",,6306,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Somerset County, Maryland\"",",",,1306,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"St Marys County, Maryland\"",",",,13607,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Talbot County, Maryland\"",",",,4745,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Washington County, Maryland\"",",",,13976,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Wicomico County, Maryland\"",",",,10968,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Worcester County, Maryland\"",",",,6044,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Bachelor's degree or higher,","\"Maryland\"",",",1016086,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Allegany County, Maryland\"",",",,9378,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Anne Arundel County, Maryland\"",",",,52699,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Baltimore City, Maryland\"",",",,60489,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Baltimore County, Maryland\"",",",,78423,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Calvert County, Maryland\"",",",,12066,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Caroline County, Maryland\"",",",,5158,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Carroll County, Maryland\"",",",,19961,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Cecil County, Maryland\"",",",,14140,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Charles County, Maryland\"",",",,17667,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Dorchester County, Maryland\"",",",,4606,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Frederick County, Maryland\"",",",,24671,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Garrett County, Maryland\"",",",,4490,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Harford County, Maryland\"",",",,26697,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Howard County, Maryland\"",",",,15184,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Kent County, Maryland\"",",",,2341,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Montgomery County, Maryland\"",",",,53083,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Prince Georges County, Maryland\"",",",,96460,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Queen Annes County, Maryland\"",",",,6123,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Somerset County, Maryland\"",",",,2972,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"St Marys County, Maryland\"",",",,12118,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Talbot County, Maryland\"",",",,4076,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Washington County, Maryland\"",",",,20345,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Wicomico County, Maryland\"",",",,11597,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Worcester County, Maryland\"",",",,6101,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,High school graduate (includes equivalency),","\"Maryland\"",",",560845,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Allegany County, Maryland\"",",",,1014,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Anne Arundel County, Maryland\"",",",,12486,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Baltimore City, Maryland\"",",",,23939,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Baltimore County, Maryland\"",",",,19519,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Calvert County, Maryland\"",",",,1753,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Caroline County, Maryland\"",",",,1549,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Carroll County, Maryland\"",",",,3413,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Cecil County, Maryland\"",",",,2782,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Charles County, Maryland\"",",",,2984,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Dorchester County, Maryland\"",",",,1495,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Frederick County, Maryland\"",",",,4828,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Garrett County, Maryland\"",",",,1067,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Harford County, Maryland\"",",",,4188,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Howard County, Maryland\"",",",,3579,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Kent County, Maryland\"",",",,713,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Montgomery County, Maryland\"",",",,32350,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Prince Georges County, Maryland\"",",",,43374,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Queen Annes County, Maryland\"",",",,1118,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Somerset County, Maryland\"",",",,599,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"St Marys County, Maryland\"",",",,2427,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Talbot County, Maryland\"",",",,1335,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Washington County, Maryland\"",",",,4660,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Wicomico County, Maryland\"",",",,2917,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Worcester County, Maryland\"",",",,1179,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Less than high school graduate,","\"Maryland\"",",",175268,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Allegany County, Maryland\"",",",,7954,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Anne Arundel County, Maryland\"",",",,67828,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Baltimore City, Maryland\"",",",,59337,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Baltimore County, Maryland\"",",",,99020,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Calvert County, Maryland\"",",",,11265,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Caroline County, Maryland\"",",",,3961,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Carroll County, Maryland\"",",",,21627,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Cecil County, Maryland\"",",",,13072,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Charles County, Maryland\"",",",,23272,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Dorchester County, Maryland\"",",",,3823,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Frederick County, Maryland\"",",",,30291,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Garrett County, Maryland\"",",",,3352,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Harford County, Maryland\"",",",,35016,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Howard County, Maryland\"",",",,27631,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Kent County, Maryland\"",",",,2022,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Montgomery County, Maryland\"",",",,86746,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Prince Georges County, Maryland\"",",",,112377,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Queen Annes County, Maryland\"",",",,6515,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Somerset County, Maryland\"",",",,1896,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"St Marys County, Maryland\"",",",,12953,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Talbot County, Maryland\"",",",,4684,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Washington County, Maryland\"",",",,18664,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Wicomico County, Maryland\"",",",,11185,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Worcester County, Maryland\"",",",,6394,",,,,,"],
  ["2007-2011,","Employment Status by Education,Employed,Some college or associate's degree,","\"Maryland\"",",",670885,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Allegany County, Maryland\"",",",,1283,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Anne Arundel County, Maryland\"",",",,14161,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Baltimore City, Maryland\"",",",,10929,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Baltimore County, Maryland\"",",",,18358,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Calvert County, Maryland\"",",",,1758,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Caroline County, Maryland\"",",",,224,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Carroll County, Maryland\"",",",,3582,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Cecil County, Maryland\"",",",,1355,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Charles County, Maryland\"",",",,1951,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Dorchester County, Maryland\"",",",,275,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Frederick County, Maryland\"",",",,5764,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Garrett County, Maryland\"",",",,363,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Harford County, Maryland\"",",",,4671,",,,",,,0.010084,",",1.00],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Howard County, Maryland\"",",",,11174,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Kent County, Maryland\"",",",,465,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Montgomery County, Maryland\"",",",,35577,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Prince Georges County, Maryland\"",",",,12580,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Queen Annes County, Maryland\"",",",,1074,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Somerset County, Maryland\"",",",,470,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"St Marys County, Maryland\"",",",,2121,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Talbot County, Maryland\"",",",,983,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Washington County, Maryland\"",",",,1957,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Wicomico County, Maryland\"",",",,1622,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Bachelor's degree or higher,","\"Worcester County, Maryland\"",",",,1392,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Allegany County, Maryland\"",",",,5596,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Anne Arundel County, Maryland\"",",",,15976,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Baltimore City, Maryland\"",",",,29676,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Baltimore County, Maryland\"",",",,23123,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Calvert County, Maryland\"",",",,3024,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Caroline County, Maryland\"",",",,1398,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Carroll County, Maryland\"",",",,5031,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Cecil County, Maryland\"",",",,4608,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Charles County, Maryland\"",",",,4687,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Dorchester County, Maryland\"",",",,1542,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Frederick County, Maryland\"",",",,5931,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Garrett County, Maryland\"",",",,1960,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Harford County, Maryland\"",",",,8138,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Howard County, Maryland\"",",",,4801,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Kent County, Maryland\"",",",,624,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Montgomery County, Maryland\"",",",,12612,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Prince Georges County, Maryland\"",",",,21144,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Queen Annes County, Maryland\"",",",,1487,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Somerset County, Maryland\"",",",,2972,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"St Marys County, Maryland\"",",",,4026,",,,",,,0.001152,",",0.12],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Talbot County, Maryland\"",",",,923,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Washington County, Maryland\"",",",,7131,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Wicomico County, Maryland\"",",",,3303,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,High school graduate (includes equivalency),","\"Worcester County, Maryland\"",",",,2189,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Allegany County, Maryland\"",",",,2604,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Anne Arundel County, Maryland\"",",",,8637,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Baltimore City, Maryland\"",",",,28122,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Baltimore County, Maryland\"",",",,11308,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Calvert County, Maryland\"",",",,955,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Caroline County, Maryland\"",",",,883,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Carroll County, Maryland\"",",",,1909,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Cecil County, Maryland\"",",",,2502,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Charles County, Maryland\"",",",,1690,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Dorchester County, Maryland\"",",",,906,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Frederick County, Maryland\"",",",,2450,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Garrett County, Maryland\"",",",,805,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Harford County, Maryland\"",",",,2662,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Howard County, Maryland\"",",",,2452,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Kent County, Maryland\"",",",,358,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Montgomery County, Maryland\"",",",,9017,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Prince Georges County, Maryland\"",",",,12673,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Queen Annes County, Maryland\"",",",,633,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Somerset County, Maryland\"",",",,1460,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"St Marys County, Maryland\"",",",,1533,",,,",,,0.001414,",",0.14],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Talbot County, Maryland\"",",",,523,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Washington County, Maryland\"",",",,4438,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Wicomico County, Maryland\"",",",,1974,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Less than high school graduate,","\"Worcester County, Maryland\"",",",,810,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Allegany County, Maryland\"",",",,3078,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Anne Arundel County, Maryland\"",",",,14564,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Baltimore City, Maryland\"",",",,17141,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Baltimore County, Maryland\"",",",,17320,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Calvert County, Maryland\"",",",,2614,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Caroline County, Maryland\"",",",,759,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Carroll County, Maryland\"",",",,4322,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Cecil County, Maryland\"",",",,2848,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Charles County, Maryland\"",",",,4207,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Dorchester County, Maryland\"",",",,644,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Frederick County, Maryland\"",",",,5631,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Garrett County, Maryland\"",",",,774,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Harford County, Maryland\"",",",,6533,",,,",,,0.008026,",",0.80],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Howard County, Maryland\"",",",,5321,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Kent County, Maryland\"",",",,470,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Montgomery County, Maryland\"",",",,16633,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Prince Georges County, Maryland\"",",",,18106,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Queen Annes County, Maryland\"",",",,1116,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Somerset County, Maryland\"",",",,1144,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"St Marys County, Maryland\"",",",,2740,,,0.00139,0.14],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Talbot County, Maryland\"",",",,874,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Washington County, Maryland\"",",",,4615,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Wicomico County, Maryland\"",",",,2374,",,,,,"],
  ["2007-2011,","Employment Status by Education,NIL,Some college or associate's degree,","\"Worcester County, Maryland\"",",",,1233,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Allegany County, Maryland\"",",",,118,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Anne Arundel County, Maryland\"",",",,2571,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Baltimore City, Maryland\"",",",,2685,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Baltimore County, Maryland\"",",",,4411,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Calvert County, Maryland\"",",",,318,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Caroline County, Maryland\"",",",,74,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Carroll County, Maryland\"",",",,366,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Cecil County, Maryland\"",",",,254,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Charles County, Maryland\"",",",,422,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Dorchester County, Maryland\"",",",,145,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Frederick County, Maryland\"",",",,1103,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Garrett County, Maryland\"",",",,87,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Harford County, Maryland\"",",",,983,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Howard County, Maryland\"",",",,2285,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Kent County, Maryland\"",",",,54,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Montgomery County, Maryland\"",",",,8831,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Prince Georges County, Maryland\"",",",,4893,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Queen Annes County, Maryland\"",",",,282,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Somerset County, Maryland\"",",",,58,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"St Marys County, Maryland\"",",",,174,",,,",0.001592,",",0.16],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Talbot County, Maryland\"",",",,94,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Washington County, Maryland\"",",",,358,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Wicomico County, Maryland\"",",",,351,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Bachelor's degree or higher,","\"Worcester County, Maryland\"",",",,200,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Allegany County, Maryland\"",",",,852,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Anne Arundel County, Maryland\"",",",,3831,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Baltimore City, Maryland\"",",",,9639,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Baltimore County, Maryland\"",",",,7088,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Calvert County, Maryland\"",",",,655,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Caroline County, Maryland\"",",",,307,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Carroll County, Maryland\"",",",,1031,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Cecil County, Maryland\"",",",,1326,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Charles County, Maryland\"",",",,1344,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Dorchester County, Maryland\"",",",,442,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Frederick County, Maryland\"",",",,1227,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Garrett County, Maryland\"",",",,298,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Harford County, Maryland\"",",",,1724,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Howard County, Maryland\"",",",,1085,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Kent County, Maryland\"",",",,139,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Montgomery County, Maryland\"",",",,4235,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Prince Georges County, Maryland\"",",",,9171,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Queen Annes County, Maryland\"",",",,209,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Somerset County, Maryland\"",",",,251,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"St Marys County, Maryland\"",",",,775,",,,",0,",",0.00],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Talbot County, Maryland\"",",",,291,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Washington County, Maryland\"",",",,1569,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Wicomico County, Maryland\"",",",,1246,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,High school graduate (includes equivalency),","\"Worcester County, Maryland\"",",",,512,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Allegany County, Maryland\"",",",,140,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Anne Arundel County, Maryland\"",",",,1596,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Baltimore City, Maryland\"",",",,6838,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Baltimore County, Maryland\"",",",,2606,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Calvert County, Maryland\"",",",,162,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Caroline County, Maryland\"",",",,197,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Carroll County, Maryland\"",",",,410,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Cecil County, Maryland\"",",",,427,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Charles County, Maryland\"",",",,395,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Dorchester County, Maryland\"",",",,215,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Frederick County, Maryland\"",",",,554,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Garrett County, Maryland\"",",",,72,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Harford County, Maryland\"",",",,978,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Howard County, Maryland\"",",",,354,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Kent County, Maryland\"",",",,78,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Montgomery County, Maryland\"",",",,3616,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Prince Georges County, Maryland\"",",",,5667,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Queen Annes County, Maryland\"",",",,303,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Somerset County, Maryland\"",",",,66,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"St Marys County, Maryland\"",",",,398,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Talbot County, Maryland\"",",",,162,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Washington County, Maryland\"",",",,630,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Wicomico County, Maryland\"",",",,697,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Less than high school graduate,","\"Worcester County, Maryland\"",",",,87,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Allegany County, Maryland\"",",",,730,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Anne Arundel County, Maryland\"",",",,3307,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Baltimore City, Maryland\"",",",,5778,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Baltimore County, Maryland\"",",",,5564,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Calvert County, Maryland\"",",",,554,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Caroline County, Maryland\"",",",,285,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Carroll County, Maryland\"",",",,645,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Cecil County, Maryland\"",",",,721,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Charles County, Maryland\"",",",,802,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Dorchester County, Maryland\"",",",,391,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Frederick County, Maryland\"",",",,1614,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Garrett County, Maryland\"",",",,95,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Harford County, Maryland\"",",",,1807,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Howard County, Maryland\"",",",,1103,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Kent County, Maryland\"",",",,109,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Montgomery County, Maryland\"",",",,5026,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Prince Georges County, Maryland\"",",",,7270,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Queen Annes County, Maryland\"",",",,364,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Somerset County, Maryland\"",",",,98,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"St Marys County, Maryland\"",",",,274,",,",,,0,",",0.00],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Talbot County, Maryland\"",",",,279,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Washington County, Maryland\"",",",,1324,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Wicomico County, Maryland\"",",",,793,",,,,,"],
  ["2007-2011,","Employment Status by Education,Unemployed,Some college or associate's degree,","\"Worcester County, Maryland\"",",",,559,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Allegany County, Maryland\"",",",,28395,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Anne Arundel County, Maryland\"",",",,265213,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Baltimore City, Maryland\"",",",,247569,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Baltimore County, Maryland\"",",",,392561,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Calvert County, Maryland\"",",",,44424,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Caroline County, Maryland\"",",",,15366,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Carroll County, Maryland\"",",",,84638,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Cecil County, Maryland\"",",",,47197,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Charles County, Maryland\"",",",,72587,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Dorchester County, Maryland\"",",",,14304,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Frederick County, Maryland\"",",",,118819,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Garrett County, Maryland\"",",",,13449,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Harford County, Maryland\"",",",,121976,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Howard County, Maryland\"",",",,149824,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Kent County, Maryland\"",",",,8696,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Montgomery County, Maryland\"",",",,500452,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Prince Georges County, Maryland\"",",",,432355,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Queen Annes County, Maryland\"",",",,23393,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Somerset County, Maryland\"",",",,7872,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"St Marys County, Maryland\"",",",,48422,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Talbot County, Maryland\"",",",,17369,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Washington County, Maryland\"",",",,66866,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Wicomico County, Maryland\"",",",,42932,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Worcester County, Maryland\"",",",,22666,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Above Poverty,","\"Maryland\"",",",2787345,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Allegany County, Maryland\"",",",,2376,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Anne Arundel County, Maryland\"",",",,6408,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Baltimore City, Maryland\"",",",,22061,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Baltimore County, Maryland\"",",",,14820,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Calvert County, Maryland\"",",",,816,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Caroline County, Maryland\"",",",,646,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Carroll County, Maryland\"",",",,1843,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Cecil County, Maryland\"",",",,1991,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Charles County, Maryland\"",",",,2014,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Dorchester County, Maryland\"",",",,816,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Frederick County, Maryland\"",",",,2636,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Garrett County, Maryland\"",",",,721,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Harford County, Maryland\"",",",,3037,",,",,0.001264,",",0.13,],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Howard County, Maryland\"",",",,2691,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Kent County, Maryland\"",",",,618,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Montgomery County, Maryland\"",",",,16256,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Prince Georges County, Maryland\"",",",,17741,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Queen Annes County, Maryland\"",",",,712,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Somerset County, Maryland\"",",",,823,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"St Marys County, Maryland\"",",",,1782,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Talbot County, Maryland\"",",",,730,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Washington County, Maryland\"",",",,3584,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Wicomico County, Maryland\"",",",,3402,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Worcester County, Maryland\"",",",,1215,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Employed,Below Poverty,","\"Maryland\"",",",109739,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Allegany County, Maryland\"",",",,30205,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Anne Arundel County, Maryland\"",",",,279828,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Baltimore City, Maryland\"",",",,271813,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Baltimore County, Maryland\"",",",,416201,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Calvert County, Maryland\"",",",,46633,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Caroline County, Maryland\"",",",,16410,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Carroll County, Maryland\"",",",,87624,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Cecil County, Maryland\"",",",,50382,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Charles County, Maryland\"",",",,77350,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Dorchester County, Maryland\"",",",,15682,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Frederick County, Maryland\"",",",,124770,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Garrett County, Maryland\"",",",,14086,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Harford County, Maryland\"",",",,129071,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Howard County, Maryland\"",",",,155937,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Kent County, Maryland\"",",",,9158,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Montgomery County, Maryland\"",",",,525616,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Prince Georges County, Maryland\"",",",,466935,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Queen Annes County, Maryland\"",",",,24879,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Somerset County, Maryland\"",",",,8408,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"St Marys County, Maryland\"",",",,50345,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Talbot County, Maryland\"",",",,18477,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Washington County, Maryland\"",",",,71231,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Wicomico County, Maryland\"",",",,45909,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Worcester County, Maryland\"",",",,24209,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Above Poverty,","\"Maryland\"",",",2961159,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Allegany County, Maryland\"",",",,3211,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Anne Arundel County, Maryland\"",",",,9176,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Baltimore City, Maryland\"",",",,36590,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Baltimore County, Maryland\"",",",,21191,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Calvert County, Maryland\"",",",,1161,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Caroline County, Maryland\"",",",,924,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Carroll County, Maryland\"",",",,2516,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Cecil County, Maryland\"",",",,2934,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Charles County, Maryland\"",",",,2689,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Dorchester County, Maryland\"",",",,1522,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Frederick County, Maryland\"",",",,3826,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Garrett County, Maryland\"",",",,928,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Harford County, Maryland\"",",",,4318,",",,0.001414,",",0.14],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Howard County, Maryland\"",",",,3874,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Kent County, Maryland\"",",",,804,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Montgomery County, Maryland\"",",",,22553,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Prince Georges County, Maryland\"",",",,26534,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Queen Annes County, Maryland\"",",",,956,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Somerset County, Maryland\"",",",,1048,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"St Marys County, Maryland\"",",",,2339,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Talbot County, Maryland\"",",",,924,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Washington County, Maryland\"",",",,4896,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Wicomico County, Maryland\"",",",,5269,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Worcester County, Maryland\"",",",,1728,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Labor Force,Below Poverty,","\"Maryland\"",",",161911,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Allegany County, Maryland\"",",",,1810,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Anne Arundel County, Maryland\"",",",,14615,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Baltimore City, Maryland\"",",",,24244,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Baltimore County, Maryland\"",",",,23640,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Calvert County, Maryland\"",",",,2209,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Caroline County, Maryland\"",",",,1044,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Carroll County, Maryland\"",",",,2986,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Cecil County, Maryland\"",",",,3185,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Charles County, Maryland\"",",",,4763,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Dorchester County, Maryland\"",",",,1378,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Frederick County, Maryland\"",",",,5951,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Garrett County, Maryland\"",",",,637,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Harford County, Maryland\"",",",,7095,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Howard County, Maryland\"",",",,6113,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Kent County, Maryland\"",",",,462,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Montgomery County, Maryland\"",",",,25164,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Prince Georges County, Maryland\"",",",,34580,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Queen Annes County, Maryland\"",",",,1486,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Somerset County, Maryland\"",",",,536,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"St Marys County, Maryland\"",",",,1923,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Talbot County, Maryland\"",",",,1108,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Washington County, Maryland\"",",",,4365,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Wicomico County, Maryland\"",",",,2977,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Worcester County, Maryland\"",",",,1543,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Above Poverty,","\"Maryland\"",",",173814,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Allegany County, Maryland\"",",",,835,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Anne Arundel County, Maryland\"",",",,2768,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Baltimore City, Maryland\"",",",,14529,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Baltimore County, Maryland\"",",",,6371,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Calvert County, Maryland\"",",",,345,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Caroline County, Maryland\"",",",,278,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Carroll County, Maryland\"",",",,673,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Cecil County, Maryland\"",",",,943,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Charles County, Maryland\"",",",,675,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Dorchester County, Maryland\"",",",,706,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Frederick County, Maryland\"",",",,1190,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Garrett County, Maryland\"",",",,207,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Harford County, Maryland\"",",",,1281,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Howard County, Maryland\"",",",,1183,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Kent County, Maryland\"",",",,186,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Montgomery County, Maryland\"",",",,6297,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Prince Georges County, Maryland\"",",",,8793,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Queen Annes County, Maryland\"",",",,244,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Somerset County, Maryland\"",",",,225,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"St Marys County, Maryland\"",",",,557,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Talbot County, Maryland\"",",",,194,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Washington County, Maryland\"",",",,1312,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Wicomico County, Maryland\"",",",,1867,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Worcester County, Maryland\"",",",,513,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployed,Below Poverty,","\"Maryland\"",",",52172,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Allegany County, Maryland\"",",",,26,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Anne Arundel County, Maryland\"",",",,30.17,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Baltimore City, Maryland\"",",",,39.71,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Baltimore County, Maryland\"",",",,30.06,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Calvert County, Maryland\"",",",,29.72,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Caroline County, Maryland\"",",",,30.09,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Carroll County, Maryland\"",",",,26.75,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Cecil County, Maryland\"",",",,32.14,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Charles County, Maryland\"",",",,25.1,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Dorchester County, Maryland\"",",",,46.39,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Frederick County, Maryland\"",",",,31.1,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Garrett County, Maryland\"",",",,22.31,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Harford County, Maryland\"",",",,29.67,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Howard County, Maryland\"",",",,30.54,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Kent County, Maryland\"",",",,23.13,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Montgomery County, Maryland\"",",",,27.92,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Prince Georges County, Maryland\"",",",,33.14,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Queen Annes County, Maryland\"",",",,25.52,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Somerset County, Maryland\"",",",,21.47,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"St Marys County, Maryland\"",",",,23.81,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Talbot County, Maryland\"",",",,21,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Washington County, Maryland\"",",",,26.8,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Wicomico County, Maryland\"",",",,35.43,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Worcester County, Maryland\"",",",,29.69,",,,,,"],
  ["2007-2011,","Employment Status By Poverty Status,Unemployment Rate,Below Poverty,","\"Maryland\"",",",32.22,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Anne Arundel County, Maryland\"",",",,85690,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Baltimore City, Maryland\"",",",,40100,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Baltimore County, Maryland\"",",",,65411,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Calvert County, Maryland\"",",",,92981,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Caroline County, Maryland\"",",",,61021,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Carroll County, Maryland\"",",",,83325,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Cecil County, Maryland\"",",",,66903,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Charles County, Maryland\"",",",,92135,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Dorchester County, Maryland\"",",",,46683,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Frederick County, Maryland\"",",",,82668,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Garrett County, Maryland\"",",",,45280,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Harford County, Maryland\"",",",,79953,",,",,0.001347,",",0.13],
  ["2007-2011,","Median Household Income,,,","\"Howard County, Maryland\"",",",,105692,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Kent County, Maryland\"",",",,53480,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Montgomery County, Maryland\"",",",,95660,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Prince Georges County, Maryland\"",",",,73447,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Queen Annes County, Maryland\"",",",,84483,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Somerset County, Maryland\"",",",,41420,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"St Marys County, Maryland\"",",",,82529,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Talbot County, Maryland\"",",",,63399,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Washington County, Maryland\"",",",,53180,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Wicomico County, Maryland\"",",",,51739,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Worcester County, Maryland\"",",",,57474,",,,,,"],
  ["2007-2011,","Median Household Income,,,","\"Maryland\"",",",72419,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Anne Arundel County, Maryland\"",",",,532369,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Baltimore City, Maryland\"",",",,620210,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Baltimore County, Maryland\"",",",,802487,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Calvert County, Maryland\"",",",,88329,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Caroline County, Maryland\"",",",,32955,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Carroll County, Maryland\"",",",,167277,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Cecil County, Maryland\"",",",,100716,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Charles County, Maryland\"",",",,145508,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Dorchester County, Maryland\"",",",,32480,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Frederick County, Maryland\"",",",,231725,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Garrett County, Maryland\"",",",,30128,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Harford County, Maryland\"",",",,243955,",,,",0.001319,",",0.13],
  ["2007-2011,","Total Population,,,","\"Howard County, Maryland\"",",",,283655,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Kent County, Maryland\"",",",,20098,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Montgomery County, Maryland\"",",",,959738,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Prince Georges County, Maryland\"",",",,858539,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Queen Annes County, Maryland\"",",",,47468,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Somerset County, Maryland\"",",",,26453,",,,,,"],
  ["2007-2011,","Total Population,,,","\"St Marys County, Maryland\"",",",,103805,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Talbot County, Maryland\"",",",,37575,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Washington County, Maryland\"",",",,147118,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Wicomico County, Maryland\"",",",,97862,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Worcester County, Maryland\"",",",,51307,",,,,,"],
  ["2007-2011,","Total Population,,,","\"Maryland\"",",",5736545,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Allegany County, Maryland\"",",",,6.7,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Anne Arundel County, Maryland\"",",",,5.2,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Baltimore City, Maryland\"",",",,5.5,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Baltimore County, Maryland\"",",",,4.9,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Calvert County, Maryland\"",",",,6.5,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Caroline County, Maryland\"",",",,2.9,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Carroll County, Maryland\"",",",,5.4,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Cecil County, Maryland\"",",",,4.7,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Charles County, Maryland\"",",",,12,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Dorchester County, Maryland\"",",",,4.5,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Frederick County, Maryland\"",",",,5.1,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Garrett County, Maryland\"",",",,5.1,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Harford County, Maryland\"",",",,4.4,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Howard County, Maryland\"",",",,3.3,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Kent County, Maryland\"",",",,5.5,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Montgomery County, Maryland\"",",",,7,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Prince Georges County, Maryland\"",",",,6,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Queen Annes County, Maryland\"",",",,4.4,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Somerset County, Maryland\"",",",,3.1,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"St Marys County, Maryland\"",",",,8,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Talbot County, Maryland\"",",",,5.6,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Washington County, Maryland\"",",",,7.7,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Wicomico County, Maryland\"",",",,7.7,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Worcester County, Maryland\"",",",,10.5,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Female,","\"Maryland\"",",",6.1,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Allegany County, Maryland\"",",",,8.3,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Anne Arundel County, Maryland\"",",",,5.5,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Baltimore City, Maryland\"",",",,7,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Baltimore County, Maryland\"",",",,4.5,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Calvert County, Maryland\"",",",,6.7,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Caroline County, Maryland\"",",",,4.2,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Carroll County, Maryland\"",",",,8.1,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Cecil County, Maryland\"",",",,7,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Charles County, Maryland\"",",",,9.5,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Dorchester County, Maryland\"",",",,5.1,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Frederick County, Maryland\"",",",,6,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Garrett County, Maryland\"",",",,6.1,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Harford County, Maryland\"",",",,3.8,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Howard County, Maryland\"",",",,6.2,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Kent County, Maryland\"",",",,5.1,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Montgomery County, Maryland\"",",",,8.9,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Prince Georges County, Maryland\"",",",,6.7,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Queen Annes County, Maryland\"",",",,4.1,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Somerset County, Maryland\"",",",,9.1,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"St Marys County, Maryland\"",",",,5.8,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Talbot County, Maryland\"",",",,8.1,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Washington County, Maryland\"",",",,8.8,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Wicomico County, Maryland\"",",",,6.8,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Worcester County, Maryland\"",",",,12.6,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Male,","\"Maryland\"",",",7,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Allegany County, Maryland\"",",",,7.6,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Anne Arundel County, Maryland\"",",",,5.3,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Baltimore City, Maryland\"",",",,6.3,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Baltimore County, Maryland\"",",",,4.7,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Calvert County, Maryland\"",",",,6.6,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Caroline County, Maryland\"",",",,3.6,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Carroll County, Maryland\"",",",,6.8,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Cecil County, Maryland\"",",",,5.8,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Charles County, Maryland\"",",",,10.8,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Dorchester County, Maryland\"",",",,4.8,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Frederick County, Maryland\"",",",,5.5,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Garrett County, Maryland\"",",",,5.6,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Harford County, Maryland\"",",",,4.1,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Howard County, Maryland\"",",",,4.8,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Kent County, Maryland\"",",",,5.3,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Montgomery County, Maryland\"",",",,7.9,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Prince Georges County, Maryland\"",",",,6.4,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Queen Annes County, Maryland\"",",",,4.3,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Somerset County, Maryland\"",",",,6.1,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"St Marys County, Maryland\"",",",,6.9,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Talbot County, Maryland\"",",",,7,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Washington County, Maryland\"",",",,8.2,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Wicomico County, Maryland\"",",",,7.2,",,,,,"],
  ["2007-2011,","Unemployment By Gender,Unemployment Rate,Total Population 20 to 64 years,","\"Worcester County, Maryland\"",",",,11.5,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Allegany County, Maryland\"",",",,3.8,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Anne Arundel County, Maryland\"",",",,5.5,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Baltimore City, Maryland\"",",",,5.9,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Baltimore County, Maryland\"",",",,3.5,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Calvert County, Maryland\"",",",,0,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Caroline County, Maryland\"",",",,8.8,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Carroll County, Maryland\"",",",,0.6,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Cecil County, Maryland\"",",",,15.1,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Charles County, Maryland\"",",",,8.6,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Dorchester County, Maryland\"",",",,12.1,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Frederick County, Maryland\"",",",,5.4,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Garrett County, Maryland\"",",",,0,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Harford County, Maryland\"",",",,7.5,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Howard County, Maryland\"",",",,4.1,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Kent County, Maryland\"",",",,0,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Montgomery County, Maryland\"",",",,4.4,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Prince Georges County, Maryland\"",",",,5.4,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Queen Annes County, Maryland\"",",",,0,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Somerset County, Maryland\"",",",,18,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"St Marys County, Maryland\"",",",,5.3,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Talbot County, Maryland\"",",",,0,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Washington County, Maryland\"",",",,4,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Wicomico County, Maryland\"",",",,10.4,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Worcester County, Maryland\"",",",,0,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Asian,","\"Maryland\"",",",4.7,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Allegany County, Maryland\"",",",,18.8,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Anne Arundel County, Maryland\"",",",,9.3,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Baltimore City, Maryland\"",",",,16.4,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Baltimore County, Maryland\"",",",,9.1,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Calvert County, Maryland\"",",",,9,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Caroline County, Maryland\"",",",,12.2,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Carroll County, Maryland\"",",",,6.6,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Cecil County, Maryland\"",",",,9.7,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Charles County, Maryland\"",",",,9.1,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Dorchester County, Maryland\"",",",,21.8,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Frederick County, Maryland\"",",",,9.6,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Garrett County, Maryland\"",",",,18.2,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Harford County, Maryland\"",",",,8.5,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Howard County, Maryland\"",",",,8.3,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Kent County, Maryland\"",",",,7.2,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Montgomery County, Maryland\"",",",,10,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Prince Georges County, Maryland\"",",",,9.5,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Queen Annes County, Maryland\"",",",,24.5,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Somerset County, Maryland\"",",",,7.9,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"St Marys County, Maryland\"",",",,7.1,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Talbot County, Maryland\"",",",,12.2,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Washington County, Maryland\"",",",,13.9,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Wicomico County, Maryland\"",",",,16.1,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Worcester County, Maryland\"",",",,10.9,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Black,","\"Maryland\"",",",11,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Allegany County, Maryland\"",",",,7,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Anne Arundel County, Maryland\"",",",,7.4,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Baltimore City, Maryland\"",",",,9,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Baltimore County, Maryland\"",",",,6,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Calvert County, Maryland\"",",",,6.2,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Caroline County, Maryland\"",",",,2.6,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Carroll County, Maryland\"",",",,7.9,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Cecil County, Maryland\"",",",,8.2,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Charles County, Maryland\"",",",,3.1,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Dorchester County, Maryland\"",",",,9.7,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Frederick County, Maryland\"",",",,7.5,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Garrett County, Maryland\"",",",,9.3,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Harford County, Maryland\"",",",,14,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Howard County, Maryland\"",",",,4.5,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Kent County, Maryland\"",",",,10.4,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Montgomery County, Maryland\"",",",,7.9,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Prince Georges County, Maryland\"",",",,9.7,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Queen Annes County, Maryland\"",",",,5.1,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Somerset County, Maryland\"",",",,6.7,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"St Marys County, Maryland\"",",",,7.5,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Talbot County, Maryland\"",",",,0.7,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Washington County, Maryland\"",",",,5.6,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Wicomico County, Maryland\"",",",,10.8,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Worcester County, Maryland\"",",",,14.4,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,Hispanic,","\"Maryland\"",",",8.2,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Allegany County, Maryland\"",",",,7.6,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Anne Arundel County, Maryland\"",",",,5.4,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Baltimore City, Maryland\"",",",,6.5,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Baltimore County, Maryland\"",",",,6.2,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Calvert County, Maryland\"",",",,4.8,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Caroline County, Maryland\"",",",,7.4,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Carroll County, Maryland\"",",",,4.1,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Cecil County, Maryland\"",",",,7.4,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Charles County, Maryland\"",",",,4.9,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Dorchester County, Maryland\"",",",,8.3,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Frederick County, Maryland\"",",",,5,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Garrett County, Maryland\"",",",,5.6,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Harford County, Maryland\"",",",,5.8,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Howard County, Maryland\"",",",,3.6,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Kent County, Maryland\"",",",,5.8,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Montgomery County, Maryland\"",",",,4.2,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Prince Georges County, Maryland\"",",",,6.8,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Queen Annes County, Maryland\"",",",,5.5,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Somerset County, Maryland\"",",",,7.8,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"St Marys County, Maryland\"",",",,3.9,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Talbot County, Maryland\"",",",,5.9,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Washington County, Maryland\"",",",,6.8,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Wicomico County, Maryland\"",",",,7.4,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Worcester County, Maryland\"",",",,7.2,",,,,,"],
  ["2007-2011,","Unemployment By Race,Unemployment Rate,White,","\"Maryland\"",",",5.5,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Allegany County, Maryland\"",",",,8.5,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Anne Arundel County, Maryland\"",",",,6.2,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Baltimore City, Maryland\"",",",,12.5,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Baltimore County, Maryland\"",",",,6.8,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Calvert County, Maryland\"",",",,5.3,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Caroline County, Maryland\"",",",,7.3,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Carroll County, Maryland\"",",",,3.8,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Cecil County, Maryland\"",",",,7.8,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Charles County, Maryland\"",",",,7,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Dorchester County, Maryland\"",",",,11.4,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Frederick County, Maryland\"",",",,5.3,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Garrett County, Maryland\"",",",,5.8,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Harford County, Maryland\"",",",,6.1,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Howard County, Maryland\"",",",,4.5,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Kent County, Maryland\"",",",,6.3,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Montgomery County, Maryland\"",",",,5.7,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Prince Georges County, Maryland\"",",",,8.8,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Queen Annes County, Maryland\"",",",,7.1,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Somerset County, Maryland\"",",",,7.2,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"St Marys County, Maryland\"",",",,5.1,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Talbot County, Maryland\"",",",,6.7,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Washington County, Maryland\"",",",,7.3,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Wicomico County, Maryland\"",",",,8.9,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Worcester County, Maryland\"",",",,7.7,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Non Veteran,","\"Maryland\"",",",7.2,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Allegany County, Maryland\"",",",,5.2,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Anne Arundel County, Maryland\"",",",,3.2,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Baltimore City, Maryland\"",",",,8.8,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Baltimore County, Maryland\"",",",,5,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Calvert County, Maryland\"",",",,3.5,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Caroline County, Maryland\"",",",,6.9,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Carroll County, Maryland\"",",",,4.9,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Cecil County, Maryland\"",",",,5.4,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Charles County, Maryland\"",",",,2.2,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Dorchester County, Maryland\"",",",,11.8,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Frederick County, Maryland\"",",",,4.9,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Garrett County, Maryland\"",",",,3.8,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Harford County, Maryland\"",",",,5.4,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Howard County, Maryland\"",",",,3.4,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Kent County, Maryland\"",",",,4.2,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Montgomery County, Maryland\"",",",,4,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Prince Georges County, Maryland\"",",",,5.8,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Queen Annes County, Maryland\"",",",,2,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Somerset County, Maryland\"",",",,12.6,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"St Marys County, Maryland\"",",",,2.1,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Talbot County, Maryland\"",",",,2.5,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Washington County, Maryland\"",",",,7.3,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Wicomico County, Maryland\"",",",,9,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Worcester County, Maryland\"",",",,9.3,",,,,,"],
  ["2007-2011,","Unemployment By Veteran Status,Unemployment Rate,Veteran,","\"Maryland\"",",",4.9,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Anne Arundel County, Maryland\"",",",,12860,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Baltimore City, Maryland\"",",",,16137,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Baltimore County, Maryland\"",",",,17502,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Calvert County, Maryland\"",",",,2512,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Caroline County, Maryland\"",",",,1017,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Carroll County, Maryland\"",",",,3416,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Cecil County, Maryland\"",",",,2943,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Charles County, Maryland\"",",",,3588,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Dorchester County, Maryland\"",",",,721,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Frederick County, Maryland\"",",",,6573,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Garrett County, Maryland\"",",",,667,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Harford County, Maryland\"",",",,6014,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Howard County, Maryland\"",",",,4936,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Kent County, Maryland\"",",",,838,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Montgomery County, Maryland\"",",",,16383,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Prince Georges County, Maryland\"",",",,17947,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Queen Annes County, Maryland\"",",",,1179,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Somerset County, Maryland\"",",",,536,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"St Marys County, Maryland\"",",",,3643,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Talbot County, Maryland\"",",",,773,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Washington County, Maryland\"",",",,4568,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Wicomico County, Maryland\"",",",,1955,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Worcester County, Maryland\"",",",,1438,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Disabled,","\"Maryland\"",",",124808,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Anne Arundel County, Maryland\"",",",,253175,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Baltimore City, Maryland\"",",",,245429,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Baltimore County, Maryland\"",",",,370634,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Calvert County, Maryland\"",",",,40458,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Caroline County, Maryland\"",",",,13985,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Carroll County, Maryland\"",",",,78848,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Cecil County, Maryland\"",",",,44004,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Charles County, Maryland\"",",",,70592,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Dorchester County, Maryland\"",",",,13284,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Frederick County, Maryland\"",",",,112843,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Garrett County, Maryland\"",",",,12660,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Harford County, Maryland\"",",",,113641,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Howard County, Maryland\"",",",,148530,",,,",0.021227,",,",2.12],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Kent County, Maryland\"",",",,8153,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Montgomery County, Maryland\"",",",,486729,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Prince Georges County, Maryland\"",",",,423617,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Queen Annes County, Maryland\"",",",,21709,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Somerset County, Maryland\"",",",,8488,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"St Marys County, Maryland\"",",",,47395,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Talbot County, Maryland\"",",",,15655,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Washington County, Maryland\"",",",,60272,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Wicomico County, Maryland\"",",",,42840,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Worcester County, Maryland\"",",",,20652,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Employed,Non Disabled,","\"Maryland\"",",",2624541,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Anne Arundel County, Maryland\"",",",,14395,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Baltimore City, Maryland\"",",",,20493,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Baltimore County, Maryland\"",",",,20791,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Calvert County, Maryland\"",",",,2882,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Caroline County, Maryland\"",",",,1239,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Carroll County, Maryland\"",",",,3872,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Cecil County, Maryland\"",",",,3484,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Charles County, Maryland\"",",",,3983,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Dorchester County, Maryland\"",",",,1033,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Frederick County, Maryland\"",",",,7501,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Garrett County, Maryland\"",",",,771,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Harford County, Maryland\"",",",,7448,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Howard County, Maryland\"",",",,5457,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Kent County, Maryland\"",",",,882,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Montgomery County, Maryland\"",",",,19167,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Prince Georges County, Maryland\"",",",,20931,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Queen Annes County, Maryland\"",",",,1307,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Somerset County, Maryland\"",",",,575,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"St Marys County, Maryland\"",",",,4038,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Talbot County, Maryland\"",",",,874,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Washington County, Maryland\"",",",,5586,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Wicomico County, Maryland\"",",",,2432,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Worcester County, Maryland\"",",",,1745,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Disabled,","\"Maryland\"",",",146083,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Allegany County, Maryland\"",",",,29085,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Anne Arundel County, Maryland\"",",",,267609,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Baltimore City, Maryland\"",",",,276483,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Baltimore County, Maryland\"",",",,395544,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Calvert County, Maryland\"",",",,43577,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Caroline County, Maryland\"",",",,15103,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Carroll County, Maryland\"",",",,82005,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Cecil County, Maryland\"",",",,47350,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Charles County, Maryland\"",",",,74759,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Dorchester County, Maryland\"",",",,14603,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Frederick County, Maryland\"",",",,119089,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Garrett County, Maryland\"",",",,13253,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Harford County, Maryland\"",",",,120447,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Howard County, Maryland\"",",",,155363,",,,",,,0.022416,",",2.24],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Kent County, Maryland\"",",",,8594,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Montgomery County, Maryland\"",",",,515565,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Prince Georges County, Maryland\"",",",,462312,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Queen Annes County, Maryland\"",",",,23114,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Somerset County, Maryland\"",",",,9188,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"St Marys County, Maryland\"",",",,49654,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Talbot County, Maryland\"",",",,16772,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Washington County, Maryland\"",",",,64971,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Wicomico County, Maryland\"",",",,46645,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Worcester County, Maryland\"",",",,22083,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Labor Force,Non Disabled,","\"Maryland\"",",",2815269,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Allegany County, Maryland\"",",",,580,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Anne Arundel County, Maryland\"",",",,1933,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Baltimore City, Maryland\"",",",,5703,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Baltimore County, Maryland\"",",",,3289,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Calvert County, Maryland\"",",",,370,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Caroline County, Maryland\"",",",,222,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Carroll County, Maryland\"",",",,456,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Cecil County, Maryland\"",",",,541,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Charles County, Maryland\"",",",,488,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Dorchester County, Maryland\"",",",,312,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Frederick County, Maryland\"",",",,928,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Garrett County, Maryland\"",",",,196,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Harford County, Maryland\"",",",,1434,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Howard County, Maryland\"",",",,691,,,",,,,",0.037139,",",3.70],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Kent County, Maryland\"",",",,44,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Montgomery County, Maryland\"",",",,2784,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Prince Georges County, Maryland\"",",",,2984,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Queen Annes County, Maryland\"",",",,169,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Somerset County, Maryland\"",",",,95,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"St Marys County, Maryland\"",",",,395,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Talbot County, Maryland\"",",",,203,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Washington County, Maryland\"",",",,1035,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Wicomico County, Maryland\"",",",,526,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Worcester County, Maryland\"",",",,307,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Disabled,","\"Maryland\"",",",21275,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Allegany County, Maryland\"",",",,2595,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Anne Arundel County, Maryland\"",",",,14726,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Baltimore City, Maryland\"",",",,32979,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Baltimore County, Maryland\"",",",,24910,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Calvert County, Maryland\"",",",,3119,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Caroline County, Maryland\"",",",,1118,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Carroll County, Maryland\"",",",,3319,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Cecil County, Maryland\"",",",,3346,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Charles County, Maryland\"",",",,4601,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Dorchester County, Maryland\"",",",,1471,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Frederick County, Maryland\"",",",,6246,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Garrett County, Maryland\"",",",,766,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Harford County, Maryland\"",",",,6806,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Howard County, Maryland\"",",",,6833,,,",,,",0.016857,",",1.69],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Kent County, Maryland\"",",",,618,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Montgomery County, Maryland\"",",",,28836,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Prince Georges County, Maryland\"",",",,39486,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Queen Annes County, Maryland\"",",",,1491,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Somerset County, Maryland\"",",",,700,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"St Marys County, Maryland\"",",",,2259,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Talbot County, Maryland\"",",",,1117,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Washington County, Maryland\"",",",,4699,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Wicomico County, Maryland\"",",",,3805,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Worcester County, Maryland\"",",",,1978,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployed,Non Disabled,","\"Maryland\"",",",190728,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Allegany County, Maryland\"",",",,19,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Anne Arundel County, Maryland\"",",",,10.7,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Baltimore City, Maryland\"",",",,21.3,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Baltimore County, Maryland\"",",",,14.7,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Calvert County, Maryland\"",",",,12.8,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Caroline County, Maryland\"",",",,17,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Carroll County, Maryland\"",",",,7.6,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Cecil County, Maryland\"",",",,15.5,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Charles County, Maryland\"",",",,9.9,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Dorchester County, Maryland\"",",",,31.8,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Frederick County, Maryland\"",",",,14.1,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Garrett County, Maryland\"",",",,12.7,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Harford County, Maryland\"",",",,19.3,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Howard County, Maryland\"",",",,9.5,,,",,,,",0.037338,",",3.70],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Kent County, Maryland\"",",",,5,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Montgomery County, Maryland\"",",",,12.3,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Prince Georges County, Maryland\"",",",,12.8,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Queen Annes County, Maryland\"",",",,16.2,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Somerset County, Maryland\"",",",,6.8,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"St Marys County, Maryland\"",",",,9.8,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Talbot County, Maryland\"",",",,25.1,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Washington County, Maryland\"",",",,14,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Wicomico County, Maryland\"",",",,23,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Worcester County, Maryland\"",",",,17.6,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Disabled,","\"Maryland\"",",",14.6,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Allegany County, Maryland\"",",",,7.9,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Anne Arundel County, Maryland\"",",",,5.7,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Baltimore City, Maryland\"",",",,11.2,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Baltimore County, Maryland\"",",",,6.3,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Calvert County, Maryland\"",",",,4.9,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Caroline County, Maryland\"",",",,7.4,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Carroll County, Maryland\"",",",,3.8,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Cecil County, Maryland\"",",",,6.3,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Charles County, Maryland\"",",",,6.3,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Dorchester County, Maryland\"",",",,10.1,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Frederick County, Maryland\"",",",,4.9,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Garrett County, Maryland\"",",",,4.5,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Harford County, Maryland\"",",",,5.5,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Howard County, Maryland\"",",",,4.2,,,",,,",0.016637,",",1.66],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Kent County, Maryland\"",",",,5.1,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Montgomery County, Maryland\"",",",,5.7,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Prince Georges County, Maryland\"",",",,8.7,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Queen Annes County, Maryland\"",",",,6.5,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Somerset County, Maryland\"",",",,7.6,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"St Marys County, Maryland\"",",",,4.1,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Talbot County, Maryland\"",",",,6.7,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Washington County, Maryland\"",",",,7.2,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Wicomico County, Maryland\"",",",,8.2,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Worcester County, Maryland\"",",",,6.5,",,,,,"],
  ["2008-2011,","Employment Status By Disability Status,Unemployment Rate,Non Disabled,","\"Maryland\"",",",6.8,",,,,,"],


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
              year,"Median Household Income,,",'"Allegany County, Maryland"',
              dataend+",",
              ",,,,",
            ],
          },
          set2: {
            url2:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/profile?get=NAME,DP05_0001E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat2: [
              year,"Total Population,,",'"Allegany County, Maryland"',
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
              year,"Unemployment By Gender,","Male",'"Allegany County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set4: {
            url4:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat4: [
              year,"Employment Status By Disability Status","Unemployed","Disabled",'"Allegany County, Maryland"',
              dataend+ ",,,,",
            ],
          },


          set5: {
            url5:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat5: [
              year,"Employment Status by Disability Status","Unemployed","Non Disabled",'"Allegany County, Maryland"',
              dataend+ ",",
            ],
          },

          set6: {
            url6:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat6: [
              year,"Unemployment By Gender,","Female",'"Allegany County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set7: {
            url7:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat7: [
              year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Allegany County, Maryland"',
              dataend+ ",,,,",
            ],
          },

          set8: {
            url8:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat8: [
              year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Allegany County, Maryland"',
              dataend+ ",",
            ],
          },

          set9: {
            url9:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_027E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat9: [
              year,"Employment Status By Education","Employed","Bachelor's or Higher",'"Allegany County, Maryland"',
              dataend+ ",",
            ],
          },

          set10: {
            url10:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_028E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat10: [
              year,"Employment Status By Education","Unemployed","Bachelor's or Higher",'"Allegany County, Maryland"',
              dataend+ ",",
            ],
          },

          set11: {
            url11:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_029E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat11: [
              year,"Employment Status By Education","NIL","Bachelor's or Higher",'"Allegany County, Maryland"',
              dataend+ ",",
            ],
          },

          set12: {
            url12:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat12: [
              year,"Employment Status By Education","Employed","Highschool",'"Allegany County, Maryland"',
              dataend+ ",",
            ],
          },

          set13: {
            url13:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_014E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat13: [
              year,"Employment Status By Education","Unemployed","Highschool",'"Allegany County, Maryland"',
              dataend+ ",",
            ],
          },

          set14: {
            url14:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_015E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat14: [
              year,"Employment Status By Education","NIL","Highschool",'"Allegany County, Maryland"',
              dataend+ ",",
            ],
          },

          set15: {
            url15:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_028E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat15: [
              year,"Employment Status By Poverty Status","Employed","Below Poverty",'"Allegany County, Maryland"',
              dataend + ",",
            ],
          },

          set16: {
            url16:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5/subject?get=NAME,S1701_C02_031E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat16: [
              year,"Employment Status By Poverty Status","Unemployed","Below Poverty",'"Allegany County, Maryland"',
              dataend+ ",",
            ],
          },

          set17: {
            url17:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_004E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat17: [
              year,"Employment Status By Disability Status","Employed","Disabled",'"Allegany County, Maryland"',
              dataend+ ",,,,",
            ],
          },


          set18: {
            url18:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_006E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat18: [
              year,"Employment Status By Education","Employed","Less than Highschool",'"Allegany County, Maryland"',
              dataend+",",
            ],
          },

          set19: {
            url19:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat19: [
              year,"Employment Status By Education","Unemployed","Less than Highschool",'"Allegany County, Maryland"',
              dataend+ ",",
            ],
          },

          set20: {
            url20:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat20: [
              year,"Employment Status By Education","NIL","Less than Highschool",'"Allegany County, Maryland"',
              dataend+ ",",
            ],
          },

          set21: {
            url21:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat21: [
              year,"Unemployment By Veteran Status,","Non Veteran",'"Allegany County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set22: {
            url22:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat22: [
              year,"Unemployment By Veteran Status,","Veteran",'"Allegany County, Maryland"',
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
              year,"Employment Status By Education","Employed","Some College",'"Allegany County, Maryland"',
              dataend+ ",",
            ],
          },

          set24: {
            url24:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_021E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat24: [
              year,"Employment Status By Education","Unemployed","Some College",'"Allegany County, Maryland"',
              dataend+ ",",
            ],
          },

          set25: {
            url25:
              "https://api.census.gov/data/" +
              year +
              "/acs/acs5?get=NAME,B23006_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat25: [
              year,"Employment Status By Education","NIL","Some College",'"Allegany County, Maryland"',
              dataend+ ",",
            ],
          },

          set26: {
            url26:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat26: [
              year,"Unemployment By Race,","Asian",'"Allegany County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },


          set27: {
            url27:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat27: [
              year,"Unemployment By Race,","White",'"Allegany County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set28: {
            url28:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat28: [
              year,"Unemployment By Race,","Black",'"Allegany County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set29: {
            url29:
              "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_019E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat29: [
              year,"Unemployment By Race,","Hispanic",'"Allegany County, Maryland"',
              dataend,
              dataend / 100,
            ],
          },

          set30: {
            url30:
              "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
            arrayformat30: [
              year,"Employment Status By Disability Status","Employed","Non Disabled",'"Allegany County, Maryland"',
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
for (var i = 1; i < 31; ++i) {
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
            "/acs/acs5/subject?get=NAME,S1901_C01_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat1: [
            year,"Median Household Income,,",'"Allegany County, Maryland"',
            dataend+",",
            ",,,,",
          ],
        },
        set2: {
          url2:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/profile?get=NAME,DP05_0001E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat2: [
            year,"Total Population,,",'"Allegany County, Maryland"',
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
            year,"Unemployment By Gender,","Male",'"Allegany County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set4: {
          url4:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat4: [
            year,"Employment Status By Disability Status","Unemployed","Disabled",'"Allegany County, Maryland"',
            dataend+ ",,,,",
          ],
        },


        set5: {
          url5:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat5: [
            year,"Employment Status by Disability Status","Unemployed","Non Disabled",'"Allegany County, Maryland"',
            dataend+ ",",
          ],
        },

        set6: {
          url6:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S2301_C04_023E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat6: [
            year,"Unemployment By Gender,","Female",'"Allegany County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },


        set7: {
          url7:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat7: [
            year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Allegany County, Maryland"',
            dataend+ ",,,,",
          ],
        },

        set8: {
          url8:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat8: [
            year,"Employment Status By Disability Status","Unemployed","Non Disabled",'"Allegany County, Maryland"',
            dataend+ ",",
          ],
        },

        set9: {
          url9:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_027E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat9: [
            year,"Employment Status By Education","Employed","Bachelor's or Higher",'"Allegany County, Maryland"',
            dataend+ ",",
          ],
        },

        set10: {
          url10:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_028E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat10: [
            year,"Employment Status By Education","Unemployed","Bachelor's or Higher",'"Allegany County, Maryland"',
            dataend+ ",",
          ],
        },

        set11: {
          url11:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_029E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat11: [
            year,"Employment Status By Education","NIL","Bachelor's or Higher",'"Allegany County, Maryland"',
            dataend+ ",",
          ],
        },

        set12: {
          url12:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat12: [
            year,"Employment Status By Education","Employed","Highschool",'"Allegany County, Maryland"',
            dataend+ ",",
          ],
        },

        set13: {
          url13:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_014E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat13: [
            year,"Employment Status By Education","Unemployed","Highschool",'"Allegany County, Maryland"',
            dataend+ ",",
          ],
        },

        set14: {
          url14:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_015E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat14: [
            year,"Employment Status By Education","NIL","Highschool",'"Allegany County, Maryland"',
            dataend+ ",",
          ],
        },

        set15: {
          url15:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S1701_C02_028E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat15: [
            year,"Employment Status By Poverty Status","Employed","Below Poverty",'"Allegany County, Maryland"',
            dataend + ",",
          ],
        },

        set16: {
          url16:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5/subject?get=NAME,S1701_C02_031E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat16: [
            year,"Employment Status By Poverty Status","Unemployed","Below Poverty",'"Allegany County, Maryland"',
            dataend+ ",",
          ],
        },

        set17: {
          url17:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_004E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat17: [
            year,"Employment Status By Disability Status","Employed","Disabled",'"Allegany County, Maryland"',
            dataend+ ",,,,",
          ],
        },


        set18: {
          url18:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_006E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat18: [
            year,"Employment Status By Education","Employed","Less than Highschool",'"Allegany County, Maryland"',
            dataend+",",
          ],
        },

        set19: {
          url19:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_007E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat19: [
            year,"Employment Status By Education","Unemployed","Less than Highschool",'"Allegany County, Maryland"',
            dataend+ ",",
          ],
        },

        set20: {
          url20:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_008E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat20: [
            year,"Employment Status By Education","NIL","Less than Highschool",'"Allegany County, Maryland"',
            dataend+ ",",
          ],
        },

        set21: {
          url21:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C06_034E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat21: [
            year,"Unemployment By Veteran Status,","Non Veteran",'"Allegany County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set22: {
          url22:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2101_C04_034E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat22: [
            year,"Unemployment By Veteran Status,","Veteran",'"Allegany County, Maryland"',
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
            year,"Employment Status By Education","Employed","Some College",'"Allegany County, Maryland"',
            dataend+ ",",
          ],
        },

        set24: {
          url24:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_021E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat24: [
            year,"Employment Status By Education","Unemployed","Some College",'"Allegany County, Maryland"',
            dataend+ ",",
          ],
        },

        set25: {
          url25:
            "https://api.census.gov/data/" +
            year +
            "/acs/acs5?get=NAME,B23006_022E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat25: [
            year,"Employment Status By Education","NIL","Some College",'"Allegany County, Maryland"',
            dataend+ ",",
          ],
        },

        set26: {
          url26:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_015E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat26: [
            year,"Unemployment By Race,","Asian",'"Allegany County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },


        set27: {
          url27:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_012E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat27: [
            year,"Unemployment By Race,","White",'"Allegany County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set28: {
          url28:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_013E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat28: [
            year,"Unemployment By Race,","Black",'"Allegany County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set29: {
          url29:
            "https://api.census.gov/data/"+year+"/acs/acs5/subject?get=NAME,S2301_C04_019E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat29: [
            year,"Unemployment By Race,","Hispanic",'"Allegany County, Maryland"',
            dataend,
            dataend / 100,
          ],
        },

        set30: {
          url30:
            "https://api.census.gov/data/"+year+"/acs/acs5?get=NAME,C18120_005E&for=county:001&in=state:24&key=855666deab62d95596011f1944d9f1bd8c918853",
          arrayformat30: [
            year,"Employment Status By Disability Status","Employed","Non Disabled",'"Allegany County, Maryland"',
            dataend+ ",",
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
