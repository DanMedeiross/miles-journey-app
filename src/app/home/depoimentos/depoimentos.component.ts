import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from '../services/depoimento.service';
import { Depoimento } from '../../core/types/type';

@Component({
  selector: 'app-depoimentos',
  standalone: false,
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit {
  depoimentos: Depoimento[] = [];
  constructor(private service: DepoimentoService) {
  }

  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.depoimentos = res;
      }
    );
  }
}
