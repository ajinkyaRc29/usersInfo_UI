import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  skills: string[] =[".Net", "Angular", "Java", "HTML"];
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
    form.resetForm();
    this.userService.formData = {
      UserId: null,
      UserName: '',
      UserDOB: '',
      UserDesignation: '',
      UserSkills: ''
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.UserId == null) {
      this.addNewUser(form);
    } else {
      this.updateUser(form);
    }
    
  }
  updateUser(form: NgForm) {
    this.userService.putUser(form.value).subscribe(response => {
      this.resetForm(form);
      this.userService.getUserList();
    });
  }

  addNewUser(form: NgForm) {
    this.userService.postUser(form.value).subscribe(response => {
      this.resetForm(form);
      this.userService.getUserList();
    });
  }
}
