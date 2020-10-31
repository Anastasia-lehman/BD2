const student = {
    name: 'Liya',
    surname: 'Kans',
    sayMySurname: function() {
        console.log(this.surname)
    }
}

student.sayMyName = function(){
    console.log(this.name)  
     //this - текущая ссылка на область видимости обьекта
}

student.sayMyName()
student.sayMySurname()

class People{
    //конструктор создания обьекта класса
    constructor(name, surname){
        this.name = name //обращение к свойству конкретного обьекта
        this.surname = surname
    }
    introduce(){
        console.log( `I'm ${this.name} ${this.surname}`)
    }
    //(гетер)вернет значение
    get age (){
        return this._age
    }
    //(сетер) мжно добавить доп условия
    set age(value){
        if(value <= 16){
            console.error('Not valid age') 
            return
        }
        this._age = value
    }
}

const li = new People('Liya','Kans')
li.introduce()

li.age = 12 
console.log(li.age)
//положили напрямую
li._age = 12 
console.log(li.age)

//наследование классов
class Student extends People{
    get score(){
        return this._score
    }
    set score(value){
        this._score = value
    }
}

const stud = new Student('Alex', 'Al')
stud.score = {
    math: 5,
    eng: 5
}
console.log(stud)