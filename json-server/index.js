import fs from 'fs';
import jsonSerer from 'json-server';
import jwt from 'jsonwebtoken';
import path from 'path';

const server = jsonSerer.create();

const router = jsonSerer.router(path.resolve(__dirname, 'db.json'));

//небольшая задержка для имитации запроса
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
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

server.use(jsonSerer.defaults());
server.use(router);

//эндпоинт для логина
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
  const { users } = db;

  const usersFromDb = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (usersFromDb) {
    return res.JSON(usersFromDb);
  }

  return res.status(403).json({ message: 'AUTH ERROR'});
});

//запуск сервера
server.listen(8000, () => {
  console.log('server is running on 8000 port');
});