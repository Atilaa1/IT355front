import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';

const routes: Routes = [
  { path: 'doctors', component: DoctorComponent },
  { path: 'hospitals', component: HospitalComponent },
  { path: 'medicines', component: MedicineComponent },
  { path: 'sponsors', component: SponsorComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
