
const score = [0,0];
const scor = document.getElementById('scores');
const select = document.getElementById('selections');
const res = document.getElementById('result');

function getScore(selection){
    let comp_selection = Math.random();
    let winner;
    
    if(comp_selection <.34){
        comp_selection = 'Rock';
    }
    else if(comp_selection < .67){
        comp_selection = 'Paper';
    }
    else{
        comp_selection = 'Scissor';
    }

    if(selection == 'Rock'){
        if(comp_selection == 'Paper'){
            score[1]++;
            winner = "Computer";
        }
        else if(comp_selection == 'Scissor'){
            score[0]++;
            winner = "You";
        }
    }
    else if(selection == 'Paper'){
        if(comp_selection == 'Scissor'){
            score[1]++;
            winner = "Computer";
        }
        else if(comp_selection == 'Rock'){
            score[0]++;
            winner = "You";
        }
    }
    else{
        if(comp_selection == 'Rock'){
            score[1]++;
            winner = "Computer";
        }
        else if(comp_selection == 'Paper'){
            score[0]++;
            winner = "You";
        }
    }

    scor.innerHTML = `Your Score: ${score[0]} Computer Score:  ${score[1]}`;
    select.innerHTML = `You selected  <strong>${selection}</strong> Computer selected <strong>${comp_selection}</strong>`;
    if(winner == 'Computer' || winner == 'You'){
        res.innerHTML = `${winner} wins!`;
    }
    else{
    res.innerHTML = `Draw, It's a tie!`;
    }
}