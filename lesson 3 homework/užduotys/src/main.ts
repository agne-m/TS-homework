const sampleArr = [1, 2, 3, 4, 5];

console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function lastIndex(arr: any[]): void {
    console.log(arr.length - 1);
  }
  lastIndex(sampleArr)
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function solution(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) {
      console.log(`Index of ${arr[i]} is: ${i}`);
    }
  }
  solution(sampleArr)
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function arrElements(arr: any): void {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
    }
  }
  arrElements(sampleArr)
}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimisfunction arrElements(arr: any): void {
  function arrElements(arr: any): void {
    for (let i = 0; i < arr.length; i++) {
      console.log(`[${i}] => ${arr[i]}`)
    }
  }
  arrElements(sampleArr)
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function arrElementsReverse(arr: any): void {
    for (let i = arr.length - 1; i >= 0; i--)
      console.log(arr[i]);
    // console.log(`[${i}] => ${arr[i]}`)
  }
  arrElementsReverse(sampleArr)
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function allIndexesInARow(arr: any): void {
    const mappedArr: any[] = arr.map((_e: unknown, index: number) => index).join(' ');
    console.log(mappedArr);
  }
  allIndexesInARow(sampleArr)
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function allIndexesInARow(arr: any): void {
    const mappedArr: any[] = arr.map((e: unknown, index: number) => e).join(' ');
    console.log(mappedArr);
  }
  allIndexesInARow(sampleArr)
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function allIndexesInARow(arr: any): void {
    const mappedArr: any[] = arr.map((e: unknown, index: number) => `[${index}] => ${e}`).join(', ');
    console.log(mappedArr);
  }
  allIndexesInARow(sampleArr)
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function doubleArr(arr: number[]): number[] {
    const result: number[] = arr.map(el => el * 2)
    return result;
  }
  console.log(doubleArr(sampleArr));
}

console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function powerArr(arr: number[]): number[] {
    const newArr: any[] = arr.map(element => element * element)
    return newArr;
  }
  console.log(powerArr(sampleArr));

}
console.groupEnd();
console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function powerArr(arr: number[]): number[] {
    const newArr: number[] = arr.map((element, index) => element * index);
    return newArr;
  }
  console.log(powerArr(sampleArr)) //?
}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const newArrWithNegatives = [-5, 54, 4587, -6]
  function filterPositiveNumbers(arr: number[]): number[] {
    const filteredArr = arr.filter(e => e > 0)
    return filteredArr
    }
    console.log(filterPositiveNumbers(newArrWithNegatives));
    
  }
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
    const newArrWithNegatives = [-5, 54, 4587, -6]
    function filterNegativeNumbers(arr: number[]): number[] {
      const negativefilteredArr = arr.filter(e => e < 0)
      return negativefilteredArr
      }
      console.log(filterNegativeNumbers(newArrWithNegatives));
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const newArrWithNegatives = [-5, 54, 4587, -6]
  function filterNegativeNumbers(arr: number[]): number[] {
    const negativefilteredArr = arr.filter(e => e % 2 === 0)
    return negativefilteredArr
    }
    console.log(filterNegativeNumbers(newArrWithNegatives));
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const newArrWithNegatives = [-5, 54, 4587, -6]
  function filterNegativeNumbers(arr: number[]): number[] {
    const negativefilteredArr = arr.filter(e => e % 2 === 1)
    return negativefilteredArr
    }
    console.log(filterNegativeNumbers(newArrWithNegatives));
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  const newArrWithNegatives = [-5, 54, 4587, -6]
  function converNegativesToPositives(arr:number[]):number[]{
    const newArrWithoutNegatives = newArrWithNegatives.map( s => Math.abs(s));//?
    return newArrWithoutNegatives
  }
  console.log(converNegativesToPositives(newArrWithNegatives))
}

console.groupEnd();
