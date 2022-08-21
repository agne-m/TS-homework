type PrimitiveType = string | number | boolean;

/*
  Šių pratybų tikslas su išspręsti užduotis panaudojant bendrinius tipus. [1-6]
  Funkcijų parametrai turi būti bendrinio tipo/ų, pagal kurios būtų suformuojami atsakymai

  7 užduotis, skirta savarankiškai išmokti patikrinti tipus:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
*/
console.log('veikia');

console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  // Sprendimas ir rezultatų spausdinimas
  const first = <T>(arr: Array<T>): T => arr[0]
  console.log(first([1, 2, 3]));
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  // Sprendimas ir rezultatų spausdinimas
  const last = <T>(arr: T[]): T => arr[arr.length - 1]
  console.log(last([1, 2, 3, 4, 5]));
  console.log(last(['first', 'second', 'third']));

}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
  // Sprendimas ir rezultatų spausdinimas
  const arrCopy = <T>(arr: T[]): T[] => [...arr]
  const pirminisMasyvas = [1, 2, 3, 4, 5]
  const pirminioMasyvoKopija = arrCopy(pirminisMasyvas)

  console.log(pirminisMasyvas)
  console.log(pirminioMasyvoKopija);

  pirminioMasyvoKopija[1] = 100;

  console.log(pirminisMasyvas)
  console.log(pirminioMasyvoKopija);
  console.log(pirminisMasyvas)

}
console.groupEnd();

console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
  // ('a', 2) -> ['a', 'a']
  // (77, 4) -> [77, 77, 77, 77]
  // (true, 1) -> [true]
  // Sprendimas ir rezultatų spausdinimas
  const func = <T>(arg: T, timesToRepeat: Number): T[] => {
    let arrWithRepeatedValue: T[] = [];
    for (let i = 0; i < timesToRepeat; i += 1) {
      console.log(i)
      arrWithRepeatedValue = arrWithRepeatedValue.concat(arg);
      console.log(arrWithRepeatedValue)
    }
    return arrWithRepeatedValue;
  }
  console.log(func(3, 4))

}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
  // Sprendimas ir rezultatų spausdinimas
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = [6, 7, 8, 9, 10]
  const twoArraysInToOne = <T>(a: T[], b: T[]): T[] => [...a, ...b]

  console.log(twoArraysInToOne(arr1, arr2));
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
  // Sprendimas ir rezultatų spausdinimas
  type IncapsulatedValueObject<T> = {
    setValue: (newValue: T) => void,
    getValue: () => T
  };

  const solution = <T>(initialValue: T): IncapsulatedValueObject<T> => {
    let value: T = initialValue;

    return {
      setValue: (newValue) => value = newValue,
      getValue: () => value,
    }
  }

  const value1: number = 7;
  const value2: Array<string> = ["Sidnius", "Mauras", "Šeškas"];
  const value3: { name: string, surname: string } = {name: 'Fanatijus', surname: 'Labdara'};

  const obj1 = solution(value1);
  const obj2 = solution(value2)
  const obj3 = solution(value3)

  console.log('initial values');
  console.log({
    value1: obj1.getValue(),
    value2: obj2.getValue(),
    value3: obj3.getValue()
  });

  console.log('changing values...');
  obj1.setValue(9);
  obj2.setValue(['Pakeista']);
  obj3.setValue({ name: 'Pakaitalas', surname: 'Fuflo' });
  
}
console.groupEnd();

console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`
);
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
{
  type Person = {
    name: string,
    surname: string,
  };

  type Student = Person & {
    university: string,
    course: number,
  };

  type Worker = Person & {
    avgMonthlyPay: number,
  };

  const isStudent = (person: Student | Worker): person is Student {
    return (person as Student).university !== undefined;
  }

  const isWorker = (person: Worker | Student): person is Worker {
    return (person as Worker).avgMonthlyPay !== undefined;
  }

  const people: (Person | Student | Worker)[] = [
    { name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2 },
    { name: 'Kurpius', surname: 'Medainis' },
    { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
    { name: 'Ferodijus', surname: 'Cilcius' },
    { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
    { name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2 },
    { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
    { name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1 },
  ];

  const students: Student[] = people.filter(isStudent);
  console.log(students);

  const workers: Worker[] = people.filter(isWorker)
  console.log(workers);

}
