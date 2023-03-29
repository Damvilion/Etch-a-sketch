let container = document.querySelector("#container");
let grid = document.createElement("div");
container.appendChild(grid);


for (let i = 0; i < 496; i ++){
    let items = document.createElement("div");
    items.style.cssText = "width: 16px; height: 16px; display: inline-block"
    items.className = "item"
    items.addEventListener("mouseover", () => {items.style.backgroundColor = "black";}

    )
    container.appendChild(items);
    
}
