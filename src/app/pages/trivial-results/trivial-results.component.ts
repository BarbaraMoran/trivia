import { Component, Input } from '@angular/core';
import { IQuestion } from 'src/app/interfaces/trivia-api-response.interface';
import { TrivialService } from 'src/app/services/trivial.service';

@Component({
  selector: 'app-trivial-results',
  templateUrl: './trivial-results.component.html',
  styleUrls: ['./trivial-results.component.scss'],
})
export class TrivialResultsComponent {
  trivialQuestions!: IQuestion[];
  resultsMode: boolean = true;

  constructor(private trivialService: TrivialService) {
    this.trivialQuestions = this.trivialService.questions;
  }
}
