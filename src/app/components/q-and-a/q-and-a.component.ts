import { Component, Input, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/interfaces/trivia-api-response.interface';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.scss'],
})
export class QAndAComponent implements OnInit {
  @Input() questionData!: IQuestion;

  ngOnInit(): void {}
}
