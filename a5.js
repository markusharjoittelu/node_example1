let persons = [
    { "fname": "Teppo", "lname": "Testi", "address": "Isokatu" },
    { "fname": "Liisa", "lname": "Joki", "address": "Torikaut" },
    { "fname": "Matti", "lname": "Virta", "address": "Uusikatu" },
];

console.log("Ensimmäisen henkilön tiedot");
console.log("etunimi: " + persons[0].fname + " sukunimi: " + persons[0].lname + " osoite: " + persons[0].address);

const printPersonsAsList = persons.map(oneperson =>
    "<li>" + oneperson["fname"] + " " + oneperson["lname"] + "<li>"
);

console.log(printPersonsAsList);