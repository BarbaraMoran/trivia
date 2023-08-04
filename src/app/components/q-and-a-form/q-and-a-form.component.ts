import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ISelectedAnswer } from 'src/app/interfaces/selected-answer.interface';
import { ISelectedFilterOptions } from 'src/app/interfaces/selected-filter-options.interface';
import { IQuestion } from 'src/app/interfaces/trivia-api-response.interface';
import { TrivialService } from 'src/app/services/trivial.service';

@Component({
  selector: 'app-q-and-a-form',
  templateUrl: './q-and-a-form.component.html',
  styleUrls: ['./q-and-a-form.component.scss'],
})
export class QAndAFormComponent {
  @Input() trivialQuestions!: IQuestion[];
  @Input() resultsMode: boolean = false;
  @Input() gameMode: boolean = false;
  selectedAnswers: ISelectedAnswer[] = [];
  showButton: boolean = false;

  constructor(private trivialService: TrivialService, private router: Router) {}

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
    return this.selectedAnswers.length === 5 ? true : false;
  }

  submit(): void {
    console.log(this.selectedAnswers);
    this.trivialService.submittedAnswers = this.selectedAnswers;
    this.router.navigate(['/trivial-results']);
  }
}
