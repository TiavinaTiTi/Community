import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {ItemPublicationComponent} from "../item-publication/item-publication.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ItemCardPersonComponent} from "../../shared/components/item-card-person/item-card-person.component";
import {MemberModel} from "../../core/models/member.model";
import {MemberService} from "../../shared/services/memberService/member.service";
import {Observable, of} from "rxjs";

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
export class TeamPageComponent implements OnInit{
  search: string = ''
  members$!: Observable<MemberModel[]>;

  private memberService: MemberService = inject(MemberService)


  ngOnInit() {
    this.getAllMembers()
  }

  getAllMembers(){
    this.members$ = this.memberService.getAllMembers()
  }

  searchTraining() {
    setTimeout(()=>{
      let data = this.memberService.filterMember(this.search)
      this.members$ = of(data)
    }, 200)
  }
}
