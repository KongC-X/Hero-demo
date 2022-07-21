import { Component, OnInit } from '@angular/core';

const Heros = [
  {
    id: 'hero_0',
    name: '盖伦'
  },
  {
    id: 'hero_1',
    name: '赵信'
  },
  {
    id: 'hero_2',
    name: '嘉文'
  },
  {
    id: 'hero_3',
    name: '易大师'
  },
  {
    id: 'hero_3',
    name: '泰达米尔'
  }
];

interface Hero{
  id : string;
  name : string;
}

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss']
})

export class ForComponent implements OnInit {

  heros: Hero[] = Heros;

  value = '';

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.heros = [
      {
        id: 'hero_4',
        name: '盖伦4'
      },
      {
        id: 'hero_5',
        name: '赵信5'
      },
      {
        id: 'hero_2',
        name: '嘉文'
      },
      {
        id: 'hero_6',
        name: '易大师6'
      },
      {
        id: 'hero_7',
        name: '泰达米尔7'
      }
    ];
  }

  add(){
    this.heros.push({
      id:'hero' + Date.now(),
      name: this.value
    })
  }

  trackByHero(hero: Hero):string{
    return hero.id;
  }

  callPhone(value:string){
    console.log(value);
  }
}


