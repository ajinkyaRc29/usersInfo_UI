import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import { Users } from '../../shared/users.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUserList();
  }

  editUser(users: Users) {
    this.userService.formData = Object.assign({}, users);
  }

  deleteUser(id: number) {
    if (confirm('Do you want to delete this record?')) {
      this.userService.deleteUser(id).subscribe(response => {
        this.userService.getUserList();
      });
    }
  }
}
