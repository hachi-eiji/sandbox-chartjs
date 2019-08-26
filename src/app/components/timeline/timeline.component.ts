import { Component, OnInit, Input } from '@angular/core';
import { TimeLine } from './timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input()
  timeLine: TimeLine[];

  constructor() {
  }

  ngOnInit() {
  }

  contentId(index: number, item: TimeLine) {
    return item.id;
  }
}
