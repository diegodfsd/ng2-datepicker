import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { DateModel, DatePickerOptions } from '../ng2-datepicker/ng-datepicker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  date: DateModel;
  options: DatePickerOptions;
  dateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.options = new DatePickerOptions({
                style: 'normal',
                autoApply: true,
                firstWeekdaySunday: true,
                minDate: new Date(),
                disableSaturday: true,
                disableSunday: true
            });

    this.createForm();
  }

  createForm(): void {
    this.dateForm = this.fb.group({
      'date': ['', Validators.required]
    });
  }
}
