$(document).ready(function(){

  var turn = 1;
  var play = true;

  $("td").click(function(){
      if($(this).text() === "" && play === true){
          if(turn%2 === 1){
              $(this).text("X");
          } 
          else
              $(this).text("O");
          turn++;
      }

  })

  $("button").click(function(){
      turn = 1;
      play = true;
      reset();
  })

});

var checkWin = function(){

  var space = [];

  for(var i = 0; i < 49; i++){
      space.push($("#space" + i).text());
  }


}

var reset = function(){

  for(var i = 0; i < 49; i++){
      $("#space" + i).text("");
  }

  $("#output").text("");

}