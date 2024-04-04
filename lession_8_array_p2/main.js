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

  console.log("****************************************")
  console.log(isFree);
  console.log("****************************************");
  console.log(isFree2);
  console.log("****************************************");
  console.log(find);
  console.log("****************************************");
  console.log(filter);