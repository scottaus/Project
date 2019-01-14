$(document).ready(function(){

    $("#button").click(function(){

        showInfo ();

    })

 });


//  *************************************
    var Noun
    var Noun2
    var Noun3
    var Noun4
    var Place



function getInfo(){ 
    Noun = $("#Noun1").val();
    Noun2 = $("#Noun2").val();
    Noun3 = $("#Noun3").val();
    Noun4 = $("#Noun4").val();
    Place = $("#Place").val();
}

function showInfo(){
    getInfo();
    var message = "Two " + Noun3 + ", both alike in dignity, In fair " + Place + ", where we lay our scene, From ancient; " + Noun + " break to new mutiny, Where civil blood makes civil hands unclean. From forth the fatal loins of these two foes a pair of star-cross`d " + Noun4 +" take their life; Whole misadventured piteous overthrows. Do with their" + Noun2

    $("#output").text(message).show().animate({"top":"0px","opacity":"1"}, "slow")
}