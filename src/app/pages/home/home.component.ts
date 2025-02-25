import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private servicoPromocao: PromocaoService, private router: Router) {}

  ngOnInit(): void {
    this.servicoPromocao.listar().subscribe(
      resposta => {
        console.log(resposta)
      }
    )
  }

  navegarParaBusca(ev: any) {
    this.router.navigate(['busca']);
  }
}
