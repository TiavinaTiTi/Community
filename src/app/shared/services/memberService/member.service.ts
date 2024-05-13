import { Injectable } from '@angular/core';
import {MemberModel} from "../../../core/models/member.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  dataInit: MemberModel[] = [
    {id: 1, pseudo: 'tiavina', fullName: 'randrianoelison tiavina mandimbisoa'},
    {id: 2, pseudo: 'dom', fullName: 'dominique marcel augustin'},
    {id: 3, pseudo: 'jass', fullName: 'rantoniaina jaspiere'},
    {id: 4, pseudo: 'tiff', fullName: 'rakotomavo tiffany'}
  ]

  members: MemberModel[] = []

  getAllMembers(): Observable<MemberModel[]>{
    this.members = this.dataInit;
    return of(this.members)
  }


  filterMember(inputSearch: string) {
    let member : MemberModel[] = [];
    const data$ = this.getAllMembers();
    data$.subscribe({
      next: value => {
        member = value.filter((value)=> value.fullName.toLowerCase().includes(inputSearch.toLowerCase()) || value.pseudo.toLowerCase().includes(inputSearch.toLowerCase()))
      }
    })
    return member;
  }

}
