import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input()
  timeLine: object[];

  constructor() {
  }

  ngOnInit() {
  }

  contentId(index: number, item: any) {
    return item.id;
  }
}
