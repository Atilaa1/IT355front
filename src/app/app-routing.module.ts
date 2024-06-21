import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { AdminLoggedInGuard } from './guards/admin-logged-in.guard';
import { LoggedInGuard } from './guards/logged-in.guard';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: RegistrationComponent },
  { path: 'doctors', component: DoctorComponent, canActivate: [AdminLoggedInGuard] },
  { path: 'hospitals', component: HospitalComponent, canActivate: [LoggedInGuard] },
  { path: 'medicines', component: MedicineComponent, canActivate: [LoggedInGuard] },
  { path: 'sponsors', component: SponsorComponent, canActivate: [LoggedInGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }  // Defaultna ruta
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
