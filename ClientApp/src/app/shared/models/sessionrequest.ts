import { SessionRequestRevision } from './SessionRequestRevision';

export interface SessionRequest {
  SessionRequestID: number
  SessionCode: string;
  Term: string;
  Status: string;
  Owner: string;
  LateChange: boolean;
  OwnerChanged: boolean;
  Revisions: SessionRequestRevision[];
}
