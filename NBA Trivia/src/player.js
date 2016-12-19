console.log('Player is connected');

//Player Class
class Player {
  constructor(score, time) {
    this.score = score;
    this.time = time;
  }

  updateScore() {
    this.score+=1;
  }
}

//Computer Class
class Computer {
  constructor(score, time) {
    this.score = score;
    this.time = time;
  }
  checkRight() {
    //giving computer 50% chance of getting question correct
    let x = Math.floor(Math.random()*2);
    console.log('Computer Score', x);
    if( x==1) {
      this.score+=1;
    }

  }

}
