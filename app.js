const prompt = require('prompt-sync')();
console.log("Welcome to the MINDMAZE.")
console.log("a game where we test your math skills.")
const username = prompt('What is your name? ');


let winningStreak = 0;
let playerIQ = 0;
let questionsLeft = 4;
onGoingTest()

function onGoingTest(){
    const ready = prompt("Are you Ready? [Y]es or [N]o?" );
    if(ready === "Y" && questionsLeft === 4){
        console.log("Okay Here We GO!");
    } else if (ready === "Y" && questionsLeft >= 1){
        console.log(`You've got this`)
    } else if (ready === "Y" && questionsLeft === 0){
        console.log(`Good Luck on the next ${questionsLeft}  questions left`)
    }else if(ready === "N" && questionsLeft === 4){
        console.log("Do Not frighten little one")
    }else if(ready === "N" && questionsLeft >= 2){
        console.log(`its okay to take a break you have ${questionsLeft} questions left`)
    } else if (ready === "N"){
        console.log("even Java is impressed with you! take the break and come back. Your Status is" + displayStats())
    }
}
firstQuestion();
onGoingTest()
secondQuestion()
onGoingTest()
thirdQuestion()
onGoingTest()
fourthQuestion()
moreToBeAdded()

console.log("game by Steven Cueto")

function firstQuestion() {
    console.log("What is a Square?")
    const questionOne = prompt("A square is the result of multiplying a number by itself. [T]rue or [F]alse?")
    if(questionOne === "T"){
        playerIQ += 25;
        questionsLeft--
        winningStreak++;
        console.log("Right Choice!")
        console.log(` Winning Streak is ${winningStreak}!! Can you get more than 5?`)
    }else{
        playerIQ -= 25;
        questionsLeft--
        winningStreak == 0;
        console.log("Bro, this one was really easy. I would reconsider my choices")
        console.log("Can you even get one?")
    }
    displayStats()
}

function secondQuestion() {
    console.log("Which is the equivalent decimal number for forty nine thousandths?")
    const questionTwo = prompt("[A] 0.49. [B] .0049. [C] 0.049  [D]4.9")
    if(questionTwo === "C"){
        playerIQ += 25;
        questionsLeft--
        winningStreak++;
        console.log("Right Choice!")
        console.log(` Winning Streak is ${winningStreak}!! Can you get more than 5?`);
    }else{
        playerIQ -= 25;
        questionsLeft--
        winningStreak == 0;
        console.log("Bro, this one was really easy. I would reconsider my choices")
        console.log("Your Winning Streak is over! al least you got one to begin with")
    }
    displayStats()
}
function thirdQuestion() {
    console.log("How much is 23450 x 0.123")
    const questionThree = prompt("[A] 1423.98 [B] 2,884.45. [C] 2309.049  [D]2410.99")
    if(questionThree === "B"){
        playerIQ += 25;
        questionsLeft--
        winningStreak++;
        console.log("Right Choice!")
        console.log(` Winning Streak is ${winningStreak}!! Can you get more than 5?`);
    }else{
        playerIQ -= 25;
        questionsLeft--
        winningStreak--;
        console.log("Bro, this one was really easy. I would reconsider my choices")
        console.log("Your Winning Streak is over! al least you got one to begin with")
    }
    displayStats()
}

function fourthQuestion() {
    console.log("7. Which of the following is a pair of like terms?")
    const questionFour = prompt("[A]– 10xyz^2, 3xyz^2 [B] 4xyz^2, 4x^2yz [C] –7xy^2z, – 7x^2yz  [D]3xyz, 3x^2y^2z^2")
    if(questionFour === "A"){
        playerIQ += 25;
        questionsLeft--
        winningStreak++;
        console.log("Right Choice!")
        console.log(` Winning Streak is ${winningStreak}!! Can you get more than 5?`);
    }else{
        playerIQ -= 25;
        questionsLeft--
        winningStreak == 0;
        console.log("Bro, this one was really easy. I would reconsider my choices")
        console.log("Your Winning Streak is over! al least you got one to begin with")
    }
    displayStats()
}

function displayStats(){
    console.log(`${username}`)
    console.log(`You have ${questionsLeft} questions left`)
    console.log(`Current Math Index is ${playerIQ}`)
    if (winningStreak >= 0){
        console.log(`Winning Streak is ${winningStreak}!!`)
    }else {
        console.log("Winning Streak is what now? ")
        console.log(`Yup is ${winningStreak}!!`)
    }

}

function moreToBeAdded() {
    if (questionsLeft === 0){
        console.log("more to be added...")
        console.log("Thanks for playing my game")
        console.log("by Steven Cueto")

    }
}
