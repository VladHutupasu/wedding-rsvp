import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeddingCountdownComponent } from './features/wedding-countdown/wedding-countdown.component';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WeddingCountdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wedding-rsvp';

  confirmed() {
    confetti.default({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}
