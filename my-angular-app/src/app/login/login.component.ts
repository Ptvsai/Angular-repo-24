import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup

  constructor(private fb:FormBuilder) { }
    ngOnInit() {
      this.loginForm = this.fb.group({
        emailId: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      })
  }

  submitLogin(e: any) {
    e && e.preventDefault()
    console.log('eee', this.loginForm.value);
    
  }
}
