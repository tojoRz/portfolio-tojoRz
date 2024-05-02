import { Component } from '@angular/core';

import { faLinkedin, faGithub, faWhatsapp, faInternetExplorer  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  faLinkedin = faLinkedin
  faGithub = faGithub
  faWhatsapp = faWhatsapp
  faInternetExplorer = faInternetExplorer
  
}
