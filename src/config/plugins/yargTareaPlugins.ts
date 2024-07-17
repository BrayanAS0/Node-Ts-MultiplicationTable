import yargs, { boolean, options } from "yargs"
import {hideBin} from "yargs/helpers"

export const yarg = yargs(hideBin(process.argv))
.option("n",{
    alias:"name",
    type: "string",
    default:"Table Multiplication",
    describe: "File name"

}).option("d",{
    alias: "destination",
    type:"string",
    default:"output",
    describe:"File destination"
}).option("b",{
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
})
.parseSync()