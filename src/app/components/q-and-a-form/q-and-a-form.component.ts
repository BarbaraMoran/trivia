import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISelectedFilterOptions } from 'src/app/interfaces/selected-filter-options.interface';
import { IQuestion } from 'src/app/interfaces/trivia-api-response.interface';
import { ApiTrivialService } from 'src/app/services/api-trivial.service';

@Component({
  selector: 'app-q-and-a-form',
  templateUrl: './q-and-a-form.component.html',
  styleUrls: ['./q-and-a-form.component.scss'],
})
export class QAndAFormComponent implements OnInit, OnDestroy {
  @Input() selectedFilterOptions!: ISelectedFilterOptions;
  apiSubscription!: Subscription;
  trivialQuestions!: IQuestion[];

  constructor(private apiTrivialService: ApiTrivialService) {}

  ngOnInit(): void {
    this.getTrivialQuestionsData();
  }

  getTrivialQuestionsData(): void {
    this.apiSubscription = this.apiTrivialService
      .getTrivialQuestionsData(this.selectedFilterOptions)
      .subscribe((data) => {
        this.trivialQuestions = data;
        console.log(data);
      });
  }
  // <
  //   organizeData(data: IQuestion[]): >

  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe;
  }
}
