import { Routes } from '@angular/router';
import {HomePageComponent} from "./views/home-page/home-page.component";
import {TrainingPageComponent} from "./views/training-page/training-page.component";
import {IsRightComponent} from "./shared/test/is-right/is-right.component";
import {IsLeftComponent} from "./shared/test/is-left/is-left.component";
import {IsMeddleComponent} from "./shared/test/is-meddle/is-meddle.component";
import {ContactPageComponent} from "./views/contact-page/contact-page.component";
import {TeamPageComponent} from "./views/team-page/team-page.component";
import {LoginPageComponent} from "./views/login-page/login-page.component";
import {DocumentPageComponent} from "./views/document-page/document-page.component";
import {SignUpPageComponent} from "./views/sign-up-page/sign-up-page.component";
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', component: HomePageComponent, data: { animation: 'home' } },
  {
    path: 'team',
    // component: TeamPageComponent,
    loadComponent: ()=> import('./views/team-page/team-page.component').then(m => m.TeamPageComponent),
    data: { animation: 'team' }
  },
  // { path: 'training', component: TrainingPageComponent, data: { animation: 'training' } },
  { path: 'docs', component: DocumentPageComponent, data: {animation: 'docs'} },
  { path: 'contact', component: ContactPageComponent, data: { animation: 'contact' } },
  { path: 'login', component: LoginPageComponent, data: { animation: 'login' } },
  { path: 'sign-up', component: SignUpPageComponent, data: { animation: 'sign-up' } },
  /*{ path: 'isRight', component: IsRightComponent, data: { animation: 'isRight'} },
  { path: 'isLeft', component: IsLeftComponent, data: { animation: 'isLeft' } },
  { path: 'isMeddle', component: IsMeddleComponent, data: { animation: 'isMeddle' } },*/
];
