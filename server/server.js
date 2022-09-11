require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const productsRoutes = require('./routes/routes')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const expressSession = require('express-session')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const User = require('./models/userModel')
const cookieSession = require("cookie-session")

connectDB();

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
  origin: "http://localhost:3000",
  Credential: true
}))
app.use(express.json());
app.use(session({
  secret: "secretcode",
  resave: false,
  saveUninitialized: false,
  cookie:{httpOnly:true}
}))

app.use(cookieParser("secretcode"))
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)

app.post("/profile",
  passport.authenticate(cookieParser(), { session: false }),
  function(req, res) {
    req.send(req)
  });

app.post("/login", (req, res, next) => {
  console.log(req.signedCookies.connect)
  passport.authenticate("local", (err, user, info) => {
    if (err) {console.log(err)}
    if (!user) res.send("მომხმარებელი არ მოიძებნა");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("თქვენ წარმატებით გაიარეთ ავტორიზაცია");
      });
    }
  })(req, res, next);
});

app.post("/register", (req, res) => {
  User.findOne({mobile: req.body.mobile }, async (err, doc) => {
    if (err) res.send(err)
    if (doc) res.send(`მითითებული ნომერი ${req.body.mobile} უვე გამოყენებულია`);
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        mobile: req.body.mobile
      });
      await newUser.save();
      res.send("თქვენი პროფაილი შექმნილია")
    }
  });
});

app.get("/user", (req, res) => {
  res.send(req.user);
});

app.get("/", (req, res) => {
  res.json({ message: "SERVER RUNNING..." });
});


app.use("/api/products", productsRoutes);
app.use("/get/products", productsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);