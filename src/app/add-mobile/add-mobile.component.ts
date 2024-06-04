import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.css']
})
export class AddMobileComponent implements OnInit {
  mobileForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.mobileForm = this.fb.group({
      brand: ['', [Validators.required, Validators.minLength(2)]],
      model: ['', [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]],
      color: ['', Validators.required],
      storage: [0, [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    // Initialize form if needed
  }

  onSubmit() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.mobileForm.valid) {
      this.appService.addMobile(this.mobileForm.value).subscribe(
        response => {
          this.successMessage = response.message;
          this.mobileForm.reset();
        },
        error => {
          this.errorMessage = 'Failed to add mobile. Please try again.';
        }
      );
    }
  }
}
