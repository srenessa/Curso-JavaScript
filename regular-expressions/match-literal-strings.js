//Qualquer outra forma de Waldo não corresponderá. Por exemplo, o regex /waldo/(com o w minusculo) não corresponderá, nem WALDO(todo maiusculo).

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result = waldoRegex.test(waldoIsHiding);