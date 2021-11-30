var array = [];
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(100 + Math.random() * 900);
    array.push(randomNumber);
}
console.log(array)

var largest1 = 0;
var largest2 = 0;
var smallest1 = array[0];
var smallest2 = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i] > largest1) {
        largest1 = array[i];
    }
    if (array[i] < smallest1) {
        smallest1 = array[i];
    }
}
for (let j = 0; j < array.length; j++) {
    if (array[j] > largest2 && array[j] != largest1) {
        largest2 = array[j];
    }
    if (array[j] < smallest2 && array[j] != smallest1) {
        smallest2 = array[j];
    }
}
console.log("Second largest element in an array is:" + largest2);
console.log("Second smallest element in an array is :" + smallest2);