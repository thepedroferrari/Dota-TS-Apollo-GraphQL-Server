import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';

import schema from './schema';

// Host port may vary, 3000 is my local default
const PORT = process.env.PORT || 3000;

const app = express();

// Standalone Apollo Server Start, dev settings for introspection and playground
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(10)],
  introspection: true,
  playground: true,
});

// allow Cross Domain usage
app.use('*', cors());
// Recomended setting to compress Express App
app.use(compression());

// Path for requests and Graphical
server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);

httpServer.listen(
  { port: PORT },
  (): void => console.log(`\n🚀 GraphQL is now running on http://localhost:3000/graphql`));
