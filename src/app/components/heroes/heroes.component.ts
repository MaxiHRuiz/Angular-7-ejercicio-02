import { Component, OnInit } from '@angular/core';
import { heroesService, Hero } from "../../services/heroes.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private _heroesService: heroesService,
    private _router: Router) {
  }

  ngOnInit() {
    this.heroes = this._heroesService.GetHeroes();
  }

  VerHeroe(indice: number) {
    this._router.navigate(['/hero', indice]);
  }

}
