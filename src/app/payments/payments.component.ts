import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [SideNavComponent,HeaderComponent],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {

}
