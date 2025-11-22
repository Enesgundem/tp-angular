import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signals',
  imports: [CommonModule],
  templateUrl: './linked-signals.html',
  styleUrl: './linked-signals.css',
})
export class LinkedSignals {
  // Calculateur avec linkedSignal
  quantity = signal(1);
  unitPrice = signal(100);
  total = computed(() => this.quantity() * this.unitPrice());

  // Convertisseur Euro ↔ Dollar
  euro = signal(114);
  exchangeRate = signal(1.06);
  dollar = computed(() => this.euro() * this.exchangeRate());

  // Méthodes pour mettre à jour le dollar (qui met à jour l'euro)
  updateEuroFromDollar(dollarValue: number): void {
    this.euro.set(dollarValue / this.exchangeRate());
  }

  // Méthode pour calculer
  calculate(): void {
    // Le total est déjà calculé automatiquement via computed
    // Cette méthode peut être utilisée pour déclencher d'autres actions si nécessaire
  }
}
