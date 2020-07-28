let dice;
let rollDice;
let turn;




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

document.addEventListener('DOMContentLoaded', () => {
    dice = document.getElementById('dice');
    rollDice = document.getElementById('roll-dice');
    rollDice.addEventListener('click', () => {
        
        let num1 = (Math.floor(Math.random()*6))+1;
        console.log(num1);
        if(num1 === 1) {
            dice.src = './images/roll-dice.png';
            setTimeout(function() {
                dice.src = './images/dice1.png';
                dice.alt = '1';
            },1000);
            // switchTurn();
        }else if(num1 === 2) {
            dice.src = './images/roll-dice.png';
            setTimeout(function() {
                dice.src = './images/dice2.png';
                dice.alt = '2';
            },1000);
            // switchTurn();
        } else if(num1 === 3) {
            dice.src = './images/roll-dice.png';
            setTimeout(function() {
                dice.src = './images/dice3.png';
                dice.alt = '3';
            },1000);
            // switchTurn();
        } else if(num1 === 3) {
            dice.src = './images/roll-dice.png';
            setTimeout(function() {
                dice.src = './images/dice4.png';
                dice.alt = '4';
            },1000);
            // switchTurn();
        }else if(num1 === 5) {
            dice.src = './images/roll-dice.png';
            setTimeout(function() {
                dice.src = './images/dice5.png';
                dice.alt = '5';
            },1000);
            // switchTurn();
        }else if(num1 === 6) {
            dice.src = './images/roll-dice.png';
            setTimeout(function() {
                dice.src = './images/dice6.png';
                dice.alt = '6';
            },1000);
            // document.getElementById('roll-again').textContent = 'Roll Again';
           
        }


    })


});