function sum(...numbers) {
    // return numbers.reduce((a, b) => a + b, 0);
    // return numbers;
    let hasil = 0;
    for (const number of numbers) {
        hasil = hasil + number;
    }
    console.log(hasil);
}

sum(10, 5, 8, 6)

// const person = {
//     name: "Ucup",
//     age: 20,
//     gender: "Male",
// };
// 
// const {name,...lainnya} = person;
// 
// console.log("Nama : ", name);
// console.log("Lainnya : ", lainnya['age']);