import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { TransferItem } from './components/transfer/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None, // 组件样式封装策略
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'hero';
  price = 33;

  customTitle = 'customTitle1';

  btnCls = "btn btn-primary";
  btnCls2 = ['btn','btn-success'];
  btnCls3 = {
    'btn': true,
    'btn-primary' : true
  };

  style1 = {
    width: '200px',
    height: '50px',
    'text-align': 'center',
    border: '1px solid'
  }
  style2 = ['width', '200px','height', '50px']; // 数组好像不行
  style3 = {
    width: '200px',
    height: '50px',
    'text-align': 'center',
    border: '1px solid'
  };

  getVal() : number {
    return 44;
  }
  // 和正常的变量一样使用，使用时不需要加括号
  get job() : string {
    return 'zhanshi';
  }

  onClick(event:MouseEvent){
    console.log('onClick',event.target);
  }

  list:TransferItem[] = [];

  constructor(){
    this.setList()
  }

  setList(){
    this.list = [];
    const prefix = 'item' + Date.now().toString().slice(-3);
    for(let i = 0;i < 20; i++){
      this.list.push({
        key:prefix + '_' + i,
        value:`${prefix}${i + 1}`,
        checked:i % 6 === 0
      });
    }
  }

  onChanged(selecteds:TransferItem[]){
    console.log("onChanged",selecteds);
  }
}
