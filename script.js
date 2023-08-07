const modeToggle = document.querySelector('.dark-mode')
const body = document.querySelector('body')
const submitBtn = document.querySelector('.submit')
const inputPopup = document.querySelector('.input-popup')
const gameboard = document.querySelector('.gameboard')
const questbtn = document.querySelector('.questionmark')
const questPopup = document.querySelector('.input-quest')

let player1Score = 0;
let player2Score = 0;
let startingPlayer = '';
let guessing = true;

questbtn.addEventListener('click', () => {
  questPopup.classList.toggle('off')
})

const players = [];

const playerMaker = (name) => {
  const player = {};
  player.name = name;
  player.score = 0;
  player.marker 
  return player;
};

const boxes = [
    {
        'position': 0,
    },
    {
        'position': 1,
    },
    {
        'position': 2,
    },
    {
        'position': 3,
    },
    {
        'position': 4,
    },
    {
        'position': 5,
    },
    {
        'position': 6,
    },
    {
        'position': 7,
    },
    {
        'position': 8,
    }
];



function markBox(position){
  if(guessing === true){
    const children = gameboard.children;
    const activeBox = children.item(position)
    if(activeBox.getAttribute('marked') === 'false'){
        activeBox.classList.add(startingPlayer.marker);
        activeBox.classList.remove('.empty')
        activeBox.setAttribute('key',startingPlayer.marker)
        winCheck(position);
        if (startingPlayer === players[0]) {
          startingPlayer = players[1];
        } else if (startingPlayer === players[1]){
          startingPlayer = players[0];
        };
        console.log(startingPlayer)
    }
    activeBox.setAttribute("marked", true);
  }
  endGame()
}

