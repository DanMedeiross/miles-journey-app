import { Component, Input } from '@angular/core';
import { Passagem } from '../../core/types/type';

@Component({
  selector: 'app-passagem',
  standalone: false,
  templateUrl: './passagem.component.html',
  styleUrl: './passagem.component.scss'
})
export class PassagemComponent {
  @Input() passagem!: Passagem;
  get textoIdaVolta(){
    if(!this.passagem.dataVolta){
      return "Somente ida";
    }
      return "Ida e volta";
  }
}
