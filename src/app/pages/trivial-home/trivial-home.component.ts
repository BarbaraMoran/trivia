import { Component } from '@angular/core';
import { ISelectedFilterOptions } from 'src/app/interfaces/selected-filter-options.interface';

@Component({
  selector: 'app-trivial-home',
  templateUrl: './trivial-home.component.html',
  styleUrls: ['./trivial-home.component.scss'],
})
export class TrivialHomeComponent {
  selectedOptions!: ISelectedFilterOptions;

  getSelectedOptions(selectedOptions: ISelectedFilterOptions): void {
    this.selectedOptions = selectedOptions;
    console.log(this.selectedOptions);
  }
}
