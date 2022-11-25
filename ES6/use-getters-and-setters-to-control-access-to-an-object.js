//Use getters e setters para controlar o acesso a um objeto
//funções getter retorna (obtem) o valor da variável privada de um objeto
//modifica (define) o valor da variável privada de um objeto
class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    get temperature() {
        return (5 / 9) * (this.fahrenheit - 32);
    }

    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}