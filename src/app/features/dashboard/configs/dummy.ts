import { DashBoardType, PollStatus } from '../models/dashboard.model';

export const dummyDashboardList: DashBoardType[] = [
  {
    no: '1',
    title: 'John Brown',
    voter: '100/120',
    status: {
      pollTitle: 'End at 2:00 20/10/2022',
      pollStatus: PollStatus.START,
    },
  },
  {
    no: '2',
    title: 'John Brown',
    voter: '',
    status: {
      pollTitle: 'End at 2:00 20/10/2022',
      pollStatus: PollStatus.START,
    },
  },
  {
    no: '3',
    title: 'John Brown',
    voter: '',
    status: {
      pollTitle: 'End at 2:00 20/10/2022',
      pollStatus: PollStatus.ENDED,
    },
  },
  {
    no: '4',
    title: 'John Brown',
    voter: '40/60',
    status: {
      pollTitle: 'End at 2:00 20/10/2022',
      pollStatus: PollStatus.START,
    },
  },
  {
    no: '5',
    title: '',
    voter: '40/60',
    status: {
      pollTitle: 'End at 2:00 20/10/2022',
      pollStatus: PollStatus.DRAFT,
    },
  },
  {
    no: '6',
    title: '',
    voter: '10/20',
    status: {
      pollTitle: 'End at 2:00 20/10/2022',
      pollStatus: PollStatus.START,
    },
  },
  {
    no: '7',
    title: 'John Brown',
    voter: '33/60',
    status: { pollTitle: 'End at 2:00 20/10/2022', pollStatus: PollStatus.END },
  },
  {
    no: '8',
    title: 'John Brown',
    voter: '33/60',
    status: {
      pollTitle: 'End at 2:00 20/10/2022',
      pollStatus: PollStatus.ENDED,
    },
  },
];
