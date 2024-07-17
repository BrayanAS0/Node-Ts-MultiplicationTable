import {yarg } from "../src/config/plugins/yargs.plugin"
import { ServerApp } from "./presentation/server.app";
import fs from "fs"
import { CreateTable } from "./config/domain/use-cases/create-table.use-case";
import { yarg as yargsTarea } from "./config/plugins/yargTareaPlugins";
(async()=>{
    await main();
})
()
async function main(){
const {n:name,d:destination,l:limit,b:base}=yargsTarea
if(!fs.existsSync(destination)){
    fs.mkdirSync(destination)

}
let content=``
for (let i =1;i<=limit;i++){
    content+=`${base} x ${i} =${i*base} \n`
}
fs.writeFileSync(destination+"/"+name+".txt",content)


}
