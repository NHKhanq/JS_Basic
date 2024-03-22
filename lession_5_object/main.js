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

//object prototype 
User.prototype.className = 'Khanq'
User.prototype.getFullName =  function() {
    return this.name + ` ` +  this.address
}

console.log(author);
console.log(user);

console.log(author.getAll());
console.log(user.getAll());

//DATE 

var date = new Date()
var year = date.getFullYear()
var month = date.getMonth()
var day = date.getDay()

console.log(date);
console.log(year);
console.log(month);
console.log(day);

//MATH
console.log("*****************");
/** MATH OBJECT
- Math.PI: trả về số PI
- Math.round(): Làm tròn số thập phân
- Math.abs(): giá trị tuyệt đố
- Math.ceil(): làm tròn lên
- Math.floor(): làm tròn dưới
- Math.random(): trả về số thập phân nhỏ hơn 1 
- Math.min(): lấy ra số nhỏ nhất trong dãy
- Math.max(): lấy ra số lớn nhất trong dãy
 */
var random = Math.floor(Math.random() * 100)

var bonus = [
    '10$',
    '20$',
    '30$',
    '50$',
    '100$',
]

if (random < 10) {
    console.log(bonus[random]);
}else {
    console.log("That Bai!");
}