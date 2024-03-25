// membuat user: {} & new user()
const user = {
    name: "Ucup",
    age: 20,
    major: "Web Development"
};
// console.log(typeof(user))
// console.log(user.name)
// console.log(user['age'])

for (const key in user) console.log(user[key]);