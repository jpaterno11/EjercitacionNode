let miUrl = null;
let miObjeto = null;
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL){
    try{
        const myURL = new URL(laURL);
        console.log("host: " + myURL.host);
        console.log("pathname: " + myURL.pathname);
        console.log("Parametros: " + myURL.search);
        return myURL;
    }
    catch (err){
        return laURL;
    }
}