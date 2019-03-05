var views = document.getElementsByClassName("FWView");
var viewsul = document.getElementById("switchViewMenu");
for (let view of views) {
    let li = document.createElement("li");
    li.id = li.innerText = view.id;
    viewsul.appendChild(li);
}