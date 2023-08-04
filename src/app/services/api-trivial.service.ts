import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  IQuestion,
  ITriviaCategories,
  ITriviaCategory,
  ITriviaQuestions,
} from '../interfaces/trivia-api-response.interface';
import { Observable, catchError, map, tap } from 'rxjs';
import { ISelectedFilterOptions } from '../interfaces/selected-filter-options.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiTrivialService {
  private URL_BASE = 'https://opentdb.com/';

  constructor(private http: HttpClient) {}

  getTrivialCategoriesData(): Observable<ITriviaCategory[]> {
    const CAT_PARAM = 'api_category.php';

    return this.http
      .get<ITriviaCategories>(`${this.URL_BASE}${CAT_PARAM}`)
      .pipe(
        map((data) => data.trivia_categories),
        catchError((err) => {
          throw Error(err);
        })
      );
  }

  getTrivialQuestionsData(
    selectedParams: ISelectedFilterOptions
  ): Observable<IQuestion[]> {
    const questionsAmmount = 5;
    const type = 'multiple';
    const questionsParams = `api.php?amount=${questionsAmmount}&category=${selectedParams.category}&difficulty=${selectedParams.difficulty}&type=${type}`;

    return this.http
      .get<ITriviaQuestions>(`${this.URL_BASE}${questionsParams}`)
      .pipe(
        map((data) => {
          data.results.forEach((item: IQuestion) => {
            item.allAnswers = [...item.incorrect_answers, item.correct_answer];
          });

          return data.results;
        }),
        catchError((err) => {
          throw Error(err);
        })
      );
  }
}
