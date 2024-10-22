//import chalk from "npm:chalk"

const log = console.log
let tree = async (dir: string): Promise<string[]> => {
  const out = []
  for await (const entry of Deno.readDir(dir)) {
    out.push(entry.name)
  }
  return out
}

const files = await tree(Deno.args[0])
log(files)
log("%c" + files.join("\n"), "color: red")
//console.log(chalk.bgBlue(files.join("\n")))
