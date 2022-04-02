const express = require('express');
const app = express();
const routes = require('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//Starting connecting for server side chat
//Added CORS middleware
const cors = require('cors');
app.use(cors());
//connects to client side
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
//starting https server
var http = require('http').createServer(app);
//added cors middleware to allow cross origin requests in the browser
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  },
});
//create user array
const users = {};
// **Will need to get user to connect with thier name here
// opening socket
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('send chat message', (msg) => {
    socket.broadcast.emit('chat message', {
      message: message,
      name: users[socket.id],
    });
    socket.on('disconnect', () => {
      socket.broadcast.emit('user disconnected', users[socket.id]);
      delete users[socket.id];
    });
  });
});

http.listen(3000, function () {
  console.log('Server started at 3000...');
  io.on('connection', function (socket) {
    console.log('user connected: ' + socket.id);
  });
});
//End Chat

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public')); ?????
app.use(routes);
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(session(sess));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
