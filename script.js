let dice = document.getElementById('dice');;
let rollDiceButton = document.getElementById('roll-dice');;
let homeDiv = document.querySelector('.home')
let turn;
let diceNum;
const moveArray = [];
// player 0 = red, 1= blue
let player=0;

document.addEventListener('DOMContentLoaded', () => {
    
    rollDiceClick()
    
})

// fills moveArray
const moveBox = document.querySelectorAll('.move')
moveBox.forEach(element => {
    moveArray.push(element);
})

// console.log(moveArray);

const redMoveArray = [moveArray[66], moveArray[63], moveArray[60], moveArray[57],moveArray[54], moveArray[35], moveArray[34], moveArray[33], moveArray[32],moveArray[31], moveArray[30], moveArray[24], moveArray[18], moveArray[19], moveArray[20], moveArray[21], moveArray[22], moveArray[23], moveArray[15], moveArray[12], moveArray[9], moveArray[6], moveArray[3], moveArray[0], moveArray[1], moveArray[2], moveArray[5], moveArray[8], moveArray[11],  moveArray[14], moveArray[17], moveArray[36], moveArray[37], moveArray[38], moveArray[39], moveArray[40], moveArray[41], moveArray[47], moveArray[53],moveArray[52], moveArray[51], moveArray[50], moveArray[49], moveArray[48], moveArray[56], moveArray[59], moveArray[62], moveArray[65], moveArray[68], moveArray[71], moveArray[70], moveArray[67], moveArray[64], moveArray[61], moveArray[58], moveArray[55], homeDiv];
const blueMoveArray = [moveArray[5], moveArray[8], moveArray[11], moveArray[14], moveArray[17], moveArray[36], moveArray[37], moveArray[38], moveArray[39], moveArray[40], moveArray[41], moveArray[47],moveArray[53], moveArray[52], moveArray[51], moveArray[50],moveArray[49], moveArray[48], moveArray[56], moveArray[59], moveArray[62], moveArray[65], moveArray[68], moveArray[71], moveArray[70], moveArray[69], moveArray[66], moveArray[63],moveArray[60], moveArray[57], moveArray[54], moveArray[35], moveArray[34], moveArray[33], moveArray[32], moveArray[31], moveArray[30], moveArray[24], moveArray[18], moveArray[19], moveArray[20], moveArray[21], moveArray[22], moveArray[23], moveArray[15], moveArray[12], moveArray[9], moveArray[6], moveArray[3], moveArray[0], moveArray[1], moveArray[4], moveArray[7], moveArray[10], moveArray[13], moveArray[16], homeDiv];

// const yellowMoveArray = [moveArray[19], moveArray[20], moveArray[21], moveArray[22], moveArray[23], ]

// console.log(blueMoveArray);
// Function for changes Plyers Turn
function switchPlayerTurn() {
    
    // for( player=0; player<2; ) {
        turn = document.getElementById('turn')
        if(player === 0) {
            turn.textContent = 'Blue'
            turn.style.color = '#0d52bb';
            rollDiceClick()
            player= 1;
            // redPlayerMove();
        }
        
        else if(player === 1) {
            turn.textContent = 'Red';
            turn.style.color = 'red';
            rollDiceClick()
            player = 0;
            // bluePlayerMove();
        }
        // if(player == 3) {
        //     turn.textContent = 'Green`\s';
        //     turn.style.color = '#0ab30a';
        //     player= 0;
            
        // }
    // }
}

