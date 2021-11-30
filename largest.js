let randomNumber = [];
for (let i = 0; i < 10; i++) {
    randomNumber[i] = Math.floor(100 + Math.random() * 900);
    console.log(randomNumber[i]);
}
const maximumNumber = Math.max(...randomNumber);
const minimumNumber = Math.min(...randomNumber);

const maxFiltered = randomNumber.filter((number) => number < maximumNumber);
const minFiltered = randomNumber.filter((number) => number > minimumNumber);

const secondMax = Math.max(...maxFiltered);
const secondMin = Math.min(...minFiltered);

console.log(
    "second maximum = " + secondMax + " and second minimum = " + secondMin
);