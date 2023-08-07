import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITriviaCategory } from 'src/app/interfaces/trivia-api-response.interface';
import { Output, EventEmitter } from '@angular/core';
import { ISelectedFilterOptions } from 'src/app/interfaces/selected-filter-options.interface';
import { ApiTriviaService } from 'src/app/services/api-trivia.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() selectedOptions = new EventEmitter<ISelectedFilterOptions>();
  categoryOptions!: ITriviaCategory[];
  apiSubscription!: Subscription;
  DIFFICULTY_OPTIONS: { name: string; value: string }[] = [
    {
      name: 'Easy',
      value: 'easy',
    },
    {
      name: 'Medium',
      value: 'medium',
    },
    {
      name: 'Hard',
      value: 'hard',
    },
  ];

  constructor(private apiTriviaService: ApiTriviaService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.apiSubscription = this.apiTriviaService
      .getTriviaCategoriesData()
      .subscribe((data) => (this.categoryOptions = data));
  }

  submit(category: string, difficulty: string): void {
    this.selectedOptions.emit({ category, difficulty });
  }

  ngOnDestroy(): void {
    this.apiSubscription?.unsubscribe();
  }
}
