function isValidPassword(givenPassword) {
  /* Pemberian regex untuk penggunaan minimal 1 huruf kecil: (?=.*[a-z]) */
  let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  let result;
  if (givenPassword == null) {
    return "ERROR: Where is the password?";
  } else if (typeof givenPassword == "string") {
    if (givenPassword.match(re)) {
      result = true;
    } else {
      result = "false";
    }
    return result;
  } else {
    return "ERROR: Invalid data type (password must be string)";
  }
}

console.log(isValidPassword("Meong2021")); // OUTPUT : true (karena memenuhi requirement, Meong2021 terdiri dari 8 huruf, ada huruf besar ada huruf kecil, dan ada angka )
console.log(isValidPassword("meong2021")); // OUTPUT : false (karena meong2021 tidak ada huruf besar)
console.log(isValidPassword("@eong")); // OUTPUT : false (karena @eong tidak ada angka dan terdiri hanya 5 huruf)
console.log(isValidPassword("Meong2")); // OUTPUT : false (karena Meong2 hanya 6 huruf)
console.log(isValidPassword(0)); // OUTPUT : ERROR: Invalid data type (password must be string)
console.log(isValidPassword()); // OUTPUT : ERROR: Invalid data type (password must be string)
