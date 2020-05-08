import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';

import schema from './schema';

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(10)],
});

app.use('*', cors());
app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);

httpServer.listen(
  { port: 3000 },
  (): void => console.log(`\n🚀 GraphQL is now running on http://localhost:3000/graphql`));
