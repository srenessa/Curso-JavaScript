// Pesquise por não-espaço em branco.

// Pesquisar tudo, exceto espaços em branco usando \S, que é um s maiúsculo.

// Semelhante à classe de caracteres [^ \r\t\f\n\v].

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result = sample.match(countNonWhiteSpace);