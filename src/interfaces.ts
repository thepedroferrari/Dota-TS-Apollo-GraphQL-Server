export interface IEvent {
  id: Number;
  title: String;
  start: String;
  end: String;
  tier: Number;
  bestOf: Number;
  tournament_id: Number;
  tournament_name: String;
  substage_id: Number;
  deleted_at: String | null;
  pbp_status: PhbStatus;
  postponed_from: String | null;
  game: IGame;
}

type PhbStatus = 'expected' | 'possible';

interface IGame {
  id: Number;
  title: String;
  default_match_type: String;
  default_map: Number;
  color: String;
  long_title: String;
  deleted_at: String | null;
  images: IGameImages;
}

interface IGameImages {
  square: String;
  circle: String;
  rectangle: String;
}