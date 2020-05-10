import { GraphQLScalarType, Kind } from 'graphql';
import { IResolvers } from 'graphql-tools';

import { eventsData, playersData, rostersData, teamsData } from './data';
import { IEvent, IPlayer, IRoster, ITeam } from './interfaces';

export const resolvers: IResolvers = {
  Query: {

    // query for all events
    events: (_, { startAt = 0, limit = Infinity }): IEvent[] => {
      return eventsData.slice(startAt, limit);
    },

    // Query for specific event
    event: (_, { id }: { id: number; }): IEvent | undefined => {
      return eventsData.find((event: IEvent) => event.id === id);
    },

    // Query for specific player(s)
    player: (_, { id, nickname }: { id: number; nickname: string; }): IPlayer | IPlayer[] | undefined => {
      if (id) {
        return playersData.find((player: IPlayer) => player.id === id);
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
    team: (_, { id, name, short_name }): ITeam | ITeam[] | undefined => {

      if (id) {
        return teamsData.find((team: ITeam) => team.id === id);
      }
      if (name) {
        return teamsData.filter((team: ITeam) =>
          team.name.toLowerCase().includes(name.toLowerCase())
        );
      }
      if (short_name) {
        return teamsData.filter((team: ITeam) =>
          team.short_name.toLowerCase().includes(short_name.toLowerCase())
        );
      }
    },

    // Query for all teams
    teams: (): ITeam[] => {
      return teamsData;
    },
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
