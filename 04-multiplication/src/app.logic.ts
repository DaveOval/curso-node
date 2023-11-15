import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const { b: base, l: limit, s: showTable } = yarg

let outputMessage = "";
const headerMessage = `
================================
        Tabla del ${ base }
================================\n
`;

for ( let i = 1; i <= limit; i++ ){
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
};

outputMessage = headerMessage + outputMessage;

if( showTable ) {
    console.log(outputMessage);
}


const outPath = `outputs`


fs.mkdirSync(outPath, { recursive: true })

fs.writeFileSync(`${outPath}/table-${ base }.txt`, outputMessage);