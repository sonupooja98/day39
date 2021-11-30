let number = 25;
console.log("Prime factorization of a " + number + " is");
for (var i = 2; i <= number; i++) {
    while (number % i == 0) {
        console.log(i + " ");
        number = number / i;
    }
    if (number < 2) {
        console.log(number);
    }
}