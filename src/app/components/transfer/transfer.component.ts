import { ChangeDetectionStrategy, Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TransferItem } from './types';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TransferComponent implements OnInit,OnChanges {
  @Input() sourceData : TransferItem[];
  leftDatas : TransferItem[] = [];
  rightDatas : TransferItem[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const { sourceData } = changes;
    if(sourceData && sourceData.currentValue){
      sourceData.currentValue.forEach((item: TransferItem) => {
        if(!item.direction || item.direction === 'left'){
          item.direction = 'left';
          this.leftDatas.push(item);
        }else{
          item.direction = 'right';
          this.rightDatas.push(item);
        }
      });
    }
  }

  ngOnInit(): void {
  }



}
