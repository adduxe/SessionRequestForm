import { SessionRequest } from './SessionRequest';
import { State } from '@progress/kendo-data-query';

export interface SessionRequestState {
  sessionRequest: SessionRequest;
  state: State;
}
