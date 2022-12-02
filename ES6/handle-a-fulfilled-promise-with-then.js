const makeServerRequest = new Promise((resolve, reject) => {

    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

//result vem do argumento dado ao método resolve
// O método then é executado imediatamente após sua promessa ser cumprida com determinação
makeServerRequest.then(result => {
    console.log(result);
});