
let boxes=document.querySelectorAll(".box")
let rest=document.querySelector("#reset")
let win=document.querySelector("#msg")




let turnX= true

const pat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("clicked");
        if(turnX==true){
            box.innerText="X";
            turnX=false;

        }else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        checkWinner();    
    })
});

const gameOver=()=>{
    for(let bt of boxes){
        bt.disabled=true;
    }
}

const showWinner=(winner)=>{
    win.innerText= `Congrajulation winner is${winner}`
    gameOver();

}

const checkWinner=()=>{
    for(p of pat){
        // console.log(p[0],p[1],p[2])
            let p1=boxes[p[0]].innerText;
            let p2=boxes[p[1]].innerText;
            let p3=boxes[p[2]].innerText;
            if(p1 !="" && p2!="" && p3!=""){
                if(p1==p2 && p2==p3){
                    console.log("winner",p1)
                    showWinner(p1);
                }
            }
    }
}

const resetgame=()=>{
    turnX=true;
    enableBoxes();
}

const enableBoxes=()=>{
    for(let bt of boxes){
        bt.disabled=false;
        bt.innerText="";
        win.innerText="";
    }
}

rest.addEventListener("click",enableBoxes);