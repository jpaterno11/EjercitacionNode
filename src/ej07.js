import { getCountry, getCurrency } from 'currency-map-country';
let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais){
    let pais = getCountry(codigoPais);
    return JSON.stringify(pais);
}