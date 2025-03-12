import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../autenticacao/services/user.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$!: Observable<any>;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user$ = this.userService.retornarUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/auth/login']);
  }
}
