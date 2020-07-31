let dice = document.getElementById('dice');;
let rollDiceButton = document.getElementById('roll-dice');;
let homeDiv = document.querySelector('.home')
let turn;
let diceNum;
const moveArray = [];
// player 0 = red, 1= blue
let player=0;
let playerRollCount = 0;
let redIdValuebeforeCollision; 
let blueIdValuebeforeCollision; 

document.addEventListener('DOMContentLoaded', () => {
    var welcomeScreen = document.getElementById("welcome")
    welcomeScreen.style.display = "block";
    // When the user clicks on <span> (x), close the window
    var welcomeSpan = document.getElementsByClassName("close1")[0]
    welcomeSpan.onclick = function() {
        welcomeScreen.style.display = "none";
    }
    // When the user clicks anywhere outside of the window, close it
    window.onclick = function(event) {
        if (event.target == welcomeScreen) {
            welcomeScreen.style.display = "none";
        }
    }
    rollDiceClick()
})

// fills moveArray variavle
const moveBox = document.querySelectorAll('.move')
moveBox.forEach(element => {
    moveArray.push(element);
    element.textContent = '';
})
// players path array on board
const redMoveArray = [moveArray[66], moveArray[63], moveArray[60], moveArray[57],moveArray[54], moveArray[35], moveArray[34], moveArray[33], moveArray[32],moveArray[31], moveArray[30], moveArray[24], moveArray[18], moveArray[19], moveArray[20], moveArray[21], moveArray[22], moveArray[23], moveArray[15], moveArray[12], moveArray[9], moveArray[6], moveArray[3], moveArray[0], moveArray[1], moveArray[2], moveArray[5], moveArray[8], moveArray[11],  moveArray[14], moveArray[17], moveArray[36], moveArray[37], moveArray[38], moveArray[39], moveArray[40], moveArray[41], moveArray[47], moveArray[53],moveArray[52], moveArray[51], moveArray[50], moveArray[49], moveArray[48], moveArray[56], moveArray[59], moveArray[62], moveArray[65], moveArray[68], moveArray[71], moveArray[70], moveArray[67], moveArray[64], moveArray[61], moveArray[58], moveArray[55], homeDiv];
const blueMoveArray = [moveArray[5], moveArray[8], moveArray[11], moveArray[14], moveArray[17], moveArray[36], moveArray[37], moveArray[38], moveArray[39], moveArray[40], moveArray[41], moveArray[47],moveArray[53], moveArray[52], moveArray[51], moveArray[50],moveArray[49], moveArray[48], moveArray[56], moveArray[59], moveArray[62], moveArray[65], moveArray[68], moveArray[71], moveArray[70], moveArray[69], moveArray[66], moveArray[63],moveArray[60], moveArray[57], moveArray[54], moveArray[35], moveArray[34], moveArray[33], moveArray[32], moveArray[31], moveArray[30], moveArray[24], moveArray[18], moveArray[19], moveArray[20], moveArray[21], moveArray[22], moveArray[23], moveArray[15], moveArray[12], moveArray[9], moveArray[6], moveArray[3], moveArray[0], moveArray[1], moveArray[4], moveArray[7], moveArray[10], moveArray[13], moveArray[16], homeDiv];

// dice roll sound 
const diceRollSound = new Audio()
diceRollSound.src = './sounds/rolldice.mp3'

// move sound
const moveSound = new Audio()
moveSound.src = './sounds/move2.mp3'

// how to play pop up when there is a click on how to play?
var gameRules = document.getElementById("gameRules");
var btn = document.getElementById("myBtn");
var gameRulesSpan = document.getElementsByClassName("close3")[0];
btn.onmouseover = function() {
    btn.style.color = 'red';
};
btn.onmouseleave = function() {
    btn.style.color = 'white';
};
btn.onclick = function() {
  gameRules.style.display = "block";
}
gameRulesSpan.onclick = function() {
  gameRules.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == gameRules) {
    gameRules.style.display = "none";
  }
}

