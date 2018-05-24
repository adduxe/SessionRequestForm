import { State } from '@progress/kendo-data-query';

import { SessionRequest } from './SessionRequest';
import { SessionRequestRevision} from './SessionRequestRevision';

export interface SessionRequestState {
  sessionRequest: SessionRequest;
  sessionRequestRevision: SessionRequestRevision;
  state: State;
  srrState: State;
}
