import { State } from '@progress/kendo-data-query';

import { SessionRequest } from './sessionRequest';
import { SessionRequestRevision} from './sessionRequestRevision';

export interface SessionRequestState {
  sessionRequest: SessionRequest;
  sessionRequestRevision: SessionRequestRevision;
  state: State;
  srrState: State;
  rowIndex: number;
}
