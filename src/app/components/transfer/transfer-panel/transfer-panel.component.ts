import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { TransferItem } from '../types';

@Component({
  selector: 'app-transfer-panel',
  templateUrl: './transfer-panel.component.html',
  styleUrls: ['./transfer-panel.component.scss']
})
export class TransferPanelComponent implements OnInit,OnChanges {
  @Input() list:TransferItem[] = [];
  @Input() search = false;
  showList:TransferItem[] = [];
  selecteds:TransferItem[] = [];
  @Output() changed = new EventEmitter<TransferItem[]>()

  constructor() {
    // this.setList()
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    const {list} = changes;
    if(list){
      // console.log("list",list.currentValue);
      this.showList = list.currentValue.slice() // 引用类型拷贝一份赋值
      this.selecteds = this.list.filter(item => item.checked)
    }
  }

  ngOnInit(): void {}

  // private setList(){
  //   this.list = [];
  //   const prefix = 'item' + Date.now().toString().slice(-3);
  //   for(let i = 0;i < 20; i++){
  //     this.list.push({
  //       key:prefix + '_' + i,
  //       value:`${prefix}${i + 1}`,
  //       checked:i % 6 === 0
  //     });
  //   }
  // }

  itemClick(target:TransferItem){
    // const index= this.selecteds.findIndex(item => item.key === target.key)
    const index = this.targetIndex(target.key)
    if(index > -1){ // 证明已经存在
      this.selecteds.splice(index,1)
    }
    else{
      this.selecteds.push(target)
    }
    // console.log(this.selecteds)
    this.changed.emit(this.selecteds)
  }

  targetIndex(key:string):number{
    return this.selecteds.findIndex(item => item.key === key)
  }

  onInput(event:Event){
    const {value} = (event.target as HTMLInputElement); // 类型断言
    this.showList = this.list.filter(item => item.value.includes(value))
  }
}
