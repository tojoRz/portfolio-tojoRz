import { Component } from '@angular/core';

import { faLinkedin, faGithub, faFacebook  } from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  faLinkedin = faLinkedin
  faGithub = faGithub
  faFacebook = faFacebook
  faEnvelope = faEnvelope
  
}
