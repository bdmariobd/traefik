//create express server with port 3001 and a websocket server

const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
const port = 3001;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server: server, path: "/ws" });

//create a websocket server
wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log("received: %s", message);
    //send the message to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

//hello world endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//start the server

server.listen(port, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});
