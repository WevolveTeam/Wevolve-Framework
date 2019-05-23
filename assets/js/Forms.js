
var allInputs = document.querySelectorAll("input");
console.log(allInputs);
for (var input of allInputs) {
    replaceInputs(input);
}


function replaceInputs(input) {
    var type = input.type,
        id = input.id || `${input.name}__${input.value}`,
        name = input.name
    ;
    var container = document.createElement("div");
    container.id = id;
    console.log(input);
    if (input.getAttribute("nostyle")) return;

    if (type == "text" || type == "password") {
        container.className = "textInputContainer";
        container.innerHTML = `
        <input type='${type}' placeholder=' ' name='${name}' ${input.required ? "required" :""} />
        <div class='animatedBottomLine'></div>
        <div class='animatedPlaceholder'>${input.placeholder}</div>
        `;
    } else if (type == "radio") {
        container.className = "radioInputContainer";
        container.innerHTML = `
        <input type="radio" class='styledRadioButton' name='${name}' value='${input.value}' id='radio__${id}' />
        <label for='radio__${id}' class='displayRadioButton'></label>
        <label for='radio__${id}' class='styledRadioButtonLabel'>${input.getAttribute("label") || ""}</label>
        `;
    } else if (type == "checkbox") {
        container.className = "checkboxInputContainer";
        container.innerHTML = `
        <input type="checkbox" class='styledCheckbox' name='${name}' value='${input.value}' id='checkbox__${id}' />
        <label for='checkbox__${id}' class='displayCheckbox'></label>
        <label for='checkbox__${id}' class='styledCheckboxLabel'>${input.getAttribute("label") || ""}</label>
        `;
    } else {return;}


    input.insertAdjacentElement("afterend",container);
    input.remove();
    return;

}