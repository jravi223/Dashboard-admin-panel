import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderComponent, SideNavComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

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


}
