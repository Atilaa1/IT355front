import { Component } from '@angular/core';
import { Hospital } from 'src/app/models/hospital';
import { HospitalService } from 'src/app/services/hospital/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent {
  hospitals: Hospital[] = [];
  selectedHospital: Hospital | null = null;

  constructor(private hospitalService: HospitalService) {}

  ngOnInit(): void {
    this.getAllHospitals();
  }

  getAllHospitals(): void {
    this.hospitalService.getHospitals().subscribe(
      (res: Hospital[]) => {
        this.hospitals = res;
      },
      error => {
        console.error('Error fetching hospitals', error);
      }
    );
  }

  viewDetails(hospital: Hospital): void {
    this.selectedHospital = hospital;
  }

  closeModal(): void {
    this.selectedHospital = null;
  }
}