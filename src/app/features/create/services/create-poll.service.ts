import { BehaviorSubject } from 'rxjs';
import { CreatePollValueType } from 'app/features/create/models/answer-options.model';

export class CreatePollSerivce {
  public createPollStepValue: any;
  public readonly createPollValue$ = new BehaviorSubject<CreatePollValueType>({
    createPollStep: {
      answerOptions: [''],
      description: undefined,
      question: '',
      uploadImage: {
        encoded: null,
        information: null,
      },
      votingType: '',
    },
    settingPollStep: {
      allowMultipleOptions: false,
      startDateTime: {
        sDate: '',
        sTime: '',
      },
      endDateTime: {
        eDate: '',
        eTime: '',
      },
      votingRestrictions: '',
      emails: '',
    },
  });
}
