    var q = 40; //The % vainglorious
    var beta = 0.7; //The % chance for a modest attack
    var p = .7; //The value of peace
    var g = .8; //The value of glory
    var d = 0; //The value of death
    var l = .9; //The value of life
    var gtotal = 0;
    var ptotal = 0;
    var lvtotal = 0;
    var lmtotal = 0;
    var pop = 100;
    var popv = 0;
    var population = [];

    function submitForm() {

        if(document.forms["input"].elements["percentv"].value){
            q=document.forms["input"].elements["percentv"].value;
        }
        if(document.forms["input"].elements["vallife"].value) {
            l = parseFloat(document.forms["input"].elements["vallife"].value);
        }
        if(document.forms["input"].elements["valglory"].value) {
            g = parseFloat(document.forms["input"].elements["valglory"].value);
        }
        if(document.forms["input"].elements["valpeace"].value) {
            p = parseFloat(document.forms["input"].elements["valpeace"].value);
        }
        meeting();
    }

    var person = function () {
        this.type = "m";
        this.type_full = "Modest";
        if (Math.random() <= q/100) {
            this.type = "v";
            this.type_full = "Vainglorious"
        }
        //this.alive = Boolean(true);
    };

    function printsample(){
        document.getElementById("sample").innerHTML = "Sample encounter...";
        document.getElementById("story").innerHTML = "One day, Person 1 and Person 2 meet while competing over resources...";
        document.getElementById("simheader").innerHTML = "Simulating many encounters...";
        document.getElementById("simstory").innerHTML = "What happens if 100 people encounter each other?";
//        document.getElementById("p1").innerHTML = "Person 1 is " + obj1.type_full + " (" + obj1.type + ")";
//        document.getElementById("p2").innerHTML = "Person 2 is " + obj2.type_full + " (" + obj2.type + ")";
    }

    function whowins(obj1,obj2) {
        switch(obj1.type){
            case "v":
                if (obj2.type =="m") {return 1}
                else {
                    return (Math.round(Math.random())+1)
                     }
                break;
            case "m":
                if (obj2.type =="m") {return 3}
                else {
                    return 2;
                    }
                break;
            default: return 0; break;
        }
    }

    function whowins_beta(obj1,obj2,beta) {
            switch(obj1.type){
                case "v":
                    if (obj2.type =="m") {return 1}
                    else {
                        return (Math.round(Math.random())+1)
                         }
                    break;
                case "m":
                    if (obj2.type =="m") {return 3}
                    else {
                        return 2;
                        }
                    break;
                default: return 0; break;
            }
        }


    function createpop(){
    var temp = new person();

            var i;
            popv = 0;
            for (i=0;i<100;i++){
                population.push(temp);
                if (temp.type == "v") {popv = popv + 1;}
                temp = new person();
            }
    }

    function sim(){
        console.log("called sim");
//        var temp = new person();
           //        var population = [];
           //        var i;
           //        popv = 0;
           //        for (i=0;i<100;i++){
           //            population.push(temp);
           //            if (temp.type == "v") {popv = popv + 1;}
           //            temp = new person();
           //        }
           createpop();

        gtotal = 0;
        ptotal = 0;
        lvtotal = 0;
        lmtotal = 0;
        pop = population.length;

        var data = google.visualization.arrayToDataTable([
                      ['Label', 'Value'],
                      ['Population', population.length],
                      ['% Vain', popv],
                      ['Encounters',0],
                      ['Glory',gtotal+lvtotal],
                      ['Peace',ptotal+lmtotal],
                    ]);

                    var options = {
                      width: 400, height: 240,
                      //redFrom: 90, redTo: 100,
                      //yellowFrom:75, yellowTo: 90,
                      minorTicks: 5
                    };

                    var chart = new google.visualization.Gauge(document.getElementById('pop_chart_div'));

                    chart.draw(data, options);

//        for (i=0;i<50;i++){
        i=0;
        console.log("Start Timer");
        myvar = setInterval(function(){

        switch(whowins(population[i],population[i+50])){
        case 1:
        gtotal=gtotal+g;
        lvtotal=lvtotal+l;
        pop = pop - 1;
        popv = popv - 1;
        break;

        case 2:
        gtotal=gtotal+g;
                lvtotal=lvtotal+l;
                popv = popv - 1;
        break;

        case 3:
                        ptotal=ptotal+p;
                        lmtotal=lmtotal+2*l;
        break;
        }

        data.setValue(0, 1, pop);
        data.setValue(1, 1, popv);
        data.setValue(2, 1, i);
        data.setValue(3, 1, gtotal+lvtotal);
        data.setValue(4, 1, ptotal+lmtotal);

        chart.draw(data, options);
        i=i+1;
        if(i>49){
                clearInterval(myvar);
                }
        },500);


    }

    function simscatter(){
    console.log("called simscatter");
    createpop();
    gtotal = 0;
            ptotal = 0;
            lvtotal = 0;
            lmtotal = 0;
            pop = population.length;
    var beta = .23


    }
    

    function meeting() {
        var obj1 = new person();
        var obj2 = new person();
        printsample();
        document.getElementById("p1").innerHTML = "Person 1 is " + obj1.type_full + " (" + obj1.type + ")";
        document.getElementById("p2").innerHTML = "Person 2 is " + obj2.type_full + " (" + obj2.type + ")";

        switch(whowins(obj1,obj2)) {
        case 1:
                document.getElementById("result").innerHTML = "For glory! Person " + 1 + " has triumphed!";
//                gtotal=gtotal+g;
//                lvtotal=lvtotal+l;
                break;
        case 2:
                document.getElementById("result").innerHTML = "For glory! Person " + 2 + " has triumphed!";
//                gtotal=gtotal+g;
//                lvtotal=lvtotal+l;
                break;
        case 3:
                document.getElementById("result").innerHTML = "Let there be peace! Person 1 cooperated with Person 2!";
//                ptotal=ptotal+p;
//                lmtotal=lmtotal+2*l;
                break;
        default: break;
            }
       sim();
        //drawStacked();
    }

    google.charts.load('current', {packages: ['corechart', 'bar','gauge']});
    //google.charts.setOnLoadCallback(drawStacked);

    function drawStacked() {
        var data = new google.visualization.arrayToDataTable([
            ["Type","Glory","Peace","Life"],
            ["Vain",gtotal, 0, lvtotal],
            ["Modest",0, ptotal, lmtotal],
        ]);

        var options = {
            title: 'Tracking Encounter Payoff Over Time',
            isStacked: true,
            hAxis: {
                title: 'Type of Person'
            },
            vAxis: {
                title: 'Value',
                minValue: 0
            }
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }