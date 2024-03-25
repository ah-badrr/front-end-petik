const user = {
    name: "Budi Santoso",
    age: 20,
    major: "Informatika",
};

// destructing object berdasarkan key
// nama variabel harus sama dengan key yang dibuat
const {
    name,
    age,
    major
} = user;

// destructing object secara custom
// nama variable tidak perlu sama dengan key
let nama = user.name;
let umur = user.age;
let jurusan = user.major;

console.log(nama);
console.log(age);
console.log(umur);