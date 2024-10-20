let tree = async (dir: string): Promise<string[]> => {
  const out = [];
  for await (const entry of Deno.readDir(dir)) {
    out.push(entry.name);
  }
  return out;
};

const files = await tree(Deno.args[0]);
console.log(files);
