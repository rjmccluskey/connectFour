  $(document).ready(function() {
    var url = "https://connectfourdbc.firebaseio.com";
    var firebaseRef = new Firebase(url);

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

    var doSomething = function() {
      var $availableSlots = $(this).parent().children(".empty").length
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
    }
    var readFirebase = function() {
      firebaseRef.on("value", function(snap) {
        JSON.stringify(snap.val())
        var datum = snap.val();
        console.log(datum);
        console.log(datum.color)
        console.log(datum.column)
        var gameState = game.drop(datum.column,datum.color);
        doSomething();
      });
    }

    $("button").click(function() {

      var columnId = $(this).parent().index();
      // console.log(columnId);
      var setFirebase = function() {
        firebaseRef.set({
          color: currentColor,
          column: columnId
        });
      }
      setFirebase();


      // var readFirebase = function() {
      //     firebaseRef.on("value", function(snap) {
      //       JSON.stringify(snap.val())
      //       var datum = snap.val();
      //       console.log(datum);
      //       console.log(datum.color)
      //       console.log(datum.column)

                          // var gameState = game.drop(datum.column,datum.color) //Give to the Model guys.
                          // var gameState = game.drop(datum.column,datum.color) //Give to the Model guys.
                          // console.log(gameState)




    })
    $(".win button").click(function() {
      location.reload();
    })
  })
