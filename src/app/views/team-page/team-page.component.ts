import { Component } from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {ItemPublicationComponent} from "../item-publication/item-publication.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ItemCardPersonComponent} from "../../shared/components/item-card-person/item-card-person.component";
import {MemberModel} from "../../core/models/member.model";

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [
    AsyncPipe,
    ItemPublicationComponent,
    ReactiveFormsModule,
    FormsModule,
    ItemCardPersonComponent
  ],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent {
  search: string = ''

  members: MemberModel[] = [
    {id: 1, pseudo: 'Tiavina', fullName: 'RANDRIANOELISON Tiavina Mandimbisoa'},
    {id: 2, pseudo: 'Dom', fullName: 'DOMINIQUE Marcel Augustin'},
    {id: 3, pseudo: 'Jass', fullName: 'RANTONIAINA Jaspiere'},
    {id: 4, pseudo: 'Tiff', fullName: 'RAKOTOMAVO Tiffany'}

  ]

  searchTraining() {

  }
}
