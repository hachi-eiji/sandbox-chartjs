import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BarChartConfig } from '../bar-chart/bar-chart';
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

  updateBarChart() {
    const array: number[] = [];
    for (let i = 0; i < 6; i++) {
      array.push(Math.random() * 10);
    }
    this.barChartData = of(array);
  }
}
