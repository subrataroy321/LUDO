let dice = document.getElementById('dice');;
let rollDiceButton;
let turn;
let diceNum;




// create move box

    // const moveBoxH = document.querySelector('.moveBoxHorizontal');
    // for (let i=0; i<18; i++) {
    //     // const moveBox = document.querySelector('.moveBoxOne');
    //     const box = document.createElement('div');
    //     box.classList.add('move')
    //     box.id = i;
    //     box.textContent = i;
    //     moveBoxH.appendChild(box);
    // }


    // const moveBoxV = document.querySelector('.moveBoxVertical');
    // for (let i=0; i<18; i++) {
    //     // const moveBox = document.querySelector('.moveBoxOne');
    //     const box = document.createElement('div');
    //     box.classList.add('move')
    //     box.id = i;
    //     box.textContent = i;
    //     moveBoxV.appendChild(box);
    // }


// Function for changes Plyers Turn
function switchTurn() {
    for(let i=1; i<4; ) {
        turn = document.getElementById('turn')
        if(i == 0) {
            turn.textContent = 'Red`\s';
            turn.style.color = 'red';
            i++;
        }
        if(i == 1) {
            turn.textContent = 'Yellow`\s';
            turn.style.color = 'yellow';
            i++;
        }
        if(i == 2) {
            turn.textContent = 'Blue`\s';
            turn.style.color = '#0d52bb';
            i++;
        }
        if(i == 3) {
            turn.textContent = 'Green`\s';
            turn.style.color = '#0ab30a';
            i= 0;
        }
    }
}

function diceRoller() {
    diceNum = (Math.floor(Math.random()*6))+1;
    if(diceNum === 1) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice1.png';
            dice.alt = '1';
        },1000);
        // switchTurn();
    }else if(diceNum === 2) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice2.png';
            dice.alt = '2';
        },1000);
        // switchTurn();
    } else if(diceNum === 3) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice3.png';
            dice.alt = '3';
        },1000);
        // switchTurn();
    } else if(diceNum === 3) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice4.png';
            dice.alt = '4';
        },1000);
        // switchTurn();
    }else if(diceNum === 5) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice5.png';
            dice.alt = '5';
        },1000);
        // switchTurn();
    }else if(diceNum === 6) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice6.png';
            dice.alt = '6';
        },1000);
        document.getElementById('roll-again').textContent = 'Roll Again';
        playerMove();
    }
}

function playerMove() {
    if (diceNum == 6) {
        document.querySelectorAll('.redBox').forEach(box => {
            addEventListener('click', () => {
            //console.log(e);
            box.classList.remove('red-one');

            let rStart = document.querySelector('.r-start');
            let rOne = rStart.classList.add('red-one');
            rStart.appendChild(rOne);
        });
        diceRoller();
    }); 
    // else {

    // }
}
}

document.addEventListener('DOMContentLoaded', () => {
    
    rollDiceButton = document.getElementById('roll-dice');
    rollDiceButton.addEventListener('click', diceRoller)
    
    
});
