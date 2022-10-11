export enum PollStatus {
  START = 'start',
  END = 'end',
  ENDED = 'ended',
  DRAFT = 'draft',
}

interface PollStatusType {
  pollStatus: PollStatus;
  pollTitle: string;
}

export interface DashBoardType {
  no: string;
  title: string;
  voter?: string;
  status: PollStatusType;
}
