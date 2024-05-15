import { Component, HostListener } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  isMenuOpen: boolean = false;
  isFixed: boolean = false;
  elementRef: any;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isFixed = verticalOffset > 100; // Changez 100 selon vos besoins
    
    const sections = this.elementRef.nativeElement.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    for (let i = 0; i < sections.length; i++) {
      const currentSection = sections[i];
      const sectionTop = currentSection.offsetTop;
      const sectionBottom = sectionTop + currentSection.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const sectionId = currentSection.getAttribute('id');
        this.setActiveClass(sectionId);
      }
    }
  }

  scrollToSection(fragment: string): void {
    const element = document.querySelector('#' + fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  setActiveClass(sectionId: string): void {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });
  }

  // Inject PLATFORM_ID into the constructor
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isSectionActive(sectionId: string): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      // Si le code s'exécute côté serveur (SSR), retourne false
      return false;
    }

    // Si le code s'exécute côté client, utilise document normalement
    const section = document.getElementById(sectionId);
    if (!section) return false;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
  }

}
