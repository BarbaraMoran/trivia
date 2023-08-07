import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QUESTIONS_AMOUNT } from 'src/app/constants/questions-amount-constant';
import { ISelectedAnswer } from 'src/app/interfaces/selected-answer.interface';
import { IQuestion } from 'src/app/interfaces/trivia-api-response.interface';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-q-and-a-form',
  templateUrl: './q-and-a-form.component.html',
  styleUrls: ['./q-and-a-form.component.scss'],
})
export class QAndAFormComponent implements OnInit {
  @Input() resultsMode: boolean = false;
  @Input() triviaQuestions!: IQuestion[];
  selectedAnswers: ISelectedAnswer[] = [];
  submittedAnswers: ISelectedAnswer[] = [];
  showButton: boolean = false;
  totalScoreLiteral!: string;

  constructor(private triviaService: TriviaService, private router: Router) {}

  ngOnInit(): void {
    if (this.resultsMode && this.triviaService.submittedAnswers) {
      this.submittedAnswers = this.triviaService.submittedAnswers;
      this.totalScoreLiteral = this.getTotalScoreLiteral();
    }
  }

  ngOnChanges(): void {
    this.showButton = false;
    this.selectedAnswers = [];
    console.log('onchanges');
  }

  getSelectedAnswers(selectedAnswerInfo: ISelectedAnswer): void {
    this.selectedAnswers = this.selectedAnswers.filter(
      (item) => item.id !== selectedAnswerInfo.id
    );
    this.selectedAnswers.push(selectedAnswerInfo);

    if (this.checkIfFormIsComplete()) {
      this.showButton = true;
      console.log(this.showButton);
      console.log(this.selectedAnswers);
    }
  }

  checkIfFormIsComplete(): boolean {
    return this.selectedAnswers.length === QUESTIONS_AMOUNT ? true : false;
  }

  submit(): void {
    console.log(this.selectedAnswers);
    this.triviaService.submittedAnswers = this.selectedAnswers;
    this.router.navigate(['/trivia-results']);
  }

  //Results Mode
  getTotalScoreLiteral(): string {
    const correctAnswers = this.submittedAnswers.filter(
      (item) => item.selectedAnswer === item.correctAnswer
    );

    console.log(correctAnswers);

    return `You scored ${correctAnswers.length} out of ${QUESTIONS_AMOUNT}`;
  }
}
