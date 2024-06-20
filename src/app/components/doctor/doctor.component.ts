import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  formValue!: FormGroup;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private _doctorService: DoctorService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formValue = this.fb.group({
      name: [''],
      surname: [''],
      speciality: [''],
      img: ['']
    });

    this.getAllDoctors();
  }

  getAllDoctors(): void {
    this._doctorService.getDoctors().subscribe(
      (res: Doctor[]) => {
        this.doctors = res;
      },
      error => {
        console.error('Error fetching doctors', error);
      }
    );
  }

  clickAddDoctors() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postDoctorDetails() {
    const name = this.formValue.get('name')?.value;
    const surname = this.formValue.get('surname')?.value;
    const speciality = this.formValue.get('speciality')?.value;
    const img = this.formValue.get('img')?.value;
    const doctor = Doctor.createWithoutId(name, surname, speciality, img);

    this._doctorService.addDoctor(doctor).subscribe(
      res => {
        console.log('Doctor added:', res);
        alert("Doctor added successfully");
        this.closeModal();
        this.getAllDoctors();
      },
      error => {
        console.error('Error adding doctor', error);
        alert("Failed to add doctor");
      }
    );
  }

  deleteDocs(row: any) {
    this._doctorService.deleteDoctorById(row.id).subscribe(
      res => {
        alert("Doctor deleted successfully");
        this.getAllDoctors();
      },
      error => {
        console.error('Error deleting doctor', error);
        alert("Failed to delete doctor");
      }
    );
  }

  private closeModal() {
    const ref = document.getElementById('cancel');
    ref?.click();
    this.formValue.reset();
  }
}
