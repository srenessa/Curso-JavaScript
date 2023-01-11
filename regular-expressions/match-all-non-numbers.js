// Corresponder a todos os não-números

// O atalho para procurar caracteres que não sejam dígitos é \D 

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex).length;