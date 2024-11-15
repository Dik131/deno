const { Server } = require("socket.io")

const io = new Server(6000, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  transports: ["websocket", "polling"],
})

io.on("connection", (socket) => {
  console.log("A client connected")

  socket.on("ping", () => {
    socket.emit("pong")
  })

  socket.on("disconnect", () => {
    console.log("A client disconnected")
  })
})

console.log("Socket.IO server running on port 6000")
