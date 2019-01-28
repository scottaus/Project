$(document).ready(function(){

    $("#YeDa").click(function(){
        YeDa();
    })
    $("#Subrate").click(function(){
        Subrate();
    })
    $("#BMI").click(function(){
        BMI();
    })
    $("#Time").click(function(){
        Time();
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

var BMI = function(){

    var x = $("#number4").val();
    var y = $("#number5").val();


    quotient = parseInt(quotient);

    var quotient = (x * .45359237) / ((y * .0254) * (y * .0254));
    
    
    $("#output3").text("Your BMI is: " + quotient);

}

var Time = function(){

    var input = $("#number6").val();


    MinutesRe = input%1;
    Minute = Math.ceil(MinutesRe*60);
    Hours = input - MinutesRe;
    
    $("#output4").text("Hours is " + Hours + " Minutes is " + Minute);

}