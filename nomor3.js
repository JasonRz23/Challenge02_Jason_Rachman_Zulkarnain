function checkEmail(email) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let result;
  if (email == undefined) {
    return "ERROR: Where is the email?";
  } else if (typeof email == "string") {
    if (email.match(re)) {
      result = "VALID";
    } else {
      result = "INVALID";
    }
    return result;
  } else {
    return "ERROR: Invalid data type (password must be string)";
  }
}

console.log(checkEmail("apranata@binar.co.id")); // OUTPUT : VALID
console.log(checkEmail("apranata@binar.com")); // OUTPUT : VALID
console.log(checkEmail("apranata@binar")); // OUTPUT : INVALID
console.log(checkEmail("apranata")); // OUTPUT : ERROR
console.log(checkEmail(3322)); // OUTPUT :
console.log(checkEmail()); // OUTPUT :
