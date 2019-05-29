var allButtons = document.querySelectorAll("button.basic,button.icon");

for (let btn of allButtons) {
    btn.addEventListener("mousedown",() => {
        new buttonWave(btn);
    })
    btn.addEventListener("click",() => {
        if (btn.getAttribute("href")) {
            window.open(btn.getAttribute("href"),btn.getAttribute("target") || "_self");
        }
    })
}



class buttonWave {
    constructor(targetNode) {
        this.node = document.createElement("div");
        this.node.className = "buttonWave";
        targetNode.appendChild(this.node);
        setTimeout(() => {
            targetNode.removeChild(this.node);
        },1000);
    }
}