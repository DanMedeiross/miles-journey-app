import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../../core/services/promocao.service';
import { Promocao } from '../../../core/types/type';

@Component({
  selector: 'app-promocoes',
  standalone: false,
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {
  promocoes!: Promocao[];
  constructor(private service: PromocaoService) {
  }
  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.promocoes = res;
      }
    )
  }
}
