let userName = "";
userName === "Lee" ? console.log(`Hello,${userName}!`) : console.log("Hello!");
let userQuestion = "Will my 2024 be fab?";
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
switch (randomNumber) {
  case (randomNumber = 0):
    eightBall = "It is certain";
    break;
  case (randomNumber = 1):
    eightBall = "It is decidedly so";
    break;
  case (randomNumber = 2):
    eightBall = "Reply hazy try again";
    break;
  case (randomNumber = 3):
    eightBall = "Cannot predict now";
    break;
  case (randomNumber = 4):
    eightBall = "Do not count on it";
    break;
  case (randomNumber = 5):
    eightBall = "My sources say no";
    break;
  case (randomNumber = 6):
    eightBall = "Outlook not so good";
    break;
  case (randomNumber = 7):
    eightBall = "Signs point to yes";
    break;
  default:
    console.log("This is not contemplated");
    break;
}
console.log(`this is your FATE: ${eightBall}`);
