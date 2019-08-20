import "./index.css";
import "./test.scss";

function createDomElement() {
    var dom = document.createElement('div');
    dom.innerHTML = "Hello webpack";
    return dom;
}

document.body.appendChild(createDomElement());

class Temp {
    show() {
        console.log('this.Age :', this.Age);
    }
    get Age() {
        return this._age;
    }
    set Age(val) {
        this._age = val + 1;
    }
}

let t = new Temp();
t.Age = 19;

t.show();