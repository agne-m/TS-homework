console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const drinks = [
        {name: "lemonade", price: 50},
        {name: "lime", price: 10}
      ]
      function sortDrinkByPrice(arr) {
          console.log(arr.sort((a, b) => (a.price - b.price)))
      }
      sortDrinkByPrice(drinks)
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    let obj = {}
    function objectify (key:string, value:number) {
        obj[key] = value
        return obj
    }
    console.log(objectify('"Brutus"', 300))
      console.log(objectify('piano', 500))
      
}
console.groupEnd();
