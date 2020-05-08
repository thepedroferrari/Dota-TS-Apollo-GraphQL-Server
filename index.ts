import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './typeDefs';

const mockData = [
  {
    "id": 182737,
    "title": "Bracket - Grand final",
    "start": "2019-01-27 08:51:00",
    "end": "2019-01-27 12:38:14",
    "tier": 1,
    "bestOf": 5,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
  },
  {
    "id": 185053,
    "title": "Showmatch",
    "start": "2019-01-27 06:49:11",
    "end": "2019-01-27 07:50:05",
    "tier": 2,
    "bestOf": 1,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20281,
    "deleted_at": null,
    "pbp_status": "possible",
    "postponed_from": null,
  },
  {
    "id": 182735,
    "title": "Bracket - LB Cons. final",
    "start": "2019-01-27 04:16:00",
    "end": "2019-01-27 06:05:01",
    "tier": 1,
    "bestOf": 3,
    "tournament_id": 3430,
    "tournament_name": "The Chongqing Major",
    "substage_id": 20068,
    "deleted_at": null,
    "pbp_status": "expected",
    "postponed_from": null,
  }
];