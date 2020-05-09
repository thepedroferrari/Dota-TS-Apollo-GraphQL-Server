import { GraphQLScalarType, Kind } from 'graphql';
import { IResolvers } from 'graphql-tools';
import { IEvent, IPlayer, IRoster } from './interfaces';
import { mockData, playersData, teamsData } from './mockData';

export const resolvers: IResolvers = {
  Query: {
    events: (obj, { limit }): IEvent[] => {
      const filteredData = [...mockData];

      if (limit) {
        return filteredData.slice(0, limit);
      }

      return filteredData;
    },
    event: (obj, { id }: { id: string; }): IEvent | undefined => {
      return mockData.find((event: IEvent) => event.id === Number(id));
    },
    player: (obj, { id }): IPlayer | undefined => {
      return playersData.find((player: IPlayer) => player.id === Number(id));
    }
  },

  Event: {
    rosters: (event) => event.rosters.map((roster: IRoster) => (
      // Hidrating the players within the roster data
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

// const cleanEvents = [];
// mockData.forEach(event => {
//   const cleanRosters = event.rosters.map(roster => {
//     const cleanPlayers = roster.players.map(player => ({id: player.id}))
//     const cleanRoster = {
//       ...roster,
//       players: cleanPlayers
//     }
//     return cleanRoster;
//   })

//   const cleanEvent = {
//     ...event,
//     rosters: cleanRosters
//   };
//   cleanEvents.push(cleanEvent)
// })

// const teamIds = [];
// const teams = [];
// mockData.forEach(event => event.rosters.forEach(roster => roster.teams.forEach(team => {
//   if (!teamIds.includes(team.id)) {
//     teamIds.push(team.id)
//     teams.push(team)
//   }
// }
// )))