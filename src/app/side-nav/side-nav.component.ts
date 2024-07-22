import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  constructor(private router: Router) {

  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }


  redirectToPages() {
    this.router.navigateByUrl('/admin/vendors');
  }

  redirttoHOme() {
    this.router.navigateByUrl('/admin');
  }

  redirectToPayments() {
    this.router.navigateByUrl('/payment');

  }

}
