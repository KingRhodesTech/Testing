import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../services/users/users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  users = new Array<User>();
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.usersService.all().subscribe((res) => {
      this.users = res;
    });
  }
}
