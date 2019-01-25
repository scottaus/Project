$(document).ready(function(){

    $("#YeDa").click(function(){
        YeDa();
    })
    $("#Subrate").click(function(){
        Subrate();
    })


});


var YeDa = function(){


    var input= $("#number1").val();
    
    hours =  Math.floor(input/60);
    days = Math.floor(hours/24);
    DaysRe = days%365;
    Years = Math.floor(days/365);

    $("#output").text("The Years are: " + Years + " The Days are: " + DaysRe);

}


var Subrate = function(){

    var x = $("#number2").val();
    var y = $("#number3").val();

    x = parseInt(x);
    quotient = parseInt(quotient);

    var quotient = x * y;
    var sum = x + quotient;
    
    $("#output2").text("Your SubTotal is: " + "$" + quotient + " Your Total is: " + "$" + sum);

}