// example:
function upperFn(x) {
    var z = 3;
    function innerFn(y) {
        console.log(x+y+z);
    }
    innerFn(2);
}
upperFn(4);

// example:
function showName(firstName, lastName){
    var nameIntro = "Your name is ";
    // the inner function have access to the outer function and its variables and parameters.
    function makeFullName(){
        return nameIntro + firstName + " " + lastName + ".";
    }
    console.log(makeFullName());
}
showName("Milena", "Petkanova");

// exercise:
function outerFn(x) {
    function innerFn(y) {
        return sum = y+x;
    }
    return innerFn(3);
}
console.log(outerFn(5));

// another solution:
function add(x) {
    return function innerFn(y) {
        return(x+y);
    }
}
console.log(add(5)(3));
