/*
  Assertion(Teigimas) - tai papildoma direktyva tiksliau aprašyti tipui, kuomet programuotojui žinoma daugiau 
  informacijos nei gali žinoti TypeScript transpiliatorius.

  Įmanoma 'teigti' tik tuos tipus, kurie priklauso potencialių tipų aibei
*/

type PossibleType = string | number;

const someNumber: PossibleType = 17 as number;
const title: PossibleType = "Grace" as string;

// Šiuo atveju 'teigiame' kad rastas elementas bus būtent form'os elementas.
const formAddUser: HTMLFormElement = document.querySelector('#form-add-user') as HTMLFormElement;
// formAddUser.onsubmit = (e) => {
//   e.preventDefault();
//   console.log('Ateityje pridėsiu vartotoją');
// };

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  const button: HTMLButtonElement = document.querySelector('#button') as HTMLButtonElement;
  const divForSecondTask: HTMLDivElement = document.querySelector('#div-for-second-task') as HTMLDivElement;
  const pForThirdTask: HTMLParagraphElement = document.querySelector('#p-for-third-task') as HTMLParagraphElement
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia 
    button.addEventListener('click', () => {
      console.log('paspausta!');
    })
  }
  console.groupEnd();

  console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia 
    button.addEventListener('click', () => {
      divForSecondTask.innerHTML += '▢'
    })
  }
  console.groupEnd();

  console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia 
    let counter = 0;
    button.addEventListener('click', function() {
      counter = counter + 1 //?
      pForThirdTask.innerHTML = `Konteineryje yra ${counter} ▢`;
      
    })
  }
  console.groupEnd();

}
console.groupEnd();

