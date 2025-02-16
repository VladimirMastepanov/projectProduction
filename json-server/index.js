const fs = require('fs');
const jsonServer = require('json-server');
// const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

//небольшая задержка для имитации запроса
server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });
  next();
});

//эндпоинт для логина
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users = [] } = db;

    const usersFromDb = users.find(
      (user) => user.username === username && user.password === password
    );

    if (usersFromDb) {
      return res.json(usersFromDb);
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

//имитация авторизации пользователя(есть ли в заголовках авторизация)
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }
  next();
});

server.use(router);

//запуск сервера
server.listen(3000, () => {
  console.log('server is running on 3000 port');
});
