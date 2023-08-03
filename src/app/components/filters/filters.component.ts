import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DIFFICULTY_OPTIONS } from 'src/app/constants/constants';
import {
  Difficulty,
  ITriviaCategory,
} from 'src/app/interfaces/trivia-api-response.interface';
import { ApiTrivialService } from 'src/app/services/api-trivial.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit, OnDestroy {
  categoryOptions!: ITriviaCategory[];
  difficultyOptions!: { name: string; value: string }[];

  apiSubscription!: Subscription;

  constructor(private apiTrivialService: ApiTrivialService) {
    this.difficultyOptions = DIFFICULTY_OPTIONS;
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.apiSubscription = this.apiTrivialService
      .getTrivialCategoriesData()
      .subscribe((data) => (this.categoryOptions = data.trivia_categories));
  }

  submit(category: string, difficulty: string): void {
    console.log(category);
    console.log(difficulty);
  }

  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe();
  }
}
