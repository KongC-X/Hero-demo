import { Injectable } from "@angular/core";
import Heros from "../config/hero"

@Injectable({
  providedIn:"root"
})

export class HeroService{
  constructor(){}
  getHeros(){
    return Heros;
  }
}