function winCheck(position){
    const children = gameboard.children;
    console.log(position)
    if (parseInt(position) < 1) {
      up();
      downside(position);
      diagLR();
      checkDraw();
    }
    if (parseInt(position) === 1) {
      downside(position);
      up();
      checkDraw();
    }
    if (parseInt(position) === 2) {
      downside(position);
      up();
      diagRL(position);
      checkDraw();
    }
    if (parseInt(position) === 3) {
      left();
      mid();
      checkDraw();
    }
    if (parseInt(position) === 5) {
      right();
      mid();
      checkDraw();
    }
    if (parseInt(position) === 6) {
      left();
      down();
      diagRL();
      checkDraw();
    }
    if (parseInt(position) === 7) {
      down();
      upside(position);
      checkDraw();
    }
    if (parseInt(position) === 8) {
      down();
      right();
      diagLR();
      checkDraw();
    }
    if (parseInt(position) === 4) {
      midUp(position);
      midRight(position);
      diagLR();
      diagRL();
      checkDraw();
    }
    function left(){
       keys = "";
      for(let i = 0; i <= 6; i += 3){
        keys = keys + children.item(i).getAttribute('key');
      }
      if (keys === "OOO") {
        for (let i = 0; i <= 6; i += 3) {
          children.item(i).classList.add('markedO')
        }
        player1Score++;
        guessing = false;
      } else if (keys === "XXX") {
        for (let i = 0; i <= 6; i += 3) {
          children.item(i).classList.add("markedX");
        }
        player2Score++;
        guessing = false;
      }  
    }
    function right() {
      keys = "";
      for (let i = 2; i <= 9; i += 3) {
        keys = keys + children.item(i).getAttribute("key");
      }
      if (keys === "OOO") {
        for (let i = 2; i <= 9; i += 3) {
          children.item(i).classList.add('markedO');
        }
        player1Score++;
        guessing = false;
      } else if (keys === "XXX") {
        for (let i = 2; i <= 9; i += 3) {
          children.item(i).classList.add("markedX");;
        }
        player2Score++;
        guessing = false;
      }  
    }
    function down() {
      let keys = "";
      for (let i = 6; i <= 8; i++) {
        console.log(i);
        keys = keys + children.item(i).getAttribute("key");
        console.log(keys)
      }
      if (keys === "OOO") {
        for (let i = 6; i <= 8; i++) {
          children.item(i).classList.add('markedO');
        }
        player1Score++;
        guessing = false;
      } else if (keys === "XXX") {
        for (let i = 6; i <= 8; i++) {
          children.item(i).classList.add("markedX");;
        }
        player2Score++;
        guessing = false;
      }  
    }
    function upside(position) {
      let keys = "";
      for (let i = parseInt(position); i >= parseInt(position) - 6; i -= 3) {
        console.log(i);
        keys = keys + children.item(i).getAttribute("key");
        console.log(keys);
      }
      if (keys === "OOO") {
        for (let i = parseInt(position); i >= parseInt(position) - 6; i -= 3) {
          children.item(i).classList.add('markedO');
        }
        player1Score++;
        guessing = false;
      } else if (keys === "XXX") {
        for (let i = parseInt(position); i >= parseInt(position) - 6; i -= 3) {
          children.item(i).classList.add("markedX");;
        }
        player2Score++;
        guessing = false;
      }  
    }
    function downside(position) {
      let keys = "";
      for (let i = parseInt(position); i <= parseInt(position) + 6; i += 3) {
        console.log(i);
        keys = keys + children.item(i).getAttribute("key");
        console.log(keys);
      }
      if (keys === "OOO") {
        for (let i = parseInt(position); i <= parseInt(position) + 6; i += 3) {
          children.item(i).classList.add('markedO');
        }
        player1Score++;
        guessing = false;
      } else if (keys === "XXX") {
        for (let i = parseInt(position); i <= parseInt(position) + 6; i += 3) {
          children.item(i).classList.add("markedX");;
        }
        player2Score++;
        guessing = false;
      }  
    }

    function horizontalL(position) {
      let keys = "";
      for (let i = parseInt(position); i <= parseInt(position) + 2; i++) {
        console.log(i);
        keys = keys + children.item(i).getAttribute("key");
        console.log(keys);
      }
      if (keys === "OOO") {
        for (let i = parseInt(position); i <= parseInt(position) + 2; i++) {
          children.item(i).classList.add('markedO');
        }
        player1Score++;
        guessing = false;
      } else if (keys === "XXX") {
        for (let i = parseInt(position); i <= parseInt(position) + 2; i++) {
          children.item(i).classList.add("markedX");;
        }
        player2Score++;
        guessing = false;
      }    
    }
    function horizontalR(position) {
      let keys = "";
      for (let i = parseInt(position); i >= parseInt(position) - 2; i--) {
        console.log(i);
        keys = keys + children.item(i).getAttribute("key");
        console.log(keys);
      }
      if (keys === "OOO") {
        for (let i = parseInt(position); i >= parseInt(position) - 2; i--) {
          children.item(i).classList.add('markedO');
        }
        player1Score++;
        guessing = false;
      } else if (keys === "XXX") {
        for (let i = parseInt(position); i >= parseInt(position) - 2; i--) {
          children.item(i).classList.add("markedX");;
        }
        player2Score++;
        guessing = false;
      }    
    }
    function midUp(position) {
      let keys = "";
      for (let i = parseInt(position) - 3; parseInt(position) - 3 <=  i >= parseInt(position) + 3; i++) {
        console.log(i);
        keys = keys + children.item(i).getAttribute("key");
        console.log(keys);
      }
      if (keys === "OOO") {
        for (
          let i = parseInt(position) - 3;
          parseInt(position) - 3 <= i >= parseInt(position) + 3;
          i++
        ) {
          children.item(i).classList.add('markedO');
        }
        player1Score++;
        guessing = false;
      } else if (keys === "XXX") {
        for (
          let i = parseInt(position) - 3;
          parseInt(position) - 3 <= i >= parseInt(position) + 3;
          i++
        ) {
          children.item(i).classList.add("markedX");;
        }
        player2Score++;
        guessing = false;
      }    
    }
    function midRight(position) {
      let keys = "";
      for (
        let i = parseInt(position) - 1;
        parseInt(position) - 1 <= i >= parseInt(position) + 1;
        i++
      ) {
        console.log(i);
        keys = keys + children.item(i).getAttribute("key");
        console.log(keys);
      }
      if (keys === "OOO") {
        for (let i = parseInt(position) - 1;
        parseInt(position) - 1 <= i >= parseInt(position) + 1;
        i++) {
          children.item(i).classList.add('markedO');
        }
        player1Score++;
        guessing = false;
      } else if (keys === "XXX") {
        for (
          let i = parseInt(position) - 1;
          parseInt(position) - 1 <= i >= parseInt(position) + 1;
          i++
        ) {
          children.item(i).classList.add("markedX");;
        }
        player2Score++;
        guessing = false;
      }    
    }
    function up() {
      keys = "";
      for (let i = 0; i <= 2; i++) {
        keys = keys + children.item(i).getAttribute("key");
      }
      if (keys === "OOO") {
        for (let i = 0; i <= 2; i++) {
          children.item(i).classList.add('markedO');
        }
        player1Score++;
        guessing = false;
      } else if (keys === "XXX") {
        for (let i = 0; i <= 2; i++) {
          children.item(i).classList.add("markedX");;
        }
        player2Score++;
        guessing = false;
      }    
    }
    function mid() {
      keys = "";
      for (let i = 3; i <= 5; i++) {
        keys = keys + children.item(i).getAttribute("key");
      }
      if (keys === "OOO") {
        for (let i = 3; i <= 5; i++) {
          children.item(i).classList.add("markedO");
        }
        player1Score++;
        guessing = false;
      } else if (keys === "XXX") {
        for (let i = 3; i <= 5; i++) {
          children.item(i).classList.add("markedX");
        }
        player2Score++;
        guessing = false;
      }
    }
    function diagLR() {
      keys = "";
      for (let i = 0; i <= 9; i += 4) {
        keys = keys + children.item(i).getAttribute("key");
      }
      if (keys === "OOO") {
        for (let i = 0; i <= 9; i += 4) {
          children.item(i).classList.add('markedO');
        }
        player1Score++;
        guessing = false;
      } else if (keys === "XXX") {
        for (let i = 0; i <= 9; i += 4) {
          children.item(i).classList.add("markedX");;
        }
        player2Score++;
        guessing = false;
      }    
    }
    function diagRL() {
      keys = "";
      for (let i = 2; i <= 6; i += 2) {
        keys = keys + children.item(i).getAttribute("key");
      }
      if (keys === "OOO"){
        for (let i = 2; i <= 6; i += 2) {
          children.item(i).classList.add('markedO');
        }
        player1Score++;
        guessing = false;
      }
      else if(keys === 'XXX'){
        for (let i = 2; i <= 6; i += 2) {
          children.item(i).classList.add("markedX");
        }
        player2Score++;
        guessing = false;
      }
    }
    function checkDraw(){
      let keyDraw = '';
      for(let i = 0; i <= gameboard.childElementCount - 1; i++){
        if (
          children.item(i).getAttribute("marked") === "true" &&
          children.item(i).getAttribute("class") != "box" &&
          children.item(i).getAttribute("class") != "markedO"
        ) {
          keyDraw = keyDraw + "1";
          console.log(keyDraw);
          if (keyDraw === "11111111") {
            document.querySelector(".input-draw").classList.remove("inactive");
          }
        }
      }
    }
    document.querySelector('.player1-score').textContent = player1Score;
    document.querySelector(".player2-score").textContent = player2Score;
}

