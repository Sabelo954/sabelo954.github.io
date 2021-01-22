
var svg1 = dimple.newSvg("#svgPopulation", 400, 350);
d3.csv("MarylandDataFinalversionupd.csv",function (data){

var populationChart = new dimple.chart(svg1, data);
populationChart.setBounds("130px","50px","60%","70%")
populationChart.addCategoryAxis("x", "Time");
populationChart.addMeasureAxis("y", "Amount");
populationChart.addSeries(null, dimple.plot.bar);
populationChart.draw();
});
