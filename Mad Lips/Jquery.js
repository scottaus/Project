$(document).ready(function(){

    $("#button").click(function(){

        showInfo ();
        $("#MadLip, #MadLip2").hide(1000);

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
    Adjective1 = $("#Adjective1").val();
    Adjective2 = $("#Adjective2").val();
    Verb1 = $("#Verb1").val();
    Verb2 = $("#Verb2").val();
    Number1 = $("#Number").val();
    Place = $("#Place").val();
    BodyPart = $("#BodyPart").val();
}

function showInfo(){
    getInfo();
    var message = "Two " + Noun3 + ", both alike  in dignity," 
    var message2 = "In fair " + Place + ", where we lay our scene," 
    var message3 ="From ancient " + Noun + " break to new mutiny,"
    var message4 = "Where civil blood makes civil hands unclean."
    var message5 ="From forth the fatal loins of these two foes"
    var message6 ="A pair of star-cross`d " + Noun4 +" take their life;"
    var message7 ="Whole misadventured piteous overthrows."
    var message8 ="Do with their " + Noun2 +" bury their parents` strife"
    var message9 ="The fearful passage of their " + Adjective1 + " love,"
    var message10 ="And the continuance of their parents` rage,"
    var message11 = "Which, but their children`s end, nought could " + Verb1
    var message12 ="Is now the " + Number1 + " hours` traffic of our stage;"
    var message13 ="The which if you with " + Adjective2 + " " + BodyPart + " attend,"
    var message14 ="What here shall " + Verb2 + ", our toil shall strive to mend."
    var Thanks = "Thank you for Playing this MadLip. This MadLip was created by Tami Brass"

    $("#Thanks").text(Thanks).show().animate({"top":"0px","opacity":"1"}, "slow")
    $("#output").text(message).show().animate({"top":"0px","opacity":"1"}, "slow")
    $("#output2").text(message2).show().animate({"top":"0px","opacity":"1"}, "slow")
    $("#output3").text(message3).show().animate({"top":"0px","opacity":"1"}, "slow")
    $("#output4").text(message4).show().animate({"top":"0px","opacity":"1"}, "slow")
    $("#output5").text(message5).show().animate({"top":"0px","opacity":"1"}, "slow")
    $("#output6").text(message6).show().animate({"top":"0px","opacity":"1"}, "slow")
    $("#output7").text(message7).show().animate({"top":"0px","opacity":"1"}, "slow")
    $("#output8").text(message8).show().animate({"top":"0px","opacity":"1"}, "slow")
    $("#output9").text(message9).show().animate({"top":"0px","opacity":"1"}, "slow")
    $("#output10").text(message10).show().animate({"top":"0px","opacity":"1"}, "slow")
    $("#output11").text(message11).show().animate({"top":"0px","opacity":"1"}, "slow")
    $("#output12").text(message12).show().animate({"top":"0px","opacity":"1"}, "slow")
    $("#output13").text(message13).show().animate({"top":"0px","opacity":"1"}, "slow")
    $("#output14").text(message14).show().animate({"top":"0px","opacity":"1"}, "slow")
}