// Function for changes Plyers Turn
function switchPlayerTurn() {
    turn = document.getElementById('turn')
    if(player === 0) {
        turn.textContent = 'Blue'
        turn.style.color = '#0d52bb';
        rollDiceClick()
        player= 1;
        playerRollCount = 0;
    } else if(player === 1) {
        turn.textContent = 'Red';
        turn.style.color = 'red';
        rollDiceClick()
        player = 0;
        playerRollCount = 0;
    }
}
// function detects which player is playing and calls the player to make a move if there is a move.
function detectPlayer() {
    if (player === 0) {
        redPlayerMove();
    }else if (player===1) {
        bluePlayerMove();
    }
}
// function for rolling the dice
function diceRoller() {
    removeRollDiceClick();
    diceRollSound.play();// dice rolling sound
    diceNum = (Math.floor(Math.random()*6))+1;
    if(diceNum === 1) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice1.png';
            dice.alt = '1';
            document.getElementById('roll-again').textContent = '';
            detectPlayer();
        },1000);
    }else if(diceNum === 2) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice2.png';
            dice.alt = '2';
            document.getElementById('roll-again').textContent = '';
            detectPlayer();
        },1000);
    } else if(diceNum === 3) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice3.png';
            dice.alt = '3';
            document.getElementById('roll-again').textContent = '';
            detectPlayer();
        },1000);
    } else if(diceNum === 4) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice4.png';
            dice.alt = '4';
            document.getElementById('roll-again').textContent = '';
            detectPlayer();
        },1000);
    }else if(diceNum === 5) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice5.png';
            dice.alt = '5';
            document.getElementById('roll-again').textContent = '';
            detectPlayer();
        },1000);
    }else if(diceNum === 6) {
        dice.src = './images/roll-dice.png';
        setTimeout(function() {
            dice.src = './images/dice6.png';
            dice.alt = '6';
            document.getElementById('roll-again').textContent = 'Roll Again'; 
            detectPlayer();
        },1000);
    }
}
// function activates the roll dice button and makes clickable which rolls the dice
function rollDiceClick() {
    function buttonVisiblity() {
        rollDiceButton.style.visibility = 'visible';
        rollDiceButton.addEventListener('click', diceRoller);
    }
    setTimeout(buttonVisiblity, 800);
}
// function deactivates the roll dice button
function removeRollDiceClick() {
    rollDiceButton.style.visibility = 'hidden';
    rollDiceButton.removeEventListener('click', diceRoller);
}

