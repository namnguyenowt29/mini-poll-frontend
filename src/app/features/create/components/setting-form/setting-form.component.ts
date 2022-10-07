import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format, isAfter } from 'date-fns';
import { MINUTE_TO_MILISECOND } from 'app/features/create/config';

@Component({
  selector: 'setting-form',
  templateUrl: './setting-form.component.html',
  styleUrls: ['./setting-form.component.scss'],
})
export class SettingFormComponent implements OnInit {
  votingRestrictionOptions = [
    {
      id: 'one-time',
      label: 'one time vote per code',
    },
    {
      id: 'multiple-times',
      label: 'multiple times vote per code',
    },
  ];
  settingForm: FormGroup;
  isSubmitted = false;
  isEndDateGreater = false;

  constructor(private fb: FormBuilder) {
    this.settingForm = this.fb.group({
      allowMultipleOptions: this.fb.control(false),
      startDateTime: this.fb.group({
        sDate: this.fb.control(null),
        sTime: this.fb.control(null),
      }),
      endDateTime: this.fb.group({
        eDate: this.fb.control(null, [Validators.required]),
        eTime: this.fb.control(null, [Validators.required]),
      }),
      votingRestrictions: this.fb.control('one-time'),
      emails: this.fb.control(null),
    });
  }
  ngOnInit(): void {}

  private handleCompareDateTime(
    startDate: string,
    startTime: string,
    endDate: string,
    endTime: string
  ) {
    const startDateTime = new Date(startDate + ' ' + startTime + 'Z');
    const endDateTime = new Date(endDate + ' ' + endTime + 'Z');
    this.isEndDateGreater = isAfter(endDateTime, startDateTime);
    console.log(this.isEndDateGreater);
  }

  onSubmit() {
    this.isSubmitted = true;
    this.handleCompareDateTime(
      this.settingForm.value.startDateTime.sDate,
      this.settingForm.value.startDateTime.sTime,
      this.settingForm.value.endDateTime.eDate,
      this.settingForm.value.endDateTime.eTime
    );
    if (this.settingForm.valid && this.isEndDateGreater) {
      console.log('@@ Setting form value', this.settingForm.value);
    } else {
      Object.values(this.settingForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({
            onlySelf: true,
          });
        }
      });
    }
  }

  handleStartDateChange() {
    this.isEndDateGreater = true;
    const updateTime = format(
      new Date().getTime() + 15 * MINUTE_TO_MILISECOND,
      'HH:mm'
    );
    this.settingForm.patchValue({
      startDateTime: {
        sTime: updateTime,
      },
    });
  }

  handleStartTimeChange() {
    this.isEndDateGreater = true;
    const updateDate = format(new Date(), 'yyyy-MM-dd');
    this.settingForm.patchValue({
      startDateTime: {
        sDate: updateDate,
      },
    });
  }

  handleEndDateChange() {
    this.isEndDateGreater = true;
    const updateTime = '23:59';
    this.settingForm.patchValue({
      endDateTime: {
        eTime: updateTime,
      },
    });
  }

  handleEndTimeChange() {
    this.isEndDateGreater = true;
    const updateDate = format(new Date(), 'yyyy-MM-dd');
    this.settingForm.patchValue({
      endDateTime: {
        eDate: updateDate,
      },
    });
  }
}
