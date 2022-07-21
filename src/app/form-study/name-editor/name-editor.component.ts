import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'name-editor',
  templateUrl: './name-editor.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameEditorComponent implements OnInit {

  name = new FormControl('aaa')

  constructor() { }

  ngOnInit(): void {
  }

  updateName(){
    this.name.setValue('abc')
  }
}
