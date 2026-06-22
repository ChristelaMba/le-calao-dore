import { Component } from '@angular/core';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  isMenuOpen = false;
  activeLink = 'Accueil';
  links: NavLink[] = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Menu', href: '#menu' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'Horaires', href: '#horaires' },
    { label: 'Contact', href: '#contact' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActive(link: string) {
    this.activeLink = link;
    this.isMenuOpen = false;
  }
}
