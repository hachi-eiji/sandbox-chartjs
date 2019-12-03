import { Directive, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { BarChartDirective } from './bar-chart.directive';

@Directive({ selector: 'canvas[appHorizontalBarChart]' })
export class HorizontalBarChartDirective extends BarChartDirective {

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

  get type() {
    return 'horizontalBar';
  }
}
