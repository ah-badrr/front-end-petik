/** spread syntax digunakan untuk memisahkan array atau object menjadi 1 item (single value)
 * notasinya adalah ... (titik tiga)
 */

const fruits = ['Apel', 'Anggur'];
// console.log(fruits);
const newFruits = [...fruits, "Mangga", "Lemon"];
// console.log(newFruits);
// console.log(...fruits)

const user = {
    name: "Budi Santoso",
    major: "Informatics",
}

const newUser = {
    ...user,
    age: 20,
}

// console.log(...user)
console.log(newUser)