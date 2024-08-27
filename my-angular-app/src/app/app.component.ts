import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isModalVisible:boolean=false;

  constructor(private router:Router) { }

  OnlogoClick(e:any) {
    e && e.preventDefault()
    this.router.navigate(['/'])
  }

  openModal(){
    this.isModalVisible=true;
  }

  closeModal(){
    this.isModalVisible=false;
  }

  navigateToSignIn(e:any) {
    e && e.preventDefault();

    this.isModalVisible=false;

    this.router.navigate(["/login"])

  }
}
