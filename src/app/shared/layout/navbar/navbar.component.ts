import { Component, Inject, PLATFORM_ID, HostListener, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false; // المتغير ده هو اللي هيتحكم في كل حاجة

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router,
    private el: ElementRef
  ) {
    if (isPlatformBrowser(this.platformId)) {
      // أول ما نغير الصفحة، اقفل المنيو فوراً
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.isMenuOpen = false;
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (isPlatformBrowser(this.platformId)) {
      // لو دوسنا بره الـ Navbar، اقفل المنيو
      if (!this.el.nativeElement.contains(event.target)) {
        this.isMenuOpen = false;
      }
    }
  }
}