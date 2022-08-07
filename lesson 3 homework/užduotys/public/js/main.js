"use strict";
const sampleArr = [1, 2, 3, 4, 5];
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    function lastIndex(arr) {
        console.log(arr.length - 1);
    }
    lastIndex(sampleArr);
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    function solution(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`Index of ${arr[i]} is: ${i}`);
        }
    }
    solution(sampleArr);
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    function arrElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
    arrElements(sampleArr);
}
console.groupEnd();
console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
{
    function arrElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`[${i}] => ${arr[i]}`);
        }
    }
    arrElements(sampleArr);
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    function arrElementsReverse(arr) {
        for (let i = arr.length - 1; i >= 0; i--)
            console.log(arr[i]);
    }
    arrElementsReverse(sampleArr);
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    function allIndexesInARow(arr) {
        const mappedArr = arr.map((_e, index) => index).join(' ');
        console.log(mappedArr);
    }
    allIndexesInARow(sampleArr);
}
console.groupEnd();
console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    function allIndexesInARow(arr) {
        const mappedArr = arr.map((e, index) => e).join(' ');
        console.log(mappedArr);
    }
    allIndexesInARow(sampleArr);
}
console.groupEnd();
console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
{
    function allIndexesInARow(arr) {
        const mappedArr = arr.map((e, index) => `[${index}] => ${e}`).join(', ');
        console.log(mappedArr);
    }
    allIndexesInARow(sampleArr);
}
console.groupEnd();
console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
    function doubleArr(arr) {
        const result = arr.map(el => el * 2);
        return result;
    }
    console.log(doubleArr(sampleArr));
}
console.groupEnd();
console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
    function powerArr(arr) {
        const newArr = arr.map(element => element * element);
        return newArr;
    }
    console.log(powerArr(sampleArr));
}
console.groupEnd();
console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
    function powerArr(arr) {
        const newArr = arr.map((element, index) => element * index);
        return newArr;
    }
    console.log(powerArr(sampleArr));
}
console.groupEnd();
console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
    const newArrWithNegatives = [-5, 54, 4587, -6];
    function filterPositiveNumbers(arr) {
        const filteredArr = arr.filter(e => e > 0);
        return filteredArr;
    }
    console.log(filterPositiveNumbers(newArrWithNegatives));
}
console.groupEnd();
console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    const newArrWithNegatives = [-5, 54, 4587, -6];
    function filterNegativeNumbers(arr) {
        const negativefilteredArr = arr.filter(e => e < 0);
        return negativefilteredArr;
    }
    console.log(filterNegativeNumbers(newArrWithNegatives));
}
console.groupEnd();
console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    const newArrWithNegatives = [-5, 54, 4587, -6];
    function filterNegativeNumbers(arr) {
        const negativefilteredArr = arr.filter(e => e % 2 === 0);
        return negativefilteredArr;
    }
    console.log(filterNegativeNumbers(newArrWithNegatives));
}
console.groupEnd();
console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    const newArrWithNegatives = [-5, 54, 4587, -6];
    function filterNegativeNumbers(arr) {
        const negativefilteredArr = arr.filter(e => e % 2 === 1);
        return negativefilteredArr;
    }
    console.log(filterNegativeNumbers(newArrWithNegatives));
}
console.groupEnd();
console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    const newArrWithNegatives = [-5, 54, 4587, -6];
    function converNegativesToPositives(arr) {
        const newArrWithoutNegatives = newArrWithNegatives.map(s => Math.abs(s));
        return newArrWithoutNegatives;
    }
    console.log(converNegativesToPositives(newArrWithNegatives));
}
console.groupEnd();
//# sourceMappingURL=main.js.map