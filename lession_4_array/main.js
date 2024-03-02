var languages =  [
    'JS',
    'Python',
    'Java',
    function() {

    },
    null
]

var age = new Array(18, 19, 20);

console.log(languages);
console.log(age);
console.log(typeof languages);

//length
console.log(languages.length);

//lấy phần tử theo index
console.log(languages[0]);

//LÀM VIỆC VỚI MẢNG

var names = [
    'Tuan',
    'Khoa',
    'Anh',
    'Loc'
]

console.log(names.toString());
console.log(names.join(' - '));

//pop 
console.log(names.pop()); //xóa phần tử cuối mảng và trả về phần tử đã xóa
console.log(names);

//push 
console.log(names.push('Quan'));//thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài của mảng
console.log(names);

//shift 
console.log(names.shift());//xóa phần tử đầu mảng và trả về phần tử đã xóa
console.log(names);

//unshift
console.log(names.unshift('Loan', 'Hanh'));//thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài của mảng
console.log(names);

//splice
console.log(names.splice(1, 1));//tham số thứ nhất là index đặt ở đâu, tham số thứ 2 là cắt bao nhiêu phần tử
console.log(names);
console.log('===============================================');

console.log(names.splice(1, 0, 'Hoa'));//tham số thứ 3 trở đi là các element muốn truyền vào 
console.log(names);

//concat
var names2 = [
    'Huy',
    'Bao'
]

console.log(names.concat(names2));

//slice
console.log(names.slice(1, 3));//cắt 1 vài/toàn bộ element của mảng, tham số 1 là chỉ mục index cắt, tham số 2 là end