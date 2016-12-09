//Event Listeners
//Player 1 Button - X
//Reset Board Button
document.querySelector('#reset').addEventListener('click', reset);

//Initializing Function, Player starts with X
assignX();

//Assigning Value of X
function assignX() {
    document.querySelector('#score').innerHTML = 'Player 1';


    const square1 = document.querySelector('.square1').addEventListener('click', function() {
        this.innerHTML = 'X';
        assignO();
    });
    const square2 = document.querySelector('.square2').addEventListener('click', function() {
        this.innerHTML = 'X';
        assignO();
    });
    const square3 = document.querySelector('.square3').addEventListener('click', function() {
        this.innerHTML = 'X';
        assignO();
    });
    const square4 = document.querySelector('.square4').addEventListener('click', function() {
        this.innerHTML = 'X';
        assignO();
    });
    const square5 = document.querySelector('.square5').addEventListener('click', function() {
        this.innerHTML = 'X';
        assignO();
    });
    const square6 = document.querySelector('.square6').addEventListener('click', function() {
        this.innerHTML = 'X';
        assignO();
    });
    const square7 = document.querySelector('.square7').addEventListener('click', function() {
        this.innerHTML = 'X';
        assignO();
    });
    const square8 = document.querySelector('.square8').addEventListener('click', function() {
        this.innerHTML = 'X';
        assignO();
    });
    const square9 = document.querySelector('.square9').addEventListener('click', function() {
        this.innerHTML = 'X';
        assignO();
    });

    checkWin();

}

//Assigning Value of O
function assignO() {
    document.querySelector('#score').innerHTML = 'Player 2';

    const square1 = document.querySelector('.square1').addEventListener('click', function() {
        this.innerHTML = 'O';
        assignX();
    });
    const square2 = document.querySelector('.square2').addEventListener('click', function() {
        this.innerHTML = 'O';
        assignX();
    });
    const square3 = document.querySelector('.square3').addEventListener('click', function() {
        this.innerHTML = 'O';
        assignX();
    });
    const square4 = document.querySelector('.square4').addEventListener('click', function() {
        this.innerHTML = 'O';
        assignX();
    });
    const square5 = document.querySelector('.square5').addEventListener('click', function() {
        this.innerHTML = 'O';
        assignX();
    });
    const square6 = document.querySelector('.square6').addEventListener('click', function() {
        this.innerHTML = 'O';
        assignX();
    });
    const square7 = document.querySelector('.square7').addEventListener('click', function() {
        this.innerHTML = 'O';
        assignX();
    });
    const square8 = document.querySelector('.square8').addEventListener('click', function() {
        this.innerHTML = 'O';
        assignX();
    });
    const square9 = document.querySelector('.square9').addEventListener('click', function() {
        this.innerHTML = 'O';
        assignX();

    });

    checkWin();
}

//Set winner
function displayWinner(x) {

    if (x == 'O') {

        document.querySelector('#score').innerHTML = 'Game over! Player O has won.';


    }

    if (x == 'X') {

        document.querySelector('#score').innerHTML = 'Game over! Player X has won.';


    }

    if (x == 'draw') {
        document.querySelector('#score').innerHTML = 'This game was a draw.';

    }
}


//checking if win or loss
function checkWin() {

    const square1 = document.querySelector('.square1').innerHTML;
    const square2 = document.querySelector('.square2').innerHTML;
    const square3 = document.querySelector('.square3').innerHTML;
    const square4 = document.querySelector('.square4').innerHTML;
    const square5 = document.querySelector('.square5').innerHTML;
    const square6 = document.querySelector('.square6').innerHTML;
    const square7 = document.querySelector('.square7').innerHTML;
    const square8 = document.querySelector('.square8').innerHTML;
    const square9 = document.querySelector('.square9').innerHTML;

    //Horizontal Win Rules - X and O

    //Row 1 -for X
    if (square1 === 'X' && square2 === 'X' && square3 === 'X') {

        displayWinner('X');
    }
    //Row 1 - for O
    if (square1 === 'O' && square2 === 'O' && square3 === 'O') {
        displayWinner('O');
    }
    //Row 2 -for X
    if (square4 === 'X' && square5 === 'X' && square6 === 'X') {
        displayWinner('X');


    }

    //Row 2 -for O    
    if (square4 === 'O' && square5 === 'O' && square6 === 'O') {
        displayWinner('O');


    }

    //Row 3 - for X
    if (square7 === 'X' && square8 === 'X' && square9 === 'X') {
        displayWinner('X');


    }

    //Row 3 - for O
    if (square7 === 'O' && square8 === 'O' && square9 === 'O') {
        displayWinner('O');


    }

    //Vertical Win Rules - X and O

    //Column 1 -For X
    if (square1 === 'X' && square4 === 'X' && square7 === 'X') {
        displayWinner('X');



    }
    //Column 1 -For O
    if (square1 === 'O' && square4 === 'O' && square7 === 'O') {
        displayWinner('O');

    }

    //Column 2 - For X
    if (square2 === 'X' && square5 === 'X' && square8 === 'X') {
        displayWinner('X');

    }
    //Column 2 - For O
    if (square2 === 'O' && square5 === 'O' && square8 === 'O') {
        displayWinner('O');

    }


    //Column 3 - For X
    if (square3 === 'X' && square6 === 'X' && square9 === 'X') {
        displayWinner('X');

    }

    //Column 3 - For O
    if (square3 === 'O' && square6 === 'O' && square9 === 'O') {
        displayWinner('O');

    }


    //Diagonal Win Rules - X and O

    //Vertical One - top left to bottom right
    //For X
    if (square1 === 'X' && square5 === 'X' && square9 === 'X') {
        displayWinner('X');

    }
    //For O
    if (square1 === 'O' && square5 === 'O' && square9 === 'O') {
        displayWinner('O');

    }

    //Vertical Two - top right to bottom left
    //For X
    if (square3 === 'X' && square5 === 'X' && square7 === 'X') {
        displayWinner('X');

    }

    // For O
    if (square3 === 'O' && square5 === 'O' && square7 === 'O') {
        displayWinner('O');

    }
    //Initializing Check For Draw Function
    checkDraw();


}

//Checking for a Draw
function checkDraw() {
    let y = 0;
    let td = document.querySelectorAll('td');
    for (let x = 0; x < td.length; x++) {
        if (td[x].innerHTML !== '') {
            y = y + 1;
        }
        if (y == 9) {
            displayWinner('draw');
        }

    }


}

//Reset Function - Clearing Board
function reset() {
    //refreshing entire page
    location.reload();
}