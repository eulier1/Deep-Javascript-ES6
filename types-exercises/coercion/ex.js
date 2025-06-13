function isValidName(name) {
    if(typeof name == "string" && name !== "" && name.trim().length > 3 ) {
        return true
    }
    return false
}

/**
 * 
 * @param {string, number} attended 
 * @param {string, number} length 
 * @returns {boolean}
 * 
 * A copy of the paramenters is created, just to follow the functional approach
 */

function hoursAttended(attended, length) {
    let attendedCopy
    let lengthCopy

    if ( 
        typeof attended == "string" && attended.trim() !== ""
    ) {
        attendedCopy = Number(attended)
    }
    
    if (
        typeof length == "string" && length.trim() !== ""
    ) {
        lengthCopy = Number(length)
    }

    if(
        attendedCopy >= 0 && lengthCopy >= 0 &&
        Number.isInteger(attendedCopy) && Number.isInteger(lengthCopy) &&
        attendedCopy <= lengthCopy
    ) {
        return true
    }

    return false
}


// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
