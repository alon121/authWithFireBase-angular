import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  logout(){
    this.auth.googleLogoout().then(res => {
      this.router.navigate(['login'])
    }).catch(err => console.log(err))
  }
  ngOnInit(): void {
  }

}
