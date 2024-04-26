var courses = [
    {
      id :0,
      name: "html",
      coin:0
    },
    {
        id :1,
        name: "php",
        coin:100
    },
    {
        id :2,
        name: "java",
        coin: 100
    },
    {
        id :3,
        name: "javascript",
        coin: 100
    },
    {
        id :4,
        name: "html",
        coin: 100
    },
    {
        id :5,
        name: "java",
        coin: 200
    }
  ]

  /**
   * forEach()
   * every() //retrun true or false (bool)
   * some() //retrun true or false (bool)
   * find() // return only 1 obj in arr
   * filter() // return all  obj in arr
   */

  courses.forEach(function(course, index) {
    console.log(index, course);
  })

 var isFree = courses.every(function(course, index) {
    return course.coin === 0
  })

  var isFree2 = courses.some(function(course, index) {
    return course.coin === 0
  })

  var find = courses.find(function(course, index) {
        return course.name == "javascript"
  })

  var filter = courses.filter(function(course, index) {
    return course.name == 'java'
  })
  console.log(courses);

  console.log("****************************************")
  console.log(isFree);
  console.log("****************************************");
  console.log(isFree2);
  console.log("****************************************");
  console.log(find);
  console.log("****************************************");
  console.log(filter);

  //map method, return cai gi nhan lai cai do trong fc
var courseHandle = function(courses, index) {
  return {
    id: courses.id,
    name: courses.name,
    coin: courses.coin,
    price: `${courses.coin} đồng`
  }
}

var newCourses = courses.map(courseHandle)
// console.log(newCourses);

//reduce method nhan ve 1 gia tri duy nhat sai khi tinh toan

var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
  }
];


function calculateRating(watchList) {
  var nolanMovies = watchList.filter(function(movie) {
    return movie.Director === "Christopher Nolan";
  });

  // Calculate total rating
  var totalRating = nolanMovies.reduce(function(sum, movie) {
    return sum + parseFloat(movie.imdbRating); 
  }, 0);

  var averageRating = totalRating / nolanMovies.length;

  return averageRating;
}


console.log(calculateRating(watchList)); // Output: 8.675


var  numbers = [1, 2, 3, 4, 5]
//define reduce method
Array.prototype.reduceNew = function(callback, result) {
  let i = 0
  if(arguments.length < 2 ) {
    result = this[0]
    i = 1
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this)
  }
  return result
}

const result = numbers.reduceNew((total, result) => {
  return total + result;
}, 0)

console.log(result);


///
function arrToObj(arr) {
  return arr.reduce(function(obj, item) {
      obj[item[0]] = item[1];
      return obj;
  }, {});
}

var arr = [
  ['name', 'Sơn Đặng'],
  ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

//String/Array includes() method
var title  = "JS basic JS"
console.log(title.includes('JS', 1));


var courses  = ['JS', 'PHP', 'Java']
console.log(courses.includes('JS', 0));




