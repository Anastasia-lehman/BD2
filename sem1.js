const t = [1,2]
console.log(t)
t.push(3)
console.log(t)
    const obj = {
        a:1,
        b:2
    }
console.log(obj)
obj.c = 3
console.log(obj)
const student = {
    name:'Иван',
    surname:'Иванов'
}

let formattedStr = "Имя: " + student.name + ", Фамилия: "+student.surname
console.log(formattedStr)
//лучше вот так
formattedStr = `Имя:'${student.name}, фамилия: ${student.surname}`
console.log(formattedStr)

let one = 1
let two = 2

console.log(one+two)
one = '2'
two = false
console.log(two+0)