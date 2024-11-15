const log = console.log

Deno.serve((req) => {
  if (req.headers.get("upgrade") !== "websocket") {
    return new Response(null, { status: 501 })
  }
  const { socket, response } = Deno.upgradeWebSocket(req)
  socket.addEventListener("open", () => {
    log("A client just connected")
  })
  socket.addEventListener("message", (event) => {
    if (event.data === "ping") {
      socket.send("pong")
    }
  })
  socket.addEventListener("close", () => {
    socket.close()
    log("A client just disconnected")
  })
  return response
})
