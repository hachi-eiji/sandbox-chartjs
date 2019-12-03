import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LineChartConfig } from './line-chart';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input()
  config: LineChartConfig;
  @Input()
  model: Observable<number[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
