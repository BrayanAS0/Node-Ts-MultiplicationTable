import yargs, { boolean, options } from "yargs"
import {hideBin} from "yargs/helpers"

export const yarg = yargs(hideBin(process.argv))
.option("b",{
    alias:"base",
    type: "number",
    default:3,
    describe: "Multiplication table base"

}).option("l",{
    alias: "limit",
    type:"number",
    default:5,
    describe:"Multiplication table base"
}).option("s",{
    alias: "show ",
    type:"boolean",
    default:false,
    describe:"show multiplactae table",
}).option("a",{
    alias:"arias",
    type:"string",
    default:"dont have value",
    describe:"dont know"
}).check((argv,options)=>{

    if(argv.b<1 )
        throw "Error : base "
return true
})
.parseSync()