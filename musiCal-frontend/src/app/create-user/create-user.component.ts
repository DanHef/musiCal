import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { UserService } from "../common/user.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  firstname = new FormControl('');
  lastname = new FormControl('');
  email = new FormControl('');
  role = new FormControl('');

  constructor(private userService: UserService) { }

  ngOnInit() {
  }


  createUser() {
    this.userService.create({
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      email: this.email.value,
      role: <number> this.role.value
    });
  }

}
