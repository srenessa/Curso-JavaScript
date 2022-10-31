function regressiva(i) {//essa função terá um ponto de parada
    console.log(i);
    if (i <= 1) {
        console.log(i);
    }else {
        regressiva(i - 1);
    }

}

regressiva(10);
