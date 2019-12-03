import { ChartOptions } from 'chart.js';

export interface LineChartConfig {
  labels: string[];
  options?: ChartOptions;
  dataset: LineChartDataSet[];
}

export interface LineChartDataSet {
  label: string;
  data?: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}
