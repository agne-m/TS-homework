/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:

  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.

  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?

  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.

    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.

  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/

// 55 min
console.group('1. Dėklo (Stack) duomenų struktūros kūrimas');
{
  /*
    Perskaitykite: https://runestone.academy/ns/books/published/pythonds/BasicDS/WhatisaStack.html
  */

  // ↓↓↓ klasė ↓↓↓
  class Stack<T> {
    private static elementNotEmpty = <Type>(el: Type | undefined): el is Type => el !== undefined;
    private index: number;
    [x: number]: T | undefined;

    constructor() {
      this.index = -1;
    }

    public get length() {
      return this.index + 1;
    }

    public push(data: T) {
      this.index += 1
      this[this.index] = data;
    }
    public pop(): T | null {
      const lastElement = this[this.index]
      this[this.index];

      if (Stack.elementNotEmpty(lastElement)) {
        this.index -= 1;
        return lastElement;
      }
      return null;

    }

  }
  // ↑↑↑ klasė ↑↑↑

  // ↓↓↓ bendri kintamieji ↓↓↓
  const numberStack = new Stack<number>();
  const stringStack = new Stack<string>();
  // ↑↑↑ bendri kintamieji ↑↑↑

  // 5 min.
  console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
  {
    console.log({
      numberStack,
      stringStack
    });

  }
  console.groupEnd();

  // 20 min
  console.groupCollapsed('1.2. Sukurkite metodą "push", kuris pridėtų elementą į struktūros galą, t.y.: vienetu didesniu indeksu nei dabartinis index. Po pridėjimo index savybę padidinkite vienetu');
  {
    numberStack.push(1)
    numberStack.push(7)
    numberStack.push(12)

    stringStack.push('labas')
    stringStack.push('vakaras')
    stringStack.push('poniai')
    stringStack.push('ir')
    stringStack.push('ponios')

    console.log({
      numberStack,
      stringStack
    });
  }
  console.groupEnd();

  // 20 min
  console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros galo. Po išėmimo index savybę sumažinkite vienetu');
  {
    console.log(numberStack.pop());
    console.log(numberStack.pop());
    console.log(numberStack.pop());
    console.log(numberStack.pop());
    console.log(numberStack.pop());

    console.log(stringStack.pop());
    console.log(stringStack.pop());
    console.log(stringStack.pop());
    console.log(stringStack.pop());
    console.log(stringStack.pop());
    console.log(stringStack)

  }
  console.groupEnd();

  // 10 min
  console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
  {
    console.log(numberStack.length);
    numberStack.push(7);
    numberStack.push(7);
    console.log(numberStack.length);
    numberStack.pop();
    console.log(numberStack.length);
  }
  console.groupEnd();
}
console.groupEnd();

// 70 min
console.group('2. Eilės (Queue) duomenų struktūros kūrimas');
{
  /*
    Perskaitykite: https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm
  */

  // ↓↓↓ klasė ↓↓↓
  class Queue<T> {
    private items: T[]

    [i: number]: T | undefined;

    constructor() {
      this.items = []
    }

    public enqueue(item: T) {
      this.items.unshift(item)
    }

    public pop() {
      this.items.splice(0, 1)
    }

    public get length() {
      return this.items.length;
    }

  }
  // ↑↑↑ klasė ↑↑↑

  // ↓↓↓ bendri kintamieji ↓↓↓
  const numberQueue = new Queue<number>();
  const stringQueue = new Queue<string>();
  // ↑↑↑ bendri kintamieji ↑↑↑

  // 5 min.
  console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
  {
    console.log({
      numberQueue,
      stringQueue
    });
  }
  console.groupEnd();

  // 30 min
  console.groupCollapsed('1.2. Sukurkite metodą "enqueue", kuris pridėtų elementą į struktūros priekį. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
  {
    numberQueue.enqueue(1)
    numberQueue.enqueue(7)
    numberQueue.enqueue(12)

    stringQueue.enqueue('labas')
    stringQueue.enqueue('vakaras')
    stringQueue.enqueue('poniai')

    console.log(numberQueue);
    console.log(stringQueue);

    numberQueue.enqueue(100)
    stringQueue.enqueue('naujas zodis')

    console.log(numberQueue);
    console.log(stringQueue);

  }
  console.groupEnd();

  // 30 min
  console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros priekio. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
  {
    numberQueue.pop()
    stringQueue.pop()
    console.log(numberQueue);
    console.log(stringQueue);
  }
  console.groupEnd();

  // 5 min
  console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
  {
    console.log(numberQueue.length)
    console.log(stringQueue.length)
    numberQueue.pop()
    stringQueue.enqueue('Priedas')
    console.log(numberQueue.length)
    console.log(stringQueue.length)
    
  }
  console.groupEnd();
}
console.groupEnd();
