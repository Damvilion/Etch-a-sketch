let container = document.querySelector(".container");
let text = document.querySelector(".input");
let enterBtn = document.querySelector(".selector");
let clearBtn = document.querySelector(".clearBtn");

clearBtn.addEventListener("click", clear)


enterBtn.addEventListener("click", function(){
   let allItems = document.querySelectorAll(".item");

   for(let i=0; i < allItems.length; i++){
    allItems[i].remove();
   }

makeGrid();
   
})

function clear(){
    let allItems = document.querySelectorAll(".item");

    for(let i=0; i < allItems.length; i++){
     allItems[i].remove();
    }
 
 makeGrid();
}


function makeGrid(){
    container.style.gridTemplateColumns = `repeat(${text.value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${text.value}, 1fr`;

    for (let i = 0; i < text.value * text.value; i ++){
        const div = document.createElement("div");
        div.style.cssText = ''
        div.className = "item"
        div.addEventListener("mouseover", () => {div.style.backgroundColor = "black";}
    
        )
        
        container.appendChild(div);
        
    }
    
}
