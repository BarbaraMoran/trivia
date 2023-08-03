import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITriviaCategories } from '../interfaces/trivia-api-response.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiTrivialService {
  private URL_BASE = 'https://opentdb.com/'

  constructor(private http: HttpClient) { }

  getTrivialCategoriesData(): Observable<ITriviaCategories> {
    const CAT_PARAM = 'api_category.php';

    return this.http.get<ITriviaCategories>(`${this.URL_BASE}${CAT_PARAM}`);
  }
}
