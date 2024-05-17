import { Component } from '@angular/core';
import { faCode, faDatabase, faTools, faTv } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  faTv = faTv
  faCode = faCode
  faDatabase = faDatabase
  faTools = faTools

}
