let cars = ['Volvo', 'Nissan', 'Audi'];

console.log("1. auto on = " + cars[0]);
console.log("2. auto on = " + cars[1]);
console.log("3. auto on = " + cars[2]);

console.log("Tulostus for-loopilla");
for (let x = 0; x <= 2; x++) {
    console.log(x + 1 + ". auto on = " + cars[x]);
}

console.log("Tulostus foreach-loopilla");
cars.forEach(element => {
    console.log("Auto = " + element);
});

console.log("Tulostus foreach-loopilla indeksi mukaan");
cars.forEach((element, index) => {
    let x = 1;
    console.log(index + "Auto = " + element);   
});