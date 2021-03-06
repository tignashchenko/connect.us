'use strict';
const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();

app.use(middleware.morgan('dev'));
app.use(middleware.cookieParser());
app.use(middleware.bodyParser.urlencoded({extended: false}));
app.use(middleware.bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(middleware.auth.session);
app.use(middleware.passport.initialize());
app.use(middleware.passport.session());
app.use(middleware.flash());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes.auth);
app.use('/api', middleware.auth.verify, routes.api);
app.use('/user', middleware.auth.verify, routes.users);
app.use('/api/profiles', middleware.auth.verify, routes.profiles);

app.use(middleware.auth.verify, (req, res) => res.render('index'));

const server = require('http').Server(app);
middleware.socketIO(server);

module.exports = server;
// has to be at the very end
