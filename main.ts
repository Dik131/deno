//import chalk from "npm:chalk"
import { walk } from "@std/fs/walk"

const log = console.log
let tree = async (dir: string): Promise<string[]> => {
  const out = []
  for await (const entry of walk(dir)) {
    out.push(entry.name)
  }
  return out
}

const files = await tree(Deno.args[0])
log(files)
log("%c" + files.join("\n"), "color: red") //but only one CSS property
//console.log(chalk.bgBlue(files.join("\n")))
