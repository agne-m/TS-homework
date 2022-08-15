"use strict";
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false,
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true,
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false,
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true,
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false,
    },
];
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => {
        return { name, surname };
    };
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
    const taskProps = ({ name, surname, married }) => ({
        name: name,
        surname: surname,
        married: Boolean(married)
    });
    const result = people.map(taskProps);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    const taskProps = ({ sex, income }) => ({
        sex, income
    });
    const result = people.map(taskProps);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const namesSurnamesAndSex = ({ name, surname, sex }) => ({
        name: name,
        surname: surname,
        sex: sex
    });
    const result = people.map(namesSurnamesAndSex);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    const isMale = ({ sex }) => sex === 'male';
    const males = people.filter(isMale);
    console.log(males);
}
console.groupEnd();
console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    const isFemale = ({ sex }) => sex === 'female';
    const females = people.filter(isFemale);
    console.log(females);
}
console.groupEnd();
console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    const personHasCar = ({ hasCar }) => Boolean(hasCar);
    const createIdentity = ({ name, surname }) => ({ name, surname });
    const identityReducer = (result, { hasCar, name, surname }) => {
        if (hasCar)
            result.push({ name, surname });
        return result;
    };
    const peopleWithCars = people.filter(personHasCar);
    const identities = peopleWithCars.map(createIdentity);
    const identitiess2 = people.reduce(identityReducer, []);
    console.table(people);
    console.table(identities);
    console.table(identitiess2);
}
console.groupEnd();
console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    const isMarried = ({ married }) => Boolean(married);
    const createIdentity = ({ name, surname }) => ({ name, surname });
    const identityReducer = (result, { hasCar, name, surname }) => {
        if (isMarried)
            result.push({ name, surname });
        return result;
    };
    const marriedPeople = people.filter(isMarried);
    const identities = marriedPeople.map(createIdentity);
    const indentities2 = people.reduce(identityReducer, []);
}
console.groupEnd();
console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    const carOwnersBySexReducer = (result, person) => {
        if (!person.hasCar)
            return result;
        if (!result[person.sex])
            result[person.sex] = 0;
        result[person.sex] = result[person.sex] + 1;
        return result;
    };
    const peoplesBySex = people.reduce(carOwnersBySexReducer, {});
    console.log(people);
    console.log(peoplesBySex);
}
console.groupEnd();
console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    const incomeToSalary = ({ income, ...person }) => {
        const result = { ...person };
        if (income)
            result.salary = income;
        return result;
    };
    const changedArr = people.map(incomeToSalary);
    console.log(changedArr);
}
console.groupEnd();
console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
    const createAnonymous = ({ name, surname, sex, ...rest }) => rest;
    const arrWithoutSexNameAndSurname = people.map(createAnonymous);
    console.log(people);
    console.log(arrWithoutSexNameAndSurname);
}
console.groupEnd();
console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    const createFullnamePerson = ({ name, surname, ...rest }) => ({
        ...rest,
        fullname: name + ' ' + surname
    });
    const fullNamePeople = people.map(createFullnamePerson);
    console.log(fullNamePeople);
}
console.groupEnd();
//# sourceMappingURL=main.js.map