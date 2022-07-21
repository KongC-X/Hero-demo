import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexReform'
})
export class SexReformPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    // value的值为html中 | 前面传入的值， args为名称后传入的参数
    switch(value){
      case 'male' : return "男";
      case 'female' : return "女";
      default : return "雌雄同体";
    }
  }

}
