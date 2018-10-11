
window.onload = function() {
    var array = [],
        arrayPar = [],
        arrayImpar = [];

    // Generate ramdom numbers
    for (var i = 0; i <= 9; i++) {
        array[i] = Math.floor((Math.random() * 50) + 1);

        // console.log(array[i]);

        if (array[i] % 2 == 1) {
            arrayImpar.push(array[i]);
            // console.log(document.getElementsByClassName('numberListView-impar'));
            document.getElementsByClassName('numberListView-impar')[0].innerHTML += '<li class="numberListView_item">' + array[i] + '</li>';
        }
        else {
            arrayPar.push(array[i]);
            document.getElementsByClassName('numberListView-par')[0].innerHTML += '<li class="numberListView_item">' + array[i] + '</li>';
        }
    };

    // Create array with how many times we have the same number
    var itemCount = [];

    array.forEach(function(value, index){
        if(value in itemCount) itemCount[value] = itemCount[value] + 1;
        else itemCount[value] = 1;
    });

    // Just to complicate a bit
    // Iterate from 2 to 3. Because we want 2 numbers equal and 3 numbers equal
    for (var y = 2; y <= 3; y++) {

        if(itemCount.includes(y) == true) { }
        else {
            // How many times we will repeat the number
            var repeat = y-1;

            // Iterate from all the numbers that we have
            for (var z = 0; z <= array.length -1; z++) {

                // Check how many times we have the number
                if(itemCount[array[z]] != 1 || itemCount[array[z + 1]] != 1) { }
                else {

                    // We only have the number 1 time
                    // So we will give the next iteration this number
                    array[z + 1] = array[z];

                    // We reduce the repeat times, because we already repeted 1 time, above.
                    repeat = repeat - 1;

                    // Check how many repeats we have left
                    if(repeat == 0) {
                        // Clean the array
                        itemCount = [];

                        // And populating the array again
                        array.forEach(function(value, index){
                            if(value in itemCount) itemCount[value] = itemCount[value] + 1;
                            else itemCount[value] = 1;
                        });

                        // Then brake the FOR because we don't have any repeat left.
                        break;
                    }
                }
            };
        }
    }

    console.log('arrayAfter: ' , array);

}
