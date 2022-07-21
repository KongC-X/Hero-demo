import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero, HeroArg } from 'src/app/config/types';
// import Heros from '../../config/hero'
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class HerosComponent implements OnInit {
  searchParams: HeroArg = {
    name : '',
    job : '',
    sort : 'desc'
  };
  // heros: Hero[] = Heros;
  heros: Hero[];
  // heroService:HeroService;
  constructor(readonly heroService:HeroService) {
    // this.heroService = new HeroService();
    this.heros = this.heroService.getHeros();
  }

  ngOnInit(): void {
  }

  search(){
    console.log(this.searchParams);

  }
}
