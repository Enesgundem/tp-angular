import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.html',
  styleUrls: ['./signals.css'],
})
export class Signals {
  counter = signal(0);

  signalClass: Record<string, string> = {
    color: 'green',
    height: '35px',
    width: '200px',
    border: '2px solid black',
    'font-weight': 'bold',
    'font-size': '20px',
    'text-align': 'center',
    'line-height': '35px',
    margin: '0 auto 16px',
  };

  constructor() {
    effect(() => {
      console.log('La valeur du compteur a changé :', this.counter());
    });
  }

  increment(): void {
    this.counter.update((current) => current + 1);
  }

  decrement(): void {
    this.counter.update((current) => current - 1);
  }

  reset(): void {
    this.counter.set(0);
  }
}