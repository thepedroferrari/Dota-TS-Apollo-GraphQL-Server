import { GraphQLScalarType, Kind } from 'graphql';
import { IResolvers } from 'graphql-tools';

import { eventsData, playersData, teamsData } from './data';
import { IEvent, IPlayer, IRoster, ITeam } from './interfaces';

export const resolvers: IResolvers = {
  Query: {

    // query for all events
    events: (_, { startAt = 0, limit = Infinity }): IEvent[] => {
      return eventsData.slice(startAt, limit);
    },

    // Query for specific event
    event: (_, { id }: { id: number; }): IEvent | undefined => {
      return eventsData.find((event: IEvent) => event.id === Number(id));
    },

    // Query for specific player(s)
    player: (_, { id, nickname }: { id: number; nickname: string; }): IPlayer | IPlayer[] | undefined => {
      if (id) {
        return playersData.find((player: IPlayer) => player.id === Number(id));
      }
      if (nickname) {
        return playersData.filter((player: IPlayer) =>
          player.nick_name.toLowerCase().includes(nickname.toLowerCase())
        );
      }
    },
    players: (): IPlayer[] => {
      return playersData;
    },

    // Query for specific team(s)
    team: (_, { id, name, shortName }: { id: number, name: string, shortName: string; }): ITeam | ITeam[] | undefined => {

      if (id) {
        return teamsData.filter((team: ITeam) => team.id === id);
      }
      if (name) {
        return teamsData.filter((team: ITeam) =>
          team.name.toLowerCase().includes(name.toLowerCase())
        );
      }
      if (shortName) {
        return teamsData.filter((team: ITeam) =>
          team.short_name.toLowerCase().includes(shortName.toLowerCase())
        );
      }
    },

    // Query for all teams
    teams: (): ITeam[] => {
      return teamsData;
    },
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
      // data to be sent to the client, eg 1595829855 (epoch)Í›
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
