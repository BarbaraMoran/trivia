import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISelectedFilterOptions } from 'src/app/interfaces/selected-filter-options.interface';
import { IQuestion } from 'src/app/interfaces/trivia-api-response.interface';
import { ApiTriviaService } from 'src/app/services/api-trivia.service';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-trivia-home',
  templateUrl: './trivia-home.component.html',
  styleUrls: ['./trivia-home.component.scss'],
})
export class TriviaHomeComponent implements OnDestroy {
  selectedOptions!: ISelectedFilterOptions;
  apiSubscription!: Subscription;
  triviaQuestions!: IQuestion[];
  apiError: boolean = false;
  noData: boolean = false;

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
      .subscribe({
        next: (data) => {
          this.triviaQuestions = data;
          this.noData = data.length ? false : true;
          this.triviaService.questions = data;
        },
        error: (error) => {
          this.apiError = true;
        },
      });
  }

  ngOnDestroy(): void {
    this.apiSubscription?.unsubscribe;
  }
}
