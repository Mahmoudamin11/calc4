let switchers = document.querySelectorAll(".themes div");
let toggleBar = document.querySelector(".themes");
let body = document.querySelector("body");
let keys = document.querySelector("div.buttons");
let buttonsContainer = document.querySelector("div.buttons");
let show = document.querySelector("#screen span.result");
let reset = document.querySelector("span#reset");
let del = document.querySelector("span#del");
let equal = document.querySelector("span#equal");
let screen = document.querySelector("div#screen");

let elementsCnt = 0;


if (window.localStorage.length > 0) {

    if (localStorage.show == "") {
        screen.style.padding = "40px 24px";
    } else {

        screen.style.padding = "24px";
    }
    if (localStorage.theme == 'one') {
        body.classList.remove("theme-2");
        body.classList.remove("theme-3");
        switchers.forEach((ele) => {
            ele.classList.remove("active");
            ele.style.backgroundColor = "transparent";
        });
        document.querySelector("div.themes div.one").classList.add("active");
    }
    if (localStorage.theme == 'two') {
        body.classList.add("theme-2");
        body.classList.remove("theme-3");
        switchers.forEach((ele) => {
            ele.classList.remove("active");
            ele.style.backgroundColor = "transparent";
        });
        document.querySelector("div.themes div.two").classList.add("active");
    }
    if (localStorage.theme == 'three') {
        body.classList.remove("theme-2");
        body.classList.add("theme-3");
        switchers.forEach((ele) => {
            ele.classList.remove("active");
            ele.style.backgroundColor = "transparent";
        });
        document.querySelector("div.themes div.three").classList.add("active");
    }
}





let regeX = /[+-]?([0-9]*[.])?[0-9]+/;

document.querySelector("div.active").style.backgroundColor = "var(--color-fill-key-accent-2)";
document.addEventListener('click', (e) => {
    if (e.target.classList.contains("th") == true && e.target.classList.contains("active") == false) {
        switchers.forEach((ele) => {
            ele.classList.remove("active");
            ele.style.backgroundColor = "transparent";
        });
        e.target.classList.add("active");
        document.querySelector("div.active").style.backgroundColor = "var(--color-fill-key-accent-2)";
        if (e.target.classList.contains("two") == true) {
            body.classList.add("theme-2");
            body.classList.remove("theme-3");
            window.localStorage.setItem('theme', "two");
        }
        else if (e.target.classList.contains("three") == true) {
            body.classList.remove("theme-2");
            body.classList.add("theme-3");
            window.localStorage.setItem('theme', "three");
        } else {
            body.classList.remove("theme-2");
            body.classList.remove("theme-3");
            window.localStorage.setItem('theme', "one");

        }
    }
})

document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains("active") == true) {
        e.target.style.backgroundColor = "var(--color-hover-key-accent-2)";
    }
})

document.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains("active") == true) {
        e.target.style.backgroundColor = "var(--color-fill-key-accent-2)";
    }
})




buttonsContainer.addEventListener('click', (e) => {
    let clicked = e.target;
    if (clicked.classList.contains("btn") == true && elementsCnt <= 10) {

        if (eqClicked == true) {
            show.innerText = clicked.dataset.cont;
            localStorage.setItem("show", show.innerText);
            eqClicked = false;
            elementsCnt = 1;
        } else {
            show.innerText = show.innerText + clicked.dataset.cont;
            localStorage.setItem("show", show.innerText);
            elementsCnt++;
        }


    }
    else if (clicked.classList.contains("op") == true && elementsCnt <= 10) {
        if (eqClicked)
            eqClicked = false;


        show.innerText = show.innerText + clicked.dataset.cont;
        localStorage.setItem("show", show.innerText);

        elementsCnt++;
    }
})

reset.addEventListener('click', () => {
    show.innerText = "";
    localStorage.setItem("show", show.innerText);
    elementsCnt = 0;
})

del.addEventListener('click', () => {
    show.innerText = show.innerText.substr(0, show.innerText.length - 1);
    localStorage.setItem("show", show.innerText);
    elementsCnt--;
})

let eqClicked = false;
equal.addEventListener('click', (e) => {
    let arr = [];
    let allString = show.innerText;
    let start = 0;
    let error = false;
    let Operator = false;
    for (let i = 0; i < allString.length; i++) {
        if ((allString[i] == '+' || allString[i] == '-' || allString[i] == 'x' || allString[i] == '/') && i > 0 && Operator == false) {
            Operator = true;
            let test = allString.slice(start, i);
            let num = +allString.slice(start, i);
            if (regeX.test(test) == false) {
                screen.style.border = "1px solid red";
                error = true;
                break;
            } else {
                screen.style.border = "none";
                arr.push(num);
                arr.push(allString[i]);
                error = false;
            }
            start = i + 1;
        }
        if (!(allString[i] == '+' || allString[i] == '-' || allString[i] == 'x' || allString[i] == '/')) {
            Operator = false;
        }
        if (i == allString.length - 1) {
            // last number 
            arr.push(+allString.slice(start, i + 1));
        }
    }
    if (error == false) {
        calculate(arr);
    }
})

function calculate(ar) {
    if (ar.length > 1) {
        let total = ar[0];
        for (let i = 0; i < ar.length; i++) {

            if (ar[i] == '+') {
                total += +ar[i + 1];
            }

            if (ar[i] == '-') {
                total -= +ar[i + 1];
            }

            if (ar[i] == 'x') {
                total *= +ar[i + 1];
            }

            if (ar[i] == '/') {
                total = total / (+ar[i + 1]);
            }

        }
        if (total == undefined || Number.isNaN(total) == true || total == 'Infinity') {
            screen.style.border = "1px solid red";
        } else {
            screen.style.border = "none";
            if (isFloat(+total) === true) {
                total = parseFloat(total).toFixed(2);
                show.innerText = total;
                localStorage.show = total;
                eqClicked = true;
            } else {
                show.innerText = total;
                localStorage.show = total;
                eqClicked = true;
            }
        }


    }
}

function isFloat(num) {
    if (typeof num == 'number' && !Number.isNaN(num) && !Number.isInteger(num)) {
        return true;
    } else {
        return false;
    }
}

buttonsContainer.addEventListener('click', () => {
    if (show.innerText == "") {
        screen.style.padding = "40px 24px";
    } else {

        screen.style.padding = "24px";
    }
})
if (localStorage.length > 0) {

    show.innerText = localStorage.show;
}



