const tiles = {
    1: $('.tile1'),
    2: $('.tile2'),
    3: $('.tile3'),
    4: $('.tile4'),
    5: $('.tile5'),
    6: $('.tile6'),
    7: $('.tile7'),
    8: $('.tile8'),
    9: $('.tile9')
}

const possibleWins = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9],
     [1, 5, 9],
     [3, 5, 7],
     [1, 4, 7],
     [2, 5, 8],
     [3, 6, 9]
]

var playerChoice;
var aiChoice;
var turn ='playerTurn';
var X = "X";
var O = "O";
var tileCount = 0;

$('#X').click(function() {
    playerChoice = X;
    aiChoice = O;
    $('#chooseButtons').hide();

});

$('#O').click(function() {
    playerChoice = O;
    aiChoice = X;
    $('#chooseButtons').hide();
});

$('.tile').click(function() {
    if (playerChoice === "X") {
        $(this).html("X")
    } else {
        $(this).html("O")
    };
    if(checkWins() === true){
        return;
    }
    tileCount++;
    turn = "aiTurn";
    aiTurn();
});

function aiTurn(){
    var nextAiTile = Math.floor(Math.random() * 8) + 1;
    // if board has 9 tiles filled,
        // quit this function and ignore the loop below
        if(tileCount >= 9){
            return;
        }
    while($('.tile' + nextAiTile).html() !== ""){
        nextAiTile = Math.floor(Math.random() * 8) + 1;
    }
    $('.tile' + nextAiTile).html(aiChoice);
    tileCount++;
    checkWins();
};

function checkWins(){
    for(var i = 0; i < possibleWins.length; i++){
        // filledTile = 0
        var filledTile = 0;
        // check if each tile number has an X or O in it
        for(var j = 0; j < possibleWins[i]; j++){
            if($('.tile' + filledTile).html() !== ""){

            return true;
            }
            // if all 3 tiles have something in them, return trues
            if(filledTile === 3){
               alert("We have a winner!");
           }
        }
    }
}
