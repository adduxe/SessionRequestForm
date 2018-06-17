import { SessionRequestRevision } from './sessionRequestRevision';

export interface SessionRequest {
  sessionRequestID: number
  sessionCode: string;
  term: string;
  status: string;
  owner: string;
  lateChange: boolean;
  ownerChanged: boolean;
  revisions: SessionRequestRevision[];
}
