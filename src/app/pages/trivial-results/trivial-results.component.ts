import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TrivialService } from 'src/app/services/trivial.service';

@Component({
  selector: 'app-trivial-results',
  templateUrl: './trivial-results.component.html',
  styleUrls: ['./trivial-results.component.scss'],
})
export class TrivialResultsComponent {
  resultsMode: boolean = true;

  constructor(private trivialService: TrivialService, private router: Router) {}

  navigateHome(): void {
    this.router.navigate(['/trivial-home']);
  }
}
