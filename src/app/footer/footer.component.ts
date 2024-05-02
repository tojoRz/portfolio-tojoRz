import { Component } from '@angular/core';

import { faLinkedin, faFacebook, faGithub, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  faLinkedin = faLinkedin
  faFacebook = faFacebook
  faGithub = faGithub
  faWhatsapp = faWhatsapp
}