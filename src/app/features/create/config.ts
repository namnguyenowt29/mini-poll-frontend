import { AbstractControl, FormArray } from '@angular/forms';

export const QUESTION_MAX_LENGTH = 120;
export const ANSWER_OPTIONS_MIN_LENGTH = 2;

export function validateOptionsRequired(answerOptionsControl: AbstractControl) {
  const isInvalidOptions = (<FormArray>answerOptionsControl).controls.some(
    (control) => control.invalid
  );
  return isInvalidOptions
    ? {
        isInvalidOptions: isInvalidOptions,
      }
    : null;
}

export function validatePollDateTime(c: AbstractControl) {}

export const IMAGE_REGEX = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
export const MINUTE_TO_MILISECOND = 60000;
