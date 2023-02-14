let x = Math.round((Math.random() * 100), 10);
let score = 100;
while (score > 0) {
  let guess = prompt();
  if (guess > x) {
    console.log("Your Guess is Greater than Original Number! Try Again!");
    console.log("Total Guess Left", score);
    score--;
  }
  else if (guess < x) {
    console.log("Your Guess is Lesser than Original Number! Try Again!");
    console.log("Total Guess Left", score);
    score--;
  }
  else {
    console.log("Congratulations You've guessed correctly!");
    console.log("Total Guess Left", score);
    score--;
    break;
  }
}