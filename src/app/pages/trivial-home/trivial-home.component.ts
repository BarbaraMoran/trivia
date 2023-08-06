import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISelectedFilterOptions } from 'src/app/interfaces/selected-filter-options.interface';
import { IQuestion } from 'src/app/interfaces/trivia-api-response.interface';
import { ApiTrivialService } from 'src/app/services/api-trivial.service';
import { TrivialService } from 'src/app/services/trivial.service';

@Component({
  selector: 'app-trivial-home',
  templateUrl: './trivial-home.component.html',
  styleUrls: ['./trivial-home.component.scss'],
})
export class TrivialHomeComponent implements OnDestroy {
  selectedOptions!: ISelectedFilterOptions;
  apiSubscription!: Subscription;
  trivialQuestions!: IQuestion[];
  gameMode: boolean = true;

  constructor(
    private apiTrivialService: ApiTrivialService,
    private trivialService: TrivialService
  ) {}

  getSelectedOptions(selectedOptions: ISelectedFilterOptions): void {
    this.selectedOptions = selectedOptions;
    this.getTrivialQuestionsData();
  }

  getTrivialQuestionsData(): void {
    this.apiSubscription = this.apiTrivialService
      .getTrivialQuestionsData(this.selectedOptions)
      .subscribe((data) => {
        console.log(data);
        this.trivialQuestions = data;
        this.trivialService.questions = data;
      });
  }

  ngOnDestroy(): void {
    this.apiSubscription?.unsubscribe;
  }
}
