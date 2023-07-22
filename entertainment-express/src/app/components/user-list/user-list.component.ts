import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = []; // Initialize users as an empty array

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      console.log(users); // Check the response in the console
      this.users = users;
    });
  }
  

  editUser(user: User): void {
    // Implement the edit functionality here
  }

  deleteUser(user: User): void {
    // Implement the delete functionality here
  }
}
