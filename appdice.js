var player1 = "Player 1"; 
var player2 = "Player 2"; 

function rollTheDice() { 
    setTimeout(function () { 
        var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
        var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

        if (randomNumber1 === randomNumber2) { 
            document.querySelector.innerHTML = "Draw!"; 
        } 

        else if (randomNumber1 < randomNumber2) { 
            document.querySelector.innerHTML 
            = (player2 + " WINS!"); 
        } 

        else { 
            document.querySelector.innerHTML 
            = (player1 + " WINS!"); 
        } 
    }); 
} 