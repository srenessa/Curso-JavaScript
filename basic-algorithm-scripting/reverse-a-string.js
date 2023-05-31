// Inverter uma String

// Inverta a string fornecida e retorne a string invertida.

function reverseString(str) {
    // Inicializa a nova string invertida
    var reversedString = '';
  
    // Percorre a string de trás para frente
    for (var i = str.length - 1; i >= 0; i--) {
      // Adiciona cada caractere à nova string
      reversedString += str[i];
    }
  
    // Retorna a string invertida
    return reversedString;
  }
  
  reverseString("hello");  // Retorna "olleh"
  