$(document).ready(function(){

    updateNarrative(N1);
    $("footer").html(createButton("button1", O1A) + createButton("button2", O1B) + createButton("button3", O1C));

    $("#button1").click(function(){
         if($("#button1").text() === O1A){
            updateNarrative(N2A);
            updateButton(O2A, O2B, O2C);
         }
         else if($("#button1").text() === O2A){
            updateNarrative(N3A);
            updateButton(O5A, O5B);
            $("#button3").hide()
        }
        else if($("#button1").text() === O3A){
            updateNarrative(N4A);
            updateButton(O7A, O7B, O7C);
            $("#button3").show()
        }
        else if($("#button1").text() === OD){
            updateNarrative(N1);
            updateButton(O1A, O1B, O1C);
            $("#button2").show()
            $("#button3").show()
        }
        else if($("#button1").text() === OW){
            updateNarrative(N1);
            updateButton(O1A, O1B, O1C);
            $("#button2").show()
            $("#button3").show()
        }
        else if($("#button1").text() === O4A){
            updateNarrative(N5A);
            updateButton(O9A, O9B);
            $("#button3").hide()
        }
        else if($("#button1").text() === O7A){
            updateNarrative(ND);
            updateButton(OD );
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button1").text() === O8A){
            updateNarrative(ND);
            updateButton(OD );
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button1").text() === O9A){
            updateNarrative(NW);
            updateButton(OW );
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button1").text() === O10A){
            updateNarrative(ND);
            updateButton(OD );
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button1").text() === O12A){
            updateNarrative(ND);
            updateButton(OD );
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button1").text() === O5A){
            updateNarrative(NW);
            updateButton(OW );
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button1").text() === O6A){
            updateNarrative(NW);
            updateButton(OW );
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button1").text() === O11A){
            updateNarrative(NW);
            updateButton(OW );
            $("#button2").hide()
            $("#button3").hide()
        }
    })
 
    $("#button2").click(function(){
        if($("#button2").text() === O1B){
            updateNarrative(N2B);
            updateButton(O3A, O3B, O3C);
         }
         else if($("#button2").text() === O2B){
            updateNarrative(N3B);
            updateButton(O6A, O6B, O6C);
            $("#button3").show()
        }
        else if($("#button2").text() === O6B){
            updateNarrative(N8B);
            updateButton(O11A, O11B);
            $("#button3").hide()
        }
        else if($("#button2").text() === O7B){
            updateNarrative(N8B);
            updateButton(O11A, O11B);
            $("#button3").hide()
        }
        else if($("#button2").text() === O3B){
            updateNarrative(N4B);
            updateButton(O8A, O8B);
            $("#button3").hide()
        }
        else if($("#button2").text() === O5B){
            updateNarrative(ND);
            updateButton(OD);
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button2").text() === O10B){
            updateNarrative(ND);
            updateButton(OD );
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button2").text() === O9B){
            updateNarrative(ND);
            updateButton(OD );
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button2").text() === O8B){
            updateNarrative(NW);
            updateButton(OW );
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button2").text() === O11B){
            updateNarrative(ND);
            updateButton(OD );
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button2").text() === O12B){
            updateNarrative(ND);
            updateButton(OD );
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button2").text() === O4B){
            updateNarrative(ND);
            updateButton(OD );
            $("#button2").hide()
            $("#button3").hide()
        }
   })

    $("#button3").click(function(){
        if($("#button3").text() === O1C){
            updateNarrative(N2C);
            updateButton(O4A, O4B, O4C);
         }
         else if($("#button3").text() === O4C){
            updateNarrative(N5C);
            updateButton(O12A, O12B);
            $("#button3").hide()
        }
         else if($("#button3").text() === O2C){
            updateNarrative(ND);
            updateButton(OD);
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button3").text() === O3C){
            updateNarrative(ND);
            updateButton(OD);
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button3").text() === O6C){
            updateNarrative(ND);
            updateButton(OD);
            $("#button2").hide()
            $("#button3").hide()
        }
        else if($("#button3").text() === O7C){
            updateNarrative(ND);
            updateButton(OD);
            $("#button2").hide()
            $("#button3").hide()
        }
    })
});

var ND = "Your Dead" //✓
var NW = "You Win" //✓
var N1 = "Chose a Character " //✓
var N2A = "Chose witch Bob - Bob " //✓
var N2B = "Chose witch fred - FRED" //✓
var N2C = "Chose which george - George" //✓
var N3A = "Bob the builder attacked" //✓
var N3B = "Bob burger makes a" //✓
var N4A = "Fred from scooby doo went with" //✓
var N4B = "Fred flintstones attacks" //✓
var N5A = "The trashman attacks" //✓
var N5C = "george clooney made" //✓
var N7B = "Pizza man runs in to kill you and steal the pizza you" //✓
var N8B = "You and shaggy walks and finds"  //✓
var OD = "Restart?" //✓
var OW = "wanna choose another path?" //✓
var O1A = "BOB." //✓
var O1B = "FRED." //✓
var O1C = "GEORGE." //✓
var O2A = "The Builder" //✓
var O2B = "Bugers" //✓
var O2C = "The Trader" //✓ 
var O3A = "From scooby doo" //✓
var O3B = "Flintstone" //✓
var O3C = "Figglehorn " //✓
var O4A = "The trashman" //✓
var O4B = "The Rich" //✓
var O4C = "Clooney" //✓
var O5A = "flintstone " //✓
var O5B = "The Trashman " //✓
var O6A = "Burger "  //✓
var O6B = "Pizza "  //✓
var O6C = "Chicken sandwich "  //✓
var O7A = "felma "  //✓
var O7B = "shaggy "  //✓
var O7C = "Daphine  "  //✓
var O8A = "Bob the Builder " //✓
var O8B = "The Trashman " //✓
var O9A = "Bob the builder " //✓
var O9B = "flintstone " //✓
var O10A = "Attacks him"  //✓
var O10B = "lets it happen"  //✓
var O11A = "a real ghost"  //✓
var O11B = "a (fake)real ghost "  //✓\
var O12A = "a movie" //✓
var O12B = "mistake" //✓


var updateNarrative = function(a){

    $("aritcle").text(a);

}
var updateButton = function(a, b, c){

    $("#button1").text(a)
    $("#button2").text(b)
    $("#button3").text(c)

}

var createButton = function(id , text){

    return "<button type=button id=" + id + ">" + text + "</button>"

}

