import { IResolvers } from 'graphql-tools';
import { IEvent } from './interfaces';
import { mockData } from './mockData';

export const resolvers: IResolvers = {
  Query: {
    events: (): IEvent[] => {
      return mockData;
    },
    event: (obj, { id }: { id: string; }): IEvent | undefined => {
      return mockData.find((event: IEvent) => event.id === id);
    }
  }
};
