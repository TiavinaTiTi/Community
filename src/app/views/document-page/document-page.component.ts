import {Component, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ItemDocumentComponent} from "../item-document/item-document.component";
import {DocumentService} from "../../shared/services/documentService/document.service";
import {Observable} from "rxjs";
import {DocumentModel} from "../../core/models/document.model";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-document-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ItemDocumentComponent,
    AsyncPipe
  ],
  templateUrl: './document-page.component.html',
  styleUrl: './document-page.component.scss'
})
export class DocumentPageComponent {
  search: string = '';

  documentService: DocumentService = inject(DocumentService)

  documents: Observable<DocumentModel[]> = this.documentService.getAllDocuments()
  searchTraining() {

  }
}
