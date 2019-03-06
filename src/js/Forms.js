function replaceInputHTML(type,id,placeholder,required) {
    // Placeholder : Not a space but a blank character, U+2800 "⠀"
    return `
    <div id='${id}' class='inputContainer'>
        <input type='${type}' ${required || ""} placeholder="⠀" />
        <div class='animatedPlaceholder'>${placeholder}</div>
        <div class='animatedBottomLine'></div>
    </div>
    `;
}


var allInputs = document.querySelectorAll("input[type='text'],input[type='password']");

for (let i of allInputs) {
    let e = document.createElement("div");
    e.innerHTML = replaceInputHTML(i.getAttribute("type"),i.id,i.getAttribute("placeholder"),i.getAttribute("required"));
    i.insertAdjacentElement("afterend",e);
    i.remove();
}