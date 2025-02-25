import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from '../../core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  standalone: false,
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {
  @Output() realizarBusca = new EventEmitter();
  constructor(
    public formBuscaService: FormBuscaService) { }

  buscar() {
    if (this.formBuscaService.formEstaValido) {
      const formBuscavalue = this.formBuscaService.obterDadosBusca();
      this.realizarBusca.emit(formBuscavalue);
    } else {
      alert('O formulário precisa ser preenchido')
    }
  }
}
