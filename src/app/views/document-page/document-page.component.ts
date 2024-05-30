import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-document-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './document-page.component.html',
  styleUrl: './document-page.component.scss'
})
export class DocumentPageComponent {
  search: string = '';

  searchTraining() {

  }
}
