import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  formSchema: any;
  dynamicForm!: FormGroup;

  constructor(private apiService: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fetchFormSchema();
  }

  fetchFormSchema(): void {
    this.apiService.getFormSchema().subscribe((response) => {
      this.formSchema = response.form;
      this.createForm();
    });
  }

  createForm(): void {
    const formGroup: any = {};

    this.formSchema.fields.forEach((field: any) => {
      const validations: any = [];
      if (field.required) validations.push(Validators.required);
      if (field.minLength) validations.push(Validators.minLength(field.minLength));
      if (field.maxLength) validations.push(Validators.maxLength(field.maxLength));
      if (field.regex) validations.push(Validators.pattern(field.regex));

      formGroup[field.name] = ['', validations];
    });

    this.dynamicForm = this.fb.group(formGroup);
  }

  onSubmit(): void {
    if (this.dynamicForm.valid) {
      console.log('Form Submitted:', this.dynamicForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