function diceRoller() {
    removeRollDiceClick();
    // var diceSound = 
    document.getElementById('diceAudio').play();
    
    diceNum = (Math.floor(Math.random()*6))+1;

    console.log(diceNum)
    if(diceNum === 1) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice1.png';
            dice.alt = '1';
            document.getElementById('roll-again').textContent = '';
            if (player === 0) {
                redPlayerMove();
            }else if (player===1) {
                bluePlayerMove();
            }
        },1000);
        // playerMove();
        // switchPlayerTurn();
    }else if(diceNum === 2) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice2.png';
            dice.alt = '2';
            document.getElementById('roll-again').textContent = '';
            if (player === 0) {
                redPlayerMove();
            }else if (player===1) {
                bluePlayerMove();
            }
        },1000);
        // playerMove();
        // switchPlayerTurn();
    } else if(diceNum === 3) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice3.png';
            dice.alt = '3';
            document.getElementById('roll-again').textContent = '';
            if (player === 0) {
                redPlayerMove();
            }else if (player===1) {
                bluePlayerMove();
            }
        },1000);
        // playerMove();
        // switchPlayerTurn();
    } else if(diceNum === 4) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice4.png';
            dice.alt = '4';
            document.getElementById('roll-again').textContent = '';
            if (player === 0) {
                redPlayerMove();
            }else if (player===1) {
                bluePlayerMove();
            }
        },1000);
        // playerMove();
        // switchPlayerTurn();
    }else if(diceNum === 5) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice5.png';
            dice.alt = '5';
            document.getElementById('roll-again').textContent = '';
            if (player === 0) {
                redPlayerMove();
            }else if (player===1) {
                bluePlayerMove();
            }
        },1000);
        // playerMove();
        // switchPlayerTurn();
    }else if(diceNum === 6) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice6.png';
            dice.alt = '6';
            document.getElementById('roll-again').textContent = 'Roll Again'; 
            if (player === 0) {
                redPlayerMove();
            }else if (player===1) {
                bluePlayerMove();
            }
            // 
            // playerMove();
            // switchPlayerTurn();
        },1000);
    }
}

function rollDiceClick() {
    rollDiceButton.style.visibility = 'visible';
    rollDiceButton.addEventListener('click', diceRoller);
}

function removeRollDiceClick() {
    rollDiceButton.style.visibility = 'hidden';
    rollDiceButton.removeEventListener('click', diceRoller);
}

// RED PLAYER CODES

let rStart = document.querySelector('.r-start');
let redCircle = document.querySelectorAll('.red-circle');

let redOnCount=0;
function moveRedCircle(event){
    removeEventRedOn();
    if (redOnCount === 0) {
        event.target.classList.remove('red-circle');
        rStart.classList.add('redActive','redOn0');
        rStart.id = 0;
        redOnCount++;
        console.log(rStart);
        removeEventRedCircle(event);
        rollDiceClick();
    } else if (redOnCount === 1) {
        event.target.classList.remove('red-circle');
        rStart.classList.add('redActive','redOn1');
        rStart.id = 0;
        redOnCount++;
        console.log(rStart);
        removeEventRedCircle(event);
        rollDiceClick();
    } else if (redOnCount === 2) {
        event.target.classList.remove('red-circle');
        rStart.classList.add('redActive','redOn2');
        rStart.id = 0;
        redOnCount++;
        console.log(rStart);
        removeEventRedCircle(event);
        rollDiceClick();
    } else if (redOnCount === 3) {
        event.target.classList.remove('red-circle');
        rStart.classList.add('redActive','redOn3');
        rStart.id = 0;
        redOnCount++;
        console.log(rStart);
        removeEventRedCircle(event);
        rollDiceClick();
    }
};

function removeEventRedCircle(event) {
    // if (!event.target.classList.value.includes('redBox')) {
        redCircle.forEach(ele => {
            ele.removeEventListener('click', moveRedCircle)
        });
    //  } 
    //  else {
    //     redBox.forEach(ele => {
    //         ele.removeEventListener('click', moveRedBox)
    //     });
    //  }
}

// let targetId = 0;

