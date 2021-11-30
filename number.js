let array = new Array();

for (var i = 11; i <= 100; i++) {
    let temp = i;
    let rev = 0;
    while (temp > 0) {
        var reminder = temp % 10;
        rev = rev * 10 + reminder;
        temp = parseInt(temp / 10);
    }
    if (rev == i) {
        array.push(i);
    }
}

for (var k = 0; k <= array.length; k++) {
    console.log(array[k]);
}