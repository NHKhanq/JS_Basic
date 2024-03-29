/**
VÒNG LẶP - LOOP

1. for - Lặp với điều kiện đúng
2. for/in - Lặp qua key của đối tượng
3. for/of - Lặp qua value của đối tượng
4. while - Lặp khi điều kiện đúng
5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng

*/

//for loop
for(var i = 1; i < 100; i++) {
    console.log('So' , i);
}
// Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử,
// các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
// Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.
// Làm bài
var getRandNumbers  = function(min, max, length) {
    var arr = []
        for(var i = 0; i < length; i++) {
        var l = Math.random() * (max - min) + min
        arr.push(l)  
        }
        return arr
    }

// Cho trước mảng numbers, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.
function getTotal(arr) {
    var total = 0
    for(var i = 0; i < arr.length; i++){
    total = total + arr[i]
    }

    return total
}
// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17

//Cho trước mảng orders là danh sách chứa các khóa học,
//các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.
//Hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(orders) {
    var l = orders.length
    var total = 0; 

    for (var i = 0; i < l; i++) {
        total += orders[i].price;
    }

    return total; 
}
console.log(getTotal(orders))

//for/in
function run(object) {
    var arr = []
    for (var key in object) {
        arr.push("Thuộc tính" + " " + key + " " + "có giá trị" + " " + object[key])
    }
        return arr
    }
    
    // Expected results:
    console.log(run({ name: 'Nguyen Van A', age: 16 }));
    // Output:
    // [
    //     "Thuộc tính name có giá trị Nguyen Van A",
    //     "Thuộc tính age có giá trị 16"
    // ]

//for/of trả về value của đối tượng là mảng và chuỗi (object xem dưới)
var myInfo = {
    name: 'Khanq',
    age: 18
}

for (var key of Object.values(myInfo)) {
    console.log(key);
}

//while loop 
var a  = 0
while (a <= 10) {
    a++
    console.log(a);
} 

console.log("***********************************");
//break, continue
for (var i = 0; i <= 10; i++) {

    if(i > 5) {
        break
    }
    console.log(i);
}
console.log("***********************************");
for (var i = 0; i <= 10; i++) {

    if( i%2 != 0) {
        continue
    }
    console.log(i);
}