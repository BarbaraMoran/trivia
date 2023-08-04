import { Injectable } from '@angular/core';
import { ISelectedAnswer } from '../interfaces/selected-answer.interface';
import { IQuestion } from '../interfaces/trivia-api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class TrivialService {
  private _submittedAnswers!: ISelectedAnswer[];
  private _questions!: IQuestion[];

  constructor() {}

  public get questions(): IQuestion[] {
    return this._questions;
  }
  public set questions(value: IQuestion[]) {
    this._questions = value;
  }

  public get submittedAnswers(): ISelectedAnswer[] {
    return this._submittedAnswers;
  }
  public set submittedAnswers(value: ISelectedAnswer[]) {
    this._submittedAnswers = value;
  }
}
