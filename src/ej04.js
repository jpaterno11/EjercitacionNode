import fs from 'fs';
const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
function copiar(origen, destino){
    try {
        const data = fs.readFileSync(origen);
        fs.writeFileSync(destino, data);
        console.log(`Archivo copiado exitosamente de ${origen} a ${destino}`);
    } catch (err) {
        console.error("Error al copiar el archivo:", err);
    }
}
