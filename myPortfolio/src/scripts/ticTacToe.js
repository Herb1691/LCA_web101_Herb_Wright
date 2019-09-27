var gameMarker = 'X';
var winCondition = false;

function placeMarker(ID) {
    if( document.getElementById(ID).innerHTML == 'X') {
        alert("It's O's Turn!");
        // document.getElementById(ID).innerHTML = 'O';
        // gameMarker = 'X';
    }
    else if( document.getElementById(ID).innerHTML == 'O') {
        alert("It's X's Turn!");
        // document.getElementById(ID).innerHTML = 'X';
        // gameMarker = 'O';
    }
    else {
        if(gameMarker == 'X') {
            document.getElementById(ID).innerHTML = gameMarker;
            gameMarker = 'O';
        }
        else {
            document.getElementById(ID).innerHTML = gameMarker;
            gameMarker = 'X';
        }
        checkForWin();
    }

    if (winCondition == true) {
        alert(gameMarker+" is the winner!");
    }    
}

function checkForWin() {
    // Check Four the 3 possible wins from Cell One
    if (document.getElementById("cellOne").innerHTML == 'X' && document.getElementById("cellTwo").innerHTML == 'X'
        && document.getElementById("cellThree").innerHTML == 'X') {
            winCondition = true;
            gameMarker = 'X';
    }
    else if (document.getElementById("cellOne").innerHTML == 'X' && document.getElementById("cellFour").innerHTML == 'X' 
        && document.getElementById("cellSeven").innerHTML == 'X') {
            winCondition = true;
            gameMarker = 'X';
    }
    else if (document.getElementById("cellOne").innerHTML == 'X' && document.getElementById("cellFive").innerHTML == 'X'
        && document.getElementById("cellNine").innerHTML == 'X') {
            winCondition = true;
            gameMarker = 'X';
    }
    else if (document.getElementById("cellOne").innerHTML == 'O' && document.getElementById("cellTwo").innerHTML == 'O'
        && document.getElementById("cellThree").innerHTML == 'O') {
            winCondition = true;
            gameMarker = 'O';
    }
    else if (document.getElementById("cellOne").innerHTML == 'O' && document.getElementById("cellFour").innerHTML == 'O'
        && document.getElementById("cellSeven").innerHTML == 'O') {
            winCondition = true;
            gameMarker = 'O';
    }
    else if (document.getElementById("cellOne").innerHTML == 'O' && document.getElementById("cellFive").innerHTML == 'O'
        && document.getElementById("cellNine").innerHTML == 'O') {
            winCondition = true;
            gameMarker = 'O';
    }
    // Cell Two Wins
    else if (document.getElementById("cellTwo").innerHTML == 'X' && document.getElementById("cellFive").innerHTML == 'X'
        && document.getElementById("cellEight").innerHTML == 'X') {
            winCondition = true;
            gameMarker = 'X';
    }
    else if (document.getElementById("cellTwo").innerHTML == 'O' && document.getElementById("cellFive").innerHTML == 'O'
        && document.getElementById("cellEight").innerHTML == 'O') {
            winCondition = true;
            gameMarker = 'O';
    }
    // Cell Three Wins
    else if (document.getElementById("cellThree").innerHTML == 'X' && document.getElementById("cellSix").innerHTML == 'X'
        && document.getElementById("cellNine").innerHTML == 'X') {
            winCondition = true;
            gameMarker = 'X';
    }
    else if (document.getElementById("cellThree").innerHTML == 'X' && document.getElementById("cellFive").innerHTML == 'X'
        && document.getElementById("cellSeven").innerHTML == 'X') {
            winCondition = true;
            gameMarker = 'X';
    }
    else if (document.getElementById("cellThree").innerHTML == 'O' && document.getElementById("cellSix").innerHTML == 'O'
        && document.getElementById("cellNine").innerHTML == 'O') {
            winCondition = true;
            gameMarker = 'O';
    }
    else if (document.getElementById("cellThree").innerHTML == 'O' && document.getElementById("cellFive").innerHTML == 'O'
        && document.getElementById("cellSeven").innerHTML == 'O') {
            winCondition = true;
            gameMarker = 'O';
    }
    // Cell Four Win
    else if (document.getElementById("cellFour").innerHTML == 'X' && document.getElementById("cellFive").innerHTML == 'X'
        && document.getElementById("cellSix").innerHTML == 'X') {
            winCondition = true;
            gameMarker = 'X';
    }
    else if (document.getElementById("cellFour").innerHTML == 'O' && document.getElementById("cellFive").innerHTML == 'O'
        && document.getElementById("cellSix").innerHTML == 'O') {
            winCondition = true;
            gameMarker = 'O';
    }
    // Cell Seven Win
    else if (document.getElementById("cellSeven").innerHTML == 'X' && document.getElementById("cellEight").innerHTML == 'X'
        && document.getElementById("cellNine").innerHTML == 'X') {
            winCondition = true;
            gameMarker = 'X';
    }
    else if (document.getElementById("cellSeven").innerHTML == 'O' && document.getElementById("cellEight").innerHTML == 'O'
        && document.getElementById("cellNine").innerHTML == 'O') {
            winCondition = true;
            gameMarker = 'O';
    }
}