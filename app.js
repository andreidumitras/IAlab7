function caesarCipher(text, shift) {
    // Ensure shift is between 0 and 25
    shift = shift % 26;
    let result = '';
  
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      // Check if character is a letter
      if (char.match(/[a-z]/i)) {
        // Get ASCII code of character
        let code = text.charCodeAt(i);
  
        // Handle uppercase letters
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
        // Handle lowercase letters
        else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      // Append the character to result
      result += char;
    }
    return result;
  }

  function convertText() {
    // Get input values
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);
  
    // Check for valid shift
    if (isNaN(shift)) {
      document.getElementById('output').innerText = "Please enter a valid shift value.";
      return;
    }
  
    // Get encrypted text and display it
    const encryptedText = caesarCipher(text, shift);
    document.getElementById('output').innerText = encryptedText;
  }