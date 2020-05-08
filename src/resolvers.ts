import { IResolvers } from 'graphql-tools';
import { IEvent } from './interfaces';
import { mockData } from './mockData';

export const resolvers: IResolvers = {
  Query: {
    events: (): IEvent[] => {
      return mockData;
    }
  }
};
