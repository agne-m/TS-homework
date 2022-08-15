"use strict";
var HeightUnits;
(function (HeightUnits) {
    HeightUnits["CENTIMETERS"] = "cm";
    HeightUnits["METRES"] = "m";
    HeightUnits["INCHES"] = "in";
})(HeightUnits || (HeightUnits = {}));
var WeightUnits;
(function (WeightUnits) {
    WeightUnits["KG"] = "kg";
    WeightUnits["LBS"] = "lbs";
})(WeightUnits || (WeightUnits = {}));
class Person {
    constructor(theName, theSurname, theAge, theHeight, theHeightUnits) {
        this.name = theName,
            this.surname = theSurname,
            this.age = theAge,
            this.height = theHeight,
            this.heightUnits = theHeightUnits;
    }
    setName(theName) {
        this.name = theName;
    }
    setSurname(theSurname) {
        this.surname = theSurname;
    }
    setAge(theAge) {
        if (theAge < 1 || theAge > 150)
            throw new Error('Age must be from 1 to 150');
        this.age = theAge;
    }
    setHeight(theHeight, heightUnits = HeightUnits.CENTIMETERS) {
        switch (heightUnits) {
            case HeightUnits.CENTIMETERS:
                this.height = theHeight;
                break;
            case HeightUnits.METRES:
                this.height = theHeight * 100;
                break;
            case HeightUnits.INCHES:
                this.height = theHeight * 2.54;
                break;
            default: break;
        }
    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
    getAge() {
        return this.age;
    }
    getHeight() {
        switch (Person.heightUnits) {
            case HeightUnits.CENTIMETERS: return this.height;
            case HeightUnits.METRES: return this.height / 100;
            case HeightUnits.INCHES: return this.height / 2.54;
        }
    }
}
Person.heightUnits = HeightUnits.CENTIMETERS;
const person = new Person('Petras', 'Kazlauskas', 35, 185, 'cm');
console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
    console.log(person.getFullName());
}
console.groupEnd();
console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
    person.setAge(5);
    console.log(person.getAge());
}
console.groupEnd();
console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
    person.setHeight(200);
}
console.groupEnd();
console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
    const personHeightChange = new Person('Minde', 'Kazlauskas', 22, 198, 'in');
    console.log(personHeightChange);
}
console.groupEnd();
console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');
console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{
}
console.groupEnd();
console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
}
console.groupEnd();
console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
//# sourceMappingURL=main.js.map