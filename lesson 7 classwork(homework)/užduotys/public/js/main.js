"use strict";
console.group('1. Dėklo (Stack) duomenų struktūros kūrimas');
{
    class Stack {
        static elementNotEmpty = (el) => el !== undefined;
        index;
        constructor() {
            this.index = -1;
        }
        get length() {
            return this.index + 1;
        }
        push(data) {
            this.index += 1;
            this[this.index] = data;
        }
        pop() {
            const lastElement = this[this.index];
            this[this.index];
            if (Stack.elementNotEmpty(lastElement)) {
                this.index -= 1;
                return lastElement;
            }
            return null;
        }
    }
    const numberStack = new Stack();
    const stringStack = new Stack();
    console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
    {
        console.log({
            numberStack,
            stringStack
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.2. Sukurkite metodą "push", kuris pridėtų elementą į struktūros galą, t.y.: vienetu didesniu indeksu nei dabartinis index. Po pridėjimo index savybę padidinkite vienetu');
    {
        numberStack.push(1);
        numberStack.push(7);
        numberStack.push(12);
        stringStack.push('labas');
        stringStack.push('vakaras');
        stringStack.push('poniai');
        stringStack.push('ir');
        stringStack.push('ponios');
        console.log({
            numberStack,
            stringStack
        });
    }
    console.groupEnd();
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
        console.log(stringStack);
    }
    console.groupEnd();
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
console.group('2. Eilės (Queue) duomenų struktūros kūrimas');
{
    class Queue {
        items;
        constructor() {
            this.items = [];
        }
        enqueue(item) {
            this.items.unshift(item);
        }
        pop() {
            this.items.splice(0, 1);
        }
        get length() {
            return this.items.length;
        }
    }
    const numberQueue = new Queue();
    const stringQueue = new Queue();
    console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
    {
        console.log({
            numberQueue,
            stringQueue
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.2. Sukurkite metodą "enqueue", kuris pridėtų elementą į struktūros priekį. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
    {
        numberQueue.enqueue(1);
        numberQueue.enqueue(7);
        numberQueue.enqueue(12);
        stringQueue.enqueue('labas');
        stringQueue.enqueue('vakaras');
        stringQueue.enqueue('poniai');
        console.log(numberQueue);
        console.log(stringQueue);
        numberQueue.enqueue(100);
        stringQueue.enqueue('naujas zodis');
        console.log(numberQueue);
        console.log(stringQueue);
    }
    console.groupEnd();
    console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros priekio. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
    {
        numberQueue.pop();
        stringQueue.pop();
        console.log(numberQueue);
        console.log(stringQueue);
    }
    console.groupEnd();
    console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
    {
        console.log(numberQueue.length);
        console.log(stringQueue.length);
        numberQueue.pop();
        stringQueue.enqueue('Priedas');
        console.log(numberQueue.length);
        console.log(stringQueue.length);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map