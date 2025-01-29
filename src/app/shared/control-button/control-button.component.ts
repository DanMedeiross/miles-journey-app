import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control-button',
  standalone: false,

  templateUrl: './control-button.component.html',
  styleUrl: './control-button.component.scss'
})
export class ControlButtonComponent {
  @Input() operation: 'increase' | 'decrease' = 'increase';
  @Input() src = '';
  @Input() alt = '';
}
