import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink
  ]
})
export class AppComponent {
  title = 'Angular 12';

  constructor(
    private router: Router,
  ) {

  }
}
