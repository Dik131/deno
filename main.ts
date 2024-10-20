for await (const entry of Deno.readDir('.')) {
  console.log(entry)
}
