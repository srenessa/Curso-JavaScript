const makeServerRequest = new Promise((resolve, reject) => {

    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

  //catch é o método usado quando sua promessa foi rejeitada
makeServerRequest.catch(error => {
    console.log(error);
});