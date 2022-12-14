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

console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai i?? j?? sukurkite setterius, ir bendr?? getter?? fullname');
{
    console.log(person.getFullName())
}
console.groupEnd();

console.group('2. Sukurkite Person klasei savyb?? "age". Inkapsuliuokite ??i?? savyb?? taip, jog reik??m?? gal??t?? b??ti tik sveiki skai??iai nuo 1 iki 150');
{
    person.setAge(5)
    console.log(person.getAge());
}
console.groupEnd();

console.group('3. Sukurkite Person klasei savyb?? "height" kurios vert?? b??t?? saugoma centimetrais. Sukurkite ??iai savybei setter??, kuris pirmu parametru priimt?? reik??m??, o antru parametru priimt?? matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras n??ra perduotas, numatytas(default) matavimo vienetas turi b??ti cm. Getteris turi gr????inti reik??m?? centimetrais.');
{
    person.setHeight(200, 'cm');
    console.log(person);
}
console.groupEnd();

console.group('4. Sukurkite Person klasei statin?? savyb?? "heightUnits". Jos tipas turi b??ti i??vardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reik??m?? turi b??ti centimetrai');
{
    const personHeightChange = new Person('Minde', 'Kazlauskas', 22, 198, 'in')
    console.log(personHeightChange);
}
console.groupEnd();

console.group('5. "height" setterio antram parametrui pakeiskite s??jungos tip?? ?? [4.] u??duotyje sukurt?? i??vardinim??(enum). Priderinkite pavyzd??ius ir metod??.');

console.group('6. "height" geteriui sukurkite logik??, jog jis gr????int?? matavimo vienetus, pagal statin??s savyb??s "heightUnits" reik??m??.');
{
    // public getHeight() {
    // switch (Person.heightUnits) {
    // case HeightUnits.CENTIMETERS: return this.height;
    // case HeightUnits.METRES: return this.height / 100;
    // case HeightUnits.INCHES: return this.height / 2.54;
    // }
}
console.groupEnd();

console.group('7. Analogi??kai pagal [4.]-[6.] punktus sukurkite savyb?? weight su statiniu i??vardinimu "weightUnits", kurio pasirinkimai turi b??ti: "KG", "LBS"');
{
    // private static weightUnits: WeightUnits = WeightUnits.KG
}
console.groupEnd();

console.group('8. Sukurkite klasei Person metod?? "toString". Kuris paverst?? ??mogaus savybes gra??iu formatu: vardas ir pavard?? pirmoje eilut??je, o "height" ir "weight" savyb??s atskirose eilut??se, atitrauktos nuo kairio kra??to per "tab" simbol??, ir su matavimo vienetais(kurie i??saugoti) statin??se Person klas??s savyb??se');
// public toString(): string {
//     let formattedPerson = `${this.name} ${this.surname}\n`;
//     formattedPerson += `\theight: ${this.getHeight()} ${Person.heightUnits}\n`;
//     formattedPerson += `\tweight: ${this.getWeight()}   ${Person.weightUnits}\n`;

//     return formattedPerson;