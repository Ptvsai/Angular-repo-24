import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { OtpComponentComponent } from './otp-component/otp-component.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'registration', component: RegistrationComponent},
    { path: 'registration/otp', component: OtpComponentComponent},
    { path: 'login', component: LoginComponent}
];
