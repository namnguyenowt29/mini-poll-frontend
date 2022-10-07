export interface CreatePollValueType {
  createPollStep: {
    answerOptions: string[];
    description?: string;
    question: string;
    uploadImage: {
      encoded: string | null | undefined | ArrayBuffer;
      information: File | null;
    };
    votingType: string;
  };
  settingPollStep: {
    allowMultipleOptions: boolean;
    startDateTime: {
      sDate: Date | string;
      sTime: Date | string;
    };
    endDateTime: {
      eDate: Date | string;
      eTime: Date | string;
    };
    votingRestrictions: string;
    emails: string | null;
  };
}
