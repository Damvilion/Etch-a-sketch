let container = document.querySelector("#container");
let grid = document.createElement("div");
container.appendChild(grid);


let itemSize = document.getElementById("#container");

for (let i = 0; i < 396; i ++){
    let items = document.createElement("div");
    items.style.cssText = "width: 16px; height: 16px; border: solid;"
    items.className = "item"
    items.addEventListener("mouseover", () => {items.style.backgroundColor = "black";}

    )
    container.appendChild(items);
    
}
