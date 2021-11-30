var array = new Array(1, 2, -2, 3, -3, 4, 2, 1);

for (var i = 0; i <= array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
        for (var k = 0; k < array.length; k++) {
            if (array[i] + array[j] + array[k] == 0) {
                console.log(array[i] + "+" + array[j] + "+" + array[k] + "=0");
            }
        }
    }
}