import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISelectedAnswer } from 'src/app/interfaces/selected-answer.interface';
import { IQuestion } from 'src/app/interfaces/trivia-api-response.interface';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.scss'],
})
export class QAndAComponent implements OnInit {
  @Input() questionData!: IQuestion;
  @Input() displayResultsMode!: boolean;
  @Input() disabled: boolean = false;
  @Output() addAnswerInfo = new EventEmitter<ISelectedAnswer>();
  selectedAnswer!: string;

  submitAnswer(): void {
    const selectedAnswerInfo: ISelectedAnswer = {
      id: this.questionData.id,
      selectedAnswer: this.selectedAnswer,
      correctAnswer: this.questionData.correct_answer,
      allAnswers: this.questionData.allAnswers,
    };
    this.addAnswerInfo.emit(selectedAnswerInfo);
  }

  ngOnInit(): void {}
}
