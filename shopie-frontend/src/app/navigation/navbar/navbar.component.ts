import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor (private router: Router){}


  loggedInTrue = localStorage.getItem('loggedIn')

  loggedIn = this.loggedInTrue

  ngOnInit(): void {
  
  }

  checkLoggedIn(){

    console.log(this.loggedInTrue);
    if(this.loggedInTrue == 'true'){
     
    }
  }

  Logout(){
    
    this.router.navigate([''])
    localStorage.clear()

    console.log(localStorage.getItem('token'));
    
  }

  date = new Date()
}
