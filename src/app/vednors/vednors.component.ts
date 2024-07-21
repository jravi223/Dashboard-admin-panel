import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vednors',
  standalone: true,
  imports: [AdminComponent],
  templateUrl: './vednors.component.html',
  styleUrl: './vednors.component.css'
})
export class VednorsComponent {


  constructor(private router: Router) {

  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  


}
