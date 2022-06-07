console.log("Welcome to the game");
let turn = "X";
let isgameover = false;

// function to check turn
const changeTurn = () =>{
    return turn === "X" ? "0" : "X";
} 

//function to check win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector('.Info').innerText = boxText[e[0]].innerText + " Won";
            isgameover = true;
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn =changeTurn();
            checkWin();

            if(!isgameover){
                document.getElementsByClassName("Info")[0].innerText = "Turn for "+ turn;
            }
        }
    })
})
// add click listener on reset button
reset.addEventListener('click', ()=>{
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    isgameover = false
    document.getElementsByClassName("Info")[0].innerText = "Turn for "+ turn;
})