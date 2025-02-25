import { Component } from '@angular/core';
import { DepoimentoService } from '../../../core/services/depoimento.service';
import { Depoimento } from '../../../core/types/type';

@Component({
  selector: 'app-depoimentos',
  standalone: false,
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent {
  depoimentos: Depoimento[] = [];
  constructor(private service: DepoimentoService) {
  }

  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.depoimentos = res;
      }
    )
  }
}