function moveRedOn(e) {
    removeEventRedCircle();
    let targetId = diceNum + parseInt(e.target.id);
    console.log(targetId);
    if (e.target.classList.value.includes('redOn2') && e.target.classList.value.includes('redOn3')) {
        e.target.classList.remove('redOn3');
        redMoveArray[targetId].classList.add('redActive','redOn3');
        redMoveArray[targetId].id = targetId;
        console.log(redMoveArray[targetId]);
        removeEventRedOn();
        // rollDiceClick();
        switchPlayerTurn();
    } else if (e.target.classList.value.includes('redOn1') && e.target.classList.value.includes( 'redOn3')) {
        e.target.classList.remove('redOn3');
        redMoveArray[targetId].classList.add('redActive','redOn3');
        redMoveArray[targetId].id = targetId;
        console.log(redMoveArray[targetId]);
        removeEventRedOn();
        // rollDiceClick();
        switchPlayerTurn();
    } else if (e.target.classList.value.includes('redOn0')&& e.target.classList.value.includes( 'redOn3')) {
        e.target.classList.remove('redOn3');
        redMoveArray[targetId].classList.add('redActive','redOn3');
        redMoveArray[targetId].id = targetId;
        console.log(redMoveArray[targetId]);
        removeEventRedOn();
        // rollDiceClick();
        switchPlayerTurn();
    } else if (e.target.classList.value.includes('redOn3')) {
        e.target.classList.remove('redActive','redOn3');
        redMoveArray[targetId].classList.add('redActive','redOn3');
        redMoveArray[targetId].id = targetId;
        console.log(redMoveArray[targetId]);
        removeEventRedOn();
        // rollDiceClick();
        switchPlayerTurn();
    } else if (e.target.classList.value.includes('redOn1') && e.target.classList.value.includes( 'redOn2')) {
        e.target.classList.remove('redOn2');
        redMoveArray[targetId].classList.add('redActive','redOn2');
        redMoveArray[targetId].id = targetId;
        console.log(redMoveArray[targetId]);
        removeEventRedOn();
        // rollDiceClick(); 
        switchPlayerTurn();
    } else if (e.target.classList.value.includes('redOn0') && e.target.classList.value.includes( 'redOn2')) {
        e.target.classList.remove('redOn2');
        redMoveArray[targetId].classList.add('redActive','redOn2');
        redMoveArray[targetId].id = targetId;
        console.log(redMoveArray[targetId]);
        removeEventRedOn();
        // rollDiceClick(); 
        switchPlayerTurn();
    }else if (e.target.classList.value.includes('redOn02')) {
        e.target.classList.remove('redActive','redOn2');
        redMoveArray[targetId].classList.add('redActive','redOn2');
        redMoveArray[targetId].id = targetId;
        console.log(redMoveArray[targetId]);
        removeEventRedOn();
        // rollDiceClick();
        switchPlayerTurn();
    }else if (e.target.classList.value.includes('redOn0') && e.target.classList.value.includes('redOn1')) {
        e.target.classList.remove('redOn1');
        redMoveArray[targetId].classList.add('redActive','redOn1');
        redMoveArray[targetId].id = targetId;
        console.log(redMoveArray[targetId]);
        removeEventRedOn();
        // rollDiceClick(); 
        switchPlayerTurn();
    } else if (e.target.classList.value.includes('redOn1')) {
        e.target.classList.remove('redActive','redOn1');
        redMoveArray[targetId].classList.add('redActive','redOn1');
        redMoveArray[targetId].id = targetId;
        console.log(redMoveArray[targetId]);
        removeEventRedOn();
        // rollDiceClick(); 
        switchPlayerTurn();
    } else if (e.target.classList.value.includes('redOn0')) {
        console.log(e.target.classList.value.includes('redOn0'))
        e.target.classList.remove('redActive','redOn0');
        redMoveArray[targetId].classList.add('redActive','redOn0');
        redMoveArray[targetId].id = targetId;
        console.log(redMoveArray[targetId]);
        removeEventRedOn();
        // rollDiceClick();
        switchPlayerTurn();
    }
}

function removeEventRedOn() {
    redActive.forEach(ele => {
        ele.removeEventListener('click', moveRedOn)
    
    });
}
    
let redOnCheckValue = false;
function redOnCheck() {
    let moveBoxCheckArray;
    moveBox.forEach(element => {
        if (element.classList.value.includes('redOn0')) {
            redOnCheckValue = true;
            
        } else if (element.classList.value.includes('redOn0') && element.classList.value.includes('redOn1')) {
            redOnCheckValue = true;
            
        } else if (element.classList.value.includes('redOn0') && element.classList.value.includes('redOn1') || element.classList.value.includes('redOn2')) {
            redOnCheckValue = true;
            
        } else if (element.classList.value.includes('redOn0') && element.classList.value.includes('redOn1') || element.classList.value.includes('redOn2') && element.classList.value.includes('redOn3')) {
            redOnCheckValue = true;
            
        }
    })
    // console.log(moveBoxCheck);
    // if (moveBoxCheck === true) {
    //     redOnCheckValue = true;
        // console.log(redOnCheckValue);
    // }
    // redOnCheckValue = false;
}

