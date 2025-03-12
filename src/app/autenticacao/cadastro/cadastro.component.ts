import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from '../../core/services/formulario.service';
import { PessoaUsuaria } from '../../core/types/type';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router) {}

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro();

    if(formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      console.log(novoCadastro)
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso', value);
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro', err)
        }
      });
    }
  }
}
