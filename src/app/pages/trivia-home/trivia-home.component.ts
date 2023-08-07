import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISelectedFilterOptions } from 'src/app/interfaces/selected-filter-options.interface';
import { IQuestion } from 'src/app/interfaces/trivia-api-response.interface';
import { ApiTriviaService } from 'src/app/services/api-trivia.service';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-trivia-home',
  templateUrl: './trivia-home.component.html',
})
export class TriviaHomeComponent implements OnDestroy {
  selectedOptions!: ISelectedFilterOptions;
  apiSubscription!: Subscription;
  triviaQuestions!: IQuestion[];

  constructor(
    private apiTriviaService: ApiTriviaService,
    private triviaService: TriviaService
  ) {}

  getSelectedOptions(selectedOptions: ISelectedFilterOptions): void {
    this.selectedOptions = selectedOptions;
    this.getTriviaQuestionsData();
  }

  getTriviaQuestionsData(): void {
    this.apiSubscription = this.apiTriviaService
      .getTriviaQuestionsData(this.selectedOptions)
      .subscribe((data) => {
        console.log(data);
        this.triviaQuestions = data;
        this.triviaService.questions = data;
      });
  }

  ngOnDestroy(): void {
    this.apiSubscription?.unsubscribe;
  }
}
