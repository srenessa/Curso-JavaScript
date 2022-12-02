//Uma promessa tem três estados: pendente, cumprida e rejeitada


const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});