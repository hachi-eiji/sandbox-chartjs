import { Directive, ElementRef, OnInit, OnDestroy, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ChartConfiguration, Chart, ChartOptions } from 'chart.js';

@Directive({ selector: 'canvas[appBarChart]' })
export class BarChartDirective implements OnInit, OnDestroy, OnChanges {
  @Input()
  data: number[];
  @Input()
  labels: string[] = [];
  @Input()
  datasets: any[];
  @Input()
  options: ChartOptions;

  private element: ElementRef;
  private chart: Chart | null;
  private firstChange = true;

  constructor(private elementRef: ElementRef) {
    this.element = elementRef;
  }

  get type(): string {
    return 'bar';
  }

  get config(): ChartConfiguration {
    return {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: this.options
    };
  }

  ngOnInit(): void {
    this.create();
    if (this.data) {
      this.chart.data.datasets[0].data = this.data;
    }
    this.chart.update();
    this.firstChange = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // ngOnInitの前に呼ばれるのでそのときはスキップする
    if (this.firstChange) {
      return;
    }
    for (const name in changes) {
      const change = changes[name];
      if (name === 'data') {
        this.chart.data.datasets[0].data = change.currentValue;
      } else if (name === 'datasets') {
        this.chart.data.datasets[0] = change.currentValue;
      } else if (name === 'label') {
        this.chart.data.labels = change.currentValue;
      }
    }
    this.chart.update();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

  private create() {
    const context = this.element.nativeElement.getContext('2d');
    this.chart = new Chart(context, this.config);
  }
}
