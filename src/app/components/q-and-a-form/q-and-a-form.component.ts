import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QUESTIONS_NUMBER } from 'src/app/constants/constants';
import { ISelectedAnswer } from 'src/app/interfaces/selected-answer.interface';
import { IQuestion } from 'src/app/interfaces/trivia-api-response.interface';
import { TrivialService } from 'src/app/services/trivial.service';

@Component({
  selector: 'app-q-and-a-form',
  templateUrl: './q-and-a-form.component.html',
  styleUrls: ['./q-and-a-form.component.scss'],
})
export class QAndAFormComponent implements OnInit {
  @Input() resultsMode: boolean = false;
  @Input() gameMode: boolean = false;
  @Input() trivialQuestions!: IQuestion[];
  selectedAnswers: ISelectedAnswer[] = [];
  submittedAnswers: ISelectedAnswer[] = [];
  showButton: boolean = false;
  totalScoreLiteral!: string;

  constructor(private trivialService: TrivialService, private router: Router) {}

  ngOnInit(): void {
    if (this.resultsMode && this.trivialService.submittedAnswers) {
      this.submittedAnswers = this.trivialService.submittedAnswers;
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
    return this.selectedAnswers.length === QUESTIONS_NUMBER ? true : false;
  }

  submit(): void {
    // this.sortSubmittedAnswers();
    console.log(this.selectedAnswers);
    this.trivialService.submittedAnswers = this.selectedAnswers;
    this.router.navigate(['/trivial-results']);
  }

  // sortSubmittedAnswers(): void {
  //   this.selectedAnswers.sort((a, b) => a.id - b.id);
  // }

  //Results Mode
  getTotalScoreLiteral(): string {
    const correctAnswers = this.submittedAnswers.filter(
      (item) => item.selectedAnswer === item.correctAnswer
    );

    console.log(correctAnswers);

    return `You scored ${correctAnswers.length} out of ${QUESTIONS_NUMBER}`;
  }
}
