import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'crisis-list',
  templateUrl: './crisis-list.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
