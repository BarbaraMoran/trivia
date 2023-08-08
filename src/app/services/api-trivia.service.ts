import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IQuestion,
  ITriviaCategories,
  ITriviaCategory,
  ITriviaQuestions,
} from '../interfaces/trivia-api-response.interface';
import { Observable, catchError, map } from 'rxjs';
import { ISelectedFilterOptions } from '../interfaces/selected-filter-options.interface';
import { QUESTIONS_AMOUNT } from '../constants/questions-amount-constant';

@Injectable({
  providedIn: 'root',
})
export class ApiTriviaService {
  private URL_BASE = 'https://opentdb.com/';

  constructor(private http: HttpClient) {}

  getTriviaCategoriesData(): Observable<ITriviaCategory[]> {
    const CAT_PARAM: string = 'api_category.php';

    return this.http
      .get<ITriviaCategories>(`${this.URL_BASE}${CAT_PARAM}`)
      .pipe(
        map((data) => data.trivia_categories),
        catchError((err) => {
          throw Error(err);
        })
      );
  }

  getTriviaQuestionsData(
    selectedParams: ISelectedFilterOptions
  ): Observable<IQuestion[]> {
    const QUESTION_PARAM = 'api.php';

    return this.http
      .get<ITriviaQuestions>(`${this.URL_BASE}${QUESTION_PARAM}`, {
        params: {
          amount: QUESTIONS_AMOUNT,
          category: selectedParams.category,
          difficulty: selectedParams.difficulty,
          type: 'multiple',
        },
      })
      .pipe(
        map((data) => {
          let i = 0;
          data.results.forEach((item) => {
            item.allAnswers = this.shuffleAnswers([
              ...item.incorrect_answers,
              item.correct_answer,
            ]);
            item.id = i++;
          });

          return data.results;
        }),
        catchError((err) => {
          throw Error(err);
        })
      );
  }

  shuffleAnswers(array: string[]): string[] {
    array.sort(function () {
      return Math.random() - 0.5;
    });

    return array;
  }
}
