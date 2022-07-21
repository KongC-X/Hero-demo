import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, Observable, range, scan, Subject, throttleTime } from 'rxjs';
import { mergeAll,mapTo,debounce } from 'rxjs/operators'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fromEvent(document,'click')
    .pipe(
      throttleTime(1000),
      scan(count => count + 1, 0)
    )
    .subscribe(count => console.log(`Clicked ${count} times`))

    const observable$ = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      // subscriber.error(new Error('出错了'));
      subscriber.complete();
      subscriber.next(4);
    })

    // observable$.subscribe(res => console.log("res",res)) // Observable只有subscribe订阅了才能执行

    // observable$.subscribe(res => {
    //   console.log("res",res)
    // }, error => {
    //   console.error("error",error)
    // }, () => {
    //   console.log("complete")
    // })

    observable$.subscribe({
      next(value) {
        console.log('value', value);
      },
      error(error) {
        console.error('error', error);
      },
      complete() {
        console.log('complete');
      },
    })

    // observable.subscribe返回一个Subscription对象,调用subscription.unsubscribe()取消订阅
    // const observable = interval(1000);
    // const subscription = observable.subscribe(x => console.log(x));
    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 5000);

    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(map((ev) => interval(1000)));
    // const firstOrder = higherOrder.pipe(mergeAll());
    // firstOrder.subscribe(x => console.log(x));

    // const source = from([1, 2, 3, 4, 5]);
    // const example = source.pipe(map(val => val + 10));
    // const subscribe = example.subscribe(val => console.log(val));

    // 每2秒发出值
    // const source = interval(2000);
    // 将所有发出值映射成同一个值
    // const example = source.pipe(mapTo('HELLO WORLD!'));
    // 输出: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
    // const subscribe = example.subscribe(val => console.log(val));

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(debounce(() => interval(1000)));
    // result.subscribe(x => console.log(x));

    // 多播, Subject 是一种特殊的 Observable,每个 observer 都会存在一份list中
    const source$ = range(5);
    const subject$ = new Subject();
    subject$.subscribe(value => console.log('A: ' + value));
    subject$.subscribe(value => console.log('B: ' + value));
    source$.subscribe(subject$);
  }
}
