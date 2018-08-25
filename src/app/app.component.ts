import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  numbers: number[];
  switchCases: number[];
  view: boolean = true;
  value: number;
  ngOnInit() {
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.switchCases = [5, 10, 20, 30];
  }
  toogleView() {
    this.view = !this.view;
  }
  getRandomValue() {
    this.value = this.switchCases[
      (Math.random() * this.switchCases.length) | 0
    ];
  }
}
