/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ["Koridas", "Atmazas"];
const person2: FullnameTuple = ["Paklodijus", "Pagalvė"];
const person3: FullnameTuple = ["Višta", "Maumedienė"];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];//?
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
  type NameAndAgeTuple = [string, number];

  type DogOwner = {
    name: string,
  }
  type Dog = {
    name: string,
  }
  type dogAndOwner = [Dog, DogOwner];

  type TrianglePoints = [number, number];
  type TriangleTuple = [TrianglePoints, TrianglePoints, TrianglePoints];

  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    // sprendimo pavyzdžius spausdinkite čia 
    const person1: NameAndAgeTuple = ["Jonas", 19];
    const person2: NameAndAgeTuple = ["Petras", 25];
    const person3: NameAndAgeTuple = ["Antanas", 31];
    console.log(
      `Person1: ${person1}, Person2: ${person2}, Person3: ${person3}
    `);
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    // sprendimo pavyzdžius spausdinkite čia 
    const dog: Dog = {
      name: 'Patinas'
    }
    const dogOwner: DogOwner = {
      name: "Kaziukas"
    }
    const dogAndOwner:dogAndOwner = [dog, dogOwner]
    console.log(dogAndOwner);
  }
  console.groupEnd();

  console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
  {
    // sprendimo pavyzdžius spausdinkite čia 
    const triangle: TriangleTuple = [[-2, 1], [2, 2], [3, 1]];
    console.log(triangle)
  }
  console.groupEnd();

}
console.groupEnd();