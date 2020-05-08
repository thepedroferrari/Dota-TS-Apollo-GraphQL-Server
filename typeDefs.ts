import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Event {
    id: Int!;
    title: String!;
    start: String!; # TODO: Create Scalar Date
    end: String!; # TODO: Create Scalar Date
    tier: Int!;
    bestOf: Int!;
    tournament_id: Int!;
    tournament_name: String!;
    substage_id: Int!;
    deleted_at: String; # TODO: Create Scalar Date | Null
    pbp_status: PhbStatus!;
    postponed_from: String; # TODO: Create Scalar Date | Null
  }

  enum PhbStatus {
    expected;
    possible;
    # Maybe others
  };
`;
