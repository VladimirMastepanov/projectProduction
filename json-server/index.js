const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

//небольшая задержка для имитации запроса
server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });
  next();
});

//имитация авторизации пользователя(есть ли в заголовках авторизация)
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({message: 'AUTH ERROR'});
  }
  next();
});

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);
server.use(router);

//эндпоинт для логина
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
  const { users } = db;

  const usersFromDb = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (usersFromDb) {
    return res.json(usersFromDb);
  }

  return res.status(403).json({ message: 'AUTH ERROR'});
});

//запуск сервера
server.listen(8000, () => {
  console.log('server is running on 8000 port');
});