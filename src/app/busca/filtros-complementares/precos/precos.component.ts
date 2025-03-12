import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuscaService } from '../../../core/services/form-busca.service';
import { PassagensService } from '../../services/passagens.service';

@Component({
  selector: 'app-precos',
  standalone: false,
  templateUrl: './precos.component.html',
  styleUrl: './precos.component.scss'
})
export class PrecosComponent {
  precoMin: FormControl<number>;
  precoMax: FormControl<number>;

  constructor(
    public passagemService: PassagensService,
    private formBuscaService: FormBuscaService) {
      this.precoMin = this.formBuscaService.obterControle<number>('precoMin');
      this.precoMax = this.formBuscaService.obterControle<number>('precoMax');
  }
}
