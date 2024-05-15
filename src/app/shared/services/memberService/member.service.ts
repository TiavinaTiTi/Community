import { Injectable } from '@angular/core';
import {MemberModel} from "../../../core/models/member.model";
import {Observable, of} from "rxjs";
import {MemberPageModel} from "../../../core/models/member-page.model";

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

  dataInitPage: MemberPageModel = {
    content: this.dataInit,
    pageable: {
      pageNumber: 0,
      pageSize: 12,
      totalPages: 1,
      totalElements: this.dataInit.length
    }
  }

  members: MemberPageModel = {
    content: [],
    pageable: {
      pageNumber: 0,
      pageSize: 0,
      totalPages: 0,
      totalElements: 0
    }
  }

  getAllMembers(): Observable<MemberPageModel>{
    this.dataInitPage.content = this.dataInit
    this.members = this.dataInitPage;
    console.log('getAllMembers')
    return of(this.members)
  }


  filterMember(inputSearch: string) {
    let member : MemberModel[] = [];
    let structMember: MemberPageModel = this.members;
    let data$ = this.getAllMembers();
    data$.subscribe({
      next: value => {
        member = value.content.filter((value)=> value.fullName.toLowerCase().includes(inputSearch.toLowerCase()) || value.pseudo.toLowerCase().includes(inputSearch.toLowerCase()))
      }
    })
    structMember.content = member
    console.log('filterMember')
    return of(structMember);
  }

}
