require("dotenv").config()
require("./database/index")
require("./database/syncModels")
const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT
const app = express()
const categoryRoute=require('./router/categoryRoute')
const serviceRoute=require('./router/serviceRoute')
const packRoute=require('./router/packRoute')
const clientRoute=require('./router/clientRoutee')
const packhaserviceRoute=require('./router/packhaserviceRoute')
const client=require('./router/clientRoute')
const employee=require('./router/employeeRouter')
const team=require('./router/teamRouter')
const supervisor=require('./router/supervisorRouter')
const request=require('./router/requestRouter')
const notification=require('./router/notification')
const report=require('./router/reportRoute')
const rating=require('./router/ratingRoute')
const admin=require('./router/adminRoute')
const http = require("http"); // 
const { Server } = require("socket.io");//
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3001",
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





app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: true } ))



app.use('/client',client)
app.use('/employee',employee)
app.use('/team',team)
app.use('/notification',notification)
app.use('/rating',rating)
app.use('/admin',admin)
// app.use('/user')
// app.use('/payment')
// app.use('/signup')
// app.use('/login')
// app.use('/category')
app.use('/supervisor',supervisor)
app.use('/request',request)
app.use('/report',report)
app.use('/category',categoryRoute)
app.use('/services',serviceRoute)
app.use('/pack',packRoute)
app.use('/client',clientRoute)
app.use('/packhasservice',packhaserviceRoute)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))