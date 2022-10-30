// 2.
    // console.log('hello')

// 3.
    var userName = 'Tutit';
    // console.log('hello ', userName,'!')

// 4.
    function onAddressClick() {
        var country = prompt('please provide country');
        var city = prompt('please provide city');
        var address = country + ' ' + city;
        console.log('address', address);
    }

// 5. 
    function onAgeClick() {
        var age = prompt('bat kama?');

        if (age >= 18) {
            console.log('welcome ', userName, 'you are', age, ' so you are old enough')
        } else {
            console.log('sorry ', userName, 'you are', age, ' and thats too young')
        }
    }

// 6.
    // var score = 5;

    // if (score > 9) {
    //     console.log('excellent!');
    // } else if (score > 7) {
    //     console.log('good');
    // } else {
    //     console.log('not enough');
    // }

// 7.
    function onNumberClick() {
        var userNum1 = prompt('provide your first Number');
        var userNum2 = prompt('provide your second Number');

        if (userNum1 >= 1 && userNum1 <= 9 && userNum2 >= 1 && userNum2 <= 9) {
            if (userNum1 > userNum2) {
                console.log('bigger number ', userNum1);
            } else if (userNum2 > userNum1) {
                console.log('bigger number ', userNum2);
            } else if (userNum1 === userNum2) {
                console.log('equal numbers');
            }
        } else {
            console.log('invalid numbers');
        }
    }





