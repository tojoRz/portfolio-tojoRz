import { Component } from '@angular/core';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {

  faGraduationCap = faGraduationCap
  faBriefcase = faBriefcase
}
