import { Directive, ElementRef } from '@angular/core';
import { ChartConfiguration, Chart } from 'chart.js';
import { BarChartDirective } from './bar-chart.directive';

@Directive({ selector: 'canvas[appHorizontalBarChart]' })
export class HorizontalBarChartDirective extends BarChartDirective {

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

  get config(): ChartConfiguration {
    return {
      type: 'horizontalBar',
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: this.options
    };
  }
}
