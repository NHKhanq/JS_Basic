
var myString = 'Hello JS JS JS!!!'

//length
console.log(myString.length);

//find index 
// trả về -1 nếu không tìm thấy
console.log(myString.indexOf('S'));
//hỗ trợ tham số thứ 2 
console.log(myString.indexOf('S', 8));
//tìm phần từ cuối trong chuỗi
console.log(myString.lastIndexOf('S'));

//search
//search hỗ trợ tìm kiếm theo BIỂU THỨC CHÍNH QUY
console.log(myString.search('S'));

//cut string
//nhận 2 tham số là vị trí bắt đầu cắt và vị trí kết thúc cắt
console.log(myString.slice(0, 5));

//replace
console.log(myString.replace('JS', 'Javascript'));
//thay thế toàn bộ JS thành Javascript bằng biểu thức chính quy
console.log(myString.replace(/JS/g, 'Javascript'));

//convert to upper case
console.log(myString.toUpperCase());

//convert to lower case
console.log(myString.toLowerCase());

//trim
//loại bỏ khoảng trắng ở 2 đầu
console.log(myString.trim());

//split
//cắt 1 chuỗi thành mảng
// khi sử dụng split cần có 1 điểm chung để tách mảng
var languages = 'JS, PHP, Ruby'
console.log(languages.split(','));

//get a character by index
//trả về chuỗi rỗng nếu không tìm thấy index 
console.log(myString.charAt(4));

//trả về undefined nếu không tìm thấy index
console.log(myString[4]);

var coursesStr = 'HTML & CSS, JavaScript, ReactJS';
function strToArray(str) {
   return str.split(', ')
}

// Expected results
console.log(strToArray(coursesStr)) 









