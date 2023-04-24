var gOptions = ["rock","paper","scissors"]
var gUserMove 
var gComputerMove = gOptions[getRandomInt(0,2)]



// var user ={
//     selectedMove : null
// }

function onUserMove(btn){
    // console.log(btn);

    //Setting the users move from the button name
    gUserMove = btn.name

    //game logic
    playGame()

    
    console.log(getRandomInt(0,3));
    //resetting computer move
    gComputerMove = gOptions[getRandomInt(0,3)]

}

function playGame(){
    console.log('Me: ',gUserMove);
    console.log('Computer: ',gComputerMove);

    // Tie \\
    if(gComputerMove === gUserMove){
        console.log('Its a tie');
        return
    }

    // Scissors \\
    // if(gComputerMove === 'scissors' && gUserMove === 'paper'){
    //     console.log('Computer Wins');
    //     return
    // } else {
    //     console.log('You Win');
    //  }

    if (gComputerMove === "scissors"){
       if (gUserMove === "paper"){
        console.log('Computer Win!');
       } else {
        console.log('You Win!');
       }
    }
    
    // Rock \\

    // if (gComputerMove === 'rock' && gUserMove === 'scissors'){
    //     console.log('Computer Wins');
    // } else {
    //     console.log('You Win');
    //     return
    // }

    if (gComputerMove === "rock"){
        if (gUserMove === "scissors"){
         console.log('Computer Win!');
        } else {
         console.log('You Win!');
        }
     }

    // Paper \\

    // if (gComputerMove === 'paper' && gUserMove === 'rock'){
    //     console.log('Computer Wins');
    //     return
    // } else {
    //     console.log('You Win');
    // }

    if (gComputerMove === "paper"){
        if (gUserMove === "rock"){
         console.log('Computer Win!');
        } else {
         console.log('You Win!');
        }
     }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }