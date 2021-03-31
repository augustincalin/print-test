var added = false;

var mql = window.matchMedia("print");

mql.addEventListener("change", (e) => {
    console.log(e.matches);
    if (e.matches) {
        if (!added) {
            added = true;
            createLongText();
        }
    } else {
        removeTheLongText();
        added = false;
    }
})

document.getElementById("show_all").onclick = function (e) {
    if (!added) {
        added = true;
        createLongText();
    }
}

function createLongText() {
    var container = document.getElementById("all_pages");
    for (var i = 0; i < 60; i++) {
        container.appendChild(createParagraph(i + 1));
    }
}

function createParagraph(index) {
    var tag = document.createElement("p");
    var text = document.createTextNode(index + ". Some Text");
    tag.appendChild(text);
    return tag;
}

function removeTheLongText() {
    var container = document.getElementById("all_pages");
    while (container.firstChild) {
        container.firstChild.remove()
    }
}