//if else

function run(a) {
    //
    if (a % 15 == 0) {
        return 3
    } else if (a % 5 == 0) {
        return 2
    } else if (a % 3 == 0) {
        return 1
    }
}


// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3

//switch
//khi nào cần so sánh tính đúng sai thì dùng if else, khi nào biết trước giá trị thì sẽ dùng switch case (>= 3 case)

var date = 2

switch(date) {
    case 2:
        console.log("Day la thu 2");
        break
    case 3:
        console.log("Day la thu 3");
        break
    case 4:
        console.log("Day la thu 4");
        break
    default: 
    console.log("Không có!");
}

function run(fruits) {
    var result;

switch   (fruits) {
    case    "Banana":
            result = "This is a Banana";
            break
    case    "Apple":
            result = "This is an Apple";
            break;
    default:
            result = "No fruits";
    }

    return result;

}

// Toán tử 3 ngôi (Ternary operator)

var id = {
    name: 'Khanq',
    money: 250
}

var result = id.money > 0 ? `${id.money} $` : "No money!"
console.log(result);


/**
 * Để vượt qua thử thách này bạn cần tạo hàm getCanVoteMessage,
 *  hàm này có 1 tham số là age. Trong trường hợp từ 18 tuổi trở lên hàm sẽ trả về Bạn có thể bỏ phiếu,
 *  ngược lại hàm trả về Bạn chưa được bỏ phiếu.
 */

// Làm bài
var getCanVoteMessage = function(age) {
    var ms =  age  >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu"
return ms

}

// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'