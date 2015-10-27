// d3.custom{};

//d3.custom.barChart = function module() {

var margin = {top: 30, right: 120, bottom: 0, left: 120},
    width = 400,
        gap = 0,
        ease = 'cubic-in-out',
    height = 140;

//var svg, duration = 500;

var x = d3.scale.linear()
    .range([0, width-200]);

var barHeight = 20;

var color = d3.scale.ordinal()
    .range(["steelblue", "#ccc"]);

var chart = d3.select(".chart")
.attr("width", width);

d3.json("js/test.json", function(error, root) {
  if (error) throw error;

console.log(root[0]);

root.forEach(function(d) {
    d.dollar_amount = +d.dollar_amount;
    });

var newroot = d3.nest()
.key(function(d){return d.government_activity})
//.key(function(d){return d.expenditure_type})
//.key(function(d){return d.department_name})
.rollup(function(values) {return d3.sum(values, function(d){return d3.round(+d.dollar_amount);}) })
.entries(root);

console.log("This is after nest: ");
console.log(newroot);

  x.domain([0, d3.max(newroot, function(d) { return d.values; })]);

  chart.attr("height", barHeight * newroot.length);

var bar = chart.selectAll("g")
      .data(newroot)
      .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });


  bar.append("rect")
      .attr("width", function(d) { return x(d.values); })
      .attr("height", barHeight - 1);

  bar.append("text")
      .attr("x", function(d) { return x(d.values) + 5; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return  d.key+" "+d3.format("$,")(d.values); })

});
//};