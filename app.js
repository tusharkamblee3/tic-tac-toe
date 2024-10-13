let Boxes = document.querySelectorAll(".Box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playersX,players0

const winpatterns = [

[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4 ,6],
[3, 4, 6],
[3, 4, 5],
[6, 7, 8],
]; 
Boxes.forEach((box) => {
box.addEventListener("click", () =>{
   console.log("box was clicked");
    
    if (turn0) 
    {
      box.innerText = "0";
      turn0 = false;
    }
    else{
      box.innerText = "x";
      turn0 = true;
    }
      box.disabled = true;
       checkWinner();

});
});
    const disableBoxes = () => {
     for (let box of box){
      box.disabled = true;
     }
    };
    function enableBoxes() {
  for (let box of box) {
    box.disabled = true;
  }
};
    
  function showwinner(winner) {

  msg.innerText = 'congratulations, winner is ${winner}';
  msgcontainer.classList.remove("hide");
}

 
 function checkWinner() {
  for (let pattern of winpatterns) {
    let pos1val = Boxes[pattern[0]].innerText;
    let pos2val = Boxes[pattern[1]].innerText;
    let pos3val = Boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showwinner();
      }
    }

  }
};




 