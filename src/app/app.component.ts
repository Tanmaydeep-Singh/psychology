import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { VideoComponent } from './components/video/video.component';
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/info/info.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,VideoComponent, HeroComponent, AboutComponent, InfoComponent, QualificationsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'philosphy';
}
