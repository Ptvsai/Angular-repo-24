import { Component } from '@angular/core';
import { InputFieldComponent } from '../input-field/input-field.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [InputFieldComponent,CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder, public router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    });
  }


  registrationValues =(e:any)=>{
    e && e.preventDefault();
    if (this.form.valid) {
      console.log('Form Values:', this.form.value);
      this.router.navigate(['registration/otp'])
    } {
      console.log('Form is invalid');
    }
  }
  

}
