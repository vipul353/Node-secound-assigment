const express = require("express")
const cors = require("cors")
const app = express();

app.use(
    cors(
        {
            origin:"*"
        }
    )
)

app.use(express.json())
 
app.listen(
    5000,()=>{
        console.log("port is running on 5000");
    }
)


app.get("/Home",(req,res)=>{
res.send("This is home link")
res.end()
})

app.get("/api/data",(req,res)=>{
  res.send(
    {
        "what is node js":"Node.js is an open-source runtime environment that allows developers to run JavaScript code on the server side. It's non-blocking and event-driven, making it ideal for building scalable and efficient web applications.",
        "what is express js":"Express.js, commonly known as Express, is a minimal and flexible Node.js web application framework. It simplifies building web applications by providing a robust set of features for routing, middleware, and handling HTTP requests and responses. Express is widely used to create APIs and web applications in Node.js."
    }
  )
})