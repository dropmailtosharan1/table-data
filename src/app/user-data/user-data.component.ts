import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {

  constructor ( private userService:UserService) {}

  ngOnInit(): void {
    this.userService.getUserData().subscribe(
      res=>console.log(res)
);
  }
}
