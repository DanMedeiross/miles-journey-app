import { Component, Input } from '@angular/core';
import { Passagem } from '../../core/types/type';

@Component({
  selector: 'app-passagem-destaque',
  standalone: false,
  templateUrl: './passagem-destaque.component.html',
  styleUrl: './passagem-destaque.component.scss'
})
export class PassagemDestaqueComponent {
  @Input() destacadaPor: string = ''
  @Input() passagem?: Passagem;
  @Input() variant: 'primary' | 'secondary' | 'default'  = 'primary'
}
