let dice = document.getElementById('dice');;
let rollDiceButton;
let turn;
let diceNum = 6;
const moveArray = [];

// fills moveArray
const moveBox = document.querySelectorAll('.move')
moveBox.forEach(element => {
    moveArray.push(element);
})

console.log(moveArray);

const redMoveArray = [moveArray[66], moveArray[63], moveArray[60], moveArray[57],moveArray[54], moveArray[35], moveArray[34], moveArray[33], moveArray[32],moveArray[31], moveArray[30], moveArray[24], moveArray[18], moveArray[19], moveArray[20], moveArray[21], moveArray[22], moveArray[23], moveArray[15], moveArray[12], moveArray[9], moveArray[6], moveArray[3], moveArray[0], moveArray[1], moveArray[2], moveArray[5], moveArray[8], moveArray[11],  moveArray[14], moveArray[17], moveArray[36], moveArray[37], moveArray[38], moveArray[39], moveArray[40], moveArray[41], moveArray[47], moveArray[53],moveArray[52], moveArray[51], moveArray[50], moveArray[49], moveArray[48], moveArray[56], moveArray[59], moveArray[62], moveArray[65], moveArray[68], moveArray[71], moveArray[70], moveArray[67], moveArray[64], moveArray[61], moveArray[58], moveArray[55]];
const yellowMoveArray = [moveArray[19], moveArray[20], moveArray[21], moveArray[22], moveArray[23], ]

console.log(redMoveArray);
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
    //rollDiceButton.removeEventListener('click', diceRoller);

    diceNum = (Math.floor(Math.random()*6))+1;
    console.log(diceNum)
    if(diceNum === 1) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice1.png';
            dice.alt = '1';
        },1000);
        document.getElementById('roll-again').textContent = '';
        // switchTurn();
    }else if(diceNum === 2) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice2.png';
            dice.alt = '2';
        },1000);
        document.getElementById('roll-again').textContent = '';
        // switchTurn();
    } else if(diceNum === 3) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice3.png';
            dice.alt = '3';
        },1000);
        document.getElementById('roll-again').textContent = '';
        // switchTurn();
    } else if(diceNum === 3) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice4.png';
            dice.alt = '4';
        },1000);
        document.getElementById('roll-again').textContent = '';
        // switchTurn();
    }else if(diceNum === 5) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice5.png';
            dice.alt = '5';
        },1000);
        document.getElementById('roll-again').textContent = '';
        // switchTurn();
    }else if(diceNum === 6) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice6.png';
            dice.alt = '6';
            document.getElementById('roll-again').textContent = 'Roll Again'; // 
            playerMove();
        },1000);
    }
}
let rStart = document.querySelector('.r-start');
let redBox = document.querySelectorAll('.redBox');

function makeRedBoxMoveable(event){
    event.target.classList.remove('redBox');
    rStart.classList.add('redBox', 'redOn');
    rStart.id = '0'
    removeEvent(redBox,event);
};

function removeEvent(box,event) {
    if (!event.target.classList.value.includes('redBox')) {
        box.forEach(ele => {
            ele.removeEventListener('click', makeRedBoxMoveable)
        });
     }
}

function moveRedOn() {

}

function playerMove() {
    if (diceNum === 6) {
        
        redBox.forEach(element => {
            element.addEventListener('click', makeRedBoxMoveable);
            rollDiceClick()
            // diceRoller();
            // playerMove();
            return;
        }) 
    } else if (diceNum === 5){
        if(moveBox.classList.contains('redOn')) {
            const redOn = document.querySelectorAll('.redOn')
            redOn.forEach(element => {
                element.addEventListener('click', )
                
            })
        }
    
    }
}

function rollDiceClick() {
    rollDiceButton = document.getElementById('roll-dice');
    rollDiceButton.addEventListener('click', diceRoller);
}



document.addEventListener('DOMContentLoaded', () => {
    
    //rollDiceClick()
    playerMove();
})

