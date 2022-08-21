function wrapInArray<T>(a:T, b: T, c: T): T[] {
    return[a, b, c];
}

const strArr: string[] = wrapInArray("Labas", "as", "krabas");
const numberArr: number[] = wrapInArray(1, 2, 3);

console.log(strArr );
console.log(numberArr);

type Indexable = Array<any> | string;

type SelectRange = <Collection extends Indexable>

(collection: Collection, from: number, to: number) => typeof collection[number];

const selectRange: SelectRange = (collection, from, to) => collection.slice(from, to);

const slicedString: string = selectRange(["Labas", 1, 3]);

const slicedArray: number = selectRange([1, 5, 8, 7, 4, 6], 1, 3)


