const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const passportSetup = require("./passport");
const cors = require('cors');
const app = express();
const authRoute = require('./authRoute');

const corsOptions ={
    origin: 'http://localhost:3000',                               
    credentials:true,
    methods: 'GET, POST, PUT, DELETE'
    }

app.use(cookieSession({ name: "session", keys: ["lama"], maxAge: 24*60*60*100 }));  // maxAge === 1 day

app.use(passport.initialize())
app.use(passport.session())

app.use(cors(corsOptions))

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running http://localhost:5000");
});
