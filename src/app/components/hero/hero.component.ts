import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @ViewChild('heroSection') heroSection!: ElementRef;

  constructor() { }

  scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToTherapy() {
    const therapySection = document.getElementById('therapy');
    if (therapySection) {
      therapySection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
