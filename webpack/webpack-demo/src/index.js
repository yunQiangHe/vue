import "./index.css";

function createDomElement() {
    var dom = document.createElement('div');
    dom.innerHTML ="Hello webpack";
    return dom;
}

document.body.appendChild(createDomElement());