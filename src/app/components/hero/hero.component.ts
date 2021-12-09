import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/Services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent {

  heroe: any = {};
  logo : string='';

  constructor( private activatedRouted: ActivatedRoute,
               private _heroService: HeroesService,
               private route:Router ) {
    this.activatedRouted.params.subscribe(params => {
      console.log(params['id']);
      this.heroe = this._heroService.getHero(params['id'])
      console.log(this.heroe);
    })
   }
}
