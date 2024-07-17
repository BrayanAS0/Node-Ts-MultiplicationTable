import fs from "fs"
import { yarg } from "./config/plugins/yargs.plugin";
const table =yarg.b;
const limit =yarg.l
const show =yarg.s
const header=`
------------------------------------\n
-------------table of ${table}-------------\n`
let content =header 
if(!fs.existsSync("output"))
    fs.mkdirSync("output")
for (let i =1;i<=limit;i++){
    content+=`${table} x ${i} =${i*table} \n`
}
fs.writeFileSync("output/text.txt",content)
if(show)
    console.log(content )
console.log("File created")