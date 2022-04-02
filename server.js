const express = require("express");
const app = express();
const routes = require("./controllers");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};


//Added CORS middleware
const cors = require("cors");
app.use(cors());


const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static('public')); ?????

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(session(sess));

var http = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(http);
console.log(io);
const users = {};
// **Will need to get user to connect with thier name here
// opening socket
io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
  socket.on("send chat message", (msg) => {
    socket.broadcast.emit("chat message", {
      message: message,
      name: users[socket.id],
    });
    socket.on("disconnect", () => {
      socket.broadcast.emit("user disconnected", users[socket.id]);
      delete users[socket.id];
    });
  });
});
io.on("connection", function (socket) {
  console.log("user connected: " + socket.id);
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
