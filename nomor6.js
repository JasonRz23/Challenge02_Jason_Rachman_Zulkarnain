function getAngkaTerbesarKedua(personName) {
  let max = -Infinity,
    result = -Infinity;

  if (Array.isArray(personName)) {
    for (const value of personName) {
      const nr = Number(value);

      if (nr > max) {
        [result, max] = [max, nr];
      } else if (nr < max && nr > result) {
        result = nr;
      }
    }
  } else if (personName == null) {
    result = "ERROR: Invalid data type (password must be string)";
  } else {
    result = "ERROR: Invalid data type (password must be string)";
  }

  return result;
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka)); // OUTPUT : 8
console.log(getAngkaTerbesarKedua(0)); // OUTPUT : "ERROR: Invalid data type (password must be string)"
console.log(getAngkaTerbesarKedua()); // OUTPUT :  "ERROR: Invalid data type (password must be string)"
