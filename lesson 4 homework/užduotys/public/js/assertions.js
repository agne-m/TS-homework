"use strict";
const someNumber = 17;
const title = "Grace";
const formAddUser = document.querySelector('#form-add-user');
console.group('Assertions - užduotys');
{
    const button = document.querySelector('#button');
    const divForSecondTask = document.querySelector('#div-for-second-task');
    const pForThirdTask = document.querySelector('#p-for-third-task');
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        button.addEventListener('click', () => {
            console.log('paspausta!');
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
        button.addEventListener('click', () => {
            divForSecondTask.innerHTML += '▢';
        });
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
        let counter = 0;
        button.addEventListener('click', function () {
            counter = counter + 1;
            pForThirdTask.innerHTML = `Konteineryje yra ${counter} ▢`;
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=assertions.js.map