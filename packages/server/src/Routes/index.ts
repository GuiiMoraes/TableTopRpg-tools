import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.post('/post', (request, response) => {
  return response.json({ message: 'new post' });
});

export default routes;
