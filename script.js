
// Function to randomly generate a choice for the computer
function getComputerChoice(){
    let random_number = Math.floor(Math.random() * 3);
    if (random_number == 1) {
        return "Rock";
    }

    else if (random_number == 2) {
        return "Paper";
    }

    return "Scissors";
}

// Function to get user choice
function getHumanChoice(){
    let user_input = prompt("Please enter your choice for RPS");
    return user_input;
}

// Function for the whole game
function playGame(){

    let human_score = 0;
    let computer_score = 0;
    function playRound(human_choice,computer_choice){
        if (human_choice == "Rock" && computer_choice == "Scissors"){
            console.log(`You Won! Computer choice was ${computer_choice}`);
            human_score += 1;
        }
    
        else if (human_choice == "Paper" && computer_choice == "Rock"){
            console.log(`You Won! Computer choice was ${computer_choice}`);
            human_score += 1;
        }
    
        else if (human_choice == "Scissors" && computer_choice == "Paper"){
            console.log(`You Won! Computer choice was ${computer_choice}`);
            human_score += 1;
        }
    
        else if (human_choice == "Rock" && computer_choice == "Paper"){
            console.log(`You Lose! Computer choice was ${computer_choice}`);
            computer_score += 1;
        }
    
        else if (human_choice == "Paper" && computer_choice == "Scissors"){
            console.log(`You Lose! Computer choice was ${computer_choice}`);
            computer_score += 1;
        }
    
        else if (human_choice == "Scissors" && computer_choice == "Rock"){
            console.log(`You Lose! Computer choice was ${computer_choice}`);
            computer_score += 1;
        }
    
        else{
            console.log("You selected the same option! DRAW!!!")
        }
    
    }

    for(let i = 0; i <5; i++){
        const human_selection = getHumanChoice()
        const computer_selection = getComputerChoice()
        playRound(human_selection,computer_selection)
    }

    if (human_score > computer_score){
        console.log(`You Won the game! Your score is ${human_score} and computer's score is ${computer_score}`);
    }

    else if (human_score < computer_score){
        console.log(`You Lost the game! Your score is ${human_score} and computer's score is ${computer_score}`);
    }

    else {
        console.log(`You Tied the game! Your score is ${human_score} and computer's score is ${computer_score}`);
    }
}

playGame()

