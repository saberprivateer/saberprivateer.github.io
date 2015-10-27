function getData(charttype){

d3.json("js/test.json", function(error, root) {
  if (error) throw error;
  console.log("getData");
//console.log(root[0]);

root.forEach(function(d) {
    d.dollar_amount = +d.dollar_amount;
    });

var newroot;

switch(charttype) {
    case "Activity":
    console.log("case activity");
newroot = d3.nest()
.key(function(d){return d.government_activity})
.rollup(function(values) {return d3.sum(values, function(d){return d3.round(+d.dollar_amount);}) })
.entries(root);
        break;
    case "Department":
    console.log("case department");
newroot = d3.nest()
.key(function(d){return d.department_name})
.rollup(function(values) {return d3.sum(values, function(d){return d3.round(+d.dollar_amount);}) })
.entries(root);
        break;
            case "Expenditure":
            console.log("case department");
        newroot = d3.nest()
        .key(function(d){return d.expenditure_type})
        .rollup(function(values) {return d3.sum(values, function(d){return d3.round(+d.dollar_amount);}) })
        .entries(root);
                break;
                    case "Fund":
                    console.log("case department");
                newroot = d3.nest()
                .key(function(d){return d.fund_type})
                .rollup(function(values) {return d3.sum(values, function(d){return d3.round(+d.dollar_amount);}) })
                .entries(root);
                        break;
                                           case "Vendor":
                                            console.log("case department");
                                        newroot = d3.nest()
                                        .key(function(d){return d.vendor_name})
                                        .rollup(function(values) {return d3.sum(values, function(d){return d3.round(+d.dollar_amount);}) })
                                        .entries(root);
                                                break;
    default:   newroot = d3.nest()
                .key(function(d){return d.government_activity})
                //.key(function(d){return d.expenditure_type})
                //.key(function(d){return d.department_name})
                .rollup(function(values) {return d3.sum(values, function(d){return d3.round(+d.dollar_amount);}) })
                .entries(root);

}

/*
var newroot = d3.nest()
.key(function(d){return d.government_activity})
//.key(function(d){return d.expenditure_type})
//.key(function(d){return d.department_name})
.rollup(function(values) {return d3.sum(values, function(d){return d3.round(+d.dollar_amount);}) })
.entries(root);
*/

console.log("This is after nest: ");
console.log(newroot);

d3transform = newroot;

});
};