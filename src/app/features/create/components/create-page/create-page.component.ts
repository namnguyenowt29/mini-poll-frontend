import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  QUESTION_MAX_LENGTH,
  validateOptionsRequired,
} from 'app/features/create/config';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})
export class CreatePageComponent implements OnInit {
  isShowDescription = false;
  isSubmitted = false;
  createPollForm: FormGroup;
  votingTypeOptions: { id: string; label: string }[] = [
    { id: 'multiple', label: 'Multiple Choice' },
    { id: 'yes/no', label: 'Yes/No question' },
  ];

  constructor(private fb: FormBuilder) {
    this.createPollForm = this.fb.group({
      question: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(QUESTION_MAX_LENGTH),
      ]),
      answerOptions: this.fb.array(
        [this.fb.control('', [Validators.required])],
        {
          validators: [Validators.minLength(2), validateOptionsRequired],
        }
      ),
      votingType: this.fb.control(null, [Validators.required]),
    });
  }
  ngOnInit(): void {}

  public get getAnswerOptionControls() {
    return (<FormArray>this.createPollForm.get('answerOptions')).controls;
  }

  onPollSubmit() {
    this.isSubmitted = true;
    if (this.createPollForm.valid) {
      console.log('@Submit form', this.createPollForm.value);
    } else {
      Object.values(this.createPollForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({
            onlySelf: true,
          });
        }
      });
    }
  }

  handleToggleDescription() {
    this.isShowDescription = !this.isShowDescription;
    if (this.isShowDescription) {
      this.createPollForm.addControl(
        'description',
        this.fb.control(null, [Validators.required])
      );
    }
  }

  handleAddImage() {}

  handleAddAnswer() {
    const newOption = this.fb.control(null, Validators.required);
    (<FormArray>this.createPollForm.get('answerOptions')).push(newOption);
  }

  handleRemoveAnswer(controlIndex: number) {
    (<FormArray>this.createPollForm.get('answerOptions')).removeAt(
      controlIndex
    );
  }
}
