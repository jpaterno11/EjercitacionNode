let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL){
    const myURL = new URL(laURL);
    console.log("host: " + myURL.host);
    console.log("pathname: " + myURL.pathname);
    console.log("Parametros: " + myURL.search);
    return myURL;
}