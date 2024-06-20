import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
  medicine: Medicine[] = [];
  formValue!: FormGroup;
  showAdd!: boolean;
  showUpdate!: boolean;
  @Input() searchText: any;

  constructor(private medc: MedicineService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: [''],
      name: [''],
      company: [''],
      dose: [''],
      description: [''],
      img: ['']
    });
    this.searchText = "";
    this.getAllMedicine();
  }

  clickAddMedicine() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postMedicineDetails() {
    const name = this.formValue.get('name')?.value;
    const company = this.formValue.get('company')?.value;
    const dose = this.formValue.get('dose')?.value;
    const description = this.formValue.get('description')?.value;
    const img = this.formValue.get('img')?.value;
    const medicine = new Medicine(0, name, company, dose, description, img); // ID is 0 or omitted for new entry

    this.medc.addMedicine(medicine).subscribe(
      res => {
        alert("Lek dodat");
        this.closeModal();
        this.getAllMedicine();
      },
      error => {
        console.error('Error adding medicine', error);
        alert("Failed to add medicine");
      }
    );
  }

  deleteMedicine(row: any) {
    this.medc.deleteMedicineById(row.id).subscribe(
      res => {
        alert("Uspesno obrisano!");
        this.getAllMedicine();
      },
      error => {
        console.error('Error deleting medicine', error);
        alert("Failed to delete medicine");
      }
    );
  }

  onEdit(row: any) {
    this.formValue.controls['id'].setValue(row.id);
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['company'].setValue(row.company);
    this.formValue.controls['dose'].setValue(row.dose);
    this.formValue.controls['description'].setValue(row.description);
    this.formValue.controls['img'].setValue(row.img);
    this.showAdd = false;
    this.showUpdate = true;
  }

  updateMedicineDetails() {
    const id = this.formValue.get('id')?.value;
    const name = this.formValue.get('name')?.value;
    const company = this.formValue.get('company')?.value;
    const dose = this.formValue.get('dose')?.value;
    const description = this.formValue.get('description')?.value;
    const img = this.formValue.get('img')?.value;
    const updatedMedicine = new Medicine(id, name, company, dose, description, img);

    this.medc.updateMedicine(updatedMedicine).subscribe(
      res => {
        alert("Lek ažuriran");
        this.closeModal();
        this.getAllMedicine();
      },
      error => {
        console.error('Error updating medicine', error);
        alert("Failed to update medicine");
      }
    );
  }

  getAllMedicine() {
    this.medc.getMedicine().subscribe(
      res => {
        this.medicine = res;
      },
      error => {
        console.error('Error fetching medicines', error);
      }
    );
  }

  private closeModal() {
    const ref = document.getElementById('cancel');
    ref?.click();
    this.formValue.reset();
  }
}
