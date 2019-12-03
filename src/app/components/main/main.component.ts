import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BarChartConfig } from '../bar-chart/bar-chart';
import { LineChartConfig } from '../line-chart/line-chart';
import { TimeLine } from '../timeline/timeline';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', './main.component.sp.scss']
})
export class MainComponent implements OnInit {
  timeLine$: Observable<TimeLine[]>;
  barChartConfig: BarChartConfig;
  barChartData: Observable<number[]> | null;

  lineChartConfig: LineChartConfig;
  lineChartData: Observable<number[]> | null;

  constructor() {
  }

  ngOnInit() {
    this.timeLine$ = of([
      { id: 1, content: '○○さんがXXしたよ' },
      { id: 2, content: '○○さんがXXしたよ' },
      { id: 3, content: '○○さんがXXしたよ' },
      { id: 4, content: '○○さんがXXしたよ' },
      { id: 5, content: '○○さんがXXしたよ' },
    ]);

    this.createBarChart();
    this.createLineChart();
  }

  updateBarChart() {
    const array: number[] = [];
    for (let i = 0; i < 6; i++) {
      array.push(Math.random() * 10);
    }
    this.barChartData = of(array);
  }

  updateLineChart() {
    const array: number[] = [];
    for (let i = 0; i < 6; i++) {
      array.push(Math.random() * 10);
    }
    this.lineChartData = of(array);
  }

  private createBarChart() {
    // TODO: 多分もう1つコンポーネントをラップしないと,このコンポーネントに集積しすすぎている
    this.barChartConfig = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
      dataset: [
        {
          label: '# of Votes',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    };
  }

  private createLineChart() {
    this.lineChartConfig = {
      labels: ['2019年1月', '2019年2月', '2019年3月', '2019年4月', '2019年5月', '2019年6月'],
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
      dataset: [
        {
          label: '# of Votes',
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }
      ]
    };
    this.lineChartData = of([1, 2, 3, 4, 5, 6]);
  }
}
