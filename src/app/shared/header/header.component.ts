import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user$!: Observable<any>;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user$ = this.userService.retornarUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login'])
  }
}
