import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   
  users: User[] = [
    {
      name: "12564",
      username: "Juan",
      email: "Reyes"
    },
    {
      name: "12564",
      username: "Juan",
      email: "Reyes"
    }, 
  ];  

  constructor(private userService: UsersService,
    private router: Router ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  abrirCrearUsuario(){
    this.router.navigate(['/create']);
  }

}
