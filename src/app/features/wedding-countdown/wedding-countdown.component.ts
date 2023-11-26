import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wedding-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wedding-countdown.component.html',
  styleUrl: './wedding-countdown.component.scss',
})
export class WeddingCountdownComponent implements OnInit {
  private readonly WEDDING_DATE: Date = new Date('June 29, 2024 16:00:00');

  months: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(): void {
    this.countdown();
    // Run countdown every second
    setInterval(() => this.countdown(), 1000);
  }

  countdown() {
    // Set the date we're counting down to
    const countDownDate = this.WEDDING_DATE.getTime();

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for months, days, hours, minutes and seconds
    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let _month = _day * 30;

    this.months = Math.floor(distance / _month);
    this.days = Math.floor((distance % _month) / _day);
    this.hours = Math.floor((distance % _day) / _hour);
    this.minutes = Math.floor((distance % _hour) / _minute);
    this.seconds = Math.floor((distance % _minute) / _second);
  }
}
