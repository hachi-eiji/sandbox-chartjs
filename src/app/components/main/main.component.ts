import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TimeLine } from '../timeline/timeline';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', './main.component.sp.scss']
})
export class MainComponent implements OnInit {
  timeLine$: Observable<TimeLine[]>;

  constructor() { }

  ngOnInit() {
    this.timeLine$ = of([
      { id: 1, content: '○○さんがXXしたよ' },
      { id: 2, content: '○○さんがXXしたよ' },
      { id: 3, content: '○○さんがXXしたよ' },
      { id: 4, content: '○○さんがXXしたよ' },
      { id: 5, content: '○○さんがXXしたよ' },
    ]);
  }
}
