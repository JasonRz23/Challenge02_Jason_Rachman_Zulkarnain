function changeWord(selectedText, changedText, text) {
  const x = text.replace(selectedText, changedText);
  return x;
}
const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
