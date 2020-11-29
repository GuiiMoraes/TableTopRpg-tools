import express from 'express';
import cors from 'cors';
import routes from './Routes';

const server = express();
const serverPort = 3333;

server.use(cors());
server.use(routes);

server.listen(serverPort, () =>
  console.log(
    `Server is running at port ${serverPort} on mode ${process.env.NODE_ENV}`
  )
);
