  $(document).ready(function() {

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
      //boardDrop(columnId,currentColor) //Give to the Model guys.

      $availableSlots = $(this).parent().children(".empty").length
      if ($availableSlots > 0){
        $chipPlacement = $(this).parent().children(".empty").last()
        console.log($(this).parent().children(".empty").length)
        $chipPlacement.addClass(currentColor).removeClass("empty");
        // $(this).parent().children(".empty").last().addClass(currentColor).removeClass("empty");

        currentColor = nextColor(currentColor)
        console.log(currentColor)
        $("#board").effect( "shake" );
      }
      else console.log("Column is Full!")
    })
  })
