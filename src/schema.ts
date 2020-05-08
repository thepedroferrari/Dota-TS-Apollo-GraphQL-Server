import { GraphQLSchema } from 'graphql';
import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';

import * as typeDefs from './schema/schema.graphql';
import { resolvers } from './resolvers';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
