import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DoctorComponent } from './components/doctor/doctor.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { LoginComponent } from './components/login/login.component';
import { FilterPipe } from './filter/filter.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminLoggedInGuard } from './guards/admin-logged-in.guard';
import { LoggedInGuard } from './guards/logged-in.guard';
import { httpInterceptorProviders } from './_helpers/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    MedicineComponent,
    FilterPipe,
    HospitalComponent,
    SponsorComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoggedInGuard,
    AdminLoggedInGuard,httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
