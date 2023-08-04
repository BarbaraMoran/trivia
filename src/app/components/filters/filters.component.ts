import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DIFFICULTY_OPTIONS } from 'src/app/constants/constants';
import { ITriviaCategory } from 'src/app/interfaces/trivia-api-response.interface';
import { ApiTrivialService } from 'src/app/services/api-trivial.service';
import { Output, EventEmitter } from '@angular/core';
import { ISelectedFilterOptions } from 'src/app/interfaces/selected-filter-options.interface';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() selectedOptions = new EventEmitter<ISelectedFilterOptions>();
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
      .subscribe((data) => (this.categoryOptions = data));
  }

  submit(category: string, difficulty: string): void {
    this.selectedOptions.emit({ category, difficulty });
  }

  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe();
  }
}
