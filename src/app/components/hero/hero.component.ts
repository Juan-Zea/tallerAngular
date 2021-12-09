import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent {

  constructor( private activatedRouted: ActivatedRoute) {
    this.activatedRouted.params.subscribe(params => {
      console.log(params['id']);
    })
   }


}
