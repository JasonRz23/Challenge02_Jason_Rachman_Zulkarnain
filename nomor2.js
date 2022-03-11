function checkTypeNumber(givenNumber) {
  if (givenNumber == null) {
    givenNumber = "Error : Bro dimana paramaternya?";
  } else if (typeof givenNumber == "number") {
    if (givenNumber % 2 == 0) {
      givenNumber = "Genap";
    } else {
      givenNumber = "Ganjil";
    }
  } else {
    givenNumber = "Error : Invalid Data Type";
  }

  return givenNumber;
}
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
