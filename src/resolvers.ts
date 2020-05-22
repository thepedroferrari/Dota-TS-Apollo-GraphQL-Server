import { GraphQLScalarType, Kind } from 'graphql';
import { IResolvers } from 'graphql-tools';

import { eventsData, playersData, rostersData, teamsData } from './data';
import { IEvent, IPlayer, IRoster, ITeam, IExtendedPlayer } from './interfaces';

export const resolvers: IResolvers = {
  Query: {

    // query for all events with starting-from and limiter. Could be anything else.
    events: (_, { startAt = 0, limit = Infinity }): IEvent[] => {
      return eventsData.slice(startAt, limit);
    },

    // Return all events that has a Specific Roster ID
    eventsByRoster: (_, { rosterId }: { rosterId: number; }): IEvent[] => {

      // We declare an empty array we intend to return.
      const eventsWithRoster: IEvent[] = [];

      // We loop through all the data we got from the file, that in reality would
      // be from a rest API, database or such
      eventsData.forEach(event => {
        // We know since we typed everything that every event will have a rosters
        // array, so it is fine to loop through it
        event.rosters.forEach(roster => {
          // we check if this current roster, that belongs to an array of rosters
          // that is inside of the event that is part of all selected events has
          // the same ID that we passed to the query
          if (roster.id === rosterId) {
            // then we push the event to the array we want to return
            eventsWithRoster.push(event);
          }
        });
      });

      // and now we return a beautiful array of events that only contain events
      // from our selected roster
      return eventsWithRoster;
    },

    // Query for specific event
    event: (_, { id }: { id: number; }): IEvent | undefined => {
      return eventsData.find((event: IEvent) => event.id === Number(id));
    },

    // Query for specific player(s) that will return one single player
    player: (_, { id }: { id: number; nickname: string; }): IPlayer | undefined => {
      if (id) {
        return playersData.find((player: IPlayer) => player.id === Number(id));
      }
    },

    // query by nickname that may return multiple players
    playersByNickname: (_, { nickname }: { nickname: string; }): IPlayer[] | undefined => {
      if (nickname) {
        return playersData.filter((player: IPlayer) =>
          player.nick_name.toLowerCase().includes(nickname.toLowerCase())
        );
      }
    },
    // return all players
    players: (): IPlayer[] => {
      // We declare an empty array we intend to return.
      const players: IPlayer[] = [];
      // We loop through all the data we got from the file, that in reality would
      // be from a rest API, database or such
      eventsData.forEach(event => {
        // We know since we typed everything that every event will have a rosters
        // array, so it is fine to loop through it
        event.rosters.forEach(roster => {
          // Now we loop through each player in the team and push it to the arr
          roster.players.forEach(player => {
            players.push(player);
          });
        });
      });

      return players;
    },

    // return all players
    extendedPlayers: (): IExtendedPlayer[] => {
      // We declare an empty array we intend to return.
      const extendedPlayers: IExtendedPlayer[] = [];
      // We loop through all the data we got from the file, that in reality would
      // be from a rest API, database or such
      eventsData.forEach(event => {
        // We know since we typed everything that every event will have a rosters
        // array, so it is fine to loop through it
        event.rosters.forEach(roster => {
          // Now we loop through each player in the team and hidrate it with
          // the roster id, and then we push it to the array we created before.
          roster.players.forEach(player => {
            const extendedPlayer: IExtendedPlayer = {
              ...player,
              rosterId: roster.id,
              dpc_points: roster.dpc_points,
              team: roster.teams[0]
            };
            extendedPlayers.push(extendedPlayer);
          });
        });
      });

      return extendedPlayers;
    },


    // Query for specific team(s) that will always return an array
    team: (_, { id, name, shortName }: { id: number, name: string, shortName: string; }): ITeam[] | undefined => {

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

    // Get a single Roster by their ID
    roster: (_, { id }: { id: number; }): IRoster | undefined => {
      return rostersData.find((roster) => roster.id === id);
    },

    // Query to get all rosters
    rosters: (): IRoster[] => {
      return rostersData;
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
