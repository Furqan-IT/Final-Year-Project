const express = require("express");
const cors = require("cors");
const connectToMongodb = require('./config/mongoDb');
const { configDotenv } = require("dotenv");
const createContactRoute = require("./routes/createContact");
const {Server} = require('socket.io');
const http = require('http');

configDotenv()
connectToMongodb();

const app = express();
const port = 8000;
// Middleware to parse JSON data from requests
app.use(express.json());
// add middleware to parse form data instead of JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')) // static folder to access static files
app.use(cors());

// Chat Backend Code start
const server = http.createServer(app);


const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });


io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
  
    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
  
    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });
  
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });

// Chat backend code end

//Contact Us start
app.use("/api/createContact", createContactRoute);

// Contact Us end
// use a static folder
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// available routes
// Use the base route from /routes/index.js
app.use('/', require('./routes'));
server.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});