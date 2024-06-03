import { Injectable } from '@angular/core';
import {DocumentModel} from "../../../core/models/document.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  dataInit: DocumentModel[] = [
    {id: 1, theme: 'Fondamentale Git', intervening: 'RANDRIANOELISON Tiavina Mandimbisoa', post: 'Developpeur Junior', date: new Date(), time: {hours: new Date().getHours(), minutes: new Date().getMinutes()}, location: 'Soavimbaoka', document: 'git.pdf', git: 'www.gitHub.com'},
    {id: 2, theme: 'Fondamentale Angular', intervening: 'RANDRIANOELISON Tiavina Mandimbisoa', post: 'Developpeur Junior', date: new Date(), time: {hours: new Date().getHours(), minutes: new Date().getMinutes()}, location: 'Soavimbaoka', document: 'git.pdf', git: 'www.gitHub.com'},
    {id: 3, theme: 'Fondamentale Spring Boot', intervening: 'RANDRIANOELISON Tiavina Mandimbisoa', post: 'Developpeur Junior', date: new Date(), time: {hours: new Date().getHours(), minutes: new Date().getMinutes()}, location: 'Soavimbaoka', document: 'git.pdf', git: 'www.gitHub.com'},
  ]

  getAllDocuments(): Observable<DocumentModel[]>{
    return of(this.dataInit)
  }

}
