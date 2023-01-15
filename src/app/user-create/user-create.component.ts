import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private userService: UsersService,
    private router: Router ) { }

  ngOnInit(): void {
  }


  onSubmit(){
    // console.log(this.userForm.value);

    const user:  User = this.userForm.value;

    this.userService.saveUser(user)
     .subscribe( resp => { 
      alert("Guardado existosamente");
      this.router.navigate(['/']);
    });
  }

}
