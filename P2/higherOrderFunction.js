const numbers = [3, -5, 8, 1, 2, 9, 7, -1, 6];
// const numbers = [3, 6];
// filter, map, reduce
// const filterNumber = numbers.filter((number) => number > 3);
// console.log(filterNumber)
// console.log(angka.filter((a) => a > 3))

// const mapNumber = numbers.map((number)=> number * 2 );
// console.log(mapNumber)

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// accumulator = nilai hasi pejumlahan
// current value = nilai saat ini
console.log(sum);