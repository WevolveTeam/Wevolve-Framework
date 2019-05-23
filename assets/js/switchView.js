var allviews = document.getElementsByClassName("FWView"),
    Views =  {},
    allLIs = document.querySelectorAll("#sideMenu #switchViewMenu li"),
    LIs = {};
for (let view of allviews) {
    Views[view.id] = view;
}   
console.log(Views);
for (let LI of allLIs) {
    LIs[LI.id] = LI;
    console.log(LI);
    LI.addEventListener("click",() => switchView(Views[LI.id]));
}

console.log(LIs);

function switchView(View) {
    for (let view in Views) {
        Views[view].className = "FWView";
    }
    View.className = "FWView viewed";
}

