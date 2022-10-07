import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {
  QUESTION_MAX_LENGTH,
  validateOptionsRequired,
  ANSWER_OPTIONS_MIN_LENGTH,
  IMAGE_REGEX,
} from 'app/features/create/config';
import { Observable } from 'rxjs';
import { CreatePageService } from 'app/features/create/services/create-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'create-poll-form',
  templateUrl: './create-poll-form.component.html',
  styleUrls: ['./create-poll-form.component.scss'],
})
export class CreatePollFormComponent implements OnInit {
  isShowDescription = false;
  isOpenModal = false;
  isSubmitted = false;
  createPollForm: FormGroup;
  @ViewChild('inputImage') inputImage: ElementRef<HTMLInputElement> | undefined;
  avatarPreview = '';
  votingTypeOptions: { id: string; label: string }[] = [
    { id: 'multiple', label: 'Multiple Choice' },
    { id: 'yes/no', label: 'Yes/No question' },
  ];

  constructor(
    private fb: FormBuilder,
    private createService: CreatePageService,
    private router: Router
  ) {
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
      votingType: this.fb.control(this.votingTypeOptions[0].id, [
        Validators.required,
      ]),
      uploadImage: this.fb.control({
        encoded: undefined,
        information: undefined,
      }),
    });
  }
  ngOnInit(): void {}

  get answerOptionControls() {
    return (<FormArray>this.createPollForm.get('answerOptions')).controls;
  }

  onSubmitPoll() {
    this.isSubmitted = true;
    if (this.createPollForm.valid) {
      console.log('@Submit form', this.createPollForm.getRawValue());
      this.createService.createPollValue$.next(
        this.createPollForm.getRawValue()
      );
      this.router.navigate(['create-poll', 'step2']);
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

  handleCancelModal() {
    this.isOpenModal = false;
  }

  handleAddImage() {
    this.isOpenModal = true;
  }

  private handleUpload(e: Event): Observable<{
    encoded: string | null | undefined | ArrayBuffer;
    information: File;
  }> {
    return new Observable((observer) => {
      const reader = new FileReader();
      const files = (<HTMLInputElement>e.target).files as FileList;
      reader.onload = (loadEvent) => {
        observer.next({
          encoded: loadEvent.target?.result,
          information: files[0],
        });
      };
      reader.readAsDataURL(files[0]);
    });
  }

  handleUploadImage(e: Event) {
    this.handleUpload(e).subscribe((data) => {
      if (this.avatarPreview !== '') URL.revokeObjectURL(this.avatarPreview);
      const imageType = data.information.type;
      if (!IMAGE_REGEX.test(imageType)) {
        window.alert('Please input a valid image');
      }
      this.createPollForm.setControl('uploadImage', this.fb.control(data));
      this.avatarPreview = URL.createObjectURL(data.information);
      (<HTMLInputElement>e.target).value = '';
      this.handleCancelModal();
    });
  }

  handleAddAnswer() {
    const newOption = this.fb.control(null, Validators.required);
    ((<FormArray>this.createPollForm.get('answerOptions')) as FormArray).push(
      newOption
    );
  }

  handleRemoveAnswer(controlIndex: number) {
    (<FormArray>this.createPollForm.get('answerOptions')).removeAt(
      controlIndex
    );
  }

  handleSelectChange(optionValue: string) {
    if (optionValue === 'yes/no') {
      this.createPollForm.setControl(
        'answerOptions',
        this.fb.array(
          [
            this.fb.control({ value: 'YES', disabled: true }, [
              Validators.required,
            ]),
            this.fb.control({ value: 'NO', disabled: true }, [
              Validators.required,
            ]),
          ],
          {
            validators: [
              Validators.minLength(ANSWER_OPTIONS_MIN_LENGTH),
              validateOptionsRequired,
            ],
          }
        )
      );
    } else {
      this.createPollForm.get('answerOptions')?.reset();
      this.createPollForm.get('answerOptions')?.enable();
    }
  }
}
