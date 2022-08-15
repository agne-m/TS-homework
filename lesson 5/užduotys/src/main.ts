type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
}

const people: Person[] = [
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

/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus
  
  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)
    
*/

console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
  // Tipai:
  type Identity = {
    name: Person["name"],
    surname: Person["surname"],
  }

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => {
    return { name, surname };
  }

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  type TaskProps = Pick<Required<Person>, "hasCar" | "married">;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
  type TaskProps = Pick<Required<Person>, "name" | "surname" | "married">;

  const taskProps = ({ name, surname, married }: Person): TaskProps => ({
    name: name,
    surname: surname,
    married: Boolean(married)
  })

  const result: TaskProps[] = people.map(taskProps);

  console.log(result);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  type TaskProps = Pick<Required<Person>, "sex" | "income">;

  const taskProps = ({ sex, income }: Person): TaskProps => ({
    sex, income
  })

  const result: TaskProps[] = people.map(taskProps)

  console.log(result);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  type NamesSurnamesAndSex = {
    name: Person["name"],
    surname: Person["surname"],
    sex: Person["sex"]
  }
  const namesSurnamesAndSex = ({ name, surname, sex }: Person): NamesSurnamesAndSex => ({
    name: name,
    surname: surname,
    sex: sex
  })

  const result: NamesSurnamesAndSex = people.map(namesSurnamesAndSex)

  console.log(result);

}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  // ...sprendimas ir spausdinimas
  // type Male = Omit<Person, 'sex'> & {
  //   sex: 'male',
  // }

  // const isMale = ({ sex }: Person): boolean => sex === 'male';

  // const males: Male[] = people.filter(isMale) as Male[];

  // console.table(people);
  // console.table(males);

  type Male = Omit<Person, 'sex'> & {
    sex: 'male',
  }
  const isMale = ({ sex }: Person): boolean => sex === 'male';

  const males: Male[] = people.filter(isMale) as Male[];

  console.log(males);

}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  // ...sprendimas ir spausdinimas
  type Females = Omit<Person, 'sex'> & {
    sex: 'female'
  }
  const isFemale = ({ sex }: Person): boolean => sex === 'female';

  const females: Females[] = people.filter(isFemale) as Females[];

  console.log(females);

}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  // ...sprendimas ir spausdinimas
  type Identity = {
    name: Person["name"],
    surname: Person["surname"],
  }

  const personHasCar = ({ hasCar }: Person): boolean => Boolean(hasCar);

  const createIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

  const identityReducer = (result: Identity[], { hasCar, name, surname }: Person): Identity[] => {
    if (hasCar) result.push({ name, surname })
    return result;
  }

  const peopleWithCars: Person[] = people.filter(personHasCar);
  const identities: Identity[] = peopleWithCars.map(createIdentity);
  const identitiess2: Identity[] = people.reduce(identityReducer, []);

  console.table(people);
  console.table(identities);
  console.table(identitiess2);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  // ...sprendimas ir spausdinimas
  type Identity = {
    name: Person["name"],
    surname: Person["surname"],
  }
  const isMarried = ({ married }: Person): boolean => Boolean(married);

  const createIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

  const identityReducer = (result: Identity[], { hasCar, name, surname }: Person): Identity[] => {
    if (isMarried) result.push({ name, surname })
    return result;
  }


  const marriedPeople: Person[] = people.filter(isMarried);
  const identities: Identity[] = marriedPeople.map(createIdentity);
  const indentities2: Identity[] = people.reduce(identityReducer, [])


}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  // ...sprendimas ir spausdinimas
  type CarOwnersBySex = {
    [Key in Person['sex']]?: number
  }

  const carOwnersBySexReducer = (result: CarOwnersBySex, person: Person): CarOwnersBySex => {
    if (!person.hasCar) return result;

    if (!result[person.sex]) result[person.sex] = 0;

    result[person.sex] = result[person.sex] as number + 1;

    return result;
  };

  const peoplesBySex: CarOwnersBySex = people.reduce(carOwnersBySexReducer, {});

  console.log(people);
  console.log(peoplesBySex);

}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  // ...sprendimas ir spausdinimas
  type IncomeToSalary = Omit<Person, 'income'> & {
    salary?: Person['income']
  }

  const incomeToSalary = ({ income, ...person }: Person): IncomeToSalary => {
    const result: IncomeToSalary = { ...person };
    if(income) result.salary = income;
    return result;
  }

  const changedArr: incomeToSalary[] = people.map(incomeToSalary) 

  console.log(changedArr);
  
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  // ...sprendimas ir spausdinimas
  type ArrWithoutSexNameAndSurname = Omit<Person, 'name' | 'surname' | 'sex'>;

  const createAnonymous = ({ name, surname, sex, ...rest}: Person): ArrWithoutSexNameAndSurname => rest;

  const arrWithoutSexNameAndSurname: createAnonymous[] = people.map(createAnonymous)
  console.log(people);
  console.log(arrWithoutSexNameAndSurname);
  
  
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
  type FullnamePerson = Omit<Person, 'name' | 'surname'> & {
    fullname: string
  }

  const createFullnamePerson = ({ name, surname, ...rest}: Person): createFullnamePerson => ({
    ...rest,
    fullname: name + ' ' + surname
  })

  const fullNamePeople: FullnamePerson[] = people.map(createFullnamePerson)

  console.log(fullNamePeople);
  
}
console.groupEnd();

