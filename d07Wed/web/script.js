"use strict";
let o1 = document.getElementById('o1');
o1.addEventListener("click", () => {
    let n1 = document.getElementById('n1');
    let n2 = document.getElementById('n2');
    let n3 = document.getElementById('n3');
    let o0 = document.getElementById('o0');
    switch (o0.value) {
        case '+':
            n3.value = (parseInt(n1.value) + parseInt(n2.value)).toString();
            break;
        case '-':
            n3.value = (parseInt(n1.value) - parseInt(n2.value)).toString();
            break;
        case '*':
            n3.value = (parseInt(n1.value) * parseInt(n2.value)).toString();
            break;
        case '/':
            n3.value = (parseInt(n1.value) / parseInt(n2.value)).toString();
            break;
        default:
            break;
    }
});
