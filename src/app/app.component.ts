import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nameInput: String = '';
  dateInput: string = '';
  amountInput: string = '';
  heightInput: number = 0;
  mile: number = 0;
  meter: number = 0;
  cmmeter: number = 0;

  onChangeName(value: string) {
    this.nameInput = value;
  }
  onChangeDate(value: string) {
    this.dateInput = value;
  }
  onAmountChange(value: string) {
    this.amountInput = value;
  }
  onHeightChange(value: number) {
    this.heightInput = value;
  }
  onMileChange(value: number) {
    this.mile = value;
  }
  onMileChangemeter(value: number) {
    this.meter = value;
  }
  onMileChangecmeter(value:number) {
    this.cmmeter = value;
  }
}
