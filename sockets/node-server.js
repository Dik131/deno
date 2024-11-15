const WebSocket = require("ws")

const wss = new WebSocket.Server({ port: 5000 })
const log = console.log

wss.on("connection", (socket) => {
  log("A client just connected")

  socket.on("message", (data) => {
    if (data.toString() === "ping") {
      socket.send("pong")
    }
  })

  socket.on("close", () => {
    log("A client just disconnected")
  })
})

log(`WebSocket server is running on ws://localhost:${wss.address().port}")`)
