import { Component, OnInit, ChangeDetectionStrategy, Injectable, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Observable, map, fromEvent, pluck, debounceTime, distinctUntilChanged, switchMap, of, from, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, retry } from 'rxjs/operators'
import jsonpG from 'jsonp-good';

interface JsonpRes {
  q: string;
}

@Injectable()
class WikiService{
  // readonly url = 'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*&search=';
  // list(keyword: any) : Observable <string[]> {
  //   return ajax.getJSON(this.url + keyword).pipe(map(item => item[1]));

  readonly url = 'https://www.baidu.com/sugrec';
  list(wd: any):Observable<JsonpRes[]>{
    return from(jsonpG({
      url: this.url,
      params: {
        prod: 'pc',
        from: 'pc_web',
        wd
      },
      funcName: 'jQuery110203052522071732855_1604236886158',
    }).then((res : {g : JsonpRes[]}) => {
      return res.g
    }))
  }
}

@Component({
  selector: 'app-test-rx',
  template: `
    <div class="autocomplete">
      <input #input class="form-control" placeholder="search..." />
      <ul class="list-group mt-2">
        <li class="list-group-item" *ngFor="let item of list">{{item.q}}</li>
      </ul>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None, // 组件样式封装策略
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[WikiService]
})

export class TestRxComponent implements OnInit,AfterViewInit {
  list:JsonpRes[] = [];

  @ViewChild('input',{static:true}) private inputEl: ElementRef;

  constructor(private wikiServe : WikiService , private cdr : ChangeDetectorRef ) {
    // this.wikiServe.list('a').subscribe(value => console.log(value))
  }

  ngAfterViewInit(): void {
    fromEvent(this.inputEl.nativeElement,'input')
    .pipe(
      debounceTime(500),
      pluck('target','value'), // 提取属性，提取 target 中的 value 属性
      distinctUntilChanged(), // distinct 会和已经拿到的数据比较过滤掉重复的元素，distinctUntilChanged 只会比较相邻两次输入，注意顺序，在 pluck 下面
      switchMap(value => this.wikiServe.list(value)),
      // switchMap((value:string) => {
      //   return value.length ? this.wikiServe.list(value) : of([])
      // })
      catchError(err => throwError(err)),
      retry(2) // 如果发生错误，以指定次数重试 observable 序列
      )
    .subscribe(data => {
      // console.log(data);
      this.list = data
      this.cdr.markForCheck() // switchMap中异步了，data赋值给list时还没有进行变更检测，所以这里需要手动去触发变更检测
    })
  }

  ngOnInit(): void {
  }

}
