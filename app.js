let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let mesContainer = document.querySelector(".mes-container");
let mes = document.querySelector("#mes")
let turn0 = true;


let arr2 = [["apple", "mango", "litchi"] , ["potato", "mashroom"], ["phants", "shirt"]];
const winPattens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4 ,7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const resetGame = () => {
    turn0 = true;
    enableBox();
}

boxs.forEach((box) => {
 box.addEventListener("click", () => {
    console.log("box clicked");
   if(turn0){
    box.innerText = "O";
    turn0 = false;
   }else{
    box.innerText = "X";
    turn0 = true;
   }
   box.disabled = true;

   checkWinner();
 });
});

const disabledBox = () => {
    for(let box of boxs){
        box.disabled = true;
    }
};

const enableBox = () => {
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
        mesContainer.classList.add("hide")
    }
}

const showWinner = (winner) => {
    mes.innerText = `congratulation, winner is ${winner}`;
    mesContainer.classList.remove("hide");
}

const checkWinner = () => {
    for(pattens of winPattens){
        let posVal1 = boxs[pattens[0]].innerText;
        let pos2Val = boxs[pattens[1]].innerText;
        let pos3Val = boxs[pattens[2]].innerText;

       if(posVal1 != "" && pos2Val != "" && pos3Val != ""){
        if(posVal1 === pos2Val && pos2Val === pos3Val){
            console.log("winner", posVal1);
            showWinner(posVal1);
            disabledBox();
        }
       }
    }
}

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);