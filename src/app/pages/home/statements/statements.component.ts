import { Component } from '@angular/core';
import { Statement } from '../../../core/types/type';
import { StatementService } from '../../../core/services/statement.service';

@Component({
  selector: 'app-statements',
  standalone: false,

  templateUrl: './statements.component.html',
  styleUrl: './statements.component.scss'
})
export class StatementsComponent {
  statements: Statement[] = [];

  constructor(private service: StatementService) {}

  ngOnInit(): void {
    this.service.list().subscribe(ans => {this.statements = ans;});
  }
}
