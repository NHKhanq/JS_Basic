var phoneKey = 'phone'

var myInf = {
    name: 'Khanq',
    age: '18',
    address: 'HN',
    [phoneKey]: '1234156789',
    getPhone: function() {
        return this.name
    }

}

//function --> phương thức (method)
//others --> thuộc tính (property)

myInf.mail = "asd@gmail.com"

console.log(myInf.getPhone());

//Object constructor

function User(name, address) {
    this.name = name
    this.address = address
    this.getAll = function() {
        return `${this.name} ${this.address}`
    }
}

var author = new User('Khang', 'TPTV')
var user = new User('Tan', 'TPTV')

console.log(author);
console.log(user);

console.log(author.getAll());
console.log(user.getAll());