let redActive;
function redPlayerMove() {
    redActive = document.querySelectorAll('.redActive');
    if (diceNum === 6) {
        redOnCheck();
        console.log(redOnCheckValue);
        if(redOnCheckValue) {
            redCircle.forEach(element => {
                element.addEventListener('click', moveRedCircle);
                
            }) 
            redActive.forEach(element => {
                element.addEventListener('click', moveRedOn)
                
            });

            redOnCheckValue = false;
            
        } else {
            redCircle.forEach(element => {
                element.addEventListener('click', moveRedCircle);
                
                
            }) 
        }
    } else if (diceNum === 5){
        redOnCheck();
        console.log(redOnCheckValue);
        if(redOnCheckValue) {
            redActive.forEach(element => {
                element.addEventListener('click', moveRedOn)
               
            })
            redOnCheckValue = false;
        } else {
            redOnCheckValue = false;
            switchPlayerTurn();
        }
    
    } else if (diceNum === 4){
        redOnCheck();
        console.log(redOnCheckValue);
        if(redOnCheckValue) {
            redActive.forEach(element => {
                element.addEventListener('click', moveRedOn)
                
            })
            redOnCheckValue = false;
        } else {
            redOnCheckValue = false;
            switchPlayerTurn();
        }
    } else if (diceNum === 3){
        redOnCheck();
        console.log(redOnCheckValue);
        if(redOnCheckValue) {
            redActive.forEach(element => {
                element.addEventListener('click', moveRedOn)
                
            })
            redOnCheckValue = false;
        } else {
            redOnCheckValue = false;
            switchPlayerTurn();
        } 
    } else if (diceNum === 2){
        redOnCheck();
        console.log(redOnCheckValue);
        if(redOnCheckValue) {
            redActive.forEach(element => {
                element.addEventListener('click', moveRedOn)
                
            })
            redOnCheckValue = false;
        } else {
            redOnCheckValue = false;
            switchPlayerTurn();
        }
    } else if (diceNum === 1){
        redOnCheck();
        console.log(redOnCheckValue);
        if(redOnCheckValue) {
            redActive.forEach(element => {
                element.addEventListener('click', moveRedOn)
                
            })
            redOnCheckValue = false;
        } else {
            redOnCheckValue = false;
            switchPlayerTurn();
        }
    } else {
        switchPlayerTurn();
        
    }
    
}

// RED PLAYER CODE END

// BLUE PLAYER CODE

let bStart = document.querySelector('.b-start');
let blueCircle = document.querySelectorAll('.blue-circle');

let blueOnCount=0;
function moveBlueCircle(event){
    removeEventBlueOn();
    if (blueOnCount === 0) {
        event.target.classList.remove('blue-circle');
        bStart.classList.add('blueActive','blueOn0');
        bStart.id = 0;
        blueOnCount++;
        console.log(bStart);
        removeEventBlueCircle(event);
        rollDiceClick();
    } else if (blueOnCount === 1) {
        event.target.classList.remove('blue-circle');
        bStart.classList.add('blueActive','blueOn1');
        bStart.id = 0;
        blueOnCount++;
        console.log(bStart);
        removeEventBlueCircle(event);
        rollDiceClick();
    } else if (blueOnCount === 2) {
        event.target.classList.remove('blue-circle');
        bStart.classList.add('blueActive','blueOn2');
        bStart.id = 0;
        blueOnCount++;
        console.log(bStart);
        removeEventBlueCircle(event);
        rollDiceClick();
    } else if (blueOnCount === 3) {
        event.target.classList.remove('blue-circle');
        bStart.classList.add('blueActive','blueOn3');
        bStart.id = 0;
        blueOnCount++;
        console.log(bStart);
        removeEventBlueCircle(event);
        rollDiceClick();
    }
};

