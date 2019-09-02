import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BarChartConfig } from '../bar-chart/bar-chart';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.scss']
})
export class HorizontalBarChartComponent implements OnInit {
  @Input()
  config: BarChartConfig;
  @Input()
  model: Observable<number[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
