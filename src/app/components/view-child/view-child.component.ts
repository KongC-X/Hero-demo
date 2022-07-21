import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styles: [
  ]
})
export class ViewChildComponent implements OnInit,AfterViewInit {
  @ViewChild('box') private boxel : ElementRef;
  // @ViewChild('box',{static:true}) private boxel : ElementRef;
  // 如果想及早的拿到这个元素或者这个元素是静态的，可以加上 static:true
  // 默认在变更检测之后才会获取到目标元素，可开启static，这样组件初始化到时候，变更检测前就能获取到目标

  constructor() {
    console.log("constructor",this.boxel); // undefend
   }

  ngOnInit(): void {
    console.log("ngOnInit",this.boxel); // undefend
  }

  // 例子中的boxEl，默认在变更检测之后才会获取到元素，而ngAfterViewInit就是在变更检测之后才会调用
  // 因此最好在ngAfterViewInit之后，获取模版上的内容
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit",this.boxel.nativeElement);
  }

}