function removeEventBlueCircle(event) {
    // if (!event.target.classList.value.includes('redBox')) {
        blueCircle.forEach(ele => {
            ele.removeEventListener('click', moveBlueCircle)
        });
    //  } 
    //  else {
    //     redBox.forEach(ele => {
    //         ele.removeEventListener('click', moveRedBox)
    //     });
    //  }
}

// let targetId = 0;

function moveBlueOn(e) {
    removeEventBlueCircle();
    let targetId = diceNum + parseInt(e.target.id);
    console.log(targetId);
    if (e.target.classList.value.includes('blueOn2') && e.target.classList.value.includes('blueOn3')) {
        e.target.classList.remove('blueOn3');
        blueMoveArray[targetId].classList.add('blueActive','blueOn3');
        blueMoveArray[targetId].id = targetId;
        console.log(blueMoveArray[targetId]);
        removeEventBlueOn();
        // rollDiceClick();
        switchPlayerTurn();
    } else if (e.target.classList.value.includes('blueOn1') && e.target.classList.value.includes( 'blueOn3')) {
        e.target.classList.remove('blueOn3');
        blueMoveArray[targetId].classList.add('blueActive','blueOn3');
        blueMoveArray[targetId].id = targetId;
        console.log(blueMoveArray[targetId]);
        removeEventBlueOn();
        // rollDiceClick();
        switchPlayerTurn();
    } else if (e.target.classList.value.includes('blueOn0')&& e.target.classList.value.includes( 'blueOn3')) {
        e.target.classList.remove('blueOn3');
        blueMoveArray[targetId].classList.add('blueActive','blueOn3');
        blueMoveArray[targetId].id = targetId;
        console.log(blueMoveArray[targetId]);
        removeEventBlueOn();
        // rollDiceClick();
        switchPlayerTurn();
    } else if (e.target.classList.value.includes('blueOn3')) {
        e.target.classList.remove('blueActive','blueOn3');
        blueMoveArray[targetId].classList.add('blueActive','blueOn3');
        blueMoveArray[targetId].id = targetId;
        console.log(blueMoveArray[targetId]);
        removeEventBlueOn();
        // rollDiceClick();
        switchPlayerTurn();
    } else if (e.target.classList.value.includes('blueOn1') && e.target.classList.value.includes( 'blueOn2')) {
        e.target.classList.remove('blueOn2');
        blueMoveArray[targetId].classList.add('blueActive','blueOn2');
        blueMoveArray[targetId].id = targetId;
        console.log(blueMoveArray[targetId]);
        removeEventBlueOn();
        // rollDiceClick(); 
        switchPlayerTurn();
    } else if (e.target.classList.value.includes('blueOn0') && e.target.classList.value.includes( 'blueOn2')) {
        e.target.classList.remove('blueOn2');
        blueMoveArray[targetId].classList.add('blueActive','blueOn2');
        blueMoveArray[targetId].id = targetId;
        console.log(blueMoveArray[targetId]);
        removeEventBlueOn();
        // rollDiceClick(); 
        switchPlayerTurn();
    }else if (e.target.classList.value.includes('blueOn02')) {
        e.target.classList.remove('blueActive','blueOn2');
        blueMoveArray[targetId].classList.add('blueActive','blueOn2');
        blueMoveArray[targetId].id = targetId;
        console.log(blueMoveArray[targetId]);
        removeEventBlueOn();
        // rollDiceClick();
        switchPlayerTurn();
    }else if (e.target.classList.value.includes('blueOn0') && e.target.classList.value.includes('blueOn1')) {
        e.target.classList.remove('blueOn1');
        blueMoveArray[targetId].classList.add('blueActive','blueOn1');
        blueMoveArray[targetId].id = targetId;
        console.log(blueMoveArray[targetId]);
        removeEventBlueOn();
        // rollDiceClick(); 
        switchPlayerTurn();
    } else if (e.target.classList.value.includes('blueOn1')) {
        e.target.classList.remove('blueActive','blueOn1');
        blueMoveArray[targetId].classList.add('blueActive','blueOn1');
        blueMoveArray[targetId].id = targetId;
        console.log(blueMoveArray[targetId]);
        removeEventBlueOn();
        // rollDiceClick(); 
        switchPlayerTurn();
    } else if (e.target.classList.value.includes('blueOn0')) {
        console.log(e.target.classList.value.includes('blueOn0'))
        e.target.classList.remove('blueActive','blueOn0');
        blueMoveArray[targetId].classList.add('blueActive','blueOn0');
        blueMoveArray[targetId].id = targetId;
        console.log(blueMoveArray[targetId]);
        removeEventBlueOn();
        // rollDiceClick();
        switchPlayerTurn();
    }
}

