import countySchema from 'countySchema.js';


// API endpoints for each graph
// We can have a county objet
currentCounty = "";



OnChangeCountyClick() {
  // Get which county was click on,
  var dropdown = document.getElementById("CountyDropdown");
  var value = dropdown.value;
  // Reload this page with variables for that county
  currentCounty = value;
  // Get SNap
  getSnap();
}

getSnap(){
  snapObect = countySchema[currentCounty].snap;
  var returnObject = {}
  // Structure of SNap object
  /*
    snap = {
    1: {
      year: 2019
      url: "thisistheurl.com"
    }
  }
  */
  // Loop through the snap object and get data for every year
   for (var i = 0; i < snapObect.length; i++) {
     var snap = snapObect[i];
     var urlpop= snap.url;
     var year = snap.year;
     d3.json(urlpop).get(function(error,data){
       var dataSNAPbeg= data[1];
       var dataSNAP= dataSNAPbeg.map(Number).slice(1,2);
       console.log(dataSNAP);
       // Set the data response for this year into the return object
       returnObject[year] = dataSNAP;
     });
   }
   // TODO: Might need to put the above function in a promise
   // Instead of returning, we can just call the update snap char fnx immediately
   updateSnapChart()
}

updateSnapChart(data) {
  var svg1 = dimple.newSvg("#svgPopulation", chartSizewidth, chartSizeheight);
  var data = [
    { "Year":"2017", "SNAP Recipients": data["2017"] },
    { "Year":"2018", "SNAP Recipients": data["2018"] },
    { "Year":"2019", "SNAP Recipients": data["2019"]}
  ];
  var populationChart = new dimple.chart(svg1, data);
  populationChart.addCategoryAxis("x", "Year");
  var y=populationChart.addMeasureAxis("y", "SNAP Recipients");
  y.tickFormat = ',.0f';
  populationChart.addSeries(null, dimple.plot.bar);
  populationChart.draw();
} 
