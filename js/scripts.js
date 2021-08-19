// Here are the rules of Pig Latin:

// For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u." Don't treat "y" as a vowel. Examples: "away" becomes "awayway" and "okay" becomes "okayway."

// For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". Examples: "code" becomes "odecay" and "move" becomes "ovemay."

// If the first consonants include "qu", move the "q" and the "u." Don't forget about words like "squeal" where "qu" doesn't come first! Examples: "quick" becomes "ickquay" while "squeal" becomes "quealsay."

function pigLatTrans (word) {
  let wordArr = word.split("");
  let wordNoPunct = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
  word = wordNoPunct;

  if ( wordArr[0] === "a" || wordArr[0] === "e" || wordArr[0] === "i" || wordArr[0] === "o" || wordArr[0] === "u") {
    let vowWord = word + "way";
    word = vowWord;
    console.log(word);
  } 
  else if ( wordArr[0] === "q" && wordArr[1] === "u" ) {
    let quWord = word.slice(2) + "quay"; 
    word = quWord; 
    console.log(word);
  } else {
    for (let i = 0; i < word.length; i++) {
      if(word.includes(word.charAt(i))) {
        vowelIndex = 1;
        word = word.slice(vowelIndex) + word.slice(0,vowelIndex) + "ay";
        console.log(word);
        break;
      }
    }
  }

  return word;
  
}

// pigLatTrans("banana");
//  pigLatTrans("queen");
//pigLatTrans("squeel");
pigLatTrans("aria,,!??");
// pigLatTrans("chair");
// pigLatTrans("aloha");
