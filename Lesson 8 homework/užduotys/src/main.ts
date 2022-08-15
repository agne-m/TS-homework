enum HeightUnits {
    CENTIMETERS = 'cm',
    METRES = 'm',
    INCHES = 'in',
}

enum WeightUnits {
    KG = 'kg',
    LBS = 'lbs',
}
class Person {
    private static heightUnits: HeightUnits = HeightUnits.CENTIMETERS;
    private static weightUnits: WeightUnits = WeightUnits.KG
    private name: string;
    private surname: string;
    private age: number;
    private height: number;
    private weight: number;

    constructor(theName: string, theSurname: string, theAge: number, theHeight: number, theHeightUnits: HeightUnits) {
        this.name = theName,
            this.surname = theSurname,
            this.age = theAge,
            this.height = theHeight,
            this.heightUnits = theHeightUnits
    }
    public setName(theName: string): void {
        this.name = theName;
    }
    public setSurname(theSurname: string): void {
        this.surname = theSurname;
    }
    public setAge(theAge: number): void {
        if (theAge < 1 || theAge > 150) throw new Error('Age must be from 1 to 150')
        this.age = theAge;
    }
    public setHeight(theHeight: number, heightUnits: HeightUnits = HeightUnits.CENTIMETERS) {
        switch (heightUnits) {
            case HeightUnits.CENTIMETERS: this.height = theHeight; break;
            case HeightUnits.METRES: this.height = theHeight * 100; break;
            case HeightUnits.INCHES: this.height = theHeight * 2.54; break;
            default: break;
        }
    }
    public getFullName(): string {
        return `${this.name} ${this.surname}`
    }
    public getAge(): number {
        return this.age;
    }
    public getHeight() {
        switch (Person.heightUnits) {
            case HeightUnits.CENTIMETERS: return this.height;
            case HeightUnits.METRES: return this.height / 100;
            case HeightUnits.INCHES: return this.height / 2.54;
        }
    }
    public getWeight() {
        switch (Person.weightUnits) {
            case WeightUnits.KG: return this.weight;
            case WeightUnits.LBS: return this.weight / 0.45 ;
        }
    }
    public toString(): string {
        let formattedPerson = `${this.name} ${this.surname}\n`;
        formattedPerson += `\theight: ${this.getHeight()} ${Person.heightUnits}\n`;
        formattedPerson += `\tweight: ${this.getWeight()} ${Person.weightUnits}\n`;

        return formattedPerson;
    }
}
    const person = new Person('Petras', 'Kazlauskas', 35, 185, 'cm');

console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
    console.log(person.getFullName())
}
console.groupEnd();

console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
    person.setAge(5)
    console.log(person.getAge());
}
console.groupEnd();

console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
    person.setHeight(200, 'cm');
    console.log(person);
}
console.groupEnd();

console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
    const personHeightChange = new Person('Minde', 'Kazlauskas', 22, 198, 'in')
    console.log(personHeightChange);
}
console.groupEnd();

console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');

console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{
    // public getHeight() {
    // switch (Person.heightUnits) {
    // case HeightUnits.CENTIMETERS: return this.height;
    // case HeightUnits.METRES: return this.height / 100;
    // case HeightUnits.INCHES: return this.height / 2.54;
    // }
}
console.groupEnd();

console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
    // private static weightUnits: WeightUnits = WeightUnits.KG
}
console.groupEnd();

console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
// public toString(): string {
//     let formattedPerson = `${this.name} ${this.surname}\n`;
//     formattedPerson += `\theight: ${this.getHeight()} ${Person.heightUnits}\n`;
//     formattedPerson += `\tweight: ${this.getWeight()}   ${Person.weightUnits}\n`;

//     return formattedPerson;