function createBoxes(){
    boxes.forEach((box) => {
        const boxik = document.createElement('div');
        boxik.classList.add('box')
        boxik.setAttribute('position', box.position);
        boxik.setAttribute("marked", "false");
        boxik.onclick = function(e) {
            var position = e.target.getAttribute('position');
            markBox(position);
        
        }
        gameboard.appendChild(boxik)
    })
    //console.log(boxes)
}

createBoxes()

modeToggle.addEventListener("click", () => {
  const dataTheme = body.getAttribute("data-theme");
  if (dataTheme === "dark") {
    body.setAttribute("data-theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
  }
});

submitBtn.addEventListener('click', (e) => {
    const player1Text = document.querySelector('.player1-name')
    const player2Text = document.querySelector(".player2-name");
    const player1 = playerMaker(
      document.querySelector("#player1").value || "Player 1");
    const player2 = playerMaker(
      document.querySelector("#player2").value || "Player 2");
      player1.marker = 'X';
      player2.marker = "O";
    players.push(player1, player2)
    player1Text.textContent = player1.name;
    player2Text.textContent = player2.name;
    e.preventDefault();
    console.log(players);
    inputPopup.classList.add('inactive');
    startingPlayer = players[0];
})

function nextRound(){
  let childs = gameboard.children;
  guessing = true;
  for (let i = 0; i <= gameboard.childElementCount - 1; i++) {
    childs.item(i).classList.remove("O", "X", "markedO", "markedX");
    childs.item(i).classList.remove("X");
    childs.item(i).classList.add("empty");
    childs.item(i).setAttribute("key", "");
    childs.item(i).setAttribute("marked", "false");
  }
  document.querySelector(".input-draw").classList.add("inactive");
  if (startingPlayer === players[0]) {
    startingPlayer = players[1];
  } else if (startingPlayer === players[1]) {
    startingPlayer = players[0];
  }
  console.log(startingPlayer)
}
function newGame(){
  let childs = gameboard.children;
  guessing = true;
  for (let i = 0; i <= gameboard.childElementCount - 1; i++) {
    childs.item(i).classList.remove("O", "X", "markedO", "markedX");
    childs.item(i).classList.remove("X");
    childs.item(i).classList.add("empty");
    childs.item(i).setAttribute("key", "");
    childs.item(i).setAttribute("marked", "false");
  }
  player1Score = 0;
  player2Score = 0;
  document.querySelector(".player1-score").textContent = player1Score;
  document.querySelector(".player2-score").textContent = player2Score;
  document.querySelector(".input-draw").classList.add("inactive");
  document.querySelector(".endgame-popup").classList.remove("active-popup");
  document.querySelector(".defeat").classList.remove("inactive");
}

const endgame = document.querySelector('.endgame-popup')

function endGame(){
  let winner = document.querySelector('.winner')
  if(player1Score === 5){
    endgame.classList.add('active-popup')
    winner.textContent = players[0].name ;
    player1Score = 0;
    player2Score = 0;
  }
  else if (player2Score === 5) {
    endgame.classList.add("active-popup");
    winner.textContent = players[1].name ;
    player1Score = 0;
    player2Score = 0;
  }
}
function hide(){
  document.querySelector('.defeat').classList.add('inactive')
}
