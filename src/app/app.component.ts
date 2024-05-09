import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChildrenOutletContexts, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {interval, Observable} from "rxjs";
import {NavComponent} from "./shared/components/nav/nav.component";
import {HomePageComponent} from "./views/home-page/home-page.component";
import {animate, animation, keyframes, style, transition, trigger, useAnimation} from "@angular/animations";
import {slideInAnimation} from "./shared/animations/routeAnimations";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export let fadeAnimations = animation([
  style({opacity: 0}),
  animate(
    '{{ timings }}',
    keyframes([
      style({opacity: .2, offset: 0.3}),
      style({opacity: .6, offset: 0.6}),
      style({opacity: .8, offset: 1})
    ])
  )
], {
  params: {
    timings: '.6s ease-out',
  }
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavComponent,
    HomePageComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    /*trigger('fade', [
      transition(':enter', [
        useAnimation(fadeAnimations)
      ]),
    ]),*/
    slideInAnimation
  ]
})


export class AppComponent{

  contexts = inject(ChildrenOutletContexts)

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animations']
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
