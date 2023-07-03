function repeatStringNumTimes(str, num) {

    if (num < 0) {
        return num = "";
    }
    let repetirString = "";

    for (let i = 0; i < num; i++) {
        repetirString += str;
    }
    return repetirString;
}

console.log(repeatStringNumTimes("abc", -1));