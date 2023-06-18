let o1 = document.getElementById('o1') as HTMLInputElement;

o1.addEventListener("click", () => {
    let n1 = document.getElementById('n1') as HTMLInputElement;
    let n2 = document.getElementById('n2') as HTMLInputElement;
    let n3 = document.getElementById('n3') as HTMLInputElement;
    let o0 = document.getElementById('o0') as HTMLInputElement;

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

