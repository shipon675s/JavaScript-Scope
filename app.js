//! JavaScript Scope:

// Global Scope
let car = 'Bentfly';
console.log(car);

// Local Scope
if(true){
    console.log(car);
    let bike = 'R15';
    console.log(bike);
}
// console.log(bike);

function cycle() {
    let cycle = 'Duranta';
    console.log(cycle);

    function cycle2() {
        let cycle2 = 'Hero';
        console.log(cycle2);
    }
    cycle2()
}

cycle();
// console.log(cycle2);


let x = 100;  // Avoid global variables
console.log(x);
function main() {
    let x = 10;
    console.log(x);
}

main();