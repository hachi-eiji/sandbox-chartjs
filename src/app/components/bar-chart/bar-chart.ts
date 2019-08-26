import { ChartOptions } from 'chart.js';

export interface BarChartConfig {
  labels: string[];
  options?: ChartOptions;
  dataset: BarChatDataSet[];
}

export interface BarChatDataSet {
  label: string;
  data?: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}
