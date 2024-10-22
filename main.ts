//import chalk from "npm:chalk"
import { walk } from "jsr:@std/fs"
import { relative } from "node:path"

const log = console.log
let tree = async (dir: string): Promise<string[]> => {
  const out = []
  for await (const entry of walk(dir)) {
    out.push(relative(dir, entry.path))
  }
  return out
}

const files = await tree(Deno.args[0])
log(files)
log("%c" + files.join("\n"), "color: red") //but only one CSS property
//console.log(chalk.bgBlue(files.join("\n")))
