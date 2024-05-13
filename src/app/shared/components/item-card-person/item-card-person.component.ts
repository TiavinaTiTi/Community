import {Component, Input} from '@angular/core';
import {MemberModel} from "../../../core/models/member.model";

@Component({
  selector: 'app-item-card-person',
  standalone: true,
  imports: [],
  templateUrl: './item-card-person.component.html',
  styleUrl: './item-card-person.component.scss'
})
export class ItemCardPersonComponent {

  @Input() member!: MemberModel
}
