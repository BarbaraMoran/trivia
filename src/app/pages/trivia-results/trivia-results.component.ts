import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IQuestion } from 'src/app/interfaces/trivia-api-response.interface';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-trivia-results',
  templateUrl: './trivia-results.component.html',
  styleUrls: ['./trivia-results.component.scss'],
})
export class TriviaResultsComponent implements OnInit {
  resultsMode: boolean = true;
  triviaQuestions!: IQuestion[];

  constructor(private triviaService: TriviaService, private router: Router) {
    this.triviaQuestions = this.triviaService.questions;
  }

  ngOnInit(): void {
    if (!this.triviaQuestions) {
      this.navigateHome();
    }
  }

  navigateHome(): void {
    this.router.navigate(['/trivia-home']);
  }
}
