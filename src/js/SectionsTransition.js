var transitionContainer = document.getElementById("transitionContainer");

function triggerTransition() {
    transitionContainer.className = "active";
    setTimeout(() => {transitionContainer.className = "";},1000);
}