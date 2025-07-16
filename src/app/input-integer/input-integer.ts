import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger {

  @Input() cantidad!: number;
  @Input() max!: number;

  @Output() cantidadChange = new EventEmitter<number>();
  @Output() limiteAlcanzado = new EventEmitter<number>();

  masCantidad(): void {
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    } else {
      this.limiteAlcanzado.emit(this.max);
    }
  }

  menosCantidad(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  onChangeQuantity(event: KeyboardEvent): void {
    const key = event.key;
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (!/^[0-9]$/.test(key) && !allowedKeys.includes(key)) {
      event.preventDefault();
    }
    this.cantidadChange.emit(this.cantidad);
  }
}
