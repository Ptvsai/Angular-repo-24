import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './otp-component.component.html',
  styleUrl: './otp-component.component.css'
})
export class OtpComponentComponent {

  ngOnInit() {
    
  }

  onSubmit(ref:any){
    console.log('otp', ref.value);
    
  }
}
