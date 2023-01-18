import { Component, OnInit } from '@angular/core';
import { HistoryPage } from '../history/history.page';

@Component({
  selector: 'app-history-base',
  templateUrl: './history-base.component.html',
})
export class HistoryBaseComponent implements OnInit {
  historyComponent = HistoryPage;

  constructor() {}

  ngOnInit() {}
}
