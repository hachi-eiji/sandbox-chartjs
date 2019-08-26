import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {  BarChartConfig } from './bar-chart';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input()
  config: BarChartConfig;
  @Input()
  model: Observable<number[]>;

  constructor() { }

  ngOnInit() {
  }

}
