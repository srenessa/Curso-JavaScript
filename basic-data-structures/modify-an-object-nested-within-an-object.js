// Modificar um objeto aninhado dentro de um objeto

// As propriedades do objeto podem ser aninhadas em uma profundidade arbitrária e seus valores podem ser qualquer tipo de dados suportados pelo JavaScript, incluindo matrizes e até mesmo outros objetos.

// Para atribuir o valor 10 à propriedade ocupada do objeto onlineStatus aninhado, usamos a notação de ponto para referenciar a propriedade.

/* antes: 
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }

durante:
nestedObject.data.onlineStatus.busy = 10;