import { SessionRequestRevision } from './SessionRequestRevision';

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
