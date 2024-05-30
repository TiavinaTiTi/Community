import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ItemDocumentComponent} from "../item-document/item-document.component";

@Component({
  selector: 'app-document-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ItemDocumentComponent
  ],
  templateUrl: './document-page.component.html',
  styleUrl: './document-page.component.scss'
})
export class DocumentPageComponent {
  search: string = '';
  searchTraining() {

  }
}