//// RED PLAYER CODES
// Red players global variables
let rStart = document.querySelector('.r-start');
let redCircle = document.querySelectorAll('.red-circle');
let redOnCount=0;
let redTargetId;
let redOnCheckValue = false;
let redActive;
// function for moving the redcircles/ tokens from home squares.
function moveRedCircle(event){
    removeEventRedOn();
    moveSound.play();
    // if else statement checks if there redcircles already exsists if exsists, gets a different number like redOn0, redOn1, redOn2
    if (redOnCount === 0) {
        event.target.classList.remove('red-circle');
        rStart.classList.add('redActive','redOn0');
        rStart.id = 0;
        redOnCount++;
        removeEventRedCircle(event);
        rollDiceClick();
    } else if (redOnCount === 1) {
        event.target.classList.remove('red-circle');
        rStart.classList.add('redActive','redOn1');
        rStart.id = 0;
        redOnCount++;
        removeEventRedCircle(event);
        rollDiceClick();
    } else if (redOnCount === 2) {
        event.target.classList.remove('red-circle');
        rStart.classList.add('redActive','redOn2');
        rStart.id = 0;
        redOnCount++;
        removeEventRedCircle(event);
        rollDiceClick();
    } else if (redOnCount === 3) {
        event.target.classList.remove('red-circle');
        rStart.classList.add('redActive','redOn3');
        rStart.id = 0;
        redOnCount++;
        removeEventRedCircle(event);
        rollDiceClick();
    }
};
// function to remove the event for redCicles/ token in home start box 
function removeEventRedCircle(event) {
    redCircle.forEach(ele => {
        ele.removeEventListener('click', moveRedCircle)
    });
}
// function removes onboard red circle's/token's event and switch the player when the diceNum != 6
function removeRedEventSwitchPlayer() {
    removeEventRedOn();
    if (diceNum === 6) {
        rollDiceClick();
    } else {
        switchPlayerTurn();
    }
}
// function for moving redCircles/token which in on the board.
function moveRedOn(e) {
    removeEventRedCircle();
    moveSound.play();
    redTargetId = diceNum + parseInt(e.target.id);
    // if else condition to move redCircle/token from its exsisting box to a new box using dice value
    if (e.target.classList.value.includes('redOn2') && e.target.classList.value.includes('redOn3')) {
        e.target.classList.remove('redOn3');
        redMoveArray[redTargetId].classList.add('redActive','redOn3');
        redMoveArray[redTargetId].id = redTargetId;
        removeRedEventSwitchPlayer();
    } else if (e.target.classList.value.includes('redOn1') && e.target.classList.value.includes( 'redOn3')) {
        e.target.classList.remove('redOn3');
        redMoveArray[redTargetId].classList.add('redActive','redOn3');
        redMoveArray[redTargetId].id = redTargetId;
        removeRedEventSwitchPlayer();
    } else if (e.target.classList.value.includes('redOn0')&& e.target.classList.value.includes( 'redOn3')) {
        e.target.classList.remove('redOn3');
        redMoveArray[redTargetId].classList.add('redActive','redOn3');
        redMoveArray[redTargetId].id = redTargetId;
        removeRedEventSwitchPlayer();
    } else if (e.target.classList.value.includes('redOn3')) {
        e.target.classList.remove('redActive','redOn3');
        removeBlueActive(redTargetId);
        redMoveArray[redTargetId].classList.add('redActive','redOn3');
        redMoveArray[redTargetId].id = redTargetId;
        removeRedEventSwitchPlayer();
    } else if (e.target.classList.value.includes('redOn1') && e.target.classList.value.includes( 'redOn2')) {
        e.target.classList.remove('redOn2');
        redMoveArray[redTargetId].classList.add('redActive','redOn2');
        redMoveArray[redTargetId].id = redTargetId;
        removeRedEventSwitchPlayer();
    } else if (e.target.classList.value.includes('redOn0') && e.target.classList.value.includes( 'redOn2')) {
        e.target.classList.remove('redOn2');
        redMoveArray[redTargetId].classList.add('redActive','redOn2');
        redMoveArray[redTargetId].id = redTargetId;
        removeRedEventSwitchPlayer();
    }else if (e.target.classList.value.includes('redOn02')) {
        e.target.classList.remove('redActive','redOn2');
        removeBlueActive(redTargetId);
        redMoveArray[redTargetId].classList.add('redActive','redOn2');
        redMoveArray[redTargetId].id = redTargetId;
        removeRedEventSwitchPlayer();
    }else if (e.target.classList.value.includes('redOn0') && e.target.classList.value.includes('redOn1')) {
        e.target.classList.remove('redOn1');
        redMoveArray[redTargetId].classList.add('redActive','redOn1');
        redMoveArray[redTargetId].id = redTargetId;
        removeRedEventSwitchPlayer();
    } else if (e.target.classList.value.includes('redOn1')) {
        e.target.classList.remove('redActive','redOn1');
        removeBlueActive(redTargetId);
        redMoveArray[redTargetId].classList.add('redActive','redOn1');
        redMoveArray[redTargetId].id = redTargetId;
        removeRedEventSwitchPlayer();
    } else if (e.target.classList.value.includes('redOn0')) {
        e.target.classList.remove('redActive','redOn0');
        removeBlueActive(redTargetId);
        redMoveArray[redTargetId].classList.add('redActive','redOn0');
        redMoveArray[redTargetId].id = redTargetId;
        removeRedEventSwitchPlayer();
    }
}
// function for removing the click events on redOnCircles/tokens.
function removeEventRedOn() {
    redActive.forEach(ele => {
        ele.removeEventListener('click', moveRedOn)
    
    });
}
// function to check if there any red player on board or not    
function redOnCheck() {
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
    
}
// function decides when the redPlayer can move.
function redPlayerMove() {
    if(playerRollCount<3) {
        playerRollCount++;
        redActive = document.querySelectorAll('.redActive');
        if (diceNum === 6) {
            redOnCheck();
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
}
// function for removeing and adding blue-circle/token at start home box when there is collision by red player
function removeBlueActive(targetLocation) {
    if (redMoveArray[targetLocation].classList.value.includes('star')) {
        return;
    } else if (redMoveArray[targetLocation].classList.value.includes('blueActive')) {
        redMoveArray[targetLocation].classList.remove('blueActive');
        if(redMoveArray[targetLocation].classList.value.includes('blueOn0')) {
            redMoveArray[targetLocation].classList.remove('blueOn0')
        } else if(redMoveArray[targetLocation].classList.value.includes('blueOn1')) {
            redMoveArray[targetLocation].classList.remove('blueOn1')
        } else if(redMoveArray[targetLocation].classList.value.includes('blueOn2')) {
            redMoveArray[targetLocation].classList.remove('blueOn2')
        } else if(redMoveArray[targetLocation].classList.value.includes('blueOn3')) {
            redMoveArray[targetLocation].classList.remove('blueOn3')
        } else if(redMoveArray[targetLocation].classList.value.includes('blueOn0') && redMoveArray[targetLocation].classList.value.includes('blueOn1') ) {
            return;
        }else if(redMoveArray[targetLocation].classList.value.includes('blueOn0') && redMoveArray[targetLocation].classList.value.includes('blueOn2') ) {
            return;
        }else if(redMoveArray[targetLocation].classList.value.includes('blueOn0') && redMoveArray[targetLocation].classList.value.includes('blueOn3') ) {
            return;
        }else if(redMoveArray[targetLocation].classList.value.includes('blueOn1') && redMoveArray[targetLocation].classList.value.includes('blueOn2') ) {
            return;
        }else if(redMoveArray[targetLocation].classList.value.includes('blueOn1') && redMoveArray[targetLocation].classList.value.includes('blueOn3') ) {
            return;
        }else if(redMoveArray[targetLocation].classList.value.includes('blueOn2') && redMoveArray[targetLocation].classList.value.includes('blueOn3') ) {
            return;
        }
        const blueBox = document.querySelectorAll('.blueBox');
        for (let i = 0; i<blueBox.length; i++) {
            if (blueBox[i].classList.value.includes('blue-circle')) {
            } else if(!blueBox[i].classList.value.includes('blue-circle')) {
                blueBox[i].classList.add('blue-circle')
                i = blue.length;
            } 
        }
        redMoveArray[targetLocation].id = blueTargetId;
    } 
}
// RED PLAYER CODE END

//// BLUE PLAYER CODE
// Red players global variables
let bStart = document.querySelector('.b-start');
let blueCircle = document.querySelectorAll('.blue-circle');
let blueOnCount=0;
let blueTargetId;
let blueOnCheckValue = false;
let blueActive;
// function for moving the bluecircles/ tokens from home squares.
function moveBlueCircle(event){
    removeEventBlueOn();
    moveSound.play();
    if (blueOnCount === 0) {
        event.target.classList.remove('blue-circle');
        bStart.classList.add('blueActive','blueOn0');
        bStart.id = 0;
        blueOnCount++;
        removeEventBlueCircle(event);
        rollDiceClick();
    } else if (blueOnCount === 1) {
        event.target.classList.remove('blue-circle');
        bStart.classList.add('blueActive','blueOn1');
        bStart.id = 0;
        blueOnCount++;
        removeEventBlueCircle(event);
        rollDiceClick();
    } else if (blueOnCount === 2) {
        event.target.classList.remove('blue-circle');
        bStart.classList.add('blueActive','blueOn2');
        bStart.id = 0;
        blueOnCount++;
        removeEventBlueCircle(event);
        rollDiceClick();
    } else if (blueOnCount === 3) {
        event.target.classList.remove('blue-circle');
        bStart.classList.add('blueActive','blueOn3');
        bStart.id = 0;
        blueOnCount++;
        removeEventBlueCircle(event);
        rollDiceClick();
    }
};
// function to remove the event for blueCicles/ token in home start box
function removeEventBlueCircle(event) {
        blueCircle.forEach(ele => {
            ele.removeEventListener('click', moveBlueCircle)
        });
}
// function removes onboard red circle's/token's event and switch the player when the diceNum != 6
function removeBlueEventSwitchPlayer() {
        removeEventBlueOn();
        if (diceNum === 6) {
            rollDiceClick();
        } else {
            switchPlayerTurn();
        }
}
// function for moving blueCircles/token which in on the board.
function moveBlueOn(e) {
    removeEventBlueCircle();
    moveSound.play();
    blueTargetId = diceNum + parseInt(e.target.id);
    if (e.target.classList.value.includes('blueOn2') && e.target.classList.value.includes('blueOn3')) {
        e.target.classList.remove('blueOn3');
        blueMoveArray[blueTargetId].classList.add('blueActive','blueOn3');
        blueMoveArray[blueTargetId].id = blueTargetId;
        removeBlueEventSwitchPlayer();
    } else if (e.target.classList.value.includes('blueOn1') && e.target.classList.value.includes( 'blueOn3')) {
        e.target.classList.remove('blueOn3');
        blueMoveArray[blueTargetId].classList.add('blueActive','blueOn3');
        blueMoveArray[blueTargetId].id = blueTargetId;
        removeBlueEventSwitchPlayer();
    } else if (e.target.classList.value.includes('blueOn0')&& e.target.classList.value.includes( 'blueOn3')) {
        e.target.classList.remove('blueOn3');
        blueMoveArray[blueTargetId].classList.add('blueActive','blueOn3');
        blueMoveArray[blueTargetId].id = blueTargetId;
        removeBlueEventSwitchPlayer();
    } else if (e.target.classList.value.includes('blueOn3')) {
        e.target.classList.remove('blueActive','blueOn3');
        removeRedActive(blueTargetId);
        blueMoveArray[blueTargetId].classList.add('blueActive','blueOn3');
        blueMoveArray[blueTargetId].id = blueTargetId;
        removeBlueEventSwitchPlayer();
    } else if (e.target.classList.value.includes('blueOn1') && e.target.classList.value.includes( 'blueOn2')) {
        e.target.classList.remove('blueOn2');
        blueMoveArray[blueTargetId].classList.add('blueActive','blueOn2');
        blueMoveArray[blueTargetId].id = blueTargetId;
        removeBlueEventSwitchPlayer();
    } else if (e.target.classList.value.includes('blueOn0') && e.target.classList.value.includes( 'blueOn2')) {
        e.target.classList.remove('blueOn2');
        blueMoveArray[blueTargetId].classList.add('blueActive','blueOn2');
        blueMoveArray[blueTargetId].id = blueTargetId;
        removeBlueEventSwitchPlayer();
    }else if (e.target.classList.value.includes('blueOn02')) {
        e.target.classList.remove('blueActive','blueOn2');
        removeRedActive(blueTargetId);
        blueMoveArray[blueTargetId].classList.add('blueActive','blueOn2');
        blueMoveArray[blueTargetId].id = blueTargetId;
        removeBlueEventSwitchPlayer();
    }else if (e.target.classList.value.includes('blueOn0') && e.target.classList.value.includes('blueOn1')) {
        e.target.classList.remove('blueOn1');
        blueMoveArray[blueTargetId].classList.add('blueActive','blueOn1');
        blueMoveArray[blueTargetId].id = blueTargetId;
        removeBlueEventSwitchPlayer();
    } else if (e.target.classList.value.includes('blueOn1')) {
        e.target.classList.remove('blueActive','blueOn1');
        removeRedActive(blueTargetId);
        blueMoveArray[blueTargetId].classList.add('blueActive','blueOn1');
        blueMoveArray[blueTargetId].id = blueTargetId;
        removeBlueEventSwitchPlayer();
    } else if (e.target.classList.value.includes('blueOn0')) {
        e.target.classList.remove('blueActive','blueOn0');
        removeRedActive(blueTargetId);
        blueMoveArray[blueTargetId].classList.add('blueActive','blueOn0');
        blueMoveArray[blueTargetId].id = blueTargetId;
        removeBlueEventSwitchPlayer();
    }
}
// function for removing the click events on blueOnCircles/tokens.
function removeEventBlueOn() {
    blueActive.forEach(ele => {
        ele.removeEventListener('click', moveBlueOn)
    });
}
// function to check if there any blue player on board or not   
function blueOnCheck() {
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
}
// function decides when the bluePlayer can move.
function bluePlayerMove() {
    if(playerRollCount<3) {
        playerRollCount++;
        blueActive = document.querySelectorAll('.blueActive');
        if (diceNum === 6) {
            blueOnCheck();
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
}
// function for removeing and adding red-circle/token at start home box when there is collision by blue player
function removeRedActive(targetLocation) {
    if (blueMoveArray[targetLocation].classList.value.includes('star')) {
        return;
    } else if (blueMoveArray[targetLocation].classList.value.includes('redActive')) {
        blueMoveArray[targetLocation].classList.remove('redActive');
        if(blueMoveArray[targetLocation].classList.value.includes('redOn0')) {
            blueMoveArray[targetLocation].classList.remove('redOn0')
        } else if(blueMoveArray[targetLocation].classList.value.includes('redOn1')) {
            blueMoveArray[targetLocation].classList.remove('redOn1')
        } else if(blueMoveArray[targetLocation].classList.value.includes('redOn2')) {
            blueMoveArray[targetLocation].classList.remove('redOn2')
        } else if(redMoveArray[targetLocation].classList.value.includes('redOn3')) {
            blueMoveArray[targetLocation].classList.remove('redOn3')
        }else if(redMoveArray[targetLocation].classList.value.includes('redOn0') && redMoveArray[targetLocation].classList.value.includes('redOn1') ) {
            return;
        }else if(redMoveArray[targetLocation].classList.value.includes('redOn0') && redMoveArray[targetLocation].classList.value.includes('redOn2')) {
            return;
        }else if(redMoveArray[targetLocation].classList.value.includes('redOn0') && redMoveArray[targetLocation].classList.value.includes('redOn3')) {
            return;
        }else if(redMoveArray[targetLocation].classList.value.includes('redOn1') && redMoveArray[targetLocation].classList.value.includes('redOn2')) {
            return;
        }else if(redMoveArray[targetLocation].classList.value.includes('redOn1') && redMoveArray[targetLocation].classList.value.includes('redOn3')) {
            return;
        }else if(redMoveArray[targetLocation].classList.value.includes('redOn2') && redMoveArray[targetLocation].classList.value.includes('redOn3')) {
            return;
        }
        const redBox = document.querySelectorAll('.redBox');
        for (let i=0;i<redBox.length; i++) {
            if (redBox[i].classList.value.includes('red-circle')) {
            } else if(!redBox[i].classList.value.includes('red-circle')) {
                redBox[i].classList.add('red-circle')
                i=redBox.length;
            } 
        }
        blueMoveArray[targetLocation].id = redTargetId;
    } 
}
// BLUE PLAYER CODE END

// window pop up when there is winner
var winnerScreen = document.getElementById("winner")
var closeWinnerSpan = document.getElementsByClassName("close2")[0]
var winnerSpan = document.getElementById('gameWinner')
function checkWinner(){
    if(homeDiv.classList.value.includes('redOn0', 'redOn1', 'redOn2', 'redOn3')) {
        console.log('Red is Winner');
        winnerScreen.style.display = "block";
        winnnerSpan.textContent = 'RED';
        winnerSpan.style.color = 'red';
        closeWinnerSpan.onclick = function() {
            winnerScreen.style.display = "none";
            winnnerSpan.textContent = '';
         }
        window.onclick = function(event) {
            if (event.target == winnerScreen) {
                winnerScreen.style.display = "none";
                winnnerSpan.textContent = '';
            }
        }
    } else if (homeDiv.classList.value.includes('blueOn0', 'blueOn1', 'blueOn2', 'blueOn3')) {
        console.log('Blue is Winner');
        winnerScreen.style.display = "block";
        winnnerSpan.textContent = 'BLUE';
        winnerSpan.style.color = '#1aaff5';
        closeWinnerpan.onclick = function() {
            winnerScreen.style.display = "none";
            winnnerSpan.textContent = '';
         }
        window.onclick = function(event) {
            if (event.target == winnerScreen) {
                winnerScreen.style.display = "none";
                winnnerSpan.textContent = '';
            }
        }
    }
}