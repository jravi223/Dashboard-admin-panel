import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';

class Registration {
  constructor(
    public firstName: string = '',
    public title: string = '',
    public status: string = '',
    public position: string = '',
    public country: string = 'Select country'
  ) { }
}

@Component({
  selector: 'app-vednors',
  standalone: true,
  imports: [AdminComponent, FormsModule, CommonModule,SideNavComponent, HeaderComponent, NgFor, NgForOf, NgIf],
  templateUrl: './vednors.component.html',
  styleUrl: './vednors.component.css'
})
export class VednorsComponent {
  // It maintains list of Registrations
  registrations: Registration[] = [];
  // It maintains registration Model
  regModel: any;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: any;

  constructor(private router: Router) {

  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }



  // This method associate to New Button.
  onNew() {
    // Initiate new registration.
    this.regModel = new Registration();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push registration model object into registration list.
      this.registrations.push(this.regModel);
    } else {
      // Update the existing properties values based on model.
      this.registrations[this.selectedRow].firstName = this.regModel.firstName;
      this.registrations[this.selectedRow].title = this.regModel.title;
      this.registrations[this.selectedRow].status = this.regModel.status;
      this.registrations[this.selectedRow].position = this.regModel.position;
      // this.registrations[this.selectedRow].country = this.regModel.country;
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.regModel = new Registration();
    // Retrieve selected registration from list and assign to model.
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding registration entry from the list.
    this.registrations.splice(index, 1);
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }




}
