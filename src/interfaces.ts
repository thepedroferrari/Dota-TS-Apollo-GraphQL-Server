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
}

type PhbStatus = 'expected' | 'possible';
