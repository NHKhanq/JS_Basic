function writeLog () {
    let myString = ''
    for ( let param of arguments) {
        myString += `${param} - `
    }
    console.log(myString);
}

writeLog('Hello', '1123')