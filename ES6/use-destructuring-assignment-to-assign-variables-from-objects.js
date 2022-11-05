const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// atribuindo um novo nome de variável ao extrair valores. 

// Você pode fazer isso colocando o novo nome após dois pontos ao atribuir o valor.

//today(nome antigo)/ highToday(novo nome atribuido).

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

console.log(HIGH_TEMPERATURES);

