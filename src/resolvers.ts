import { GraphQLScalarType, Kind } from 'graphql';
import { IResolvers } from 'graphql-tools';
import { IEvent } from './interfaces';
import { mockData } from './mockData';


export const resolvers: IResolvers = {
  Query: {
    events: (): IEvent[] => {
      return mockData;
    },
    event: (obj, { id }: { id: string; }): IEvent | undefined => {
      return mockData.find((event: IEvent) => event.id === Number(id));
    }
  },
  Date: new GraphQLScalarType({
    name: "Date",
    description: 'A date in the format of YYYY-mm-dd hh:mm:ss',
    parseValue(value) {
      // data from the client, eg. 2019-01-27 12:38:14
      // I want to store this as a Date
      return new Date(value);
    },
    serialize(value) {
      // data to be sent to the client, eg 1595829855 (epoch)
      return new Date(value).getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    }
  })
};
