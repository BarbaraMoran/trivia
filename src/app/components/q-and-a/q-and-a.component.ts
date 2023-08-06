import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISelectedAnswer } from 'src/app/interfaces/selected-answer.interface';
import { IQuestion } from 'src/app/interfaces/trivia-api-response.interface';
import { TrivialService } from 'src/app/services/trivial.service';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.scss'],
})
export class QAndAComponent implements OnInit {
  @Input() questionData!: IQuestion;
  @Input() resultsMode: boolean = false;
  @Output() addAnswerInfo = new EventEmitter<ISelectedAnswer>();
  selectedAnswer!: string;
  submitedAnswer!: ISelectedAnswer;
  green: string = 'green';
  red: string = 'red';

  constructor(private trivialService: TrivialService) {}

  ngOnInit(): void {
    if (this.resultsMode) {
      this.submitedAnswer =
        this.trivialService.submittedAnswers[this.questionData.id];
    }
  }

  submitAnswer(): void {
    const selectedAnswerInfo: ISelectedAnswer = {
      id: this.questionData.id,
      selectedAnswer: this.selectedAnswer,
      correctAnswer: this.questionData.correct_answer,
      allAnswers: this.questionData.allAnswers,
    };
    this.addAnswerInfo.emit(selectedAnswerInfo);
  }

  getBtnColor(answerOption: string): string | undefined {
    if (answerOption === this.questionData.correct_answer) {
      return 'green';
    } else if (answerOption === this.submitedAnswer.selectedAnswer) {
      return 'red';
    }
    return undefined;
  }
}
