//Importar la libreria para file system
const fs = require("fs");
//leer del file system el archivo y la codificacion
const data = fs.readFileSync("readme.md", "utf-8");
// funcion para remplazar una palabra
const newConten = data.replace(/React/ig, "Angular");
//Guardar un archivo en el sistema con su nombre
fs.writeFileSync("README-ANGULAR.md", newConten)




