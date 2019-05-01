function replaceInputs(input = new HTMLInputElement) {
    var type = input.type,
        id = input.id || `${input.name}__${input.value}`,
        name = input.name
    ;
    var container = document.createElement("div");
    container.id = id;

    if (type == "text" || type == "password") {
        container.className = "textInputContainer";
        container.innerHTML = `
        <input type='${type}' placeholder='' name='${name}' ${input.required ? "required" :""} />
        <div class='animatedBottomLine'></div>
        <div class='animatedPlaceholder'>${input.placeholder}</div>
        `;
    } else if (type == "radio") {
        container.className = "radioInputContainer";
        container.innerHTML = `
        <input type="radio" class='styledRadioButton' name='${name}' value='${input.value}' id='radio__${id}' />
        <label for='radio__${id}' class='displayRadioButton'></label>
        <label for='radio__${id}' class='styledRadioButtonLabel'>${input.getAttribute("label")}</label>
        `;
    }


    input.insertAdjacentElement("afterend",container);
    input.remove();


}


var allInputs = document.getElementsByTagName("input");

for (var input of allInputs) {
    replaceInputs(input);
}