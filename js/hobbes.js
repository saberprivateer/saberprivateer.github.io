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
    };

    function printsample(){
        document.getElementById("sample").innerHTML = "Sample encounter...";
        document.getElementById("story").innerHTML = "One day, Person 1 and Person 2 meet while competing over resources...";
//        document.getElementById("p1").innerHTML = "Person 1 is " + obj1.type_full + " (" + obj1.type + ")";
//        document.getElementById("p2").innerHTML = "Person 2 is " + obj2.type_full + " (" + obj2.type + ")";
    }

    function meeting() {
        var obj1 = new person();
        var obj2 = new person();
        printsample();
        document.getElementById("p1").innerHTML = "Person 1 is " + obj1.type_full + " (" + obj1.type + ")";
        document.getElementById("p2").innerHTML = "Person 2 is " + obj2.type_full + " (" + obj2.type + ")";
        if (obj1.type == "v" && obj2.type == "v") {
            var win = 1;
            if (Math.random() > 0.5) {
                win = 2;
            }
            document.getElementById("result").innerHTML = "For glory! Person " + win + " has triumphed!";
            gtotal=gtotal+g;
            lvtotal=lvtotal+l;

        }
        else {
            if (obj1.type == "v") {
                document.getElementById("result").innerHTML = "For glory! Person 1 has triumphed!";
                gtotal=gtotal+g;
                lvtotal=lvtotal+l;
            }
            if (obj2.type == "v") {
                document.getElementById("result").innerHTML = "For glory! Person 2 has triumphed!";
                gtotal=gtotal+g;
                lvtotal=lvtotal+l;
            }
            if (obj1.type == "m" && obj2.type == "m") {
                document.getElementById("result").innerHTML = "Let there be peace! Person 1 cooperated with Person 2!";
                ptotal=ptotal+p;
                lmtotal=lmtotal+2*l;
            }
        }
        drawStacked();
    }

    google.charts.load('current', {packages: ['corechart', 'bar']});
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