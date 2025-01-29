import { Component, Input } from '@angular/core';
import { Statement } from '../../core/types/type';

@Component({
  selector: 'app-card-statement',
  standalone: false,

  templateUrl: './card-statement.component.html',
  styleUrl: './card-statement.component.scss'
})
export class CardStatementComponent {
  @Input() statement!: Statement;
}
