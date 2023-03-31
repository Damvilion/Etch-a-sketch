let container = document.querySelector(".container");
container.style.gridTemplateColumns = "repeat(16, 1fr)"
container.style.gridTemplateRows = "repeat(16, 1fr"


for (let i = 0; i < 256; i ++){
    const div = document.createElement("div");
    div.style.cssText = 'border: solid;'
    div.className = "item"
    div.addEventListener("mouseover", () => {div.style.backgroundColor = "black";}

    )
    
    container.appendChild(div);
    
}
