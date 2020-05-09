import { GraphQLScalarType, Kind } from 'graphql';
import { IResolvers } from 'graphql-tools';

import { eventsData, playersData, rostersData, teamsData } from './data';
import { IEvent, IPlayer, IRoster } from './interfaces';

export const resolvers: IResolvers = {
  Query: {
    events: (_, { limit }): IEvent[] => {
      const filteredData = [...eventsData];

      if (limit) {
        return filteredData.slice(0, limit);
      }

      return filteredData;
    },
    event: (_, { id }: { id: string; }): IEvent | undefined => {
      return eventsData.find((event: IEvent) => event.id === Number(id));
    },
    player: (_, { id }): IPlayer | undefined => {
      return playersData.find((player: IPlayer) => player.id === Number(id));
    }
  },

  Event: {
    // Hidrating the Roster data within the event.
    // Also hidrating the players and teams within the roster data
    rosters: () => rostersData.map((roster: IRoster) => (
      {
        ...roster,
        players: roster.players.map(rosterPlayer =>
          playersData.find(player => player.id === rosterPlayer.id)
        ),
        teams: roster.teams.map(rosterTeam =>
          teamsData.find(team => team.id === rosterTeam.id)
        ),
      }
    ))
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
