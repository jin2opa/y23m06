"use strict";
let arr00 = [1, 2, 3];
for (let i = 0; i < arr00.length; i++) {
    console.log(arr00[i]);
}
for (let element of arr00) {
    console.log(element);
}
arr00.forEach(element => {
    element *= 2;
    console.log(element);
});
for (let i in arr00) {
    console.log(arr00[i]);
}
