console.log('App.js is connected');
//Putting questions into an array
let Questions = [
  new Question('Which player blew a 3-1 lead in the most important game of his career?', ['Steph Curry', 'Anthony Davis', 'Steph Curry', 'James Harden'], 'Steph Curry'),
  new Question('Who is the most overrated MVP in NBA history?', ['Steph Curry', 'Lebron James', 'Steph Curry', 'Kobe Bryant'], 'Steph Curry'),
  new Question('Who was the true MVP of the 2015-2016 NBA season?', ['James Harden', 'Steph Curry', 'LeGOAT James', 'Anthony Davis'], 'LeGOAT James'),
  new Question('Which player can average 30, but still lose by 20?', ['Marc Gasol', 'Kevin Durant', 'Demarcus Cousins', 'Anthony Davis'], 'Anthony Davis'),
  new Question('On the day of his retirement, which of these players scored 60?', ['Michael Jordan', 'Kevin Garnet', 'Kobe Bryant', "Shaquille O'Neal"], 'Kobe Bryant'),
  new Question("Which of these players led his team down from a 3-1 deficit to stage the greatest comeback in NBA and sport's history?", ['LeGreatest James', 'Kevin Durant', 'Charles Barkeley', 'Kobe Bryant'], 'LeGreatest James'),
  new Question("Who did the Golden State Warriors defeat in the 2016 WCF?", ['Spurs', 'OKC Thunder', 'LA Clippers', 'Houston Rockets'], 'OKC Thunder'),
  new Question("Which of these NBA superstars shocked the Basketball world by going to the team that defeated him in NBA free agency? This move was called the weakest an NBA superstar has ever made, by, ESPN reporter, Stephen A Smith.", ['Blake Griffin', 'Pau Gasol', 'Chris Paul', 'Kevin Durant'], 'Kevin Durant'),
  new Question("Which team had the greatest regular season record AND won a ring?", ['Phoenix Suns', 'Chicago Bulls', 'Golden State Warriors', 'Los Angeles Lakers'], 'Chicago Bulls'),
  new Question("This player was called, 'The Answer.'", ['Kobe Bryant', 'Tim Duncan', 'Allen Iverson', 'Kevin Durant'], 'Allen Iverson'),
]

//Creating a Player
let Player1 = new Player(0, 59);
//Creating computer
let Computer1 = new Computer(0, 15);

//End Game Screen - Restart Game
function endStartNew() {
  //stopping timer
  clearInterval(timer);
  //Hiding Quiz Questions + Timer,
  $('#options').velocity('slideUp', {
    duration: 800
  });
  $('#question').velocity('slideUp', {
    duration: 800
  });
  $('#timer').velocity('slideUp', {
    duration: 800
  });
  $('#clock>h3').velocity('slideUp', {
    duration: 800
  });
  //making try again button appear
  $('#tryAgain').toggle();
  if (Player1.score > Computer1.score) {
    $('#scoreSection>h2>').text('You have defeated the Comptuer');
  } else if (Player1.score == Computer1.score) {
    $('#scoreSection>h2').text('You have tied the Comptuer');
  } else if (Player1.score < Computer1.score) {
    $('#scoreSection>h2').text('The Computer has defeated you.');
  }

}

function counter() {
  //Interval runs every second

  let timer = setInterval(function() {
    $('#timer').html(Player1.time + 's');
    Player1.time--;
    if (Player1.time === -1) {
      // alert('time is up');
      clearInterval(timer);
      //End game when time is up
      alert('Time is up!');
      endStartNew();
    }

  }, 1000);
}


//STarting Timer
counter();
//printing Question 1
printQA(0);
//Outputting Initial Score
$('#playerScore').html(Player1.score);
$('#computerScore').html(Computer1.score);
