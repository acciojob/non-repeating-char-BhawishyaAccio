function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    let isUnique = true;
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return str[i];
    }
  }
  return null; // If no unique character found..
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));

