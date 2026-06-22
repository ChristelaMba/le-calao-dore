import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = false;
  activeLink = 'Accueil';
  links = ['Accueil', 'Menu', 'Témoignages', 'Horaires', 'Contact'];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActive(link: string) {
    this.activeLink = link;
    this.isMenuOpen = false;
  }
}
