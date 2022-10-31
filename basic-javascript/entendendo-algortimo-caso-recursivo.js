function regressiva(i){//essa função ficará executando para sempre
    console.log(i);
    regressiva(i-1);
}

regressiva(5);