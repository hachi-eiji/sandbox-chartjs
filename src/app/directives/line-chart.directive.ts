import { Directive, ElementRef, OnInit, OnDestroy, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ChartConfiguration, Chart, ChartOptions } from 'chart.js';

@Directive({ selector: 'canvas[appLineChart]' })
export class LineChartDirective implements OnInit, OnDestroy, OnChanges {
  @Input()
  data: number[];
  @Input()
  labels: string[] = [];
  @Input()
  datasets: any[] = [];
  @Input()
  options: ChartOptions;

  private element: ElementRef;
  private chart: Chart | null;
  private firstChange = true;

  constructor(private elementRef: ElementRef) {
    this.element = elementRef;
  }

  get config(): ChartConfiguration {
    return {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: this.options
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    // ngOnInitの前に呼ばれるのでそのときはスキップする
    if (this.firstChange) {
      return;
    }
    for (const name in changes) {
      const change = changes[name];
      if (name === 'data') {
        this.setData(change.currentValue);
      } else if (name === 'datasets') {
        this.setDatasets(change.currentValue);
      } else if (name === 'label') {
        this.setLabels(change.currentValue);
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

  ngOnInit(): void {
    this.create();
    this.firstChange = false;
    if (this.data) {
      this.setData(this.data);
      this.chart.data.datasets[0].data = this.data;
    } else if (this.datasets) {
      this.setDatasets(this.datasets);
    } else if (name === 'label') {
      this.setLabels(this.labels);
    }
    this.chart.update();
  }

  private setData(data) {
    this.chart.data.datasets[0].data = data;
  }

  private setDatasets(datasets) {
    this.chart.data.datasets[0] = datasets;
  }

  private setLabels(labels) {
    this.chart.data.labels = labels;
  }

  private create() {
    const context = this.element.nativeElement.getContext('2d');
    this.chart = new Chart(context, this.config);
  }
}
