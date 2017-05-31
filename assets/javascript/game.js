    // Game Variables
    var goalScore;
    var aBtnValue = Math.floor(Math.random() * 12) + 1;
    var bBtnValue = Math.floor(Math.random() * 12) + 1;
    var xBtnValue = Math.floor(Math.random() * 12) + 1;
    var yBtnValue = Math.floor(Math.random() * 12) + 1;
    var wins = 0;
    var losses = 0;
    var userScore = 0;

    // Reset Function after win or loss
    var reset = function() {
        var userScore = 0;
        var goalScore = Math.floor(Math.random() * 100) + 20;
        var aBtnValue = Math.floor(Math.random() * 12) + 1;
        var bBtnValue = Math.floor(Math.random() * 12) + 1;
        var xBtnValue = Math.floor(Math.random() * 12) + 1;
        var yBtnValue = Math.floor(Math.random() * 12) + 1;
    }



    // Goal Score RNG
    var goalScore = Math.floor(Math.random() * 100) + 20;

    // Display Goal Score in Goal Score Div
    $("#goal-score").append(goalScore);


    // Button A test
    $("#buttonA").on("click", function() {
        console.log(aBtnValue);
        userScore += aBtnValue;
        alert(userScore);
        $("#user-score").html(userScore);
        if (userScore == goalScore) {
            wins++;
            reset();
        } else if (userScore > goalScore) {
            losses++;
            reset();
        }
    })


    $("#buttonB").click(function() {
        console.log(bBtnValue);
        userScore += bBtnValue;
        alert(userScore);
        $("#user-score").html(userScore);
        if (userScore == goalScore) {
            wins++;
            reset();
        } else if (userScore > goalScore) {
            losses++;
            reset();
        }
    })

    $("#buttonX").click(function() {
        console.log(xBtnValue);
        userScore += xBtnValue;
        alert(userScore);
        $("#user-score").html(userScore);
        if (userScore == goalScore) {
            wins++;
            reset();
        } else if (userScore > goalScore) {
            losses++;
            reset();
        }
    })

    $("#buttonY").click(function() {
        console.log(yBtnValue);
        userScore += yBtnValue;
        alert(userScore);
        $("#user-score").html(userScore);
        if (userScore == goalScore) {
            wins++;
            reset();
        } else if (userScore > goalScore) {
            losses++;
            reset();
        }

    })
