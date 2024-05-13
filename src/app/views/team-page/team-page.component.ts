import { Component } from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {ItemPublicationComponent} from "../item-publication/item-publication.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [
    AsyncPipe,
    ItemPublicationComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent {
  search: string = ''

  searchTraining() {

  }
}
