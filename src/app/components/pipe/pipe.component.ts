import { Component, OnInit } from '@angular/core';
// import { SexReformPipe } from 'src/app/pipes/sex-reform.pipe';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: [
  ]
})
export class PipeComponent implements OnInit {

  sexValue = 'female';

  constructor() { }

  ngOnInit(): void {
  }

}
