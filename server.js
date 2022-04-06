const express = require('express');
const PORT = process.env.PORT || 3001;
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
      db: sequelize
  })
};

//Starting connecting for server side chat
//Added CORS middleware
const cors = require('cors');
app.use(cors());

//starting https server
const http = require('http').createServer(app);
//added cors middleware to allow cross origin requests in the browser
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  },
});

// Opening socket
const port2 = process.env.PORT || 3000;
io.on('connection', (socket) => {
  socket.on('user_join', (data) => {
    this.username = data;
    socket.broadcast.emit("user_join", data);
  });
  socket.on('chat_message', (data) => {
    data.username = this.username;
    socket.broadcast.emit('chat_message', data) 
    });
    socket.on('disconnect', () => {
      socket.broadcast.emit('user_disconnected', this.username);
    });
  });

http.listen(port2, function () {
  console.log('Server started at 3000...');
  });

//End Chat

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public')); ?????
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(session(sess));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
