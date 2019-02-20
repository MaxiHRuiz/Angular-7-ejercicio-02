import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { heroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent {

  hero: any = {};


  constructor(private _activatedRoute: ActivatedRoute,
    private _heroesService: heroesService) {
    this._activatedRoute.params.subscribe(params => {
      console.log(params);
    });

    this._activatedRoute.params.subscribe(params => {

      this.hero = this._heroesService.getHero(params['id']);
      console.log(this.hero);
    })
  }

  public IsMarvel(){
    return this.hero.casa == 'Marvel';
  }
}