function removeEventBlueOn() {
    blueActive.forEach(ele => {
        ele.removeEventListener('click', moveBlueOn)
    
    });
}
    
let blueOnCheckValue = false;
function blueOnCheck() {
    let moveBoxCheckArray;
    moveBox.forEach(element => {
        if (element.classList.value.includes('blueOn0')) {
            blueOnCheckValue = true;
            
        } else if (element.classList.value.includes('blueOn0') && element.classList.value.includes('blueOn1')) {
            blueOnCheckValue = true;
            
        } else if (element.classList.value.includes('blueOn0') && element.classList.value.includes('blueOn1') || element.classList.value.includes('blueOn2')) {
            blueOnCheckValue = true;
            
        } else if (element.classList.value.includes('blueOn0') && element.classList.value.includes('blueOn1') || element.classList.value.includes('blueOn2') && element.classList.value.includes('blueOn3')) {
            blueOnCheckValue = true;
            
        }
    })
    // console.log(moveBoxCheck);
    // if (moveBoxCheck === true) {
    //     redOnCheckValue = true;
        // console.log(redOnCheckValue);
    // }
    // redOnCheckValue = false;
}

let blueActive;
function bluePlayerMove() {
    blueActive = document.querySelectorAll('.blueActive');
    if (diceNum === 6) {
        blueOnCheck();
        console.log(blueOnCheckValue);
        if(blueOnCheckValue) {
            blueCircle.forEach(element => {
                element.addEventListener('click', moveBlueCircle);
                
            }) 
            blueActive.forEach(element => {
                element.addEventListener('click', moveBlueOn)
                
            });

            blueOnCheckValue = false;
            
        } else {
            blueCircle.forEach(element => {
                element.addEventListener('click', moveBlueCircle);
                
                
            }) 
        }
    } else if (diceNum === 5){
        blueOnCheck();
        console.log(blueOnCheckValue);
        if(blueOnCheckValue) {
            blueActive.forEach(element => {
                element.addEventListener('click', moveBlueOn)
               
            })
            blueOnCheckValue = false;
            
        } else {
            blueOnCheckValue = false;
            switchPlayerTurn();
        }
    
    } else if (diceNum === 4){
        blueOnCheck();
        console.log(blueOnCheckValue);
        if(blueOnCheckValue) {
            blueActive.forEach(element => {
                element.addEventListener('click', moveBlueOn)
                
            })
            blueOnCheckValue = false;
        } else {
            blueOnCheckValue = false;
            switchPlayerTurn();
        }
    } else if (diceNum === 3){
        blueOnCheck();
        console.log(blueOnCheckValue);
        if(blueOnCheckValue) {
            blueActive.forEach(element => {
                element.addEventListener('click', moveBlueOn)
                
            })
            blueOnCheckValue = false;
        } else {
            blueOnCheckValue = false;
            switchPlayerTurn();
        } 
    } else if (diceNum === 2){
        blueOnCheck();
        console.log(blueOnCheckValue);
        if(blueOnCheckValue) {
            blueActive.forEach(element => {
                element.addEventListener('click', moveBlueOn)
                
            })
            blueOnCheckValue = false;
        } else {
            blueOnCheckValue = false;
            switchPlayerTurn();
        }
    } else if (diceNum === 1){
        blueOnCheck();
        console.log(blueOnCheckValue);
        if(blueOnCheckValue) {
            blueActive.forEach(element => {
                element.addEventListener('click', moveBlueOn)
                
            })
            blueOnCheckValue = false;
        } else {
            blueOnCheckValue = false;
            switchPlayerTurn();
        }
    } else {
        switchPlayerTurn();
        
    }
    
}

// BLUE PLAYER CODE END



