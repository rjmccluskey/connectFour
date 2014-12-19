  $(document).ready(function() {
    var game = new Board()
    var currentColor = "black"

    var nextColor = function(currentColor){
      if (currentColor == "red")
        return "black"
      else if (currentColor == "black")
        return "red"
      else
        return "red"
    }

    //if black, then nextPlayer = red
    //if red, then nextPlayer = black

    $("button").click(function() {

      var columnId = $(this).parent().index();
      console.log(columnId);
      var gameState = game.drop(columnId,currentColor) //Give to the Model guys.
      console.log(gameState)

      $availableSlots = $(this).parent().children(".empty").length
      if ($availableSlots > 0){
        $chipPlacement = $(this).parent().children(".empty").last()
        // console.log($(this).parent().children(".empty").length)
        $chipPlacement.addClass(currentColor).removeClass("empty");
        // $(this).parent().children(".empty").last().addClass(currentColor).removeClass("empty");

        if (gameState === true) {
          console.log("WINNERRRRERERERERER " + currentColor)
          $(".win").css("display", "block");
          $(".win-text").html(currentColor + " " + "WINS!!!!!!")
          $(".board").effect( "shake" );
        }

        if (gameState === "draw") {
          $(".win").css("display", "block");
          $(".win img").attr("src", "http://i.imgur.com/z8kU5bB.jpg")
          $(".win-text").html("DRAW!!!")
          $(".board").effect( "shake" );
        }

        currentColor = nextColor(currentColor)
        // console.log(currentColor)

      }
      else { console.log("Column is Full!") }
    })
    $(".win button").click(function() {
      location.reload();
    })
  })
