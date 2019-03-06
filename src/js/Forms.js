function replaceInputHTML(type,id,placeholder,required,email) {
    return `
    <div id=${id} class='inputContainer'>
        <input type=${type} class=${email ? "email": ""} required=${required} />
        <div class='animatedPlaceholder'>${placeholder}</div>
    </div>
    `;
}


var allInputs = document.querySelectorAll("input[type='text'],input[type='password']");

for (let i of allInputs) {

}